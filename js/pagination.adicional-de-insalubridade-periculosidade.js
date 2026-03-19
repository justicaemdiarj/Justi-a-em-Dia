// Dados de notícias para Direito Trabalhista
const categoryNewsData = [
    {
    title: "Insalubridade Para Motoboys a Partir de Abril",
    date: "17/03/2026",
    timestamp: "2026-03-17T07:00:00",
    image: "../img/insalubridade-motoboys-entregadores-abril-2026-direitos-trabalhistas.webp",
    excerpt: "Entregadores terão adicional reconhecido pelo Ministério do Trabalho.",
    link: "../direito-trabalhista/insalubridade-motoboys-entregadores-abril-2026-direitos-trabalhistas.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
 {
    title: "TST Garante Insalubridade Máxima a Socorrista do SAMU",
    date: "11/03/2026",
    timestamp: "2026-03-12T07:00:00",
    image: "../img/tst-insalubridade-grau-maximo-socorrista-samu-doenca-infectocontagiosa.webp",
    excerpt: "A Sexta Turma do TST condenou consórcio intermunicipal de saúde a pagar adicional de insalubridade de 40% a socorrista do SAMU, firmando que o contato com pacientes portadores de doenças infectocontagiosas é suficiente para o grau máximo, dispensando o requisito de trabalho permanente em área de isolamento.",
    link: "../direito-trabalhista/tst-insalubridade-grau-maximo-socorrista-samu-doenca-infectocontagiosa.html",
    author: "Justiça em Dia",
    authorLink: "#"
}, 
  {
        title: "Como o Salário Mínimo se Tornou a Mais Simbólica Batalha do Constitucional",
        date: "03/03/2026",
        timestamp: "2026-03-03T07:00:00",
        image: "../img/salario-minimo-tornou-simbolo-constitucional.webp",
        excerpt: "O relatório foi revisado três vezes, cada vírgula analisada, cada dado conferido. Mesmo assim, quando apresentado na reunião..",
        link: "../direito-trabalhista/salario-minimo-tornou-simbolo-constitucional-social-brasileiro.html",
        category: "Direito Trabalhista",
        author: "Justiça em Dia",
        authorLink: "#"
    },
     {
        title: "Corte trabalhista rejeita adicional de risco a bancário por combustível guardado no edifício onde trabalha",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://www.spbancarios.com.br/Uploads/ckfinder/userfiles/images/_MAU8083_materia.webp",
        excerpt: "Adicional exige contato direto e habitual com inflamáveis — presença eventual de combustível no local de trabalho não basta...",
        link: "../direito-trabalhista/corte-trabalhista-rejeita-adicional-de-risco-a-bancario-por-combustivel-guardado-no-edificio-onde-trabalha.html",
        category: "Direito Trabalhista",
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
