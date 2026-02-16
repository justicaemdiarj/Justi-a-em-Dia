// Dados de notícias para Recursos Humanos
const categoryNewsData = [
    {
        title: "Novas Tendências em Gestão de Pessoas para o Setor Jurídico",
        date: "13/02/2026",
        timestamp: "2026-02-13T10:00:00",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
        excerpt: "Como atrair e reter talentos em um mercado cada vez mais competitivo e focado em bem-estar e flexibilidade.",
        link: "#",
        category: "Recursos Humanos",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Novas Tendências em Gestão de Pessoas para o Setor Jurídico",
        date: "13/02/2026",
        timestamp: "2026-02-13T10:00:00",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
        excerpt: "Como atrair e reter talentos em um mercado cada vez mais competitivo e focado em bem-estar e flexibilidade.",
        link: "#",
        category: "Recursos Humanos",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Novas Tendências em Gestão de Pessoas para o Setor Jurídico",
        date: "13/02/2026",
        timestamp: "2026-02-13T10:00:00",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
        excerpt: "Como atrair e reter talentos em um mercado cada vez mais competitivo e focado em bem-estar e flexibilidade.",
        link: "#",
        category: "Recursos Humanos",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Novas Tendências em Gestão de Pessoas para o Setor Jurídico",
        date: "13/02/2026",
        timestamp: "2026-02-13T10:00:00",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
        excerpt: "Como atrair e reter talentos em um mercado cada vez mais competitivo e focado em bem-estar e flexibilidade.",
        link: "#",
        category: "Recursos Humanos",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Novas Tendências em Gestão de Pessoas para o Setor Jurídico",
        date: "13/02/2026",
        timestamp: "2026-02-13T10:00:00",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
        excerpt: "Como atrair e reter talentos em um mercado cada vez mais competitivo e focado em bem-estar e flexibilidade.",
        link: "#",
        category: "Recursos Humanos",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Novas Tendências em Gestão de Pessoas para o Setor Jurídico",
        date: "13/02/2026",
        timestamp: "2026-02-13T10:00:00",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
        excerpt: "Como atrair e reter talentos em um mercado cada vez mais competitivo e focado em bem-estar e flexibilidade.",
        link: "#",
        category: "Recursos Humanos",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Novas Tendências em Gestão de Pessoas para o Setor Jurídico",
        date: "13/02/2026",
        timestamp: "2026-02-13T10:00:00",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
        excerpt: "Como atrair e reter talentos em um mercado cada vez mais competitivo e focado em bem-estar e flexibilidade.",
        link: "#",
        category: "Recursos Humanos",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Novas Tendências em Gestão de Pessoas para o Setor Jurídico",
        date: "13/02/2026",
        timestamp: "2026-02-13T10:00:00",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
        excerpt: "Como atrair e reter talentos em um mercado cada vez mais competitivo e focado em bem-estar e flexibilidade.",
        link: "#",
        category: "Recursos Humanos",
        author: "Justiça em Dia",
        authorLink: "#"
    },{
        title: "Novas Tendências em Gestão de Pessoas para o Setor Jurídico",
        date: "13/02/2026",
        timestamp: "2026-02-13T10:00:00",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
        excerpt: "Como atrair e reter talentos em um mercado cada vez mais competitivo e focado em bem-estar e flexibilidade.",
        link: "#",
        category: "Recursos Humanos",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "A Importância da Diversidade e Inclusão nas Organizações",
        date: "11/02/2026",
        timestamp: "2026-02-11T11:20:00",
        image: "../img/justica-exemplo.gif",
        excerpt: "Estratégias práticas para implementar programas de diversidade que geram valor real para as empresas e para a sociedade.",
        link: "#",
        category: "Recursos Humanos",
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
