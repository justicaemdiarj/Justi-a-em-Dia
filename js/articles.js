const posts = [
  
{
  title: "Artigos do Código Civil Que Você Precisa Dominar",
  description: "Revisar o Código Civil exige método e foco nos dispositivos de maior incidência forense.",
  description2: "Conheça os artigos prioritários para concursos, exames e a prática profissional.",
  image: "img/artigos-codigo-civil-que-voce-precisa-dominar.webp",
  link: "direito-civil/artigos-codigo-civil-que-voce-precisa-dominar.html",
  date: "2026-03-26T09:00:00",
  section: "featured"
},
  {
  title: "Construir Compliance do Zero é Possível",
  description: "Criar uma cultura de compliance exige diagnóstico, liderança e estruturas robustas.",
  description2: "Entenda como transformar integridade em vantagem competitiva real.",
  image: "img/construir-compliance-do-zero-e-possivel.webp",
  link: "compliance/construir-compliance-do-zero-e-possivel.html",
  date: "2026-03-26T08:00:00",
  section: "featured-secundario"
},
{
  title: "Ação Penal Militar e o Direito de Recorrer",
  description: "A justiça militar opera sob legislação própria e exige técnica especializada.",
  description2: "Entenda os recursos disponíveis no processo penal castrense brasileiro.",
  image: "img/acao-penal-militar-direito-de-recorrer.webp",
  link: "direito-militar/acao-penal-militar-direito-de-recorrer.html",
  date: "2026-03-26T07:00:00",
 section: "featured-terciario"
},
  {
    title: "Quando o Afeto Constrói Vínculos Jurídicos Reais",
  image: "img/quando-afeto-constroi-vinculos-juridicos-reais.webp",
  link: "direito-de-familia/quando-afeto-constroi-vinculos-juridicos-reais.html",
  date: "2026-03-26T10:00:00",
    section: "destaque"
  },
   {
     title: "Polícia Federal na Linha de Frente Digital",
  image: "img/policia-federal-linha-de-frente-digital.webp",
  link: "direito-penal/policia-federal-linha-de-frente-digital.html",
  date: "2026-03-26T09:00:00",
    section: "destaque"
  },
  {
  title: "Jurisprudência Como Fonte Viva do Direito",
    image: "img/jurisprudencia-fonte-viva-direito-funcoes-precedentes.webp",
    link: "jurisprudencia/jurisprudencia-fonte-viva-direito-funcoes-precedentes.html",
    date: "2026-03-26T10:00:00",
    section: "destaque"
  },
  {
   
   title: "Legislativo Como Guardião dos Direitos Coletivos",
    image: "img/legislativo-guardiao-direitos-coletivos-seguranca-juridica.webp",
    link: "legislacao/legislativo-guardiao-direitos-coletivos-seguranca-juridica.html",
    date: "2026-03-26T09:00:00",
    section: "veja"
  },
  {
   title: "Pragmatismo Político Sobrepõe Divergências Históricas",
    image: "img/pragmatismo-politico-sobrpoe-divergencias-historicas-filiacao-pl-parana-2026.webp",
    link: "politica/pragmatismo-politico-sobrpoe-divergencias-historicas-filiacao-pl-parana-2026.html",
    date: "2026-03-26T08:00:00",
    section: "veja"
  },
  {
  title: "Segurança no Trabalho Como Direito Fundamental",
    image: "img/seguranca-trabalho-direito-fundamental-prevencao-acidentes-doencas-ocupacionais.webp",
    link: "direito-trabalhista/seguranca-trabalho-direito-fundamental-prevencao-acidentes-doencas-ocupacionais.html",
    date: "2026-03-26T09:00:00",
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
 title: "Governar em Silêncio Não Garante Reeleição",
  link: "politica/governo-federal-comunicacao-realizacoes-politicas-publicas-2026.html",
  date: "2026-03-24T07:00:00"
},
{
    title: "MDB Perde Quadro e PSB Ganha Candidatura Senatorial",
    link: "politica/desfiliacao-mdb-psb-senado-sao-paulo-eleicoes-2026.html",
    date: "2026-03-23T07:00:00"
},
{
 title: "Governo Abaixo da Régua Histórica da Reeleição",
  link: "politica/governo-abaixo-regua-historica-reeleicao.html",
  date: "2026-03-21T07:00:00"
},
{
 title: "Prerrogativas Presidenciais Resistem à Custódia Judicial",
  link: "politica/prerrogativas-presidenciais-resistem-custodia-judicial.html",
  date: "2026-03-20T07:00:00"
},
 {
   title: "Compliance como Pilar da Estratégia Corporativa Moderna",
    link: "compliance/compliance-pilar-estrategia-corporativa-moderna.html",
    date: "2026-03-24T07:00:00"
},

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
title: "ECA Digital Protege Crianças no Ambiente Virtual  ",
    link: "direito-de-familia/eca-digital-vigor-marco-2026-protecao-criancas-adolescentes-internet.html",
source: "",
date: "2026-03-17T07:00:00"
},

{
title: "PL Quer Pragmatismo Para Vencer em 2026",
  link: "politica/pl-pragmatismo-agenda-eleicoes-2026-estrategia-eleitoral-oposicao.html",
source: "",
date: "2026-03-18T07:00:00"
},
{
title: "Farda e Integridade Selam Pacto de Conformidade",
link: "compliance/bombeiros-militar-cge-compliance-publico-integridade-governanca.html",
source: "",
date: "2026-03-23T03:00:00"
},
{
title: "SP Reestrutura Compliance Policial Após Escândalo",
  link: "compliance/sp-decreto-reestruturacao-compliance-policias-corrupcao-integridade.html",
source: "",
date: "2026-03-18T07:00:00"
},
{
title: "Prerrogativas Presidenciais Resistem à Custódia Judicial",
link: "politica/prerrogativas-presidenciais-resistem-custodia-judicial.html",
source: "",
date: "2026-03-20T07:00:00"
},
{
title: "Divórcio Unilateral em Cartório Transforma Direito Familiar",
    link: "direito-de-familia/divorcio-unilateral-cartorio-transforma-direito-familiar.html",
source: "",
date: "2026-03-20T07:00:00"
},
{
 title: "Compliance como Pilar da Estratégia Corporativa Moderna",
  link: "compliance/compliance-pilar-estrategia-corporativa-moderna.html",
source: "",
date: "2026-03-24T07:00:00"
},
{
    title: "MDB Perde Quadro e PSB Ganha Candidatura Senatorial",
  link: "politica/desfiliacao-mdb-psb-senado-sao-paulo-eleicoes-2026.html",
source: "",
date: "2026-03-23T07:00:00",
},
{
   title: "Reserva de Imóvel na Planta e a Custódia Notarial",
    link: "direito-de-familia/reserva-imovel-planta-custodia-notarial-escrow-incorporacao.html",
source: "",
 date: "2026-03-24T07:00:00"
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

