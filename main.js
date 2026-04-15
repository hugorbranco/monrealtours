/* MONREAL TOURS — shared JS */
(function () {
  'use strict';

  /* ── NAV scroll + mobile ── */
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const drawer = document.getElementById('navDrawer');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
  }

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      const [s1, s2, s3] = toggle.querySelectorAll('span');
      if (open) {
        s1.style.cssText = 'transform:rotate(45deg) translate(5px,5px)';
        s2.style.cssText = 'opacity:0';
        s3.style.cssText = 'transform:rotate(-45deg) translate(5px,-5px)';
      } else {
        [s1, s2, s3].forEach(s => s.style.cssText = '');
      }
    });
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.querySelectorAll('span').forEach(s => s.style.cssText = '');
      });
    });
  }

  /* ── Scroll animations ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 60);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ── Newsletter form ── */
  const nlForm = document.getElementById('nlForm');
  if (nlForm) {
    nlForm.addEventListener('submit', e => {
      e.preventDefault();
      const inp = nlForm.querySelector('input[type=email]');
      if (inp && inp.value) {
        inp.value = '';
        const ok = document.getElementById('nlOk');
        if (ok) { ok.style.display = 'flex'; setTimeout(() => ok.style.display = 'none', 3000); }
      }
    });
  }

  /* ── Contact / Interest form ── */
  document.querySelectorAll('.js-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const ok = form.nextElementSibling;
      if (ok && ok.classList.contains('form-ok')) {
        form.style.display = 'none';
        ok.style.display = 'flex';
      }
    });
  });

  /* ── Active nav link ── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__drawer a').forEach(a => {
    if (a.getAttribute('href') === page || (page === '' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });

})();
