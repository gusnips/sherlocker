import { SherlockerError } from "./errors";
import type { paths } from "./schema";

const DEFAULT_BASE_URL = "https://221b-api.sherlocker.com.br/api/v1";

export type SherlockerFetch = (request: Request) => Promise<Response>;

export interface SherlockerConfig {
  /** Your Sherlocker API token. */
  token: string;
  /** `https://221b-api.sherlocker.com.br/api/v1` by default. */
  baseUrl?: string;
  fetch?: SherlockerFetch;
}

/** Pass `AbortSignal.timeout(30_000)` to stop waiting after 30 seconds. */
export interface CallOptions {
  signal?: AbortSignal;
  /**
   * Makes a repeated call safe: the same key with the same content gives the first answer back
   * and charges nothing more. The methods where Sherlocker requires a key ask for it. Make one
   * key per job, and reuse it when you try that job again.
   */
  idempotencyKey?: string;
  /** Sent as `x-request-id`. The engines (`analyses`, `operations`) repeat it in their errors, so support can find the call. */
  requestId?: string;
}

export type Method = "get" | "post" | "patch";

type Operation<P extends keyof paths, M extends Method> = NonNullable<
  paths[P][M]
>;

/** The values that fill the `{...}` parts of one endpoint's path. */
export type PathParams<P extends keyof paths, M extends Method> =
  Operation<P, M> extends { parameters: { path: infer T } } ? T : never;

/** The query string of one endpoint. */
export type Query<P extends keyof paths, M extends Method> =
  Operation<P, M> extends { parameters: { query?: infer T } }
    ? NonNullable<T>
    : never;

/** What one endpoint takes in its body. */
export type Body<P extends keyof paths, M extends Method> =
  Operation<P, M> extends { requestBody: { content: infer C } }
    ? C[keyof C]
    : never;

/** What one endpoint answers when the call works, as Sherlocker's OpenAPI files describe it. */
export type Data<P extends keyof paths, M extends Method> =
  Operation<P, M> extends { responses: infer R }
    ? {
        [S in (200 | 201 | 202) & keyof R]: R[S] extends {
          content: { "application/json": infer D };
        }
          ? D
          : never;
      }[(200 | 201 | 202) & keyof R]
    : never;

type FormFields = Record<string, Blob | string | undefined>;

interface Args {
  path?: Record<string, string>;
  query?: Record<string, unknown>;
  json?: unknown;
  form?: FormFields;
}

function readBody(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function fill(path: string, params: Record<string, string> = {}): string {
  return path.replace(/\{([^}]+)\}/g, (_, name: string) => {
    const value = params[name];
    if (value === undefined) throw new Error(`The path needs ${name}.`);
    return encodeURIComponent(value);
  });
}

// A missing value is left out.
function appendQuery(
  params: URLSearchParams,
  query: Record<string, unknown> | undefined,
): void {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined && value !== null)
      params.append(key, String(value));
  }
}

function toFormData(form: FormFields): FormData {
  const data = new FormData();
  for (const [key, value] of Object.entries(form)) {
    if (value !== undefined) data.append(key, value);
  }
  return data;
}

// ponytail: the answer's type comes from Sherlocker's OpenAPI files and is not checked at run
// time, as with openapi-fetch. Upgrade path: validate with a schema library if answers drift
// from the files.
export class Transport {
  constructor(private readonly config: SherlockerConfig) {}

  async send<P extends keyof paths, M extends Method>(
    method: M,
    path: P,
    args: Args,
    options?: CallOptions,
  ): Promise<Data<P, M>> {
    const response = await this.call(method, path, args, options);
    const text = await response.text();
    try {
      return JSON.parse(text);
    } catch {
      throw new SherlockerError(response.status, text, {
        message: "Sherlocker answered with something that is not JSON.",
      });
    }
  }

  /** For the endpoint that answers with a file. Read the file from the response. */
  download<P extends keyof paths, M extends Method>(
    method: M,
    path: P,
    args: Args,
    options?: CallOptions,
  ): Promise<Response> {
    return this.call(method, path, args, options);
  }

  private async call(
    method: Method,
    path: string,
    args: Args,
    options?: CallOptions,
  ): Promise<Response> {
    const base = (this.config.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
    const url = new URL(`${base}${fill(path, args.path)}`);
    appendQuery(url.searchParams, args.query);

    const headers = new Headers({
      Accept: "application/json",
      Authorization: `Bearer ${this.config.token}`,
    });
    if (options?.idempotencyKey) {
      headers.set("Idempotency-Key", options.idempotencyKey);
    }
    if (options?.requestId) headers.set("x-request-id", options.requestId);
    let body: string | FormData | undefined;
    if (args.json !== undefined) {
      headers.set("Content-Type", "application/json");
      body = JSON.stringify(args.json);
    } else if (args.form) {
      body = toFormData(args.form);
    }

    const request = new Request(url, {
      method: method.toUpperCase(),
      headers,
      body,
      signal: options?.signal,
    });
    const response = await (this.config.fetch ?? fetch)(request);
    if (!response.ok) {
      throw new SherlockerError(
        response.status,
        readBody(await response.text()),
        {
          retryAfter: response.headers.get("retry-after"),
        },
      );
    }
    return response;
  }
}
