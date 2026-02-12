import os
import re

footer_content = """    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Sobre Justiça em Dia</h4>
                    <p class="footer-description">Portal de notícias e análises sobre direito, legislação e jurisprudência. Acompanhe as principais decisões dos tribunais brasileiros e mudanças na legislação.</p>
                    <div class="footer-social">
                        <h5>Siga-nos</h5>
                        <div class="footer-social-links">
                            <!-- Redes sociais carregadas via js/config.js -->
                        </div>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Categorias</h4>
                    <ul>
                        <li><a href="direito-civil/index.html">Direito Civil</a></li>
                        <li><a href="direito-de-familia/index.html">Direito de Família</a></li>
                        <li><a href="direito-penal/index.html">Direito Penal</a></li>
                        <li><a href="direito-trabalhista/index.html">Direito Trabalhista</a></li>
                        <li><a href="direito-militar/index.html">Direito Militar</a></li>
                        <li><a href="compliance/index.html">Compliance</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Recursos</h4>
                    <ul>
                        <li><a href="jurisprudencia/index.html">Jurisprudência</a></li>
                        <li><a href="legislacao/index.html">Legislação</a></li>
                        <li><a href="apoiadores/index.html">Apoiadores</a></li>
                        <li><a href="contato.html">Contato</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contato</h4>
                    <p>Email: <a href="mailto:contato@justicaemdia.com.br" class="footer-email">contato@justicaemdia.com.br</a></p>
                    <p>Telefone: <a href="tel:1130000000" class="footer-phone">(11) 3000-0000</a></p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <span class="footer-year">2026</span> Justiça em Dia. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>"""

def update_html_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Atualizar Meta Tag Robots
    is_admin = "admin-newsletter.html" in file_path
    meta_robots = '<meta name="robots" content="index">'
    
    # Remover meta robots existente se houver
    content = re.sub(r'<meta name="robots" content="[^"]*">', '', content)
    
    if not is_admin:
        # Adicionar meta robots no head
        if '<head>' in content:
            content = content.replace('<head>', f'<head>\n    {meta_robots}')
        else:
            # Fallback se não achar <head> (improvável)
            content = f'<html><head>{meta_robots}</head>' + content

    # 2. Atualizar Footer
    # Tenta encontrar a tag footer e substituir tudo entre <footer e </footer>
    footer_pattern = re.compile(r'<footer.*?</footer>', re.DOTALL)
    if footer_pattern.search(content):
        content = footer_pattern.sub(footer_content, content)
    else:
        # Se não tiver footer, adiciona antes do fechamento do body
        content = content.replace('</body>', f'{footer_content}\n</body>')

    # Ajustar caminhos relativos no footer se o arquivo estiver em subdiretório
    depth = file_path.replace('/home/ubuntu/justicaemdia-v50/', '').count('/')
    if depth > 0:
        prefix = '../' * depth
        # Lista de links para ajustar
        links_to_fix = [
            'direito-civil/index.html', 'direito-de-familia/index.html', 
            'direito-penal/index.html', 'direito-trabalhista/index.html',
            'direito-militar/index.html', 'compliance/index.html',
            'jurisprudencia/index.html', 'legislacao/index.html',
            'apoiadores/index.html', 'contato.html'
        ]
        new_footer = footer_content
        for link in links_to_fix:
            new_footer = new_footer.replace(f'href="{link}"', f'href="{prefix}{link}"')
        
        content = footer_pattern.sub(new_footer, content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# Percorrer todos os arquivos HTML
base_dir = '/home/ubuntu/justicaemdia-v50'
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.html'):
            file_path = os.path.join(root, file)
            print(f"Atualizando: {file_path}")
            update_html_file(file_path)
