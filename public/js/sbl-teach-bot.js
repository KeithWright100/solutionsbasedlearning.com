/* ============================================================
   SBL Geography Tutor — reusable engine
   Reads lesson config from window.SBL_LESSONS[lessonId] and the
   fixed syllabus sequence in window.SBL_LESSON_ORDER (populated by
   a lesson-config file such as sbl-population-lessons.js, loaded
   before this file) and renders one shared tutor interface with
   three entry points:

     openTeachBot(lessonId)        — full Teach Me Live panel
     openTestMyKnowledge(lessonId) — jumps straight into the
                                      10-question lesson quiz
     openSpacedRetrieval(lessonId) — 5-question cumulative quiz
                                      drawn only from lessons that
                                      come BEFORE this one in
                                      SBL_LESSON_ORDER (never from
                                      future/untaught lessons)

   No Claude, Anthropic, OpenAI or other AI API is called anywhere
   in this file. The only network resource loaded is the iframe to
   the existing published Microsoft Copilot Studio agent.
   ============================================================ */
(function () {

  var SBL_TEACH_BOT_IFRAME_SRC =
    'https://copilotstudio.microsoft.com/environments/Default-9732db31-8695-4030-ae01-e3217b1daaec/bots/crf78_sblgeographytutor_cUR45B/webchat?__version__=2&enableFileAttachment=false&cliAgent=true';

  var overlay, modal, bodyMount, titleEl, subtitleEl, progressEl, closeBtn, expandBtn, announceEl;
  var lastFocusedElement = null;
  var currentLesson = null;
  var isExpanded = false;
  var iframeLoaded = false;
  var quizState = null;

  /* ---------------- Utilities ---------------- */

  function announce(msg) {
    if (!announceEl) return;
    announceEl.textContent = '';
    window.setTimeout(function () { announceEl.textContent = msg; }, 30);
  }

  function escapeHtml(str) {
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function checklistKey(lessonId) { return 'sbl-checklist-' + lessonId; }

  function getChecklistState(lessonId, total) {
    try {
      var raw = window.localStorage.getItem(checklistKey(lessonId));
      if (!raw) return new Array(total).fill(false);
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return new Array(total).fill(false);
      while (parsed.length < total) parsed.push(false);
      return parsed;
    } catch (e) {
      return new Array(total).fill(false);
    }
  }

  function saveChecklistState(lessonId, state) {
    try {
      window.localStorage.setItem(checklistKey(lessonId), JSON.stringify(state));
    } catch (e) { /* localStorage unavailable — progress simply won't persist */ }
  }

  function copyText(text, onDone) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        onDone(true);
      }, function () {
        fallbackCopy(text, onDone);
      });
    } else {
      fallbackCopy(text, onDone);
    }
  }

  function fallbackCopy(text, onDone) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(ta);
      onDone(ok);
    } catch (e) {
      onDone(false);
    }
  }

  function buildPrompt(lesson, requestLabel, requestText) {
    var lines = [];
    lines.push('My current lesson is: ' + lesson.title + '.');
    lines.push('Syllabus focus: ' + lesson.syllabusFocus);
    lines.push('Request: ' + requestText);
    lines.push('Explain it simply first, then add IB Geography detail.');
    lines.push('Give a clear example, identify one common misconception if relevant, and finish with one short check-for-understanding question.');
    lines.push('Suggest a simple labelled diagram if useful.');
    lines.push('Do not write a full essay or an assessed answer for me.');
    return lines.join(' ');
  }

  function buildReviewPrompt(lesson, weakTags) {
    var topics = weakTags.length ? weakTags.join(', ') : 'the topics I got wrong';
    return 'My current lesson is: ' + lesson.title +
      '. I just completed a quiz and want to review: ' + topics +
      '. Explain each of these simply first, then add IB Geography detail, with one example each. Finish with one short check-for-understanding question per topic. Do not write a full essay or an assessed answer for me.';
  }

  function masteryBand(pct) {
    if (pct >= 90) return 'Mastery';
    if (pct >= 70) return 'Secure';
    if (pct >= 50) return 'Developing';
    return 'Beginning';
  }

  /* ---------------- Spaced retrieval bank ---------------- */

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  /* Builds the cumulative retrieval bank for a lesson: every quiz
     question from every lesson that comes BEFORE this one in
     SBL_LESSON_ORDER. Never includes the current lesson or any
     lesson that comes after it — this is a cumulative model that
     naturally grows as more lessons/units are added over time. */
  function buildRetrievalBank(lessonId) {
    var order = window.SBL_LESSON_ORDER || [];
    var idx = order.indexOf(lessonId);
    if (idx <= 0) return [];

    var pool = [];
    for (var i = 0; i < idx; i++) {
      var prevLesson =