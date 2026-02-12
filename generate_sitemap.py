import os

def generate_sitemap(base_url, directory):
    urls = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                # Ignorar arquivos administrativos se necessário
                if file == 'admin-newsletter.html':
                    continue
                
                # Calcular o caminho relativo
                rel_path = os.path.relpath(os.path.join(root, file), directory)
                if rel_path == 'index.html':
                    url = base_url
                else:
                    url = f"{base_url}/{rel_path.replace(os.sep, '/')}"
                
                urls.append(url)

    sitemap_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    sitemap_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    for url in sorted(urls):
        sitemap_content += '  <url>\n'
        sitemap_content += f'    <loc>{url}</loc>\n'
        sitemap_content += '    <changefreq>always</changefreq>\n'
        sitemap_content += '    <priority>1.0</priority>\n'
        sitemap_content += '  </url>\n'
    
    sitemap_content += '</urlset>'
    
    with open(os.path.join(directory, 'sitemap.xml'), 'w', encoding='utf-8') as f:
        f.write(sitemap_content)
    
    print(f"Sitemap gerado com {len(urls)} URLs.")

base_url = "https://www.justicaemdia.com.br"
directory = "/home/ubuntu/justicaemdia-v50"
generate_sitemap(base_url, directory)
