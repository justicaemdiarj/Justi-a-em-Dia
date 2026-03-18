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
  title: "SP Reestrutura Compliance Policial Após Escândalo",
  description: "Governo de SP publica decreto de reestruturação do compliance das polícias após operação desvendar esquema de corrupção nas corporações",
  description2: "Nova arquitetura de controle interno prevê canais de denúncia protegidos e auditorias sobre procedimentos sensíveis das forças policiais",
  image: "img/sp-decreto-reestruturacao-compliance-policias-corrupcao-integridade.webp",
  link: "compliance/sp-decreto-reestruturacao-compliance-policias-corrupcao-integridade.html",
  date: "2026-03-18T07:00:00",
  section: "featured-secundario"
},
{
  title: "Holding Familiar e a Divisão do Patrimônio",
  description: "A holding familiar transforma a partilha de bens em questão societária, com regras distintas para herança, divórcio e conflitos entre herdeiros cotistas",
  description2: "Planejamento patrimonial exige atenção às mudanças tributárias da reforma e ao acordo de sócios para evitar conflitos sucessórios",
  image: "img/holding-familiar-partilha-bens-sucessao-patrimonial-divorcio-heranca.webp",
  link: "direito-de-familia/holding-familiar-partilha-bens-sucessao-patrimonial-divorcio-heranca.html",
  date: "2026-03-18T07:00:00",
 section: "featured-terciario"
},
  {
  title: "Contraditório nas Cautelares Penais em Debate",
  image: "img/medidas-cautelares-direito-contraditorio-processo-penal-garantias.webp",
  link: "direito-penal/medidas-cautelares-direito-contraditorio-processo-penal-garantias.html",
  date: "2026-03-18T07:00:00",
    section: "destaque"
  },
   {
  title: "Risco Cirúrgico Não Gera Responsabilidade Automática",
  image: "img/complicacao-pos-operatoria-responsabilidade-civil-medica-culpa-nexo-causal.webp",
  link: "direito-civil/complicacao-pos-operatoria-responsabilidade-civil-medica-culpa-nexo-causal.html",
  date: "2026-03-18T07:00:00",
    section: "destaque"
  },
  {
      title: "Escala 6x1 Sob o Olhar da CLT",
  image: "img/escala-6x1-clt-jornada-trabalho-legalidade-direitos-trabalhistas.webp",
  link: "direito-trabalhista/escala-6x1-clt-jornada-trabalho-legalidade-direitos-trabalhistas.html",
  date: "2026-03-18T07:00:00",
    section: "destaque"
  },
  {
   
  title: "Justiça Militar Condena PMs no Amapá",
  image: "img/justica-militar-amapa-condenacao-policiais-militares-macapa.webp",
  link: "direito-militar/justica-militar-amapa-condenacao-policiais-militares-macapa.html",
  date: "2026-03-18T07:00:00",
    section: "veja"
  },
  {
  title: "STF Recebe Obra Sobre Direitos Humanos Interamericanos",
  image: "img/stf-lancamento-livro-jurisprudencia-corte-interamericana-direitos-humanos.webp",
  link: "jurisprudencia/stf-lancamento-livro-jurisprudencia-corte-interamericana-direitos-humanos.html",
  date: "2026-03-18T07:00:00",
    section: "veja"
  },
  {
  title: "Amazonas Avança na Lei Climática Estadual",
  image: "img/amazonas-legislacao-ambiental-mudancas-climaticas-assembleia-legislativa.webp",
  link: "legislacao/amazonas-legislacao-ambiental-mudancas-climaticas-assembleia-legislativa.html",
  date: "2026-03-18T07:00:00",
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

