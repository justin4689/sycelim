/* ============================================================
   Sycelim Technologies — Main JavaScript
   ============================================================ */

/* === TRANSLATIONS === */
let T = {};

async function loadTranslations() {
  try {
    const [fr, en] = await Promise.all([
      fetch('./locales/fr.json').then(r => r.json()),
      fetch('./locales/en.json').then(r => r.json()),
    ]);
    T = { fr, en };
  } catch {
    T = { fr: {}, en: {} };
  }
}

/* ============================================================
   LANGUAGE
   ============================================================ */
let currentLang = localStorage.getItem('sycelim-lang') || 'fr';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('sycelim-lang', lang);
  document.documentElement.lang = lang;

  /* Update all translated elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = T[lang][key];
    if (val !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    }
  });

  /* Update placeholder elements separately */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    const val = T[lang][key];
    if (val !== undefined) el.placeholder = val;
  });

  /* Show/hide bilingual content blocks (data-lang="fr" / data-lang="en") */
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.hidden = el.dataset.lang !== lang;
  });

  /* Update lang toggle UI */
  document.querySelectorAll('.lang-fr-label, .lang-en-label').forEach(el => {
    el.classList.remove('active');
  });
  document.querySelectorAll(`.lang-${lang}-label`).forEach(el => el.classList.add('active'));

  /* Mark active nav link */
  updateActiveNav();
}

/* ============================================================
   THEME
   ============================================================ */
let currentTheme = localStorage.getItem('sycelim-theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('sycelim-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function updateActiveNav() {
  const path = location.pathname;
  document.querySelectorAll('.nav-link[data-page]').forEach(el => {
    el.classList.toggle('active', path.includes(el.dataset.page) ||
      (el.dataset.page === 'index' && (path === '/' || path.endsWith('index.html'))));
  });
}

function initNavScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    if (!q) return;
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn     = form.querySelector('[type="submit"]');
    const success = document.getElementById('form-success');
    const error   = document.getElementById('form-error');

    btn.disabled = true;
    btn.textContent = '…';

    /* Netlify / static form submission */
    try {
      const data = new FormData(form);
      const res  = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      if (res.ok) {
        success.style.display = 'block';
        error.style.display   = 'none';
        form.reset();
      } else throw new Error('Network error');
    } catch {
      success.style.display = 'none';
      error.style.display   = 'block';
    } finally {
      btn.disabled = false;
      btn.dataset.i18n && (btn.textContent = T[currentLang]['form.submit'] || 'Envoyer');
    }
  });
}

/* ============================================================
   SCROLL REVEAL v2 — auto-tag + stagger + IntersectionObserver
   ============================================================ */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const STAGGER_PARENTS = [
    '.figures-grid', '.pillars-grid', '.services-grid-preview',
    '.cases-grid', '.tech-grid', '.integ-grid', '.act-grid',
    '.team-roles-grid', '.team-stats-grid', '.about-org-grid',
    '.about-culture-grid', '.method-cards',
  ];

  const AUTO_REVEAL = [
    ['.section-header .eyebrow, .section-header .section-eyebrow, .inner-hero .eyebrow', 'up'],
    ['.section-title, .inner-hero-title', 'up'],
    ['.section-lead, .inner-hero-lead', 'up'],
    ['.figure-box', 'scale'],
    ['.ps-col', 'up'],
    ['.pillar-card', 'up'],
    ['.service-card', 'up'],
    ['.method-card', 'up'],
    ['.real-case', 'up'],
    ['.act-card', 'up'],
    ['.team-role-card', 'up'],
    ['.team-stat-card', 'up'],
    ['.team-collab-item', 'up'],
    ['.about-org-card', 'up'],
    ['.about-culture-item', 'up'],
    ['.about-2col-text, .about-2col-visual', 'up'],
    ['.mth-step-text, .mth-step-visual', 'up'],
    ['.legal-article', 'up'],
    ['.faq-item', 'up'],
    ['.svc-block', 'up'],
    ['.final-cta-title, .final-cta-sub, .final-cta-actions', 'up'],
    ['.contact-form-card, .contact-info-list', 'up'],
  ];

  /* Mark stagger grids */
  STAGGER_PARENTS.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      if (!el.hasAttribute('data-stagger')) el.setAttribute('data-stagger', '');
    });
  });

  /* IntersectionObserver — shared for all animated elements */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (el.hasAttribute('data-reveal')) el.classList.add('is-visible');
      if (el.classList.contains('anim-fade-up')) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
      io.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  /* Helper: tag element with data-reveal and observe it (or reveal immediately) */
  function tag(el, dir) {
    if (el.hasAttribute('data-reveal')) return;
    if (el.closest('[data-reveal]')) return;
    el.setAttribute('data-reveal', dir);
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible'); /* already visible — no animation */
    } else {
      io.observe(el);
    }
  }

  AUTO_REVEAL.forEach(([sel, dir]) => {
    document.querySelectorAll(sel).forEach(el => tag(el, dir));
  });

  /* Handle legacy .anim-fade-up elements */
  document.querySelectorAll('.anim-fade-up').forEach(el => {
    el.style.animation = 'none';
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)';
    const delay = el.classList.contains('anim-delay-4') ? '400ms'
                : el.classList.contains('anim-delay-3') ? '300ms'
                : el.classList.contains('anim-delay-2') ? '200ms'
                : el.classList.contains('anim-delay-1') ? '100ms' : '0ms';
    el.style.transitionDelay = delay;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    } else {
      io.observe(el);
    }
  });
}

