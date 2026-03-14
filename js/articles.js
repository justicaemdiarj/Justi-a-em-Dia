const posts = [
{
  
  title: "Quando o Passado Condena o Presente",
  description: "Ex-agente condenado por facilitação de contrabando é nomeado para cargo de compliance em prefeitura brasileira",
  description2: "A contradição entre o histórico criminal do indicado e a função designada expõe o uso político e distorcido dos princípios de integridade e governança pública",
  image: "img/ex-agente-preso-contrabando-cargo-compliance-prefeitura.webp",
  link: "compliance/ex-agente-preso-contrabando-cargo-compliance-prefeitura.html",
    date: "2026-03-14T07:00:00",
  section: "featured"
},
  {
    title: "Código Civil Ganha Nova Chance de Evolução",
    description: "Senado reúne juristas de referência para debater responsabilidade civil e modernizar o Código Civil",
    description2: "PL 4/2025 propõe revisar mais de 900 artigos e incluir capítulo inédito sobre direito digital",
    image: "img/codigo-civil-atualizacao-responsabilidade-civil-debate-senado-2026.webp",
    link: "direito-civil/codigo-civil-atualizacao-responsabilidade-civil-debate-senado-2026.html",
    date: "2026-03-14T07:00:00",
  section: "featured-secundario"
},
{
    title: "Lula e Flávio Empatam pela Primeira Vez",
    description: "Pesquisa Quaest mostra empate inédito entre Lula e Flávio Bolsonaro no segundo turno de 2026",
    description2: "Aprovação do governo cai ao menor nível desde julho de 2025 com desgaste acumulado",
    image: "img/quaest-lula-flavio-empatados-41-segundo-turno-2026.webp",
    link: "politica/quaest-lula-flavio-empatados-41-segundo-turno-2026.html",
    date: "2026-03-14T07:00:00",
 section: "featured-terciario"
},
  {
 title: "Cerrado Ganha Força Legislativa em Goiás",
      image: "img/gomide-leis-ambientais-cerrado-goias-sementes-cerrado.webp",
    link: "legislacao/gomide-leis-ambientais-cerrado-goias-sementes-cerrado.html",
  date: "2026-03-14T07:00:00",
    section: "destaque"
  },
   {
  title: "Violência Doméstica em Números que Assustam",
    image: "img/violencia-domestica-numeros-sc-brasil-feminicidio-medidas-protetivas.webp",
    link: "direito-de-familia/violencia-domestica-numeros-sc-brasil-feminicidio-medidas-protetivas.html",
  date: "2026-03-14T07:00:00",
    section: "destaque"
  },
  {
     title: "Habeas Corpus Amordaçado pela Jurisprudência",
   image: "img/habeas-corpus-vedacao-debate-fatico-prisao-preventiva-inconstitucional.webp",
    link: "direito-penal/habeas-corpus-vedacao-debate-fatico-prisao-preventiva-inconstitucional.html",
 date: "2026-03-14T07:00:00",
    section: "destaque"
  },
  {
   
    title: "Aplicativos Vencem a Batalha do Vínculo Trabalhista",
     image: "img/plp-152-2025-vinculo-empregaticio-motoristas-aplicativos-regulamentacao.webp",
    link: "direito-trabalhista/plp-152-2025-vinculo-empregaticio-motoristas-aplicativos-regulamentacao.html",
    date: "2026-03-14T07:00:00",
    section: "veja"
  },
  {
  title: "Agências de Viagem Ganham Terreno no Judiciário",
 image: "img/agencias-viagem-responsabilidade-solidaria-jurisprudencia-stj-turismo.webp",
    link: "jurisprudencia/agencias-viagem-responsabilidade-solidaria-jurisprudencia-stj-turismo.html",
  date: "2026-03-14T07:00:00",
    section: "veja"
  },
  {
 title: "Danos Morais na Justiça Militar Ganham Piso",
  image: "img/stm-danos-morais-indenizacao-minima-jurisprudencia-vitimas.webp",
  link: "direito-militar/stm-danos-morais-indenizacao-minima-jurisprudencia-vitimas.html",
  date: "2026-03-14T07:00:00",
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
 title: "PGFN Cria Laboratório de Teses da Reforma Tributária",
  link: "legislacao/pgfn-incubadora-teses-reforma-tributaria-ibs-cbs-contencioso.html",
  date: "2026-03-11T07:00:00"
},
{
    title: "Compliance Virou Escudo Jurídico das Empresas",
    link: "compliance/compliance-escudo-juridico-governanca-empresas-lei-anticorrupcao.html",
    date: "2026-03-10T07:00:00"
},
{
 title: "Itaú Fecha Contas de Securitizadora Ligada ao Master",
  link: "compliance/itau-encerra-contas-cri-base-securitizadora-compliance-zero-master.html",
  date: "2026-03-11T07:00:00"
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
title: "Proteção ou Vigilância Digital sobre Crianças e Jovens",
    link: "direito-de-familia/lei-eca-digital-privacidade-criancas-adolescentes.html",
source: "",
date: "2026-03-12T07:00:00"
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
title: "Obra Mal Feita, Quem Paga a Conta ao Consumidor",
    link: "direito-civil/responsabilidade-fornecedor-obras-cdc-obrigacao-resultado.html",
source: "",
date: "2026-03-13T07:00:00"
},
{
 title: "ANPP Chega à Justiça Militar Brasileira",
  link: "direito-militar/anpp-justica-militar-acordo-nao-persecucao-penal-aplicacao.html",
source: "",
date: "2026-03-12T07:00:00"
},
{
    title: "Compliance Virou Escudo Jurídico das Empresas",
  link: "compliance/compliance-escudo-juridico-governanca-empresas-lei-anticorrupcao.html",
source: "",
date: "2026-03-10T07:00:00",
},
{
   title: "STJ Garante Dividendos ao Ex-Cônjuge Até Partilha Final",
    link: "direito-de-familia/stj-dividendos-ex-conjuge-cotista-anomalo-apuracao-haveres.html",
source: "",
 date: "2026-03-13T07:00:00"
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

