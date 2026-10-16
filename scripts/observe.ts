// Calls the live Sherlocker API with test documents and compares each real answer with openapi.json.
// It prints paths and types only, never values.
//
//   SHERLOCKER_TOKEN=... bun run observe [--only <text in the path, comma separated>] [--patches]
//
// The CNPJ is Petrobras, a public company. For the person endpoints, set SHERLOCKER_TEST_CPF to a
// CPF you may query; without it they are skipped. /escrituras starts a paid live query, so it only
// runs with --only escrituras. --patches prints the "patches" scripts/overlay.json would need to
// add the fields the vendor files lack.
import { readFileSync } from "node:fs";

type Json = null | boolean | number | string | Json[] | { [key: string]: Json };
type JsonObject = { [key: string]: Json };

function isObject(value: Json | undefined): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isCpf(value: string): boolean {
  const digits = [...value].map(Number);
  if (digits.length !== 11 || digits.some(Number.isNaN)) return false;
  const check = (length: number) => {
    const sum = digits
      .slice(0, length)
      .reduce((total, digit, i) => total + digit * (length + 1 - i), 0);
    return ((sum * 10) % 11) % 10;
  };
  return check(9) === digits[9] && check(10) === digits[10];
}

const token = process.env.SHERLOCKER_TOKEN;
if (!token) throw new Error("Set SHERLOCKER_TOKEN.");
const cpf = process.env.SHERLOCKER_TEST_CPF;
if (cpf && !isCpf(cpf))
  throw new Error("SHERLOCKER_TEST_CPF is not a valid CPF.");
const CNPJ = "33000167000101";
const BASE_URL = "https://221b-api.sherlocker.com.br/api/v1";
const args = process.argv.slice(2);
const only = args.includes("--only")
  ? args[args.indexOf("--only") + 1].split(",")
  : [];
const spec: JsonObject = JSON.parse(readFileSync("openapi.json", "utf8"));

// A schema together with its JSON pointer, so a finding says where a patch goes.
interface Node {
  schema: JsonObject;
  ptr: string;
}

