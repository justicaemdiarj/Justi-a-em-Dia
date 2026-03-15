const posts = [
{
  
  title: "Novo Código Civil Enfrenta Freio no Senado",
  description: "O PL 4/2025 que propõe a atualização mais abrangente do Código Civil desde 2002, modificando 1.197 artigos e introduzindo o direito civil digital, enfrenta risco de atraso na tramitação do Senado por complexidade técnica e calendário eleitoral desfavorável",
  description2: "Senadores admitem que a votação em plenário prevista para junho pode não ocorrer no prazo, abrindo o risco de que a decisão sobre contratos, responsabilidade civil, família e sucessões seja empurrada para 2027 com composição parlamentar renovada",
  image: "img/pl-codigo-civil-tramitacao-atraso-senado-calendario-eleitoral-2026.webp",
  link: "direito-civil/pl-codigo-civil-tramitacao-atraso-senado-calendario-eleitoral-2026.html",
  date: "2026-03-15T07:00:00",
  section: "featured"
},
  {
  title: "Como Provar Assédio no Ambiente de Trabalho",
  description: "O MPT publicou cartilha orientando vítimas de assédio moral e sexual a reunir provas válidas juridicamente, como gravações, mensagens, e-mails e diários de ocorrências, e a formalizar denúncias de forma anônima pelos canais disponíveis",
  description2: "A Convenção 190 da OIT amplia o conceito de assédio para incluir episódios únicos e práticas fora do horário de trabalho, reforçando a proteção a grupos vulnerabilizados como mulheres negras e trabalhadores em vínculos precários",
  image: "img/assedio-moral-sexual-trabalho-provas-denunciar-mpt-cartilha.webp",
  link: "direito-trabalhista/assedio-moral-sexual-trabalho-provas-denunciar-mpt-cartilha.html",
  date: "2026-03-15T07:00:00",
  section: "featured-secundario"
},
{
  title: "Policial Licenciado em 1996 Volta ao Serviço Ativo",
  description: "A Justiça da Paraíba reconheceu que o licenciamento de um soldado da PM em 1996 jamais produziu efeitos jurídicos válidos por nunca ter sido publicado no Diário Oficial, determinando seu retorno ao serviço ativo quase 29 anos depois",
  description2: "O caso expõe o passivo oculto das administrações militares estaduais e reafirma que a publicidade é requisito de eficácia dos atos administrativos, não uma formalidade dispensável",
  image: "img/pm-licenciado-1996-retorno-ativo-publicacao-diario-oficial-nulidade-ato-administrativo.webp",
  link: "direito-militar/pm-licenciado-1996-retorno-ativo-publicacao-diario-oficial-nulidade-ato-administrativo.html",
  date: "2026-03-15T07:00:00",
 section: "featured-terciario"
},
  {
  title: "Judiciário do Acre Vai Além da Punição",
  image: "img/tjac-judiciario-acolhimento-violencia-domestica-lei-maria-penha-20-anos.webp",
  link: "direito-de-familia/tjac-judiciario-acolhimento-violencia-domestica-lei-maria-penha-20-anos.html",
  date: "2026-03-15T07:00:00",
    section: "destaque"
  },
   {
   title: "Cultura de Cuiabá Adota Compliance na Gestão",
  image: "img/secretaria-cultura-cuiaba-compliance-integridade-administracao-publica-municipal.webp",
  link: "compliance/secretaria-cultura-cuiaba-compliance-integridade-administracao-publica-municipal.html",
  date: "2026-03-15T07:00:00",
    section: "destaque"
  },
  {
     title: "Habeas Corpus Amordaçado pela Jurisprudência",
   image: "img/habeas-corpus-vedacao-debate-fatico-prisao-preventiva-inconstitucional.webp",
    link: "direito-penal/habeas-corpus-vedacao-debate-fatico-prisao-preventiva-inconstitucional.html",
 date: "2026-03-14T07:00:00",
    section: "destaque"
  },
  {
   
    title: "Aplicativos Vencem a Batalha do Vínculo Trabalhista",
     image: "img/plp-152-2025-vinculo-empregaticio-motoristas-aplicativos-regulamentacao.webp",
    link: "direito-trabalhista/plp-152-2025-vinculo-empregaticio-motoristas-aplicativos-regulamentacao.html",
    date: "2026-03-14T07:00:00",
    section: "veja"
  },
  {
  title: "Agências de Viagem Ganham Terreno no Judiciário",
 image: "img/agencias-viagem-responsabilidade-solidaria-jurisprudencia-stj-turismo.webp",
    link: "jurisprudencia/agencias-viagem-responsabilidade-solidaria-jurisprudencia-stj-turismo.html",
  date: "2026-03-14T07:00:00",
    section: "veja"
  },
  {
 title: "Danos Morais na Justiça Militar Ganham Piso",
  image: "img/stm-danos-morais-indenizacao-minima-jurisprudencia-vitimas.webp",
  link: "direito-militar/stm-danos-morais-indenizacao-minima-jurisprudencia-vitimas.html",
  date: "2026-03-14T07:00:00",
    section: "veja"
  }
];

