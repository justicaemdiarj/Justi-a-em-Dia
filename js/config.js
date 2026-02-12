const siteConfig = {
    year: new Date().getFullYear(),
    email: "contato@justicaemdia.com.br",
    phone: "+55 21 98269-4928",
    description: "Portal de notícias e análises sobre direito, legislação e jurisprudência. Acompanhe as principais decisões dos tribunais brasileiros e mudanças na legislação.",

    social: {
        facebook: "",
        instagram: "https://instagram.com/justicaemdia",
        twitter: "",
        linkedin: "https://linkedin.com/company/justicaemdia"
    },
    supporters: [
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
        },
                { 
            name: "Dr. Romer Carvalho", 
            logo: "img/dr_romer_carvalho.png", 
            link: "apoiadores/advogado-romer-carvalho.html",
            description: "Especialista em Direito Civil e Processual Civil, com vasta experiência em consultoria e contencioso estratégico."
        },
        { 
            name: "Apoiador 2", 
            logo: "https://via.placeholder.com/150x80?text=Apoiador+2", 
            link: "#",
            description: "Descrição do apoiador 2. Comprometido com a excelência jurídica e o apoio ao portal Justiça em Dia."
        },
        { 
            name: "Apoiador 3", 
            logo: "https://via.placeholder.com/150x80?text=Apoiador+3", 
            link: "#",
            description: "Descrição do apoiador 3. Comprometido com a excelência jurídica e o apoio ao portal Justiça em Dia."
        },
        { 
            name: "Apoiador 4", 
            logo: "https://via.placeholder.com/150x80?text=Apoiador+4", 
            link: "#",
            description: "Descrição do apoiador 4. Comprometido com a excelência jurídica e o apoio ao portal Justiça em Dia."
        },
        { 
            name: "Apoiador 5", 
            logo: "https://via.placeholder.com/150x80?text=Apoiador+5", 
            link: "#",
            description: "Descrição do apoiador 5. Comprometido com a excelência jurídica e o apoio ao portal Justiça em Dia."
        }
    ],
    banners: {
        // Formato da data: "YYYY-MM-DD" ou null para permanente
        desktop: [
            { name: "Apoiador Romer Carvalho Desktop 1", img: "img/banner-apoiadores/apoiador-romer-carvalho-desktop-1.png", link: "https://www.romercarvalho.adv.br", endDate: "2026-12-31" },
            { name: "Apoiador Romer Carvalho Desktop 2", img: "img/banner-apoiadores/apoiador-romer-carvalho-desktop-2.png", link: "https://www.romercarvalho.adv.br", endDate: "2026-12-31" },
            { name: "Apoiador Romer Carvalho Desktop 3", img: "img/banner-apoiadores/apoiador-romer-carvalho-desktop-3.png", link: "https://www.romercarvalho.adv.br", endDate: "2026-12-31" },
            { name: "Apoiador Romer Carvalho Desktop 4", img: "img/banner-apoiadores/apoiador-romer-carvalho-desktop-4.png", link: "https://www.romercarvalho.adv.br", endDate: "2026-12-31" }
        ],
        mobile: [
            { name: "Apoiador Romer Carvalho Mobile 1", img: "img/banner-apoiadores/apoiador-romer-carvalho-mobile-1.png", link: "https://www.romercarvalho.adv.br", endDate: "2026-12-31" },
            { name: "Apoiador Romer Carvalho Mobile 2", img: "img/banner-apoiadores/apoiador-romer-carvalho-mobile-2.png", link: "https://www.romercarvalho.adv.br", endDate: "2026-12-31"},
            { name: "Apoiador Romer Carvalho Mobile 3", img: "img/banner-apoiadores/apoiador-romer-carvalho-mobile-3.png", link: "https://www.romercarvalho.adv.br", endDate: "2026-12-31"},
            { name: "Apoiador Romer Carvalho Mobile 4", img: "img/banner-apoiadores/apoiador-romer-carvalho-mobile-4.jpg", link: "https://www.romercarvalho.adv.br", endDate: "2026-12-31"},
            { name: "Apoiador 5", img: "img/banner-apoiadores/apoiador-5.png", link: "https://www.romercarvalho.adv.br", endDate: "2026-12-31"}
        ]
    }
};

