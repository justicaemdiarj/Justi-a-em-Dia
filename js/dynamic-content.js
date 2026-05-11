/**
 * Script para carregamento dinâmico de conteúdos:
 * - Top-bar (Ticker)
 * - Viu isso? (Sidebar)
 * - Últimas postagens (Home)
 * - Compartilhamento Social
 * - Banners Intercalados
 */

const tickerConfig = {
    speed: 10 // Velocidade do top-bar (em segundos). Menor é mais rápido.
};

const globalNewsData = [
{
  title: "Reiteração de Decisões e a Ordem Jurídica",
  link: "jurisprudencia/reiteracao-decisoes-seguranca-juridica-brasil.html",
},
{
  title: "Crimes Ambientais e Responsabilização Penal Efetiva",
  link: "legislacao/lei-crimes-ambientais-responsabilidade-penal-brasil.html",
},
{
  title: "Guarda Compartilhada e o Conflito do Novo Domicílio",
  link: "direito-de-familia/guarda-filhos-transferencia-domicilio-conflito-parental.html",
},
{
  title: "Sindicância Castrense e o Devido Processo Legal",
  link: "direito-militar/sindicancia-militar-garantias-defesa-devido-processo.html",
},
{
  title: "Direito ao Esquecimento Frente à Memória Pública",
  link: "direito-civil/direito-ao-esquecimento-limites-liberdade-informacao.html",
},
{
  title: "Audiência de Custódia e a Proteção do Preso",
  link: "direito-penal/audiencia-custodia-garantias-preso-flagrante.html",
},
{
  title: "Crise Institucional e o Equilíbrio Republicano",
  link: "politica/crise-institucional-poderes-equilibrio-republica.html",
},
{
    title: "Controles Internos e a Matriz de Riscos Corporativa",
    link: "compliance/matriz-riscos-controles-internos-governanca-corporativa.html",
},
    {
    title: "Riscos Corporativos e a Urgência do Mapeamento",
    link: "compliance/mapeamento-riscos-corporativos-governanca-empresarial.html",
},
{
    title: "Modulação de Efeitos nas Decisões do Supremo",
    link: "jurisprudencia/modulacao-efeitos-decisoes-stf-constitucionalidade.html",
},
{
    title: "Estatuto do Desarmamento sob Pressão Legislativa",
    link: "legislacao/estatuto-desarmamento-pressao-legislativa-seguranca-publica.html",
},
{
    title: "Dívidas no Casamento e o Direito à Partilha",
    link: "direito-de-familia/partilha-dividas-casamento-regime-bens-divorcio.html",
},
{
    title: "Hierarquia Militar e os Limites da Autoridade",
    link: "direito-militar/hierarquia-militar-limites-poder-autoridade-superior.html",
},
{
    title: "Abandono Digital e a Responsabilização Civil Online",
    link: "direito-civil/responsabilidade-civil-abandono-digital-protecao-dados.html",
},
{
    title: "Reincidência Criminal e o Ciclo da Punição",
    link: "direito-penal/reincidencia-criminal-sistema-punitivo-ressocializacao.html",
},
];

// Array para armazenar todas as notícias coletadas dos arquivos de paginação
let allCategoryNews = [];

/**
 * Função para detectar se estamos em uma página raiz (index.html) ou subcategoria
 */
function isRootIndexPage() {
    const pathname = window.location.pathname;
    // Verifica se é a raiz (/ ou /index.html)
    return pathname === '/' || pathname === '/index.html' || pathname.endsWith('index.html') && pathname.split('/').filter(Boolean).length === 1;
}

/**
 * Função para detectar se estamos em uma subpágina (dentro de uma categoria)
 */
function isSubPage() {
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        const src = scripts[i].getAttribute('src');
        if (src && src.includes('js/dynamic-content.js')) {
            return src.includes('../');
        }
    }
    return false;
}

