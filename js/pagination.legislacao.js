// Dados de notícias para Legislação
const categoryNewsData = [
     {
        title: "Novo Imposto de Renda",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://dnafinanceiro.com/blog/wp-content/uploads/2020/05/impostos-pequena-empresa.png?w=1200&q=80",
        excerpt: "Ampliação da Faixa de Isenção para R$ 5 Mil e Tributação Mínima sobre Altas Rendas: Um Marco na Reforma Tributária.",
        link: "../legislacao/novo-imposto-de-renda.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
     {
        title: "Código de Defesa do Contribuinte",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://www.acipcdl.com.br/wp-content/uploads/2024/05/contribuinte.jpeg?w=1200&q=80",
        excerpt: "A Modernização da Administração Tributária: Rumo à Transparência e à Segurança Jurídica.",
        link: "../legislacao/codigo-defesa-contribuinte.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
     {
        title: "Programa Gás do Povo",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://noticiasconcursos.com.br/wp-content/uploads/2025/10/Gas-do-povo-3-3.webp?w=1200&q=80",
        excerpt: "A Nova Legislação que Redefine o Amparo Social e a Acessibilidade Energética no Brasil.",
        link: "../legislacao/programa-gas-do-povo.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "A Lei Antes do Fato",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&q=80",
        excerpt: "O Congresso Nacional vota em 2026 projeto de lei inédito na história legislativa brasileira: regulação preventiva de tecnologias de edição genética germinal (CRISPR aplicado a embriões humanos) que ainda não estão disponíveis comercialmente no país, mas cujo desenvolvimento é iminente.",
        link: "../legislacao/a-lei-antes-do-fato-como-a-regulacao-preditiva-antecipa-riscos-tecnologicos.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Impactos Práticos das Alterações Legislativas no Direito de Família",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/impactos-alteracoes-legislativas-familia.jpeg",
        excerpt: "O direito de família brasileiro experimenta constante transformação legislativa que reflete as profundas mudanças sociais das últimas décadas. A compreensão contemporânea das relações familiares expandiu-se significativamente.",
        link: "../legislacao/impactos-alteracoes-legislativas-familia.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Interpretação da Lei à Luz da Constituição e da Jurisprudência Atual",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/interpretacao-lei-constituicao-jurisprudencia.jpg",
        excerpt: "A interpretação jurídica contemporânea não pode prescindir da compreensão sistêmica do ordenamento. A lei, isoladamente considerada, constitui apenas fragmento de complexa estrutura normativa que encontra na Constituição seu fundamento de validade e na jurisprudência sua concretização prática.",
        link: "../legislacao/interpretacao-lei-constituicao-jurisprudencia.html",
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
