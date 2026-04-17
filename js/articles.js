const posts = [
  
  
{
  title: "Compliance nas Pequenas Empresas Brasileiras",
description: "Por que toda pequena empresa precisa de compliance e como implementá-lo com recursos limitados", 
description2: "Lei Anticorrupção, LGPD e conformidade trabalhista no universo dos pequenos negócios",
  image: "img/compliance-pequenas-empresas-brasileiras.webp",
  link: "compliance/compliance-pequenas-empresas-brasileiras.html",
  date: "2026-04-17T12:00:00",
  section: "featured"
},
  {
  title: "O STF Como Árbitro da Transformação Social",
  description: "Como as decisões do STF moldam direitos, transformam relações sociais e desafiam a democracia", 
  description2: "Ativismo judicial, controle de constitucionalidade e legitimidade democrática do Supremo", 
  image: "img/stf-arbitro-transformacao-social-decisoes-impacto.webp", 
  link: "jurisprudencia/stf-arbitro-transformacao-social-decisoes-impacto.html", 
  date: "2026-04-17T07:00:00",
  section: "featured-secundario"
},
{
 title: "Improbidade Administrativa Sob Novo Regramento Legal", 
 description: "Como a Lei nº 14.230 de 2021 reformulou a responsabilização de agentes públicos no Brasil", 
 description2: "Dolo específico, prescrição e novo papel do Ministério Público na ação de improbidade", 
 image: "img/improbidade-administrativa-novo-regramento-legal.webp", 
 link: "legislacao/improbidade-administrativa-novo-regramento-legal.html", 
 date: "2026-04-17T07:00:00",
 section: "featured-terciario"
},
  {
title: "Corrupção Sistêmica e a Resposta do Estado Brasileiro",
image: "img/corrupcao-sistemica-resposta-estado-brasileiro.webp",
link: "politica/corrupcao-sistemica-resposta-estado-brasileiro.html",
  date: "2026-04-17T06:00:00",
    section: "destaque"
  },
   {
title: "Acidente Laboral e a Responsabilidade Patronal no Brasil",
image: "img/acidente-laboral-responsabilidade-patronal-brasil.webp", 
link: "direito-trabalhista/acidente-laboral-responsabilidade-patronal-brasil.html",
  date: "2026-04-17T09:00:00",
    section: "destaque"
  },
  {
title: "Sucessão Familiar e Estratégia Patrimonial no Brasil",
image: "img/sucessao-familiar-estrategia-patrimonial-brasil.webp", 
link: "direito-de-familia/sucessao-familiar-estrategia-patrimonial-brasil.html",
  date: "2026-04-17T09:00:00",
    section: "destaque"
  },
  {
  title: "Cadeia de Custódia e a Prova Penal Legítima",
  image: "img/cadeia-custodia-prova-penal-legitima.webp",
  link: "direito-penal/cadeia-custodia-prova-penal-legitima.html",
  date: "2026-04-17T11:00:00",
    section: "veja"
  },
  {
  title: "Proteção Consumerista no Ordenamento Civil Brasileiro",
 image: "img/protecao-consumerista-ordenamento-civil-brasileiro.webp",
  link: "direito-civil/protecao-consumerista-ordenamento-civil-brasileiro.html",
  date: "2026-04-17T08:00:00",
    section: "veja"
  },
  {
  title: "Disciplina Militar e Suas Fronteiras Jurídicas",
 image: "img/transgressoes-disciplinares-limites-direito-militar.webp",
  link: "direito-militar/transgressoes-disciplinares-limites-direito-militar.html",
   date: "2026-04-17T08:00:00",
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

