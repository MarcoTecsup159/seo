export default async function handler(req, res) {
  //simular obtener datos de tu base de datos o CMS
  const pages = [
    { url: '', lastmod: '2024-06-24' },  // Home
    { url: 'blog', lastmod: '2024-06-20' },  // Blog
    { url: 'contacto', lastmod: '2024-06-22' },  // Contacto
  ];

  const baseUrl = 'https://seo-nu-one.vercel.app';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(page => `
      <url>
        <loc>${baseUrl}/${page.url}</loc>
        <lastmod>${page.lastmod}</lastmod>
      </url>
    `).join('')}
  </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}
