// Dados de notícias para Direito de Família
const categoryNewsData = [
    {
    title: "Instagram Pode Entrar na Partilha de Bens?",
    date: "05/03/2026",
    timestamp: "2026-03-05T07:00:00",
    image: "../img/instagram-perfil-partilha-bens-divorcio.jpg",
    excerpt: "Perfil no Instagram pode ser partilhado no divórcio quando configurado como ativo intangível com valor econômico constituído durante a relação conjugal.",
    link: "../direito-de-familia/instagram-perfil-partilha-bens-divorcio.html",
    category: "direito-de-familia",
    author: "Justiça em Dia",
    authorLink: "#"
   },
   {
        title: "Protegidas no Papel, Vulneráveis na Vida Real",
        date: "04/03/2026",
        timestamp: "2026-03-04T07:00:00",
        image: "../img/protegidas-no-papel-vulneraveis-na-vida-real-colapso-medidas-protetivas.jpg",
        excerpt: "A cada novo caso de feminicídio noticiado no país, um detalhe se repete com perturbadora regularidade..",
        link: "../direito-de-familia/protegidas-no-papel-vulneraveis-na-vida-real-colapso-medidas-protetivas.html",
        category: "Direito de Família",
        author: "Por Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Senado Convoca os Grandes Nomes do Direito Privado",
        date: "03/03/2026",
        timestamp: "2026-03-03T07:00:00",
        image: "../img/senado-convoca-grandes-nomes-do-direito-para-redesenhar.jpg",
        excerpt: "Mais de duas décadas depois de sua entrada em vigor, o Código Civil brasileiro está prestes a ganhar novo rosto..",
        link: "../direito-de-familia/senado-convoca-grandes-nomes-do-direito-para-redesenhar-regras.html",
        category: "Direito de Família",
        author: "Por Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "O Testamento Digital",
        date: "02/03/2026",
        timestamp: "2026-03-02T12:00:00",
        image: "https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?w=1200&q=80",
        excerpt: "O tabelionato de notas em São Paulo recebe o casal de noivos com documentação completa para lavrar pacto antenupcial. Além das cláusulas tradicionais..",
        link: "../direito-de-familia/o-testamento-digital-quando-o-amor-precisa-contemplar-bitcoins-e-senhas.html",
        category: "Direito de Família",
        author: "Por Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "O Amor Que Se Cobra na Justiça",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=1200&q=80",
        excerpt: "O escritório de advocacia em Brasília recebe, com frequência crescente, consultas inusitadas: adultos que desejam processar avós por abandono afetivo..",
        link: "../direito-de-familia/o-amor-que-se-cobra-na-justica-quando-a-ausencia-dos-avos-gera-indenizacao.html",
        category: "Direito de Família",
        author: "Por Justiça em Dia",
        authorLink: "#"
    },
       {
        title: "Como Comprovar que Existe União Estável",
         date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/comprovar-existencia-de-uniao-estavel.jpg",
        caption: "Romer Carvalho",
        excerpt: "Muitas pessoas vivem em união estável sem sequer saber que essa relação possui proteção jurídica semelhante ao casamento..",
        link: "../direito-de-familia/como-comprovar-uniao-estavel.html",
        category: "Direito de Família",
        author: "Romer Carvalho",
        authorLink: "../apoiadores/advogado-romer-carvalho.html"
    },
    {
        title: "Guarda Compartilhada e o Melhor Interesse da Criança na Prática Forense",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
        excerpt: "A guarda compartilhada, consagrada como regra pelo ordenamento jurídico brasileiro através da Lei 13.058/2014, representa...",
        link: "../direito-de-familia/guarda-compartilhada-melhor-interesse-crianca.html",
        category: "Direito de Família",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Pensão Alimentícia",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/pensao-alimenticia.png",
        excerpt: "A pensão alimentícia constitui obrigação jurídica fundada no princípio da solidariedade familiar, destinando-se a garantir.. ",
        link: "../direito-de-familia/pensao-alimenticia-revisao-exoneracao-limites.html",
        category: "Direito de Família",
        author: "Justiça em Dia",
        authorLink: "#"
    },
];

const ITEMS_PER_PAGE = 7;
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
