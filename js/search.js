// Base de dados global de artigos para busca
const allArticles = [
    {
    title: 'Lula e Flávio Empatam pela Primeira Vez',
    description: 'A pesquisa Genial/Quaest registra pela primeira vez o empate entre Lula e Flávio Bolsonaro no segundo turno, ambos com 41%, evidenciando a erosão da vantagem petista rumo às eleições de 2026.',
    category: 'Política',
    url: 'politica/quaest-lula-flavio-empatados-41-segundo-turno-2026.html',
    tags: ['Quaest', 'Eleições 2026', 'Lula', 'Flávio Bolsonaro', 'Lula e Flávio Empatam pela Primeira Vez']
},
    {
        title: 'STF Limita Condenação Trabalhista ao Pedido Inicial',
        description: 'O ministro Alexandre de Moraes cassou acórdão do TRT-4 que permitia condenação trabalhista acima do valor pedido na inicial, limitando a ação ao montante declarado com base na Súmula Vinculante 10 e no artigo 97 da CF, enquanto a ADI 6002 aguarda julgamento no plenário do STF.',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/stf-moraes-condenacao-trabalhista-limite-peticao-inicial-adi-6002.html',
        tags: ['Condenação Trabalhista', 'Petição Inicial', 'ADI 6002', 'Reforma Trabalhista', 'Artigo 840 CLT', 'Súmula Vinculante 10', 'Alexandre de Moraes', 'Reclamação Constitucional', 'Reserva de Plenário']
    },
    {
        title: 'STJ Garante Dividendos ao Ex-Cônjuge Até Partilha Final',
        description: 'A Terceira Turma do STJ decidiu que o ex-cônjuge com direito à meação de cotas societárias também faz jus à parcela proporcional dos lucros e dividendos distribuídos até a efetiva quitação dos haveres, com base no artigo 1.660 do Código Civil e na vedação ao enriquecimento sem causa.',
        category: 'Direito de Família',
        url: 'direito-de-familia/stj-dividendos-ex-conjuge-cotista-anomalo-apuracao-haveres.html',
        tags: ['STJ Dividendos Ex-Cônjuge', 'Meação Cotas Empresa', 'Apuração de Haveres', 'Comunhão Parcial de Bens', 'Cotista Anômalo', 'REsp 2223719', 'Artigo 1660 Código Civil', 'Reforma Código Civil', 'Direito de Família Empresarial']
    },
     {
        title: 'Obra Mal Feita, Quem Paga a Conta ao Consumidor',
        description: 'A responsabilidade civil do fornecedor por falhas na execução de obras é objetiva, apoiada no artigo 618 do Código Civil e no artigo 14 do CDC, que impõem obrigação de resultado ao empreiteiro e garantia de cinco anos pela solidez e segurança da edificação.',
        category: 'Direito Civil',
        url: 'direito-civil/responsabilidade-fornecedor-obras-cdc-obrigacao-resultado.html',
        tags: ['Responsabilidade do Fornecedor', 'Falhas em Obras', 'Obrigação de Resultado', 'CDC', 'Artigo 618 Código Civil', 'Vício Construtivo', 'Dano Moral', 'Empreitada', 'Construção Civil', 'Direito do Consumidor']
    },
  {
        title: 'ANPP Ambiental, Quando a Empresa Confessa pelo Dirigente',
        description: 'A celebração de ANPP por pessoa jurídica em crimes ambientais gera paradoxo jurídico: a confissão corporativa pode refletir indevidamente sobre o corréu pessoa física que recusou o acordo, comprometendo o contraditório e a presunção de inocência.',
        category: 'Direito Criminial',
        url: 'direito-penal/anpp-ambiental-confissao-pessoa-juridica-correu-pessoa-fisica.html',
        tags: ['ANPP', 'Crimes Ambientais', 'Pessoa Jurídica', 'Lei 9605/98', 'Confissão Corporativa', 'Corréu', 'Artigo 28-A CPP', 'Direito Penal Ambiental', 'Responsabilidade Penal Empresa']
    },
    {
        title: 'Condenação por Golpe Ameaça Patentes Militares',
        description: 'Especialistas em Direito Militar explicam que condenação criminal superior a dois anos pode desencadear o Conselho de Justificação e a perda de posto dos militares acusados de envolvimento na trama golpista julgada pelo STF.',
        category: 'Direito Militar',
        url: 'direito-militar/condenacao-golpe-perda-patente-militares-stf.html',
        tags: ['Perda de Patente Militar', 'Golpe de Estado', 'STF', 'Conselho de Justificação', 'Superior Tribunal Militar', 'Direito Militar', 'Jair Bolsonaro', 'Indignidade para o Oficialato']
    },
    {
        title: 'IA e Jogo Responsável Unem Forças Globalmente',
        description: 'A Mindway AI e a Amelco firmaram aliança estratégica para expandir globalmente ferramentas de compliance regulatório e proteção de jogadores baseadas em inteligência artificial, integrando tecnologia de jogo responsável à plataforma B2B da Amelco.',
        category: 'Compliance',
        url: 'compliance/mindway-ai-amelco-parceria-compliance-jogo-responsavel-global.html',
        tags: ['Mindway AI', 'Amelco', 'Compliance Regulatório', 'Jogo Responsável', 'Inteligência Artificial', 'iGaming', 'Licenciamento Global', 'Proteção de Jogadores']
    },
     {
        title: 'Depósitos Bancários e Presunção Fiscal no CARF',
        description: 'O Conselho Administrativo de Recursos Fiscais consolidou jurisprudência sobre omissão de receitas por depósitos bancários não comprovados, à luz do artigo 42 da Lei 9.430/96, com inversão do ônus probatório ao contribuinte.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/depositos-bancarios-presuncao-fiscal-omissao-receitas-carf.html',
        tags: ['CARF', 'Omissão de Receitas', 'Depósitos Bancários', 'Artigo 42 Lei 9430/96', 'Presunção Legal', 'Jurisprudência Tributária', 'Ônus da Prova', 'Direito Tributário']
    },
    {
        title: 'BH Aprova Incentivo a Olimpíadas Científicas Escolares',
        description: 'A Comissão de Legislação e Justiça da Câmara Municipal de BH aprovou o PL 559/2025, criando programa de incentivo à participação de estudantes da rede pública em olimpíadas científicas nacionais e internacionais.',
        category: 'Legislação',
        url: 'legislacao/bh-olimpiadas-cientificas-estudantes-incentivo-legislativo.html',
        tags: ['PL 559/2025', 'Olimpíadas Científicas', 'Câmara Municipal BH', 'Educação Científica', 'Legislação Municipal', 'Incentivo Escolar', 'Belo Horizonte']
    },
   {
        title: 'Empate Técnico Redefine Disputa Presidencial',
        description: 'Nova pesquisa Meio/Ideia registrada no TSE revela que Lula empata tecnicamente com Flávio Bolsonaro e Tarcísio de Freitas em cenários de segundo turno, sinalizando uma corrida eleitoral de 2026 extremamente disputada.',
        category: 'Política',
        url: 'politica/eleicoes-2026-empate-tecnico-lula-flavio-tarcisio.html',
        tags: ['Eleições 2026', 'Lula', 'Tarcísio de Freitas', 'Flávio Bolsonaro', 'Pesquisa Meio Ideia', 'Empate Técnico', 'Segundo Turno']
    },
{
    title: 'Braskem Paga o Preço pelo Caos em Maceió',
    description: 'O STJ reconheceu a responsabilidade civil da Braskem pelo dano moral de ex-porteiro demitido após a evacuação de bairros atingidos pelo afundamento do solo em Maceió.',
    category: 'Direito Civil',
    url: 'direito-civil/braskem-indenizacao-trabalhador-desastre-maceio.html',
    tags: ['Braskem', 'Maceió', 'Desastre Ambiental', 'Responsabilidade Civil', 'Braskem Paga o Preço pelo Caos em Maceió']
},
{
    title: 'Proteção ou Vigilância Digital sobre Crianças e Jovens',
    description: 'A Lei 15.211/2025 impõe vínculo obrigatório de contas digitais de adolescentes a responsáveis adultos, ameaçando vítimas de abuso doméstico e gerando exclusão digital.',
    category: 'Direito de Família',
    url: 'direito-de-familia/lei-eca-digital-privacidade-criancas-adolescentes.html',
    tags: ['ECA Digital', 'Lei 15.211/2025', 'Privacidade Digital', 'Crianças e Adolescentes', 'Proteção ou Vigilância Digital sobre Crianças e Jovens']
},
{
    title: 'Família Vorcaro Aciona MP Contra Ameaças Digitais',
    description: 'O MP-SP requisitou ao DECAP inquérito para apurar cyberstalking, ameaças e uso não autorizado de imagens de familiares do banqueiro Daniel Vorcaro nas redes sociais, enquanto ele responde a investigações da PF por fraude, lavagem de dinheiro e obstrução de Justiça.',
    category: 'Direito Criminal',
    url: 'direito-penal/mp-sp-inquerito-ameacas-digitais-vorcaro-familia-cyberstalking.html',
    tags: ['MP-SP inquérito ameaças Vorcaro', 'cyberstalking família banqueiro digital', 'Lei 14132 stalking redes sociais', 'Operação Compliance Zero Vorcaro família', 'Família Vorcaro Aciona MP Contra Ameaças Digitais']
},
{
    title: 'TST Garante Insalubridade Máxima a Socorrista do SAMU',
    description: 'A Sexta Turma do TST reconheceu o direito de socorrista do SAMU ao adicional de insalubridade de 40%, firmando que o contato com pacientes portadores de doenças infectocontagiosas é suficiente para o grau máximo, sem exigir trabalho permanente em área de isolamento.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/tst-insalubridade-grau-maximo-socorrista-samu-doenca-infectocontagiosa.html',
    tags: ['TST insalubridade grau máximo SAMU', 'adicional insalubridade socorrista infectocontagioso', 'NR-15 agente biológico grau máximo', 'ministro Augusto César TST insalubridade', 'TST Garante Insalubridade Máxima a Socorrista do SAMU']
},
{
    title: 'ANPP Chega à Justiça Militar Brasileira',
    description: 'A aplicação do Acordo de Não Persecução Penal na Justiça Militar gera intenso debate sobre compatibilidade com os princípios da hierarquia e disciplina castrense, com posições divergentes no STM e ausência de regulamentação específica no CPPM.',
    category: 'Direito Militar',
    url: 'direito-militar/anpp-justica-militar-acordo-nao-persecucao-penal-aplicacao.html',
    tags: ['ANPP Justiça Militar', 'Acordo Não Persecução Penal militar', 'Pacote Anticrime CPPM', 'STM ANPP jurisprudência', 'ANPP Chega à Justiça Militar Brasileira']
},
{
    title: 'TJ-BA Impulsiona Súmulas para Acelerar Julgamentos',
    description: 'O TJ-BA editou o Ato Normativo Conjunto nº 7/2026 recomendando a criação de enunciados de súmula para matérias com jurisprudência reiterada, visando reduzir o retrabalho nos colegiados, permitir decisões monocráticas e fortalecer a segurança jurídica em toda a Justiça baiana.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/tj-ba-sumulas-uniformizacao-jurisprudencia-celeridade-ato-normativo-2026.html',
    tags: ['TJ-BA súmulas jurisprudência 2026', 'Ato Normativo Conjunto 7 TJBA', 'uniformização jurisprudência celeridade', 'art 926 CPC precedentes tribunais', 'TJ-BA Impulsiona Súmulas para Acelerar Julgamentos']
},
{
    title: 'Lula Larga 2026 Pior do que Estava em 2022',
    description: 'As pesquisas de março de 2026 revelam que Lula inicia a corrida pela reeleição em posição mais frágil do que em 2022, com rejeição de 54%, desaprovação acima de 49% e vantagem reduzida a 5 pontos sobre Flávio Bolsonaro no segundo turno.',
    category: 'Política',
    url: 'politica/lula-larga-2026-pior-posicao-eleitoral-2022-rejeicao-pesquisas.html',
    tags: ['Lula eleições 2026 pesquisa', 'rejeição Lula 2026 Quaest', 'Flávio Bolsonaro empate técnico', 'Toledo análise eleitoral', 'Lula Larga 2026 Pior do que Estava em 2022']
},
{
    title: 'PGFN Cria Laboratório de Teses da Reforma Tributária',
    description: 'A Procuradoria-Geral da Fazenda Nacional instalou uma incubadora de teses jurídicas para mapear e antecipar os litígios da transição para o IVA Dual da reforma tributária, apostando na prevenção do contencioso e na transação tributária como estratégia de segurança jurídica.',
    category: 'Legislação',
    url: 'legislacao/pgfn-incubadora-teses-reforma-tributaria-ibs-cbs-contencioso.html',
    tags: ['PGFN incubadora teses tributárias', 'reforma tributária IBS CBS litígios', 'contencioso tributário 2026', 'transação tributária PTI reform', 'PGFN Cria Laboratório de Teses da Reforma Tributária']
},
{
    title: 'Itaú Fecha Contas de Securitizadora Ligada ao Master',
    description: 'O Itaú BBA encerrou as contas bancárias vinculadas aos CRIs emitidos pela Base Securitizadora, investigada na Operação Compliance Zero da PF. A decisão expõe o contágio do caso Banco Master ao mercado de capitais brasileiro.',
    category: 'Compliance',
    url: 'compliance/itau-encerra-contas-cri-base-securitizadora-compliance-zero-master.html',
    tags: ['Itaú BBA CRI securitizadora', 'Base Securitizadora Compliance Zero', 'Banco Master liquidação 2026', 'mercado securitização CRI irregularidade', 'Itaú Fecha Contas de Securitizadora Ligada ao Master']
},
{
    title: 'Esposa de Moraes Detalha Contrato Milionário com Master',
    description: 'A advogada Viviane Barci de Moraes detalhou em nota pública os serviços prestados ao Banco Master em contrato de R$ 129 milhões, alegando foco em compliance e revisão do código de ética, negando atuação perante o STF.',
    category: 'Compliance',
    url: 'compliance/viviane-barci-moraes-contrato-banco-master-compliance-etica.html',
    tags: ['Viviane Barci Moraes', 'Banco Master compliance', 'Alexandre de Moraes STF conflito', 'contrato milionário escritório', 'Esposa de Moraes Detalha Contrato Milionário com Master']
},
{
    title: 'Direita Fragmentada Aposta Tudo em Flávio Bolsonaro',
    description: 'A campanha de Flávio Bolsonaro classifica como inviável a coexistência de três candidaturas conservadoras competitivas em 2026. Com Jair Bolsonaro preso e inelegível, a direita enfrenta sua maior crise de representação.',
    category: 'Política',
    url: 'politica/direita-fragmentada-flavio-bolsonaro-eleicoes-2026.html',
    tags: ['Flávio Bolsonaro 2026', 'direita fragmentada eleições', 'PL presidencial', 'Caiado Ratinho Jr candidatura', 'Direita Fragmentada Aposta Tudo em Flávio Bolsonaro']
},
{
    title: 'Reforma Legislativa Reestrutura Proteção do Produtor Rural',
    description: 'O Ministério da Agricultura e o Congresso Nacional articulam a aprovação do PL 2951/2024, que vincula o seguro rural ao crédito subsidiado do Plano Safra e propõe migrar gradualmente o risco climático do Tesouro para o mercado segurador privado.',
    category: 'Legislação',
    url: 'legislacao/reforma-legislativa-seguro-rural-pl-2951-plano-safra-2026.html',
    tags: ['seguro rural', 'PL 2951/2024', 'Plano Safra 2026', 'seguro paramétrico', 'Reforma Legislativa Reestrutura Proteção do Produtor Rural']
},
{
    title: 'TST Pune Uso de Precedentes Falsos Gerados por IA',
    description: 'A Sexta Turma do TST condenou por litigância de má-fé empresa de telecomunicações e advogado após identificar precedentes judiciais inexistentes ou adulterados possivelmente gerados por inteligência artificial. Ofícios foram encaminhados à OAB e ao MPF.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/tst-pune-precedentes-falsos-ia-litigancia-ma-fe-telecom.html',
    tags: ['TST', 'inteligência artificial advocacia', 'litigância de má-fé', 'jurisprudência falsa IA', 'TST Pune Uso de Precedentes Falsos Gerados por IA']
},
{
    title: 'Militares Doentes Ganham Isenção Previdenciária em Minas',
    description: 'O governo Zema encaminha à ALMG projeto de lei que estende a policiais e bombeiros militares aposentados ou pensionistas portadores de doenças graves a isenção de contribuição previdenciária até o dobro do teto do INSS.',
    category: 'Direito Militar',
    url: 'direito-militar/isencao-previdenciaria-militares-doencas-graves-minas-gerais-zema.html',
    tags: ['isenção previdenciária militar', 'PMMG', 'Zema ALMG', 'doenças graves servidores militares', 'Militares Doentes Ganham Isenção Previdenciária em Minas']
},
{
    title: 'Nexo Causal Ausente Derruba Pedido de Indenização Trabalhista',
    description: 'A Justiça do Trabalho da 15ª Região julgou improcedentes pedidos de indenização de auxiliar de serviços gerais que alegava acidente durante limpeza. Perícia médica afastou nexo causal e identificou patologias degenerativas.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/nexo-causal-ausente-indenizacao-acidente-trabalho-improcedente.html',
    tags: ['acidente de trabalho', 'nexo causal', 'doença ocupacional', 'perícia médica trabalhista', 'Nexo Causal Ausente Derruba Pedido de Indenização Trabalhista']
},
{
    title: 'Suspeita de Homicídio Deixa Prisão Preventiva',
    description: 'Magistrada de Bento Gonçalves substitui prisão preventiva de acusada de encomender assassinato do companheiro por medidas cautelares. Ministério Público recorreu ao TJRS para reverter o despacho.',
    category: 'Direito Criminal',
    url: 'direito-penal/suspeita-homicidio-liberdade-prisao-preventiva-bento-goncalves.html',
    tags: ['prisão preventiva', 'medidas cautelares', 'homicídio doloso', 'TJRS', 'Suspeita de Homicídio Deixa Prisão Preventiva']
},
{
    title: 'Mediação Familiar Ganha Força em Mutirão Virtual',
    description: 'O Cejusc de Fortaleza promove mutirão virtual com 266 audiências de mediação nas Varas de Família da Capital, reunindo 50 mediadores em 20 salas simultâneas para acelerar a solução consensual de conflitos familiares.',
    category: 'Direito de Família',
    url: 'direito-de-familia/cejusc-fortaleza-mutirao-virtual-mediacao-familia.html',
    tags: ['mediação familiar', 'Cejusc Fortaleza', 'TJCE', 'solução consensual', 'Mediação Familiar Ganha Força em Mutirão Virtual']
},    
{
    title: 'Leilão de Imóvel Exige Notificação Prévia ao Devedor',
    description: 'A execução extrajudicial de imóveis por alienação fiduciária só é legítima quando o credor esgota todos os meios de intimação pessoal do devedor antes de recorrer ao edital.',
    category: 'Direito Civil',
    url: 'direito-civil/leilao-extrajudicial-notificacao-devedor-imovel.html',
    tags: ['alienação fiduciária', 'leilão extrajudicial', 'notificação do devedor', 'Lei 9.514/1997', 'Leilão de Imóvel Exige Notificação Prévia ao Devedor']
},
{
    title: 'Receita Falsa Opioide e a Semi-Imputabilidade',
    description: 'Funcionário de clínica veterinária falsificou receituários para adquirir opioides e foi condenado pela 1ª Vara Criminal de Tupã. O caso expõe a fronteira entre dependência química e responsabilidade penal reduzida.',
    category: 'Direito Criminal',
    url: 'direito-penal/receita-falsa-opioide-semi-imputabilidade-condenacao-penal.html',
    tags: ['receita falsa', 'documento falso', 'semi-imputabilidade', 'princípio da consunção', 'Receita Falsa Opioide e a Semi-Imputabilidade']
},
{
    title: 'Compliance Virou Escudo Jurídico das Empresas',
    description: 'Com 83,8 milhões de processos em tramitação e fiscalização digital crescente, o compliance corporativo consolida-se como proteção jurídica e financeira essencial. Especialistas apontam cinco frentes de intervenção para reduzir passivos e fortalecer a governança empresarial.',
    category: 'Compliance',
    url: 'compliance/compliance-escudo-juridico-governanca-empresas-lei-anticorrupcao.html',
    tags: ['Compliance corporativo', 'Lei Anticorrupção', 'Governança empresarial', 'Risco jurídico', 'Compliance Virou Escudo Jurídico das Empresas']
},
{
    title: 'Fuga à Viatura Abre Porta Sem Mandado',
    description: 'STJ consolida entendimento de que fuga em direção ao domicílio ao avistar viatura policial justifica ingresso forçado sem mandado. Tese tensiona a inviolabilidade constitucional do lar e os limites do flagrante presumido.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/fuga-viatura-policial-domicilio-sem-mandado-stj-jurisprudencia.html',
    tags: ['Inviolabilidade do domicílio', 'Fuga policial', 'Flagrante delito', 'STJ', 'Fuga à Viatura Abre Porta Sem Mandado']
},
{
    title: 'Senado Endurece Proteção Contra Feminicídio',
    description: 'O PL 953/2026 eleva a pena máxima do feminicídio para 50 anos, tipifica instigação por terceiros contra vítimas e cria cadastro nacional de condenados. Proposta tramita no Senado no aniversário de 20 anos da Lei Maria da Penha.',
    category: 'Legislação',
    url: 'legislacao/senado-feminicidio-pena-maxima-protecao-mulheres-pl-953.html',
    tags: ['Feminicídio', 'Lei Maria da Penha', 'PL 953 2026', 'Violência doméstica', 'Senado Endurece Proteção Contra Feminicídio']
},
{
    title: 'Diálogos de Vorcaro Ameaçam Provas no STF',
    description: 'Vazamento de mensagens do celular de Daniel Vorcaro levou o STF a abrir inquérito. Especialistas alertam que a divulgação ilícita pode gerar nulidades processuais e comprometer as investigações sobre o Banco Master.',
    category: 'Política',
    url: 'politica/vorcaro-dialogos-vazamento-nulidade-provas-stf-banco-master.html',
    tags: ['Vorcaro', 'Banco Master', 'STF', 'Vazamento de provas', 'Diálogos de Vorcaro Ameaçam Provas no STF']
},
{
    title: 'Three Paths, One Decisive Choice in Divorce',
    description: 'Brazil records hundreds of thousands of marital dissolutions every year, and the way in which this process is conducted has implications that go far beyond the...',
    category: 'Family Law',
    url: 'direito-de-familia/divorce-extrajudicial-consensual-litigious-differences.html',
    tags: ['Romer carvalho','Three Paths, One Decisive Choice in Divorce', 'out-of-court divorce', 'consensual divorce', 'contested divorce', 'family law', 'division of assets', 'child custody', 'alimony', 'dissolution of marriage', 'registry office']
},
{
    title: 'Três Caminhos, Uma Escolha Decisiva no Divórcio',
    description: 'Entenda as diferenças entre o divórcio extrajudicial em cartório, o consensual judicial e o litigioso, seus requisitos legais, custos e impactos para cônjuges e filhos.',
    category: 'Direito de Família',
    url: 'direito-de-familia/divorcio-extrajudicial-consensual-litigioso-diferencas.html',
    tags: ['Romer carvalho','divórcio extrajudicial', 'divórcio consensual', 'divórcio litigioso', 'direito de família', 'partilha de bens', 'guarda de filhos', 'alimentos', 'dissolução do casamento', 'cartório']
},
{
    title: 'STJ e Seguro de Vida Blindagem Jurisprudencial',
    description: 'O STJ consolidou blindagem protetiva ao redor do seguro de vida, exigindo dolo específico para excluir cobertura por agravamento de risco, em entendimento positivado pelo Marco Legal dos Seguros.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/stj-seguro-vida-blindagem-jurisprudencial-agravamento-risco.html',
    tags: ['seguro de vida', 'STJ', 'agravamento de risco', 'Súmula 610', 'Súmula 620', 'Marco Legal dos Seguros', 'dolo específico', 'indenização securitária', 'jurisprudência']
},
{
    title: 'SentinELAS Chega Para Proteger Recrutas Femininas',
    description: 'O MPM lançou o aplicativo SentinELAS, ferramenta digital de proteção jurídica e acolhimento voltada às mulheres que ingressaram no Serviço Militar Inicial Feminino.',
    category: 'Direito Militar',
    url: 'direito-militar/sentinelas-mpm-protecao-mulheres-forcas-armadas.html',
    tags: ['SentinELAS', 'MPM', 'Ministério Público Militar', 'mulheres Forças Armadas', 'serviço militar feminino', 'proteção jurídica militar', 'assédio sexual militar', 'SMIF']
},
{
    title: 'Tarcísio Enterra Terceira Via em 2026',
    description: 'O governador de São Paulo descartou qualquer alternativa eleitoral fora da disputa entre Lula e Flávio Bolsonaro e declarou apoio formal ao senador do PL para 2026.',
    category: 'Política',
    url: 'politica/tarcisio-enterra-terceira-via-eleicoes-2026.html',
    tags: ['Tarcísio de Freitas', 'terceira via', 'eleições 2026', 'Flávio Bolsonaro', 'Lula', 'polarização política', 'PSD', 'cenário eleitoral', 'reeleição São Paulo']
},
{
    title: 'Compliance Como Escudo Invisível Consumidor',
    description: 'O compliance vai muito além da burocracia corporativa: é o mecanismo silencioso que protege o consumidor contra fraudes, crédito predatório e vazamento de dados.',
    category: 'Compliance',
    url: 'compliance/compliance-escudo-invisivel-protecao-consumidor.html',
    tags: ['compliance', 'proteção do consumidor', 'gestão de riscos', 'governança corporativa', 'prevenção de fraudes', 'crédito responsável', 'proteção de dados', 'conformidade regulatória']
},
{
    title: 'Licença Paternidade Vai Até Vinte Dias',
    description: 'O Senado Federal aprovou a expansão gradual da licença-paternidade no Brasil, elevando o prazo de cinco para vinte dias até 2029, com custeio pelo RGPS.',
    category: 'Legislação',
    url: 'legislacao/senado-licenca-paternidade-ampliacao-lei-previdencia.html',
    tags: ['licença paternidade', 'ampliação licença paternidade', 'Senado Federal', 'STF omissão legislativa', 'Política Nacional de Cuidados', 'previdência social', 'salário paternidade', 'legislação trabalhista']
},
{
    title: 'Suspensão de Dívida Ativa: o Que a Lei Garante',
    description: 'A Lei do Superendividamento permite que consumidores endividados suspendam obrigações financeiras por até seis meses, mediante análise judicial.',
    category: 'Direito Civil',
    url: 'direito-civil/divida-ativa-suspensao-pagamentos-lei-superendividamento.html',
    tags: ['dívida ativa', 'superendividamento', 'lei do superendividamento', 'suspensão de pagamento', 'renegociação de dívidas', 'direito civil', 'mínimo existencial']
},
{
    title: 'Trump Tem Uma Semana para Liberar o Petróleo do Oriente Médio Antes dos Preços Explodirem',
    description: 'Com o Estreito de Ormuz bloqueado pela guerra com o Irã e os preços do barril acumulando alta de 35% no ano, analistas alertam que Trump tem poucos dias para mostrar progresso concreto antes que os mercados percam a paciência.',
    category: 'Política',
    url: 'politica/trump-uma-semana-liberar-petroleo-oriente-medio-preco-disparar.html',
    tags: ['petróleo Oriente Médio', 'Estreito de Ormuz', 'crise energética', 'preço do petróleo 2026', 'Trump Tem Uma Semana para Liberar o Petróleo do Oriente Médio Antes dos Preços Explodirem']
},
{
    title: 'Trump Lança Resseguro de US$ 20 Bi para Petroleiros no Estreito de Ormuz',
    description: 'O governo Trump anunciou um programa de resseguro de US$ 20 bilhões para navios petroleiros no Estreito de Ormuz, em meio ao conflito com o Irã, visando estabilizar o fornecimento global de petróleo.',
    category: 'Política',
    url: 'politica/trump-resseguro-20-bilhoes-petroleiros-estreito-ormuz.html',
    tags: ['resseguro marítimo', 'Estreito de Ormuz', 'crise do petróleo', 'Donald Trump', 'Trump Lança Resseguro de US$ 20 Bi para Petroleiros no Estreito de Ormuz']
},
{
        title: 'Paes Joga Xadrez Enquanto Rio Elege Governador na Surdina',
        description: 'Com a dupla vacância no Executivo fluminense, o Rio caminha para uma eleição indireta na Alerj. Eduardo Paes articula alianças para outubro enquanto a direita disputa quem ocupará o Palácio Guanabara antes do pleito de outubro de 2026.',
        category: 'Política',
        url: 'politica/paes-eleicao-indireta-rio-governador-tampao-alerj-2026.html',
        tags: ['Eduardo Paes', 'eleição indireta', 'Rio de Janeiro', 'governador-tampão', 'Alerj', 'Cláudio Castro', 'eleições 2026', 'PSD', 'PL', 'Douglas Ruas', 'Palácio Guanabara', 'Senado', 'Jane Reis']
},
{
        title: 'Lula Apoia Paes no RJ, Mas Exige Chapa Competitiva',
        description: 'Lula confirma apoio a Eduardo Paes para o governo do Rio em 2026, mas exige formação de aliança eleitoral ampla. PT reivindica vaga no Senado para Benedita da Silva e monitora com ceticismo a composição da chapa fluminense.',
        category: 'Política',
        url: 'politica/lula-apoio-paes-rj-chapa-competitiva-eleicoes-2026.html',
        tags: ['Lula', 'Eduardo Paes', 'eleições 2026', 'Rio de Janeiro', 'PT', 'PSD', 'Benedita da Silva', 'chapa eleitoral', 'Palácio Guanabara', 'Senado', 'Alerj', 'aliança política']
},
{
        title: 'Assédio no Trabalho: Processos Explodem na Justiça Laboral',
        description: 'Em 2025, a Justiça do Trabalho recebeu 142.828 novos processos de assédio moral (+22%) e 12.813 de assédio sexual (+40%). Os dados expõem a persistência das condutas abusivas e a crescente conscientização jurídica dos trabalhadores brasileiros.',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/assedio-moral-sexual-processos-trabalhistas-aumento-2025.html',
        tags: ['assédio moral', 'assédio sexual', 'Justiça do Trabalho', 'TST', 'direito trabalhista', 'CLT', 'rescisão indireta', 'violência laboral', 'ambiente de trabalho', 'dignidade do trabalhador', 'indenização trabalhista']
},
{
        title: 'STJ Decide: Droga Apreendida Afasta Benefício Penal?',
        description: 'A 3ª Seção do STJ suspendeu o julgamento dos Temas Repetitivos 1.154 e 1.241, que discutem se quantidade e natureza da droga podem afastar o tráfico privilegiado ou modular a fração de redução da pena na dosimetria penal.',
        category: 'Direito Criminal',
        url: 'direito-penal/stj-quantidade-droga-trafico-privilegiado-dosimetria-pena.html',
        tags: ['tráfico privilegiado', 'STJ', 'dosimetria da pena', 'lei de drogas', 'temas repetitivos', 'minorante', 'bis in idem', 'direito penal', 'art. 33 lei 11.343', 'regime inicial']
},
{
        title: 'Cartórios na Linha de Frente Contra Violência Patrimonial Feminina',
        description: 'O Registro de Imóveis do Brasil lança plantão gratuito de orientação jurídica para mulheres sobre direitos patrimoniais em 11 estados. A iniciativa expõe a desinformação como principal vetor de vulnerabilidade feminina no Direito de Família.',
        category: 'Direito de Família',
        url: 'direito-de-familia/cartorios-protecao-patrimonial-mulheres-violencia-silenciosa.html',
        tags: ['violência patrimonial', 'mulheres', 'registro de imóveis', 'Lei Maria da Penha', 'regime de bens', 'união estável', 'cartórios', 'direito de família', 'autonomia financeira feminina']
},
{
        title: 'Armadilhas Digitais: Consumidor Brasileiro Desprotegido Frente à Europa',
        description: 'Padrões manipulativos de design no comércio eletrônico exploram vulnerabilidades do consumidor brasileiro. Enquanto a União Europeia avança com o Digital Services Act, o Brasil ainda engatinha na fiscalização efetiva das dark patterns.',
        category: 'Direito Civil',
        url: 'direito-civil/armadilhas-digitais-consumidor-brasileiro-desprotegido-frente-europa.html',
        tags: ['dark patterns', 'e-commerce', 'LGPD', 'CDC', 'direito do consumidor', 'Digital Services Act', 'proteção de dados', 'práticas abusivas digitais']
},
{
    title: 'PMs Viram Réus por Roubo Fardado',
    description: 'Três policiais militares do RJ foram presos em flagrante por roubar 11 celulares de passageiros de ônibus durante o expediente, configurando roubo qualificado, abuso de autoridade e responsabilidade civil do Estado.',
    category: 'Direito Penal',
    url: 'direito-militar/pms-presos-roubo-celulares-onibus-expediente-rj-2026.html',
    tags: ['PM Preso', 'Roubo Qualificado', 'Abuso de Autoridade', 'Segurança Pública RJ', 'Corregedoria PM', 'Direito Penal', 'PMs Viram Réus por Roubo Fardado']
},
{
    title: 'Código Civil Ignora a Família Real',
    description: 'Especialistas e juristas debatem no Senado a urgência de reformar o Código Civil no campo do direito de família e das sucessões, apontando lacunas sobre herança digital, reprodução assistida, divórcio unilateral e união homoafetiva.',
    category: 'Direito de Família',
    url: 'direito-de-familia/codigo-civil-ignora-familia-real-reforma-urgente-sucessoes.html',
    tags: ['Código Civil', 'Direito de Família', 'Direito das Sucessões', 'Divórcio Unilateral', 'União Homoafetiva', 'Herança Digital', 'PL 4/2025', 'Código Civil Ignora a Família Real']
},
{
    title: 'Migração Partidária Reforça Centro-Direita na Câmara',
    description: 'Levantamento do TSE revela que 10% dos deputados federais já mudou de partido antes da janela partidária de abril de 2026, com o centro-direita ganhando força na Câmara e alterando o equilíbrio parlamentar.',
    category: 'Política',
    url: 'politica/migracao-partidaria-reforco-centro-direita-camara-janela-2026.html',
    tags: ['Janela Partidária', 'Migração Partidária', 'Centro-Direita', 'Câmara dos Deputados', 'TSE', 'Eleições 2026', 'Infidelidade Partidária', 'Migração Partidária Reforça Centro-Direita na Câmara']
},
{
    title: 'Senado Aprova Redução de Penas',
    description: 'O Senado Federal aprovou o PL da dosimetria, que reduz os percentuais de cumprimento de pena em regime fechado para condenados pelo 8 de Janeiro. O texto segue para sanção presidencial e pode beneficiar o ex-presidente Jair Bolsonaro.',
    category: 'Direito Criminal',
    url: 'direito-penal/senado-aprova-reducao-penas-8j-dosimetria-sancao.html',
    tags: ['PL da Dosimetria', '8 de Janeiro', 'Progressão de Regime', 'Lei de Execução Penal', 'Bolsonaro', 'Senado Federal', 'Direito Penal', 'Senado Aprova Redução de Penas do 8J']
},
{
    title: 'Rio Protege Servidores do Assédio Funcional',
    description: 'A Prefeitura do Rio publicou a Resolução SMIT nº 23, que institui o Guia de Acolhimento na Apuração de Assédio, tornando obrigatório o tratamento humanizado e sigiloso às vítimas de assédio moral e sexual na administração pública municipal.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/rio-protege-servidores-assedio-funcional-guia-smit.html',
    tags: ['Assédio Moral', 'Assédio Sexual', 'Servidor Público', 'SMIT', 'Prefeitura do Rio', 'Lei 14.540/2023', 'Direito Trabalhista', 'Rio Protege Servidores do Assédio Funcional']
},
{
    title: 'CGU Eleva o Padrão do Compliance',
    description: 'A Portaria Normativa CGU 226/25 eleva o padrão dos programas de integridade nas contratações públicas, exigindo efetividade real e não apenas conformidade documental, sob pena de severas sanções administrativas.',
    category: 'Compliance',
    url: 'compliance/cgu-eleva-padrao-compliance-contratacoes-publicas-pn-226-25.html',
    tags: ['CGU', 'Compliance', 'Contratações Públicas', 'Integridade', 'PN CGU 226/25', 'Licitações', 'Anticorrupção', 'CGU Eleva o Padrão do Compliance']
},
{
    title: 'Dez Anos do CPC',
    description: 'Webinar promovido pelo TJRR debate os dez anos do CPC de 2015, analisando a consolidação da jurisprudência, o sistema de precedentes obrigatórios e os desafios práticos do processo civil brasileiro.',
    category: 'Jurisprudência',
    url: 'jurisprudencia/dez-anos-cpc-2015-webinar-legado-jurisprudencia.html',
    tags: ['CPC 2015', 'Código de Processo Civil', 'Jurisprudência', 'Precedentes Obrigatórios', 'TJRR', 'Webinar', 'Dez Anos do CPC']
},
{
    title: 'SC regulamenta Cordão de Girassol para deficiências ocultas',
    description: 'A Assembleia Legislativa de Santa Catarina aprovou legislação que oficializa o uso do Cordão de Girassol como símbolo de identificação de pessoas com deficiências não aparentes, como autismo, surdez e condições cognitivas.',
    category: 'Legislacao',
    url: 'legislacao/sc-regulamenta-cordao-girassol-deficiencias-ocultas-alesc.html',
    tags: ['Cordão de Girassol', 'Deficiências Ocultas', 'ALESC', 'Inclusão', 'SC regulamenta Cordão de Girassol para deficiências ocultas']
},
{
    title: 'MDB se divide e rejeita vice na chapa de Lula',
    description: 'A maioria dos diretórios estaduais do MDB formalizou manifesto rejeitando aliança nacional com o PT e pedindo neutralidade nas eleições presidenciais de 2026.',
    category: 'Politica',
    url: 'politica/mdb-divide-rejeita-vice-chapa-lula-eleicoes-2026.html',
    tags: ['MDB', 'Lula', 'Eleições 2026', 'Baleia Rossi', 'MDB se divide e rejeita vice na chapa de Lula']
},
{
    title: 'TRF-4 garante aposentadoria negada por 48 horas',
    description: 'O TRF-4, por unanimidade, concedeu aposentadoria por incapacidade permanente a segurado privado do benefício por diferença de apenas 48 horas no período de graça, reafirmando que as doenças devem ser analisadas como processos dinâmicos.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/trf4-aposentadoria-invalidez-inss-periodo-graca-doenca-dinamica.html',
    tags: ['INSS', 'Aposentadoria por Invalidez', 'Período de Graça', 'TRF-4', 'TRF-4 garante aposentadoria negada por 48 horas']
},
{
    title: 'SBT condenado por humilhação em programa televisivo',
    description: 'A 9ª Vara Cível de São Paulo condenou o SBT ao pagamento de R$ 30 mil por danos morais a participante do Programa do Ratinho submetido a exposição vexatória em rede nacional.',
    category: 'Direito Civil',
    url: 'direito-civil/sbt-condenado-humilhacao-programa-televisivo-ratinho-danos-morais.html',
    tags: ['SBT', 'Danos Morais', 'Direito à Imagem', 'Programa do Ratinho', 'SBT condenado por humilhação em programa televisivo']
},
{
    title: 'Tolerância zero: o arcabouço legal contra violência feminina',
    description: 'A política de tolerância zero à violência contra a mulher é um arcabouço normativo que vai além da punição e busca transformar as estruturas sociais que perpetuam a violência de gênero no Brasil.',
    category: 'Direito de Família',
    url: 'direito-de-familia/tolerancia-zero-arcabouco-legal-violencia-contra-mulher.html',
    tags: ['Violência contra a Mulher', 'Lei Maria da Penha', 'Feminicídio', 'Tolerância Zero', 'Tolerância zero: o arcabouço legal contra violência feminina']
},
{
    title: 'MPRJ reverte posição e pede internação de menor',
    description: 'Após novas vítimas emergirem no caso de estupro coletivo de Copacabana, o MPRJ reverteu sua posição e passou a requerer a internação provisória do adolescente investigado.',
    category: 'Direito Criminal',
    url: 'direito-penal/mprj-reverte-posicao-pede-internacao-menor-estupro-coletivo.html',
    tags: ['Estupro Coletivo', 'MPRJ', 'Internação de Menor', 'Ato Infracional', 'MPRJ reverte posição e pede internação de menor']
},
{
    title: 'Trump Admite Vácuo de Poder no Irã',
    description: 'Trump admitiu que ataques de EUA e Israel eliminaram os possíveis sucessores de Khamenei no Irã e anunciou terceira onda de bombardeios enquanto contra-ataques iranianos ameaçam o Estreito de Ormuz.',
    category: 'Política',
    url: 'politica/trump-vacuo-poder-ira-sucessores-khamenei-mortos.html',
    tags: ['Trump', 'Irã', 'Khamenei', 'Israel', 'Guerra Irã', 'Vácuo de Poder', 'Trump Admite Vácuo de Poder no Irã']
},
{
    title: 'Lula Pede Voto com Ironia Eleitoral',
    description: 'Durante a 2ª Conferência Nacional do Trabalho em São Paulo, Lula ironizou a ideia de sorte pelos indicadores econômicos e convocou eleitores a votarem em quem tem sorte.',
    category: 'Política',
    url: 'politica/lula-pede-voto-ironia-eleitoral-conferencia-trabalho-sp.html',
    tags: ['Lula', 'Eleições 2026', 'Pedido de Voto', 'TSE', 'Propaganda Eleitoral', 'Lula Pede Voto com Ironia Eleitoral']
},
{
    title: 'Alcolumbre Bloqueia Indicação de Messias ao STF',
    description: 'Davi Alcolumbre sinalizou a aliados que não deve pautar a sabatina de Jorge Messias ao STF neste ano.',
    category: 'Política',
    url: 'politica/alcolumbre-bloqueia-indicacao-messias-stf-2026.html',
    tags: ['Alcolumbre', 'Jorge Messias', 'STF', 'Senado Federal', 'Indicação STF', 'Alcolumbre Bloqueia Indicação de Messias ao STF']
},
{
    title: 'Justiça Militar Condena PM por Lesão Grave no Recife',
    description: 'A Vara da Justiça Militar Estadual de Pernambuco condenou policial militar a três anos e seis meses por lesão corporal grave após disparar bala de borracha e cegar estudante em encontro de passinho no Recife.',
    category: 'direito-militar',
    url: 'direito-militar/pm-condenado-lesao-grave-bala-borracha-passinho-recife.html',
    tags: ['Justiça Militar', 'Policial Militar Condenado', 'Bala de Borracha', 'Lesão Corporal Grave', 'Recife', 'TJPE', 'Justiça Militar Condena PM por Lesão Grave no Recife']
},
{
    title: 'Janja Revela Dois Casos de Assédio como Primeira-Dama',
    description: 'A primeira-dama Janja da Silva revelou ao programa Sem Censura, da TV Brasil, ter sido assediada duas vezes durante o mandato de Lula, usando o relato para destacar a vulnerabilidade das mulheres brasileiras.',
    category: 'Política',
    url: 'politica/janja-revela-assedio-como-primeira-dama-sem-censura.html',
    tags: ['Janja', 'Assédio', 'Primeira-Dama', 'Sem Censura', 'TV Brasil', 'Feminicídio', 'Violência contra Mulher', 'Lula', 'Janja Revela Dois Casos de Assédio como Primeira-Dama']
 },
 {
    title: 'Vorcaro Preso Novamente na Operação Compliance Zero',
    description: 'A Polícia Federal prendeu novamente Daniel Vorcaro, dono do Banco Master, na terceira fase da Operação Compliance Zero, autorizada pelo ministro André Mendonça do STF, que apura fraudes bilionárias, lavagem de dinheiro e corrupção.',
    category: 'Compliance',
    url: 'compliance/vorcaro-preso-operacao-compliance-zero-banco-master.html',
    tags: ['Daniel Vorcaro', 'Banco Master', 'Operação Compliance Zero', 'Polícia Federal', 'STF', 'André Mendonça', 'Lavagem de Dinheiro', 'Vorcaro Preso Novamente na Operação Compliance Zero']
  },
  {
    title: 'O MPSE Coloca o Assédio na Pauta Institucional e Lidera Debate',
    description: 'O Ministério Público de Sergipe promoveu palestra sobre prevenção do assédio moral e sexual no setor público, reforçando a cultura do respeito nas relações de trabalho.',
    category: 'Direito Trabalhista',
    url: 'direito-trabalhista/assedio-servico-publico-mpse-palestra-prevencao.html',
    tags: ['O MPSE Coloca o Assédio na Pauta Institucional e Lidera Debate','Assédio Moral', 'Assédio Sexual', 'Setor Público', 'MPSE', 'Ministério Público de Sergipe', 'Prevenção Assédio', 'Assédio no Serviço Público: MPSE Lidera Debate']
  },
  {
    title: 'Operação Argos: PF Age Contra Abuso Sexual Infantil',
    description: 'A Polícia Federal deflagrou a Operação Argos em Porto Velho para combater crimes de abuso sexual infantojuvenil, cumprindo mandado de busca e apreensão expedido pela Justiça Federal de Rondônia.',
    category: 'Direito Criminal',
    url: 'direito-penal/operacao-argos-pf-abuso-sexual-infantojuvenil-porto-velho.html',
    tags: ['Operação Argos', 'Polícia Federal', 'Abuso Sexual Infantil', 'Porto Velho', 'Rondônia', 'ECA', 'Operação Argos: PF Age Contra Abuso Sexual Infantil']
  },
  {
    title: 'Instagram Pode Entrar na Partilha de Bens?',
    description: 'Perfil no Instagram pode ser partilhado no divórcio quando configurado como ativo intangível com valor econômico constituído durante a relação conjugal.',
    category: 'Direito de Família',
    url: 'direito-de-familia/instagram-perfil-partilha-bens-divorcio.html',
    tags: ['Partilha de Bens', 'Instagram', 'Divórcio', 'Ativo Intangível', 'Patrimônio Digital', 'Instagram Pode Entrar na Partilha de Bens?']
  },
  {
    title: 'Responsabilidade Objetiva e Nexo Causal no STJ',
    description: 'O STJ reforça a centralidade do nexo causal na responsabilidade objetiva, distinguindo risco da atividade e fortuito externo em precedentes recentes.',
    category: 'Direito Civil',
    url: 'direito-civil/responsabilidade-objetiva-stj-precedentes.html',
    tags: ['Responsabilidade Objetiva', 'Nexo Causal', 'STJ', 'Fortuito Externo', 'Risco da Atividade', 'Responsabilidade Objetiva e Nexo Causal no STJ']
   },
   {
        title: 'Ministra do TST derruba jornada 12x36 de vigilante após identificar acúmulo sistemático de horas extraordinárias',
        description: 'A prática de escalar vigilantes no regime de 12 horas de trabalho por 36 de descanso — amplamente utilizada no setor de segurança privada.',
        category: 'Direito Trabalhista',
        url: 'jurisprudencia/stf-prorroga-90-dias-fundo-participacao-estados.html',
        tags: ['vigilante', 'TST', 'Ministra do TST derruba jornada 12x36 de vigilante após identificar acúmulo sistemático de horas extraordinárias']
    },
    {
        title: 'STF Prorroga por 90 Dias as Regras de Distribuição do Fundo de Participação dos Estados',
        description: 'O Fundo de Participação dos Estados (FPE) é um dos pilares estruturais do federalismo fiscal brasileiro.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/stf-prorroga-90-dias-fundo-participacao-estados.html',
        tags: ['Participação dos Estados', ' Congresso Nacional ', 'STF Prorroga por 90 Dias as Regras de Distribuição do Fundo de Participação dos Estados']
    },
    {
        title: 'Nova Norma da Receita Federal Sobre Multas Beneficia Empresas',
        description: 'A Receita Federal do Brasil publicou, em 2 de março de 2026, a Instrução Normativa RFB nº 2.310, instrumento normativo que altera.',
        category: 'Legislação',
        url: 'legislacao/nova-norma-receita-federal-multa-beneficia-empresas.html',
        tags: ['Nova Norma da Receita Federal Sobre Multas Beneficia Empresas', 'Receita Federa ']
    },
    {
        title: 'Protegidas no Papel, Vulneráveis na Vida Real',
        description: 'A cada novo caso de feminicídio noticiado no país, um detalhe se repete.',
        category: 'Direito de Família',
        url: 'direito-de-familia/protegidas-no-papel-vulneraveis-na-vida-real-colapso-medidas-protetivas.html',
        tags: ['Protegidas no Papel, Vulneráveis na Vida Real', 'compliance', 'Poder ', 'Os agentes']
    },
    {
        title: 'Projeto de Lei Proíbe Cobrança Extra para Famílias Ocuparem Assentos Vizinhos',
        description: 'Viajar em família nos céus brasileiros tem sido, para milhares de passageiros, uma experiência marcada.',
        category: 'Direito Civil',
        url: 'direito-civil/projeto-lei-proibe-cobranca-familias-assentos-vizinhos-voos.html',
        tags: ['Projeto de Lei Proíbe Cobrança Extra para Famílias Ocuparem Assentos Vizinhos', 'Proíbe Cobrança', 'Garantia']
    },
    {
        title: 'Empresa e Advogado São Condenados pelo TST',
        description: 'O Tribunal Superior do Trabalho condenou uma empresa e seu advogado por litigância.',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/empresa-advogado-condenados-tst-citacoes-falsas-jurisprudencia.html',
        tags: ['condenação', 'Advogado', 'Empresa e Advogado São Condenados pelo TST']
    },
    {
        title: 'STM Concede Pela Primeira Vez Medidas Protetivas a Militar Trans Vítima de Assédio Sexual',
        description: 'O Superior Tribunal Militar proferiu, no dia 20 de fevereiro de 2026, uma decisão sem.',
        category: 'Direito Militar',
        url: 'direito-militar/stm-medidas-protetivas-militar-trans-assedio-sexual.html',
        tags: ['Primeira Vez', 'Militar ', ' Assédio Sexual', 'STM Concede Pela Primeira Vez Medidas Protetivas a Militar Trans Vítima de Assédio Sexual']
    },
    {
        title: 'A Decisão do TJMG que Ameaça Décadas de Proteção à Infância',
        description: 'Uma decisão proferida pela 9ª Câmara Criminal Especializada do Tribunal de Justiça de Minas Gerais provocou comoção nacional ao absolver.',
        category: 'Direito Criminal',
        url: 'direito-penal/casamento-crianca-crime-tjmg-estupro-vulneravel-protecao-infancia.html',
        tags: ['Câmara Criminal', 'Minas Gerais', 'Tribunal de Justiça ', 'A Decisão do TJMG que Ameaça Décadas de Proteção à Infância']
    },
    {
        title: 'O Que é Revelado Sobre o Caso do Banco Master ',
        description: 'Quando a Polícia Federal deflagrou a Operação Compliance Zero em novembro de 2025 e decretou a prisão.',
        category: 'Compliance',
        url: 'compliance/banco-master-compliance-gestao-fraudulenta-temeraria-limites-governanca.html',
        tags: ['Romer carvalho','esquema bilionário', 'Polícia Federal', 'Operação Compliance Zero', 'O Que é Revelado Sobre o Caso do Banco Master ']
    },
    {
        title: 'O STF e os Limites do Poder Municipal Sobre a Sala de Aula',
        description: 'Corte Invalida Leis que Proibiam Linguagem Neutra nas Escolas.',
        category: 'Legislação',
        url: 'legislacao/stf-limites-do-poder-municipal-sobre-sala-de-aula.html',
        tags: ['legislação', ' Congresso Nacional ', 'Poder Municipal', 'O STF e os Limites do Poder Municipal Sobre a Sala de Aula']
    },
    {
        title: 'Vinte Anos de Espera',
        description: 'Um policial militar de Goiás que ingressou na corporação em 1996 e esperou até 2021 para ser promovido de Soldado a Cabo, progressão que deveria ter ocorrido muito antes segundo os próprios critérios legais da instituição.',
        category: 'Direito Militar',
        url: 'direito-militar/vinte-anos-de-espera-de-pm-goiais.html',
        tags: ['PM de Goiás', ' corporação ', 'policial militar', 'Vinte Anos de Espera']
    },
    {
        title: 'O Escudo que o Poder Tenta Dobrar',
        description: 'Quando a Transparência Encontra a Resistência Institucional.',
        category: 'Compliance',
        url: 'compliance/o-escudo-que-o-poder-tenta-dobrar.html',
        tags: ['O Escudo que o Poder Tenta Dobrar', 'compliance', 'Poder ', 'Os agentes', 'Romer Carvalho']
    },
    {
        title: 'O Habeas Corpus e a Garantia que Ninguém Pode Confiscar',
        description: 'Ministro Ribeiro Dantas determina que tribunal mineiro analise mérito de writ impetrado contra ordem de busca e apreensão',
        category: 'Direito Criminal',
        url: 'direito-penal/habeas-corpus-garantia-que-ninguem-pode-confiscar.html',
        tags: ['O Habeas Corpus e a Garantia que Ninguém Pode Confiscar', 'Ministro Ribeiro', 'Confiscar', 'Garantia']
    },
    {
        title: 'Como o Salário Mínimo se Tornou a Mais Simbólica Batalha do Constitucionalismo Social Brasileiro',
        description: 'O relatório foi revisado três vezes, cada vírgula analisada, cada dado conferido.',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/salario-minimo-tornou-simbolo-constitucional-social-brasileiro.html',
        tags: ['Social', 'Salário Mínimo', 'Como o Salário Mínimo se Tornou a Mais Simbólica Batalha do Constitucionalismo Social Brasileiro']
    },
    {
        title: 'Senado Convoca os Grandes Nomes do Direito Privado',
        description: 'Mais de duas décadas depois de sua entrada em vigor, o Código Civil brasileiro está prestes a ganhar novo rosto.',
        category: 'Direito de Família',
        url: 'direito-de-familia/senado-convoca-grandes-nomes-do-direito-para-redesenhar-regras.html',
        tags: ['Comissão temporária', 'Direito Privado ', ' legislação', 'relações familiares']
    },
    {
        title: 'O Escudo Salarial das Guardas Municipais em Santo André',
        description: 'A mais alta corte do país interveio para proteger o contracheque de servidores que atuam na linha de frente da segurança pública municipal.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/o-escudo-salarial-dos-guardas-municipais.html',
        tags: [' segurança pública', 'Santo André', 'Guardas Municipais', 'O Escudo Salarial das Guardas Municipais em Santo André']
    },
    {
        title: 'Marçal e Datena Encerram Batalha Judicial',
        description: 'O capítulo judicial da cadeirada mais famosa da política brasileira recente chegou ao fim.',
        category: 'Direito Civil',
        url: 'direito-civil/a-cadeira-que-virou-acordo.html',
        tags: ['Marçal e Datena Encerram Batalha Judicial', 'dois políticos', 'capítulo judicial ', 'indenização ']
    },
     {
        title: 'A Holding do Crime',
        description: 'Qualquer executivo de uma grande corporação reconheceria a estrutura no documento. Há um conselho deliberativo de elite, uma corregedoria interna, um setor de relações jurídicas, uma diretoria financeira e, bem ao lado, um departamento inteiramente dedicado à comunicação em redes sociais e à gestão de mensagens criptografadas.',
        category: 'Compliance',
        url: 'compliance/a-holding-do-crime.html',
        tags: ['A Holding do Crime ', 'compliance', 'PCC', 'Holding']
    },
    {
        title: 'Programa Gás do Povo',
        description: 'A Nova Legislação que Redefine o Amparo Social e a Acessibilidade Energética no Brasil.',
        category: 'Legislação',
        url: 'legislacao/programa-gas-do-povo.html',
        tags: ['Programa Gás do Povo ', 'gás', 'povo', 'socioeconômico ']
    },
    {
        title: 'Código de Defesa do Contribuinte',
        description: 'A Modernização da Administração Tributária: Rumo à Transparência e à Segurança Jurídica.',
        category: 'Legislação',
        url: 'legislacao/codigo-defesa-contribuinte.html',
        tags: ['Código de Defesa do Contribuinte ', 'Administração Tributária', 'Modernização', 'relação ']
    },
    {
        title: 'Novo Imposto de Renda',
        description: 'Por muito tempo, a palavra gestão soou estranha nos corredores dos escritórios de advocacia.',
        category: 'Legislação',
        url: 'politica/advocacia-que-nao-se-conhece-financeiramente-nao-sobrevive-o-imperativo-da-gestao-para-escritorios-em-2026.html',
        tags: ['Reforma Tributária ', 'Tributação ', 'Novo Imposto de Renda', 'Faixa ']
    },
    {
        title: 'Lei da Anistia e Crimes Permanentes',
        description: 'A Jurisprudência que Reinterpreta o Passado e Projeta o Futuro da Justiça de Transição no Brasil.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/limites-lei-anistia.html',
        tags: ['Jurisprudência ', 'Lei da Anistia', 'Lei da Anistia e Crimes Permanentes', 'Anistia ']
    },
    {
        title: 'Racismo Estrutural no Brasil',
        description: 'A Jurisprudência que Desvenda as Raízes da Discriminação e Reafirma o Compromisso da Constituição com a Igualdade.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/racismo-estrutural-implicacoes-constitucionais.html',
        tags: ['Racismo ', 'Racismo Estrutural no Brasil', 'Discriminação', 'Constituição']
    },
    {
        title: 'Violência de Gênero e a Lei Maria da Penha',
        description: 'O Reconhecimento Jurisprudencial do STF que Fortalece o Combate à Violência Contra a Mulher no Brasil.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/violencia-genero-lei-maria-da-penha.html',
        tags: ['Violência ', 'STF', 'Violência de Gênero e a Lei Maria da Penha', 'Violência Contra a Mulher']
    },
    {
        title: 'Advocacia que não se Conhece Financeiramente não Sobrevive',
        description: 'Por muito tempo, a palavra gestão soou estranha nos corredores dos escritórios de advocacia.',
    category: 'Política',
        url: 'politica/advocacia-que-nao-se-conhece-financeiramente.html',
        tags: ['Advocacia ', 'sobrevive', 'Advocacia que não se conhece financeiramente não sobrevive', 'Prevenir']
    },
    {
        title: 'O Novo Labirinto Fiscal',
        description: 'O Brasil nunca teve uma relação simples com o capital estrangeiro. A história econômica do país é pontuada por ciclos de abertura e fechamento',
    category: 'Política',
        url: 'politica/o-novo-labirinto-fiscal-as-regras-de-tributacao.html',
        tags: ['O novo labirinto fiscal', 'Revolução Silenciosa', 'multinacional brasileira', 'Prevenir']
    },
    {
        title: 'A Revolução Silenciosa do Compliance',
        description: 'O diretor de compliance da multinacional brasileira recebe pela manhã relatório gerado por sistema de inteligência artificial: análise de 2,3 milhões de e-mails corporativos identificou padrão linguístico compatível com possível esquema de.',
        category: 'Compliance',
        url: 'compliance/a-revolucao-silenciosa-do-compliance-quando-prevenir-vale-mais-que-remediar.html',
        tags: ['A Revolução Silenciosa do Compliance','Compliance', 'Revolução Silenciosa', 'multinacional brasileira', 'Prevenir']
    },
    {
        title: 'A Queda do Intocável',
        description: 'Na tarde de 12 de dezembro de 2024, o plenário do Superior Tribunal de Justiça reuniu-se em sessão extraordinária que entraria para a história institucional da Corte. O presidente Herman Benjamin, com voz grave e semblante circunspecto.',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/a-queda-do-intocavel-quando-o-judiciario-julga-a-si-mesmo.html',
        tags: ['A Queda do Intocável','Queda do Intocável', 'distinção', 'empregador', 'assédio sexual']
    },
    {
        title: 'Crimes Ambientais Transnacionais',
        description: 'A devastação da floresta amazônica transcendeu há muito as fronteiras nacionais, convertendo-se em um fenômeno que desafia os paradigmas tradicionais do direito penal e ambiental.',
        category: 'Direito Penal',
        url: 'direito-penal/crimes-ambientais-transnacionais-a-amazonia-no-epicentro-de-um-conflito-de-jurisdicoes.html',
        tags: ['Crimes Ambientais Transnacionais','Crimes Ambientais Transnacionais', 'Amazônia', 'devastação', 'territorialidade']
    }, 
    {
        title: 'A Farda e a Constituição',
        description: 'O soldado do Exército recorre ao Supremo Tribunal Federal questionando punição disciplinar que lhe custou quinze dias de prisão por "desrespeito a superior" após questionar, em grupo privado de WhatsApp de colegas militares, ordem que considerava tecnicamente equivocada.',
        category: 'Direito Militar',
        url: 'direito-militar/a-farda-e-a-constituicao-o-direito-militar-entre-a-tradicao-e-os-direitos-fundamentais.html',
        tags: ['A Farda e a Constituição','Farda', 'Direitos Fundamentais', 'desrespeito a superior', 'prisão']
    }, 
    {
        title: 'A Lei Antes do Fato',
        description: 'O Congresso Nacional vota em 2026 projeto de lei inédito na história legislativa brasileira: regulação preventiva de tecnologias de edição genética germinal (CRISPR aplicado a embriões humanos) que ainda não estão disponíveis',
        category: 'Legislação',
        url: 'legislacao/a-lei-antes-do-fato-como-a-regulacao-preditiva-antecipa-riscos-tecnologicos.html',
        tags: ['A Lei Antes do Fato','Lei Antes do Fato', 'Riscos Tecnológicos', 'Regulação ', 'Congresso Nacional']
    }, 
    {
        title: 'O Oráculo Digital da Justiça',
        description: 'O advogado prepara recurso contra sentença desfavorável em ação trabalhista. Antes de redigir uma linha, acessa plataforma de jurisprudência preditiva que, mediante inteligência artificial, analisa 340 mil decisões similares do Tribunal Regional do Trabalho daquela região nos últimos cinco anos.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/o-oraculo-digital-da-justica-quando-algoritmos-preveem-decisoes-judiciais.html',
        tags: ['O Oráculo Digital da Justiça','Oráculo Digital', 'Decisões Judiciais', 'Algoritmos']
    }, 
    {
        title: 'A Armadilha do Crédito Fácil',
        description: 'O Brasil registra atualmente mais de 72 milhões de pessoas negativadas, segundo dados da Confederação Nacional de Dirigentes Lojistas. Desse contingente alarmante, parcela expressiva',
        category: 'Direito Civil',
        url: 'direito-civil/a-armadilha-do-credito-facil-como-o-superendividamento-captura-os-mais-vulneraveis.html',
        tags: ['A Armadilha do Crédito Fácil','Armadilha', 'Crédito Fácil', 'Superendividamento', 'Mais Vulneráveis']
    }, 
    {
        title: 'A Encruzilhada da Responsabilidade',
        description: 'A proliferação acelerada de sistemas de inteligência artificial no cotidiano brasileiro — de algoritmos que concedem crédito a carros autônomos que circulam em fase experimental ',
        category: 'Direito Civil',
        url: 'direito-civil/a-encruzilhada-da-responsabilidade-quem-paga-a-conta-quando-a-maquina-erra.html',
        tags: ['A Encruzilhada da Responsabilidade','Encruzilhada da Responsabilidade', 'Máquina', 'inteligência artificial']
    }, 
    {
        title: 'A Era Digital do Pacta Sunt Servanda',
        description: 'Bilhões de contratos são firmados diariamente sem que uma única folha de papel seja impressa. A compra de passagens aéreas, a contratação de serviços de streaming, a adesão a aplicativos de transporte e até m',
        category: 'Direito Civil',
        url: 'direito-civil/a-era-digital-do-pacta-sunt-servanda-contratos-eletronicos-e-a-revolucionaria-silenciosa-do-direito-negocial.html',
        tags: ['A Era Digital do Pacta Sunt Servanda','Era Digital', 'Pacta Sunt Servanda', 'Contratos Eletrônicos', 'Direito Negocial']
    }, 
    {
        title: 'Bisturi e Balança da Justiça',
        description: 'A relação médico-paciente encerra peculiaridade que a distingue de quase todas as demais relações profissionais: não há garantia de resultado. ',
        category: 'Direito Civil',
        url: 'direito-civil/bisturi-e-balanca-da-justica-os-limites-da-responsabilidade-civil-na-medicina-e-estetica.html',
        tags: ['Bisturi e Balança da Justiça','Balança da Justiça', 'Bisturi ', 'Limites da Responsabilidade', 'Responsabilidade Civil', 'Medicina e Estética']
    }, 
    {
        title: 'O Direito de Não Ser Lembrado',
        description: 'Quando o Supremo Tribunal Federal, em fevereiro de 2021, julgou improcedente o Recurso Extraordinário 1.010.606 (Tema 786 da repercussão geral), decretando a incompatibilidade do direito ao esquecimento com a Constituição Federal, p',
        category: 'Direito Civil',
        url: 'direito-civil/o-direito-de-nao-ser-lembrado-os-contornos-juridicos-da-memoria-na-era-digital.html',
        tags: ['O Direito de Não Ser Lembrado','Memória na Era Digital', 'Era Digital', 'tutela da privacidade,', 'tese rejeitada pelo STF']
    }, 
    {
        title: 'O Tribunal das Redes',
        description: 'A migração do debate público para as plataformas digitais converteu cada usuário em potencial formador de opinião — e em potencial réu de ação indenizatória. ',
        category: 'Direito Civil',
        url: 'direito-civil/o-tribunal-das-redes-quando-a-liberdade-de-expressao-vira-linchamento-digital.html',
        tags: ['O Tribunal das Redes','Linchamento Digital', 'Liberdade de Expressão', ' debate público']
    }, 
    {
        title: 'O Testamento Digital Quando o Amor Precisa Contemplar Bitcoins e Senhas',
        description: 'O tabelionato de notas em São Paulo recebe o casal de noivos com documentação completa para lavrar Pacto Antenupcial. Além das cláusulas tradicionais sobre imóveis, veículos e participação societária, o instrumento traz',
        category: 'Direito de Família',
        url: 'direito-de-familia/o-testamento-digital-quando-o-amor-precisa-contemplar-bitcoins-e-senhas.html',
        tags: ['O Testamento Digital Quando o Amor Precisa Contemplar Bitcoins e Senhas','Testamento', 'Testamento Digital', 'Pacto Antenupcial']
    }, 
    {
        title: 'O Amor Que Se Cobra na Justiça Quando a Ausência dos Avós Gera Indenização',
        description: 'Um escritório de advocacia em Brasília recebe, com frequência crescente, consultas inusitadas: adultos que desejam processar avós por abandono afetivo durante a infância. Não se trata de abandono material',
        category: 'Direito de Família',
        url: 'direito-de-familia/o-amor-que-se-cobra-na-justica-quando-a-ausencia-dos-avos-gera-indenizacao.html',
        tags: ['O Amor Que Se Cobra na Justiça Quando a Ausência dos Avós Gera Indenização','afetividade', 'abandono ', 'frequência crescente', 'Indenização']
    }, 
    {
        title: 'Quando o Silêncio Se Torna Arma no Ambiente Corporativo',
        description: 'Não há gritos, não há insultos diretos, não há confronto aberto. A vítima chega ao escritório e é recebida por olhares que desviam, cumprimentos que não vêm, conversas que cessam abruptamente quando ela se aproxima. ',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/a-violencia-invisivel-quando-o-silencio-se-torna-arma-no-ambiente-corporativo.html',
        tags: ['Quando o Silêncio Se Torna Arma no Ambiente Corporativo','Ambiente Corporativo', 'Ambiente ', 'exclusão sistemática', 'exclusão laboral']
    }, 
    {
        title: 'Quando a Crítica Vira Arma de Aniquilação Profissional',
        description: 'O relatório foi revisado três vezes, cada vírgula analisada, cada dado conferido. Mesmo assim, quando apresentado na reunião, o gerente o desqualifica publicamente: "Está completamente fora dos padrões que esperamos"',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/a-destruicao-metodica-da-competencia-quando-a-critica-vira-arma-de-aniquilacao-profissional.html',
        tags: ['Quando a Crítica Vira Arma de Aniquilação Profissional','Aniquilação Profissional', 'distinção', 'desqualificação ', 'empregador']
    }, 
    {
        title: 'Quem Audita os Auditores?',
        description: 'Os recentes escândalos corporativos revelam um padrão preocupante: todas as empresas envolvidas contavam com auditoria independente externa.',
        category: 'Compliance',
        url: 'compliance/quem-audita-os-auditores.html',
        tags: ['Quem Audita os Auditores?','compliance', 'auditores', 'escândalos', 'compliance zero', 'romer carvalho']
    }, 
    {
        title: 'Como Comprovar que Existe União Estável',
        description: 'Muitas pessoas vivem em união estável sem saber que essa relação possui proteção jurídica semelhante ao casamento.',
        category: 'Direito de Família',
        url: 'direito-de-familia/como-comprovar-uniao-estavel.html',
        tags: ['Como Comprovar que Existe União Estável','união estável', 'casamento', 'provas', 'família', 'romer carvalho']
    }, 
    {
        title: 'Pensão Alimentícia: Revisão, Exoneração e os Limites do Dever de Sustento',
        description: 'Análise detalhada sobre pensão alimentícia: revisão, exoneração e os limites do dever de sustento e seus impactos no ordenamento jurídico brasileiro.',
        category: 'Direito de Família',
        url: 'direito-de-familia/pensao-alimenticia-revisao-exoneracao-limites.html',
        tags: ['Pensão Alimentícia: Revisão, Exoneração e os Limites do Dever de Sustento','Pensão alimentícia', 'revisão', 'Pensão ', 'família']
    }, 
    {
        title: 'Guarda Compartilhada e o Melhor Interesse da Criança na Prática Forense',
        description: 'Análise detalhada sobre guarda compartilhada e o melhor interesse da criança na prática forense e seus impactos no ordenamento jurídico brasileiro',
        category: 'Direito de Família',
        url: 'direito-de-familia/guarda-compartilhada-melhor-interesse-crianca.html',
        tags: ['Guarda Compartilhada e o Melhor Interesse da Criança na Prática Forense','Guarda Compartilhada', 'Guarda', 'Melhor Interesse da Criança', 'família']
    }, 
    {
        title: 'Responsabilidade Civil',
        description: 'A era digital transformou profundamente as relações interpessoais, criando novos espaços de convivência que transcendem as barreiras físicas.',
        category: 'Direito Civil',
        url: 'direito-civil/responsabilidade-civil-danos-morais-digitais.html',
        tags: ['Responsabilidade Civil','Responsabilidade civil', 'danos morais', 'danos morais']
    }, 
    {
        title: 'Validade Jurídica dos Contratos Firmados por Meios Eletrônicos',
        description: 'A digitalização das relações negociais representa uma das mais significativas transformações do direito contratual contemporâneo.',
        category: 'Direito Civil',
        url: 'direito-civil/validade-juridica-contratos-eletronicos.html',
        tags: ['Validade Jurídica dos Contratos Firmados por Meios Eletrônicos','contratos', 'Validade jurídica', 'contratos firmados', 'relações negociais']
    }, 
    {
        title: 'Princípio da Insignificância e sua Aplicação nos Crimes Patrimoniais',
        description: 'O princípio da insignificância, também denominado princípio da bagatela, constitui importante instrumento de racionalização do sistema penal, permitindo a exclusão da tipicidade material em condutas que, embora',
        category: 'Direito Penal',
        url: 'direito-penal/principio-insignificancia-crimes-patrimoniais.html',
        tags: ['Princípio da Insignificância e sua Aplicação nos Crimes Patrimoniais','Princípio da insignificância', 'crimes patrimoniais', 'crimes']
    }, 
    {
        title: 'Prisão Preventiva',
        description: 'A prisão preventiva, modalidade de prisão cautelar regulamentada pelos artigos 311 a 316 do Código de Processo Penal, constitui medida excepcional',
        category: 'Direito Penal',
        url: 'direito-penal/prisao-preventiva-requisitos-abusos.html',
        tags: ['Prisão Preventiva','Prisão preventiva', 'requisitos', 'requisitos legais', 'prisão cautelar']
    }, 
    {
        title: 'Vínculo empregatício nas novas formas de trabalho por aplicativo',
        description: 'A economia de plataformas digitais revolucionou o mercado de trabalho nas últimas décadas, introduzindo modelos de prestação de serviços',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/vinculo-empregaticio-trabalho-aplicativo.html',
        tags: ['Vínculo empregatício nas novas formas de trabalho por aplicativo','Vínculo empregatício', 'plataformas digitais', 'trabalho']
    }, 
    {
        title: 'Assédio moral no ambiente de trabalho e a responsabilidade do empregador',
        description: 'O assédio moral no ambiente laboral constitui uma das mais graves patologias organizacionais contemporâneas, caracterizando-se pela exposição',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/assedio-moral-trabalho-responsabilidade-empregador.html',
        tags: ['Assédio moral no ambiente de trabalho e a responsabilidade do empregador','Assédio moral ', 'trabalhador', 'Assédio', 'responsabilidade do empregador']
    }, 
    {
        title: 'Hierarquia e disciplina versus direitos fundamentais do militar',
        description: 'A condição militar caracteriza-se por especificidades que a distinguem de outras relações funcionais, fundamentando-se nos princípios estruturantes da hierarquia e disciplina. Esses pilares, embora essenciais à eficácia ',
        category: 'Direito Militar',
        url: 'direito-militar/hierarquia-disciplina-direitos-fundamentais-militar.html',
        tags: ['Hierarquia e disciplina versus direitos fundamentais do militar','Hierarquia e disciplina', 'militar', 'condição militar', 'responsabilidade']
    }, 
    {
        title: 'Processo administrativo disciplinar militar e garantias constitucionais',
        description: 'O processo administrativo disciplinar militar constitui instrumento jurídico específico destinado à apuração de transgressões disciplinares praticadas por integrantes das Forças Armadas e Forças Auxiliares,',
        category: 'Direito Militar',
        url: 'direito-militar/processo-administrativo-disciplinar-militar.html',
        tags: ['Processo administrativo disciplinar militar e garantias constitucionais','Processo administrativo', 'PAD', 'condição militar', 'garantias constitucionais']
    }, 
    {
        title: 'Responsabilidade da alta gestão na implementação do compliance efetivo',
        description: 'A efetividade de um programa de compliance corporativo depende fundamentalmente do comprometimento genuíno da alta gestão da organização.',
        category: 'Compliance',
        url: 'compliance/responsabilidade-alta-gestao-compliance.html',
        tags: ['Responsabilidade da alta gestão na implementação do compliance efetivo','compliance ', 'gestão na implementação', 'prevenção de riscos', 'programa de compliance']
    }, 
    {
        title: 'Mediação Estratégica e Compliance',
        description: 'A mediação consolida-se como método estratégico de resolução de conflitos, oferecendo às organizações alternativa eficiente ao litígio tradicional. ',
        category: 'Compliance',
        url: 'compliance/mediacao-estrategica-e-compliance.html',
        tags: ['Mediação Estratégica e Compliance','compliance ', 'programas de compliance', 'prevenção de riscos', 'compliance corporativo']
    }, 
    {
        title: 'A Nova Era da Governança',
        description: 'A publicação da ABNT NBR ISO 37301:2021 (Sistemas de Gestão de Compliance) e, mais recentemente, o desenvolvimento de normas técnicas específicas para compliance tributário representam marco evolutivo na padronização',
        category: 'Compliance',
        url: 'compliance/nova-norma-abnt-compliance-tributario.html',
        tags: ['A Nova Era da Governança','compliance ', 'programas de compliance', 'prevenção de riscos ', 'Norma ABNT', 'Compliance Tributário']
    }, 
    {
        title: 'Fiscalização de Compliance',
        description: 'A fiscalização de estabelecimentos comerciais, incluindo papelarias, constitui atividade essencial dos órgãos de vigilância sanitária, defesa do consumidor,',
        category: 'Compliance',
        url: 'compliance/fiscalizacao-compliance-papelarias.html',
        tags: ['Fiscalização de Compliance','compliance ', 'programas de compliance', 'prevenção de riscos ', 'Fiscalização de Compliance', 'Irregularidades']
    }, 
    {
        title: 'Fortalecimento do Programa Confia',
        description: 'O Programa Confia, iniciativa da Receita Federal do Brasil instituída pela Instrução Normativa RFB 2.108/2022, representa evolução significativa na relação',
        category: 'Compliance',
        url: 'compliance/fortalecimento-programa-confia.html',
        tags: ['Fortalecimento do Programa Confia','compliance ', 'programas de compliance', 'prevenção de riscos ', 'Programa Confia']
    }, 
    {
        title: 'A força dos precedentes obrigatórios no sistema jurídico brasileiro',
        description: 'A incorporação definitiva do sistema de precedentes obrigatórios no ordenamento jurídico brasileiro representa uma das mais profundas transformações estruturais',
        category: 'Jurisprudência',
        url: 'jurisprudencia/forca-precedentes-obrigatorios-brasil.html',
        tags: ['A força dos precedentes obrigatórios no sistema jurídico brasileiro','precedentes', 'sistema jurídico', 'incorporação']
    }, 
    {
        title: 'Mudanças recentes na jurisprudência dos tribunais superiores',
        description: 'A dinâmica interpretativa do direito brasileiro passa por constante transformação, especialmente quando analisamos a atuação dos tribunais superiores. ',
        category: 'Jurisprudência',
        url: 'jurisprudencia/mudancas-recentes-jurisprudencia-tribunais.html',
        tags: ['Mudanças recentes na jurisprudência dos tribunais superiores','jurisprudência', 'Supremo Tribunal Federal', 'direito brasileiro', 'tribunais']
    }, 
    {
        title: 'Interpretação da lei à luz da constituição e da jurisprudência atual',
        description: 'A interpretação jurídica contemporânea não pode prescindir da compreensão sistêmica do ordenamento. A lei, isoladamente considerada, ',
        category: 'Legislação',
        url: 'legislacao/interpretacao-lei-constituicao-jurisprudencia.html',
        tags: ['Interpretação da lei à luz da constituição e da jurisprudência atual','Interpretação da lei', 'jurisprudência atual', ' interpretação evolutiva ']
    }, 
    {
        title: 'Impactos práticos das alterações legislativas no direito de família',
        description: 'O direito de família brasileiro experimenta constante transformação legislativa que reflete as profundas mudanças sociais das últimas décadas. A compreensão contemporânea das relações familiares expandiu-se significativamente, abandonando modelos rígidos e patriarcais em favor de estruturas plurais',
        category: 'Legislação',
        url: 'legislacao/impactos-alteracoes-legislativas-familia.html',
        tags: ['Impactos práticos das alterações legislativas no direito de família','Impactos práticos', 'direito de família', 'alterações legislativas', 'proteção da dignidade']
    }
];

