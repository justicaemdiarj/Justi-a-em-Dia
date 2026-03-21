const posts = [
  
{
    title: "Governo Abaixo da Régua Histórica da Reeleição",
    description: "Aprovação cai abaixo de 40% em pesquisas e coloca presidente no mesmo patamar de governantes que perderam eleições desde 2002",
    description2: "Rejeição pessoal de 57% supera insatisfação com o governo e acende alerta sobre viabilidade da candidatura à reeleição",
    image: "img/governo-abaixo-regua-historica-reeleicao.webp",
    link: "politica/governo-abaixo-regua-historica-reeleicao.html",
    date: "2026-03-21T07:00:00",
  section: "featured"
},
  {
    title: "Conformidade Jurídica como Escudo e Espada Corporativa",
    description: "O compliance migrou do departamento jurídico para o centro das decisões estratégicas corporativas no Brasil",
    description2: "Organizações com cultura de conformidade sólida protegem sua reputação e atraem capital qualificado",
    image: "img/conformidade-juridica-escudo-espada-vantagem-corporativa.webp",
    link: "compliance/conformidade-juridica-escudo-espada-vantagem-corporativa.html",
    date: "2026-03-21T06:00:00",
  section: "featured-secundario"
},
{
    title: "Testamento e Jurisprudência no Fio da Navalha",
    description: "Tribunais brasileiros definem os contornos válidos das disposições de última vontade no direito sucessório",
    description2: "Entre a legítima intocável e a autonomia testamentária, a jurisprudência traça limites precisos",
    image: "img/testamento-disposicoes-jurisprudencia-direito-sucessorio-brasil.webp",
    link: "jurisprudencia/testamento-disposicoes-jurisprudencia-direito-sucessorio-brasil.html",
    date: "2026-03-21T08:00:00",
 section: "featured-terciario"
},
  {
        title: "Boletim Eleitoral Paulatino Fortalece Transparência Jurisprudencial",
    image: "img/boletim-eleitoral-fortalece-transparencia-jurisprudencial-tre-pr.webp",
    link: "legislacao/boletim-eleitoral-fortalece-transparencia-jurisprudencial-tre-pr.html",
    date: "2026-03-20T07:00:00",
    section: "destaque"
  },
   {
    title: "TSE Recria Censura Eleitoral pela Via Jurisprudencial",
    image: "img/tse-recria-censura-eleitoral-via-jurisprudencial.webp",
    link: "jurisprudencia/tse-recria-censura-eleitoral-via-jurisprudencial.html",
    date: "2026-03-20T07:00:00",
    section: "destaque"
  },
  {
     title: "Norma Técnica Redefine Governança Fiscal Empresarial",
    image: "img/norma-tecnica-redefine-governanca-fiscal-empresarial.webp",
    link: "compliance/norma-tecnica-redefine-governanca-fiscal-empresarial.html",
    date: "2026-03-20T07:00:00",
    section: "destaque"
  },
  {
   
  title: "Exclusão da Defesa em Escuta Infantil Anula Sentença",
    image: "img/exclusao-defesa-escuta-infantil-anula-sentenca.webp",
    link: "direito-penal/exclusao-defesa-escuta-infantil-anula-sentenca.html",
    date: "2026-03-20T07:00:00",
    section: "veja"
  },
  {
   title: "Divórcio Unilateral em Cartório Transforma Direito Familiar",
    image: "img/divorcio-unilateral-cartorio-transforma-direito-familiar.webp",
    link: "direito-de-familia/divorcio-unilateral-cartorio-transforma-direito-familiar.html",
    date: "2026-03-20T07:00:00",
    section: "veja"
  },
  {
    title: "Oficial Preso por Feminicídio Abala Corporação Paulista",
    image: "img/oficial-preso-feminicidio-abala-corporacao-paulista.webp",
    link: "direito-militar/oficial-preso-feminicidio-abala-corporacao-paulista.html",
    date: "2026-03-20T07:00:00",
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
 title: "Compliance Como Barreira Contra Fraudes Corporativas",
  link: "compliance-prevencao-fraude-controles-internos-governanca-corporativa.html",
  date: "2026-03-19T07:00:00"
},
{
    title: "Tokens Imobiliários e o Fólio Real Brasileiro",
    link: "direito-civil/tokens-imobiliarios-folio-real-matricula-registro.html",
    date: "2026-03-19T07:00:00"
},
{
 title: "Cerrado Ganha Força Legislativa em Goiás",
  link: "legislacao/gomide-leis-ambientais-cerrado-goias-sementes-cerrado.html",
  date: "2026-03-14T07:00:00"
},
{
 title: "Como Provar Assédio no Ambiente de Trabalho",
  link: "direito-trabalhista/assedio-moral-sexual-trabalho-provas-denunciar-mpt-cartilha.html",
  date: "2026-03-15T07:00:00"
},
 {
   title: "Insalubridade Para Motoboys a Partir de Abril",
    link: "direito-trabalhista/insalubridade-motoboys-entregadores-abril-2026-direitos-trabalhistas.html",
    date: "2026-03-17T07:00:00"
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
title: "Senado Guia Mulheres Para a Política",
link: "politica/senado-guia-candidata-mulheres-politica-representatividade-cotas-genero.html",
source: "",
date: "2026-03-17T03:00:00"
},
{
title: "SP Reestrutura Compliance Policial Após Escândalo",
  link: "compliance/sp-decreto-reestruturacao-compliance-policias-corrupcao-integridade.html",
source: "",
date: "2026-03-18T07:00:00"
},
{
title: "Tocantins Avança no Debate Nacional de Compliance",
link: "compliance/tocantins-congresso-compliance-governanca-integridade-palmas.html",
source: "",
date: "2026-03-16T07:00:00"
},
{
title: "Quando o Judiciário Vira Instrumento de Opressão",
    link: "direito-de-familia/litigancia-predatoria-familia-judiciario-instrumento-opressao.html",
source: "",
date: "2026-03-19T07:00:00"
},
{
 title: "Holding Familiar e a Divisão do Patrimônio",
  link: "direito-de-familia/holding-familiar-partilha-bens-sucessao-patrimonial-divorcio-heranca.html",
source: "",
date: "2026-03-18T07:00:00"
},
{
    title: "Código Civil Ganha Nova Chance de Evolução",
  link: "direito-civil/codigo-civil-atualizacao-responsabilidade-civil-debate-senado-2026.html",
source: "",
date: "2026-03-14T07:00:00",
},
{
   title: "Contraditório nas Cautelares Penais em Debate",
    link: "direito-penal/medidas-cautelares-direito-contraditorio-processo-penal-garantias.html",
source: "",
 date: "2026-03-18T07:00:00"
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

