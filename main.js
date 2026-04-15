/**
 * MONREAL TOURS — Main JavaScript
 * Handles: navbar, scroll animations, page routing/rendering
 */

/* ── NAVBAR ──────────────────────────────────── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  if (!navbar) return;

  // Scroll effect
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile toggle
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';

      // Animate hamburger
      const spans = toggle.querySelectorAll('span');
      if (open) {
        spans[0].style.cssText = 'transform:rotate(45deg) translate(5px,5px)';
        spans[1].style.cssText = 'opacity:0';
        spans[2].style.cssText = 'transform:rotate(-45deg) translate(5px,-5px)';
      } else {
        spans.forEach(s => s.style.cssText = '');
      }
    });

    // Close on link click (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        document.body.style.overflow = '';
        toggle.querySelectorAll('span').forEach(s => s.style.cssText = '');
      });
    });
  }
})();

/* ── SCROLL ANIMATIONS ───────────────────────── */
(function initScrollAnimations() {
  const els = document.querySelectorAll(
    '.section-header, .section-label, .section-title, .section-desc, ' +
    '.category-card, .category-wide-card, .product-card, .value-card, ' +
    '.about-logo-display, .stat, .contact-whatsapp-card, .contact-social-card, .contact-address-card'
  );

  els.forEach((el, i) => {
    el.classList.add('animate-up');
    el.style.transitionDelay = `${(i % 6) * 0.07}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* ── NEWSLETTER FORM ─────────────────────────── */
function handleNewsletter(e) {
  e.preventDefault();
  const form = e.target;
  const input = form.querySelector('input[type="email"]');
  const btn   = form.querySelector('button[type="submit"]');

  btn.textContent = 'Enviando...';
  btn.disabled = true;

  // Simula envio
  setTimeout(() => {
    btn.textContent = '✓ Inscrito!';
    btn.style.background = '#25D366';
    input.value = '';
    setTimeout(() => {
      btn.textContent = 'Enviar';
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  }, 1200);
}

/* ── HOME: RENDER CATEGORY CARDS ────────────── */
function renderHomeCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid || !window.MT) return;

  grid.innerHTML = window.MT.categories.map(cat => `
    <a href="categoria.html?cat=${cat.id}" class="category-card">
      <img src="${cat.coverImage}" alt="${cat.title}" loading="lazy" />
      <div class="category-card-overlay"></div>
      <div class="category-card-body">
        <div class="category-card-name">${cat.title}</div>
        <div class="category-card-sub">${cat.subtitle}</div>
        <span class="category-card-link">Acessar</span>
      </div>
    </a>
  `).join('');
}

/* ── CATEGORIAS PAGE: RENDER WIDE CARDS ──────── */
function renderCategoriesPage() {
  const grid = document.getElementById('categoriesFullGrid');
  if (!grid || !window.MT) return;

  grid.innerHTML = window.MT.categories.map(cat => `
    <a href="categoria.html?cat=${cat.id}" class="category-wide-card">
      <img src="${cat.coverImage}" alt="${cat.title}" loading="lazy" />
      <div class="category-wide-card-overlay"></div>
      <div class="category-wide-card-body">
        <div class="category-wide-card-name">${cat.title}</div>
        <div class="category-wide-card-desc">${cat.description}</div>
        <span class="category-wide-card-cta">Ver destinos</span>
      </div>
    </a>
  `).join('');
}

/* ── CATEGORIA PAGE: LOAD BY ?cat= ───────────── */
function renderCategoryPage() {
  if (!window.MT) return;

  const params = new URLSearchParams(window.location.search);
  const catId  = params.get('cat');
  if (!catId) return;

  const cat = window.MT.getCategoryById(catId);
  if (!cat) return;

  // Update meta title
  document.title = `${cat.title} – Monreal Tours`;

  // Hero
  const heroImg = document.getElementById('categoryHeroImg');
  if (heroImg) {
    heroImg.src = cat.heroImage || cat.coverImage;
    heroImg.alt = cat.title;
  }

  // Breadcrumb
  const bc = document.getElementById('categoryBreadcrumb');
  if (bc) bc.textContent = cat.title;

  // Title
  const title = document.getElementById('categoryTitle');
  if (title) title.innerHTML = cat.title;

  // Label / subtitle / description
  const label = document.getElementById('categoryLabel');
  const subtitle = document.getElementById('categorySubtitle');
  const desc = document.getElementById('categoryDescription');
  if (label) label.textContent = 'Categoria';
  if (subtitle) subtitle.innerHTML = cat.subtitle;
  if (desc) desc.textContent = cat.longDescription;

  // Products grid
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const products = window.MT.getProductsByCategory(catId);

  if (products.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:64px 0; color:var(--text-muted)">
        <p style="font-size:1rem">Produtos em breve. Entre em <a href="contato.html" style="color:var(--gold)">contato</a> para mais informações.</p>
      </div>`;
    return;
  }

  grid.innerHTML = products.map(p => `
    <a href="produto.html?id=${p.id}" class="product-card">
      <div class="product-card-img">
        <img src="${p.coverImage}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="product-card-body">
        <div class="product-card-brand">${p.brand}</div>
        <h3 class="product-card-title">${p.title}</h3>
        <p class="product-card-desc">${p.description}</p>
        <div class="product-card-footer">
          <span class="product-card-cta">Quero ir</span>
        </div>
      </div>
    </a>
  `).join('');
}

/* ── PRODUTO PAGE: LOAD BY ?id= ──────────────── */
function renderProductPage() {
  if (!window.MT) return;

  const params = new URLSearchParams(window.location.search);
  const prodId = params.get('id');
  if (!prodId) return;

  const product = window.MT.getProductById(prodId);
  if (!product) return;

  document.title = `${product.title} – Monreal Tours`;

  // Hero
  const heroImg = document.getElementById('productHeroImg');
  if (heroImg) {
    heroImg.src = product.coverImage;
    heroImg.alt = product.title;
  }

  // Breadcrumb
  const bc = document.getElementById('productBreadcrumb');
  if (bc) bc.textContent = product.title;

  const catLink = document.getElementById('productCategoryLink');
  if (catLink && product.category) {
    const cat = window.MT.getCategoryById(product.category);
    catLink.href = `categoria.html?cat=${product.category}`;
    catLink.textContent = cat ? cat.title : product.category;
  }

  // Info
  const brand = document.getElementById('productBrand');
  const title = document.getElementById('productTitle');
  const desc  = document.getElementById('productDesc');
  const meta  = document.getElementById('productMeta');

  if (brand) brand.textContent = product.brand;
  if (title) title.textContent = product.title;
  if (desc)  desc.textContent  = product.description;
  if (meta && product.destination) {
    meta.innerHTML = `
      <span style="display:inline-flex;align-items:center;gap:6px;font-size:0.82rem;color:var(--gold)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${product.destination}
      </span>`;
  }

  // Gallery
  const gallery = document.getElementById('productGallery');
  if (gallery && product.gallery) {
    gallery.innerHTML = product.gallery.map(img => `
      <div class="gallery-grid-item">
        <img src="${img}" alt="${product.title}" loading="lazy" />
      </div>
    `).join('');
  }
}

/* ── PRODUCT FORM ────────────────────────────── */
function handleProductForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '✓ Mensagem enviada!';
    btn.style.background = '#25D366';
    e.target.reset();
    setTimeout(() => {
      btn.textContent = 'Enviar';
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  }, 1200);
}

/* ── CONTACT FORM ────────────────────────────── */
function handleContactForm(e) {
  e.preventDefault();
  const btn  = e.target.querySelector('button[type="submit"]');
  const succ = document.getElementById('formSuccess');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  setTimeout(() => {
    e.target.reset();
    btn.textContent = 'Enviar Mensagem';
    btn.disabled = false;
    if (succ) {
      succ.style.display = 'flex';
      setTimeout(() => { succ.style.display = 'none'; }, 6000);
    }
  }, 1200);
}

/* ── PAGE ROUTER ─────────────────────────────── */
(function pageRouter() {
  const path = window.location.pathname.split('/').pop();
  const page = path || 'index.html';

  if (page === '' || page === 'index.html')  renderHomeCategories();
  if (page === 'categorias.html')             renderCategoriesPage();
  if (page === 'categoria.html')              renderCategoryPage();
  if (page === 'produto.html')                renderProductPage();
})();
