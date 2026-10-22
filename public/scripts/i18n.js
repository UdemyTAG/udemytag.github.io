// Global i18n Engine for UdemyTAG (Zero-dependency, Multi-page)
(function () {
  const i18nDict = {
    id: {
      nav_active_courses: (n) => `${n} Kursus Aktif`,
      nav_total_claimed_label: 'Klaim',
      nav_catalog: 'Katalog Kursus',
      nav_tutorials: 'Tutorial & Tips',
      nav_faq: 'FAQ & Panduan',
      hero_pill: 'Terverifikasi Aktif Hari Ini',
      hero_pill_badge: 'Kupon Gratis',
      hero_headline: 'Kupon Diskon <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500">100% Gratis</span> Kursus Udemy',
      hero_headline_lead: 'Kupon Diskon Kursus Udemy',
      hero_subtitle: 'Akses materi pembelajaran premium dari instruktur Udemy terkemuka. Lengkap dengan sertifikat kelulusan resmi dan hak akses seumur hidup tanpa biaya sepeser pun.',
      badge_students_title: 'Siswa Belajar',
      badge_available: 'Aktif Hari Ini',
      badge_legal_title: '100% Legal',
      badge_legal_sub: 'Resmi Instruktur',
      badge_cert_title: 'Sertifikat',
      badge_cert_sub: 'Kelulusan Resmi',
      badge_life_title: 'Lifetime',
      badge_life_sub: 'Akses Selamanya',
      badge_curated: 'Tersedia',
      claim_unit: 'Terklaim',
      quota_prefix: 'Sisa',
      quota_suffix: 'Slot',
      detail_claimed_headline: 'Orang Telah Mengklaim',
      detail_claim_hint: '⚡ Kuota promo terbatas dari instruktur',
      detail_quota_filled: 'Terisi',
      catalog_badge: 'Katalog Pilihan',
      catalog_title: 'Eksplorasi Kupon Kursus Gratis',
      catalog_desc: 'Gunakan filter pencarian instan untuk menemukan materi yang sesuai dengan target belajar Anda.',
      search_placeholder: 'Cari kursus (cth: Python, Figma, Excel)...',
      sort_label: 'Urutkan:',
      sort_default: 'Terbaru',
      sort_rating: 'Rating Tertinggi',
      sort_title: 'Judul (A - Z)',
      count_courses_label: 'Kursus',
      cat_all: 'Semua',
      load_more_btn: (n) => `Tampilkan ${n} Kursus Lainnya`,
      pagination_status: (displayed, total) => `Menampilkan ${displayed} dari ${total} kursus`,
      all_loaded: '✓ Seluruh kursus telah ditampilkan',
      empty_title: 'Tidak ada kursus yang cocok',
      empty_desc: 'Kriteria pencarian Anda tidak menemukan hasil. Cobalah kata kunci lain atau pilih Semua Kategori.',
      reset_btn: 'Reset Pencarian',
      copy_coupon_btn: 'Salin Kupon',
      copied_btn: 'Tersalin!',
      copy_link_btn: 'Salin Link',
      link_copied_btn: 'Tersalin!',
      open_udemy_btn: 'Buka di Udemy',
      coupon_status_active: 'Kupon Aktif',
      free_label: 'GRATIS',
      toast_copied: (code) => `Kupon "${code}" berhasil disalin!`,
      faq_section_title: 'Pertanyaan yang Sering Diajukan (FAQ)',
      faq_section_subtitle: 'Panduan lengkap memanfaatkan kupon diskon 100% Udemy secara optimal.',
      footer_about: 'Direktori kurasi kupon diskon 100% dan kursus gratis Udemy legal dengan sertifikat resmi dan akses seumur hidup.',
      footer_nav_title: 'Navigasi',
      footer_nav_catalog: 'Semua Kursus',
      footer_nav_faq: 'Cara Klaim Kupon & FAQ',
      footer_claim_title: 'Cara Klaim Kupon',
      footer_step_1: 'Klik "Buka di Udemy" pada kursus pilihan Anda.',
      footer_step_2: 'Pastikan harga tertera Gratis / Free / Rp0 sebelum checkout.',
      footer_step_3: 'Klik "Daftar Sekarang" untuk menyimpan kursus permanen.',
      footer_disclaimer: '<strong>Disclaimer:</strong> UdemyTAG adalah proyek direktori independen dan tidak berafiliasi secara resmi dengan Udemy, Inc. Seluruh merek dagang dan konten merupakan hak milik masing-masing pemiliknya. Kupon diskon 100% memiliki batas kuota klaim maksimal yang diatur oleh instruktur.',
      footer_back_to_top: 'Kembali ke Atas',
      breadcrumb_home: 'Beranda',
      meta_instructor_label: 'Instruktur',
      meta_coupon_label: 'Kode Kupon',
      meta_claim_label: 'Status Klaim',
      meta_claim_val: '100% Aktif & Legal',
      meta_access_label: 'Akses',
      meta_access_val: 'Seumur Hidup (Lifetime)',
      cta_claim_udemy: 'Klaim Sekarang di Udemy (Gratis)',
      banner_more_title: 'Ingin Belajar Topik Lainnya?',
      banner_more_desc: 'Tersedia 80+ kursus gratis Udemy bersertifikat lainnya yang siap Anda klaim hari ini.',
      banner_more_btn: 'Lihat Semua Kursus',
      related_section_title: 'Kursus Pilihan Terkait',
      related_view_all: 'Lihat Katalog Lengkap →',
      
      // --- TUTORIAL / ARTICLES i18n ---
      tutorial_badge: 'Tutorial & Tips Singkat',
      tutorial_section_title: 'Tingkatkan Skill Digital & Maksimalkan Belajar',
      tutorial_section_desc: 'Kumpulan panduan teknis, tips pemrograman, pemanfaatan AI, keamanan siber, dan strategi klaim sertifikat resmi Udemy secara gratis seumur hidup.',
      tutorial_view_all_btn: (n) => `Lihat Semua (${n} Tutorial)`,
      tutorial_read_btn: 'Baca Tutorial',
      tutorial_popular_topics: 'Topik Populer:',
      tutorial_archive_link: 'Arsip Tutorial Lengkap →',
      tutorial_hub_badge: 'Pusat Pengetahuan & Panduan',
      tutorial_page_title: 'Tutorial & Tips Singkat Teknologi',
      tutorial_page_desc: 'Panduan praktis, roadmap belajar terarah, serta tips memaksimalkan kursus gratis bersertifikat resmi untuk akselerasi karir digital Anda.',
      tutorial_search_placeholder: 'Cari tutorial (misal: Python, Web Dev, Prompt AI, OWASP)...',
      tutorial_counter_prefix: 'Menampilkan',
      tutorial_counter_suffix: 'tutorial',
      tutorial_browse_courses: 'Lihat Katalog Kursus Gratis →',
      tutorial_empty_title: 'Tidak ada tutorial yang cocok',
      tutorial_empty_desc: 'Coba kata kunci pencarian yang lain atau pilih kategori \'Semua\'.',
      tutorial_reset_search: 'Reset Pencarian',
      tutorial_promo_badge: '🔥 Terverifikasi 100% Gratis',
      tutorial_promo_title: 'Ingin Langsung Praktik dengan Kursus Lengkap?',
      tutorial_promo_desc: 'Klaim kupon diskon 100% dari ribuan instruktur Udemy resmi di seluruh dunia. Dapatkan sertifikat kelulusan resmi tanpa biaya sepeser pun.',
      tutorial_promo_btn: 'Buka Katalog Kupon Kursus',
      tutorial_toc_title: 'Daftar Isi Tutorial',
      tutorial_author_role: 'Editor Edukasi Digital',
      tutorial_related_badge: 'Rekomendasi Praktik',
      tutorial_related_title: 'Kursus Gratis Terkait',
      tutorial_related_desc: 'Latih materi tutorial ini langsung dengan kursus lengkap bersertifikat resmi di Udemy:',
      tutorial_explore_all_courses: 'Jelajahi Semua Kursus Gratis →',
      tutorial_back_to_index: 'Kembali ke Indeks Tutorial',
      tutorial_prev_link: '← Tutorial Sebelumnya',
      tutorial_next_link: 'Tutorial Selanjutnya →',
      tutorial_seo_keywords_title: 'Kata Kunci Terkait (SEO Index)',
      cat_edukasi: 'Edukasi & Karir',
      cat_programming: 'Programming & IT',
      cat_ai: 'Data Science & AI',
      cat_cyber: 'Cyber Security & IT',
      cat_desain: 'Desain & UI/UX',

      faqs: {
        1: {
          q: 'Bagaimana cara klaim kursus agar harganya menjadi Rp0?',
          a: 'Klik tombol <strong>"Buka di Udemy"</strong> pada kartu kursus. Tautan tersebut sudah secara otomatis menyematkan kode kupon diskon 100%. Pastikan harga yang tertera di halaman kursus Udemy adalah <strong>Free / Gratis (Rp0)</strong> sebelum menekan tombol "Daftar Sekarang" (Enroll Now).'
        },
        2: {
          q: 'Mengapa saat saya buka, harganya kembali berbayar?',
          a: 'Kupon diskon 100% yang diterbitkan oleh instruktur Udemy memiliki <strong>batas kuota maksimal</strong> (biasanya 500 hingga 1.000 klaim di seluruh dunia) atau batas waktu tertentu (1 - 3 hari). Jika kuota klaim telah habis, Udemy otomatis mengembalikan harga ke nominal semula. Selalu klaim secepatnya saat kursus baru muncul di UdemyTAG.'
        },
        3: {
          q: 'Apakah kursus yang diklaim gratis tetap mendapatkan Sertifikat Resmi?',
          a: '<strong>Ya, 100% resmi!</strong> Karena Anda mendaftar menggunakan kupon diskon resmi dari pembuat kursus, Anda terdaftar sebagai siswa resmi dan berhak mendapatkan sertifikat kelulusan digital (Certificate of Completion) setelah menyelesaikan seluruh materi.'
        },
        4: {
          q: 'Apakah akses materi kursus berlaku seumur hidup?',
          a: 'Ya, setelah berhasil menambahkan kursus ke akun Udemy Anda, kursus tersebut akan tersimpan permanen di menu "My Learning" dan dapat diakses kapan saja tanpa batas waktu kedaluwarsa.'
        },
        5: {
          q: 'Di mana saya bisa mendapatkan pemberitahuan kupon rilis paling cepat?',
          a: 'Anda dapat bergabung di Channel Telegram kami di <a href="https://t.me/trikandroidgold" target="_blank" rel="noopener noreferrer" class="text-rose-600 dark:text-rose-400 font-bold underline hover:opacity-80">@trikandroidgold</a> dan mengikuti halaman Facebook kami di <a href="https://web.facebook.com/Trikandroidgold" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 font-bold underline hover:opacity-80">@Trikandroidgold</a> untuk mendapatkan info kupon gratis seketika begitu dirilis.'
        }
      }
    },

    en: {
      nav_active_courses: (n) => `${n} Active Courses`,
      nav_total_claimed_label: 'Claims',
      nav_catalog: 'Course Catalog',
      nav_tutorials: 'Tutorials & Tips',
      nav_faq: 'FAQ & Guide',
      hero_pill: 'Verified Active Today',
      hero_pill_badge: 'Free Coupons',
      hero_headline: '<span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500">100% Free</span> Udemy Course Discount Coupons',
      hero_headline_lead: 'Udemy Course Discount Coupons',
      hero_subtitle: 'Access premium learning materials from top Udemy instructors. Complete with official certificate of completion and lifetime access at zero cost.',
      badge_students_title: 'Students Enrolled',
      badge_available: 'Active Today',
      badge_legal_title: '100% Legal',
      badge_legal_sub: 'Official Instructors',
      badge_cert_title: 'Certificate',
      badge_cert_sub: 'Official Completion',
      badge_life_title: 'Lifetime',
      badge_life_sub: 'Forever Access',
      badge_curated: 'Available',
      claim_unit: 'Claimed',
      quota_prefix: 'Left',
      quota_suffix: 'Slots',
      detail_claimed_headline: 'People Have Claimed',
      detail_claim_hint: '⚡ Limited promo quota from instructor',
      detail_quota_filled: 'Filled',
      catalog_badge: 'Featured Catalog',
      catalog_title: 'Explore Free Course Coupons',
      catalog_desc: 'Use instant search filters to discover courses matching your learning goals.',
      search_placeholder: 'Search courses (e.g. Python, Figma, Excel)...',
      sort_label: 'Sort by:',
      sort_default: 'Newest',
      sort_rating: 'Highest Rating',
      sort_title: 'Title (A - Z)',
      count_courses_label: 'Courses',
      cat_all: 'All',
      load_more_btn: (n) => `Show ${n} More Courses`,
      pagination_status: (displayed, total) => `Showing ${displayed} of ${total} courses`,
      all_loaded: '✓ All courses have been displayed',
      empty_title: 'No matching courses found',
      empty_desc: 'Your search criteria did not match any courses. Try different keywords or select All Categories.',
      reset_btn: 'Reset Search',
      copy_coupon_btn: 'Copy Coupon',
      copied_btn: 'Copied!',
      copy_link_btn: 'Copy Link',
      link_copied_btn: 'Copied!',
      open_udemy_btn: 'Open in Udemy',
      coupon_status_active: 'Active Coupon',
      free_label: 'FREE',
      toast_copied: (code) => `Coupon "${code}" copied to clipboard!`,
      faq_section_title: 'Frequently Asked Questions (FAQ)',
      faq_section_subtitle: 'Complete guide on claiming and utilizing 100% off Udemy coupons.',
      footer_about: 'Curated directory of 100% discount coupons and verified legal free Udemy courses with certificates and lifetime access.',
      footer_nav_title: 'Navigation',
      footer_nav_catalog: 'All Courses',
      footer_nav_faq: 'How to Claim & FAQ',
      footer_claim_title: 'How to Claim Coupon',
      footer_step_1: 'Click "Open in Udemy" on your chosen course card.',
      footer_step_2: 'Ensure the price shows Free / $0 / Rp0 before enrolling.',
      footer_step_3: 'Click "Enroll Now" to permanently save the course to your account.',
      footer_disclaimer: '<strong>Disclaimer:</strong> UdemyTAG is an independent directory project and is not officially affiliated with Udemy, Inc. All trademarks and course materials belong to their respective owners. 100% off coupons have limited claim quotas set by instructors.',
      footer_back_to_top: 'Back to Top',
      breadcrumb_home: 'Home',
      meta_instructor_label: 'Instructor',
      meta_coupon_label: 'Coupon Code',
      meta_claim_label: 'Claim Status',
      meta_claim_val: '100% Active & Legal',
      meta_access_label: 'Access',
      meta_access_val: 'Lifetime Access',
      cta_claim_udemy: 'Claim Now on Udemy (Free)',
      banner_more_title: 'Want to Learn Other Topics?',
      banner_more_desc: 'Explore 80+ other free certified Udemy courses ready to claim today.',
      banner_more_btn: 'View All Courses',
      related_section_title: 'Related Recommended Courses',
      related_view_all: 'Browse Full Catalog →',

      // --- TUTORIAL / ARTICLES i18n ---
      tutorial_badge: 'Tutorials & Quick Tips',
      tutorial_section_title: 'Boost Digital Skills & Maximize Your Learning',
      tutorial_section_desc: 'Curated technical guides, coding tips, AI workflows, cybersecurity, and strategies to claim official Udemy certificates for free.',
      tutorial_view_all_btn: (n) => `View All (${n} Tutorials)`,
      tutorial_read_btn: 'Read Tutorial',
      tutorial_popular_topics: 'Popular Topics:',
      tutorial_archive_link: 'Full Tutorial Archive →',
      tutorial_hub_badge: 'Knowledge Hub & Guides',
      tutorial_page_title: 'Tech Tutorials & Quick Guides',
      tutorial_page_desc: 'Practical guides, structured learning roadmaps, and tips to maximize certified free courses for your digital career.',
      tutorial_search_placeholder: 'Search tutorials (e.g. Python, Web Dev, Prompt AI, OWASP)...',
      tutorial_counter_prefix: 'Showing',
      tutorial_counter_suffix: 'tutorials',
      tutorial_browse_courses: 'Browse Free Courses Catalog →',
      tutorial_empty_title: 'No matching tutorials found',
      tutorial_empty_desc: 'Try different search keywords or select the \'All\' category.',
      tutorial_reset_search: 'Reset Search',
      tutorial_promo_badge: '🔥 100% Verified Free',
      tutorial_promo_title: 'Ready for Full Hands-on Courses?',
      tutorial_promo_desc: 'Claim 100% off coupons from verified Udemy instructors worldwide. Get official completion certificates at zero cost.',
      tutorial_promo_btn: 'Open Free Courses Catalog',
      tutorial_toc_title: 'Table of Contents',
      tutorial_author_role: 'Digital Learning Editor',
      tutorial_related_badge: 'Recommended Practice',
      tutorial_related_title: 'Related Free Courses',
      tutorial_related_desc: 'Practice these tutorial concepts directly with complete verified courses on Udemy:',
      tutorial_explore_all_courses: 'Explore All Free Courses →',
      tutorial_back_to_index: 'Back to Tutorial Archive',
      tutorial_prev_link: '← Previous Tutorial',
      tutorial_next_link: 'Next Tutorial →',
      tutorial_seo_keywords_title: 'Related Keywords (SEO Index)',
      cat_edukasi: 'Education & Career',
      cat_programming: 'Programming & IT',
      cat_ai: 'Data Science & AI',
      cat_cyber: 'Cyber Security & IT',
      cat_desain: 'UI/UX & Design',

      faqs: {
        1: {
          q: 'How do I claim a course so the price becomes $0 (Free)?',
          a: 'Click the <strong>"Open in Udemy"</strong> button on the course card. The link automatically applies the 100% discount coupon. Make sure the price shown on the Udemy course page is <strong>Free ($0 / Rp0)</strong> before clicking "Enroll Now".'
        },
        2: {
          q: 'Why does the course return to paid price when I open it?',
          a: '100% off coupons issued by Udemy instructors have a <strong>maximum claim quota</strong> (usually 500 to 1,000 enrollments worldwide) or a time expiration (1 - 3 days). Once the quota runs out, Udemy automatically reverts to the original price. Always enroll as soon as a course appears on UdemyTAG.'
        },
        3: {
          q: 'Do free claimed courses still come with an Official Certificate?',
          a: '<strong>Yes, 100% official!</strong> Because you enroll using an official promo coupon from the instructor, you are registered as a verified student and are eligible for an official digital Certificate of Completion upon finishing all modules.'
        },
        4: {
          q: 'Does course access last a lifetime?',
          a: 'Yes, once you successfully enroll a course into your Udemy account, it is saved permanently in your "My Learning" library and can be accessed anytime with no expiration.'
        },
        5: {
          q: 'Where can I get real-time updates for new coupon releases?',
          a: 'You can join our Telegram Channel at <a href="https://t.me/trikandroidgold" target="_blank" rel="noopener noreferrer" class="text-rose-600 dark:text-rose-400 font-bold underline hover:opacity-80">@trikandroidgold</a> and follow our Facebook Page at <a href="https://web.facebook.com/Trikandroidgold" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 font-bold underline hover:opacity-80">@Trikandroidgold</a> for instant coupon alerts.'
        }
      }
    }
  };

  window.i18nDict = i18nDict;

  function getCurrentLang() {
    try {
      return localStorage.getItem('lang') || 'id';
    } catch (_) {
      return 'id';
    }
  }

  function applyLanguage(lang) {
    const validLang = lang === 'en' ? 'en' : 'id';
    try {
      localStorage.setItem('lang', validLang);
    } catch (_) {}
    document.documentElement.lang = validLang;

    // Update toggle button text in navbar
    const langLabel = document.getElementById('lang-current-label');
    if (langLabel) {
      langLabel.textContent = validLang.toUpperCase();
    }
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langToggleBtn) {
      langToggleBtn.setAttribute(
        'aria-label',
        validLang === 'id' ? 'ID - Ganti Bahasa (Switch Language)' : 'EN - Switch Language (Ganti Bahasa)'
      );
    }

    const dict = i18nDict[validLang] || i18nDict.id;
    const isEn = validLang === 'en';

    // 1. Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (typeof dict[key] === 'function') {
          const totalCourses = document.querySelectorAll('.course-card').length || 69;
          const totalArticles = document.querySelectorAll('.article-card').length || 6;
          const num = key.includes('tutorial') ? totalArticles : totalCourses;
          el.innerHTML = dict[key](num);
        } else {
          el.innerHTML = dict[key];
        }
      }
    });

    // 2. Update search input placeholders
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.placeholder = dict.search_placeholder;
    }
    const tutorialSearch = document.getElementById('tutorial-search');
    if (tutorialSearch) {
      tutorialSearch.placeholder = dict.tutorial_search_placeholder;
    }

    // 3. Update Course Card texts
    document.querySelectorAll('.open-btn-text').forEach((el) => {
      el.textContent = dict.open_udemy_btn;
    });

    document.querySelectorAll('.copy-btn-text').forEach((el) => {
      const btn = el.closest('.copy-coupon-btn');
      if (!btn?.classList.contains('border-emerald-500')) {
        el.textContent = dict.copy_coupon_btn;
      }
    });

    document.querySelectorAll('.copy-link-text').forEach((el) => {
      const btn = el.closest('.copy-post-link-btn');
      if (!btn?.classList.contains('border-emerald-500')) {
        el.textContent = dict.copy_link_btn;
      }
    });

    document.querySelectorAll('.coupon-status-text').forEach((el) => {
      el.textContent = dict.coupon_status_active;
    });

    document.querySelectorAll('.free-badge-label').forEach((el) => {
      el.textContent = dict.free_label;
    });

    // 4. Update Category "Semua" / "All"
    const catAllLabel = document.querySelector('[data-category="all"] .cat-label');
    if (catAllLabel) {
      catAllLabel.textContent = dict.cat_all;
    }

    // 5. Update FAQ items
    if (dict.faqs) {
      document.querySelectorAll('.faq-q-text').forEach((el) => {
        const id = el.getAttribute('data-faq-id');
        if (dict.faqs[id]) el.innerHTML = dict.faqs[id].q;
      });
      document.querySelectorAll('.faq-a-text').forEach((el) => {
        const id = el.getAttribute('data-faq-id');
        if (dict.faqs[id]) el.innerHTML = dict.faqs[id].a;
      });
    }

    // 6. Update Article Cards (both homepage & tutorial catalog)
    document.querySelectorAll('.article-card').forEach((card) => {
      const titleLink = card.querySelector('.article-card-title-link');
      if (titleLink) {
        titleLink.textContent = isEn ? (card.getAttribute('data-title-en') || titleLink.textContent) : (card.getAttribute('data-title-id') || titleLink.textContent);
      }
      const excerptEl = card.querySelector('.article-card-excerpt-text');
      if (excerptEl) {
        excerptEl.textContent = isEn ? (card.getAttribute('data-excerpt-en') || excerptEl.textContent) : (card.getAttribute('data-excerpt-id') || excerptEl.textContent);
      }
      const catBadge = card.querySelector('.article-card-cat-badge');
      if (catBadge) {
        catBadge.textContent = isEn ? (card.getAttribute('data-cat-en') || catBadge.textContent) : (card.getAttribute('data-cat-id') || catBadge.textContent);
      }
      const readTimeEl = card.querySelector('.article-read-time-label');
      if (readTimeEl) {
        const time = card.getAttribute('data-read-time') || '5';
        readTimeEl.textContent = isEn ? `${time} min read` : `${time} mnt baca`;
      }
      const readBtn = card.querySelector('.article-read-btn-text');
      if (readBtn) {
        readBtn.textContent = dict.tutorial_read_btn;
      }
    });

    // 7. Update Category Filter Tabs on Tutorial Catalog Page
    const catKeyMap = {
      'Semua': 'cat_all',
      'All': 'cat_all',
      'Edukasi & Karir': 'cat_edukasi',
      'Education & Career': 'cat_edukasi',
      'Programming & IT': 'cat_programming',
      'Data Science & AI': 'cat_ai',
      'Cyber Security & IT': 'cat_cyber',
      'Desain & UI/UX': 'cat_desain',
      'UI/UX & Design': 'cat_desain'
    };

    document.querySelectorAll('.category-tab-btn').forEach((btn) => {
      const cat = btn.getAttribute('data-category') || '';
      const key = catKeyMap[cat];
      if (key && dict[key]) {
        const span = btn.querySelector('span:first-child');
        if (span) span.textContent = dict[key];
      }
    });

    // 8. Update Article Reader Detail Page
    const articleDetail = document.getElementById('article-detail-page');
    if (articleDetail) {
      const bodyId = document.getElementById('article-body-id');
      const bodyEn = document.getElementById('article-body-en');
      const h1El = document.getElementById('article-title-heading');
      const descEl = document.getElementById('article-excerpt-lead');
      const catEl = document.getElementById('article-category-badge');
      const readTimeDetail = document.getElementById('article-read-time-detail');
      const tocId = document.getElementById('article-toc-id');
      const tocEn = document.getElementById('article-toc-en');

      if (isEn) {
        if (bodyId) bodyId.classList.add('hidden');
        if (bodyEn) bodyEn.classList.remove('hidden');
        if (tocId) tocId.classList.add('hidden');
        if (tocEn) tocEn.classList.remove('hidden');
        if (h1El) h1El.textContent = articleDetail.getAttribute('data-title-en') || h1El.textContent;
        if (descEl) descEl.textContent = articleDetail.getAttribute('data-excerpt-en') || descEl.textContent;
        if (catEl) catEl.textContent = articleDetail.getAttribute('data-cat-en') || catEl.textContent;
        if (readTimeDetail) readTimeDetail.textContent = `${articleDetail.getAttribute('data-read-time') || 5} min read`;
      } else {
        if (bodyId) bodyId.classList.remove('hidden');
        if (bodyEn) bodyEn.classList.add('hidden');
        if (tocId) tocId.classList.remove('hidden');
        if (tocEn) tocEn.classList.add('hidden');
        if (h1El) h1El.textContent = articleDetail.getAttribute('data-title-id') || h1El.textContent;
        if (descEl) descEl.textContent = articleDetail.getAttribute('data-excerpt-id') || descEl.textContent;
        if (catEl) catEl.textContent = articleDetail.getAttribute('data-cat-id') || catEl.textContent;
        if (readTimeDetail) readTimeDetail.textContent = `${articleDetail.getAttribute('data-read-time') || 5} menit baca`;
      }
    }

    // Dispatch global event for page-specific handlers
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: validLang, dict } }));
  }

  window.applyLanguage = applyLanguage;

  // --- REAL-TIME COUPON CLAIM TRACKER & PERSISTENCE ---
  function getClaimStorage() {
    try {
      const raw = localStorage.getItem('udemytag_claimed_data');
      return raw ? JSON.parse(raw) : { courses: {}, totalBonus: 0 };
    } catch (_) {
      return { courses: {}, totalBonus: 0 };
    }
  }

  function saveClaimStorage(data) {
    try {
      localStorage.setItem('udemytag_claimed_data', JSON.stringify(data));
    } catch (_) {}
  }

  function renderClaimUpdates() {
    const data = getClaimStorage();
    const coursesBonus = data.courses || {};
    const totalBonus = data.totalBonus || 0;

    if (totalBonus === 0 && Object.keys(coursesBonus).length === 0) {
      return;
    }

    Object.keys(coursesBonus).forEach((courseId) => {
      const bonus = coursesBonus[courseId] || 0;
      if (bonus <= 0) return;

      document.querySelectorAll(`.card-claimed-number[data-course-id="${courseId}"]`).forEach((el) => {
        const base = parseInt(el.getAttribute('data-base') || el.textContent, 10);
        if (!isNaN(base)) {
          el.textContent = base + bonus;
        }
      });

      document.querySelectorAll(`.card-remaining-number[data-course-id="${courseId}"]`).forEach((el) => {
        const barEl = document.querySelector(`.card-claim-bar[data-course-id="${courseId}"]`);
        const quota = barEl ? parseInt(barEl.getAttribute('data-quota') || '500', 10) : 500;
        const claimedEl = document.querySelector(`.card-claimed-number[data-course-id="${courseId}"]`);
        const currentClaimed = claimedEl ? parseInt(claimedEl.textContent, 10) : (quota * 0.8);
        const remaining = Math.max(0, quota - currentClaimed);
        el.textContent = remaining;

        if (barEl) {
          const percent = Math.min(100, Math.round((currentClaimed / quota) * 100));
          barEl.style.width = `${percent}%`;
        }
      });
    });

    if (totalBonus > 0) {
      document.querySelectorAll('.hero-total-claimed-num').forEach((el) => {
        const base = parseInt(el.getAttribute('data-base') || el.textContent.replace(/[^0-9]/g, ''), 10);
        if (!isNaN(base)) {
          el.textContent = (base + totalBonus).toLocaleString();
        }
      });

      document.querySelectorAll('.hero-highlight-claimed-num').forEach((el) => {
        const base = parseInt(el.getAttribute('data-base') || '41900', 10);
        if (!isNaN(base)) {
          const total = base + totalBonus;
          el.textContent = `${Math.round(total / 1000)}k+`;
        }
      });

      document.querySelectorAll('.nav-total-claimed-num').forEach((el) => {
        const heroEl = document.querySelector('.hero-total-claimed-num');
        const base = heroEl ? parseInt(heroEl.getAttribute('data-base') || '41900', 10) : 41900;
        const total = base + totalBonus;
        el.textContent = `${Math.round(total / 1000)}k+`;
      });
    }
  }

  function handleClaimAction(courseId) {
    if (!courseId) return;
    const data = getClaimStorage();
    if (!data.courses) data.courses = {};

    const currentBonus = data.courses[courseId] || 0;
    if (currentBonus < 5) {
      data.courses[courseId] = currentBonus + 1;
      data.totalBonus = (data.totalBonus || 0) + 1;
      saveClaimStorage(data);
      renderClaimUpdates();

      document.querySelectorAll(`.card-claimed-number[data-course-id="${courseId}"]`).forEach((el) => {
        el.classList.add('scale-125', 'text-rose-500', 'transition-transform');
        setTimeout(() => el.classList.remove('scale-125', 'text-rose-500'), 400);
      });
    }
  }

  window.renderClaimUpdates = renderClaimUpdates;
  window.handleClaimAction = handleClaimAction;

  function initI18n() {
    const currentLang = getCurrentLang();
    applyLanguage(currentLang);
    renderClaimUpdates();

    const toggleBtn = document.getElementById('lang-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const activeLang = getCurrentLang();
        const nextLang = activeLang === 'id' ? 'en' : 'id';
        applyLanguage(nextLang);
      });
    }

    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.claim-action-trigger');
      if (trigger) {
        const courseId = trigger.getAttribute('data-course-id');
        if (courseId) {
          handleClaimAction(courseId);
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
})();
