// Dados de notícias para Direito de Família
const categoryNewsData = [
    {
    title: "Quando o Judiciário Vira Instrumento de Opressão",
    date: "19/03/2026",
    timestamp: "2026-03-19T07:00:00",
    image: "../img/litigancia-predatoria-familia-judiciario-instrumento-opressao.webp",
    excerpt: "Nas Varas de Família, o processo judicial tem sido desvirtuado como ferramenta de assédio e controle coercitivo. A litigância predatória expõe a insuficiência dos mecanismos tradicionais e exige uma virada dogmática urgente.",
    link: "../direito-de-familia/litigancia-predatoria-familia-judiciario-instrumento-opressao.html",
    categoria: "direito-de-familia",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Judiciário do Acre Vai Além da Punição",
    date: "15/03/2026",
    timestamp: "2026-03-15T07:00:00",
    image: "../img/tjac-judiciario-acolhimento-violencia-domestica-lei-maria-penha-20-anos.webp",
    excerpt: "O TJAC mobilizou magistrados e servidores de todas as comarcas do Acre na 32ª Semana Justiça pela Paz em Casa com 140 audiências, suporte psicossocial pelo Ceavi, cartilha educativa e capacitação de estudantes em técnicas restaurativas, no ano em que a Lei Maria da Penha completa 20 anos.",
    link: "../direito-de-familia/tjac-judiciario-acolhimento-violencia-domestica-lei-maria-penha-20-anos.html",
    category: "direito-de-familia",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Violência Doméstica em Números que Assustam",
    date: "14/03/2026",
    timestamp: "2026-03-14T07:00:00",
    image: "../img/violencia-domestica-numeros-sc-brasil-feminicidio-medidas-protetivas.webp",
    excerpt: "Servidor do PJSC apresenta dados do CNJ que revelam 945 mil medidas protetivas e 1.470 feminicídios em 2025 no Brasil, com destaque para os índices alarmantes de Chapecó e a dimensão oculta da violência doméstica em SC.",
    link: "../direito-de-familia/violencia-domestica-numeros-sc-brasil-feminicidio-medidas-protetivas.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Tolerância zero: o arcabouço legal contra violência feminina",
    date: "06/03/2026",
    timestamp: "2026-03-06T07:00:00",
    image: "../img/tolerancia-zero-arcabouco-legal-violencia-contra-mulher.webp",
    excerpt: "A política de tolerância zero à violência contra a mulher é um arcabouço normativo que vai além da punição e busca transformar as estruturas sociais que perpetuam a violência de gênero no Brasil.",
    link: "../direito-de-familia/tolerancia-zero-arcabouco-legal-violencia-contra-mulher.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
        title: "Protegidas no Papel, Vulneráveis na Vida Real",
        date: "04/03/2026",
        timestamp: "2026-03-04T07:00:00",
        image: "../img/protegidas-no-papel-vulneraveis-na-vida-real-colapso-medidas-protetivas.webp",
        excerpt: "A cada novo caso de feminicídio noticiado no país, um detalhe se repete com perturbadora regularidade..",
        link: "../direito-de-familia/protegidas-no-papel-vulneraveis-na-vida-real-colapso-medidas-protetivas.html",
        category: "Direito de Família",
        author: "Por Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "O Testamento Digital",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?w=1200&q=80",
        excerpt: "O tabelionato de notas em São Paulo recebe o casal de noivos com documentação completa para lavrar pacto antenupcial. Além das cláusulas tradicionais ...",
        link: "../direito-de-familia/o-testamento-digital-quando-o-amor-precisa-contemplar-bitcoins-e-senhas.html",
        category: "Direito de Família",
        author: "Por Justiça em Dia",
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
