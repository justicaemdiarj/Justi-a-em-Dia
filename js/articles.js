const posts = [
  
  
{
  title: "Poder sem Controle Destrói Empresas",
  description: "A governança corporativa tornou-se exigência central para a sustentabilidade das organizações brasileiras",
  description2: "Estruturas de controle e transparência definem o futuro das empresas no Brasil",
  image: "img/poder-sem-controle-destroi-empresas.webp",
  link: "compliance/poder-sem-controle-destroi-empresas.html",
  date: "2026-04-07T09:00:00",
  section: "featured"
},
  {
  title: "Separar sem Juiz Virou Regra",
  description: "O divórcio extrajudicial transformou a forma como os brasileiros encerram o casamento de forma mais rápida e acessível",
  description2: "Lei nº 11.441 e os procedimentos em cartório que simplificaram a dissolução conjugal no Brasil",
  image: "img/separar-sem-juiz-virou-regra.webp",
  link: "direito-de-familia/separar-sem-juiz-virou-regra.html",
  date: "2026-04-07T10:00:00",
  section: "featured-secundario"
},
{
  title: "A Lei que Pôs Empresas no Banco dos Réus",
  description: "A Lei Anticorrupção transformou a relação entre empresas e poder público ao instituir responsabilidade objetiva",
  description2: "Impactos normativos e o legado de uma década da Lei nº 12.846 de 2013 no Brasil",
  image: "img/lei-que-pos-empresas-no-banco-dos-reus.webp",
  link: "legislacao/lei-que-pos-empresas-no-banco-dos-reus.html",
  date: "2026-04-07T09:00:00",
 section: "featured-terciario"
},
  {
  title: "Votar Não Basta, Participar É a Chave",
  image: "img/votar-nao-basta-participar-e-a-chave.webp",
  link: "politica/votar-nao-basta-participar-e-a-chave.html",
  date: "2026-04-07T10:00:00",
    section: "destaque"
  },
   {
 title: "Demissão Forçada pelo Erro do Patrão",
  image: "img/demissao-forcada-pelo-erro-do-patrao.webp",
  link: "direito-trabalhista/demissao-forcada-pelo-erro-do-patrao.html",
  date: "2026-04-07T07:00:00",
    section: "destaque"
  },
  {
  title: "A Pena que o Brasil Não Sabe Cumprir",
  image: "img/pena-que-o-brasil-nao-sabe-cumprir.webp",
  link: "direito-penal/pena-que-o-brasil-nao-sabe-cumprir.html",
  date: "2026-04-07T07:00:00",
    section: "destaque"
  },
  {
title: "Quando o Judiciário se Fecha em Si",
  image: "img/quando-o-judiciario-se-fecha-em-si.webp",
  link: "jurisprudencia/quando-o-judiciario-se-fecha-em-si.html",
  date: "2026-04-07T08:00:00",
    section: "veja"
  },
  {
  title: "Sua Imagem Tem Dono e É Você",
  image: "img/sua-imagem-tem-dono-e-e-voce.webp",
  link: "direito-civil/sua-imagem-tem-dono-e-e-voce.html",
  date: "2026-04-07T08:00:00",
    section: "veja"
  },
  {
  title: "A Farda Também Tem Direitos a Proteger",
  image: "img/farda-tambem-tem-direitos-a-proteger.webp",
  link: "direito-militar/farda-tambem-tem-direitos-a-proteger.html",
  date: "2026-04-07T11:00:00",
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

