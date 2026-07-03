const posts = [
{
  title: "Monitoramento Trabalhista Esbarra na Privacidade",
  description: "LGPD e TST balizam limites da vigilância corporativa digital",
  description2: "Empresas revisam políticas internas para evitar passivo trabalhista",
  image: "img/monitoramento-trabalhista-esbarra-privacidade.webp",
  link: "direito-trabalhista/monitoramento-trabalhista-esbarra-privacidade.html",
  date: "2026-07-03T11:00:00",
  section: "featured"
},
  {
  title: "Crise Reputacional Exige Resposta Jurídica Imediata",
  description: "Compliance e comunicação se unem para conter danos de imagem",
  description2: "Governança corporativa vira escudo contra escândalos empresariais",
  image: "img/crise-reputacional-resposta-juridica-imediata.webp",
  link: "compliance/crise-reputacional-resposta-juridica-imediata.html",
  date: "2026-07-03T09:00:00",
  section: "featured"
},
{ 
  title: "O Direito de Desligar o Trabalho",
  description: "Trabalho remoto reacende debate sobre descanso obrigatório",
  image: "img/direito-desligar-trabalho-desconexao.webp",
  link: "direito-trabalhista/direito-desligar-trabalho-desconexao.html",
  date: "2026-07-02T11:00:00",
  section: "featured"},
  {
 title: "Divórcio Não Rompe a Paternidade",
  description: "Guarda e convivência exigem planejamento cuidadoso dos pais",
  image: "img/divorcio-nao-rompe-paternidade-filhos-menores.webp",
  link: "direito-de-familia/divorcio-nao-rompe-paternidade-filhos-menores.html",
  date: "2026-07-02T08:00:00",
  section: "featured-secundario"
},
{
  title: "Doar Com Condições Tem Limites",
  description: "Cláusulas restritivas dividem opiniões no Judiciário brasileiro",
  image: "img/doar-condicoes-limites-clausulas-restritivas.webp",
  link: "direito-civil/doar-condicoes-limites-clausulas-restritivas.html",
  date: "2026-07-02T07:00:00",
 section: "featured-terciario"
},
  {
 title: "As Duas Faces da Corrupção",
   image: "img/duas-faces-corrupcao-passiva-ativa.webp",
  link: "direito-penal/duas-faces-corrupcao-passiva-ativa.html",
  date: "2026-07-02T09:00:00",
    section: "destaque"
  },
   {
  title: "Compliance Vira Prioridade nas Startups",
  image: "img/compliance-vira-prioridade-startups-brasileiras.webp",
  link: "compliance/compliance-vira-prioridade-startups-brasileiras.html",
  date: "2026-07-02T09:00:00",
   section: "destaque"
  },
  {
    title: "Lucros Cessantes Dependem de Prova Robusta",
 image: "img/lucros-cessantes-prova-robusta-prejuizo.webp",
  link: "direito-civil/lucros-cessantes-prova-robusta-prejuizo.html",
  date: "2026-07-03T07:00:00",
   section: "destaque"
  },
  {
title: "Mediação Familiar Ganha Espaço na Justiça",
  image: "img/mediacao-familiar-espaco-justica-conciliacao.webp",
  link: "direito-de-familia/mediacao-familiar-espaco-justica-conciliacao.html",
  date: "2026-07-03T09:00:00",
 section: "veja"
  },
   {
 title: "Peculato Exige Rigor na Responsabilização",
  image: "img/peculato-rigor-responsabilizacao-publica.webp",
  link: "direito-penal/peculato-rigor-responsabilizacao-publica.html",
  date: "2026-07-03T07:00:00",
   section: "veja"
  },
  {
 title: "O Relógio Invisível dos Seus Direitos",
  image: "img/relogio-invisivel-direitos-prescricao-decadencia.webp",
  link: "direito-civil/relogio-invisivel-direitos-prescricao-decadencia.html",
  date: "2026-07-01T09:00:00",
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
  title: "Crise Reputacional Exige Resposta Jurídica Imediata",
  link: "compliance/crise-reputacional-resposta-juridica-imediata.html",
  date: "2026-07-03T09:00:00"
},
{
  title: "Compliance Financeiro Sob Nova Vigilância",
  link: "compliance/compliance-financeiro-nova-vigilancia-controles.html",
  date: "2026-07-01T10:00:00"
},
{
  title: "Peculato Exige Rigor na Responsabilização",
  link: "direito-penal/peculato-rigor-responsabilizacao-publica.html",
  date: "2026-07-03T07:00:00"
},
{
  title: "Compliance Vira Prioridade nas Startups",
  link: "compliance/compliance-vira-prioridade-startups-brasileiras.html",
  date: "2026-07-02T09:00:00"
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