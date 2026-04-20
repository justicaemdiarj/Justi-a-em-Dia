// Dados de notícias para Direito de Família
const categoryNewsData = [
    { title: "Custódia Exclusiva e Proteção Integral da Criança", 
        date: "20/04/2026", 
        timestamp: "2026-04-20T08:00:00", 
        image: "../img/custodia-exclusiva-protecao-integral-crianca.webp", 
        excerpt: "A guarda unilateral permanece como modalidade aplicável em situações específicas do direito de família brasileiro.", 
        link: "../direito-de-familia/custodia-exclusiva-protecao-integral-crianca.html", 
    author: "Romer Carvalho",
    authorLink: "../apoiadores/advogado-romer-carvalho.html"
     },
    { title: "Sucessão Familiar e Estratégia Patrimonial no Brasil", 
        date: "17/04/2026", 
        timestamp: "2026-04-17T09:00:00", 
        image: "../img/sucessao-familiar-estrategia-patrimonial-brasil.webp", 
        excerpt: "Testamentos, holdings e doações como instrumentos de organização sucessória familiar.", 
        link: "../direito-de-familia/sucessao-familiar-estrategia-patrimonial-brasil.html", 
        author: "Justiça em Dia", 
        authorLink: "#" 
    },
    {
  title: "Afeto Negado Pode Gerar Reparação Civil",
  date: "16/04/2026",
  timestamp: "2026-04-16T11:00:00",
  image: "../img/abandono-afetivo-indenizacao-dano-moral.webp",
  excerpt: "O abandono afetivo nas relações familiares tem sido reconhecido pelos tribunais brasileiros como conduta passível de indenização por dano moral.",
  link: "../direito-de-familia/abandono-afetivo-indenizacao-dano-moral.html",
  author: "Justiça em Dia",
  authorLink: "#"
},
    {
  title: "Vínculos Parentais e Tutela Jurisdicional no Direito de Convivência",
  date: "15/04/2026",
  timestamp: "2026-04-15T07:00:00",
  image: "../img/vinculos-parentais-tutela-jurisdicional-convivencia.webp",
  excerpt: "A guarda compartilhada e o combate à alienação parental consolidam o direito de convivência como proteção integral do menor no ordenamento brasileiro.",
  link: "../direito-de-familia/vinculos-parentais-tutela-jurisdicional-convivencia.html",
  author: "Justiça em Dia",
  authorLink: "#"
},
    {
       title: "Adoção Legal e os Caminhos da Família",
       date: "14/04/2026",
       timestamp: "2026-04-14T07:00:00",
       image: "../img/adocao-legal-caminhos-familia-brasil.webp",
       excerpt: "Requisitos jurídicos moldam vínculos afetivos permanentes no sistema de adoção brasileiro.",
       link: "../direito-de-familia/adocao-legal-caminhos-familia-brasil.html",
       author: "Justiça em Dia",
       authorLink: "#"
   },
    {
    title: "Uma Criança Pode Ter Dois Pais no Registro",
    date: "13/04/2026",
    timestamp: "2026-04-13T08:00:00",
    image: "../img/crianca-pode-ter-dois-pais-no-registro.webp",
    excerpt: "A multiparentalidade reconhece vínculos de filiação além da biologia com a tese do STF no RE 898.060.",
    link: "../direito-de-familia/crianca-pode-ter-dois-pais-no-registro.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Pai no Registro É Direito Que Não Prescreve",
    date: "11/04/2026",
    timestamp: "2026-04-11T12:00:00",
    image: "../img/pai-no-registro-e-direito-que-nao-prescreve.webp",
    excerpt: "O reconhecimento de paternidade é direito imprescritível que garante identidade, alimentos e herança no direito de família.",
    link: "../direito-de-familia/pai-no-registro-e-direito-que-nao-prescreve.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "A Casa Não Pode Ser Palco de Crueldade",
    date: "10/04/2026",
    timestamp: "2026-04-10T10:00:00",
    image: "../img/casa-nao-pode-ser-palco-de-crueldade.webp",
    excerpt: "A violência doméstica e as medidas protetivas da Lei Maria da Penha são instrumentos essenciais de proteção às mulheres no Brasil.",
    link: "../direito-de-familia/casa-nao-pode-ser-palco-de-crueldade.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Antes do Altar, Escolha o Regime Certo",
    date: "09/04/2026",
    timestamp: "2026-04-09T07:00:00",
    image: "../img/antes-do-altar-escolha-o-regime-certo.webp",
    excerpt: "A escolha do regime de bens no casamento tem consequências patrimoniais de longo alcance para os cônjuges.",
    link: "../direito-de-familia/antes-do-altar-escolha-o-regime-certo.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Dividir o Patrimônio Não Precisa Ser Guerra",
    date: "08/04/2026",
    timestamp: "2026-04-08T07:00:00",
    image: "../img/dividir-o-patrimonio-nao-precisa-ser-guerra.webp",
    excerpt: "A partilha de bens no divórcio é um dos aspectos mais complexos do direito de família e pode ser resolvida de forma menos conflituosa.",
    link: "../direito-de-familia/dividir-o-patrimonio-nao-precisa-ser-guerra.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Separar sem Juiz Virou Regra",
    date: "07/04/2026",
    timestamp: "2026-04-07T09:00:00",
    image: "../img/separar-sem-juiz-virou-regra.webp",
    excerpt: "O divórcio extrajudicial transformou a forma como os brasileiros encerram o casamento, simplificando o processo em cartório.",
    link: "../direito-de-familia/separar-sem-juiz-virou-regra.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
  title: "Fim da Pensão Alimentícia e Seus Reflexos Jurídicos",
  date: "06/04/2026",
  timestamp: "2026-04-06T08:00:00",
  image: "../img/exoneracao-alimentos-reflexos-juridicos-brasil.webp",
  excerpt: "A exoneração de alimentos e seus reflexos jurídicos no direito de família brasileiro.",
  link: "../direito-de-familia/exoneracao-alimentos-reflexos-juridicos-brasil.html",
  author: "Justiça em Dia",
  authorLink: "#"
},
    {
  title: "A Última Vontade e Seus Herdeiros",
  date: "03/04/2026",
  timestamp: "2026-04-03T08:00:00",
  image: "../img/testamento-heranca-direito-sucessorio-brasil.webp",
  excerpt: "O testamento e a herança no Brasil equilibram a autonomia do testador com a proteção dos herdeiros necessários num sistema sucessório de crescente complexidade.",
  link: "../direito-de-familia/testamento-heranca-direito-sucessorio-brasil.html",
    author: "Romer Carvalho",
    authorLink: "../apoiadores/advogado-romer-carvalho.html"
},
    {
  title: "Alimentos sob Revisão, Direitos em Disputa",
  date: "02/04/2026",
  timestamp: "2026-04-02T12:00:00",
  image: "../img/pensao-alimenticia-revisao-direito-familia-brasil.webp",
  excerpt: "A pensão alimentícia pode ser revista quando há mudança substancial nas condições econômicas das partes envolvidas.",
  link: "../direito-de-familia/pensao-alimenticia-revisao-direito-familia-brasil.html",
  author: "Justiça em Dia",
  authorLink: "#"
},
    {
  title: "Alienação Parental e a Criança Invisível",
  date: "01/04/2026",
  timestamp: "2026-04-01T09:00:00",
  image: "../img/alienacao-parental-crianca-invisivel-lei-12318.webp",
  excerpt: "A alienação parental compromete o vínculo afetivo da criança com um dos genitores. Entenda a Lei nº 12.318 de 2010, os impactos psicossociais e os desafios do direito de família brasileiro.",
  link: "../direito-de-familia/alienacao-parental-crianca-invisivel-lei-12318.html",
  categoria: "direito-de-familia",
  author: "Justiça em Dia",
  authorLink: "#"
},
    {
    title: "União Estável Gera Direitos Tão Sólidos Quanto o Casamento",
    date: "27/03/2026",
    timestamp: "2026-03-27T09:00:00",
    image: "../img/uniao-estavel-efeitos-juridicos-direitos-companheiros-brasil.webp",
    excerpt: "A união estável é reconhecida pela Constituição Federal como entidade familiar plena, gerando efeitos jurídicos abrangentes sobre patrimônio, sucessão, alimentos, guarda dos filhos e previdência social.",
    link: "../direito-de-familia/uniao-estavel-efeitos-juridicos-direitos-companheiros-brasil.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
  title: "Quando o Afeto Constrói Vínculos Jurídicos Reais",
  date: "26/03/2026",
  timestamp: "2026-03-26T10:00:00",
  image: "../img/quando-afeto-constroi-vinculos-juridicos-reais.webp",
  excerpt: "A parentalidade socioafetiva transformou o direito de família ao reconhecer que o afeto constrói vínculos jurídicos tão legítimos quanto os biológicos.",
  link: "../direito-de-familia/quando-afeto-constroi-vinculos-juridicos-reais.html",
  categoria: "direito-de-familia",
  author: "Justiça em Dia",
  authorLink: "#"
},
    {
  title: "Herança Não Planejada Vira Batalha Judicial",
  date: "25/03/2026",
  timestamp: "2026-03-25T09:00:00",
  image: "../img/direito-sucessorio-planejamento-testamento-vocacao-hereditaria.webp",
  excerpt: "O direito sucessório disciplina quem herda, em que ordem e sob quais condições. Saiba como o planejamento protege o patrimônio familiar.",
  link: "../direito-de-familia/direito-sucessorio-planejamento-testamento-vocacao-hereditaria.html",
  categoria: "direito-de-familia",
  author: "Justiça em Dia",
  authorLink: "#"
},
    {
    title: "Reserva de Imóvel na Planta e a Custódia Notarial",
    date: "24/03/2026",
    timestamp: "2026-03-24T09:00:00",
    image: "../img/reserva-imovel-planta-custodia-notarial-escrow-incorporacao.webp",
    excerpt: "A legalidade do termo de reserva de imóvel em incorporações e o papel da escrow account notarial na proteção do adquirente.",
    link: "../direito-de-familia/reserva-imovel-planta-custodia-notarial-escrow-incorporacao.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Brincar como Direito, Lei como Escudo Infantil",
    date: "23/03/2026",
    timestamp: "2026-03-23T08:00:00",
    image: "../img/lei-14826-2024-brincar-parentalidade-positiva-prevencao-violencia-criancas.webp",
    excerpt: "A Lei nº 14.826 de 2024 reconhece o brincar e a parentalidade positiva como instrumentos jurídicos de prevenção à violência contra crianças no Brasil.",
    link: "../direito-de-familia/lei-14826-2024-brincar-parentalidade-positiva-prevencao-violencia-criancas.html",
    categoria: "direito-de-familia",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Divórcio Unilateral em Cartório Transforma Direito Familiar",
    date: "20/03/2026",
    timestamp: "2026-03-20T07:00:00",
    image: "../img/divorcio-unilateral-cartorio-transforma-direito-familiar.webp",
    excerpt: "Autonomia individual redefine dissolução do vínculo conjugal. A proposta de divórcio unilateral em cartório, amparada pela jurisprudência do STJ e pela reforma do Código Civil, representa avanço na desburocratização do direito de família brasileiro.",
    link: "../direito-de-familia/divorcio-unilateral-cartorio-transforma-direito-familiar.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Quando o Judiciário Vira Instrumento de Opressão",
    date: "19/03/2026",
    timestamp: "2026-03-19T07:00:00",
    image: "../img/litigancia-predatoria-familia-judiciario-instrumento-opressao.webp",
    excerpt: "Nas Varas de Família, o processo judicial tem sido desvirtuado como ferramenta de assédio e controle coercitivo. A litigância predatória expõe a insuficiência dos mecanismos tradicionais e exige uma virada dogmática urgente.",
    link: "../direito-de-familia/litigancia-predatoria-familia-judiciario-instrumento-opressao.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Holding Familiar e a Divisão do Patrimônio",
    date: "18/03/2026",
    timestamp: "2026-03-18T07:00:00",
    image: "../img/holding-familiar-partilha-bens-sucessao-patrimonial-divorcio-heranca.webp",
    excerpt: "Estrutura societária transforma a lógica da partilha hereditária.",
    link: "../direito-de-familia/holding-familiar-partilha-bens-sucessao-patrimonial-divorcio-heranca.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "ECA Digital Protege Crianças no Ambiente Virtual",
    date: "17/03/2026",
    timestamp: "2026-03-17T07:00:00",
    image: "../img/eca-digital-vigor-marco-2026-protecao-criancas-adolescentes-internet.webp",
    excerpt: "Nova lei impõe obrigações às plataformas digitais brasileiras.",
    link: "../direito-de-familia/eca-digital-vigor-marco-2026-protecao-criancas-adolescentes-internet.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "FGTS Entra na Partilha do Divórcio",
    date: "16/03/2026",
    timestamp: "2026-03-16T12:00:00",
    image: "../img/fgts-partilha-bens-divorcio-comunhao-parcial-STJ.webp",
    excerpt: "O saldo do FGTS acumulado durante o casamento em regime de comunhão parcial integra o patrimônio comum do casal e deve ser incluído na partilha de bens no divórcio, segundo entendimento consolidado pelo STJ. O cônjuge não titular tem direito à meação do valor depositado no período da união, mas a desinformação faz com que esse ativo seja frequentemente omitido nos acordos.",
    link: "../direito-de-familia/fgts-partilha-bens-divorcio-comunhao-parcial-STJ.html",
    category: "direito-de-familia",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Judiciário do Acre Vai Além da Punição",
    date: "15/03/2026",
    timestamp: "2026-03-15T07:00:00",
    image: "../img/tjac-judiciario-acolhimento-violencia-domestica-lei-maria-penha-20-anos.webp",
    excerpt: "O TJAC mobilizou magistrados e servidores de todas as comarcas do Acre na 32ª Semana Justiça pela Paz em Casa com 140 audiências, suporte psicossocial pelo Ceavi, cartilha educativa e capacitação de estudantes em técnicas restaurativas, no ano em que a Lei Maria da Penha completa 20 anos.",
    link: "../direito-de-familia/tjac-judiciario-acolhimento-violencia-domestica-lei-maria-penha-20-anos.html",
    category: "direito-de-familia",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Violência Doméstica em Números que Assustam",
    date: "14/03/2026",
    timestamp: "2026-03-14T07:00:00",
    image: "../img/violencia-domestica-numeros-sc-brasil-feminicidio-medidas-protetivas.webp",
    excerpt: "Servidor do PJSC apresenta dados do CNJ que revelam 945 mil medidas protetivas e 1.470 feminicídios em 2025 no Brasil, com destaque para os índices alarmantes de Chapecó e a dimensão oculta da violência doméstica em SC.",
    link: "../direito-de-familia/violencia-domestica-numeros-sc-brasil-feminicidio-medidas-protetivas.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
        title: "STJ Garante Dividendos ao Ex-Cônjuge Até Partilha Final",
        date: "13/03/2026",
        timestamp: "2026-03-13T07:00:00",
        image: "../img/stj-dividendos-ex-conjuge-cotista-anomalo-apuracao-haveres.webp",
        excerpt: "STJ decide que ex-cônjuge com direito à meação de cotas societárias também recebe proporcionalmente os lucros e dividendos distribuídos pela empresa até a efetiva quitação dos haveres, vedando enriquecimento sem causa do sócio remanescente.",
        link: "../direito-de-familia/stj-dividendos-ex-conjuge-cotista-anomalo-apuracao-haveres.html",
        author: "Justiça em Dia",
        authorLink: "#"
    }, 
{
    title: "Proteção ou Vigilância Digital sobre Crianças e Jovens",
    date: "12/03/2026",
    timestamp: "2026-03-12T07:00:00",
    image: "../img/lei-eca-digital-privacidade-criancas-adolescentes.webp",
    excerpt: "A Lei 15.211/2025 impõe vínculo obrigatório de contas digitais de adolescentes a responsáveis adultos, ameaçando vítimas de abuso doméstico e gerando exclusão digital.",
    link: "../direito-de-familia/lei-eca-digital-privacidade-criancas-adolescentes.html",
    author: "Justiça em Dia",
    authorLink: "#"
},   
{
    title: "Mediação Familiar Ganha Força em Mutirão Virtual",
    date: "11/03/2026",
    timestamp: "2026-03-11T07:00:00",
    image: "../img/cejusc-fortaleza-mutirao-virtual-mediacao-familia.webp",
    excerpt: "O Cejusc de Fortaleza promove mutirão virtual com 266 audiências de mediação nas Varas de Família da Capital, reunindo 50 mediadores em 20 salas simultâneas para acelerar a solução consensual de conflitos familiares.",
    link: "../direito-de-familia/cejusc-fortaleza-mutirao-virtual-mediacao-familia.html",
    category: "direito-de-familia",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Três Caminhos, Uma Escolha Decisiva no Divórcio",
    date: "09/03/2026",
    timestamp: "2026-03-09T07:00:00",
    image: "../img/divorcio-extrajudicial-consensual-litigioso-diferencas.webp",
    excerpt: "Entenda as diferenças entre o divórcio extrajudicial em cartório, o consensual judicial e o litigioso, seus requisitos legais, custos e impactos para cônjuges e filhos.",
    link: "../direito-de-familia/divorcio-extrajudicial-consensual-litigioso-diferencas.html",
    author: "Romer Carvalho",
    authorLink: "../apoiadores/advogado-romer-carvalho.html"
},   
{
    title: "Cartórios na Linha de Frente Contra Violência Patrimonial Feminina",
    date: "08/03/2026",
    timestamp: "2026-03-08T07:00:00",
    image: "../img/cartorios-protecao-patrimonial-mulheres-violencia-silenciosa.webp",
    excerpt: "O Registro de Imóveis do Brasil oferece orientação jurídica gratuita a mulheres sobre direitos patrimoniais em 11 estados, expondo o vazio do Estado na proteção financeira feminina.",
    link: "../direito-de-familia/cartorios-protecao-patrimonial-mulheres-violencia-silenciosa.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Código Civil Ignora a Família Real",
    date: "07/03/2026",
    timestamp: "2026-03-07T07:00:00",
    image: "../img/codigo-civil-ignora-familia-real-reforma-urgente-sucessoes.webp",
    excerpt: "Especialistas debatem no Senado a urgência de reformar o Código Civil no campo do direito de família e das sucessões.",
    link: "../direito-de-familia/codigo-civil-ignora-familia-real-reforma-urgente-sucessoes.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Tolerância zero: o arcabouço legal contra violência feminina",
    date: "06/03/2026",
    timestamp: "2026-03-06T07:00:00",
    image: "../img/tolerancia-zero-arcabouco-legal-violencia-contra-mulher.webp",
    excerpt: "A política de tolerância zero à violência contra a mulher é um arcabouço normativo que vai além da punição e busca transformar as estruturas sociais que perpetuam a violência de gênero no Brasil.",
    link: "../direito-de-familia/tolerancia-zero-arcabouco-legal-violencia-contra-mulher.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
 {
    title: "Instagram Pode Entrar na Partilha de Bens?",
    date: "05/03/2026",
    timestamp: "2026-03-05T07:00:00",
    image: "../img/instagram-perfil-partilha-bens-divorcio.webp",
    excerpt: "Perfil no Instagram pode ser partilhado no divórcio quando configurado como ativo intangível com valor econômico constituído durante a relação conjugal.",
    link: "../direito-de-familia/instagram-perfil-partilha-bens-divorcio.html",
    author: "Justiça em Dia",
    authorLink: "#"
   },
   {
        title: "Protegidas no Papel, Vulneráveis na Vida Real",
        date: "04/03/2026",
        timestamp: "2026-03-04T07:00:00",
        image: "../img/protegidas-no-papel-vulneraveis-na-vida-real-colapso-medidas-protetivas.webp",
        excerpt: "A cada novo caso de feminicídio noticiado no país, um detalhe se repete com perturbadora regularidade..",
        link: "../direito-de-familia/protegidas-no-papel-vulneraveis-na-vida-real-colapso-medidas-protetivas.html",
        author: "Por Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Senado Convoca os Grandes Nomes do Direito Privado",
        date: "03/03/2026",
        timestamp: "2026-03-03T07:00:00",
        image: "../img/senado-convoca-grandes-nomes-do-direito-para-redesenhar.webp",
        excerpt: "Mais de duas décadas depois de sua entrada em vigor, o Código Civil brasileiro está prestes a ganhar novo rosto..",
        link: "../direito-de-familia/senado-convoca-grandes-nomes-do-direito-para-redesenhar-regras.html",
        author: "Por Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "O Testamento Digital",
        date: "02/03/2026",
        timestamp: "2026-03-02T12:00:00",
        image: "https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?w=1200&q=80",
        excerpt: "O tabelionato de notas em São Paulo recebe o casal de noivos com documentação completa para lavrar pacto antenupcial. Além das cláusulas tradicionais..",
        link: "../direito-de-familia/o-testamento-digital-quando-o-amor-precisa-contemplar-bitcoins-e-senhas.html",
        author: "Por Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "O Amor Que Se Cobra na Justiça",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=1200&q=80",
        excerpt: "O escritório de advocacia em Brasília recebe, com frequência crescente, consultas inusitadas: adultos que desejam processar avós por abandono afetivo..",
        link: "../direito-de-familia/o-amor-que-se-cobra-na-justica-quando-a-ausencia-dos-avos-gera-indenizacao.html",
        author: "Por Justiça em Dia",
        authorLink: "#"
    },
       {
        title: "Como Comprovar que Existe União Estável",
         date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/comprovar-existencia-de-uniao-estavel.webp",
        excerpt: "Muitas pessoas vivem em união estável sem sequer saber que essa relação possui proteção jurídica semelhante ao casamento..",
        link: "../direito-de-familia/como-comprovar-uniao-estavel.html",
        author: "Romer Carvalho",
        authorLink: "../apoiadores/advogado-romer-carvalho.html"
    },
    {
        title: "Guarda Compartilhada e o Melhor Interesse da Criança na Prática Forense",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
        excerpt: "A guarda compartilhada, consagrada como regra pelo ordenamento jurídico brasileiro através da Lei 13.058/2014, representa...",
        link: "../direito-de-familia/guarda-compartilhada-melhor-interesse-crianca.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Pensão Alimentícia",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/pensao-alimenticia.webp",
        excerpt: "A pensão alimentícia constitui obrigação jurídica fundada no princípio da solidariedade familiar, destinando-se a garantir.. ",
        link: "../direito-de-familia/pensao-alimenticia-revisao-exoneracao-limites.html",
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
        item.authorLink = typeof getAuthorLink === 'function' ? getAuthorLink(item.author) : '#';
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
