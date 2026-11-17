// ============================================================
// LANGUAGE (English / Arabic) — shared with the get-license page
// via the same localStorage key, so the choice carries across pages.
// ============================================================
const translations = {
  en: {
    navServices: "Services",
    navSystems: "Systems",
    navProcess: "Process",
    navWork: "Work",
    navTeam: "Team",
    navLicense: "Get a License",
    navContact: "Contact",
    navCta: "START A PROJECT →",
    navCtaMobile: "Start a project →",
    heroEyebrow: "Independent software studio",
    heroTitleHTML: 'We build the software <span>your business</span> actually runs on.',
    heroLead: "Elevate Software is a small crew of developers building desktop & mobile apps, websites, and management systems — designed and built to your spec, not off a template. We've built up a particular knack for school software and turning messy or scraped data into clean, usable documents.",
    heroCtaQuote: "Get a quote",
    heroCtaWork: "See our work",
    servicesEyebrow: "What we build",
    servicesTitle: "Five disciplines, one team.",
    servicesLead: "We don't hand you off between departments. The same crew scopes, builds, and ships your project end to end.",
    svcDesktopTitle: "Desktop Applications",
    svcDesktopDesc: "Native and cross-platform desktop software for Windows, macOS, and Linux — from internal tools to full commercial products.",
    svcMobileTitle: "Mobile Applications",
    svcMobileDesc: "iOS and Android apps built for real usage — from first prototype through App Store and Play Store release.",
    svcWebTitle: "Websites & Web Apps",
    svcWebDesc: "Marketing sites, dashboards, and full web applications — fast, responsive, and built to be maintained, not just shipped.",
    svcSystemsTitle: "Management Systems",
    svcSystemsDesc: "Inventory, booking, HR, and custom operations software that replaces spreadsheets and manual processes with something built for your workflow.",
    svcDataTitle: "Data & Document Automation",
    svcDataDesc: "Turning scraped websites, JSON exports, and messy spreadsheets into clean Excel reports and PDFs — a problem we keep getting asked to solve.",
    systemsEyebrow: "Product line",
    systemsTitle: "Systems we're building.",
    systemsLead: "Alongside custom client work, we're building a line of ready-to-customize business systems — live demos you can see and adapt instead of starting from a blank page.",
    processEyebrow: "How we work",
    processTitle: "From brief to build, in four stages.",
    processLead: "Every project — freelance or direct — follows the same process, so you always know what's next.",
    processStep1Title: "Scope",
    processStep1Desc: "We map your requirements, constraints, and timeline before writing a line of code.",
    processStep2Title: "Design",
    processStep2Desc: "Architecture and interface decisions get made deliberately, and shown to you before build.",
    processStep3Title: "Build",
    processStep3Desc: "Development happens in short cycles, with working versions in your hands early and often.",
    processStep4Title: "Ship & support",
    processStep4Desc: "We deploy, hand over what you need to run it, and stay reachable after launch.",
    workEyebrow: "Selected work",
    workTitle: "Recent builds.",
    workLead: "A few of the projects we've shipped for clients and on freelance platforms.",
    teamEyebrow: "The crew",
    teamTitle: "Who's building this.",
    teamLead: "A small team, each covering a different part of the stack.",
    contactTitle: "Have a project in mind?",
    contactLead: "Tell us what you're building. We'll reply with a scoped estimate — usually within a day or two.",
    contactSend: "Send",
    contactNote: "We'll never share your email. No spam, ever.",
    contactThanks: "Thanks — we'll be in touch shortly.",
    footerCopyright: "© 2026 Elevate Software. All rights reserved.",
    footerNote: "Built in-house, obviously.",
    viewCaseStudy: "View case study →",
    viewBio: "View bio →",
    builtFor: "Built for",
    dataLoadErrorFile: 'Content failed to load because this page was opened directly (file://). Run a local server instead — e.g. `python3 -m http.server` in this folder, then open http://localhost:8000.',
    dataLoadErrorOther: 'Content failed to load. Check that data.json exists and is valid JSON.',
    statusLabels: { live: 'Live', 'in-development': 'In development', planned: 'Planned' },
    linkLabels: { github: 'GitHub', linkedin: 'LinkedIn', website: 'Website', portfolio: 'Portfolio', twitter: 'Twitter' }
  },
  ar: {
    navServices: "الخدمات",
    navSystems: "الأنظمة",
    navProcess: "منهجية العمل",
    navWork: "أعمالنا",
    navTeam: "الفريق",
    navLicense: "احصل على ترخيص",
    navContact: "تواصل",
    navCta: "← ابدأ مشروعًا",
    navCtaMobile: "ابدأ مشروعًا ←",
    heroEyebrow: "استوديو برمجيات مستقل",
    heroTitleHTML: 'نبني البرمجيات التي <span>يعتمد عليها عملك</span> فعلاً.',
    heroLead: "إليفيت سوفتوير فريق صغير من المطورين يبني تطبيقات سطح المكتب والهاتف، والمواقع الإلكترونية، وأنظمة الإدارة — مصممة ومبنية حسب طلبك، لا من قالب جاهز. اكتسبنا خبرة خاصة في برمجيات المدارس وتحويل البيانات المبعثرة أو المستخرجة إلى مستندات نظيفة وقابلة للاستخدام.",
    heroCtaQuote: "اطلب عرض سعر",
    heroCtaWork: "شاهد أعمالنا",
    servicesEyebrow: "ماذا نبني",
    servicesTitle: "خمسة تخصصات، فريق واحد.",
    servicesLead: "لا نحيلك بين أقسام مختلفة. نفس الفريق يحدد النطاق، يبني، وينفّذ مشروعك من البداية للنهاية.",
    svcDesktopTitle: "تطبيقات سطح المكتب",
    svcDesktopDesc: "برمجيات أصلية ومتعددة المنصات لسطح المكتب على ويندوز وماك ولينكس — من الأدوات الداخلية إلى المنتجات التجارية الكاملة.",
    svcMobileTitle: "تطبيقات الهاتف",
    svcMobileDesc: "تطبيقات آيفون وأندرويد مبنية للاستخدام الحقيقي — من أول نموذج أولي حتى الإصدار على المتجرين.",
    svcWebTitle: "المواقع وتطبيقات الويب",
    svcWebDesc: "مواقع تعريفية، لوحات تحكم، وتطبيقات ويب كاملة — سريعة، متجاوبة، ومبنية لتُصان لا لتُشحن فقط.",
    svcSystemsTitle: "أنظمة الإدارة",
    svcSystemsDesc: "أنظمة مخزون وحجوزات وموارد بشرية وعمليات مخصصة تستبدل الجداول اليدوية بما يناسب سير عملك.",
    svcDataTitle: "أتمتة البيانات والمستندات",
    svcDataDesc: "تحويل المواقع المستخرجة وملفات JSON والجداول المبعثرة إلى تقارير إكسل ونسخ PDF نظيفة — مشكلة نُطالب بحلها باستمرار.",
    systemsEyebrow: "خط المنتجات",
    systemsTitle: "أنظمة قيد البناء.",
    systemsLead: "إلى جانب العمل المخصص لعملائنا، نبني خط أنظمة أعمال جاهزة للتخصيص — عروضًا حية يمكنك رؤيتها وتكييفها بدلاً من البدء من صفحة فارغة.",
    processEyebrow: "كيف نعمل",
    processTitle: "من الفكرة إلى البناء، على أربع مراحل.",
    processLead: "كل مشروع — حر أو مباشر — يتبع نفس المنهجية، لتعرف دائمًا ما هي الخطوة التالية.",
    processStep1Title: "تحديد النطاق",
    processStep1Desc: "نرسم متطلباتك وقيودك وجدولك الزمني قبل كتابة أي سطر برمجي.",
    processStep2Title: "التصميم",
    processStep2Desc: "تُتخذ قرارات البنية والواجهة بعناية، وتُعرض عليك قبل البناء.",
    processStep3Title: "البناء",
    processStep3Desc: "التطوير يحدث على دورات قصيرة، مع نسخ عاملة بين يديك مبكرًا وباستمرار.",
    processStep4Title: "الإطلاق والدعم",
    processStep4Desc: "ننشر العمل، نسلّمك ما تحتاجه لتشغيله، ونبقى على تواصل بعد الإطلاق.",
    workEyebrow: "أعمال مختارة",
    workTitle: "أحدث إنجازاتنا.",
    workLead: "بعض المشاريع التي أنجزناها لعملائنا وعلى منصات العمل الحر.",
    teamEyebrow: "الفريق",
    teamTitle: "من يبني هذا.",
    teamLead: "فريق صغير، كل عضو يغطي جزءًا مختلفًا من المنظومة.",
    contactTitle: "لديك مشروع في بالك؟",
    contactLead: "أخبرنا بما تبنيه. سنرد بعرض سعر محدد — عادة خلال يوم أو يومين.",
    contactSend: "إرسال",
    contactNote: "لن نشارك بريدك الإلكتروني أبدًا. بدون أي رسائل مزعجة.",
    contactThanks: "شكرًا — سنتواصل معك قريبًا.",
    footerCopyright: "© 2026 إليفيت سوفتوير. جميع الحقوق محفوظة.",
    footerNote: "مبني بالكامل داخل الاستوديو.",
    viewCaseStudy: "← عرض دراسة الحالة",
    viewBio: "← عرض النبذة",
    builtFor: "بُني لـ",
    dataLoadErrorFile: 'تعذّر تحميل المحتوى لأن الصفحة فُتحت مباشرة كملف (file://). شغّل خادمًا محليًا بدلاً من ذلك — مثلاً: `python3 -m http.server` من هذا المجلد، ثم افتح http://localhost:8000.',
    dataLoadErrorOther: 'تعذّر تحميل المحتوى. تأكد من وجود data.json وأنه بصيغة JSON صحيحة.',
    statusLabels: { live: 'مباشر', 'in-development': 'قيد التطوير', planned: 'مخطط له' },
    linkLabels: { github: 'جيت هاب', linkedin: 'لينكدإن', website: 'الموقع', portfolio: 'أعمالي', twitter: 'تويتر' }
  }
};

