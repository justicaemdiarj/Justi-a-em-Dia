const posts = [
{
    title: "Suspensão de Dívida Ativa: o Que a Lei Garante",
    description: "A Lei do Superendividamento permite suspender pagamentos por até seis meses mediante análise judicial",
    description2: "Entenda quais dívidas são alcançadas pela norma e como acionar o mecanismo de proteção ao consumidor",
    image: "img/divida-ativa-suspensao-pagamentos-lei-superendividamento.jpg",
    link: "direito-civil/divida-ativa-suspensao-pagamentos-lei-superendividamento.html",
    date: "2026-03-09T07:00:00",
  section: "featured"
},
  {
   title: "SentinELAS Chega Para Proteger Recrutas Femininas",
    description: "MPM lança app de proteção jurídica para mulheres no Serviço Militar Inicial Feminino",
    description2: "Ferramenta reúne canais de denúncia, orientação jurídica e conteúdo educativo para recrutas",
    image: "img/sentinelas-mpm-protecao-mulheres-forcas-armadas.jpg",
    link: "direito-militar/sentinelas-mpm-protecao-mulheres-forcas-armadas.html",
    date: "2026-03-09T07:00:00",
  section: "featured-secundario"
},
{
 title: "Droga Apreendida Afasta Benefício Penal?",
 description: "A 3ª Seção do STJ suspendeu o julgamento dos Temas Repetitivos 1.154 e 1.241",
description2:"Natureza da droga podem afastar o tráfico privilegiado ou modular a fração de redução da pena na dosimetria penal",
 image: "img/stj-quantidade-droga-trafico-privilegiado-dosimetria-pena.jpg",
 link: "direito-penal/stj-quantidade-droga-trafico-privilegiado-dosimetria-pena.html",
 date: "2026-03-08T07:00:00",
 section: "featured-terciario"
},
  {
    title: "Droga Apreendida Afasta Benefício Penal?",
   image: "img/stj-quantidade-droga-trafico-privilegiado-dosimetria-pena.jpg",
    link: "direito-penal/stj-quantidade-droga-trafico-privilegiado-dosimetria-pena.html",
    date: "2026-03-08T07:00:00",
    section: "destaque"
  },
   {
    title: "Tarcísio Enterra Terceira Via em 2026",
    image: "img/tarcisio-enterra-terceira-via-eleicoes-2026.jpg",
    link: "politica/tarcisio-enterra-terceira-via-eleicoes-2026.html",
    date: "2026-03-09T07:00:00",
    section: "destaque"
  },
  {
    title: "Licença Paternidade Vai Até Vinte Dias",
    image: "img/senado-licenca-paternidade-ampliacao-lei-previdencia.jpg",
    link: "legislacao/senado-licenca-paternidade-ampliacao-lei-previdencia.html",
    date: "2026-03-09T07:00:00",
    section: "destaque"
  },
  {
   
    title: "Compliance Como Escudo Invisível Consumidor",
    image: "img/compliance-escudo-invisivel-protecao-consumidor.jpg",
    link: "compliance/compliance-escudo-invisivel-protecao-consumidor.html",
    date: "2026-03-09T07:00:00",
    section: "veja"
  },
  {
    title: "Lula Apoia Paes no RJ, Mas Exige Chapa Competitiva",
    image: "img/lula-apoio-paes-rj-chapa-competitiva-eleicoes-2026.jpg",
    link: "politica/lula-apoio-paes-rj-chapa-competitiva-eleicoes-2026.html",
    date: "2026-03-08T07:00:00",
    section: "veja"
  },
  {
    title: "Processos Explodem na Justiça",
   image: "img/assedio-moral-sexual-processos-trabalhistas-aumento-2025.jpg",
    link: "direito-trabalhista/assedio-moral-sexual-processos-trabalhistas-aumento-2025.html",
    date: "2026-03-08T07:00:00",
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
    title: "Dez Anos do CPC",
    link: "jurisprudencia/dez-anos-cpc-2015-webinar-legado-jurisprudencia.html",
    date: "2026-03-07T07:00:00"
},
{
    title: "Tolerância zero: o arcabouço legal contra violência feminina",
    link: "direito-de-familia/tolerancia-zero-arcabouco-legal-violencia-contra-mulher.html",
    date: "2026-03-06T07:00:00"
},
{
    title: "Licença Paternidade Vai Até Vinte Dias",
    link: "legislacao/senado-licenca-paternidade-ampliacao-lei-previdencia.html",
    date: "2026-03-09T07:00:00"
},
{
      title: "Droga Apreendida Afasta Benefício Penal?",
      link: "direito-penal/stj-quantidade-droga-trafico-privilegiado-dosimetria-pena.html",
      date: "2026-03-08T07:00:00"
},
 {
    title: "Rio Protege Servidores do Assédio Funcional",
    link: "direito-trabalhista/rio-protege-servidores-assedio-funcional-guia-smit.html",
    date: "2026-03-07T07:00:00"
},
    {
    title: "Código Civil Ignora a Família Real",
    link: "direito-de-familia/codigo-civil-ignora-familia-real-reforma-urgente-sucessoes.html",
    date: "2026-03-07T07:00:00"
    }
    ,
    {
    title: "PMs Viram Réus por Roubo Fardado",
    link: "direito-militar/pms-presos-roubo-celulares-onibus-expediente-rj-2026.html",
    date: "2026-03-07T07:00:00"
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
  title: "Licença Paternidade Vai Até Vinte Dias",
    link: "legislacao/senado-licenca-paternidade-ampliacao-lei-previdencia.html",
source: "",
date: "2026-03-09T07:00:00"
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
title: "PMs Viram Réus por Roubo Fardado",
link: "direito-militar/pms-presos-roubo-celulares-onibus-expediente-rj-2026.html",
source: "",
date: "2026-03-07T07:00:00"
},
{
title: "Compliance Como Escudo Invisível Consumidor",
    link: "compliance/compliance-escudo-invisivel-protecao-consumidor.html",
source: "",
date: "2026-03-09T07:00:00"
},
{
title: "SentinELAS Chega Para Proteger Recrutas Femininas",
    link: "politica/sentinelas-mpm-protecao-mulheres-forcas-armadas.html",
source: "",
date: "2026-03-09T07:00:00"
},
{
title: "Tolerância zero: o arcabouço legal contra violência feminina",
link: "direito-de-familia/tolerancia-zero-arcabouco-legal-violencia-contra-mulher.html",
source: "",
date: "2026-03-06T07:00:00"
},
{
   title: "STJ e Seguro de Vida Blindagem Jurisprudencial",
    link: "jurisprudencia/stj-seguro-vida-blindagem-jurisprudencial-agravamento-risco.html",
source: "",
 date: "2026-03-09T07:00:00"
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

