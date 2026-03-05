

document.addEventListener("DOMContentLoaded", function() {
    // 1. Remover o cabeçalho existente
    const existingHeader = document.querySelector("header.header");
    if (existingHeader) {
        existingHeader.remove();
    }

    // 2. Criar o novo cabeçalho HTML
    const newHeaderHTML = `
        <header class="header">
            <div class="top-bar-container">
                <div class="container">
                    <button class="menu-toggle" id="menuToggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div class="logo">
                        <a href="https://www.justicaemdia.com.br/">
                            <img src="img/logo.justica-em-dia.png" alt="Justiça em Dia" style="height: 90px;">
                        </a>
                    </div>
                    <div class="header-actions">
                        <a href="#" class="action-link">ASSINE</a>
                        <a href="#" class="action-link">LOGIN</a>
                        <button class="search-toggle" id="searchToggle"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
            <nav class="main-nav desktop-menu-container">
                <div class="container">
                    <ul class="nav-list desktop-nav-list">
                        <!-- Itens do menu principal serão injetados aqui -->
                    </ul>
                </div>
            </nav>
            <!-- Overlay de Busca -->
            <div class="search-overlay" id="searchOverlay">
                <div class="container">
                    <input type="text" id="searchOverlayInput" placeholder="Digite sua busca aqui..." />
                    <button class="search-overlay-btn"><i class="fas fa-search"></i></button>
                    <button class="search-overlay-close" id="searchOverlayClose"><i class="fas fa-times"></i></button>
                </div>
            </div>
        </header>
        <!-- Sidebar para Mobile -->
        <div class="mobile-sidebar" id="mobileSidebar">
            <button class="sidebar-close" id="sidebarClose"><i class="fas fa-times"></i></button>
            <ul class="sidebar-nav-list">
                <!-- Categorias e links adicionais para mobile serão injetados aqui -->
            </ul>
        </div>
    `;

    // 3. Inserir o novo cabeçalho no início do body
    document.body.insertAdjacentHTML("afterbegin", newHeaderHTML);

    // 4. Configurar interações (event listeners)
    const menuToggle = document.getElementById("menuToggle");
    const mobileSidebar = document.getElementById("mobileSidebar");
    const sidebarClose = document.getElementById("sidebarClose");
    const searchToggle = document.getElementById("searchToggle");
    const searchOverlay = document.getElementById("searchOverlay");
    const searchOverlayInput = document.getElementById("searchOverlayInput");
    const searchOverlayClose = document.getElementById("searchOverlayClose");

    // Toggle Mobile Sidebar
    if (menuToggle && mobileSidebar && sidebarClose) {
        menuToggle.addEventListener("click", function() {
            mobileSidebar.classList.add("active");
        });

        sidebarClose.addEventListener("click", function() {
            mobileSidebar.classList.remove("active");
        });

        // Fechar sidebar ao clicar fora (opcional)
        document.addEventListener("click", function(event) {
            if (!mobileSidebar.contains(event.target) && !menuToggle.contains(event.target) && mobileSidebar.classList.contains("active")) {
                mobileSidebar.classList.remove("active");
            }
        });
    }

    // Toggle Search Overlay
    if (searchToggle && searchOverlay && searchOverlayClose) {
        searchToggle.addEventListener("click", function() {
            searchOverlay.classList.add("active");
            searchOverlayInput.focus(); // Foca no input
        });

        searchOverlayClose.addEventListener("click", function() {
            searchOverlay.classList.remove("active");
        });

        // Fechar overlay ao clicar fora (opcional)
        searchOverlay.addEventListener("click", function(e) {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove("active");
            }
        });
    }

    // 5. Popular o menu principal e o sidebar mobile (exemplo)
    // Você precisará adaptar esta parte para carregar seus itens de menu reais.
    // Se você já usa js/config.js para carregar o menu, pode adaptar a lógica aqui.
    const menuItems = [
        { text: "ÚLTIMAS", href: "/ultimas.html" },
        { text: "POLÍTICA", href: "/politica/index.html" },
        { text: "ECONOMIA", href: "/economia/index.html" },
        { text: "SOCIEDADE", href: "/sociedade/index.html" },
        { text: "JUSTIÇA", href: "/jurisprudencia/index.html" },
        { text: "MUNDO", href: "/mundo/index.html" },
        { text: "EDUCAÇÃO", href: "/educacao/index.html" },
        { text: "BLOGS", href: "/blogs/index.html" }
    ];

    const desktopNavList = document.querySelector(".desktop-nav-list");
    const sidebarNavList = document.querySelector(".sidebar-nav-list");

    menuItems.forEach(item => {
        // Para o menu desktop
        const liDesktop = document.createElement("li");
        const aDesktop = document.createElement("a");
        aDesktop.href = item.href;
        aDesktop.textContent = item.text;
        liDesktop.appendChild(aDesktop);
        desktopNavList.appendChild(liDesktop);

        // Para o sidebar mobile
        const liMobile = document.createElement("li");
        const aMobile = document.createElement("a");
        aMobile.href = item.href;
        aMobile.textContent = item.text;
        liMobile.appendChild(aMobile);
        sidebarNavList.appendChild(liMobile);
    });

    // Adicionar links adicionais ao sidebar mobile, se houver
    const additionalMobileLinks = [
        { text: "ASSINE", href: "#" },
        { text: "LOGIN", href: "#" },
        { text: "CONTATO", href: "/contato.html" },
        { text: "QUEM SOMOS", href: "/quem-somos.html" }
    ];

    additionalMobileLinks.forEach(item => {
        const liMobile = document.createElement("li");
        const aMobile = document.createElement("a");
        aMobile.href = item.href;
        aMobile.textContent = item.text;
        liMobile.appendChild(aMobile);
        sidebarNavList.appendChild(liMobile);
    });

});