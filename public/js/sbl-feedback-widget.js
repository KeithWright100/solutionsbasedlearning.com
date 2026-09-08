// public/js/sbl-feedback-widget.js
// A small floating "Feedback" button, included on every page of the
// site, that opens a short questionnaire (two 1-5 ratings, a
// multi-select "what's most effective for you" list, and an open
// suggestions box) plus an optional email address field. The email
// field is phrased as plainly optional ("leave blank to stay
// anonymous") rather than "only if you'd like a reply" — the latter
// reads as a promise that leaving an email guarantees a personal
// reply, which isn't something this form should commit Keith to.
// Submits to /api/feedback.js, which saves it to the sbl_feedback
// table and emails Keith a copy — nothing here ever shows a personal
// contact address anywhere on the page.
//
// Entirely self-contained (injects its own <style>, builds its own
// DOM) so it can be dropped into every page with a single <script>
// tag and no dependency on which theme stylesheet that page happens
// to load.

(function () {
  if (window.__sblFeedbackWidgetLoaded) return;
  window.__sblFeedbackWidgetLoaded = true;

  var EFFECTIVE_METHOD_OPTIONS = [
    'Revise Me Bot (AI tutor chat)',
    'Test My Knowledge quizzes',
    'Challenge Mode',
    'Past paper practice & instant marking',
    'Topic checklists',
    'Research & Socratic Challenge bots',
    'Exam tips & advice pages'
  ];

  var STYLE = '' +
    '.sblfw-launcher{position:fixed;right:18px;bottom:18px;z-index:999999;display:inline-flex;align-items:center;gap:8px;' +
      'background:linear-gradient(135deg,#17B8A6,#2DE1CB);color:#052A29;border:none;border-radius:999px;' +
      'padding:12px 18px 12px 14px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Arial,sans-serif;' +
      'font-size:13.5px;font-weight:700;letter-spacing:0.01em;cursor:pointer;box-shadow:0 10px 28px rgba(23,184,166,0.4);' +
      'transition:transform 0.2s ease,box-shadow 0.2s ease;}' +
    '.sblfw-launcher:hover{transform:translateY(-2px);box-shadow:0 14px 34px rgba(23,184,166,0.5);}' +
    '.sblfw-launcher svg{width:18px;height:18px;flex-shrink:0;}' +
    '@media (max-width:520px){.sblfw-launcher span{display:none;}.sblfw-launcher{padding:13px;}}' +
    '.sblfw-backdrop{position:fixed;inset:0;background:rgba(3,10,20,0.72);z-index:1000000;display:none;' +
      'align-items:center;justify-content:center;padding:1.25rem;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Arial,sans-serif;}' +
    '.sblfw-backdrop.sblfw-open{display:flex;}' +
    '.sblfw-modal{background:#10233A;border:1px solid #1B3247;border-radius:18px;max-width:480px;width:100%;' +
      'max-height:88vh;overflow-y:auto;padding:1.75rem 1.75rem 1.5rem;color:#F6FAFA;position:relative;box-sizing:border-box;}' +
    '.sblfw-modal h2{font-size:1.15rem;font-weight:700;margin:0 0 0.3rem;color:#ffffff;padding-right:1.5rem;}' +
    '.sblfw-modal p.sblfw-intro{margin:0 0 1.3rem;font-size:0.85rem;color:#9FB4C4;line-height:1.5;}' +
    '.sblfw-close{position:absolute;top:1.1rem;right:1.1rem;background:none;border:none;color:#7C93A3;' +
      'font-size:1.3rem;line-height:1;cursor:pointer;padding:0.2rem;}' +
    '.sblfw-close:hover{color:#F6FAFA;}' +
    '.sblfw-field{margin-bottom:1.2rem;}' +
    '.sblfw-label{display:block;font-size:0.86rem;font-weight:600;color:#F6FAFA;margin-bottom:0.5rem;line-height:1.4;}' +
    '.sblfw-note{font-size:0.74rem;color:#7C93A3;margin:-0.3rem 0 0.5rem;}' +
    '.sblfw-scale{display:flex;gap:0.4rem;}' +
    '.sblfw-scale input{position:absolute;opacity:0;width:0;height:0;}' +
    '.sblfw-scale label{flex:1;text-align:center;padding:0.5rem 0;border-radius:8px;border:1.5px solid #274257;' +
      'color:#B9C9D4;font-size:0.9rem;font-weight:600;cursor:pointer;transition:all 0.15s ease;}' +
    '.sblfw-scale input:checked + label{background:linear-gradient(135deg,#17B8A6,#2DE1CB);border-color:#2DE1CB;color:#052A29;}' +
    '.sblfw-checks{display:flex;flex-direction:column;gap:0.5rem;}' +
    '.sblfw-check{display:flex;align-items:flex-start;gap:0.55rem;font-size:0.85rem;color:#DCE7EE;line-height:1.4;cursor:pointer;}' +
    '.sblfw-check input{margin-top:0.2rem;accent-color:#2DE1CB;flex-shrink:0;}' +
    '.sblfw-textarea,.sblfw-emailinput{width:100%;box-sizing:border-box;background:#0B1929;border:1.5px solid #274257;' +
      'border-radius:10px;color:#F6FAFA;padding:0.65rem 0.75rem;font-size:0.86rem;font-family:inherit;resize:vertical;}' +
    '.sblfw-textarea{min-height:80px;}' +
    '.sblfw-textarea::placeholder,.sblfw-emailinput::placeholder{color:#5D7385;}' +
    '.sblfw-actions{display:flex;justify-content:flex-end;gap:0.6rem;margin-top:1.4rem;}' +
    '.sblfw-btn{border:none;border-radius:10px;padding:0.6rem 1.2rem;font-size:0.86rem;font-weight:700;cursor:pointer;' +
      'font-family:inherit;}' +
    '.sblfw-btn-primary{background:linear-gradient(135deg,#17B8A6,#2DE1CB);color:#052A29;}' +
    '.sblfw-btn-primary:disabled{opacity:0.6;cursor:default;}' +
    '.sblfw-btn-secondary{background:transparent;color:#9FB4C4;}' +
    '.sblfw-msg{font-size:0.82rem;border-radius:10px;padding:0.6rem 0.75rem;margin-bottom:1rem;display:none;}' +
    '.sblfw-msg.sblfw-show{display:block;}' +
    '.sblfw-msg-error{background:rgba(220,80,80,0.15);color:#FF9E9E;}' +
    '.sblfw-msg-success{background:rgba(45,225,203,0.12);color:#7EE8D4;}' +
    '.sblfw-thanks{text-align:center;padding:1rem 0 0.5rem;}' +
    '.sblfw-thanks h2{margin-bottom:0.6rem;}' +
    '.sblfw-thanks p{color:#9FB4C4;font-size:0.88rem;line-height:1.5;}';

  function injectStyle() {
    var style = document.createElement('style');
    style.setAttribute('data-sblfw', 'true');
    style.textContent = STYLE;
    document.head.appendChild(style);
  }

  function scaleRow(name, question) {
    var html = '<div class="sblfw-field"><label class="sblfw-label">' + question + '</label><div class="sblfw-scale">';
    for (var i = 1; i <= 5; i++) {
      html += '<input type="radio" name="' + name + '" id="' + name + '-' + i + '" value="' + i + '">' +
        '<label for="' + name + '-' + i + '">' + i + '</label>';
    }
    html += '</div></div>';
    return html;
  }

  function checklistField() {
    var html = '<div class="sblfw-field"><label class="sblfw-label">What do you find most effective for your learning?</label>' +
      '<div class="sblfw-note">You can tick more than one.</div><div class="sblfw-checks">';
    EFFECTIVE_METHOD_OPTIONS.forEach(function (opt, i) {
      html += '<label class="sblfw-check"><input type="checkbox" name="sblfw-method" value="' + escapeHtml(opt) + '">' +
        '<span>' + escapeHtml(opt) + '</span></label>';
    });
    html += '</div></div>';
    return html;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  function buildModal() {
    var backdrop = document.createElement('div');
    backdrop.className = 'sblfw-backdrop';
    backdrop.id = 'sblfw-backdrop';

    var modal = document.createElement('div');
    modal.className = 'sblfw-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Site feedback');

    modal.innerHTML =
      '<button type="button" class="sblfw-close" id="sblfw-close" aria-label="Close">&times;</button>' +
      '<div id="sblfw-formwrap">' +
        '<h2>Tell us what you think</h2>' +
        '<p class="sblfw-intro">A minute of your time helps make Solutions Based Learning better for everyone using it.</p>' +
        '<div class="sblfw-msg sblfw-msg-error" id="sblfw-error"></div>' +
        scaleRow('sblfw-overall', 'How would you rate SBL as an educational site?') +
        scaleRow('sblfw-understanding', 'Does the content support your subject knowledge and understanding?') +
        checklistField() +
        '<div class="sblfw-field">' +
          '<label class="sblfw-label" for="sblfw-suggestions">Please suggest any ways the site could be improved</label>' +
          '<textarea class="sblfw-textarea" id="sblfw-suggestions" maxlength="4000" placeholder="Optional"></textarea>' +
        '</div>' +
        '<div class="sblfw-field">' +
          '<label class="sblfw-label" for="sblfw-email">Your email address</label>' +
          '<div class="sblfw-note">Optional — leave blank to stay anonymous.</div>' +
          '<input type="email" class="sblfw-emailinput" id="sblfw-email" maxlength="254" placeholder="Optional">' +
        '</div>' +
        '<div class="sblfw-actions">' +
          '<button type="button" class="sblfw-btn sblfw-btn-secondary" id="sblfw-cancel">Cancel</button>' +
          '<button type="button" class="sblfw-btn sblfw-btn-primary" id="sblfw-submit">Send feedback</button>' +
        '</div>' +
      '</div>' +
      '<div id="sblfw-thankswrap" class="sblfw-thanks" style="display:none;">' +
        '<h2>Thank you</h2>' +
        '<p>Your feedback has been sent. It really helps shape what comes next on the site.</p>' +
        '<div class="sblfw-actions" style="justify-content:center;">' +
          '<button type="button" class="sblfw-btn sblfw-btn-primary" id="sblfw-done">Close</button>' +
        '</div>' +
      '</div>';

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    return backdrop;
  }

  function buildLauncher() {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'sblfw-launcher';
    btn.setAttribute('aria-label', 'Give feedback about this site');
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>' +
      '</svg><span>Feedback</span>';
    document.body.appendChild(btn);
    return btn;
  }

  function init() {
    injectStyle();
    var launcher = buildLauncher();
    var backdrop = buildModal();
    var formwrap = backdrop.querySelector('#sblfw-formwrap');
    var thankswrap = backdrop.querySelector('#sblfw-thankswrap');
    var errorBox = backdrop.querySelector('#sblfw-error');
    var submitBtn = backdrop.querySelector('#sblfw-submit');

    function openModal() {
      backdrop.classList.add('sblfw-open');
      document.body.style.overflow = 'hidden';
    }
    function closeModal() {
      backdrop.classList.remove('sblfw-open');
      document.body.style.overflow = '';
    }
    function showError(msg) {
      errorBox.textContent = msg;
      errorBox.classList.add('sblfw-show');
    }
    function clearError() {
      errorBox.classList.remove('sblfw-show');
    }

    launcher.addEventListener('click', openModal);
    backdrop.querySelector('#sblfw-close').addEventListener('click', closeModal);
    backdrop.querySelector('#sblfw-cancel').addEventListener('click', closeModal);
    backdrop.querySelector('#sblfw-done').addEventListener('click', function () {
      closeModal();
      // Reset for next time, in case the same visitor opens it again.
      formwrap.style.display = '';
      thankswrap.style.display = 'none';
    });
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && backdrop.classList.contains('sblfw-open')) closeModal();
    });

    submitBtn.addEventListener('click', function () {
      clearError();

      var overallEl = backdrop.querySelector('input[name="sblfw-overall"]:checked');
      var understandingEl = backdrop.querySelector('input[name="sblfw-understanding"]:checked');
      var methodEls = backdrop.querySelectorAll('input[name="sblfw-method"]:checked');
      var suggestions = backdrop.querySelector('#sblfw-suggestions').value.trim();
      var email = backdrop.querySelector('#sblfw-email').value.trim();

      var effectiveMethods = Array.prototype.map.call(methodEls, function (el) { return el.value; });

      if (!overallEl && !understandingEl && !effectiveMethods.length && !suggestions) {
        showError('Please give a rating, tick an option, or leave a suggestion before sending.');
        return;
      }
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('Please enter a valid email address, or leave it blank.');
        return;
      }

      var payload = {
        ratingOverall: overallEl ? Number(overallEl.value) : null,
        ratingUnderstanding: understandingEl ? Number(understandingEl.value) : null,
        effectiveMethods: effectiveMethods,
        suggestions: suggestions,
        contactEmail: email,
        pageUrl: window.location.href
      };

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (r) {
        return r.json().then(function (data) { return { ok: r.ok, data: data }; });
      }).then(function (result) {
        if (!result.ok) {
          showError((result.data && result.data.error) || 'Could not send your feedback. Please try again.');
          return;
        }
        formwrap.style.display = 'none';
        thankswrap.style.display = 'block';
      }).catch(function () {
        showError('Could not send your feedback — please check your connection and try again.');
      }).finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send feedback';
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
