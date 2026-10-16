import { describe, expect, test } from "bun:test";
import { SherlockerClient } from "./client";
import { SherlockerError } from "./errors";
import type { SherlockerFetch } from "./http";

function json(
  body: unknown,
  status = 200,
  headers: HeadersInit = {},
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });
}

function mockFetch(handler: (request: Request) => Response) {
  const requests: Request[] = [];
  const fetch: SherlockerFetch = async (request) => {
    requests.push(request.clone());
    return handler(request);
  };
  return { fetch, requests };
}

function clientFor(handler: (request: Request) => Response) {
  const mock = mockFetch(handler);
  const sherlocker = new SherlockerClient({
    token: "slhk_test",
    fetch: mock.fetch,
  });
  return { sherlocker, requests: mock.requests };
}

describe("SherlockerClient", () => {
  test("sends the token as a Bearer header and fills the path", async () => {
    const { sherlocker, requests } = clientFor(() => json({}));

    await sherlocker.pessoas.getByCpf("123.456.789-01", { realtime: true });
    await sherlocker.pessoas.getByEmail("ana+teste@exemplo.com");

    const first = new URL(requests[0].url);
    expect(requests[0].method).toBe("GET");
    expect(requests[0].headers.get("authorization")).toBe("Bearer slhk_test");
    expect(first.origin + first.pathname).toBe(
      "https://221b-api.sherlocker.com.br/api/v1/pessoas/cpf/123.456.789-01",
    );
    expect(Object.fromEntries(first.searchParams)).toEqual({
      realtime: "true",
    });
    expect(new URL(requests[1].url).pathname).toBe(
      "/api/v1/pessoas/email/ana%2Bteste%40exemplo.com",
    );
  });

  test("takes only a token and leaves out query values that are missing", async () => {
    const mock = mockFetch(() => json({}));
    const sherlocker = new SherlockerClient("slhk_short");
    expect(sherlocker.empresas).toBeDefined();

    const withFetch = new SherlockerClient({
      token: "slhk_x",
      fetch: mock.fetch,
    });
    await withFetch.empresas.getFuncionariosByCnpj("11222333000181", {
      limit: 10,
      offset: undefined,
    });

    const url = new URL(mock.requests[0].url);
    expect(Object.fromEntries(url.searchParams)).toEqual({ limit: "10" });
  });

  test("types the answer from the spec", async () => {
    const { sherlocker } = clientFor(() =>
      json({ documento: "123.456.789-01", nome_completo: "Maria Souza" }),
    );

    const pessoa = await sherlocker.pessoas.getByCpf("12345678901");

    const name: string | undefined = pessoa.nome_completo;
    expect(name).toBe("Maria Souza");
  });

  test("reaches the endpoints and filters that the vendor's OpenAPI files lack", async () => {
    const { sherlocker, requests } = clientFor((request) =>
      new URL(request.url).pathname.endsWith("/perfis")
        ? json({ job_id: "j1", status: "processando" }, 202)
        : json({
            documento: "12345678000195",
            tipo_documento: "cnpj",
            modulos: [{ modulo: "ibama", status: "ok", irregularidades: [] }],
          }),
    );

    const regularidade = await sherlocker.regularidade.getByCnpj(
      "12345678000195",
      { modulos: "ibama,protestos" },
    );
    await sherlocker.regularidade.getByCpf("12345678901", { nome: "Ana" });
    await sherlocker.processos.getByCpf("12345678901", {
      classes: "Execução Fiscal",
      include_movements: "false",
    });
    await sherlocker.pessoas.getEmpregosByCpf("12345678901", { limit: 10 });
    const job = await sherlocker.perfis.create({
      documento: "12345678901",
      perfil_id: "p1",
      tipos_vinculo: ["documento", "nome"],
    });

    const modulo: string | undefined = regularidade.modulos?.[0]?.modulo;
    expect(modulo).toBe("ibama");
    expect(new URL(requests[0].url).pathname).toBe(
      "/api/v1/regularidade/cnpj/12345678000195",
    );
    expect(Object.fromEntries(new URL(requests[0].url).searchParams)).toEqual({
      modulos: "ibama,protestos",
    });
    expect(new URL(requests[1].url).searchParams.get("nome")).toBe("Ana");
    expect(Object.fromEntries(new URL(requests[2].url).searchParams)).toEqual({
      classes: "Execução Fiscal",
      include_movements: "false",
    });
    expect(new URL(requests[3].url).searchParams.get("limit")).toBe("10");
    expect(requests[4].method).toBe("POST");
    expect(await requests[4].json()).toEqual({
      documento: "12345678901",
      perfil_id: "p1",
      tipos_vinculo: ["documento", "nome"],
    });
    expect(job.job_id).toBe("j1");
  });

  test("makes you pick an idempotency key where Sherlocker requires one", async () => {
    const { sherlocker, requests } = clientFor(() =>
      json({ id: "a1", status: "pending" }, 202),
    );
    const key = "0b0f1a52-5a61-4f1a-9a52-3f9d6e0a7a11";

    const analysis = await sherlocker.analyses.create(
      { document: "12345678000195" },
      { idempotencyKey: key, requestId: "job-7" },
    );
    // @ts-expect-error A second try of the same job needs the same key, so you have to give one.
    await sherlocker.analyses.create({ document: "12345678000195" });

    const id: string = analysis.id;
    expect(id).toBe("a1");
    expect(requests[0].method).toBe("POST");
    expect(requests[0].headers.get("content-type")).toBe("application/json");
    expect(requests[0].headers.get("idempotency-key")).toBe(key);
    expect(requests[0].headers.get("x-request-id")).toBe("job-7");
    expect(await requests[0].json()).toEqual({ document: "12345678000195" });
    expect(requests[1].headers.get("idempotency-key")).toBeNull();
  });

  test("sends a file upload as multipart", async () => {
    const { sherlocker, requests } = clientFor(() =>
      json({ operation_id: "o1", status: "queued" }, 202),
    );
    const file = new File(["0".repeat(444)], "remessa.REM");

    await sherlocker.operations.create(
      { file, cedente_cnpj: "12345678000195" },
      { signal: AbortSignal.timeout(5_000) },
    );

    const form = await requests[0].formData();
    expect(requests[0].headers.get("content-type")).toContain(
      "multipart/form-data",
    );
    expect(form.get("cedente_cnpj")).toBe("12345678000195");
    expect((form.get("file") as File).name).toBe("remessa.REM");
    expect(requests[0].headers.get("idempotency-key")).toBeNull();
  });

  test("hands back the file for the one endpoint that answers with one", async () => {
    const { sherlocker } = clientFor(
      () =>
        new Response("%PDF-1.7", {
          headers: { "Content-Type": "application/pdf" },
        }),
    );

    const pdf = await sherlocker.certidoes.baixarPdf("c1");

    expect(await pdf.text()).toBe("%PDF-1.7");
  });

  test("reads an engine error (problem+json) and its code", async () => {
    const body = {
      type: "https://docs.sherlocker.com.br/problems/insufficient_tokens",
      title: "Insufficient tokens",
      status: 402,
      code: "insufficient_tokens",
      detail: "The workspace balance is lower than the cost.",
      required: 15,
      balance: 3,
    };
    const { sherlocker, requests } = clientFor(() => json(body, 402));

    const error = await sherlocker.analyses
      .create({ document: "12345678000195" }, { idempotencyKey: "k1" })
      .catch((caught) => caught);

    expect(error).toBeInstanceOf(SherlockerError);
    expect(error.status).toBe(402);
    expect(error.code).toBe("insufficient_tokens");
    expect(error.message).toBe("The workspace balance is lower than the cost.");
    expect(error.body).toEqual(body);
    expect(requests).toHaveLength(1);
  });

  test("names the fields Sherlocker rejects (400)", async () => {
    const { sherlocker } = clientFor(() =>
      json(
        {
          code: "validation_error",
          title: "Validation Error",
          detail: "One or more fields failed validation.",
          errors: [
            { field: "document", message: "document should not be empty" },
          ],
        },
        400,
      ),
    );

    const error = await sherlocker.analyses
      .create({ document: "" }, { idempotencyKey: "k1" })
      .catch((caught) => caught);

    expect(error.message).toBe(
      "One or more fields failed validation. document: document should not be empty",
    );
  });

  test("reads the other two error shapes", async () => {
    const erro = clientFor(() =>
      json(
        {
          success: false,
          erro: { codigo: "NOT_FOUND", mensagem: "CPF nao encontrado" },
        },
        404,
      ),
    );
    const nest = clientFor(() =>
      json(
        {
          message: "Invalid or missing token",
          error: "Unauthorized",
          statusCode: 401,
        },
        401,
      ),
    );

    const notFound = await erro.sherlocker.pessoas
      .getByCpf("1")
      .catch((caught) => caught);
    const unauthorized = await nest.sherlocker.pessoas
      .getByCpf("1")
      .catch((caught) => caught);

    expect(notFound.code).toBe("NOT_FOUND");
    expect(notFound.message).toBe("CPF nao encontrado");
    expect(unauthorized.status).toBe(401);
    expect(unauthorized.code).toBeUndefined();
    expect(unauthorized.message).toBe("Invalid or missing token");
  });

  test("tells you how long to wait on a 429, and does not retry", async () => {
    const { sherlocker, requests } = clientFor(() =>
      json({}, 429, { "Retry-After": "12" }),
    );

    const error = await sherlocker.pessoas
      .getByCpf("12345678901")
      .catch((caught) => caught);

    expect(error.status).toBe(429);
    expect(error.retryAfter).toBe(12);
    expect(error.message).toBe(
      "Sherlocker request failed (HTTP 429). Check the request and your token.",
    );
    expect(requests).toHaveLength(1);
  });

  test("throws when a good answer is not JSON", async () => {
    const { sherlocker } = clientFor(
      () => new Response("<html>", { status: 200 }),
    );

    const error = await sherlocker.pessoas
      .getByCpf("1")
      .catch((caught) => caught);

    expect(error).toBeInstanceOf(SherlockerError);
    expect(error.message).toBe(
      "Sherlocker answered with something that is not JSON.",
    );
  });
});