/* ============================================================
   COUNTER ANIMATION — numbers count up on scroll entry
   ============================================================ */
function initCounters() {
  if (!('IntersectionObserver' in window)) return;
  const els = document.querySelectorAll('.figure-num, .team-stat-num');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);
      _animateCounter(entry.target);
    });
  }, { threshold: 0.6 });

  els.forEach(el => io.observe(el));
}

function _animateCounter(el) {
  const original = el.innerHTML;
  const text = el.textContent.trim();
  const match = text.match(/^(\d+)/);
  if (!match) return;
  const target = parseInt(match[1], 10);
  if (target > 999 || target < 2) return; /* skip years & binary values */
  const suffix = text.slice(match[0].length);
  const sup = el.querySelector('sup');
  const supHTML = sup ? sup.outerHTML : null;
  const duration = 900;
  const t0 = performance.now();
  el.classList.add('is-counting');
  (function tick(now) {
    const p = Math.min((now - t0) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.round(target * eased);
    el.innerHTML = supHTML ? val + supHTML : val + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else { el.innerHTML = original; el.classList.remove('is-counting'); }
  })(performance.now());
}

/* ============================================================
   HERO SCAN LINE — subtle vertical light sweep
   ============================================================ */
function initHeroScan() {
  document.querySelectorAll('.inner-hero').forEach(hero => {
    const line = document.createElement('div');
    line.className = 'hero-scan';
    line.setAttribute('aria-hidden', 'true');
    hero.insertBefore(line, hero.firstChild);
  });
}

/* ============================================================
   HERO SLIDER
   ============================================================ */
function initHeroSlider() {
  const slider = document.getElementById('heroSlider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hsd-dot');
  if (slides.length < 2) return;

  let current = 0;
  let timer   = null;
  const DELAY = 5000;

  function goTo(n) {
    const prev = current;
    current = ((n % slides.length) + slides.length) % slides.length;
    if (prev === current) return;

    slides[prev].classList.remove('hero-slide--active');
    dots[prev]  && dots[prev].classList.remove('hsd-dot--active');
    dots[prev]  && dots[prev].setAttribute('aria-selected', 'false');

    slides[current].classList.add('hero-slide--active');
    dots[current] && dots[current].classList.add('hsd-dot--active');
    dots[current] && dots[current].setAttribute('aria-selected', 'true');
  }

  function next() { goTo(current + 1); }

  function start() { timer = setInterval(next, DELAY); }
  function stop()  { clearInterval(timer); }

  /* Dot click */
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { stop(); goTo(i); start(); });
  });

  /* Pause on hover */
  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);

  /* Touch swipe support (mobile) */
  let tx = 0;
  slider.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 40) { stop(); goTo(current + (dx < 0 ? 1 : -1)); start(); }
  }, { passive: true });

  start();
}

/* ============================================================
   INIT
   ============================================================ */
