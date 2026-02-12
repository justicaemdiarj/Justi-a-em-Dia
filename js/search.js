// Base de dados global de artigos para busca
const allArticles = [

    {
        title: 'Quem Audita os Auditores?',
        description: 'Os recentes escândalos corporativos revelam um padrão preocupante: todas as empresas envolvidas contavam com auditoria independente externa.',
        category: 'Compliance',
        url: 'compliance/quem-audita-os-auditores.html',
        tags: ['compliance', 'auditores', 'escândalos', 'compliance zero', 'romer carvalho']
    }, 
    {
        title: 'Como Comprovar que Existe União Estável: Guia Prático',
        description: 'Muitas pessoas vivem em união estável sem saber que essa relação possui proteção jurídica semelhante ao casamento.',
        category: 'Direito de Família',
        url: 'direito-de-familia/como-comprovar-uniao-estavel.html',
        tags: ['união estável', 'casamento', 'provas', 'família', 'romer carvalho']
    }, 
    {
        title: 'Pensão Alimentícia: Revisão, Exoneração e os Limites do Dever de Sustento',
        description: 'Análise detalhada sobre pensão alimentícia: revisão, exoneração e os limites do dever de sustento e seus impactos no ordenamento jurídico brasileiro.',
        category: 'Direito de Família',
        url: 'direito-de-familia/pensao-alimenticia-revisao-exoneracao-limites.html',
        tags: ['Pensão alimentícia', 'revisão', 'Pensão ', 'família']
    }, 
    {
        title: 'Guarda Compartilhada e o Melhor Interesse da Criança na Prática Forense',
        description: 'Análise detalhada sobre guarda compartilhada e o melhor interesse da criança na prática forense e seus impactos no ordenamento jurídico brasileiro',
        category: 'Direito de Família',
        url: 'direito-de-familia/guarda-compartilhada-melhor-interesse-crianca.html',
        tags: ['Guarda Compartilhada', 'Guarda', 'Melhor Interesse da Criança', 'família']
    }, 
    {
        title: 'Responsabilidade civil por danos morais nas danos morais',
        description: 'A era digital transformou profundamente as relações interpessoais, criando novos espaços de convivência que transcendem as barreiras físicas.',
        category: 'Direito Civil',
        url: 'direito-civil/responsabilidade-civil-danos-morais-digitais.html',
        tags: ['Responsabilidade civil', 'danos morais', 'danos morais']
    }, 
    {
        title: 'Validade jurídica dos contratos firmados por meios eletrônicos',
        description: 'A digitalização das relações negociais representa uma das mais significativas transformações do direito contratual contemporâneo.',
        category: 'Direito Civil',
        url: 'direito-civil/validade-juridica-contratos-eletronicos.html',
        tags: ['contratos', 'Validade jurídica', 'contratos firmados', 'relações negociais']
    }, 
    {
        title: 'Princípio da insignificância e sua aplicação nos crimes patrimoniais',
        description: 'O princípio da insignificância, também denominado princípio da bagatela, constitui importante instrumento de racionalização do sistema penal, permitindo a exclusão da tipicidade material em condutas que, embora',
        category: 'Direito Penal',
        url: 'direito-penal/principio-insignificancia-crimes-patrimoniais.html',
        tags: ['Princípio da insignificância', 'crimes patrimoniais', 'crimes']
    }, 
    {
        title: 'Prisão preventiva: requisitos legais e abusos recorrentes',
        description: 'A prisão preventiva, modalidade de prisão cautelar regulamentada pelos artigos 311 a 316 do Código de Processo Penal, constitui medida excepcional',
        category: 'Direito Penal',
        url: 'direito-penal/prisao-preventiva-requisitos-abusos.html',
        tags: ['Prisão preventiva', 'requisitos', 'requisitos legais', 'prisão cautelar']
    }, 
    {
        title: 'Vínculo empregatício nas novas formas de trabalho por aplicativo',
        description: 'A economia de plataformas digitais revolucionou o mercado de trabalho nas últimas décadas, introduzindo modelos de prestação de serviços',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/vinculo-empregaticio-trabalho-aplicativo.html',
        tags: ['Vínculo empregatício', 'plataformas digitais', 'trabalho']
    }, 
    {
        title: 'Assédio moral no ambiente de trabalho e a responsabilidade do empregador',
        description: 'O assédio moral no ambiente laboral constitui uma das mais graves patologias organizacionais contemporâneas, caracterizando-se pela exposição',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/assedio-moral-trabalho-responsabilidade-empregador.html',
        tags: ['Assédio moral ', 'trabalhador', 'Assédio', 'responsabilidade do empregador']
    }, 
    {
        title: 'Hierarquia e disciplina versus direitos fundamentais do militar',
        description: 'A condição militar caracteriza-se por especificidades que a distinguem de outras relações funcionais, fundamentando-se nos princípios estruturantes da hierarquia e disciplina. Esses pilares, embora essenciais à eficácia ',
        category: 'Direito Militar',
        url: 'direito-militar/hierarquia-disciplina-direitos-fundamentais-militar.html',
        tags: ['Hierarquia e disciplina', 'militar', 'condição militar', 'responsabilidade']
    }, 
    {
        title: 'Processo administrativo disciplinar militar e garantias constitucionais',
        description: 'O processo administrativo disciplinar militar constitui instrumento jurídico específico destinado à apuração de transgressões disciplinares praticadas por integrantes das Forças Armadas e Forças Auxiliares,',
        category: 'Direito Militar',
        url: 'direito-militar/processo-administrativo-disciplinar-militar.html',
        tags: ['Processo administrativo', 'PAD', 'condição militar', 'garantias constitucionais']
    }, 
    {
        title: 'Responsabilidade da alta gestão na implementação do compliance efetivo',
        description: 'A efetividade de um programa de compliance corporativo depende fundamentalmente do comprometimento genuíno da alta gestão da organização.',
        category: 'Compliance',
        url: 'compliance/responsabilidade-alta-gestao-compliance.html',
        tags: ['compliance ', 'gestão na implementação', 'prevenção de riscos', 'programa de compliance']
    }, 
    {
        title: 'Mediação Estratégica e Compliance: Alternativas ao Litígio',
        description: 'A mediação consolida-se como método estratégico de resolução de conflitos, oferecendo às organizações alternativa eficiente ao litígio tradicional. ',
        category: 'Compliance',
        url: 'compliance/mediacao-estrategica-e-compliance.html',
        tags: ['compliance ', 'programas de compliance', 'prevenção de riscos', 'compliance corporativo']
    }, 
    {
        title: 'A Nova Era da Governança: Norma ABNT para Compliance Tributário',
        description: 'A publicação da ABNT NBR ISO 37301:2021 (Sistemas de Gestão de Compliance) e, mais recentemente, o desenvolvimento de normas técnicas específicas para compliance tributário representam marco evolutivo na padronização',
        category: 'Compliance',
        url: 'compliance/nova-norma-abnt-compliance-tributario.html',
        tags: ['compliance ', 'programas de compliance', 'prevenção de riscos ', 'Norma ABNT', 'Compliance Tributário']
    }, 
    {
        title: 'Fiscalização de Compliance: Irregularidades em Papelarias',
        description: 'A fiscalização de estabelecimentos comerciais, incluindo papelarias, constitui atividade essencial dos órgãos de vigilância sanitária, defesa do consumidor,',
        category: 'Compliance',
        url: 'compliance/fiscalizacao-compliance-papelarias.html',
        tags: ['compliance ', 'programas de compliance', 'prevenção de riscos ', 'Fiscalização de Compliance', 'Irregularidades']
    }, 
    {
        title: 'Fortalecimento do Programa Confia: Rumo às Melhores Práticas de Governança Fiscal',
        description: 'O Programa Confia, iniciativa da Receita Federal do Brasil instituída pela Instrução Normativa RFB 2.108/2022, representa evolução significativa na relação',
        category: 'Compliance',
        url: 'compliance/fortalecimento-programa-confia.html',
        tags: ['compliance ', 'programas de compliance', 'prevenção de riscos ', 'Programa Confia']
    }, 
    {
        title: 'A força dos precedentes obrigatórios no sistema jurídico brasileiro',
        description: 'A incorporação definitiva do sistema de precedentes obrigatórios no ordenamento jurídico brasileiro representa uma das mais profundas transformações estruturais',
        category: 'Jurisprudência',
        url: 'jurisprudencia/forca-precedentes-obrigatorios-brasil.html',
        tags: ['precedentes', 'sistema jurídico', 'incorporação']
    }, 
    {
        title: 'Mudanças recentes na jurisprudência dos tribunais superiores',
        description: 'A dinâmica interpretativa do direito brasileiro passa por constante transformação, especialmente quando analisamos a atuação dos tribunais superiores. ',
        category: 'Jurisprudência',
        url: 'jurisprudencia/mudancas-recentes-jurisprudencia-tribunais.html',
        tags: ['jurisprudência', 'Supremo Tribunal Federal', 'direito brasileiro', 'tribunais']
    }, 
    {
        title: 'Interpretação da lei à luz da constituição e da jurisprudência atual',
        description: 'A interpretação jurídica contemporânea não pode prescindir da compreensão sistêmica do ordenamento. A lei, isoladamente considerada, ',
        category: 'Legislação',
        url: 'legislacao/interpretacao-lei-constituicao-jurisprudencia.html',
        tags: ['Interpretação da lei', 'jurisprudência atual', ' interpretação evolutiva ']
    }, 
    {
        title: 'Impactos práticos das alterações legislativas no direito de família',
        description: 'O direito de família brasileiro experimenta constante transformação legislativa que reflete as profundas mudanças sociais das últimas décadas. A compreensão contemporânea das relações familiares expandiu-se significativamente, abandonando modelos rígidos e patriarcais em favor de estruturas plurais',
        category: 'Legislação',
        url: 'legislacao/impactos-alteracoes-legislativas-familia.html',
        tags: ['Impactos práticos', 'direito de família', 'alterações legislativas', 'proteção da dignidade']
    }
];

