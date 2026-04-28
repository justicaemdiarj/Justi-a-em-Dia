// Dados de notícias para Política
const categoryNewsData = [
    { title: "Gestão Estatal sob o Prisma da Transparência", date: "28/04/2026", timestamp: "2026-04-28T07:00:00", image: "../img/governanca-publica-transparencia-estado-brasil.webp", excerpt: "A governança pública no Brasil enfrenta o desafio de consolidar mecanismos de controle, transparência e eficiência na gestão dos recursos estatais.", link: "../politica/governanca-publica-transparencia-estado-brasil.html", author: "Justiça em Dia", authorLink: "#" },

    { title: "Vigilância Cidadã sobre o Poder Institucional Brasileiro", date: "24/04/2026", timestamp: "2026-04-24T07:00:00", image: "../img/vigilancia-cidada-poder-institucional-brasileiro.webp", excerpt: "O controle social é um dos pilares mais vulneráveis e mais indispensáveis da democracia brasileira.", link: "../politica/vigilancia-cidada-poder-institucional-brasileiro.html", author: "Justiça em Dia", authorLink: "#" },
    { title: "Fronteiras da Palavra e os Limites Democráticos", 
        date: "21/04/2026", 
        timestamp: "2026-04-21T08:00:00", 
        image: "../img/fronteiras-palavra-limites-democraticos-liberdade-expressao.webp", 
        excerpt: "A liberdade de expressão é um dos direitos fundamentais mais debatidos e tensionados na democracia brasileira contemporânea.", 
        link: "../politica/fronteiras-palavra-limites-democraticos-liberdade-expressao.html", 
        author: "Justiça em Dia",
         authorLink: "#" },
    {
    title: "Influência Corporativa e os Limites da Norma",
    date: "20/04/2026",
    timestamp: "2026-04-20T08:00:00",
    image: "../img/influencia-corporativa-limites-norma-lobby-regulacao.webp",
    excerpt: "A prática da pressão organizada de grupos de interesse sobre o processo legislativo e regulatório brasileiro permanece no centro do debate democrático.",
    link: "../politica/influencia-corporativa-limites-norma-lobby-regulacao.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    { title: "Corrupção Sistêmica e a Resposta do Estado Brasileiro", 
        date: "17/04/2026", 
        timestamp: "2026-04-17T06:00:00", 
        image: "../img/corrupcao-sistemica-resposta-estado-brasileiro.webp", 
        excerpt: "O arcabouço normativo anticorrupção brasileiro diante dos desafios institucionais.", 
        link: "../politica/corrupcao-sistemica-resposta-estado-brasileiro.html", 
        author: "Justiça em Dia", 
        authorLink: "#" },
    {
  title: "Equilíbrio Fiscal como Imperativo Constitucional",
  date: "16/04/2026",
  timestamp: "2026-04-16T09:00:00",
  image: "../img/equilibrio-fiscal-imperativo-constitucional.webp",
  excerpt: "A responsabilidade fiscal no Brasil impõe limites ao endividamento público e obriga gestores a planejar receitas e despesas com transparência e prudência.",
  link: "../politica/equilibrio-fiscal-imperativo-constitucional.html",
  author: "Justiça em Dia",
  authorLink: "#"
},
    {
  title: "Supremo Tribunal Federal e Interferência Institucional na Política",
  date: "15/04/2026",
  timestamp: "2026-04-15T07:00:00",
  image: "../img/supremo-tribunal-federal-interferencia-institucional-politica.webp",
  excerpt: "A atuação do STF no cenário político nacional reacende o debate sobre os limites da separação dos poderes na democracia brasileira.",
  link: "../politica/supremo-tribunal-federal-interferencia-institucional-politica.html",
  author: "Justiça em Dia",
  authorLink: "#"
},
    {
       title: "Desinformação Eleitoral e o Peso da Lei",
       date: "14/04/2026",
       timestamp: "2026-04-14T07:00:00",
       image: "../img/desinformacao-eleitoral-peso-lei-democracia.webp",
       excerpt: "Falsidade narrativa ameaça integridade do processo democrático brasileiro e desafia o ordenamento eleitoral.",
       link: "../politica/desinformacao-eleitoral-peso-lei-democracia.html",
       author: "Justiça em Dia",
       authorLink: "#"
   },
    {
    title: "Como o Brasil Escolhe Seus Representantes",
    date: "13/04/2026",
    timestamp: "2026-04-13T10:00:00",
    image: "../img/como-o-brasil-escolhe-seus-representantes.webp",
    excerpt: "O sistema eleitoral brasileiro combina majoritário e proporcional para definir os representantes da democracia brasileira.",
    link: "../politica/como-o-brasil-escolhe-seus-representantes.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "O Sistema Político que Resiste à Mudança",
    date: "11/04/2026",
    timestamp: "2026-04-11T07:00:00",
    image: "../img/sistema-politico-que-resiste-a-mudanca.webp",
    excerpt: "A reforma política no Brasil é urgente e permanentemente adiada pelos obstáculos estruturais do sistema eleitoral.",
    link: "../politica/sistema-politico-que-resiste-a-mudanca.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "O Instrumento Que Pode Derrubar um Presidente",
    date: "10/04/2026",
    timestamp: "2026-04-10T09:00:00",
    image: "../img/instrumento-que-pode-derrubar-um-presidente.webp",
    excerpt: "O impeachment é o instrumento constitucional de responsabilização dos titulares de cargos públicos por crimes de responsabilidade.",
    link: "../politica/instrumento-que-pode-derrubar-um-presidente.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "O Estado Deve Contas, Não Favores",
    date: "09/04/2026",
    timestamp: "2026-04-09T09:00:00",
    image: "../img/estado-deve-contas-nao-favores.webp",
    excerpt: "A transparência pública é obrigação constitucional e instrumento essencial de combate à corrupção no Estado brasileiro.",
    link: "../politica/estado-deve-contas-nao-favores.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Três Poderes, Uma República em Disputa",
    date: "08/04/2026",
    timestamp: "2026-04-08T09:00:00",
    image: "../img/tres-poderes-uma-republica-em-disputa.webp",
    excerpt: "A separação dos poderes no Brasil vive momento de tensão inédita desde a redemocratização, testando freios e contrapesos constitucionais.",
    link: "../politica/tres-poderes-uma-republica-em-disputa.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Votar Não Basta, Participar É a Chave",
    date: "07/04/2026",
    timestamp: "2026-04-07T10:00:00",
    image: "../img/votar-nao-basta-participar-e-a-chave.webp",
    excerpt: "Os direitos políticos vão muito além do ato de votar e sustentam toda a estrutura da democracia brasileira.",
    link: "../politica/votar-nao-basta-participar-e-a-chave.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
  title: "Soberania Popular entre Promessa e Realidade",
  date: "06/04/2026",
  timestamp: "2026-04-06T10:00:00",
  image: "../img/soberania-popular-democracia-participacao-brasil.webp",
  excerpt: "Democracia e participação popular no Brasil entre promessas constitucionais e realidade política.",
  link: "../politica/soberania-popular-democracia-participacao-brasil.html",
  author: "Justiça em Dia",
  authorLink: "#"
},
    {
    title: "Quando as Instituições Param de Funcionar Juntas",
    date: "02/04/2026",
    timestamp: "2026-04-02T06:00:00",
    image: "../img/quando-instituicoes-param-funcionar-juntas.webp",
    excerpt: "A crise institucional brasileira expõe tensões profundas entre os Poderes da República, corrói a confiança pública e impacta a economia e a democracia.",
    link: "../politica/quando-instituicoes-param-funcionar-juntas.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Quando o Judiciário Governa no Lugar do Parlamento",
    date: "01/04/2026",
    timestamp: "2026-04-01T11:00:00",
    image: "../img/judiciario-governa-lugar-parlamento.webp",
    excerpt: "A judicialização da política redefine o equilíbrio entre os Poderes no Brasil e levanta questões sobre legitimidade democrática.",
    link: "../politica/judiciario-governa-lugar-parlamento.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Misoginia no Poder, Uma Ferida Política",
    date: "30/03/2026",
    timestamp: "2026-03-30T10:00:00",
    image: "../img/misoginia-poder-estrutura-politica-brasileira.webp",
    excerpt: "A misoginia estrutural nos espaços de poder político brasileiro opera como mecanismo de exclusão que compromete a democracia representativa e viola direitos constitucionalmente assegurados às mulheres na vida pública.",
    link: "../politica/misoginia-poder-estrutura-politica-brasileira.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Populismo e o Cerco à Democracia Brasileira",
    date: "27/03/2026",
    timestamp: "2026-03-27T07:00:00",
    image: "../img/populismo-ameaca-institucional-democracia-brasileira.webp",
    excerpt: "O populismo avança como vetor de erosão das instituições democráticas brasileiras, instrumentalizando o discurso do povo contra as estruturas de controle e freios constitucionais que sustentam o Estado de Direito e a separação dos poderes.",
    link: "../politica/populismo-ameaca-institucional-democracia-brasileira.html",
    categoria: "politica",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Pragmatismo Político Sobrepõe Divergências Históricas",
    date: "26/03/2026",
    timestamp: "2026-03-26T08:00:00",
    image: "../img/pragmatismo-politico-sobrpoe-divergencias-historicas-filiacao-pl-parana-2026.webp",
    excerpt: "A filiação do senador paranaense ao Partido Liberal recompõe uma aliança marcada por acusações graves de interferência institucional e ruptura pública, expondo a lógica do pragmatismo eleitoral brasileiro.",
    link: "../politica/pragmatismo-politico-sobrpoe-divergencias-historicas-filiacao-pl-parana-2026.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Renúncia no Rio de Janeiro Sob Pressão Política",
    date: "25/03/2026",
    timestamp: "2026-03-25T07:00:00",
    image: "../img/renuncia-governador-rj-pressao-politica-julgamento-tse.webp",
    excerpt: "A saída antecipada do governador do Rio de Janeiro sob pressão política e julgamento no TSE expõe as fragilidades da governança fluminense.",
    link: "../politica/renuncia-governador-rj-pressao-politica-julgamento-tse.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Governar em Silêncio Não Garante Reeleição",
    date: "24/03/2026",
    timestamp: "2026-03-24T06:00:00",
    image: "../img/governo-federal-comunicacao-realizacoes-politicas-publicas-2026.webp",
    excerpt: "O governo federal acumula realizações em emprego, renda e infraestrutura, mas enfrenta o paradoxo de uma gestão pouco percebida pelo eleitorado às vésperas de 2026.",
    link: "../politica/governo-federal-comunicacao-realizacoes-politicas-publicas-2026.html",
    categoria: "politica",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "MDB Perde Quadro e PSB Ganha Candidatura Senatorial",
    date: "23/03/2026",
    timestamp: "2026-03-23T06:00:00",
    image: "../img/desfiliacao-mdb-psb-senado-sao-paulo-eleicoes-2026.webp",
    excerpt: "Ex-ministra deixa o MDB após quase 30 anos e migra para o PSB para disputar vaga no Senado por São Paulo nas eleições de 2026, reordenando alianças no maior colégio eleitoral do país.",
    link: "../politica/desfiliacao-mdb-psb-senado-sao-paulo-eleicoes-2026.html",
    categoria: "politica",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Governo Abaixo da Régua Histórica da Reeleição",
    date: "21/03/2026",
    timestamp: "2026-03-21T07:00:00",
    image: "../img/governo-abaixo-regua-historica-reeleicao.webp",
    excerpt: "Aprovação presidencial ameaça candidatura em 2026. Pesquisas de março mostram avaliação do governo abaixo do patamar histórico de presidentes que venceram eleições desde 2002, com rejeição pessoal chegando a 57%.",
    link: "../politica/governo-abaixo-regua-historica-reeleicao.html",
    categoria: "politica",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Prerrogativas Presidenciais Resistem à Custódia Judicial",
    date: "20/03/2026",
    timestamp: "2026-03-20T07:00:00",
    image: "../img/prerrogativas-presidenciais-resistem-custodia-judicial.webp",
    excerpt: "Tribunal garante benefícios a ex-mandatário preso. A 4ª Turma do TRF-6 restabeleceu por unanimidade carros oficiais, motoristas, seguranças e assessores a ex-presidente mesmo durante o cumprimento de pena em regime fechado.",
    link: "../politica/prerrogativas-presidenciais-resistem-custodia-judicial.html",
    categoria: "politica",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "A Velha Guarda do PT Volta ao Front",
    date: "19/03/2026",
    timestamp: "2026-03-19T07:00:00",
    image: "../img/velha-guarda-pt-retorno-campanha-lula-reeleicao-2026.webp",
    excerpt: "Histórico aliado do presidente Lula profere discurso que antecipa a narrativa de combate da campanha petista de 2026, convocando a esquerda à mobilização e sinalizando o retorno oficial da velha guarda do PT à arena eleitoral.",
    link: "../politica/velha-guarda-pt-retorno-campanha-lula-reeleicao-2026.html",
    categoria: "politica",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "PL Quer Pragmatismo Para Vencer em 2026",
    date: "18/03/2026",
    timestamp: "2026-03-18T07:00:00",
    image: "../img/pl-pragmatismo-agenda-eleicoes-2026-estrategia-eleitoral-oposicao.webp",
    excerpt: "Oposição reconhece que radicalismo afasta eleitores decisivos.",
    link: "../politica/pl-pragmatismo-agenda-eleicoes-2026-estrategia-eleitoral-oposicao.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Senado Guia Mulheres Para a Política",
    date: "17/03/2026",
    timestamp: "2026-03-17T07:00:00",
    image: "../img/senado-guia-candidata-mulheres-politica-representatividade-cotas-genero.webp",
    excerpt: "Publicação pioneira enfrenta barreiras da representatividade feminina.",
    link: "../politica/senado-guia-candidata-mulheres-politica-representatividade-cotas-genero.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Direita Domina Arena Digital nas Eleições 2026",
    date: "16/03/2026",
    timestamp: "2026-03-16T12:00:00",
    image: "../img/direita-lidera-arena-digital-eleicoes-2026-pre-candidato-redes-sociais.webp",
    excerpt: "O pré-candidato do PL lidera o Índice Datrix de Presidenciáveis com 37,14 pontos e 49,7 milhões de interações, superando o presidente em 76% no engajamento digital. O campo governista ocupa a quarta posição e enfrenta queda no mar aberto, enquanto a arena digital se consolida como campo decisivo para outubro de 2026.",
    link: "../politica/direita-lidera-arena-digital-eleicoes-2026-pre-candidato-redes-sociais.html",
    category: "politica",
    author: "Justiça em Dia",
    authorLink: "#"
},

{
    title: "Lula e Flávio Empatam pela Primeira Vez",
    date: "14/03/2026",
    timestamp: "2026-03-14T07:00:00",
    image: "../img/quaest-lula-flavio-empatados-41-segundo-turno-2026.webp",
    excerpt: "A pesquisa Genial/Quaest registra pela primeira vez o empate entre Lula e Flávio Bolsonaro no segundo turno, ambos com 41%, evidenciando a erosão da vantagem petista rumo às eleições de 2026.",
    link: "../politica/quaest-lula-flavio-empatados-41-segundo-turno-2026.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
        title: "Empate Técnico Redefine Disputa Presidencial",
        date: "13/03/2026",
        timestamp: "2026-03-13T07:00:00",
        image: "../img/eleicoes-2026-empate-tecnico-lula-flavio-tarcisio.webp",
        excerpt: "Nova pesquisa Meio/Ideia revela empate técnico entre Lula, Flávio Bolsonaro e Tarcísio de Freitas no segundo turno de 2026.",
        link: "../politica/eleicoes-2026-empate-tecnico-lula-flavio-tarcisio.html",
        categoria: "politica",
        author: "Justiça em Dia",
        authorLink: "#"
},
{
    title: "Lula Larga 2026 Pior do que Estava em 2022",
    date: "12/03/2026",
    timestamp: "2026-03-12T07:00:00",
    image: "../img/lula-larga-2026-pior-posicao-eleitoral-2022-rejeicao-pesquisas.webp",
    excerpt: "As pesquisas de março de 2026 revelam que Lula inicia a corrida pela reeleição em posição mais frágil do que em 2022, com rejeição de 54%, desaprovação acima de 49%, erosão da base no Nordeste e vantagem reduzida a 5 pontos sobre Flávio Bolsonaro no segundo turno.",
    link: "../politica/lula-larga-2026-pior-posicao-eleitoral-2022-rejeicao-pesquisas.html",
    category: "politica",
    author: "Justiça em Dia",
    authorLink: "#"
},    
{
    title: "Direita Fragmentada Aposta Tudo em Flávio Bolsonaro",
    date: "11/03/2026",
    timestamp: "2026-03-11T07:00:00",
    image: "../img/direita-fragmentada-flavio-bolsonaro-eleicoes-2026.webp",
    excerpt: "A campanha de Flávio Bolsonaro classifica como inviável a coexistência de três candidaturas conservadoras competitivas em 2026. Com Jair Bolsonaro preso e inelegível, a direita enfrenta sua maior crise de representação e a disputa interna com Caiado e Ratinho Jr expõe as fraturas do campo conservador.",
    link: "../politica/direita-fragmentada-flavio-bolsonaro-eleicoes-2026.html",
    category: "politica",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Diálogos de Vorcaro Ameaçam Provas no STF",
    date: "10/03/2026",
    timestamp: "2026-03-10T07:00:00",
    image: "../img/vorcaro-dialogos-vazamento-nulidade-provas-stf-banco-master.webp",
    excerpt: "Vazamento de mensagens do celular de Daniel Vorcaro abre inquérito no STF e ameaça a validade das provas colhidas nas investigações sobre o Banco Master.",
    link: "../politica/vorcaro-dialogos-vazamento-nulidade-provas-stf-banco-master.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Tarcísio Enterra Terceira Via em 2026",
    date: "09/03/2026",
    timestamp: "2026-03-09T07:00:00",
    image: "../img/tarcisio-enterra-terceira-via-eleicoes-2026.webp",
    excerpt: "O governador de São Paulo descartou qualquer alternativa eleitoral fora da disputa entre Lula e Flávio Bolsonaro e declarou apoio formal ao senador do PL para 2026.",
    link: "../politica/tarcisio-enterra-terceira-via-eleicoes-2026.html",
    category: "politica",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "EUA Não Descartam Reduzir Sanções ao Petróleo Russo Para Conter Alta de Preços Após Guerra no Irã",
    date: "09/03/2026",
    timestamp: "2026-03-09T07:00:00",
    image: "../img/eua-nao-descartam-sancoes-petroleo-russo-guerra-ira.webp",
    excerpt: "Com os preços do petróleo disparando após o bloqueio do Estreito de Ormuz, Washington estuda aliviar sanções ao petróleo russo para reequilibrar a oferta global.",
    link: "../politica/eua-nao-descartam-sancoes-petroleo-russo-guerra-ira.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Paes Joga Xadrez Enquanto Rio Elege Governador na Surdina",
    date: "08/03/2026",
    timestamp: "2026-03-08T07:00:00",
    image: "../img/paes-eleicao-indireta-rio-governador-tampao-alerj-2026.webp",
    excerpt: "Com a dupla vacância no Executivo fluminense, o Rio de Janeiro caminha para uma eleição indireta na Alerj. Paes articula alianças para outubro enquanto a direita disputa quem ocupará o Palácio Guanabara antes do pleito.",
    link: "../politica/paes-eleicao-indireta-rio-governador-tampao-alerj-2026.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Lula Apoia Paes no RJ, Mas Exige Chapa Competitiva",
    date: "08/03/2026",
    timestamp: "2026-03-08T07:00:00",
    image: "../img/lula-apoio-paes-rj-chapa-competitiva-eleicoes-2026.webp",
    excerpt: "Lula confirma apoio a Eduardo Paes para o governo do Rio em 2026, mas exige aliança eleitoral ampla. PT reivindica vaga no Senado para Benedita da Silva em meio às tensões da composição da chapa fluminense.",
    link: "../politica/lula-apoio-paes-rj-chapa-competitiva-eleicoes-2026.html",
    author: "Justiça em Dia",
    authorLink: "#"
}, 
{
    title: "Trump Lança Resseguro de US$ 20 Bi para Petroleiros no Estreito de Ormuz",
    date: "08/03/2026",
    timestamp: "2026-03-08T07:00:00",
    image: "../img/trump-resseguro-20-bilhoes-petroleiros-estreito-ormuz.webp",
    excerpt: "O governo Trump anunciou um programa de resseguro de US$ 20 bilhões para navios petroleiros no Estreito de Ormuz, em meio ao conflito com o Irã.",
    link: "../politica/trump-resseguro-20-bilhoes-petroleiros-estreito-ormuz.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Migração Partidária Reforça Centro-Direita na Câmara",
    date: "08/03/2026",
    timestamp: "2026-03-08T07:00:00",
    image: "../img/migracao-partidaria-reforco-centro-direita-camara-janela-2026.webp",
    excerpt: "Cerca de 10% dos deputados federais já migrou de partido antes da janela partidária de abril, fortalecendo o centro-direita na Câmara.",
    link: "../politica/migracao-partidaria-reforco-centro-direita-camara-janela-2026.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
  {
    title: "MDB se divide e rejeita vice na chapa de Lula",
    date: "07/03/2026",
    timestamp: "2026-03-07T07:00:00",
    image: "../img/mdb-divide-rejeita-vice-chapa-lula-eleicoes-2026.webp",
    excerpt: "A maioria dos diretórios estaduais do MDB formalizou manifesto rejeitando aliança nacional com o PT e pedindo neutralidade nas eleições presidenciais de 2026, em reação à ofensiva do Planalto para colocar um nome da sigla como vice de Lula.",
    link: "../politica/mdb-divide-rejeita-vice-chapa-lula-eleicoes-2026.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
 {
    title: "Trump Tem Uma Semana para Liberar o Petróleo do Oriente Médio Antes dos Preços Explodirem",
    date: "07/03/2026",
    timestamp: "2026-03-07T07:00:00",
    image: "../img/trump-uma-semana-liberar-petroleo-oriente-medio-preco-disparar.webp",
    excerpt: "Com o Estreito de Ormuz bloqueado pela guerra com o Irã, analistas alertam que Trump tem poucos dias para mostrar progresso antes que os preços do petróleo disparem.",
    link: "../politica/trump-uma-semana-liberar-petroleo-oriente-medio-preco-disparar.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
 {
    title: "Trump Admite Vácuo de Poder no Irã",
    date: "06/03/2026",
    timestamp: "2026-03-06T07:00:00",
    image: "../img/trump-vacuo-poder-ira-sucessores-khamenei-mortos.webp",
    excerpt: "Trump admitiu que ataques de EUA e Israel eliminaram os possíveis sucessores de Khamenei e anunciou nova onda de bombardeios.",
    link: "../politica/trump-vacuo-poder-ira-sucessores-khamenei-mortos.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
 {
    title: "Lula Pede Voto com Ironia Eleitoral",
    date: "06/03/2026",
    timestamp: "2026-03-06T07:00:00",
    image: "../img/lula-pede-voto-ironia-eleitoral-conferencia-trabalho-sp.webp",
    excerpt: "Presidente ironiza 'sorte' pelos indicadores econômicos e convoca eleitores nas eleições de 2026.",
    link: "../politica/lula-pede-voto-ironia-eleitoral-conferencia-trabalho-sp.html",
    author: "Justiça em Dia",
    authorLink: "#"
 },
 {
    title: "Alcolumbre Bloqueia Indicação de Messias ao STF",
    date: "05/03/2026",
    timestamp: "2026-03-05T07:00:00",
    image: "../img/alcolumbre-bloqueia-indicacao-messias-stf-2026.webp",
    excerpt: "Alcolumbre sinalizou que não deve pautar a sabatina de Jorge Messias ao STF neste ano.",
    link: "../politica/alcolumbre-bloqueia-indicacao-messias-stf-2026.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Janja Revela Dois Casos de Assédio como Primeira-Dama",
    date: "04/03/2026",
    timestamp: "2026-03-04T07:00:00",
    image: "../img/janja-revela-assedio-como-primeira-dama-sem-censura.webp",
    excerpt: "A primeira-dama Janja da Silva revelou ao programa Sem Censura, da TV Brasil, ter sido assediada duas vezes durante o mandato de Lula, usando o relato para destacar a vulnerabilidade das mulheres brasileiras.",
    link: "../politica/janja-revela-assedio-como-primeira-dama-sem-censura.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
        title: "Advocacia que não se Conhece Financeiramente não Sobrevive",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/advocacia-que-nao-se-conhece-financeiramente-nao-sobrevive-o-imperativo.webp",
        excerpt: "Por muito tempo, a palavra gestão soou estranha nos corredores dos escritórios de advocacia. A identidade profissional do advogado foi construída em torno..",
        link: "../politica/advocacia-que-nao-se-conhece-financeiramente.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "O Novo Labirinto Fiscal",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://economicnewsbrasil.com.br/wp-content/uploads/2025/09/investimento-estrangeiro-no-brasil.jpg",
        excerpt: "O Brasil nunca teve uma relação simples com o capital estrangeiro. A história econômica do país é pontuada por ciclos de abertura e fechamento..",
        link: "../politica/o-novo-labirinto-fiscal-as-regras-de-tributacao.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
];

const ITEMS_PER_PAGE = 15;
let currentPage = 1;

/**
 * Calcula o tempo relativo da postagem
 * @param {string} timestamp - Data no formato ISO
 * @param {string} defaultDate - Data formatada para exibir após 24h
 * @returns {string} Tempo relativo ou data original
 */
function getRelativeTime(timestamp, defaultDate) {
    if (!timestamp) return defaultDate;
    
    const postDate = new Date(timestamp);
    const now = new Date();
    const diffInMs = now - postDate;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    if (diffInHours >= 1 && diffInHours <= 24) {
        return `Há ${diffInHours} ${diffInHours === 1 ? 'hora' : 'horas'}`;
    } else if (diffInHours < 1) {
        return "Há menos de 1 hora";
    } else {
        return defaultDate;
    }
}

function renderNews(page) {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) return;
    newsContainer.innerHTML = '';
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const paginatedItems = categoryNewsData.slice(start, end);
    if (paginatedItems.length === 0) {
        newsContainer.innerHTML = '<p class="no-news">Nenhuma notícia encontrada para esta categoria.</p>';
        return;
    }
    paginatedItems.forEach((item, index) => {
        const timeDisplay = getRelativeTime(item.timestamp, item.date);
        
if (index === 3) {
    const bannerDiv = document.createElement('div');
    bannerDiv.className = 'banner-wrapper-full';

    newsContainer.appendChild(bannerDiv);

    // HTML fixo (NÃO recria mais)
    bannerDiv.innerHTML = `
        <div style="margin: 30px 0; text-align: center;">
            <p style="font-size: 10px; color: #999; margin-bottom: 5px;">PUBLICIDADE</p>
            <a id="bannerLink" href="#" target="_blank" rel="nofollow">
                <img id="bannerImg" src="" style="max-width:100%; border-radius:8px; transition: opacity 0.5s;">
            </a>
        </div>
    `;

    const img = bannerDiv.querySelector('#bannerImg');
    const link = bannerDiv.querySelector('#bannerLink');

    function renderRandomBanner() {

    const isMobile = window.innerWidth <= 768;

    const banners = isMobile 
        ? siteConfig.banners.mobile 
        : siteConfig.banners.desktop;

    const activeBanners = banners.filter(isBannerActiveJS);
    if (!activeBanners.length) return;

    const banner = activeBanners[
        Math.floor(Math.random() * activeBanners.length)
    ];

    let imgPath = banner.img;

    if (!imgPath.startsWith('http')) {
        imgPath = prefix + imgPath;
    }

    // 🔥 PRÉ-CARREGA a imagem antes de trocar
    const newImg = new Image();
    newImg.src = imgPath;

    newImg.onload = () => {

        // fade out suave
        img.style.opacity = '0';

        setTimeout(() => {

            // troca só depois que carregou
            img.src = imgPath;
            link.href = banner.link;

            // fade in suave
            img.style.opacity = '1';

        }, 400); // tempo alinhado com transição
    };
}
    // primeira carga
    renderRandomBanner();

    // troca automática (agora suave)
    setInterval(renderRandomBanner, 5000);
}

        const shareHtml = typeof getShareButtonsHtml === 'function' ? getShareButtonsHtml(item.title, item.link) : '';
        
        const article = document.createElement('article');
        article.className = 'category-post';
        article.innerHTML = `
                <div class="category-post-image-container">
                    <a href="${item.link}" class="category-post-link-wrapper">
                        <img src="${item.image}" alt="${item.title}" loading="lazy">
                    </a>
                </div>
                <div class="category-post-content">
                    <a href="${item.link}" class="category-post-link-wrapper">
                        <h3 class="category-post-title">${item.title}</h3>
                    
                    <p class="category-post-excerpt">${item.excerpt}</p></a>
                    <div class="category-post-meta-container">
                        <p class="category-post-meta">${timeDisplay} &bull; Em ${item.author || 'Notícias'}</p>
                        ${shareHtml}
                    </div>
                </div>
        `;
        newsContainer.appendChild(article);
    });
    renderPagination(categoryNewsData.length);
    if (page > 1 || sessionStorage.getItem('paged')) {
        const header = document.querySelector('.category-header');
        if (header) {
            header.scrollIntoView({ behavior: 'smooth' });
        }
    }
    sessionStorage.setItem('paged', 'true');
}

function renderPagination(totalItems) {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    if (totalPages <= 1) return;
    if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '&laquo;';
        prevBtn.className = 'pagination-btn';
        prevBtn.onclick = () => {
            currentPage--;
            renderNews(currentPage);
        };
        paginationContainer.appendChild(prevBtn);
    }
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        btn.onclick = () => {
            currentPage = i;
            renderNews(currentPage);
        };
        paginationContainer.appendChild(btn);
    }
    if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '&raquo;';
        nextBtn.className = 'pagination-btn';
        nextBtn.onclick = () => {
            currentPage++;
            renderNews(currentPage);
        };
        paginationContainer.appendChild(nextBtn);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    sessionStorage.removeItem('paged');
    renderNews(currentPage);
});