function isBannerActiveJS(banner) {
    if (!banner.endDate) return true;
    const now = new Date();
    const end = new Date(banner.endDate);
    // Adiciona o fim do dia para a data de expiração
    end.setHours(23, 59, 59, 999);
    return now <= end;
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
    
    // Atualizar ano
    document.querySelectorAll('.footer-year').forEach(el => el.textContent = siteConfig.year);
    
    // Atualizar e-mail no footer
    document.querySelectorAll('.footer-email').forEach(el => {
        if (!isEmpty(siteConfig.email)) {
            el.textContent = siteConfig.email;
            if (el.tagName === 'A') el.href = `mailto:${siteConfig.email}`;
            el.style.display = '';
        } else {
            // Ocultar o elemento pai (parágrafo) se o e-mail estiver vazio
            if (el.closest('p')) {
                el.closest('p').style.display = 'none';
            }
        }
    });
    
    // Atualizar telefone no footer
    document.querySelectorAll('.footer-phone').forEach(el => {
        if (!isEmpty(siteConfig.phone)) {
            el.textContent = siteConfig.phone;
            if (el.tagName === 'A') el.href = `tel:${siteConfig.phone.replace(/\D/g, '')}`;
            el.style.display = '';
        } else {
            // Ocultar o elemento pai (parágrafo) se o telefone estiver vazio
            if (el.closest('p')) {
                el.closest('p').style.display = 'none';
            }
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

    // Atualizar redes sociais no footer
    const socialContainer = document.querySelector('.footer-social-links');
    if (socialContainer) {
        let socialLinksHTML = '';
        
        // Verificar cada rede social e adicionar apenas se não estiver vazia
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
        
        // Se não houver nenhuma rede social, ocultar a seção inteira
        if (socialLinksHTML === '') {
            const socialSection = socialContainer.closest('.footer-social');
            if (socialSection) {
                socialSection.style.display = 'none';
            }
        } else {
            socialContainer.innerHTML = socialLinksHTML;
        }
    }

    const path = window.location.pathname;
    const isHomePage = path.endsWith('/') || path.endsWith('index.html') && !path.includes('/direito-') && !path.includes('/compliance/') && !path.includes('/jurisprudencia/') && !path.includes('/legislacao/');
    
    const isSubPage = path.includes('/direito-') || 
                     path.includes('/compliance/') || 
                     path.includes('/jurisprudencia/') || 
                     path.includes('/legislacao/') ||
                     path.includes('/apoiadores/');

    function setupProgrammaticBanners() {
        const desktopContainer = document.getElementById('banner-desktop-container');
        const middlePostContainer = document.getElementById('banner-post-middle');
        const mobileContainer = document.getElementById('banner-mobile-container');

        function createBannerCarousel(container, bannerList) {
            // Filtrar banners ativos
            let activeBanners = bannerList.filter(isBannerActiveJS);
            
            if (!container || activeBanners.length === 0) {
                if (container) container.style.display = 'none';
                return;
            }

            // Lógica de ordenação
            if (isHomePage) {
                // Na Home, mantém a ordem original do array (ou uma ordem específica se desejado)
                // Aqui estamos apenas mantendo a ordem do config.js
            } else {
                // Em categorias e postagens, embaralha a ordem (Random)
                activeBanners = activeBanners.sort(() => Math.random() - 0.5);
            }
            
            container.innerHTML = ''; // Limpar container
            container.style.overflow = 'hidden';
            container.style.position = 'relative';
            container.style.display = 'block';
            
            let currentIndex = 0; // Começa sempre pelo primeiro da lista (que pode ter sido embaralhada)
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
                a.innerHTML = `<img src="${imgPath}" alt="${banner.name}" title="${banner.name}" style="width: 100%; border-radius: 8px;">`;
                container.appendChild(a);
                return a;
            });

            if (bannerElements.length > 1) {
                setInterval(() => {
                    bannerElements[currentIndex].style.opacity = '0';
                    setTimeout(() => {
                        bannerElements[currentIndex].style.display = 'none';
                        
                        // Próximo banner na ordem (circular)
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
