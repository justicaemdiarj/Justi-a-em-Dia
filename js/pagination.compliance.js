// Dados de notícias para Compliance
const categoryNewsData = [
    {
        title: "A Revolução Silenciosa do Compliance",
        date: "13/02/2026",
        timestamp: "2026-02-13T15:00:00",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
        caption: "Imagem Ilustrativa",
        excerpt: "O diretor de compliance da multinacional brasileira recebe pela manhã relatório gerado por sistema de inteligência artificial: análise de 2,3 milhões de e-mails corporativos identificou padrão linguístico compatível com possível esquema..",
        link: "../compliance/a-revolucao-silenciosa-do-compliance-quando-prevenir-vale-mais-que-remediar.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Quem Audita os Auditores?",
        date: "12/02/2026",
        timestamp: "2026-02-12T08:00:00",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
        caption: "Imagem Ilustrativa",
        excerpt: "Os recentes escândalos corporativos revelam um padrão preocupante: todas as empresas envolvidas contavam com auditoria independente externa..",
        link: "../compliance/quem-audita-os-auditores.html",
        author: "Romer Carvalho",
        authorLink: "../apoiadores/advogado-romer-carvalho.html"
    }, 
    {
        title: "Programas de Compliance",
        date: "12/02/2026",
        timestamp: "2026-02-12T08:00:00",
        image: "../img/programas-compliance-prevencao-riscos.jpg",
        excerpt: "Os programas de compliance corporativo consolidaram-se como instrumento estratégico essencial para prevenção de riscos jurídicos, reputacionais..",
        link: "../compliance/programas-compliance-prevencao-riscos.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Responsabilidade da Alta Gestão na Implementação do Compliance Efetivo",
        date: "12/02/2026",
        timestamp: "2026-02-12T08:00:00",
        image: "../img/responsabilidade-alta-gestao-compliance.jpeg",
        excerpt: "Estudos demonstram que iniciativas de integridade implementadas apenas para cumprimento formal de requisitos regulatórios, sem o engajamento efetivo dos líderes, tendem ao fracasso ou à mera existência documental..",
        link: "../compliance/responsabilidade-alta-gestao-compliance.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },

    {
        title: "Mediação Estratégica e Compliance",
        date: "12/02/2026",
        timestamp: "2026-02-12T08:00:00",
        image: "../img/mediacao-estrategica-e-compliance.jpg",
        caption: "Mediação Estratégica",
        excerpt: "O cenário corporativo atual exige novas abordagens para a resolução de conflitos. A mediação estratégica surge como uma ferramenta essencial alinhada ao compliance.",
        link: "../compliance/mediacao-estrategica-e-compliance.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "A Nova Era da Governança",
        date: "12/02/2026",
        timestamp: "2026-02-12T08:00:00",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        caption: "Norma ABNT",
        excerpt: "A publicação da nova norma técnica brasileira para sistemas de gestão de compliance tributário marca uma mudança de paradigma na governança corporativa.",
        link: "../compliance/nova-norma-abnt-compliance-tributario.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Fiscalização e Compliance",
        date: "12/02/2026",
        timestamp: "2026-02-12T08:00:00",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
        caption: "Fiscalização",
        excerpt: "Uma recente operação de fiscalização revelou desafios persistentes no cumprimento das normas de defesa do consumidor pelo setor varejista.",
        link: "../compliance/fiscalizacao-compliance-papelarias.html",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Fortalecimento do Programa Confia",
        date: "12/02/2026",
        timestamp: "2026-02-12T08:00:00",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
        caption: "Programa Confia",
        excerpt: "O ambiente tributário brasileiro vive um momento de transformação com o fortalecimento do Programa Confia e novas diretrizes de compliance.",
        link: "../compliance/fortalecimento-programa-confia.html",
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
