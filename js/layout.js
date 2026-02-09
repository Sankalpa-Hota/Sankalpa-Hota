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
    var blogActive = isBlogPage();
    document.querySelectorAll('.nav a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      var isActive = (href === 'blog/index.html' && blogActive) ||
        (href === page || (page === 'index.html' && (href === 'index.html' || href === '.')));
      a.setAttribute('aria-current', isActive ? 'page' : null);
    });
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
          headerPlaceholder.outerHTML = '<header class="site-header"><a href="index.html" class="logo">Sankalpa Hota</a><nav class="nav"><a href="index.html">Home</a><a href="about.html">About</a><a href="connect.html">Connect</a></nav></header>';
          setActiveNav();
        });
    }

    if (footerPlaceholder) {
      fetch(base + 'includes/footer.html')
        .then(function (r) { return r.text(); })
        .then(function (html) {
          footerPlaceholder.outerHTML = html;
        })
        .catch(function () {
          footerPlaceholder.outerHTML = '<footer class="site-footer"><p>Sankalpa Hota · <a href="mailto:shota@ucsd.edu">shota@ucsd.edu</a></p></footer>';
        });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadIncludes);
  } else {
    loadIncludes();
  }
})();
