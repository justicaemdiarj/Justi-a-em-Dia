// Dados de notícias para Política
const categoryNewsData = [
  
{
    title: "Paes Joga Xadrez Enquanto Rio Elege Governador na Surdina",
    date: "08/03/2026",
    timestamp: "2026-03-08T07:00:00",
    image: "../img/paes-eleicao-indireta-rio-governador-tampao-alerj-2026.jpg",
    excerpt: "Com a dupla vacância no Executivo fluminense, o Rio de Janeiro caminha para uma eleição indireta na Alerj. Paes articula alianças para outubro enquanto a direita disputa quem ocupará o Palácio Guanabara antes do pleito.",
    link: "../politica/paes-eleicao-indireta-rio-governador-tampao-alerj-2026.html",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Lula Apoia Paes no RJ, Mas Exige Chapa Competitiva",
    date: "08/03/2026",
    timestamp: "2026-03-08T07:00:00",
    image: "../img/lula-apoio-paes-rj-chapa-competitiva-eleicoes-2026.jpg",
    excerpt: "Lula confirma apoio a Eduardo Paes para o governo do Rio em 2026, mas exige aliança eleitoral ampla. PT reivindica vaga no Senado para Benedita da Silva em meio às tensões da composição da chapa fluminense.",
    link: "../politica/lula-apoio-paes-rj-chapa-competitiva-eleicoes-2026.html",
    author: "Justiça em Dia",
    authorLink: "#"
}, 
{
    title: "Migração Partidária Reforça Centro-Direita na Câmara",
    date: "08/03/2026",
    timestamp: "2026-03-08T07:00:00",
    image: "../img/migracao-partidaria-reforco-centro-direita-camara-janela-2026.jpg",
    excerpt: "Cerca de 10% dos deputados federais já migrou de partido antes da janela partidária de abril, fortalecendo o centro-direita na Câmara.",
    link: "../politica/migracao-partidaria-reforco-centro-direita-camara-janela-2026.html",
    category: "Política",
    author: "Justiça em Dia",
    authorLink: "#"
},
  {
    title: "MDB se divide e rejeita vice na chapa de Lula",
    date: "07/03/2026",
    timestamp: "2026-03-07T07:00:00",
    image: "../img/mdb-divide-rejeita-vice-chapa-lula-eleicoes-2026.jpg",
    excerpt: "A maioria dos diretórios estaduais do MDB formalizou manifesto rejeitando aliança nacional com o PT e pedindo neutralidade nas eleições presidenciais de 2026, em reação à ofensiva do Planalto para colocar um nome da sigla como vice de Lula.",
    link: "../politica/mdb-divide-rejeita-vice-chapa-lula-eleicoes-2026.html",
    category: "Politica",
    author: "Justiça em Dia",
    authorLink: "#"
},
 {
    title: "Trump Admite Vácuo de Poder no Irã",
    date: "06/03/2026",
    timestamp: "2026-03-06T07:00:00",
    image: "../img/trump-vacuo-poder-ira-sucessores-khamenei-mortos.jpg",
    excerpt: "Trump admitiu que ataques de EUA e Israel eliminaram os possíveis sucessores de Khamenei e anunciou nova onda de bombardeios.",
    link: "../politica/trump-vacuo-poder-ira-sucessores-khamenei-mortos.html",
    category: "Política",
    author: "Justiça em Dia",
    authorLink: "#"
},
 {
    title: "Lula Pede Voto com Ironia Eleitoral",
    date: "06/03/2026",
    timestamp: "2026-03-06T07:00:00",
    image: "../img/lula-pede-voto-ironia-eleitoral-conferencia-trabalho-sp.jpg",
    excerpt: "Presidente ironiza 'sorte' pelos indicadores econômicos e convoca eleitores nas eleições de 2026.",
    link: "../politica/lula-pede-voto-ironia-eleitoral-conferencia-trabalho-sp.html",
    category: "Política",
    author: "Justiça em Dia",
    authorLink: "#"
 },
 {
    title: "Alcolumbre Bloqueia Indicação de Messias ao STF",
    date: "05/03/2026",
    timestamp: "2026-03-05T07:00:00",
    image: "../img/alcolumbre-bloqueia-indicacao-messias-stf-2026.jpg",
    excerpt: "Alcolumbre sinalizou que não deve pautar a sabatina de Jorge Messias ao STF neste ano.",
    link: "../politica/alcolumbre-bloqueia-indicacao-messias-stf-2026.html",
    category: "Política",
    author: "Justiça em Dia",
    authorLink: "#"
},
{
    title: "Janja Revela Dois Casos de Assédio como Primeira-Dama",
    date: "04/03/2026",
    timestamp: "2026-03-04T07:00:00",
    image: "../img/janja-revela-assedio-como-primeira-dama-sem-censura.jpg",
    excerpt: "A primeira-dama Janja da Silva revelou ao programa Sem Censura, da TV Brasil, ter sido assediada duas vezes durante o mandato de Lula, usando o relato para destacar a vulnerabilidade das mulheres brasileiras.",
    link: "../politica/janja-revela-assedio-como-primeira-dama-sem-censura.html",
    category: "politica",
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
