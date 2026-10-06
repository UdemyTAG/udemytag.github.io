import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const publicDir = path.resolve('public');
const coursesPath = path.resolve('src/data/courses.json');

// 1. Sinkronisasi sitemap.xml
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

// 2. Generate llms-full.txt yang memuat seluruh kursus terindeks untuk AI Agents & LLMs
try {
  if (fs.existsSync(coursesPath)) {
    const rawData = fs.readFileSync(coursesPath, 'utf-8');
    const courses = JSON.parse(rawData);

    let fullContent = `# UdemyTAG - Indeks Lengkap Kupon Kursus Udemy 100% Gratis

> Seluruh katalog kursus legal Udemy gratis dengan sertifikat kelulusan resmi dan akses seumur hidup.

## Navigasi
- [UdemyTAG Home](https://udemytag.github.io/): Beranda direktori kupon diskon
- [Peta Situs (Sitemap)](https://udemytag.github.io/sitemap.xml): Peta situs lengkap
- [Ringkasan Ringkas AI (llms.txt)](https://udemytag.github.io/llms.txt): Dokumen pengantar untuk model bahasa besar

## Daftar Lengkap Kursus Terverifikasi (${courses.length} Kursus)
`;

    courses.forEach((c, idx) => {
      const slug = c.slug || c.id;
      const url = `https://udemytag.github.io/course/${slug}/`;
      const cleanDesc = (c.description || 'Kursus Udemy terverifikasi dengan sertifikat resmi.').replace(/\r?\n|\r/g, ' ').trim();
      fullContent += `${idx + 1}. [${c.title}](${url}): ${cleanDesc} | Kategori: ${c.category} | Instruktur: ${c.instructor} | Rating: ${c.rating}/5.0\n`;
    });

    const llmsFullPublic = path.join(publicDir, 'llms-full.txt');
    const llmsFullDist = path.join(distDir, 'llms-full.txt');
    fs.writeFileSync(llmsFullPublic, fullContent, 'utf-8');
    if (fs.existsSync(distDir)) {
      fs.writeFileSync(llmsFullDist, fullContent, 'utf-8');
    }
    console.log(`✓ Successfully generated llms-full.txt with ${courses.length} courses`);
  }

  // 3. Pastikan llms.txt tersalin ke dist jika dist ada
  const llmsPublic = path.join(publicDir, 'llms.txt');
  const llmsDist = path.join(distDir, 'llms.txt');
  if (fs.existsSync(llmsPublic) && fs.existsSync(distDir)) {
    fs.copyFileSync(llmsPublic, llmsDist);
    console.log('✓ Successfully synchronized llms.txt to dist/');
  }
} catch (err) {
  console.error('Error generating llms-full.txt:', err);
}