// Função para buscar autores e postagens nos arquivos de paginação
function syncAuthorsFromPagination() {
    const paginationFiles = [
        'pagination.compliance.js',
        'pagination.direito-civil.js',
        'pagination.direito-de-familia.js',
        'pagination.direito-militar.js',
        'pagination.direito-penal.js',
        'pagination.direito-trabalhista.js',
        'pagination.jurisprudencia.js',
        'pagination.legislacao.js'
    ];

    const isSubPageFlag = isSubPage();
    const basePath = isSubPageFlag ? '../js/' : 'js/';
    
    let loadedFiles = 0;

    paginationFiles.forEach(file => {
        const script = document.createElement('script');
        script.src = basePath + file;
        script.onload = () => {
            if (typeof categoryNewsData !== 'undefined') {
                categoryNewsData.forEach(item => {
                    const newsLink = item.link.replace('../', '');
                    const found = allCategoryNews.find(news => {
                        const itemLink = news.link.replace('../', '');
                        return newsLink === itemLink;
                    });
                    if (!found) {
                        allCategoryNews.push(item);
                    } else {
                        // Sincronizar autores
                        const itemLink = item.link.replace('../', '');
                        const found = allCategoryNews.find(news => {
                            const newsLink = news.link.replace('../', '');
                            return newsLink === itemLink;
                        });
                        if (found) {
                            found.author = item.author;
                        }
                    }
                });
            }
            
            loadedFiles++;
            if (loadedFiles === paginationFiles.length) {
                // Re-renderizar após carregar todos os dados
                renderUltimasPostagens();
            }
        };
        document.head.appendChild(script);
    });
}

function getCorrectPath(path) {
    const isSubPageFlag = isSubPage();
    
    if (isSubPageFlag && path && !path.startsWith('http')) {
        // Se o caminho já começa com ../, não adiciona outro
        if (path.startsWith('../')) return path;
        return '../' + path;
    }
    return path;
}

function renderTopBar() {
    const ticker = document.getElementById('marketTicker');
    if (!ticker) return;

    ticker.innerHTML = '';
    
    // Usar apenas globalNewsData para o top-bar, sem limite
    let allNews = [...globalNewsData];
    
    // Criar o container interno para o scroll
    const tickerTrack = document.createElement('div');
    tickerTrack.className = 'market-ticker-track';
    tickerTrack.style.display = 'flex';
    tickerTrack.style.gap = '30px';
    
    // Função para criar itens
    const createItems = (container) => {
        allNews.forEach(item => {
            const div = document.createElement('div');
            div.className = 'ticker-item';
            div.innerHTML = `<a href="${getCorrectPath(item.link)}">${item.title}</a>`;
            container.appendChild(div);
        });
    };

    // Adicionar os itens originais
    createItems(tickerTrack);
    
    // Clonar para efeito infinito (precisamos de pelo menos 2 conjuntos)
    // Se houver poucas notícias, clonamos mais vezes para preencher a tela
    const cloneCount = allNews.length < 5 ? 4 : 2;
    for(let i = 0; i < cloneCount; i++) {
        const clone = tickerTrack.cloneNode(true);
        tickerTrack.appendChild(...clone.childNodes);
    }

    ticker.appendChild(tickerTrack);

    if (allNews.length > 0) {
        const totalItems = allNews.length;
        const configSpeed = tickerConfig.speed || 15;
        
        // Ajuste de velocidade baseado no número de itens
        const adjustedSpeed = (totalItems / 5) * configSpeed;
        tickerTrack.style.animation = `scroll ${adjustedSpeed}s linear infinite`;
    }
}

function renderViuIsso() {
    const viuIssoList = document.querySelector('.viu-isso-list');
    if (!viuIssoList) return;

    viuIssoList.innerHTML = '';

    // Renderizar notícias da lista globalNewsData (existente)
    globalNewsData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'viu-isso-item';
        div.innerHTML = `
            <a href="${getCorrectPath(item.link)}">
                <h4 class="viu-isso-item-title">${item.title}</h4>
            </a>
        `;
        viuIssoList.appendChild(div);
    });

    // Renderizar banners laterais personalizados (novo)
    if (typeof siteConfig !== 'undefined' && siteConfig.sidebarBanners) {
        const now = new Date();
        siteConfig.sidebarBanners.forEach(banner => {
            // Verifica a data de expiração
            let isActive = true;
            if (banner.endDate) {
                const end = new Date(banner.endDate);
                end.setHours(23, 59, 59, 999);
                if (now > end) isActive = false;
            }

            // Verifica as páginas permitidas
            if (isActive && banner.pages && banner.pages !== "full") {
                const currentPath = window.location.pathname;
                isActive = banner.pages.some(page => {
                    return currentPath.endsWith(page) || currentPath.includes('/' + page);
                });
            }

            if (isActive) {
                const bannerDiv = document.createElement('div');
                bannerDiv.className = 'banner-sidebar-custom'; // Nova classe para estilização
                let imgPath = banner.img;
                const isSubPageFlag = isSubPage();
                if (isSubPageFlag && imgPath.startsWith('img/')) imgPath = '../' + imgPath;

                bannerDiv.innerHTML = `
                    <p class="banner-label" style="display: block !important; text-align: center; font-size: 0.7rem; color: #999; text-transform: uppercase; margin-bottom: 5px;">Publicidade</p>
                    <a href="${banner.link}" target="_blank" rel="noopener noreferrer">
                        <img src="${imgPath}" alt="${banner.name}" style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 15px;">
                    </a>
                `;
                viuIssoList.appendChild(bannerDiv);
            }
        });
    }
}

