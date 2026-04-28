const posts = [
  
  

{    title: "A CLT Reformada e o Mundo do Trabalho", 
  description: "A reforma trabalhista de 2017 flexibilizou a CLT e inaugurou modalidades contratuais inéditas no ordenamento brasileiro", 
  description2: "Avalie os impactos da Lei nº 13.467 sobre proteção dos trabalhadores e o mercado de emprego", 
  image: "img/reforma-trabalhista-impactos-relacoes-trabalho-brasil.webp", 
  link: "direito-trabalhista/reforma-trabalhista-impactos-relacoes-trabalho-brasil.html", 
  date: "2026-04-29T07:00:00",
  section: "featured"
},
  {
title: "Integridade Institucional no Poder do Estado", 
description: "Programas de compliance no setor público são imperativos constitucionais derivados dos princípios da legalidade e moralidade administrativa", 
description2: "Como a gestão de riscos e os canais de denúncia transformam a integridade do Estado brasileiro", 
image: "img/compliance-setor-publico-integridade-gestao-estado.webp", 
link: "compliance/compliance-setor-publico-integridade-gestao-estado.html", 
  date: "2026-04-29T07:00:00",
  section: "featured-secundario"
},
{
title: "Quando os Tribunais Reescrevem a Realidade Social", 
description: "As decisões dos tribunais superiores têm força normativa equiparável à lei e moldam comportamentos em toda a sociedade", 
description2: "Entenda como a jurisprudência brasileira influencia a política, a economia e os direitos dos cidadãos", 
image: "img/influencia-jurisprudencia-sociedade-brasileira.webp", 
link: "jurisprudencia/influencia-jurisprudencia-sociedade-brasileira.html",
  date: "2026-04-29T07:00:00",
 section: "featured-terciario"
},
  {
title: "Vínculos Geracionais e o Amparo Jurídico Familiar",
image: "img/direito-avos-convivencia-familiar-brasil.webp", 
link: "direito-de-familia/direito-avos-convivencia-familiar-brasil.html",
  date: "2026-04-27T07:00:00",
    section: "veja"
  },
   {
title: "Detenção Castrense sob o Crivo Constitucional",
image: "img/prisao-disciplinar-militar-constitucionalidade-brasil.webp", 
link: "direito-militar/prisao-disciplinar-militar-constitucionalidade-brasil.html",
  date: "2026-04-27T07:00:00",
    section: "veja"
  },
  {
title: "Imperfeição Mercantil e Tutela do Consumidor",
image: "img/responsabilidade-vicio-produto-direito-consumidor-brasil.webp", 
link: "direito-civil/responsabilidade-vicio-produto-direito-consumidor-brasil.html",
  date: "2026-04-27T07:00:00",
    section: "veja"
  },
  {
title: "Gestão Estatal sob o Prisma da Transparência", 
image: "img/governanca-publica-transparencia-estado-brasil.webp", 
link: "politica/governanca-publica-transparencia-estado-brasil.html", 
  date: "2026-04-28T07:00:00",
    section: "destaque"
  },
  {
title: "Excesso de Poder e os Limites do Agente Público", 
image: "img/lei-abuso-autoridade-limites-poder-publico-brasil.webp", 
link: "legislacao/lei-abuso-autoridade-limites-poder-publico-brasil.html", 
  date: "2026-04-28T07:00:00",
    section: "destaque"
  },
{   title: "Política Antidrogas Entre Punição e Saúde Pública", 
  image: "img/lei-drogas-politica-criminal-brasil.webp", 
  link: "direito-penal/lei-drogas-politica-criminal-brasil.html", 
  date: "2026-04-28T07:00:00",
    section: "destaque"
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
 title: "Imperfeição Mercantil e Tutela do Consumidor",
  link: "direito-civil/responsabilidade-vicio-produto-direito-consumidor-brasil.html",
  date: "2026-04-27T07:00:00"
},
{
  title: "Vínculos Geracionais e o Amparo Jurídico Familiar",
  link: "direito-de-familia/direito-avos-convivencia-familiar-brasil.html",
  date: "2026-04-27T07:00:00"
},
{
  title: "Fundo de Garantia e a Proteção do Vínculo Laboral",
  link: "direito-trabalhista/fundo-garantia-protecao-vinculo-laboral.html",
  date: "2026-04-24T07:00:00"
},
{
  title: "Fronteiras da Palavra e os Limites Democráticos",
  link: "politica/fronteiras-palavra-limites-democraticos-liberdade-expressao.html",
  date: "2026-04-21T07:00:00"
},
{
  title: "Vigilância Cidadã sobre o Poder Institucional Brasileiro",
  link: "politica/vigilancia-cidada-poder-institucional-brasileiro.html",
  date: "2026-04-24T07:00:00"
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
title: "Precedentes nas Decisões Administrativas e seu Alcance",
    link: "jurisprudencia/precedentes-decisoes-administrativas-alcance.html",
source: "",
date: "2026-04-24T07:00:00"
},
{
title: "Vigilância Cidadã sobre o Poder Institucional Brasileiro",
  link: "politica/vigilancia-cidada-poder-institucional-brasileiro.html",
source: "",
date: "2026-04-24T07:00:00"
},
{
title: "Apuração Interna de Irregularidades e Seus Desafios",
link: "compliance/apuracao-interna-irregularidades-desafios.html",
source: "",
date: "2026-04-24T03:00:00"
},
{
title: "Contratos Públicos sob Nova Arquitetura Normativa",
  link: "legislacao/contratos-publicos-nova-arquitetura-normativa.html",
source: "",
date: "2026-04-21T07:00:00"
},
{
title: "Estatuto do Consumidor e seus Trinta Anos de Proteção",
link: "legislacao/estatuto-consumidor-trinta-anos-protecao.html",
source: "",
date: "2026-04-24T07:00:00"
},
{
title: "Economia Invisível e os Direitos Negados ao Trabalhador",
    link: "direito-trabalhista/economia-invisivel-direitos-negados-trabalhador.html",
source: "",
date: "2026-04-21T07:00:00"
},
{
 title: "Fundo de Garantia e a Proteção do Vínculo Laboral",
  link: "direito-trabalhista/fundo-garantia-protecao-vinculo-laboral.html",
source: "",
date: "2026-04-23T07:00:00"
},
{
    title: "Fronteiras da Palavra e os Limites Democráticos",
  link: "politica/fronteiras-palavra-limites-democraticos-liberdade-expressao.html",
source: "",
date: "2026-04-21T07:00:00",
},
{
   title: "Imperfeição Mercantil e Tutela do Consumidor",
    link: "direito-civil/responsabilidade-vicio-produto-direito-consumidor-brasil.html",
source: "",
 date: "2026-04-27T07:00:00"
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

