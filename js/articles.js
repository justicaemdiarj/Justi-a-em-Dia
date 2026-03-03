// Tornar a lista de artigos disponível globalmente para outros scripts
window.articlesData = [
    {
        title: "A Holding do Crime",
        image: "img/holding-do-crime.png",
        description: "Qualquer executivo de uma grande corporação reconheceria a estrutura no documento. Há um conselho deliberativo de elite, uma corregedoria interna, um setor de relações jurídica...",
        link: "compliance/a-holding-do-crime.html"
    },
    {
        title: "O Escudo que o Poder Tenta Dobrar",
        image: "img/o-escudo-que-o-poder-tenta-dobrar.jpg",
        description: "Há uma ironia perversa no coração do sistema antilavagem brasileiro. Os agentes com maior poder de interferência sobre contratos..",
        link: "compliance/o-escudo-que-o-poder-tenta-dobrar.html"
    },
    {
        title: "Marçal e Datena Encerram Batalha Judicial",
        image: "img/a-cadeira-que-virou-acordo.jpg",
        description: "O capítulo judicial da cadeirada mais famosa da política brasileira recente chegou ao fim. A juíza Priscilla Bittar Neves Netto..",
        link: "direito-civil/a-cadeira-que-virou-acordo.html"
    },
    {
        title: "O Escudo Salarial das Guardas Municipais em Santo André",
        image: "img/o-escudo-salarial-dos-guardas-municipais.jpg",
        description: "A mais alta corte do país interveio para proteger o contracheque de servidores que atuam..",
        link: "jurisprudencia/o-escudo-salarial-dos-guardas-municipais.html"
    },
    {
        title: "Vinte Anos de Espera",
        image: "img/vinte-anos-de-espera-de-pm-goiais.jpg",
        description: "Um policial militar de Goiás que ingressou na corporação em 1996 e esperou até 2021..",
        link: "direito-militar/vinte-anos-de-espera-de-pm-goiais.html"
    },
    {
        title: 'O STF e os Limites do Poder Municipal Sobre a Sala de Aula',
        image: 'img/stf-limites-do-poder-municipal-sobre-sala-de-aula.jpg',
        description: 'O Congresso Nacional vota em 2026 projeto de lei inédito na história legislativa brasileira..',
        link: 'legislacao/stf-limites-do-poder-municipal-sobre-sala-de-aula.html'
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
