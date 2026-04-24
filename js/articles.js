const posts = [
  
  

{ title: "Precedentes nas Decisões Administrativas e seu Alcance", 
  description: "A jurisprudência administrativa de TCU, agências reguladoras e CARF tem impacto econômico e jurídico crescente no Brasil", 
  description2: "Uniformização, vinculação e publicidade dos precedentes administrativos são demandas urgentes do Estado de direito", 
  image: "img/precedentes-decisoes-administrativas-alcance.webp", 
  link: "jurisprudencia/precedentes-decisoes-administrativas-alcance.html", 
  date: "2026-04-24T07:00:00",
  section: "featured"
},
  {
title: "Término da Convivência e Efeitos Patrimoniais Legais", 
description: "A dissolução da união estável gera efeitos jurídicos complexos no plano patrimonial, sucessório e alimentar dos companheiros", 
description2: "Partilha de bens, alimentos e direitos sucessórios são os principais desafios do término da convivência", image: "img/termino-convivencia-efeitos-patrimoniais-legais.webp", 
link: "direito-de-familia/termino-convivencia-efeitos-patrimoniais-legais.html", 
  date: "2026-04-24T11:00:00",
  section: "featured-secundario"
},
{
title: "Ilícitos Castrenses na Normalidade Institucional Brasileira", 
description: "Crimes militares em tempo de paz envolvem condutas que atentam contra hierarquia e bens juridicamente protegidos", 
description2: "Da deserção ao peculato militar, os ilícitos castrenses exigem equilíbrio entre lógica militar e garantias constitucionais", 
image: "img/ilicitos-castrenses-normalidade-institucional-brasileira.webp", 
link: "direito-militar/ilicitos-castrenses-normalidade-institucional-brasileira.html",
  date: "2026-04-24T09:00:00",
 section: "featured-terciario"
},
  {
title: "Imposições Contratuais Ilegítimas e a Defesa do Consumidor",
image: "img/imposicoes-contratuais-ilegitimas-defesa-consumidor.webp", 
link: "direito-civil/imposicoes-contratuais-ilegitimas-defesa-consumidor.html",
  date: "2026-04-24T07:00:00",
    section: "destaque"
  },
   {
title: "Avanço no Cumprimento da Pena e Critérios Legais",
image: "img/avanco-cumprimento-pena-criterios-legais.webp", 
link: "direito-penal/avanco-cumprimento-pena-criterios-legais.html",
  date: "2026-04-24T07:00:00",
    section: "destaque"
  },
  {
title: "Estatuto do Consumidor e seus Trinta Anos de Proteção",
image: "img/estatuto-consumidor-trinta-anos-protecao.webp", 
link: "legislacao/estatuto-consumidor-trinta-anos-protecao.html",
  date: "2026-04-24T12:00:00",
    section: "destaque"
  },
  {
title: "Vigilância Cidadã sobre o Poder Institucional Brasileiro",
image: "img/vigilancia-cidada-poder-institucional-brasileiro.webp", 
link: "politica/vigilancia-cidada-poder-institucional-brasileiro.html", 
  date: "2026-04-24T07:00:00",
    section: "veja"
  },
  {
title: "Fundo de Garantia e a Proteção do Vínculo Laboral",
 image: "img/fundo-garantia-protecao-vinculo-laboral.webp", 
 link: "direito-trabalhista/fundo-garantia-protecao-vinculo-laboral.html",
  date: "2026-04-24T07:00:00",
    section: "veja"
  },
  {
title: "Apuração Interna de Irregularidades e Seus Desafios",
image: "img/apuracao-interna-irregularidades-desafios.webp", 
link: "compliance/apuracao-interna-irregularidades-desafios.html",
  date: "2026-04-24T06:00:00",
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
 title: "Custódia Exclusiva e Proteção Integral da Criança",
  link: "direito-de-familia/custodia-exclusiva-protecao-integral-crianca.html",
  date: "2026-04-20T07:00:00"
},
{
  title: "Governança Sustentável e Integridade Corporativa em Foco",
  link: "compliance/governanca-sustentavel-integridade-corporativa-esg.html",
  date: "2026-04-09T07:00:00"
},
{
  title: "Conformidade Digital como Escudo Corporativo",
  link: "compliance/conformidade-digital-escudo-corporativo.html",
  date: "2026-04-16T07:00:00"
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
title: "Excesso de Poder e as Fronteiras da Autoridade Pública",
    link: "direito-penal/excesso-poder-fronteiras-autoridade-publica.html",
source: "",
date: "2026-04-20T07:00:00"
},
{
title: "Provas Obtidas Ilegalmente e Suas Consequências",
  link: "direito-penal/provas-obtidas-ilegalmente-consequencias.html",
source: "",
date: "2026-04-16T07:00:00"
},
{
title: "Comércio Ilícito de Entorpecentes e Sanções Penais no Brasil",
link: "direito-penal/comercio-ilicito-entorpecentes-sancoes-penais-brasil.html",
source: "",
date: "2026-04-15T03:00:00"
},
{
title: "Contratos Públicos sob Nova Arquitetura Normativa",
  link: "legislacao/contratos-publicos-nova-arquitetura-normativa.html",
source: "",
date: "2026-04-21T07:00:00"
},
{
title: "Constituição Digital e Direitos dos Usuários Online",
link: "legislacao/constituicao-digital-direitos-usuarios-online.html",
source: "",
date: "2026-04-20T07:00:00"
},
{
title: "Economia Invisível e os Direitos Negados ao Trabalhador",
    link: "direito-trabalhista/economia-invisivel-direitos-negados-trabalhador.html",
source: "",
date: "2026-04-21T07:00:00"
},
{
 title: "Fundo de Garantia e a Proteção do Vínculo Laboral",
  link: "direito-trabalhista/fundo-garantia-protecao-vinculo-laboral.html",
source: "",
date: "2026-04-23T07:00:00"
},
{
    title: "Fronteiras da Palavra e os Limites Democráticos",
  link: "politica/fronteiras-palavra-limites-democraticos-liberdade-expressao.html",
source: "",
date: "2026-04-21T07:00:00",
},
{
   title: "Vigilância Cidadã sobre o Poder Institucional Brasileiro",
    link: "politica/vigilancia-cidada-poder-institucional-brasileiro.html",
source: "",
 date: "2026-04-23T07:00:00"
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

