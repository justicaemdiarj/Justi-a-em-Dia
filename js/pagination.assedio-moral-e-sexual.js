// Dados de notícias para Direito Trabalhista
const categoryNewsData = [
{
    title: "Assédio Moral Explode nas Varas Trabalhistas",
    date: "10/03/2026",
    timestamp: "2026-03-10T07:00:00",
    image: "../img/assedio-moral-dano-moral-acoes-trabalhistas-burnout-crescimento.webp",
    excerpt: "Pedidos de indenização por dano moral em ações trabalhistas crescem desde 2020. Em 2025, processos por assédio moral registraram alta de mais de 22%, com destaque para burnout e transtornos psiquiátricos.",
    link: "../direito-trabalhista/assedio-moral-dano-moral-acoes-trabalhistas-burnout-crescimento.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Processos Explodem na Justiça Laboral",
    date: "08/03/2026",
    timestamp: "2026-03-08T07:00:00",
    image: "../img/assedio-moral-sexual-processos-trabalhistas-aumento-2025.webp",
    excerpt: "Em 2025, a Justiça do Trabalho registrou alta de 22% nos processos de assédio moral e 40% nos de assédio sexual. Os números revelam tanto o avanço da conscientização quanto a persistência das condutas abusivas nas relações laborais.",
    link: "../direito-trabalhista/assedio-moral-sexual-processos-trabalhistas-aumento-2025.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Rio Protege Servidores do Assédio Funcional",
    date: "07/03/2026",
    timestamp: "2026-03-07T07:00:00",
    image: "../img/rio-protege-servidores-assedio-funcional-guia-smit.webp",
    excerpt: "Resolução SMIT nº 23 torna obrigatório o acolhimento humanizado e sigiloso às vítimas de assédio moral e sexual na Prefeitura do Rio.",
    link: "../direito-trabalhista/rio-protege-servidores-assedio-funcional-guia-smit.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
 {
    title: "O MPSE Coloca o Assédio na Pauta Institucional e Lidera Debate",
    date: "05/03/2026",
    timestamp: "2026-03-05T07:00:00",
    image: "../img/assedio-servico-publico-mpse-palestra-prevencao.webp",
    excerpt: "O Ministério Público de Sergipe promoveu palestra sobre prevenção do assédio moral e sexual no setor público, reforçando a cultura do respeito nas relações de trabalho.",
    link: "../direito-trabalhista/assedio-servico-publico-mpse-palestra-prevencao.html",
    category: "direito-trabalhista",
    author: "Justiça em Dia",
    authorLink: "#"
    },
    {
    title: "Quando o Silêncio Se Torna Arma no Ambiente Corporativo", 
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop", 
    excerpt: "Não há gritos, não há insultos diretos, não há confronto aberto. A vítima chega ao escritório e é recebida por olhares que desviam, cumprimentos que n...", 
    link: "../direito-trabalhista/a-violencia-invisivel-quando-o-silencio-se-torna-arma-no-ambiente-corporativo.html", 
    author: "Por Justiça em Dia", 
    authorLink: "#"
    },
    {
    title: "Quando a Crítica Vira Arma de Aniquilação Profissional", 
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop", 
    excerpt: "O relatório foi revisado três vezes, cada vírgula analisada, cada dado conferido. Mesmo assim, quando apresentado na reunião, o gerente o desqualifica...", 
    link: "../direito-trabalhista/a-destruicao-metodica-da-competencia-quando-a-critica-vira-arma-de-aniquilacao-profissional.html", 
    author: "Por Justiça em Dia", 
    authorLink: "#"
    },
    {
    title: "A Queda do Intocável", 
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop", 
    excerpt: "Na tarde de 12 de dezembro de 2024, o plenário do Superior Tribunal de Justiça reuniu-se em sessão extraordinária que entraria para a história institu...", 
    link: "../direito-trabalhista/a-queda-do-intocavel-quando-o-judiciario-julga-a-si-mesmo.html", 
    author: "Por Justiça em Dia", 
    authorLink: "#"
    },
    {
        title: "Assédio Moral no Ambiente de Trabalho e a Responsabilidade do Empregador",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/assedio-moral-trabalho-responsabilidade-empregador.webp",
        excerpt: "O assédio moral no ambiente laboral constitui uma das mais graves patologias organizacionais contemporâneas, caracterizando-se pela exposição sistemática e prolongada do trabalhador a situações humilhantes",
        link: "../direito-trabalhista/assedio-moral-trabalho-responsabilidade-empregador.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
];

const ITEMS_PER_PAGE = 10
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
