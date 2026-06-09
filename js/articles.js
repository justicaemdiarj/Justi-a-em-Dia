const posts = [
  
  

{ 
title: "Sem Controle Interno a Fraude Encontra Caminho Livre", 
description: "Os controles internos para prevenção de desvios são exigência normativa e estratégica com base no modelo COSO", 
description2: "Entenda o mapeamento de riscos, a cultura de integridade, a auditoria interna e o valor probatório dos programas de compliance", 
image: "img/controles-internos-prevencao-desvios-corporativos.webp", 
link: "compliance/controles-internos-prevencao-desvios-corporativos.html",
date: "2026-06-09T07:00:00",
  section: "featured" },
  {
title: "Quando o Juiz Decide o Que o Estado Deve Fazer", description: "O controle judicial de políticas públicas expande o Judiciário sobre decisões do Executivo e Legislativo no Brasil", 
description2: "Entenda a reserva do possível, o mínimo existencial, a judicialização da saúde e as decisões estruturais nos tribunais superiores", 
image: "img/juiz-decide-o-que-estado-deve-fazer.webp", 
link: "jurisprudencia/juiz-decide-o-que-estado-deve-fazer.html",
date: "2026-06-09T07:00:00",
  section: "featured-secundario"
},
{
title: "Assinar Digitalmente Tem Força de Lei No Brasil", 
description: "Os contratos eletrônicos e a assinatura digital têm plena validade jurídica no ordenamento brasileiro", 
description2: "Entenda o marco normativo, a prova dos contratos eletrônicos, os smart contracts e o futuro da contratação digital no Brasil", 
image: "img/assinar-digitalmente-tem-forca-lei-brasil.webp", 
link: "direito-civil/assinar-digitalmente-tem-forca-lei-brasil.html",
date: "2026-06-09T07:00:00",
 section: "featured-terciario"
},
  {
 title: "Como o Direito Penal Enfrenta Estruturas do Crime",
image: "img/como-direito-penal-enfrenta-estruturas-crime.webp", link: "direito-penal/como-direito-penal-enfrenta-estruturas-crime.html",
date: "2026-06-09T07:00:00",
    section: "destaque"
  },
   {
title: "A Lei Protege Quem Ainda Não Nasceu",
image: "img/lei-protege-quem-ainda-nao-nasceu.webp", link: "direito-de-familia/lei-protege-quem-ainda-nao-nasceu.html",
date: "2026-06-09T07:00:00",
   section: "destaque"
  },
  {
title: "A Farda Não Suprime o Direito de se Defender",
image: "img/farda-nao-suprime-direito-defender.webp", link: "direito-militar/farda-nao-suprime-direito-defender.html",
date: "2026-06-09T07:00:00",
   section: "destaque"
  },
  {
title: "Deficiência No Trabalho É Direito Que a Lei Assegura",
image: "img/deficiencia-trabalho-direito-lei-assegura.webp", link: "direito-trabalhista/deficiencia-trabalho-direito-lei-assegura.html",
date: "2026-06-09T07:00:00",
 section: "veja"
  },
   {
title: "Prestação de Contas É Dever de Todo Servidor Público",
 image: "img/prestacao-contas-dever-servidor-publico.webp", link: "politica/prestacao-contas-dever-servidor-publico.html",
date: "2026-06-09T07:00:00",
   section: "veja"
  },
  {
 title: "Resolver Disputas Sem Julgamento Público No Brasil",
image: "img/resolver-disputas-sem-julgamento-publico-brasil.webp", link: "legislacao/resolver-disputas-sem-julgamento-publico-brasil.html",
date: "2026-06-09T07:00:00",
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
  
{ title: "O Inimigo Que Usa Crachá e Conhece a Senha", 
  link: "compliance/inimigo-que-usa-cracha-conhece-senha.html", 
  date: "2026-06-02T07:00:00" 
},
{ title: "Sem Controle Interno a Fraude Encontra Caminho Livre", 
  link: "compliance/controles-internos-prevencao-desvios-corporativos.html", 
  date: "2026-05-26T07:00:00" },
{ title: "Como Investigar Assédio Sem Destruir a Empresa", 
  link: "compliance/como-investigar-assedio-sem-destruir-empresa.html", 
  date: "2026-06-04T07:00:00" 
},
{ title: "Quando o STF e o STJ Defendem Quem Não Tem Voz", 
  link: "jurisprudencia/stf-stj-defendem-quem-nao-tem-voz.html", 
  date: "2026-06-05T07:00:00" 
},
{ title: "A Maioria Não Pode Tudo Numa Democracia Real", 
  link: "politica/maioria-nao-pode-tudo-democracia-real.html", 
   date: "2026-06-02T07:00:00" 
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
title: "O Inimigo Que Usa Crachá e Conhece a Senha",
    link: "compliance/inimigo-que-usa-cracha-conhece-senha.html",
source: "",
date: "2026-06-02T07:00:00"
},
{
title: "O Dinheiro Público Que Não Presta Contas",
link: "politica/dinheiro-publico-que-nao-presta-contas.html",
source: "",
date: "2026-05-28T07:00:00"
},
{
title: "Quando o STF e o STJ Defendem Quem Não Tem Voz",
link: "jurisprudencia/stf-stj-defendem-quem-nao-tem-voz.html",
source: "",
date: "2026-06-05T03:00:00"
},
{
title: "A Oportunidade Perdida Que Gera Direito à Indenização",
  link: "direito-civil/oportunidade-perdida-gera-direito-indenizacao.html",
source: "",
date: "2026-06-01T07:00:00"
},
{
title: "Gravidez No Trabalho É Direito Que a Empresa Não Pode Ignorar",
link: "direito-trabalhista/gravidez-trabalho-direito-empresa-nao-pode-ignorar.html",
source: "",
date: "2026-06-08T07:00:00"
},
{
title: "Governar No Brasil Custa Caro e Exige Concessões",
 link: "politica/governar-brasil-custa-caro-exige-concessoes.html",
source: "",
date: "2026-06-08T07:00:00"
},
{
 title: "Regime De Bens Define o Futuro do Patrimônio Conjugal",
  link: "direito-de-familia/regime-bens-define-futuro-patrimonio-conjugal.html",
source: "",
date: "2026-06-08T07:00:00"
},
{
    title: "A Lei Protege Com Mais Rigor Quem Não Pode Se Defender",
  link: "direito-penal/lei-protege-rigor-quem-nao-pode-defender.html",
source: "",
date: "2026-06-08T07:00:00"
},
{
   title: "A Maioria Não Pode Tudo Numa Democracia Real",
    link: "politica/maioria-nao-pode-tudo-democracia-real.html",
source: "",
date: "2026-06-02T07:00:00"
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

