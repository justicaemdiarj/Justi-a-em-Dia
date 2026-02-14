// Tornar a lista de artigos disponível globalmente para outros scripts
window.articlesData = [
    {
        title: "O Testamento Digital",
        image: "https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?w=1200&q=80",
        description: "O tabelionato de notas em São Paulo recebe o casal de noivos com documentação completa para lavrar pacto antenupcial. Além das cláusulas tradicionais ...",
        link: "direito-de-familia/o-testamento-digital-quando-o-amor-precisa-contemplar-bitcoins-e-senhas.html"
    },
    {
        title: "O Amor Que Se Cobra na Justica",
        image: "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=1200&q=80",
        description: "O escritório de advocacia em Brasília recebe, com frequência crescente, consultas inusitadas: adultos que desejam processar avós por abandono afetivo ...",
        link: "direito-de-familia/o-amor-que-se-cobra-na-justica-quando-a-ausencia-dos-avos-gera-indenizacao.html"
    },
    {
        title: "A Armadilha do Crédito Fácil",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        description: "O Brasil registra atualmente mais de 72 milhões de pessoas negativadas, segundo dados da Confederação Nacional de Dirigentes Lojistas. Desse contingen...",
        link: "direito-civil/a-armadilha-do-credito-facil-como-o-superendividamento-captura-os-mais-vulneraveis.html"
    },
    {
        title: "Quem Paga a Conta Quando a Máquina Erra?",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
        description: "A proliferação acelerada de sistemas de inteligência artificial no cotidiano brasileiro — de algoritmos que concedem crédito a carros autônomos que ci...",
        link: "direito-civil/a-encruzilhada-da-responsabilidade-quem-paga-a-conta-quando-a-maquina-erra.html"
    },
    {
        title: "Contratos Eletrônicos e a Revolução do Direito Negocial",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
        description: "Bilhões de contratos são firmados diariamente sem que uma única folha de papel seja impressa. A compra de passagens aéreas, a contratação de serviços ...",
        link: "direito-civil/a-era-digital-do-pacta-sunt-servanda-contratos-eletronicos-e-a-revolucionaria-silenciosa-do-direito-negocial.html"
    },
    {
        title: "Os Limites da Responsabilidade Civil na Medicina e Estética",
        image: "img/cirurgia-estetica.jpg",
        description: "A relação médico-paciente encerra peculiaridade que a distingue de quase todas as demais relações profissionais: não há garantia de resultado. O médic...",
        link: "direito-civil/bisturi-e-balanca-da-justica-os-limites-da-responsabilidade-civil-na-medicina-e-estetica.html"
    },
    {
        title: "Os Contornos Jurídicos da Memória na Era Digital",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        description: "Quando o Supremo Tribunal Federal, em fevereiro de 2021, julgou improcedente o Recurso Extraordinário 1.010.606 (Tema 786 da repercussão geral), decre...",
        link: "direito-civil/o-direito-de-nao-ser-lembrado-os-contornos-juridicos-da-memoria-na-era-digital.html"
    },
    {
        title: "Quando a Liberdade de Expressão Vira Linchamento Digital",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
        description: "A migração do debate público para as plataformas digitais converteu cada usuário em potencial formador de opinião — e em potencial réu de ação indeniz...",
        link: "direito-civil/o-tribunal-das-redes-quando-a-liberdade-de-expressao-vira-linchamento-digital.html"
    },
    {
        title: 'Validade jurídica dos contratos',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        description: 'Análise detalhada sobre validade jurídica dos contratos firmados por meios eletrônicos.',
        link: 'direito-civil/validade-juridica-contratos-eletronicos.html'
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
