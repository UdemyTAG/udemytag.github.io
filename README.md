# 🎓 UdemyTAG - Direktori Kupon Diskon 100% & Kursus Gratis Udemy

Platform modern berbasis **Astro SSG** dan **Tailwind CSS** yang menyediakan kurasi kupon diskon 100% dan kursus gratis Udemy legal bersertifikat. Diperbarui secara otomatis setiap 6 jam via GitHub Actions langsung dari Google Sheets.

🌐 **Website Resmi:** [https://udemytag.github.io/](https://udemytag.github.io/)

---

## 🚀 Fitur Unggulan

- ⚡ **Zero JS Overhead & SSG**: Dibangun dengan Astro untuk performa loading secepat kilat (Core Web Vitals skor tinggi).
- 🎨 **Modern SaaS UI**: Tampilan bersih, elegan, kontras tinggi, dan responsif dengan Tailwind CSS & Lucide Icons.
- 🌓 **Dark / Light Mode**: Dukungan mode gelap dan terang tanpa kedipan (*no-FOUC*).
- 🔍 **Instant Search & Filter**: Pencarian instan berbasis teks judul, materi, atau instruktur dan filter kategori tanpa reload halaman.
- 📋 **Salin Kupon Otomatis**: Tombol salin kode kupon ke clipboard dengan umpan balik visual dan notifikasi toast.
- 🔄 **Automated Google Sheets Sync**: Pipeline Node.js zero-dependency yang memetakan kolom spreadsheet secara dinamis.
- 🤖 **AI & LLM Ingestion Ready (GEO)**: Dilengkapi `public/robots.txt` (izin GPTBot, ClaudeBot, PerplexityBot, Google-Extended) dan `public/llms.txt`.
- 🏷️ **Schema.org JSON-LD**: Struktur data SEO `ItemList` dengan entitas `Course` dan `Offer` (Free).

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Lucide Icons
- **Deployment**: GitHub Pages (`gh-pages` branch) via GitHub Actions
- **Data Sync**: Node.js (`scripts/fetch-sheets.mjs`)

---

## 📂 Struktur Proyek

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions (Cron 6 jam + deploy ke gh-pages)
├── public/
│   ├── favicon.svg             # Logo vektor UdemyTAG
│   ├── googleb222826079f07436.html # Verifikasi Google Search Console
│   ├── llms.txt                # Metadata untuk bot & mesin pencari AI
│   └── robots.txt              # Konfigurasi crawler & sitemap
├── scripts/
│   └── fetch-sheets.mjs        # Skrip sinkronisasi data Google Sheets CSV ke JSON
├── src/
│   ├── components/
│   │   ├── CategoryFilter.astro # Filter badge kategori
│   │   ├── CourseCard.astro     # Kartu kursus, badge diskon & salin kupon
│   │   ├── Footer.astro         # Footer & disclaimer afiliasi Udemy
│   │   ├── HeroSection.astro    # Hero banner & live status
│   │   ├── Navbar.astro         # Header navigasi & toggle tema
│   │   └── SearchBar.astro      # Input live search & urutan
│   ├── data/
│   │   └── courses.json         # Data 80+ kursus hasil unduhan Google Sheets
│   ├── layouts/
│   │   └── BaseLayout.astro     # Layout dasar, OpenGraph & Schema.org JSON-LD
│   ├── pages/
│   │   └── index.astro          # Halaman beranda utama
│   └── styles/
│       └── global.css           # Styling dasar Tailwind & animasi
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 💻 Menjalankan Secara Lokal

1. **Clone Repository:**
   ```bash
   git clone https://github.com/UdemyTAG/udemytag.github.io.git
   cd udemytag.github.io
   ```

2. **Pasang Dependensi:**
   ```bash
   npm install
   ```

3. **Sinkronisasi Data Kursus dari Google Sheets:**
   ```bash
   npm run sync-sheets
   ```

4. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:4321` di browser Anda.

5. **Build Versi Produksi:**
   ```bash
   npm run build
   ```
   File HTML/CSS/JS statis yang sudah teroptimasi akan dihasilkan di direktori `dist/`.

---

## 🤖 Otomatisasi GitHub Actions

Workflow `.github/workflows/deploy.yml` akan berjalan secara otomatis:
- **Setiap 6 jam** (`0 */6 * * *`) via cron schedule.
- **Setiap ada push ke branch `main`**.
- **Secara manual** melalui tombol *Run workflow* di tab Actions GitHub.

Workflow ini mengunduh CSV terbaru, mengeksekusi build statis, dan mempublikasikan folder `dist/` ke branch `gh-pages` menggunakan token rahasia `secrets.GH_PAT`.

---

## ⚖️ Lisensi & Disclaimer

UdemyTAG adalah direktori kurasi independen dan tidak berafiliasi dengan Udemy, Inc. Seluruh merek dagang dan gambar kursus adalah hak milik dari pencipta masing-masing.
