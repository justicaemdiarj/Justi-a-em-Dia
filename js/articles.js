const posts = [
{
    title: "CGU Eleva o Padrão do Compliance",
    description: "Portaria Normativa CGU 226/25 transforma a avaliação de programas de integridade nas contratações públicas brasileiras",
    description2: "Empresas com compliance de fachada arriscam inidoneidade e exclusão definitiva de licitações públicas",
    image: "img/cgu-eleva-padrao-compliance-contratacoes-publicas-pn-226-25.jpg",
    link: "compliance/cgu-eleva-padrao-compliance-contratacoes-publicas-pn-226-25.html",
    date: "2026-03-07T07:00:00",
  section: "featured"
},
  {
  title: "Tolerância zero: o arcabouço legal contra violência feminina",
  description: "Legislação protetiva vai além da punição e transforma relações sociais",
  description2: "A violência psicológica como tipo penal autônomo",
  image: "img/tolerancia-zero-arcabouco-legal-violencia-contra-mulher.jpg",
  link: "direito-de-familia/tolerancia-zero-arcabouco-legal-violencia-contra-mulher.html",
  date: "2026-03-06T07:00:00",
  section: "featured-secundario"
},
  {
    title: "SBT condenado por humilhação em programa televisivo",
    image: "img/sbt-condenado-humilhacao-programa-televisivo-ratinho-danos-morais.jpg",
    link: "direito-civil/sbt-condenado-humilhacao-programa-televisivo-ratinho-danos-morais.html",
    date: "2026-03-06T07:00:00",
    section: "destaque"
  },
   {
    title: "SC regulamenta Cordão de Girassol para deficiências ocultas",
    image: "img/sc-regulamenta-cordao-girassol-deficiencias-ocultas-alesc.jpg",
    link: "legislacao/sc-regulamenta-cordao-girassol-deficiencias-ocultas-alesc.html",
    date: "2026-03-06T07:00:00",
    section: "destaque"
  },
  {
    title: "Senado Aprova Redução de Penas",
    image: "img/senado-aprova-reducao-penas-8j-dosimetria-sancao.jpg",
    link: "direito-penal/senado-aprova-reducao-penas-8j-dosimetria-sancao.html",
    date: "2026-03-07T07:00:00",
    section: "destaque"
  },
  {
   title: "Migração Partidária Reforça Centro-Direita na Câmara",
    image: "img/migracao-partidaria-reforco-centro-direita-camara-janela-2026.jpg",
    link: "politica/migracao-partidaria-reforco-centro-direita-camara-janela-2026.html",
    date: "2026-03-07T07:00:00",
    section: "veja"
  },
  {
    title: "Código Civil Ignora a Família Real",
    image: "img/codigo-civil-ignora-familia-real-reforma-urgente-sucessoes.jpg",
    link: "direito-de-familia/codigo-civil-ignora-familia-real-reforma-urgente-sucessoes.html",
    date: "2026-03-07T07:00:00",
    section: "veja"
  },
  {
    title: "TRF-4 garante aposentadoria negada por 48 horas",
    image: "img/trf4-aposentadoria-invalidez-inss-periodo-graca-doenca-dinamica.jpg",
    link: "direito-trabalhista/trf4-aposentadoria-invalidez-inss-periodo-graca-doenca-dinamica.html",
    date: "2026-03-06T07:00:00",
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

const featuredTop = posts[0];

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

container.innerHTML += renderBanner("antes-destaques");

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

container.innerHTML += renderBanner("depois-destaques");

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
    title: "Dez Anos do CPC",
    link: "jurisprudencia/dez-anos-cpc-2015-webinar-legado-jurisprudencia.html",
    date: "2026-03-07T07:00:00"
    },
    {
    title: "Tolerância zero: o arcabouço legal contra violência feminina",
    link: "direito-de-familia/tolerancia-zero-arcabouco-legal-violencia-contra-mulher.html",
    date: "2026-03-06T07:00:00"
    },
{
    title: "TRF-4 garante aposentadoria negada por 48 horas",
    link: "direito-trabalhista/trf4-aposentadoria-invalidez-inss-periodo-graca-doenca-dinamica.html",
    date: "2026-03-06T07:00:00"
},
{
    title: "SBT condenado por humilhação em programa televisivo",
    link: "direito-civil/sbt-condenado-humilhacao-programa-televisivo-ratinho-danos-morais.html",
    date: "2026-03-06T07:00:00"
},
 {
    title: "Rio Protege Servidores do Assédio Funcional",
    link: "direito-trabalhista/rio-protege-servidores-assedio-funcional-guia-smit.html",
    date: "2026-03-07T07:00:00"
},
    {
    title: "Código Civil Ignora a Família Real",
    link: "direito-de-familia/codigo-civil-ignora-familia-real-reforma-urgente-sucessoes.html",
    date: "2026-03-07T07:00:00"
    }
    ,
    {
    title: "PMs Viram Réus por Roubo Fardado",
    link: "direito-militar/pms-presos-roubo-celulares-onibus-expediente-rj-2026.html",
    date: "2026-03-07T07:00:00"
    }
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
title: "O Que é Revelado Sobre o Caso do Banco Master e os Limites do Compliance",
link: "compliance/banco-master-compliance-gestao-fraudulenta-temeraria-limites-governanca.html",
source: "",
date: "2026-03-04T07:00:00",
},

{
title: "Operação Argos: PF Age Contra Abuso Sexual Infantil",
link: "direito-penal/operacao-argos-pf-abuso-sexual-infantojuvenil-porto-velho.html",
source: "",
date: "2026-03-05T07:00:00"
},
{
title: "O Que é Revelado Sobre o Caso do Banco Master e os Limites do Compliance",
link: "compliance/banco-master-compliance-gestao-fraudulenta-temeraria-limites-governanca.html",
source: "",
date: "2026-03-05T03:00:00"
},
{
title: "A Decisão do TJMG que Ameaça Décadas de Proteção à Infância",
link: "direito-penal/casamento-crianca-crime-tjmg-estupro-vulneravel-protecao-infancia.html",
source: "",
date: "2026-03-04T07:00:00"
},
{
title: "PMs Viram Réus por Roubo Fardado",
link: "direito-militar/pms-presos-roubo-celulares-onibus-expediente-rj-2026.html",
source: "",
date: "2026-03-07T07:00:00"
},
{
title: "Mediação Estratégica e Compliance",
link: "compliance/mediacao-estrategica-e-compliance.html",
source: "",
date: "2026-03-01T07:00:00"
},
{
title: "Justiça Militar Condena PM por Lesão Grave no Recife",
link: "direito-militar/pm-condenado-lesao-grave-bala-borracha-passinho-recife.html",
source: "",
date: "2026-03-05T07:00:00"
},
{
title: "Tolerância zero: o arcabouço legal contra violência feminina",
link: "direito-de-familia/tolerancia-zero-arcabouco-legal-violencia-contra-mulher.html",
source: "",
date: "2026-03-06T07:00:00"
},
{
title: "O Escudo que o Poder Tenta Dobrar",
link: "compliance/o-escudo-que-o-poder-tenta-dobrar.html",
source: "",
date: "2026-03-03T07:00:00"
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