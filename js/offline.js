/**
 * Gerenciamento de Status do Site (Modo de Manutenção) com Cronômetro
 * Desenvolvido para: Justiça em Dia
 */

const maintenanceConfig = {
    // Defina como "OFF" para ativar o modo de manutenção manualmente
    // Defina como "ON" para deixar o site normal
    status: "ON", 

    // Agendamento de Manutenção
    // Formato: { dia: DD, mes: MM, ano: AAAA, hora: HH, minuto: mm }
    schedule: {
        start: { dia: 17, mes: 2, ano: 2026, hora: 20, minuto: 40 }, // Quando o site fica "OFF"
        end: { dia: 18, mes: 2, ano: 2026, hora: 23, minuto: 59 }    // Quando o site volta "ON"
    },

    // Mensagem que aparecerá quando o site estiver em manutenção
    message: "O site Justiça em Dia está temporariamente em manutenção.",
    subMessage: "Estamos trabalhando para trazer novidades em breve. O site voltará ao ar em:",
    
    // Título da aba do navegador durante a manutenção
    title: "Manutenção - Justiça em Dia"
};

function getMaintenanceDates() {
    if (!maintenanceConfig.schedule || !maintenanceConfig.schedule.start || !maintenanceConfig.schedule.end) {
        return null;
    }

    const start = new Date(
        maintenanceConfig.schedule.start.ano,
        maintenanceConfig.schedule.start.mes - 1,
        maintenanceConfig.schedule.start.dia,
        maintenanceConfig.schedule.start.hora,
        maintenanceConfig.schedule.start.minuto
    );
    
    const end = new Date(
        maintenanceConfig.schedule.end.ano,
        maintenanceConfig.schedule.end.mes - 1,
        maintenanceConfig.schedule.end.dia,
        maintenanceConfig.schedule.end.hora,
        maintenanceConfig.schedule.end.minuto
    );

    return { start, end };
}

function checkMaintenanceStatus() {
    const now = new Date();
    const dates = getMaintenanceDates();
    
    if (dates) {
        // Se a hora atual estiver entre o início e o fim, força o status para OFF
        if (now >= dates.start && now < dates.end) {
            return "OFF";
        }
    }

    return maintenanceConfig.status;
}

function applyMaintenanceMode() {
    const currentStatus = checkMaintenanceStatus();

    if (currentStatus === "ON") {
        return;
    }

    if (currentStatus === "OFF") {
        const style = document.createElement('style');
        style.innerHTML = `
            body {
                margin: 0;
                padding: 0;
                overflow: hidden;
                background-color: #fff;
            }
            .maintenance-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 999999;
                font-family: 'Montserrat', sans-serif;
                text-align: center;
                padding: 20px;
            }
            .maintenance-container {
                max-width: 600px;
            }
            .maintenance-logo {
                height: 90px;
                margin-bottom: 40px;
            }
            .maintenance-icon {
                font-size: 60px;
                color: #c41e3a;
                margin-bottom: 20px;
            }
            .maintenance-title {
                font-size: 28px;
                font-weight: 800;
                color: #333;
                margin-bottom: 20px;
                text-transform: uppercase;
            }
            .maintenance-message {
                font-size: 18px;
                color: #666;
                line-height: 1.6;
                margin-bottom: 10px;
            }
            .maintenance-submessage {
                font-size: 15px;
                color: #999;
                margin-bottom: 30px;
            }
            /* Estilos do Cronômetro */
            .countdown-container {
                display: flex;
                justify-content: center;
                gap: 15px;
                margin-top: 20px;
            }
            .countdown-item {
                background: #f4f4f4;
                padding: 15px;
                border-radius: 10px;
                min-width: 80px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            }
            .countdown-value {
                display: block;
                font-size: 24px;
                font-weight: 800;
                color: #c41e3a;
            }
            .countdown-label {
                font-size: 12px;
                color: #777;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
        `;
        document.head.appendChild(style);

        const getLogoPath = () => {
            let prefix = '';
            const scripts = document.getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                const src = scripts[i].getAttribute('src');
                if (src && src.includes('js/offline.js')) {
                    const parts = src.split('js/offline.js');
                    prefix = parts[0];
                    break;
                }
            }
            return prefix + 'img/logo.justica-em-dia.png';
        };

        const maintenanceHTML = `
            <div class="maintenance-overlay">
                <div class="maintenance-container">
                    <img src="${getLogoPath()}" alt="Justiça em Dia" class="maintenance-logo" onerror="this.style.display='none'">
                    <div class="maintenance-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h1 class="maintenance-title">Site em Manutenção</h1>
                    <p class="maintenance-message">${maintenanceConfig.message}</p>
                    <p class="maintenance-submessage">${maintenanceConfig.subMessage}</p>
                    
                    <div class="countdown-container" id="maintenance-countdown">
                        <div class="countdown-item">
                            <span class="countdown-value" id="days">00</span>
                            <span class="countdown-label">Dias</span>
                        </div>
                        <div class="countdown-item">
                            <span class="countdown-value" id="hours">00</span>
                            <span class="countdown-label">Horas</span>
                        </div>
                        <div class="countdown-item">
                            <span class="countdown-value" id="minutes">00</span>
                            <span class="countdown-label">Min</span>
                        </div>
                        <div class="countdown-item">
                            <span class="countdown-value" id="seconds">00</span>
                            <span class="countdown-label">Seg</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const interval = setInterval(() => {
            if (document.body) {
                document.body.innerHTML = maintenanceHTML;
                document.title = maintenanceConfig.title;
                startCountdown();
                clearInterval(interval);
            }
        }, 10);
    }
}

function startCountdown() {
    const dates = getMaintenanceDates();
    if (!dates) return;

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = dates.end.getTime() - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            window.location.reload(); // Recarrega o site quando o tempo acaba
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const dEl = document.getElementById("days");
        const hEl = document.getElementById("hours");
        const mEl = document.getElementById("minutes");
        const sEl = document.getElementById("seconds");

        if (dEl) dEl.innerText = days.toString().padStart(2, '0');
        if (hEl) hEl.innerText = hours.toString().padStart(2, '0');
        if (mEl) mEl.innerText = minutes.toString().padStart(2, '0');
        if (sEl) sEl.innerText = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Executar a função imediatamente
applyMaintenanceMode();
