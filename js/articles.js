// Tornar a lista de artigos disponível globalmente para outros scripts
window.articlesData = [
    {
        title: "Responsabilidade Objetiva e Nexo Causal no STJ",
        image: "img/responsabilidade-objetiva-stj-precedentes.jpg",
        description: "A responsabilidade civil figura entre os terrenos mais complexos e controvertidos do Direito Civil brasileiro. Décadas de construção...",
        link: "direito-civil/responsabilidade-objetiva-stj-precedentes.html"
    },
    {
        title: "Instagram Pode Entrar na Partilha de Bens?",
        image: "img/instagram-perfil-partilha-bens-divorcio.jpg",
        description: "Perfil no Instagram pode ser partilhado no divórcio quando configurado como ativo intangível com valor econômico constituído durante a relação conjugal...",
        link: "direito-de-familia/instagram-perfil-partilha-bens-divorcio.html"
    },
    {
        title: "Operação Argos: PF Age Contra Abuso Sexual Infantil",
        image: "img/operacao-argos-pf-abuso-sexual-infantojuvenil-porto-velho.jpg",
        description: "A Polícia Federal deflagrou a Operação Argos em Porto Velho para combater crimes de abuso sexual infantojuvenil, cumprindo mandado de busca...",
        link: "direito-penal/operacao-argos-pf-abuso-sexual-infantojuvenil-porto-velho.html"
    },
    {
        title: "O MPSE Coloca o Assédio na Pauta Institucional e Lidera Debate",
        image: "img/assedio-servico-publico-mpse-palestra-prevencao.jpg",
        description: "O Ministério Público de Sergipe promoveu palestra sobre prevenção do assédio moral e sexual no setor público, reforçando a cultura do respeito nas relações de trabalho...",
        link: "direito-trabalhista/assedio-servico-publico-mpse-palestra-prevencao.html"
    },
    {
        title: "Justiça Militar Condena PM por Lesão Grave no Recife",
        image: "img/pm-condenado-lesao-grave-bala-borracha-passinho-recife.jpg",
        description: "A Justiça Militar de Pernambuco encerrou, em 13 de fevereiro de 2026, uma longa persecução penal..",
        link: "direito-militar/pm-condenado-lesao-grave-bala-borracha-passinho-recife.html"
    },
    {
        title: 'Vorcaro Preso Novamente na Operação Compliance Zero',
        image: 'img/vorcaro-preso-operacao-compliance-zero-banco-master.jpg',
        description: 'A Polícia Federal prendeu novamente Daniel Vorcaro, dono do Banco Master, na terceira fase da Operação Compliance Zero..',
        link: 'compliance/vorcaro-preso-operacao-compliance-zero-banco-master.html'
    },
    {
        title: "O Que é Revelado Sobre o Caso do Banco Master e os Limites do Compliance",
        image: "img/banco-master-compliance-gestao-fraudulenta-temeraria-limites-governanca.jpg",
        description: "Quando a Polícia Federal deflagrou a Operação Compliance Zero em novembro de 2025 e decretou...",
        link: "compliance/banco-master-compliance-gestao-fraudulenta-temeraria-limites-governanca.html"
    },
    {
        title: "STM Concede Pela Primeira Vez Medidas Protetivas a Militar Trans Vítima de Assédio Sexual",
        image: "img/stm-medidas-protetivas-militar-trans-assedio-sexual.jpg",
        description: "O Superior Tribunal Militar proferiu, no dia 20 de fevereiro de 2026, uma decisão sem precedentes...",
        link: "direito-militar/stm-medidas-protetivas-militar-trans-assedio-sexual.html"
    },
    {
        title: "Empresa e Advogado São Condenados pelo TST",
        image: "img/empresa-advogado-condenados-tst-citacoes-falsas-jurisprudencia.jpg",
        description: "O Tribunal Superior do Trabalho condenou uma empresa e seu advogado por litigância de má-fé após a constatação...",
        link: "direito-trabalhista/empresa-advogado-condenados-tst-citacoes-falsas-jurisprudencia.html"
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
