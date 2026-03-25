const posts = [
  
{
  title: "Reforma Militar por Incapacidade e Acidente de Serviço",
  description: "A reforma por invalidez é um direito do militar acometido por enfermidade no exercício da função pública",
  description2: "Entenda o arcabouço jurídico e as tendências jurisprudenciais do direito militar brasileiro",
  image: "img/reforma-militar-invalidez-acidente-servico.webp",
  link: "direito-militar/reforma-militar-invalidez-acidente-servico.html",
    date: "2026-03-25T08:00:00",
  section: "featured"
},
  {
  title: "Contratos: A Espinha Dorsal do Direito Civil",
  description: "A teoria geral dos contratos sustenta todo negócio jurídico no direito civil brasileiro",
  description2: "Princípios, requisitos e vícios que toda parte contratante precisa conhecer",
  image: "img/teoria-geral-contratos-principios-requisitos.webp",
  link: "direito-civil/teoria-geral-contratos-principios-requisitos.html",
    date: "2026-03-25T07:00:00",
  section: "featured-secundario"
},
{
  title: "Lei Celular nas Escolas sob Avaliação Nacional",
  description: "MEC lança levantamento com mais de 8 mil escolas para medir os efeitos reais da Lei 15.100/2025 no cotidiano escolar brasileiro",
  description2: "Prazo para participação se encerra em 2 de abril e resultados orientarão decisões de política pública educacional",
  image: "img/lei-celular-escolas-avaliacao-nacional-mec.webp",
  link: "legislacao/lei-celular-escolas-avaliacao-nacional-mec.html",
  date: "2026-03-25T10:00:00",
 section: "featured-terciario"
},
  {
  title: "Herança Não Planejada Vira Batalha Judicial",
  image: "img/direito-sucessorio-planejamento-testamento-vocacao-hereditaria.webp",
  link: "direito-de-familia/direito-sucessorio-planejamento-testamento-vocacao-hereditaria.html",
  date: "2026-03-25T09:00:00",
    section: "destaque"
  },
   {
     title: "O Mapa dos Crimes que Assombram o Brasil",
      image: "img/tipos-penais-crimes-especie-homicidio-furto-roubo-estelionato-hediondos.webp",
      link: "direito-penal/tipos-penais-crimes-especie-homicidio-furto-roubo-estelionato-hediondos.html",
      date: "2026-03-25T09:00:00",
    section: "destaque"
  },
  {
   title: "Máquinas que Trabalham e Quem Protege o Humano?",
  image: "img/inteligencia-artificial-futuro-trabalho-direitos-trabalhistas.webp",
  link: "direito-trabalhista/inteligencia-artificial-futuro-trabalho-direitos-trabalhistas.html",
  date: "2026-03-25T08:00:00",
    section: "destaque"
  },
  {
   
  title: "Renúncia no Rio de Janeiro Sob Pressão Política",
    image: "img/renuncia-governador-rj-pressao-politica-julgamento-tse.webp",
    link: "politica/renuncia-governador-rj-pressao-politica-julgamento-tse.html",
    date: "2026-03-25T07:00:00",
    section: "veja"
  },
  {
  title: "Distrato Imobiliário Rumo ao Precedente Vinculante no STJ",
  image: "img/distrato-imobiliario-precedente-vinculante-stj.webp",
  link: "jurisprudencia/distrato-imobiliario-precedente-vinculante-stj.html",
  date: "2026-03-25T09:00:00",
    section: "veja"
  },
  {
  title: "Compliance Como Escudo Corporativo no Brasil",
    image: "img/compliance-escudo-corporativo-futuro-integridade-brasil.webp",
    link: "compliance/compliance-escudo-corporativo-futuro-integridade-brasil.html",
    date: "2026-03-25T07:00:00",
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

