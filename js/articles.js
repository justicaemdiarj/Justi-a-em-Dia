const posts = [
{
  title: "Tolerância zero: o arcabouço legal contra violência feminina",
  description: "Legislação protetiva vai além da punição e transforma relações sociais",
  description2: "A violência psicológica como tipo penal autônomo",
  image: "img/tolerancia-zero-arcabouco-legal-violencia-contra-mulher.jpg",
  link: "direito-de-familia/tolerancia-zero-arcabouco-legal-violencia-contra-mulher.html",
  date: "2026-03-06T07:00:00",
  section: "featured"
},
  {
  title: "MPRJ reverte posição e pede internação de menor",
  description: "Novas denúncias alteram o curso das investigações em Copacabana",
  description2: "MPRJ havia se oposto ao pedido de busca e apreensão",
  image: "img/mprj-reverte-posicao-pede-internacao-menor-estupro-coletivo.jpg",
  link: "direito-penal/mprj-reverte-posicao-pede-internacao-menor-estupro-coletivo.html",
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
    title: "Responsabilidade Objetiva e Nexo Causal no STJ",
    image: "img/responsabilidade-objetiva-stj-precedentes.jpg",
    link: "direito-civil/responsabilidade-objetiva-stj-precedentes.html",
    date: "2026-03-05T00:00:00",
    section: "destaque"
  },
  {
    title: "O Que é Revelado Sobre o Caso do Banco Master e os Limites do Compliance",
    image: "img/banco-master-compliance-gestao-fraudulenta-temeraria-limites-governanca.jpg",
    link: "compliance/banco-master-compliance-gestao-fraudulenta-temeraria-limites-governanca.html",
    date: "2026-03-04T07:00:00",
    section: "veja"
  },
  {
    title: "Justiça Militar Condena PM por Lesão Grave no Recife",
    image: "img/pm-condenado-lesao-grave-bala-borracha-passinho-recife.jpg",
    link: "direito-militar/pm-condenado-lesao-grave-bala-borracha-passinho-recife.html",
    date: "2026-03-05T07:00:00",
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
      title: "Quando o Silêncio Se Torna Arma no Ambiente Corporativo",
      link: "direito-trabalhista/a-violencia-invisivel-quando-o-silencio-se-torna-arma-no-ambiente-corporativo.html",
      date: "2026-03-01T07:00:00"
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
      title: "A Armadilha do Crédito Fácil",
      link: "direito-civil/a-armadilha-do-credito-facil-como-o-superendividamento-captura-os-mais-vulneraveis.html",
      date: "2026-03-01T07:00:00"
    },
{
    title: "SBT condenado por humilhação em programa televisivo",
    link: "direito-civil/sbt-condenado-humilhacao-programa-televisivo-ratinho-danos-morais.html",
    date: "2026-03-06T07:00:00"
},
    {
      title: "A Holding do Crime",
      link: "compliance/a-holding-do-crime.html",
      date: "2026-03-02T07:00:00"
    },
    {
      title: "STF Prorroga por 90 Dias as Regras de Distribuição do Fundo de Participação dos Estados",
      link: "jurisprudencia/stf-prorroga-90-dias-fundo-participacao-estados.html",
      date: "2026-03-04T07:00:00"
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
title: "Segunda Turma do STF decide que exibição de vídeo pelo Ministério Público na presença de jurados não invalida julgamento",
link: "direito-penal/stf-segunda-turma-decide-que-exibicao-de-video.html",
source: "",
date: "2026-03-01T07:00:00"
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
title: "A Farda e a Constituição",
link: "direito-militar/a-farda-e-a-constituicao-o-direito-militar-entre-a-tradicao-e-os-direitos-fundamentais.html",
source: "",
date: "2026-03-02T07:00:00"
},
{
title: "Novo Imposto de Renda",
link: "legislacao/novo-imposto-de-renda.html",
source: "",
date: "2026-03-01T07:00:00"
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