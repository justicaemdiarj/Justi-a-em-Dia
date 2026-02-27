// ========================================================================
// FLOATING VIDEO - VERSÃO DEFINITIVA PARA HTML PURO
// ========================================================================

(function () {
    'use strict';

    // ====================================================================
    // CONFIGURAÇÃO (EDITE APENAS AQUI)
    // ====================================================================

    const CONFIG = {

        enabled: true,

        // "full" = todas as páginas
        // Exemplo: ["index.html", "compliance.html"]
        allowedPages: "full",

        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",

        link: "",
        openInNewTab: true,

        position: "bottom-right",
        width: 360,
        zIndex: 999999,

        autoplay: true,
        muted: true,
        loop: true,
        controls: true,

        allowClose: true,
        hideOnMobile: false,

        delay: 300
    };

    // ====================================================================
    // NÃO EDITAR ABAIXO
    // ====================================================================

    if (!CONFIG.enabled) return;

    function getCurrentFile() {

        let path = window.location.pathname;

        // Se terminar com "/", assume index.html
        if (path.endsWith("/")) return "index.html";

        let file = path.split("/").pop();

        if (file === "") return "index.html";

        return file.toLowerCase();
    }

    function pageAllowed() {

        if (CONFIG.allowedPages === "full") return true;

        if (!Array.isArray(CONFIG.allowedPages)) return false;

        const currentFile = getCurrentFile();

        return CONFIG.allowedPages
            .map(p => p.toLowerCase())
            .includes(currentFile);
    }

    if (!pageAllowed()) return;

    if (document.getElementById("floating-video-container")) return;

    window.addEventListener("load", function () {

        setTimeout(function () {

            if (CONFIG.hideOnMobile && window.innerWidth <= 768) return;

            const container = document.createElement("div");
            container.id = "floating-video-container";

            container.style.position = "fixed";
            container.style.width = "min(90vw," + CONFIG.width + "px)";
            container.style.aspectRatio = "16/9";
            container.style.zIndex = CONFIG.zIndex;
            container.style.borderRadius = "12px";
            container.style.overflow = "hidden";
            container.style.boxShadow = "0 20px 50px rgba(0,0,0,0.5)";
            container.style.background = "#000";
            container.style.opacity = "0";
            container.style.transition = "opacity 0.3s ease";

            if (CONFIG.position.includes("bottom")) {
                container.style.bottom = "25px";
            } else {
                container.style.top = "25px";
            }

            if (CONFIG.position.includes("right")) {
                container.style.right = "25px";
            } else {
                container.style.left = "25px";
            }

            const video = document.createElement("video");
            video.src = CONFIG.videoUrl;
            video.style.width = "100%";
            video.style.height = "100%";
            video.style.objectFit = "cover";
            video.playsInline = true;

            if (CONFIG.autoplay) video.autoplay = true;
            if (CONFIG.muted) video.muted = true;
            if (CONFIG.loop) video.loop = true;
            if (CONFIG.controls) video.controls = true;

            container.appendChild(video);

            if (CONFIG.allowClose) {

                const close = document.createElement("div");
                close.innerHTML = "✕";

                close.style.position = "absolute";
                close.style.top = "10px";
                close.style.right = "10px";
                close.style.width = "30px";
                close.style.height = "30px";
                close.style.borderRadius = "50%";
                close.style.background = "rgba(0,0,0,0.7)";
                close.style.color = "#fff";
                close.style.display = "flex";
                close.style.alignItems = "center";
                close.style.justifyContent = "center";
                close.style.cursor = "pointer";
                close.style.fontSize = "16px";

                close.addEventListener("click", function (e) {
                    e.stopPropagation();
                    container.remove();
                });

                container.appendChild(close);
            }

            if (CONFIG.link) {
                container.addEventListener("click", function (e) {

                    if (e.target.closest("video") || e.target.innerHTML === "✕") {
                        return;
                    }

                    window.open(
                        CONFIG.link,
                        CONFIG.openInNewTab ? "_blank" : "_self"
                    );
                });
            }

            document.body.appendChild(container);

            setTimeout(function () {
                container.style.opacity = "1";
            }, 50);

        }, CONFIG.delay);

    });

})();
