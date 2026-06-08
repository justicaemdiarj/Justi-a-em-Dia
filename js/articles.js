const posts = [
  
  

{ 
title: "Gravidez No Trabalho É Direito Que a Empresa Não Pode Ignorar", 
description: "A estabilidade gestacional protege a empregada desde a confirmação da gravidez até cinco meses após o parto", 
description2: "Entenda a Súmula 244 do TST, a aplicação ao contrato de experiência e as tendências da proteção à maternidade no trabalho", 
image: "img/gravidez-trabalho-direito-empresa-nao-pode-ignorar.webp", 
link: "direito-trabalhista/gravidez-trabalho-direito-empresa-nao-pode-ignorar.html", 
date: "2026-06-08T07:00:00",
  section: "featured" },
  {
title: "O Militar Doente Tem Direitos Que a Farda Não Apaga", 
description: "Os direitos do militar em tratamento de saúde são regulados pelo Estatuto dos Militares com proteções específicas", 
description2: "Entenda a licença de saúde, a reforma por incapacidade em serviço e os desafios da saúde mental nas corporações militares", 
image: "img/militar-doente-tem-direitos-farda-nao-apaga.webp", 
link: "direito-militar/militar-doente-tem-direitos-farda-nao-apaga.html", 
date: "2026-06-08T07:00:00",
  section: "featured-secundario"
},
{
title: "Regime De Bens Define o Futuro do Patrimônio Conjugal", 
description: "O planejamento patrimonial no casamento envolve a escolha consciente do regime de bens e instrumentos como o pacto antenupcial", 
description2: "Entenda os quatro regimes do Código Civil, a separação obrigatória para idosos e as holdings familiares no planejamento sucessório", 
image: "img/regime-bens-define-futuro-patrimonio-conjugal.webp", 
link: "direito-de-familia/regime-bens-define-futuro-patrimonio-conjugal.html", 
date: "2026-06-08T07:00:00",
 section: "featured-terciario"
},
  {
title: "A Lei Protege Com Mais Rigor Quem Não Pode Se Defender",
image: "img/lei-protege-rigor-quem-nao-pode-defender.webp", 
link: "direito-penal/lei-protege-rigor-quem-nao-pode-defender.html",
date: "2026-06-08T07:00:00",
    section: "destaque"
  },
   {
title: "Plataforma Digital Que Falha Tem Conta a Pagar", 
 image: "img/plataforma-digital-que-falha-tem-conta-pagar.webp", 
 link: "direito-civil/plataforma-digital-que-falha-tem-conta-pagar.html",
date: "2026-06-08T07:00:00",
   section: "destaque"
  },
  {
 title: "Resolver Conflitos Sem Ir a Julgamento É Possível",
image: "img/resolver-conflitos-sem-ir-julgamento.webp", 
link: "legislacao/resolver-conflitos-sem-ir-julgamento.html",
date: "2026-06-08T07:00:00",
   section: "destaque"
  },
  {
title: "Governar No Brasil Custa Caro e Exige Concessões",
 image: "img/governar-brasil-custa-caro-exige-concessoes.webp", 
 link: "politica/governar-brasil-custa-caro-exige-concessoes.html",
date: "2026-06-08T07:00:00",
 section: "veja"
  },
   {
title: 'Quando o STF e o STJ Defendem Quem Não Tem Voz',
 image: "img/stf-stj-defendem-quem-nao-tem-voz.webp", 
 link: "jurisprudencia/stf-stj-defendem-quem-nao-tem-voz.html",
date: "2026-06-05T07:00:00",
   section: "veja"
  },
  {
title: "Como Investigar Assédio Sem Destruir a Empresa",
image: "img/como-investigar-assedio-sem-destruir-empresa.webp", 
link: "compliance/como-investigar-assedio-sem-destruir-empresa.html",
date: "2026-06-04T07:00:00",
  section: "veja"
  },
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
  
{ title: "Descanso Negado e Direito Ignorado", 
  link: "direito-trabalhista/descanso-negado-direito-ignorado.html", 
  date: "2026-05-25T07:00:00" 
},
{ title: "A Oportunidade Perdida Que Gera Direito à Indenização", 
  link: "direito-civil/oportunidade-perdida-gera-direito-indenizacao.html",
  date: "2026-06-01T07:00:00" 
},
{ title: "Como Investigar Assédio Sem Destruir a Empresa", 
  link: "compliance/como-investigar-assedio-sem-destruir-empresa.html", 
  date: "2026-06-04T07:00:00" 
},
{ title: "Quando o STF e o STJ Defendem Quem Não Tem Voz", 
  link: "jurisprudencia/stf-stj-defendem-quem-nao-tem-voz.html", 
  date: "2026-06-05T07:00:00" 
},
{ title: "Justiça Sem Condenação Para Crimes de Menor Potencial", 
  link: "direito-penal/justica-sem-condenacao-crimes-menor-potencial.html", 
  date: "2026-05-28T11:00:00" 
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
title: "O Inimigo Que Usa Crachá e Conhece a Senha",
    link: "compliance/inimigo-que-usa-cracha-conhece-senha.html",
source: "",
date: "2026-06-02T07:00:00"
},
{
title: "O Dinheiro Público Que Não Presta Contas",
link: "politica/dinheiro-publico-que-nao-presta-contas.html",
source: "",
date: "2026-05-28T07:00:00"
},
{
title: "O Dinheiro Público Que Não Presta Contas",
link: "politica/dinheiro-publico-que-nao-presta-contas.html",
source: "",
date: "2026-05-28T03:00:00"
},
{
title: "A Oportunidade Perdida Que Gera Direito à Indenização",
  link: "direito-civil/oportunidade-perdida-gera-direito-indenizacao.html",
source: "",
date: "2026-06-01T07:00:00"
},
{
title: "Jornada 12x36 Entre a Flexibilidade e o Esgotamento",
link: "direito-trabalhista/jornada-12x36-flexibilidade-saude-trabalhador-clt.html",
source: "",
date: "2026-05-19T07:00:00"
},
{
title: "A Lei Que Nomeia o Ódio Letal Contra Mulheres",
 link: "legislacao/lei-que-nomeia-odio-letal-contra-mulheres.html",
source: "",
date: "2026-05-25T12:00:00"
},
{
 title: "Animal de Estimação na Dissolução do Casamento",
  link: "direito-de-familia/guarda-pets-separacao-animais-estimacao-dissolucao-conjugal.html",
source: "",
date: "2026-05-22T07:00:00"
},
{
    title: "Descanso Negado e Direito Ignorado",
  link: "direito-trabalhista/descanso-negado-direito-ignorado.html",
source: "",
date: "2026-05-25T07:00:00",
},
{
   title: "Laje Urbana e Acesso à Propriedade Formal",
    link: "direito-civil/direito-laje-regularizacao-propriedade-habitacao-urbana.html",
source: "",
date: "2026-05-19T07:00:00"
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

