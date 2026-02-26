// Dados de notícias para Jurisprudência
const categoryNewsData = [
    {
        title: "Lei da Anistia e Crimes Permanentes",
        date: "26/02/2026",
        timestamp: "2026-02-26T08:00:00",
        image: "https://www.adufg.org.br/images/stf-comeca-a-julgar-se-lei-da-anistia-pode-ser-aplicada-a-crimes-permanentes-da-ditadura-entenda.png?w=1200&q=80",
        excerpt: "A Jurisprudência que Reinterpreta o Passado e Projeta o Futuro da Justiça de Transição no Brasil.",
        link: "../jurisprudencia/limites-lei-anistia.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Racismo Estrutural no Brasil",
        date: "26/02/2026",
        timestamp: "2026-02-26T08:00:00",
        image: "https://images.jota.info/wp-content/uploads/2022/05/racismo-no-brasil-scaled.jpg?w=1200&q=80",
        excerpt: "A Jurisprudência que Desvenda as Raízes da Discriminação e Reafirma o Compromisso da Constituição com a Igualdade.",
        link: "../jurisprudencia/racismo-estrutural-implicacoes-constitucionais.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Violência de Gênero e a Lei Maria da Penha",
        date: "26/02/2026",
        timestamp: "2026-02-26T08:00:00",
        image: "https://br.lexlatin.com/sites/default/files/2021-08/VAW.jpg?w=1200&q=80",
        excerpt: "O Reconhecimento Jurisprudencial do STF que Fortalece o Combate à Violência Contra a Mulher no Brasil.",
        link: "../jurisprudencia/violencia-genero-lei-maria-da-penha.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "O Oráculo Digital da Justiça",
        date: "23/02/2026",
        timestamp: "2026-02-23T08:00:00",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1200&q=80",
        excerpt: "O advogado prepara recurso contra sentença desfavorável em ação trabalhista. Antes de redigir uma linha, acessa plataforma de jurisprudência preditiva que, mediante inteligência artificial, analisa 340 mil decisões.",
        link: "../jurisprudencia/o-oraculo-digital-da-justica-quando-algoritmos-preveem-decisoes-judiciais.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "A Força dos Precedentes Obrigatórios no Sistema Jurídico Brasileiro",
        date: "23/02/2026",
        timestamp: "2026-02-23T08:00:00",
        image: "../img/forca-precedentes-obrigatorios-brasil.jpg",
        excerpt: "A incorporação definitiva do sistema de precedentes obrigatórios no ordenamento jurídico brasileiro representa uma das mais profundas transformações estruturais do direito pátrio nas últimas décadas.",
        link: "../jurisprudencia/forca-precedentes-obrigatorios-brasil.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Mudanças Recentes na Jurisprudência dos Tribunais Superiores",
        date: "23/02/2026",
        timestamp: "2026-02-23T08:00:00",
        image: "../img/imagem-postagem.png",
        excerpt: "A dinâmica interpretativa do direito brasileiro passa por constante transformação, especialmente quando analisamos a atuação dos tribunais superiores. ",
        link: "../jurisprudencia/mudancas-recentes-jurisprudencia-tribunais.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
];

const ITEMS_PER_PAGE = 7;
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
