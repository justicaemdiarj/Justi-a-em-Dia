const posts = [
  
  
{
  title: "A Tese que Vale por Milhões de Processos",
  description: "Recursos repetitivos permitem que uma tese do STJ ou STF resolva milhões de litígios simultâneos",
  description2: "Entenda como o mecanismo que sobrestou o Judiciário também pode ser sua maior solução",
  image: "img/tese-vale-milhoes-processos-repetitivos.webp",
  link: "jurisprudencia/tese-vale-milhoes-processos-repetitivos.html",
  date: "2026-04-02T11:00:00",
  section: "featured"
},
  {
  title: "Integridade Corporativa Além do Papel Impresso",
  description: "Programas de integridade tornaram-se exigência legal e diferencial estratégico no mercado brasileiro",
  description2: "Da Lei Anticorrupção aos critérios ESG, a conformidade que protege e valoriza as organizações",
  image: "img/integridade-corporativa-alem-papel-impresso.webp",
  link: "compliance/integridade-corporativa-alem-papel-impresso.html",
  date: "2026-04-02T07:00:00",
  section: "featured-secundario"
},
{
  title: "Quando as Instituições Param de Funcionar Juntas",
  description: "A crise institucional expõe o colapso silencioso do equilíbrio entre os Poderes da República",
  description2: "Conflito interinstitucional, desconfiança pública e os limites constitucionais da disputa política",
  image: "img/quando-instituicoes-param-funcionar-juntas.webp",
  link: "politica/quando-instituicoes-param-funcionar-juntas.html",
  date: "2026-04-02T06:00:00",
 section: "featured-terciario"
},
  {
  title: "O Direito que Nasceu na Era dos Algoritmos",
  image: "img/direito-nasceu-era-algoritmos.webp",
  link: "legislacao/direito-nasceu-era-algoritmos.html",
  date: "2026-04-02T08:00:00",
    section: "destaque"
  },
   {
    title: "O Tempo a Mais que o Direito Protege",
  image: "img/tempo-mais-direito-protege-horas-extras.webp",
  link: "direito-trabalhista/tempo-mais-direito-protege-horas-extras.html",
  date: "2026-04-02T07:00:00",
    section: "destaque"
  },
  {
  title: "Sangue e Silêncio no Coração do Lar",
  image: "img/feminicidio-violencia-genero-lei-penal-brasil.webp",
  link: "direito-penal/feminicidio-violencia-genero-lei-penal-brasil.html",
  date: "2026-04-02T07:00:00",
    section: "destaque"
  },
  {
   
   title: "Alimentos sob Revisão, Direitos em Disputa",
  image: "img/pensao-alimenticia-revisao-direito-familia-brasil.webp",
  link: "direito-de-familia/pensao-alimenticia-revisao-direito-familia-brasil.html",
  date: "2026-04-02T12:00:00",
    section: "veja"
  },
  {
  title: "Contratos, Confiança e o Dever de Lealdade",
  image: "img/boa-fe-objetiva-contratos-direito-civil-brasil.webp",
  link: "direito-civil/boa-fe-objetiva-contratos-direito-civil-brasil.html",
  date: "2026-04-02T07:00:00",
    section: "veja"
  },
  {
  title: "Farda, Voz e os Limites Constitucionais",
  image: "img/liberdade-expressao-militar-limites-constitucionais-brasil.webp",
  link: "direito-militar/liberdade-expressao-militar-limites-constitucionais-brasil.html",
  date: "2026-04-02T09:00:00",
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
title: "Construir Compliance do Zero é Possível",
  link: "compliance/construir-compliance-do-zero-e-possivel.html",
source: "",
date: "2026-03-26T07:00:00"
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
 title: "Compliance como Pilar da Estratégia Corporativa Moderna",
  link: "compliance/compliance-pilar-estrategia-corporativa-moderna.html",
source: "",
date: "2026-03-24T07:00:00"
},
{
    title: "Quando o Judiciário Governa no Lugar do Parlamento",
  link: "politica/judiciario-governa-lugar-parlamento.html",
source: "",
date: "2026-04-01T07:00:00",
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