function getLang(){
  try { return localStorage.getItem('elevate-lang') || 'en'; } catch { return 'en'; }
}
function setLang(lang){
  try { localStorage.setItem('elevate-lang', lang); } catch {}
}

let currentLang = getLang();
let currentSiteData = null; // cached data.json response, so toggling language doesn't re-fetch

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
  if (currentSiteData) {
    renderCapabilities(currentSiteData.capabilities || [], currentSiteData.capabilitiesAr || []);
    renderSystems(currentSiteData.systems || []);
    renderProjects(currentSiteData.projects || []);
    renderTeam(currentSiteData.team || []);
  }
}

const langToggleBtn = document.getElementById('langToggle');
const langToggleMobileBtn = document.getElementById('langToggleMobile');
if (langToggleBtn) langToggleBtn.addEventListener('click', () => switchLang(currentLang === 'en' ? 'ar' : 'en'));
if (langToggleMobileBtn) langToggleMobileBtn.addEventListener('click', () => switchLang(currentLang === 'en' ? 'ar' : 'en'));

applyStaticTranslations();

// ---- localized data helper ----
// Falls back to the English fields whenever an item has no "ar" block yet,
// so adding translations is optional/incremental, never required.
function localize(item){
  if (currentLang === 'ar' && item.ar) return { ...item, ...item.ar };
  return item;
}

