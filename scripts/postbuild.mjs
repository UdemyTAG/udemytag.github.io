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

  // 4. Generate RSS 2.0 Feed untuk Sindikasi Konten & Backlink Organik Otomatis
  if (fs.existsSync(coursesPath)) {
    const rawData = fs.readFileSync(coursesPath, 'utf-8');
    const courses = JSON.parse(rawData);

    const rssItems = courses.slice(0, 50).map(c => {
      const slug = c.slug || c.id;
      const courseUrl = `https://udemytag.github.io/course/${slug}/`;
      const pubDate = new Date().toUTCString();
      const cleanDesc = (c.description || 'Kupon diskon 100% kursus Udemy resmi bersertifikat.').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const cleanTitle = (c.title || 'Udemy Course').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      
      return `    <item>
      <title>${cleanTitle}</title>
      <link>${courseUrl}</link>
      <guid isPermaLink="true">${courseUrl}</guid>
      <description>${cleanDesc} Klaim gratis di UdemyTAG.</description>
      <category>${c.category || 'Development'}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    }).join('\n');

    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>UdemyTAG - Kupon Kursus Udemy 100% Gratis Bersertifikat</title>
    <link>https://udemytag.github.io/</link>
    <description>Koleksi kupon diskon 100% dan kursus gratis Udemy resmi bersertifikat terbaru 2026.</description>
    <language>id-ID</language>
    <atom:link href="https://udemytag.github.io/rss.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`;

    const rssPublic = path.join(publicDir, 'rss.xml');
    const rssDist = path.join(distDir, 'rss.xml');
    fs.writeFileSync(rssPublic, rssXml, 'utf-8');
    if (fs.existsSync(distDir)) {
      fs.writeFileSync(rssDist, rssXml, 'utf-8');
    }
    console.log(`✓ Successfully generated rss.xml with ${Math.min(courses.length, 50)} items`);

    // 5. Generate GitHub High-Authority Backlink Catalog (DA 96 Anchor Link Network)
    let awesomeMd = `# 🎓 Awesome Free Udemy Courses with Certificate - UdemyTAG Catalog

> **Direktori Kurasi Kursus Udemy Gratis Bersertifikat Resmi (Domain Authority Backlink Hub)**
> Sumber utama: [UdemyTAG Official Website](https://udemytag.github.io/)

Koleksi kupon diskon 100% kursus Udemy resmi bersertifikat kelulusan (*Certificate of Completion*) dan hak akses seumur hidup (*lifetime access*).

---

## 🚀 Tautan Cepat & Kategori Unggulan

- 🌟 **[Beranda Direktori Kursus Udemy Gratis Bersertifikat](https://udemytag.github.io/)**
- 🐍 **[Kursus Python Gratis Bersertifikat](https://udemytag.github.io/?cat=development#katalog)**
- 💻 **[Kursus Web Development & Coding Gratis](https://udemytag.github.io/?cat=development#katalog)**
- 🔒 **[Kursus Cyber Security & IT Software Gratis](https://udemytag.github.io/?cat=it%20&%20software#katalog)**
- 📊 **[Kursus Bisnis, Data Science & Finansial Gratis](https://udemytag.github.io/?cat=business#katalog)**
- 🎨 **[Kursus Desain Grafis & UI/UX Figma Gratis](https://udemytag.github.io/?cat=design#katalog)**
- ❓ **[Panduan & FAQ Klaim Kupon Diskon 100%](https://udemytag.github.io/#faq)**

---

## 📚 Daftar Kursus Gratis Aktif Terbaru (Update Otomatis)

| No | Judul Kursus | Kategori | Rating | Tautan Langsung Web |
| :-: | :--- | :--- | :-: | :--- |
`;

    courses.slice(0, 40).forEach((c, i) => {
      const slug = c.slug || c.id;
      const pageUrl = `https://udemytag.github.io/course/${slug}/`;
      const cleanTitle = c.title.replace(/\|/g, '-');
      awesomeMd += `| ${i + 1} | **${cleanTitle}** | \`${c.category}\` | ⭐ ${c.rating} | [Buka di UdemyTAG](${pageUrl}) |\n`;
    });

    awesomeMd += `\n*Diperbarui secara otomatis setiap siklus build via GitHub Actions & UdemyTAG Pipeline.*\n`;

    fs.writeFileSync(path.resolve('AWESOME_UDEMY_COURSES.md'), awesomeMd, 'utf-8');
    if (fs.existsSync(distDir)) {
      fs.writeFileSync(path.join(distDir, 'AWESOME_UDEMY_COURSES.md'), awesomeMd, 'utf-8');
    }
    console.log(`✓ Successfully generated AWESOME_UDEMY_COURSES.md with 40 direct authority backlinks`);
  }
} catch (err) {
  console.error('Error generating authority assets in postbuild:', err);
}
