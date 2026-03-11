const posts = [
{
  
  title: "Leilão de Imóvel Exige Notificação Prévia ao Devedor",
  description: "A execução extrajudicial de imóveis por alienação fiduciária só é válida quando o credor comprova ter esgotado todos os meios de intimação pessoal do devedor",
  description2: "Consolidação de propriedade sem notificação adequada é nula de pleno direito, reafirma Justiça Federal",
  image: "img/leilao-extrajudicial-notificacao-devedor-imovel.jpg",
  link: "direito-civil/leilao-extrajudicial-notificacao-devedor-imovel.html",
  date: "2026-03-11T07:00:00",
  section: "featured"
},
  {
  title: "Mediação Familiar Ganha Força em Mutirão Virtual",
  description: "Cejusc de Fortaleza mobiliza 50 mediadores em 20 salas virtuais para resolver 266 demandas familiares acumuladas nas Varas de Família da Capital",
  description2: "Mutirão virtual do TJCE reafirma a mediação como caminho prioritário para pacificação de conflitos familiares",
  image: "img/cejusc-fortaleza-mutirao-virtual-mediacao-familia.jpg",
  link: "direito-de-familia/cejusc-fortaleza-mutirao-virtual-mediacao-familia.html",
  date: "2026-03-11T07:00:00",
  section: "featured-secundario"
},
{
title: "Esposa de Moraes Detalha Contrato Milionário com Master",
  description: "Escritório Barci de Moraes divulgou nota detalhando 36 pareceres e 94 reuniões ao Banco Master em contrato de R$ 129 milhões voltado a compliance e código de ética, negando qualquer atuação perante o STF",
  description2: "O caso expõe tensão institucional grave entre os vínculos financeiros da família Moraes e a instituição controlada por Daniel Vorcaro, preso pela PF e submetido a liquidação extrajudicial pelo Banco Central",
  image: "img/viviane-barci-moraes-contrato-banco-master-compliance-etica.jpg",
  link: "compliance/viviane-barci-moraes-contrato-banco-master-compliance-etica.html",
  date: "2026-03-11T07:00:00",
 section: "featured-terciario"
},
  {
   title: "Suspeita de Homicídio Deixa Prisão Preventiva",
   image: "img/suspeita-homicidio-liberdade-prisao-preventiva-bento-goncalves.jpg",
  link: "direito-penal/suspeita-homicidio-liberdade-prisao-preventiva-bento-goncalves.html",
  date: "2026-03-11T07:00:00",
    section: "destaque"
  },
   {
    title: "Nexo Causal Ausente Derruba Pedido de Indenização Trabalhista",
   image: "img/nexo-causal-ausente-indenizacao-acidente-trabalho-improcedente.jpg",
  link: "direito-trabalhista/nexo-causal-ausente-indenizacao-acidente-trabalho-improcedente.html",
  date: "2026-03-11T07:00:00",
    section: "destaque"
  },
  {
    title: "Militares Doentes Ganham Isenção Previdenciária em Minas",
    image: "img/isencao-previdenciaria-militares-doencas-graves-minas-gerais-zema.jpg",
  link: "direito-militar/isencao-previdenciaria-militares-doencas-graves-minas-gerais-zema.html",
  date: "2026-03-11T07:00:00",
    section: "destaque"
  },
  {
   
    title: "TST Pune Uso de Precedentes Falsos Gerados por IA",
 image: "img/tst-pune-precedentes-falsos-ia-litigancia-ma-fe-telecom.jpg",
  link: "jurisprudencia/tst-pune-precedentes-falsos-ia-litigancia-ma-fe-telecom.html",
  date: "2026-03-11T07:00:00",
    section: "veja"
  },
  {
    title: "Reforma Legislativa Reestrutura Proteção do Produtor Rural",
    image: "img/reforma-legislativa-seguro-rural-pl-2951-plano-safra-2026.jpg",
    link: "legislacao/reforma-legislativa-seguro-rural-pl-2951-plano-safra-2026.html",
    date: "2026-03-11T07:00:00",
    section: "veja"
  },
  {
    title: "Direita Fragmentada Aposta Tudo em Flávio Bolsonaro",
    image: "img/direita-fragmentada-flavio-bolsonaro-eleicoes-2026.jpg",
  link: "politica/direita-fragmentada-flavio-bolsonaro-eleicoes-2026.html",
  date: "2026-03-11T07:00:00",
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
    title: "Suspensão de Dívida Ativa: o Que a Lei Garante",
    link: "direito-civil/divida-ativa-suspensao-pagamentos-lei-superendividamento.html",
    date: "2026-03-09T07:00:00"
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
 title: "Suspeita de Homicídio Deixa Prisão Preventiva",
  link: "direito-penal/suspeita-homicidio-liberdade-prisao-preventiva-bento-goncalves.html",
  date: "2026-03-11T07:00:00"
},
 {
   title: "Assédio Moral Explode nas Varas Trabalhistas",
    link: "direito-trabalhista/assedio-moral-dano-moral-acoes-trabalhistas-burnout-crescimento.html",
    date: "2026-03-10T07:00:00"
},
    {
 title: "Direita Fragmentada Aposta Tudo em Flávio Bolsonaro",
  link: "politica/direita-fragmentada-flavio-bolsonaro-eleicoes-2026.html",
  date: "2026-03-11T07:00:00"
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
title: "Leilão de Imóvel Exige Notificação Prévia ao Devedor",
  link: "direito-civil/leilao-extrajudicial-notificacao-devedor-imovel.html",
source: "",
date: "2026-03-11T07:00:00"
},
{
title: "Tarcísio Enterra Terceira Via em 2026",
link: "politica/tarcisio-enterra-terceira-via-eleicoes-2026.html",
source: "",
date: "2026-03-10T03:00:00"
},
{
title: "Receita Falsa Opioide e a Semi-Imputabilidade",
  link: "direito-penal/receita-falsa-opioide-semi-imputabilidade-condenacao-penal.html",
source: "",
date: "2026-03-10T07:00:00"
},
{
title: "Consumidor Brasileiro Desprotegido Frente à Europa",
link: "direito-civil/armadilhas-digitais-consumidor-brasileiro-desprotegido-frente-europa.html",
source: "",
date: "2026-03-08T07:00:00"
},
{
title: "Droga Apreendida Afasta Benefício Penal?",
    link: "direito-penal/stj-quantidade-droga-trafico-privilegiado-dosimetria-pena.html",
source: "",
date: "2026-03-08T07:00:00"
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