function at(pointer: string): JsonObject {
  let current: Json | undefined = spec;
  for (const part of pointer.replace(/^#\//, "").split("/")) {
    const key = part.replaceAll("~1", "/").replaceAll("~0", "~");
    current = isObject(current) ? current[key] : undefined;
  }
  if (!isObject(current)) throw new Error(`No schema at ${pointer}.`);
  return current;
}

function resolve(node: Node): Node {
  let { schema, ptr } = node;
  while (typeof schema.$ref === "string") {
    ptr = schema.$ref;
    schema = at(ptr);
  }
  return { schema, ptr };
}

function parts(node: Node): Node[] {
  const { schema, ptr } = resolve(node);
  const combined = ["allOf", "oneOf", "anyOf"].flatMap((key) => {
    const list = schema[key];
    return Array.isArray(list)
      ? list.map((item, i) => ({
          schema: isObject(item) ? item : {},
          ptr: `${ptr}/${key}/${i}`,
        }))
      : [];
  });
  return [{ schema, ptr }, ...combined.flatMap(parts)];
}

function typesOf(node: Node): { types: Set<string>; nullable: boolean } {
  const types = new Set<string>();
  let nullable = false;
  for (const { schema } of parts(node)) {
    if (typeof schema.type === "string") {
      types.add(schema.type === "integer" ? "number" : schema.type);
    }
    nullable ||= schema.nullable === true;
    if (isObject(schema.properties)) types.add("object");
    if (isObject(schema.items)) types.add("array");
  }
  return { types, nullable };
}

function propertiesOf(node: Node): {
  props: Map<string, Node>;
  open: boolean;
  target: string;
} {
  const props = new Map<string, Node>();
  let open = false;
  let target = resolve(node).ptr;
  for (const part of parts(node)) {
    const { properties, additionalProperties } = part.schema;
    open ||= additionalProperties === true || isObject(additionalProperties);
    if (!isObject(properties)) continue;
    if (props.size === 0) target = part.ptr;
    for (const [key, value] of Object.entries(properties)) {
      props.set(key, {
        schema: isObject(value) ? value : {},
        ptr: `${part.ptr}/properties/${key}`,
      });
    }
  }
  return { props, open, target };
}

function itemsOf(node: Node): Node | undefined {
  for (const part of parts(node)) {
    if (isObject(part.schema.items)) {
      return { schema: part.schema.items, ptr: `${part.ptr}/items` };
    }
  }
  return undefined;
}

function kindOf(value: Json): string {
  if (value === null) return "null";
  return Array.isArray(value) ? "array" : typeof value;
}

// ── What a real answer looks like, as an OpenAPI schema ────────────────────────────────────────

function merge(a: JsonObject, b: JsonObject): JsonObject {
  const merged: JsonObject = { ...b, ...a };
  if (a.nullable || b.nullable) merged.nullable = true;
  if (isObject(a.properties) || isObject(b.properties)) {
    const left = isObject(a.properties) ? a.properties : {};
    const right = isObject(b.properties) ? b.properties : {};
    merged.properties = Object.fromEntries(
      [...new Set([...Object.keys(left), ...Object.keys(right)])].map((key) => {
        const l = left[key];
        const r = right[key];
        return [key, isObject(l) && isObject(r) ? merge(l, r) : (l ?? r ?? {})];
      }),
    );
  }
  if (isObject(a.items) && isObject(b.items)) {
    merged.items = merge(a.items, b.items);
  }
  return merged;
}

function infer(value: Json): JsonObject {
  if (value === null) return { nullable: true };
  if (Array.isArray(value)) {
    const items = value.filter((item) => item !== null).map(infer);
    return {
      type: "array",
      items: items.length ? items.reduce(merge) : {},
    };
  }
  if (isObject(value)) {
    const keys = Object.keys(value);
    // An empty object says nothing about its fields, so it stays open.
    if (keys.length === 0)
      return { type: "object", additionalProperties: true };
    // Ids and years as keys make a map, not a fixed set of fields.
    const isMap = keys.length > 15 || keys.every((key) => /^\d+$/.test(key));
    if (isMap) {
      return {
        type: "object",
        additionalProperties: Object.values(value).map(infer).reduce(merge),
      };
    }
    return {
      type: "object",
      properties: Object.fromEntries(keys.map((k) => [k, infer(value[k])])),
    };
  }
  return { type: typeof value };
}

// ── Compare ────────────────────────────────────────────────────────────────────────────────

interface Finding {
  kind: "undocumented" | "null" | "type";
  path: string;
  ptr: string;
  detail: string;
}
const patches = new Map<string, JsonObject>();

function patch(ptr: string): JsonObject {
  const entry = patches.get(ptr) ?? { at: ptr };
  patches.set(ptr, entry);
  return entry;
}

const MAX_ITEMS = 300;

function walk(value: Json, node: Node, path: string, found: Finding[]): void {
  const { types, nullable } = typesOf(node);
  const kind = kindOf(value);
  const ptr = resolve(node).ptr;
  if (types.size === 0) return; // free-form
  if (value === null) {
    if (!nullable) {
      found.push({ kind: "null", path, ptr, detail: "" });
      patch(node.ptr).nullable = true; // the property itself, not the schema it points to
    }
    return;
  }
  if (!types.has(kind)) {
    found.push({
      kind: "type",
      path,
      ptr,
      detail: `${kind}, schema says ${[...types].join("|")}`,
    });
    return;
  }
  if (Array.isArray(value)) {
    const items = itemsOf(node);
    if (items) {
      for (const item of value.slice(0, MAX_ITEMS)) {
        walk(item, items, `${path}[]`, found);
      }
    }
    return;
  }
  if (!isObject(value)) return;
  const { props, open, target } = propertiesOf(node);
  for (const [key, child] of Object.entries(value)) {
    const known = props.get(key);
    if (known) {
      walk(child, known, `${path}.${key}`, found);
    } else if (!open) {
      found.push({
        kind: "undocumented",
        path: `${path}.${key}`,
        ptr: target,
        detail: String(infer(child).type ?? "null"),
      });
      const entry = patch(target);
      const added = isObject(entry.properties) ? entry.properties : {};
      const seen = added[key];
      const next = infer(child);
      added[key] = isObject(seen) ? merge(seen, next) : next;
      entry.properties = added;
    }
  }
}

// ── Calls ──────────────────────────────────────────────────────────────────────────────────

const EXTRA_QUERY: Record<string, string> = {
  "/documentos/busca": "?query=PETROBRAS",
  "/processos/nome": "?nome=PETROBRAS",
};
const PLACEHOLDER = /\{(\w+)\}/g;

function fill(template: string): string | undefined {
  let usable = true;
  const path = template.replace(PLACEHOLDER, (_, name: string) => {
    if (name === "cnpj" || name === "documento") return CNPJ;
    if (name === "cpf" && cpf) return cpf;
    usable = false;
    return "";
  });
  return usable ? `${path}${EXTRA_QUERY[template] ?? ""}` : undefined;
}

async function get(path: string): Promise<{ status: number; body: Json }> {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { authorization: `Bearer ${token}` },
  });
  const text = await response.text();
  try {
    return { status: response.status, body: JSON.parse(text) };
  } catch {
    return { status: response.status, body: null };
  }
}

const paths = spec.paths;
if (!isObject(paths)) throw new Error("openapi.json has no paths.");
let drifted = 0;
for (const [template, item] of Object.entries(paths)) {
  if (!isObject(item) || !isObject(item.get)) continue;
  const skipped = only.length
    ? !only.some((text) => template.includes(text))
    : template.startsWith("/escrituras/");
  if (skipped) continue;
  const path = fill(template);
  if (!path) continue;
  const { status, body } = await get(path);
  const found: Finding[] = [];
  const ok = item.get.responses;
  const schema =
    isObject(ok) && isObject(ok["200"]) && isObject(ok["200"].content)
      ? (ok["200"].content["application/json"] ?? null)
      : null;
  // A 200 that only carries `erro` or `error` is a refusal, not an answer to compare.
  const refusal =
    isObject(body) &&
    Object.keys(body).length <= 2 &&
    ("erro" in body || "error" in body);
  if (refusal) console.log("    answered with an error, not compared");
  if (
    status === 200 &&
    !refusal &&
    isObject(schema) &&
    isObject(schema.schema)
  ) {
    const ptr = `#/paths/${template.replaceAll("/", "~1")}/get/responses/200/content/application~1json/schema`;
    walk(body, { schema: schema.schema, ptr }, "$", found);
  }
  const unique = [
    ...new Set(found.map((f) => `${f.kind} ${f.path} ${f.detail}`.trim())),
  ];
  drifted += unique.length ? 1 : 0;
  console.log(`${status} ${template}${unique.length ? "" : "  matches"}`);
  for (const line of unique.slice(0, 30)) console.log(`    ${line}`);
  await new Promise((done) => setTimeout(done, 1100)); // 60 requests a minute is the limit
}
console.log(`\n${drifted} endpoints differ from openapi.json.`);
if (args.includes("--patches")) {
  console.log(JSON.stringify([...patches.values()], null, 2));
}
