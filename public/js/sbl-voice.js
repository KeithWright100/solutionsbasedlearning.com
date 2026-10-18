/* ============================================================
   SBL Voice — speak and listen
   Loaded automatically by sbl-teach-bot.js and sbl-revision.js,
   so no lesson page needs editing.

   1. SPEAK: every answer box (textarea) gets a "🎤 Speak" button.
      Students talk and their words are typed into the box.
   2. LISTEN: questions and marked feedback get a "🔊 Listen"
      button that reads the text aloud.
   3. TUTOR CHATS: renderCopilotChat() swaps a Copilot Studio
      iframe for Microsoft's Web Chat with a microphone button and
      spoken replies. Used by sbl-teach-bot.js only when a token
      endpoint has been filled in there; otherwise the normal
      iframe is used.

   Uses only the browser's built-in speech features
   (SpeechRecognition + speechSynthesis) and Microsoft's own Web
   Chat for the Copilot Studio tutors. No Claude, Anthropic,
   OpenAI or other AI API is called from this file.
   Speech recognition works in Chrome, Edge and Safari (not
   Firefox); the 🎤 button is simply hidden where it can't work.
   ============================================================ */
(function () {
  if (window.SBLVoice) return;

  var Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var canListen = !!Recognition;
  var canSpeak = 'speechSynthesis' in window;
  var LANG = 'en-GB';

  /* ---------------- styles ---------------- */
  var css =
    '.sbl-voice-bar{display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin:6px 0 2px;}' +
    '.sbl-voice-btn{display:inline-flex;align-items:center;gap:5px;border:1px solid rgba(0,124,130,.35);background:#fff;color:#007c82;border-radius:999px;padding:5px 12px;font:inherit;font-size:.82rem;font-weight:700;cursor:pointer;line-height:1.2;}' +
    '.sbl-voice-btn:hover{background:#f0fbfa;}' +
    '.sbl-voice-btn:focus-visible{outline:3px solid #f59e0b;outline-offset:2px;}' +
    '.sbl-voice-btn.is-on{background:#dc2626;border-color:#dc2626;color:#fff;animation:sblVoicePulse 1.4s ease-in-out infinite;}' +
    '.sbl-voice-status{font-size:.78rem;color:#4a6272;}' +
    '.sbl-voice-listen{margin:0 0 6px;}' +
    '@keyframes sblVoicePulse{0%,100%{box-shadow:0 0 0 0 rgba(220,38,38,.45);}50%{box-shadow:0 0 0 6px rgba(220,38,38,0);}}' +
    '@media (prefers-reduced-motion:reduce){.sbl-voice-btn.is-on{animation:none;}}' +
    '.sbl-webchat{height:100%;min-height:420px;}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* ---------------- LISTEN: read text aloud ---------------- */
  var speakingBtn = null;
  function stopSpeaking() {
    if (canSpeak) window.speechSynthesis.cancel();
    if (speakingBtn) { speakingBtn.classList.remove('is-on'); speakingBtn.innerHTML = '&#128266; Listen'; speakingBtn = null; }
  }
  function pickVoice() {
    var vs = canSpeak ? window.speechSynthesis.getVoices() : [];
    return vs.filter(function (v) { return v.lang === LANG; })[0] ||
      vs.filter(function (v) { return /^en/i.test(v.lang); })[0] || null;
  }
  function speak(text, btn) {
    if (!canSpeak || !text) return;
    var same = speakingBtn === btn;
    stopSpeaking();
    if (same) return; // second tap = stop
    var u = new SpeechSynthesisUtterance(text);
    u.lang = LANG; u.rate = 0.95;
    var v = pickVoice(); if (v) u.voice = v;
    u.onend = u.onerror = function () { if (speakingBtn === btn) stopSpeaking(); };
    if (btn) { speakingBtn = btn; btn.classList.add('is-on'); btn.innerHTML = '&#9632; Stop'; }
    window.speechSynthesis.speak(u);
  }

  function cleanText(el) {
    var clone = el.cloneNode(true);
    clone.querySelectorAll('.sbl-voice-bar, .sbl-voice-listen, button, script, style').forEach(function (n) { n.remove(); });
    return (clone.innerText || clone.textContent || '').replace(/\s+/g, ' ').trim();
  }

  var LISTEN_SELECTORS = [
    '#sblIBQuestionWrap .sbl-teach-focus',
    '#sblRevisionQuestionWrap .sbl-teach-focus',
    '.sbl-quiz-question',
    '.sbl-quiz-feedback',
    '.sbl-quiz-result',
    '[data-sbl-listen]'
  ].join(',');

  function addListen(el) {
    if (!canSpeak || el.dataset.sblListen === 'done' || el.closest('.sbl-voice-listen')) return;
    el.dataset.sblListen = 'done';
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'sbl-voice-btn sbl-voice-listen'; b.innerHTML = '&#128266; Listen';
    b.setAttribute('aria-label', 'Read this aloud');
    b.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); speak(cleanText(el), b); });
    if (el.tagName === 'P') { el.parentNode.insertBefore(b, el); }
    else el.insertBefore(b, el.firstChild);
  }

  /* ---------------- SPEAK: dictate into a textarea ---------------- */
  var activeRec = null;
  function addMic(ta) {
    if (!canListen || ta.dataset.sblMic || ta.readOnly || ta.disabled) return;
    if (ta.getAttribute('data-voice') === 'off') return;
    // skip the hidden textareas used for clipboard copying
    if (ta.style.opacity === '0' || ta.style.position === 'fixed') return;
    ta.dataset.sblMic = '1';

    var bar = document.createElement('div'); bar.className = 'sbl-voice-bar';
    var b = document.createElement('button'); b.type = 'button'; b.className = 'sbl-voice-btn'; b.innerHTML = '&#127908; Speak';
    b.setAttribute('aria-label', 'Speak your answer instead of typing');
    var status = document.createElement('span'); status.className = 'sbl-voice-status'; status.setAttribute('aria-live', 'polite');
    bar.appendChild(b); bar.appendChild(status);
    if (canSpeak) {
      var lb = document.createElement('button'); lb.type = 'button'; lb.className = 'sbl-voice-btn'; lb.innerHTML = '&#128266; Read back';
      lb.setAttribute('aria-label', 'Read your answer back to you');
      lb.addEventListener('click', function () { speak(ta.value.trim(), lb); });
      bar.insertBefore(lb, status);
    }
    ta.parentNode.insertBefore(bar, ta.nextSibling);

    var rec = null, base = '', finalText = '';
    function stop() { if (rec) { try { rec.stop(); } catch (e) {} } }
    function setOff(msg) {
      b.classList.remove('is-on'); b.innerHTML = '&#127908; Speak'; status.textContent = msg || '';
      if (activeRec === rec) activeRec = null; rec = null;
    }
    b.addEventListener('click', function () {
      if (rec) { stop(); return; }
      if (activeRec) { try { activeRec.stop(); } catch (e) {} }
      stopSpeaking();
      rec = new Recognition(); activeRec = rec;
      rec.lang = LANG; rec.continuous = true; rec.interimResults = true;
      base = ta.value.replace(/\s+$/, ''); finalText = '';
      rec.onresult = function (e) {
        var interim = '';
        for (var i = e.resultIndex; i < e.results.length; i++) {
          var t = e.results[i][0].transcript;
          if (e.results[i].isFinal) finalText += t; else interim += t;
        }
        var added = (finalText + interim).replace(/^\s+/, '');
        if (added) added = added.charAt(0).toUpperCase() + added.slice(1);
        ta.value = (base ? base + ' ' : '') + added;
        ta.dispatchEvent(new Event('input', { bubbles: true }));
      };
      rec.onerror = function (e) {
        var m = e.error === 'not-allowed' || e.error === 'service-not-allowed'
          ? 'Microphone blocked — allow it in the browser address bar.'
          : e.error === 'no-speech' ? 'No speech heard — try again.' : 'Speech stopped (' + e.error + ').';
        setOff(m);
      };
      rec.onend = function () { setOff(finalText ? 'Done — check and edit your words.' : status.textContent); };
      try {
        rec.start();
        b.classList.add('is-on'); b.innerHTML = '&#9632; Stop'; status.textContent = 'Listening… speak now.';
      } catch (err) { setOff('Could not start the microphone.'); }
    });
  }

  /* ---------------- watch the page ---------------- */
  function scan(root) {
    root = root || document;
    if (!root.querySelectorAll) return;
    root.querySelectorAll('textarea').forEach(addMic);
    root.querySelectorAll(LISTEN_SELECTORS).forEach(addListen);
  }
  var pending = false;
  new MutationObserver(function () {
    if (pending) return; pending = true;
    setTimeout(function () { pending = false; scan(document); }, 120);
  }).observe(document.documentElement, { childList: true, subtree: true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { scan(document); });
  else scan(document);
  if (canSpeak && window.speechSynthesis.onvoiceschanged !== undefined) window.speechSynthesis.onvoiceschanged = function () {};

  /* ---------------- TUTOR CHATS: Web Chat with speech ---------------- */
  var WEBCHAT_SRC = 'https://cdn.botframework.com/botframework-webchat/4.18.0/webchat.js';
  var webchatLoading = null;
  function loadWebChat() {
    if (window.WebChat) return Promise.resolve();
    if (webchatLoading) return webchatLoading;
    webchatLoading = new Promise(function (resolve, reject) {
      var s = document.createElement('script'); s.src = WEBCHAT_SRC; s.async = true;
      s.onload = function () { resolve(); }; s.onerror = function () { webchatLoading = null; reject(new Error('Web Chat failed to load')); };
      document.head.appendChild(s);
    });
    return webchatLoading;
  }

  // Renders a Copilot Studio agent into `mount` with mic + spoken replies.
  // Calls onFail() (e.g. to fall back to the iframe) if anything goes wrong.
  function renderCopilotChat(mount, tokenUrl, onFail) {
    mount.innerHTML = '<div class="sbl-webchat" role="region" aria-label="SBL Tutor chat"></div>';
    var target = mount.firstChild;
    var envEndpoint = tokenUrl.slice(0, tokenUrl.indexOf('/powervirtualagents'));
    var apiVersion = (new URL(tokenUrl)).searchParams.get('api-version') || '2022-03-01-preview';
    loadWebChat()
      .then(function () {
        return Promise.all([
          fetch(envEndpoint + '/powervirtualagents/regionalchannelsettings?api-version=' + apiVersion).then(function (r) { if (!r.ok) throw new Error('settings ' + r.status); return r.json(); }),
          fetch(tokenUrl).then(function (r) { if (!r.ok) throw new Error('token ' + r.status); return r.json(); })
        ]);
      })
      .then(function (res) {
        var directlineBase = res[0].channelUrlsById.directline;
        var token = res[1].token;
        var directLine = window.WebChat.createDirectLine({ domain: new URL('v3/directline', directlineBase).toString(), token: token });
        var store = window.WebChat.createStore({}, function (api) {
          return function (next) {
            return function (action) {
              if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
                api.dispatch({ type: 'DIRECT_LINE/POST_ACTIVITY', meta: { method: 'keyboard' },
                  payload: { activity: { channelData: { postBack: true }, name: 'startConversation', type: 'event' } } });
              }
              return next(action);
            };
          };
        });
        window.WebChat.renderWebChat({
          directLine: directLine,
          store: store,
          locale: LANG,
          webSpeechPonyfillFactory: window.WebChat.createBrowserWebSpeechPonyfillFactory(),
          styleOptions: {
            accent: '#00b8b0', botAvatarInitials: 'SBL', userAvatarInitials: 'Me',
            bubbleBorderRadius: 12, bubbleFromUserBorderRadius: 12, bubbleFromUserBackground: '#e6f7f6',
            hideUploadButton: true, sendBoxHeight: 52
          }
        }, target);
      })
      .catch(function (err) {
        if (window.console) console.warn('[SBL Voice] Web Chat unavailable, using standard chat:', err);
        if (onFail) onFail(err);
      });
  }

  window.SBLVoice = {
    speak: function (text) { speak(text, null); },
    stop: stopSpeaking,
    scan: scan,
    renderCopilotChat: renderCopilotChat,
    canListen: canListen,
    canSpeak: canSpeak
  };
})();
