# sherlocker

TypeScript client for the [Sherlocker](https://sherlocker.com.br) API. You send a CPF (a person's tax number in Brazil, 11 digits) or a CNPJ (a company's, 14 digits) and get back registry data, contacts, debts, vehicles, properties, lawsuits, public bids and more. Unofficial, not made by Sherlocker.

```bash
npm install sherlocker
# or
bun add sherlocker
```

## First call

```ts
import { SherlockerClient } from "sherlocker";

const sherlocker = new SherlockerClient("YOUR_TOKEN");

const company = await sherlocker.empresas.getByCnpj("11222333000181");

console.log(company.razao_social, company.situacao);
```

Ask Sherlocker for a token. Keep it on your server and out of the browser: Sherlocker says never to put it in a public repo or in client code.

The client sends the token for you, as `Authorization: Bearer YOUR_TOKEN`. You never pass it to a method.

Send a CPF or CNPJ as digits only, like `12345678901`. Some endpoints also take the dots and dashes, but Sherlocker says so per endpoint and not all of them do.

## Finding the method you need

Each endpoint is one method. The group is the first word of the path. The method is the name Sherlocker gives the operation in its OpenAPI files, without the words that repeat the group:

| Sherlocker endpoint                            | In the SDK                                              |
| ---------------------------------------------- | ------------------------------------------------------- |
| `GET /pessoas/cpf/{cpf}`                       | `sherlocker.pessoas.getByCpf(cpf)`                      |
| `GET /pessoas/cpf/{cpf}/enderecos`             | `sherlocker.pessoas.getEnderecosByCpf(cpf)`             |
| `GET /empresas/cnpj/{cnpj}/funcionarios`       | `sherlocker.empresas.getFuncionariosByCnpj(cnpj)`       |
| `GET /pessoas/telefone/{telefone}`             | `sherlocker.pessoas.findByTelefone(telefone)`           |
| `GET /veiculos/placa/{placa}`                  | `sherlocker.veiculos.getByPlaca(placa)`                 |
| `GET /perfil/patrimonial/cnpj/{cnpj}`          | `sherlocker.perfil.patrimonialCnpj(cnpj)`               |
| `GET /processos/numero/{numero}/movimentacoes` | `sherlocker.processos.getMovimentacoesByNumero(numero)` |

The values in `{...}` are the first arguments, in the order they appear in the URL. The query string comes next, as an object, then the options.

```ts
const processes = await sherlocker.processos.getByCpf("12345678901", {
  limit: 50,
  tipos_vinculo: "documento,nome",
});
```

Groups (106 methods: 100 from the OpenAPI files at commit `e41836d` of Sherlocker's docs, and 6 added by hand, see [What is not in it](#what-is-not-in-it)): `empresas` (10), `monitors` (9), `processos` (8), `dossies` (6), `pessoas` (5), `lente` (5), `certidoes` (4), `perfil` (4), `rastro` (4), `veiculos` (3), `escrituras` (3), `listasRestritivas` (3), `operations` (3), `registro` (3), `rural` (3), and two each for `aeronaves`, `beneficios`, `dividas`, `doacoesPoliticas`, `dominios`, `imoveis`, `patentes`, `licitacoes`, `analyses`, `nfe`, `telefones`, `emails`, `enderecos`, `perfis` and `regularidade`. `documentos`, `trabalhista` and `renda` have one each.

Hover a method in your editor to read what it does, in Sherlocker's own words (Portuguese). Your editor lists the parameters and marks the required ones.

## Search without a CPF

Most endpoints start from a CPF or CNPJ. These start from something else:

| You have                                                                            | Method                                                                                        |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| A phone number                                                                      | `pessoas.findByTelefone(telefone)`, `empresas.getByTelefone(telefone)`                        |
| An email                                                                            | `pessoas.getByEmail(email)`, `empresas.getByEmail(email)`                                     |
| A phone, email or CPF, to get digital, shopping and bank traces                     | `registro.getPorTelefone(telefone)`, `registro.getPorEmail(email)`, `registro.getPorCpf(cpf)` |
| A license plate                                                                     | `veiculos.getByPlaca(placa)`                                                                  |
| Words to find in public documents, like official gazettes                           | `documentos.search({ query: "..." })`                                                         |
| A name, to find where it appears in official gazettes (São Paulo's and the courts') | `documentos.search({ query: "JOAO SILVA SANTOS" })`                                           |
| A name, to find lawsuits                                                            | `processos.getByNome({ nome: "Maria Souza" })`                                                |
| A lawsuit number                                                                    | `processos.getByNumero(numero)`                                                               |
| An invoice access key (44 digits)                                                   | `nfe.getNfeByChave(chave)`                                                                    |
| A CPF, to list the companies where the person is a partner                          | `empresas.getSociedadesByCpf(cpf)`                                                            |
| A CPF or CNPJ, to check the restrictive lists                                       | `listasRestritivas.getByDocumento(documento)`                                                 |
| An email, phone number, username or crypto wallet                                   | `rastro.createSearch(body, { idempotencyKey })`, then `rastro.getSearch(id)`                  |

The last one is a job: Sherlocker answers 202 and you read the result later with `rastro.getSearch`.

There is no search by address. An address is only a field of the answer for a CPF or CNPJ (`pessoas.getEnderecosByCpf`, `enderecos.getByCnpj`). A search by name does not return a list of people. It returns the gazette posts and the lawsuits that mention the name, and a name can have namesakes, so confirm with a CPF or CNPJ before you decide anything.

## What you get back

Each method returns what Sherlocker's OpenAPI files say it returns, with every field typed. A field the files do not mark as required can be missing, so check it before you use it.

Sherlocker's data standard says an empty value is `null`, never `""`, and that CPF and CNPJ come back with their mask (`918.050.406-00`). See [docs.sherlocker.com.br/padrao-de-dados](https://docs.sherlocker.com.br/padrao-de-dados).

## Tokens

Sherlocker charges tokens for most queries. Some are free. The price of each one is on [docs.sherlocker.com.br/custos](https://docs.sherlocker.com.br/custos). When your balance is too low, the call fails with status 402.

## Jobs that take time

Some calls start a job and answer at once with an id. You ask for the result later. Sherlocker's descriptions say so for `analyses`, `operations`, `certidoes`, `escrituras` and `dossies`.

An **idempotency key** is any unique string, like a UUID. If you send the same key and the same content again within 24 hours, Sherlocker gives the first answer back and does not charge a second time. Where Sherlocker requires one (`analyses.create`, `dossies.create`, `monitors.create` and a few more), the method asks for it in the last argument, and your editor will not let you skip it:

```ts
const key = crypto.randomUUID(); // save it with your own job

const analysis = await sherlocker.analyses.create(
  { document: "12345678000195" },
  { idempotencyKey: key },
);

let result = await sherlocker.analyses.get(analysis.id);
while (result.status === "pending" || result.status === "running") {
  const seconds = result.poll_after_seconds ?? 2;
  await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  result = await sherlocker.analyses.get(analysis.id);
}

console.log(result.status, result.verdict);
```

When a call times out or fails with a 5xx, send it again with the **same** key. A new key is a new charge. When Sherlocker rejects the content (a 4xx), fix it and use a **new** key: the old key stays tied to the old content, and Sherlocker answers 409 `idempotency_conflict`.

`analyses` and `operations` are in beta at Sherlocker. Your workspace needs the `analysis_engine` feature, and CPF analyses also need `analysis_engine_pf`. Without it the call fails with 403 `feature_not_enabled`.

CPF analyses take a `legal_basis` and a `purpose`. Sherlocker writes them in its audit log, for the LGPD.

## Files

`operations.create` uploads a CNAB 400 file. Pass a `File` (Node 20 and newer have one) or a `Blob`:

```ts
import { readFile } from "node:fs/promises";

const file = new File([await readFile("remessa.REM")], "remessa.REM");

const operation = await sherlocker.operations.create(
  {
    file,
    cedente_cnpj: "12345678000195",
  },
  { idempotencyKey: crypto.randomUUID() },
);
```

`certidoes.baixarPdf` answers with the file itself, so it returns a `Response`. Read the bytes from it:

```ts
const pdf = await sherlocker.certidoes.baixarPdf(certidaoId);
await writeFile("certidao.pdf", Buffer.from(await pdf.arrayBuffer()));
```

## Errors

A failed call throws `SherlockerError`. It has the HTTP `status`, a `code` when Sherlocker sends one, the raw `body`, and a `message`:

```ts
import { SherlockerError } from "sherlocker";

try {
  await sherlocker.pessoas.getByCpf("00000000000");
} catch (error) {
  if (error instanceof SherlockerError && error.status === 404) {
    // Sherlocker did not find it.
  }
  throw error;
}
```

| Status | Meaning                                                                       |
| ------ | ----------------------------------------------------------------------------- |
| 400    | A field is missing or wrong. The message names the fields.                    |
| 401    | The token is missing or wrong.                                                |
| 402    | Not enough tokens. For `analyses`, `error.body` has `required` and `balance`. |
| 403    | The token cannot use this resource, or the workspace lacks a feature.         |
| 404    | Not found.                                                                    |
| 409    | An idempotency key is in use with other content, or the result is not ready.  |
| 429    | Too many requests. `error.retryAfter` is the number of seconds to wait.       |
| 500    | Sherlocker failed. Its docs say to contact support.                           |

Sherlocker answers errors in three shapes, depending on the service behind the route. The client reads all three, so `message` and `code` work the same: `{ code, title, detail }` (the engines and the platform), `{ erro: { codigo, mensagem } }` (its integration guide) and `{ message, error, statusCode }` (the older routes). The `message` is Sherlocker's, so it is in whichever language Sherlocker used.

Network failures, like a lost connection, throw the error `fetch` gives you.

## Timeouts, rate limits and retries

A call waits as long as `fetch` waits. To stop after 30 seconds, pass a signal in the options, the last argument:

```ts
await sherlocker.pessoas.getEnderecosByCpf("12345678901", {
  signal: AbortSignal.timeout(30_000),
});
```

When the method also takes a query, the query comes first: `getByCnpj(cnpj, query, options)`.

Sherlocker limits calls per minute. Its docs say 60 on one page and 100 per IP on another. Past the limit you get 429.

The client never retries, so a retry never charges you twice without you choosing it. To retry, catch the error and wait `error.retryAfter` seconds. Or pass your own `fetch` that does it.

The engines (`analyses` and `operations`) take a `requestId` in the options. It goes out as `x-request-id`, and Sherlocker repeats it in the `instance` field of its errors, so support can find the call.

## Options

```ts
new SherlockerClient({
  token: "YOUR_TOKEN",
  baseUrl: "https://221b-api.sherlocker.com.br/api/v1", // the default
  fetch: myFetch, // takes a Request, returns a Response
});
```

The client has no runtime dependencies.

## What is not in it

The types come from Sherlocker's OpenAPI files. Those files are behind Sherlocker's live API, so `scripts/overlay.json` adds what the live API, its docs and its MCP server have and the files lack:

- `regularidade.getByCpf` and `regularidade.getByCnpj` (IBAMA, sanctions, Banco Central, protests).
- `perfis.create`, which starts the job that `perfis.getJobStatus` reads.
- The `classes`, `assuntos`, `areas`, `polos`, `include_movements` and `force` filters of `processos`, `limit` and `offset` on three `pessoas` endpoints, and `whatsapp` on `telefones.getByCnpj`.
- Three routes that only Sherlocker's docs name: `processos.getByNome` (the docs show the request, not the answer, so it is typed like `processos.getByCpf`), `processos.getJobResults` and `rural.getJob` (no answer type, you get a plain object).

Sherlocker publishes no response shape for these, so their types are best effort. The `regularidade` answer is typed from how a production app reads it, and no call was checked against a live response.

Some routes exist (they answer 401 without a token) but are not here, because only Sherlocker's MCP server lists them and nothing gives their answer: `GET /{module}/jobs/{jobId}` for `pessoas`, `empresas`, `veiculos`, `aeronaves`, `patentes`, `documentos`, `regularidade`, `trabalhista`, `nfe`, `dividas`, `beneficios`, `licitacoes` and `dominios`.

## Keeping it current

The methods and types are written by a script from `openapi.json`. Sherlocker publishes one OpenAPI file per module in [Sherlocker-LTDA/sherlocker-docs](https://github.com/Sherlocker-LTDA/sherlocker-docs). To update after the API changes:

```bash
git clone --depth 1 https://github.com/Sherlocker-LTDA/sherlocker-docs refs/sherlocker-docs
bun run spec refs/sherlocker-docs/openapi
bun run generate
```

`bun run spec` joins the files and `scripts/overlay.json` into `openapi.json`. Some modules list the same endpoint, so it keeps the one from the module named after the endpoint. The overlay adds a whole endpoint only when the files lack it, and only the missing parameters when they have it. `bun run generate` stops with an error if two endpoints end up with one name. Do not edit `src/schema.d.ts`, `src/client.ts` or `src/modules/`. The script rewrites them.

## License

MIT. Not affiliated with Sherlocker.