/**
 * Função de busca melhorada com pontuação de relevância
 */
function searchArticles(query) {
    if (!query || query.trim().length < 2) {
        return [];
    }

    const lowerQuery = query.toLowerCase().trim();
    const queryWords = lowerQuery.split(/\s+/);
    
    const results = allArticles.map(article => {
        let score = 0;
        const title = article.title.toLowerCase();
        const desc = article.description.toLowerCase();
        const cat = article.category.toLowerCase();
        const tags = article.tags || [];

        // 1. Correspondência exata no título (Peso Máximo)
        if (title.includes(lowerQuery)) score += 100;
        
        // 2. Correspondência de palavras individuais
        queryWords.forEach(word => {
            if (title.includes(word)) score += 20;
            if (desc.includes(word)) score += 10;
            if (cat.includes(word)) score += 15;
            
            tags.forEach(tag => {
                if (tag.toLowerCase().includes(word)) score += 15;
            });
        });

        return { ...article, score };
    })
    .filter(article => article.score > 0)
    .sort((a, b) => b.score - a.score);

    return results;
}

/**
 * Função para exibir sugestões em tempo real
 */
function displaySuggestions(results, query, container) {
    if (results.length === 0) {
        container.style.display = 'none';
        return;
    }

    const isSubPage = window.location.pathname.includes('/direito-') || 
                     window.location.pathname.includes('/compliance/') || 
                     window.location.pathname.includes('/jurisprudencia/') || 
                     window.location.pathname.includes('/legislacao/') ||
                     window.location.pathname.includes('/apoiadores/');
    const pathPrefix = isSubPage ? '../' : '';

    container.innerHTML = '';
    container.style.display = 'block';

    const limit = 5;
    const topResults = results.slice(0, limit);

    topResults.forEach(result => {
        const div = document.createElement('div');
        div.className = 'search-suggestion-item';
        
        // Highlight query in title
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const highlightedTitle = result.title.replace(regex, '<strong>$1</strong>');
        
        div.innerHTML = `
            <div class="suggestion-info">
                <span class="suggestion-title">${highlightedTitle}</span>
                <span class="suggestion-category">${result.category}</span>
            </div>
        `;
        
        div.addEventListener('click', () => {
            window.location.href = `${pathPrefix}${result.url}`;
        });
        
        container.appendChild(div);
    });

    if (results.length > limit) {
        const more = document.createElement('div');
        more.className = 'search-suggestion-more';
        more.innerHTML = `Ver todos os ${results.length} resultados`;
        more.addEventListener('click', () => {
            displaySearchResults(results, query);
            container.style.display = 'none';
        });
        container.appendChild(more);
    }
}

