// ============================================================
// LANGUAGE (English / Arabic) — scoped to this page only.
// Preference remembered per-browser via localStorage; falls back to
// English if storage is unavailable (private window, etc).
// ============================================================
const translations = {
  en: {
    navServices: "Services",
    navSystems: "Systems",
    navWork: "Work",
    navTeam: "Team",
    navLicense: "Get a License",
    navContact: "Contact",
    navCta: "START A PROJECT →",
    navCtaMobile: "Start a project →",
    heroEyebrow: "Ready-made software",
    heroTitle: "License one of our apps.",
    heroLead: "Alongside custom client work, we build and maintain our own apps — each one licensed and activated through our own license server. Download a build directly, or reach out to get licensed.",
    sectionEyebrow: "Licensed apps",
    sectionTitle: "Pick an app, get a license.",
    sectionLead: "Every app below is real, shipped software we built and actively license — not a mockup. Click a card for screenshots and details.",
    ctaTitle: "Don't see what you need?",
    ctaBodyHTML: 'We also build custom software from scratch. <a href="/#contact">Start a project</a> instead, or message us on WhatsApp about any of the apps above.',
    footerNote: "Built in-house, obviously.",
    askPricing: "Ask for pricing",
    downloadFor: "Download for {platform} →",
    downloadSoon: "Download coming soon",
    getLicense: "Get a license →",
    contactUs: "Contact us →",
    viewDetails: "View screenshots →",
    noticeHTML: '<strong>WhatsApp number not set yet.</strong> Add it to <code>whatsappNumber</code> in <code>data.json</code> to turn on the "Get a license" buttons below. Each app\'s <code>updateXml</code> field works the same way — point it at that app\'s update-check XML file (in <code>/updates/</code>) once one exists, and the download button will always link to its latest release automatically.',
    noAppsHTML: 'No licensed apps listed yet — add entries to the "licensedApps" array in data.json.',
    loadErrorFile: 'Couldn\'t load data.json — this page needs to be served over http(s), not opened directly as a file. Run <code>python3 -m http.server</code> from the project root and open it from there.',
    loadErrorOther: 'Couldn\'t load data.json',
    billing: { "one-time": "One-time payment", "per-semester": "Per semester", "per-subject": "Per subject" },
    platformNames: { Windows: "Windows", Android: "Android", macOS: "macOS", Linux: "Linux", iOS: "iOS" }
  },
  ar: {
    navServices: "الخدمات",
    navSystems: "الأنظمة",
    navWork: "أعمالنا",
    navTeam: "الفريق",
    navLicense: "احصل على ترخيص",
    navContact: "تواصل",
    navCta: "← ابدأ مشروعًا",
    navCtaMobile: "ابدأ مشروعًا ←",
    heroEyebrow: "برمجيات جاهزة",
    heroTitle: "احصل على ترخيص لأحد تطبيقاتنا.",
    heroLead: "إلى جانب العمل المخصص لعملائنا، نبني وندير تطبيقاتنا الخاصة — كل تطبيق مرخّص ومفعّل عبر خادم التراخيص الخاص بنا. حمّل نسخة مباشرة، أو تواصل معنا للحصول على ترخيص.",
    sectionEyebrow: "التطبيقات المرخّصة",
    sectionTitle: "اختر تطبيقًا، واحصل على ترخيص.",
    sectionLead: "كل تطبيق أدناه هو برنامج حقيقي قمنا ببنائه ونرخّصه فعليًا — وليس نموذجًا تجريبيًا. اضغط على البطاقة لمشاهدة لقطات الشاشة والتفاصيل.",
    ctaTitle: "لم تجد ما تبحث عنه؟",
    ctaBodyHTML: 'نقوم أيضًا ببناء برمجيات مخصصة من الصفر. <a href="/#contact">ابدأ مشروعًا</a> بدلاً من ذلك، أو راسلنا عبر واتساب بخصوص أي من التطبيقات أعلاه.',
    footerNote: "مبني بالكامل داخل الاستوديو.",
    askPricing: "اسأل عن السعر",
    downloadFor: "← تحميل لـ {platform}",
    downloadSoon: "التحميل قريبًا",
    getLicense: "← احصل على ترخيص",
    contactUs: "← تواصل معنا",
    viewDetails: "← مشاهدة لقطات الشاشة",
    noticeHTML: '<strong>لم يتم إضافة رقم واتساب بعد.</strong> أضفه إلى <code>whatsappNumber</code> في <code>data.json</code> لتفعيل أزرار "احصل على ترخيص" أدناه. حقل <code>updateXml</code> الخاص بكل تطبيق يعمل بنفس الطريقة — وجّهه إلى ملف فحص التحديث الخاص بذلك التطبيق (داخل <code>/updates/</code>) بمجرد وجوده، وسيؤدي زر التحميل دائمًا إلى أحدث إصدار تلقائيًا.',
    noAppsHTML: 'لا توجد تطبيقات مرخّصة بعد — أضف عناصر إلى مصفوفة "licensedApps" في data.json.',
    loadErrorFile: 'تعذّر تحميل data.json — يجب تشغيل هذه الصفحة عبر خادم http(s)، وليس بفتحها مباشرة كملف. شغّل <code>python3 -m http.server</code> من مجلد المشروع ثم افتحها من هناك.',
    loadErrorOther: 'تعذّر تحميل data.json',
    billing: { "one-time": "دفعة واحدة", "per-semester": "اشتراك فصلي", "per-subject": "لكل مادة" },
    platformNames: { Windows: "ويندوز", Android: "أندرويد", macOS: "ماك", Linux: "لينكس", iOS: "آيفون" }
  }
};

