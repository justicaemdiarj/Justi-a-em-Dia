/**
 * B3 Stock Widget - BRAPI.DEV API Integration
 * Exibe cotações de múltiplas ações da B3 apenas em desktop
 * 
 * Uso: Adicione este arquivo como <script src="js/b3-widget.js"></script>
 * antes de <script src="js/script.js"></script> no index.html
 */

class B3Widget {
    constructor() {
        this.container = document.getElementById('b3StocksContainer');
        this.widget = document.getElementById('b3Widget');
        
        // ===== CUSTOMIZE AQUI =====
        // Ações a serem exibidas (máximo 4 para não ficar muito grande)
        this.stocks = ['PETR4', 'VALE3', 'ITUB4', 'BBDC4'];
        
        // BRAPI.DEV API - CORS Liberado
        this.apiUrl = 'https://brapi.dev/api/quote';
        this.apiKey = ''; // Deixe vazio para usar as ações de teste
        // ========================
        
        // Verificar se é desktop
        this.isDesktop = window.innerWidth >= 768;
        
        // Inicializar
        if (this.isDesktop) {
            this.init();
        }
        
        // Listener para redimensionamento
        window.addEventListener('resize', () => {
            const wasDesktop = this.isDesktop;
            this.isDesktop = window.innerWidth >= 768;
            
            if (this.isDesktop && !wasDesktop) {
                this.init();
            } else if (!this.isDesktop && wasDesktop) {
                if (this.widget) {
                    this.widget.style.display = 'none';
                }
            }
        });
    }

    init() {
        this.fetchStockData();
        
        // Atualizar a cada 5 minutos (300000ms)
        setInterval(() => {
            this.fetchStockData();
        }, 300000);
    }

    async fetchStockData() {
        try {
            if (!this.container) return;
            
            this.container.innerHTML = '<span class="b3-loading">Carregando...</span>';
            
            // Construir URL com os tickers separados por vírgula
            const tickers = this.stocks.join(',');
            let url = `${this.apiUrl}/${tickers}`;
            
            // Adicionar token se houver
            if (this.apiKey) {
                url += `?token=${this.apiKey}`;
            }
            
            console.log('Buscando dados de:', url);
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            console.log('Dados recebidos:', data);
            
            if (data.results && Array.isArray(data.results)) {
                this.renderStocks(data.results);
            } else {
                throw new Error('Formato de dados inválido');
            }
        } catch (error) {
            console.error('Erro ao buscar dados da B3:', error);
            if (this.container) {
                this.container.innerHTML = '<span class="b3-error">Erro ao carregar</span>';
            }
        }
    }

    renderStocks(stocks) {
        if (!this.container) return;
        
        this.container.innerHTML = '';
        
        if (!stocks || stocks.length === 0) {
            this.container.innerHTML = '<span class="b3-error">Nenhuma ação encontrada</span>';
            return;
        }
        
        stocks.forEach(stock => {
            const stockElement = this.createStockElement(stock);
            this.container.appendChild(stockElement);
        });
    }

    createStockElement(stock) {
        const div = document.createElement('div');
        div.className = 'b3-stock-item';
        
        // Extrair dados da resposta da BRAPI
        const symbol = stock.symbol || 'N/A';
        const price = stock.regularMarketPrice ? parseFloat(stock.regularMarketPrice).toFixed(2) : 'N/A';
        const change = stock.regularMarketChange || 0;
        const changePercent = stock.regularMarketChangePercent || 0;
        
        // Determinar classe de cor (positivo/negativo)
        const changeClass = change >= 0 ? 'positive' : 'negative';
        const changeSymbol = change >= 0 ? '+' : '';
        
        div.innerHTML = `
            <span class="b3-stock-symbol">${symbol}</span>
            <span class="b3-stock-price">R$ ${price}</span>
            <span class="b3-stock-change ${changeClass}">
                ${changeSymbol}${changePercent.toFixed(2)}%
            </span>
        `;
        
        return div;
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new B3Widget();
});
