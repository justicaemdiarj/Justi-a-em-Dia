const posts = [
  
{
    title: "Reforma Civil Rasga o Véu da Responsabilidade",
    description: "PL 4 de 2025 propõe ampliar responsabilidade civil e acende debate técnico entre especialistas do direito privado",
    description2: "Entre proteção às vítimas e segurança jurídica, proposta divide doutrina e alerta setores econômicos",
    image: "img/pl-codigo-civil-responsabilidade-civil-ampliacao-debate-juridico.webp",
    link: "direito-civil/pl-codigo-civil-responsabilidade-civil-ampliacao-debate-juridico.html",
    date: "2026-03-23T07:00:00",
  section: "featured"
},
  {
    title: "Brincar como Direito, Lei como Escudo Infantil",
    description: "Lei nº 14.826 de 2024 reconhece o brincar e a parentalidade positiva como proteção jurídica à criança",
    description2: "Nova norma aposta na prevenção afetiva antes que a violência doméstica se instale",
    image: "img/lei-14826-2024-brincar-parentalidade-positiva-prevencao-violencia-criancas.webp",
    link: "direito-de-familia/lei-14826-2024-brincar-parentalidade-positiva-prevencao-violencia-criancas.html",
    date: "2026-03-23T08:00:00",
  section: "featured-secundario"
},
{
 title: "Dosimetria da Pena e a Herança Penal Intemporal",
    description: "Doutrina clássica do penalismo brasileiro segue sendo referência técnica obrigatória na fixação das penas pelos tribunais",
    description2: "Sistema trifásico e circunstâncias judiciais revelam a atualidade dos fundamentos históricos do direito penal nacional",
    image: "img/dosimetria-pena-ensinamentos-classicos-direito-penal-brasileiro.webp",
    link: "direito-penal/dosimetria-pena-ensinamentos-classicos-direito-penal-brasileiro.html",
    date: "2026-03-23T07:00:00", 
 section: "featured-terciario"
},
  {
     title: "Sequela Laboral que o INSS Tentou Ignorar",
image: "img/auxilio-acidente-sequela-permanente-inss-qualidade-segurado-tjmt.webp",
    link: "direito-trabalhista/auxilio-acidente-sequela-permanente-inss-qualidade-segurado-tjmt.html",
    date: "2026-03-23T06:00:00",
    section: "destaque"
  },
   {
    title: "Farda e Integridade Selam Pacto de Conformidade",
image: "img/bombeiros-militar-cge-compliance-publico-integridade-governanca.webp",
    link: "compliance/bombeiros-militar-cge-compliance-publico-integridade-governanca.html",
    date: "2026-03-23T08:00:00",
    section: "destaque"
  },
  {
   title: "Direito ao Porte que a Burocracia Engavetou",
     image: "img/porte-arma-policial-bombeiro-lei-organica-carteira-funcional-ms.webp",
    link: "direito-militar/porte-arma-policial-bombeiro-lei-organica-carteira-funcional-ms.html",
    date: "2026-03-23T06:00:00",
    section: "destaque"
  },
  {
   
  title: "Quando o Tribunal Reescreve o que a Lei Diz",
  image: "img/jurisprudencia-ignora-lei-astreintes-cpc-stj-separacao-poderes.webp",
    link: "jurisprudencia/jurisprudencia-ignora-lei-astreintes-cpc-stj-separacao-poderes.html",
    date: "2026-03-23T06:00:00",
    section: "veja"
  },
  {
    title: "Três Frentes que Assombram o Direito Corporativo",
    image: "img/ciberseguranca-tributacao-geopolitica-preocupacoes-lideres-juridicos-brasil.webp",
    link: "legislacao/ciberseguranca-tributacao-geopolitica-preocupacoes-lideres-juridicos-brasil.html",
    date: "2026-03-23T06:00:00",
    section: "veja"
  },
  {
   title: "MDB Perde Quadro e PSB Ganha Candidatura Senatorial",
    image: "img/desfiliacao-mdb-psb-senado-sao-paulo-eleicoes-2026.webp",
    link: "politica/desfiliacao-mdb-psb-senado-sao-paulo-eleicoes-2026.html",
    date: "2026-03-23T06:00:00",
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