function getLang(){
  try { return localStorage.getItem('elevate-lang') || 'en'; } catch { return 'en'; }
}
function setLang(lang){
  try { localStorage.setItem('elevate-lang', lang); } catch {}
}

let currentLang = getLang();
let currentData = null; // cached data.json response, so toggling language doesn't re-fetch

function t(key){ return translations[currentLang][key] ?? translations.en[key] ?? key; }

function applyStaticTranslations(){
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-ar', currentLang === 'ar');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const htmlKey = key.endsWith('HTML') ? key : `${key}HTML`;
    el.innerHTML = translations[currentLang][htmlKey] ?? translations.en[htmlKey] ?? el.innerHTML;
  });

  const langBtns = [document.getElementById('langToggle'), document.getElementById('langToggleMobile')];
  langBtns.forEach(btn => { if (btn) btn.setAttribute('aria-pressed', String(currentLang === 'ar')); });
}

function switchLang(lang){
  currentLang = lang;
  setLang(lang);
  applyStaticTranslations();
  if (currentData) renderApps(currentData);
}

document.getElementById('langToggle').addEventListener('click', () => switchLang(currentLang === 'en' ? 'ar' : 'en'));
document.getElementById('langToggleMobile').addEventListener('click', () => switchLang(currentLang === 'en' ? 'ar' : 'en'));

applyStaticTranslations();

// ---- mobile menu (same behavior as the main site) ----
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

function closeMenu(){
  mobileMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
  menuToggle.textContent = '☰';
}
function toggleMenu(){
  const isOpen = mobileMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  menuToggle.textContent = isOpen ? '✕' : '☰';
}
menuToggle.addEventListener('click', toggleMenu);
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 640) closeMenu(); });

