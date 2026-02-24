/**
 * B3 Stock Widget - VERSÃO CORRIGIDA
 * API: brapi.dev (Gratuita)
 */

class B3Widget {
    constructor() {
        this.container = document.getElementById('b3StocksContainer');
        this.widget = document.getElementById('b3Widget');
        
        // Configuração inicial
        this.stocks = ['PETR4', 'VALE3', 'ITUB4', 'BBDC4'];
        this.apiUrl = 'https://brapi.dev/api/quote';
        
        // Busca o token se existir no localStorage
        this.apiKey = localStorage.getItem('brapiToken' ) || '';
        
        this.isDesktop = window.innerWidth >= 768;
        
        if (this.isDesktop) {
            this.init();
        }
        
        window.addEventListener('resize', () => {
            const wasDesktop = this.isDesktop;
            this.isDesktop = window.innerWidth >= 768;
            if (this.isDesktop && !wasDesktop) this.init();
        });
    }

    init() {
        this.fetchStockData();
        // Atualiza a cada 5 minutos
        setInterval(() => this.fetchStockData(), 300000);
    }

    async fetchStockData() {
        try {
            if (!this.container) return;
            this.container.innerHTML = '<span class="b3-loading">Carregando...</span>';
            
            const tickers = this.stocks.join(',');
            let url = `${this.apiUrl}/${tickers}`;
            
            const headers = {};
            if (this.apiKey) headers['Authorization'] = `Bearer ${this.apiKey}`;
            
            const response = await fetch(url, { headers });
            
            if (!response.ok) throw new Error(`Erro: ${response.status}`);
            
            const data = await response.json();
            
            if (data.results) {
                this.renderStocks(data.results);
            }
        } catch (error) {
            console.error('Erro na API:', error);
            if (this.container) this.container.innerHTML = '<span class="b3-error">Indisponível</span>';
        }
    }

    renderStocks(stocks) {
        this.container.innerHTML = '';
        stocks.forEach(stock => {
            const div = document.createElement('div');
            div.className = 'b3-stock-item';
            
            const price = stock.regularMarketPrice ? stock.regularMarketPrice.toFixed(2) : '---';
            const change = stock.regularMarketChangePercent || 0;
            const changeClass = change >= 0 ? 'positive' : 'negative';
            const symbol = change >= 0 ? '+' : '';
            
            div.innerHTML = `
                <span class="b3-stock-symbol">${stock.symbol}</span>
                <span class="b3-stock-price">R$ ${price}</span>
                <span class="b3-stock-change ${changeClass}">${symbol}${change.toFixed(2)}%</span>
            `;
            this.container.appendChild(div);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new B3Widget());