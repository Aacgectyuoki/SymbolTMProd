/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { routes } = require('../src/seo/routes');

const SITE_URL = 'https://symboltm.com';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url><loc>${SITE_URL}${r}</loc></url>`).join('\n')}
</urlset>`;

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;

const buildDir = path.join(__dirname, '..', 'build');
if (!fs.existsSync(buildDir)) fs.mkdirSync(buildDir, { recursive: true });

fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(buildDir, 'robots.txt'), robots);
console.log('sitemap.xml and robots.txt generated');


