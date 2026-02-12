import os
import re

# Dados das categorias e temas
categories_data = {
    "Direito Civil": {
        "slug": "direito-civil",
        "temas": [
            {"title": "Responsabilidade civil por danos morais nas relações digitais", "slug": "responsabilidade-civil-danos-morais-digitais"},
            {"title": "Validade jurídica dos contratos firmados por meios eletrônicos", "slug": "validade-juridica-contratos-eletronicos"}
        ]
    },
    "Direito de Família": {
        "slug": "direito-de-familia",
        "temas": [
            {"title": "Guarda compartilhada e o melhor interesse da criança na prática forense", "slug": "guarda-compartilhada-melhor-interesse-crianca"},
            {"title": "Pensão alimentícia: revisão, exoneração e os limites do dever de sustento", "slug": "pensao-alimenticia-revisao-exoneracao-limites"}
        ]
    },
    "Direito Penal": {
        "slug": "direito-penal",
        "temas": [
            {"title": "Princípio da insignificância e sua aplicação nos crimes patrimoniais", "slug": "principio-insignificancia-crimes-patrimoniais"},
            {"title": "Prisão preventiva: requisitos legais e abusos recorrentes", "slug": "prisao-preventiva-requisitos-abusos"}
        ]
    },
    "Direito Trabalhista": {
        "slug": "direito-trabalhista",
        "temas": [
            {"title": "Vínculo empregatício nas novas formas de trabalho por aplicativo", "slug": "vinculo-empregaticio-trabalho-aplicativo"},
            {"title": "Assédio moral no ambiente de trabalho e a responsabilidade do empregador", "slug": "assedio-moral-trabalho-responsabilidade-empregador"}
        ]
    },
    "Direito Militar": {
        "slug": "direito-militar",
        "temas": [
            {"title": "Processo administrativo disciplinar militar e garantias constitucionais", "slug": "processo-administrativo-disciplinar-militar"},
            {"title": "Hierarquia e disciplina versus direitos fundamentais do militar", "slug": "hierarquia-disciplina-direitos-fundamentais-militar"}
        ]
    },
    "Compliance": {
        "slug": "compliance",
        "temas": [
            {"title": "Programas de compliance como instrumento de prevenção de riscos jurídicos", "slug": "programas-compliance-prevencao-riscos"},
            {"title": "Responsabilidade da alta gestão na implementação do compliance efetivo", "slug": "responsabilidade-alta-gestao-compliance"}
        ]
    },
    "Jurisprudência": {
        "slug": "jurisprudencia",
        "temas": [
            {"title": "A força dos precedentes obrigatórios no sistema jurídico brasileiro", "slug": "forca-precedentes-obrigatorios-brasil"},
            {"title": "Mudanças recentes na jurisprudência dos tribunais superiores", "slug": "mudancas-recentes-jurisprudencia-tribunais"}
        ]
    },
    "Legislação": {
        "slug": "legislacao",
        "temas": [
            {"title": "Impactos práticos das alterações legislativas no direito de família", "slug": "impactos-alteracoes-legislativas-familia"},
            {"title": "Interpretação da lei à luz da Constituição e da jurisprudência atual", "slug": "interpretacao-lei-constituicao-jurisprudencia"}
        ]
    }
}

# Carregar modelo
with open('compliance/fortalecimento-programa-confia.html', 'r', encoding='utf-8') as f:
    template = f.read()

# Função para criar o conteúdo do artigo (placeholder)
def get_article_content(title):
    return f"""
        <h3>Introdução ao tema</h3>
        <p>O tema <strong>{title}</strong> é de extrema relevância no cenário jurídico atual. Este artigo explora os principais aspectos e implicações desta matéria para profissionais e interessados na área.</p>
        
        <h3>Desenvolvimento</h3>
        <p>A análise técnica revela que as transformações sociais e tecnológicas têm exigido uma constante atualização da interpretação normativa. No caso de {title.lower()}, observa-se uma tendência de maior rigor técnico e foco na segurança jurídica.</p>
        
        <h3>Conclusão</h3>
        <p>Em suma, o acompanhamento das mudanças legislativas e jurisprudenciais sobre {title.lower()} é fundamental para a mitigação de riscos e a garantia de direitos no ambiente jurídico contemporâneo.</p>
    """

all_new_articles = []

