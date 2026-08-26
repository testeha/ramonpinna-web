(function () {
  var CONSENT_KEY = "rp_cookie_consent";
  var GA_ID = "G-YF7EFK0R80";

  function loadGA() {
    var s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s1);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);
  }

  var stored = localStorage.getItem(CONSENT_KEY);
  if (stored === "accepted") {
    loadGA();
    return;
  }
  if (stored === "rejected") {
    return;
  }

  var bar = document.createElement("div");
  bar.id = "cookie-consent-bar";
  bar.innerHTML =
    '<div class="cookie-consent-text">' +
      "Usamos cookies de análisis para entender cómo se usa esta web. Puedes aceptarlas o rechazarlas — no se activará ninguna hasta que elijas. Más información en la " +
            '<a href="politica-cookies.html">política de cookies</a>.' +
            "</div>" +
    '<div class="cookie-consent-actions">' +
      '<button id="cookie-reject" type="button">Rechazar</button>' +
      '<button id="cookie-accept" type="button">Aceptar</button>' +
    "</div>";
  document.body.appendChild(bar);

  var style = document.createElement("style");
  style.textContent =
    "#cookie-consent-bar {" +
      "position: fixed; left: 0; right: 0; bottom: 0; z-index: 1000;" +
      "background: #0F233A; color: #FAF8F4;" +
      "padding: 20px 32px; display: flex; flex-wrap: wrap; gap: 16px;" +
      "align-items: center; justify-content: space-between;" +
      "font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.5;" +
      "box-shadow: 0 -2px 12px rgba(0,0,0,.15);" +
    "}" +
    "#cookie-consent-bar .cookie-consent-text { max-width: 720px; opacity: .9; }" +
    "#cookie-consent-bar .cookie-consent-text a { color: #C79A63; text-decoration: underline; }" +
    "#cookie-consent-bar .cookie-consent-actions { display: flex; gap: 12px; flex-shrink: 0; }" +
    "#cookie-consent-bar button {" +
      "font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;" +
      "padding: 10px 20px; border-radius: 4px; cursor: pointer; border: none;" +
    "}" +
    "#cookie-reject { background: transparent; color: #FAF8F4; border: 1px solid rgba(255,255,255,.4) !important; }" +
    "#cookie-reject:hover { border-color: #FAF8F4 !important; }" +
    "#cookie-accept { background: #C79A63; color: #0F233A; }" +
    "#cookie-accept:hover { background: #b78952; }" +
    "@media (max-width: 640px) {" +
      "#cookie-consent-bar { flex-direction: column; align-items: stretch; padding: 18px 20px; }" +
      "#cookie-consent-bar .cookie-consent-actions { justify-content: stretch; }" +
      "#cookie-consent-bar button { flex: 1; }" +
    "}";
  document.head.appendChild(style);

  document.getElementById("cookie-accept").addEventListener("click", function () {
    localStorage.setItem(CONSENT_KEY, "accepted");
    bar.remove();
    loadGA();
  });

  document.getElementById("cookie-reject").addEventListener("click", function () {
    localStorage.setItem(CONSENT_KEY, "rejected");
    bar.remove();
  });
})();