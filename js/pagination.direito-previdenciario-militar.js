// Dados de notícias para Direito Militar
const categoryNewsData = [
    {
    title: "PL 4920 Tensiona Previdência das Forças Armadas",
    date: "16/03/2026",
    timestamp: "2026-03-16T12:00:00",
    image: "../img/pl-4920-previdencia-forcas-armadas-rejeicao-militares.webp",
    excerpt: "O Projeto de Lei 4920/2024, de iniciativa do Poder Executivo, propõe mudanças estruturais no regime previdenciário dos militares, incluindo idade mínima para a reserva e extinção da morte ficta, gerando rejeição massiva de 91% na consulta pública da Câmara dos Deputados.",
    link: "../direito-militar/pl-4920-previdencia-forcas-armadas-rejeicao-militares.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
   {
    title: "Militares Doentes Ganham Isenção Previdenciária em Minas",
    date: "11/03/2026",
    timestamp: "2026-03-11T07:00:00",
    image: "../img/isencao-previdenciaria-militares-doencas-graves-minas-gerais-zema.webp",
    excerpt: "O governo Zema encaminha à ALMG projeto de lei que estende a policiais e bombeiros militares aposentados ou pensionistas portadores de doenças graves a isenção de contribuição previdenciária até o dobro do teto do INSS, benefício já concedido aos servidores civis estaduais.",
    link: "../direito-militar/isencao-previdenciaria-militares-doencas-graves-minas-gerais-zema.html",
    category: "direito-militar",
    author: "Justiça em Dia",
    authorLink: "#"
},
 {
        title: "A Farda e a Constituição",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=1200&q=80",
        excerpt: "O soldado do Exército recorre ao Supremo Tribunal Federal questionando punição disciplinar que lhe custou quinze dias de prisão.",
        link: "../direito-militar/a-farda-e-a-constituicao-o-direito-militar-entre-a-tradicao-e-os-direitos-fundamentais.html",
        category: "Direito Militar",
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
