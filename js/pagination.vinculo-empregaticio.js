// Dados de notícias para Direito Trabalhista
const categoryNewsData = [
        {
    title: "Escala 6x1 Sob o Olhar da CLT",
    date: "18/03/2026",
    timestamp: "2026-03-18T07:00:00",
    image: "../img/escala-6x1-clt-jornada-trabalho-legalidade-direitos-trabalhistas.webp",
    excerpt: "Legalidade da jornada depende de condições que muitos ignoram.",
    link: "../direito-trabalhista/escala-6x1-clt-jornada-trabalho-legalidade-direitos-trabalhistas.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
  
  {
    title: "Aplicativos Vencem a Batalha do Vínculo Trabalhista",
    date: "14/03/2026",
    timestamp: "2026-03-14T07:00:00",
    image: "../img/plp-152-2025-vinculo-empregaticio-motoristas-aplicativos-regulamentacao.webp",
    excerpt: "O relator do PLP 152/2025 declarou que o vínculo empregatício entre motoristas e plataformas é um ponto vencido no projeto, que criará regime normativo próprio para trabalhadores plataformizados e afastará a CLT.",
    link: "../direito-trabalhista/plp-152-2025-vinculo-empregaticio-motoristas-aplicativos-regulamentacao.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
  {
        title: "Vínculo Empregatício Nas Novas Formas de Trabalho por Aplicativo",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/vinculo-empregaticio-trabalho-aplicativo.webp",
        excerpt: "A economia de plataformas digitais revolucionou o mercado de trabalho nas últimas décadas, introduzindo modelos de prestação de serviços que desafiam as categorias tradicionais do direito laboral.",
        link: "../direito-trabalhista/vinculo-empregaticio-trabalho-aplicativo.html",
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

    // HTML fixo (NÃO recria mais)
    bannerDiv.innerHTML = `
        <div style="margin: 30px 0; text-align: center;">
            <p style="font-size: 10px; color: #999; margin-bottom: 5px;">PUBLICIDADE</p>
            <a id="bannerLink" href="#" target="_blank" rel="nofollow">
                <img id="bannerImg" src="" style="max-width:100%; border-radius:8px; transition: opacity 0.5s;">
            </a>
        </div>
    `;

    const img = bannerDiv.querySelector('#bannerImg');
    const link = bannerDiv.querySelector('#bannerLink');

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

    // 🔥 PRÉ-CARREGA a imagem antes de trocar
    const newImg = new Image();
    newImg.src = imgPath;

    newImg.onload = () => {

        // fade out suave
        img.style.opacity = '0';

        setTimeout(() => {

            // troca só depois que carregou
            img.src = imgPath;
            link.href = banner.link;

            // fade in suave
            img.style.opacity = '1';

        }, 400); // tempo alinhado com transição
    };
}
    // primeira carga
    renderRandomBanner();

    // troca automática (agora suave)
    setInterval(renderRandomBanner, 5000);
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
