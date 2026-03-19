// Dados de notícias para Direito Civil
const categoryNewsData = [
        {
    title: "Garantias Locatícias sob Escrutínio Jurídico no Brasil",
    date: "20/03/2026",
    timestamp: "2026-03-20T07:00:00",
    image: "../img/garantias-locaticias-escrutinio-juridico-brasil.webp",
    excerpt: "Mercado imobiliário e segurança contratual em debate. A escolha da garantia locatícia adequada impacta diretamente a segurança jurídica dos contratos de locação no Brasil.",
    link: "../direito-civil/garantias-locaticias-escrutinio-juridico-brasil.html",
    categoria: "direito-civil",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Tokens Imobiliários e o Fólio Real Brasileiro",
    date: "19/03/2026",
    timestamp: "2026-03-19T07:00:00",
    image: "../img/tokens-imobiliarios-folio-real-matricula-registro.webp",
    excerpt: "A tokenização imobiliária avança no Brasil, mas esbarra na ausência de marco registral sólido. Sem o assentamento do criptoativo na matrícula do imóvel, o negócio carece de segurança jurídica.",
    link: "../direito-civil/tokens-imobiliarios-folio-real-matricula-registro.html",
    categoria: "direito-civil",
    author: "Justiça em Dia",
    authorLink: "#"
},

   {
    title: "Leilão de Imóvel Exige Notificação Prévia ao Devedor",
    date: "11/03/2026",
    timestamp: "2026-03-11T07:00:00",
    image: "../img/leilao-extrajudicial-notificacao-devedor-imovel.webp",
    excerpt: "A execução extrajudicial de imóveis por alienação fiduciária só é legítima quando o credor esgota todos os meios de intimação pessoal do devedor antes de recorrer ao edital.",
    link: "../direito-civil/leilao-extrajudicial-notificacao-devedor-imovel.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
        title: "Validade Jurídica dos Contratos Firmados por Meios Eletrônicos",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        excerpt: "A digitalização das relações negociais representa uma das mais significativas transformações do direito contratual contemporâneo. A possibilidade de celebrar contratos por meios eletrônicos revolucionou a dinâmica comercial, conferindo agilidade, redução de custos e ampliação do alcance geográfico das transações.",
        link: "../direito-civil/validade-juridica-contratos-eletronicos.html",
        category: "Direito Civil",
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
        
if (index === 3) {
    const bannerDiv = document.createElement('div');
    bannerDiv.className = 'banner-wrapper-full';

    newsContainer.appendChild(bannerDiv);

    function renderRandomBanner() {

        const isMobile = window.innerWidth <= 768;

        const banners = isMobile 
            ? siteConfig.banners.mobile 
            : siteConfig.banners.desktop;

        const activeBanners = banners.filter(isBannerActiveJS);

        if (!activeBanners.length) return;

        const banner = activeBanners[
            Math.floor(Math.random() * activeBanners.length)
        ];

        let imgPath = banner.img;

        if (!imgPath.startsWith('http')) {
            imgPath = prefix + imgPath;
        }

        bannerDiv.innerHTML = `
            <div style="margin: 30px 0; text-align: center;">
                <p style="font-size: 10px; color: #999; margin-bottom: 5px;">PUBLICIDADE</p>
                <a href="${banner.link}" target="_blank" rel="nofollow">
                    <img src="${imgPath}" style="max-width:100%; border-radius:8px;">
                </a>
            </div>
        `;
    }

    renderRandomBanner();

    setInterval(renderRandomBanner, 2000);
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
