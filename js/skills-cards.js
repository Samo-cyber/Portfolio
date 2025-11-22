// js/skills-cards.js
(function () {
  function initSkillsCards() {
    const wrapper = document.querySelector('.skills-wrapper');
    if (!wrapper) return console.warn('[skills-cards] .skills-wrapper not found');

    // get any nested .skill-card reliably
    const cards = Array.from(wrapper.querySelectorAll(':scope .skill-card'));
    if (!cards.length) return console.warn('[skills-cards] no .skill-card found');

    // remove interfering classes and inline styles from animations
    cards.forEach(c => {
      c.classList.remove('active', 'inactive');
      // remove inline styles that GSAP/AOS could have set
      c.style.opacity = '';
      c.style.transform = '';
      c.style.visibility = '';
      // remove potential wrapper overlays if present (optional)
      // if (c.querySelector('.overlay')) c.querySelector('.overlay').style.opacity = '';
    });

    // Activate card (last hovered/clicked stays active)
    const activate = (target) => {
      cards.forEach(c => c === target ? c.classList.add('active') : c.classList.remove('active'));
    };

    // Attach events (hover/focus/click/keyboard)
    cards.forEach(card => {
      if (!card.hasAttribute('tabindex')) card.tabIndex = 0;
      card.addEventListener('mouseenter', () => activate(card));
      card.addEventListener('focus', () => activate(card));
      card.addEventListener('click', () => activate(card)); // click sets active permanently until another chosen
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(card); }
      });
    });

    // Debug helpers
    window.__skillsCards = {
      activateByIndex(i) { if (i >= 0 && i < cards.length) activate(cards[i]); },
      listCount: () => cards.length
    };

    console.info('[skills-cards] initialized. cards:', cards.length);
  }

  // Wait for full load (ensures GSAP/ScrollTrigger/other inits finished)
  if (document.readyState === 'complete') {
    // already loaded
    setTimeout(initSkillsCards, 50);
  } else {
    window.addEventListener('load', () => {
      // small delay to let any post-load animation runners finish
      setTimeout(initSkillsCards, 80);
    });
  }
})();