/* ===== FUNÇÃO TEMPO RELATIVO ===== */
function getTimeAgo(dateString){
  const now = new Date();
  const postDate = new Date(dateString);
  const diff = Math.floor((now - postDate) / 1000);

  const hours = Math.floor(diff / 3600);
  const days = Math.floor(hours / 24);

  if(hours < 1) return "Agora há pouco";
  if(hours < 24) return `Há ${hours} horas`;
  if(days === 1) return "Ontem";
  return `Há ${days} dias`;
}


/* ===== RENDERIZAÇÃO ===== */
function renderContent(){

  const container = document.getElementById("dynamicContent");

const featuredTop = posts.find(p => p.section === "featured");

container.innerHTML += `
  <div class="featured-block">

    <a href="${featuredTop.link}">
      <div class="featured-image">
        <img src="${featuredTop.image}">
      </div>
    </a>

    <h1 class="featured-title">
      <a href="${featuredTop.link}">
        ${featuredTop.title}
      </a>
    </h1>

<p class="featured-description">
  <a href="${featuredTop.link}">
  ${featuredTop.description || ""}
  </a>
</p>

<p class="featured-description">
  <a href="${featuredTop.link}">
    ${featuredTop.description2 || ""}
  </a>
</p>

    <div class="post-time">${getTimeAgo(featuredTop.date)}</div>

  </div>
      <div class="linha-divisoria"></div>
`;

container.innerHTML += renderBanner("antes-destaques");

/* ===== DESTAQUES ===== */

const destaquePosts = posts
  .filter(p => p.section === "destaque")
  .sort((a,b) => new Date(b.date) - new Date(a.date));

container.innerHTML += `
  <div class="section-block">
  
    <div class="grid-3">
      ${destaquePosts.map(p => `
        <div class="card">
          <a href="${p.link}">
            <img src="${p.image}">
            <div class="card-content">
              <div class="card-title">${p.title}</div>
              <div class="post-time">${getTimeAgo(p.date)}</div>
            </div>
          </a>
        </div>
      `).join("")}
    </div>
  </div>
`;



/* ===== FEATURED SECUNDÁRIO ===== */
const featuredSecondary = posts.find(p => p.section === "featured-secundario");

if(featuredSecondary){
  container.innerHTML += `
    <div class="featured-block">

      <a href="${featuredSecondary.link}">
        <div class="featured-image">
          <img src="${featuredSecondary.image}">
        </div>
      </a>

      <h2 class="featured-title">
        <a href="${featuredSecondary.link}">
          ${featuredSecondary.title}
        </a>
      </h2>

<p class="featured-description">
  <a href="${featuredSecondary.link}">
  ${featuredSecondary.description || ""}
</p>
</a>

<p class="featured-description">
  <a href="${featuredSecondary.link}">
    ${featuredSecondary.description2 || ""}
  </a>
</p>

      <div class="post-time">${getTimeAgo(featuredSecondary.date)}</div>

    </div>
    <div class="linha-divisoria"></div>
  `;
}

container.innerHTML += renderBanner("depois-destaques");

/* ===== FEATURED TERCIÁRIO ===== */

const featuredThird = posts.find(p => p.section === "featured-terciario");

if(featuredThird){
  container.innerHTML += `
    <div class="featured-block">

      <a href="${featuredThird.link}">
        <div class="featured-image">
          <img src="${featuredThird.image}">
        </div>
      </a>

      <h2 class="featured-title">
        <a href="${featuredThird.link}">
          ${featuredThird.title}
        </a>
      </h2>

      <p class="featured-description">
        <a href="${featuredThird.link}">
          ${featuredThird.description || ""}
        </a>
      </p>

      <p class="featured-description">
        <a href="${featuredThird.link}">
          ${featuredThird.description2 || ""}
        </a>
      </p>

      <div class="post-time">${getTimeAgo(featuredThird.date)}</div>

    </div>
    <div class="linha-divisoria"></div>
  `;
}
/* ===== VEJA TAMBÉM ===== */
const vejaPosts = posts
  .filter(p => p.section === "veja")
  .sort((a,b) => new Date(b.date) - new Date(a.date));

container.innerHTML += `
  <div class="section-block">
  <h2>Veja também</h2>
    <div class="grid-3">
      ${vejaPosts.map(p => `
        <div class="card">
          <a href="${p.link}">
            <img src="${p.image}">
            <div class="card-content">
              <div class="card-title">${p.title}</div>
              <div class="post-time">${getTimeAgo(p.date)}</div>
            </div>
          </a>
        </div>
      `).join("")}
    </div>
  </div>
`;

}


