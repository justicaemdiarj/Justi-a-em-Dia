const posts = [
{
    title: "Diálogos de Vorcaro Ameaçam Provas no STF",
    description: "STF abre inquérito após vazamento de mensagens do celular do dono do Banco Master",
    description2: "Especialistas alertam que ilicitude pode gerar nulidades e comprometer todo o processo",
    image: "img/vorcaro-dialogos-vazamento-nulidade-provas-stf-banco-master.jpg",
    link: "politica/vorcaro-dialogos-vazamento-nulidade-provas-stf-banco-master.html",
    date: "2026-03-10T07:00:00",
  section: "featured"
},
  {
    title: "Senado Endurece Proteção Contra Feminicídio",
    description: "PL 953/2026 eleva pena máxima para 50 anos e cria cadastro nacional de condenados por violência doméstica",
    description2: "Projeto tipifica instigação por terceiros e amplia medidas protetivas no ano dos 20 anos da Lei Maria da Penha",
    image: "img/senado-feminicidio-pena-maxima-protecao-mulheres-pl-953.jpg",
    link: "legislacao/senado-feminicidio-pena-maxima-protecao-mulheres-pl-953.html",
    date: "2026-03-10T07:00:00",
  section: "featured-secundario"
},
{
   title: "Fuga à Viatura Abre Porta Sem Mandado",
    description: "STJ consolida que correr ao ver a polícia e entrar em casa justifica ingresso policial forçado sem mandado",
    description2: "Tese divide doutrinadores e tensiona a inviolabilidade constitucional do domicílio",
    image: "img/fuga-viatura-policial-domicilio-sem-mandado-stj-jurisprudencia.jpg",
    link: "jurisprudencia/fuga-viatura-policial-domicilio-sem-mandado-stj-jurisprudencia.html",
    date: "2026-03-10T07:00:00",
 section: "featured-terciario"
},
  {
    title: "Três Caminhos, Uma Escolha Decisiva no Divórcio",
   image: "img/divorcio-extrajudicial-consensual-litigioso-diferencas.jpg",
    link: "direito-de-familia/divorcio-extrajudicial-consensual-litigioso-diferencas.html",
    date: "2026-03-09T07:00:00",
    section: "destaque"
  },
   {
    title: "Receita Falsa Opioide e a Semi-Imputabilidade",
    image: "img/receita-falsa-opioide-semi-imputabilidade-condenacao-penal.jpg",
  link: "direito-penal/receita-falsa-opioide-semi-imputabilidade-condenacao-penal.html",
  date: "2026-03-10T07:00:00",
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
     title: "Compliance Virou Escudo Jurídico das Empresas",
     image: "img/compliance-escudo-juridico-governanca-empresas-lei-anticorrupcao.jpg",
    link: "compliance/compliance-escudo-juridico-governanca-empresas-lei-anticorrupcao.html",
    date: "2026-03-10T07:00:00",
    section: "veja"
  },
  {
    title: 'Assédio Moral Explode nas Varas Trabalhistas',
    image: "img/assedio-moral-dano-moral-acoes-trabalhistas-burnout-crescimento.jpg",
    link: "../direito-trabalhista/assedio-moral-dano-moral-acoes-trabalhistas-burnout-crescimento.html",
    date: "2026-03-10T07:00:00",
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
    title: "Compliance Virou Escudo Jurídico das Empresas",
    link: "compliance/compliance-escudo-juridico-governanca-empresas-lei-anticorrupcao.html",
    date: "2026-03-10T07:00:00"
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
   title: "Assédio Moral Explode nas Varas Trabalhistas",
    link: "direito-trabalhista/assedio-moral-dano-moral-acoes-trabalhistas-burnout-crescimento.html",
    date: "2026-03-10T07:00:00"
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
title: "Receita Falsa Opioide e a Semi-Imputabilidade",
  link: "direito-penal/receita-falsa-opioide-semi-imputabilidade-condenacao-penal.html",
source: "",
date: "2026-03-10T07:00:00"
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
    link: "direito-militar/sentinelas-mpm-protecao-mulheres-forcas-armadas.html",
source: "",
date: "2026-03-09T07:00:00"
},
{
    title: "Compliance Virou Escudo Jurídico das Empresas",
  link: "compliance/compliance-escudo-juridico-governanca-empresas-lei-anticorrupcao.html",
source: "",
date: "2026-03-10T07:00:00",
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

