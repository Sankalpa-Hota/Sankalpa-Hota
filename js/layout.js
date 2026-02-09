// Update header/footer includes and nav highlighting here
(function () {
  'use strict';

  function getBasePath() {
    var path = window.location.pathname;
    if (path.endsWith('/')) path = path.slice(0, -1);
    var parts = path.split('/').filter(Boolean);
    if (parts.length <= 1) return '';
    var levelsUp = parts.length - 1;
    var base = '';
    for (var i = 0; i < levelsUp; i++) base += '../';
    return base;
  }

  function currentPage() {
    var path = window.location.pathname;
    var name = path.slice(path.lastIndexOf('/') + 1) || 'index.html';
    if (name === '') name = 'index.html';
    return name;
  }

  function isBlogPage() {
    return window.location.pathname.indexOf('blog') !== -1;
  }

  var base = getBasePath();

  function inject(selector, html) {
    var el = document.querySelector(selector);
    if (el) el.outerHTML = html;
  }

  function setActiveNav() {
    var page = currentPage();
    var hash = (window.location.hash || '').replace('#', '') || 'home';
    document.querySelectorAll('.nav a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      var linkHash = href.indexOf('#') !== -1 ? href.slice(href.indexOf('#') + 1) : '';
      var isActive = (page === 'index.html' || page === '') && linkHash === hash;
      a.setAttribute('aria-current', isActive ? 'page' : null);
    });
  }

  function onHashChange() {
    setActiveNav();
  }

  function loadIncludes() {
    var headerPlaceholder = document.getElementById('site-header-placeholder');
    var footerPlaceholder = document.getElementById('site-footer-placeholder');

    if (headerPlaceholder) {
      fetch(base + 'includes/header.html')
        .then(function (r) { return r.text(); })
        .then(function (html) {
          headerPlaceholder.outerHTML = html;
          setActiveNav();
        })
        .catch(function () {
          headerPlaceholder.outerHTML = '<header class="site-header"><a href="#main" class="skip-link">Skip to main content</a></header>';
          setActiveNav();
        });
    }

    if (footerPlaceholder) {
      fetch(base + 'includes/footer.html')
        .then(function (r) { return r.text(); })
        .then(function (html) {
          footerPlaceholder.outerHTML = html;
          setActiveNav();
          window.addEventListener('hashchange', onHashChange);
        })
        .catch(function () {
          footerPlaceholder.outerHTML = '<footer class="site-footer"><p class="footer-credit">“Smarter silicon, better systems, and building what doesn’t exist yet.”</p></footer>';
        });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadIncludes);
  } else {
    loadIncludes();
  }
})();
