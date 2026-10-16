// Merges the vendor's OpenAPI files into openapi.json, the one file scripts/generate.ts reads.
//
// Sherlocker publishes one file per module in github.com/Sherlocker-LTDA/sherlocker-docs, folder
// openapi/. Clone that repo and pass the folder:
//   git clone --depth 1 https://github.com/Sherlocker-LTDA/sherlocker-docs refs/sherlocker-docs
//   bun run spec refs/sherlocker-docs/openapi
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

type Json = null | boolean | number | string | Json[] | { [key: string]: Json };
type JsonObject = { [key: string]: Json };

function isObject(value: Json | undefined): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

interface Source {
  stem: string;
  paths: JsonObject;
  components: JsonObject;
}

interface Operation {
  source: Source;
  method: string;
  path: string;
  body: JsonObject;
}

const BASE_URL = "https://221b-api.sherlocker.com.br/api/v1";
const METHODS = ["get", "post", "put", "patch", "delete"];
const REF = /^#\/components\/([^/]+)\/(.+)$/;

const folder = process.argv[2];
if (!folder) {
  console.error(
    "Usage: bun run spec <folder with the vendor's openapi/*.json>",
  );
  process.exit(1);
}

const sources: Source[] = readdirSync(folder)
  .filter((file) => file.endsWith(".json"))
  .sort()
  .map((file) => {
    const doc: JsonObject = JSON.parse(
      readFileSync(join(folder, file), "utf8"),
    );
    const { paths, components } = doc;
    if (!isObject(paths) || !isObject(components)) {
      throw new Error(`${file} has no paths or components.`);
    }
    return { stem: basename(file, ".json"), paths, components };
  });

// The module files repeat each other: pessoas.json also lists /veiculos/cpf/{cpf}, with fewer
// parameters than veiculos.json. The file named after the first path segment is the one that owns
// the endpoint.
function pickOwner(path: string, owners: Operation[]): Operation {
  if (owners.length === 1) return owners[0];
  const first = path.split("/")[1];
  const owner = owners.filter(({ source }) => source.stem === first);
  if (owner.length !== 1) {
    const names = owners.map(({ source }) => source.stem).join(", ");
    throw new Error(`${path} is in ${names}, and none of them owns it.`);
  }
  return owner[0];
}

const found = new Map<string, Operation[]>();
for (const source of sources) {
  for (const [path, item] of Object.entries(source.paths)) {
    if (!isObject(item)) continue;
    for (const method of METHODS) {
      const body = item[method];
      if (!isObject(body)) continue;
      const key = `${method} ${path}`;
      const owners = found.get(key) ?? [];
      owners.push({ source, method, path, body });
      found.set(key, owners);
    }
  }
}
const operations = [...found.values()].map((owners) =>
  pickOwner(owners[0].path, owners),
);

// Every file has its own components, and some names mean different things: Page and Error in the
// platform files, Problem in the two engines. Collect what the chosen operations reach.
interface Component {
  source: Source;
  section: string;
  name: string;
  body: Json;
}

function refsIn(value: Json, found = new Set<string>()): Set<string> {
  if (Array.isArray(value)) {
    for (const item of value) refsIn(item, found);
  } else if (isObject(value)) {
    for (const [key, item] of Object.entries(value)) {
      if (key === "$ref" && typeof item === "string") found.add(item);
      else refsIn(item, found);
    }
  }
  return found;
}

function idOf(source: Source, section: string, name: string): string {
  return `${source.stem} ${section} ${name}`;
}

const reached = new Map<string, Component>();
function reach(source: Source, ref: string): void {
  const match = REF.exec(ref);
  if (!match)
    throw new Error(
      `${source.stem} has a $ref this script does not read: ${ref}`,
    );
  const [, section, name] = match;
  const id = idOf(source, section, name);
  if (reached.has(id)) return;
  const group = source.components[section];
  const body = isObject(group) ? group[name] : undefined;
  if (body === undefined) throw new Error(`${source.stem} has no ${ref}.`);
  reached.set(id, { source, section, name, body });
  for (const next of refsIn(body)) reach(source, next);
}
for (const { source, body } of operations) {
  for (const ref of refsIn(body)) reach(source, ref);
}

// A name keeps its own spelling when every file that uses it agrees. Otherwise each file's copy
// gets the file's name in front: MotorAnaliseProblem and MotorCreditoProblem.
function pascalCase(text: string): string {
  return text
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
}

const byName = new Map<string, Component[]>();
for (const component of reached.values()) {
  const key = `${component.section} ${component.name}`;
  byName.set(key, [...(byName.get(key) ?? []), component]);
}
const finalName = new Map<Component, string>();
for (const copies of byName.values()) {
  const same = copies.every(
    ({ body }) => JSON.stringify(body) === JSON.stringify(copies[0].body),
  );
  for (const copy of copies) {
    const prefix = pascalCase(copy.source.stem.replace(/^plataforma-/, ""));
    finalName.set(copy, same ? copy.name : `${prefix}${copy.name}`);
  }
}

function nameFor(component: Component): string {
  const name = finalName.get(component);
  if (!name) throw new Error(`${component.name} was not named.`);
  return name;
}

function rename(source: Source, ref: string): string {
  const [, section, name] = REF.exec(ref) ?? [];
  const component = reached.get(idOf(source, section, name));
  if (!component) throw new Error(`${source.stem}: ${ref} was not collected.`);
  return `#/components/${section}/${nameFor(component)}`;
}

function rewrite(source: Source, value: Json): Json {
  if (Array.isArray(value)) return value.map((item) => rewrite(source, item));
  if (!isObject(value)) return value;
  const copy: JsonObject = {};
  for (const [key, item] of Object.entries(value)) {
    copy[key] =
      key === "$ref" && typeof item === "string"
        ? rename(source, item)
        : rewrite(source, item);
  }
  return copy;
}

const paths: JsonObject = {};
for (const { source, method, path, body } of operations) {
  const item = isObject(paths[path]) ? paths[path] : {};
  // The token goes in the Authorization header on every call, so the file-level security
  // schemes (some files list ?token=) are replaced by one below.
  const { security: _security, ...rest } = body;
  paths[path] = { ...item, [method]: rewrite(source, rest) };
}

const sections = new Map<string, JsonObject>();
for (const component of [...reached.values()].sort((a, b) =>
  nameFor(a).localeCompare(nameFor(b)),
)) {
  const section = sections.get(component.section) ?? {};
  section[nameFor(component)] = rewrite(component.source, component.body);
  sections.set(component.section, section);
}
const components: JsonObject = {
  securitySchemes: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      description: "Authorization: Bearer <token>",
    },
  },
  ...Object.fromEntries(sections),
};

const commit = execFileSync("git", [
  "-C",
  folder,
  "rev-parse",
  "--short",
  "HEAD",
])
  .toString()
  .trim();
const spec: JsonObject = {
  openapi: "3.0.0",
  info: {
    title: "Sherlocker API",
    version: "1.0",
    description: `Merged by scripts/merge-spec.ts from Sherlocker-LTDA/sherlocker-docs, openapi/, commit ${commit}.`,
  },
  servers: [{ url: BASE_URL }],
  security: [{ bearerAuth: [] }],
  paths,
  components,
};
writeFileSync("openapi.json", `${JSON.stringify(spec, null, 2)}\n`);
console.log(
  `${operations.length} operations, ${reached.size} components from ${sources.length} files.`,
);
