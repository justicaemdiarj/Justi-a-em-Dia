const posts = [
  
  

{  
title: "Animal de Estimação na Dissolução do Casamento", 
description: "O STJ e os tribunais estaduais constroem critérios que tratam pets como seres com interesses próprios nas disputas de guarda pós-separação", 
description2: "Bem-estar animal, vínculo afetivo e acordos extrajudiciais são os pilares da solução jurídica mais equilibrada para o tema", 
image: "img/guarda-pets-separacao-animais-estimacao-dissolucao-conjugal.webp", 
link: "direito-de-familia/guarda-pets-separacao-animais-estimacao-dissolucao-conjugal.html", 
date: "2026-05-22T12:00:00",
  section: "featured"
},
  {
title: "Pluralidade de Crimes e Unidade de Pena", 
description: "A distinção entre concurso material e crime continuado pode significar décadas de diferença na pena do condenado", 
description2: "Dosimetria, execução penal e criminalidade digital tornam o tema mais relevante do que nunca no direito penal contemporâneo", 
image: "img/concurso-material-crime-continuado-pluralidade-pena-dosimetria.webp", 
link: "direito-penal/concurso-material-crime-continuado-pluralidade-pena-dosimetria.html", 
date: "2026-05-21T07:00:00",
  section: "featured-secundario"
},
{
title: "Vida em Condomínio e Litígios de Convivência", 
description: "Ruído, inadimplência e animais de estimação lideram os conflitos condominiais que chegam ao Judiciário brasileiro todos os anos", 
description2: "Síndico, convenção condominial e mediação são os pilares da resolução de disputas entre condôminos", 
image: "img/condominios-conflitos-vizinhos-sindico-convencao-direito-civil.webp", 
link: "direito-civil/condominios-conflitos-vizinhos-sindico-convencao-direito-civil.html", 
date: "2026-05-20T20:00:00",
 section: "featured-terciario"
},
  {
title: "KYC e a Diligência Devida Sobre Parceiros",
 image: "img/kyc-verificacao-terceiros-due-diligence-compliance-lavagem.webp", 
 link: "compliance/kyc-verificacao-terceiros-due-diligence-compliance-lavagem.html",
date: "2026-05-22T09:00:00",
    section: "destaque"
  },
   {
title: 'Lei Maria da Penha e os Precedentes Judiciais',
image: "img/jurisprudencia-violencia-domestica-lei-maria-penha-stf-stj.webp", 
link: "jurisprudencia/jurisprudencia-violencia-domestica-lei-maria-penha-stf-stj.html",
date: "2026-05-22T15:00:00",
   section: "destaque"
  },
  {
 title: "Omissão Militar e o Dever de Agir em Serviço",
 image: "img/omissao-servico-responsabilidade-penal-militar-dever-agir.webp", 
 link: "direito-militar/omissao-servico-responsabilidade-penal-militar-dever-agir.html",
date: "2026-05-22T13:00:00",
   section: "destaque"
  },
  {
title: "Segurança Pública Entre o Estado e a Violência", 
image: "img/seguranca-publica-politica-violencia-estado-crime-organizado.webp", 
link: "politica/seguranca-publica-politica-violencia-estado-crime-organizado.html",
date: "2026-05-22T08:00:00",
 section: "veja"
  },
   {
title: 'Saneamento Básico e a Lei que Mudou Tudo',
image: "img/marco-legal-saneamento-lei-14026-concessao-agua-esgoto.webp", 
link: "legislacao/marco-legal-saneamento-lei-14026-concessao-agua-esgoto.html", 
date: "2026-05-22T11:00:00",
   section: "veja"
  },
  {
title: "Pausa no Trabalho e Seus Efeitos na Jornada",
image: "img/intervalo-intrajornada-efeitos-clt-reforma-trabalhista-jornada.webp", 
link: "direito-trabalhista/intervalo-intrajornada-efeitos-clt-reforma-trabalhista-jornada.html",
date: "2026-05-22T07:00:00",
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
  
{ title: "Animal de Estimação na Dissolução do Casamento", 
  link: "direito-de-familia/guarda-pets-separacao-animais-estimacao-dissolucao-conjugal.html", 
  date: "2026-05-22T12:00:00" 
},
{
  title: "Fake News, Plataformas Digitais e o Dilema Regulatório",
  link: "politica/fake-news-plataformas-digitais-dilema-regulatorio.html",
  date: "2026-05-14T07:00:00"
},
{
  title: "Imprensa, Poder e Democracia em Crise",
  link: "politica/papel-midia-imprensa-democracia-poder-comunicacao.html",
  date: "2026-05-19T07:00:00"
},
{
  title: "Fixação da Pena e Arbítrio Judicial Controlado",
  link: "direito-penal/dosimetria-pena-fixacao-individualizacao-sentenca-criminal.html",
  date: "2026-05-19T07:00:00"
},
{
  title: "Herança Digital e os Bens do Século XXI",
  link: "direito-de-familia/patrimonio-digital-sucessao-heranca-bens-virtuais.html",
  date: "2026-05-19T07:00:00"
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
title: "Democracia sob Pressão da Fragmentação Política Nacional",
    link: "politica/polarizacao-politica-instituicoes-democracia-brasileira.html",
source: "",
date: "2026-05-12T07:00:00"
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
title: "Auditoria Interna Independente como Escudo Corporativo",
  link: "compliance/investigacoes-corporativas-independentes-governanca-empresarial.html",
source: "",
date: "2026-05-12T07:00:00"
},
{
title: "Jornada 12x36 Entre a Flexibilidade e o Esgotamento",
link: "direito-trabalhista/jornada-12x36-flexibilidade-saude-trabalhador-clt.html",
source: "",
date: "2026-05-19T07:00:00"
},
{
title: "Antitruste e Governança Competitiva nas Empresas",
    link: "compliance-concorrencial-antitruste-governanca-competitiva.html",
source: "",
date: "2026-05-18T07:00:00"
},
{
 title: "Quando o Crime Não Pode Existir de Fato",
  link: "direito-penal/crime-impossivel-limites-punicao-direito-penal.html",
source: "",
date: "2026-05-12T07:00:00"
},
{
    title: "Namoro Sério ou União Estável? O Direito Decide",
  link: "direito-de-familia/namoro-qualificado-uniao-estavel-direitos-patrimoniais.html",
source: "",
date: "2026-05-13T07:00:00",
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

