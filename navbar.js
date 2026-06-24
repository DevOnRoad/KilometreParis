// ============================================================
//  navbar.js — Kilometre Paris
//  Ajoute <link> Google Fonts + inject nav en haut du <body>
// ============================================================

(function () {

    /* --- 1. Google Fonts (si pas déjà chargées) --- */
    if (!document.querySelector('link[href*="DM+Serif+Display"]')) {
      const f = document.createElement('link');
      f.rel = 'stylesheet';
      f.href = 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Barlow:wght@300;400;500;700;900&display=swap';
      document.head.appendChild(f);
    }
  
    /* --- 2. CSS navbar --- */
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --rouge: #B82928;
        --bleu:  #2F3E86;
        --jaune: #FFF8BD;
        --blanc: #ffffff;
        --noir:  #1a1a1a;
      }
  
      #km-nav {
        position: fixed;
        top: 0; left: 0; right: 0;
        z-index: 1000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.2rem 2.5rem;
        background: var(--blanc);
        border-bottom: 1px solid rgba(47,62,134,0.12);
        font-family: 'Barlow', Arial, sans-serif;
      }
  
      #km-nav .nav-logo {
        font-family: 'DM Serif Display', serif;
        font-size: 1.1rem;
        font-weight: 400;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: var(--bleu);
        text-decoration: none;
        position: relative;
        z-index: 1002;
      }
  
      #km-nav .nav-links {
        display: flex;
        gap: 2rem;
        list-style: none;
        align-items: center;
      }
  
      #km-nav .nav-links a {
        font-size: 0.72rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--noir);
        text-decoration: none;
        font-weight: 400;
        transition: color 0.2s;
      }
  
      #km-nav .nav-links a:hover { color: var(--rouge); }
  
      #km-nav .nav-cta {
        font-size: 0.72rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        background: var(--bleu);
        color: var(--blanc) !important;
        padding: 0.55rem 1.3rem;
        transition: background 0.2s;
      }
  
      #km-nav .nav-cta:hover { background: var(--rouge) !important; }
  
      #km-nav .burger {
        display: none;
        width: 42px; height: 42px;
        border: none;
        background: transparent;
        cursor: pointer;
        position: relative;
        z-index: 1002;
      }
  
      #km-nav .burger span {
        display: block;
        width: 26px; height: 2px;
        background: var(--bleu);
        margin: 6px auto;
        transition: transform 0.25s ease, opacity 0.25s ease;
      }
  
      #km-nav .burger.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
      #km-nav .burger.active span:nth-child(2) { opacity: 0; }
      #km-nav .burger.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
  
      /* Lien actif : la page courante s'affiche en rouge */
      #km-nav .nav-links a.nav-active { color: var(--rouge); font-weight: 700; }
  
      @media (max-width: 768px) {
        #km-nav { padding: 1rem 1.2rem; }
        #km-nav .nav-logo { font-size: 0.82rem; letter-spacing: 0.18em; }
        #km-nav .burger { display: block; }
  
        #km-nav .nav-links {
          position: fixed;
          top: 0; right: 0;
          width: 78%; max-width: 340px; height: 100vh;
          background: var(--blanc);
          border-left: 1px solid rgba(47,62,134,0.12);
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          box-shadow: -20px 0 40px rgba(0,0,0,0.08);
        }
  
        #km-nav .nav-links.active { transform: translateX(0); }
        #km-nav .nav-links a { font-size: 0.8rem; }
        body.km-menu-open { overflow: hidden; }
      }
    `;
    document.head.appendChild(style);
  
    /* --- 3. HTML navbar --- */
    const nav = document.createElement('nav');
    nav.id = 'km-nav';
    nav.innerHTML = `
      <a href="index.html" class="nav-logo">
        <img src="https://kilometre.paris/cdn/shop/files/kilometre_logo.png?v=1699240779&width=80"
             alt="Kilometre Paris" style="height:54px;width:auto;display:block;">
      </a>
      <button class="burger" type="button" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links">
        <li><a href="index.html#about">The House</a></li>
        <li><a href="index.html#miy">Bespoke</a></li>
        <li><a href="index.html#travels">Our Travels</a></li>
        <li><a href="index.html#philosophy">Our DNA</a></li>
        <li><a href="melbourne.html">Melbourne</a></li>
        <li><a href="tbilisi.html">Tbilisi</a></li>
        <li><a href="los-angeles.html">Los Angeles</a></li>
        <li><a href="https://kilometre.paris" class="nav-cta" target="_blank">Shop</a></li>
      </ul>
    `;
    document.body.insertBefore(nav, document.body.firstChild);
  
    /* --- 4. Ajoute padding-top au body pour compenser la nav fixe --- */
    document.body.style.paddingTop = '72px';
  
    /* --- 5. Lien actif selon la page courante --- */
    const page = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('.nav-links a').forEach(link => {
      const href = link.getAttribute('href').split('#')[0];
      if (href && href !== '' && page.includes(href.replace('.html', ''))) {
        link.classList.add('nav-active');
      }
    });
  
    /* --- 6. Burger menu --- */
    const burger = nav.querySelector('.burger');
    const navLinks = nav.querySelector('.nav-links');
  
    burger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      burger.classList.toggle('active', isOpen);
      document.body.classList.toggle('km-menu-open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
      burger.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    });
  
    nav.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('km-menu-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  
  })();