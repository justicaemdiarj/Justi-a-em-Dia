/**
 * Gerenciamento de Status do Site (Modo de Manutenção)
 * Desenvolvido para: Justiça em Dia
 */

const maintenanceConfig = {
    // Defina como "OFF" para ativar o modo de manutenção (oculta o site)
    // Defina como "ON" para deixar o site normal
    // Se houver agendamento, este status será ignorado durante o período agendado
    status: "ON", 

    // Agendamento de Manutenção
    // Formato: { dia: DD, mes: MM, ano: AAAA, hora: HH, minuto: mm }
    // Deixe null se não quiser agendar
    schedule: {
        start: { dia: 17, mes: 2, ano: 2026, hora: 20, minuto: 40 }, // Quando o site fica "OFF"
        end: { dia: 17, mes: 2, ano: 2026, hora: 21, minuto: 59 }    // Quando o site volta "ON"
    },

    // Mensagem que aparecerá quando o site estiver em manutenção
    message: "O site Justiça em Dia está temporariamente em manutenção.",
    subMessage: "Estamos trabalhando para trazer novidades em breve. Agradecemos a sua compreensão.",
    
    // Título da aba do navegador durante a manutenção
    title: "Manutenção - Justiça em Dia"
};

function checkMaintenanceStatus() {
    const now = new Date();
    
    // Se houver agendamento, verifica se estamos dentro do período
    if (maintenanceConfig.schedule && maintenanceConfig.schedule.start && maintenanceConfig.schedule.end) {
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

        // Se a hora atual estiver entre o início e o fim, força o status para OFF
        if (now >= start && now < end) {
            return "OFF";
        }
    }

    // Caso contrário, retorna o status definido manualmente
    return maintenanceConfig.status;
}

function applyMaintenanceMode() {
    const currentStatus = checkMaintenanceStatus();

    // Se o status for ON, não faz nada e deixa o site carregar normalmente
    if (currentStatus === "ON") {
        return;
    }

    // Se o status for OFF, aplica o modo de manutenção
    if (currentStatus === "OFF") {
        // Criar estilos para a tela de manutenção
        const style = document.createElement('style');
        style.innerHTML = `
            body {
                margin: 0;
                padding: 0;
                overflow: hidden; /* Impede scroll */
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
                z-index: 999999; /* Fica acima de tudo */
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
                font-size: 80px;
                color: #c41e3a;
                margin-bottom: 30px;
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
            }
        `;
        document.head.appendChild(style);

        // Função para tentar encontrar o caminho correto da logo
        const getLogoPath = () => {
            const path = window.location.pathname;
            if (path.includes('/direito-') || 
                path.includes('/compliance/') || 
                path.includes('/jurisprudencia/') || 
                path.includes('/legislacao/') ||
                path.includes('/financas/') ||
                path.includes('/recursos-humanos/') ||
                path.includes('/apoiadores/')) {
                return '../img/logo.justica-em-dia.png';
            }
            return 'img/logo.justica-em-dia.png';
        };

        // Criar o HTML da tela de manutenção
        const maintenanceHTML = `
            <div class="maintenance-overlay">
                <div class="maintenance-container">
                    <img src="${getLogoPath()}" alt="Justiça em Dia" class="maintenance-logo" onerror="this.style.display='none'">
                    <div class="maintenance-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <h1 class="maintenance-title">Site em Manutenção</h1>
                    <p class="maintenance-message">${maintenanceConfig.message}</p>
                    <p class="maintenance-submessage">${maintenanceConfig.subMessage}</p>
                </div>
            </div>
        `;

        // Substituir o conteúdo do body imediatamente
        // Usamos um intervalo curto para garantir que o body exista
        const interval = setInterval(() => {
            if (document.body) {
                document.body.innerHTML = maintenanceHTML;
                document.title = maintenanceConfig.title;
                clearInterval(interval);
            }
        }, 10);
    }
}

// Executar a função imediatamente
applyMaintenanceMode();
