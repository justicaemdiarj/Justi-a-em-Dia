// Dados de apoiadores sincronizados com siteConfig
function getSupportersData() {
    if (typeof siteConfig !== 'undefined' && siteConfig.supporters) {
        return siteConfig.supporters.map(s => ({
            name: s.name,
            logo: s.logo,
            link: s.link,
            description: s.description || "Comprometido com a excelência jurídica e o apoio ao portal Justiça em Dia."
        }));
    }
    // Fallback caso siteConfig não esteja disponível
    return [
        {
            name: "Dr. Romer Carvalho",
            logo: "img/dr_romer_carvalho.png",
            link: "apoiadores/advogado-romer-carvalho.html",
            description: "Especialista em Direito Civil e Processual Civil, com vasta experiência em consultoria e contencioso estratégico."
        },
                {
            name: "Dr. Romer Carvalho",
            logo: "img/dr_romer_carvalho.png",
            link: "apoiadores/advogado-romer-carvalho.html",
            description: "Especialista em Direito Civil e Processual Civil, com vasta experiência em consultoria e contencioso estratégico."
        }
    ];
}

const ITEMS_PER_PAGE = 7;
let currentPage = 1;

function getCorrectPathSupporter(path) {
    const isSubPage = window.location.pathname.includes('/direito-') || 
                     window.location.pathname.includes('/compliance/') || 
                     window.location.pathname.includes('/jurisprudencia/') || 
                     window.location.pathname.includes('/legislacao/') ||
                     window.location.pathname.includes('/apoiadores/');
    
    if (isSubPage) {
        if (!path.startsWith('../') && !path.startsWith('http')) {
            return '../' + path;
        }
    }
    return path;
}

function renderSupporters(page) {
    const container = document.getElementById('news-container');
    if (!container) return;
    container.innerHTML = '';

    const supportersData = getSupportersData();
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const paginatedItems = supportersData.slice(start, end);

    if (paginatedItems.length === 0) {
        container.innerHTML = '<p class="no-news">Nenhum apoiador encontrado.</p>';
        return;
    }

    paginatedItems.forEach(item => {
        const itemLink = getCorrectPathSupporter(item.link);
        const itemLogo = getCorrectPathSupporter(item.logo);
        
        const itemHtml = `
            <article class="category-post supporter-g1-style">
                <div class="category-post-body" style="display: contents;">
                    <div class="category-post-image-container">
                        <a href="${itemLink}" class="category-post-link-wrapper">
                            <img src="${itemLogo}" alt="${item.name}" loading="lazy" style="object-fit: contain; background: #fff; padding: 10px;">
                        </a>
                    </div>
                    <div class="category-post-content">
                        <a href="${itemLink}" class="category-post-link-wrapper">
                            <h3 class="category-post-title">${item.name}</h3>
                        </a>
                        <p class="category-post-excerpt">${item.description}</p>
                        <a href="${itemLink}" class="read-more-link">Ver perfil completo</a>
                    </div>
                </div>
            </article>
        `;
        container.innerHTML += itemHtml;
    });

    renderPagination(supportersData.length);
    
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
            renderSupporters(currentPage);
        };
        paginationContainer.appendChild(prevBtn);
    }

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        btn.onclick = () => {
            currentPage = i;
            renderSupporters(currentPage);
        };
        paginationContainer.appendChild(btn);
    }

    if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '&raquo;';
        nextBtn.className = 'pagination-btn';
        nextBtn.onclick = () => {
            currentPage++;
            renderSupporters(currentPage);
        };
        paginationContainer.appendChild(nextBtn);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    sessionStorage.removeItem('paged');
    renderSupporters(currentPage);
});
