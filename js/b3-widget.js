/**
 * B3 Stock Widget - HG Finance API Integration
 * Exibe cotações de múltiplas ações da B3 apenas em desktop
 */

class B3Widget {
    constructor() {
        this.container = document.getElementById('b3StocksContainer');
        this.widget = document.getElementById('b3Widget');
        
        // Ações a serem exibidas (customize conforme necessário)
        this.stocks = ['PETR4', 'VALE3', 'ITUB4', 'BBDC4', 'SANB11', 'WEGE3', 'MGLU3', 'BBAS3'];
        
        // HG Finance API
        this.apiUrl = 'https://api.hgbrasil.com/finance';
        this.apiKey = ''; // Deixe vazio para usar sem autenticação
        
        // Verificar se é desktop
        this.isDesktop = window.innerWidth >= 768;
        
        // Inicializar
        if (this.isDesktop ) {
            this.init();
        }
        
        // Listener para redimensionamento
        window.addEventListener('resize', () => {
            const wasDesktop = this.isDesktop;
            this.isDesktop = window.innerWidth >= 768;
            
            if (this.isDesktop && !wasDesktop) {
                this.init();
            } else if (!this.isDesktop && wasDesktop) {
                this.widget.style.display = 'none';
            }
        });
    }

    init() {
        this.fetchStockData();
        
        // Atualizar a cada 5 minutos
        setInterval(() => {
            this.fetchStockData();
        }, 300000);
    }

    async fetchStockData() {
        try {
            if (!this.container) return;
            
            this.container.innerHTML = '<span class="b3-loading">Carregando...</span>';
            
            // Construir URL com parâmetros
            let url = this.apiUrl;
            if (this.apiKey) {
                url += `?key=${this.apiKey}`;
            }
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.results && data.results.stocks) {
                this.renderStocks(data.results.stocks);
            } else {
                throw new Error('Dados inválidos da API');
            }
        } catch (error) {
            console.error('Erro ao buscar dados da B3:', error);
            if (this.container) {
                this.container.innerHTML = '<span class="b3-error">Erro ao carregar</span>';
            }
        }
    }

    renderStocks(allStocks) {
        if (!this.container) return;
        
        this.container.innerHTML = '';
        
        // Filtrar apenas as ações desejadas
        const selectedStocks = this.stocks.map(symbol => {
            // Procurar a ação nos dados retornados
            for (const key in allStocks) {
                if (key === symbol) {
                    return { symbol, ...allStocks[key] };
                }
            }
            return null;
        }).filter(stock => stock !== null);
        
        if (selectedStocks.length === 0) {
            this.container.innerHTML = '<span class="b3-error">Ações não encontradas</span>';
            return;
        }
        
        selectedStocks.forEach(stock => {
            const stockElement = this.createStockElement(stock);
            this.container.appendChild(stockElement);
        });
    }

    createStockElement(stock) {
        const div = document.createElement('div');
        div.className = 'b3-stock-item';
        
        // Extrair dados
        const symbol = stock.symbol || 'N/A';
        const price = stock.price ? parseFloat(stock.price).toFixed(2) : 'N/A';
        const change = stock.change || 0;
        const changePercent = stock.change_percent || 0;
        
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