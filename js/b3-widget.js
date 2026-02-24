async function carregarAcoes() {
    const container = document.getElementById('b3StocksContainer');
    if (!container) return;

    const acoes = ['PETR4', 'VALE3', 'ITUB4', 'BBDC4'];
    container.innerHTML = "";

    for (const ticker of acoes) {
        try {
            const response = await fetch(`https://brapi.dev/api/quote/${ticker}` );
            const data = await response.json();

            if (data.results && data.results[0]) {
                const stock = data.results[0];
                const change = stock.regularMarketChangePercent || 0;
                const changeClass = change >= 0 ? 'positive' : 'negative';
                
                // Formato em linha única
                const html = `
                    <div class="b3-stock-item">
                        <span class="b3-stock-symbol">${stock.symbol}</span>
                        <span class="b3-stock-price">R$ ${stock.regularMarketPrice.toFixed(2)}</span>
                        <span class="b3-stock-change ${changeClass}">${change >= 0 ? '+' : ''}${change.toFixed(2)}%</span>
                    </div>
                `;
                container.innerHTML += html;
            }
        } catch (e) { console.error(e); }
    }

    // Inicia o carrossel
    const items = container.querySelectorAll('.b3-stock-item');
    if (items.length > 1) {
        let current = 0;
        setInterval(() => {
            current++;
            if (current >= items.length) current = 0;
            // Move exatamente a largura de um item (180px conforme o CSS)
            container.style.transform = `translateX(-${current * 180}px)`;
        }, 4000); 
    }
}

if (window.innerWidth >= 768) {
    document.addEventListener('DOMContentLoaded', carregarAcoes);
}