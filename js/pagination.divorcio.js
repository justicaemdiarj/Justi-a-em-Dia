// Dados de notícias para Direito de Família
const categoryNewsData = [
    {
    title: "FGTS Entra na Partilha do Divórcio",
    date: "16/03/2026",
    timestamp: "2026-03-16T12:00:00",
    image: "../img/fgts-partilha-bens-divorcio-comunhao-parcial-STJ.webp",
    excerpt: "O saldo do FGTS acumulado durante o casamento em regime de comunhão parcial integra o patrimônio comum do casal e deve ser incluído na partilha de bens no divórcio, segundo entendimento consolidado pelo STJ. O cônjuge não titular tem direito à meação do valor depositado no período da união, mas a desinformação faz com que esse ativo seja frequentemente omitido nos acordos.",
    link: "../direito-de-familia/fgts-partilha-bens-divorcio-comunhao-parcial-STJ.html",
    category: "direito-de-familia",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Três Caminhos, Uma Escolha Decisiva no Divórcio",
    date: "09/03/2026",
    timestamp: "2026-03-09T07:00:00",
    image: "../img/divorcio-extrajudicial-consensual-litigioso-diferencas.webp",
    excerpt: "Entenda as diferenças entre o divórcio extrajudicial em cartório, o consensual judicial e o litigioso, seus requisitos legais, custos e impactos para cônjuges e filhos.",
    link: "../direito-de-familia/divorcio-extrajudicial-consensual-litigioso-diferencas.html",
    author: "Romer Carvalho",
    authorLink: "../apoiadores/advogado-romer-carvalho.html"
},   
{
    title: "Código Civil Ignora a Família Real",
    date: "07/03/2026",
    timestamp: "2026-03-07T07:00:00",
    image: "../img/codigo-civil-ignora-familia-real-reforma-urgente-sucessoes.webp",
    excerpt: "Especialistas debatem no Senado a urgência de reformar o Código Civil no campo do direito de família e das sucessões.",
    link: "../direito-de-familia/codigo-civil-ignora-familia-real-reforma-urgente-sucessoes.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
        title: "O Testamento Digital",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?w=1200&q=80",
        excerpt: "O tabelionato de notas em São Paulo recebe o casal de noivos com documentação completa para lavrar pacto antenupcial. Além das cláusulas tradicionais ...",
        link: "../direito-de-familia/o-testamento-digital-quando-o-amor-precisa-contemplar-bitcoins-e-senhas.html",
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
