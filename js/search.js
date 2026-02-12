// Base de dados global de artigos para busca
const allArticles = [
    {
        title: 'Mediação Estratégica e Compliance: Alternativas ao Litígio',
        description: 'O cenário corporativo atual exige novas abordagens para a resolução de conflitos. A mediação estratégica surge como uma ferramenta essencial alinhada ao compliance.',
        category: 'Compliance',
        url: 'compliance/mediacao-estrategica-e-compliance.html',
        tags: ['compliance', 'alternativas ao litígio', 'direito']
    },
    {
        title: 'A Nova Era da Governança: Norma ABNT para Compliance Tributário',
        description: 'A publicação da nova norma técnica brasileira para sistemas de gestão de compliance tributário marca uma mudança de paradigma na governança corporativa.',
        category: 'Compliance',
        url: 'compliance/nova-norma-abnt-compliance-tributario.html',
        tags: ['compliance','Compliance Tributário','Nova Era da Governança',]
    },
    {
        title: 'Fiscalização de Compliance: Irregularidades em Papelarias',
        description: 'Uma recente operação de fiscalização revelou desafios persistentes no cumprimento das normas de defesa do consumidor pelo setor varejista.',
        category: 'Compliance',
        url: 'compliance/fiscalizacao-compliance-papelarias.html',
        tags: ['compliance','Fiscalização','Irregularidades em Papelarias',]
    },
    {
        title: 'Fortalecimento do Programa Confia: Rumo às Melhores Práticas',
        description: 'O ambiente tributário brasileiro vive um momento de transformação com o fortalecimento do Programa Confia e novas diretrizes de compliance.',
        category: 'Compliance',
        url: 'compliance/fortalecimento-programa-confia.html',
        tags: ['compliance','Programa Confia','Melhores Práticas',]
    },
    {
        title: 'Quem Audita os Auditores?',
        description: 'Os recentes escândalos corporativos revelam um padrão preocupante: todas as empresas envolvidas contavam com auditoria independente externa.',
        category: 'Compliance',
        url: 'compliance/quem-audita-os-auditores.html',
        tags: ['compliance', 'auditores', 'escândalos', 'compliance zero', 'romer carvalho']
    }, 
    {
        title: 'STF e Direitos Fundamentais',
        description: 'Análise das recentes decisões do Supremo Tribunal Federal sobre garantias constitucionais.',
        category: 'Direito Civil',
        url: 'direito-civil/index.html',
        tags: ['stf', 'constituição', 'direitos', 'supremo', 'romer carvalho']
    }, 

    {
        title: 'A Importância do Compliance nas Empresas de Médio Porte',
        description: 'Análise das recentes decisões do Supremo Tribunal Federal sobre garantias constitucionais.',
        category: 'Direito Civil',
        url: 'direito-civil/importancia-do-compliance.html',
        tags: ['compliance', 'empresa', 'gestão', 'ética']
    },
    {
        title: 'Reforma do Código Penal',
        description: 'Os principais pontos em debate no Congresso Nacional sobre a modernização das leis penais.',
        category: 'Direito Penal',
        url: 'direito-penal/index.html',
        tags: ['penal', 'crime', 'reforma', 'lei']
    },
    {
        title: 'Direitos Trabalhistas 2026',
        description: 'Como as novas tecnologias estão impactando a regulamentação do trabalho no Brasil.',
        category: 'Direito Trabalhista',
        url: 'direito-trabalhista/index.html',
        tags: ['trabalho', 'clt', 'tecnologia', 'direitos']
    },
    {
        title: 'Jurisprudência em Foco',
        description: 'Acompanhe as decisões mais relevantes dos tribunais superiores nesta semana.',
        category: 'Jurisprudência',
        url: 'jurisprudencia/index.html',
        tags: ['tribunal', 'decisões', 'stj', 'stf']
    },
    {
        title: 'Direito Civil e Família',
        description: 'Novos entendimentos sobre pensão alimentícia e sucessões no direito brasileiro.',
        category: 'Direito de Família',
        url: 'direito-de-familia/index.html',
        tags: ['família', 'pensão', 'sucessão', 'casamento']
    },
    {
        title: 'Compliance e Ética',
        description: 'A importância da conformidade legal e integridade no ambiente corporativo moderno.',
        category: 'Compliance',
        url: 'compliance/index.html',
        tags: ['compliance', 'ética', 'corporativo', 'integridade']
    },
    {
        title: 'Direito Digital',
        description: 'Os desafios da proteção de dados e privacidade na era da inteligência artificial.',
        category: 'Legislação',
        url: 'legislacao/index.html',
        tags: ['digital', 'lgpd', 'privacidade', 'ia']
    },
    {
        title: 'Legislação Ambiental',
        description: 'Novas resoluções e o impacto das políticas de sustentabilidade no cenário jurídico.',
        category: 'Legislação',
        url: 'legislacao/index.html',
        tags: ['ambiental', 'sustentabilidade', 'meio ambiente', 'lei']
    },
    {
        title: 'Direito Imobiliário',
        description: 'Mudanças nas regras de registro de imóveis e contratos de locação.',
        category: 'Direito Civil',
        url: 'direito-civil/index.html',
        tags: ['imóvel', 'aluguel', 'contrato', 'registro']
    },
    {
        title: 'Direito Militar',
        description: 'Análise das principais decisões e regulamentações no direito militar brasileiro.',
        category: 'Direito Militar',
        url: 'direito-militar/index.html',
        tags: ['militar', 'exército', 'justiça militar']
    },
    {
        title: 'Como Comprovar que Existe União Estável: Guia Prático',
        description: 'Muitas pessoas vivem em união estável sem saber que essa relação possui proteção jurídica semelhante ao casamento.',
        category: 'Direito de Família',
        url: 'direito-de-familia/como-comprovar-uniao-estavel.html',
        tags: ['união estável', 'casamento', 'provas', 'família']
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
