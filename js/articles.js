const posts = [
{
    title: "Doações entre Cônjuges sob Escrutínio",
    description: "Doações formalizadas sem cuidado jurídico podem gerar litígios familiares",
    image: "img/doacoes-conjuges-escrutinio.webp",
    link: "direito-de-familia/doacoes-conjuges-escrutinio.html",
    date: "2026-09-09T07:00:00",
    section: "featured"
},
{
    title: "Condomínios na Mira das Indenizações Civis",
    description: "Falhas de manutenção em áreas comuns elevam ações judiciais contra condomínios",
    image: "img/condominios-mira-indenizacoes-civis.webp",
    link: "direito-civil/condominios-mira-indenizacoes-civis.html",
    date: "2026-09-09T07:00:00",
    section: "featured"
},
  {
    title: "Crimes Contra Administração Pública Ganham Rigor",
    description: "Punições mais duras miram agentes públicos desonestos.",
    image: "img/crimes-administracao-publica-rigor-penal.webp",
    link: "direito-penal/crimes-administracao-publica-rigor-penal.html",
    date: "2026-07-10T09:00:00",
    section: "featured"
},
  {
    title: "Governança Documental Reforça Compliance Corporativo",
    description: "Novas diretrizes elevam padrão de gestão interna nas empresas.",
    image: "img/governanca-documental-compliance-corporativo.webp",
    link: "compliance/governanca-documental-compliance-corporativo.html",
    date: "2026-07-08T07:00:00",
    section: "featured"
},
  {
  title: "Home Office, Quem Paga a Conta",
  description: "Custeio de equipamentos ainda gera disputas trabalhistas no Brasil.",
  image: "img/teletrabalho-custeio-equipamentos-brasil.webp",
  link: "direito-trabalhista/teletrabalho-custeio-equipamentos-brasil.html",
  date: "2026-07-06T07:00:00",
  section: "featured"
},
  {
  title: "Denunciação Caluniosa Sob a Lupa",
  description: "Acusar em falso também é crime grave no Brasil.",
  image: "img/denunciacao-caluniosa-falsa-acusacao-brasil.webp",
  link: "direito-penal/denunciacao-caluniosa-falsa-acusacao-brasil.html",
  date: "2026-07-06T07:00:00",
  section: "veja"
},
{
  title: "Direito de Superfície Ganha Espaço",
  description: "Instituto separa propriedade do solo e construção no Brasil.",
  image: "img/direito-superficie-propriedade-brasil.webp",
  link: "direito-civil/direito-superficie-propriedade-brasil.html",
  date: "2026-07-07T09:00:00",
  section: "veja"
},
  {
  title: "Compliance Contratual em Ascensão",
  description: "Contratos viram instrumento de prevenção de riscos no Brasil.",
  image: "img/compliance-contratual-integridade-empresas-brasil.webp",
  link: "compliance/compliance-contratual-integridade-empresas-brasil.html",
  date: "2026-07-07T07:00:00",
  section: "veja"
},
  {
  title: "Due Diligence, o Exame Que Salva Negócios",
  image: "img/due-diligence-fusoes-aquisicoes-brasil.webp",
  link: "compliance/due-diligence-fusoes-aquisicoes-brasil.html",
  date: "2026-07-06T07:00:00",
    section: "destaque"
  },
   {
  title: "Falsa Comunicação de Crime na Mira",
  image: "img/falsa-comunicacao-crime-brasil.webp",
  link: "direito-penal/falsa-comunicacao-crime-brasil.html",
  date: "2026-07-07T09:00:00",
   section: "destaque"
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
    title: "Condomínios na Mira das Indenizações Civis",
    link: "direito-civil/condominios-mira-indenizacoes-civis.html",
    date: "2026-09-09T07:00:00"
},
{
    title: "Doações entre Cônjuges sob Escrutínio",
    link: "direito-de-familia/doacoes-conjuges-escrutinio.html",
    date: "2026-09-09T07:00:00"
},
{
    title: "Atraso na Entrega de Imóveis Residenciais",
    link: "direito-civil/atraso-entrega-imoveis-residenciais-indenizacao.html",
    date: "2026-07-18T07:00:00"
},
{
  title: "União Estável Paralela em Debate",
  link: "direito-de-familia/uniao-estavel-paralela-controversias-brasil.html",
  date: "2026-07-06T07:00:00"
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