document.addEventListener("DOMContentLoaded", renderContent);


document.addEventListener("DOMContentLoaded", function(){

  /* ===== MAIS LIDOS ===== */
  const posts = [
  
{
 title: "PGFN Cria Laboratório de Teses da Reforma Tributária",
  link: "legislacao/pgfn-incubadora-teses-reforma-tributaria-ibs-cbs-contencioso.html",
  date: "2026-03-11T07:00:00"
},
{
    title: "Compliance Virou Escudo Jurídico das Empresas",
    link: "compliance/compliance-escudo-juridico-governanca-empresas-lei-anticorrupcao.html",
    date: "2026-03-10T07:00:00"
},
{
 title: "Itaú Fecha Contas de Securitizadora Ligada ao Master",
  link: "compliance/itau-encerra-contas-cri-base-securitizadora-compliance-zero-master.html",
  date: "2026-03-11T07:00:00"
},
{
 title: "Suspeita de Homicídio Deixa Prisão Preventiva",
  link: "direito-penal/suspeita-homicidio-liberdade-prisao-preventiva-bento-goncalves.html",
  date: "2026-03-11T07:00:00"
},
 {
   title: "Assédio Moral Explode nas Varas Trabalhistas",
    link: "direito-trabalhista/assedio-moral-dano-moral-acoes-trabalhistas-burnout-crescimento.html",
    date: "2026-03-10T07:00:00"
},
    {
 title: "Direita Fragmentada Aposta Tudo em Flávio Bolsonaro",
  link: "politica/direita-fragmentada-flavio-bolsonaro-eleicoes-2026.html",
  date: "2026-03-11T07:00:00"
    }
  ];


  /* ===== FUNÇÃO TEMPO RELATIVO ===== */
  function getTimeAgo(dateString){
    const now = new Date();
    const postDate = new Date(dateString);
    const diff = Math.floor((now - postDate) / 1000);

    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(diff / 3600);
    const days = Math.floor(diff / 86400);

    if(minutes < 60) return `Há ${minutes} minutos`;
    if(hours < 24) return `Há ${hours} horas`;
    return `Há ${days} dias`;
  }


  /* ===== ORDENAR POR DATA (mais recente primeiro) ===== */
  posts.sort((a,b) => new Date(b.date) - new Date(a.date));


  /* ===== INSERIR NA SIDEBAR ===== */
  const list = document.getElementById("mostReadList");

  posts.slice(0,10).forEach((post, index) => {
    const li = document.createElement("li");

  li.innerHTML = `
  <div>
    <a href="${post.link}">${post.title}</a>
    <div class="post-time">${getTimeAgo(post.date)}</div>
  </div>
`;

    list.appendChild(li);
  });

});

