const posts = [
  
  

{  
  title: "Licitação Íntegra É Dinheiro Público Protegido",
  description: "A integridade nas licitações públicas é imperativo normativo reforçado pela Lei nº 14.133/2021 e pela Lei Anticorrupção",
  description2: "Entenda os mecanismos de prevenção, os esquemas de fraude identificados pelo TCU e o papel do compliance nas contratações",
  image: "img/licitacao-integra-dinheiro-publico-protegido.webp",
  link: "compliance/licitacao-integra-dinheiro-publico-protegido.html",
  date: "2026-05-26T11:00:00",
  section: "featured"
},
  {
title: "Prisão Antes da Sentença e Seus Limites", 
description: "A jurisprudência brasileira sobre prisão preventiva revela tensão entre excepcionalidade legal e cultura do encarceramento", 
description2: "STF e STJ fixam balizas constitucionais para a custódia cautelar no processo penal", 
image: "img/prisao-antes-sentenca-seus-limites.webp", 
link: "jurisprudencia/prisao-antes-sentenca-seus-limites.html", 
date: "2026-05-25T10:00:00",
  section: "featured-secundario"
},
{
title: "O Acordo Que Evita o Banco dos Réus", 
description: "O Acordo de Não Persecução Penal transformou a lógica da persecução criminal com requisitos e limites definidos pelo CPP", 
description2: "Entenda as controvérsias jurisprudenciais e os riscos de aplicação distorcida do instituto no processo penal brasileiro", 
image: "img/acordo-que-evita-banco-dos-reus.webp", 
link: "direito-penal/acordo-que-evita-banco-dos-reus.html", 
date: "2026-05-25T18:00:00",
 section: "featured-terciario"
},
  {
 title: "A Lei Que Nomeia o Ódio Letal Contra Mulheres",
image: "img/lei-que-nomeia-odio-letal-contra-mulheres.webp", 
link: "legislacao/lei-que-nomeia-odio-letal-contra-mulheres.html",
date: "2026-05-25T13:00:00",
    section: "destaque"
  },
   {
title: "O Orçamento Como Radiografia do Poder",
image: "img/orcamento-radiografia-do-poder.webp", 
link: "politica/orcamento-radiografia-do-poder.html", 
date: "2026-05-25T14:00:00",
   section: "destaque"
  },
  {
title: "Descanso Negado e Direito Ignorado",
image: "img/descanso-negado-direito-ignorado.webp", 
link: "direito-trabalhista/descanso-negado-direito-ignorado.html", 
date: "2026-05-25T17:00:00",
   section: "destaque"
  },
  {
title: "Quem Protege a Criança Quando a Família Falha",
 image: "img/quem-protege-crianca-quando-familia-falha.webp", 
 link: "direito-de-familia/quem-protege-crianca-quando-familia-falha.html", 
 date: "2026-05-25T17:00:00",
 section: "veja"
  },
   {
 title: "Nome Sujo Sem Dever Equivale a Dano Certo",
image: "img/nome-sujo-sem-dever-equivale-a-dano-certo.webp", 
link: "direito-civil/nome-sujo-sem-dever-equivale-a-dano-certo.html",
date: "2026-05-25T19:00:00",
   section: "veja"
  },
  {
title: "Quando as Forças Armadas Assumem as Ruas",
image: "img/quando-forcas-armadas-assumem-ruas.webp", 
link: "direito-militar/quando-forcas-armadas-assumem-ruas.html", 
date: "2026-05-25T18:00:00",
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
  
{ title: "Descanso Negado e Direito Ignorado", 
  link: "direito-trabalhista/descanso-negado-direito-ignorado.html", 
  date: "2026-05-25T07:00:00" 
},
{ title: "O Acordo Que Evita o Banco dos Réus", 
  link: "direito-penal/acordo-que-evita-banco-dos-reus.html", 
  date: "2026-05-25T07:00:00" 
},
{ title: "Prisão Antes da Sentença e Seus Limites", 
  link: "jurisprudencia/prisao-antes-sentenca-seus-limites.html", 
  date: "2026-05-25T10:00:00" 
},
{
  title: "Vigilância Permanente Como Escudo Jurídico Corporativo",
  link: "compliance/vigilancia-permanente-escudo-juridico-corporativo.html",
  date: "2026-05-25T11:00:00"
},
{
  title: "KYC e a Diligência Devida Sobre Parceiros",
  link: "compliance/kyc-verificacao-terceiros-due-diligence-compliance-lavagem.html",
  date: "2026-05-22T07:00:00"
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
title: "Pluralidade de Crimes e Unidade de Pena",
    link: "direito-penal/concurso-material-crime-continuado-pluralidade-pena-dosimetria.html",
source: "",
date: "2026-05-21T07:00:00"
},
{
title: "Igualdade Racial no Brasil Além do Papel",
  link: "legislacao/igualdade-racial-brasil-alem-do-papel.html",
source: "",
date: "2026-05-14T07:00:00"
},
{
title: "Conflitos de Interesse e Integridade Corporativa",
link: "compliance/conflito-interesse-gestao-integridade-governanca-corporativa.html",
source: "",
date: "2026-05-19T03:00:00"
},
{
title: "Saneamento Básico e a Lei que Mudou Tudo",
  link: "legislacao/marco-legal-saneamento-lei-14026-concessao-agua-esgoto.html",
source: "",
date: "2026-05-22T07:00:00"
},
{
title: "Jornada 12x36 Entre a Flexibilidade e o Esgotamento",
link: "direito-trabalhista/jornada-12x36-flexibilidade-saude-trabalhador-clt.html",
source: "",
date: "2026-05-19T07:00:00"
},
{
title: "A Lei Que Nomeia o Ódio Letal Contra Mulheres",
 link: "legislacao/lei-que-nomeia-odio-letal-contra-mulheres.html",
source: "",
date: "2026-05-25T12:00:00"
},
{
 title: "Animal de Estimação na Dissolução do Casamento",
  link: "direito-de-familia/guarda-pets-separacao-animais-estimacao-dissolucao-conjugal.html",
source: "",
date: "2026-05-22T07:00:00"
},
{
    title: "Descanso Negado e Direito Ignorado",
  link: "direito-trabalhista/descanso-negado-direito-ignorado.html",
source: "",
date: "2026-05-25T07:00:00",
},
{
   title: "Laje Urbana e Acesso à Propriedade Formal",
    link: "direito-civil/direito-laje-regularizacao-propriedade-habitacao-urbana.html",
source: "",
date: "2026-05-19T07:00:00"
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

