(function () {
  'use strict';

  var KB = window.CHATBOT_KNOWLEDGE;
  if (!KB) return;

  function getBasePath() {
    var path = window.location.pathname;
    if (path.endsWith('/') || path === '') return '';
    var i = path.lastIndexOf('/');
    return i <= 0 ? '' : path.slice(0, i + 1);
  }

  function answer(text) {
    var t = (text || '').toLowerCase().trim();
    if (!t) return KB.greeting;

    for (var i = 0; i < KB.replies.length; i++) {
      var r = KB.replies[i];
      for (var j = 0; j < r.keywords.length; j++) {
        if (t.indexOf(r.keywords[j]) !== -1) return r.reply;
      }
    }
    return KB.fallback;
  }

  function renderMessage(html, isUser) {
    var div = document.createElement('div');
    div.className = 'chatbot-msg ' + (isUser ? 'user' : 'bot');
    if (isUser) {
      div.textContent = html;
    } else {
      div.innerHTML = html;
    }
    return div;
  }

  function appendMessage(container, html, isUser) {
    var el = renderMessage(html, isUser);
    container.appendChild(el);
    container.scrollTop = container.scrollHeight;
  }

  function init() {
    var base = getBasePath();
    var wrap = document.createElement('div');
    wrap.className = 'chatbot-wrap';

    wrap.innerHTML =
      '<button type="button" class="chatbot-toggle" aria-label="Open chat">' +
      '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>' +
      '</button>' +
      '<div class="chatbot-panel" role="dialog" aria-label="FAQ chat" hidden>' +
      '<div class="chatbot-header">Quick FAQ</div>' +
      '<div class="chatbot-messages"></div>' +
      '<div class="chatbot-suggestions">' +
      '<button type="button" data-query="What does Sankalpa do?">What does Sankalpa do?</button>' +
      '<button type="button" data-query="How can I reach him?">How can I reach him?</button>' +
      '<button type="button" data-query="Education">Education</button>' +
      '<button type="button" data-query="GitHub">GitHub</button>' +
      '</div>' +
      '<div class="chatbot-input-wrap">' +
      '<input type="text" class="chatbot-input" placeholder="Ask something..." aria-label="Your message">' +
      '<button type="button" class="chatbot-send">Send</button>' +
      '</div>' +
      '</div>';

    document.body.appendChild(wrap);

    var panel = wrap.querySelector('.chatbot-panel');
    var toggle = wrap.querySelector('.chatbot-toggle');
    var messages = wrap.querySelector('.chatbot-messages');
    var input = wrap.querySelector('.chatbot-input');
    var sendBtn = wrap.querySelector('.chatbot-send');
    var suggestions = wrap.querySelector('.chatbot-suggestions');

    function openPanel() {
      panel.classList.add('is-open');
      panel.removeAttribute('hidden');
      if (messages.children.length === 0) {
        appendMessage(messages, KB.greeting, false);
      }
      input.focus();
    }

    function closePanel() {
      panel.classList.remove('is-open');
      panel.setAttribute('hidden', '');
    }

    function ask(q) {
      var question = (q || input.value || '').trim();
      if (!question) return;
      input.value = '';
      appendMessage(messages, question, true);
      var reply = answer(question);
      appendMessage(messages, reply, false);
    }

    toggle.addEventListener('click', function () {
      if (panel.classList.contains('is-open')) closePanel(); else openPanel();
    });

    sendBtn.addEventListener('click', function () { ask(); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); ask(); }
    });

    suggestions.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-query]');
      if (btn) ask(btn.getAttribute('data-query'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