# Gerar páginas
for cat_name, data in categories_data.items():
    cat_slug = data['slug']
    if not os.path.exists(cat_slug):
        os.makedirs(cat_slug)
    
    cat_articles = []
    
    for tema in data['temas']:
        title = tema['title']
        slug = tema['slug']
        filename = f"{cat_slug}/{slug}.html"
        
        # Personalizar template
        content = template
        content = re.sub(r'<title>.*?</title>', f'<title>{title} | Justiça em Dia</title>', content)
        content = re.sub(r'<meta name="title" content=".*?">', f'<meta name="title" content="{title}">', content)
        content = re.sub(r'<span class="post-category">.*?</span>', f'<span class="post-category">{cat_name}</span>', content)
        content = re.sub(r'<h1 class="post-title">.*?</h1>', f'<h1 class="post-title">{title}</h1>', content)
        
        # Substituir conteúdo do post
        post_content_pattern = r'<div class="post-content">.*?</div>'
        new_post_content = f'<div class="post-content">{get_article_content(title)}</div>'
        content = re.sub(post_content_pattern, new_post_content, content, flags=re.DOTALL)
        
        # Ajustar links canônicos e OG
        content = content.replace('compliance/fortalecimento-programa-confia.html', filename)
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        
        article_info = {
            "title": title,
            "category": cat_name,
            "link": filename,
            "slug": slug,
            "cat_slug": cat_slug
        }
        all_new_articles.append(article_info)
        cat_articles.append(article_info)

    # Atualizar pagination.categoria.js
    pag_file = f"js/pagination.{cat_slug}.js"
    if os.path.exists(pag_file):
        with open(pag_file, 'r', encoding='utf-8') as f:
            pag_content = f.read()
        
        new_items = ""
        for art in cat_articles:
            new_items += f"""    {{
        title: "{art['title']}",
        date: "10/02/2026",
        timestamp: "2026-02-10T10:00:00",
        image: "../img/imagem-postagem.png",
        excerpt: "Análise detalhada sobre {art['title'].lower()} e seus impactos no ordenamento jurídico brasileiro.",
        link: "../{art['link']}",
        author: "Romer Carvalho",
        authorLink: "../apoiadores/advogado-romer-carvalho.html"
    }},
"""
        # Inserir no início do array categoryNewsData
        pag_content = re.sub(r'const categoryNewsData = \[', f'const categoryNewsData = [\n{new_items}', pag_content)
        with open(pag_file, 'w', encoding='utf-8') as f:
            f.write(pag_content)

# Atualizar dynamic-content.js (globalNewsData)
with open('js/dynamic-content.js', 'r', encoding='utf-8') as f:
    dynamic_content = f.read()

new_global_items = ""
for art in all_new_articles:
    new_global_items += f"""    {{
        title: "{art['title']}",
        date: "10/02/2026",
        category: "{art['category']}",
        author: "Romer Carvalho",
        link: "{art['link']}",
        image: "img/imagem-postagem.png",
        excerpt: "Análise detalhada sobre {art['title'].lower()} e seus impactos no ordenamento jurídico brasileiro."
    }},
"""

dynamic_content = re.sub(r'const globalNewsData = \[', f'const globalNewsData = [\n{new_global_items}', dynamic_content)
with open('js/dynamic-content.js', 'w', encoding='utf-8') as f:
    f.write(dynamic_content)

# Atualizar articles.js
with open('js/articles.js', 'r', encoding='utf-8') as f:
    articles_js = f.read()

new_grid_items = ""
for art in all_new_articles[:6]: # Adicionar apenas os 6 primeiros no grid inicial para não sobrecarregar
    new_grid_items += f"""        {{
            title: '{art['title']}',
            image: 'img/imagem-postagem.png',
            description: 'Análise detalhada sobre {art['title'].lower()}.',
            link: '{art['link']}'
        }},
"""

articles_js = re.sub(r'const articles = \[', f'const articles = [\n{new_grid_items}', articles_js)

# Ajustar o loop de renderização no articles.js para incluir o link
articles_js = articles_js.replace(
    'card.innerHTML = `',
    'card.innerHTML = `<a href="${article.link || \'#\'}" style="text-decoration: none; color: inherit;">'
)
articles_js = articles_js.replace(
    '`;',
    '</a>`;'
)

with open('js/articles.js', 'w', encoding='utf-8') as f:
    f.write(articles_js)

print("Geração concluída com sucesso!")
