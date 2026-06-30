(function () {

  /* --- 1. Google Fonts --- */
  if (!document.querySelector('link[href*="DM+Serif+Display"]')) {
    const f = document.createElement('link');
    f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Barlow:wght@300;400;500;700;900&display=swap';
    document.head.appendChild(f);
  }

  /* --- 2. CSS --- */
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
      padding: 1rem 2.5rem;
      background: var(--blanc);
      border-bottom: 1px solid rgba(47,62,134,0.12);
      font-family: 'Barlow', Arial, sans-serif;
      height: 72px;
    }

    /* LOGO */
    #km-nav .km-logo {
      text-decoration: none;
      z-index: 1002;
      position: relative;
    }

    /* LIENS */
    #km-nav .km-links {
      display: flex;
      gap: 2rem;
      list-style: none;
      align-items: center;
    }

    #km-nav .km-links a {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--noir);
      text-decoration: none;
      font-weight: 400;
      transition: color 0.2s;
    }

    #km-nav .km-links a:hover,
    #km-nav .km-links a.active { color: var(--rouge); }

    #km-nav .km-links .km-shop {
      background: var(--bleu);
      color: var(--blanc) !important;
      padding: 0.5rem 1.2rem;
      transition: background 0.2s;
    }

    #km-nav .km-links .km-shop:hover { background: var(--rouge) !important; }

    /* BURGER */
    #km-nav .km-burger {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 36px; height: 36px;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 1002;
      position: relative;
    }

    #km-nav .km-burger span {
      display: block;
      width: 24px; height: 2px;
      background: var(--bleu);
      transition: all 0.25s ease;
    }

    #km-nav .km-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    #km-nav .km-burger.open span:nth-child(2) { opacity: 0; }
    #km-nav .km-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    /* MENU MOBILE */
    #km-mobile-menu {
      display: none;
      position: fixed;
      top: 72px; left: 0; right: 0; bottom: 0;
      background: var(--blanc);
      z-index: 999;
      overflow-y: auto;
      padding: 2rem 2rem 4rem;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    }

    #km-mobile-menu.open {
      transform: translateX(0);
    }

    #km-mobile-menu ul {
      list-style: none;
      display: flex;
      flex-direction: column;
    }

    #km-mobile-menu ul li {
      border-bottom: 1px solid rgba(47,62,134,0.08);
    }

    #km-mobile-menu ul a {
      display: block;
      padding: 1.1rem 0;
      font-size: 0.85rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--noir);
      text-decoration: none;
      font-weight: 400;
      font-family: 'Barlow', Arial, sans-serif;
      transition: color 0.2s;
    }

    #km-mobile-menu ul a:hover { color: var(--rouge); }

    /* Section Travels mobile */
    #km-mobile-menu .km-mobile-travels-title {
      display: block;
      padding: 1.1rem 0 0.6rem;
      font-size: 0.85rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--rouge);
      font-weight: 700;
      font-family: 'Barlow', Arial, sans-serif;
    }

    #km-mobile-menu .km-mobile-travels {
      display: flex;
      flex-direction: column;
      gap: 0;
      border-bottom: 1px solid rgba(47,62,134,0.08);
      padding-bottom: 0.5rem;
      margin-bottom: 0;
    }

    #km-mobile-menu .km-mobile-travels a {
      padding: 0.7rem 0 0.7rem 1rem;
      border-bottom: none;
      font-size: 0.75rem;
      color: var(--bleu);
      border-bottom: 1px solid rgba(47,62,134,0.05);
    }

    #km-mobile-menu .km-mobile-travels a:last-child {
      border-bottom: none;
    }

    #km-mobile-menu .km-mobile-travels a span {
      color: rgba(0,0,0,0.3);
      font-size: 0.6rem;
      margin-left: 0.4rem;
    }

    /* Paris sub */
    #km-mobile-menu .km-paris-sub a {
      padding-left: 2rem;
      font-size: 0.7rem;
      color: rgba(47,62,134,0.6);
    }

    /* Section Pieces mobile */
    #km-mobile-menu .km-mobile-pieces-title {
      display: block;
      padding: 1.1rem 0 0.6rem;
      font-size: 0.85rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--rouge);
      font-weight: 700;
      font-family: 'Barlow', Arial, sans-serif;
    }

    #km-mobile-menu .km-mobile-pieces {
      display: flex;
      flex-direction: column;
      gap: 0;
      border-bottom: 1px solid rgba(47,62,134,0.08);
      padding-bottom: 0.5rem;
    }

    #km-mobile-menu .km-mobile-pieces a {
      padding: 0.7rem 0 0.7rem 1rem;
      font-size: 0.75rem;
      color: var(--bleu);
      border-bottom: 1px solid rgba(47,62,134,0.05);
    }

    #km-mobile-menu .km-mobile-pieces a:last-child {
      border-bottom: none;
    }

    #km-mobile-menu .km-shop-mobile {
      display: block;
      margin-top: 2rem;
      padding: 1rem;
      background: var(--bleu);
      color: var(--blanc) !important;
      text-align: center;
      font-size: 0.72rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      text-decoration: none;
      font-family: 'Barlow', Arial, sans-serif;
      font-weight: 700;
    }

    @media (max-width: 768px) {
      #km-nav .km-links { display: none; }
      #km-nav .km-burger { display: flex; }
      #km-mobile-menu { display: block; }
      body.km-open { overflow: hidden; }
    }
  `;
  document.head.appendChild(style);

  /* --- 3. HTML navbar --- */
  const nav = document.createElement('nav');
  nav.id = 'km-nav';
  nav.innerHTML = `
    <a href="index.html" class="km-logo">
      <img src="https://kilometre.paris/cdn/shop/files/kilometre_logo.png?v=1699240779&width=80"
           alt="Kilometre Paris" style="height:50px;width:auto;display:block;">
    </a>
    <ul class="km-links">
      <li><a href="index.html#about">The House</a></li>
      <li><a href="index.html#miy">Bespoke</a></li>
      <li><a href="index.html#travels">Our Travels</a></li>
      <li><a href="index.html#pieces">Our Pieces</a></li>
      <li><a href="index.html#philosophy">Our DNA</a></li>
      <li><a href="pieces-maitresses-final.html">The Works</a></li>
      <li><a href="https://kilometre.paris" class="km-shop" target="_blank">Shop</a></li>
    </ul>
    <button class="km-burger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  `;
  document.body.insertBefore(nav, document.body.firstChild);

  /* --- 4. Menu mobile --- */
  const mobile = document.createElement('div');
  mobile.id = 'km-mobile-menu';
  mobile.innerHTML = `
    <ul>
      <li><a href="index.html#about">The House</a></li>
      <li><a href="index.html#miy">Bespoke</a></li>
      <li><a href="index.html#philosophy">Our DNA</a></li>
      <li><a href="pieces-maitresses-final.html">The Works</a></li>
    </ul>

    <span class="km-mobile-travels-title">Our Travels</span>
    <div class="km-mobile-travels">
      <a href="melbourne.html">Melbourne <span>Australia</span></a>
      <a href="tbilisi.html">Tbilisi <span>Georgia</span></a>
      <a href="los-angeles.html">Los Angeles <span>United States</span></a>
      <a href="addis-ababa.html">Addis Ababa <span>Ethiopia</span></a>
      <a href="brussels.html">Brussels <span>Belgium</span></a>
      <a href="mallorca.html">Mallorca <span>Spain</span></a>
      <a href="paris.html">Paris — Part I <span>France</span></a>
      <a href="paris-part-2.html">Paris — Part II <span>France</span></a>
      <a href="paris-part-3.html">Paris — Part III <span>France</span></a>
      <a href="venice.html">Venice <span>Italy</span></a>
      <a href="ibiza.html">Ibiza <span>Spain</span></a>
    </div>

    <span class="km-mobile-pieces-title">Our Pieces</span>
    <div class="km-mobile-pieces">
      <a href="bleu-de-travail.html">The Worker's Jacket</a>
    </div>

    <a href="https://kilometre.paris" class="km-shop-mobile" target="_blank">Shop</a>
  `;
  document.body.insertBefore(mobile, nav.nextSibling);

  /* --- 5. Padding top --- */
  document.body.style.paddingTop = '72px';

  /* --- 6. Lien actif --- */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('.km-links a').forEach(link => {
    const href = link.getAttribute('href').split('#')[0];
    if (href && page && page !== 'index.html' && page === href) {
      link.classList.add('active');
    }
  });

  /* --- 7. Burger --- */
  const burger = nav.querySelector('.km-burger');

  burger.addEventListener('click', () => {
    const isOpen = mobile.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    document.body.classList.toggle('km-open', isOpen);
  });

  // Fermer au clic sur un lien
  mobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobile.classList.remove('open');
      burger.classList.remove('open');
      document.body.classList.remove('km-open');
    });
  });

})();