// ---- mobile menu ----
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

  // ---- small helper: escape text before it goes into template strings ----
  function escapeHTML(str){
    return String(str ?? '').replace(/[&<>"']/g, s => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[s]));
  }

  // ---- modal (used for both project case studies and team bios) ----
  const modalOverlay = document.getElementById('modalOverlay');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');
  let lastFocusedEl = null;
  let currentGallery = null; // { slides, index, title, renderSlide(i) } while a project modal's carousel is open

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
    const src = lightboxImages[lightboxIndex];
    lightboxImg.src = src;
    lightboxImg.alt = `Image ${lightboxIndex + 1} of ${lightboxImages.length}`;
    const multi = lightboxImages.length > 1;
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
    lightboxPrev.style.display = multi ? 'flex' : 'none';
    lightboxNext.style.display = multi ? 'flex' : 'none';
    lightboxCounter.style.display = multi ? 'inline-flex' : 'none';
  }
  // Opens the lightbox for a set of image URLs (not video slides), starting
  // at `startIndex` within that image-only list.
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

  // Single keydown listener handles both the lightbox and the modal/gallery
  // beneath it, with the lightbox taking priority when it's open.
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

  // ---- video helper ----
  // Turns a plain YouTube/Vimeo URL into an embeddable iframe src. If the
  // URL is already an embed URL, it's used as-is.
  function toEmbedSrc(url){
    try {
      const u = new URL(url);
      if (u.hostname.includes('youtube.com')) {
        if (u.pathname === '/watch') return `https://www.youtube.com/embed/${u.searchParams.get('v')}`;
        if (u.pathname.startsWith('/embed/')) return url;
      }
      if (u.hostname === 'youtu.be') {
        return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
      }
      if (u.hostname.includes('vimeo.com')) {
        if (u.hostname.includes('player.vimeo.com')) return url;
        const id = u.pathname.split('/').filter(Boolean).pop();
        return `https://player.vimeo.com/video/${id}`;
      }
      return url;
    } catch {
      return url;
    }
  }

  // ---- unified media carousel: video (if any) is slide 0, images follow ----
  // Same pattern as a storefront media gallery — one strip of thumbnails
  // covering both the video and every screenshot.
  function projectSlides(p){
    const slides = [];
    if (p.videoEmbed) slides.push({ type: 'video', embed: true, src: p.videoEmbed });
    else if (p.videoFile) slides.push({ type: 'video', embed: false, src: p.videoFile, poster: p.image });
    const images = Array.isArray(p.images) && p.images.length ? p.images : (p.image ? [p.image] : []);
    images.forEach(src => slides.push({ type: 'image', src }));
    return slides;
  }

  function slideInnerHTML(slide, title, humanIndex, total){
    if (slide.type === 'video') {
      if (slide.embed) {
        return `<div class="video-embed"><iframe src="${escapeHTML(toEmbedSrc(slide.src))}" title="${escapeHTML(title)} walkthrough"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
      }
      return `<div class="video-embed"><video src="${escapeHTML(slide.src)}" controls preload="metadata"
        ${slide.poster ? `poster="${escapeHTML(slide.poster)}"` : ''}></video></div>`;
    }
    return `<img src="${escapeHTML(slide.src)}" alt="${escapeHTML(title)} — image ${humanIndex} of ${total}" onerror="this.style.opacity='0.25'; this.style.cursor='default'; this.onclick=null;">`;
  }

  function slideThumbHTML(slide, i, active){
    if (slide.type === 'video') {
      return `<button class="gallery-thumb${active ? ' active' : ''}" data-index="${i}" aria-label="Play video">
        ${slide.poster ? `<img src="${escapeHTML(slide.poster)}" alt="" loading="lazy">` : ''}
        <span class="gallery-thumb-play">▶</span>
      </button>`;
    }
    return `<button class="gallery-thumb${active ? ' active' : ''}" data-index="${i}" aria-label="View image ${i + 1}">
      <img src="${escapeHTML(slide.src)}" alt="" loading="lazy">
    </button>`;
  }

  // Attaches the click-to-expand handler to whichever <img> is currently the
  // main slide (video slides have nothing to attach — their own controls
  // already handle playback/fullscreen).
  function wireExpandableImage(container, slides, index){
    const img = container.querySelector('img');
    if (!img) return;
    img.addEventListener('click', () => {
      const imageSlides = slides.filter(s => s.type === 'image');
      const startIndex = imageSlides.findIndex(s => s === slides[index]);
      openLightbox(imageSlides.map(s => s.src), Math.max(startIndex, 0));
    });
  }

  function projectMediaHTML(p){
    const slides = projectSlides(p);
    if (!slides.length) return '';

    if (slides.length === 1) {
      const only = slides[0];
      if (only.type === 'video') return `<div class="modal-media">${slideInnerHTML(only, p.title, 1, 1)}</div>`;
      return `<div class="modal-media">${slideInnerHTML(only, p.title, 1, 1)}</div>`;
    }

    const thumbs = slides.map((s, i) => slideThumbHTML(s, i, i === 0)).join('');
    return `
      <div class="modal-media modal-gallery">
        <div class="gallery-main">
          <div class="gallery-slide">${slideInnerHTML(slides[0], p.title, 1, slides.length)}</div>
          <button class="gallery-nav prev" aria-label="Previous">‹</button>
          <button class="gallery-nav next" aria-label="Next">›</button>
          <span class="gallery-counter">1 / ${slides.length}</span>
        </div>
        <div class="gallery-thumbs">${thumbs}</div>
      </div>`;
  }

  // Wires up prev/next/thumbnail clicks for the carousel just inserted into
  // the modal (if there is one), and registers it as the active gallery so
  // the shared keydown listener above can drive it with arrow keys.
  function initGallery(p){
    const slides = projectSlides(p);
    const galleryEl = modalBody.querySelector('.modal-gallery');
    if (!galleryEl) {
      // Single-slide case still needs its lone image wired up for expansion.
      if (slides.length === 1 && slides[0].type === 'image') {
        wireExpandableImage(modalBody.querySelector('.modal-media'), slides, 0);
      }
      return;
    }

    const mainEl = galleryEl.querySelector('.gallery-main');
    const slideEl = galleryEl.querySelector('.gallery-slide');
    const counter = galleryEl.querySelector('.gallery-counter');
    const thumbs = galleryEl.querySelectorAll('.gallery-thumb');

    function renderSlide(i){
      const index = (i + slides.length) % slides.length;
      slideEl.style.opacity = '0';
      setTimeout(() => {
        slideEl.innerHTML = slideInnerHTML(slides[index], p.title, index + 1, slides.length);
        slideEl.style.opacity = '1';
        wireExpandableImage(slideEl, slides, index);
      }, 150);
      counter.textContent = `${index + 1} / ${slides.length}`;
      thumbs.forEach((th, ti) => th.classList.toggle('active', ti === index));
      currentGallery.index = index;
    }

    currentGallery = { slides, index: 0, title: p.title, renderSlide };
    wireExpandableImage(slideEl, slides, 0);
    mainEl.querySelector('.gallery-nav.prev').addEventListener('click', () => renderSlide(currentGallery.index - 1));
    mainEl.querySelector('.gallery-nav.next').addEventListener('click', () => renderSlide(currentGallery.index + 1));
    thumbs.forEach((th, ti) => th.addEventListener('click', () => renderSlide(ti)));
  }

  // Optional "built for" credit. Only renders when a project explicitly has
  // a `client` object — never invent or assume one. Get the client's
  // go-ahead before adding them here, and lean conservative for individuals
  // (first name / "a private client" rather than a full name or a link to
  // personal social profiles) unless they've specifically asked to be linked.
  function projectClientHTML(p){
    if (!p.client || !p.client.name) return '';
    const name = escapeHTML(p.client.name);
    const label = p.client.url
      ? `<a href="${escapeHTML(p.client.url)}" target="_blank" rel="noopener noreferrer">${name}</a>`
      : name;
    return `<p class="modal-client">${t('builtFor')} ${label}</p>`;
  }

  function openProjectModal(rawProject){
    const p = localize(rawProject);
    const highlights = Array.isArray(p.highlights) && p.highlights.length
      ? `<ul class="modal-highlights">${p.highlights.map(h => `<li>${escapeHTML(h)}</li>`).join('')}</ul>`
      : '';
    openModal(`
      ${projectMediaHTML(p)}
      <span class="modal-eyebrow">${escapeHTML(p.tag)}</span>
      <h2 id="modalTitle">${escapeHTML(p.title)}</h2>
      ${projectClientHTML(p)}
      <p>${escapeHTML(p.desc)}</p>
      ${highlights}
    `);
    initGallery(p);
  }

  // ---- work grid ----
  // Each project's `image` is the source of truth for its thumbnail. If it's
  // missing, or the file fails to load, we fall back to a generated pattern
  // so the layout never breaks while images are still being added.
  const thumbColors = ['#3B6FE0', '#35C6F0', '#8FA0B8'];

  function fallbackThumbSVG(i){
    return `
      <svg class="work-thumb-fallback" viewBox="0 0 300 150" preserveAspectRatio="none" style="display:block">
        <line x1="0" y1="${30 + (i % 3) * 10}" x2="300" y2="${20 + (i % 4) * 15}" stroke="${thumbColors[i % 3]}" stroke-width="1" opacity="0.5"/>
        <line x1="0" y1="${90 + (i % 2) * 10}" x2="300" y2="${100 - (i % 3) * 15}" stroke="${thumbColors[(i + 1) % 3]}" stroke-width="1" opacity="0.35"/>
        <circle cx="${40 + (i * 37) % 220}" cy="${60 + (i * 19) % 60}" r="3" fill="${thumbColors[i % 3]}"/>
      </svg>`;
  }

  function renderProjects(projects){
    const grid = document.getElementById('workGrid');
    grid.innerHTML = projects.map((rawP, i) => {
      const p = localize(rawP);
      const thumbSrc = p.image || (Array.isArray(p.images) && p.images[0]) || '';
      return `
      <div class="work-card" role="button" tabindex="0" aria-haspopup="dialog" data-index="${i}">
        <div class="work-thumb">
          ${thumbSrc ? `<img src="${thumbSrc}" alt="${escapeHTML(p.title)}" loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">` : ''}
          <div style="display:${thumbSrc ? 'none' : 'block'};">${fallbackThumbSVG(i)}</div>
        </div>
        <div class="work-body">
          <span class="work-tag mono">${escapeHTML(p.tag)}</span>
          <h3>${escapeHTML(p.title)}</h3>
          <p>${escapeHTML(p.desc)}</p>
          <span class="card-cta">${t('viewCaseStudy')}</span>
        </div>
      </div>
    `;
    }).join('');

    grid.querySelectorAll('.work-card').forEach(card => {
      const project = projects[Number(card.dataset.index)];
      card.addEventListener('click', () => openProjectModal(project));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProjectModal(project); }
      });
    });
  }

  // ---- team grid ----
  // Same pattern: `image` drives the avatar photo, with initials as the
  // fallback whenever there's no image yet or it can't be loaded.
  function openTeamModal(rawMember){
    const t2 = localize(rawMember);
    const linkLabels = translations[currentLang].linkLabels;
    const links = t2.links && Object.keys(t2.links).length
      ? `<div class="modal-links">${Object.entries(t2.links).map(([key, url]) =>
          `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(linkLabels[key] || key)}</a>`
        ).join('')}</div>`
      : '';
    const displayName = currentLang === 'ar' && t2.nameLocal ? t2.nameLocal : t2.name;
    openModal(`
      <div class="modal-avatar-row">
        <div class="modal-avatar">
          ${t2.image ? `<img src="${t2.image}" alt="${escapeHTML(t2.name)}"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : ''}
          <span class="avatar-fallback" style="display:${t2.image ? 'none' : 'flex'};">${escapeHTML(t2.initials)}</span>
        </div>
        <div>
          <h2 id="modalTitle" style="margin-bottom:2px; padding-right:0;">${escapeHTML(displayName)}</h2>
          <span class="modal-eyebrow" style="margin-bottom:0;">${escapeHTML(t2.role)}</span>
        </div>
      </div>
      ${t2.bio ? `<p>${escapeHTML(t2.bio)}</p>` : ''}
      ${links}
    `);
  }

  function renderTeam(team){
    const grid = document.getElementById('teamGrid');
    grid.innerHTML = team.map((rawT, i) => {
      const member = localize(rawT);
      const displayName = currentLang === 'ar' && member.nameLocal ? member.nameLocal : member.name;
      return `
      <div class="team-card" role="button" tabindex="0" aria-haspopup="dialog" data-index="${i}">
        <div class="team-avatar">
          ${member.image ? `<img src="${member.image}" alt="${escapeHTML(member.name)}" loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : ''}
          <span class="avatar-fallback" style="display:${member.image ? 'none' : 'flex'};">${escapeHTML(member.initials)}</span>
        </div>
        <h3>${escapeHTML(displayName)}</h3>
        <div class="role mono">${escapeHTML(member.role)}</div>
        <span class="card-cta">${t('viewBio')}</span>
      </div>
    `;
    }).join('');

    grid.querySelectorAll('.team-card').forEach(card => {
      const member = team[Number(card.dataset.index)];
      card.addEventListener('click', () => openTeamModal(member));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openTeamModal(member); }
      });
    });
  }

  // ---- capability strip ----
  function renderCapabilities(caps, capsAr){
    const track = document.getElementById('stripTrack');
    const list = (currentLang === 'ar' && Array.isArray(capsAr) && capsAr.length === caps.length) ? capsAr : caps;
    const items = [...list, ...list]; // duplicate for seamless loop
    track.innerHTML = items.map(c => `<div class="strip-item">${escapeHTML(c)}</div>`).join('');
  }

  // ---- systems (product line) ----
  function renderSystems(systems){
    const grid = document.getElementById('systemsGrid');
    if (!grid) return;
    const statusLabels = translations[currentLang].statusLabels;
    grid.innerHTML = systems.map(rawS => {
      const s = localize(rawS);
      const statusClass = `status-${rawS.status || 'planned'}`;
      const statusLabel = statusLabels[rawS.status] || rawS.status || statusLabels.planned;
      const tags = [...(s.tech || []), ...(s.industries || [])];
      return `
        <div class="system-card">
          <div class="system-head">
            <h3>${escapeHTML(s.name)}</h3>
            <span class="system-status ${statusClass}">${escapeHTML(statusLabel)}</span>
          </div>
          ${s.tagline ? `<span class="system-tagline mono">${escapeHTML(s.tagline)}</span>` : ''}
          <p>${escapeHTML(s.desc)}</p>
          ${tags.length ? `<div class="system-tags">${tags.map(tg => `<span>${escapeHTML(tg)}</span>`).join('')}</div>` : ''}
        </div>
      `;
    }).join('');
  }

  // ---- load all site data from data.json ----
  // Update projects, team members, the systems product line, and the
  // capability strip by editing data.json — no need to touch this file for
  // routine content changes. This is a real fetch() so it works correctly
  // once hosted (GitHub Pages, Netlify, any http(s) host) and is
  // straightforward for an external tool to update via the GitHub API. It
  // will NOT work if you open index.html directly via file:// — browsers
  // block local-file fetches for security. For local testing, run a tiny
  // local server from this folder, e.g.:
  //   python3 -m http.server
  // then open http://localhost:8000 — no other changes needed.
  fetch('data.json')
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load data.json (${res.status})`);
      return res.json();
    })
    .then(data => {
      currentSiteData = data;
      renderCapabilities(data.capabilities || [], data.capabilitiesAr || []);
      renderSystems(data.systems || []);
      renderProjects(data.projects || []);
      renderTeam(data.team || []);
    })
    .catch(err => {
      console.error('Could not load site data:', err);
      const isFileProtocol = window.location.protocol === 'file:';
      const note = isFileProtocol ? t('dataLoadErrorFile') : t('dataLoadErrorOther');
      document.getElementById('stripTrack').innerHTML = `<div class="strip-item">${note}</div>`;
    });


  // ---- contact form (front-end only — wire up to your backend / email service) ----
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    note.textContent = t('contactThanks');
    note.style.color = 'var(--cyan)';
    form.reset();
  });
