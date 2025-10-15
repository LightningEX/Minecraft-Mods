document.addEventListener('DOMContentLoaded', () => {
  // Reveal sections as you scroll
  const sections = document.querySelectorAll('main > section');
  function revealSections() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('section--visible');
      }
    });
  }
  window.addEventListener('scroll', revealSections);
  revealSections();

  // Smooth scroll for top nav buttons
  document.querySelectorAll('.nav-btn[data-scroll]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('data-scroll');
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Side panel logic
  const sidePanel = document.getElementById('side-panel');
  const overlay = document.getElementById('side-panel-overlay');
  const openBtn = document.getElementById('side-panel-trigger');
  const closeBtn = document.getElementById('side-panel-close');
  function openPanel() {
    sidePanel.classList.add('open');
    overlay.classList.add('visible');
    sidePanel.setAttribute('aria-hidden', 'false');
  }
  function closePanel() {
    sidePanel.classList.remove('open');
    overlay.classList.remove('visible');
    sidePanel.setAttribute('aria-hidden', 'true');
  }
  openBtn.addEventListener('click', openPanel);
  closeBtn.addEventListener('click', closePanel);
  overlay.addEventListener('click', closePanel);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidePanel.classList.contains('open')) {
      closePanel();
    }
  });

  // Smooth scroll for side panel nav buttons
  document.querySelectorAll('.side-nav-btn[data-scroll]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('data-scroll');
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        closePanel();
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 350);
      }
    });
  });
});