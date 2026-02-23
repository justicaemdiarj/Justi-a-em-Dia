// Dados de notícias para Finanças
const categoryNewsData = [
    {
        title: "Impacto das Novas Regras de Tributação em Investimentos Estrangeiros",
        date: "23/02/2026",
        timestamp: "2026-02-23T08:00:00",
        image: "https://economicnewsbrasil.com.br/wp-content/uploads/2025/09/investimento-estrangeiro-no-brasil.jpg",
        excerpt: "Uma análise profunda sobre como as recentes mudanças na legislação tributária brasileira afetam os investidores que operam no exterior.",
        link: "#",
        category: "Finanças",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Gestão Financeira para Escritórios de Advocacia em 2026",
        date: "23/02/2026",
        timestamp: "2026-02-23T08:00:00",
        image: "data:image/jpeg;base64,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",
        excerpt: "Especialistas discutem as melhores práticas de gestão de fluxo de caixa e planejamento tributário para o setor jurídico.",
        link: "#",
        category: "Finanças",
        author: "Justiça em Dia",
        authorLink: "#"
    }
];

const ITEMS_PER_PAGE = 7;
let currentPage = 1;

/**
 * Calcula o tempo relativo da postagem
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
