(function () {
    'use strict';

    const CONFIG = {
        enabled: false,
        allowedPages: ["banco-master-compliance-gestao-fraudulenta-temeraria-limites-governanca.html","o-escudo-que-o-poder-tenta-dobrar.html","quem-audita-os-auditores.html"],
        // Pode ser:
        // - YouTube: https://www.youtube.com/watch?v=3MJslaIGvGQ
        // - Vimeo: https://vimeo.com/123456789
       //  - Local/Direto: img/banner-apoiadores/romer-carvalho-compliance.mp4;
        videoUrl: "../img/banner-apoiadores/romer-carvalho-compliance.mov",
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

    if (!CONFIG.enabled) return;

    function getCurrentFile() {
        let path = window.location.pathname;
        if (path.endsWith("/")) return "index.html";
        let file = path.split("/").pop();
        return (file === "" ? "index.html" : file).toLowerCase();
    }

    function pageAllowed() {
        if (CONFIG.allowedPages === "full") return true;
        if (!Array.isArray(CONFIG.allowedPages)) return false;
        const currentFile = getCurrentFile();
        return CONFIG.allowedPages.map(p => p.toLowerCase()).includes(currentFile);
    }

    if (!pageAllowed() || document.getElementById("floating-video-pag-vaga-container")) return;

    function getVideoData(url) {
        // YouTube Regex (vários formatos)
        const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
        const ytMatch = url.match(ytRegex);
        if (ytMatch) {
            const id = ytMatch[1];
            // Parâmetros do YouTube para autoplay e loop
            const params = [
                `autoplay=${CONFIG.autoplay ? 1 : 0}`,
                `mute=${CONFIG.muted ? 1 : 0}`,
                `controls=${CONFIG.controls ? 1 : 0}`,
                `loop=${CONFIG.loop ? 1 : 0}`,
                `playlist=${id}`,
                `rel=0`,
                `modestbranding=1`
            ].join('&');
            return { type: 'iframe', url: `https://www.youtube.com/embed/${id}?${params}` };
        }

        // Vimeo Regex
        const vimeoRegex = /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([0-9]+)/i;
        const vimeoMatch = url.match(vimeoRegex);
        if (vimeoMatch) {
            const id = vimeoMatch[1];
            const params = [
                `autoplay=${CONFIG.autoplay ? 1 : 0}`,
                `muted=${CONFIG.muted ? 1 : 0}`,
                `loop=${CONFIG.loop ? 1 : 0}`,
                `controls=${CONFIG.controls ? 1 : 0}`
            ].join('&');
            return { type: 'iframe', url: `https://player.vimeo.com/video/${id}?${params}` };
        }

        // Caso contrário, assume vídeo direto (MP4, WebM ou caminho local)
        return { type: 'video', url: url };
    }

    function initWidget() {
        if (CONFIG.hideOnMobile && window.innerWidth <= 768) return;

        const videoData = getVideoData(CONFIG.videoUrl);
        const container = document.createElement("div");
        container.id = "floating-video-pag-vaga-container";
        
        // Estilos base do container
        Object.assign(container.style, {
            position: "fixed",
            width: `min(90vw, ${CONFIG.width}px)`,
            aspectRatio: "16/9",
            zIndex: CONFIG.zIndex,
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            background: "#000",
            opacity: "0",
            transition: "opacity 0.3s ease"
        });

        // Posicionamento
        if (CONFIG.position.includes("bottom")) container.style.bottom = "25px";
        else container.style.top = "25px";

        if (CONFIG.position.includes("right")) container.style.right = "25px";
        else container.style.left = "25px";

        // Renderização do vídeo
        if (videoData.type === 'iframe') {
            const iframe = document.createElement("iframe");
            iframe.src = videoData.url;
            iframe.style.cssText = "width:100%; height:100%; border:none;";
            iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
            container.appendChild(iframe);
        } else {
            const video = document.createElement("video");
            video.src = videoData.url;
            video.style.cssText = "width:100%; height:100%; object-fit:cover;";
            video.playsInline = true;
            if (CONFIG.autoplay) video.autoplay = true;
            if (CONFIG.muted) video.muted = true;
            if (CONFIG.loop) video.loop = true;
            if (CONFIG.controls) video.controls = true;
            container.appendChild(video);
        }

        // Botão Fechar
        if (CONFIG.allowClose) {
            const close = document.createElement("div");
            close.innerHTML = "✕";
            Object.assign(close.style, {
                position: "absolute", top: "10px", right: "10px", width: "30px", height: "30px",
                borderRadius: "50%", background: "rgba(0,0,0,0.7)", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", fontSize: "16px", zIndex: "100"
            });
            close.onclick = (e) => { e.stopPropagation(); container.remove(); };
            container.appendChild(close);
        }

        // Overlay de Link (se houver)
        if (CONFIG.link) {
            const overlay = document.createElement("div");
            Object.assign(overlay.style, {
                position: "absolute", top: "0", left: "0", width: "100%", height: "100%",
                cursor: "pointer", zIndex: "50"
            });
            overlay.onclick = () => window.open(CONFIG.link, CONFIG.openInNewTab ? "_blank" : "_self");
            container.appendChild(overlay);
        }

        document.body.appendChild(container);
        setTimeout(() => container.style.opacity = "1", 50);
    }

    // Tenta carregar no load, ou imediatamente se já carregado
    if (document.readyState === "complete") {
        setTimeout(initWidget, CONFIG.delay);
    } else {
        window.addEventListener("load", () => setTimeout(initWidget, CONFIG.delay));
    }

})();