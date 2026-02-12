// Tornar a lista de artigos disponível globalmente para outros scripts
window.articlesData = [
    {
        title: 'Responsabilidade civil por danos morais nas relações digitais',
        image: 'img/imagem-postagem.png',
        description: 'Análise detalhada sobre responsabilidade civil por danos morais nas relações digitais.',
        link: 'direito-civil/responsabilidade-civil-danos-morais-digitais.html'
    },
    {
        title: 'Validade jurídica dos contratos firmados por meios eletrônicos',
        image: 'img/imagem-postagem.png',
        description: 'Análise detalhada sobre validade jurídica dos contratos firmados por meios eletrônicos.',
        link: 'direito-civil/validade-juridica-contratos-eletronicos.html'
    },
    {
        title: 'Guarda compartilhada e o melhor interesse da criança na prática forense',
        image: 'img/imagem-postagem.png',
        description: 'Análise detalhada sobre guarda compartilhada e o melhor interesse da criança na prática forense.',
        link: 'direito-de-familia/guarda-compartilhada-melhor-interesse-crianca.html'
    },
    {
        title: 'Pensão alimentícia: revisão, exoneração e os limites do dever de sustento',
        image: 'img/imagem-postagem.png',
        description: 'Análise detalhada sobre pensão alimentícia: revisão, exoneração e os limites do dever de sustento.',
        link: 'direito-de-familia/pensao-alimenticia-revisao-exoneracao-limites.html'
    },
    {
        title: 'Quem Audita os Auditores?',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop',
        description: 'A importância da conformidade legal e integridade no ambiente corporativo moderno.',
        link: 'compliance/quem-audita-os-auditores.html'
    },
    {
        title: 'STF e Direitos Fundamentais',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
        description: 'Análise das recentes decisões do Supremo Tribunal Federal sobre garantias constitucionais.',
        link: 'jurisprudencia/index.html'
    },
    {
        title: 'Reforma do Código Penal',
        image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&h=600&fit=crop',
        description: 'Os principais pontos em debate no Congresso Nacional sobre a modernização das leis penais.',
        link: 'direito-penal/index.html'
    },
    {
        title: 'Direitos Trabalhistas 2026',
        image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=600&fit=crop',
        description: 'Como as novas tecnologias estão impactando a regulamentação do trabalho no Brasil.',
        link: 'direito-trabalhista/index.html'
    },
    {
        title: 'Jurisprudência em Foco',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        description: 'Acompanhe as decisões mais relevantes dos tribunais superiores nesta semana.',
        link: 'jurisprudencia/index.html'
    },
    {
        title: 'Direito Civil e Família',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        description: 'Novos entendimentos sobre pensão alimentícia e sucessões no direito brasileiro.',
        link: 'direito-de-familia/index.html'
    },
    {
        title: 'Direito Digital',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
        description: 'Os desafios da proteção de dados e privacidade na era da inteligência artificial.',
        link: 'direito-civil/index.html'
    },
    {
        title: 'Legislação Ambiental',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
        description: 'Novas resoluções e o impacto das políticas de sustentabilidade no cenário jurídico.',
        link: 'legislacao/index.html'
    },
    {
        title: 'Direito Imobiliário',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        description: 'Mudanças nas regras de registro de imóveis e contratos de locação.',
        link: 'direito-civil/index.html'
    }
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
