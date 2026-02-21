// Dados de notícias para Gestão de Desempenho e Clima
const categoryNewsData = [
    {
        title: "Primeira notícia sobre Gestão de Desempenho e Clima",
        date: "21/02/2026",
        timestamp: "2026-02-21T10:00:00",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
        excerpt: "Avaliação de desempenho e clima organizacional.",
        link: "../gestao-de-desempenho/primeira-noticia.html",
        category: "Recursos Humanos",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Segunda notícia sobre Gestão de Desempenho e Clima",
        date: "20/02/2026",
        timestamp: "2026-02-20T10:00:00",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        excerpt: "Análise e informações sobre Gestão de Desempenho e Clima.",
        link: "../gestao-de-desempenho/segunda-noticia.html",
        category: "Recursos Humanos",
        author: "Justiça em Dia",
        authorLink: "#"
    },
];

// Configuração de paginação
const itemsPerPage = 10;
let currentPage = 1;

// Função para renderizar notícias
function renderNews(page = 1) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newsToShow = categoryNewsData.slice(startIndex, endIndex);
    
    const container = document.getElementById('news-container');
    container.innerHTML = '';
    
    newsToShow.forEach(news => {
        const article = document.createElement('article');
        article.className = 'category-post';
        article.innerHTML = `
                <div class="category-post-image-container">
                    <a href="${news.link}" class="category-post-link-wrapper">
                        <img src="${news.image}" alt="${news.title}" loading="lazy">
                    </a>
                </div>
                <div class="category-post-content">
                    <a href="${news.link}" class="category-post-link-wrapper">
                        <h3 class="category-post-title">${news.title}</h3>
                        <p class="category-post-excerpt">${news.excerpt}</p>
                    </a>
                    <div class="category-post-meta-container">
                        <p class="category-post-meta">${news.date} &bull; Por ${news.author}</p>
                    </div>
                </div>
        `;
        container.appendChild(article);
    });
    
    renderPagination();
}

// Função para renderizar paginação
function renderPagination() {
    const totalPages = Math.ceil(categoryNewsData.length / itemsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    
    if (totalPages > 1) {
        const ul = document.createElement('ul');
        
        // Botão anterior
        if (currentPage > 1) {
            const prevLi = document.createElement('li');
            prevLi.innerHTML = `<a href="#" onclick="goToPage(${currentPage - 1}); return false;">Anterior</a>`;
            ul.appendChild(prevLi);
        }
        
        // Números das páginas
        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            if (i === currentPage) {
                li.className = 'active';
                li.innerHTML = `<span>${i}</span>`;
            } else {
                li.innerHTML = `<a href="#" onclick="goToPage(${i}); return false;">${i}</a>`;
            }
            ul.appendChild(li);
        }
        
        // Botão próximo
        if (currentPage < totalPages) {
            const nextLi = document.createElement('li');
            nextLi.innerHTML = `<a href="#" onclick="goToPage(${currentPage + 1}); return false;">Próximo</a>`;
            ul.appendChild(nextLi);
        }
        
        paginationContainer.appendChild(ul);
    }
}

// Função para ir para uma página específica
function goToPage(page) {
    currentPage = page;
    renderNews(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderNews(1);
});
