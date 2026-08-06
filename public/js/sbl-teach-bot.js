/* ============================================================
   SBL Geography Tutor — teaching panel modal controller
   Interface only. No AI/API connection happens in this file.
   No fake answers are generated — starter buttons only echo the
   selection into the placeholder area. A Microsoft Copilot Studio
   agent will be wired into that placeholder at a later date.
   ============================================================ */
(function () {

  var overlay = null;
  var closeBtn = null;
  var placeholder = null;
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
    placeholder = document.getElementById('sblTeachBotPlaceholder');
    if (!overlay) return;

    /* Accessible focus management: remember what had focus so we
       can return to it when the modal closes. */
    lastFocusedElement = document.activeElement;

    overlay.hidden = false;

    /* Move focus into the modal (close button first). */
    if (closeBtn) closeBtn.focus();
  };

  window.closeTeachBot = function () {
    if (!overlay) return;
    overlay.hidden = true;

    /* Return focus to whatever triggered the modal (the Start Learning button). */
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    overlay = document.getElementById('sblTeachBotOverlay');
    closeBtn = document.getElementById('sblTeachBotClose');
    placeholder = document.getElementById('sblTeachBotPlaceholder');
    if (!overlay) return;

    if (closeBtn) {
      closeBtn.addEventListener('click', window.closeTeachBot);
    }

    /* Click outside the modal card to close */
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) window.closeTeachBot();
    });

    /* Escape key closes the modal; Tab is kept within the modal
       while it's open (basic focus trap for accessibility). */
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

    /* Starter buttons: no fake answers are generated. Clicking a
       button simply echoes the selection into the placeholder so
       there is a visible preview of where the Copilot Studio
       agent's real response will appear once connected. */
    var starterButtons = overlay.querySelectorAll('.sbl-prompt-btn');
    starterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (!placeholder) return;
        placeholder.textContent =
          'You selected: \u201c' + btn.textContent.trim() + '\u201d. ' +
          'The Microsoft Copilot Studio agent will respond here once connected.';
      });
    });
  });

})();
