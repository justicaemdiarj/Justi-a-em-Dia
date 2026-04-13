const posts = [
  
  
{
  title: "A Lupa Que Protege a Empresa por Dentro",
  description: "A auditoria interna é função estratégica de defesa corporativa com plano baseado em riscos e conformidade",
  description2: "Independência, tecnologia e impacto da auditoria interna na governança e nos mercados de capitais",
  image: "img/lupa-que-protege-a-empresa-por-dentro.webp",
  link: "compliance/lupa-que-protege-a-empresa-por-dentro.html",
  date: "2026-04-13T07:00:00",
  section: "featured"
},
  {
  title: "O Que os Outros Sistemas Ensinam ao Nosso",
  description: "O direito comparado analisa sistemas jurídicos de diferentes países para aprimorar os ordenamentos nacionais",
  description2: "Famílias jurídicas, influência do direito alemão, common law e transplante jurídico no Brasil",
  image: "img/o-que-os-outros-sistemas-ensinam-ao-nosso.webp",
  link: "jurisprudencia/o-que-os-outros-sistemas-ensinam-ao-nosso.html",
  date: "2026-04-13T07:00:00",
  section: "featured-secundario"
},
{
  title: "Quando Legislar Demais Prejudica a Lei",
  description: "O excesso de legislação paralisa o Estado e onera cidadãos e empresas com inflação normativa no Brasil",
  description2: "Causas da inflação normativa, desburocratização e experiências internacionais de redução do volume normativo",
  image: "img/quando-legislar-demais-prejudica-a-lei.webp",
  link: "legislacao/quando-legislar-demais-prejudica-a-lei.html",
  date: "2026-04-13T09:00:00",
 section: "featured-terciario"
},
  {
  title: "Como o Brasil Escolhe Seus Representantes",
  image: "img/como-o-brasil-escolhe-seus-representantes.webp",
  link: "politica/como-o-brasil-escolhe-seus-representantes.html",
  date: "2026-04-13T10:00:00",
    section: "destaque"
  },
   {
  title: "Mesma Função Exige Mesmo Salário",
  image: "img/mesma-funcao-exige-mesmo-salario.webp",
  link: "direito-trabalhista/mesma-funcao-exige-mesmo-salario.html",
  date: "2026-04-13T09:00:00",
    section: "destaque"
  },
  {
  title: "Uma Criança Pode Ter Dois Pais no Registro",
  image: "img/crianca-pode-ter-dois-pais-no-registro.webp",
  link: "direito-de-familia/crianca-pode-ter-dois-pais-no-registro.html",
  date: "2026-04-13T08:00:00",
    section: "destaque"

  },
  {
  title: "A Confissão Que Pode Mudar Tudo",
  image: "img/confissao-que-pode-mudar-tudo.webp",
  link: "direito-penal/confissao-que-pode-mudar-tudo.html",
  date: "2026-04-13T12:00:00",
    section: "veja"
  },
  {
  title: "Tempo de Posse Pode Virar Título de Dono",
  image: "img/tempo-de-posse-pode-virar-titulo-de-dono.webp",
  link: "direito-civil/tempo-de-posse-pode-virar-titulo-de-dono.html",
  date: "2026-04-13T09:00:00",
    section: "veja"
  },
  {
  title: "A Hierarquia Que Vira Instrumento de Tortura",
  image: "img/hierarquia-que-vira-instrumento-de-tortura.webp",
  link: "direito-militar/hierarquia-que-vira-instrumento-de-tortura.html",
  date: "2026-04-13T08:00:00",
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

