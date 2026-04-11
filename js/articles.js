const posts = [
  
  
{
  title: "Corrupção Não Se Combate Só Com Prisão",
  description: "A prevenção à corrupção é o caminho mais eficaz para a integridade corporativa e pública no Brasil",
  description2: "Programas de integridade, due diligence de terceiros e tendências globais no combate aos desvios",
  image: "img/corrupcao-nao-se-combate-so-com-prisao.webp",
  link: "compliance/corrupcao-nao-se-combate-so-com-prisao.html",
  date: "2026-04-11T08:00:00",
  section: "featured"
},
  {
  title: "Tribunais Reescrevem as Regras da Família",
  description: "A jurisprudência em direito de família evolui além do Código Civil com novos modelos de família reconhecidos",
  description2: "Multiparentalidade, socioafetividade e guarda compartilhada nas decisões do STJ e do STF",
  image: "img/tribunais-reescrevem-as-regras-da-familia.webp",
  link: "jurisprudencia/tribunais-reescrevem-as-regras-da-familia.html",
  date: "2026-04-11T11:00:00",
  section: "featured-secundario"
},
{
  title: "A Lei que Entrou na Casa das Mulheres",
  description: "A Lei Maria da Penha transformou o combate à violência doméstica e criou um sistema integrado de proteção",
  description2: "Medidas protetivas, feminicídio e quase duas décadas de avanços normativos na Lei nº 11.340",
  image: "img/lei-que-entrou-na-casa-das-mulheres.webp",
  link: "legislacao/lei-que-entrou-na-casa-das-mulheres.html",
  date: "2026-04-11T07:00:00",
 section: "featured-terciario"
},
  {
  title: "O Sistema Político que Resiste à Mudança",
  image: "img/sistema-politico-que-resiste-a-mudanca.webp",
  link: "politica/sistema-politico-que-resiste-a-mudanca.html",
  date: "2026-04-11T07:00:00",
    section: "destaque"
  },
   {
  title: "Trabalho a Pedido Tem Direito Garantido",
  image: "img/trabalho-a-pedido-tem-direito-garantido.webp",
  link: "direito-trabalhista/trabalho-a-pedido-tem-direito-garantido.html",
  date: "2026-04-11T09:00:00",
    section: "destaque"
  },
  {
  title: "Palavras Também Ferem e a Lei Pune Isso",
  image: "img/palavras-tambem-ferem-e-a-lei-pune-isso.webp",
  link: "direito-penal/palavras-tambem-ferem-e-a-lei-pune-isso.html",
  date: "2026-04-11T08:00:00",
    section: "destaque"

  },
  {
  title: "Pai no Registro É Direito Que Não Prescreve",
  image: "img/pai-no-registro-e-direito-que-nao-prescreve.webp",
  link: "direito-de-familia/pai-no-registro-e-direito-que-nao-prescreve.html",
  date: "2026-04-11T12:00:00",
    section: "veja"
  },
  {
  title: "Ter a Chave Não É Ser o Dono",
  image: "img/ter-a-chave-nao-e-ser-o-dono.webp",
  link: "direito-civil/ter-a-chave-nao-e-ser-o-dono.html",
  date: "2026-04-11T09:00:00",
    section: "veja"
  },
  {
  title: "A Farda Que o Corpo Não Aguenta Mais",
  image: "img/farda-que-o-corpo-nao-aguenta-mais.webp",
  link: "direito-militar/farda-que-o-corpo-nao-aguenta-mais.html",
  date: "2026-04-11T08:00:00",
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
  title: "Clique Errado Pode Custar Caro",
  link: "direito-civil/clique-errado-pode-custar-caro.html",
  date: "2026-04-08T07:00:00"
},
{
  title: "Demissão Forçada pelo Erro do Patrão",
  link: "direito-trabalhista/demissao-forcada-pelo-erro-do-patrao.html",
  date: "2026-04-07T07:00:00"
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
title: "Due Diligence Como Escudo Jurídico Corporativo",
  link: "compliance/due-diligence-escudo-juridico-corporativo-brasil.html",
source: "",
date: "2026-03-30T07:00:00"
},
{
title: "Poder sem Controle Destrói Empresas",
link: "compliance/poder-sem-controle-destroi-empresas.html",
source: "",
date: "2026-04-07T03:00:00"
},
{
title: "Dados Pessoais Exigem Programa de Conformidade",
  link: "compliance/dados-pessoais-exigem-programa-de-conformidade.html",
source: "",
date: "2026-04-08T07:00:00"
},
{
title: "Direitos Fundamentais e a Condição Militar",
link: "direito-militar/direitos-fundamentais-condicao-militar-brasil.html",
source: "",
date: "2026-03-31T07:00:00"
},
{
title: "Dividir o Patrimônio Não Precisa Ser Guerra",
    link: "direito-de-familia/dividir-o-patrimonio-nao-precisa-ser-guerra.html",
source: "",
date: "2026-04-08T07:00:00"
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

