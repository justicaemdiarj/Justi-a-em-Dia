// Dados de notícias para Direito Penal
const categoryNewsData = [
     {
        title: "O Habeas Corpus e a Garantia que Ninguém Pode Confiscar",
      	date: "03/03/2026",
        timestamp: "2026-03-03T07:00:00",
        image: "../img/habeas-corpus-garantia-que-ninguem-pode.jpg",
        excerpt: "O Superior Tribunal de Justiça enviou recado inequívoco aos tribunais estaduais: o habeas corpus é garantia constitucional...",
        link: "../direito-penal/habeas-corpus-garantia-que-ninguem-pode-confiscar.html",
        category: "Direito Penal",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Segunda Turma do STF decide que exibição de vídeo pelo Ministério Público na presença de jurados não invalida julgamento",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://media.gazetadopovo.com.br/2025/10/15221712/stf-ensino-genero-660x372.jpg.webp",
        excerpt: "Ministros aplicam princípio de que não há nulidade sem prejuízo demonstrado, mas penalistas alertam para riscos à imparcialidade do conselho de sentença",
        link: "../direito-penal/stf-segunda-turma-decide-que-exibicao-de-video.html",
        category: "Direito Penal",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "TJ/DF libera casal preso e reconhece domínio técnico na produção doméstica de cannabis para fins terapêuticos",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
        excerpt: "Tribunal do Distrito Federal reconhece produção para uso terapêutico próprio e derruba prisão preventiva em decisão que reflete avanço do debate sobre a maconha medicinal no país",
        link: "../direito-penal/tj-df-libera-casal-preso-e-reconhece-dominio-tecnico-na-producao-domestica-de-cannabis-para-fins-terapeuticos.html",
        category: "Direito Penal",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Prisão Preventiva",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/Prisao-preventiva.png",
        excerpt: "A prisão preventiva, modalidade de prisão cautelar regulamentada pelos artigos 311 a 316 do Código de Processo Penal, constitui medida excepcional que restringe a liberdade do acusado antes do trânsito em julgado da sentença condenatória.",
        link: "../direito-penal/prisao-preventiva-requisitos-abusos.html",
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
