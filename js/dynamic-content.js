/**
 * Script para carregamento dinâmico de conteúdos:
 * - Top-bar (Ticker)
 * - Viu isso? (Sidebar)
 * - Últimas postagens (Home)
 * - Compartilhamento Social
 * - Banners Intercalados
 */

const tickerConfig = {
    speed: 15 // Velocidade do top-bar (em segundos). Menor é mais rápido.
};

const globalNewsData = [
    {
        title: "Quando a Liberdade de Expressão Vira Linchamento Digital",
        category: "Direito Civil",
        author: "",
        link: "direito-civil/o-tribunal-das-redes-quando-a-liberdade-de-expressao-vira-linchamento-digital.html",
        excerpt: "O Tribunal das RedesA migração do debate público para as plataformas digitais converteu cada usuário em potencial formador de opinião — e em potencial réu de ação indenizatória.."
    },
    {
        title: "Como o Superendividamento Captura os Mais Vulneráveis",
        category: "Direito Civil",
        author: "",
        link: "direito-civil/a-armadilha-do-credito-facil-como-o-superendividamento-captura-os-mais-vulneraveis.html",
        excerpt: "O Brasil registra atualmente mais de 72 milhões de pessoas negativadas, segundo dados da Confederação Nacional de Dirigentes Lojistas. Desse contingente alarmante, parcela expressiva.."
    },
    {
        title: "Quem Paga a Conta Quando a Máquina Erra?",
        category: "Direito Civil",
        author: "",
        link: "direito-civil/a-encruzilhada-da-responsabilidade-quem-paga-a-conta-quando-a-maquina-erra.html",
        excerpt: "A proliferação acelerada de sistemas de inteligência artificial no cotidiano brasileiro — de algoritmos que concedem crédito a carros autônomos que circulam em fase experimental.."
    },
    {
        title: "Contratos Eletrônicos e a Revolução Silenciosa do Direito Negocial",
        category: "Direito Civil",
        author: "",
        link: "direito-civil/responsabilidade-civil-danos-morais-digitais.html",
        excerpt: "Bilhões de contratos são firmados diariamente sem que uma única folha de papel seja impressa. A compra de passagens aéreas, a contratação de serviços.."
    },
    {
        title: "Os Limites da Responsabilidade Civil na Medicina e Estética",
        category: "Direito Civil",
        author: "",
        link: "direito-civil/bisturi-e-balanca-da-justica-os-limites-da-responsabilidade-civil-na-medicina-e-estetica.html",
        excerpt: "A relação médico-paciente encerra peculiaridade que a distingue de quase todas as demais relações profissionais: não há garantia de resultado. O médico, por mais competente que seja, lida com organismo humano cujas respostas são imprevisíveis, com patologias que não respondem.."
    },
    {
        title: "Os Contornos Jurídicos da Memória na Era Digital",
        category: "Direito Civil",
        author: "",
        link: "direito-civil/o-direito-de-nao-ser-lembrado-os-contornos-juridicos-da-memoria-na-era-digital.html",
        excerpt: "Quando o Supremo Tribunal Federal, em fevereiro de 2021, julgou improcedente o Recurso Extraordinário 1.010.606 (Tema 786 da repercussão geral), decretando a incompatibilidade do direito ao esquecimento com a Constituição Federal.."
    },
    {
        title: "O Testamento Digital Quando o Amor Precisa Contemplar Bitcoins e Senhas",
        category: "Direito de Família",
        author: "",
        link: "direito-de-familia/o-testamento-digital-quando-o-amor-precisa-contemplar-bitcoins-e-senhas.html",
        excerpt: "O tabelionato de notas em São Paulo recebe o casal de noivos com documentação completa para lavrar Pacto Antenupcial. Além das cláusulas tradicionais sobre imóveis, veículos e participação societária, o instrumento traz disposições inéditas.."
    },
    {
        title: "O Amor Que Se Cobra na Justiça Quando a Ausência dos Avós Gera Indenização",
        category: "Direito de Família",
        author: "",
        link: "direito-de-familia/o-amor-que-se-cobra-na-justica-quando-a-ausencia-dos-avos-gera-indenizacao.html",
        excerpt: "Um escritório de advocacia em Brasília recebe, com frequência crescente, consultas inusitadas: adultos que desejam processar avós por abandono afetivo durante a infância. Não se trata de abandono material — as pensões alimentícias foram pagas.."
    },
    {
        title: "Crimes Ambientais Transnacionais: A Amazônia no Epicentro de um Conflito de Jurisdições",
        category: "Direito Penal",
        author: "",
        link: "direito-penal/crimes-ambientais-transnacionais-a-amazonia-no-epicentro-de-um-conflito-de-jurisdicoes.html",
        excerpt: "A devastação da floresta amazônica transcendeu há muito as fronteiras nacionais, convertendo-se em um fenômeno que desafia os paradigmas tradicionais do direito penal e ambiental.."
    },
    {
        title: "Quando o Silêncio Se Torna Arma no Ambiente Corporativo",
        category: "Direito Trabalhista",
        author: "",
        link: "direito-trabalhista/a-violencia-invisivel-quando-o-silencio-se-torna-arma-no-ambiente-corporativo.html",
        excerpt: "Não há gritos, não há insultos diretos, não há confronto aberto. A vítima chega ao escritório é recebida por olhares que desviam, cumprimentos que não vêm, conversas que cessam abruptamente.."
    },
    {
        title: "Quando a Crítica Vira Arma de Aniquilação Profissional",
        category: "Direito Trabalhista",
        author: "",
        link: "direito-trabalhista/a-destruicao-metodica-da-competencia-quando-a-critica-vira-arma-de-aniquilacao-profissional.html",
        excerpt: "O relatório foi revisado três vezes, cada vírgula analisada, cada dado conferido. Mesmo assim, quando apresentado na reunião, o gerente o desqualifica publicamente.."
    },
    {
        title: "A Farda e a Constituição",
        category: "Direito Militar",
        author: "",
        link: "direito-militar/a-farda-e-a-constituicao-o-direito-militar-entre-a-tradicao-e-os-direitos-fundamentais.html",
        excerpt: "O soldado do Exército recorre ao Supremo Tribunal Federal questionando punição disciplinar que lhe custou quinze dias de prisão por.."
    },
    {
        title: "Quando Prevenir Vale Mais Que Remediar",
        category: "Compliance",
        author: "",
        link: "compliance/a-revolucao-silenciosa-do-compliance-quando-prevenir-vale-mais-que-remediar.html",
        excerpt: "O diretor de compliance da multinacional brasileira recebe pela manhã relatório gerado por sistema de inteligência artificial: análise de 2,3 milhões de e-mails corporativos.."
    },
    {
        title: "Quando Algoritmos Preveem Decisões Judiciais",
        category: "Jurisprudência",
        author: "",
        link: "jurisprudencia/o-oraculo-digital-da-justica-quando-algoritmos-preveem-decisoes-judiciais.html",
        excerpt: "O advogado prepara recurso contra sentença desfavorável em ação trabalhista. Antes de redigir uma linha, acessa plataforma de jurisprudência preditiva que, mediante inteligência artificial.."
    },
    {
        title: "Como a Regulação Preditiva Antecipa Riscos Tecnológicos",
        category: "Legislação",
        author: "",
        link: "legislacao/a-lei-antes-do-fato-como-a-regulacao-preditiva-antecipa-riscos-tecnologicos.html",
        excerpt: "O Congresso Nacional vota em 2026 projeto de lei inédito na história legislativa brasileira: regulação preventiva de tecnologias de edição genética germinal (CRISPR aplicado a embriões humanos) que.."
    },
    {
        title: "Responsabilidade civil por danos morais nas relações digitais",
        category: "Direito Civil",
        author: "",
        link: "direito-civil/responsabilidade-civil-danos-morais-digitais.html",
        excerpt: "Análise detalhada sobre responsabilidade civil por danos morais nas relações digitais e seus impactos no ordenamento jurídico brasileiro."
    },
    {
        title: "Validade jurídica dos contratos firmados por meios eletrônicos",
        category: "Direito Civil",
        author: "",
        link: "direito-civil/validade-juridica-contratos-eletronicos.html",
        excerpt: "Análise detalhada sobre validade jurídica dos contratos firmados por meios eletrônicos e seus impactos no ordenamento jurídico brasileiro."
    },
    {
        title: "Guarda compartilhada e o melhor interesse da criança na prática forense",
        category: "Direito de Família",
        author: "",
        link: "direito-de-familia/guarda-compartilhada-melhor-interesse-crianca.html",
        excerpt: "Análise detalhada sobre guarda compartilhada e o melhor interesse da criança na prática forense e seus impactos no ordenamento jurídico brasileiro."
    },
    {
        title: "Pensão alimentícia: revisão, exoneração e os limites do dever de sustento",
        category: "Direito de Família",
        author: "",
        link: "direito-de-familia/pensao-alimenticia-revisao-exoneracao-limites.html",
        excerpt: "Análise detalhada sobre pensão alimentícia: revisão, exoneração e os limites do dever de sustento e seus impactos no ordenamento jurídico brasileiro."
    },
    {
        title: "Princípio da insignificância e sua aplicação nos crimes patrimoniais",
        category: "Direito Penal",
        author: "",
        link: "direito-penal/principio-insignificancia-crimes-patrimoniais.html",
        excerpt: "Análise detalhada sobre princípio da insignificância e sua aplicação nos crimes patrimoniais e seus impactos no ordenamento jurídico brasileiro."
    },
    {
        title: "Prisão preventiva: requisitos legais e abusos recorrentes",
        category: "Direito Penal",
        author: "",
        link: "direito-penal/prisao-preventiva-requisitos-abusos.html",
        excerpt: "Análise detalhada sobre prisão preventiva: requisitos legais e abusos recorrentes e seus impactos no ordenamento jurídico brasileiro."
    }
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
    // Usar globalNewsData sem limite
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
