// Tornar a lista de artigos disponível globalmente para outros scripts
window.articlesData = [
    {
        title: 'Validade jurídica dos contratos',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        description: 'Análise detalhada sobre validade jurídica dos contratos firmados por meios eletrônicos.',
        link: 'direito-civil/validade-juridica-contratos-eletronicos.html'
    },
    {
        title: 'Guarda compartilhada',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
        description: 'Análise detalhada sobre guarda compartilhada e o melhor interesse da criança na prática forense.',
        link: 'direito-de-familia/guarda-compartilhada-melhor-interesse-crianca.html'
    },
    {
        title: 'Quem Audita os Auditores?',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop',
        description: 'A importância da conformidade legal e integridade no ambiente corporativo moderno.',
        link: 'compliance/quem-audita-os-auditores.html'
    },
    {
        title: 'Responsabilidade civil por danos morais',
        image: 'img/Responsabilidade-civil-por-danos-morais.jpg',
        description: 'Análise detalhada sobre responsabilidade civil por danos morais nas relações digitais.',
        link: 'direito-civil/responsabilidade-civil-danos-morais-digitais.html'
    },
    {
        title: 'Pensão alimentícia e dever de sustento',
        image: 'img/pensao-alimenticia.png',
        description: 'Análise detalhada sobre pensão alimentícia: revisão, exoneração e os limites do dever de sustento.',
        link: 'direito-de-familia/pensao-alimenticia-revisao-exoneracao-limites.html'
    },
    {
        title: 'Prisão preventiva',
        image: 'img/Prisao-preventiva.png',
        description: 'prisão preventiva, modalidade de prisão cautelar regulamentada pelos artigos 311 a 316 do Código de Processo Penal',
        link: 'direito-penal/prisao-preventiva-requisitos-abusos.html'
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) return;

    // Limpa o grid antes de adicionar (caso o script rode mais de uma vez)
    articlesGrid.innerHTML = '';

    window.articlesData.forEach((article) => {
        const card = document.createElement('div');
        card.classList.add('article-card');
        
        card.innerHTML = `<a href="${article.link || '#'}" style="text-decoration: none; color: inherit;">
            <img src="${article.image}" alt="${article.title}" loading="lazy">
            <div class="article-overlay">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
            </div>
        </a>`;
        
        articlesGrid.appendChild(card);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.article-card').forEach(card => observer.observe(card));
});