/**
 * Função de busca melhorada com pontuação de relevância
 */
function searchArticles(query) {
    if (!query || query.trim().length < 2) {
        return [];
    }

    const lowerQuery = query.toLowerCase().trim();
    const queryWords = lowerQuery.split(/\s+/);
    
    const results = allArticles.map(article => {
        let score = 0;
        const title = article.title.toLowerCase();
        const desc = article.description.toLowerCase();
        const cat = article.category.toLowerCase();
        const tags = article.tags || [];

        // 1. Correspondência exata no título (Peso Máximo)
        if (title.includes(lowerQuery)) score += 100;
        
        // 2. Correspondência de palavras individuais
        queryWords.forEach(word => {
            if (title.includes(word)) score += 20;
            if (desc.includes(word)) score += 10;
            if (cat.includes(word)) score += 15;
            
            tags.forEach(tag => {
                if (tag.toLowerCase().includes(word)) score += 15;
            });
        });

        return { ...article, score };
    })
    .filter(article => article.score > 0)
    .sort((a, b) => b.score - a.score);

    return results;
}

/**
 * Função para calcular o prefixo do caminho baseado na profundidade atual
 * Esta versão é mais agressiva e precisa para garantir que os links funcionem.
 */
function getPathPrefix() {
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        const src = scripts[i].getAttribute('src');
        if (src && src.includes('js/search.js')) {
            const parts = src.split('js/search.js');
            return parts[0]; 
        }
    }
    return '';
}

