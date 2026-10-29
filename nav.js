/* Menu mobile — hamburger de la barre de navigation */
(function () {
  var toggle = document.getElementById('navToggle');
  var panel  = document.getElementById('navMobile');

  function fermer() {
    if (!panel) return;
    panel.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
  }

  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var ouvert = panel.classList.toggle('open');
      toggle.classList.toggle('open', ouvert);
      toggle.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
      toggle.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    // Referme apres un clic sur un lien
    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) fermer();
    });

    // Referme si on repasse en format ordinateur
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) fermer();
    });
  }

  // Marque la page courante dans les deux menus
  var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (a) {
    if ((a.getAttribute('href') || '').toLowerCase() === page) a.classList.add('active');
  });
})();
