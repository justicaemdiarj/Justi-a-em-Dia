const posts = [
  
  
{
  title: "Provas Obtidas Ilegalmente e Suas Consequências",
  description: "Teoria dos frutos da árvore envenenada e a contaminação probatória no processo penal",
  description2: "Constituição Federal veda provas ilícitas e protege garantias processuais do acusado",
  image: "img/provas-obtidas-ilegalmente-consequencias.webp",
  link: "direito-penal/provas-obtidas-ilegalmente-consequencias.html",
  date: "2026-04-16T12:00:00",
  section: "featured"
},
  {
  title: "Conformidade Digital como Escudo Corporativo",
  description: "LGPD e cibersegurança redefinindo a responsabilidade empresarial no ambiente digital",
  description2: "Como estruturar um programa de compliance digital eficiente e sustentável",
  image: "img/conformidade-digital-escudo-corporativo.webp",
  link: "compliance/conformidade-digital-escudo-corporativo.html",
  date: "2026-04-16T07:00:00",
  section: "featured-secundario"
},
{
  title: "Repercussão Geral e o Poder do STF",
  description: "Como o filtro constitucional do STF molda o sistema judiciário brasileiro",
  description2: "EC 45/2004 e o instituto processual que concentrou poder interpretativo no Supremo",
  image: "img/repercussao-geral-poder-stf-decisoes.webp",
  link: "jurisprudencia/repercussao-geral-poder-stf-decisoes.html",
  date: "2026-04-16T06:00:00",
 section: "featured-terciario"
},
  {
  title: "Proteção Legal ao Idoso no Brasil",
  image: "img/estatuto-idoso-protecao-legal-brasil.webp",
  link: "legislacao/estatuto-idoso-protecao-legal-brasil.html",
  date: "2026-04-16T06:00:00",
    section: "destaque"
  },
   {
  title: "Equilíbrio Fiscal como Imperativo Constitucional",
  image: "img/equilibrio-fiscal-imperativo-constitucional.webp",
  link: "politica/equilibrio-fiscal-imperativo-constitucional.html",
  date: "2026-04-16T09:00:00",
    section: "destaque"
  },
  {
  title: "Terceirização Irrestrita e os Riscos Trabalhistas",
  image: "img/terceirizacao-irrestrita-riscos-trabalhistas.webp",
  link: "direito-trabalhista/terceirizacao-irrestrita-riscos-trabalhistas.html",
  date: "2026-04-16T07:00:00",
    section: "destaque"

  },
  {
  title: "Afeto Negado Pode Gerar Reparação Civil",
  image: "img/abandono-afetivo-indenizacao-dano-moral.webp",
  link: "direito-de-familia/abandono-afetivo-indenizacao-dano-moral.html",
  date: "2026-04-16T11:00:00",
    section: "veja"
  },
  {
  title: "Contratos Sufocantes e o Direito à Revisão",
  image: "img/revisao-contratual-onerosidade-excessiva.webp",
  link: "direito-civil/revisao-contratual-onerosidade-excessiva.html",
  date: "2026-04-16T08:00:00",
    section: "veja"
  },
  {
   title: "Fuga do Dever Militar e Seus Reflexos Jurídicos",
  image: "img/desercao-consequencias-legais-militares.webp",
  link: "direito-militar/desercao-consequencias-legais-militares.html",
   date: "2026-04-16T08:00:00",
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
 title: "O TST que Muda as Regras do Trabalho",
  link: "jurisprudencia/tst-que-muda-as-regras-do-trabalho.html",
  date: "2026-04-09T07:00:00"
},
{
  title: "O Trabalho Ganhou Novas Regras Silenciosas",
  link: "legislacao/trabalho-ganhou-novas-regras-silenciosas.html",
  date: "2026-04-09T07:00:00"
},
{
  title: "Risco Ignorado É Passivo Acumulado",
  link: "compliance/risco-ignorado-e-passivo-acumulado.html",
  date: "2026-04-09T07:00:00"
},
{
  title: "Mesma Função Exige Mesmo Salário",
  link: "direito-trabalhista/mesma-funcao-exige-mesmo-salario.html",
  date: "2026-04-13T07:00:00"
},
{
  title: "A Confissão Que Pode Mudar Tudo",
  link: "direito-penal/confissao-que-pode-mudar-tudo.html",
  date: "2026-04-13T07:00:00"
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
title: "Três Poderes, Uma República em Disputa",
    link: "politica/tres-poderes-uma-republica-em-disputa.html",
source: "",
date: "2026-04-08T07:00:00"
},
{
title: "O Sistema Político que Resiste à Mudança",
  link: "politica/sistema-politico-que-resiste-a-mudanca.html",
source: "",
date: "2026-04-11T07:00:00"
},
{
title: "Corrupção Não Se Combate Só Com Prisão",
link: "compliance/corrupcao-nao-se-combate-so-com-prisao.html",
source: "",
date: "2026-04-11T03:00:00"
},
{
title: "A Confissão Que Pode Mudar Tudo",
  link: "direito-penal/confissao-que-pode-mudar-tudo.html",
source: "",
date: "2026-04-13T07:00:00"
},
{
title: "O Instrumento Que Pode Derrubar um Presidente",
link: "politica/instrumento-que-pode-derrubar-um-presidente.html",
source: "",
date: "2026-04-10T07:00:00"
},
{
title: "Dividir o Patrimônio Não Precisa Ser Guerra",
    link: "direito-de-familia/dividir-o-patrimonio-nao-precisa-ser-guerra.html",
source: "",
date: "2026-04-08T07:00:00"
},
{
 title: "Risco Ignorado É Passivo Acumulado",
  link: "compliance/risco-ignorado-e-passivo-acumulado.html",
source: "",
date: "2026-04-09T07:00:00"
},
{
    title: "Tempo de Posse Pode Virar Título de Dono",
  link: "direito-civil/tempo-de-posse-pode-virar-titulo-de-dono.html",
source: "",
date: "2026-04-13T07:00:00",
},
{
   title: "Ter a Chave Não É Ser o Dono",
    link: "direito-civil/ter-a-chave-nao-e-ser-o-dono.html",
source: "",
 date: "2026-04-11T07:00:00"
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

