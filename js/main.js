/* Lightweight interactions for generated static portfolio */

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for the View Projects button
  const viewBtn = document.getElementById('view-projects');
  if (viewBtn) {
    viewBtn.addEventListener('click', () => {
      const target = document.getElementById('projects');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Reveal on scroll (simple)
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  reveals.forEach(r => io.observe(r));

  // Skill badges motion: gentle staggered float
  document.querySelectorAll('#skill-float .skill').forEach((el, i) => {
    const delay = (i % 5) * 120;
    el.animate([
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-6px)' },
      { transform: 'translateY(0px)' }
    ], { duration: 3000 + (i * 200), iterations: Infinity, delay });
  });

  // Contact form: prevent default and show a subtle local success
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = 'Message sent — thank you';
        btn.disabled = true;
        setTimeout(() => { btn.textContent = orig; btn.disabled = false; form.reset(); }, 2400);
      }
    });
  }
});
