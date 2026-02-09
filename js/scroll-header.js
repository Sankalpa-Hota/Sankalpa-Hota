(function () {
  'use strict';

  function init() {
    function findAndAttach() {
      var header = document.querySelector('.site-header');
      if (!header) {
        setTimeout(findAndAttach, 50);
        return;
      }
      function onScroll() {
        header.classList.toggle('is-scrolled', window.scrollY > 20);
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
    findAndAttach();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
