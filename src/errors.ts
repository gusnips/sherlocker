export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Sherlocker answers errors in three shapes, depending on which service takes the call:
//   { code, title, detail, errors? }   the engines and the platform (RFC 7807, problem+json)
//   { erro: { codigo, mensagem } }     what its integration guide documents
//   { message, error, statusCode }     the older routes behind the NestJS server
// A string is the reason in its own words.
function problemText(body: Record<string, unknown>): string | undefined {
  const { detail, title, errors } = body;
  const text = typeof detail === "string" ? detail : title;
  if (typeof text !== "string") return undefined;
  if (!Array.isArray(errors)) return text;
  const fields = errors
    .filter(isRecord)
    .map((item) => `${String(item.field)}: ${String(item.message)}`);
  return fields.length ? `${text} ${fields.join("; ")}` : text;
}

function messageText(body: unknown): string | undefined {
  if (typeof body === "string") return body || undefined;
  if (!isRecord(body)) return undefined;
  if (isRecord(body.erro) && typeof body.erro.mensagem === "string") {
    return body.erro.mensagem;
  }
  const { message } = body;
  if (typeof message === "string") return message;
  if (Array.isArray(message)) return message.join("; ") || undefined;
  return problemText(body);
}

// "unauthorized" and "insufficient_tokens" from the engines, "NOT_FOUND" from the older routes.
function errorCode(body: unknown): string | undefined {
  if (!isRecord(body)) return undefined;
  if (typeof body.code === "string") return body.code;
  if (isRecord(body.erro) && typeof body.erro.codigo === "string") {
    return body.erro.codigo;
  }
  return undefined;
}

export class SherlockerError extends Error {
  readonly status: number;
  /** A stable name for the error, like `insufficient_tokens`. Not every error has one. */
  readonly code: string | undefined;
  readonly body: unknown;
  /** Seconds to wait before the next call, when Sherlocker sent a Retry-After header. */
  readonly retryAfter: number | undefined;

  constructor(
    status: number,
    body: unknown,
    init: { retryAfter?: string | null; message?: string } = {},
  ) {
    super(
      init.message ??
        messageText(body) ??
        `Sherlocker request failed (HTTP ${status}). Check the request and your token.`,
    );
    this.name = "SherlockerError";
    this.status = status;
    this.code = errorCode(body);
    this.body = body;
    const seconds = Number(init.retryAfter);
    this.retryAfter =
      init.retryAfter && Number.isFinite(seconds) ? seconds : undefined;
  }
}
