const posts = [
  
  
{
    title: "Estado Responde por Danos de Atos Militares",
    description: "A teoria da responsabilidade objetiva consagrada pela Constituição Federal impõe ao Estado o dever de indenizar vítimas de atos militares independentemente de culpa do agente",
    description2: "De operações em áreas urbanas à justiça militar e ao sistema interamericano de direitos humanos, entenda o regime jurídico de reparação por danos castrenses",
    image: "img/estado-responde-danos-atos-militares-responsabilidade-civil.webp",
    link: "direito-militar/estado-responde-danos-atos-militares-responsabilidade-civil.html",
    date: "2026-03-27T10:00:00",
  section: "featured"
},
  {
    title: "Prejuízo Patrimonial e Sofrimento Têm Reparações Distintas",
    description: "Dano material e dano moral possuem fundamentos, regimes probatórios e critérios de quantificação distintos que todo cidadão precisa conhecer para garantir reparação integral",
    description2: "Do dano emergente ao lucro cessante e do dano moral in re ipsa ao dano estético autônomo, entenda as categorias de lesão reconhecidas pelo direito civil brasileiro",
    image: "img/dano-material-dano-moral-distincoes-reparacao-indenizacao-civil.webp",
    link: "direito-civil/dano-material-dano-moral-distincoes-reparacao-indenizacao-civil.html",
    date: "2026-03-27T08:00:00",
  section: "featured-secundario"
},
{
    title: "União Estável Gera Direitos Tão Sólidos Quanto o Casamento",
    description: "Reconhecida pela Constituição Federal, a união estável produz efeitos jurídicos plenos sobre patrimônio, herança, alimentos e previdência social dos companheiros",
    description2: "Do contrato de convivência à equiparação sucessória pelo STF, entenda os direitos e deveres que decorrem da convivência afetiva no Brasil",
    image: "img/uniao-estavel-efeitos-juridicos-direitos-companheiros-brasil.webp",
    link: "direito-de-familia/uniao-estavel-efeitos-juridicos-direitos-companheiros-brasil.html",
    date: "2026-03-27T09:00:00",
 section: "featured-terciario"
},
  {
    title: "Legítima Defesa Entre o Direito e o Excesso",
    image: "img/legitima-defesa-requisitos-excesso-excludente-ilicitude-direito-penal.webp",
    link: "direito-penal/legitima-defesa-requisitos-excesso-excludente-ilicitude-direito-penal.html",
    date: "2026-03-27T09:00:00",
    section: "destaque"
  },
   {
   title: "Pejotização e a Fraude ao Vínculo Empregatício no Brasil",
    image: "img/pejotizacao-fraude-vinculo-empregaticio-direito-trabalhista.webp",
    link: "direito-trabalhista/pejotizacao-fraude-vinculo-empregaticio-direito-trabalhista.html",
    date: "2026-03-27T09:00:00",
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

