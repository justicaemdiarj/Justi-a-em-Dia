/**
 * Função para calcular o prefixo do caminho baseado na profundidade atual
 */
function getSitePathPrefix() {
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        const src = scripts[i].getAttribute('src');
        if (src && src.includes('js/config.js')) {
            const parts = src.split('js/config.js');
            return parts[0]; 
        }
    }
    return '';
}



const prefix = getSitePathPrefix();

const siteConfig = {
    year: new Date().getFullYear(),
    email: "contato@justicaemdia.com.br",
    phone: "+55 21 990670186",
    description: "Portal de notícias e análises sobre direito, legislação e jurisprudência. Acompanhe as principais decisões dos tribunais brasileiros e mudanças na legislação.",
    searchText: "Pesquisar...",
    logo: "logo.justica-em-dia.png",
    favicon: "favicon.png",
    
    social: {
   //  facebook: "",
   // instagram: "https://instagram.com/justicaemdia_br",
  //   twitter: "https://x.com/justicaemdia",
     linkedin: "https://linkedin.com/company/justicaemdia",

    },
    
    // Configuração do Menu (Gerenciamento em Massa)

menu: [
        { title: "Início", link: ".." },
        {
            title: "Áreas do Direito",
            link: "#", 
            isClickable: false,
            subcategories: [
            { title: "Direito Civil", link: "direito-civil" },
            { title: "Direito de Família", link: "direito-de-familia" },
            { title: "Direito Criminal", link: "direito-penal" },
            { title: "Direito Trabalhista", link: "direito-trabalhista" },
            { title: "Direito Militar", link: "direito-militar" },

            ]
        },
        {
            title: "Recursos Jurídicos",
            link: "#",
            isClickable: false,
            subcategories: [
                { title: "Jurisprudência", link: "jurisprudencia" },
                { title: "Legislação", link: "legislacao" },
            ]
        },
        { title: "Compliance", link: "compliance" },
        { title: "Política", link: "politica" },
    ],
    
        // Configuração do Footer (Gerenciamento em Massa)
    
    footer: {
        // Links adicionais do footer
        additionalLinks: [
            { title: "Política de Privacidade", link: "politica-privacidade.html" },
            { title: "Entre em Contato", link: "contato.html" },
          //  { title: "Anuncie Conosco", link: "comercial" },
            { title: "Quem Somos", link: "quem-somos.html" },
            // { title: "Apoiadores", link: "apoiadores" },
        
            
        ]
    },

    

    supporters: [
        { 
            name: "Advogado Romer Carvalho", 
            logo: "img/dr_romer_carvalho.webp", 
            link: "apoiadores/advogado-romer-carvalho.html?author=Romer Carvalho",
            description: "Especialista em Direito Civil e Processual Civil, com vasta experiência em consultoria e contencioso estratégico."
        },
        { 
            name: "Aguardando você!", 
            logo: "img/aguardando-por-voce.jpg", 
            link: "#",
            description: "Descrição do apoiador 2. Comprometido com a excelência jurídica e o apoio ao portal Justiça em Dia."
        },
        { 
            name: "Aguardando você!", 
            logo: "img/aguardando-por-voce.jpg", 
            link: "#",
            description: "Descrição do apoiador 3. Comprometido com a excelência jurídica e o apoio ao portal Justiça em Dia."
        },
        { 
            name: "Aguardando você!", 
            logo: "img/aguardando-por-voce.jpg", 
            link: "#",
            description: "Descrição do apoiador 4. Comprometido com a excelência jurídica e o apoio ao portal Justiça em Dia."
        },
        { 
            name: "Aguardando você!", 
            logo: "img/aguardando-por-voce.jpg", 
            link: "#",
            description: "Descrição do apoiador 5. Comprometido com a excelência jurídica e o apoio ao portal Justiça em Dia."
        }
    ],
    displaySupporters: false, // ATIVAÇÃO/INATIVAÇÃO APOIADORES
    
    
    banners: {
        // Formato da data: "YYYY-MM-DD" ou null para permanente
        // pages: "full" para todas as páginas, ou array de URLs específicas (ex: ["index.html", "contato.html"])
        uol: [
            { 
                 name: "Objetiva Labs", 
                  img: window.innerWidth <= 200 ? "img/banner-apoiadores/objetiva-labs-banner-topo-desktop.gif" : "img/banner-apoiadores/objetiva-labs-banner-topo-desktop.gif", 
                 link: "https://www.objetivalabs.com.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", 
                 endDate: null, 
                 pages: ["conato.html"]
            },
            // BANNER ESPECIFICO POR PÁGINA OU MESCLA
            
            { 
                 name: "Banner UOL Específico 1", 
                 img: window.innerWidth <= 768 ? "https://macmagazine.com.br/wp-content/uploads/2019/03/06-iphone-can-do-what-2.gif" : "https://macmagazine.com.br/wp-content/uploads/2019/03/06-iphone-can-do-what-2.gif", 
                 link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", 
                 endDate: null, 
                 pages: ["conato.html"]
            },
            { 
                 name: "Banner UOL Específico 2", 
                 img: window.innerWidth <= 768 ? "img/cirurgia-estetica.jpg" : "img/cirurgia-estetica.jpg", 
                 link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", 
                 endDate: null, 
                 pages:  ["conato.html"]
            }
            
        ],
        desktop: [
        { name: "Apoiador Romer Carvalho", img: "img/banner-apoiadores/apoiador-romer-carvalho-desktop-1.png", link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", endDate: "2028-12-31", pages: "full" },
        { name: "Apoiador Romer Carvalho", img: "img/banner-apoiadores/apoiador-romer-carvalho-desktop-2.png", link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", endDate: "2028-12-31", pages: "full" },
        { name: "Apoiador Objetiva Labs", img: "img/banner-apoiadores/objetiva-labs-banner-desktop-1.png", link: "https://www.objetivalabs.com.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", endDate: "2028-12-31", pages: "full" },
        ],
        mobile: [
       { name: "Apoiador Romer Carvalho", img: "img/banner-apoiadores/apoiador-romer-carvalho-mobile-1.png", link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", endDate: "2028-12-31", pages: "full" },
       { name: "Apoiador Romer Carvalho", img: "img/banner-apoiadores/apoiador-romer-carvalho-mobile-2.png", link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", endDate: "2028-12-31", pages: "full"},
       { name: "Apoiador Objetiva Labs", img: "img/banner-apoiadores/objetiva-labs-banner-mobile.png", link: "https://www.objetivalabs.com.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", endDate: "2028-12-31", pages: "full"},
        ]
    },
};


//ESTRUTURA DE BANNERS LATERAIS PERSONALIZADOS ("VIU ISSO?")

siteConfig.sidebarBanners = [
    {
        name: "Seja Nosso Apoiador",
        img: "img/seja-nosso-apoiador.gif", // Caminho da imagem do banner
        link: "https://api.whatsapp.com/send/?phone=5521990670186&text=Ol%C3%A1%21+Gostaria+de+informa%C3%A7%C3%B5es+sobre+como+ser+membro+do+site+Justi%C3%A7a+em+Dia.+Poderia+ajudar%3F&type=phone_number&app_absent=0", // Link de destino do banner
        endDate: null, // Data de expiração no formato "YYYY-MM-DD" ou null para permanente
        pages: "full" // "full" para todas as páginas, ou array de URLs específicas (ex: ["index.html", "contato.html"])
    },
];

siteConfig.postContentBanners = [
    {
        name: "Apoiador Romer Carvalho",
        img: "img/banner-apoiadores/apoiador-romer-carvalho-desktop-1.png", 
        link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario",
       pages: ["direito-de-familia/testamento-heranca-direito-sucessorio-brasil.html","compliance/integridade-corporativa-alem-papel-impresso.html","compliance/conformidade-trabalhista-alem-do-contrato-assinado.html","compliance/compliance-prevencao-fraude-controles-internos-governanca-corporativa.html","direito-de-familia/litigancia-predatoria-familia-judiciario-instrumento-opressao.html","compliance/secretaria-cultura-cuiaba-compliance-integridade-administracao-publica-municipal.html","direito-de-familia/divorce-extrajudicial-consensual-litigious-differences.html","direito-de-familia/divorcio-extrajudicial-consensual-litigioso-diferencas.html","compliance/banco-master-compliance-gestao-fraudulenta-temeraria-limites-governanca.html","compliance/o-escudo-que-o-poder-tenta-dobrar.html","compliance/quem-audita-os-auditores.html","direito-de-familia/como-comprovar-uniao-estavel.html"], // "full" para todos ou ["caminho/pagina.html"] para específicas
        position: 3    // Inserir após o 3º parágrafo 
    },
    {
        name: "Apoiador Romer Carvalho",
        img: "img/banner-apoiadores/apoiador-romer-carvalho-desktop-2.png",
        link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario",
        pages: ["direito-de-familia/testamento-heranca-direito-sucessorio-brasil.html","compliance/integridade-corporativa-alem-papel-impresso.html","compliance/conformidade-trabalhista-alem-do-contrato-assinado.html","compliance/compliance-prevencao-fraude-controles-internos-governanca-corporativa.html","direito-de-familia/litigancia-predatoria-familia-judiciario-instrumento-opressao.html","compliance/secretaria-cultura-cuiaba-compliance-integridade-administracao-publica-municipal.html","direito-de-familia/divorce-extrajudicial-consensual-litigious-differences.html","direito-de-familia/divorcio-extrajudicial-consensual-litigioso-diferencas.html","compliance/banco-master-compliance-gestao-fraudulenta-temeraria-limites-governanca.html","compliance/o-escudo-que-o-poder-tenta-dobrar.html","compliance/quem-audita-os-auditores.html","direito-de-familia/como-comprovar-uniao-estavel.html"],
        position: 6    // Inserir após o 6º parágrafo
    },

];

// Banner acima de Sobre a Categoria 

siteConfig.sidebarTopBanner = {
    name: "Seja Apoiador do Justiça em Dia",
    img: "img/seja-nosso-apoiador.gif", // Caminho da imagem
    link: "https://api.whatsapp.com/send/?phone=5521990670186&text=Ol%C3%A1%21+Gostaria+de+informa%C3%A7%C3%B5es+sobre+como+ser+membro+do+site+Justi%C3%A7a+em+Dia.+Poderia+ajudar%3F&type=phone_number&app_absent=0",     // Link de destino
    pages: "full" // "full" para todas as páginas
};


function bannerAtivo(banner){

  if(!banner.active) return false;

  const now = new Date();
  const start = new Date(banner.start);
  const end = new Date(banner.end);

  return now >= start && now <= end;

}function renderBanner(position){

  const banner = banners.find(b => b.position === position && bannerAtivo(b));

  if(!banner) return "";

  return `
  <div class="banner-middle">
    <a href="${banner.link}" target="_blank" rel="nofollow>
      <img src="${banner.image}" alt="Publicidade">
    </a>
  </div>
  `;
}
/**
 * ESTRUTURA DE BANNERS PÓS-NEWSLETTER (Páginas de Categoria e Postagem)
 */
siteConfig.postNewsletterBanners = [
    {
        name: "Newsletter",
        img: "img/newsletter-assinatura.gif", // Caminho da imagem do banner
        link: "https://www.justicaemdia.com.br/newsletter", // Link de destino do banner
        endDate: "2026-12-31", // Data de expiração no formato "YYYY-MM-DD" ou null para permanente
        pages: "full" // "full" para todas as páginas, ou array de URLs específicas (ex: ["direito-civil/index.html", "compliance/a-holding-do-crime.html"])
    },
    /*{
        name: "Newsletter",
        img: "img/newsletter-assinatura.gif", // Caminho da imagem do banner
        link: "https://api.whatsapp.com/send/?phone=5521990670186", // Link de destino do banner
        endDate: "2026-12-31", // Data de expiração no formato "YYYY-MM-DD" ou null para permanente
        pages: "full" // "full" para todas as páginas, ou array de URLs específicas (ex: ["direito-civil/index.html", "compliance/a-holding-do-crime.html"])
    },*/

    
];

// BANNER LATERAL // POPUP //
 
(function () {

    const CONFIG = {
    enabled: false, 
        image: "../img/alcolumbre-bloqueia-indicacao-messias-stf-2026.webp",
        link: "https://seusite.com",
        width: "300px"
    };
   // se estiver desativado, não executa
    if (!CONFIG.enabled) return;
    // CSS
    const style = document.createElement("style");
    style.innerHTML = `
        #bannerLateralJS{
            position:fixed;
            right:0;
            top:50%;
            transform:translateY(-50%);
            width:${CONFIG.width};
            background:#fff;
            box-shadow:-3px 0 5px rgba(0,0,0,0.2);
            transition:right .4s ease;
            z-index:99999;
            font-family:Arial;

            border:3px solid red;
            animation:piscandoBorda 1s infinite;
        }

        #bannerLateralJS.recolhido{
            right:-295px;
        }

        #bannerLateralJS img{
            width:100%;
            display:block;
        }

#bannerToggle{
    position:absolute;
    left:-40px;
    top:15px;
    width:60px;
    height:60px;
    border:none;
    border-radius:50%;
    background:#e60023;
    color:#fff;
    cursor:pointer;
    font-size:18px;
    font-weight:bold;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow:0 4px 10px rgba(0,0,0,0.3);
    transition:all .3s ease;
}

#bannerToggle:hover{
    background:#ff0033;
    transform:scale(1.1);
}

       @keyframes sirene{
    0%{
        border-color:#ff0000;
        box-shadow:0 0 15px red;
    }
    50%{
        border-color:#550000;
        box-shadow:0 0 2px red;
    }
    100%{
        border-color:#ff0000;
        box-shadow:0 0 15px red;
    }
}

#bannerLateralJS{
    border:3px solid red;
    animation:sirene 0.8s infinite;
}
        }
    `;
    document.head.appendChild(style);

    // HTML
    const banner = document.createElement("div");
    banner.id = "bannerLateralJS";

    banner.innerHTML = `
        <button id="bannerToggle">X</button>
        <a href="${CONFIG.link}" target="_blank">
            <img src="${CONFIG.image}" alt="banner">
        </a>
    `;

    document.body.appendChild(banner);

    const btn = document.getElementById("bannerToggle");

    btn.addEventListener("click", function () {

        banner.classList.toggle("recolhido");

        if (banner.classList.contains("recolhido")) {
            btn.innerHTML = "<";
        } else {
            btn.innerHTML = "X";
        }

    });

})();



// Banner que sobe de baixo

(function(){

const CONFIG = {
    enabled: false,

    // páginas permitidas
    allowedPages: ["politica/index.html", ],
    imageDesktop: "../img/banner-uol.png",
    imageMobile: "../img/banner-mobile-uol.png",
    link: "https://seusite.com",
    height: "100px"
};

// desativado
if(!CONFIG.enabled) return;

// verificar página atual
const currentPage = window.location.pathname;

if(
    CONFIG.allowedPages.length > 0 &&
    !CONFIG.allowedPages.some(page => currentPage.includes(page))
){
    return;
}

// escolher imagem
const bannerImage = window.innerWidth <= 768 ? CONFIG.imageMobile : CONFIG.imageDesktop;

// CSS
const style = document.createElement("style");
style.innerHTML = `
#bannerBottom{
    position:fixed;
    left:0;
    bottom:-120px;
    width:100%;
    height:${CONFIG.height};
    background:#fff;
    z-index:99999;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:bottom .4s ease;
    box-shadow:0 -3px 15px rgba(0,0,0,0.25);

    border-top:4px solid red;
    animation:bordaPulse 1.2s infinite;
}

#bannerBottom.show{
    bottom:0;
}

#bannerBottom img{
    max-width:100%;
    max-height:100%;
    object-fit:cover;
}

#bannerClose{
    position:absolute;
    right:15px;
    top:-35px;
    width:40px;
    height:40px;
    border:none;
    border-radius:50%;
    background:#e60023;
    color:#fff;
    font-size:18px;
    cursor:pointer;
    z-index:999999;
    display:flex;
    align-items:center;
    justify-content:center;
}

#bannerClose:hover{
    background:#ff0033;
}

@keyframes bordaPulse{
0%{box-shadow:0 -5px 10px rgba(255,0,0,0.4);}
50%{box-shadow:0 -10px 25px rgba(255,0,0,0.8);}
100%{box-shadow:0 -5px 10px rgba(255,0,0,0.4);}
}
`;
document.head.appendChild(style);

// criar banner
const banner = document.createElement("div");
banner.id = "bannerBottom";

banner.innerHTML = `
<button id="bannerClose">✕</button>
<a href="${CONFIG.link}" target="_blank">
<img src="${bannerImage}" alt="banner">
</a>
`;

document.body.appendChild(banner);

// mostrar banner
setTimeout(()=>{
    banner.classList.add("show");
},500);

// botão
const btn = document.getElementById("bannerClose");

btn.onclick = function(e){

    e.preventDefault();
    e.stopPropagation();

    banner.classList.toggle("show");

    if(banner.classList.contains("show")){
        btn.innerHTML="✕";
    }else{
        btn.innerHTML="▲";
    }

};

})();


function isBannerActiveJS(banner) {
    // Verificar data de expiração
    if (banner.endDate) {
        const now = new Date();
        const end = new Date(banner.endDate);
        end.setHours(23, 59, 59, 999);
        if (now > end) return false;
    }

    // Verificar páginas permitidas
    if (!banner.pages || banner.pages === "full") return true;
    
    const currentPath = window.location.pathname;
    
    if (Array.isArray(banner.pages)) {
        return banner.pages.some(page => {
            // Verifica se a URL atual termina com a página especificada ou contém o caminho
            // Isso permite passar "index.html" ou "compliance/index.html"
            return currentPath.endsWith(page) || currentPath.includes('/' + page);
        });
    }

    return false;
}

function loadFontAwesome() {
    if (!document.querySelector('link[href*="fontawesome"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
        document.head.appendChild(link);
    }
}

// Função auxiliar para verificar se um valor está vazio
function isEmpty(value) {
    return !value || value.trim() === '' || value === '#';
}

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

function updateGlobalElements() {
    loadFontAwesome();
    
    const path = window.location.pathname;
    const isHomePage = path.endsWith('/') || path.endsWith('index.html') && !path.includes('/direito-') && !path.includes('/compliance/') && !path.includes('/jurisprudencia/') && !path.includes('/legislacao/');
    
    const isSubPage = prefix === '../';

    // Função para ajustar caminhos relativos
    function adjustPath(link) {
        if (isEmpty(link) || link.startsWith('http') || link.startsWith('#')) return link;
        if (isSubPage) {
            // Se estiver em uma subpasta (ex: compliance/index.html), volta um nível
            return '../' + link;
        }
        return link;
    }
// Atualizar Favicon
    const faviconLink = document.querySelector('link[rel="icon"]');
    if (faviconLink && siteConfig.favicon) {
        faviconLink.href = prefix + 'img/' + siteConfig.favicon;
    } else if (siteConfig.favicon) {
        // Se não existir, cria a tag favicon
        const newFaviconLink = document.createElement('link');
        newFaviconLink.rel = 'icon';
        newFaviconLink.type = 'image/png';
        newFaviconLink.href = prefix + 'img/' + siteConfig.favicon;
        document.head.appendChild(newFaviconLink);
    }

    // Atualizar Logo
    const mainLogo = document.querySelector('.logo img'); // Seleciona a imagem dentro da div com classe 'logo'
    if (mainLogo && siteConfig.logo) {
        mainLogo.src = prefix + 'img/' + siteConfig.logo;
    }
    // Atualizar Menu (Navegação Principal)
    const navLists = document.querySelectorAll('.desktop-nav-list');
    navLists.forEach(navList => {
        let menuHTML = '';
        siteConfig.menu.forEach(item => {
            const hasSub = item.subcategories && item.subcategories.length > 0;
            const link = adjustPath(item.link);
            
            if (hasSub) {
                menuHTML += `
                    <li class="nav-item-dropdown">
                        <a href="${item.isClickable ? link : 'javascript:void(0)'}" class="dropdown-toggle">
                            ${item.title} <i class="fas fa-chevron-down" style="font-size: 0.7em; margin-left: 5px;"></i>
                        </a>
                        <ul class="dropdown-menu">
                            ${item.subcategories.map(sub => `
                                <li><a href="${adjustPath(sub.link)}">${sub.title}</a></li>
                            `).join('')}
                        </ul>
                    </li>`;
            } else {
                menuHTML += `<li><a href="${link}">${item.title}</a></li>`;
            }
        });
        navList.innerHTML = menuHTML;
    });

// Atualizar Categorias e Recursos do Footer
const footerSections = document.querySelectorAll('.footer-section');
if (footerSections.length >= 3) {
    // Segunda seção (índice 1) = Categorias
    const categoriesSection = footerSections[1];
    const categoriesUl = categoriesSection.querySelector('ul');
    if (categoriesUl) {
        let categoriesHTML = '';
        siteConfig.menu.forEach(item => {
            if (item.subcategories) {
                item.subcategories.forEach(sub => {
                    categoriesHTML += `<li><a href="${adjustPath(sub.link)}">${sub.title}</a></li>`;
                });
            } else {
                categoriesHTML += `<li><a href="${adjustPath(item.link)}">${item.title}</a></li>`;
            }
        });
        categoriesUl.innerHTML = categoriesHTML;
    }
    
    // Terceira seção (índice 2) = Recursos (additionalLinks)
    const recursosSection = footerSections[2];
    const recursosUl = recursosSection.querySelector('ul');
    if (recursosUl && siteConfig.footer && siteConfig.footer.additionalLinks) {
        let recursosHTML = '';
        siteConfig.footer.additionalLinks.forEach(item => {
            recursosHTML += `<li><a href="${adjustPath(item.link)}">${item.title}</a></li>`;
        });
        recursosUl.innerHTML = recursosHTML;
    }
}

    
    // Atualizar ano
    document.querySelectorAll('.footer-year').forEach(el => el.textContent = siteConfig.year);
    
    // Atualizar e-mail no footer
    document.querySelectorAll('.footer-email').forEach(el => {
        if (!isEmpty(siteConfig.email)) {
            el.textContent = siteConfig.email;
            if (el.tagName === 'A') el.href = `mailto:${siteConfig.email}`;
            el.style.display = '';
        } else {
            if (el.closest('p')) el.closest('p').style.display = 'none';
        }
    });
    
    // Atualizar telefone no footer
    document.querySelectorAll('.footer-phone').forEach(el => {
        if (!isEmpty(siteConfig.phone)) {
            el.textContent = siteConfig.phone;
            if (el.tagName === 'A') el.href = `tel:${siteConfig.phone.replace(/\D/g, '')}`;
            el.style.display = '';
        } else {
            if (el.closest('p')) el.closest('p').style.display = 'none';
        }
    });

    // Atualizar descrição no footer
    document.querySelectorAll('.footer-description').forEach(el => {
        if (!isEmpty(siteConfig.description)) {
            el.textContent = siteConfig.description;
            el.style.display = '';
        } else {
            el.style.display = 'none';
        }
    });

    // Atualizar campo de pesquisa
    const searchInput = document.getElementById('searchInput');
    const searchBox = document.querySelector('.search-box');
    if (searchInput && searchBox) {
        if (!isEmpty(siteConfig.searchText)) {
            searchInput.placeholder = siteConfig.searchText;
            searchBox.style.display = '';
        } else {
            searchBox.style.display = 'none';
        }
    }

    // Atualizar redes sociais no footer
    const socialContainer = document.querySelector('.footer-social-links');
    if (socialContainer) {
        let socialLinksHTML = '';
        if (!isEmpty(siteConfig.social.facebook)) {
            socialLinksHTML += `<a href="${siteConfig.social.facebook}" target="_blank" rel="noopener noreferrer nofollow" title="Facebook" class="social-link"><i class="fab fa-facebook-f"></i></a>`;
        }
        if (!isEmpty(siteConfig.social.instagram)) {
            socialLinksHTML += `<a href="${siteConfig.social.instagram}" target="_blank" rel="noopener noreferrer nofollow" title="Instagram" class="social-link"><i class="fab fa-instagram"></i></a>`;
        }
        if (!isEmpty(siteConfig.social.twitter)) {
            socialLinksHTML += `<a href="${siteConfig.social.twitter}" target="_blank" rel="noopener noreferrer nofollow" title="Twitter" class="social-link"><i class="fab fa-x-twitter"></i></a>`;
        }
        if (!isEmpty(siteConfig.social.linkedin)) {
            socialLinksHTML += `<a href="${siteConfig.social.linkedin}" target="_blank" rel="noopener noreferrer nofollow" title="LinkedIn" class="social-link"><i class="fab fa-linkedin-in"></i></a>`;
        }
        
        if (socialLinksHTML !== '') {
            socialContainer.innerHTML = socialLinksHTML;
        }
    }

    function setupProgrammaticBanners() {
        const uolContainer = document.getElementById('banner-uol-container');
        const desktopContainer = document.getElementById('banner-desktop-container');
        const middlePostContainer = document.getElementById('banner-post-middle');
        const mobileContainer = document.getElementById('banner-mobile-container');

function createBannerCarousel(container, bannerList) {
    // Filtra apenas os banners ativos para a página atual
    let activeBanners = bannerList.filter(isBannerActiveJS);
    
    if (!container || activeBanners.length === 0) {
        if (container) container.style.display = 'none';
        return;
    }

    // Não embaralhamos a lista aqui, pois a seleção aleatória será contínua

    container.innerHTML = ''; 
    container.style.overflow = 'hidden';
    container.style.position = 'relative';
    container.style.display = 'block';
    
let currentIndex = Math.floor(Math.random() * activeBanners.length);
    const bannerElements = activeBanners.map((banner, index) => {
        let imgPath = banner.img;
        // Ajuste de caminho para subpáginas
        if (typeof isSubPage !== 'undefined' && isSubPage && imgPath.startsWith('img/')) {
            imgPath = '../' + imgPath;
        }
        
        const a = document.createElement('a');
        a.href = banner.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer nofollow';
        a.className = 'programmatic-banner';
        
        // Estilo inicial: apenas o primeiro (índice 0) aparece
      a.style.display = index === currentIndex ? 'block' : 'none';
a.style.opacity = index === currentIndex ? '1' : '0';
        a.style.transition = 'opacity 0.8s ease-in-out'; // Transição mais suave
        
        a.innerHTML = `
            <p class="banner-label" style="display: block !important; font-size: 0.7rem; color: #999; text-transform: uppercase; margin-bottom: 5px; text-align: center;">Publicidade</p>
            <img src="${imgPath}" alt="${banner.name}" title="${banner.name}" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        `;
        container.appendChild(a);
        return a;
    });

    // Se houver mais de um banner, inicia o rodízio aleatório contínuo
    if (bannerElements.length > 1) {
        const rotateBanner = () => {
            // Esconde o banner atual com fade out
            bannerElements[currentIndex].style.opacity = '1';
            
            setTimeout(() => {
                bannerElements[currentIndex].style.display = 'none';
                
                let nextIndex;
                // Garante que o próximo banner seja diferente do atual
                do {
                    nextIndex = Math.floor(Math.random() * bannerElements.length);
                } while (nextIndex === currentIndex);

                // Mostra o novo banner aleatório com fade in
                bannerElements[nextIndex].style.display = 'block';
                // Pequeno delay para o navegador processar o display:block antes do opacity
                setTimeout(() => {
                    bannerElements[nextIndex].style.opacity = '1';
                    currentIndex = nextIndex; // Atualiza o índice do banner atual
                }, 50);
            }, 800); // Duração do fade out (deve ser igual ao transition-duration do CSS)
        };

        // Define um intervalo entre 4 e 6 segundos para cada troca (mais dinâmico)
        const intervalTime = 2000 + Math.random() * 2000;
        setInterval(rotateBanner, intervalTime);
    }
}
        createBannerCarousel(uolContainer, siteConfig.banners.uol);
        createBannerCarousel(desktopContainer, siteConfig.banners.desktop);
        createBannerCarousel(middlePostContainer, siteConfig.banners.desktop);
        createBannerCarousel(mobileContainer, siteConfig.banners.mobile);
    }

    // ...
    setupProgrammaticBanners();

  const supportersSection = document.querySelector('section.supporters-section');
if (supportersSection) {
    if (siteConfig.displaySupporters === false) {
        supportersSection.style.display = 'none';
    } else {
        supportersSection.style.display = 'block';
    }
}

    const supportersContainer = document.getElementById('supporters-carousel');
    if (siteConfig.displaySupporters && supportersContainer) {
        let supportersHtml = '<div class="supporters-track">';
        const allSupporters = [...siteConfig.supporters, ...siteConfig.supporters];
        allSupporters.forEach(sup => {
            let logoPath = sup.logo;
            let supLink = sup.link;
            if (isSubPage) {
                if (logoPath.startsWith('img/')) logoPath = '../' + logoPath;
                if (supLink.startsWith('apoiadores/')) supLink = '../' + supLink;
            }
            supportersHtml += `
                <a href="${supLink}" class="supporter-item" rel="nofollow">
                    <img src="${logoPath}" alt="${sup.name}" title="${sup.name}">
                </a>
            `;
        });
        supportersHtml += '</div>';
        supportersContainer.innerHTML = supportersHtml;
    }
    // ...

}

document.addEventListener('DOMContentLoaded', () => {
    updateGlobalElements();
    injectPostContentBanners(); // Função de banners no conteúdo
    injectSidebarTopBanner();   // NOVA FUNÇÃO: Banner no topo da sidebar
});

// Funcionalidade de Leitura de Texto (TTS) integrada ao Compartilhar
    const shareContainer = document.querySelector('.share-buttons');
    const postContent = document.querySelector('.post-content');
    
    if (shareContainer && postContent && !document.querySelector('.btn-read-audio')) {
        // Criar o botão
        const readBtn = document.createElement('button');
        readBtn.className = 'btn-read-audio';
        readBtn.title = "Ouvir este artigo";
        
        // Estrutura interna com ícone e texto (o texto será escondido via CSS no mobile)
        readBtn.innerHTML = '<i class="fas fa-play"></i> <span>Ouvir</span>';
        
        // Adiciona o botão ao final da lista de botões de compartilhar
        shareContainer.appendChild(readBtn);

        let isReading = false;
        let utterance = null;

        let voices = [];

function loadVoices() {
    voices = speechSynthesis.getVoices();
}

speechSynthesis.onvoiceschanged = loadVoices;

        readBtn.addEventListener('click', () => {
            if (!isReading) {
                // Iniciar leitura
                const textToRead = postContent.innerText;
       utterance = new SpeechSynthesisUtterance(textToRead);

utterance.lang = 'pt-BR';

const voice = speechSynthesis.getVoices().find(v => 
    v.lang === 'pt-BR' || v.lang === 'pt_BR'
);

if (voice) {
    utterance.voice = voice;
}
                
function speakText(text) {

    const parts = text.match(/.{1,200}/g); // divide em blocos

    parts.forEach(part => {

        const utterance = new SpeechSynthesisUtterance(part);
        utterance.lang = 'pt-BR';

        speechSynthesis.speak(utterance);

    });

}

speakText(postContent.innerText);


                utterance.onend = () => {
                    isReading = false;
                    readBtn.innerHTML = '<i class="fas fa-play"></i> <span>Ouvir</span>';
                    readBtn.classList.remove('reading');
                };

                window.speechSynthesis.speak(utterance);
                isReading = true;
                readBtn.innerHTML = '<i class="fas fa-stop"></i> <span>Parar</span>';
                readBtn.classList.add('reading');
            } else {
                // Parar leitura
                window.speechSynthesis.cancel();
                isReading = false;
                readBtn.innerHTML = '<i class="fas fa-play"></i> <span>Ouvir</span>';
                readBtn.classList.remove('reading');
            }
        });
    }

// Interromper o áudio imediatamente ao trocar de página ou recarregar (F5)
// Interromper o áudio imediatamente ao trocar de página, recarregar (F5) ou fechar a aba
const stopAudioOnExit = () => {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
};

// Evento disparado quando a página está prestes a ser descarregada
window.addEventListener('beforeunload', stopAudioOnExit);

// Evento disparado quando a visibilidade da página muda (ex: trocar de aba ou minimizar)
// Isso garante que o áudio pare mesmo se o 'beforeunload' falhar
window.addEventListener('pagehide', stopAudioOnExit);

// Adicional: Garante que ao carregar uma nova página, qualquer áudio residual seja limpo
document.addEventListener('DOMContentLoaded', () => {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
});

    function changeFontSize(delta) {
    // Seleciona o container do conteúdo do post
    const postContent = document.querySelector(".post-content");
    if (!postContent) return;

    // Obtém o tamanho atual (ou usa o padrão de 1.15rem definido no seu CSS)
    const style = window.getComputedStyle(postContent, null).getPropertyValue("font-size");
    let currentSize = parseFloat(style);

    // Define os limites (mínimo 12px, máximo 30px)
    const newSize = currentSize + (delta * 2); // Aumenta/diminui de 2 em 2 pixels
    
    if (newSize >= 12 && newSize <= 30) {
        postContent.style.fontSize = newSize + "px";
        
        // Opcional: Ajustar também os parágrafos internos se necessário
        const paragraphs = postContent.querySelectorAll("p");
        paragraphs.forEach(p => {
            p.style.fontSize = newSize + "px";
        });
    }
}

function injectPostContentBanners() {
    const postContent = document.querySelector('.post-content');
    if (!postContent || !siteConfig.postContentBanners) return;

    const paragraphs = postContent.querySelectorAll('p');
    if (paragraphs.length === 0) return;

    // Filtra apenas os banners ativos para a página atual
    let activeBanners = [...siteConfig.postContentBanners]
        .filter(isBannerActiveJS);

    if (activeBanners.length === 0) return;

    // Agrupa os banners por posição
    const bannersByPosition = {};
    activeBanners.forEach(banner => {
        if (!bannersByPosition[banner.position]) {
            bannersByPosition[banner.position] = [];
        }
        bannersByPosition[banner.position].push(banner);
    });

    // Para cada posição, escolhe apenas um banner aleatório do grupo
    const selectedBanners = Object.values(bannersByPosition).map(group => {
        // Se houver mais de um banner para a mesma posição, escolhe um aleatoriamente
        return group[Math.floor(Math.random() * group.length)];
    });

    // Percorre cada banner selecionado e insere no conteúdo
    selectedBanners.forEach((banner) => {
        let imgSrc = banner.img;
        if (typeof prefix !== 'undefined' && !imgSrc.startsWith('http')) {
            imgSrc = prefix + imgSrc;
        }

        const bannerHtml = `
            <div class="dynamic-post-banner" style="margin: 30px 0; text-align: center;">
                <p style="font-size: 10px; color: #999; margin-bottom: 5px; text-transform: uppercase;">Publicidade</p>
                <a href="${banner.link}" target="_blank" rel="nofollow">
                    <img src="${imgSrc}" alt="${banner.name}" style="max-width: 100%; border-radius: 8px;">
                </a>
            </div>
        `;

        // Usa a posição definida no config.js (com fallback para o último parágrafo se necessário)
        const targetIndex = Math.min(banner.position - 1, paragraphs.length - 1);

        paragraphs[targetIndex].insertAdjacentHTML('afterend', bannerHtml);
    });
}
function injectSidebarTopBanner() {

    if (!siteConfig.sidebarTopBanner) return;
    if (!isBannerActiveJS(siteConfig.sidebarTopBanner)) return;

    function tryInsertBanner() {

        const sidebar =
document.querySelector('.sidebar') ||
document.querySelector('.sidebar-right') ||
document.querySelector('.right-sidebar') ||
document.querySelector('aside');
        if (!sidebar) return false;

        if (document.querySelector('.dynamic-sidebar-banner')) return true;

        const path = window.location.pathname;
        const isHomePage =
            path === '/' ||
            path.endsWith('/index.html') ||
            path.endsWith('/');

        let imgSrc = siteConfig.sidebarTopBanner.img;
        if (!imgSrc.startsWith('http')) {
            imgSrc = prefix + imgSrc;
        }

        const bannerHtml = `
        <div class="dynamic-sidebar-banner" style="margin-bottom:20px;text-align:center;">
            <p style="font-size:10px;color:#999;margin-bottom:5px;text-transform:uppercase;">Publicidade</p>
            <a href="${siteConfig.sidebarTopBanner.link}" target="_blank" rel="nofollow">
                <img src="${imgSrc}" alt="${siteConfig.sidebarTopBanner.name}" style="width:100%;border-radius:12px;">
            </a>
        </div>
        `;

        if (isHomePage) {
            sidebar.insertAdjacentHTML('afterbegin', bannerHtml);
            return true;
        }

        const aboutWidget = Array.from(document.querySelectorAll('.sidebar-widget, .widget'))
            .find(el => el.textContent.toLowerCase().includes('categoria'));

        if (aboutWidget) {
            aboutWidget.insertAdjacentHTML('beforebegin', bannerHtml);
            return true;
        }

        return false;
    }

    let attempts = 0;

    const interval = setInterval(() => {

        if (tryInsertBanner() || attempts > 10) {
            clearInterval(interval);
        }

        attempts++;

    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.supporters-section');
    if (section && typeof siteConfig !== 'undefined' && siteConfig.displaySupporters === false) {
        section.style.setProperty('display', 'none', 'important');
    }
});

const performAction = () => {
    const query = searchInput.value;
    if (query.length >= 2) {
        // Adiciona efeito visual de carregamento no botão
        searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; 
        
        setTimeout(() => {
            const results = searchArticles(query);
            displaySearchResults(results, query);
            suggestionContainer.style.display = 'none';
            
            // Restaura o ícone original após a busca
            searchBtn.innerHTML = '<i class="fas fa-search"></i>';
        }, 500); // Pequeno delay para o efeito ser visível
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('searchInput');
    const messages = ["Artigos sobre...", "Compliance...", "Política...", "Áreas do direito...", "Pesquise aqui..."];
    let messageIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < messages[messageIndex].length) {
            input.setAttribute('placeholder', messages[messageIndex].substring(0, charIndex + 1));
            charIndex++;
            setTimeout(typeEffect, 200);
        } else {
            setTimeout(eraseEffect, 1000);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            input.setAttribute('placeholder', messages[messageIndex].substring(0, charIndex - 1));
            charIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            messageIndex = (messageIndex + 1) % messages.length;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();
});


/*
// Formato da data: "YYYY-MM-DD HH:mm" (Ano-Mês-Dia Hora:Minuto)
siteConfig.scheduledPosts = [
    {
        title: "Título da Postagem Agendada",
        image: "img/exemplo.jpg",
        description: "Descrição da postagem que aparecerá apenas no horário definido.",
        link: "categoria/pagina-da-postagem.html",
        publishDate: "2026-03-02 15:00" // Exemplo: Aparecerá em 02/03/2026 às 15:00
    },
    // Adicione mais postagens seguindo o modelo acima
];

/**
 * Função que filtra as postagens agendadas e as adiciona à lista global
 * Deve ser chamada antes do carregamento do grid de artigos
 
function processScheduledPosts() {
    if (!siteConfig.scheduledPosts || !window.articlesData) return;

    const now = new Date();

    siteConfig.scheduledPosts.forEach(post => {
        const publishTime = new Date(post.publishDate.replace(/-/g, "/")); // Compatibilidade de formato
        
        // Se o horário atual for maior ou igual ao horário de publicação
        if (now >= publishTime) {
            // Verifica se já não foi adicionado (evita duplicatas)
            const exists = window.articlesData.some(a => a.link === post.link);
            if (!exists) {
                // Adiciona no início da lista para aparecer primeiro
                window.articlesData.unshift({
                    title: post.title,
                    image: post.image,
                    description: post.description,
                    link: post.link
                });
            }
        }
    });
}

// Executa o processamento assim que o script carregar
// Como o config.js é carregado antes do articles.js, precisamos garantir que o articlesData exista
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', processScheduledPosts);
} else {
    processScheduledPosts();
} 
*/

