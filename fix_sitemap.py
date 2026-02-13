import os

def generate_sitemap(base_url, directory):
    urls = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                # Calcular o caminho relativo
                rel_path = os.path.relpath(os.path.join(root, file), directory)
                
                # Normalizar caminhos para URL
                url_path = rel_path.replace(os.sep, '/')
                
                if url_path == 'index.html':
                    url = base_url
                else:
                    url = f"{base_url}/{url_path}"
                
                urls.append(url)
    
    # Remover duplicatas e ordenar
    urls = sorted(list(set(urls)))
    
    sitemap_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    sitemap_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    for url in urls:
        sitemap_content += '  <url>\n'
        sitemap_content += f'    <loc>{url}</loc>\n'
        sitemap_content += '    <changefreq>always</changefreq>\n'
        sitemap_content += '    <priority>1.0</priority>\n'
        sitemap_content += '  </url>\n'
    
    sitemap_content += '</urlset>'
    
    sitemap_path = os.path.join(directory, 'sitemap.xml')
    with open(sitemap_path, 'w', encoding='utf-8') as f:
        f.write(sitemap_content)
    
    print(f"Sitemap gerado com {len(urls)} URLs em {sitemap_path}")

if __name__ == "__main__":
    base_url = "https://www.justicaemdia.com.br"
    directory = "/home/ubuntu/justicaemdia_site"
    generate_sitemap(base_url, directory)
