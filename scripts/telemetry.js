/**
 * UdemyTAG Real-time Privacy-First Telemetry Engine (v3 Pure Real Data)
 * Records real user interactions: pageviews, course coupon clicks, article reading, and referrers.
 * 100% Client-side & Privacy-First (No tracking cookies, GDPR compliant).
 * Starts strictly from 0 (Pure Real Event Logging - Zero Mock Data).
 */
(function() {
  'use strict';

  const STORAGE_KEY = 'udemytag_telemetry_real_v3';
  const VISITOR_ID_KEY = 'udemytag_visitor_token_v3';

  // Helper: Device detection
  function detectDevice() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'Tablet';
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated/i.test(ua)) return 'Mobile';
    return 'Desktop';
  }

  // Helper: Detect referrer source
  function detectReferrer() {
    const ref = document.referrer ? document.referrer.toLowerCase() : '';
    if (!ref) return 'Direct / Bookmark';
    if (ref.includes('google.')) return 'Google Organic Search';
    if (ref.includes('t.me') || ref.includes('telegram')) return 'Telegram Channel';
    if (ref.includes('facebook.') || ref.includes('fb.com')) return 'Facebook Community';
    if (ref.includes('twitter.') || ref.includes('t.co') || ref.includes('x.com')) return 'Twitter / X';
    return 'Web Referral (' + new URL(document.referrer).hostname + ')';
  }

  // Initial clean state (Starts strictly from 0)
  function getEmptyState() {
    return {
      totalPageviews: 0,
      uniqueVisitors: 0,
      totalCourseClaims: 0,
      totalArticleReads: 0,
      sessionStart: Date.now(),
      devices: {
        Mobile: 0,
        Desktop: 0,
        Tablet: 0
      },
      sources: {},
      courses: {},   // { [courseId]: { id, title, category, claims: 0 } }
      articles: {},  // { [slug]: { slug, title, category, views: 0, readSeconds: 0 } }
      searches: [],
      daily: {}      // { '2026-10-22': { views: 0, claims: 0, reads: 0 } }
    };
  }

  // Load telemetry data from localStorage
  function loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return getEmptyState();
      return JSON.parse(raw);
    } catch (_) {
      return getEmptyState();
    }
  }

  // Save telemetry data
  function saveData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (_) {}
  }

  // Get current date string YYYY-MM-DD
  function getTodayKey() {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  }

  // Telemetry API object
  window.UdemyTelemetry = {
    // Track Pageview
    trackPageView: function(pathname) {
      const data = loadData();
      const today = getTodayKey();

      data.totalPageviews = (data.totalPageviews || 0) + 1;

      // Unique visitor detection (per browser session / localStorage)
      let isNewVisitor = false;
      if (!localStorage.getItem(VISITOR_ID_KEY)) {
        localStorage.setItem(VISITOR_ID_KEY, 'v_' + Math.random().toString(36).substring(2, 9));
        data.uniqueVisitors = (data.uniqueVisitors || 0) + 1;
        isNewVisitor = true;
      }

      // Track Device
      const device = detectDevice();
      if (!data.devices) data.devices = { Mobile: 0, Desktop: 0, Tablet: 0 };
      data.devices[device] = (data.devices[device] || 0) + 1;

      // Track Referrer Source
      const source = detectReferrer();
      if (!data.sources) data.sources = {};
      data.sources[source] = (data.sources[source] || 0) + 1;

      // Track Daily Trend
      if (!data.daily) data.daily = {};
      if (!data.daily[today]) data.daily[today] = { views: 0, claims: 0, reads: 0 };
      data.daily[today].views = (data.daily[today].views || 0) + 1;

      saveData(data);
    },

    // Track Course Coupon Claim
    trackCourseClick: function(course) {
      if (!course || !course.id) return;
      const data = loadData();
      const today = getTodayKey();

      data.totalCourseClaims = (data.totalCourseClaims || 0) + 1;

      if (!data.courses) data.courses = {};
      const cid = course.id;
      if (!data.courses[cid]) {
        data.courses[cid] = {
          id: cid,
          title: course.title || `Kursus #${cid}`,
          category: course.category || 'Development',
          claims: 0
        };
      }
      data.courses[cid].claims += 1;

      if (!data.daily) data.daily = {};
      if (!data.daily[today]) data.daily[today] = { views: 0, claims: 0, reads: 0 };
      data.daily[today].claims = (data.daily[today].claims || 0) + 1;

      saveData(data);
    },

    // Track Article View
    trackArticleView: function(article) {
      if (!article || !article.slug) return;
      const data = loadData();
      const today = getTodayKey();

      data.totalArticleReads = (data.totalArticleReads || 0) + 1;

      if (!data.articles) data.articles = {};
      const slug = article.slug;
      if (!data.articles[slug]) {
        data.articles[slug] = {
          slug: slug,
          title: article.title || slug,
          category: article.category || 'Edukasi',
          views: 0
        };
      }
      data.articles[slug].views += 1;

      if (!data.daily) data.daily = {};
      if (!data.daily[today]) data.daily[today] = { views: 0, claims: 0, reads: 0 };
      data.daily[today].reads = (data.daily[today].reads || 0) + 1;

      saveData(data);
    },

    // Track Search Query
    trackSearch: function(query) {
      if (!query || query.trim().length < 2) return;
      const data = loadData();
      if (!data.searches) data.searches = [];
      data.searches.push({ query: query.trim(), time: new Date().toISOString() });
      if (data.searches.length > 50) data.searches.shift();
      saveData(data);
    },

    // Get Raw Real Analytics Report
    getAnalyticsReport: function() {
      const data = loadData();

      // Top courses array sorted by real claims
      const topCourses = Object.values(data.courses || {}).sort((a, b) => b.claims - a.claims);

      // Top articles array sorted by real views
      const topArticles = Object.values(data.articles || {}).sort((a, b) => b.views - a.views);

      // Device percentages
      const totalDev = (data.devices.Mobile || 0) + (data.devices.Desktop || 0) + (data.devices.Tablet || 0) || 1;
      const devBreakdown = {
        Mobile: Math.round(((data.devices.Mobile || 0) / totalDev) * 100),
        Desktop: Math.round(((data.devices.Desktop || 0) / totalDev) * 100),
        Tablet: Math.round(((data.devices.Tablet || 0) / totalDev) * 100)
      };

      // Traffic sources array
      const totalSources = Object.values(data.sources || {}).reduce((acc, v) => acc + v, 0) || 1;
      const trafficSources = Object.keys(data.sources || {}).map((name) => ({
        name,
        count: data.sources[name],
        percent: Math.round((data.sources[name] / totalSources) * 100)
      })).sort((a, b) => b.count - a.count);

      return {
        totalPageviews: data.totalPageviews || 0,
        uniqueVisitors: data.uniqueVisitors || 0,
        totalCourseClaims: data.totalCourseClaims || 0,
        totalArticleReads: data.totalArticleReads || 0,
        devices: devBreakdown,
        deviceCounts: data.devices,
        trafficSources: trafficSources,
        topCourses: topCourses,
        topArticles: topArticles,
        daily: data.daily || {}
      };
    },

    // Reset Data (for Owner)
    resetData: function() {
      try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(VISITOR_ID_KEY);
      } catch (_) {}
    }
  };

  // Auto-track on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    // 1. Purge legacy mock telemetry keys if present
    try {
      localStorage.removeItem('udemytag_telemetry_events_v2');
      localStorage.removeItem('udemytag_telemetry_counters_v2');
    } catch (_) {}

    // 2. Track real pageview
    window.UdemyTelemetry.trackPageView(window.location.pathname);

    // 3. Delegate real course coupon clicks
    document.addEventListener('click', function(e) {
      const target = e.target.closest('.claim-action-trigger, .copy-coupon-btn');
      if (target) {
        const courseId = target.getAttribute('data-course-id');
        const courseTitle = target.closest('[data-title]')?.getAttribute('data-title') || 
                            target.closest('article')?.querySelector('h3')?.textContent?.trim() || 
                            `Kursus #${courseId}`;
        const category = target.closest('[data-category]')?.getAttribute('data-category') || 'Development';
        if (courseId) {
          window.UdemyTelemetry.trackCourseClick({ id: courseId, title: courseTitle, category });
        }
      }
    });
  });

})();
