/* ============================================================
   SBL Geography Tutor — teaching panel modal controller
   The Microsoft Copilot Studio agent is now embedded live via
   iframe below. No Claude/Anthropic connection exists anywhere
   in this file. Starter buttons show a suggested prompt for the
   student to type into the real chat — the embed type used here
   (Copilot Studio "Custom website" iframe) does not support
   auto-sending text into the chat from the page around it.
   ============================================================ */
(function () {

  var overlay = null;
  var closeBtn = null;
  var suggestionBox = null;
  var lastFocusedElement = null;

  function getFocusableElements() {
    if (!overlay) return [];
    return Array.prototype.slice.call(
      overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    ).filter(function (el) { return !el.disabled && el.offsetParent !== null; });
  }

  window.openTeachBot = function () {
    overlay = document.getElementById('sblTeachBotOverlay');
    closeBtn = document.getElementById('sblTeachBotClose');
    suggestionBox = document.getElementById('sblTeachBotSuggestion');
    if (!overlay) return;

    lastFocusedElement = document.activeElement;
    overlay.hidden = false;
    if (closeBtn) closeBtn.focus();
  };

  window.closeTeachBot = function () {
    if (!overlay) return;
    overlay.hidden = true;
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    overlay = document.getElementById('sblTeachBotOverlay');
    closeBtn = document.getElementById('sblTeachBotClose');
    suggestionBox = document.getElementById('sblTeachBotSuggestion');
    if (!overlay) return;

    if (closeBtn) {
      closeBtn.addEventListener('click', window.closeTeachBot);
    }

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) window.closeTeachBot();
    });

    document.addEventListener('keydown', function (e) {
      if (overlay.hidden) return;

      if (e.key === 'Escape') {
        window.closeTeachBot();
        return;
      }

      if (e.key === 'Tab') {
        var focusable = getFocusableElements();
        if (focusable.length === 0) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    /* Starter buttons show the suggested question above the live
       chat so the student can read it and type/paste it in. */
    var starterButtons = overlay.querySelectorAll('.sbl-prompt-btn');
    starterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (!suggestionBox) return;
        suggestionBox.hidden = false;
        suggestionBox.querySelector('.sbl-suggestion-text').textContent = btn.textContent.trim();
      });
    });
  });

})();
