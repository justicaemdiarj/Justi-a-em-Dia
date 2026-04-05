const posts = [
  
  
{
  title: "STJ como Árbitro do Direito Infraconstitucional",
  description: "Como os precedentes do STJ moldam o direito do consumidor, empresarial e público no Brasil",
  description2: "Súmulas, recursos repetitivos e o impacto econômico das decisões do Superior Tribunal de Justiça",
  image: "img/stj-arbitro-direito-infraconstitucional-brasil.webp",
  link: "jurisprudencia/stj-arbitro-direito-infraconstitucional-brasil.html",
  date: "2026-04-06T07:00:00",
  section: "featured"
},
  {
  title: "ECA em Xeque diante dos Novos Desafios Sociais",
  description: "Como o Estatuto da Criança e do Adolescente enfrenta os desafios do ambiente digital e da violência",
  description2: "Três décadas de proteção integral à infância e os limites ainda a superar no Brasil",
  image: "img/eca-estatuto-crianca-adolescente-desafios-brasil.webp",
  link: "legislacao/eca-estatuto-crianca-adolescente-desafios-brasil.html",
  date: "2026-04-06T09:00:00",
  section: "featured-secundario"
},
{
  title: "Soberania Popular entre Promessa e Realidade",
  description: "Como os mecanismos de participação popular previstos na Constituição de 1988 enfrentam a crise democrática",
  description2: "Desinformação digital, abstenção eleitoral e déficit participativo ameaçam a democracia brasileira",
  image: "img/soberania-popular-democracia-participacao-brasil.webp",
  link: "politica/soberania-popular-democracia-participacao-brasil.html",
  date: "2026-04-06T10:00:00",
 section: "featured-terciario"
},
  {
  title: "Teletrabalho e o Dilema do Registro de Horas",
  image: "img/teletrabalho-controle-jornada-home-office-brasil.webp",
  link: "direito-trabalhista/teletrabalho-controle-jornada-home-office-brasil.html",
  date: "2026-04-06T09:00:00",
    section: "destaque"
  },
   {
  title: "Inocência Presumida sob Pressão no Brasil",
  image: "img/presuncao-inocencia-pressao-democratica-brasil.webp",
  link: "direito-penal/presuncao-inocencia-pressao-democratica-brasil.html",
  date: "2026-04-06T09:00:00",
    section: "destaque"
  },
  {
 title: "Fim da Pensão Alimentícia e Seus Reflexos Jurídicos",
  image: "img/exoneracao-alimentos-reflexos-juridicos-brasil.webp",
  link: "direito-de-familia/exoneracao-alimentos-reflexos-juridicos-brasil.html",
  date: "2026-04-06T08:00:00",
    section: "destaque"
  },
  {
  title: "Contratos Digitais e Sua Validade no Direito",
  image: "img/contratos-digitais-validade-juridica-brasil.webp",
  link: "direito-civil/contratos-digitais-validade-juridica-brasil.html",
  date: "2026-04-06T07:00:00",
    section: "veja"
  },
  {
  title: "Justiça Militar e os Limites da Competência Castrense",
  image: "img/justica-militar-competencia-castrense-brasil.webp",
  link: "direito-militar/justica-militar-competencia-castrense-brasil.html",
  date: "2026-04-06T07:00:00",
    section: "veja"
  },
  {
  title: "Ética Corporativa Além do Papel",
  image: "img/etica-corporativa-alem-do-papel.webp",
  link: "compliance/etica-corporativa-alem-do-papel.html",
  date: "2026-04-06T11:00:00",
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
 title: "O Direito que Nasceu na Era dos Algoritmos",
  link: "legislacao/direito-nasceu-era-algoritmos.html",
  date: "2026-04-02T07:00:00"
},
{
  title: "Quando o Judiciário Governa no Lugar do Parlamento",
  link: "politica/judiciario-governa-lugar-parlamento.html",
  date: "2026-04-01T11:00:00"
},
{
  title: "Crimes Digitais e a Lei Fora do Alcance",
  link: "direito-penal/crimes-digitais-lei-fora-do-alcance-direito-penal.html",
  date: "2026-04-01T10:00:00"
},
{
  title: "Alienação Parental e a Criança Invisível",
  link: "direito-de-familia/alienacao-parental-crianca-invisivel-lei-12318.html",
  date: "2026-04-01T07:00:00"
},
 {
  title: "Misoginia no Poder, Uma Ferida Política",
  link: "politica/misoginia-poder-estrutura-politica-brasileira.html",
  date: "2026-03-30T06:00:00"
},
{
  title: "A Tese que Vale por Milhões de Processos",
  link: "jurisprudencia/tese-vale-milhoes-processos-repetitivos.html",
  date: "2026-04-02T11:00:00"
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
title: "O Silêncio que Adoece",
    link: "direito-trabalhista/assedio-moral-trabalho-dignidade-laboral.html",
source: "",
date: "2026-03-30T07:00:00"
},

{
title: "Due Diligence Como Escudo Jurídico Corporativo",
  link: "compliance/due-diligence-escudo-juridico-corporativo-brasil.html",
source: "",
date: "2026-03-30T07:00:00"
},
{
title: "Quando os Tribunais Mudam de Ideia",
link: "jurisprudencia/mudanca-entendimento-jurisprudencial-tribunais-brasileiros.html",
source: "",
date: "2026-03-30T03:00:00"
},
{
title: "Populismo e o Cerco à Democracia Brasileira",
  link: "politica/populismo-ameaca-institucional-democracia-brasileira.html",
source: "",
date: "2026-03-27T07:00:00"
},
{
title: "Direitos Fundamentais e a Condição Militar",
link: "direito-militar/direitos-fundamentais-condicao-militar-brasil.html",
source: "",
date: "2026-03-31T07:00:00"
},
{
title: "Misoginia no Poder, Uma Ferida Política",
    link: "politica/misoginia-poder-estrutura-politica-brasileira.html",
source: "",
date: "2026-03-30T07:00:00"
},
{
 title: "Sangue e Silêncio no Coração do Lar",
  link: "direito-penal/feminicidio-violencia-genero-lei-penal-brasil.html",
source: "",
date: "2026-04-02T07:00:00"
},
{
    title: "Quando o Judiciário Governa no Lugar do Parlamento",
  link: "politica/judiciario-governa-lugar-parlamento.html",
source: "",
date: "2026-04-01T07:00:00",
},
{
   title: "Farda, Voz e os Limites Constitucionais",
    link: "direito-militar/liberdade-expressao-militar-limites-constitucionais-brasil.html",
source: "",
 date: "2026-04-02T07:00:00"
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

