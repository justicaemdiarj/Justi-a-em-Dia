const posts = [
  
  

{  
title: "Vida em Condomínio e Litígios de Convivência", 
description: "Ruído, inadimplência e animais de estimação lideram os conflitos condominiais que chegam ao Judiciário brasileiro todos os anos", 
description2: "Síndico, convenção condominial e mediação são os pilares da resolução de disputas entre condôminos", 
image: "img/condominios-conflitos-vizinhos-sindico-convencao-direito-civil.webp", 
link: "direito-civil/condominios-conflitos-vizinhos-sindico-convencao-direito-civil.html", 
date: "2026-05-20T20:00:00",
  section: "featured"
},
  {
  title: "Herança Digital e os Bens do Século XXI",
  description: "O patrimônio digital na sucessão inclui criptomoedas, contas em plataformas e direitos autorais que o Código Civil ainda não sabe como transmitir",
  description2: "A ausência de legislação específica deixa herdeiros reféns das políticas das big techs e das senhas que morreram com o titular",
  image: "img/patrimonio-digital-sucessao-heranca-bens-virtuais.webp",
  link: "direito-de-familia/patrimonio-digital-sucessao-heranca-bens-virtuais.html",
  date: "2026-05-19T07:00:00",
  section: "featured-secundario"
},
{
  title: "Conflitos de Interesse e Integridade Corporativa",
  description: "A gestão de conflitos de interesse é pilar do compliance e protege a organização de riscos reputacionais e sanções regulatórias",
  description2: "Declaração proativa, canais de denúncia e política interna robusta são os instrumentos essenciais de prevenção",
  image: "img/conflito-interesse-gestao-integridade-governanca-corporativa.webp",
  link: "compliance/conflito-interesse-gestao-integridade-governanca-corporativa.html",
  date: "2026-05-19T07:00:00",
 section: "featured-terciario"
},
  {
 title: "Liberdade de Expressão e Seus Limites Judiciais",
 image: "img/liberdade-expressao-limites-judiciais-stf-discurso-odio.webp", 
 link: "jurisprudencia/liberdade-expressao-limites-judiciais-stf-discurso-odio.html",
  date: "2026-05-19T07:00:00",
    section: "destaque"
  },
   {
title: "Prisão Disciplinar Militar e a Constituição",
image: "img/prisao-disciplinar-militar-constitucionalidade-limites-direitos.webp", 
link: "direito-militar/prisao-disciplinar-militar-constitucionalidade-limites-direitos.html", 
  date: "2026-05-19T07:00:00",
   section: "destaque"
  },
  {
  title: "Imprensa, Poder e Democracia em Crise",
  image: "img/papel-midia-imprensa-democracia-poder-comunicacao.webp",
  link: "politica/papel-midia-imprensa-democracia-poder-comunicacao.html",
  date: "2026-05-19T07:00:00",
   section: "destaque"
  },
  {
  title: "Locação Urbana e os Direitos do Inquilino",
  image: "img/lei-inquilinato-locacao-urbana-direitos-inquilino-locador.webp",
  link: "legislacao/lei-inquilinato-locacao-urbana-direitos-inquilino-locador.html",
  date: "2026-05-19T07:00:00",
 section: "veja"
  },
   {
  title: "Jornada 12x36 Entre a Flexibilidade e o Esgotamento",
 image: "img/jornada-12x36-flexibilidade-saude-trabalhador-clt.webp",
  link: "direito-trabalhista/jornada-12x36-flexibilidade-saude-trabalhador-clt.html",
  date: "2026-05-19T07:00:00",
   section: "veja"
  },
  {
 title: "Laje Urbana e Acesso à Propriedade Formal",
 image: "img/direito-laje-regularizacao-propriedade-habitacao-urbana.webp",
  link: "direito-civil/direito-laje-regularizacao-propriedade-habitacao-urbana.html",
  date: "2026-05-19T07:00:00",
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
  
{
  title: "Exclusão Ilegal de Militar e Direito ao Retorno",
  link: "direito-militar/exclusao-ilegal-militar-direito-retorno.html",
  date: "2026-05-14T07:00:00"
},
{
  title: "Fake News, Plataformas Digitais e o Dilema Regulatório",
  link: "politica/fake-news-plataformas-digitais-dilema-regulatorio.html",
  date: "2026-05-14T07:00:00"
},
{
  title: "Igualdade Racial no Brasil Além do Papel",
  link: "legislacao/igualdade-racial-brasil-alem-do-papel.html",
  date: "2026-05-14T07:00:00"
},
{
  title: "Distinguishing e a Arte de Superar Precedentes",
  link: "jurisprudencia/distinguishing-arte-superar-precedentes.html",
  date: "2026-05-14T07:00:00"
},
{
  title: "Verificação de Fornecedores e Risco Corporativo no Brasil",
  link: "compliance/verificacao-fornecedores-risco-corporativo-brasil.html",
  date: "2026-05-14T07:00:00"
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
title: "Crise Institucional e o Equilíbrio Republicano",
  link: "politica/crise-institucional-poderes-equilibrio-republica.html",
source: "",
date: "2026-05-11T07:00:00"
},
{
title: "Constitucionalismo e os Limites do Poder Político",
link: "politica/constitucionalismo-limites-poder-politico.html",
source: "",
date: "2026-05-06T03:00:00"
},
{
title: "Auditoria Interna Independente como Escudo Corporativo",
  link: "compliance/investigacoes-corporativas-independentes-governanca-empresarial.html",
source: "",
date: "2026-05-12T07:00:00"
},
{
title: "Controles Internos e a Matriz de Riscos Corporativa",
link: "compliance/matriz-riscos-controles-internos-governanca-corporativa.html",
source: "",
date: "2026-05-11T07:00:00"
},
{
title: "Riscos Corporativos e a Urgência do Mapeamento",
    link: "compliance/mapeamento-riscos-corporativos-governanca-empresarial.html",
source: "",
date: "2026-05-08T07:00:00"
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
   title: "Audiência de Custódia e a Proteção do Preso",
    link: "direito-penal/audiencia-custodia-garantias-preso-flagrante.html",
source: "",
date: "2026-05-11T07:00:00"
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

