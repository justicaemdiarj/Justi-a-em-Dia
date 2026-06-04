const posts = [
  
  

{ 
title: "Como Investigar Assédio Sem Destruir a Empresa", 
description: "As investigações internas de assédio corporativo exigem método independência e cautela jurídica para proteger vítimas", 
description2: "Entenda os princípios fundamentais, a coleta de prova e os impactos econômicos de investigações mal conduzidas", 
image: "img/como-investigar-assedio-sem-destruir-empresa.webp", 
link: "compliance/como-investigar-assedio-sem-destruir-empresa.html", 
date: "2026-06-04T07:00:00",
  section: "featured" },
  {
title: "O Medo Constante Também É Crime No Brasil", 
description: "O stalking foi tipificado no artigo 147-A do Código Penal criminalizando a perseguição reiterada por qualquer meio", 
description2: "Entenda as qualificadoras, o stalking digital e os instrumentos de proteção imediata às vítimas de perseguição", 
image: "img/medo-constante-tambem-e-crime-brasil.webp", 
link: "direito-penal/medo-constante-tambem-e-crime-brasil.html",
date: "2026-06-02T07:00:00",
  section: "featured-secundario"
},
{
title: "A Oportunidade Perdida Que Gera Direito à Indenização", 
description: "A teoria da perda de uma chance reconhece a indenizabilidade da supressão de oportunidades reais por conduta ilícita", 
description2: "Entenda os fundamentos jurídicos, o STJ e a aplicação em erros médicos e responsabilidade do advogado", 
image: "img/oportunidade-perdida-gera-direito-indenizacao.webp", 
link: "direito-civil/oportunidade-perdida-gera-direito-indenizacao.html", 
date: "2026-06-01T07:00:00",
 section: "featured-terciario"
},
  {
title: "Demissão Irregular Obriga o Empregador a Reintegrar",
image: "img/demissao-irregular-obriga-empregador-reintegrar.webp",
link: "direito-trabalhista/demissao-irregular-obriga-empregador-reintegrar.html",
date: "2026-06-02T07:00:00",
    section: "destaque"
  },
   {
title: "A Maioria Não Pode Tudo Numa Democracia Real",
image: "img/maioria-nao-pode-tudo-democracia-real.webp", 
link: "politica/maioria-nao-pode-tudo-democracia-real.html",
date: "2026-06-02T07:00:00",
   section: "destaque"
  },
  {
title: "A Lei Que Mudou As Regras Do Crime No Brasil",
image: "img/lei-que-mudou-regras-crime-brasil.webp", 
link: "legislacao/lei-que-mudou-regras-crime-brasil.html", 
date: "2026-06-02T07:00:00",
   section: "destaque"
  },
  {
title: 'Os Tribunais Constroem a Lei de Dados Na Prática',
image: "img/tribunais-constroem-lei-dados-pratica.webp", 
link: "jurisprudencia/tribunais-constroem-lei-dados-pratica.html",
date: "2026-06-02T07:00:00",
 section: "veja"
  },
   {
title: "O Inimigo Que Usa Crachá e Conhece a Senha",
image: "img/inimigo-que-usa-cracha-conhece-senha.webp", 
link: "compliance/inimigo-que-usa-cracha-conhece-senha.html",
date: "2026-06-02T07:00:00",
   section: "veja"
  },
  {
title: 'O Militar Que É Transferido Sem Pedir Para Ir',
image: "img/militar-transferido-sem-pedir-para-ir.webp", 
link: "direito-militar/militar-transferido-sem-pedir-para-ir.html",
date: "2026-06-02T07:00:00",
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
{ title: "A Oportunidade Perdida Que Gera Direito à Indenização", 
  link: "direito-civil/oportunidade-perdida-gera-direito-indenizacao.html",
  date: "2026-06-01T07:00:00" 
},
{ title: "Como Investigar Assédio Sem Destruir a Empresa", 
  link: "compliance/como-investigar-assedio-sem-destruir-empresa.html", 
  date: "2026-06-04T07:00:00" 
},
{
  title: "Vigilância Permanente Como Escudo Jurídico Corporativo",
  link: "compliance/vigilancia-permanente-escudo-juridico-corporativo.html",
  date: "2026-05-25T11:00:00"
},
{ title: "Justiça Sem Condenação Para Crimes de Menor Potencial", 
  link: "direito-penal/justica-sem-condenacao-crimes-menor-potencial.html", 
  date: "2026-05-28T11:00:00" 
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
title: "O Dinheiro Público Que Não Presta Contas",
link: "politica/dinheiro-publico-que-nao-presta-contas.html",
source: "",
date: "2026-05-28T07:00:00"
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