/**
 * Função para exibir modal completo de resultados
 */
function displaySearchResults(results, query) {
    const existingModal = document.getElementById('search-results-modal');
    if (existingModal) existingModal.remove();

    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'search-results-modal';
    resultsContainer.className = 'search-results-modal';
    
    const isSubPage = window.location.pathname.includes('/direito-') || 
                     window.location.pathname.includes('/compliance/') || 
                     window.location.pathname.includes('/jurisprudencia/') || 
                     window.location.pathname.includes('/legislacao/') ||
                     window.location.pathname.includes('/apoiadores/');
    const pathPrefix = isSubPage ? '../' : '';

    let html = `
        <div class="search-results-content">
            <button class="search-results-close" aria-label="Fechar">&times;</button>
            <div class="search-results-header">
                <h2>Busca por: <span>${query}</span></h2>
                <p class="results-count">${results.length} resultado(s) encontrado(s)</p>
            </div>
    `;
    
    if (results.length === 0) {
        html += `
            <div class="no-results">
                <i class="fas fa-search-minus"></i>
                <p>Nenhum resultado encontrado para sua pesquisa.</p>
                <small>Tente usar palavras-chave mais genéricas.</small>
            </div>
        `;
    } else {
        html += '<div class="search-results-list">';
        results.forEach(article => {
            html += `
                <div class="search-result-item">
                    <div class="result-meta">
                        <span class="result-category">${article.category}</span>
                    </div>
                    <h3><a href="${pathPrefix}${article.url}">${article.title}</a></h3>
                    <p class="result-description">${article.description}</p>
                    <a href="${pathPrefix}${article.url}" class="result-link">Ler artigo completo</a>
                </div>
            `;
        });
        html += '</div>';
    }
    
    html += '</div>';
    resultsContainer.innerHTML = html;
    document.body.appendChild(resultsContainer);
    document.body.style.overflow = 'hidden'; // Prevent scroll

    // Fechar eventos
    const close = () => {
        resultsContainer.style.opacity = '0';
        resultsContainer.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            resultsContainer.remove();
            document.body.style.overflow = '';
        }, 300);
    };

    resultsContainer.querySelector('.search-results-close').addEventListener('click', close);
    resultsContainer.addEventListener('click', (e) => { if (e.target === resultsContainer) close(); });
    
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            close();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBox = document.querySelector('.search-box');
    
    if (!searchInput || !searchBox) return;

    // Criar container de sugestões
    const suggestionContainer = document.createElement('div');
    suggestionContainer.className = 'search-suggestions';
    searchBox.appendChild(suggestionContainer);

    let debounceTimer;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            if (query.length >= 2) {
                const results = searchArticles(query);
                displaySuggestions(results, query, suggestionContainer);
            } else {
                suggestionContainer.style.display = 'none';
            }
        }, 300);
    });

    // Eventos de clique no botão e Enter
    const searchBtn = document.querySelector('.search-btn');
    const performAction = () => {
        const query = searchInput.value;
        if (query.length >= 2) {
            const results = searchArticles(query);
            displaySearchResults(results, query);
            suggestionContainer.style.display = 'none';
        }
    };

    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            performAction();
        });
    }

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performAction();
        }
    });

    // Fechar sugestões ao clicar fora
    document.addEventListener('click', (e) => {
        if (!searchBox.contains(e.target)) {
            suggestionContainer.style.display = 'none';
        }
    });
});