function initFabSparkles() {
  const canvas = document.querySelector('.orangefab-sparkles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const parent = canvas.parentElement;

  function resize() {
    canvas.width  = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const dots = Array.from({ length: 55 }, () => ({
    x:     Math.random(),
    y:     Math.random(),
    r:     0.5 + Math.random() * 1.8,
    phase: Math.random() * Math.PI * 2,
    speed: 0.4 + Math.random() * 1.6,
  }));

  function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach(d => {
      const alpha = (Math.sin(t * 0.0025 * d.speed + d.phase) + 1) / 2;
      const x = d.x * canvas.width;
      const y = d.y * canvas.height;
      const glow = d.r * 5;

      const g = ctx.createRadialGradient(x, y, 0, x, y, glow);
      g.addColorStop(0, `rgba(255,255,255,${(alpha * 0.6).toFixed(2)})`);
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, glow, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(2)})`;
      ctx.beginPath();
      ctx.arc(x, y, d.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

/* ============================================================
   SERVICES PAGE — Sticky tabs + smooth scroll
   ============================================================ */
function initServicesTabs() {
  const tabsOuter = document.getElementById('svcTabsOuter');
  if (!tabsOuter) return;

  const tabs     = Array.from(tabsOuter.querySelectorAll('.svc-tab'));
  const sections = Array.from(document.querySelectorAll('.svc-block[id]'));
  if (!sections.length) return;

  /* Highlight active tab as sections enter viewport */
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tabs.forEach(t => t.classList.toggle('active', t.dataset.svc === id));
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
  sections.forEach(s => io.observe(s));

  /* Smooth scroll with offset for navbar + tab bar */
  const scrollToSection = targetId => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const offset = 70 + tabsOuter.offsetHeight + 24;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();
      scrollToSection(tab.getAttribute('href').slice(1));
    });
  });

  /* Hero pills also use smooth scroll */
  document.querySelectorAll('.svc-hero-pill').forEach(pill => {
    pill.addEventListener('click', e => {
      e.preventDefault();
      scrollToSection(pill.getAttribute('href').slice(1));
    });
  });
}

/* ============================================================
   MÉTHODE — Step tracker
   ============================================================ */
function initMethodeTracker() {
  const trackerOuter = document.getElementById('mthTrackerOuter');
  if (!trackerOuter) return;
  const dots     = Array.from(trackerOuter.querySelectorAll('.mth-tracker-dot'));
  const sections = Array.from(document.querySelectorAll('.mth-step[id]'));
  if (!sections.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        dots.forEach(d => d.classList.toggle('active', d.dataset.step === id));
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
  sections.forEach(s => io.observe(s));

  const scrollToStep = targetId => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const offset = 70 + trackerOuter.offsetHeight + 24;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  };

  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      e.preventDefault();
      scrollToStep(dot.getAttribute('href').slice(1));
    });
  });

  document.querySelectorAll('.mth-hero-pill').forEach(pill => {
    pill.addEventListener('click', e => {
      e.preventDefault();
      scrollToStep(pill.getAttribute('href').slice(1));
    });
  });
}

/* ─── Marquee infini — recyclage DOM (aucun reset) ─── */
function initMarquee() {
  const marqueeEl = document.querySelector('.clients-marquee');
  if (!marqueeEl) return;
  const track = marqueeEl.querySelector('.marquee-track');
  if (!track) return;

  track.style.animation = 'none';
  track.querySelectorAll('[aria-hidden]').forEach(el => el.remove());

  const origCards = [...track.children];
  if (!origCards.length) return;

  requestAnimationFrame(() => {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 16;

    /* Remplit la piste jusqu'à 3× la largeur de l'écran pour que
       la fin du track soit toujours bien au-delà du bord droit. */
    const minWidth = window.innerWidth * 3;
    let totalWidth = origCards.reduce((s, c) => s + c.offsetWidth + gap, 0);

    while (totalWidth < minWidth) {
      origCards.forEach(card => {
        const clone = card.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
        totalWidth += clone.offsetWidth + gap;
      });
    }

    /* Cache des largeurs dans l'ordre actuel du DOM */
    let cardWidths = [...track.children].map(c => c.offsetWidth + gap);

    const SPEED = 55;
    let offset = 0;
    let paused = false;
    let lastTime = null;

    function tick(ts) {
      if (!lastTime) lastTime = ts;
      const dt = Math.min(ts - lastTime, 50);
      lastTime = ts;

      if (!paused) {
        offset += SPEED * dt / 1000;

        /* Quand la 1re carte sort entièrement à gauche :
           → déplace-la en fin de track (elle réapparaît après la dernière carte, hors écran à droite)
           → ajuste offset pour que la position visuelle ne change pas */
        while (offset >= cardWidths[0]) {
          offset -= cardWidths[0];
          cardWidths.push(cardWidths.shift());
          track.appendChild(track.firstElementChild);
        }

        track.style.transform = `translateX(-${offset}px)`;
      }

      requestAnimationFrame(tick);
    }

    marqueeEl.addEventListener('mouseenter', () => { paused = true; });
    marqueeEl.addEventListener('mouseleave', () => { paused = false; lastTime = null; });

    requestAnimationFrame(ts => { lastTime = ts; requestAnimationFrame(tick); });
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadTranslations();
  applyTheme(currentTheme);
  applyLang(currentLang);

  /* Theme toggle button(s) */
  document.querySelectorAll('.btn-theme').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  /* Language toggle button(s) */
  document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(currentLang === 'fr' ? 'en' : 'fr');
    });
  });

  /* Nav */
  initNavScroll();
  initMobileMenu();
  updateActiveNav();

  /* Page-specific */
  initFaq();
  initContactForm();
  initScrollReveal();
  initCounters();
  initHeroScan();
  initHeroSlider();
  initFabSparkles();
  initServicesTabs();
  initMethodeTracker();
  initMarquee();
});
