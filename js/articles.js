const posts = [
  {
    title: "Vorcaro Preso Novamente na Operação Compliance Zero",
    image: "img/vorcaro-preso-operacao-compliance-zero-banco-master.jpg",
    link: "compliance/vorcaro-preso-operacao-compliance-zero-banco-master.html",
    date: "2026-03-05T07:00:00",
    section: "featured"
  },
  {
  title: "STM Concede Pela Primeira Vez Medidas Protetivas a Militar Trans Vítima de Assédio Sexual",
  image: "img/stm-medidas-protetivas-militar-trans-assedio-sexual.jpg",
  link: "direito-militar/stm-medidas-protetivas-militar-trans-assedio-sexual.html",
  date: "2026-03-04T07:00:00",
  section: "featured-secundario"
},
  {
    title: "Empresa e Advogado São Condenados pelo TST",
    image: "img/empresa-advogado-condenados-tst-citacoes-falsas-jurisprudencia.jpg",
    link: "direito-trabalhista/empresa-advogado-condenados-tst-citacoes-falsas-jurisprudencia.html",
    date: "2026-03-04T07:00:00",
    section: "destaque"
  },
   {
    title: "Instagram Pode Entrar na Partilha de Bens?",
    image: "img/instagram-perfil-partilha-bens-divorcio.jpg",
    link: "direito-de-familia/instagram-perfil-partilha-bens-divorcio.html",
    date: "2026-03-05T07:00:00",
    section: "destaque"
  },
  {
    title: "Responsabilidade Objetiva e Nexo Causal no STJ",
    image: "img/responsabilidade-objetiva-stj-precedentes.jpg",
    link: "direito-civil/responsabilidade-objetiva-stj-precedentes.html",
    date: "2026-03-05T00:00:00",
    section: "destaque"
  },
  {
    title: "O Que é Revelado Sobre o Caso do Banco Master e os Limites do Compliance",
    image: "img/banco-master-compliance-gestao-fraudulenta-temeraria-limites-governanca.jpg",
    link: "compliance/banco-master-compliance-gestao-fraudulenta-temeraria-limites-governanca.html",
    date: "2026-03-04T07:00:00",
    section: "veja"
  },
  {
    title: "Justiça Militar Condena PM por Lesão Grave no Recife",
    image: "img/pm-condenado-lesao-grave-bala-borracha-passinho-recife.jpg",
    link: "direito-militar/pm-condenado-lesao-grave-bala-borracha-passinho-recife.html",
    date: "2026-03-05T07:00:00",
    section: "veja"
  },
  {
    title: "STF Prorroga por 90 Dias as Regras de Distribuição do Fundo de Participação dos Estados",
    image: "img/stf-prorroga-90-dias-fundo-participacao-estados.jpg",
    link: "jurisprudencia/stf-prorroga-90-dias-fundo-participacao-estados.html",
    date: "2026-03-04T07:00:00",
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

const featuredTop = posts[0];

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

    <div class="post-time">${getTimeAgo(featuredTop.date)}</div>
  </div>
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

      <div class="post-time">${getTimeAgo(featuredSecondary.date)}</div>

    </div>
  `;
}

container.innerHTML += renderBanner("depois-destaques");

/* ===== VEJA TAMBÉM ===== */
const vejaPosts = posts
  .filter(p => p.section === "veja")
  .sort((a,b) => new Date(b.date) - new Date(a.date));

container.innerHTML += `
  <div class="section-block">
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
      title: "Quando o Silêncio Se Torna Arma no Ambiente Corporativo",
      link: "direito-trabalhista/a-violencia-invisivel-quando-o-silencio-se-torna-arma-no-ambiente-corporativo.html",
      date: "2026-03-01T07:00:00"
    },
    {
      title: "A Encruzilhada da Responsabilidade",
      link: "direito-civil/a-encruzilhada-da-responsabilidade-quem-paga-a-conta-quando-a-maquina-erra.html",
      date: "2026-03-01T07:00:00"
    },
    {
      title: "A Armadilha do Crédito Fácil",
      link: "direito-civil/a-armadilha-do-credito-facil-como-o-superendividamento-captura-os-mais-vulneraveis.html",
      date: "2026-03-01T07:00:00"
    },
    {
      title: "Juíza nega gratuidade processual a mulher após constatar gastos regulares com apostas online",
      link: "direito-civil/piracicaba-juiza-nega-gratuidade-processual-a-mulher-apos-constatar-gastos-regulares-com-apostas-online.html",
      date: "2026-03-01T07:00:00"
    },
    {
      title: "A Holding do Crime",
      link: "compliance/a-holding-do-crime.html",
      date: "2026-03-02T07:00:00"
    },
    {
      title: "STF Prorroga por 90 Dias as Regras de Distribuição do Fundo de Participação dos Estados",
      link: "jurisprudencia/stf-prorroga-90-dias-fundo-participacao-estados.html",
      date: "2026-03-04T07:00:00"
    }
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

