export interface paths {
  "/aeronaves/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Aeronaves de uma pessoa
     * @description Retorna aeronaves e drones registrados em nome de uma pessoa fisica.
     */
    get: operations["getAeronavesByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/aeronaves/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Aeronaves de uma empresa
     * @description Retorna aeronaves e drones registrados em nome de uma empresa.
     */
    get: operations["getAeronavesByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/beneficios/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Beneficios sociais de uma pessoa
     * @description Retorna beneficios sociais recebidos: Auxilio Brasil, Bolsa Familia, BPC e Auxilio Emergencial.
     */
    get: operations["getBeneficiosByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/beneficios/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Renuncias fiscais de uma empresa
     * @description Retorna renuncias fiscais, habilitacoes e imunidades tributarias da empresa.
     */
    get: operations["getBeneficiosByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/certidoes/cnpj": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Emitir certidão de CNPJ
     * @description Inicia a consulta em tempo real dos dados oficiais de um CNPJ. A emissão é assíncrona; use o identificador retornado para acompanhar o resultado.
     */
    post: operations["emitirCertidaoCnpj"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/certidoes/trabalhista": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Emitir certidão trabalhista
     * @description Inicia a emissão em tempo real da Certidão Negativa de Débitos Trabalhistas (CNDT) para um CPF ou CNPJ.
     */
    post: operations["emitirCertidaoTrabalhista"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/certidoes/{certidaoId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Consultar certidão
     * @description Retorna o estado atual da emissão e, quando concluída, os dados estruturados ou o erro encontrado.
     */
    get: operations["consultarCertidao"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/certidoes/{certidaoId}/pdf": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Baixar PDF da certidão
     * @description Retorna o PDF de uma emissão concluída. Enquanto a certidão estiver em processamento, o documento ainda não estará disponível.
     */
    get: operations["baixarPdfCertidao"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/dividas/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Dívidas federais por CPF
     * @description Retorna dívidas na Dívida Ativa da União, FGTS e Previdenciária vinculadas ao CPF. Inscrições com o mesmo número são agrupadas como histórico.
     */
    get: operations["getDividasByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/dividas/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Dívidas federais por CNPJ
     * @description Retorna dívidas na Dívida Ativa da União, FGTS e Previdenciária vinculadas ao CNPJ.
     */
    get: operations["getDividasByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/doacoes-politicas/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Doações políticas de uma pessoa
     * @description Lista paginada das doações eleitorais declaradas ao TSE em que o CPF aparece como doador direto (origem = direta) ou doador originário de repasse intermediado (origem = originaria, com o intermediário que repassou), mais um resumo agregado. Os filtros se aplicam à página E ao total/resumo. Documento com dígito verificador inválido ou sem doações responde 200 com total 0 (crédito reembolsado automaticamente), nunca 400/404. Cobertura atual: eleições 2018, 2020, 2022 e 2024.
     */
    get: operations["getDoacoesPoliticasByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/doacoes-politicas/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Doações políticas de uma empresa
     * @description Mesmo contrato da consulta por CPF. Contexto legal: doações empresariais diretas foram legais até as eleições de 2014 (proibidas a partir de 2016, ADI 4650 + Lei 13.165/2015); nos anos cobertos atualmente (2018–2024), CNPJs doadores tendem a ser diretórios partidários, candidaturas e comitês, não empresas privadas. Os dados de doações de empresas (até 2014) chegam nas próximas fases de cobertura.
     */
    get: operations["getDoacoesPoliticasByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/documentos/busca": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Buscar em fontes publicas
     * @description Busca full-text em documentos publicos. Aceita CPF, CNPJ, nomes ou termos livres.
     */
    get: operations["searchDocumentos"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/dominios/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Dominios por CPF
     * @description Busca dominios registrados vinculados aos emails do CPF via reverse WHOIS. Cada dominio encontrado e enriquecido com lookup individual de WHOIS contendo dados do registrante e registrador.
     */
    get: operations["getDominiosByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/dominios/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Dominios por CNPJ
     * @description Busca dominios registrados vinculados aos emails da empresa via reverse WHOIS. Cada dominio e enriquecido com lookup individual de WHOIS.
     */
    get: operations["getDominiosByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/empresas/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Informações básicas
     * @description Retorna informações básicas da empresa: dados cadastrais, situação na Receita Federal, natureza jurídica, atividades (CNAEs), endereço, telefones, emails e quadro societário.
     */
    get: operations["getEmpresaByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/empresas/cnpj/{cnpj}/socios": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Quadro societario
     * @description Retorna socios e administradores com qualificacao, data de entrada e representante legal.
     */
    get: operations["getSociosByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/empresas/cnpj/{cnpj}/funcionarios": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Quadro de funcionarios
     * @description Retorna os funcionarios vinculados a uma empresa com cargo, funcao, remuneracao e situacao. Util para avaliar porte operacional.
     */
    get: operations["getFuncionariosByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/empresas/cnpj/{cnpj}/linha-do-tempo": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Linha do tempo da empresa
     * @description Cronologia reversa (mais recente primeiro) de eventos e alteracoes cadastrais da empresa: entrada/saida de socio, capital, situacao, razao social, endereco, CNAE e Simples/MEI. Cada resposta traz um mapa de cobertura (a partir de quando a base e confiavel). Custo: 1 token.
     */
    get: operations["getLinhaDoTempoByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/empresas/cnpj/{cnpj}/trabalhista": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Dados trabalhistas (PAT)
     * @description Retorna dados do Programa de Alimentacao do Trabalhador (PAT) e informacoes trabalhistas da empresa.
     */
    get: operations["getEmpresaTrabalhistaByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/empresas/cnpj/{cnpj}/beneficios": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Renuncias fiscais
     * @description Retorna beneficios e renuncias fiscais concedidos a empresa.
     */
    get: operations["getEmpresaBeneficiosByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/empresas/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Vinculos societarios
     * @description Busca reversa: retorna todas as empresas onde a pessoa consta como socia ou administradora, cada uma com seu quadro societario completo (socios). Essencial para mapear a rede empresarial de um investigado e percorrer graus de conexao sem chamadas adicionais.
     */
    get: operations["getSociedadesByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/empresas/email/{email}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Identificar empresas por email
     * @description Busca reversa: identifica empresas que possuem o email informado no cadastro da Receita Federal. Retorna o perfil completo de cada empresa. O array `socios` nao e populado neste endpoint (use /empresas/cnpj/{cnpj} ou /empresas/cpf/{cpf} para o quadro societario).
     */
    get: operations["getEmpresasByEmail"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/empresas/telefone/{telefone}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Identificar empresas por telefone
     * @description Busca reversa: identifica empresas que possuem o telefone informado no cadastro da Receita Federal. Retorna o perfil completo de cada empresa. O array `socios` nao e populado neste endpoint (use /empresas/cnpj/{cnpj} ou /empresas/cpf/{cpf} para o quadro societario).
     */
    get: operations["getEmpresasByTelefone"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/processos/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Processos judiciais de uma empresa
     * @description Retorna por padrao somente processos vinculados ao CNPJ pelo documento. Para incluir tambem associacoes por nome, envie `tipos_vinculo=documento,nome`. Cada processo informa `tipo_vinculo`. O comportamento e o mesmo com ou sem `realtime=true`.
     */
    get: operations["getProcessosByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/trabalhista/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Irregularidades trabalhistas de uma empresa
     * @description Verifica a participacao da empresa no PAT (Programa de Alimentacao do Trabalhador) como beneficiaria, facilitadora ou fornecedora.
     */
    get: operations["getTrabalhistaByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/veiculos/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Frota de uma empresa
     * @description Retorna todos os veiculos registrados em nome de uma empresa.
     */
    get: operations["getVeiculosByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/imoveis/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Imoveis urbanos de uma empresa
     * @description Retorna as propriedades urbanas registradas em nome do CNPJ. Nao inclui parentes nem enderecos resididos. CNPJ invalido retorna HTTP 200 com corpo { "erro": "CNPJ invalido" }.
     */
    get: operations["getImoveisByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/patentes/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Patentes por CNPJ
     * @description Retorna todas as patentes registradas no INPI vinculadas ao CNPJ informado.
     */
    get: operations["getPatentsByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/rural/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Perfil rural de uma empresa
     * @description Mesma estrutura de resposta de /rural/cpf/{cpf}; 'tipo' retorna PJ.
     */
    get: operations["getRuralByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/empresas/codigos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Tabela de códigos
     * @description Retorna tabelas de tradução de códigos usados nos dados de empresas. Use o parâmetro tipo para filtrar uma tabela específica.
     */
    get: operations["getCodigos"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/escrituras/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Escrituras por CPF
     * @description Consulta **ao vivo** a CESDI (Central de Escrituras de Separações, Divórcios e Inventários) da CENSEC. A consulta é **assíncrona**: a resposta chega na hora com `statusUrl`, e o resultado fica pronto em 10 a 50 segundos em [`GET /escrituras/jobs/{jobId}`](/api-reference/escrituras/resultado-de-uma-consulta-de-escrituras). Cada escritura traz cartório, data, livro/folha, dados do casamento e todas as partes com CPF. Sem escrituras (`total: 0`) ou com falha da consulta, os tokens são estornados.
     */
    get: operations["getEscriturasByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/escrituras/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Escrituras por CNPJ
     * @description Consulta **ao vivo** a CESDI (Central de Escrituras de Separações, Divórcios e Inventários) da CENSEC. A consulta é **assíncrona**: a resposta chega na hora com `statusUrl`, e o resultado fica pronto em 10 a 50 segundos em [`GET /escrituras/jobs/{jobId}`](/api-reference/escrituras/resultado-de-uma-consulta-de-escrituras). Cada escritura traz cartório, data, livro/folha, dados do casamento e todas as partes com CPF. Sem escrituras (`total: 0`) ou com falha da consulta, os tokens são estornados.
     */
    get: operations["getEscriturasByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/escrituras/jobs/{jobId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Resultado de uma consulta de escrituras
     * @description Consulte até `status` ser `completed` (resultado em `result`) ou `failed` (motivo em `error`). Enquanto a consulta roda, `status` é `waiting` ou `active`; um intervalo de 5 a 10 segundos entre as consultas é suficiente. Gratuito. O resultado fica disponível por 24 horas.
     */
    get: operations["getEscriturasJob"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/imoveis/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Imoveis urbanos de uma pessoa
     * @description Retorna propriedades urbanas do CPF, imoveis de parentes e enderecos resididos (imoveis de terceiros nos enderecos onde a pessoa mora/morou). Documento invalido retorna HTTP 200 com corpo { "erro": "CPF invalido" }.
     */
    get: operations["getImoveisByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/licitacoes/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Licitacoes por CPF
     * @description Busca todas as licitacoes publicas em que o CPF participou. Retorna dados completos de cada licitacao incluindo itens e demais participantes.
     */
    get: operations["getLicitacoesByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/licitacoes/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Licitacoes por CNPJ
     * @description Busca todas as licitacoes publicas em que o CNPJ participou. Retorna dados completos de cada licitacao incluindo itens e demais participantes.
     */
    get: operations["getLicitacoesByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/listas-restritivas/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Listas restritivas de uma pessoa
     * @description Consulta um CPF contra as 10 listas aplicaveis a pessoa fisica (CEIS, CNEP, CEAF, TCU, BACEN, sancoes internacionais, IBAMA Embargos, IBAMA Autos de Infracao, PEP, Debarment Multilateral). Valida o digito verificador do CPF.
     */
    get: operations["getListasRestritivasByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/listas-restritivas/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Listas restritivas de uma empresa
     * @description Consulta um CNPJ contra as 10 listas aplicaveis a pessoa juridica (CEIS, CNEP, TCU, sancoes internacionais, Lista Suja, CEPIM, Acordos de Leniencia, IBAMA Embargos, IBAMA Autos de Infracao, Debarment Multilateral). Valida o digito verificador do CNPJ.
     */
    get: operations["getListasRestritivasByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/listas-restritivas/{documento}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Listas restritivas por documento
     * @description Detecta o tipo pelo numero de digitos: 11 = CPF, 14 = CNPJ. Outro tamanho retorna 400. Aqui o documento e apenas limpo; o digito verificador NAO e validado, so o tamanho. Use /cpf ou /cnpj quando souber o tipo (eles validam o digito verificador).
     */
    get: operations["getListasRestritivasByDocumento"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/analyses": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Criar análise
     * @description Cria uma análise de risco assíncrona para um CNPJ (PJ) ou CPF (PF). O tipo é auto-detectado pelo tamanho do documento (14 → pj, 11 → pf) ou definido em subject_type. Análises de CPF exigem a feature analysis_engine_pf. Os tokens são debitados na criação; análises que terminam em failed são reembolsadas automaticamente. Retorna 202 na primeira submissão e 200 no replay idempotente (mesma Idempotency-Key + mesmo body em até 24h, sem nova cobrança).
     */
    post: operations["createAnalysis"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/analyses/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Consultar análise
     * @description Retorna o estado atual e o resultado de uma análise. Enquanto pending/running, a resposta inclui poll_after_seconds no body e o header Retry-After com o mesmo valor: aguarde esse intervalo antes do próximo poll. Quando completed/failed, traz verdict, blocks e coverage.
     */
    get: operations["getAnalysis"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/operations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Criar operação de borderô
     * @description Cria uma operação de borderô a partir de um CNAB 400 (parte `file`) e, opcionalmente, um ZIP de XMLs de NFe (parte `xmls`) para validação cruzada. Enfileira a análise e retorna 202. Faça polling em GET /operations/{id} e busque o resultado em /result.
     */
    post: operations["createOperation"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/operations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Consultar operação
     * @description Retorna o envelope de status da operação. As contagens ficam null até o status `completed`; em `failed`, os tokens são estornados. Depois de `completed`, busque a árvore de resultado em GET /operations/{id}/result.
     */
    get: operations["getOperation"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/operations/{id}/result": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Consultar resultado da operação
     * @description Retorna o resultado hierárquico de uma operação `completed`: a árvore cedente → sacados → títulos com issues por nó, mais summary, coverage e degraded_rules. Antes de `completed`, retorna 409. `filter=issues` (padrão) poda nós aprovados; `filter=all` devolve a árvore completa.
     */
    get: operations["getOperationResult"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/nfe/chave/{chave}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Nota fiscal por chave de acesso
     * @description Retorna dados completos da nota fiscal eletronica: emitente, destinatario, produtos, valores e eventos.
     */
    get: operations["getNfeByChave"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/nfe/lote": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Notas fiscais em lote
     * @description Consulta ate 10.000 chaves de acesso em uma unica requisicao.
     */
    post: operations["getNfeLote"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/patentes/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Patentes por CPF
     * @description Retorna todas as patentes registradas no INPI vinculadas ao CPF informado.
     */
    get: operations["getPatentsByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/perfil/cadastral/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Perfil Cadastral por CPF
     * @description Agrega em uma chamada: identidade, enderecos, telefones, emails, parentes, empresas e empregos.
     */
    get: operations["perfilCadastralCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/perfil/cadastral/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Perfil Cadastral por CNPJ
     * @description Agrega em uma chamada: dados cadastrais, atividades economicas e socios.
     */
    get: operations["perfilCadastralCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/perfil/patrimonial/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Perfil Patrimonial por CPF
     * @description Agrega em uma chamada: veiculos, imoveis, aeronaves, patentes e perfil rural.
     */
    get: operations["perfilPatrimonialCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/perfil/patrimonial/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Perfil Patrimonial por CNPJ
     * @description Agrega em uma chamada: veiculos, imoveis, aeronaves, patentes e rural da empresa.
     */
    get: operations["perfilPatrimonialCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/perfis/jobs/{jobId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Status do job de perfis */
    get: operations["getPerfisJobStatus"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/pessoas/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Informacoes basicas
     * @description Retorna os dados basicos da pessoa: identidade, genero, data de nascimento e parentes.
     */
    get: operations["getPessoaByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/pessoas/cpf/{cpf}/enderecos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Enderecos
     * @description Retorna todos os enderecos associados ao CPF, revelando movimentacao geografica ao longo do tempo.
     */
    get: operations["getEnderecosByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/pessoas/cpf/{cpf}/empregos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Empregos
     * @description Retorna historico completo de vinculos empregaticios com empregador, cargo e datas de admissao/desligamento.
     */
    get: operations["getEmpregosByCpfPessoas"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/pessoas/telefone/{telefone}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Busca por telefone
     * @description Busca reversa: dado um telefone, identifica os CPFs associados. Ponto de entrada quando voce tem apenas um numero de telefone.
     */
    get: operations["findByTelefone"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/telefones/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Telefones por CPF
     * @description Retorna todos os telefones associados ao CPF.
     */
    get: operations["getTelefonesByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/telefones/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Telefones por CNPJ
     * @description Retorna todos os telefones associados ao CNPJ.
     */
    get: operations["getTelefonesByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/emails/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Emails por CPF
     * @description Retorna todos os emails associados ao CPF.
     */
    get: operations["getEmailsByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/emails/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Emails por CNPJ
     * @description Retorna todos os emails associados ao CNPJ.
     */
    get: operations["getEmailsByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/processos/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Processos judiciais de uma pessoa
     * @description Retorna por padrao somente processos vinculados ao CPF pelo documento. Para incluir tambem associacoes por nome, envie `tipos_vinculo=documento,nome`. Cada processo informa `tipo_vinculo`. O comportamento e o mesmo com ou sem `realtime=true`.
     */
    get: operations["getProcessosByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/veiculos/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Veiculos de uma pessoa
     * @description Retorna todos os veiculos registrados em nome de uma pessoa fisica.
     */
    get: operations["getVeiculosByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/rural/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Perfil rural de uma pessoa
     * @description Retorna propriedades SNCR e CAFIR, infracoes IBAMA, autorizacoes florestais (AUTEX), transportes florestais (DOF), produtores organicos e resumo consolidado.
     */
    get: operations["getRuralByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/pessoas/email/{email}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * CPFs por email
     * @description Busca reversa: retorna CPFs associados a um endereco de email.
     */
    get: operations["getPessoasByEmail"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/enderecos/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Enderecos por CPF
     * @description Retorna todos os enderecos associados ao CPF.
     */
    get: operations["lookupEnderecosByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/enderecos/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Enderecos por CNPJ
     * @description Retorna todos os enderecos dos estabelecimentos vinculados ao CNPJ.
     */
    get: operations["getEnderecosByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/dossies": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Listar Dossiês
     * @description Lista Dossiês do workspace por cursor e permite filtrar pelo estado.
     */
    get: operations["listDossies"];
    put?: never;
    /**
     * Criar Dossiê padrão, modular ou com dados fornecidos
     * @description Geração assíncrona: retorna 202 e o ID para consulta. standard (default) mantém a investigação existente; modular consulta somente módulos selecionados; provided_data gera relatório/PDF somente com o JSON enviado. A chave exige entitlement dossies, escopo dossies:write e a conta deve ter public_api_dossies. modular, provided_data e qualquer risk_matrix também exigem public_api_dossies_custom, desligada por padrão. Use apenas em ambiente onde a versão está disponível e a conta foi liberada. A matriz retorna score de 0 a 100, low/medium/high e justificativas em risk_classification após a avaliação; ausência de dados obrigatórios ou coleta parcial retorna insufficient_data. Requisição inválida ou flag ausente é rejeitada antes de aceitar/cobrar.
     */
    post: operations["createDossie"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/dossies/{dossie_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Consultar Dossiê
     * @description Retorna o estado atual, tentativa, cobertura, resultado e artefatos do Dossiê. Inclui mode e risk_classification após avaliar a matriz enviada. Sem matriz, risk_classification é omitida.
     */
    get: operations["getDossie"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/dossies/{dossie_id}/status": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Consultar andamento do Dossiê
     * @description Leitura leve do estado atual para acompanhamento assíncrono. Inclui mode e risk_classification após avaliar a matriz enviada. Sem matriz, risk_classification é omitida.
     */
    get: operations["getDossieStatus"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/dossies/{dossie_id}/cancel": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Cancelar Dossiê
     * @description Solicita cancelamento enquanto o trabalho ainda permite essa transição.
     */
    post: operations["cancelDossie"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/dossies/{dossie_id}/retry": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Reprocessar Dossiê
     * @description Cria uma nova tentativa para um Dossiê elegível, preservando o mesmo identificador. Reutiliza modo, módulos, dados e matriz originais e verifica novamente a liberação vigente da conta. Não permite substituir a configuração nesta operação.
     */
    post: operations["retryDossie"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/lente/analyses": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Listar análises da Lente
     * @description Lista análises por cursor, estado e modo.
     */
    get: operations["listLenteAnalyses"];
    put?: never;
    /**
     * Criar análise da Lente
     * @description Reserva um envio privado para uma análise de localização ou comparação facial.
     */
    post: operations["createLenteAnalysis"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/lente/analyses/{analysis_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Consultar análise da Lente
     * @description Retorna upload, andamento, resultado, cobrança e artefatos da análise.
     */
    get: operations["getLenteAnalysis"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/lente/analyses/{analysis_id}/submit": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Submeter imagem para análise
     * @description Verifica o arquivo enviado, aplica a cobrança e inicia o processamento.
     */
    post: operations["submitLenteAnalysis"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/lente/analyses/{analysis_id}/cancel": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Cancelar análise da Lente
     * @description Solicita cancelamento enquanto a análise ainda permite essa transição.
     */
    post: operations["cancelLenteAnalysis"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/monitors": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Listar Monitoramentos
     * @description Lista acompanhamentos do workspace por cursor e estado.
     */
    get: operations["listMonitors"];
    put?: never;
    /**
     * Criar Monitoramento
     * @description Cria um acompanhamento contínuo para um CPF ou CNPJ.
     */
    post: operations["createMonitor"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/monitors/{monitor_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Consultar Monitoramento
     * @description Retorna configuração, estado, saúde e assinatura do acompanhamento.
     */
    get: operations["getMonitor"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /**
     * Atualizar Monitoramento
     * @description Altera nome, temas observados, emails ou frequência.
     */
    patch: operations["updateMonitor"];
    trace?: never;
  };
  "/monitors/{monitor_id}/pause": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Pausar Monitoramento
     * @description Interrompe novas coletas sem apagar o histórico.
     */
    post: operations["pauseMonitor"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/monitors/{monitor_id}/resume": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Retomar Monitoramento
     * @description Reativa as coletas de um acompanhamento pausado.
     */
    post: operations["resumeMonitor"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/monitors/{monitor_id}/cancel": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Encerrar Monitoramento
     * @description Encerra definitivamente novas coletas e preserva o histórico.
     */
    post: operations["cancelMonitor"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/monitors/{monitor_id}/changes": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Listar mudanças detectadas
     * @description Lista mudanças por cursor, severidade e situação de tratamento.
     */
    get: operations["listMonitorChanges"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/monitors/{monitor_id}/changes/{change_id}/ack": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Reconhecer mudança
     * @description Marca uma mudança como tratada sem removê-la do histórico.
     */
    post: operations["acknowledgeMonitorChange"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/rastro": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Listar buscas do Rastro
     * @description Lista buscas por cursor, estado e tipo de identificador.
     */
    get: operations["listRastroSearches"];
    put?: never;
    /**
     * Criar busca do Rastro
     * @description Inicia uma busca pública por email, telefone, usuário ou carteira digital.
     */
    post: operations["createRastroSearch"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/rastro/{search_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Consultar busca do Rastro
     * @description Retorna andamento, cobertura, correspondências, cobrança e artefatos.
     */
    get: operations["getRastroSearch"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/rastro/{search_id}/cancel": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Cancelar busca do Rastro
     * @description Solicita cancelamento enquanto a busca ainda permite essa transição.
     */
    post: operations["cancelRastroSearch"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/processos/numero/{numero}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Busca processo por numero
     * @description Retorna detalhes completos de um processo judicial pelo numero (com ou sem formatacao), incluindo valores mencionados, tags, eventos, audiencias, mandados, bens, identificadores, portes, partes e advogados. ATENCAO: as partes e advogados deste endpoint divergem da listagem por CPF/CNPJ, aqui `partes[].documento` pode ser null, `polo` vem em minusculas e `partes[].tipo` e o slug bruto (pessoa_fisica / pessoa_juridica). Este endpoint NAO retorna `movimentacoes` (use /processos/numero/{numero}/movimentacoes).
     */
    get: operations["getProcessoByNumero"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/processos/numero/{numero}/movimentacoes": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Lista movimentacoes de um processo
     * @description Retorna as movimentacoes mais recentes de um processo judicial, ordenadas por data (mais recentes primeiro). A listagem por CPF/CNPJ ja inclui ate 10 movimentacoes por processo; use este endpoint para obter ate 100 movimentacoes de um processo especifico.
     */
    get: operations["getMovimentacoesByNumero"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/processos/categorias": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Lista categorias de processos
     * @description Retorna todas as categorias disponiveis com totais de classes e processos. Use os slugs como valor do parametro `categorias` nos endpoints de CPF e CNPJ.
     */
    get: operations["listCategorias"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/processos/jobs/{jobId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Status do job de processos */
    get: operations["getProcessosJobStatus"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/registro/email/{email}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Registros por email
     * @description Verifica a existencia de contas em plataformas digitais e redes sociais a partir de um email. Retorna um array de registros, cada um com `tipo: 'digital'`.
     *
     *     **Plataformas verificadas:** GitHub, Gravatar, Duolingo, Medium, Nike, Apple, Google, Pinterest, Vivino, Trello, Protonmail, Runkeeper, USP.
     */
    get: operations["getRegistrosPorEmail"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/registro/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Registros por CPF
     * @description Verifica cadastros em lojas, farmacias, programas de fidelidade e instituicoes financeiras a partir de um CPF. Retorna um array de registros com tipos 'comercial', 'digital' ou 'bancario'.
     *
     *     **Plataformas verificadas:** Drogasil, Drogaraia, Carrefour, Atacadao, Petz, Fastshop, Livelo.
     */
    get: operations["getRegistrosPorCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/registro/telefone/{telefone}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Registros por telefone
     * @description Verifica a existencia de contas e cadastros em plataformas digitais a partir de um numero de telefone. Retorna um array de registros encontrados.
     */
    get: operations["getRegistrosPorTelefone"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/renda/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Renda e classe social por CPF
     * @description Estima a renda mensal do domicílio e da pessoa e a classe social equivalente ao Critério Brasil (ABEP 2026). Basta o CPF: vínculos formais, Bolsa Família, BPC, renda do setor censitário dos endereços (IBGE, Censo 2022), empresas e patrimônio são buscados internamente. Motor de regras determinístico, sem IA. Veja a [metodologia e os cortes de cada classe](/entidades/renda). Sem dados suficientes, responde `status: sem_dados` com `total: 0` e os tokens são estornados.
     */
    get: operations["getRendaByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/veiculos/placa/{placa}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Identificar veiculo por placa
     * @description Busca reversa: identifica o veiculo e seu proprietario a partir da placa. Aceita formato antigo (ABC1234) e Mercosul (ABC1D23).
     */
    get: operations["getVeiculoByPlaca"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/regularidade/cpf/{cpf}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Regularidade de um CPF
     * @description Checks de regularidade e compliance: IBAMA, sanções nacionais, Banco Central, sanções internacionais e protestos. Os arquivos OpenAPI da Sherlocker não trazem este endpoint. O tipo da resposta vem de um app em produção que lê esta resposta e da tool `regularidade` do MCP da Sherlocker, e nenhuma chamada o confirmou.
     */
    get: operations["getRegularidadeByCpf"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/regularidade/cnpj/{cnpj}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Regularidade de um CNPJ
     * @description Checks de regularidade e compliance: IBAMA, sanções nacionais, Banco Central, sanções internacionais e protestos. Os arquivos OpenAPI da Sherlocker não trazem este endpoint. O tipo da resposta vem de um app em produção que lê esta resposta e da tool `regularidade` do MCP da Sherlocker, e nenhuma chamada o confirmou.
     */
    get: operations["getRegularidadeByCnpj"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/perfis": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Executa um perfil
     * @description Inicia a execução de um perfil sobre um CPF e devolve o `job_id`. Acompanhe o job em `perfis.getJobStatus`. O `perfil_id` é do seu contrato: a Sherlocker entrega o seu. Os arquivos OpenAPI da Sherlocker não trazem este endpoint. Vem da página "Perfil: Candidato RH" da documentação. A mesma `idempotencyKey` em até 24h devolve o mesmo job, sem cobrar de novo.
     */
    post: operations["createPerfil"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/processos/nome": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Processos por nome
     * @description Busca direta por nome, sem CPF nem CNPJ. Com `documento`, a Sherlocker descarta as partes que já têm outro documento conhecido. Os arquivos OpenAPI da Sherlocker não trazem este endpoint, só a página "Vínculo por documento x nome" da documentação, que também não mostra a resposta. O SDK assume a mesma resposta de processos por CPF. Um nome pode ter homônimos: confirme com o documento antes de decidir algo.
     */
    get: operations["getProcessosByNome"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/processos/jobs/{jobId}/results": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Resultados de um job de processos
     * @description Lista o que o job de tempo real (`realtime=true`) já achou. É o `results_url` que a consulta devolve. Os arquivos OpenAPI da Sherlocker não trazem este endpoint e a documentação não mostra a resposta, então ela vem sem tipo.
     */
    get: operations["getProcessosJobResults"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/rural/jobs/{jobId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Status de um job de rural
     * @description Status de uma consulta rural assíncrona. A página "Propriedade Rural" da documentação lista a rota, mas nenhum arquivo OpenAPI da Sherlocker a descreve e a resposta vem sem tipo.
     */
    get: operations["getRuralJob"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    /** @description Advogado como retornado pela listagem por CPF/CNPJ. */
    Advogado: {
      /** @description Nome completo do advogado (Title Case) */
      nome?: string;
      /** @description Numero OAB (ex: SP123456) */
      oab?: string;
      /** @description Polo que representa (capitalizado) */
      polo?: string;
      /** @description CPF do advogado formatado. String vazia ("") quando ausente. */
      documento?: string;
    };
    /** @description Aeronaves registradas (avioes e drones/RPAS) */
    Aeronaves: {
      /** @description Lista de avioes registrados */
      avioes?: components["schemas"]["PerfilAeronave"][];
      /** @description Lista de drones/RPAS registrados */
      drones?: components["schemas"]["PerfilDrone"][];
    };
    AeronavesAeronave: {
      /** @description CPF (mascarado, ex: 123.XXX.XXX-01) ou CNPJ do proprietario */
      documento?: string;
      /**
       * @description Tipo de pessoa do documento: PF (CPF) ou PJ (CNPJ)
       * @enum {string}
       */
      tipo?: "PF" | "PJ";
      /** @description Matricula da aeronave (ex: PR-ABC) */
      marca?: string;
      proprietario?: string;
      outros_proprietarios?: string;
      uf?: string;
      operador?: string;
      outros_operadores?: string;
      uf_operador?: string;
      /** @description CPF/CGC do operador (mascarado) */
      cpf_cgc?: string;
      certificado_matricula?: string;
      numero_serie?: string;
      categoria?: string;
      /** @description Tipo da aeronave (ex: AVIAO, HELICOPTERO, PLANADOR) */
      tipo_aeronave?: string;
      modelo?: string;
      fabricante?: string;
      classe?: string;
      /** @description Peso maximo de decolagem (kg) */
      pmd?: string;
      /** @description Codigo ICAO do tipo de aeronave */
      tipo_icao?: string;
      tripulacao_minima?: string;
      passageiros_maximo?: string;
      numero_assentos?: string;
      ano_fabricacao?: string;
      /** @description Validade do Certificado de Verificacao de Aeronavegabilidade */
      validade_cva?: string;
      /** @description Validade do Certificado de Aeronavegabilidade */
      validade_ca?: string;
      data_cancelamento?: string;
      motivo_cancelamento?: string;
      interdicao?: string;
      marca_nacional_1?: string;
      marca_nacional_2?: string;
      marca_nacional_3?: string;
      marca_estrangeira?: string;
      data_matricula?: string;
      tipo_motor?: string;
      quantidade_motores?: string;
      tipo_pouso?: string;
      /** @description Preco estimado em USD (presente apenas quando ha estimativa para o tipo de aeronave) */
      preco_estimado?: number;
    };
    AeronavesDrone: {
      /** @description CPF (mascarado, ex: ***.456.789-**) ou CNPJ do operador */
      documento?: string;
      /**
       * @description Tipo de pessoa do documento: PF (CPF) ou PJ (CNPJ)
       * @enum {string}
       */
      tipo?: "PF" | "PJ";
      /** @description Codigo de registro SISANT */
      codigo_aeronave?: string;
      data_validade?: string;
      operador?: string;
      /** @description Recreativo, Experimental, etc */
      tipo_uso?: string;
      fabricante?: string;
      modelo?: string;
      numero_serie?: string;
      /** @description Peso maximo em kg */
      peso_maximo?: string;
      ramo_atividade?: string;
      /** @description Preco estimado em USD (presente apenas quando ha estimativa para o tipo de uso) */
      preco_estimado?: number;
    };
    AeronavesErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /**
         * @description Codigo do erro (ex: VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED)
         * @example VALIDATION_ERROR
         */
        codigo?: string;
        /**
         * @description Mensagem descritiva do erro
         * @example CPF invalido
         */
        mensagem?: string;
      };
    };
    AeronavesResponse: {
      avioes?: components["schemas"]["AeronavesAeronave"][];
      drones?: components["schemas"]["AeronavesDrone"][];
    };
    AnalysisBlock: {
      /** @description Identificador do bloco (ex.: SITUACAO_CADASTRAL_CNPJ). */
      id?: string;
      /**
       * @description Resultado do bloco.
       * @enum {string}
       */
      status?: "pass" | "alert" | "blocked" | "unavailable";
      /** @description Resumo legível do achado do bloco. */
      detail?: string;
      /** @description Evidências de suporte, quando disponíveis. */
      evidence?: components["schemas"]["AnalysisEvidence"][];
    };
    AnalysisCoverage: {
      /** @description Identificador da fonte de dados consultada. */
      source?: string;
      /**
       * @description Resultado da busca na fonte.
       * @enum {string}
       */
      status?: "fetched" | "cached" | "failed";
      /**
       * Format: date-time
       * @description Timestamp ISO 8601 de quando o dado foi obtido, se conhecido.
       */
      fetched_at?: string | null;
    };
    AnalysisEvidence: {
      /** @description Campo avaliado pela regra. */
      field?: string;
      /** @description Valor encontrado na fonte de dados. */
      value?: string;
      /** @description Valor esperado pela regra do bloco. */
      expected?: string;
      /** @description Resultado da comparação (ex.: match, divergent). */
      result?: string;
    };
    Artifact: {
      id?: string;
      /** @enum {string} */
      type?: "dossie_pdf" | "dossie_docx" | "artifact";
      media_type?: string;
      /** @enum {string} */
      status?: "available" | "temporarily_unavailable";
      /** Format: uri */
      download_url?: string;
      /** Format: date-time */
      expires_at?: string | null;
      /** Format: date-time */
      available_until?: string | null;
    };
    Attempt: {
      /** Format: uuid */
      id: string;
      number: number;
      /** @enum {string} */
      status:
        | "queued"
        | "running"
        | "completed"
        | "needs_review"
        | "failed"
        | "cancelled";
      /** Format: date-time */
      queued_at: string;
      /** Format: date-time */
      started_at?: string;
      /** Format: date-time */
      completed_at?: string;
      billing: components["schemas"]["Billing"];
    };
    /** @description Autorizacao de exploracao florestal (AUTEX) agrupada por numero de serie */
    AutorizacaoAgrupada: {
      numero_de_serie?: string;
      tipo_autex?: string;
      municipio?: string;
      uf?: string;
      situacao?: string;
      data_emissao?: string;
      data_vencimento?: string;
      produtos?: {
        produto?: string;
        quantidade_autorizada?: number;
      }[];
    };
    AuxilioBrasil: {
      nis_favorecido?: string;
      mes_competencia?: string;
      mes_referencia?: string;
      uf?: string;
      codigo_municipio?: string;
      nome_municipio?: string;
      valor_parcela?: number | null;
    };
    AuxilioEmergencial: {
      nis_beneficiario?: string;
      nis_responsavel?: string;
      mes_disponibilizacao?: string;
      uf?: string;
      codigo_municipio?: string;
      nome_municipio?: string;
      enquadramento?: string;
      parcela?: string;
      observacao?: string | null;
      valor_beneficio?: number | null;
    };
    BeneficiosCnpjResponse: {
      total?: number;
      renuncias_fiscais?: components["schemas"]["RenunciaFiscal"][];
    };
    /** @description Beneficios sociais recebidos pela pessoa fisica */
    BeneficiosCpf: {
      /** @description Pagamentos do programa Auxilio Brasil */
      auxilio_brasil?: Record<string, never>[];
      /** @description Pagamentos do programa Bolsa Familia */
      bolsa_familia?: Record<string, never>[];
      /** @description Pagamentos do Auxilio Emergencial */
      auxilio_emergencial?: Record<string, never>[];
      /** @description Pagamentos do Beneficio de Prestacao Continuada (BPC/LOAS) */
      bpc?: Record<string, never>[];
    };
    BeneficiosCpfResponse: {
      /** @description CPF consultado (apenas digitos) */
      cpf?: string;
      /** @description Nome do beneficiario (Title Case). String vazia quando nao resolvido. */
      nome?: string;
      total?: number;
      auxilio_brasil?: components["schemas"]["AuxilioBrasil"][];
      auxilio_emergencial?: components["schemas"]["AuxilioEmergencial"][];
      bolsa_familia?: components["schemas"]["AuxilioBrasil"][];
      bpc?: components["schemas"]["Bpc"][];
    };
    BeneficiosErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /**
         * @description Codigo do erro (ex: VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED)
         * @example VALIDATION_ERROR
         */
        codigo?: string;
        /**
         * @description Mensagem descritiva do erro
         * @example CPF invalido
         */
        mensagem?: string;
      };
    };
    Billing: {
      id?: string;
      /** @enum {string} */
      status?:
        | "not_charged"
        | "charge_pending"
        | "charged"
        | "refund_pending"
        | "refunded";
      amount?: number;
      /** @enum {string} */
      unit?: "tokens";
    };
    Bpc: {
      nis_beneficiario?: string;
      mes_competencia?: string;
      mes_referencia?: string;
      uf?: string;
      codigo_municipio?: string;
      nome_municipio?: string;
      numero_beneficio?: string;
      beneficio_judicial?: string;
      valor_parcela?: number | null;
    };
    CafirRow: {
      /** @description Numero do Imovel na Receita Federal (CAFIR) */
      nirf?: string;
      /** @description Area em hectares */
      area_total?: number;
      codigo_incra?: string;
      nome_imovel?: string;
      situacao?: string;
      logradouro?: string;
      distrito?: string;
      uf?: string;
      municipio?: string;
      cep?: string;
      data_atualizacao?: string;
      imune_isento?: string;
      codigo_sncr?: string;
    };
    /** @description Cargo publico/mandato consolidado de uma pessoa politicamente exposta */
    CargoPublico: {
      /**
       * @description Descricao do cargo/funcao
       * @example Deputado Federal
       */
      cargo?: string;
      /**
       * @description Nivel da funcao (null se indisponivel)
       * @example Federal
       */
      nivel?: string | null;
      /**
       * @description Orgao (sem o sufixo de UF)
       * @example Camara Dos Deputados
       */
      orgao?: string;
      /**
       * @description UF extraida do nome do orgao (vazio se ausente)
       * @example SP
       */
      uf?: string;
      /** @description Periodos de mandato consolidados para o mesmo cargo/orgao */
      mandatos?: {
        /** @description Data de inicio (ISO YYYY-MM-DD) ou null */
        inicio?: string | null;
        /** @description Data de fim (ISO YYYY-MM-DD) ou null */
        fim?: string | null;
        /** @description Fim do periodo de carencia (ISO YYYY-MM-DD) ou null */
        carencia_ate?: string | null;
      }[];
    };
    Cartorio: {
      /** @description Código Nacional de Serventia (CNJ). */
      cns?: string | null;
      denominacao?: string | null;
      municipio?: string | null;
      uf?: string | null;
      ibge?: string | null;
      endereco?: {
        logradouro?: string | null;
        numero?: string | null;
        complemento?: string | null;
        bairro?: string | null;
        cep?: string | null;
      } | null;
      email?: string | null;
      /** @description Somente telefones públicos do cartório. */
      telefones?: {
        numero?: string;
        ramal?: string | null;
        tipo?: string | null;
      }[];
    };
    CertidaoEnvelope: {
      /** Format: uuid */
      certidao_id: string;
      /** @enum {string} */
      tipo: "cnpj" | "cndt" | "nome";
      /** @enum {string} */
      status: "queued" | "processing" | "completed" | "failed";
      /** @enum {string} */
      stage: "waiting_worker" | "accessing_source" | "completed" | "failed";
      /** Format: date-time */
      created_at?: string | null;
      /** Format: date-time */
      started_at?: string | null;
      /** Format: date-time */
      completed_at?: string | null;
      /** @description Dados estruturados da emissão. Os campos variam conforme o tipo da certidão. */
      result:
        | ({
            /** @description Nome retornado pela base consolidada antes da validação D+0. */
            nome_base?: string | null;
            /** @description Nome associado ao documento no TST/BNDT no momento da emissão. */
            nome_oficial?: string;
            /** @description Indica se o nome da base difere do nome informado pelo TST. */
            divergente?: boolean | null;
            /** @enum {string} */
            fonte_nome?: "tst_bndt";
            /** Format: date-time */
            capturado_em?: string;
            titular?: {
              nome?: string;
            };
            /** @enum {string} */
            classificacao?:
              "negativa" | "positiva" | "positiva_com_efeito_de_negativa";
          } & {
            [key: string]: unknown;
          })
        | null;
      evidence: components["schemas"]["CertidaoEvidence"] | null;
      error: components["schemas"]["CertidaoError"] | null;
      links: {
        self: string;
        pdf: string;
      };
    };
    CertidaoError: {
      /** @example FONTE_INDISPONIVEL */
      code: string;
      /** @enum {string} */
      category:
        | "validation"
        | "business"
        | "upstream"
        | "integration"
        | "integrity"
        | "infrastructure"
        | "configuration"
        | "internal";
      message: string;
      retryable: boolean;
      retry_after_seconds: number | null;
    };
    CertidaoEvidence: {
      /** @enum {string} */
      status: "available";
      /** @enum {string} */
      type: "official_certificate" | "sherlocker_verification_report";
      /** @enum {string} */
      mime_type: "application/pdf";
      sha256?: string;
      /** @example /api/v1/certidoes/0d7c8a8a-74e1-42f3-a74b-ecf60568ff51/pdf */
      pdf_url: string;
    };
    Change: {
      /** Format: uuid */
      id?: string;
      /** @enum {string} */
      status?: "open" | "acknowledged";
      /** @enum {string} */
      severity?: "info" | "warn" | "critical";
      type?: string;
      before?: {
        [key: string]: unknown;
      };
      after?: {
        [key: string]: unknown;
      };
      /** Format: date-time */
      detected_at?: string;
      /** Format: date-time */
      acknowledged_at?: string | null;
    };
    /** @description Classificacao Nacional de Atividades Economicas */
    Cnae: {
      /**
       * @description Codigo CNAE (7 digitos)
       * @example 6209100
       */
      codigo?: string;
      /**
       * @description Descricao da atividade economica
       * @example Suporte tecnico em TI
       */
      descricao?: string;
    };
    /** @description Status de uma lista aplicavel ao tipo do documento. O array cobertura traz todas as listas que valem para CPF (ou para CNPJ), mesmo sem registro, para auditoria do que foi (ou nao foi) verificado. Listas que nao se aplicam ao tipo (ex.: PEP para CNPJ) nao aparecem. */
    CoberturaItem: {
      /** @example ceis */
      lista_id?: string;
      /** @example CEIS, Empresas Inidoneas e Suspensas */
      nome?: string;
      /** @enum {string} */
      grupo?: "sancoes" | "restritivas" | "alertas";
      /**
       * @description encontrado=ha registro; nada_consta=verificado sem registro; indisponivel=a consulta a fonte falhou ou a base nunca foi sincronizada (ultima_atualizacao=null); requer_nome=lista exige nome e nenhum foi informado nem resolvido
       * @enum {string}
       */
      resultado?: "encontrado" | "nada_consta" | "indisponivel" | "requer_nome";
      /** @example 0 */
      ocorrencias?: number;
      /**
       * @description true quando a ultima atualizacao da base falhou ou atrasou. O resultado continua valido, mas reflete os dados de ultima_atualizacao.
       * @example false
       */
      desatualizada?: boolean;
      /**
       * @description Data (YYYY-MM-DD HH:MM:SS) da ultima atualizacao bem-sucedida da base. null quando a base nunca foi sincronizada ou nao foi consultada.
       * @example 2026-06-15 13:00:00
       */
      ultima_atualizacao?: string | null;
      /** @example https://portaldatransparencia.gov.br */
      fonte_oficial?: string;
    };
    /** @description Cobertura de um provider de dados na operação. */
    CoverageEntry: {
      /**
       * @description Identificador do provider consultado.
       * @example rfb
       */
      provider?: string;
      /**
       * @description Consultas solicitadas ao provider.
       * @example 6
       */
      requested?: number;
      /**
       * @description Consultas bem-sucedidas.
       * @example 5
       */
      succeeded?: number;
      /** @description Documentos cujas consultas falharam. */
      failed_keys?: string[];
    };
    CreateAnalysisAccepted: {
      /**
       * Format: uuid
       * @description UUID da análise criada. Use no GET /analyses/{id}.
       */
      id: string;
      /**
       * @description Sempre pending imediatamente após a criação.
       * @enum {string}
       */
      status: "pending";
      /** @description Tokens debitados do saldo do workspace na criação. */
      tokens_charged?: number;
      /** @description Saldo de tokens do workspace após o débito. */
      balance?: number;
      /** @description Sugestão de espera (segundos) antes do primeiro poll. */
      poll_after_seconds?: number;
      /** @description Identificador da requisição para rastreio e suporte. Igual ao header x-request-id da resposta. */
      request_id?: string;
    };
    CreateAnalysisRequest: {
      /**
       * @description CNPJ (14 dígitos) ou CPF (11 dígitos) do analisado, com ou sem máscara.
       * @example 12345678000195
       */
      document: string;
      /**
       * @description Tipo do analisado. Auto-detectado pelo tamanho do documento (14 → pj, 11 → pf). Se enviado, precisa ser compatível com o documento.
       * @enum {string}
       */
      subject_type?: "pj" | "pf";
      /**
       * Format: uuid
       * @description UUID da engine de análise a usar. Omitido: usa a engine padrão do workspace ou o template do sistema (PJ/PF).
       */
      engine_id?: string;
      /** @description Finalidade da análise (texto livre). Opcional; gravada no log de auditoria PF em análises de CPF. */
      purpose?: string;
      /**
       * @description Base legal LGPD para tratamento de dados pessoais. Opcional; gravada no log de auditoria PF em análises de CPF.
       * @enum {string}
       */
      legal_basis?:
        | "consentimento"
        | "legitimo_interesse"
        | "cumprimento_obrigacao_legal"
        | "protecao_credito";
    };
    /** @description Três formatos mutuamente exclusivos. Até 256 KiB de JSON serializado e 20 níveis de profundidade. Campos desconhecidos são rejeitados. O modo padrão permanece compatível quando mode é omitido. */
    CreateDossie:
      | components["schemas"]["CreateDossieStandard"]
      | components["schemas"]["CreateDossieModular"]
      | components["schemas"]["CreateDossieProvidedData"];
    /** @description Investiga somente os módulos selecionados. Exige public_api_dossies_custom. */
    CreateDossieModular: {
      /**
       * @description Inferido e validado contra document. Deve ser omitido quando provided_data não envia document.
       * @enum {string}
       */
      subject_type?: "cpf" | "cnpj";
      /**
       * @description Tipo e política de cobrança existentes; no modular não adiciona módulos omitidos.
       * @default basic
       * @enum {string}
       */
      kind: "basic" | "advanced";
      risk_matrix?: components["schemas"]["DossieRiskMatrix"];
      /** @enum {string} */
      mode: "modular";
      /** @description CPF/CNPJ válido em string, com ou sem pontuação. Opcional apenas em provided_data, sem disparar consultas nesse modo. */
      document: string;
      modules: components["schemas"]["DossieModules"];
    };
    /** @description Estrutura os dados enviados sem investigação. Exige public_api_dossies_custom. Não aceita context nem modules. */
    CreateDossieProvidedData: {
      /**
       * @description Inferido e validado contra document. Deve ser omitido quando provided_data não envia document.
       * @enum {string}
       */
      subject_type?: "cpf" | "cnpj";
      /**
       * @description Tipo e política de cobrança existentes; no modular não adiciona módulos omitidos.
       * @default basic
       * @enum {string}
       */
      kind: "basic" | "advanced";
      risk_matrix?: components["schemas"]["DossieRiskMatrix"];
      /** @enum {string} */
      mode: "provided_data";
      /** @description CPF/CNPJ válido em string, com ou sem pontuação. Opcional apenas em provided_data, sem disparar consultas nesse modo. */
      document?: string;
      data: components["schemas"]["DossieProvidedData"];
    };
    /** @description Investigação padrão. mode é opcional e assume standard; context é aceito somente neste modo. */
    CreateDossieStandard: {
      /**
       * @description Inferido e validado contra document. Deve ser omitido quando provided_data não envia document.
       * @enum {string}
       */
      subject_type?: "cpf" | "cnpj";
      /**
       * @description Tipo e política de cobrança existentes; no modular não adiciona módulos omitidos.
       * @default basic
       * @enum {string}
       */
      kind: "basic" | "advanced";
      risk_matrix?: components["schemas"]["DossieRiskMatrix"];
      context?: string;
      /**
       * @default standard
       * @enum {string}
       */
      mode: "standard";
      /** @description CPF/CNPJ válido em string, com ou sem pontuação. Opcional apenas em provided_data, sem disparar consultas nesse modo. */
      document: string;
    };
    CreateOperationAccepted: {
      /**
       * Format: uuid
       * @description UUID da operação criada. Use no GET /operations/{id} e no GET /operations/{id}/result.
       */
      operation_id: string;
      /**
       * @description Sempre queued imediatamente após a criação.
       * @enum {string}
       */
      status: "queued";
      /**
       * Format: date-time
       * @description Timestamp ISO 8601 de criação.
       */
      created_at: string;
    };
    CreateOperationRequest: {
      /**
       * Format: binary
       * @description Arquivo CNAB 400 remessa (.REM), Banco Paulista 611, 444 colunas, Windows-1252. Obrigatório. Máximo de 128 MiB.
       */
      file: Blob;
      /**
       * Format: binary
       * @description ZIP com os XMLs de NFe (nfeProc) dos títulos, para validação cruzada. Opcional. Máximo de 512 MiB. O multipart completo, incluindo framing, aceita até 768 MiB no gateway.
       */
      xmls?: Blob;
      /**
       * @description CNPJ do cedente, 14 dígitos ou formatado. Obrigatório; o dígito verificador é validado.
       * @example 12345678000195
       */
      cedente_cnpj: string;
      /**
       * @description ID da engine de borderô a usar. Omitido ou "template-padrao": usa a engine template do sistema. Engine não utilizável retorna 422 no_engine.
       * @example template-padrao
       */
      engine_id?: string;
      /** @description Finalidade da análise (auditoria LGPD). Opcional. */
      purpose?: string;
      /** @description Base legal LGPD para os sacados PF. Opcional. */
      legal_basis?: string;
    };
    /** @description Regra que não pôde ser avaliada porque a fonte de dados ficou indisponível. Não vira issue: os títulos afetados contam como alerted no summary. */
    DegradedRule: {
      /**
       * @description Identificador da regra degradada.
       * @example SACADO_SERASA
       */
      rule_id?: string;
      /**
       * @description Provider indisponível.
       * @example serasa
       */
      provider?: string;
      /**
       * @description Quantidade de títulos afetados.
       * @example 2
       */
      titulos_affected?: number;
    };
    Divida: {
      numero_inscricao?: string;
      /** @enum {string} */
      fonte?: "ativa_uniao" | "fgts" | "previdenciaria";
      /** @description Tipo de tributo/receita. String vazia quando ausente na fonte. */
      receita?: string;
      ajuizado?: boolean;
      /**
       * Format: date
       * @description Data da inscricao mais recente (YYYY-MM-DD). String vazia quando ausente na fonte.
       */
      data_inscricao?: string;
      valor_atual?: number | null;
      uf?: string | null;
      /** @description Unidade responsavel pela inscricao. String vazia quando ausente na fonte. */
      unidade_responsavel?: string;
      /** @description Entidade responsavel. Presente apenas quando fonte = "fgts". */
      entidade_responsavel?: string;
      historico?: components["schemas"]["HistoricoItem"][];
    };
    DividasErrorResponse: {
      success?: boolean;
      error?: string;
    };
    DividasResponse: {
      /** @description CPF ou CNPJ consultado, apenas digitos (sem formatacao). */
      documento?: string;
      /** @description Nome ou razao social do devedor. String vazia quando o documento nao tem dividas. */
      nome?: string;
      total?: number;
      valor_total?: number;
      ajuizado?: boolean;
      dividas?: components["schemas"]["Divida"][];
    };
    /** @description Quem recebeu a doação: candidato, órgão partidário ou comitê. */
    DoacaoBeneficiario: {
      /**
       * @description Tipo do beneficiário
       * @example candidato
       * @enum {string}
       */
      tipo?: "candidato" | "partido" | "comite";
      /**
       * @description Sequencial TSE do candidato; null para partido/comitê
       * @example 250001234567
       */
      sq_candidato?: string | null;
      /**
       * @description CPF do candidato beneficiário (apenas dígitos). Completo nas eleições 2018/2020/2022; null para partido/comitê e em 2024 (suprimido pelo TSE)
       * @example 12345678909
       */
      cpf?: string | null;
      /**
       * @description Nome do beneficiário (Title Case)
       * @example Maria Oliveira
       */
      nome?: string;
      /**
       * @description Número de urna do candidato
       * @example 1234
       */
      numero?: string | null;
      /**
       * @description Cargo em disputa (Title Case); null para partido/comitê
       * @example Deputado Federal
       */
      cargo?: string | null;
      /**
       * @description Sigla do partido (upper)
       * @example XYZ
       */
      partido?: string;
      /**
       * @description UF da prestação de contas. Além das 27 UFs: BR (nacional), VT (voto em trânsito), ZZ (exterior)
       * @example SP
       */
      uf?: string;
      /**
       * @description Município (Title Case) em eleição municipal; null em eleição federal/estadual
       * @example null
       */
      municipio?: string | null;
      /**
       * @description CNPJ da prestação de contas do beneficiário (apenas dígitos)
       * @example 45678901000123
       */
      cnpj_prestador?: string | null;
    };
    /** @description Doador direto que repassou o recurso ao beneficiário. Presente apenas quando origem = originaria (ex.: repasse de diretório partidário, financiamento coletivo). */
    DoacaoIntermediario: {
      /**
       * @description Nome do intermediário (Title Case)
       * @example Partido Xyz - Diretório Nacional
       */
      nome?: string;
      /**
       * @description CPF/CNPJ do intermediário (apenas dígitos)
       * @example 01234567000189
       */
      documento?: string;
    };
    /** @description Uma doação declarada ao TSE. Cada item corresponde a uma linha dos arquivos de prestação de contas, receitas estimáveis itemizadas pelo TSE (mesmo sq_receita) aparecem como linhas separadas, cada uma com seu valor. */
    DoacaoPolitica: {
      /**
       * @description Identificador TSE do recibo (não é único por linha: recibos estimáveis são itemizados em várias linhas)
       * @example 20221234567890
       */
      sq_receita?: string;
      /**
       * @description Ano da eleição/exercício
       * @example 2022
       */
      ano_eleicao?: number;
      /**
       * @description Turno (1 ou 2); null quando não informado
       * @example 1
       */
      turno?: number | null;
      /**
       * @description Descrição da eleição na fonte TSE
       * @example Eleições Gerais Estaduais 2022
       */
      descricao_eleicao?: string;
      /**
       * @description Data da doação (ISO YYYY-MM-DD); null quando a fonte não informa
       * @example 2022-09-15
       */
      data?: string | null;
      /**
       * @description Valor em R$ (2 casas decimais)
       * @example 5000
       */
      valor?: number;
      /**
       * @description financeira = dinheiro (transferência, PIX, espécie); estimavel = bens/serviços valorados em dinheiro (cessão de veículo, serviços). Estimável NÃO é dinheiro que entrou em conta, não some cegamente com financeira
       * @example financeira
       * @enum {string}
       */
      natureza?: "financeira" | "estimavel";
      /**
       * @description Espécie do recurso na fonte TSE
       * @example Transferência eletrônica
       */
      especie?: string;
      /**
       * @description Fonte do recurso (ex.: Fundo Partidário, FEFC, Outros)
       * @example Outros
       */
      fonte_receita?: string;
      /**
       * @description Origem do recurso na fonte TSE
       * @example Recursos de pessoas físicas
       */
      origem_receita?: string;
      /**
       * @description Descrição livre da doação; null quando vazia
       * @example Doação via PIX
       */
      descricao?: string | null;
      /**
       * @description Número do recibo eleitoral; null quando não emitido
       * @example 000000123456XY
       */
      recibo?: string | null;
      /**
       * @description direta = o documento consultado doou diretamente ao beneficiário; originaria = o documento é o doador originário e o recurso chegou via um intermediário (ver campo intermediario)
       * @example direta
       * @enum {string}
       */
      origem?: "direta" | "originaria";
      /** @description Doador direto que repassou o recurso; presente apenas quando origem = originaria */
      intermediario?:
        components["schemas"]["DoacaoIntermediario"] | (never | null);
      beneficiario?: components["schemas"]["DoacaoBeneficiario"];
    };
    DoacoesPoliticasErrorResponse: {
      /** @example 400 */
      statusCode?: number;
      /** @example Validation failed */
      message?: string;
      /** @example /api/v1/doacoes-politicas/cpf/12345678901 */
      path?: string;
      /** @example 2026-07-11T10:45:18.042Z */
      timestamp?: string;
    };
    DoacoesPoliticasResponse: {
      /**
       * @description Documento consultado (apenas dígitos)
       * @example 12345678901
       */
      documento?: string;
      /**
       * @example cpf
       * @enum {string}
       */
      tipo_documento?: "cpf" | "cnpj";
      /**
       * @description Nome do doador (Title Case; prioriza o nome na Receita Federal). null quando total = 0
       * @example João Da Silva
       */
      nome?: string | null;
      /**
       * @description Total de doações COM os filtros aplicados (não é o tamanho da página), base da paginação. 0 = sem doações, documento inválido ou base indisponível (crédito reembolsado)
       * @example 7
       */
      total?: number;
      /**
       * @description Tamanho da página aplicado (após clamp)
       * @example 100
       */
      limit?: number;
      /**
       * @description Deslocamento aplicado (após clamp)
       * @example 0
       */
      offset?: number;
      /** @description Resumo agregado com os filtros aplicados; null quando total = 0 */
      resumo?: components["schemas"]["DoacoesResumo"] | (never | null);
      /** @description Página de doações, ordenada por ano DESC e data DESC */
      doacoes?: components["schemas"]["DoacaoPolitica"][];
    };
    /** @description Agregado de TODAS as doações do documento com os filtros aplicados (não apenas da página atual). */
    DoacoesResumo: {
      /**
       * @description Soma de todas as doações em R$ (financeiro + estimável)
       * @example 15500
       */
      valor_total?: number;
      /**
       * @description Soma das doações em dinheiro
       * @example 13000
       */
      valor_financeiro?: number;
      /**
       * @description Soma das doações em bens/serviços valorados
       * @example 2500
       */
      valor_estimavel?: number;
      /**
       * @description Total de doações (igual ao campo total do envelope)
       * @example 7
       */
      quantidade?: number;
      /** @description Anos com doações (decrescente) */
      anos?: number[];
      /**
       * @description Beneficiários distintos (candidatos/órgãos)
       * @example 4
       */
      beneficiarios_distintos?: number;
      /** @example 3 */
      partidos_distintos?: number;
      /** @description Breakdown por ano (ano decrescente) */
      por_ano?: components["schemas"]["DoacoesResumoPorAno"][];
      /** @description Breakdown por partido (valor decrescente) */
      por_partido?: components["schemas"]["DoacoesResumoPorPartido"][];
    };
    DoacoesResumoPorAno: {
      /** @example 2022 */
      ano?: number;
      /** @example 8000 */
      valor?: number;
      /** @example 3 */
      quantidade?: number;
    };
    DoacoesResumoPorPartido: {
      /** @example XYZ */
      partido?: string;
      /** @example 8000 */
      valor?: number;
      /** @example 3 */
      quantidade?: number;
    };
    DocumentosErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /**
         * @description Codigo do erro (ex: VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED)
         * @example VALIDATION_ERROR
         */
        codigo?: string;
        /**
         * @description Mensagem descritiva do erro
         * @example CPF invalido
         */
        mensagem?: string;
      };
    };
    DocumentosResponse: {
      page?: number;
      page_size?: number;
      total_items?: number;
      results?: components["schemas"]["DocumentResult"][];
    };
    DocumentResult: {
      /** @description Tipo do documento (rotulo legivel). Valores: "Diario Oficial de Sao Paulo" (DOSP) ou "Diario Judicial" (PJE). */
      type?: string;
      title?: string;
      description?: string;
      /** @description Trecho do conteudo com o match */
      text?: string;
      /** @description URL do documento original */
      link?: string;
      /** @description Nomes mencionados no documento */
      names?: {
        name?: string;
        /** @description Papel do nome no documento: "Mencionado" ou "Advogado" */
        type?: string;
      }[];
      /** @description Data da publicacao. Sempre null para a fonte PJE. */
      date?: string | null;
      /**
       * @description Fonte do documento: "DOSP" (Diario Oficial de Sao Paulo) ou "PJE" (Diario Judicial).
       * @enum {string}
       */
      source?: "DOSP" | "PJE";
    };
    DominiosDominio: {
      /**
       * @description Nome do dominio
       * @example empresa.com.br
       */
      dominio?: string;
      /**
       * @description Se o dominio esta ativo/registrado
       * @example true
       */
      registrado?: boolean;
      /**
       * @description Data de criacao do registro
       * @example 2015-03-12
       */
      data_criacao?: string;
      /**
       * @description Data da ultima atualizacao
       * @example 2023-11-01
       */
      data_atualizacao?: string;
      /**
       * @description Data de expiracao do registro
       * @example 2025-03-12
       */
      data_expiracao?: string;
      registrador?: components["schemas"]["Registrador"];
      registrante?: components["schemas"]["Registrante"];
    };
    DominiosEmail: {
      /** @example contato@empresa.com.br */
      email?: string;
      /** @example empresa.com.br */
      dominio?: string;
      /** @example true */
      corporativo?: boolean;
    };
    DominiosErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /** @example VALIDATION_ERROR */
        codigo?: string;
        /** @example CPF invalido */
        mensagem?: string;
      };
    };
    DominiosResponse: {
      /** @description CPF ou CNPJ consultado */
      documento?: string;
      /**
       * @description Total de dominios encontrados
       * @example 2
       */
      total?: number;
      dominios?: components["schemas"]["DominiosDominio"][];
    };
    DominiosTelefone: {
      /** @example 55 */
      ddi?: string;
      /** @example 11 */
      ddd?: string;
      /** @example 987654321 */
      numero?: string;
      /** @example 5511987654321 */
      numero_completo?: string;
      /** @example SP */
      estado?: string;
      /** @example  */
      operadora?: string;
      /** @example false */
      tem_whatsapp?: boolean;
    };
    Dossie: {
      /** Format: uuid */
      id: string;
      /** @enum {string} */
      object: "dossie";
      /** @enum {string} */
      status:
        | "queued"
        | "running"
        | "completed"
        | "needs_review"
        | "failed"
        | "cancelled";
      /**
       * @description null para provided_data sem documento.
       * @enum {string|null}
       */
      subject_type: "cpf" | "cnpj" | null;
      /** @enum {string} */
      kind: "basic" | "advanced";
      current_attempt: components["schemas"]["Attempt"];
      coverage?: {
        [key: string]: unknown;
      };
      result?: {
        /** @description Seções do relatório gerado. */
        report_schema?: {
          [key: string]: unknown;
        }[];
        risk_classification?: components["schemas"]["DossieRiskClassification"];
      } & {
        [key: string]: unknown;
      };
      failure?: {
        [key: string]: unknown;
      };
      artifacts: components["schemas"]["Artifact"][];
      stale: boolean;
      poll_after_seconds?: number;
      /** Format: date-time */
      created_at: string;
      /** Format: date-time */
      updated_at: string;
      /** @enum {string} */
      mode?: "standard" | "modular" | "provided_data";
      risk_classification?: components["schemas"]["DossieRiskClassification"];
    };
    /** @description Selecione pelo menos um módulo. Chaves omitidas não são consultadas. Os outros módulos consultam apenas o documento principal; max_degree controla somente connections. */
    DossieModules: {
      /** @description Expansão de parentes e participações societárias de 1 a 3 graus, limitada a 200 entidades. Exceder o limite falha o job. */
      connections?: {
        max_degree: number;
      };
      /** @description Registros e candidatos em LinkedIn, Instagram e Facebook. Resultados de busca não confirmam titularidade. */
      social_media?: Record<string, never>;
      /** @description Paginação até 500 registros. Acima disso, coverage será partial e a matriz retornará insufficient_data. */
      lawsuits?: {
        /** @description Categorias são combinadas; case_numbers restringe os processos dentro das categorias, sempre vinculados ao documento principal. */
        filters?: {
          categories?: ("criminal" | "civil" | "labor" | "tax")[];
          case_numbers?: string[];
        };
      };
      /** @description Fonte de protestos disponível, atualmente São Paulo, sem cobertura nacional. */
      protests?: Record<string, never>;
    };
    /** @description Conteúdo literal enviado pelo cliente. Gera relatório/PDF sem investigação, enriquecimento ou verificação externa; o relatório identifica essa origem. */
    DossieProvidedData: {
      title: string;
      subject?: {
        name: string;
      };
      summary?: string;
      sections: components["schemas"]["DossieProvidedSection"][];
    };
    /** @description Seção com id único no relatório; exige text, items ou ambos. items aceita objetos JSON com chaves livres. */
    DossieProvidedSection: {
      id: string;
      title: string;
      text?: string;
      items?: {
        [key: string]: components["schemas"]["JsonValue"];
      }[];
    };
    /** @description Resultado determinístico disponível após avaliar a matriz, também incluído no relatório e em result.risk_classification. Dados obrigatórios ausentes ou coleta parcial retornam insufficient_data, com score e level null. */
    DossieRiskClassification: {
      matrix_id: string;
      matrix_version: string;
      /** @enum {string} */
      status: "classified" | "insufficient_data";
      /**
       * @description Baixo, médio ou alto, conforme thresholds; null se os dados forem insuficientes.
       * @enum {string|null}
       */
      level: "low" | "medium" | "high" | null;
      /** @description Soma das regras correspondentes, cada uma uma vez, limitada a 100. */
      score: number | null;
      matched_rules: {
        id: string;
        score: number;
        description?: string;
      }[];
      /** @description Caminhos exigidos sem dados adequados. Coleta parcial também impede classificação, mesmo sem campos faltantes. */
      missing_fields: string[];
    };
    /** @description Política determinística enviada pelo cliente; exige public_api_dossies_custom em qualquer modo. A soma é limitada a 100. Limiares exigem medium_min < high_min e IDs de regras únicos. */
    DossieRiskMatrix: {
      id: string;
      version: string;
      thresholds: {
        medium_min: number;
        high_min: number;
      };
      rules: components["schemas"]["DossieRiskRule"][];
    };
    /** @description Cada regra soma score uma única vez se qualquer valor do path corresponder. IDs devem ser únicos. value é obrigatório, exceto para exists; operadores numéricos exigem número e contains exige string. */
    DossieRiskRule: {
      id: string;
      /** @description Chaves separadas por ponto e [] para listas. Raiz data no provided_data, modules no modular e investigation no standard. Não aceita scripts, índices nem filtros JSONPath. */
      path: string;
      /** @enum {string} */
      operator: "eq" | "contains" | "exists" | "gte" | "gt" | "lte" | "lt";
      value?: string | number | boolean;
      score: number;
      /**
       * @description Se true, ausência de valor não nulo (ou numérico para comparadores numéricos) impede classificação. Use false para campos opcionais.
       * @default true
       */
      required: boolean;
      description?: string;
    };
    /** @description Pessoas associadas ao email consultado */
    EmailReversoResponse: {
      /** @description Email consultado (normalizado) */
      email?: string;
      pessoas?: components["schemas"]["PessoaReversa"][];
    };
    EmpresaResponse: {
      /** @description CNPJ formatado */
      documento?: string;
      /** @enum {string} */
      tipo_documento?: "CNPJ";
      /** @description CNPJ raiz (8 dígitos) */
      cnpj_basico?: string;
      razao_social?: string;
      nome_fantasia?: string | null;
      /** @description Ativa, Baixada, Inapta, Suspensa, Nula */
      situacao?: string;
      /** @description Data ISO da situação cadastral */
      data_situacao?: string;
      motivo_situacao?: string | null;
      /** @description Data ISO de início das atividades */
      data_abertura?: string;
      capital_social?: number;
      /** @description Micro empresa, Empresa de pequeno porte, Médio ou Grande porte */
      porte?: string | null;
      /** @description Matriz ou Filial */
      matriz_filial?: string | null;
      natureza_juridica?: {
        /** @description Código numérico da natureza jurídica */
        codigo?: string;
        descricao?: string;
      };
      atividade_principal?: {
        /** @description Código CNAE */
        codigo?: string;
        descricao?: string;
      } | null;
      atividades_secundarias?: {
        codigo?: string;
        descricao?: string;
      }[];
      endereco?: {
        logradouro?: string;
        numero?: string;
        complemento?: string | null;
        bairro?: string;
        cidade?: string;
        uf?: string;
        cep?: string;
      };
      telefones?: {
        ddi?: string;
        ddd?: string;
        numero?: string;
        numero_completo?: string;
        estado?: string;
        operadora?: string;
      }[];
      emails?: {
        email?: string;
        dominio?: string;
        corporativo?: boolean;
      }[];
      socios?: {
        nome?: string;
        /** @description CPF ou CNPJ formatado. Null quando o CPF do sócio está mascarado e não pôde ser resolvido */
        documento?: string | null;
        /** @description CPF ou CNPJ */
        tipo_documento?: string;
        /** @description Pessoa Física ou Pessoa Jurídica */
        tipo?: string;
        qualificacao?: string;
        data_entrada?: string;
        /** @description País do sócio (padrão Brasil) */
        pais?: string;
        /** @description Fonte do vínculo societário (ex: qsa) */
        origem?: string;
        /** @description Somente Pessoa Física */
        data_nascimento?: string | null;
        /** @description Somente Pessoa Física */
        sexo?: string | null;
        /** @description Somente Pessoa Física */
        idade?: number | null;
        /** @description Somente Pessoa Física */
        faixa_etaria?: string | null;
        /** @description Representante legal, somente Pessoa Jurídica */
        representante?: {
          nome?: string;
          documento?: string | null;
          qualificacao?: string;
        } | null;
      }[];
      situacao_especial?: string | null;
      data_situacao_especial?: string | null;
    };
    EmpresasErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /**
         * @description Codigo do erro (ex: VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED)
         * @example VALIDATION_ERROR
         */
        codigo?: string;
        /**
         * @description Mensagem descritiva do erro
         * @example CPF invalido
         */
        mensagem?: string;
      };
    };
    EmpresasSocio: {
      /** @description CPF ou CNPJ formatado do socio */
      documento?: string;
      /** @enum {string} */
      tipo_documento?: "CPF" | "CNPJ";
      nome?: string;
      /** @description Pessoa Fisica, Pessoa Juridica */
      tipo?: string;
      qualificacao?: string;
      data_entrada?: string;
      faixa_etaria?: string | null;
      /** @description Somente para Pessoa Fisica */
      data_nascimento?: string | null;
      /** @description Somente para Pessoa Fisica */
      sexo?: string | null;
      /** @description Somente para Pessoa Fisica */
      idade?: number | null;
      /** @description Somente para Pessoa Juridica */
      representante?: {
        nome?: string;
        documento?: string;
        qualificacao?: string;
      } | null;
    };
    /** @description Empresa vinculada a pessoa fisica (como socio ou responsavel) */
    EmpresaVinculada: {
      /**
       * @description CNPJ formatado da empresa (00.000.000/0000-00)
       * @example 12.345.678/0001-95
       */
      documento?: string;
      /**
       * @example CNPJ
       * @enum {string}
       */
      tipo_documento?: "CNPJ";
      /**
       * @description Razao social da empresa
       * @example EMPRESA LTDA
       */
      razao_social?: string;
      /**
       * @description Nome fantasia da empresa
       * @example EMPRESA
       */
      nome_fantasia?: string;
    };
    /** @description Endereco onde a pessoa mora/morou cruzado com imoveis cujo proprietario e outra pessoa. */
    EnderecoResidido: {
      endereco?: components["schemas"]["LocalizacaoEndereco"];
      proprietarios?: components["schemas"]["ProprietarioEndereco"][];
    };
    Error: {
      status: number;
      code: string;
      detail: string;
      request_id: string;
      retryable: boolean;
    };
    Escritura: {
      /** @description Identificadores do ato na CENSEC. Mais de um quando o cartório enviou o mesmo ato em cargas diferentes. */
      ids_fonte?: string[];
      /** @description `Inventario`, `InventarioComMenorOuIncapaz`, `Partilha`, `Sobrepartilha`, `NomeacaoDeInventariante`, `DivorcioDireto`, `Separacao`, `ConversaoDeSeparacaoEmDivorcio`, `Reconciliacao`, `Retificacao`, `RetificacaoAtoNaoNotarial`. */
      tipo?: string | null;
      /** @example Inventário */
      tipo_descricao?: string | null;
      /**
       * Format: date
       * @description Data da lavratura.
       */
      data?: string | null;
      livro?: string | null;
      livro_complemento?: string | null;
      folha?: string | null;
      folha_complemento?: string | null;
      cartorio?: components["schemas"]["Cartorio"];
      /** Format: date-time */
      incluida_na_censec_em?: string | null;
      /** @description Papéis do documento consultado neste ato. */
      qualidades_consultado?: string[];
      mne?: string | null;
      valor?: (number | string) | null;
      /** @example Ambos cônjuges */
      responsavel?: string | null;
      numero_controle?: string | null;
      complementacao?: string | null;
      /** Format: date */
      data_contrato?: string | null;
      /** Format: date */
      data_validade?: string | null;
      /** Format: date */
      data_casamento?: string | null;
      /** @example Comunhão parcial */
      regime_bens?: string | null;
      filhos_maiores?: number | null;
      filhos_menores?: number | null;
      existe_bem_e_direito?: boolean | null;
      /** @description Bens informados no ato, no formato da CENSEC. */
      bens_imoveis?: Record<string, never>[];
      /** @description Atos referentes (ex.: retificações), no formato da CENSEC. */
      referentes?: Record<string, never>[];
      /** @description Todas as partes do ato. `null` quando a CENSEC não devolveu o detalhe. */
      partes?: components["schemas"]["EscriturasParte"][] | null;
    };
    EscriturasErrorResponse: {
      statusCode?: number;
      error?: string;
      message?: string;
    };
    EscriturasParte: {
      /** @description Nome como registrado no ato. Menor de idade: `[Menor de Idade, Protegido pela LGPD]`. */
      nome?: string | null;
      /** @description CPF ou CNPJ sem máscara. Menor de idade: `***.***.***-**`. */
      cpf_cnpj?: string | null;
      /** @description Papel no ato, como a CENSEC registra: `Falecido`, `Herdeiro`, `Viuvo`, `Inventariante`, `Divorciando`, `Separando`, `Advogado`, `Cedente`, `Anuente` etc. */
      qualidade?: string | null;
      /** Format: date */
      data_nascimento?: string | null;
      /** @example F */
      sexo?: string | null;
      estrangeiro?: boolean | null;
      /** @description Em divórcio e separação: `Conjuge1` ou `Conjuge2`. */
      conjuge_tipo?: string | null;
      naturalidade_uf?: string | null;
      residencia?: {
        municipio?: string | null;
        uf?: string | null;
      } | null;
      /** @description Demais documentos (RG, OAB, passaporte). Vazio quando a parte é menor ou tem idade desconhecida (exceto advogado). */
      documentos?: {
        /** @example Rg */
        tipo?: string | null;
        numero?: string | null;
        uf?: string | null;
      }[];
      /** @description `menor_de_idade` quando nome e documentos foram protegidos (LGPD). */
      mascarado_motivo?: string;
    };
    EscriturasResponse: {
      documento?: string;
      /** @enum {string} */
      tipo_documento?: "cpf" | "cnpj";
      /** @example CENSEC/CESDI */
      fonte?: string;
      /** Format: date-time */
      consultado_em?: string;
      /** @description Escrituras distintas encontradas. */
      total?: number;
      /** @description A CENSEC devolve no máximo 300 linhas por busca. */
      possivelmente_truncado?: boolean;
      cobertura?: string;
      escrituras?: components["schemas"]["Escritura"][];
    };
    FiscalizacaoRow: {
      /** @description Numero do auto de infracao */
      numero_auto?: string;
      tipo_auto?: string;
      /** @description CPF/CNPJ do infrator (somente digitos) */
      documento?: string;
      /** @enum {string} */
      tipo?: "PF" | "PJ";
      nome_infrator?: string;
      municipio?: string;
      uf?: string;
      descricao_dano?: string;
      /** @description Area embargada em hectares */
      area_embargada?: number;
      latitude?: number;
      longitude?: number;
      data_auto?: string;
      /** @description Valor da multa em reais */
      valor_multa?: number;
      situacao_debito?: string;
    };
    Funcionario: {
      /** @description CPF formatado */
      cpf?: string;
      nome?: string;
      data_nascimento?: string | null;
      /** @description Masculino ou Feminino */
      sexo?: string | null;
      cargo?: string | null;
      /** @description ativo ou inativo */
      status?: string;
      data_admissao?: string | null;
      data_desligamento?: string | null;
      remuneracao?: {
        valor?: number | null;
        estimativa_minima?: number | null;
        estimativa_maxima?: number | null;
        faixa?: string | null;
      } | null;
      vinculo?: {
        nivel?: string | null;
        setor?: {
          tipo?: string | null;
          codigo?: string | null;
          descricao?: string | null;
        } | null;
      } | null;
      contatos?: {
        telefone?: {
          ddi?: string;
          ddd?: string;
          numero?: string;
          numero_completo?: string;
          estado?: string;
          operadora?: string;
        } | null;
        email?: {
          email?: string;
          dominio?: string;
          corporativo?: boolean;
        } | null;
      } | null;
    };
    HistoricoItem: {
      /** @description Situacao da inscricao. String vazia quando ausente na fonte. */
      situacao?: string;
      valor?: number | null;
      /**
       * Format: date
       * @description Data da inscricao (YYYY-MM-DD). String vazia quando ausente na fonte.
       */
      data_inscricao?: string;
    };
    /** @description Resposta de /imoveis/cnpj/{cnpj}. NAO inclui nome, parentes nem enderecos_resididos; itens de propriedades sao ImovelRecord puro (sem tipo_propriedade/quantidade). */
    ImoveisCnpjResponse: {
      /** @description CNPJ formatado 00.000.000/0000-00 */
      documento?: string;
      /** @enum {string} */
      tipo_documento?: "CNPJ";
      propriedades?: components["schemas"]["ImovelRecord"][];
    };
    /** @description Resposta de /imoveis/cpf/{cpf}. */
    ImoveisCpfResponse: {
      /** @description CPF formatado 000.000.000-00 */
      documento?: string;
      /** @enum {string} */
      tipo_documento?: "CPF";
      propriedades?: components["schemas"]["PropriedadeUrbana"][];
      parentes?: components["schemas"]["ParenteImoveis"][];
      enderecos_resididos?: components["schemas"]["EnderecoResidido"][];
    };
    /** @description Envelope de erro para excecoes lancadas (ex: 401/500). */
    ImoveisErrorResponse: {
      /** @example 401 */
      statusCode?: number;
      /** @example Unauthorized */
      message?: string;
      /** @example /api/v1/imoveis/cpf/12345678901 */
      path?: string;
      /** Format: date-time */
      timestamp?: string;
    };
    /** @description Imovel registrado em nome da pessoa ou empresa */
    Imovel: {
      /**
       * @description Identificador unico interno do imovel
       * @example a1b2c3
       */
      id?: string;
      /**
       * @description Fonte dos dados do imovel (codigo da cidade)
       * @example bh
       */
      fonte?: string;
      /**
       * @description Numero SQL/IPTU do imovel
       * @example 0123456789
       */
      sql_iptu?: string;
      /**
       * @description Numero da inscricao imobiliaria municipal
       * @example 0123456789
       */
      inscricao?: string;
      localizacao?: components["schemas"]["LocalizacaoImovel"];
      /**
       * @description Area do terreno em metros quadrados
       * @example 360
       */
      area_terreno?: number;
      /**
       * @description Area construida em metros quadrados
       * @example 180
       */
      area_construida?: number;
      /**
       * @description Ano de construcao do imovel
       * @example 1995
       */
      ano_construcao?: number;
      /**
       * @description Tipo de uso do imovel (RESIDENCIAL, COMERCIAL, INDUSTRIAL, etc.)
       * @example RESIDENCIAL
       */
      tipo_uso?: string;
      /**
       * @description Valor venal do imovel em reais
       * @example 450000
       */
      valor_venal?: number;
      /**
       * @description Valor anual do IPTU em reais
       * @example 2400
       */
      valor_iptu?: number;
      /** @description Proprietario do imovel. ATENCAO: o campo do tipo de documento usa camelCase (tipoDocumento), diferente do padrao snake_case do restante da API. */
      proprietario?: {
        /**
         * @description Nome do proprietario (string vazia se indisponivel)
         * @example MARIA DA SILVA
         */
        nome?: string;
        /**
         * @description CPF/CNPJ do proprietario (somente digitos), ou null
         * @example 12345678901
         */
        documento?: string | null;
        /**
         * @description Tipo do documento. Ausente quando o documento e vazio/invalido (campo opcional, camelCase).
         * @example CPF
         * @enum {string}
         */
        tipoDocumento?: "CPF" | "CNPJ";
      };
    };
    /** @description Item de propriedades de um parente: ImovelRecord acrescido de tipo_propriedade. NAO inclui quantidade (nao passa pelo agrupamento). */
    ImovelParente: components["schemas"]["ImovelRecord"] & {
      /** @enum {string} */
      tipo_propriedade?: "urbano";
    };
    ImovelRecord: {
      id?: string;
      /** @description Plataforma/origem do dado IPTU municipal (ex: betha, elotech, sia) */
      fonte?: string;
      sql_iptu?: string;
      /** @description Inscricao municipal */
      inscricao?: string;
      localizacao?: components["schemas"]["Localizacao"];
      /** @description Area do terreno em m2 */
      area_terreno?: number;
      /** @description Area construida em m2 */
      area_construida?: number;
      ano_construcao?: number;
      /** @description Residencial, comercial, etc */
      tipo_uso?: string;
      /** @description Valor venal em reais */
      valor_venal?: number;
      /** @description IPTU anual em reais */
      valor_iptu?: number;
      proprietario?: components["schemas"]["Proprietario"];
    };
    /** @description Uma violação de regra anexada a um nó da árvore (cedente, sacado ou título). */
    Issue: {
      /**
       * @description Identificador estável da regra violada (ex.: SACADO_PROTESTOS).
       * @example SACADO_PROTESTOS
       */
      rule_id?: string;
      /**
       * @description Nome legível da regra.
       * @example Protestos
       */
      rule_name?: string;
      /**
       * @description Categoria da regra: blocking (impeditiva) ou alert (ponto de atenção).
       * @enum {string}
       */
      category?: "blocking" | "alert";
      /**
       * @description Efeito da violação no nó.
       * @enum {string}
       */
      status?: "blocked" | "alerted";
      /**
       * @description Mensagem legível da violação.
       * @example Sacado: Protestos encontrados
       */
      message?: string;
      /** @description Detalhe estruturado da violação. */
      detail?: {
        /** @example protestos */
        field?: string;
        /** @example 3 */
        actual?: string;
        /** @example 0 */
        expected?: string;
      };
      /** @description Fontes de dados que embasaram a violação. */
      data_sources?: {
        /** @example cenprot */
        name?: string;
        /** Format: date-time */
        fetched_at?: string | null;
        /** @example 3 */
        age_days?: number;
      }[];
    };
    JobRef: {
      jobId?: string;
      /** @example processing */
      status?: string;
      /** @example /api/v1/escrituras/jobs/3f2c1a9e-0000-4000-8000-000000000000 */
      statusUrl?: string;
    };
    JobStatus: {
      jobId?: string;
      /** @enum {string} */
      status?: "waiting" | "active" | "completed" | "failed";
      /** @description Epoch em ms */
      createdAt?: number;
      /** @description Epoch em ms */
      finishedAt?: number;
      result?: components["schemas"]["EscriturasResponse"];
      /** @description Presente quando `status` é `failed`. */
      error?: string;
    };
    /** @description Qualquer valor JSON: string, número, booleano, null, objeto ou lista. */
    JsonValue: unknown;
    LenteAnalysis: {
      /** Format: uuid */
      id: string;
      /** @enum {string} */
      object: "lente_analysis";
      /** @enum {string} */
      mode: "geo" | "face";
      /** @enum {string} */
      status:
        | "awaiting_upload"
        | "queued"
        | "running"
        | "completed"
        | "failed"
        | "cancelled"
        | "expired";
      file: {
        /** @enum {string} */
        media_type?: "image/jpeg" | "image/png" | "image/webp";
        size_bytes?: number;
        sha256?: string;
        /** @enum {string} */
        upload_status?: "pending" | "verified" | "rejected" | "expired";
      };
      /** @description Presente enquanto o arquivo aguarda envio. */
      upload?: {
        /** @enum {string} */
        method?: "PUT";
        /** Format: uri */
        url?: string;
        headers?: {
          [key: string]: string;
        };
        /** Format: date-time */
        expires_at?: string;
      };
      billing: {
        /** @enum {string} */
        status?:
          | "not_charged"
          | "charge_pending"
          | "charged"
          | "refund_pending"
          | "refunded";
        amount?: number;
        /** @enum {string} */
        unit?: "tokens";
      };
      /** @description Hipóteses e evidências do modo selecionado. */
      result?: {
        [key: string]: unknown;
      };
      failure?: {
        [key: string]: unknown;
      };
      artifacts: {
        id?: string;
        /** @enum {string} */
        type?: "input_image";
        /** @enum {string} */
        status?: "available" | "temporarily_unavailable";
        /** Format: uri */
        url?: string;
        /** Format: date-time */
        url_expires_at?: string;
        available_until?: string | null;
      }[];
      poll_after_seconds?: number;
      /** Format: date-time */
      submitted_at?: string;
      /** Format: date-time */
      started_at?: string;
      /** Format: date-time */
      completed_at?: string;
      /** Format: date-time */
      created_at: string;
      /** Format: date-time */
      updated_at: string;
    };
    Licitacao: {
      /** Format: uuid */
      id?: string;
      /** @description Numero da licitacao no sistema de origem */
      id_licitacao?: string;
      /** @description Numero do pregao. String vazia quando ausente na fonte (nunca null). */
      id_pregao?: string;
      /** @description Codigo UASG do orgao */
      id_uasg?: string;
      /** @description Titulo do edital */
      titulo?: string;
      /** @description Descricao do objeto da licitacao */
      descricao?: string;
      /**
       * @description Fonte dos dados
       * @example PNCP
       */
      fonte?: string;
      /**
       * @description Modalidade de contratacao
       * @example Pregao Eletronico
       */
      modalidade?: string;
      /**
       * @description Tipo de disputa
       * @example Aberto
       */
      tipo_disputa?: string;
      /**
       * Format: date
       * @description Data de publicacao
       */
      data_publicacao?: string;
      /**
       * Format: date
       * @description Data de inicio da vigencia
       */
      data_inicio?: string;
      /**
       * Format: date
       * @description Data de fim da vigencia
       */
      data_fim?: string;
      /**
       * @description UF do orgao
       * @example SP
       */
      uf?: string;
      /**
       * @description Municipio do orgao
       * @example Sao Paulo
       */
      local?: string;
      /** @description Exclusivo para ME/EPP */
      exclusivoMEEPP?: boolean;
      /** @description Itens da licitacao */
      items?: components["schemas"]["LicitacaoItem"][];
      /** @description Todos os participantes da licitacao */
      participantes?: components["schemas"]["LicitacaoParticipante"][];
    };
    LicitacaoItem: {
      /**
       * Format: uuid
       * @description ID interno da licitacao
       */
      id?: string;
      /** @description Codigo do item */
      codigo?: string;
      /** @description Descricao do item */
      descricao?: string;
      /** @description Quantidade */
      quantidade?: number;
      /** @description Valor total em reais */
      valor_total?: number;
      decreto7174?: boolean;
      /** @description Exclusivo para ME/EPP */
      exclusivoMEEPP?: boolean;
    };
    LicitacaoParticipante: {
      /** Format: uuid */
      id?: string;
      /** @description CPF ou CNPJ do participante, formatado (ex: 039.167.186-30). Observacao: difere do campo documento no nivel raiz da resposta, que vem apenas com digitos. */
      documento?: string;
      /** @description Nome ou razao social */
      nome?: string;
      /**
       * @description Tipo de pessoa
       * @enum {string}
       */
      tipo?: "PF" | "PJ";
      /** @description Total de licitacoes do participante */
      totalLicitacoes?: number;
    };
    LicitacoesErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /** @example VALIDATION_ERROR */
        codigo?: string;
        /** @example CPF invalido */
        mensagem?: string;
      };
    };
    LicitacoesResponse: {
      /** @description Documento consultado, apenas digitos (sem formatacao). Observacao: difere de participantes[].documento, que vem formatado. */
      documento?: string;
      /** @description Total de licitacoes encontradas */
      total?: number;
      licitacoes?: components["schemas"]["Licitacao"][];
    };
    LinhaDoTempoCobertura: {
      /** @description 1o mes coberto (YYYY-MM), ou null se nada foi processado */
      dados_a_partir_de?: string | null;
      /** @description Meses com processamento concluido (YYYY-MM), ascendente */
      meses_disponiveis?: string[];
      /** @description Aviso sobre cobertura parcial e o significado de estado_inicial */
      aviso?: string;
    };
    LinhaDoTempoResponse: {
      /** @description CNPJ consultado, formatado */
      cnpj?: string;
      cobertura?: components["schemas"]["LinhaDoTempoCobertura"];
      /** @description Quantidade de eventos devolvidos */
      retornados?: number;
      /** @description true quando retornados bateu no limite (ha mais eventos) */
      truncado?: boolean;
      linha_do_tempo?: components["schemas"]["TimelineEvent"][];
    };
    ListasRestritivasErrorResponse: {
      /** @example 400 */
      statusCode?: number;
      /** @example CNPJ invalido */
      message?: string;
      /** @example /api/v1/listas-restritivas/cnpj/11111111111111 */
      path?: string;
      /** @example 2026-06-17T10:45:18.042Z */
      timestamp?: string;
    };
    ListasRestritivasResponse: {
      documento?: {
        /** @enum {string} */
        tipo?: "cpf" | "cnpj";
        /** @description Apenas digitos */
        numero?: string;
        nome?: string | null;
        /**
         * @description informado=veio na query; resolvido=resolvido da base interna; nao_resolvido=nao encontrado
         * @enum {string}
         */
        nome_origem?: "informado" | "resolvido" | "nao_resolvido";
      };
      /** @description ISO 8601 */
      consultado_em?: string;
      resumo?: components["schemas"]["ResumoListasRestritivas"];
      grupos?: {
        sancoes?: components["schemas"]["Ocorrencia"][];
        restritivas?: components["schemas"]["Ocorrencia"][];
        alertas?: components["schemas"]["Ocorrencia"][];
      };
      cobertura?: components["schemas"]["CoberturaItem"][];
    };
    /** @description Endereco completo do imovel (logradouro/bairro/cidade vem em Title Case). */
    Localizacao: {
      logradouro?: string;
      numero?: string;
      complemento?: string;
      bairro?: string;
      cidade?: string;
      uf?: string;
      cep?: string;
    };
    /** @description Endereco usado em enderecos_resididos. NAO inclui campo complemento. */
    LocalizacaoEndereco: {
      logradouro?: string;
      numero?: string;
      bairro?: string;
      cidade?: string;
      uf?: string;
      /** @description Formatado 00000-000 */
      cep?: string;
    };
    /** @description Localizacao do imovel */
    LocalizacaoImovel: {
      /**
       * @description Nome da rua, avenida ou logradouro
       * @example R EXEMPLO
       */
      logradouro?: string;
      /**
       * @description Numero do imovel
       * @example 100
       */
      numero?: string;
      /**
       * @description Complemento do endereco
       * @example
       */
      complemento?: string;
      /**
       * @description Nome do bairro
       * @example CENTRO
       */
      bairro?: string;
      /**
       * @description Nome da cidade
       * @example BELO HORIZONTE
       */
      cidade?: string;
      /**
       * @description Sigla da unidade federativa
       * @example MG
       */
      uf?: string;
      /**
       * @description CEP no formato 00000-000
       * @example 30130-000
       */
      cep?: string;
    };
    Monitor: {
      /** Format: uuid */
      id: string;
      /** @enum {string} */
      object: "monitor";
      /** @enum {string} */
      status: "active" | "paused" | "cancelled";
      name?: string;
      identifier: string;
      /** @enum {string} */
      identifier_type: "cpf" | "cnpj";
      listen_items: ("company" | "debts" | "processes" | "partners")[];
      emails: string[];
      frequency_hours: number;
      health: {
        /** @enum {string} */
        status?: "unknown" | "healthy" | "degraded" | "failing";
        consecutive_failures?: number;
        /** Format: date-time */
        last_cycle_at?: string | null;
      };
      subscription: {
        /** @enum {string} */
        status?:
          | "included"
          | "extra_active"
          | "past_due"
          | "release_pending"
          | "released";
        id?: string;
      };
      execution_allowed: boolean;
      /** @enum {string|null} */
      blocking_reason?:
        | "monitor_paused"
        | "monitor_cancelled"
        | "payment_required"
        | "feature_disabled"
        | null;
      /** Format: date-time */
      created_at: string;
      /** Format: date-time */
      updated_at: string;
    };
    MotorAnaliseAnalysis: {
      /**
       * Format: uuid
       * @description UUID da análise.
       */
      id: string;
      /**
       * @description Estado do ciclo de vida da análise.
       * @enum {string}
       */
      status: "pending" | "running" | "completed" | "failed";
      /**
       * @description Tipo do analisado.
       * @enum {string}
       */
      subject_type: "pj" | "pf";
      /** @description Documento (CNPJ/CPF) analisado, apenas dígitos. */
      document: string;
      /**
       * @description Veredito final de risco; null enquanto pending/running. incompleto = algum bloco ficou unavailable (ver coverage).
       * @enum {string|null}
       */
      verdict?: "aprovado" | "alerta" | "reprovado" | "incompleto" | null;
      /** @description Resultados individuais dos blocos; null até a análise terminar. */
      blocks?: components["schemas"]["AnalysisBlock"][] | null;
      /** @description Relatório de cobertura das fontes de dados; null até a análise terminar. */
      coverage?: components["schemas"]["AnalysisCoverage"][] | null;
      /** @description Tokens debitados por esta análise. */
      tokens_charged?: number;
      /** @description Saldo de tokens do workspace após o débito. */
      balance?: number;
      /**
       * Format: date-time
       * @description Timestamp ISO 8601 de criação.
       */
      created_at: string;
      /**
       * Format: date-time
       * @description Timestamp ISO 8601 de término (completed ou failed); null enquanto em andamento.
       */
      finished_at?: string | null;
      /** @description Segundos a aguardar antes do próximo poll. Presente apenas em estados não-terminais (pending/running). */
      poll_after_seconds?: number;
      /** @description Identificador da requisição para rastreio e suporte. */
      request_id?: string;
    };
    /** @description Erro no formato RFC 7807 (application/problem+json). Use o campo code para tratamento programático; type é apenas identificador. */
    MotorAnaliseProblem: {
      /** @description URI que identifica o tipo do problema (https://docs.sherlocker.com.br/problems/<code>). */
      type: string;
      /** @description Resumo curto do tipo do problema. */
      title: string;
      /** @description Status HTTP desta ocorrência. */
      status: number;
      /** @description Código estável para tratamento programático (ex.: insufficient_tokens). */
      code: string;
      /** @description Explicação legível específica desta ocorrência. */
      detail?: string;
      /** @description Identificador da ocorrência (/v1?request_id=<request_id>). */
      instance?: string;
      /** @description Erros de validação por campo. Presente apenas em validation_error (400). */
      errors?: {
        field?: string;
        message?: string;
      }[];
      /** @description Tokens necessários. Presente apenas em insufficient_tokens (402). */
      required?: number;
      /** @description Saldo atual de tokens. Presente apenas em insufficient_tokens (402). */
      balance?: number;
      /** @description Onde solicitar acesso. Presente apenas em feature_not_enabled (403). */
      request_access_url?: string;
    };
    /** @description Erro no formato RFC 7807 (application/problem+json). Use o campo code para tratamento programático; type é apenas identificador. */
    MotorCreditoProblem: {
      /** @description URI que identifica o tipo do problema (https://docs.sherlocker.com.br/problems/<code>). */
      type: string;
      /** @description Resumo curto do tipo do problema. */
      title: string;
      /** @description Status HTTP desta ocorrência. */
      status: number;
      /** @description Código estável para tratamento programático (ex.: insufficient_tokens). */
      code: string;
      /** @description Explicação legível específica desta ocorrência. */
      detail?: string;
      /** @description Identificador da ocorrência (/v1?request_id=<request_id>). */
      instance?: string;
      /** @description Erros de validação por campo (file, xmls, cedente_cnpj). Presente apenas em validation_error (400). */
      errors?: {
        field?: string;
        message?: string;
      }[];
      /** @description Tokens necessários. Presente apenas em insufficient_tokens (402). */
      required?: number;
      /** @description Saldo atual de tokens. Presente apenas em insufficient_tokens (402). */
      balance?: number;
      /** @description Onde solicitar acesso. Presente apenas em feature_not_enabled (403). */
      request_access_url?: string;
      /** @description Identificador da requisição para suporte e rastreabilidade. */
      request_id?: string;
      /** @description Indica se a mesma requisição pode ser repetida mais tarde. */
      retryable?: boolean;
      /** @description Metadados estruturados específicos do erro. */
      context?: {
        [key: string]: unknown;
      };
    };
    Movimentacao: {
      /** @description Data ISO (YYYY-MM-DD) */
      data?: string;
      descricao?: string;
      complemento?: string;
    };
    NfeData: {
      chave_acesso?: string;
      numero?: string;
      emitente?: components["schemas"]["NfeEmitente"];
      destinatario?: components["schemas"]["NfeDestinatario"];
      produtos?: components["schemas"]["NfeProduto"][];
      valor_total?: string;
      nfe?: {
        modelo?: string;
        serie?: string;
        data_emissao?: string;
        situacao?: string;
        eventos?: components["schemas"]["NfeEvento"][];
      };
      protocolo?: {
        numero?: string;
        data_autorizacao?: string;
        status?: string;
        motivo?: string;
      };
    };
    NfeDestinatario: {
      nome?: string;
      cnpj?: string;
      cpf?: string;
      ie?: string;
      uf?: string;
      municipio?: string;
      pais?: string;
    };
    NfeEmitente: {
      nome?: string;
      nome_fantasia?: string;
      cnpj?: string;
      cpf?: string;
      /** @description Inscricao estadual */
      ie?: string;
      uf?: string;
      municipio?: string;
    };
    NfeErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /**
         * @description Codigo do erro (ex: VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED)
         * @example VALIDATION_ERROR
         */
        codigo?: string;
        /**
         * @description Mensagem descritiva do erro
         * @example CPF invalido
         */
        mensagem?: string;
      };
    };
    NfeEvento: {
      /** @description Tipo do evento (cancelamento, carta de correcao, etc) */
      evento?: string;
      protocolo?: string;
      data_autorizacao?: string;
      data_inclusao?: string;
    };
    NfeProduto: {
      /** @description Numero sequencial do item */
      num?: number;
      descricao?: string;
      quantidade?: string;
      unidade_comercial?: string;
      valor_unidade?: string;
      valor_produto?: string;
    };
    NfeResponse: {
      code?: number;
      code_message?: string;
      errors?: string[];
      header?: {
        service?: string;
        parameters?: {
          nfe?: string;
        };
        requested_at?: string;
        elapsed_time_in_milliseconds?: number;
      };
      data_count?: number;
      data?: components["schemas"]["NfeData"][];
    };
    /** @description Dados do registro de obito. Presente apenas quando falecido=true. */
    Obito: {
      /**
       * @description Data do obito (YYYY-MM-DD)
       * @example 2017-07-15
       */
      data_obito?: string;
      /**
       * @description Nome do cartorio onde o obito foi registrado
       * @example Oficial do Rcpn 42 Subdistrito Jabaquara
       */
      cartorio?: string;
    };
    /** @description Um registro encontrado em uma lista. */
    Ocorrencia: {
      /**
       * @description Identificador da lista (ceis, cnep, ceaf, tcu, bcb, sancoes, lista-suja, cepim, acordos-leniencia, ibama, ibama-autos, pep, debarment-multilateral)
       * @example cnep
       */
      lista_id?: string;
      /**
       * @description Nome legivel da fonte do registro
       * @example CNEP
       */
      fonte?: string;
      /**
       * @example sancoes
       * @enum {string}
       */
      grupo?: "sancoes" | "restritivas" | "alertas";
      /**
       * @description Nome como consta na lista
       * @example ACME LTDA
       */
      nome_na_fonte?: string;
      /**
       * @description Nome oficial da lista
       * @example CNEP, Empresas Punidas
       */
      titulo?: string;
      /**
       * @description Orgao sancionador, quando houver
       * @example Controladoria-Geral da Uniao
       */
      orgao?: string;
      /**
       * @description Data ISO (YYYY-MM-DD)
       * @example 2024-01-01
       */
      data_inicio?: string;
      /**
       * @description Data ISO (YYYY-MM-DD)
       * @example 2027-01-01
       */
      data_fim?: string;
      /**
       * @description data_fim >= hoje (true se nao ha data_fim)
       * @example true
       */
      vigente?: boolean;
      /**
       * @description URL oficial da lista
       * @example https://portaldatransparencia.gov.br
       */
      fonte_oficial?: string;
      /**
       * @description YYYY-MM-DD HH:MM:SS
       * @example 2026-06-15 13:00:00
       */
      ultima_atualizacao?: string | null;
      /** @description Payload bruto do registro (campos variam por lista) */
      detalhes?: {
        [key: string]: unknown;
      };
    };
    /** @description Envelope de status da operação. Todos os campos estão sempre presentes; as contagens são null até status completed. */
    Operation: {
      /**
       * Format: uuid
       * @description UUID da operação.
       */
      id: string;
      /**
       * @description Estado do ciclo de vida da operação. Em failed, os tokens são estornados automaticamente.
       * @enum {string}
       */
      status: "queued" | "processing" | "completed" | "failed";
      /** @description Nome do arquivo CNAB enviado. */
      file_name: string;
      /** @description Tamanho do arquivo em bytes. Pode ser null em operações antigas. */
      file_size?: number | null;
      /** @description Engine de borderô efetivamente usada (explícita ou o template do sistema). */
      engine_id: string;
      /** @description Total de títulos do borderô. null até status completed. */
      titulo_count?: number | null;
      /** @description Títulos aprovados. null até status completed. */
      approved_count?: number | null;
      /** @description Títulos bloqueados. null até status completed. */
      blocked_count?: number | null;
      /** @description Títulos em alerta, incluindo os com análise incompleta (fonte indisponível). null até status completed. approved_count + blocked_count + alert_count = titulo_count. */
      alert_count?: number | null;
      /**
       * Format: date-time
       * @description Timestamp ISO 8601 de criação.
       */
      created_at: string;
      /**
       * Format: date-time
       * @description Timestamp ISO 8601 do enfileiramento.
       */
      queued_at: string;
      /**
       * Format: date-time
       * @description Timestamp ISO 8601 do início do processamento; null enquanto queued.
       */
      processing_at?: string | null;
      /**
       * Format: date-time
       * @description Timestamp ISO 8601 da conclusão. Preenchido apenas em completed.
       */
      completed_at?: string | null;
      /** @description Mensagem de erro. Preenchida apenas em failed. */
      error?: string | null;
    };
    /** @description Resultado hierárquico da operação: árvore cedente → sacados → títulos, com issues por nó. */
    OperationResult: {
      /**
       * Format: uuid
       * @description UUID da operação.
       */
      operation_id: string;
      cedente: components["schemas"]["ResultCedente"];
      summary: components["schemas"]["ResultSummary"];
      /** @description Engine de borderô usada na operação. */
      engine_id?: string;
      /**
       * @description Nome da engine.
       * @example Motor Borderô
       */
      engine_name?: string;
      /**
       * Format: date-time
       * @description Timestamp ISO 8601 do resultado.
       */
      timestamp?: string;
      /** @description Cobertura por provider: requested, succeeded e failed_keys. */
      coverage?: components["schemas"]["CoverageEntry"][];
      /** @description Regras não avaliadas por fonte indisponível. */
      degraded_rules?: components["schemas"]["DegradedRule"][];
      /** @description Presente apenas com ?include=execution_plan. Hoje sempre []. */
      execution_plan?: Record<string, never>[];
    };
    Page: {
      next_cursor?: string | null;
      has_more?: boolean;
    };
    /** @description Vinculo familiar da pessoa */
    Parente: {
      /**
       * @description Nome completo do parente
       * @example JOAO DA SILVA
       */
      nome?: string;
      /**
       * @description CPF formatado do parente (000.000.000-00), ou string vazia quando indisponivel
       * @example 987.654.321-00
       */
      documento?: string;
      /**
       * @example CPF
       * @enum {string}
       */
      tipo_documento?: "CPF";
      /**
       * @description Codigo do vinculo familiar (ex: 01)
       * @example 01
       */
      vinculo_codigo?: string;
      /**
       * @description Descricao do vinculo (Conjuge, Pai, Mae, Filho, etc.)
       * @example Pai
       */
      vinculo_nome?: string;
    };
    ParenteImoveis: {
      nome?: string;
      /** @description CPF do parente apenas digitos (sem mascara) */
      cpf?: string;
      /** @description Grau de parentesco (ex: Mae, Conjuge) */
      parentesco?: string;
      propriedades?: components["schemas"]["ImovelParente"][];
    };
    /** @description Empresa beneficiaria do PAT. Todos os campos sao string (nunca null); campos numericos vem como string. */
    PatBeneficiaria: {
      cnpj?: string;
      razao_social?: string;
      matriz_filial?: string;
      uf?: string;
      registro?: string;
      municipio?: string;
      data_cadastro?: string;
      situacao?: string;
      /** @description Trabalhadores que recebem ate 5 salarios minimos (numero em string) */
      trab_ate_5sm?: string;
      /** @description Trabalhadores que recebem acima de 5 salarios minimos (numero em string) */
      trab_acima_5sm?: string;
      /** @description Total de trabalhadores (numero em string) */
      total_trabalhadores?: string;
    };
    PatentesErrorResponse: {
      /** @example false */
      sucesso?: boolean;
      documento?: string;
      /** @enum {string} */
      tipo?: "cpf" | "cnpj";
      /** @example 0 */
      total?: number;
      patentes?: components["schemas"]["PatentesPatente"][];
      /** @description Mensagem de erro (ex: CPF invalido) */
      error?: string;
    };
    PatentesPatente: {
      /** @description Numero do processo no INPI */
      numero_inpi?: string;
      /** @description Titulo da patente */
      titulo?: string | null;
      /** @description Resumo do conteudo da patente */
      resumo?: string | null;
      /** @description Nome do titular/depositante */
      depositante?: string;
      /** @description CPF ou CNPJ do depositante */
      documento?: string;
      /** @description Pessoa Fisica ou Juridica */
      tipo_pessoa?: string;
      /** @example BR */
      pais?: string;
      /** @example SP */
      estado?: string | null;
      /** @description Inicio da titularidade (YYYY-MM-DD) */
      data_inicio?: string | null;
      /** @description Fim da titularidade, null se vigente */
      data_fim?: string | null;
      /** @description Data de deposito no INPI */
      data_deposito?: string | null;
      /** @description Data de publicacao na RPI */
      data_publicacao?: string | null;
      /** @description Classificacao IPC (ex: H04N 7/18) */
      classificacao_ipc?: string | null;
      ultimo_despacho?: components["schemas"]["UltimoDespacho"] | null;
      /** @description Inventores da patente */
      inventores?: {
        /** @description Nome do inventor */
        nome?: string;
        /** @description CPF do inventor (quando encontrado) */
        documento?: string | null;
      }[];
      /** @description Nomes dos procuradores/escritorios */
      procuradores?: string[];
    };
    PatentesResponse: {
      sucesso?: boolean;
      documento?: string;
      /** @enum {string} */
      tipo?: "cpf" | "cnpj";
      total?: number;
      patentes?: components["schemas"]["PatentesPatente"][];
    };
    /** @description Empresa facilitadora do PAT. Todos os campos sao string (nunca null). */
    PatFacilitadora: {
      cnpj?: string;
      razao_social?: string;
      matriz_filial?: string;
      municipio?: string;
      uf?: string;
      registro?: string;
      data_cadastro?: string;
      situacao?: string;
    };
    /** @description Empresa fornecedora do PAT. Todos os campos sao string (nunca null). */
    PatFornecedora: {
      cnpj?: string;
      razao_social?: string;
      matriz_filial?: string;
      municipio?: string;
      uf?: string;
      registro?: string;
      data_cadastro?: string;
      situacao?: string;
    };
    /** @description Aviao/aeronave tripulada registrada no RAB (linha bruta da base; CPF aparece mascarado em cpf_cgc) */
    PerfilAeronave: {
      /**
       * @description CPF/CNPJ do proprietario (somente digitos)
       * @example 12345678901
       */
      documento?: string;
      /**
       * @example PF
       * @enum {string}
       */
      tipo?: "PF" | "PJ";
      /**
       * @description Marca de matricula da aeronave
       * @example PR-ABC
       */
      marca?: string;
      /**
       * @description Nome do proprietario
       * @example Maria Da Silva
       */
      proprietario?: string;
      /** @example  */
      outros_proprietarios?: string;
      /** @example SP */
      uf?: string;
      /** @example Maria Da Silva */
      operador?: string;
      /** @example  */
      outros_operadores?: string;
      /** @example SP */
      uf_operador?: string;
      /**
       * @description CPF/CNPJ mascarado conforme a base (ex: 123.XXX.XXX-01)
       * @example 123.XXX.XXX-01
       */
      cpf_cgc?: string;
      /** @example  */
      certificado_matricula?: string;
      /** @example  */
      numero_serie?: string;
      /** @example  */
      categoria?: string;
      /**
       * @description Tipo da aeronave (AVIAO, HELICOPTERO, etc.)
       * @example AVIAO
       */
      tipo_aeronave?: string;
      /** @example  */
      modelo?: string;
      /** @example  */
      fabricante?: string;
      /** @example  */
      classe?: string;
      /** @example  */
      pmd?: string;
      /** @example  */
      tipo_icao?: string;
      /** @example  */
      tripulacao_minima?: string;
      /** @example  */
      passageiros_maximo?: string;
      /** @example  */
      numero_assentos?: string;
      /** @example  */
      ano_fabricacao?: string;
      /** @example  */
      validade_cva?: string;
      /** @example  */
      validade_ca?: string;
      /**
       * @description Data de cancelamento (normalizada para YYYY-MM-DD quando possivel)
       * @example
       */
      data_cancelamento?: string;
      /** @example  */
      motivo_cancelamento?: string;
      /** @example  */
      interdicao?: string;
      /** @example  */
      marca_nacional_1?: string;
      /** @example  */
      marca_nacional_2?: string;
      /** @example  */
      marca_nacional_3?: string;
      /** @example  */
      marca_estrangeira?: string;
      /**
       * @description Data de matricula (normalizada para YYYY-MM-DD quando possivel)
       * @example 2019-05-10
       */
      data_matricula?: string;
      /** @example  */
      tipo_motor?: string;
      /** @example  */
      quantidade_motores?: string;
      /** @example  */
      tipo_pouso?: string;
      /**
       * @description Estimativa de preco por categoria (presente apenas quando ha valor mapeado para o tipo_aeronave)
       * @example 1500000
       */
      preco_estimado?: number;
    };
    /** @description Perfil cadastral completo de uma empresa */
    PerfilCadastralCnpjResponse: {
      /**
       * @description CNPJ formatado (00.000.000/0000-00)
       * @example 12.345.678/0001-95
       */
      documento?: string;
      /**
       * @example CNPJ
       * @enum {string}
       */
      tipo_documento?: "CNPJ";
      /**
       * @description Raiz do CNPJ (8 primeiros digitos)
       * @example 12345678
       */
      cnpj_basico?: string;
      /**
       * @description Razao social da empresa
       * @example Technovacao Digital Ltda
       */
      razao_social?: string;
      /**
       * @description Nome fantasia da empresa (null se ausente)
       * @example Technovacao
       */
      nome_fantasia?: string | null;
      /**
       * @description Situacao cadastral (Nula, Ativa, Suspensa, Inapta, Baixada) ou o codigo bruto quando nao mapeado
       * @example Ativa
       */
      situacao?: string;
      /**
       * @description Data da situacao cadastral no formato YYYY-MM-DD
       * @example 2016-01-20
       */
      data_situacao?: string;
      /**
       * @description Motivo da situacao cadastral (null se ausente)
       * @example null
       */
      motivo_situacao?: string | null;
      /**
       * @description Data de inicio das atividades no formato YYYY-MM-DD
       * @example 2016-01-20
       */
      data_abertura?: string;
      /**
       * @description Capital social da empresa em reais
       * @example 50000
       */
      capital_social?: number;
      /**
       * @description Porte da empresa (Microempresa, Empresa de Pequeno Porte, etc.) ou null
       * @example Empresa de Pequeno Porte
       */
      porte?: string | null;
      /**
       * @description Matriz ou Filial (null se indisponivel)
       * @example Matriz
       */
      matriz_filial?: string | null;
      /** @description Natureza juridica da empresa (objeto codigo/descricao) */
      natureza_juridica?: {
        /** @example 2062 */
        codigo?: string;
        /** @example Sociedade Empresária Limitada */
        descricao?: string;
      };
      /** @description CNAE principal (fiscal) da empresa, ou null */
      atividade_principal?: {
        /** @example 6209100 */
        codigo?: string;
        /** @example Suporte tecnico em TI */
        descricao?: string;
      } | null;
      /** @description CNAEs secundarios da empresa */
      atividades_secundarias?: components["schemas"]["Cnae"][];
      endereco?: components["schemas"]["PerfilEndereco"];
      /** @description Lista de telefones da empresa */
      telefones?: components["schemas"]["PerfilTelefone"][];
      /** @description Lista de emails da empresa */
      emails?: components["schemas"]["PerfilEmail"][];
      /** @description Quadro societario da empresa */
      socios?: components["schemas"]["PerfilSocio"][];
      /**
       * @description Situacao especial da empresa (null se ausente)
       * @example null
       */
      situacao_especial?: string | null;
      /**
       * @description Data da situacao especial no formato YYYY-MM-DD (null se ausente)
       * @example null
       */
      data_situacao_especial?: string | null;
    };
    /** @description Perfil cadastral completo de uma pessoa fisica */
    PerfilCadastralCpfResponse: {
      /**
       * @description CPF formatado (000.000.000-00)
       * @example 123.456.789-01
       */
      documento?: string;
      /**
       * @example CPF
       * @enum {string}
       */
      tipo_documento?: "CPF";
      /**
       * @description Nome completo da pessoa
       * @example Maria Silva Santos
       */
      nome_completo?: string;
      /**
       * @description Genero da pessoa (Masculino, Feminino, Intersexo ou string vazia)
       * @example Feminino
       */
      genero?: string;
      /**
       * @description Data de nascimento no formato YYYY-MM-DD
       * @example 1996-01-02
       */
      data_nascimento?: string;
      /**
       * @description Indica se ha registro de obito para a pessoa
       * @example false
       */
      falecido?: boolean;
      /** @description Dados do obito (null quando nao falecido) */
      obito?: {
        /**
         * @description Data do obito no formato YYYY-MM-DD
         * @example 2023-04-10
         */
        data_obito?: string;
        /**
         * @description Nome do cartorio de registro
         * @example Cartorio Central
         */
        cartorio?: string;
      } | null;
      /** @description Lista de enderecos associados a pessoa */
      enderecos?: components["schemas"]["PerfilEndereco"][];
      /** @description Lista de telefones associados a pessoa */
      telefones?: components["schemas"]["PerfilTelefone"][];
      /** @description Lista de emails associados a pessoa */
      emails?: components["schemas"]["PerfilEmail"][];
      /** @description Lista de parentes identificados */
      parentes?: components["schemas"]["Parente"][];
      /**
       * @description Indica se a pessoa e politicamente exposta (PEP)
       * @example false
       */
      publicamente_exposta?: boolean;
      /** @description Cargos publicos/mandatos consolidados (vazio quando nao PEP) */
      cargos_publicos?: components["schemas"]["CargoPublico"][];
      /** @description Empresas em que a pessoa e socia ou responsavel */
      empresas?: components["schemas"]["EmpresaVinculada"][];
      /** @description Vinculos empregaticos da pessoa */
      empregos?: components["schemas"]["PerfilEmprego"][];
      beneficios?: components["schemas"]["BeneficiosCpf"];
      /** @description Dominios de internet associados aos emails da pessoa */
      dominios?: components["schemas"]["PerfilDominio"][];
    };
    /** @description Dominio de internet associado a um email da pessoa */
    PerfilDominio: {
      /** @example exemplo.com.br */
      dominio?: string;
      /** @example true */
      registrado?: boolean;
      data_criacao?: string | null;
      data_atualizacao?: string | null;
      data_expiracao?: string | null;
      registrador?: {
        nome?: string | null;
        url?: string | null;
      } | null;
      registrante?: {
        nome?: string | null;
        empresa?: string | null;
        email?: string | null;
        telefone?: string | null;
        pais?: string | null;
      } | null;
      /**
       * @description Email a partir do qual o dominio foi derivado
       * @example maria@exemplo.com.br
       */
      email_origem?: string;
    };
    /** @description Drone/RPAS registrado (linha bruta da base; CPF mascarado em codigo/operador conforme fonte) */
    PerfilDrone: {
      /**
       * @description CPF/CNPJ do proprietario (somente digitos)
       * @example 12345678901
       */
      documento?: string;
      /**
       * @example PF
       * @enum {string}
       */
      tipo?: "PF" | "PJ";
      /** @example PR-XYZ123 */
      codigo_aeronave?: string;
      /**
       * @description Data de validade (normalizada para YYYY-MM-DD quando possivel)
       * @example 2025-12-31
       */
      data_validade?: string;
      /** @example Maria Da Silva */
      operador?: string;
      /**
       * @description Tipo de uso (RECREACAO, BASICO, AVANCADO, EXPERIMENTAL, etc.)
       * @example RECREACAO
       */
      tipo_uso?: string;
      /** @example DJI */
      fabricante?: string;
      /** @example Mavic */
      modelo?: string;
      /** @example  */
      numero_serie?: string;
      /** @example  */
      peso_maximo?: string;
      /** @example  */
      ramo_atividade?: string;
      /**
       * @description Estimativa de preco por tipo de uso (presente apenas quando ha valor mapeado)
       * @example 3000
       */
      preco_estimado?: number;
    };
    /** @description Endereco de email com classificacao */
    PerfilEmail: {
      /**
       * @description Endereco de email completo
       * @example maria@gmail.com
       */
      email?: string;
      /**
       * @description Dominio do email
       * @example gmail.com
       */
      dominio?: string;
      /**
       * @description Indica se o email e corporativo (dominio proprio)
       * @example false
       */
      corporativo?: boolean;
    };
    /** @description Vinculo empregaticio da pessoa fisica */
    PerfilEmprego: {
      /**
       * @description CNPJ formatado do empregador (00.000.000/0000-00)
       * @example 12.345.678/0001-95
       */
      documento_empregador?: string;
      /**
       * @example CNPJ
       * @enum {string}
       */
      tipo_documento_empregador?: "CNPJ";
      /**
       * @description Razao social do empregador
       * @example Silva Comercio LTDA
       */
      nome_empregador?: string;
      /**
       * @description Cargo ou funcao exercida (null se indisponivel)
       * @example Gerente Comercial
       */
      cargo?: string | null;
      /** @description ativo ou inativo */
      status?: string;
      /**
       * @description Data de admissao no formato YYYY-MM-DD (null se indisponivel)
       * @example 2019-01-15
       */
      data_admissao?: string | null;
      /** @description Data de desligamento (null se ainda empregado) */
      data_desligamento?: string | null;
      remuneracao?: {
        valor?: number | null;
        estimativa_minima?: number | null;
        estimativa_maxima?: number | null;
        faixa?: string | null;
      } | null;
      vinculo?: {
        nivel?: string | null;
        setor?: {
          tipo?: string | null;
          codigo?: string | null;
          descricao?: string | null;
        } | null;
      } | null;
      contatos?: {
        telefone?: components["schemas"]["PerfilTelefone"];
        email?: components["schemas"]["PerfilEmail"];
      } | null;
    };
    /** @description Endereco completo */
    PerfilEndereco: {
      /**
       * @description Nome da rua, avenida ou logradouro
       * @example R HENRIQUE PASSINI
       */
      logradouro?: string;
      /**
       * @description Numero do imovel
       * @example 748
       */
      numero?: string;
      /**
       * @description Complemento do endereco (apartamento, sala, etc.)
       * @example 401
       */
      complemento?: string;
      /**
       * @description Nome do bairro
       * @example SERRA
       */
      bairro?: string;
      /**
       * @description Nome da cidade
       * @example BELO HORIZONTE
       */
      cidade?: string;
      /**
       * @description Sigla da unidade federativa (estado)
       * @example MG
       */
      uf?: string;
      /**
       * @description CEP no formato 00000-000
       * @example 30220-380
       */
      cep?: string;
    };
    PerfilErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /**
         * @description Codigo do erro (ex: VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED)
         * @example VALIDATION_ERROR
         */
        codigo?: string;
        /**
         * @description Mensagem descritiva do erro
         * @example CPF invalido
         */
        mensagem?: string;
      };
    };
    /** @description Patente ou registro de propriedade intelectual no INPI (linha bruta da base; datas no formato armazenado, nao necessariamente ISO) */
    PerfilPatente: {
      /**
       * @description Numero do registro no INPI
       * @example BR102020012345
       */
      numero_inpi?: string;
      /**
       * @description Codigo interno do registro
       * @example
       */
      codigo_interno?: string;
      /**
       * @description Nome do depositante
       * @example MARIA DA SILVA
       */
      depositante?: string;
      /**
       * @description CPF/CNPJ do depositante
       * @example 12345678901
       */
      cgccpfdepositante?: string;
      /**
       * @description Tipo de pessoa do depositante
       * @example Fisica
       */
      tipopessoadepositante?: string;
      /** @example BR */
      pais?: string;
      /** @example SP */
      estado?: string;
      /** @example  */
      data_inicio_depositante?: string;
      /** @example  */
      data_fim_depositante?: string;
      /**
       * @description Titulo da patente ou invencao (texto bruto da base)
       * @example DISPOSITIVO PARA FILTRAGEM
       */
      titulo?: string;
      /**
       * @description Resumo da patente
       * @example
       */
      resumo?: string;
      /**
       * @description Natureza da patente (PATENTE DE INVENCAO, MODELO DE UTILIDADE, etc.)
       * @example PATENTE DE INVENCAO
       */
      natureza?: string;
      /**
       * @description Data de deposito (formato armazenado na base)
       * @example 2020-06-15
       */
      data_deposito?: string;
      /**
       * @description Data de publicacao (formato armazenado na base)
       * @example 2021-12-21
       */
      data_publicacao?: string;
      /**
       * @description Data de concessao (formato armazenado na base)
       * @example
       */
      data_concessao?: string;
      /**
       * @description Classificacao Internacional de Patentes (IPC)
       * @example
       */
      classificacao_ipc?: string;
      /** @example  */
      despacho_codigo?: string;
      /** @example  */
      despacho_texto?: string;
      /**
       * @description Data do despacho na RPI
       * @example
       */
      despacho_data_rpi?: string;
      /**
       * @description Lista de inventores (texto)
       * @example
       */
      inventores?: string;
      /**
       * @description Lista de procuradores (texto)
       * @example
       */
      procuradores?: string;
    };
    /** @description Perfil patrimonial completo com todos os bens identificados */
    PerfilPatrimonialResponse: {
      /** @description Lista de veiculos registrados */
      veiculos?: components["schemas"]["PerfilVeiculo"][];
      /** @description Lista de imoveis identificados via IPTU */
      imoveis?: components["schemas"]["Imovel"][];
      aeronaves?: components["schemas"]["Aeronaves"];
      /** @description Lista de patentes e registros de propriedade intelectual */
      patentes?: components["schemas"]["PerfilPatente"][];
      /** @description Dados rurais. ATENCAO: o formato difere por tipo de documento. Para CPF (perfilCompleto): objeto rico { documento, tipo, propriedades_sncr[], propriedades_cafir[], transportes{ total, volume_total, valor_total, produtos[], por_produto[], por_ano[], parceiros[] }, autorizacoes[], infracoes[], produtor_organico[], resumo{ area_total_ha, qtd_imoveis_sncr, qtd_imoveis_cafir, qtd_infracoes, valor_total_multas, qtd_autorizacoes, qtd_transportes, estados[] } }. Para CNPJ (findByCpfCnpj): objeto { imoveisRurais: SncrRow[], perfil: objeto | null }. Em ambos os casos retorna null se a consulta exceder o timeout (5s) ou falhar. */
      rural?: {
        /** @description [CPF] Documento consultado */
        documento?: string;
        /**
         * @description [CPF] Tipo de pessoa
         * @enum {string}
         */
        tipo?: "PF" | "PJ";
        /** @description [CPF] Imoveis no SNCR/INCRA */
        propriedades_sncr?: Record<string, never>[];
        /** @description [CPF] Imoveis no CAFIR */
        propriedades_cafir?: Record<string, never>[];
        /** @description [CPF] Resumo de transportes de produtos rurais */
        transportes?: Record<string, never>;
        /** @description [CPF] Autorizacoes (AUTEX) agrupadas */
        autorizacoes?: Record<string, never>[];
        /** @description [CPF] Fiscalizacoes/infracoes ambientais */
        infracoes?: Record<string, never>[];
        /** @description [CPF] Registros de produtor organico */
        produtor_organico?: Record<string, never>[];
        /** @description [CPF] Totalizadores rurais */
        resumo?: Record<string, never>;
        /** @description [CNPJ] Imoveis rurais (SncrRow). Observe o nome de campo em camelCase. */
        imoveisRurais?: Record<string, never>[];
        /** @description [CNPJ] Perfil rural consolidado, ou null */
        perfil?: Record<string, never> | null;
      } | null;
    };
    /** @description Socio ou administrador da empresa */
    PerfilSocio: {
      /**
       * @description Nome completo do socio
       * @example MARIA DA SILVA
       */
      nome?: string;
      /**
       * @description CPF ou CNPJ formatado do socio. null para PF quando o CPF nao pode ser resolvido (mascarado)
       * @example 123.456.789-01
       */
      documento?: string | null;
      /**
       * @description CPF para Pessoa Fisica, CNPJ para Pessoa Juridica
       * @example CPF
       * @enum {string}
       */
      tipo_documento?: "CPF" | "CNPJ";
      /**
       * @description Pessoa Fisica ou Pessoa Juridica
       * @example Pessoa Física
       */
      tipo?: string;
      /**
       * @description Qualificacao do socio (ex: Socio-Administrador, Socio, etc.)
       * @example Socio-Administrador
       */
      qualificacao?: string;
      /**
       * @description Data de entrada na sociedade no formato YYYY-MM-DD
       * @example 2016-01-20
       */
      data_entrada?: string;
      /**
       * @description Pais do socio (default Brasil)
       * @example Brasil
       */
      pais?: string;
      /**
       * @description Origem do registro do socio (ex: qsa)
       * @example qsa
       */
      origem?: string;
      /** @description Somente para Pessoa Fisica */
      data_nascimento?: string | null;
      /** @description Somente para Pessoa Fisica */
      sexo?: string | null;
      /** @description Somente para Pessoa Fisica */
      idade?: number | null;
      faixa_etaria?: string | null;
      /** @description Somente para Pessoa Juridica */
      representante?: {
        nome?: string;
        /** @description CPF formatado do representante, ou null quando mascarado/nao resolvido */
        documento?: string | null;
        qualificacao?: string;
      } | null;
    };
    /** @description Informacoes de telefone com detalhes da operadora */
    PerfilTelefone: {
      /**
       * @description Codigo DDI do pais
       * @example 55
       */
      ddi?: string;
      /**
       * @description Codigo DDD da regiao
       * @example 31
       */
      ddd?: string;
      /**
       * @description Numero do telefone sem DDD
       * @example 987654321
       */
      numero?: string;
      /**
       * @description Numero completo com DDI + DDD + numero
       * @example 5531987654321
       */
      numero_completo?: string;
      /**
       * @description UF associada ao DDD
       * @example MG
       */
      estado?: string;
      /**
       * @description Nome da operadora de telefonia
       * @example Vivo
       */
      operadora?: string;
      /**
       * @description Ano de referencia do registro do telefone no formato YYYY-01-01 (sempre 1o de janeiro do ano derivado), ou null. Presente apenas nos telefones de pessoa fisica (telefones de empresa e de contatos de emprego nao incluem este campo).
       * @example 2022-01-01
       */
      data?: string | null;
    };
    /** @description Veiculo registrado em nome da pessoa ou empresa (linha bruta da base, sem normalizacao de marca/modelo) */
    PerfilVeiculo: {
      /**
       * @description CPF/CNPJ do proprietario (somente digitos)
       * @example 12345678901
       */
      documento?: string;
      /**
       * @description Tipo de pessoa do proprietario
       * @example PF
       * @enum {string}
       */
      tipo?: "PF" | "PJ";
      /**
       * @description Nome do proprietario do veiculo
       * @example MARIA DA SILVA
       */
      nome_proprietario?: string;
      /**
       * @description Ano de referencia do registro de propriedade
       * @example 2022
       */
      ano_documento?: number;
      /**
       * @description Placa atual do veiculo
       * @example ABC1D23
       */
      placa?: string;
      /**
       * @description Placa formato antigo (ABC-1234)
       * @example ABC1234
       */
      placa_antiga?: string;
      /**
       * @description Placa modelo Mercosul
       * @example ABC1D23
       */
      placa_nova?: string;
      /**
       * @description Codigo RENAVAM
       * @example 12345678901
       */
      renavam?: string;
      /**
       * @description Numero do chassi
       * @example 9BWAG45N1YT123456
       */
      chassi?: string;
      /**
       * @description Ano de fabricacao
       * @example 2021
       */
      ano_fabricacao?: number;
      /**
       * @description Ano do modelo
       * @example 2022
       */
      ano_modelo?: number;
      /**
       * @description Marca do fabricante (extraida da parte antes da barra em modelo)
       * @example FIAT
       */
      marca?: string;
      /**
       * @description Modelo do veiculo
       * @example STRADA TREK CE
       */
      modelo?: string;
      /**
       * @description Cor predominante do veiculo
       * @example Prata
       */
      cor?: string;
      /**
       * @description Tipo de combustivel
       * @example Flex
       */
      combustivel?: string;
      /**
       * @description Tipo do veiculo (Automovel, Motocicleta, Caminhao, etc.)
       * @example Automovel
       */
      tipo_veiculo?: string;
      /**
       * @description Especie do veiculo (codigo ou descricao crua da base)
       * @example Passageiro
       */
      especie_veiculo?: string;
      /**
       * @description Potencia do motor
       * @example 130
       */
      potencia?: string;
      /**
       * @description Cilindradas do motor
       * @example 1300
       */
      cilindradas?: string;
      /**
       * @description Quantidade de passageiros
       * @example 5
       */
      quantidade_passageiro?: string;
      /**
       * @description Municipio de registro do veiculo
       * @example SAO PAULO
       */
      municipio?: string;
      /**
       * @description UF de registro do veiculo
       * @example SP
       */
      uf?: string;
      /**
       * @description Situacao atual do veiculo (codigo ou descricao crua da base)
       * @example Circulacao
       */
      situacao_veiculo?: string;
      /**
       * @description Restricao 1 do veiculo (string vazia se nenhuma)
       * @example Alienacao Fiduciaria
       */
      restricao_1?: string;
      /**
       * @description Restricao 2 do veiculo (string vazia se nenhuma)
       * @example
       */
      restricao_2?: string;
      /**
       * @description Restricao 3 do veiculo (string vazia se nenhuma)
       * @example
       */
      restricao_3?: string;
      /**
       * @description Restricao 4 do veiculo (string vazia se nenhuma)
       * @example
       */
      restricao_4?: string;
      /**
       * @description Nacionalidade do veiculo
       * @example
       */
      nacionalidade?: string;
      /**
       * @description Tipo de carroceria
       * @example
       */
      carroceria?: string;
      /**
       * @description Tipo de montagem
       * @example
       */
      tipo_montagem?: string;
      /**
       * @description Peso bruto total
       * @example
       */
      peso_bruto_total?: string;
      /**
       * @description Capacidade maxima de tracao
       * @example
       */
      cap_maxima_tracao?: string;
      /**
       * @description Capacidade de carga
       * @example
       */
      capacidade_carga?: string;
      /**
       * @description Numero/identificacao do motor
       * @example
       */
      motor?: string;
      /**
       * @description Identificacao da caixa de cambio
       * @example
       */
      caixa_cambio?: string;
      /**
       * @description Situacao do chassi
       * @example
       */
      situacao_chassi?: string;
      /**
       * @description Quantidade de eixos
       * @example
       */
      eixos?: string;
      /**
       * @description Media de preco estimada (string)
       * @example
       */
      media_preco?: string;
      /**
       * @description Timestamp interno de atualizacao (retorna 0 nesta consulta)
       * @example 0
       */
      updated_at?: number;
    };
    PerfisErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /**
         * @description Codigo do erro (ex: VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED)
         * @example VALIDATION_ERROR
         */
        codigo?: string;
        /**
         * @description Mensagem descritiva do erro
         * @example CPF invalido
         */
        mensagem?: string;
      };
    };
    /** @description Referencia de pessoa fisica retornada em buscas reversas */
    PessoaReversa: {
      /** @description CPF formatado */
      documento?: string;
      /** @enum {string} */
      tipo_documento?: "CPF";
      nome?: string | null;
      /** @description Data ISO (YYYY-MM-DD) */
      data_nascimento?: string | null;
      /** @description Masculino, Feminino ou Intersexo */
      genero?: string | null;
      falecido?: boolean;
      obito?: {
        data_obito?: string;
        cartorio?: string;
      } | null;
    };
    PessoasEmail: {
      email?: string;
      dominio?: string;
      corporativo?: boolean;
    };
    PessoasEmprego: {
      documento_empregador?: string;
      /** @enum {string} */
      tipo_documento_empregador?: "CNPJ";
      nome_empregador?: string;
      cargo?: string;
      /** @description ativo ou inativo */
      status?: string;
      data_admissao?: string;
      data_desligamento?: string | null;
      remuneracao?: {
        valor?: number | null;
        estimativa_minima?: number | null;
        estimativa_maxima?: number | null;
        faixa?: string | null;
      } | null;
      vinculo?: {
        nivel?: string | null;
        setor?: {
          tipo?: string | null;
          codigo?: string | null;
          descricao?: string | null;
        } | null;
      } | null;
      contatos?: {
        telefone?: components["schemas"]["PessoasTelefone"];
        email?: components["schemas"]["PessoasEmail"];
      } | null;
    };
    PessoasEndereco: {
      logradouro?: string;
      numero?: string;
      complemento?: string;
      bairro?: string;
      cidade?: string;
      uf?: string;
      cep?: string;
    };
    PessoasErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /**
         * @description Codigo do erro (ex: VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED)
         * @example VALIDATION_ERROR
         */
        codigo?: string;
        /**
         * @description Mensagem descritiva do erro
         * @example CPF invalido
         */
        mensagem?: string;
      };
    };
    PessoasTelefone: {
      ddi?: string;
      ddd?: string;
      numero?: string;
      numero_completo?: string;
      estado?: string;
      operadora?: string;
      tem_whatsapp?: boolean;
    };
    /** @description Processo retornado pela listagem por CPF/CNPJ. Todos os campos sao planos (nao ha objeto `processo` aninhado). */
    ProcessoDetalhado: {
      /** @description Numero unificado CNJ (digitos, sem mascara) */
      numero_processo?: string;
      /** @description Numero formatado (ex: 0001234-56.2020.8.26.0100) */
      numero_formatado?: string;
      /**
       * @description Vinculo que incluiu este processo no resultado. Documento tem precedencia quando o processo casa pelos dois criterios.
       * @enum {string}
       */
      tipo_vinculo: "documento" | "nome";
      /** @description Nomes que associaram o processo quando tipo_vinculo e nome. */
      mencoes_nome?: string[];
      /** @description Sigla do tribunal */
      tribunal?: string;
      /** @description Codigo CNJ da classe processual */
      classe_codigo?: number;
      /** @description Nome da classe (Title Case) */
      classe_nome?: string;
      /** @description Grau de jurisdicao (ex: G1, G2) */
      grau?: string;
      /** @description Data ISO (YYYY-MM-DD) */
      data_ajuizamento?: string;
      /** @description Vara ou turma (Title Case) */
      orgao_julgador?: string;
      /** @description Assuntos do processo */
      assuntos?: string;
      /** @description Valor da acao em reais; null quando nao declarado */
      valor_acao?: number | null;
      partes?: components["schemas"]["ProcessosParte"][];
      advogados?: components["schemas"]["Advogado"][];
      /** @description Ate 10 movimentacoes mais recentes (ordenadas por data desc) */
      movimentacoes?: components["schemas"]["Movimentacao"][];
    };
    ProcessosErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /**
         * @description Codigo do erro (ex: VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED)
         * @example VALIDATION_ERROR
         */
        codigo?: string;
        /**
         * @description Mensagem descritiva do erro
         * @example CPF invalido
         */
        mensagem?: string;
      };
    };
    /** @description Parte como retornada pela listagem por CPF/CNPJ. O endpoint GET /processos/numero/{numero} retorna as partes em formato distinto (ver aquele endpoint). */
    ProcessosParte: {
      /** @description Nome da parte (Title Case) */
      nome?: string;
      /** @description CPF ou CNPJ formatado. String vazia ("") quando ausente. */
      documento?: string;
      /** @description Polo capitalizado (ex: Ativo, Passivo, Terceiro, Outro) */
      polo?: string;
      /**
       * @description Tipo da parte
       * @enum {string}
       */
      tipo?: "Pessoa Física" | "Pessoa Jurídica" | "Autoridade";
    };
    ProcessosResponse: {
      /** @description Documento consultado, formatado (CPF/CNPJ) */
      documento?: string;
      /**
       * @description Tipo do documento consultado
       * @enum {string}
       */
      tipo_documento?: "CPF" | "CNPJ";
      /** @description Presente apenas quando o filtro `categorias` e informado */
      categorias?: {
        slug?: string;
        label?: string;
      }[];
      /** @description Tipos de vinculo usados na consulta. O padrao e somente documento. */
      tipos_vinculo?: ("documento" | "nome")[];
      /** @description Total de processos encontrados para o documento */
      total?: number;
      /** @description Limite aplicado (max 200) */
      limit?: number;
      /** @description Offset aplicado */
      offset?: number;
      processos?: components["schemas"]["ProcessoDetalhado"][];
    };
    ProdutoAgrupado: {
      /** @description Nome do material/produto florestal */
      produto?: string;
      /** @description Quantidade de operacoes */
      qtd?: number;
      /** @description Volume total transportado */
      volume?: number;
      /** @description Valor total em reais */
      valor?: number;
      /** @description Unidade de medida (m3, kg, etc) */
      unidade?: string;
    };
    /** @description Produtor organico certificado */
    ProdutorRow: {
      nome_produtor?: string;
      /** @description CPF/CNPJ do produtor (somente digitos) */
      documento?: string;
      /** @enum {string} */
      tipo?: "PF" | "PJ";
      /** @description Documento mascarado */
      cpf_cnpj_mask?: string;
      uf?: string;
      cidade?: string;
      escopo?: string;
      atividade?: string;
      situacao?: string;
    };
    /** @description Item de propriedades na resposta por CPF: ImovelRecord acrescido de tipo_propriedade e quantidade (imoveis identicos por endereco/area/uso sao agrupados). */
    PropriedadeUrbana: components["schemas"]["ImovelRecord"] & {
      /** @enum {string} */
      tipo_propriedade?: "urbano";
      /** @description Quantidade de imoveis agrupados nesta entrada */
      quantidade?: number;
    };
    /** @description Proprietario do imovel. documento vem formatado (CPF 000.000.000-00 / CNPJ 00.000.000/0000-00) ou null. ATENCAO: a chave do tipo e tipoDocumento (camelCase). */
    Proprietario: {
      nome?: string;
      /** @description CPF/CNPJ formatado, ou null quando ausente */
      documento?: string | null;
      /**
       * @description Pode estar ausente quando o documento nao tem 11/14 digitos
       * @enum {string}
       */
      tipoDocumento?: "CPF" | "CNPJ";
    };
    /** @description Proprietario listado em enderecos_resididos. ATENCAO: difere de Proprietario, documento vem em digitos crus (sem mascara) e a chave do tipo e tipo_documento (snake_case). */
    ProprietarioEndereco: {
      /** @description Nome conforme cadastro municipal (cru, geralmente em CAIXA ALTA) */
      nome?: string;
      /** @description CPF/CNPJ apenas digitos (sem mascara) */
      documento?: string;
      /** @enum {string} */
      tipo_documento?: "CPF" | "CNPJ";
    };
    Registrador: {
      /** @example Registro.br */
      nome?: string;
      /** @example https://registro.br */
      url?: string;
    };
    Registrante: {
      /** @example João da Silva */
      nome?: string;
      /** @example Silva Ltda */
      empresa?: string;
      /** @example Brazil */
      pais?: string;
      telefone?: components["schemas"]["DominiosTelefone"] | (never | null);
      email?: components["schemas"]["DominiosEmail"] | (never | null);
    };
    Registro: {
      /**
       * @description Nome da plataforma (github, drogasil, linkedin, etc.)
       * @example GitHub
       */
      plataforma: string;
      /**
       * @description Tipo do registro: 'digital' para plataformas online, 'comercial' para lojas e farmacias, 'bancario' para instituicoes financeiras
       * @example digital
       * @enum {string}
       */
      tipo: "digital" | "comercial" | "bancario";
      /**
       * @description Se a conta/cadastro foi encontrado
       * @example true
       */
      existe: boolean;
      /**
       * @description Telefone vinculado (parcialmente mascarado)
       * @example 55119****4321
       */
      telefone?: string;
      /**
       * @description Email vinculado
       * @example mar***@gmail.com
       */
      email?: string;
      /**
       * @description URL da foto de perfil
       * @example https://avatars.githubusercontent.com/u/12345
       */
      foto?: string;
      /**
       * @description Nome de usuario na plataforma (quando disponivel)
       * @example mariasilva
       */
      username?: string;
      /**
       * @description Nome de exibicao
       * @example Maria Silva
       */
      nome?: string;
      /** @description Dados adicionais especificos da plataforma */
      metadata?: Record<string, never>;
    };
    RegistroErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /**
         * @description Codigo do erro (ex: VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED)
         * @example VALIDATION_ERROR
         */
        codigo?: string;
        /**
         * @description Mensagem descritiva do erro
         * @example CPF invalido
         */
        mensagem?: string;
      };
    };
    RegistroPorCpfResponse: {
      /**
       * @description CPF consultado
       * @example 12345678901
       */
      cpf?: string;
      /**
       * @description Total de registros encontrados
       * @example 5
       */
      total?: number;
      /** @description Lista de registros encontrados */
      registros?: components["schemas"]["Registro"][];
    };
    RegistroPorEmailResponse: {
      /**
       * @description Email consultado
       * @example usuario@gmail.com
       */
      email?: string;
      /**
       * @description Total de registros encontrados
       * @example 5
       */
      total?: number;
      /** @description Lista de registros encontrados (todos com tipo 'digital') */
      registros?: components["schemas"]["Registro"][];
    };
    RegistroPorTelefoneResponse: {
      /**
       * @description Telefone consultado
       * @example 5511987654321
       */
      telefone?: string;
      /**
       * @description Total de registros encontrados
       * @example 5
       */
      total?: number;
      /** @description Lista de registros encontrados */
      registros?: components["schemas"]["Registro"][];
    };
    RendaErrorResponse: {
      statusCode?: number;
      error?: string;
      message?: string;
    };
    RendaResponse: {
      /** @description CPF formatado */
      documento?: string;
      /** @enum {string} */
      status?: "estimado" | "sem_dados";
      /**
       * @description 0 quando sem dados (tokens estornados)
       * @enum {integer}
       */
      total?: 0 | 1;
      renda_estimada?: {
        /** @description Renda mensal do domicílio em R$. `maximo` null = sem teto */
        domiciliar_mensal?: components["schemas"]["ValoresMensais"];
        /** @description Renda mensal da pessoa em R$ (vínculo formal ativo ou BPC); null quando não observada */
        individual_mensal?: components["schemas"]["ValoresMensais"];
        em_salarios_minimos?: {
          domiciliar?: number;
          individual?: number | null;
        };
        /** @description Salário mínimo usado na conversão */
        salario_minimo_referencia?: number;
      } | null;
      classificacao?: {
        /**
         * @description Estrato equivalente ao Critério Brasil ABEP 2026 pela renda domiciliar
         * @enum {string}
         */
        classe_social?: "A" | "B1" | "B2" | "C1" | "C2" | "DE";
        /** @enum {string} */
        classe_minima?: "A" | "B1" | "B2" | "C1" | "C2" | "DE";
        /** @enum {string} */
        classe_maxima?: "A" | "B1" | "B2" | "C1" | "C2" | "DE";
        /** @enum {string} */
        padrao?: "abep_2026_renda_equivalente";
        /** @enum {string} */
        faixa_renda?:
          | "até 2 SM"
          | "2 a 4 SM"
          | "4 a 10 SM"
          | "10 a 20 SM"
          | "acima de 20 SM";
        /** @enum {string} */
        confianca?: "alta" | "media" | "baixa";
      } | null;
    };
    /** @description Registro bruto (SELECT *) de empresas.renuncias_fiscais. Valores monetarios vem como string no formato brasileiro (ex: "1.263,00"). */
    RenunciaFiscal: {
      ano_calendario?: string;
      cnpj?: string;
      razao_social?: string;
      nome_fantasia?: string;
      codigo_cnae?: string | null;
      cnae?: string | null;
      municipio?: string;
      uf?: string | null;
      tipo_renuncia?: string;
      beneficio_fiscal?: string;
      fundamento_legal?: string;
      descricao?: string;
      tributo?: string;
      forma_tributacao?: string | null;
      /** @description Valor em R$ no formato brasileiro (ex: "1.263,00") */
      valor_renuncia_fiscal?: string;
      created_at?: string;
    };
    /** @description Nó raiz da árvore do resultado. */
    ResultCedente: {
      /**
       * Format: uuid
       * @description Identificador do cedente no resultado.
       */
      id?: string;
      /**
       * @description CNPJ do cedente.
       * @example 12345678000195
       */
      cnpj?: string;
      /**
       * @description Razão social do cedente.
       * @example CEDENTE LTDA
       */
      razao_social?: string;
      /**
       * @description Status consolidado do cedente: o pior entre as issues próprias e os sacados (worst-of).
       * @enum {string}
       */
      status?: "approved" | "blocked" | "alerted";
      /** @description Violações de regra do próprio cedente. */
      issues?: components["schemas"]["Issue"][];
      /** @description Sacados do borderô. Com filter=issues (padrão), sacados sem problemas são podados. */
      sacados?: components["schemas"]["ResultSacado"][];
    };
    /** @description Nó de sacado na árvore do resultado. */
    ResultSacado: {
      /**
       * Format: uuid
       * @description Identificador do sacado no resultado.
       */
      id?: string;
      /**
       * @description Documento do sacado (CNPJ ou CPF).
       * @example 98765432000188
       */
      cnpj_cpf?: string;
      /**
       * @description Razão social (PJ) ou nome (PF) do sacado.
       * @example SACADO SA
       */
      razao_social?: string;
      /**
       * @description Tipo do sacado.
       * @enum {string}
       */
      tipo?: "PJ" | "PF";
      /**
       * @description Status consolidado do sacado: o pior entre as issues próprias e os títulos (worst-of).
       * @enum {string}
       */
      status?: "approved" | "blocked" | "alerted";
      /** @description Violações de regra do próprio sacado. */
      issues?: components["schemas"]["Issue"][];
      /** @description Títulos do sacado. Com filter=issues (padrão), títulos aprovados são podados. */
      titulos?: components["schemas"]["ResultTitulo"][];
    };
    /** @description Resumo do dataset completo. Não muda com o parâmetro filter. O verdict interno incompleto aparece como alerted, com o motivo em degraded_rules. */
    ResultSummary: {
      /**
       * @description Total de títulos do borderô.
       * @example 12
       */
      total_titulos?: number;
      /**
       * @description Títulos aprovados.
       * @example 9
       */
      approved?: number;
      /**
       * @description Títulos bloqueados.
       * @example 2
       */
      blocked?: number;
      /**
       * @description Títulos em alerta, incluindo os com análise incompleta (fonte indisponível).
       * @example 1
       */
      alerted?: number;
      /**
       * @description Valor monetário total do borderô.
       * @example 100000
       */
      total_value?: number;
      /**
       * @description Valor monetário dos títulos aprovados.
       * @example 80000
       */
      approved_value?: number;
      /**
       * @description Valor monetário dos títulos bloqueados.
       * @example 15000
       */
      blocked_value?: number;
      /**
       * @description Valor monetário dos títulos em alerta.
       * @example 5000
       */
      alerted_value?: number;
      sacados?: {
        /**
         * @description Total de sacados únicos do borderô.
         * @example 5
         */
        total?: number;
        /**
         * @description Sacados com pelo menos um problema.
         * @example 2
         */
        with_issues?: number;
      };
      cedente?: {
        /**
         * @description Status consolidado do cedente.
         * @enum {string}
         */
        status?: "approved" | "blocked" | "alerted";
      };
    };
    /** @description Nó de título na árvore do resultado. */
    ResultTitulo: {
      /**
       * Format: uuid
       * @description Identificador do título no resultado.
       */
      id?: string;
      /**
       * @description Identificador do título no arquivo remessa (campo seu número do CNAB 400).
       * @example DOC-001
       */
      numero?: string;
      /**
       * @description Valor do título.
       * @example 1234.56
       */
      valor?: number;
      /**
       * Format: date
       * @description Data de vencimento do título (YYYY-MM-DD).
       */
      data_vencimento?: string;
      /** @description Chave da NFe vinculada ao título; null se o título não traz chave. Problemas de NFe aparecem como issues do título. */
      nfe_chave?: string | null;
      /**
       * @description Status consolidado do título, derivado das suas issues (worst-of).
       * @enum {string}
       */
      status?: "approved" | "blocked" | "alerted";
      /** @description Violações de regra do título. */
      issues?: components["schemas"]["Issue"][];
    };
    /** @description Veredito de uma olhada. */
    ResumoListasRestritivas: {
      tem_ocorrencia?: boolean;
      /** @description Grupo sancoes OU restritivas tem registro */
      tem_sancao?: boolean;
      /** @description Grupo alertas tem registro (PEP). Um PEP sozinho nao marca tem_sancao. */
      tem_alerta?: boolean;
      total_ocorrencias?: number;
      por_grupo?: {
        sancoes?: number;
        restritivas?: number;
        alertas?: number;
      };
      /** @description Listas que se aplicam ao tipo do documento (10 para CPF, 10 para CNPJ) */
      fontes_aplicaveis?: number;
      fontes_consultadas?: number;
      com_ocorrencia?: number;
      indisponiveis?: number;
      /**
       * @description completa=todas as listas aplicaveis responderam; parcial=algumas indisponiveis; indisponivel=todas as aplicaveis cairam. Trate negativo com cautela se != completa.
       * @enum {string}
       */
      confiabilidade?: "completa" | "parcial" | "indisponivel";
    };
    /** @description Resposta de erro retornada com status HTTP 200 quando o documento e invalido ou o servico esta indisponivel. */
    RuralErro: {
      /** @example CPF/CNPJ invalido */
      erro?: string;
    };
    RuralErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /**
         * @description Codigo do erro (ex: VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED)
         * @example VALIDATION_ERROR
         */
        codigo?: string;
        /**
         * @description Mensagem descritiva do erro
         * @example CPF invalido
         */
        mensagem?: string;
      };
    };
    /** @description Perfil rural agregado. Retornado de forma identica por /rural/cpf/{cpf} e /rural/cnpj/{cnpj}; a unica diferenca e o valor de 'tipo' (PF para CPF, PJ para CNPJ). */
    RuralProfile: {
      /** @description CPF/CNPJ consultado (somente digitos) */
      documento?: string;
      /**
       * @description PF quando consultado por CPF (11 digitos), PJ quando consultado por CNPJ (14 digitos)
       * @enum {string}
       */
      tipo?: "PF" | "PJ";
      propriedades_sncr?: components["schemas"]["SncrRow"][];
      propriedades_cafir?: components["schemas"]["CafirRow"][];
      transportes?: {
        total?: number;
        volume_total?: number;
        valor_total?: number;
        produtos?: string[];
        por_produto?: components["schemas"]["ProdutoAgrupado"][];
        por_ano?: {
          ano?: number;
          qtd?: number;
          volume?: number;
        }[];
        /** @description Parceiros comerciais (remetentes e destinatarios), limitado aos 5 principais de cada direcao */
        parceiros?: components["schemas"]["TransporteAgrupado"][];
      };
      autorizacoes?: components["schemas"]["AutorizacaoAgrupada"][];
      infracoes?: components["schemas"]["FiscalizacaoRow"][];
      produtor_organico?: components["schemas"]["ProdutorRow"][];
      resumo?: components["schemas"]["RuralResumo"];
    };
    RuralResumo: {
      area_total_ha?: number;
      qtd_imoveis_sncr?: number;
      qtd_imoveis_cafir?: number;
      qtd_infracoes?: number;
      valor_total_multas?: number;
      qtd_autorizacoes?: number;
      qtd_transportes?: number;
      estados?: string[];
    };
    Search: {
      /** Format: uuid */
      id: string;
      /** @enum {string} */
      object: "rastro_search";
      /** @enum {string} */
      status: "queued" | "running" | "completed" | "failed" | "cancelled";
      /** @enum {string} */
      type: "email" | "phone" | "username" | "wallet";
      target: string;
      /** @enum {string} */
      strategy: "all" | "first_match";
      partial: boolean;
      /** @description Situação de cada fonte consultada. */
      coverage: {
        [key: string]: unknown;
      };
      result?: {
        [key: string]: unknown;
      };
      failure?: {
        [key: string]: unknown;
      };
      billing: {
        /** @enum {string} */
        status?:
          | "not_charged"
          | "charge_pending"
          | "charged"
          | "refund_pending"
          | "refunded";
        amount?: number;
        /** @enum {string} */
        unit?: "tokens";
      };
      artifacts: {
        [key: string]: unknown;
      }[];
      poll_after_seconds?: number;
      /** Format: date-time */
      created_at: string;
      /** Format: date-time */
      updated_at: string;
      /** Format: date-time */
      started_at?: string;
      /** Format: date-time */
      completed_at?: string;
    };
    SncrRow: {
      codigo_imovel?: string;
      nome_imovel?: string;
      municipio?: string;
      uf?: string;
      /** @description Area em hectares */
      area_total?: number;
      modulos_fiscais?: number;
      /** @description Codigo IBGE do municipio */
      cod_ibge?: string;
      nome_detentor?: string;
      /** @description Documento mascarado do detentor */
      cpf_cnpj_mask?: string;
      /** @description CPF/CNPJ do detentor (somente digitos) */
      documento?: string;
      /**
       * @description PF (CPF, 11 digitos) ou PJ (CNPJ, 14 digitos)
       * @enum {string}
       */
      tipo?: "PF" | "PJ";
      tipo_detentor?: string;
      /** @description Fracao de posse (%) */
      fracao?: number;
      condicao_detentor?: string;
      pais?: string;
    };
    /** @description Pessoas associadas ao telefone consultado */
    TelefoneReversoResponse: {
      /** @description Telefone consultado (somente digitos) */
      telefone?: string;
      pessoas?: components["schemas"]["PessoaReversa"][];
    };
    TimelineEvent: {
      /** @description Data do evento (YYYY-MM-DD). Oficial quando data_oficial=true, senao dia 01 do mes */
      data?: string;
      /** @description true = data de registro oficial; false = aproximada (so o mes e conhecido) */
      data_oficial?: boolean;
      /** @description Mes em que a alteracao foi detectada (YYYY-MM) */
      mes_referencia?: string;
      /** @description empresa, estabelecimento, socio, simples ou cnae */
      entidade?: string;
      /** @description CNPJ formatado do estabelecimento do evento */
      estabelecimento?: string;
      /**
       * @description Um dos 15 tipos de evento
       * @enum {string}
       */
      tipo?:
        | "socio_entrada"
        | "socio_saida"
        | "capital_alterado"
        | "situacao_alterada"
        | "empresa_baixada"
        | "razao_social_alterada"
        | "porte_alterado"
        | "natureza_juridica_alterada"
        | "nome_fantasia_alterado"
        | "endereco_alterado"
        | "cnae_principal_alterado"
        | "cnae_secundario_incluido"
        | "cnae_secundario_removido"
        | "simples_alterado"
        | "mei_alterado";
      /** @enum {string} */
      categoria?:
        "socios" | "cadastro" | "atividade" | "situacao" | "tributario";
      /**
       * @description alteracao = mudanca detectada; estado_inicial = linha de base do 1o mes coberto
       * @enum {string}
       */
      origem?: "alteracao" | "estado_inicial";
      titulo?: string;
      descricao?: string;
      /** @description Coluna de origem da mudanca, quando aplicavel */
      campo?: string;
      /** @description Valor anterior (null quando nao se aplica) */
      de?: components["schemas"]["TimelineEventValor"] | (never | null);
      /** @description Valor novo (null quando nao se aplica) */
      para?: components["schemas"]["TimelineEventValor"] | (never | null);
      /** @description Preenchido so em eventos de socio */
      pessoa?: components["schemas"]["TimelineEventPessoa"] | (never | null);
    };
    TimelineEventPessoa: {
      /** @description Nome do socio (Title Case) */
      nome?: string;
      /** @description CPF/CNPJ formatado, ou null */
      documento?: string | null;
      /** @description Qualificacao (Socio-Administrador, Diretor, ...) */
      qualificacao?: string;
    };
    TimelineEventValor: {
      /** @description Codigo bruto (situacao, porte, natureza, CNAE) quando houver */
      codigo?: string;
      /** @description Descricao legivel (ja enriquecida) */
      descricao?: string;
    };
    TrabalhistaErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /**
         * @description Codigo do erro (ex: VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED)
         * @example VALIDATION_ERROR
         */
        codigo?: string;
        /**
         * @description Mensagem descritiva do erro
         * @example CPF invalido
         */
        mensagem?: string;
      };
    };
    /** @description Participacao da empresa no PAT, agrupada por papel. As tres listas estao sempre presentes (vazias quando nao ha registro). */
    TrabalhistaResponse: {
      beneficiarias?: components["schemas"]["PatBeneficiaria"][];
      facilitadoras?: components["schemas"]["PatFacilitadora"][];
      fornecedoras?: components["schemas"]["PatFornecedora"][];
    };
    /** @description Parceiro comercial com operacoes de transporte agrupadas. No perfil completo os campos 'por_produto' e 'operacoes' vem vazios (detalhe disponivel em endpoint dedicado). */
    TransporteAgrupado: {
      /** @description CPF/CNPJ do parceiro (somente digitos) */
      documento?: string;
      /** @enum {string} */
      tipo?: "PF" | "PJ";
      nome?: string;
      uf?: string;
      municipio?: string;
      /**
       * @description Se o parceiro eh remetente ou destinatario
       * @enum {string}
       */
      direcao?: "remetente" | "destinatario";
      qtd_operacoes?: number;
      volume_total?: number;
      valor_total?: number;
      produtos?: string[];
      /** @description Vazio no perfil completo */
      por_produto?: components["schemas"]["ProdutoAgrupado"][];
      periodo?: {
        primeiro?: string;
        ultimo?: string;
      };
      /** @description Vazio no perfil completo */
      operacoes?: components["schemas"]["TransporteDetalhe"][];
    };
    TransporteDetalhe: {
      data_emissao?: string;
      produto?: string;
      nome_popular?: string;
      volume?: number;
      unidade?: string;
      valor_total?: number;
    };
    UltimoDespacho: {
      /** @description Codigo do despacho INPI (ex: 25.4) */
      codigo?: string;
      /** @description Data do despacho (YYYY-MM-DD) */
      data?: string | null;
      /** @description Texto complementar do despacho */
      complemento?: string | null;
    };
    ValoresMensais: {
      central?: number | null;
      minimo?: number | null;
      maximo?: number | null;
    };
    VeiculosErrorResponse: {
      /** @example false */
      success?: boolean;
      erro?: {
        /**
         * @description Codigo do erro (ex: VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED)
         * @example VALIDATION_ERROR
         */
        codigo?: string;
        /**
         * @description Mensagem descritiva do erro
         * @example CPF invalido
         */
        mensagem?: string;
      };
    };
    VeiculosResponse: {
      veiculos?: components["schemas"]["VeiculosVeiculo"][];
    };
    VeiculosVeiculo: {
      /** @description CPF ou CNPJ do proprietario (apenas digitos, sem formatacao) */
      documento?: string;
      /**
       * @description PF (pessoa fisica) ou PJ (pessoa juridica)
       * @enum {string}
       */
      tipo?: "PF" | "PJ";
      nome_proprietario?: string;
      /** @description Ano do documento/registro */
      ano_documento?: number;
      /** @description Placa atual */
      placa?: string;
      /** @description Placa formato antigo, sem hifen (ex: ABC1234) */
      placa_antiga?: string;
      /** @description Placa formato Mercosul (string vazia se nao houver) */
      placa_nova?: string;
      renavam?: string;
      chassi?: string;
      ano_fabricacao?: number;
      /** @description Ano do modelo (null quando desconhecido) */
      ano_modelo?: number | null;
      marca?: string;
      modelo?: string;
      cor?: string;
      combustivel?: string;
      /** @description Automovel, Motocicleta, Caminhao, etc */
      tipo_veiculo?: string;
      especie_veiculo?: string;
      potencia?: string;
      cilindradas?: string;
      quantidade_passageiro?: string;
      municipio?: string;
      uf?: string;
      /** @description Regular, Irregular, Roubo/Furto, Baixado, etc */
      situacao_veiculo?: string;
      /** @description Nacional ou Importado */
      nacionalidade?: string;
      /** @description Tipo de carroceria (string vazia se nao houver) */
      carroceria?: string;
      tipo_montagem?: string;
      peso_bruto_total?: string;
      cap_maxima_tracao?: string;
      capacidade_carga?: string;
      motor?: string;
      /** @description Numero da caixa de cambio (string vazia se nao houver) */
      caixa_cambio?: string;
      /** @description Normal, Remarcado, etc */
      situacao_chassi?: string;
      eixos?: string;
      /** @description Media de preco FIPE (string vazia se nao houver) */
      media_preco?: string;
      /** @description Timestamp da ultima atualizacao do registro */
      updated_at?: number;
      /** @description Lista de restricoes do veiculo (ex: Alienacao Fiduciaria) */
      restricoes?: string[];
    };
    Regularidade: {
      documento?: string;
      tipo_documento?: string;
      modulos?: components["schemas"]["RegularidadeModulo"][];
    };
    RegularidadeModulo: {
      modulo?: string;
      status?: string;
      irregularidades?: components["schemas"]["RegularidadeItem"][];
    };
    RegularidadeItem: {
      tipo?: string;
      descricao?: string;
      orgao?: string | null;
      data?: string | null;
      valor?: number | null;
      detalhes?: Record<string, never> | null;
    };
    CreatePerfil: {
      /** @description CPF, com ou sem máscara. */
      documento: string;
      /** @description ID do perfil, do seu contrato. */
      perfil_id: string;
      /** @description Tipos de vínculo aceitos nos processos. Padrão: ["documento"]. Com "nome", entram também processos ligados só pelo nome, e pode haver homônimos. */
      tipos_vinculo?: ("documento" | "nome")[];
    };
    PerfilJobCreated: {
      job_id?: string;
      /** @example processando */
      status?: string;
      perfil?: {
        perfil_id?: string | null;
        label?: string | null;
      };
      /** @description ISO 8601 */
      criado_em?: string;
    };
  };
  responses: {
    /** @description dossie_custom_not_enabled: conta sem liberação de public_api_dossies_custom para modos personalizados ou matriz. Sem aceitação/cobrança. */
    CustomDossieNotEnabled: {
      headers: {
        [name: string]: unknown;
      };
      content: {
        "application/problem+json": components["schemas"]["Error"];
      };
    };
    /** @description Erro no formato application/problem+json */
    Error: {
      headers: {
        [name: string]: unknown;
      };
      content: {
        "application/problem+json": components["schemas"]["Error"];
      };
    };
  };
  parameters: {
    AnalysisId: string;
    ChangeId: string;
    Cursor: string;
    DossieId: string;
    IdempotencyKey: string;
    Limit: number;
    MonitorId: string;
    SearchId: string;
    /** @description Máximo de registros retornados */
    ListLimit: number;
    /** @description Número de registros a pular */
    ListOffset: number;
    /** @description Filtro por classe processual. */
    ProcessosClasses: string;
    /** @description Filtro por assunto. */
    ProcessosAssuntos: string;
    /** @description Filtro por área. */
    ProcessosAreas: string;
    /** @description Filtro por polo. */
    ProcessosPolos: string;
    /** @description Se "false", não traz as movimentações (padrão: traz). */
    ProcessosIncludeMovements: string;
    /** @description Se "true" junto com `realtime`, busca de novo mesmo os processos já vinculados (atualiza advogados e movimentações). */
    ProcessosForce: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  getAeronavesByCpf: {
    parameters: {
      query: {
        /** @description Nome do proprietario (obrigatorio para CPF: sem ele a consulta retorna vazio) */
        nome: string;
      };
      header?: never;
      path: {
        /** @description CPF do proprietario (com ou sem formatacao) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Aeronaves e drones encontrados */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AeronavesResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AeronavesErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AeronavesErrorResponse"];
        };
      };
    };
  };
  getAeronavesByCnpj: {
    parameters: {
      query?: {
        /** @description Razao social da empresa */
        nome?: string;
      };
      header?: never;
      path: {
        /** @description CNPJ da empresa (com ou sem formatacao) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Aeronaves e drones encontrados */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AeronavesResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AeronavesErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AeronavesErrorResponse"];
        };
      };
    };
  };
  getBeneficiosByCpf: {
    parameters: {
      query?: {
        /** @description Filtrar por nome do beneficiario */
        nome?: string;
      };
      header?: never;
      path: {
        /** @description CPF do beneficiario (apenas digitos) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Beneficios encontrados */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BeneficiosCpfResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BeneficiosErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BeneficiosErrorResponse"];
        };
      };
    };
  };
  getBeneficiosByCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CNPJ (apenas digitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Renuncias fiscais encontradas */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BeneficiosCnpjResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BeneficiosErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["BeneficiosErrorResponse"];
        };
      };
    };
  };
  emitirCertidaoCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          /** @example 11222333000181 */
          cnpj: string;
        };
      };
    };
    responses: {
      /** @description Emissão enfileirada */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CertidaoEnvelope"];
        };
      };
      /** @description CNPJ inválido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  emitirCertidaoTrabalhista: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          /** @example 52998224725 */
          documento: string;
        };
      };
    };
    responses: {
      /** @description Emissão enfileirada */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CertidaoEnvelope"];
        };
      };
      /** @description CPF ou CNPJ inválido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  consultarCertidao: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        certidaoId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Estado atual da emissão */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CertidaoEnvelope"];
        };
      };
      /** @description Certidão inexistente ou pertencente a outra workspace */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  baixarPdfCertidao: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        certidaoId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Redirecionamento temporário para a evidência */
      302: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Certidão inexistente ou pertencente a outra workspace */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description A emissão ainda não foi concluída */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Evidência temporariamente indisponível */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  getDividasByCpf: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Dívidas encontradas */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DividasResponse"];
        };
      };
      /** @description Token inválido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DividasErrorResponse"];
        };
      };
    };
  };
  getDividasByCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Dívidas encontradas */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DividasResponse"];
        };
      };
      /** @description Token inválido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DividasErrorResponse"];
        };
      };
    };
  };
  getDoacoesPoliticasByCpf: {
    parameters: {
      query?: {
        /** @description Tamanho da página (default 100; máximo 500, valores fora da faixa são ajustados, não rejeitados) */
        limit?: number;
        /** @description Deslocamento da página (default 0; máximo 50000, valores fora da faixa são ajustados) */
        offset?: number;
        /** @description Filtra pelo ano da eleição (ex.: 2022). Aplica-se também ao total e ao resumo */
        ano?: number;
        /** @description UF da prestação de contas do beneficiário (27 UFs + BR/VT/ZZ; case-insensitive) */
        uf?: string;
        /** @description Sigla do partido do beneficiário (case-insensitive) */
        partido?: string;
        /** @description Cargo do beneficiário (ex.: Vereador, Deputado Federal; case-insensitive) */
        cargo?: string;
      };
      header?: never;
      path: {
        /** @description CPF do doador (com ou sem formatação; não-dígitos são removidos) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Envelope com total, resumo agregado e página de doações. total 0 quando não há resultados ou o documento é inválido (crédito reembolsado), nunca 404 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DoacoesPoliticasResponse"];
        };
      };
      /** @description Query param com tipo inválido (ex.: ano não numérico). Documento inválido NÃO gera 400, responde 200 com total 0 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DoacoesPoliticasErrorResponse"];
        };
      };
      /** @description Token ausente ou inválido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DoacoesPoliticasErrorResponse"];
        };
      };
      /** @description Quota de consultas do workspace excedida */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DoacoesPoliticasErrorResponse"];
        };
      };
    };
  };
  getDoacoesPoliticasByCnpj: {
    parameters: {
      query?: {
        /** @description Tamanho da página (default 100; máximo 500, valores fora da faixa são ajustados, não rejeitados) */
        limit?: number;
        /** @description Deslocamento da página (default 0; máximo 50000, valores fora da faixa são ajustados) */
        offset?: number;
        /** @description Filtra pelo ano da eleição (ex.: 2022). Aplica-se também ao total e ao resumo */
        ano?: number;
        /** @description UF da prestação de contas do beneficiário (27 UFs + BR/VT/ZZ; case-insensitive) */
        uf?: string;
        /** @description Sigla do partido do beneficiário (case-insensitive) */
        partido?: string;
        /** @description Cargo do beneficiário (ex.: Vereador, Deputado Federal; case-insensitive) */
        cargo?: string;
      };
      header?: never;
      path: {
        /** @description CNPJ do doador (com ou sem formatação; não-dígitos são removidos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Envelope com total, resumo agregado e página de doações. total 0 quando não há resultados ou o documento é inválido (crédito reembolsado), nunca 404 */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DoacoesPoliticasResponse"];
        };
      };
      /** @description Query param com tipo inválido (ex.: ano não numérico). Documento inválido NÃO gera 400, responde 200 com total 0 */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DoacoesPoliticasErrorResponse"];
        };
      };
      /** @description Token ausente ou inválido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DoacoesPoliticasErrorResponse"];
        };
      };
      /** @description Quota de consultas do workspace excedida */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DoacoesPoliticasErrorResponse"];
        };
      };
    };
  };
  searchDocumentos: {
    parameters: {
      query: {
        /** @description Texto para buscar (CPF, CNPJ, nome ou termo) */
        query: string;
        /** @description Numero da pagina (default: 1) */
        page?: number;
        /** @description Itens por pagina (default: 20) */
        page_size?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Resultados da busca paginados */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DocumentosResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DocumentosErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DocumentosErrorResponse"];
        };
      };
    };
  };
  getDominiosByCpf: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Dominios encontrados */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DominiosResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DominiosErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DominiosErrorResponse"];
        };
      };
    };
  };
  getDominiosByCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Dominios encontrados */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DominiosResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DominiosErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["DominiosErrorResponse"];
        };
      };
    };
  };
  getEmpresaByCnpj: {
    parameters: {
      query?: {
        /** @description Se true, enfileira a validação oficial do nome no TST/BNDT e inclui validacao_oficial na resposta. */
        realtime?: boolean;
      };
      header?: never;
      path: {
        /** @description CNPJ da empresa (14 digitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Perfil completo da empresa com todos os dados agregados */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresaResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
    };
  };
  getSociosByCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CNPJ da empresa (14 digitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Lista de socios */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            socios?: components["schemas"]["EmpresasSocio"][];
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
    };
  };
  getFuncionariosByCnpj: {
    parameters: {
      query?: {
        /** @description Maximo de registros retornados (max 200, padrao 50) */
        limit?: number;
        /** @description Numero de registros a pular (padrao 0) */
        offset?: number;
      };
      header?: never;
      path: {
        /** @description CNPJ da empresa (14 digitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Lista de funcionarios */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            funcionarios?: components["schemas"]["Funcionario"][];
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
    };
  };
  getLinhaDoTempoByCnpj: {
    parameters: {
      query?: {
        /** @description Filtra por tipo de evento. CSV dos 15 tipos (ex.: socio_entrada,capital_alterado). Omitido = todos. */
        tipos?: string;
        /** @description Mes inicial inclusive (YYYY-MM) */
        desde?: string;
        /** @description Mes final inclusive (YYYY-MM) */
        ate?: string;
        /** @description Maximo de eventos retornados (1 a 2000, padrao 500). Sem offset: use truncado + filtros para ver mais. */
        limite?: number;
      };
      header?: never;
      path: {
        /** @description CNPJ da empresa (14 digitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Linha do tempo com cobertura e eventos */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["LinhaDoTempoResponse"];
        };
      };
      /** @description Parametro invalido (tipos fora da lista, desde/ate fora de YYYY-MM, limite invalido) */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
    };
  };
  getEmpresaTrabalhistaByCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CNPJ da empresa (14 digitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Dados trabalhistas */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": Record<string, never>;
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
    };
  };
  getEmpresaBeneficiosByCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CNPJ da empresa (14 digitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Beneficios fiscais */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": Record<string, never>;
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
    };
  };
  getSociedadesByCpf: {
    parameters: {
      query?: {
        /** @description Nome do socio (melhora precisao) */
        nome?: string;
        /** @description Maximo de registros retornados (max 200, padrao 50) */
        limit?: number;
        /** @description Numero de registros a pular (padrao 0) */
        offset?: number;
      };
      header?: never;
      path: {
        /** @description CPF do socio (11 digitos) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Lista de empresas onde a pessoa consta como socia ou administradora */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            empresas?: components["schemas"]["EmpresaResponse"][];
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
    };
  };
  getEmpresasByEmail: {
    parameters: {
      query?: {
        /** @description Maximo de registros retornados (max 200, padrao 50) */
        limit?: number;
        /** @description Numero de registros a pular (padrao 0) */
        offset?: number;
      };
      header?: never;
      path: {
        /** @description Email cadastrado na empresa */
        email: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Empresas encontradas (perfil completo, `socios` vazio) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            empresas?: components["schemas"]["EmpresaResponse"][];
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
    };
  };
  getEmpresasByTelefone: {
    parameters: {
      query?: {
        /** @description Maximo de registros retornados (max 200, padrao 50) */
        limit?: number;
        /** @description Numero de registros a pular (padrao 0) */
        offset?: number;
      };
      header?: never;
      path: {
        /** @description Telefone com DDD (10-11 digitos) */
        telefone: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Empresas encontradas (perfil completo, `socios` vazio) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            empresas?: components["schemas"]["EmpresaResponse"][];
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
    };
  };
  getProcessosByCnpj: {
    parameters: {
      query?: {
        /** @description Maximo de processos por pagina (default 50, max 200) */
        limit?: number;
        /** @description Offset para paginacao (default 0) */
        offset?: number;
        /** @description Filtrar por categorias (comma-separated). Ex: falencia,recuperacao-judicial */
        categorias?: string;
        /** @description Se "true", dispara scraping em tempo real nos tribunais e-SAJ e retorna `{ realtime: { job_id, status, poll_url } }` para polling em /processos/jobs/{jobId}. */
        realtime?: string;
        /** @description Tipos de vinculo separados por virgula. Padrao: documento. Use documento,nome para incluir associacoes pelo nome. */
        tipos_vinculo?: string;
        /** @description Filtro por classe processual. */
        classes?: components["parameters"]["ProcessosClasses"];
        /** @description Filtro por assunto. */
        assuntos?: components["parameters"]["ProcessosAssuntos"];
        /** @description Filtro por área. */
        areas?: components["parameters"]["ProcessosAreas"];
        /** @description Filtro por polo. */
        polos?: components["parameters"]["ProcessosPolos"];
        /** @description Se "false", não traz as movimentações (padrão: traz). */
        include_movements?: components["parameters"]["ProcessosIncludeMovements"];
        /** @description Se "true" junto com `realtime`, busca de novo mesmo os processos já vinculados (atualiza advogados e movimentações). */
        force?: components["parameters"]["ProcessosForce"];
      };
      header?: never;
      path: {
        /** @description CNPJ (14 digitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Processos encontrados */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ProcessosResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ProcessosErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ProcessosErrorResponse"];
        };
      };
    };
  };
  getTrabalhistaByCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CNPJ da empresa (com ou sem formatacao) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Resultado da consulta */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["TrabalhistaResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["TrabalhistaErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["TrabalhistaErrorResponse"];
        };
      };
    };
  };
  getVeiculosByCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CNPJ da empresa (14 digitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Lista de veiculos encontrados */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["VeiculosResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["VeiculosErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["VeiculosErrorResponse"];
        };
      };
    };
  };
  getImoveisByCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CNPJ (14 digitos, com ou sem mascara) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Imoveis encontrados (ou corpo { erro } quando o CNPJ e invalido) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ImoveisCnpjResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ImoveisErrorResponse"];
        };
      };
    };
  };
  getPatentsByCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CNPJ da empresa (14 digitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Patentes encontradas */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PatentesResponse"];
        };
      };
      /** @description CNPJ invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PatentesErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PatentesErrorResponse"];
        };
      };
    };
  };
  getRuralByCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CNPJ (14 digitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Perfil rural completo. Em caso de documento invalido ou servico indisponivel, retorna { erro: string } tambem com status 200. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json":
            | components["schemas"]["RuralProfile"]
            | components["schemas"]["RuralErro"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RuralErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RuralErrorResponse"];
        };
      };
    };
  };
  getCodigos: {
    parameters: {
      query?: {
        /** @description Filtrar por tipo: naturezas, cnaes, qualificacoes, motivos, paises. Se omitido, retorna todas. */
        tipo?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Tabelas de códigos */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @description Tipo da tabela filtrada */
            tipo?: string;
            /** @description Total de registros */
            total?: number;
            dados?: {
              /** @description Código identificador */
              codigo?: string;
              /** @description Descrição do código */
              descricao?: string;
            }[];
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmpresasErrorResponse"];
        };
      };
    };
  };
  getEscriturasByCpf: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CPF com ou sem máscara */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Consulta enfileirada */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["JobRef"];
        };
      };
      /** @description CPF inválido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EscriturasErrorResponse"];
        };
      };
      /** @description Token inválido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EscriturasErrorResponse"];
        };
      };
    };
  };
  getEscriturasByCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CNPJ com ou sem máscara */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Consulta enfileirada */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["JobRef"];
        };
      };
      /** @description CNPJ inválido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EscriturasErrorResponse"];
        };
      };
      /** @description Token inválido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EscriturasErrorResponse"];
        };
      };
    };
  };
  getEscriturasJob: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description `jobId` devolvido pela consulta por CPF ou CNPJ */
        jobId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Status e, quando concluído, o resultado */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["JobStatus"];
        };
      };
      /** @description Token inválido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EscriturasErrorResponse"];
        };
      };
    };
  };
  getImoveisByCpf: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CPF (11 digitos, com ou sem mascara) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Imoveis encontrados (ou corpo { erro } quando o CPF e invalido) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ImoveisCpfResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ImoveisErrorResponse"];
        };
      };
    };
  };
  getLicitacoesByCpf: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Licitacoes encontradas */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["LicitacoesResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["LicitacoesErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["LicitacoesErrorResponse"];
        };
      };
    };
  };
  getLicitacoesByCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Licitacoes encontradas */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["LicitacoesResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["LicitacoesErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["LicitacoesErrorResponse"];
        };
      };
    };
  };
  getListasRestritivasByCpf: {
    parameters: {
      query?: {
        /** @description Nome da pessoa. Se omitido, e resolvido automaticamente da base. Melhora listas que casam por nome (BACEN, sancoes internacionais). */
        nome?: string;
      };
      header?: never;
      path: {
        /** @description CPF do titular (com ou sem formatacao) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Ocorrencias agrupadas + mapa de cobertura */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListasRestritivasResponse"];
        };
      };
      /** @description CPF invalido (formato ou digito verificador) */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListasRestritivasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListasRestritivasErrorResponse"];
        };
      };
    };
  };
  getListasRestritivasByCnpj: {
    parameters: {
      query?: {
        /** @description Razao social / nome. Se omitido, e resolvido automaticamente da base. */
        nome?: string;
      };
      header?: never;
      path: {
        /** @description CNPJ da empresa (com ou sem formatacao) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Ocorrencias agrupadas + mapa de cobertura */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListasRestritivasResponse"];
        };
      };
      /** @description CNPJ invalido (formato ou digito verificador) */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListasRestritivasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListasRestritivasErrorResponse"];
        };
      };
    };
  };
  getListasRestritivasByDocumento: {
    parameters: {
      query?: {
        /** @description Nome / razao social. Se omitido, e resolvido automaticamente da base. */
        nome?: string;
      };
      header?: never;
      path: {
        /** @description CPF (11 digitos) ou CNPJ (14 digitos), com ou sem formatacao */
        documento: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Ocorrencias agrupadas + mapa de cobertura (ver exemplos em /cpf e /cnpj) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListasRestritivasResponse"];
        };
      };
      /** @description Documento deve ter 11 (CPF) ou 14 (CNPJ) digitos */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListasRestritivasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ListasRestritivasErrorResponse"];
        };
      };
    };
  };
  createAnalysis: {
    parameters: {
      query?: never;
      header: {
        /** @description Chave única por requisição lógica (UUID recomendado). Obrigatória. Reenviar a mesma chave com o mesmo body em até 24h devolve a resposta original (HTTP 200) sem nova cobrança; mesma chave com body diferente devolve 409. */
        "Idempotency-Key": string;
        /** @description Identificador de rastreio opcional fornecido pelo cliente. Gerado pelo servidor se omitido; ecoado no header da resposta. */
        "x-request-id"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateAnalysisRequest"];
      };
    };
    responses: {
      /** @description Replay idempotente: mesma Idempotency-Key + mesmo body dentro da janela de 24h. Corpo idêntico ao da resposta 202 original; nenhum token adicional é cobrado. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CreateAnalysisAccepted"];
        };
      };
      /** @description Análise aceita e enfileirada para processamento. Tokens debitados. */
      202: {
        headers: {
          /** @description Identificador da requisição (ecoado ou gerado). */
          "x-request-id"?: string;
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CreateAnalysisAccepted"];
        };
      };
      /** @description Requisição inválida: header Idempotency-Key ausente (bad_request), documento sem dígitos / tamanho errado / dígito verificador inválido (bad_request) ou campo com tipo/enum inválido (validation_error, com errors[]). */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorAnaliseProblem"];
        };
      };
      /** @description Chave de API ausente, malformada, inválida ou revogada. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorAnaliseProblem"];
        };
      };
      /** @description Saldo de tokens do workspace insuficiente. Campos extras: required (tokens necessários) e balance (saldo atual). */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorAnaliseProblem"];
        };
      };
      /** @description Feature não habilitada no workspace: analysis_engine (qualquer chamada /v1) ou analysis_engine_pf (análises de CPF). Campo extra request_access_url indica onde solicitar acesso. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorAnaliseProblem"];
        };
      };
      /** @description Conflito de idempotência: requisição concorrente com a mesma Idempotency-Key em andamento, ou mesma chave reutilizada com body diferente. */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorAnaliseProblem"];
        };
      };
      /** @description Nenhuma engine disponível para a requisição: workspace sem engine padrão e sem template aplicável, engine_id inexistente/arquivada, ou subject_type incompatível com a engine. */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorAnaliseProblem"];
        };
      };
    };
  };
  getAnalysis: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identificador de rastreio opcional fornecido pelo cliente. Gerado pelo servidor se omitido; ecoado no header da resposta. */
        "x-request-id"?: string;
      };
      path: {
        /** @description UUID da análise (campo id da resposta do POST). */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Estado atual da análise. Header Retry-After presente apenas em estados não-terminais (pending/running). */
      200: {
        headers: {
          /** @description Segundos a aguardar antes do próximo poll. Presente apenas quando status é pending ou running. */
          "Retry-After"?: number;
          /** @description Identificador da requisição (ecoado ou gerado). */
          "x-request-id"?: string;
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["MotorAnaliseAnalysis"];
        };
      };
      /** @description Chave de API ausente, malformada, inválida ou revogada. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorAnaliseProblem"];
        };
      };
      /** @description Análise inexistente ou pertencente a outro workspace. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorAnaliseProblem"];
        };
      };
    };
  };
  createOperation: {
    parameters: {
      query?: never;
      header?: {
        /** @description Opcional. Presente: reenviar a mesma key com o mesmo payload devolve a resposta original (HTTP 200), sem nova operação nem nova cobrança; a mesma key com payload diferente devolve 409 idempotency_conflict. Ausente: cada POST cria uma operação nova. */
        "Idempotency-Key"?: string;
        /** @description Identificador de rastreio opcional fornecido pelo cliente. Ecoado no header da resposta (nunca no body). */
        "x-request-id"?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["CreateOperationRequest"];
      };
    };
    responses: {
      /** @description Replay idempotente: mesma Idempotency-Key + mesmo payload. Corpo idêntico ao da resposta 202 original; nenhum token adicional é cobrado. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CreateOperationAccepted"];
        };
      };
      /** @description Operação aceita e enfileirada para processamento. CNAB parseado e tokens debitados (uma cobrança por entidade única do borderô; a cobrança não aparece no payload). */
      202: {
        headers: {
          /** @description Identificador da requisição (ecoado ou gerado). */
          "x-request-id"?: string;
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CreateOperationAccepted"];
        };
      };
      /** @description Requisição inválida (validation_error, com errors[] field-level para file, xmls e cedente_cnpj): arquivo ausente ("No file provided"), cedente_cnpj ausente ("cedente_cnpj is required") ou com dígito verificador inválido ("Invalid CNPJ format"), CNAB que não parseia, ou arquivo acima do teto por parte (128 MiB para file e 512 MiB para xmls). Nada é cobrado, o débito só acontece após o parse. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorCreditoProblem"];
        };
      };
      /** @description Chave de API ausente, malformada, inválida ou revogada. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorCreditoProblem"];
        };
      };
      /** @description Saldo de tokens do workspace insuficiente para as entidades únicas do borderô. Campos extras: required (tokens necessários) e balance (saldo atual). Nada é cobrado. */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorCreditoProblem"];
        };
      };
      /** @description Feature analysis_engine não habilitada no workspace (feature_not_enabled, com request_access_url) ou acesso negado genérico (forbidden). */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorCreditoProblem"];
        };
      };
      /** @description Conflito de idempotência: a mesma Idempotency-Key foi reutilizada com um payload diferente (só ocorre quando o header opcional é enviado). */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorCreditoProblem"];
        };
      };
      /** @description O multipart completo, incluindo campos e framing, ultrapassa o teto de 768 MiB do gateway (payload_too_large). O stream enviado ao upstream é abortado. */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorCreditoProblem"];
        };
      };
      /** @description Engine não utilizável ou nenhuma engine de borderô disponível para a operação. */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorCreditoProblem"];
        };
      };
      /** @description Erro inesperado no servidor. Inclua o instance (request_id) ao acionar o suporte. */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorCreditoProblem"];
        };
      };
    };
  };
  getOperation: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identificador de rastreio opcional fornecido pelo cliente. Ecoado no header da resposta (nunca no body). */
        "x-request-id"?: string;
      };
      path: {
        /** @description UUID da operação (campo operation_id da resposta do POST). */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Estado atual da operação. */
      200: {
        headers: {
          /** @description Identificador da requisição (ecoado ou gerado). */
          "x-request-id"?: string;
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Operation"];
        };
      };
      /** @description Chave de API ausente, malformada, inválida ou revogada. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorCreditoProblem"];
        };
      };
      /** @description Operação inexistente ou pertencente a outro workspace. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorCreditoProblem"];
        };
      };
    };
  };
  getOperationResult: {
    parameters: {
      query?: {
        /** @description issues (padrão): poda títulos aprovados e sacados sem problemas. all: árvore completa. Outro valor retorna 400 (Invalid filter value. Use "issues" or "all".). */
        filter?: "issues" | "all";
        /** @description Blocos extras, separados por vírgula. Valor suportado: execution_plan (adiciona o campo execution_plan à resposta; hoje sempre []). */
        include?: string;
      };
      header?: {
        /** @description Identificador de rastreio opcional fornecido pelo cliente. Ecoado no header da resposta (nunca no body). */
        "x-request-id"?: string;
      };
      path: {
        /** @description UUID da operação (campo operation_id da resposta do POST). */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Resultado hierárquico da operação. */
      200: {
        headers: {
          /** @description Identificador da requisição (ecoado ou gerado). */
          "x-request-id"?: string;
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["OperationResult"];
        };
      };
      /** @description Parâmetro filter inválido. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorCreditoProblem"];
        };
      };
      /** @description Chave de API ausente, malformada, inválida ou revogada. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorCreditoProblem"];
        };
      };
      /** @description Operação inexistente ou pertencente a outro workspace. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorCreditoProblem"];
        };
      };
      /** @description A operação ainda não chegou a completed, o resultado só existe em completed. Faça polling do GET /operations/{id} e tente novamente. */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["MotorCreditoProblem"];
        };
      };
    };
  };
  getNfeByChave: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Chave de acesso da NF-e (44 digitos) */
        chave: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Dados da NF-e */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NfeResponse"];
        };
      };
      /** @description Chave de acesso invalida (deve ter 44 digitos) */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NfeErrorResponse"];
        };
      };
    };
  };
  getNfeLote: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          /** @description Array de chaves de acesso (max 10.000) */
          chaves: string[];
        };
      };
    };
    responses: {
      /** @description Resultado do lote */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            code?: number;
            total?: number;
            success?: number;
            errors?: number;
            results?: {
              chave?: string;
              /** @enum {string} */
              status?: "ok" | "not_found" | "error";
              data?: components["schemas"]["NfeData"];
              error?: string;
            }[];
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NfeErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["NfeErrorResponse"];
        };
      };
    };
  };
  getPatentsByCpf: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CPF do titular (11 digitos) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Patentes encontradas */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PatentesResponse"];
        };
      };
      /** @description CPF invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PatentesErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PatentesErrorResponse"];
        };
      };
    };
  };
  perfilCadastralCpf: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CPF da pessoa fisica (somente digitos, 11 caracteres) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Perfil cadastral completo da pessoa fisica. Observacao: para documento invalido ou nao encontrado a API responde 200 com o corpo { "erro": "..." } (ex.: CPF invalido, CPF nao encontrado, Servico indisponivel). */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfilCadastralCpfResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfilErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfilErrorResponse"];
        };
      };
    };
  };
  perfilCadastralCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CNPJ da empresa (somente digitos, 14 caracteres) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Perfil cadastral completo da empresa. Observacao: para documento invalido ou nao encontrado a API responde 200 com o corpo { "erro": "..." } (ex.: CNPJ invalido, CNPJ nao encontrado, Servico indisponivel). */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfilCadastralCnpjResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfilErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfilErrorResponse"];
        };
      };
    };
  };
  perfilPatrimonialCpf: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CPF da pessoa fisica (somente digitos, 11 caracteres) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Perfil patrimonial completo da pessoa fisica. Observacao: para CPF invalido a API responde 200 com o corpo { "erro": "CPF invalido" }. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfilPatrimonialResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfilErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfilErrorResponse"];
        };
      };
    };
  };
  perfilPatrimonialCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CNPJ da empresa (somente digitos, 14 caracteres) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Perfil patrimonial completo da empresa. Observacao: para CNPJ invalido a API responde 200 com o corpo { "erro": "CNPJ invalido" }. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfilPatrimonialResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfilErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfilErrorResponse"];
        };
      };
    };
  };
  getPerfisJobStatus: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        jobId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Status do job */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @description ID do job */
            id?: string;
            /**
             * @description Status atual do job
             * @enum {string}
             */
            status?: "pending" | "processing" | "completed" | "failed";
            /** @description Progresso de 0 a 100 */
            progress?: number;
            /** @description Resultado do job quando completo */
            data?: Record<string, never>;
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfisErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfisErrorResponse"];
        };
      };
    };
  };
  getPessoaByCpf: {
    parameters: {
      query?: {
        /** @description Se true, enfileira a validação oficial do nome no TST/BNDT e inclui validacao_oficial na resposta. */
        realtime?: boolean;
      };
      header?: never;
      path: {
        /** @description CPF (11 digitos, com ou sem formatacao) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Dados basicos da pessoa com parentes */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example 123.456.789-01 */
            documento?: string;
            /** @enum {string} */
            tipo_documento?: "CPF";
            /** @example João Silva de Oliveira */
            nome_completo?: string;
            /** @example Masculino */
            genero?: string;
            /** @example 1990-01-15 */
            data_nascimento?: string;
            /**
             * @description Indica se a pessoa consta como falecida na base de obitos
             * @example false
             */
            falecido?: boolean;
            /** @description Dados do obito. null se a pessoa nao consta como falecida. */
            obito?: components["schemas"]["Obito"] | (never | null);
            parentes?: {
              /** @example Maria Silva */
              nome?: string;
              /** @example 987.654.321-00 */
              documento?: string;
              /** @enum {string} */
              tipo_documento?: "CPF";
              /** @example 01 */
              vinculo_codigo?: string;
              /** @example Cônjuge */
              vinculo_nome?: string;
            }[];
            /** @description Referência assíncrona incluída quando realtime=true. */
            validacao_oficial?: {
              /** @enum {string} */
              status: "queued" | "failed";
              /** @enum {string} */
              fonte: "tst_bndt";
              nome_base: string | null;
              /** Format: uuid */
              certidao_id: string | null;
              poll_url: string | null;
            };
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
    };
  };
  getEnderecosByCpf: {
    parameters: {
      query?: {
        /** @description Máximo de registros retornados */
        limit?: components["parameters"]["ListLimit"];
        /** @description Número de registros a pular */
        offset?: components["parameters"]["ListOffset"];
      };
      header?: never;
      path: {
        /** @description CPF (11 digitos) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Lista de enderecos */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            enderecos?: components["schemas"]["PessoasEndereco"][];
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
    };
  };
  getEmpregosByCpfPessoas: {
    parameters: {
      query?: {
        /** @description Máximo de registros retornados */
        limit?: components["parameters"]["ListLimit"];
        /** @description Número de registros a pular */
        offset?: components["parameters"]["ListOffset"];
      };
      header?: never;
      path: {
        /** @description CPF (11 digitos) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Historico de empregos */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            empregos?: components["schemas"]["PessoasEmprego"][];
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
    };
  };
  findByTelefone: {
    parameters: {
      query?: {
        /** @description Maximo de registros retornados (max 200, padrao 50) */
        limit?: number;
        /** @description Numero de registros a pular (padrao 0) */
        offset?: number;
      };
      header?: never;
      path: {
        /** @description Telefone com DDD (10-11 digitos) */
        telefone: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description CPFs associados ao telefone */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["TelefoneReversoResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
    };
  };
  getTelefonesByCpf: {
    parameters: {
      query?: {
        /** @description Maximo de registros retornados (max 200, padrao 50) */
        limit?: number;
        /** @description Numero de registros a pular (padrao 0) */
        offset?: number;
      };
      header?: never;
      path: {
        /** @description CPF (11 digitos) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Lista de telefones */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /**
             * @description CPF formatado
             * @example 123.456.789-01
             */
            documento?: string;
            /**
             * @example CPF
             * @enum {string}
             */
            tipo_documento?: "CPF";
            telefones?: {
              /** @example 55 */
              ddi?: string;
              /** @example 11 */
              ddd?: string;
              /** @example 999998888 */
              numero?: string;
              /** @example 5511999998888 */
              numero_completo?: string;
              /** @example São Paulo */
              estado?: string;
              /** @example Vivo */
              operadora?: string;
              /**
               * @description Data de referencia (YYYY-MM-DD) ou null
               * @example null
               */
              data?: string | null;
            }[];
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
    };
  };
  getTelefonesByCnpj: {
    parameters: {
      query?: {
        /** @description Maximo de registros retornados (max 200, padrao 50) */
        limit?: number;
        /** @description Numero de registros a pular (padrao 0) */
        offset?: number;
        /** @description Se "true", inclui a verificação de WhatsApp. */
        whatsapp?: string;
      };
      header?: never;
      path: {
        /** @description CNPJ (14 digitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Lista de telefones */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /**
             * @description CNPJ formatado
             * @example 12.345.678/0001-99
             */
            documento?: string;
            /**
             * @example CNPJ
             * @enum {string}
             */
            tipo_documento?: "CNPJ";
            telefones?: {
              /** @example 55 */
              ddi?: string;
              /** @example 11 */
              ddd?: string;
              /** @example 999998888 */
              numero?: string;
              /** @example 5511999998888 */
              numero_completo?: string;
              /** @example São Paulo */
              estado?: string;
              /** @example Vivo */
              operadora?: string;
            }[];
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
    };
  };
  getEmailsByCpf: {
    parameters: {
      query?: {
        /** @description Maximo de registros retornados (max 200, padrao 50) */
        limit?: number;
        /** @description Numero de registros a pular (padrao 0) */
        offset?: number;
      };
      header?: never;
      path: {
        /** @description CPF (11 digitos) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Lista de emails */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /**
             * @description CPF formatado
             * @example 123.456.789-01
             */
            documento?: string;
            /**
             * @example CPF
             * @enum {string}
             */
            tipo_documento?: "CPF";
            emails?: components["schemas"]["PessoasEmail"][];
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
    };
  };
  getEmailsByCnpj: {
    parameters: {
      query?: {
        /** @description Maximo de registros retornados (max 200, padrao 50) */
        limit?: number;
        /** @description Numero de registros a pular (padrao 0) */
        offset?: number;
      };
      header?: never;
      path: {
        /** @description CNPJ (14 digitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Lista de emails */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /**
             * @description CNPJ formatado
             * @example 12.345.678/0001-99
             */
            documento?: string;
            /**
             * @example CNPJ
             * @enum {string}
             */
            tipo_documento?: "CNPJ";
            emails?: components["schemas"]["PessoasEmail"][];
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
    };
  };
  getProcessosByCpf: {
    parameters: {
      query?: {
        /** @description Maximo de processos por pagina (default 50, max 200) */
        limit?: number;
        /** @description Offset para paginacao (default 0) */
        offset?: number;
        /** @description Filtrar por categorias (comma-separated). Ex: falencia,recuperacao-judicial */
        categorias?: string;
        /** @description Se "true", dispara scraping em tempo real nos tribunais e-SAJ e retorna `{ realtime: { job_id, status, poll_url } }` para polling em /processos/jobs/{jobId}. */
        realtime?: string;
        /** @description Tipos de vinculo separados por virgula. Padrao: documento. Use documento,nome para incluir associacoes pelo nome. */
        tipos_vinculo?: string;
        /** @description Filtro por classe processual. */
        classes?: components["parameters"]["ProcessosClasses"];
        /** @description Filtro por assunto. */
        assuntos?: components["parameters"]["ProcessosAssuntos"];
        /** @description Filtro por área. */
        areas?: components["parameters"]["ProcessosAreas"];
        /** @description Filtro por polo. */
        polos?: components["parameters"]["ProcessosPolos"];
        /** @description Se "false", não traz as movimentações (padrão: traz). */
        include_movements?: components["parameters"]["ProcessosIncludeMovements"];
        /** @description Se "true" junto com `realtime`, busca de novo mesmo os processos já vinculados (atualiza advogados e movimentações). */
        force?: components["parameters"]["ProcessosForce"];
      };
      header?: never;
      path: {
        /** @description CPF (11 digitos) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Processos encontrados */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ProcessosResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ProcessosErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ProcessosErrorResponse"];
        };
      };
    };
  };
  getVeiculosByCpf: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CPF do proprietario (11 digitos) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Lista de veiculos encontrados */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["VeiculosResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["VeiculosErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["VeiculosErrorResponse"];
        };
      };
    };
  };
  getRuralByCpf: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CPF (11 digitos) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Perfil rural completo. Em caso de documento invalido ou servico indisponivel, retorna { erro: string } tambem com status 200. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json":
            | components["schemas"]["RuralProfile"]
            | components["schemas"]["RuralErro"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RuralErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RuralErrorResponse"];
        };
      };
    };
  };
  getPessoasByEmail: {
    parameters: {
      query?: {
        /** @description Máximo de registros retornados */
        limit?: components["parameters"]["ListLimit"];
        /** @description Número de registros a pular */
        offset?: components["parameters"]["ListOffset"];
      };
      header?: never;
      path: {
        /** @description Endereco de email */
        email: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description CPFs associados ao email */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["EmailReversoResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
    };
  };
  lookupEnderecosByCpf: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CPF (11 digitos) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Lista de enderecos */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": Record<string, never>;
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
    };
  };
  getEnderecosByCnpj: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CNPJ (14 digitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Lista de enderecos dos estabelecimentos */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": Record<string, never>;
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PessoasErrorResponse"];
        };
      };
    };
  };
  listDossies: {
    parameters: {
      query?: {
        limit?: components["parameters"]["Limit"];
        cursor?: components["parameters"]["Cursor"];
        status?:
          | "queued"
          | "running"
          | "completed"
          | "needs_review"
          | "failed"
          | "cancelled";
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Página de Dossiês */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Dossie"][];
            page?: components["schemas"]["Page"];
          };
        };
      };
      400: components["responses"]["Error"];
    };
  };
  createDossie: {
    parameters: {
      query?: never;
      header: {
        "Idempotency-Key": components["parameters"]["IdempotencyKey"];
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateDossie"];
      };
    };
    responses: {
      /** @description Dossiê aceito */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Dossie"];
        };
      };
      /** @description validation_error: modo, documento, módulo, limites ou matriz inválidos; inclui errors por campo. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["Error"];
        };
      };
      402: components["responses"]["Error"];
      403: components["responses"]["CustomDossieNotEnabled"];
      409: components["responses"]["Error"];
      422: components["responses"]["Error"];
    };
  };
  getDossie: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        dossie_id: components["parameters"]["DossieId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Dossiê encontrado */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Dossie"];
        };
      };
      404: components["responses"]["Error"];
    };
  };
  getDossieStatus: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        dossie_id: components["parameters"]["DossieId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Estado atual */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Dossie"];
        };
      };
      404: components["responses"]["Error"];
    };
  };
  cancelDossie: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        dossie_id: components["parameters"]["DossieId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Cancelamento aceito */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Dossie"];
        };
      };
      404: components["responses"]["Error"];
      409: components["responses"]["Error"];
    };
  };
  retryDossie: {
    parameters: {
      query?: never;
      header: {
        "Idempotency-Key": components["parameters"]["IdempotencyKey"];
      };
      path: {
        dossie_id: components["parameters"]["DossieId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Nova tentativa aceita */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Dossie"];
        };
      };
      402: components["responses"]["Error"];
      403: components["responses"]["CustomDossieNotEnabled"];
      404: components["responses"]["Error"];
      409: components["responses"]["Error"];
    };
  };
  listLenteAnalyses: {
    parameters: {
      query?: {
        limit?: components["parameters"]["Limit"];
        cursor?: components["parameters"]["Cursor"];
        status?:
          | "awaiting_upload"
          | "queued"
          | "running"
          | "completed"
          | "failed"
          | "cancelled"
          | "expired";
        mode?: "geo" | "face";
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Página de análises */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["LenteAnalysis"][];
            page?: components["schemas"]["Page"];
          };
        };
      };
      400: components["responses"]["Error"];
    };
  };
  createLenteAnalysis: {
    parameters: {
      query?: never;
      header: {
        "Idempotency-Key": components["parameters"]["IdempotencyKey"];
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          /** @enum {string} */
          mode: "geo" | "face";
          file: {
            /** @enum {string} */
            media_type: "image/jpeg" | "image/png" | "image/webp";
            size_bytes: number;
            sha256: string;
          };
        };
      };
    };
    responses: {
      /** @description Análise criada com instruções de upload */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["LenteAnalysis"];
        };
      };
      400: components["responses"]["Error"];
      409: components["responses"]["Error"];
      415: components["responses"]["Error"];
      422: components["responses"]["Error"];
    };
  };
  getLenteAnalysis: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        analysis_id: components["parameters"]["AnalysisId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Análise encontrada */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["LenteAnalysis"];
        };
      };
      404: components["responses"]["Error"];
    };
  };
  submitLenteAnalysis: {
    parameters: {
      query?: never;
      header: {
        "Idempotency-Key": components["parameters"]["IdempotencyKey"];
      };
      path: {
        analysis_id: components["parameters"]["AnalysisId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Análise aceita para processamento */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["LenteAnalysis"];
        };
      };
      402: components["responses"]["Error"];
      404: components["responses"]["Error"];
      409: components["responses"]["Error"];
      415: components["responses"]["Error"];
    };
  };
  cancelLenteAnalysis: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        analysis_id: components["parameters"]["AnalysisId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Cancelamento aceito */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["LenteAnalysis"];
        };
      };
      404: components["responses"]["Error"];
      409: components["responses"]["Error"];
    };
  };
  listMonitors: {
    parameters: {
      query?: {
        limit?: components["parameters"]["Limit"];
        cursor?: components["parameters"]["Cursor"];
        status?: "active" | "paused" | "cancelled";
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Página de Monitoramentos */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Monitor"][];
            page?: components["schemas"]["Page"];
          };
        };
      };
      400: components["responses"]["Error"];
    };
  };
  createMonitor: {
    parameters: {
      query?: never;
      header: {
        "Idempotency-Key": components["parameters"]["IdempotencyKey"];
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          name?: string;
          identifier: string;
          /** @enum {string} */
          identifier_type: "cpf" | "cnpj";
          listen_items?: ("company" | "debts" | "processes" | "partners")[];
          emails?: string[];
          frequency_hours?: number;
          /** @description Confirma a contratação quando o limite incluído foi atingido. */
          confirm_extra?: boolean;
        };
      };
    };
    responses: {
      /** @description Monitoramento criado */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Monitor"];
        };
      };
      400: components["responses"]["Error"];
      402: components["responses"]["Error"];
      409: components["responses"]["Error"];
      422: components["responses"]["Error"];
    };
  };
  getMonitor: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        monitor_id: components["parameters"]["MonitorId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Monitoramento encontrado */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Monitor"];
        };
      };
      404: components["responses"]["Error"];
    };
  };
  updateMonitor: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        monitor_id: components["parameters"]["MonitorId"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          name?: string;
          listen_items?: ("company" | "debts" | "processes" | "partners")[];
          emails?: string[];
          frequency_hours?: number;
        };
      };
    };
    responses: {
      /** @description Monitoramento atualizado */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Monitor"];
        };
      };
      404: components["responses"]["Error"];
      409: components["responses"]["Error"];
    };
  };
  pauseMonitor: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        monitor_id: components["parameters"]["MonitorId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Monitoramento pausado */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Monitor"];
        };
      };
      404: components["responses"]["Error"];
      409: components["responses"]["Error"];
    };
  };
  resumeMonitor: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        monitor_id: components["parameters"]["MonitorId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Monitoramento retomado */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Monitor"];
        };
      };
      402: components["responses"]["Error"];
      404: components["responses"]["Error"];
      409: components["responses"]["Error"];
    };
  };
  cancelMonitor: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        monitor_id: components["parameters"]["MonitorId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Encerramento aceito */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Monitor"];
        };
      };
      404: components["responses"]["Error"];
      409: components["responses"]["Error"];
    };
  };
  listMonitorChanges: {
    parameters: {
      query?: {
        limit?: components["parameters"]["Limit"];
        cursor?: components["parameters"]["Cursor"];
        severity?: "info" | "warn" | "critical";
        status?: "open" | "acknowledged";
      };
      header?: never;
      path: {
        monitor_id: components["parameters"]["MonitorId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Página de mudanças */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Change"][];
            page?: components["schemas"]["Page"];
          };
        };
      };
      404: components["responses"]["Error"];
    };
  };
  acknowledgeMonitorChange: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        monitor_id: components["parameters"]["MonitorId"];
        change_id: components["parameters"]["ChangeId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Mudança reconhecida */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Change"];
        };
      };
      404: components["responses"]["Error"];
      409: components["responses"]["Error"];
    };
  };
  listRastroSearches: {
    parameters: {
      query?: {
        limit?: components["parameters"]["Limit"];
        cursor?: components["parameters"]["Cursor"];
        status?: "queued" | "running" | "completed" | "failed" | "cancelled";
        type?: "email" | "phone" | "username" | "wallet";
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Página de buscas */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Search"][];
            page?: components["schemas"]["Page"];
          };
        };
      };
      400: components["responses"]["Error"];
    };
  };
  createRastroSearch: {
    parameters: {
      query?: never;
      header: {
        "Idempotency-Key": components["parameters"]["IdempotencyKey"];
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          /** @enum {string} */
          type: "email" | "phone" | "username" | "wallet";
          target: string;
          /**
           * @default all
           * @enum {string}
           */
          strategy?: "all" | "first_match";
        };
      };
    };
    responses: {
      /** @description Busca aceita */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Search"];
        };
      };
      400: components["responses"]["Error"];
      402: components["responses"]["Error"];
      409: components["responses"]["Error"];
      422: components["responses"]["Error"];
    };
  };
  getRastroSearch: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        search_id: components["parameters"]["SearchId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Busca encontrada */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Search"];
        };
      };
      404: components["responses"]["Error"];
    };
  };
  cancelRastroSearch: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        search_id: components["parameters"]["SearchId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Cancelamento aceito */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Search"];
        };
      };
      404: components["responses"]["Error"];
      409: components["responses"]["Error"];
    };
  };
  getProcessoByNumero: {
    parameters: {
      query?: {
        /** @description Quando true, preserva a leitura atual da base e enfileira consulta no tribunal inferido do numero CNJ, quando houver scraper suportado. */
        realtime?: boolean;
      };
      header?: never;
      path: {
        /** @description Numero do processo (com ou sem formatacao) */
        numero: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Detalhes do processo */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            numero_processo?: string;
            numero_formatado?: string;
            tribunal?: string;
            classe_codigo?: number;
            classe_nome?: string;
            grau?: string;
            /** @description Data ISO (YYYY-MM-DD) */
            data_ajuizamento?: string;
            orgao_julgador?: string;
            assuntos?: string;
            /** @description Maior valor entre o valor declarado e os valores mencionados; null quando ausente */
            valor_acao_num?: number | null;
            /** @description valor_acao_num formatado em BRL; null quando ausente */
            valor_acao_formatado?: string | null;
            /** @description Ate 20 valores monetarios mencionados (ordenados desc) */
            valores_mencionados?: {
              valor?: number;
              /** @description Valor formatado em BRL */
              formatado?: string;
              /** @description Tipo do valor (slug) */
              tipo?: string;
            }[];
            /** @description Tags brutas associadas ao processo */
            tags?: string[];
            eventos?: {
              tipo?: string;
              /** @description Data ISO (YYYY-MM-DD) */
              data?: string;
            }[];
            audiencias?: {
              tipo?: string;
              status?: string;
              /** @description Data ISO (YYYY-MM-DD) */
              data?: string;
            }[];
            mandados?: {
              tipo?: string;
              /** @description Data ISO (YYYY-MM-DD) */
              data?: string;
            }[];
            bens?: string[];
            identificadores?: {
              tipo?: string;
              valor?: string;
            }[];
            portes?: string[];
            /** @description Formato especifico deste endpoint (diverge da listagem por CPF/CNPJ). */
            partes?: {
              /** @description Nome da parte (Title Case) */
              nome?: string;
              /** @description CPF/CNPJ formatado; null quando ausente */
              documento?: string | null;
              /** @description Polo em minusculas (ex: ativo, passivo) */
              polo?: string;
              /** @description Slug bruto do tipo (ex: pessoa_fisica, pessoa_juridica) */
              tipo?: string;
            }[];
            advogados?: {
              nome?: string;
              oab?: string;
              /** @description Polo em minusculas */
              polo?: string;
              /** @description CPF formatado; string vazia ("") quando ausente */
              documento?: string;
            }[];
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ProcessosErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ProcessosErrorResponse"];
        };
      };
    };
  };
  getMovimentacoesByNumero: {
    parameters: {
      query?: {
        /** @description Maximo de movimentacoes retornadas (default 20, maximo 100) */
        limit?: number;
      };
      header?: never;
      path: {
        /** @description Numero do processo (com ou sem formatacao) */
        numero: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Movimentacoes do processo */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @description Numero do processo (digitos) */
            numero_processo?: string;
            /** @description Total de movimentacoes retornadas (limitado pelo parametro `limit`) */
            total?: number;
            movimentacoes?: components["schemas"]["Movimentacao"][];
          };
        };
      };
      /** @description Numero de processo invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ProcessosErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ProcessosErrorResponse"];
        };
      };
    };
  };
  listCategorias: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Lista de categorias */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": Record<string, never>;
        };
      };
    };
  };
  getProcessosJobStatus: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        jobId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Status do job */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @description ID do job (UUID) */
            job_id?: string;
            /**
             * @description Status atual do job
             * @enum {string}
             */
            status?: "waiting" | "active" | "completed" | "failed";
            /** @description Timestamp de criacao do job (epoch em milissegundos) */
            created_at?: number;
            /** @description Timestamp de conclusao (epoch em ms); presente quando status e completed ou failed */
            finished_at?: number | null;
            /** @description Resultado do job quando status e completed (mesmo shape de /processos/cpf|cnpj) */
            result?: Record<string, never> | null;
            /** @description Mensagem de erro quando status e failed */
            error?: string | null;
          };
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ProcessosErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ProcessosErrorResponse"];
        };
      };
    };
  };
  getRegistrosPorEmail: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Endereco de email para verificar */
        email: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Registros digitais encontrados */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RegistroPorEmailResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RegistroErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RegistroErrorResponse"];
        };
      };
    };
  };
  getRegistrosPorCpf: {
    parameters: {
      query?: {
        /** @description Filtrar por tipo (digital, comercial, bancario). Separar por virgula para multiplos. */
        tipo?: string;
      };
      header?: never;
      path: {
        /** @description CPF (11 digitos, somente numeros) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Registros encontrados */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RegistroPorCpfResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RegistroErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RegistroErrorResponse"];
        };
      };
    };
  };
  getRegistrosPorTelefone: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Numero de telefone (somente numeros, com DDD e codigo do pais) */
        telefone: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Registros encontrados */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RegistroPorTelefoneResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RegistroErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RegistroErrorResponse"];
        };
      };
    };
  };
  getRendaByCpf: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description CPF com ou sem máscara */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Estimativa (ou `sem_dados`) */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RendaResponse"];
        };
      };
      /** @description Token inválido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["RendaErrorResponse"];
        };
      };
      /** @description Base temporariamente indisponível (tokens estornados) */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Servico indisponivel */
            erro?: string;
          };
        };
      };
    };
  };
  getVeiculoByPlaca: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Placa do veiculo */
        placa: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Dados do veiculo */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["VeiculosResponse"];
        };
      };
      /** @description Parametro invalido */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["VeiculosErrorResponse"];
        };
      };
      /** @description Token ausente ou invalido */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["VeiculosErrorResponse"];
        };
      };
    };
  };
  getRegularidadeByCpf: {
    parameters: {
      query?: {
        /** @description Nome da pessoa. Melhora a precisão da busca por CPF. */
        nome?: string;
        /** @description Módulos separados por vírgula: ibama, sancao-nacional, banco-central, sancao-internacional, protestos. Sem este parâmetro, todos. */
        modulos?: string;
      };
      header?: never;
      path: {
        /** @description CPF (11 dígitos) */
        cpf: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Irregularidades achadas em cada módulo */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Regularidade"];
        };
      };
    };
  };
  getRegularidadeByCnpj: {
    parameters: {
      query?: {
        /** @description Razão social da empresa. */
        nome?: string;
        /** @description Módulos separados por vírgula: ibama, sancao-nacional, banco-central, sancao-internacional, protestos. Sem este parâmetro, todos. */
        modulos?: string;
      };
      header?: never;
      path: {
        /** @description CNPJ (14 dígitos) */
        cnpj: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Irregularidades achadas em cada módulo */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Regularidade"];
        };
      };
    };
  };
  createPerfil: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreatePerfil"];
      };
    };
    responses: {
      /** @description Job criado */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PerfilJobCreated"];
        };
      };
    };
  };
  getProcessosByNome: {
    parameters: {
      query: {
        /** @description Nome da pessoa ou da empresa. */
        nome: string;
        /** @description CPF ou CNPJ já conhecido, para tirar homônimos. */
        documento?: string;
        /** @description Fonte da busca. A documentação só mostra `ambas`. */
        fonte?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Processos achados pelo nome */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ProcessosResponse"];
        };
      };
    };
  };
  getProcessosJobResults: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        jobId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Resultados do job */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
    };
  };
  getRuralJob: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        jobId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Status do job */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
    };
  };
}
