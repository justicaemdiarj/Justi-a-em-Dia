
import os
import datetime
from urllib.parse import urljoin

def generate_sitemap_from_local_files(base_url, local_path, output_file='sitemap.xml'):
    # Garante que a URL base termine com uma barra
    if not base_url.endswith('/'):
        base_url += '/'

    sitemap_urls = []

    print(f"Escaneando arquivos HTML em: {local_path}")

    for root, _, files in os.walk(local_path):
        for file in files:
            if file.endswith('.html'):
                # Constrói o caminho relativo do arquivo em relação ao local_path
                relative_path = os.path.relpath(os.path.join(root, file), local_path)
                
                # Constrói a URL completa
                full_url = urljoin(base_url, relative_path.replace(os.sep, '/'))
                sitemap_urls.append(full_url)
                print(f"Encontrado: {full_url}")

    # Gerar o arquivo sitemap.xml
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
        f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')

        for url in sitemap_urls:
            f.write('    <url>\n')
            f.write(f'        <loc>{url}</loc>\n')
            f.write(f'        <lastmod>{datetime.date.today().isoformat()}</lastmod>\n')
            f.write('        <changefreq>weekly</changefreq>\n')
            f.write('        <priority>0.8</priority>\n')
            f.write('    </url>\n')
        f.write('</urlset>\n')

    print(f"Sitemap gerado com sucesso em {output_file} com {len(sitemap_urls)} URLs.")

if __name__ == "__main__":
    # Substitua pela URL base do seu site (como ele é acessado online)
    site_base_url = "https://www.justicaemdia.com.br/"
    # Substitua pelo caminho local da pasta raiz do seu projeto
    # Por exemplo, se seus arquivos HTML estão em '/home/usuario/meu_site/'
    project_local_path = "C:/Users/matos/OneDrive/Área de Trabalho/Site em construção/Porttfolio/Justiça em dia/justicaemdia_x1011/justicaemdia_x101"
   
    
    # Crie um diretório de exemplo para simular o projeto local
    os.makedirs(os.path.join(project_local_path, 'apoiadores'), exist_ok=True)
    with open(os.path.join(project_local_path, 'index.html'), 'w') as f: f.write('<html><body><a href="apoiadores/index.html">Apoiadores</a></body></html>')
    with open(os.path.join(project_local_path, 'apoiadores', 'index.html'), 'w') as f: f.write('<html><body>Apoiadores</body></html>')
    with open(os.path.join(project_local_path, 'contato.html'), 'w') as f: f.write('<html><body>Contato</body></html>')
    with open(os.path.join(project_local_path, 'quem-somos.html'), 'w') as f: f.write('<html><body>Quem Somos</body></html>')
    with open(os.path.join(project_local_path, 'politica-privacidade.html'), 'w') as f: f.write('<html><body>Política de Privacidade</body></html>')

    generate_sitemap_from_local_files(site_base_url, project_local_path)

