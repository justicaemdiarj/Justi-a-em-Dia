/**
 * Gerenciamento de Status do Site (Manutenção)
 * Justiça em Dia
 */

(function() {
    const siteConfig = {
        // Mude para "OFF" para ativar o modo de manutenção
        status: "ON", 
        
        maintenanceTitle: "Site em Manutenção",
        maintenanceMessage: "O portal Justiça em Dia está passando por atualizações importantes para oferecer uma melhor experiência jurídica para você.",
        maintenanceSubMessage: "Voltaremos em breve. Agradecemos a sua compreensão.",
        logoUrl: "img/logo.justica-em-dia.png"
    };

    function activateMaintenance() {
        // Bloqueia o carregamento de outros recursos se possível
        if (window.stop) window.stop();

        // Determinar o caminho correto da logo baseado na profundidade da URL
        const pathSegments = window.location.pathname.split('/').filter(s => s.length > 0);
        // Se terminar em .html, o último segmento é o arquivo, não conta como pasta
        const isFile = pathSegments.length > 0 && pathSegments[pathSegments.length - 1].includes('.');
        const depth = isFile ? pathSegments.length - 1 : pathSegments.length;
        
        let logoPath = siteConfig.logoUrl;
        if (depth > 0) {
            logoPath = "../".repeat(depth) + siteConfig.logoUrl;
        }

        const maintenanceHTML = `
            <div id="maintenance-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:99999999;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:'Montserrat',sans-serif;text-align:center;padding:20px;box-sizing:border-box;">
                <div style="max-width:700px;">
                    <img src="${logoPath}" alt="Justiça em Dia" style="width:250px;margin-bottom:40px;" onerror="this.src='https://www.justicaemdia.com.br/img/logo.justica-em-dia.png'">
                    <div style="font-size:80px;color:#c41e3a;margin-bottom:20px;">
                        <i class="fas fa-tools"></i>
                    </div>
                    <h1 style="font-size:32px;font-weight:800;color:#333;margin:20px 0;text-transform:uppercase;">${siteConfig.maintenanceTitle}</h1>
                    <p style="font-size:20px;color:#555;line-height:1.6;margin-bottom:20px;">${siteConfig.maintenanceMessage}</p>
                    <p style="font-size:16px;color:#888;margin-bottom:40px;">${siteConfig.maintenanceSubMessage}</p>
                    <div style="margin-top:30px;padding:15px;border-top:1px solid #eee;color:#999;font-size:14px;">
                        &copy; ${new Date().getFullYear()} Justiça em Dia - Todos os direitos reservados.
                    </div>
                </div>
            </div>
            <style>
                body { overflow: hidden !important; margin: 0 !important; padding: 0 !important; }
                #maintenance-overlay i { font-family: "Font Awesome 6 Free"; font-weight: 900; }
            </style>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap" rel="stylesheet">
        `;

        // Função para aplicar o HTML
        const apply = () => {
            document.documentElement.innerHTML = `<html><head><title>${siteConfig.maintenanceTitle}</title><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>${maintenanceHTML}</body></html>`;
        };

        if (document.body) {
            apply();
        } else {
            document.addEventListener('DOMContentLoaded', apply);
            // Backup caso o DOMContentLoaded demore
            window.onload = apply;
        }
    }

    // Execução imediata
    if (siteConfig.status === "OFF") {
        activateMaintenance();
        // Força a verificação contínua para evitar que outros scripts sobrescrevam
        const interval = setInterval(() => {
            if (siteConfig.status === "OFF" && !document.getElementById('maintenance-overlay')) {
                activateMaintenance();
            } else if (siteConfig.status === "ON") {
                clearInterval(interval);
            }
        }, 500);
    }
})();