////////// Noticias campo acima newsletter ////////////

const principaisNoticias = [

{
title: "Proteção ou Vigilância Digital sobre Crianças e Jovens",
    link: "direito-de-familia/lei-eca-digital-privacidade-criancas-adolescentes.html",
source: "",
date: "2026-03-12T07:00:00"
},

{
title: "Leilão de Imóvel Exige Notificação Prévia ao Devedor",
  link: "direito-civil/leilao-extrajudicial-notificacao-devedor-imovel.html",
source: "",
date: "2026-03-11T07:00:00"
},
{
title: "Tarcísio Enterra Terceira Via em 2026",
link: "politica/tarcisio-enterra-terceira-via-eleicoes-2026.html",
source: "",
date: "2026-03-10T03:00:00"
},
{
title: "Receita Falsa Opioide e a Semi-Imputabilidade",
  link: "direito-penal/receita-falsa-opioide-semi-imputabilidade-condenacao-penal.html",
source: "",
date: "2026-03-10T07:00:00"
},
{
title: "Consumidor Brasileiro Desprotegido Frente à Europa",
link: "direito-civil/armadilhas-digitais-consumidor-brasileiro-desprotegido-frente-europa.html",
source: "",
date: "2026-03-08T07:00:00"
},
{
title: "Obra Mal Feita, Quem Paga a Conta ao Consumidor",
    link: "direito-civil/responsabilidade-fornecedor-obras-cdc-obrigacao-resultado.html",
source: "",
date: "2026-03-13T07:00:00"
},
{
 title: "ANPP Chega à Justiça Militar Brasileira",
  link: "direito-militar/anpp-justica-militar-acordo-nao-persecucao-penal-aplicacao.html",
source: "",
date: "2026-03-12T07:00:00"
},
{
    title: "Compliance Virou Escudo Jurídico das Empresas",
  link: "compliance/compliance-escudo-juridico-governanca-empresas-lei-anticorrupcao.html",
source: "",
date: "2026-03-10T07:00:00",
},
{
   title: "STJ Garante Dividendos ao Ex-Cônjuge Até Partilha Final",
    link: "direito-de-familia/stj-dividendos-ex-conjuge-cotista-anomalo-apuracao-haveres.html",
source: "",
 date: "2026-03-13T07:00:00"
},

];

function renderPrincipaisNoticias(){

const container = document.getElementById("principaisNoticias");

container.innerHTML = `

<ul class="lista-principais">

${principaisNoticias.map(n => `

<li class="noticia-item">

<a href="${n.link}" class="noticia-link">
${n.title}
</a>

<div class="noticia-info">
<span class="fonte">${n.source}</span>
<span class="tempo">${tempoRelativo(n.date)}</span>
</div>

</li>

`).join("")}

</ul>
`;

}

document.addEventListener("DOMContentLoaded", renderPrincipaisNoticias);

function tempoRelativo(date){

const now = new Date();
const post = new Date(date);
const diff = Math.floor((now - post)/1000);

const hours = Math.floor(diff/3600);
const minutes = Math.floor(diff/60);

if(minutes < 60) return `há ${minutes} minutos`;
if(hours < 24) return `há ${hours} horas`;

const days = Math.floor(hours/24);
return `há ${days} dias`;

}

function renderPrincipaisNoticias(){

const container = document.getElementById("principaisNoticias");

/* ORDENAR POR DATA (mais recente primeiro) */
principaisNoticias.sort((a,b) => new Date(b.date) - new Date(a.date));

container.innerHTML = `

<ul class="lista-principais">

${principaisNoticias.map(n => `

<li class="noticia-item">

<a href="${n.link}" class="noticia-link">
${n.title}
</a>

<div class="noticia-info">
<span class="fonte">${n.source}</span>
<span class="tempo">${tempoRelativo(n.date)}</span>
</div>

</li>

`).join("")}

</ul>
`;

}

document.addEventListener("DOMContentLoaded", renderPrincipaisNoticias);

