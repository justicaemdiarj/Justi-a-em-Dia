const posts = [
  
  

{ 
title: "Quem Denuncia Paga o Preço", 
description: "Ausência de proteção ao whistleblower perpetua cultura do silêncio nas organizações", 
description2: "O Brasil ainda não construiu um sistema efetivo de amparo ao denunciante de boa-fé", 
image: "img/quem-denuncia-paga-o-preco.webp", 
link: "compliance/quem-denuncia-paga-o-preco.html", 
date: "2026-06-23T22:00:00",
  section: "featured"},
  {
  title: "Promessas do Estado Que Não Chegam",
  description: "Políticas públicas falham na entrega de direitos à população mais vulnerável",
  description2: "O abismo entre a norma constitucional e a realidade do serviço público",
  image: "img/promessas-estado-que-nao-chegam.webp",
  link: "politica/promessas-estado-que-nao-chegam.html",
  date: "2026-06-22T15:00:00",
  section: "featured-secundario"
},
{
  title: "O Contrato Que Antecede o Casamento",
  description: "Pacto antenupcial ganha espaço como ferramenta de planejamento patrimonial",
  description2: "Regras claras antes do casamento reduzem litígios em divórcios",
  image: "img/contrato-que-antecede-casamento.webp",
  link: "direito-de-familia/contrato-que-antecede-casamento.html",
  date: "2026-06-16T21:00:00",
 section: "featured-terciario"
},
  {
 title: "Como o Direito Penal Enfrenta Estruturas do Crime",
image: "img/como-direito-penal-enfrenta-estruturas-crime.webp", link: "direito-penal/como-direito-penal-enfrenta-estruturas-crime.html",
date: "2026-06-09T07:00:00",
    section: "destaque"
  },
   {
title: "A Lei Protege Quem Ainda Não Nasceu",
image: "img/lei-protege-quem-ainda-nao-nasceu.webp", link: "direito-de-familia/lei-protege-quem-ainda-nao-nasceu.html",
date: "2026-06-09T07:00:00",
   section: "destaque"
  },
  {
title: "A Farda Não Suprime o Direito de se Defender",
image: "img/farda-nao-suprime-direito-defender.webp", link: "direito-militar/farda-nao-suprime-direito-defender.html",
date: "2026-06-09T07:00:00",
   section: "destaque"
  },
  {
title: "Deficiência No Trabalho É Direito Que a Lei Assegura",
image: "img/deficiencia-trabalho-direito-lei-assegura.webp", link: "direito-trabalhista/deficiencia-trabalho-direito-lei-assegura.html",
date: "2026-06-09T07:00:00",
 section: "veja"
  },
   {
title: "Prestação de Contas É Dever de Todo Servidor Público",
 image: "img/prestacao-contas-dever-servidor-publico.webp", link: "politica/prestacao-contas-dever-servidor-publico.html",
date: "2026-06-09T07:00:00",
   section: "veja"
  },
  {
 title: "Resolver Disputas Sem Julgamento Público No Brasil",
image: "img/resolver-disputas-sem-julgamento-publico-brasil.webp", link: "legislacao/resolver-disputas-sem-julgamento-publico-brasil.html",
date: "2026-06-09T07:00:00",
  section: "veja"
  },
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
  
{   title: "O Contrato Que Antecede o Casamento",
  link: "direito-de-familia/contrato-que-antecede-casamento.html",
  date: "2026-06-16T21:00:00"
},
{
  title: "Quando o Poder Vira Arma Corporativa",
  link: "direito-trabalhista/assedio-organizacional-poder-arma-corporativa.html",
  date: "2026-06-11T07:00:00"
},
{ title: "Quem Denuncia Paga o Preço", 
  link: "compliance/quem-denuncia-paga-o-preco.html",
  date: "2026-06-23T07:00:00" 
},
{   title: "Promessas do Estado Que Não Chegam",
  link: "politica/promessas-estado-que-nao-chegam.html",
  date: "2026-06-22T07:00:00" 
},
{
  title: "Negócios Fictícios na Mira da Lei",
  link: "direito-civil/negocios-ficticios-mira-da-lei.html",
  date: "2026-06-15T07:00:00"
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
title: "Regime De Bens Define o Futuro do Patrimônio Conjugal",
    link: "direito-de-familia/regime-bens-define-futuro-patrimonio-conjugal.html",
source: "",
date: "2026-06-08T07:00:00"
},
{
title: "Sem Controle Interno a Fraude Encontra Caminho Livre",
link: "compliance/controles-internos-prevencao-desvios-corporativos.html",
source: "",
date: "2026-06-09T07:00:00"
},
{
title: "Como Investigar Assédio Sem Destruir a Empresa",
link: "compliance/como-investigar-assedio-sem-destruir-empresa.html",
source: "",
date: "2026-06-04T03:00:00"
},
{
title: "Como o Direito Penal Enfrenta Estruturas do Crime",
  link: "direito-penal/como-direito-penal-enfrenta-estruturas-crime.html",
source: "",
date: "2026-06-09T07:00:00"
},
{
title: "O Contrato Que Antecede o Casamento",
link: "direito-de-familia/contrato-que-antecede-casamento.html",
source: "",
date: "2026-06-16T07:00:00"
},
{
title: "A Lei Protege Quem Ainda Não Nasceu",
 link: "direito-de-familia/lei-protege-quem-ainda-nao-nasceu.html",
source: "",
date: "2026-06-09T07:00:00"
},
{
 title: "Promessas do Estado Que Não Chegam",
  link: "politica/promessas-estado-que-nao-chegam.html",
source: "",
date: "2026-06-22T07:00:00"
},
{
    title: "Negócios Fictícios na Mira da Lei",
  link: "direito-civil/negocios-ficticios-mira-da-lei.html",
source: "",
date: "2026-06-15T07:00:00"
},
{
   title: "Prestação de Contas É Dever de Todo Servidor Público",
    link: "politica/prestacao-contas-dever-servidor-publico.html",
source: "",
date: "2026-06-09T07:00:00"
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

