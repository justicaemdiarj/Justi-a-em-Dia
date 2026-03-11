// Dados de notícias para Direito Militar
const categoryNewsData = [
     {
    title: "SentinELAS Chega Para Proteger Recrutas Femininas",
    date: "09/03/2026",
    timestamp: "2026-03-09T07:00:00",
    image: "../img/sentinelas-mpm-protecao-mulheres-forcas-armadas.webp",
    excerpt: "O MPM lançou o aplicativo SentinELAS, ferramenta digital de proteção jurídica e acolhimento voltada às mulheres que ingressaram no Serviço Militar Inicial Feminino.",
    link: "../direito-militar/sentinelas-mpm-protecao-mulheres-forcas-armadas.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
        title: "STM Concede Pela Primeira Vez Medidas Protetivas a Militar Trans Vítima de Assédio Sexual",
        date: "04/03/2026",
        timestamp: "2026-03-04T07:00:00",
        image: "../img/stm-medidas-protetivas-militar-trans-assedio-sexual.webp",
        excerpt: "O Superior Tribunal Militar proferiu, no dia 20 de fevereiro de 2026, uma decisão sem precedentes..",
        link: "../direito-militar/stm-medidas-protetivas-militar-trans-assedio-sexual.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Vinte Anos de Espera",
        date: "03/03/2026",
        timestamp: "2026-03-03T07:00:00",
        image: "../img/vinte-anos-de-espera-de-pm-goiais.webp",
        excerpt: "Um policial militar de Goiás que ingressou na corporação em 1996 e esperou até 2021 para ser promovido de Soldado a Cabo..",
        link: "../direito-militar/vinte-anos-de-espera-de-pm-goiais.html",
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
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Processo Administrativo Disciplinar Militar e Garantias Constitucionais",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/processo-administrativo-disciplinar-militar.webp",
        excerpt: "O processo administrativo disciplinar militar constitui instrumento jurídico específico destinado à apuração de transgressões disciplinares praticadas por integrantes das Forças Armadas e Forças Auxiliares.",
        link: "../direito-militar/processo-administrativo-disciplinar-militar.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
];

const ITEMS_PER_PAGE = 10;
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
