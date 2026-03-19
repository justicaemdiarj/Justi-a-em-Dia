// Dados de notícias para Direito Civil
const categoryNewsData = [
        {
    title: "Risco Cirúrgico Não Gera Responsabilidade Automática",
    date: "18/03/2026",
    timestamp: "2026-03-18T07:00:00",
    image: "../img/complicacao-pos-operatoria-responsabilidade-civil-medica-culpa-nexo-causal.webp",
    excerpt: "Obrigação médica é de meio e não de resultado.",
    link: "../direito-civil/complicacao-pos-operatoria-responsabilidade-civil-medica-culpa-nexo-causal.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "ECA Digital Protege Crianças no Ambiente Virtual",
    date: "17/03/2026",
    timestamp: "2026-03-17T07:00:00",
    image: "../img/eca-digital-vigor-marco-2026-protecao-criancas-adolescentes-internet.webp",
    excerpt: "Nova lei impõe obrigações às plataformas digitais brasileiras.",
    link: "../direito-de-familia/eca-digital-vigor-marco-2026-protecao-criancas-adolescentes-internet.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Justiça Digital Sem Advogado no Rio",
    date: "17/03/2026",
    timestamp: "2026-03-17T07:00:00",
    image: "../img/tjrj-peticao-cidada-juizados-especiais-civeis-online-sem-advogado.webp",
    excerpt: "Plataforma fluminense democratiza o acesso à jurisdição civil.",
    link: "../direito-civil/tjrj-peticao-cidada-juizados-especiais-civeis-online-sem-advogado.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
        {
    title: "Responsabilidade Civil Divide Debate no Novo Código",
    date: "16/03/2026",
    timestamp: "2026-03-16T12:00:00",
    image: "../img/reforma-codigo-civil-responsabilidade-civil-debate-juizes-pl-4-2025-sancao-pedagogica.webp",
    excerpt: "A audiência pública da CTCivil em 12 de março de 2026 expôs as profundas divisões em torno das propostas do PL 4/2025 para a responsabilidade civil: sanção pedagógica até quatro vezes o dano, danos futuros e indiretos, restrição da culpa do advogado ao dolo e risco especial diferenciado dividem especialistas e preocupam a magistratura que aplica essas normas diariamente.",
    link: "../direito-civil/reforma-codigo-civil-responsabilidade-civil-debate-juizes-pl-4-2025-sancao-pedagogica.html",
    category: "direito-civil",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Novo Código Civil Enfrenta Freio no Senado",
    date: "15/03/2026",
    timestamp: "2026-03-15T07:00:00",
    image: "../img/pl-codigo-civil-tramitacao-atraso-senado-calendario-eleitoral-2026.webp",
    excerpt: "O PL 4/2025, que modifica 1.197 artigos do Código Civil e introduz o direito civil digital, enfrenta risco real de atraso no Senado. A complexidade do texto e o calendário eleitoral de 2026 levam senadores a admitir que a votação prevista para junho pode ser empurrada para 2027.",
    link: "../direito-civil/pl-codigo-civil-tramitacao-atraso-senado-calendario-eleitoral-2026.html",
    category: "direito-civil",
    author: "Justiça em Dia",
    authorLink: "#"
},
    {
    title: "Responsabilidade Objetiva e Nexo Causal no STJ",
    date: "05/03/2026",
    timestamp: "2026-03-05T07:00:00",
    image: "../img/responsabilidade-objetiva-stj-precedentes.webp",
    excerpt: "O STJ reforça a centralidade do nexo causal na responsabilidade objetiva, distinguindo risco da atividade e fortuito externo em precedentes recentes.",
    link: "../direito-civil/responsabilidade-objetiva-stj-precedentes.html",
    category: "direito-de-familia",
    author: "Justiça em Dia",
    authorLink: "#"
    },
    {
        title: "Responsabilidade Civil",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/responsabilidade-civil-por-danos-morais.webp",
        excerpt: "A era digital transformou profundamente as relações interpessoais, criando novos espaços de convivência que transcendem as barreiras físicas.",
        link: "../direito-civil/responsabilidade-civil-danos-morais-digitais.html",
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