function getAuthorLink(authorName) {
    if (!authorName) return '#';
    if (typeof siteConfig !== 'undefined' && siteConfig.supporters) {
        // Limpar o nome para busca (remover "Dr. ", "Dra. ", etc se necessário, mas aqui vamos tentar busca direta primeiro)
        const cleanName = authorName.toLowerCase().trim();
        
        const supporter = siteConfig.supporters.find(s => {
            const sName = s.name.toLowerCase();
            return sName.includes(cleanName) || cleanName.includes(sName);
        });
        
        if (supporter) {
            let link = supporter.link;
            // Se o link já tiver query params, adiciona com &, senão com ?
            const separator = link.includes('?') ? '&' : '?';
            return getCorrectPath(link + (link.includes('author=') ? '' : separator + 'author=' + encodeURIComponent(authorName)));
        }
    }
    return '#';
}

function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Link copiado para a área de transferência!');
}

function getShareButtonsHtml(title, link) {
    const absoluteLink = window.location.origin + '/' + link;
    const shareMessage = `Veja mais informações sobre ${title} no link: ${absoluteLink}`;
    const encodedMessage = encodeURIComponent(shareMessage);
    const encodedLink = encodeURIComponent(absoluteLink);
    
    return `
        <div class="share-buttons">
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodedLink}" target="_blank" title="Compartilhar no LinkedIn" class="share-icon ln"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://api.whatsapp.com/send?text=${encodedMessage}" target="_blank" title="Compartilhar no WhatsApp" class="share-icon wa"><i class="fab fa-whatsapp"></i></a>
            <button onclick="copyToClipboard('${absoluteLink}')" title="Copiar Link" class="share-icon link-copy"><i class="fas fa-link"></i></button>
        </div>
    `;
}

function getMiddleBannerHtml() {
    if (typeof siteConfig === 'undefined' || !siteConfig.banners) return '';
    
    let activeDesktopBanners = siteConfig.banners.desktop.filter(banner => {
        if (!banner.endDate) return true;
        const now = new Date();
        const end = new Date(banner.endDate);
        end.setHours(23, 59, 59, 999);
        return now <= end;
    });

    if (activeDesktopBanners.length === 0) return '';

    const path = window.location.pathname;
    const isRootPage = isRootIndexPage();

    let banner;
    if (isRootPage) {
        // Na Home, usa o primeiro banner (ordem fixa)
        banner = activeDesktopBanners[0];
    } else {
        // Em outras páginas, usa um banner aleatório
        banner = activeDesktopBanners[Math.floor(Math.random() * activeDesktopBanners.length)];
    }
    let imgPath = banner.img;
    const isSubPageFlag = isSubPage();
    
    if (isSubPageFlag && imgPath.startsWith('img/')) imgPath = '../' + imgPath;

    return `
        <div class="middle-publication-banner" style="display: block !important; text-align: center; margin: 20px 0;">
            <p class="banner-label" style="display: block !important; font-size: 0.7rem; color: #999; text-transform: uppercase; margin-bottom: 5px;">Publicidade</p>
            <a href="${banner.link}" target="_blank" rel="noopener noreferrer">
                <img src="${imgPath}" alt="${banner.name}" style="max-width: 100%; height: auto; border-radius: 8px;">
            </a>
        </div>
    `;
}

let latestPostsCurrentPage = 1;
const latestPostsPerPage = 6;

