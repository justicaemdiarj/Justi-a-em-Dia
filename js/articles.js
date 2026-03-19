const posts = [
  
{
  
  title: "Acesso à Justiça Internacional Pelo Paraná",
  description: "O Tribunal de Justiça do Paraná lança plataforma inédita para consulta à jurisprudência da Corte IDH",
  description2: "Ferramenta integra precedentes internacionais ao sistema de busca do tribunal paranaense",
  image: "img/tjpr-plataforma-jurisprudencia-corte-interamericana-direitos-humanos.webp",
  link: "jurisprudencia/tjpr-plataforma-jurisprudencia-corte-interamericana-direitos-humanos.html",
  date: "2026-03-17T07:00:00",
  section: "featured"
},
  {
  title: "PGFN e Receita Regulam o Devedor Contumaz",
  description: "PGFN e Receita Federal articulam regulamentação da LC 225/2026 sobre inadimplência tributária sistemática",
  description2: "Nova norma impõe sanções severas ao contribuinte com passivo fiscal reiterado e injustificado",
  image: "img/pgfn-receita-federal-regulamentacao-devedor-contumaz-lc-225-2026.webp",
  link: "legislacao/pgfn-receita-federal-regulamentacao-devedor-contumaz-lc-225-2026.html",
  date: "2026-03-17T07:00:00",
  section: "featured-secundario"
},
{
  title: "Justiça Digital Sem Advogado no Rio",
  description: "TJRJ lança plataforma para protocolo digital de petições nos juizados especiais sem necessidade de advogado",
  description2: "Iniciativa democratiza o acesso à tutela jurisdicional cível no Estado do Rio de Janeiro",
  image: "img/tjrj-peticao-cidada-juizados-especiais-civeis-online-sem-advogado.webp",
  link: "direito-civil/tjrj-peticao-cidada-juizados-especiais-civeis-online-sem-advogado.html",
  date: "2026-03-17T07:00:00",
 section: "featured-terciario"
},
  {
   title: "ECA Digital Protege Crianças no Ambiente Virtual",
   image: "img/eca-digital-vigor-marco-2026-protecao-criancas-adolescentes-internet.webp",
  link: "direito-de-familia/eca-digital-vigor-marco-2026-protecao-criancas-adolescentes-internet.html",
  date: "2026-03-17T07:00:00",
    section: "destaque"
  },
   {
   title: "HC e Prisão Cautelar Sob Tensão Constitucional",
 image: "img/habeas-corpus-prisao-cautelar-vedacao-debate-fatico-assimetria-inconstitucional.webp",
  link: "direito-penal/habeas-corpus-prisao-cautelar-vedacao-debate-fatico-assimetria-inconstitucional.html",
  date: "2026-03-17T07:00:00",
    section: "destaque"
  },
  {
    title: "Entre o Excesso e o Vazio do Compliance",
  image: "img/overcompliance-compliance-zero-equilibrio-programas-integridade-empresas.webp",
  link: "compliance/overcompliance-compliance-zero-equilibrio-programas-integridade-empresas.html",
  date: "2026-03-17T07:00:00",
    section: "destaque"
  },
  {
   
  title: "STF Abre Acordo Penal à Justiça Militar",
  image: "img/stf-anpp-acordo-nao-persecucao-penal-justica-militar-crime-militar.webp",
  link: "direito-militar/stf-anpp-acordo-nao-persecucao-penal-justica-militar-crime-militar.html",
  date: "2026-03-17T07:00:00",
    section: "veja"
  },
  {
  title: "Insalubridade Para Motoboys a Partir de Abril",
  image: "img/insalubridade-motoboys-entregadores-abril-2026-direitos-trabalhistas.webp",
  link: "direito-trabalhista/insalubridade-motoboys-entregadores-abril-2026-direitos-trabalhistas.html",
  date: "2026-03-17T07:00:00",
    section: "veja"
  },
  {
  title: "Senado Guia Mulheres Para a Política",
  image: "img/senado-guia-candidata-mulheres-politica-representatividade-cotas-genero.webp",
  link: "politica/senado-guia-candidata-mulheres-politica-representatividade-cotas-genero.html",
  date: "2026-03-17T07:00:00",
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

