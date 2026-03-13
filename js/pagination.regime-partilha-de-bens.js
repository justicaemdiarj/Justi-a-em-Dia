// Dados de notícias para Direito de Família
const categoryNewsData = [
{
        title: "STJ Garante Dividendos ao Ex-Cônjuge Até Partilha Final",
        date: "13/03/2026",
        timestamp: "2026-03-13T07:00:00",
        image: "../img/stj-dividendos-ex-conjuge-cotista-anomalo-apuracao-haveres.webp",
        excerpt: "STJ decide que ex-cônjuge com direito à meação de cotas societárias também recebe proporcionalmente os lucros e dividendos distribuídos pela empresa até a efetiva quitação dos haveres, vedando enriquecimento sem causa do sócio remanescente.",
        link: "../direito-de-familia/stj-dividendos-ex-conjuge-cotista-anomalo-apuracao-haveres.html",
        author: "Justiça em Dia",
        authorLink: "#"
    }, 
{
    title: "Cartórios na Linha de Frente Contra Violência Patrimonial Feminina",
    date: "08/03/2026",
    timestamp: "2026-03-08T07:00:00",
    image: "../img/cartorios-protecao-patrimonial-mulheres-violencia-silenciosa.webp",
    excerpt: "O Registro de Imóveis do Brasil oferece orientação jurídica gratuita a mulheres sobre direitos patrimoniais em 11 estados, expondo o vazio do Estado na proteção financeira feminina.",
    link: "../direito-de-familia/cartorios-protecao-patrimonial-mulheres-violencia-silenciosa.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Instagram Pode Entrar na Partilha de Bens?",
    date: "05/03/2026",
    timestamp: "2026-03-05T07:00:00",
    image: "../img/instagram-perfil-partilha-bens-divorcio.webp",
    excerpt: "Perfil no Instagram pode ser partilhado no divórcio quando configurado como ativo intangível com valor econômico constituído durante a relação conjugal.",
    link: "../direito-de-familia/instagram-perfil-partilha-bens-divorcio.html",
    category: "direito-de-familia",
    author: "Justiça em Dia",
    authorLink: "#"
    }, 
    {
        title: "Senado Convoca os Grandes Nomes do Direito Privado",
        date: "03/03/2026",
        timestamp: "2026-03-03T07:00:00",
        image: "../img/senado-convoca-grandes-nomes-do-direito-para-redesenhar.webp",
        excerpt: "Mais de duas décadas depois de sua entrada em vigor, o Código Civil brasileiro está prestes a ganhar novo rosto..",
        link: "../direito-de-familia/enado-convoca-grandes-nomes-do-direito-para-redesenhar-regras.html",
        category: "Direito de Família",
        author: "Por Justiça em Dia",
        authorLink: "#"
    },
     {
        title: "Como Comprovar que Existe União Estável",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/comprovar-existencia-de-uniao-estavel.webp",
        caption: "Romer Carvalho",
        excerpt: "Muitas pessoas vivem em união estável sem sequer saber que essa relação possui proteção jurídica semelhante ao casamento.",
        link: "../direito-de-familia/como-comprovar-uniao-estavel.html",
        category: "Direito de Família",
        author: "Romer Carvalho",
        authorLink: "../apoiadores/advogado-romer-carvalho.html"
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
