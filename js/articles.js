const posts = [
  
  
{
  title: "Misoginia no Poder, Uma Ferida Política",
  description: "A misoginia estrutural nos espaços de poder político brasileiro opera como mecanismo de exclusão que compromete a democracia representativa",
  description2: "Violência política de gênero e o vácuo normativo que perpetua a exclusão feminina dos espaços de poder no Brasil",
  image: "img/misoginia-poder-estrutura-politica-brasileira.webp",
  link: "politica/misoginia-poder-estrutura-politica-brasileira.html",
  date: "2026-03-30T10:00:00",
  section: "featured"
},
  {
  title: "Due Diligence Como Escudo Jurídico Corporativo",
  description: "A investigação prévia que blinda negócios contra passivos ocultos e riscos de integridade",
  description2: "Como a due diligence tornou-se exigência jurídica incontornável no compliance brasileiro",
  image: "img/due-diligence-escudo-juridico-corporativo-brasil.webp",
  link: "compliance/due-diligence-escudo-juridico-corporativo-brasil.html",
  date: "2026-03-30T08:00:00",
  section: "featured-secundario"
},
{
  title: "Quando os Tribunais Mudam de Ideia",
  description: "A virada jurisprudencial que transforma direitos consolidados e abala a segurança jurídica dos jurisdicionados",
  description2: "Como o overruling nos tribunais superiores impacta negócios, contratos e planejamentos jurídicos no Brasil",
  image: "img/mudanca-entendimento-jurisprudencial-tribunais-brasileiros.webp",
  link: "jurisprudencia/mudanca-entendimento-jurisprudencial-tribunais-brasileiros.html",
  date: "2026-03-30T07:00:00",
 section: "featured-terciario"
},
  {
    title: "LGPD e o Novo Estatuto da Privacidade Digital",
    image: "img/lgpd-estatuto-privacidade-digital-protecao-dados-brasil.webp",
    link: "legislacao/lgpd-estatuto-privacidade-digital-protecao-dados-brasil.html",
    date: "2026-03-30T09:00:00",
    section: "destaque"
  },
   {
  title: "Assédio Moral no Trabalho e Dignidade Laboral",
  image: "img/assedio-moral-trabalho-dignidade-laboral.webp",
  link: "direito-trabalhista/assedio-moral-trabalho-dignidade-laboral.html",
  date: "2026-03-30T09:00:00",
    section: "destaque"
  },
  {
  title: "Populismo e o Cerco à Democracia Brasileira",
    image: "img/populismo-ameaca-institucional-democracia-brasileira.webp",
    link: "politica/populismo-ameaca-institucional-democracia-brasileira.html",
    date: "2026-03-27T07:00:00",
    section: "destaque"
  },
  {
   
     title: "Novas Leis que Transformam o Direito Brasileiro",
     image: "img/atualizacoes-legislativas-recentes-impacto-direito-brasileiro.webp",
    link: "legislacao/atualizacoes-legislativas-recentes-impacto-direito-brasileiro.html",
    date: "2026-03-27T07:00:00",
    section: "veja"
  },
  {
   title: "Como os Tribunais Reescrevem o Sentido das Leis",
     image: "img/interpretacao-lei-tribunais-hermeneutica-juridica-brasil.webp",
    link: "jurisprudencia/interpretacao-lei-tribunais-hermeneutica-juridica-brasil.html",
    date: "2026-03-27T10:00:00",
    section: "veja"
  },
  {
   title: "Conformidade Tributária como Escudo Jurídico Empresarial",
    image: "img/conformidade-tributaria-escudo-juridico-empresarial.webp",
    link: "compliance/conformidade-tributaria-escudo-juridico-empresarial.html",
    date: "2026-03-27T09:00:00",
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
 title: "Governar em Silêncio Não Garante Reeleição",
  link: "politica/governo-federal-comunicacao-realizacoes-politicas-publicas-2026.html",
  date: "2026-03-24T07:00:00"
},
{
    title: "MDB Perde Quadro e PSB Ganha Candidatura Senatorial",
    link: "politica/desfiliacao-mdb-psb-senado-sao-paulo-eleicoes-2026.html",
    date: "2026-03-23T07:00:00"
},
{
 title: "Governo Abaixo da Régua Histórica da Reeleição",
  link: "politica/governo-abaixo-regua-historica-reeleicao.html",
  date: "2026-03-21T07:00:00"
},
{
 title: "Prerrogativas Presidenciais Resistem à Custódia Judicial",
  link: "politica/prerrogativas-presidenciais-resistem-custodia-judicial.html",
  date: "2026-03-20T07:00:00"
},
 {
   title: "Compliance como Pilar da Estratégia Corporativa Moderna",
    link: "compliance/compliance-pilar-estrategia-corporativa-moderna.html",
    date: "2026-03-24T07:00:00"
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
title: "ECA Digital Protege Crianças no Ambiente Virtual  ",
    link: "direito-de-familia/eca-digital-vigor-marco-2026-protecao-criancas-adolescentes-internet.html",
source: "",
date: "2026-03-17T07:00:00"
},

{
title: "PL Quer Pragmatismo Para Vencer em 2026",
  link: "politica/pl-pragmatismo-agenda-eleicoes-2026-estrategia-eleitoral-oposicao.html",
source: "",
date: "2026-03-18T07:00:00"
},
{
title: "Farda e Integridade Selam Pacto de Conformidade",
link: "compliance/bombeiros-militar-cge-compliance-publico-integridade-governanca.html",
source: "",
date: "2026-03-23T03:00:00"
},
{
title: "SP Reestrutura Compliance Policial Após Escândalo",
  link: "compliance/sp-decreto-reestruturacao-compliance-policias-corrupcao-integridade.html",
source: "",
date: "2026-03-18T07:00:00"
},
{
title: "Prerrogativas Presidenciais Resistem à Custódia Judicial",
link: "politica/prerrogativas-presidenciais-resistem-custodia-judicial.html",
source: "",
date: "2026-03-20T07:00:00"
},
{
title: "Divórcio Unilateral em Cartório Transforma Direito Familiar",
    link: "direito-de-familia/divorcio-unilateral-cartorio-transforma-direito-familiar.html",
source: "",
date: "2026-03-20T07:00:00"
},
{
 title: "Compliance como Pilar da Estratégia Corporativa Moderna",
  link: "compliance/compliance-pilar-estrategia-corporativa-moderna.html",
source: "",
date: "2026-03-24T07:00:00"
},
{
    title: "MDB Perde Quadro e PSB Ganha Candidatura Senatorial",
  link: "politica/desfiliacao-mdb-psb-senado-sao-paulo-eleicoes-2026.html",
source: "",
date: "2026-03-23T07:00:00",
},
{
   title: "Reserva de Imóvel na Planta e a Custódia Notarial",
    link: "direito-de-familia/reserva-imovel-planta-custodia-notarial-escrow-incorporacao.html",
source: "",
 date: "2026-03-24T07:00:00"
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

