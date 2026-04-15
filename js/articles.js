const posts = [
  
  
{
  title: "Ética Corporativa como Fundamento Estratégico Empresarial",
  description: "O código de ética empresarial tornou-se instrumento central de governança e proteção jurídica das organizações brasileiras.",
  description2: "A Lei Anticorrupção e o Decreto 8.420/2015 consolidam o compliance como imperativo legal e estratégico nas empresas.",
  image: "img/etica-corporativa-fundamento-estrategico-empresarial.webp",
  link: "compliance/etica-corporativa-fundamento-estrategico-empresarial.html",
  date: "2026-04-15T07:00:00",
  section: "featured"
},
  {
  title: "Veredictos Polêmicos e Seus Reflexos Jurídicos no Brasil",
  description: "As decisões controversas dos tribunais brasileiros expõem as tensões entre ativismo judicial e segurança jurídica.",
  description2: "O fenômeno da judicialização da política desafia os limites do sistema democrático e da separação de poderes.",
  image: "img/veredictos-polemicos-reflexos-juridicos-brasil.webp",
  link: "jurisprudencia/veredictos-polemicos-reflexos-juridicos-brasil.html",
  date: "2026-04-15T07:00:00",
  section: "featured-secundario"
},
{
  title: "Reforma Penal e Novos Paradigmas Normativos no Brasil",
  description: "As mudanças no Código Penal geram debate intenso entre garantismo e punitivismo no sistema jurídico nacional.",
  description2: "Da Lei 13.964/2019 à discussão sobre descriminalização, o direito penal brasileiro busca novos horizontes normativos.",
  image: "img/reforma-penal-novos-paradigmas-normativos-brasil.webp",
  link: "legislacao/reforma-penal-novos-paradigmas-normativos-brasil.html",
  date: "2026-04-15T07:00:00",
 section: "featured-terciario"
},
  {
  title: "Supremo Tribunal Federal e Interferência Institucional na Política",
  image: "img/supremo-tribunal-federal-interferencia-institucional-politica.webp",
  link: "politica/supremo-tribunal-federal-interferencia-institucional-politica.html",
  date: "2026-04-15T07:00:00",
    section: "destaque"
  },
   {
    title: "Violência Sexual no Ambiente de Trabalho e Proteção Jurídica",
  image: "img/violencia-sexual-ambiente-trabalho-protecao-juridica.webp",
  link: "direito-trabalhista/violencia-sexual-ambiente-trabalho-protecao-juridica.html",
  date: "2026-04-15T07:00:00",
    section: "destaque"
  },
  {
  title: "Comércio Ilícito de Entorpecentes e Sanções Penais no Brasil",
  image: "img/comercio-ilicito-entorpecentes-sancoes-penais-brasil.webp",
  link: "direito-penal/comercio-ilicito-entorpecentes-sancoes-penais-brasil.html",
  date: "2026-04-15T07:00:00",
    section: "destaque"

  },
  {
  title: "Vínculos Parentais e Tutela Jurisdicional no Direito de Convivência",
  image: "img/vinculos-parentais-tutela-jurisdicional-convivencia.webp",
  link: "direito-de-familia/vinculos-parentais-tutela-jurisdicional-convivencia.html",
  date: "2026-04-15T07:00:00",
    section: "veja"
  },
  {
  title: "Defeitos Contratuais e Invalidade dos Negócios Jurídicos",
  image: "img/defeitos-contratuais-invalidade-negocios-juridicos.webp",
  link: "direito-civil/defeitos-contratuais-invalidade-negocios-juridicos.html",
  date: "2026-04-15T07:00:00",
    section: "veja"
  },
  {
  title: "Greve nas Forças Armadas e a Vedação Constitucional",
  image: "img/greve-forcas-armadas-vedacao-constitucional.webp",
  link: "direito-militar/greve-forcas-armadas-vedacao-constitucional.html",
  date: "2026-04-15T07:00:00",
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

