// Global i18n Engine for UdemyTAG (Zero-dependency, Multi-page)
(function () {
  const i18nDict = {
    id: {
      nav_active_courses: (n) => `${n} Kursus Aktif`,
      nav_total_claimed_label: 'Klaim',
      nav_catalog: 'Katalog Kursus',
      nav_faq: 'FAQ & Panduan',
      hero_pill: 'Terverifikasi Aktif Hari Ini',
      hero_headline: 'Kupon Diskon <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500">100% Gratis</span> Kursus Udemy',
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
          a: 'Anda dapat bergabung di Channel Telegram kami di <a href="https://t.me/trikandroidgold" target="_blank" class="text-rose-600 dark:text-rose-400 font-bold underline hover:opacity-80">@trikandroidgold</a> dan mengikuti halaman Facebook kami di <a href="https://web.facebook.com/Trikandroidgold" target="_blank" class="text-blue-600 dark:text-blue-400 font-bold underline hover:opacity-80">@Trikandroidgold</a> untuk mendapatkan info kupon gratis seketika begitu dirilis.'
        }
      }
    },
    en: {
      nav_active_courses: (n) => `${n} Active Courses`,
      nav_total_claimed_label: 'Claims',
      nav_catalog: 'Course Catalog',
      nav_faq: 'FAQ & Guide',
      hero_pill: 'Verified Active Today',
      hero_headline: '<span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500">100% Free</span> Udemy Course Discount Coupons',
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
          a: 'You can join our Telegram Channel at <a href="https://t.me/trikandroidgold" target="_blank" class="text-rose-600 dark:text-rose-400 font-bold underline hover:opacity-80">@trikandroidgold</a> and follow our Facebook Page at <a href="https://web.facebook.com/Trikandroidgold" target="_blank" class="text-blue-600 dark:text-blue-400 font-bold underline hover:opacity-80">@Trikandroidgold</a> for instant coupon alerts.'
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

    const dict = i18nDict[validLang] || i18nDict.id;

    // 1. Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (typeof dict[key] === 'function') {
          const totalCards = document.querySelectorAll('.course-card').length || 80;
          el.innerHTML = dict[key](totalCards);
        } else {
          el.innerHTML = dict[key];
        }
      }
    });

    // 2. Update search input placeholder (if on homepage)
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.placeholder = dict.search_placeholder;
    }

    // 3. Update Course Card texts (both homepage & course page related cards)
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

    // 4. Update Course Detail Page specific buttons
    const copyCouponDetailText = document.getElementById('copy-coupon-text');
    if (copyCouponDetailText && copyCouponDetailText.textContent !== dict.copied_btn) {
      copyCouponDetailText.textContent = validLang === 'en' ? 'Copy Coupon Code' : 'Salin Kode Kupon';
    }

    const shareBtnText = document.getElementById('share-btn-text');
    if (shareBtnText && shareBtnText.textContent !== dict.link_copied_btn) {
      shareBtnText.textContent = dict.copy_link_btn;
    }

    // 5. Update FAQ items (if on homepage)
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

    // 6. Update Category "Semua" / "All"
    const catAllLabel = document.querySelector('[data-category="all"] .cat-label');
    if (catAllLabel) {
      catAllLabel.textContent = dict.cat_all;
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

    // 1. Update individual course card & course detail page counters
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
        const card = el.closest('article') || document.querySelector('.card-claim-bar')?.parentElement?.parentElement;
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

    // 2. Update overall total claims across the platform
    const totalBonus = data.totalBonus || 0;
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

      // Trigger micro-bounce feedback on the clicked course's counters
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

    // Event listener on Navbar language toggle button
    const toggleBtn = document.getElementById('lang-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const activeLang = getCurrentLang();
        const nextLang = activeLang === 'id' ? 'en' : 'id';
        applyLanguage(nextLang);
      });
    }

    // Global listener for claim action triggers (Udemy CTA & Copy Coupon)
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
