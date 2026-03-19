// Dados de notícias para Direito Penal
const categoryNewsData = [
     {
    title: "Contraditório nas Cautelares Penais em Debate",
    date: "18/03/2026",
    timestamp: "2026-03-18T07:00:00",
    image: "../img/medidas-cautelares-direito-contraditorio-processo-penal-garantias.webp",
    excerpt: "Garantia constitucional colide com urgência das restrições penais.",
    link: "../direito-penal/medidas-cautelares-direito-contraditorio-processo-penal-garantias.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
 {
    title: "HC e Prisão Cautelar Sob Tensão Constitucional",
    date: "17/03/2026",
    timestamp: "2026-03-17T07:00:00",
    image: "../img/habeas-corpus-prisao-cautelar-vedacao-debate-fatico-assimetria-inconstitucional.webp",
    excerpt: "Vedação fática no HC compromete garantias processuais fundamentais.",
    link: "../direito-penal/habeas-corpus-prisao-cautelar-vedacao-debate-fatico-assimetria-inconstitucional.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
 {
    title: "Habeas Corpus Amordaçado pela Jurisprudência",
    date: "14/03/2026",
    timestamp: "2026-03-14T07:00:00",
    image: "../img/habeas-corpus-vedacao-debate-fatico-prisao-preventiva-inconstitucional.webp",
    excerpt: "Advogados criminalistas denunciam a construção jurisprudencial que veda à defesa o debate fático no habeas corpus em matéria de prisão preventiva, sustentando que a restrição viola a presunção de inocência e a paridade de armas.",
    link: "../direito-penal/habeas-corpus-vedacao-debate-fatico-prisao-preventiva-inconstitucional.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Suspeita de Homicídio Deixa Prisão Preventiva",
    date: "11/03/2026",
    timestamp: "2026-03-11T07:00:00",
    image: "../img/suspeita-homicidio-liberdade-prisao-preventiva-bento-goncalves.webp",
    excerpt: "Magistrada de Bento Gonçalves substitui prisão preventiva de acusada de encomender assassinato do companheiro por medidas cautelares. Ministério Público recorreu ao TJRS para reverter o despacho.",
    link: "../direito-penal/suspeita-homicidio-liberdade-prisao-preventiva-bento-goncalves.html",
    category: "direito-penal",
    author: "Justiça em Dia",
    authorLink: "#"
},
     {
        title: "O Habeas Corpus e a Garantia que Ninguém Pode Confiscar",
      	date: "03/03/2026",
        timestamp: "2026-03-03T07:00:00",
        image: "../img/habeas-corpus-garantia-que-ninguem-pode.webp",
        excerpt: "O Superior Tribunal de Justiça enviou recado inequívoco aos tribunais estaduais: o habeas corpus é garantia constitucional...",
        link: "../direito-penal/habeas-corpus-garantia-que-ninguem-pode-confiscar.html",
        category: "Direito Penal",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Segunda Turma do STF decide que exibição de vídeo pelo Ministério Público na presença de jurados não invalida julgamento",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://media.gazetadopovo.com.br/2025/10/15221712/stf-ensino-genero-660x372.jpg.webp",
        excerpt: "Ministros aplicam princípio de que não há nulidade sem prejuízo demonstrado, mas penalistas alertam para riscos à imparcialidade do conselho de sentença",
        link: "../direito-penal/stf-segunda-turma-decide-que-exibicao-de-video.html",
        category: "Direito Penal",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "TJ/DF libera casal preso e reconhece domínio técnico na produção doméstica de cannabis para fins terapêuticos",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
        excerpt: "Tribunal do Distrito Federal reconhece produção para uso terapêutico próprio e derruba prisão preventiva em decisão que reflete avanço do debate sobre a maconha medicinal no país",
        link: "../direito-penal/tj-df-libera-casal-preso-e-reconhece-dominio-tecnico-na-producao-domestica-de-cannabis-para-fins-terapeuticos.html",
        category: "Direito Penal",
        author: "Justiça em Dia",
        authorLink: "#"
    },
    {
        title: "Prisão Preventiva",
        date: "01/03/2026",
        timestamp: "2026-03-01T12:00:00",
        image: "../img/Prisao-preventiva.webp",
        excerpt: "A prisão preventiva, modalidade de prisão cautelar regulamentada pelos artigos 311 a 316 do Código de Processo Penal, constitui medida excepcional que restringe a liberdade do acusado antes do trânsito em julgado da sentença condenatória.",
        link: "../direito-penal/prisao-preventiva-requisitos-abusos.html",
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
