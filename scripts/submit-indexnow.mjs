import fs from 'node:fs';
import path from 'node:path';

const INDEXNOW_KEY = 'e74b9d031c2847d9b9a65191c4d92038';
const HOST = 'udemytag.github.io';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

async function main() {
  console.log('🚀 [IndexNow] Memulai submit URL untuk pengindeksan instan mesin pencari (Bing, Yandex, ChatGPT Search)...');

  const coursesFilePath = path.resolve('src/data/courses.json');
  if (!fs.existsSync(coursesFilePath)) {
    console.error('File courses.json tidak ditemukan.');
    return;
  }

  const courses = JSON.parse(fs.readFileSync(coursesFilePath, 'utf-8'));
  const urls = [
    `https://${HOST}/`,
    ...courses.map((c) => `https://${HOST}/course/${c.slug || c.id}/`),
  ];

  console.log(`📋 Total URL yang disubmit: ${urls.length}`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls.slice(0, 100), // IndexNow batch max 10,000, 100 is optimal
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`📡 Mengirim ping ke ${endpoint}...`);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok || res.status === 200 || res.status === 202) {
        console.log(`✅ [${endpoint}] Berhasil! Status: ${res.status} (${res.statusText || 'Accepted'})`);
      } else {
        const text = await res.text();
        console.log(`ℹ️ [${endpoint}] Respon status: ${res.status} - ${text}`);
      }
    } catch (err) {
      console.warn(`⚠️ Gagal menghubungi ${endpoint}:`, err.message);
    }
  }

  console.log('🎉 [IndexNow] Selesai mengirimkan permintaan pengindeksan!');
}

main().catch(console.error);
