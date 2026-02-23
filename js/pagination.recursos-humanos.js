// Dados de notícias para Recursos Humanos
const categoryNewsData = [
{
        title: "Pessoas em Primeiro Lugar",
        date: "23/02/2026",
        timestamp: "2026-02-23T10:00:00",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
        excerpt: "Por décadas, a cultura dos escritórios de advocacia e dos departamentos jurídicos corporativos foi definida por uma lógica que colocava a entrega acima de tudo.  .",
        link: "../recursos-humanos/pessoas-em-primeiro-lugar-como-o-setor-juridico-reinventa-sua-relacao-com-talentos-em-um-mercado-em-transformacao.html",
        category: "Recursos Humanos",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "A Permanência Como Direito",
        date: "11/02/2026",
        timestamp: "2026-02-11T11:20:00",
        image: "https://static.vecteezy.com/ti/vetor-gratis/p1/21219960-diversidade-e-inclusao-logotipo-com-mao-colorida-logotipo-simbolo-do-harmonia-e-uniao-vetor.jpg",
        excerpt: "Há uma distinção fundamental, quase jurídica, entre habitar um espaço por necessidade e habitá-lo por vontade..",
        link: "../recursos-humanos/a-permanencia-como-direito.html",
        category: "Recursos Humanos",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Diversidade Não é Favor",
        date: "11/02/2026",
        timestamp: "2026-02-11T11:20:00",
        image: "https://static.vecteezy.com/ti/vetor-gratis/p1/21219960-diversidade-e-inclusao-logotipo-com-mao-colorida-logotipo-simbolo-do-harmonia-e-uniao-vetor.jpg",
        excerpt: "Houve um tempo em que a pauta da diversidade e inclusão nas organizações era vista como um luxo progressista — algo que as empresas adotavam por pressão social ou para melhorar sua imagem..",
        link: "../recursos-humanos/diversidade-nao-e-favor-o-imperativo-estrategico-da-inclusao-nas-organizacoes-contemporaneas.html",
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
