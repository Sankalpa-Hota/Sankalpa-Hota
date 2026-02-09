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
          headerPlaceholder.outerHTML = '<header class="site-header"><a href="index.html#home" class="logo">Sankalpa Hota</a></header>';
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
          footerPlaceholder.outerHTML = '<footer class="site-footer"><section class="footer-explore" aria-label="Site navigation"><h2 class="footer-explore-title">Explore</h2><nav class="nav footer-nav"><a href="index.html#home">Home</a><a href="index.html#about">About</a><a href="index.html#learn">Learn</a><a href="index.html#chapters">Chapters</a><a href="index.html#building">Building</a><a href="index.html#code">Code</a><a href="index.html#blog">Blog</a><a href="index.html#reports">Reports</a><a href="index.html#connect">Connect</a></nav></section><p class="footer-credit">Sankalpa Hota · <a href="mailto:sankalpahota503@gmail.com">sankalpahota503@gmail.com</a></p></footer>';
        });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadIncludes);
  } else {
    loadIncludes();
  }
})();