/**
 * Função para exibir sugestões em tempo real
 */
function displaySuggestions(results, query, container) {
    if (results.length === 0) {
        container.style.display = 'none';
        return;
    }

    const pathPrefix = getPathPrefix();

    container.innerHTML = '';
    container.style.display = 'block';

    const limit = 5;
    const topResults = results.slice(0, limit);

    topResults.forEach(result => {
        const div = document.createElement('div');
        div.className = 'search-suggestion-item';
        
        // Highlight query in title
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const highlightedTitle = result.title.replace(regex, '<strong>$1</strong>');
        
        div.innerHTML = `
            <div class="suggestion-info">
                <span class="suggestion-title">${highlightedTitle}</span>
                <span class="suggestion-category">${result.category}</span>
            </div>
        `;
        
        div.addEventListener('click', () => {
            window.location.href = pathPrefix + result.url;
        });
        
        container.appendChild(div);
    });

    if (results.length > limit) {
        const more = document.createElement('div');
        more.className = 'search-suggestion-more';
        more.innerHTML = `Ver todos os ${results.length} resultados`;
        more.addEventListener('click', () => {
            displaySearchResults(results, query);
            container.style.display = 'none';
        });
        container.appendChild(more);
    }
}

/**
 * Função para exibir modal completo de resultados
 */
