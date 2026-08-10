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
  let galleryKeyHandler = null;

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
    if (galleryKeyHandler) { document.removeEventListener('keydown', galleryKeyHandler); galleryKeyHandler = null; }
    if (lastFocusedEl) lastFocusedEl.focus();
  }
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
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

  // Builds the video block for a project, if it has one: embed takes
  // priority over a self-hosted file.
  function projectVideoHTML(p){
    if (p.videoEmbed) {
      return `<div class="modal-media"><div class="video-embed">
        <iframe src="${escapeHTML(toEmbedSrc(p.videoEmbed))}" title="${escapeHTML(p.title)} walkthrough"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div></div>`;
    }
    if (p.videoFile) {
      return `<div class="modal-media"><div class="video-embed">
        <video src="${escapeHTML(p.videoFile)}" controls preload="metadata"
          ${p.image ? `poster="${escapeHTML(p.image)}"` : ''}></video>
      </div></div>`;
    }
    return '';
  }

  // Builds the image gallery for a project. Uses `images` (an array) when
  // present; otherwise falls back to the single `image` field so older data
  // still works. A single image renders plain — the carousel chrome only
  // appears once there's more than one to browse.
  function projectGalleryHTML(p){
    const images = Array.isArray(p.images) && p.images.length ? p.images : (p.image ? [p.image] : []);
    if (!images.length) return '';
    if (images.length === 1) {
      return `<div class="modal-media"><img src="${escapeHTML(images[0])}" alt="${escapeHTML(p.title)}"
        onerror="this.parentElement.outerHTML='<div class=\\'modal-media\\'><div class=\\'gallery-broken\\'>Image unavailable</div></div>'"></div>`;
    }
    const thumbs = images.map((src, i) =>
      `<button class="gallery-thumb${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="View image ${i + 1} of ${images.length}">
        <img src="${escapeHTML(src)}" alt="" loading="lazy">
      </button>`
    ).join('');
    return `
      <div class="modal-media modal-gallery">
        <div class="gallery-main">
          <img class="gallery-main-img" src="${escapeHTML(images[0])}" alt="${escapeHTML(p.title)} — image 1 of ${images.length}">
          <button class="gallery-nav prev" aria-label="Previous image">‹</button>
          <button class="gallery-nav next" aria-label="Next image">›</button>
          <span class="gallery-counter">1 / ${images.length}</span>
        </div>
        <div class="gallery-thumbs">${thumbs}</div>
      </div>`;
  }

  // Wires up prev/next/thumbnail clicks and left/right arrow keys for the
  // gallery just inserted into the modal, if there is one.
  function initGallery(images, title){
    const galleryEl = modalBody.querySelector('.modal-gallery');
    if (galleryKeyHandler) { document.removeEventListener('keydown', galleryKeyHandler); galleryKeyHandler = null; }
    if (!galleryEl) return;

    let index = 0;
    const mainImg = galleryEl.querySelector('.gallery-main-img');
    const counter = galleryEl.querySelector('.gallery-counter');
    const thumbs = galleryEl.querySelectorAll('.gallery-thumb');

    function show(i){
      index = (i + images.length) % images.length;
      mainImg.style.opacity = '0';
      setTimeout(() => {
        mainImg.src = images[index];
        mainImg.alt = `${title} — image ${index + 1} of ${images.length}`;
        mainImg.style.opacity = '1';
      }, 150);
      counter.textContent = `${index + 1} / ${images.length}`;
      thumbs.forEach((t, ti) => t.classList.toggle('active', ti === index));
    }

    galleryEl.querySelector('.gallery-nav.prev').addEventListener('click', () => show(index - 1));
    galleryEl.querySelector('.gallery-nav.next').addEventListener('click', () => show(index + 1));
    thumbs.forEach((t, ti) => t.addEventListener('click', () => show(ti)));

    galleryKeyHandler = e => {
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    };
    document.addEventListener('keydown', galleryKeyHandler);
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
    return `<p class="modal-client">Built for ${label}</p>`;
  }

  function openProjectModal(p){
    const highlights = Array.isArray(p.highlights) && p.highlights.length
      ? `<ul class="modal-highlights">${p.highlights.map(h => `<li>${escapeHTML(h)}</li>`).join('')}</ul>`
      : '';
    const images = Array.isArray(p.images) && p.images.length ? p.images : (p.image ? [p.image] : []);
    openModal(`
      ${projectVideoHTML(p)}
      ${projectGalleryHTML(p)}
      <span class="modal-eyebrow">${escapeHTML(p.tag)}</span>
      <h2 id="modalTitle">${escapeHTML(p.title)}</h2>
      ${projectClientHTML(p)}
      <p>${escapeHTML(p.desc)}</p>
      ${highlights}
    `);
    if (images.length > 1) initGallery(images, p.title);
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
    grid.innerHTML = projects.map((p, i) => {
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
          <span class="card-cta">View case study →</span>
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
  const linkLabels = { github: 'GitHub', linkedin: 'LinkedIn', website: 'Website', portfolio: 'Portfolio', twitter: 'Twitter' };

  function openTeamModal(t){
    const links = t.links && Object.keys(t.links).length
      ? `<div class="modal-links">${Object.entries(t.links).map(([key, url]) =>
          `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(linkLabels[key] || key)}</a>`
        ).join('')}</div>`
      : '';
    openModal(`
      <div class="modal-avatar-row">
        <div class="modal-avatar">
          ${t.image ? `<img src="${t.image}" alt="${escapeHTML(t.name)}"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : ''}
          <span class="avatar-fallback" style="display:${t.image ? 'none' : 'flex'};">${escapeHTML(t.initials)}</span>
        </div>
        <div>
          <h2 id="modalTitle" style="margin-bottom:2px; padding-right:0;">${escapeHTML(t.name)}</h2>
          <span class="modal-eyebrow" style="margin-bottom:0;">${escapeHTML(t.role)}</span>
        </div>
      </div>
      ${t.bio ? `<p>${escapeHTML(t.bio)}</p>` : ''}
      ${links}
    `);
  }

  function renderTeam(team){
    const grid = document.getElementById('teamGrid');
    grid.innerHTML = team.map((t, i) => `
      <div class="team-card" role="button" tabindex="0" aria-haspopup="dialog" data-index="${i}">
        <div class="team-avatar">
          ${t.image ? `<img src="${t.image}" alt="${escapeHTML(t.name)}" loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : ''}
          <span class="avatar-fallback" style="display:${t.image ? 'none' : 'flex'};">${escapeHTML(t.initials)}</span>
        </div>
        <h3>${escapeHTML(t.name)}</h3>
        <div class="role mono">${escapeHTML(t.role)}</div>
        <span class="card-cta">View bio →</span>
      </div>
    `).join('');

    grid.querySelectorAll('.team-card').forEach(card => {
      const member = team[Number(card.dataset.index)];
      card.addEventListener('click', () => openTeamModal(member));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openTeamModal(member); }
      });
    });
  }

  // ---- capability strip ----
  function renderCapabilities(caps){
    const track = document.getElementById('stripTrack');
    const items = [...caps, ...caps]; // duplicate for seamless loop
    track.innerHTML = items.map(c => `<div class="strip-item">${escapeHTML(c)}</div>`).join('');
  }

  // ---- systems (product line) ----
  const statusLabels = { live: 'Live', 'in-development': 'In development', planned: 'Planned' };

  function renderSystems(systems){
    const grid = document.getElementById('systemsGrid');
    if (!grid) return;
    grid.innerHTML = systems.map(s => {
      const statusClass = `status-${s.status || 'planned'}`;
      const statusLabel = statusLabels[s.status] || s.status || 'Planned';
      const tags = [...(s.tech || []), ...(s.industries || [])];
      return `
        <div class="system-card">
          <div class="system-head">
            <h3>${escapeHTML(s.name)}</h3>
            <span class="system-status ${statusClass}">${escapeHTML(statusLabel)}</span>
          </div>
          ${s.tagline ? `<span class="system-tagline mono">${escapeHTML(s.tagline)}</span>` : ''}
          <p>${escapeHTML(s.desc)}</p>
          ${tags.length ? `<div class="system-tags">${tags.map(t => `<span>${escapeHTML(t)}</span>`).join('')}</div>` : ''}
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
      renderCapabilities(data.capabilities || []);
      renderSystems(data.systems || []);
      renderProjects(data.projects || []);
      renderTeam(data.team || []);
    })
    .catch(err => {
      console.error('Could not load site data:', err);
      const isFileProtocol = window.location.protocol === 'file:';
      const note = isFileProtocol
        ? 'Content failed to load because this page was opened directly (file://). Run a local server instead — e.g. `python3 -m http.server` in this folder, then open http://localhost:8000.'
        : 'Content failed to load. Check that data.json exists and is valid JSON.';
      document.getElementById('stripTrack').innerHTML = `<div class="strip-item">${note}</div>`;
    });


  // ---- contact form (front-end only — wire up to your backend / email service) ----
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    note.textContent = 'Thanks — we\'ll be in touch shortly.';
    note.style.color = 'var(--cyan)';
    form.reset();
  });
