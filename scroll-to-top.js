(function () {
  const btn = document.createElement('button');
  btn.id = 'scroll-to-top';
  btn.setAttribute('aria-label', 'Volver arriba');
  btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 15l-6-6-6 6"/>
    </svg>`;
  document.body.appendChild(btn);

  const style = document.createElement('style');
  style.textContent = `
    #scroll-to-top {
      position: fixed;
      bottom: 32px;
      right: 32px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #0F233A;
      color: #FAF8F4;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px);
      transition: opacity .3s ease, transform .3s ease, visibility .3s;
      z-index: 999;
    }
    #scroll-to-top.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    #scroll-to-top:hover {
      background: #C79A63;
    }
    @media (max-width: 768px) {
      #scroll-to-top { bottom: 20px; right: 20px; width: 42px; height: 42px; }
    }
  `;
  document.head.appendChild(style);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();