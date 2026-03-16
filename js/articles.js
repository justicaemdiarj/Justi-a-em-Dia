const posts = [
{
  
  title: "Direita Domina Arena Digital nas Eleições 2026",
  description: "O pré-candidato do PL acumulou 49,7 milhões de interações nos dois primeiros meses de 2026, superando o presidente em 76% no engajamento digital e liderando o Índice Datrix de Presidenciáveis com 37,14 pontos, enquanto o campo governista cai para a quarta posição com tendência negativa no mar aberto",
  description2: "A resistência declarada do presidente ao universo digital contrasta com a sofisticação da estratégia oposicionista, que transfere a herança política do fundador da sigla para o pré-candidato e expande presença fora da bolha conservadora, apontando para uma disputa eleitoral digital de alta intensidade em outubro",
  image: "img/direita-lidera-arena-digital-eleicoes-2026-pre-candidato-redes-sociais.webp",
  link: "politica/direita-lidera-arena-digital-eleicoes-2026-pre-candidato-redes-sociais.html",
  date: "2026-03-16T12:00:00",
  section: "featured"
},
  {
  title: "Responsabilidade Civil Divide Debate no Novo Código",
  description: "A Comissão Temporária do Senado realizou audiência pública sobre as propostas do PL 4/2025 para a responsabilidade civil, que incluem sanção pedagógica de até quatro vezes o dano moral, indenização por danos futuros e indiretos e nova teoria do risco especial diferenciado, temas que dividem profundamente especialistas e preocupam a magistratura",
  description2: "A restrição da responsabilidade civil do advogado ao dolo e a expansão da responsabilidade objetiva para atividades de risco qualificado elevam o passivo contingente de empresas e criam novo mapa de exposição jurídica que o mercado de seguros já começa a precificar antes mesmo da aprovação do projeto",
  image: "img/reforma-codigo-civil-responsabilidade-civil-debate-juizes-pl-4-2025-sancao-pedagogica.webp",
  link: "direito-civil/reforma-codigo-civil-responsabilidade-civil-debate-juizes-pl-4-2025-sancao-pedagogica.html",
  date: "2026-03-16T12:00:00",
  section: "featured-secundario"
},
{
  title: "FGTS Entra na Partilha do Divórcio",
  description: "O saldo do FGTS acumulado durante o casamento em regime de comunhão parcial integra o patrimônio comum do casal e deve ser incluído na partilha de bens no divórcio, segundo jurisprudência consolidada do STJ com base nos arts. 1.658 a 1.666 do Código Civil",
  description2: "A desinformação faz com que esse ativo seja frequentemente omitido em acordos de divórcio extrajudicial, gerando prejuízo ao cônjuge que tem direito à meação do valor depositado no período da união e pode ainda reabrir a questão via ação de sobrepartilha no prazo de dez anos",
  image: "img/fgts-partilha-bens-divorcio-comunhao-parcial-STJ.webp",
  link: "direito-de-familia/fgts-partilha-bens-divorcio-comunhao-parcial-STJ.html",
  date: "2026-03-16T12:00:00",
 section: "featured-terciario"
},
  {
  title: "Estados Podem Ganhar Poder de Criminalizar",
  image: "img/plp-41-2025-estados-legislar-direito-penal-csp-senado-competencia-uniao.webp",
  link: "direito-penal/plp-41-2025-estados-legislar-direito-penal-csp-senado-competencia-uniao.html",
  date: "2026-03-16T12:00:00",
    section: "destaque"
  },
   {
    title: "Combate ao Assédio nas Relações Trabalhistas Públicas",
  image: "img/combate-assedio-moral-sexual-judiciario-revista-campanha.webp",
    link: "direito-trabalhista/combate-assedio-moral-sexual-judiciario-revista-campanha.html",
  date: "2026-03-16T12:00:00",
    section: "destaque"
  },
  {
    title: "PL 4920 Tensiona Previdência das Forças Armadas",
 image: "img/tocantins-congresso-compliance-governanca-integridade-palmas.webp",
    link: "compliance/tocantins-congresso-compliance-governanca-integridade-palmas.html",
  date: "2026-03-16T12:00:00",
    section: "destaque"
  },
  {
   
    title: "Tocantins Avança no Debate Nacional de Compliance",
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

