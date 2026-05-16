const posts = [
  
  

{  
  title: "Burocracia em Xeque e o Novo Estado",
  description: "A reforma administrativa divide juristas, servidores e parlamentares ao questionar o modelo de Estado construído pela Constituição de 1988",
  description2: "Entre eficiência fiscal e garantia de direitos, o debate sobre o serviço público definirá o Estado brasileiro das próximas décadas",
  image: "img/reforma-administrativa-estado-burocracia-eficiencia-publica.webp",
  link: "politica/reforma-administrativa-estado-burocracia-eficiencia-publica.html",
  date: "2026-05-18T07:00:00",
  section: "featured"
},
  {
  title: "Militar Armado Fora da Caserna e a Lei",
  description: "O porte de arma fora do serviço é prerrogativa legal do militar, mas impõe deveres de conduta e responsabilidade que não cessam com o expediente",
  description2: "Competência judicial, responsabilidade do Estado e limites disciplinares são os eixos centrais do debate no direito militar brasileiro",
  image: "img/porte-arma-militar-fora-servico-prerrogativa-responsabilidade.webp",
  link: "direito-militar/porte-arma-militar-fora-servico-prerrogativa-responsabilidade.html",
  date: "2026-05-18T07:00:00",
  section: "featured-secundario"
},
{
  title: "Improbidade Reformada e o Combate à Corrupção",
  description: "A Lei 14.230/2021 alterou profundamente os critérios de improbidade administrativa gerando divisão entre juristas e órgãos de controle",
  description2: "Dolo específico, prescrição retroativa e exclusividade do MP são os pontos mais polêmicos da reforma da improbidade",
  image: "img/lei-improbidade-reforma-combate-corrupcao-gestao-publica.webp",
  link: "legislacao/lei-improbidade-reforma-combate-corrupcao-gestao-publica.html",
  date: "2026-05-18T07:00:00",
 section: "featured-terciario"
},
  {
  title: "Reparação do Sofrimento e Critérios Judiciais",
  image: "img/jurisprudencia-danos-morais-criterios-indenizacao-judicial.webp",
  link: "jurisprudencia/jurisprudencia-danos-morais-criterios-indenizacao-judicial.html",
  date: "2026-05-18T07:00:00",
    section: "destaque"
  },
   {
  title: "Antitruste e Governança Competitiva nas Empresas",
  image: "img/compliance-concorrencial-antitruste-governanca-competitiva.webp",
  link: "compliance/compliance-concorrencial-antitruste-governanca-competitiva.html",
  date: "2026-05-18T07:00:00",
   section: "destaque"
  },
  {
  title: "Curatela Familiar e Dignidade da Vulnerabilidade",
  image: "img/curatela-protecao-familiar-dignidade-vulnerabilidade.webp",
  link: "direito-de-familia/curatela-protecao-familiar-dignidade-vulnerabilidade.html",
  date: "2026-05-18T07:00:00",
   section: "destaque"
  },
  {
  title: "Ignorância da Lei e Exclusão da Culpabilidade",
  image: "img/erro-tipo-proibicao-culpabilidade-dolo-exclusao.webp",
  link: "direito-penal/erro-tipo-proibicao-culpabilidade-dolo-exclusao.html",
  date: "2026-05-18T07:00:00",
 section: "veja"
  },
   {
  title: "Convivência Forçada e Conflito Entre Vizinhos",
  image: "img/direito-vizinhanca-perturbacao-sossego-conflito-propriedade.webp",
  link: "direito-civil/direito-vizinhanca-perturbacao-sossego-conflito-propriedade.html",
  date: "2026-05-18T07:00:00",
   section: "veja"
  },
  {
  title: "Risco no Trabalho e Remuneração Especial",
  image: "img/adicional-periculosidade-direito-remuneracao-risco.webp",
  link: "direito-trabalhista/adicional-periculosidade-direito-remuneracao-risco.html",
  date: "2026-05-15T17:00:00",
  section: "veja"
  },
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
  title: "Exclusão Ilegal de Militar e Direito ao Retorno",
  link: "direito-militar/exclusao-ilegal-militar-direito-retorno.html",
  date: "2026-05-14T07:00:00"
},
{
  title: "Fake News, Plataformas Digitais e o Dilema Regulatório",
  link: "politica/fake-news-plataformas-digitais-dilema-regulatorio.html",
  date: "2026-05-14T07:00:00"
},
{
  title: "Igualdade Racial no Brasil Além do Papel",
  link: "legislacao/igualdade-racial-brasil-alem-do-papel.html",
  date: "2026-05-14T07:00:00"
},
{
  title: "Distinguishing e a Arte de Superar Precedentes",
  link: "jurisprudencia/distinguishing-arte-superar-precedentes.html",
  date: "2026-05-14T07:00:00"
},
{
  title: "Verificação de Fornecedores e Risco Corporativo no Brasil",
  link: "compliance/verificacao-fornecedores-risco-corporativo-brasil.html",
  date: "2026-05-14T07:00:00"
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
title: "Democracia sob Pressão da Fragmentação Política Nacional",
    link: "politica/polarizacao-politica-instituicoes-democracia-brasileira.html",
source: "",
date: "2026-05-12T07:00:00"
},
{
title: "Crise Institucional e o Equilíbrio Republicano",
  link: "politica/crise-institucional-poderes-equilibrio-republica.html",
source: "",
date: "2026-05-11T07:00:00"
},
{
title: "Constitucionalismo e os Limites do Poder Político",
link: "politica/constitucionalismo-limites-poder-politico.html",
source: "",
date: "2026-05-06T03:00:00"
},
{
title: "Auditoria Interna Independente como Escudo Corporativo",
  link: "compliance/investigacoes-corporativas-independentes-governanca-empresarial.html",
source: "",
date: "2026-05-12T07:00:00"
},
{
title: "Controles Internos e a Matriz de Riscos Corporativa",
link: "compliance/matriz-riscos-controles-internos-governanca-corporativa.html",
source: "",
date: "2026-05-11T07:00:00"
},
{
title: "Riscos Corporativos e a Urgência do Mapeamento",
    link: "compliance/mapeamento-riscos-corporativos-governanca-empresarial.html",
source: "",
date: "2026-05-08T07:00:00"
},
{
 title: "Quando o Crime Não Pode Existir de Fato",
  link: "direito-penal/crime-impossivel-limites-punicao-direito-penal.html",
source: "",
date: "2026-05-12T07:00:00"
},
{
    title: "Namoro Sério ou União Estável? O Direito Decide",
  link: "direito-de-familia/namoro-qualificado-uniao-estavel-direitos-patrimoniais.html",
source: "",
date: "2026-05-13T07:00:00",
},
{
   title: "Audiência de Custódia e a Proteção do Preso",
    link: "direito-penal/audiencia-custodia-garantias-preso-flagrante.html",
source: "",
date: "2026-05-11T07:00:00"
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

