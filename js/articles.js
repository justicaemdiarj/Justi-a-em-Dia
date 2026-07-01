const posts = [

{ 
 title: "O Relógio Invisível dos Seus Direitos",
  description: "Prazos prescricionais e decadenciais moldam silenciosamente o destino de direitos civis",
  image: "img/relogio-invisivel-direitos-prescricao-decadencia.webp",
  link: "direito-civil/relogio-invisivel-direitos-prescricao-decadencia.html",
  date: "2026-07-01T09:00:00",
  section: "featured"},
  {
  title: "Compliance Financeiro Sob Nova Vigilância",
  description: "Instituições reforçam controles internos diante de riscos regulatórios",
  image: "img/compliance-financeiro-nova-vigilancia-controles.webp",
  link: "compliance/compliance-financeiro-nova-vigilancia-controles.html",
  date: "2026-07-01T10:00:00",
  section: "featured-secundario"
},
{
  title: "Poder Público Sob Escrutínio Penal",
  description: "Abusos no exercício da função pública seguem sob investigação",
  image: "img/poder-publico-escrutinio-penal-crimes-funcionais.webp",
  link: "direito-penal/poder-publico-escrutinio-penal-crimes-funcionais.html",
  date: "2026-07-01T07:00:00",
 section: "featured-terciario"
},
  {
title: "Capacidade Civil e o Altar",
 image: "img/capacidade-civil-altar-casamento-requisitos.webp",
  link: "direito-de-familia/capacidade-civil-altar-casamento-requisitos.html",
  date: "2026-07-01T07:00:00",  
    section: "destaque"
  },
   {
title: "Dignidade em Xeque no Emprego",
 image: "img/dignidade-xeque-emprego-dano-moral-trabalhista.webp",
  link: "direito-trabalhista/dignidade-xeque-emprego-dano-moral-trabalhista.html",
  date: "2026-07-01T07:00:00",
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
  
{
  title: "O Relógio Invisível dos Seus Direitos",
  link: "direito-civil/relogio-invisivel-direitos-prescricao-decadencia.html",
  date: "2026-07-01T09:00:00"
},
{
  title: "Compliance Financeiro Sob Nova Vigilância",
  link: "compliance/compliance-financeiro-nova-vigilancia-controles.html",
  date: "2026-07-01T10:00:00"
},
{
  title: "Poder Público Sob Escrutínio Penal",
  link: "direito-penal/poder-publico-escrutinio-penal-crimes-funcionais.html",
  date: "2026-07-01T07:00:00"
},
{
  title: "Capacidade Civil e o Altar",
  link: "direito-de-familia/capacidade-civil-altar-casamento-requisitos.html",
  date: "2026-07-01T07:00:00"
},
{
  title: "Dignidade em Xeque no Emprego",
  link: "direito-trabalhista/dignidade-xeque-emprego-dano-moral-trabalhista.html",
  date: "2026-07-01T07:00:00"
}

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