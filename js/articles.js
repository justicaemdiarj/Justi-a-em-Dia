const posts = [
  
{
  title: "Compliance Como Barreira Contra Fraudes Corporativas",
  description: "O compliance antifrude integra controles internos, cultura de integridade e tecnologia para proteger organizações das fraudes que custam trilhões ao mercado global",
  description2: "Programa de prevenção efetivo reduz janela de oportunidade, limita exposição jurídica e fortalece a sustentabilidade das organizações",
  image: "img/compliance-prevencao-fraude-controles-internos-governanca-corporativa.webp",
  link: "compliance/compliance-prevencao-fraude-controles-internos-governanca-corporativa.html",
  date: "2026-03-19T07:00:00",
  section: "featured"
},
  {
    title: "Tokens Imobiliários e o Fólio Real Brasileiro",
    description: "A tokenização imobiliária avança no Brasil, mas esbarra na ausência de marco registral sólido. Sem o assentamento do criptoativo na matrícula, o negócio carece de segurança jurídica.",
    description2: "Sem registro na matrícula imobiliária, o token não transfere propriedade e pode expor emissores a riscos penais e civis graves.",
    image: "img/tokens-imobiliarios-folio-real-matricula-registro.webp",
    link: "direito-civil/tokens-imobiliarios-folio-real-matricula-registro.html",
    date: "2026-03-19T07:00:00",
  section: "featured-secundario"
},
{
    title: "A Velha Guarda do PT Volta ao Front",
    description: "Histórico aliado de Lula profere discurso que antecipa a narrativa de combate da campanha petista de 2026, convocando a esquerda à mobilização em evento que reuniu ministros, parlamentares e lideranças do Centrão.",
    description2: "O retorno da velha guarda do PT à cena eleitoral integra estratégia deliberada de Lula para reforçar a base aliada no Congresso e fortalecer a campanha pela reeleição presidencial.",
    image: "img/velha-guarda-pt-retorno-campanha-lula-reeleicao-2026.webp",
    link: "politica/velha-guarda-pt-retorno-campanha-lula-reeleicao-2026.html",
    date: "2026-03-19T07:00:00",
 section: "featured-terciario"
},
  {
    title: "Brasil Endurece o Cerco ao Crime Organizado",
    image: "img/marco-legal-crime-organizado-legislacao-penal-2025.webp",
    link: "direito-penal/marco-legal-crime-organizado-legislacao-penal-2025.html",
    date: "2026-03-19T07:00:00",
    section: "destaque"
  },
   {
   title: "Churrasco no Atestado Custa o Emprego",
    image: "img/justa-causa-atestado-medico-churrasco-redes-sociais-trt-go.webp",
    link: "direito-trabalhista/justa-causa-atestado-medico-churrasco-redes-sociais-trt-go.html",
    date: "2026-03-19T07:00:00",
    section: "destaque"
  },
  {
    title: "Tiro pelas Costas: Agente Estatal Condenado",
    image: "img/ex-policial-militar-condenado-homicidio-adolescente-cuiaba-tiro-costas.webp",
    link: "direito-militar/ex-policial-militar-condenado-homicidio-adolescente-cuiaba-tiro-costas.html",
    date: "2026-03-19T07:00:00",
    section: "destaque"
  },
  {
   
    title: "CNJ Reforça o Judiciário nos Direitos Humanos",
    image: "img/cnj-protocolos-direitos-humanos-judiciario-sistema-interamericano.webp",
    link: "jurisprudencia/cnj-protocolos-direitos-humanos-judiciario-sistema-interamericano.html",
    date: "2026-03-19T07:00:00",
    section: "veja"
  },
  {
    title: "Rondônia Lidera Gestão Federal de Convênios",
    image: "img/rondonia-capacitacao-transferegov-convenios-projetos-sociais.webp",
    link: "legislacao/rondonia-capacitacao-transferegov-convenios-projetos-sociais.html",
    date: "2026-03-19T07:00:00",
    section: "veja"
  },
  {
 title: "Quando o Judiciário Vira Instrumento de Opressão",
    image: "img/litigancia-predatoria-familia-judiciario-instrumento-opressao.webp",
    link: "direito-de-familia/litigancia-predatoria-familia-judiciario-instrumento-opressao.html",
    date: "2026-03-19T07:00:00",
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
 title: "Direita Domina Arena Digital nas Eleições 2026",
  link: "politica/direita-lidera-arena-digital-eleicoes-2026-pre-candidato-redes-sociais.html",
  date: "2026-03-16T07:00:00"
},
{
    title: "Lula e Flávio Empatam pela Primeira Vez",
    link: "politica/quaest-lula-flavio-empatados-41-segundo-turno-2026.html",
    date: "2026-03-14T07:00:00"
},
{
 title: "Cultura de Cuiabá Adota Compliance na Gestão",
  link: "compliance/secretaria-cultura-cuiaba-compliance-integridade-administracao-publica-municipal.html",
  date: "2026-03-15T07:00:00"
},
{
 title: "Como Provar Assédio no Ambiente de Trabalho",
  link: "direito-trabalhista/assedio-moral-sexual-trabalho-provas-denunciar-mpt-cartilha.html",
  date: "2026-03-15T07:00:00"
},
 {
   title: "Agências de Viagem Ganham Terreno no Judiciário",
    link: "jurisprudencia/agencias-viagem-responsabilidade-solidaria-jurisprudencia-stj-turismo.html",
    date: "2026-03-14T07:00:00"
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
title: "Proteção ou Vigilância Digital sobre Crianças e Jovens",
    link: "direito-de-familia/lei-eca-digital-privacidade-criancas-adolescentes.html",
source: "",
date: "2026-03-12T07:00:00"
},

{
title: "Cultura de Cuiabá Adota Compliance na Gestão",
  link: "compliance/secretaria-cultura-cuiaba-compliance-integridade-administracao-publica-municipal.html",
source: "",
date: "2026-03-15T07:00:00"
},
{
title: "Novo Código Civil Enfrenta Freio no Senado",
link: "direito-civil/pl-codigo-civil-tramitacao-atraso-senado-calendario-eleitoral-2026.html",
source: "",
date: "2026-03-15T03:00:00"
},
{
title: "Judiciário do Acre Vai Além da Punição",
  link: "direito-de-familia/tjac-judiciario-acolhimento-violencia-domestica-lei-maria-penha-20-anos.html",
source: "",
date: "2026-03-15T07:00:00"
},
{
title: "Habeas Corpus Amordaçado pela Jurisprudência",
link: "direito-penal/habeas-corpus-vedacao-debate-fatico-prisao-preventiva-inconstitucional.html",
source: "",
date: "2026-03-14T07:00:00"
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
    title: "Código Civil Ganha Nova Chance de Evolução",
  link: "direito-civil/codigo-civil-atualizacao-responsabilidade-civil-debate-senado-2026.html",
source: "",
date: "2026-03-14T07:00:00",
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