function renderUltimasPostagens() {
    const latestGrid = document.getElementById('latestPostsGrid') || document.querySelector('.latest-posts-grid');
    if (!latestGrid) return;

    latestGrid.innerHTML = '';
    
    // Se houver um autor informado na URL (ex: ?author=Dr. Romer Carvalho)
    const urlParams = new URLSearchParams(window.location.search);
    const authorFilter = urlParams.get('author');
    
    // Combinar globalNewsData com allCategoryNews para ter uma base completa
    let combinedNews = [...globalNewsData];
    allCategoryNews.forEach(catNews => {
        // Normalizar links para comparação
        const catLink = catNews.link.replace('../', '');
        if (!combinedNews.find(news => news.link.replace('../', '') === catLink)) {
            combinedNews.push({
                title: catNews.title,
                date: catNews.date,
                category: catNews.category || "Notícias",
                author: catNews.author,
                link: catLink,
                image: catNews.image.replace('../', ''),
                excerpt: catNews.excerpt
            });
        }
    });

    let filteredNews = combinedNews;
    if (authorFilter) {
        filteredNews = combinedNews.filter(item => 
            item.author && (item.author.toLowerCase().includes(authorFilter.toLowerCase()) || 
            authorFilter.toLowerCase().includes(item.author.toLowerCase()))
        );
    }

    // Verificar se está na página raiz (index.html)
    const isRootPage = isRootIndexPage();
    
    let paginatedPosts;
    let totalPages = 0;

    if (isRootPage) {
        // Na index.html raiz, limitar a 6 postagens no total e remover paginação
        paginatedPosts = filteredNews.slice(0, 6);
    } else {
        // Em outras páginas (categorias), usar paginação
        totalPages = Math.ceil(filteredNews.length / latestPostsPerPage);
        const startIndex = (latestPostsCurrentPage - 1) * latestPostsPerPage;
        const endIndex = startIndex + latestPostsPerPage;
        paginatedPosts = filteredNews.slice(startIndex, endIndex);
    }

    const midPoint = Math.ceil(paginatedPosts.length / 2);

    paginatedPosts.forEach((item, index) => {
        // Adicionar banner no meio apenas se não for a index principal
        if (index === midPoint && !isRootPage) {
            const bannerDiv = document.createElement('div');
            bannerDiv.className = 'banner-wrapper-full';
            bannerDiv.innerHTML = getMiddleBannerHtml();
            latestGrid.appendChild(bannerDiv);
        }

        const article = document.createElement('article');
        article.className = 'latest-post-card';
        
        const authorTagHtml = item.author ? `
            <div class="author-tag">
                <a href="${getAuthorLink(item.author)}" class="author-link">
                    <i class="fas fa-user"></i> ${item.author}
                </a>
            </div>
        ` : '';

        const postLink = getCorrectPath(item.link);

        article.innerHTML = `
            <div class="latest-post-content">
                <div class="post-meta-header">
                    <span class="post-category">${item.category}</span>
                    ${authorTagHtml}
                </div>
                <a href="${postLink}" style="text-decoration: none; color: inherit;">
                    <h4>${item.title}</h4>
                </a>
                <a href="${postLink}" style="text-decoration: none; color: inherit;">
                    <p>${item.excerpt}</p>
                </a>
                <div class="post-footer">
                    <a href="${postLink}" class="read-more">Leia mais</a>
                    ${getShareButtonsHtml(item.title, postLink)}
                </div>
            </div>
        `;
        latestGrid.appendChild(article);
    });

    if (!isRootPage) {
        renderLatestPostsPagination(totalPages);
    }
}

function renderLatestPostsPagination(totalPages) {
    const paginationContainer = document.getElementById('latestPostsPagination');
    if (!paginationContainer) return;

    paginationContainer.innerHTML = '';
    
    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.className = `pagination-btn ${i === latestPostsCurrentPage ? 'active' : ''}`;
        btn.onclick = () => {
            latestPostsCurrentPage = i;
            renderUltimasPostagens();
            const section = document.getElementById('latest-news-section');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        };
        paginationContainer.appendChild(btn);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    syncAuthorsFromPagination();
    renderTopBar();
    renderViuIsso();
    renderUltimasPostagens();
});

document.addEventListener("DOMContentLoaded", function () {

    const titulos = document.querySelectorAll('.viu-isso-title');

    titulos.forEach(function(titulo) {
        titulo.textContent = "Veja também"; // 👈 novo nome
    });

});

