// ============================================================
//  footer.js — Kilometre Paris
//  Inject newsletter + footer en bas du <body>
// ============================================================

(function () {

    /* --- 1. CSS footer + newsletter --- */
    const style = document.createElement('style');
    style.textContent = `
      /* NEWSLETTER */
      #km-newsletter {
        background: #FFF8BD;
        padding: 5rem 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        font-family: 'Barlow', Arial, sans-serif;
      }
  
      #km-newsletter .nl-label {
        font-size: 0.68rem;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        color: #B82928;
        margin-bottom: 1rem;
        font-weight: 700;
      }
  
      #km-newsletter .nl-title {
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: 900;
        color: #2F3E86;
        margin-bottom: 0.8rem;
        line-height: 1.2;
        text-transform: uppercase;
      }
  
      #km-newsletter .nl-sub {
        font-size: 0.85rem;
        color: rgba(0,0,0,0.6);
        margin-bottom: 2.5rem;
        font-weight: 400;
      }
  
      #km-newsletter .nl-form {
        display: flex;
        max-width: 420px;
        width: 100%;
      }
  
      #km-newsletter .nl-input {
        flex: 1;
        padding: 0.9rem 1.2rem;
        border: 1px solid #2F3E86;
        background: #ffffff;
        font-size: 0.82rem;
        outline: none;
        font-family: 'Barlow', Arial, sans-serif;
      }
  
      #km-newsletter .nl-btn {
        padding: 0.9rem 1.8rem;
        background: #2F3E86;
        color: #ffffff;
        border: none;
        font-size: 0.68rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        cursor: pointer;
        font-family: 'Barlow', Arial, sans-serif;
        font-weight: 700;
        transition: background 0.2s;
      }
  
      #km-newsletter .nl-btn:hover { background: #B82928; }
  
      #km-newsletter .nl-note {
        font-size: 0.72rem;
        color: rgba(0,0,0,0.6);
        margin-top: 1rem;
      }
  
      /* FOOTER */
      #km-footer {
        background: #2F3E86;
        padding: 4rem 2.5rem 2rem;
        color: rgba(255,255,255,0.5);
        font-family: 'Barlow', Arial, sans-serif;
      }
  
      #km-footer .footer-top {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 3rem;
        margin-bottom: 3rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid rgba(255,255,255,0.08);
      }
  
      #km-footer .footer-brand {
        font-size: 1.3rem;
        font-weight: 900;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 1rem;
      }
  
      #km-footer .footer-tagline {
        font-size: 0.8rem;
        line-height: 1.9;
        max-width: 280px;
        font-weight: 400;
      }
  
      #km-footer .footer-col h4 {
        font-size: 0.65rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #FFF8BD;
        margin-bottom: 1.2rem;
        font-weight: 700;
      }
  
      #km-footer .footer-col ul { list-style: none; padding: 0; margin: 0; }
      #km-footer .footer-col li { margin-bottom: 0.6rem; }
  
      #km-footer .footer-col a {
        font-size: 0.78rem;
        color: #FFF8BD;
        text-decoration: none;
        transition: color 0.2s;
        font-weight: 400;
      }
  
      #km-footer .footer-col a:hover { color: #ffffff; }
  
      #km-footer .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
      }
  
      #km-footer .footer-copy { font-size: 0.7rem; font-weight: 400; }
  
      #km-footer .footer-social { display: flex; gap: 1.2rem; }
  
      #km-footer .footer-social a {
        font-size: 0.65rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.4);
        text-decoration: none;
        transition: color 0.2s;
        font-weight: 700;
      }
  
      #km-footer .footer-social a:hover { color: #FFF8BD; }
  
      /* Travels footer */
      #km-footer .footer-col .travels-list a { color: rgba(255,255,255,0.6); }
      #km-footer .footer-col .travels-list a:hover { color: #FFF8BD; }
  
      @media (max-width: 768px) {
        #km-newsletter { padding: 3.5rem 1.5rem; }
        #km-newsletter .nl-form { flex-direction: column; }
        #km-newsletter .nl-input,
        #km-newsletter .nl-btn { width: 100%; }
  
        #km-footer .footer-top { grid-template-columns: 1fr; gap: 2rem; }
      }
    `;
    document.head.appendChild(style);
  
    /* --- 2. HTML newsletter + footer --- */
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <!-- NEWSLETTER -->
      <section id="km-newsletter">
        <p class="nl-label">Club des Voyageurs</p>
        <h2 class="nl-title">Join the caravan.</h2>
        <p class="nl-sub">Sign up and get 10% off your first order.</p>
        <div class="nl-form">
          <label for="km-nl-email" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">Your email</label>
          <input type="email" id="km-nl-email" class="nl-input" placeholder="your@email.com" />
          <button class="nl-btn">Join</button>
        </div>
        <p class="nl-note">New collections, exclusive travels, member offers.</p>
      </section>
  
      <!-- FOOTER -->
      <footer id="km-footer">
        <div class="footer-top">
          <div>
            <p class="footer-brand">Kilometre · Paris</p>
            <p class="footer-tagline">A Parisian fashion house that believes getting dressed is the most beautiful way to travel.</p>
          </div>
          <div class="footer-col">
            <h4>Our Travels</h4>
            <ul class="travels-list">
              <li><a href="melbourne.html">Melbourne</a></li>
              <li><a href="tbilisi.html">Tbilisi</a></li>
              <li><a href="los-angeles.html">Los Angeles</a></li>
              <li><a href="addis-ababa.html">Addis Ababa</a></li>
              <li><a href="brussels.html">Brussels</a></li>
              <li><a href="mallorca.html">Mallorca</a></li>
              <li><a href="paris.html">Paris</a></li>
              <li><a href="venice.html">Venice</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="https://kilometre.paris/collections/short-shirt" target="_blank">Ready to Travel</a></li>
              <li><a href="https://kilometre.paris/collections/undercover" target="_blank">Undercover Bags</a></li>
              <li><a href="https://kilometre.paris/pages/customize-basket" target="_blank">Make it Yours</a></li>
              <li><a href="https://kilometre.paris/pages/about-us" target="_blank">Our Story</a></li>
              <li><a href="https://kilometre.paris/pages/our-hands" target="_blank">Our Artisans</a></li>
              <li><a href="https://kilometre.paris/pages/contact" target="_blank">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copy">© 2026 Kilometre Paris — All rights reserved</p>
          <div class="footer-social">
            <a href="https://www.instagram.com/kilometre.paris/" target="_blank">Instagram</a>
            <a href="https://www.facebook.com/kilometreparis/" target="_blank">Facebook</a>
            <a href="https://www.pinterest.fr/kilometre_paris/" target="_blank">Pinterest</a>
          </div>
        </div>
      </footer>
    `;
  
    document.body.appendChild(wrapper);
  
  })();