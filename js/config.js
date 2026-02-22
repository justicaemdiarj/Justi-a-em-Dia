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
    phone: "+55 21 98269-4928",
    description: "Portal de notícias e análises sobre direito, legislação e jurisprudência. Acompanhe as principais decisões dos tribunais brasileiros e mudanças na legislação.",
    searchText: "Pesquisar",

    social: {
   //  facebook: "",
    instagram: "https://instagram.com/justicaemdia_br",
   //  twitter: "",
     linkedin: "https://linkedin.com/company/justicaemdia",

    },
    
    // Configuração do Menu (Gerenciamento em Massa)
    menu: [
 //  { title: "Direito Civil", link: "direito-civil/index.html" },
  //          { title: "Direito de Família", link: "direito-de-familia/index.html" },
  //          { title: "Direito Criminal", link: "direito-penal/index.html" },
  //          { title: "Direito Trabalhista", link: "direito-trabalhista/index.html" },
  //          { title: "Direito Militar", link: "direito-militar/index.html" },
   //         { title: "Compliance", link: "compliance/index.html" },
    //        { title: "Jurisprudência", link: "jurisprudencia/index.html" },
     //       { title: "Legislação", link: "legislacao/index.html" },
 {
            title: "Direito Civil",
            link: "direito-civil/index.html",
            isClickable: true,
            subcategories: [
               { title: "Responsabilidade civil", link: "responsabilidade-civil/index.html" },
               { title: "Direito imobiliário", link: "direito-imobiliario/index.html" },
               { title: "Danos morais e materiais", link: "danos-morais-e-materiais/index.html" },
               { title: "Direito do consumidor", link: "direito-do-consumidor/index.html" },
               { title: "Prescrição e decadência", link: "prescricao-e-decadencia/index.html" },
               { title: "Direito digital e proteção de dados", link: "direito-digital-e-protecao-de-dados/index.html" },
           ]
        },
        {
            title: "Direito de Família",
            link: "direito-de-familia/index.html",
            isClickable: true,
            subcategories: [
              { title: "Divórcio", link: "divorcio/index.html" },
              { title: "Regime de bens", link: "regime-de-bens/index.html" },
              { title: "Violência doméstica", link: "violencia-domestica/index.html" },
              { title: "Mediação familiar", link: "mediacao-familiar/index.html" },
              { title: "Partilha de bens", link: "partilha-de-bens/index.html" }
            ]
        },
        {
            title: "Direito Criminal",
            link: "direito-penal/index.html",
            isClickable: true,
        subcategories: [
             { title: "Crimes digitais", link: "crimes-digitais/index.html" },
             { title: "Prisões e medidas cautelares", link: "prisoes-e-medidas-cautelares/index.html" },
             { title: "Crimes contra a dignidade", link: "crimes-contra-a-dignidade/index.html" },
             { title: "Inquérito policial", link: "inquerito-policial/index.html" },
             { title: "Dosimetria da pena", link: "dosiometria-da-pena/index.html" }
          ]
        },
        {
            title: "Direito Trabalhista",
            link: "direito-trabalhista/index.html",
            isClickable: true,
           subcategories: [
              { title: "Assédio moral e sexual", link: "assedio-moral-e-sexual/index.html" },
              { title: "Acidente de trabalho", link: "acidente-de-trabalho/index.html" },
              { title: "Reclamação trabalhista", link: "reclamacao-trabalhista/index.html" },
              { title: "Vínculo empregatício", link: "vinculo-empregaticio/index.html" },
              { title: "Direito previdenciário ", link: "direito-previdenciario/index.html" },
              { title: "Adicional de insalubridade e periculosidade", link: "adicional-de-insalubridade-periculosidade/index.html" },
          ]
        },
        {
            title: "Direito Militar",
            link: "direito-militar/index.html",
            isClickable: true,
           subcategories: [
            { title: "Crimes militares", link: "crimes-militares/index.html" },
            { title: "Conselho de disciplina", link: "conselho-de-disciplina/index.html" },
            { title: "Justiça militar", link: "justica-militar/index.html" },
            { title: "Reforma e reserva", link: "reforma-e-reserva/index.html" },
            { title: "Direito previdenciário militar", link: "direito-previdenciario-militar/index.html" }
           ]
        },

               {
           title: "Recursos Humanos",
           link: "recursos-humanos/index.html",
          isClickable: true,
           subcategories: [
           { title: "Recrutamento e Seleção ", link: "recrutamento-e-selecao/index.html" },
           { title: "Departamento Pessoal", link: "departamento-pessoal/index.html" },
           { title: "Treinamento e Desenvolvimento", link: "treinamento-e-desenvolvimento/index.html" },
           { title: "Remuneração e Benefícios", link: "remuneracao-e-beneficio/index.html" },
           { title: "Gestão de Desempenho e Clima", link: "gestao-de-desempenho/index.html" }
            ]
       },
               {
        title: "Finanças",
        link: "financas/index.html",
       isClickable: true,
       subcategories: [
         { title: "Mercado Financeiro e de Investimentos", link: "mercado-financeiro-e-de-investimento/index.html" },
         { title: "Finanças Pessoais e Planejamento Financeiro", link: "financas-pessoais-e-planejamento-financeiro/index.html" },
         { title: "Empresas e Negócios", link: "empresas-e-negocios/index.html" },
         { title: "Empreendedorismo", link: "empreendedorismo/index.html" },      
          ]
      },
    ],
    
        // Configuração do Footer (Gerenciamento em Massa)
    
    footer: {
        // Links adicionais do footer
        additionalLinks: [
            { title: "Política de Privacidade", link: "politica-privacidade.html" },
            { title: "Entre em Contato", link: "contato.html" },
            { title: "Quem Somos", link: "quem-somos.html" },
            { title: "Apoiadores", link: "apoiadores/index.html" },
            
        ]
    },

    supporters: [
        { 
            name: "Advogado Romer Carvalho", 
            logo: "img/dr_romer_carvalho.png", 
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
    banners: {
        // Formato da data: "YYYY-MM-DD" ou null para permanente
        // pages: "full" para todas as páginas, ou array de URLs específicas (ex: ["index.html", "contato.html"])
        uol: [
            { 
                 name: "Banner UOL Padrão", 
                  img: window.innerWidth <= 768 ? "img/banner-mobile-uol.png" : "img/banner-uol.png", 
                 link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", 
                 endDate: null, 
                 pages: ["contato.html"]
            },
            // BANNER ESPECIFICO POR PÁGINA OU MESCLA
            
            { 
                 name: "Banner UOL Específico 1", 
                 img: window.innerWidth <= 768 ? "https://macmagazine.com.br/wp-content/uploads/2019/03/06-iphone-can-do-what-2.gif" : "https://macmagazine.com.br/wp-content/uploads/2019/03/06-iphone-can-do-what-2.gif", 
                 link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", 
                 endDate: null, 
                 pages: ["contato.html"]
            },
            { 
                 name: "Banner UOL Específico 2", 
                 img: window.innerWidth <= 768 ? "img/cirurgia-estetica.jpg" : "img/cirurgia-estetica.jpg", 
                 link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", 
                 endDate: null, 
                 pages:  ["contato.html"]
            }
            
        ],
        desktop: [
        { name: "Apoiador Romer Carvalho", img: "img/banner-apoiadores/apoiador-romer-carvalho-desktop-1.png", link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", endDate: "2026-12-31", pages: "full" },
        { name: "Apoiador Romer Carvalho", img: "img/banner-apoiadores/apoiador-romer-carvalho-desktop-2.png", link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", endDate: "2026-12-31", pages: "full" },
        ],
        mobile: [
       { name: "Apoiador Romer Carvalho", img: "img/banner-apoiadores/apoiador-romer-carvalho-mobile-1.png", link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", endDate: "2026-12-31", pages: "full" },
       { name: "Apoiador Romer Carvalho", img: "img/banner-apoiadores/apoiador-romer-carvalho-mobile-2.png", link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", endDate: "2026-12-31", pages: "full"},
       { name: "Apoiador Romer Carvalho", img: "img/banner-apoiadores/apoiador-5.png", link: "https://www.romercarvalho.adv.br?utm_source=justica%20em%20dia&utm_medium=site%20justica%20em%20dia&utm_campaign=apoio&utm_content=banner-publicitario", endDate: "2026-12-31", pages: "full"}
        ]
    },


    
};

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
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(link);
    }
}

// Função auxiliar para verificar se um valor está vazio
function isEmpty(value) {
    return !value || value.trim() === '' || value === '#';
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
            socialLinksHTML += `<a href="${siteConfig.social.facebook}" target="_blank" rel="noopener noreferrer" title="Facebook" class="social-link"><i class="fab fa-facebook-f"></i></a>`;
        }
        if (!isEmpty(siteConfig.social.instagram)) {
            socialLinksHTML += `<a href="${siteConfig.social.instagram}" target="_blank" rel="noopener noreferrer" title="Instagram" class="social-link"><i class="fab fa-instagram"></i></a>`;
        }
        if (!isEmpty(siteConfig.social.twitter)) {
            socialLinksHTML += `<a href="${siteConfig.social.twitter}" target="_blank" rel="noopener noreferrer" title="Twitter" class="social-link"><i class="fab fa-twitter"></i></a>`;
        }
        if (!isEmpty(siteConfig.social.linkedin)) {
            socialLinksHTML += `<a href="${siteConfig.social.linkedin}" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="social-link"><i class="fab fa-linkedin-in"></i></a>`;
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
            let activeBanners = bannerList.filter(isBannerActiveJS);
            if (!container || activeBanners.length === 0) {
                if (container) container.style.display = 'none';
                return;
            }

            if (!isHomePage) {
                activeBanners = activeBanners.sort(() => Math.random() - 0.5);
            }
            
            container.innerHTML = ''; 
            container.style.overflow = 'hidden';
            container.style.position = 'relative';
            container.style.display = 'block';
            
            let currentIndex = 0;
            const bannerElements = activeBanners.map((banner, index) => {
                let imgPath = banner.img;
                if (isSubPage && imgPath.startsWith('img/')) imgPath = '../' + imgPath;
                
                const a = document.createElement('a');
                a.href = banner.link;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                a.className = 'programmatic-banner';
                a.style.display = index === currentIndex ? 'block' : 'none';
                a.style.transition = 'opacity 0.5s ease-in-out';
                a.innerHTML = `
                    <p class="banner-label" style="display: block !important; font-size: 0.7rem; color: #999; text-transform: uppercase; margin-bottom: 5px; text-align: center;">Publicidade</p>
                    <img src="${imgPath}" alt="${banner.name}" title="${banner.name}" style="width: 100%; border-radius: 8px;">
                `;
                container.appendChild(a);
                return a;
            });

            if (bannerElements.length > 1) {
                setInterval(() => {
                    bannerElements[currentIndex].style.opacity = '0';
                    setTimeout(() => {
                        bannerElements[currentIndex].style.display = 'none';
                        currentIndex = (currentIndex + 1) % bannerElements.length;
                        bannerElements[currentIndex].style.display = 'block';
                        bannerElements[currentIndex].style.opacity = '0';
                        setTimeout(() => {
                            bannerElements[currentIndex].style.opacity = '1';
                        }, 50);
                    }, 500);
                }, 4000);
            }
        }

        createBannerCarousel(uolContainer, siteConfig.banners.uol);
        createBannerCarousel(desktopContainer, siteConfig.banners.desktop);
        createBannerCarousel(middlePostContainer, siteConfig.banners.desktop);
        createBannerCarousel(mobileContainer, siteConfig.banners.mobile);
    }

    setupProgrammaticBanners();

    const supportersContainer = document.getElementById('supporters-carousel');
    if (supportersContainer) {
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
                <a href="${supLink}" class="supporter-item">
                    <img src="${logoPath}" alt="${sup.name}" title="${sup.name}">
                </a>
            `;
        });
        supportersHtml += '</div>';
        supportersContainer.innerHTML = supportersHtml;
    }
}

document.addEventListener('DOMContentLoaded', updateGlobalElements);


