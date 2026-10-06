import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const publicDir = path.resolve('public');

const sitemap0Dist = path.join(distDir, 'sitemap-0.xml');
const sitemapDist = path.join(distDir, 'sitemap.xml');
const sitemapPublic = path.join(publicDir, 'sitemap.xml');

if (fs.existsSync(sitemap0Dist)) {
  fs.copyFileSync(sitemap0Dist, sitemapDist);
  fs.copyFileSync(sitemap0Dist, sitemapPublic);
  console.log('✓ Successfully copied sitemap-0.xml to sitemap.xml in dist/ and public/');
} else {
  console.log('Notice: sitemap-0.xml not yet generated in dist');
}
