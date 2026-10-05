import fs from 'node:fs';
import path from 'node:path';

// URL Google Sheets CSV untuk data courses (gid=949957534 adalah tab 'Body' yang memuat katalog kursus)
let CSV_URL = process.env.SHEETS_CSV_URL || 
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1TQLqIVYPmLukrWrDFt4yOboFw3EzwNP8XHdy7oZDYfm07c6TYmhndgGWeK-ECyySkcXfXjG3IROR/pub?gid=949957534&single=true&output=csv';

// Jika pengguna memasukkan URL sheet tanpa parameter gid, tambahkan gid tab Body agar mengekstrak kursus yang tepat
if (CSV_URL.includes('2PACX-1vQ1TQLqIVYPmLukrWrDFt4yOboFw3EzwNP8XHdy7oZDYfm07c6TYmhndgGWeK-ECyySkcXfXjG3IROR') && !CSV_URL.includes('gid=')) {
  CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1TQLqIVYPmLukrWrDFt4yOboFw3EzwNP8XHdy7oZDYfm07c6TYmhndgGWeK-ECyySkcXfXjG3IROR/pub?gid=949957534&single=true&output=csv';
}

const OUTPUT_DIR = path.resolve('src/data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'courses.json');

// Parser CSV zero-dependency yang menangani quote, koma, dan newline
function parseCSV(text) {
  const lines = [];
  let row = [''];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        row[row.length - 1] += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push('');
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') i++;
      if (row.length > 1 || row[0] !== '') {
        lines.push(row);
      }
      row = [''];
    } else {
      row[row.length - 1] += char;
    }
  }
  if (row.length > 1 || row[0] !== '') lines.push(row);
  return lines;
}

function normalizeKey(str) {
  return str.trim().toLowerCase().replace(/[^a-z0-9]/g, '_');
}

function getField(obj, candidates) {
  // 1. Coba exact key terlebih dahulu
  for (const candidate of candidates) {
    if (obj[candidate] !== undefined && obj[candidate] !== '') {
      return obj[candidate];
    }
  }
  // 2. Coba partial match yang aman (jangan sampai 'url' mencocokkan 'image_url')
  for (const candidate of candidates) {
    for (const key of Object.keys(obj)) {
      if (candidate === 'url' && (key.includes('image') || key.includes('gambar') || key.includes('thumb') || key.includes('cover'))) {
        continue;
      }
      if (key.includes(candidate) && obj[key]) {
        return obj[key];
      }
    }
  }
  return '';
}

async function run() {
  console.log(`[UdemyTAG Pipeline] Mengunduh data spreadsheet dari CSV: ${CSV_URL}`);
  try {
    const res = await fetch(CSV_URL);
    if (!res.ok) throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    const csvRaw = await res.text();

    const parsed = parseCSV(csvRaw);
    if (parsed.length < 2) {
      console.warn('[UdemyTAG Pipeline] Data CSV kosong atau hanya memiliki header.');
      return;
    }

    const headers = parsed[0].map(normalizeKey);
    const rows = parsed.slice(1);

    const formattedCourses = rows
      .filter(row => row.some(cell => cell && cell.trim().length > 0))
      .map((row, index) => {
        const rowObj = {};
        headers.forEach((h, i) => {
          rowObj[h] = (row[i] || '').trim();
        });

        const title = getField(rowObj, ['title', 'judul', 'course', 'name']) || `Udemy Course #${index + 1}`;
        // Prioritaskan 'link' dan abaikan 'image_url' untuk course URL
        const url = getField(rowObj, ['link', 'course_url', 'udemy_url', 'udemy', 'url']) || '#';
        const image = getField(rowObj, ['image_url', 'image', 'gambar', 'thumb', 'cover', 'img']) || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80';
        
        let category = getField(rowObj, ['category', 'kategori', 'cat', 'topic', 'tag']) || 'Development';
        if (!category || category.toLowerCase() === 'general' || category.trim() === '') {
          // Klasifikasi kategori otomatis berbasis kata kunci judul
          const tLower = title.toLowerCase();
          if (/python|javascript|react|node|html|css|web|developer|programming|coding|sql|c\+\+|java\b|flutter|docker|api|algorithm|git\b|backend|frontend/i.test(tLower)) {
            category = 'Development';
          } else if (/business|finance|management|marketing|excel|sales|startup|accounting|economics|mba|agile|scrum/i.test(tLower)) {
            category = 'Business';
          } else if (/design|ui|ux|photoshop|figma|graphic|illustrator|canva|video|blender|3d|drawing/i.test(tLower)) {
            category = 'Design';
          } else if (/security|cyber|network|linux|aws|cloud|ethical hacking|azure|devops|kali|pentest|sysadmin/i.test(tLower)) {
            category = 'IT & Software';
          } else if (/psychology|productivity|life|mindfulness|speaking|language|self|habit|health/i.test(tLower)) {
            category = 'Personal Development';
          } else if (/seo|marketing|social media|advertising|copywriting|ads|content/i.test(tLower)) {
            category = 'Marketing';
          } else {
            category = 'Development';
          }
        }

        // Ekstraksi kupon dari url param bila tersedia (misal ?couponCode=XYZ)
        let extractedCoupon = '';
        try {
          if (url.includes('couponCode=')) {
            const match = url.match(/[?&]couponCode=([A-Za-z0-9_-]+)/i);
            if (match && match[1]) {
              extractedCoupon = match[1];
            }
          }
        } catch (_) {}

        const coupon = getField(rowObj, ['coupon', 'kupon', 'code', 'kode']) || extractedCoupon || '100% OFF';
        const instructor = getField(rowObj, ['instructor', 'pengajar', 'author', 'speaker']) || 'Udemy Instructor';
        const price = getField(rowObj, ['price', 'harga', 'original']) || '$84.99';
        
        // Rating dinamis realistis 4.6 - 4.9
        const fallbackRating = (4.6 + ((index * 3) % 4) * 0.1).toFixed(1);
        const rating = getField(rowObj, ['rating', 'rate', 'star']) || fallbackRating;
        
        const description = getField(rowObj, ['desc', 'deskripsi', 'detail', 'summary']) || 
          `Dapatkan akses gratis ke kursus ${title} dengan kupon diskon 100% terbaru di UdemyTAG.`;
        const expiry = getField(rowObj, ['expiry', 'kadaluarsa', 'exp', 'date', 'tanggal', 'last_updated', 'last']) || 'Limited Time';

        return {
          id: `course-${index + 1}`,
          title,
          url,
          image,
          category,
          coupon,
          instructor,
          originalPrice: price,
          discountPrice: 'Free',
          rating,
          description,
          expiryDate: expiry
        };
      })
      .filter(c => c.title && c.url && c.url !== '#');

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(formattedCourses, null, 2), 'utf-8');
    console.log(`[UdemyTAG Pipeline] Sukses memproses ${formattedCourses.length} kursus ke ${OUTPUT_FILE}`);
  } catch (error) {
    console.error(`[UdemyTAG Pipeline] Gagal sinkronisasi data:`, error);
    process.exit(1);
  }
}

run();
