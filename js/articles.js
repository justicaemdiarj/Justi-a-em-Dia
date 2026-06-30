const posts = [

{ 
title: "Quem Denuncia Paga o Preço", 
description: "Ausência de proteção ao whistleblower perpetua cultura do silêncio nas organizações", 
description2: "O Brasil ainda não construiu um sistema efetivo de amparo ao denunciante de boa-fé", 
image: "img/quem-denuncia-paga-o-preco.webp", 
link: "compliance/quem-denuncia-paga-o-preco.html", 
date: "2026-06-23T22:00:00",
  section: "featured"},
  {
title: "A Estrutura Oculta do Crime Organizado", 
description: "Associação criminosa e organização criminosa têm elementos distintos com impactos penais relevantes", 
description2: "Colaboração premiada e técnicas investigativas especiais no combate ao crime organizado", 
image: "img/estrutura-oculta-crime-organizado.webp", 
link: "direito-penal/estrutura-oculta-crime-organizado.html", 
date: "2026-06-23T19:00:00",
  section: "featured-secundario"
},
{
title: "Esgotamento Profissional Chega ao Tribunal", 
description: "Burnout classificado pela OMS impõe responsabilidade civil crescente ao empregador brasileiro", 
description2: "Jurisprudência do TST avança no reconhecimento do nexo entre gestão abusiva e adoecimento", 
image: "img/esgotamento-profissional-chega-ao-tribunal.webp", 
link: "direito-trabalhista/esgotamento-profissional-chega-ao-tribunal.html", 
date: "2026-06-23T11:00:00",
 section: "featured-terciario"
},
  {
title: "Ética Institucional Que Ninguém Cobra",
image: "img/etica-institucional-que-ninguem-cobra.webp", link: "politica/etica-institucional-que-ninguem-cobra.html",
date: "2026-06-23T18:00:00",
    section: "destaque"
  },
   {
title: "O CPC e a Força dos Precedentes",
image: "img/cpc-forca-precedentes-obrigatorios.webp", link: "legislacao/cpc-forca-precedentes-obrigatorios.html",
date: "2026-06-23T18:00:00",
   section: "destaque"
  },
  {
title: "Concurso Público Sob o Crivo Judicial",
image: "img/concurso-publico-crivo-judicial.webp", link: "jurisprudencia/concurso-publico-crivo-judicial.html",
date: "2026-06-23T18:00:00",
   section: "destaque"
  },
  {
title: "Deficiência No Trabalho É Direito Que a Lei Assegura",
image: "img/deficiencia-trabalho-direito-lei-assegura.webp", link: "direito-trabalhista/deficiencia-trabalho-direito-lei-assegura.html",
date: "2026-06-09T07:00:00",
 section: "veja"
  },
   {
title: "Prestação de Contas É Dever de Todo Servidor Público",
 image: "img/prestacao-contas-dever-servidor-publico.webp", link: "politica/prestacao-contas-dever-servidor-publico.html",
date: "2026-06-09T07:00:00",
   section: "veja"
  },
  {
 title: "Resolver Disputas Sem Julgamento Público No Brasil",
image: "img/resolver-disputas-sem-julgamento-publico-brasil.webp", link: "legislacao/resolver-disputas-sem-julgamento-publico-brasil.html",
date: "2026-06-09T07:00:00",
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
function renderContent() {
  const container = document.getElementById("dynamicContent");
  if (!container) return;

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

  /* ===== MAIS LIDOS (SIDEBAR) ===== */
  const sidebarPosts = [
  
{   title: "O Contrato Que Antecede o Casamento",
  link: "direito-de-familia/contrato-que-antecede-casamento.html",
  date: "2026-06-16T21:00:00"
},
{ title: "Concurso Público Sob o Crivo Judicial", 
  link: "jurisprudencia/concurso-publico-crivo-judicial.html", 
  date: "2026-06-23T07:00:00" 
},
{ title: "Quem Denuncia Paga o Preço", 
  link: "compliance/quem-denuncia-paga-o-preco.html",
  date: "2026-06-23T07:00:00" 
},
{   title: "Promessas do Estado Que Não Chegam",
  link: "politica/promessas-estado-que-nao-chegam.html",
  date: "2026-06-22T07:00:00" 
},
{ title: "O CPC e a Força dos Precedentes", 
  link: "legislacao/cpc-forca-precedentes-obrigatorios.html", 
  date: "2026-06-23T07:00:00" }

  ];

  function getSidebarTimeAgo(dateString){
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

  sidebarPosts.sort((a,b) => new Date(b.date) - new Date(a.date));

  const list = document.getElementById("mostReadList");
  if (list) {
    sidebarPosts.slice(0,10).forEach((post) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div>
          <a href="${post.link}">${post.title}</a>
          <div class="post-time">${getSidebarTimeAgo(post.date)}</div>
        </div>
      `;
      list.appendChild(li);
    });
  }
});