import fs from 'fs';
import path from 'path';

const pages = [
  '/',
  '/services',
  '/use-cases',
  '/case-studies',
  '/benefits-roi',
  '/technology',
  '/why-us',
  '/contact'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>https://automataxpro.site${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>${page === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

fs.writeFileSync(path.resolve('./dist/public/sitemap.xml'), sitemap);
console.log('Sitemap generated!');