function escapeHTML(str){
  return String(str ?? '').replace(/[&<>"']/g, s => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[s]));
}

// ---- modal (same pattern as the main site's project/team modal) ----
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
let lastFocusedEl = null;
let currentGallery = null; // { slides, index, title, renderSlide(i) } while a gallery is open

function openModal(html){
  lastFocusedEl = document.activeElement;
  modalBody.innerHTML = html;
  modalOverlay.classList.add('open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}
function closeModal(){
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  modalBody.innerHTML = '';
  currentGallery = null;
  closeLightbox();
  if (lastFocusedEl) lastFocusedEl.focus();
}
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

// ---- lightbox (expanded image view, layered on top of the modal) ----
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxCounter = document.getElementById('lightboxCounter');
let lightboxImages = [];
let lightboxIndex = 0;

function showLightbox(i){
  lightboxIndex = (i + lightboxImages.length) % lightboxImages.length;
  lightboxImg.src = lightboxImages[lightboxIndex];
  lightboxImg.alt = `Image ${lightboxIndex + 1} of ${lightboxImages.length}`;
  const multi = lightboxImages.length > 1;
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
  lightboxPrev.style.display = multi ? 'flex' : 'none';
  lightboxNext.style.display = multi ? 'flex' : 'none';
  lightboxCounter.style.display = multi ? 'inline-flex' : 'none';
}
function openLightbox(images, startIndex){
  lightboxImages = images;
  showLightbox(startIndex);
  lightboxOverlay.classList.add('open');
  lightboxOverlay.setAttribute('aria-hidden', 'false');
  lightboxClose.focus();
}
function closeLightbox(){
  lightboxOverlay.classList.remove('open');
  lightboxOverlay.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => showLightbox(lightboxIndex - 1));
lightboxNext.addEventListener('click', () => showLightbox(lightboxIndex + 1));
lightboxOverlay.addEventListener('click', e => { if (e.target === lightboxOverlay) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (lightboxOverlay.classList.contains('open')) { closeLightbox(); return; }
    if (modalOverlay.classList.contains('open')) { closeModal(); return; }
    return;
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    const dir = e.key === 'ArrowRight' ? 1 : -1;
    if (lightboxOverlay.classList.contains('open')) {
      if (lightboxImages.length > 1) showLightbox(lightboxIndex + dir);
      return;
    }
    if (currentGallery && modalOverlay.classList.contains('open')) {
      currentGallery.renderSlide(currentGallery.index + dir);
    }
  }
});

// ---- image gallery (screenshots only — no video slides on this page) ----
function slideImgHTML(src, title, humanIndex, total){
  return `<img src="${escapeHTML(src)}" alt="${escapeHTML(title)} — screenshot ${humanIndex} of ${total}" onerror="this.style.opacity='0.25'; this.style.cursor='default'; this.onclick=null;">`;
}
function slideThumbHTML(src, i, active){
  return `<button class="gallery-thumb${active ? ' active' : ''}" data-index="${i}" aria-label="View screenshot ${i + 1}">
    <img src="${escapeHTML(src)}" alt="" loading="lazy">
  </button>`;
}
function wireExpandableImage(container, images, index){
  const img = container.querySelector('img');
  if (!img) return;
  img.addEventListener('click', () => openLightbox(images, index));
}

function appMediaHTML(app, title){
  const images = Array.isArray(app.images) ? app.images.filter(Boolean) : [];
  if (!images.length) return '';

  if (images.length === 1) {
    return `<div class="modal-media">${slideImgHTML(images[0], title, 1, 1)}</div>`;
  }

  const thumbs = images.map((src, i) => slideThumbHTML(src, i, i === 0)).join('');
  return `
    <div class="modal-media modal-gallery">
      <div class="gallery-main">
        <div class="gallery-slide">${slideImgHTML(images[0], title, 1, images.length)}</div>
        <button class="gallery-nav prev" aria-label="Previous">‹</button>
        <button class="gallery-nav next" aria-label="Next">›</button>
        <span class="gallery-counter">1 / ${images.length}</span>
      </div>
      <div class="gallery-thumbs">${thumbs}</div>
    </div>`;
}

function initGallery(app, title){
  const images = Array.isArray(app.images) ? app.images.filter(Boolean) : [];
  const galleryEl = modalBody.querySelector('.modal-gallery');
  if (!galleryEl) {
    if (images.length === 1) wireExpandableImage(modalBody.querySelector('.modal-media'), images, 0);
    return;
  }

  const mainEl = galleryEl.querySelector('.gallery-main');
  const slideEl = galleryEl.querySelector('.gallery-slide');
  const counter = galleryEl.querySelector('.gallery-counter');
  const thumbs = galleryEl.querySelectorAll('.gallery-thumb');

  function renderSlide(i){
    const index = (i + images.length) % images.length;
    slideEl.style.opacity = '0';
    setTimeout(() => {
      slideEl.innerHTML = slideImgHTML(images[index], title, index + 1, images.length);
      slideEl.style.opacity = '1';
      wireExpandableImage(slideEl, images, index);
    }, 150);
    counter.textContent = `${index + 1} / ${images.length}`;
    thumbs.forEach((th, ti) => th.classList.toggle('active', ti === index));
    currentGallery.index = index;
  }

  currentGallery = { slides: images, index: 0, title, renderSlide };
  wireExpandableImage(slideEl, images, 0);
  mainEl.querySelector('.gallery-nav.prev').addEventListener('click', () => renderSlide(currentGallery.index - 1));
  mainEl.querySelector('.gallery-nav.next').addEventListener('click', () => renderSlide(currentGallery.index + 1));
  thumbs.forEach((th, ti) => th.addEventListener('click', () => renderSlide(ti)));
}

// ---- fallback pattern graphic for apps without a screenshot yet ----
// Same deterministic-pattern approach as the main site's project thumbnails.
const thumbColors = ['#3B6FE0', '#35C6F0', '#8FA0B8'];
function fallbackThumbSVG(i){
  return `
    <svg class="work-thumb-fallback" viewBox="0 0 300 150" preserveAspectRatio="none" style="display:block">
      <line x1="0" y1="${30 + (i % 3) * 10}" x2="300" y2="${20 + (i % 4) * 15}" stroke="${thumbColors[i % 3]}" stroke-width="1" opacity="0.5"/>
      <line x1="0" y1="${90 + (i % 2) * 10}" x2="300" y2="${100 - (i % 3) * 15}" stroke="${thumbColors[(i + 1) % 3]}" stroke-width="1" opacity="0.35"/>
      <circle cx="${40 + (i * 37) % 220}" cy="${60 + (i * 19) % 60}" r="3" fill="${thumbColors[i % 3]}"/>
    </svg>`;
}

// ---- localized app content (falls back to English if no "ar" block) ----
function appText(app){
  if (currentLang === 'ar' && app.ar) {
    return {
      name: app.name,
      nameLocal: app.nameLocal || '',
      tagline: app.ar.tagline || app.tagline,
      desc: app.ar.desc || app.desc,
      highlights: app.ar.highlights || app.highlights
    };
  }
  return { name: app.name, nameLocal: app.nameLocal || '', tagline: app.tagline, desc: app.desc, highlights: app.highlights };
}

function platformLabel(p){
  return translations[currentLang].platformNames[p] || p;
}

// ---- pricing / billing display ----
function billingLabel(app){
  if (!app.billing) return null;
  return escapeHTML(translations[currentLang].billing[app.billing] || app.billing);
}
function priceLabel(app){
  if (app.price === null || app.price === undefined || app.price === '') return t('askPricing');
  const currency = app.currency ? ` ${escapeHTML(app.currency)}` : '';
  return `${escapeHTML(String(app.price))}${currency}`;
}

// ---- direct download, read from each app's update-check XML ----
// Every licensed app already ships its own AutoUpdater-style XML file (in
// /updates/) that it polls to check for new versions — <url> is the latest
// Windows installer, <apkUrl> (if present) is the latest Android APK. Rather
// than duplicating a repo/tag/asset per app in data.json (which goes stale
// the moment a new version ships), we read the exact same file the app
// itself trusts, so the website always links to whatever is actually
// current — nothing here is ever a guessed or hand-typed URL.
let updateInfoCache = {};

function parseUpdateXML(text){
  try {
    const doc = new DOMParser().parseFromString(text, 'application/xml');
    if (doc.querySelector('parsererror')) return { url: null, apkUrl: null };
    return {
      url: doc.querySelector('url')?.textContent?.trim() || null,
      apkUrl: doc.querySelector('apkUrl')?.textContent?.trim() || null,
      version: doc.querySelector('version')?.textContent?.trim() || null
    };
  } catch {
    return { url: null, apkUrl: null, version: null };
  }
}

// Fetches every distinct updateXml path referenced by the licensed apps and
// fills updateInfoCache. A missing/unreachable/malformed file just resolves
// to "no link" for that app (handled further down as "Download coming
// soon") rather than breaking the page.
function loadUpdateInfo(paths){
  const unique = [...new Set(paths.filter(Boolean))];
  return Promise.all(unique.map(path =>
    fetch(path)
      .then(res => res.ok ? res.text() : Promise.reject(new Error(`HTTP ${res.status}`)))
      .then(text => { updateInfoCache[path] = parseUpdateXML(text); })
      .catch(() => { updateInfoCache[path] = { url: null, apkUrl: null, version: null }; })
  ));
}

// Returns one entry per real download this app's update XML actually
// advertises — never invents a platform that isn't backed by a real link.
function downloadLinks(app){
  const info = app.updateXml ? updateInfoCache[app.updateXml] : null;
  if (!info) return [];
  const links = [];
  if (info.url) links.push({ platform: 'Windows', url: info.url });
  if (info.apkUrl) links.push({ platform: 'Android', url: info.apkUrl });
  return links;
}

function downloadForLabel(platformKey){
  return t('downloadFor').replace('{platform}', platformLabel(platformKey));
}

// ---- WhatsApp contact link ----
function whatsappLink(number, appName){
  const text = encodeURIComponent(`Hi! I'd like to get a license for ${appName}.`);
  if (number && number.trim()){
    const digits = number.replace(/[^\d]/g, '');
    return `https://wa.me/${digits}?text=${text}`;
  }
  return null;
}

// Shared by both the card and the modal, so "get a license" always looks
// and behaves the same wherever it appears. Falls back to the contact form
// link whenever no WhatsApp number is set yet (see whatsappLink above).
function licenseButtonHTML(app, whatsappNumber, btnClass){
  const waURL = whatsappLink(whatsappNumber, app.name);
  const label = waURL ? t('getLicense') : t('contactUs');
  const href = waURL || '/#contact';
  const extra = waURL ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a class="btn ${btnClass} license-cta-btn" href="${escapeHTML(href)}"${extra}>${escapeHTML(label)}</a>`;
}

function openAppModal(app, whatsappNumber){
  const text = appText(app);
  const highlights = Array.isArray(text.highlights) && text.highlights.length
    ? `<ul class="modal-highlights">${text.highlights.map(h => `<li>${escapeHTML(h)}</li>`).join('')}</ul>`
    : '';
  const platforms = Array.isArray(app.platforms) && app.platforms.length
    ? `<p class="modal-client">${app.platforms.map(p => escapeHTML(platformLabel(p))).join(' · ')}</p>`
    : '';
  const billing = billingLabel(app);
  const licenseBtn = licenseButtonHTML(app, whatsappNumber, 'btn-primary');

  openModal(`
    ${appMediaHTML(app, text.name)}
    <span class="modal-eyebrow">${escapeHTML(text.tagline || '')}</span>
    <h2 id="modalTitle">${escapeHTML(text.name)}${text.nameLocal ? ` <span style="color:var(--muted); font-weight:400;">${escapeHTML(text.nameLocal)}</span>` : ''}</h2>
    ${platforms}
    <p>${escapeHTML(text.desc)}</p>
    ${highlights}
    <div class="license-terms">
      <span class="license-price">${priceLabel(app)}</span>
      ${billing ? `<span class="license-billing">${billing}</span>` : ''}
    </div>
    <div class="license-actions">${licenseBtn}</div>
  `);
  initGallery(app, text.name);
}

function renderApps(data){
  currentData = data;
  const apps = data.licensedApps || [];
  const whatsappNumber = data.whatsappNumber;
  const grid = document.getElementById('licenseGrid');

  const existingNotice = grid.parentElement.querySelector('.license-notice');
  if (existingNotice) existingNotice.remove();

  if (!whatsappNumber || !whatsappNumber.trim()){
    const notice = document.createElement('div');
    notice.className = 'license-notice';
    notice.innerHTML = t('noticeHTML');
    grid.before(notice);
  }

  if (!apps.length) {
    grid.innerHTML = `<p class="load-error">${t('noAppsHTML')}</p>`;
    return;
  }

  grid.innerHTML = apps.map((app, i) => {
    const text = appText(app);
    const images = Array.isArray(app.images) ? app.images.filter(Boolean) : [];
    const thumbSrc = images[0] || '';
    const links = downloadLinks(app);
    const downloadBtn = links.length
      ? links.map(l => `<a class="btn btn-ghost license-download-btn" href="${escapeHTML(l.url)}">${downloadForLabel(l.platform)}</a>`).join('')
      : `<span class="btn btn-ghost license-download-btn" aria-disabled="true">${t('downloadSoon')}</span>`;
    const licenseBtn = licenseButtonHTML(app, whatsappNumber, 'btn-primary');

    return `
      <div class="work-card license-card" role="button" tabindex="0" aria-haspopup="dialog" data-index="${i}">
        <div class="work-thumb">
          ${thumbSrc ? `<img src="${escapeHTML(thumbSrc)}" alt="${escapeHTML(text.name)}" loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">` : ''}
          <div style="display:${thumbSrc ? 'none' : 'block'};">${fallbackThumbSVG(i)}</div>
        </div>
        <div class="license-body">
          <div class="license-head">
            <h3>${escapeHTML(text.name)}${text.nameLocal ? `<span class="name-local">${escapeHTML(text.nameLocal)}</span>` : ''}</h3>
            ${app.platforms ? `<div class="license-platforms">${app.platforms.map(p => `<span>${escapeHTML(platformLabel(p))}</span>`).join('')}</div>` : ''}
          </div>
          ${text.tagline ? `<p class="license-tagline">${escapeHTML(text.tagline)}</p>` : ''}
          <p class="license-desc">${escapeHTML(text.desc)}</p>
          <div class="license-terms">
            <span class="license-price">${priceLabel(app)}</span>
            ${billingLabel(app) ? `<span class="license-billing">${billingLabel(app)}</span>` : ''}
          </div>
          <div class="license-actions">
            ${licenseBtn}
            ${downloadBtn}
          </div>
          <span class="card-cta view-details-cta">${t('viewDetails')}</span>
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.license-card').forEach(card => {
    const app = apps[Number(card.dataset.index)];
    const openThisModal = () => openAppModal(app, whatsappNumber);

    card.addEventListener('click', e => {
      if (e.target.closest('.license-download-btn, .license-cta-btn')) return; // let those links work on their own
      openThisModal();
    });
    card.addEventListener('keydown', e => {
      if (e.target.closest('.license-download-btn, .license-cta-btn')) return;
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openThisModal(); }
    });
  });
}

fetch('data.json')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then(data => {
    const xmlPaths = (data.licensedApps || []).map(a => a.updateXml);
    return loadUpdateInfo(xmlPaths).then(() => renderApps(data));
  })
  .catch(err => {
    const grid = document.getElementById('licenseGrid');
    const isFileProtocol = location.protocol === 'file:';
    grid.innerHTML = `<p class="load-error">${isFileProtocol ? t('loadErrorFile') : `${t('loadErrorOther')}: ${escapeHTML(err.message)}`}</p>`;
  });