function displaySearchResults(results, query) {
    const existingModal = document.getElementById('search-results-modal');
    if (existingModal) existingModal.remove();

    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'search-results-modal';
    resultsContainer.className = 'search-results-modal';
    
    const pathPrefix = getPathPrefix();

    let html = `
        <div class="search-results-content">
            <button class="search-results-close" aria-label="Fechar">&times;</button>
            <div class="search-results-header">
                <h2>Busca por: <span>${query}</span></h2>
                <p class="results-count">${results.length} resultado(s) encontrado(s)</p>
            </div>
    `;
    
    if (results.length === 0) {
        html += `
            <div class="no-results">
                <i class="fas fa-search-minus"></i>
                <p>Nenhum resultado encontrado para sua pesquisa.</p>
                <small>Tente usar palavras-chave mais genéricas.</small>
            </div>
        `;
    } else {
        html += '<div class="search-results-list">';
        results.forEach(article => {
            const finalUrl = pathPrefix + article.url;
            html += `
                <div class="search-result-item">
                    <div class="result-meta">
                        <span class="result-category">${article.category}</span>
                    </div>
                    <h3><a href="${finalUrl}">${article.title}</a></h3>
                    <p class="result-description">${article.description}</p>
                    <a href="${finalUrl}" class="result-link">Leia mais</a>
                </div>
            `;
        });
        html += '</div>';
    }
    
    html += '</div>';
    resultsContainer.innerHTML = html;
    document.body.appendChild(resultsContainer);
    document.body.style.overflow = 'hidden'; // Prevent scroll

    // Fechar eventos
    const close = () => {
        resultsContainer.style.opacity = '0';
        resultsContainer.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            resultsContainer.remove();
            document.body.style.overflow = '';
        }, 300);
    };

    resultsContainer.querySelector('.search-results-close').addEventListener('click', close);
    resultsContainer.addEventListener('click', (e) => { if (e.target === resultsContainer) close(); });
    
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            close();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const searchBoxes = document.querySelectorAll('.search-box');
    
    searchBoxes.forEach(searchBox => {
        const searchInput = searchBox.querySelector('input[type="text"]');
        const searchBtn = searchBox.querySelector('.search-btn');
        
        if (!searchInput) return;

        // Criar container de sugestões
        const suggestionContainer = document.createElement('div');
        suggestionContainer.className = 'search-suggestions';
        searchBox.appendChild(suggestionContainer);

        let debounceTimer;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                if (query.length >= 2) {
                    const results = searchArticles(query);
                    displaySuggestions(results, query, suggestionContainer);
                } else {
                    suggestionContainer.style.display = 'none';
                }
            }, 300);
        });

        const performAction = () => {
            const query = searchInput.value;
            if (query.length >= 2) {
                const results = searchArticles(query);
                displaySearchResults(results, query);
                suggestionContainer.style.display = 'none';
            }
        };

        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                performAction();
            });
        }

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performAction();
            }
        });

        // Fechar sugestões ao clicar fora
        document.addEventListener('click', (e) => {
            if (!searchBox.contains(e.target)) {
                suggestionContainer.style.display = 'none';
            }
        });
    });
});