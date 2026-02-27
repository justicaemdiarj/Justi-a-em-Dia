(function () {

    if (window.floatingMediaInitialized) return;
    window.floatingMediaInitialized = true;

    function loadYouTubeAPI() {
        if (window.YT && window.YT.Player) return;

        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
    }

    function initFloatingMedia() {

        if (typeof siteConfig === 'undefined' || !siteConfig.floatingVideo || !siteConfig.floatingVideo.enabled) {
            return;
        }

        const config = siteConfig.floatingVideo;
        const mediaUrl = config.videoUrl || config.imageUrl || "";
        if (!mediaUrl) return;

        if (config.hideOnMobile && window.innerWidth <= 768) return;

        const isYouTube = mediaUrl.includes('youtube.com') || mediaUrl.includes('youtu.be');
        const isImage = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(mediaUrl.split('?')[0]);

        let videoId = null;
        let ytFloatingPlayer = null;
        let mediaHTML = '';

        /* --------------------------
           EXTRAÇÃO ROBUSTA DO ID
        ---------------------------*/
        if (isYouTube) {

            try {
                const url = new URL(mediaUrl);

                if (url.hostname.includes('youtu.be')) {
                    videoId = url.pathname.replace('/', '').split('?')[0];
                } else if (url.searchParams.get('v')) {
                    videoId = url.searchParams.get('v');
                } else {
                    const parts = url.pathname.split('/');
                    videoId = parts.pop();
                }

            } catch (e) {
                console.error("URL inválida");
            }

            if (!videoId) return;

            loadYouTubeAPI();

            mediaHTML = `<div id="yt-player-${videoId}" style="width:100%;height:100%;position:absolute;top:0;left:0;"></div>`;
        }

        else if (isImage) {
            mediaHTML = `<img src="${mediaUrl}" style="width:100%;height:100%;object-fit:cover;">`;
        }

        else {
            mediaHTML = `
                <video ${config.autoplay ? 'autoplay' : ''} muted ${config.loop ? 'loop' : ''} playsinline
                style="width:100%;height:100%;object-fit:cover;background:#000;">
                    <source src="${mediaUrl}" type="video/mp4">
                </video>
            `;
        }

        /* --------------------------
           CONTAINER PRINCIPAL
        ---------------------------*/
        const floatingDiv = document.createElement('div');

        floatingDiv.style.cssText = `
            position:fixed;
            width:${config.width || 300}px;
            height:${config.height || 170}px;
            ${config.position?.includes('bottom') ? 'bottom' : 'top'}:20px;
            ${config.position?.includes('right') ? 'right' : 'left'}:30px;
            z-index:${config.zIndex || 99999};
            border-radius: 6px;
            overflow:hidden;
            box-shadow:0 15px 40px ;
        
            transition:.3s;
        `;

        /* --------------------------
           HTML INTERNO (OVERLAY)
        ---------------------------*/
        floatingDiv.innerHTML = `
            <div style="position:relative;width:100%;height:100%;">
                
                ${mediaHTML}

                <div style="
                    position:absolute;
                    top:10px;
                    right:10px;
                    display:flex;
                    gap:8px;
                    z-index:999999;
                ">

                    ${(!isImage && config.allowSound) ? `
                        <button id="btn-sound-float" style="
                          ${(!isImage && config.allowSound) ? `
    <button id="btn-sound-float" class="floating-btn">
        🔇
    </button>
` : ''}
                        </button>
                    ` : ''}

                    ${config.allowClose ? `
                        <button id="btn-close-float" style="
                       <button id="btn-close-float" class="floating-btn">
        ✕
    </button>
                    ` : ''}

                </div>
            </div>
        `;

        document.body.appendChild(floatingDiv);

        /* --------------------------
           YOUTUBE PLAYER
        ---------------------------*/
        if (isYouTube && videoId) {

            const playerId = `yt-player-${videoId}`;

            function createPlayer() {

                if (!window.YT || !window.YT.Player) {
                    setTimeout(createPlayer, 300);
                    return;
                }

                new YT.Player(playerId, {
                    videoId: videoId,
                    playerVars: {
                        autoplay: 1,
                        mute: 1,
                        loop: 1,
                        playlist: videoId,
                        controls: config.showControls ? 1 : 0,
                        rel: 0,
                        modestbranding: 1,
                        playsinline: 1,
                        enablejsapi: 1,
                        origin: window.location.origin
                    },
                    events: {
                        onReady: (event) => {

                            ytFloatingPlayer = event.target;
                            event.target.mute();
                            event.target.playVideo();

                            setTimeout(() => {
                                const iframe = document.querySelector(`#${playerId} iframe`);
                                if (iframe) {
                                    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
                                }
                            }, 800);
                        }
                    }
                });
            }

            window.onYouTubeIframeAPIReady = createPlayer;
        }

        /* --------------------------
           BOTÃO FECHAR
        ---------------------------*/
        const btnClose = floatingDiv.querySelector('#btn-close-float');
        if (btnClose) {
            btnClose.onclick = () => {
                floatingDiv.style.opacity = "0";
                floatingDiv.style.transform = "scale(.8)";
                setTimeout(() => floatingDiv.remove(), 300);
            };
        }

        /* --------------------------
           BOTÃO SOM
        ---------------------------*/
        const btnSound = floatingDiv.querySelector('#btn-sound-float');

        if (btnSound) {
            btnSound.onclick = () => {

                if (isYouTube && ytFloatingPlayer) {

                    if (ytFloatingPlayer.isMuted()) {
                        ytFloatingPlayer.unMute();
                        btnSound.innerHTML = "🔊";
                    } else {
                        ytFloatingPlayer.mute();
                        btnSound.innerHTML = "🔇";
                    }

                } else {
                    const video = floatingDiv.querySelector('video');
                    if (video) {
                        video.muted = !video.muted;
                        btnSound.innerHTML = video.muted ? "🔇" : "🔊";
                    }
                }
            };
        }

        /* --------------------------
           RESPONSIVO MOBILE
        ---------------------------*/
        if (window.innerWidth <= 480) {
            floatingDiv.style.width = "280px";
            floatingDiv.style.height = "200px";
            floatingDiv.style.bottom = "10px";
            floatingDiv.style.right = "10px";
            floatingDiv.style.left = "auto";
            floatingDiv.style.top = "auto";
        }
    }

    function start() {
        setTimeout(initFloatingMedia, 600);
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        start();
    } else {
        document.addEventListener('DOMContentLoaded', start);
    }

})();