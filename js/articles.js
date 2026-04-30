const posts = [
  
  

{  
      title: "Ordem e Punição nas Fileiras Castrenses",
    description: "A reestruturação do regime disciplinar das corporações militares e a tensão com as garantias constitucionais",
    description2: "Hierarquia castrense sob o crivo do Estado Democrático de Direito",
    image: "img/ordem-punicao-fileiras-castrenses.webp",
    link: "direito-militar/ordem-punicao-fileiras-castrenses.html",
    date: "2026-04-30T07:00:00",
  section: "featured"
},
  {
    title: "Patrimônio Além da Morte no Direito Civil",
    description: "O direito sucessório e as disputas de herança diante das transformações familiares e patrimoniais",
    description2: "Lacunas legais e desafios do inventário no Brasil contemporâneo",
    image: "img/patrimonio-alem-morte-direito-civil.webp",
    link: "direito-civil/patrimonio-alem-morte-direito-civil.html",
    date: "2026-04-30T07:00:00",
  section: "featured-secundario"
},
{
    title: "Proteção Jurídica da Vida antes do Nascimento",
    description: "Alimentos gravídicos como instrumento de proteção da gestante e do nascituro no direito de família",
    description2: "A Lei nº 11.804/2008 e os desafios da obrigação alimentar pré-natal",
    image: "img/protecao-juridica-vida-antes-nascimento.webp",
    link: "direito-de-familia/protecao-juridica-vida-antes-nascimento.html",
    date: "2026-04-30T07:00:00",
 section: "featured-terciario"
},
  {
  title: "Liberdade Gradual no Sistema Penitenciário Brasileiro",
    image: "img/liberdade-gradual-sistema-penitenciario-brasileiro.webp",
    link: "direito-penal/liberdade-gradual-sistema-penitenciario-brasileiro.html",
    date: "2026-04-30T07:00:00",
    section: "veja"
  },
   {
    title: "Acordos Sindicais e o Poder de Negociar Direitos",
    image: "img/acordos-sindicais-poder-negociar-direitos.webp",
    link: "direito-trabalhista/acordos-sindicais-poder-negociar-direitos.html",
    date: "2026-04-30T07:00:00",
    section: "veja"
  },
  {
title: "Punição Corporativa e a Era do Compliance Obrigatório",
image: "img/punicao-corporativa-era-compliance-obrigatorio.webp", link: "compliance/punicao-corporativa-era-compliance-obrigatorio.html", date: "2026-04-30T07:00:00",
    section: "veja"
  },
  {
title: "Coerência Decisória nos Tribunais Superiores Brasileiros",
image: "img/coerencia-decisoria-tribunais-superiores-brasileiros.webp", link: "jurisprudencia/coerencia-decisoria-tribunais-superiores-brasileiros.html", date: "2026-04-30T07:00:00",
    section: "destaque"
  },
  {
title: "Inovação com Segurança Jurídica no Brasil",
image: "img/inovacao-seguranca-juridica-brasil.webp", link: "legislacao/inovacao-seguranca-juridica-brasil.html", date: "2026-04-30T07:00:00",
    section: "destaque"
  },
{   title: "Tensões Federativas e Competências em Disputa",
image: "img/tensoes-federativas-competencias-disputa.webp", link: "politica/tensoes-federativas-competencias-disputa.html", date: "2026-04-30T07:00:00",
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

