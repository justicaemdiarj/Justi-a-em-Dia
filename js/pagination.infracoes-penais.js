// Dados de notícias para Direito Penal
const categoryNewsData = [
    {
        title: "ANPP Ambiental, Quando a Empresa Confessa pelo Dirigente",
        date: "13/03/2026",
        timestamp: "2026-03-13T07:00:00",
        image: "../img/anpp-ambiental-confissao-pessoa-juridica-correu-pessoa-fisica.webp",
        excerpt: "A confissão de pessoa jurídica em ANPP por crime ambiental gera paradoxo jurídico sobre seus efeitos probatórios no corréu pessoa física que recusou o benefício, colocando em xeque garantias do contraditório e da presunção de inocência.",
        link: "../direito-penal/anpp-ambiental-confissao-pessoa-juridica-correu-pessoa-fisica.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
{
    title: "Receita Falsa Opioide e a Semi-Imputabilidade",
    date: "10/03/2026",
    timestamp: "2026-03-10T07:00:00",
    image: "../img/receita-falsa-opioide-semi-imputabilidade-condenacao-penal.webp",
    excerpt: "Dependência química mitiga pena mas não afasta condenação penal.",
    link: "../direito-penal/receita-falsa-opioide-semi-imputabilidade-condenacao-penal.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "MPRJ reverte posição e pede internação de menor",
    date: "06/03/2026",
    timestamp: "2026-03-06T07:00:00",
    image: "../img/mprj-reverte-posicao-pede-internacao-menor-estupro-coletivo.webp",
    excerpt: "Após novas vítimas emergirem no caso de estupro coletivo de Copacabana, o MPRJ reverteu sua posição e passou a requerer a internação provisória do adolescente investigado.",
    link: "../direito-penal/mprj-reverte-posicao-pede-internacao-menor-estupro-coletivo.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
 {
        title: "A Decisão do TJMG que Ameaça Décadas de Proteção à Infância",
      	date: "04/03/2026",
        timestamp: "2026-03-04T07:00:00",
        image: "../img/casamento-crianca-crime-tjmg-estupro-vulneravel-protecao-infancia.webp",
        excerpt: "Uma decisão proferida pela 9ª Câmara Criminal Especializada do Tribunal de Justiça de Minas Gerais..",
        link: "../direito-penal/casamento-crianca-crime-tjmg-estupro-vulneravel-protecao-infancia.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Crimes Ambientais Transnacionais",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/crimes-transnacionais.webp",
        excerpt: "A Convenção de Viena sobre Direito dos Tratados e diversos acordos bilaterais estabelecem mecanismos de auxílio mútuo, extradição e compartilhamento.",
        link: "../direito-penal/crimes-ambientais-transnacionais-a-amazonia-no-epicentro-de-um-conflito-de-jurisdicoes.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Princípio da Insignificância e sua Aplicação nos Crimes Patrimoniais",
         date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/principio-insignificancia-crimes-patrimoniais.webp",
        excerpt: "O princípio da insignificância, também denominado princípio da bagatela, constitui importante instrumento de racionalização do sistema penal, permitindo a exclusão da tipicidade material em condutas que, embora formalmente adequadas a tipos penais, não apresentam relevância suficiente para justificar a intervenção do direito penal.",
        link: "../direito-penal/principio-insignificancia-crimes-patrimoniais.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
];

const ITEMS_PER_PAGE = 15;
let currentPage = 1;

/**
 * Calcula o tempo relativo da postagem
 * @param {string} timestamp - Data no formato ISO
 * @param {string} defaultDate - Data formatada para exibir após 24h
 * @returns {string} Tempo relativo ou data original
 */
function getRelativeTime(timestamp, defaultDate) {
    if (!timestamp) return defaultDate;
    
    const postDate = new Date(timestamp);
    const now = new Date();
    const diffInMs = now - postDate;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    if (diffInHours >= 1 && diffInHours <= 24) {
        return `Há ${diffInHours} ${diffInHours === 1 ? 'hora' : 'horas'}`;
    } else if (diffInHours < 1) {
        return "Há menos de 1 hora";
    } else {
        return defaultDate;
    }
}

function renderNews(page) {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) return;
    newsContainer.innerHTML = '';
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const paginatedItems = categoryNewsData.slice(start, end);
    if (paginatedItems.length === 0) {
        newsContainer.innerHTML = '<p class="no-news">Nenhuma notícia encontrada para esta categoria.</p>';
        return;
    }
    paginatedItems.forEach((item, index) => {
        item.authorLink = typeof getAuthorLink === 'function' ? getAuthorLink(item.author) : '#';
        const timeDisplay = getRelativeTime(item.timestamp, item.date);
        
        // Inserir banner no meio da página (ex: após o 3º item)
        if (index === 3) {
            const bannerDiv = document.createElement('div');
            bannerDiv.className = 'banner-wrapper-full';
            bannerDiv.innerHTML = typeof getMiddleBannerHtml === 'function' ? getMiddleBannerHtml() : '';
            newsContainer.appendChild(bannerDiv);
        }

        const shareHtml = typeof getShareButtonsHtml === 'function' ? getShareButtonsHtml(item.title, item.link) : '';
        
        const article = document.createElement('article');
        article.className = 'category-post';
        article.innerHTML = `
                <div class="category-post-image-container">
                    <a href="${item.link}" class="category-post-link-wrapper">
                        <img src="${item.image}" alt="${item.title}" loading="lazy">
                    </a>
                </div>
                <div class="category-post-content">
                    <a href="${item.link}" class="category-post-link-wrapper">
                        <h3 class="category-post-title">${item.title}</h3>
                    
                    <p class="category-post-excerpt">${item.excerpt}</p></a>
                    <div class="category-post-meta-container">
                        <p class="category-post-meta">${timeDisplay} &bull; Em ${item.author || 'Notícias'}</p>
                        ${shareHtml}
                    </div>
                </div>
        `;
        newsContainer.appendChild(article);
    });
    renderPagination(categoryNewsData.length);
    if (page > 1 || sessionStorage.getItem('paged')) {
        const header = document.querySelector('.category-header');
        if (header) {
            header.scrollIntoView({ behavior: 'smooth' });
        }
    }
    sessionStorage.setItem('paged', 'true');
}

function renderPagination(totalItems) {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    if (totalPages <= 1) return;
    if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '&laquo;';
        prevBtn.className = 'pagination-btn';
        prevBtn.onclick = () => {
            currentPage--;
            renderNews(currentPage);
        };
        paginationContainer.appendChild(prevBtn);
    }
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        btn.onclick = () => {
            currentPage = i;
            renderNews(currentPage);
        };
        paginationContainer.appendChild(btn);
    }
    if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '&raquo;';
        nextBtn.className = 'pagination-btn';
        nextBtn.onclick = () => {
            currentPage++;
            renderNews(currentPage);
        };
        paginationContainer.appendChild(nextBtn);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    sessionStorage.removeItem('paged');
    renderNews(currentPage);
});
