/* ============================================================
   SBL Geography Tutor — reusable engine
   Reads lesson config from window.SBL_LESSONS[lessonId] and the
   fixed syllabus sequence in window.SBL_LESSON_ORDER (populated by
   lesson-config files such as sbl-population-lessons.js and
   sbl-climate-lessons.js, loaded before this file) and renders one
   shared tutor interface with six entry points:

     openTeachBot(lessonId)        — full Teach Me Live panel
     openTestMyKnowledge(lessonId) — jumps straight into the
                                      10-question lesson quiz
     openSpacedRetrieval(lessonId) — 5-question cumulative quiz
                                      drawn only from lessons that
                                      come BEFORE this one in
                                      SBL_LESSON_ORDER (never from
                                      future/untaught lessons)
     openChallengeMode(lessonId)   — guided independent-thinking mode
                                      using the separate, dedicated
                                      "SBL Challenge Tutor" agent.
     openIBQuestions(lessonId)     — authentic IB-style exam question
                                      practice. Two-step copy flow:
                                      first the question (with an
                                      instruction telling the tutor to
                                      wait rather than answer), then
                                      the student's typed answer plus
                                      mark scheme. A visible readonly
                                      box always shows the exact text
                                      to copy, so it works even if the
                                      automatic clipboard copy fails.
     openReadinessCheck(lessonId)  — 3-5 oral-style discussion
                                      questions for pairs to work
                                      through at the start of class.
                                      No AI/chat involved — reads
                                      lesson.readinessQuestions.

   No Claude, Anthropic, OpenAI or other AI API is called anywhere
   in this file. The only network resources loaded are iframes to
   the existing published Microsoft Copilot Studio agents.
   ============================================================ */
(function () {

  var SBL_TEACH_BOT_IFRAME_SRC =
    'https://copilotstudio.microsoft.com/environments/Default-9732db31-8695-4030-ae01-e3217b1daaec/bots/crf78_sblgeographytutor_cUR45B/webchat?__version__=2&enableFileAttachment=false&cliAgent=true';

  var SBL_CHALLENGE_TUTOR_IFRAME_SRC =
    'https://copilotstudio.microsoft.com/environments/Default-9732db31-8695-4030-ae01-e3217b1daaec/bots/crf78_sblchallengetutor_6y7BmB/webchat?__version__=2&enableFileAttachment=false&cliAgent=true';

  var overlay, modal, bodyMount, titleEl, subtitleEl, progressEl, closeBtn, expandBtn, announceEl;
  var lastFocusedElement = null;
  var currentLesson = null;
  var isExpanded = false;
  var iframeLoaded = false;
  var quizState = null;
  var ibState = null;
  var readinessState = null;

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

  function challengeNotesKey(lessonId) { return 'sbl-challenge-notes-' + lessonId; }

  function getChallengeNotes(lessonId) {
    try {
      return window.localStorage.getItem(challengeNotesKey(lessonId)) || '';
    } catch (e) {
      return '';
    }
  }

  function saveChallengeNotes(lessonId, text) {
    try {
      window.localStorage.setItem(challengeNotesKey(lessonId), text);
    } catch (e) { /* localStorage unavailable — notes simply won't persist */ }
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

  function buildChallengeOpener(challenge) {
    return 'I am working on this challenge question: "' + challenge.question + '". Please help me think it through by asking me one question at a time. Do not give me answers, structures, plans, or model responses.';
  }

  function buildQuestionOpener(ibQ) {
    return 'I would like to practice this IB Geography exam-style question: "' + ibQ.question + '" [' + ibQ.marks + ' marks]. Please do not answer or explain it yet \u2014 just confirm you have noted it, then wait for me to send my own answer.';
  }

  function buildMarkingPrompt(lesson, ibQ, answerText) {
    var lines = [];
    lines.push('Here is my answer to that question: "' + answerText + '"');
    lines.push('Official mark scheme (for your reference only \u2014 please do not just read this back to me): ' + ibQ.markScheme);
    lines.push('Please mark my answer against the mark scheme and tell me my mark out of ' + ibQ.marks + '.');
    lines.push('Give me constructive feedback: what I got right, what I missed, and how to improve.');
    lines.push('Do not simply restate the whole mark scheme \u2014 focus your feedback specifically on my answer.');
    return lines.join(' ');
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

 function buildRetrievalBank(lessonId) {
  var order = (window.SBL_LESSON_ORDER || []).indexOf(lessonId) !== -1
    ? window.SBL_LESSON_ORDER
    : (window.SBL_PPN_LESSON_ORDER || []);
  var idx = order.indexOf(lessonId);
  if (idx <= 0) return [];

  var pool = [];
  for (var i = 0; i < idx; i++) {
    var prevLesson = window.SBL_LESSONS[order[i]];
    if (!prevLesson) continue;
    prevLesson.quiz.forEach(function (q) {
      pool.push({
        q: q.q, options: q.options, correct: q.correct,
        explain: q.explain, misconception: q.misconception, tag: q.tag,
        sourceLessonTitle: prevLesson.title
      });
    });
  }
  return pool;
}

  /* ---------------- Focus management ---------------- */

  function getFocusableElements() {
    if (!modal) return [];
    return Array.prototype.slice.call(
      modal.querySelectorAll('button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])')
    ).filter(function (el) { return !el.disabled && el.offsetParent !== null; });
  }

  /* ---------------- Shared setup ---------------- */

  function bindElements() {
    overlay = document.getElementById('sblTeachBotOverlay');
    modal = document.getElementById('sblTeachBotModal');
    bodyMount = document.getElementById('sblTeachBotBody');
    titleEl = document.getElementById('sblTeachBotTitle');
    subtitleEl = document.getElementById('sblTeachBotSubtitle');
    progressEl = document.getElementById('sblTeachBotProgress');
    closeBtn = document.getElementById('sblTeachBotClose');
    expandBtn = document.getElementById('sblTeachBotExpand');
    announceEl = document.getElementById('sblTeachBotAnnounce');
  }

  function openModalShell(lessonId) {
    bindElements();
    if (!overlay) return false;
    lessonId = lessonId || overlay.getAttribute('data-lesson-id');
    currentLesson = window.SBL_LESSONS && window.SBL_LESSONS[lessonId];
    if (!currentLesson) {
      console.error('SBL Geography Tutor: no lesson configuration found for id "' + lessonId + '"');
      return false;
    }
    lastFocusedElement = document.activeElement;
    iframeLoaded = false;
    quizState = null;
    ibState = null;
    readinessState = null;
    overlay.hidden = false;
    return true;
  }

  /* ---------------- Entry point 1: Teach Me Live ---------------- */

  window.openTeachBot = function (lessonId) {
    if (!openModalShell(lessonId)) return;
    titleEl.textContent = currentLesson.title;
    if (subtitleEl) subtitleEl.textContent = 'Knowledge acquisition for home learning';
    modal.setAttribute('aria-label', 'SBL Geography Tutor: ' + currentLesson.title);

    renderTeachBody();
    updateProgress();
    if (closeBtn) closeBtn.focus();
  };

  /* ---------------- Entry point 2: Test My Knowledge ---------------- */

  window.openTestMyKnowledge = function (lessonId) {
    if (!openModalShell(lessonId)) return;
    titleEl.textContent = 'Test My Knowledge: ' + currentLesson.title;
    if (subtitleEl) subtitleEl.textContent = '10 lesson-specific questions with instant feedback.';
    modal.setAttribute('aria-label', 'Test My Knowledge: ' + currentLesson.title);

    bodyMount.innerHTML = '<div class="sbl-teach-panel" style="border-right:none; width:100%;" id="sblQuizMount"></div>';
    startQuizWithQuestions(shuffle(currentLesson.quiz), 'Test My Knowledge', false, null);
    updateProgress();
    if (closeBtn) closeBtn.focus();
  };

  /* ---------------- Entry point 3: Spaced Retrieval ---------------- */

  window.openSpacedRetrieval = function (lessonId) {
    if (!openModalShell(lessonId)) return;
    titleEl.textContent = 'Spaced Retrieval: ' + currentLesson.title;
    if (subtitleEl) subtitleEl.textContent = 'Cumulative recall practice from previously taught lessons only.';
    modal.setAttribute('aria-label', 'Spaced Retrieval: ' + currentLesson.title);

    var bank = buildRetrievalBank(currentLesson.id);

    if (bank.length === 0) {
      bodyMount.innerHTML =
        '<div class="sbl-teach-panel" style="border-right:none; width:100%;">' +
        '<div class="sbl-teach-section"><h3>Spaced Retrieval</h3>' +
        '<p class="sbl-teach-focus">This is the first lesson in the unit, so there are no previous lessons to draw retrieval questions from yet. Spaced retrieval will unlock automatically as you move through later lessons.</p></div></div>';
      if (closeBtn) closeBtn.focus();
      return;
    }

    var picked = shuffle(bank).slice(0, Math.min(5, bank.length));
    bodyMount.innerHTML = '<div class="sbl-teach-panel" style="border-right:none; width:100%;" id="sblQuizMount"></div>';
    startQuizWithQuestions(picked, 'Spaced Retrieval', true, function () {
      var note = document.createElement('div');
      note.className = 'sbl-ready-note';
      note.style.marginTop = '1rem';
      note.textContent = 'Ready for class: bring this knowledge into today\u2019s discussion, case-study analysis, the 4Ps and written application.';
      document.getElementById('sblQuizMount').appendChild(note);
    });
    updateProgress();
    if (closeBtn) closeBtn.focus();
  };

  /* ---------------- Entry point 4: Challenge Mode ---------------- */

  window.openChallengeMode = function (lessonId) {
    if (!openModalShell(lessonId)) return;
    titleEl.textContent = 'Challenge: ' + currentLesson.title;
    if (subtitleEl) subtitleEl.textContent = 'Think it through yourself first, then challenge your thinking with the tutor.';
    modal.setAttribute('aria-label', 'Challenge Mode: ' + currentLesson.title);

    renderChallengeBody();
    if (closeBtn) closeBtn.focus();
  };

  /* ---------------- Entry point 5: IB-Style Questions ---------------- */

  window.openIBQuestions = function (lessonId) {
    if (!openModalShell(lessonId)) return;
    titleEl.textContent = 'IB-Style Questions: ' + currentLesson.title;
    if (subtitleEl) subtitleEl.textContent = 'Practice authentic IB questions and get marked feedback.';
    modal.setAttribute('aria-label', 'IB-Style Questions: ' + currentLesson.title);

    renderIBQuestionsBody();
    if (closeBtn) closeBtn.focus();
  };

  /* ---------------- Entry point 6: Ready for the Classroom ---------------- */

  window.openReadinessCheck = function (lessonId) {
    if (!openModalShell(lessonId)) return;
    titleEl.textContent = 'Ready for the Classroom: ' + currentLesson.title;
    if (subtitleEl) subtitleEl.textContent = 'Oral-style questions to check you\u2019re ready for today\u2019s lesson.';
    modal.setAttribute('aria-label', 'Ready for the Classroom: ' + currentLesson.title);

    renderReadinessBody();
    if (closeBtn) closeBtn.focus();
  };

  window.closeTeachBot = function () {
    if (!overlay) return;
    overlay.hidden = true;
    setExpanded(false);
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  };

  function setExpanded(state) {
    isExpanded = state;
    if (!overlay) return;
    overlay.classList.toggle('is-expanded', isExpanded);
    if (expandBtn) {
      expandBtn.setAttribute('aria-label', isExpanded ? 'Collapse view' : 'Expand to full page');
      expandBtn.textContent = isExpanded ? 'Collapse view' : 'Expand to full page';
    }
    document.body.style.overflow = (!overlay.hidden && isExpanded) ? 'hidden' : '';
  }

  /* ---------------- Teach Me Live body ---------------- */

  function renderTeachBody() {
    var lesson = currentLesson;
    var checklistState = getChecklistState(lesson.id, lesson.checklist.length);
    var doneCount = checklistState.filter(Boolean).length;
    var pct = Math.round((doneCount / lesson.checklist.length) * 100);

    var html = '<div class="sbl-teach-grid">';

    html += '<div class="sbl-teach-panel">';
    html += '<div class="sbl-teach-section"><h3>Syllabus focus</h3><p class="sbl-teach-focus">' + escapeHtml(lesson.syllabusFocus) + '</p></div>';

    html += '<div class="sbl-teach-section"><h3>Starter prompts</h3><div class="sbl-prompt-grid" id="sblPromptGrid"></div>';
    html += '<div class="sbl-copy-status" id="sblCopyStatus"></div></div>';

    html += '<div class="sbl-teach-section"><h3>What should I know?</h3>';
    html += '<div class="sbl-progress-row"><div class="sbl-progress-track"><div class="sbl-progress-fill" id="sblChecklistFill" style="width:' + pct + '%;"></div></div><span id="sblChecklistPct">' + pct + '%</span><button type="button" class="sbl-reset-btn" id="sblChecklistReset">Reset progress</button></div>';
    html += '<ul class="sbl-checklist-list" id="sblChecklistList"></ul>';
    html += '<p class="sbl-progress-note">Progress is currently stored on this device only.</p></div>';

    html += '<div class="sbl-teach-section"><h3>Test My Knowledge</h3><p class="sbl-teach-focus">10 lesson-specific questions with instant feedback and a mastery score.</p><button type="button" class="sbl-quiz-action" id="sblLaunchQuizFromTeach">Start 10-question quiz &rarr;</button></div>';

    html += '<div class="sbl-teach-section"><h3>Spaced Retrieval</h3><p class="sbl-teach-focus">5 cumulative questions drawn only from lessons you have already reached in this unit.</p><button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblLaunchRetrievalFromTeach">Start Spaced Retrieval &rarr;</button></div>';

    if (lesson.ibQuestions && lesson.ibQuestions.length) {
      html += '<div class="sbl-teach-section"><h3>IB-Style Questions</h3><p class="sbl-teach-focus">Practice authentic IB questions and get marked feedback against the real mark scheme.</p><button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblLaunchIBFromTeach">Practice Now &rarr;</button></div>';
    }

    if (lesson.challenge) {
      html += '<div class="sbl-teach-section"><h3>Challenge</h3><p class="sbl-teach-focus">Think through a challenge question independently, then discuss it with the Challenge Tutor.</p><button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblLaunchChallengeFromTeach">Start Challenge &rarr;</button></div>';
    }

    if (lesson.readinessQuestions && lesson.readinessQuestions.length) {
      html += '<div class="sbl-teach-section"><h3>Ready for the Classroom?</h3><p class="sbl-teach-focus">Discussion questions to work through in pairs before class.</p><button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblLaunchReadinessFromTeach">Start Readiness Check &rarr;</button></div>';
    }

    html += '<div class="sbl-teach-section sbl-ready-note">Ready for class: you will use this knowledge in class for discussion, collaboration, case-study analysis, the 4Ps and written application.</div>';

    html += '</div>';

    html += '<div class="sbl-teach-panel sbl-teach-chatpanel" id="sblFramePanel"><div class="sbl-teach-bot-frame-wrap" id="sblFrameWrap"></div></div>';

    html += '</div>';

    bodyMount.innerHTML = html;

    renderPromptButtons(lesson);
    renderChecklist(lesson, checklistState);
    loadIframeIfNeeded(SBL_TEACH_BOT_IFRAME_SRC);

    document.getElementById('sblLaunchQuizFromTeach').addEventListener('click', function () {
      window.openTestMyKnowledge(lesson.id);
    });
    document.getElementById('sblLaunchRetrievalFromTeach').addEventListener('click', function () {
      window.openSpacedRetrieval(lesson.id);
    });
    var challengeBtn = document.getElementById('sblLaunchChallengeFromTeach');
    if (challengeBtn) {
      challengeBtn.addEventListener('click', function () {
        window.openChallengeMode(lesson.id);
      });
    }
    var ibBtn = document.getElementById('sblLaunchIBFromTeach');
    if (ibBtn) {
      ibBtn.addEventListener('click', function () {
        window.openIBQuestions(lesson.id);
      });
    }
    var readinessBtn = document.getElementById('sblLaunchReadinessFromTeach');
    if (readinessBtn) {
      readinessBtn.addEventListener('click', function () {
        window.openReadinessCheck(lesson.id);
      });
    }
  }

  function loadIframeIfNeeded(src) {
    if (iframeLoaded) return;
    var wrap = document.getElementById('sblFrameWrap');
    if (!wrap) return;
    var iframe = document.createElement('iframe');
    iframe.title = 'SBL Geography Tutor chat';
    iframe.src = src || SBL_TEACH_BOT_IFRAME_SRC;
    wrap.appendChild(iframe);
    iframeLoaded = true;
  }

  /* ---------------- Starter prompts (clipboard copy) ---------------- */

  function renderPromptButtons(lesson) {
    var grid = document.getElementById('sblPromptGrid');
    var statusBox = document.getElementById('sblCopyStatus');
    grid.innerHTML = '';

    lesson.starterButtons.forEach(function (btnConf) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sbl-prompt-btn';
      btn.textContent = btnConf.label;
      btn.addEventListener('click', function () {
        var prompt = buildPrompt(lesson, btnConf.label, btnConf.request);
        copyText(prompt, function (success) {
          grid.querySelectorAll('.sbl-prompt-btn').forEach(function (b) { b.classList.remove('is-copied'); });
          if (success) {
            btn.classList.add('is-copied');
            statusBox.className = 'sbl-copy-status is-visible';
            statusBox.innerHTML = 'Prompt copied. Paste it into the tutor chat and press Send.';
            announce('Prompt copied to clipboard. Paste it into the tutor chat and press Send.');
          } else {
            statusBox.className = 'sbl-copy-status is-visible';
            statusBox.innerHTML =
              'Automatic copy did not work. Select and copy this prompt manually:' +
              '<textarea readonly rows="3">' + escapeHtml(prompt) + '</textarea>';
            announce('Automatic copy failed. A manual copy box is available below the starter prompts.');
          }
        });
      });
      grid.appendChild(btn);
    });
  }

  /* ---------------- Checklist ---------------- */

  function renderChecklist(lesson, state) {
    var list = document.getElementById('sblChecklistList');
    list.innerHTML = '';

    lesson.checklist.forEach(function (item, i) {
      var li = document.createElement('li');
      li.className = 'sbl-checklist-item' + (state[i] ? ' is-done' : '');
      var checkboxId = 'sblChecklist_' + lesson.id + '_' + i;

      var input = document.createElement('input');
      input.type = 'checkbox';
      input.id = checkboxId;
      input.checked = !!state[i];
      input.addEventListener('change', function () {
        state[i] = input.checked;
        saveChecklistState(lesson.id, state);
        li.classList.toggle('is-done', input.checked);
        updateChecklistProgress(lesson, state);
      });

      var label = document.createElement('label');
      label.setAttribute('for', checkboxId);
      label.textContent = item;

      li.appendChild(input);
      li.appendChild(label);
      list.appendChild(li);
    });

    var resetBtn = document.getElementById('sblChecklistReset');
    resetBtn.addEventListener('click', function () {
      var cleared = new Array(lesson.checklist.length).fill(false);
      saveChecklistState(lesson.id, cleared);
      renderChecklist(lesson, cleared);
      updateChecklistProgress(lesson, cleared);
      announce('Checklist progress reset.');
    });
  }

  function updateChecklistProgress(lesson, state) {
    var doneCount = state.filter(Boolean).length;
    var pct = Math.round((doneCount / lesson.checklist.length) * 100);
    var fill = document.getElementById('sblChecklistFill');
    var pctEl = document.getElementById('sblChecklistPct');
    if (fill) fill.style.width = pct + '%';
    if (pctEl) pctEl.textContent = pct + '%';
    announce('Checklist progress: ' + doneCount + ' of ' + lesson.checklist.length + ' complete, ' + pct + ' percent.');
    updateProgress();
  }

  function updateProgress() {
    if (!progressEl || !currentLesson) return;
    var state = getChecklistState(currentLesson.id, currentLesson.checklist.length);
    var doneCount = state.filter(Boolean).length;
    progressEl.textContent = doneCount + '/' + currentLesson.checklist.length + ' checked';
  }

  /* ---------------- Challenge Mode body ---------------- */

  function renderChallengeBody() {
    var lesson = currentLesson;

    if (!lesson.challenge) {
      bodyMount.innerHTML =
        '<div class="sbl-teach-panel" style="border-right:none; width:100%;">' +
        '<div class="sbl-teach-section"><h3>Challenge</h3>' +
        '<p class="sbl-teach-focus">A challenge question is not yet available for this lesson.</p></div></div>';
      return;
    }

    var challenge = lesson.challenge;
    var savedNotes = getChallengeNotes(lesson.id);

    var html = '<div class="sbl-teach-grid">';

    html += '<div class="sbl-teach-panel">';

    html += '<div class="sbl-teach-section"><h3>Challenge question</h3><p class="sbl-teach-focus"><strong>' + escapeHtml(challenge.question) + '</strong></p>';
    if (challenge.intro) {
      html += '<p class="sbl-teach-focus">' + escapeHtml(challenge.intro) + '</p>';
    }
    html += '<p class="sbl-teach-focus">Think it through yourself first. Make some notes below before you open the Challenge Tutor \u2014 it will ask you questions rather than give you answers, structures or model responses.</p>';
    html += '</div>';

    html += '<div class="sbl-teach-section"><h3>My notes</h3>';
    html += '<textarea id="sblChallengeNotes" rows="10" placeholder="Jot down your initial ideas, evidence, examples and thinking here..." style="width:100%; box-sizing:border-box; font-family:inherit; font-size:0.95rem; padding:0.7rem; border:1px solid var(--lh-border, #d9dde3); border-radius:8px; resize:vertical;">' + escapeHtml(savedNotes) + '</textarea>';
    html += '<p class="sbl-progress-note" id="sblChallengeNotesStatus">Notes are saved automatically on this device.</p>';
    html += '</div>';

    html += '<div class="sbl-teach-section sbl-ready-note">When you feel ready, write your final response independently \u2014 using your notes and the tutor conversation to guide you, not to copy from.</div>';

    html += '</div>';

    html += '<div class="sbl-teach-panel sbl-teach-chatpanel" id="sblFramePanel"><div class="sbl-teach-bot-frame-wrap" id="sblFrameWrap"></div></div>';

    html += '</div>';

    bodyMount.innerHTML = html;

    var notesArea = document.getElementById('sblChallengeNotes');
    var notesStatus = document.getElementById('sblChallengeNotesStatus');
    var saveTimer = null;
    notesArea.addEventListener('input', function () {
      window.clearTimeout(saveTimer);
      saveTimer = window.setTimeout(function () {
        saveChallengeNotes(lesson.id, notesArea.value);
        notesStatus.textContent = 'Notes saved.';
        window.setTimeout(function () {
          notesStatus.textContent = 'Notes are saved automatically on this device.';
        }, 1500);
      }, 500);
    });

    renderChallengeLaunch(lesson, challenge);
  }

  function renderChallengeLaunch(lesson, challenge) {
    var wrap = document.getElementById('sblFrameWrap');
    if (!wrap) return;

    var launch = document.createElement('div');
    launch.className = 'sbl-challenge-launch';
    launch.style.cssText = 'display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; text-align:center; padding:2rem; gap:1rem;';
    launch.innerHTML =
      '<p class="sbl-teach-focus" style="max-width:22rem;">Ready to talk it through? The Challenge Tutor will ask you questions to help develop your own thinking.</p>' +
      '<button type="button" class="sbl-quiz-action" id="sblLaunchChallengeTutor">Challenge Tutor &rarr;</button>';
    wrap.innerHTML = '';
    wrap.appendChild(launch);

    document.getElementById('sblLaunchChallengeTutor').addEventListener('click', function () {
      wrap.innerHTML = '';
      var iframe = document.createElement('iframe');
      iframe.title = 'SBL Challenge Tutor chat';
      iframe.src = SBL_CHALLENGE_TUTOR_IFRAME_SRC;
      wrap.appendChild(iframe);
      iframeLoaded = true;

      copyText(buildChallengeOpener(challenge), function (success) {
        if (success) {
          announce('An opening message has been copied. Paste it into the Challenge Tutor chat and press Send to get started.');
        }
      });
    });
  }

  /* ---------------- IB-Style Questions body ---------------- */

  function renderIBQuestionsBody() {
    var lesson = currentLesson;

    if (!lesson.ibQuestions || !lesson.ibQuestions.length) {
      bodyMount.innerHTML =
        '<div class="sbl-teach-panel" style="border-right:none; width:100%;">' +
        '<div class="sbl-teach-section"><h3>IB-Style Questions</h3>' +
        '<p class="sbl-teach-focus">No IB-style questions are available for this lesson yet.</p></div></div>';
      return;
    }

    ibState = { lesson: lesson, activeIndex: 0 };

    var html = '<div class="sbl-teach-grid">';
    html += '<div class="sbl-teach-panel">';

    if (lesson.ibQuestions.length > 1) {
      html += '<div class="sbl-teach-section"><h3>Choose a question</h3><div class="sbl-prompt-grid" id="sblIBQuestionList"></div></div>';
    }

    html += '<div class="sbl-teach-section" id="sblIBQuestionWrap"></div>';
    html += '</div>';

    html += '<div class="sbl-teach-panel sbl-teach-chatpanel" id="sblFramePanel"><div class="sbl-teach-bot-frame-wrap" id="sblFrameWrap"></div></div>';
    html += '</div>';

    bodyMount.innerHTML = html;

    if (lesson.ibQuestions.length > 1) {
      var list = document.getElementById('sblIBQuestionList');
      lesson.ibQuestions.forEach(function (ibQ, i) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'sbl-prompt-btn';
        btn.textContent = 'Question ' + (i + 1) + ' [' + ibQ.marks + ']';
        btn.addEventListener('click', function () {
          ibState.activeIndex = i;
          renderIBQuestionWorkspace();
        });
        list.appendChild(btn);
      });
    }

    renderIBQuestionWorkspace();
    loadIframeIfNeeded(SBL_TEACH_BOT_IFRAME_SRC);
  }

  function renderIBQuestionWorkspace() {
    var lesson = ibState.lesson;
    var ibQ = lesson.ibQuestions[ibState.activeIndex];
    var wrap = document.getElementById('sblIBQuestionWrap');
    var questionOpener = buildQuestionOpener(ibQ);

    var html = '<h3>Question' + (lesson.ibQuestions.length > 1 ? ' ' + (ibState.activeIndex + 1) : '') + '</h3>';
    html += '<p class="sbl-teach-focus"><strong>' + escapeHtml(ibQ.question) + '</strong> [' + ibQ.marks + ' mark' + (ibQ.marks === 1 ? '' : 's') + ']</p>';

    html += '<p class="sbl-progress-note"><strong>Step 1:</strong> Copy the text below, paste it into the tutor chat on the right, and press Send. The tutor will just confirm it has the question \u2014 it will not answer it yet.</p>';
    html += '<textarea readonly rows="3" style="width:100%; box-sizing:border-box; font-family:inherit; font-size:0.85rem; padding:0.7rem; border:1px solid var(--lh-border, #d9dde3); border-radius:8px; background:#f7f7f9;">' + escapeHtml(questionOpener) + '</textarea>';
    html += '<div style="margin-top:0.5rem;"><button type="button" class="sbl-prompt-btn" id="sblIBCopyQuestion">Copy question text</button> <span class="sbl-progress-note" id="sblIBCopyQuestionNote" style="display:inline;"></span></div>';

    html += '<p class="sbl-progress-note" style="margin-top:1.2rem;"><strong>Step 2:</strong> Type your answer below.</p>';
    html += '<textarea id="sblIBAnswer" rows="6" placeholder="Type your answer here..." style="width:100%; box-sizing:border-box; font-family:inherit; font-size:0.95rem; padding:0.7rem; border:1px solid var(--lh-border, #d9dde3); border-radius:8px; resize:vertical;"></textarea>';
    html += '<div style="margin-top:0.8rem;"><button type="button" class="sbl-quiz-action" id="sblIBSubmit">Submit for Marking &rarr;</button></div>';
    html += '<div id="sblIBFeedbackSection"></div>';

    wrap.innerHTML = html;

    document.getElementById('sblIBCopyQuestion').addEventListener('click', function () {
      copyText(questionOpener, function (success) {
        var note = document.getElementById('sblIBCopyQuestionNote');
        note.textContent = success ? 'Copied \u2014 paste it into the chat now.' : 'Automatic copy failed \u2014 select the text above and copy it manually.';
      });
    });

    document.getElementById('sblIBSubmit').addEventListener('click', function () {
      var answerText = document.getElementById('sblIBAnswer').value.trim();
      if (!answerText) {
        announce('Please write an answer before submitting for marking.');
        return;
      }
      var prompt = buildMarkingPrompt(lesson, ibQ, answerText);
      renderIBFeedbackSection(lesson, ibQ, answerText, prompt);
      copyText(prompt, function (success) {
        var copyNote = document.getElementById('sblIBCopyNote');
        if (copyNote) {
          copyNote.textContent = success
            ? 'The text below was also copied to your clipboard automatically \u2014 you can just press Ctrl+V in the chat.'
            : 'Automatic copy did not work \u2014 select all the text below and copy it manually (Ctrl+C).';
        }
      });
    });
  }

  function renderIBFeedbackSection(lesson, ibQ, answerText, prompt) {
    var section = document.getElementById('sblIBFeedbackSection');
    section.innerHTML =
      '<p class="sbl-progress-note" style="margin-top:1rem;"><strong>Step 3:</strong> Select all the text in the box below (click inside it, then Ctrl+A, Ctrl+C), paste it into the tutor chat on the right (Ctrl+V), and press Send.</p>' +
      '<textarea readonly rows="6" style="width:100%; box-sizing:border-box; font-family:inherit; font-size:0.85rem; padding:0.7rem; border:1px solid var(--lh-border, #d9dde3); border-radius:8px; background:#f7f7f9;">' + escapeHtml(prompt) + '</textarea>' +
      '<p class="sbl-progress-note" id="sblIBCopyNote" style="margin-top:0.3rem;"></p>' +
      '<p class="sbl-progress-note" style="margin-top:1rem;"><strong>Step 4:</strong> Once the tutor replies with your mark and feedback, copy its message and paste it into the box below.</p>' +
      '<textarea id="sblIBFeedback" rows="6" placeholder="Paste the tutor\u2019s mark and feedback here..." style="width:100%; box-sizing:border-box; font-family:inherit; font-size:0.95rem; padding:0.7rem; border:1px solid var(--lh-border, #d9dde3); border-radius:8px; resize:vertical; margin-top:0.5rem;"></textarea>' +
      '<div style="margin-top:0.8rem; display:flex; gap:0.6rem; flex-wrap:wrap;">' +
      '<button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblIBDownload">Download report (print / save as PDF)</button>' +
      '<button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblIBOneNote">Copy report for OneNote</button>' +
      '</div>';

    document.getElementById('sblIBDownload').addEventListener('click', function () {
      var feedbackText = document.getElementById('sblIBFeedback').value.trim();
      /* ---------------- IB-Style Questions body (PPQ Marker) ----------------
     Replaces the old two-step copy/paste chat flow. Submitting an answer
     now calls the /api/mark-ppq serverless function directly (which itself
     talks to the SBL PPQ Marker Copilot Studio agent via Direct Line, with
     the secret held server-side). No chat window or copy/paste is
     involved \u2014 the feedback is rendered straight into this panel.
     ------------------------------------------------------------------ */

  function renderIBQuestionsBody() {
    var lesson = currentLesson;

    if (!lesson.ibQuestions || !lesson.ibQuestions.length) {
      bodyMount.innerHTML =
        '<div class="sbl-teach-panel" style="border-right:none; width:100%;">' +
        '<div class="sbl-teach-section"><h3>IB-Style Questions</h3>' +
        '<p class="sbl-teach-focus">No IB-style questions are available for this lesson yet.</p></div></div>';
      return;
    }

    ibState = { lesson: lesson, activeIndex: 0 };

    var html = '<div class="sbl-teach-panel" style="border-right:none; width:100%;">';

    if (lesson.ibQuestions.length > 1) {
      html += '<div class="sbl-teach-section"><h3>Choose a question</h3><div class="sbl-prompt-grid" id="sblIBQuestionList"></div></div>';
    }

    html += '<div class="sbl-teach-section" id="sblIBQuestionWrap"></div>';
    html += '</div>';

    bodyMount.innerHTML = html;

    if (lesson.ibQuestions.length > 1) {
      var list = document.getElementById('sblIBQuestionList');
      lesson.ibQuestions.forEach(function (ibQ, i) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'sbl-prompt-btn';
        btn.textContent = 'Question ' + (i + 1) + ' [' + ibQ.marks + ']';
        btn.addEventListener('click', function () {
          ibState.activeIndex = i;
          renderIBQuestionWorkspace();
        });
        list.appendChild(btn);
      });
    }

    renderIBQuestionWorkspace();
  }

  function renderIBQuestionWorkspace() {
    var lesson = ibState.lesson;
    var ibQ = lesson.ibQuestions[ibState.activeIndex];
    var wrap = document.getElementById('sblIBQuestionWrap');

    var html = '<h3>Question' + (lesson.ibQuestions.length > 1 ? ' ' + (ibState.activeIndex + 1) : '') + '</h3>';
    html += '<p class="sbl-teach-focus"><strong>' + escapeHtml(ibQ.question) + '</strong> [' + ibQ.marks + ' mark' + (ibQ.marks === 1 ? '' : 's') + ']</p>';

    html += '<p class="sbl-progress-note" style="margin-top:1rem;">Write your answer below, then submit it for marking. Your answer is sent straight to the examiner-style marker \u2014 there is nothing to copy or paste.</p>';
    html += '<textarea id="sblIBAnswer" rows="8" placeholder="Type your answer here..." style="width:100%; box-sizing:border-box; font-family:inherit; font-size:0.95rem; padding:0.7rem; border:1px solid var(--lh-border, #d9dde3); border-radius:8px; resize:vertical;"></textarea>';
    html += '<div style="margin-top:0.8rem;"><button type="button" class="sbl-quiz-action" id="sblIBSubmit">Submit for Marking &rarr;</button></div>';
    html += '<div id="sblIBFeedbackSection"></div>';

    wrap.innerHTML = html;

    document.getElementById('sblIBSubmit').addEventListener('click', function () {
      var answerBox = document.getElementById('sblIBAnswer');
      var answerText = answerBox.value.trim();
      if (!answerText) {
        announce('Please write an answer before submitting for marking.');
        answerBox.focus();
        return;
      }
      submitForPPQMarking(lesson, ibQ, answerText);
    });
  }

  function submitForPPQMarking(lesson, ibQ, answerText) {
    var section = document.getElementById('sblIBFeedbackSection');
    var submitBtn = document.getElementById('sblIBSubmit');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Marking\u2026';
    section.innerHTML =
      '<div class="sbl-progress-note" style="margin-top:1rem;" role="status">' +
      'Marking your answer \u2014 this usually takes a few seconds\u2026</div>';
    announce('Submitting your answer for marking. Please wait.');

    fetch('/api/mark-ppq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: ibQ.question,
        maxMark: ibQ.marks,
        markingGuidance: ibQ.markScheme,
        studentAnswer: answerText
      })
    })
      .then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok) throw new Error(data && data.error ? data.error : 'Marking failed.');
          return data;
        });
      })
      .then(function (data) {
        renderPPQFeedback(lesson, ibQ, answerText, data.feedback, data.raw);
      })
      .catch(function (err) {
        section.innerHTML =
          '<div class="sbl-quiz-feedback is-incorrect" style="margin-top:1rem;">' +
          '<strong>Sorry, marking did not complete.</strong> ' + escapeHtml(err.message || 'Please try again.') +
          '</div>' +
          '<div style="margin-top:0.8rem;"><button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblIBRetry">Try again</button></div>';
        announce('Marking failed. ' + (err.message || 'Please try again.'));
        var retryBtn = document.getElementById('sblIBRetry');
        if (retryBtn) {
          retryBtn.addEventListener('click', function () {
            submitForPPQMarking(lesson, ibQ, answerText);
          });
        }
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit for Marking \u2192';
      });
  }

  function renderPPQFeedback(lesson, ibQ, answerText, feedback, rawText) {
    var section = document.getElementById('sblIBFeedbackSection');
    feedback = feedback || {};

    var markLine = feedback.markAwarded
      ? escapeHtml(feedback.markAwarded)
      : '\u2014 / ' + ibQ.marks;

    var html = '<div class="sbl-quiz-result" style="margin-top:1.2rem;">';
    html += '<div class="sbl-quiz-progress">Marked feedback</div>';
    html += '<div class="sbl-quiz-result__score">' + markLine + '</div>';

    html += '<div class="sbl-quiz-result__breakdown">';
    if (feedback.whyThisMark) {
      html += '<p><strong>Why this mark was awarded</strong><br>' + escapeHtml(feedback.whyThisMark) + '</p>';
    }
    if (feedback.whatWasDoneWell) {
      html += '<p><strong>What was done well</strong><br>' + escapeHtml(feedback.whatWasDoneWell) + '</p>';
    }
    if (feedback.whatIsMissing) {
      html += '<p><strong>What is missing or needs development</strong><br>' + escapeHtml(feedback.whatIsMissing) + '</p>';
    }
    if (feedback.nextStep) {
      html += '<p><strong>Next step</strong><br>' + escapeHtml(feedback.nextStep) + '</p>';
    }
    if (feedback.followUpQuestion) {
      html += '<p><strong>Follow-up question</strong><br>' + escapeHtml(feedback.followUpQuestion) + '</p>';
    }
    html += '</div>';

    html += '<div class="sbl-quiz-result__actions">';
    html += '<button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblIBTryAgain">Answer again</button>';
    html += '<button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblIBDownload">Download report (print / save as PDF)</button>';
    html += '<button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblIBOneNote">Copy report for OneNote</button>';
    html += '</div></div>';

    section.innerHTML = html;
    announce('Marking complete. You scored ' + markLine + '.');

    document.getElementById('sblIBTryAgain').addEventListener('click', function () {
      renderIBQuestionWorkspace();
    });
    document.getElementById('sblIBDownload').addEventListener('click', function () {
      downloadIBReport(lesson, ibQ, answerText, feedback);
    });
    document.getElementById('sblIBOneNote').addEventListener('click', function () {
      var text = buildIBPlainTextReport(lesson, ibQ, answerText, feedback);
      copyText(text, function (success) {
        announce(success ? 'Report copied for OneNote.' : 'Automatic copy failed. Please try again.');
      });
    });
  }

  function buildIBPlainTextReport(lesson, ibQ, answerText, feedback) {
    feedback = feedback || {};
    var lines = [];
    lines.push('SBL Geography \u2014 IB-Style Question Report');
    lines.push('Lesson: ' + lesson.title);
    lines.push('Completed: ' + new Date().toLocaleString());
    lines.push('');
    lines.push('Question [' + ibQ.marks + ' marks]: ' + ibQ.question);
    lines.push('');
    lines.push('My answer:');
    lines.push(answerText);
    lines.push('');
    lines.push('Mark awarded: ' + (feedback.markAwarded || ('\u2014 / ' + ibQ.marks)));
    if (feedback.whyThisMark) { lines.push(''); lines.push('Why this mark was awarded:'); lines.push(feedback.whyThisMark); }
    if (feedback.whatWasDoneWell) { lines.push(''); lines.push('What was done well:'); lines.push(feedback.whatWasDoneWell); }
    if (feedback.whatIsMissing) { lines.push(''); lines.push('What is missing or needs development:'); lines.push(feedback.whatIsMissing); }
    if (feedback.nextStep) { lines.push(''); lines.push('Next step:'); lines.push(feedback.nextStep); }
    if (feedback.followUpQuestion) { lines.push(''); lines.push('Follow-up question:'); lines.push(feedback.followUpQuestion); }
    return lines.join('\n');
  }

  function downloadIBReport(lesson, ibQ, answerText, feedback) {
    feedback = feedback || {};
    var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>SBL Geography IB-Style Question Report</title>' +
      '<style>body{font-family:Arial,sans-serif;padding:2rem;max-width:700px;margin:0 auto;color:#1B2029;}' +
      'h1{font-size:1.3rem;} .block{margin:1rem 0;padding:0.8rem;border:1px solid #ddd;border-radius:8px;white-space:pre-wrap;}</style></head><body>';
    html += '<h1>SBL Geography \u2014 IB-Style Question Report</h1>';
    html += '<p><strong>Lesson:</strong> ' + escapeHtml(lesson.title) + '<br>';
    html += '<strong>Completed:</strong> ' + new Date().toLocaleString() + '</p><hr>';
    html += '<p><strong>Question [' + ibQ.marks + ' marks]:</strong> ' + escapeHtml(ibQ.question) + '</p>';
    html += '<p><strong>My answer:</strong></p><div class="block">' + escapeHtml(answerText) + '</div>';
    html += '<p><strong>Mark awarded:</strong> ' + escapeHtml(feedback.markAwarded || ('\u2014 / ' + ibQ.marks)) + '</p>';
    if (feedback.whyThisMark) html += '<p><strong>Why this mark was awarded:</strong></p><div class="block">' + escapeHtml(feedback.whyThisMark) + '</div>';
    if (feedback.whatWasDoneWell) html += '<p><strong>What was done well:</strong></p><div class="block">' + escapeHtml(feedback.whatWasDoneWell) + '</div>';
    if (feedback.whatIsMissing) html += '<p><strong>What is missing or needs development:</strong></p><div class="block">' + escapeHtml(feedback.whatIsMissing) + '</div>';
    if (feedback.nextStep) html += '<p><strong>Next step:</strong></p><div class="block">' + escapeHtml(feedback.nextStep) + '</div>';
    if (feedback.followUpQuestion) html += '<p><strong>Follow-up question:</strong></p><div class="block">' + escapeHtml(feedback.followUpQuestion) + '</div>';
    html += '<p><em>Use your browser\u2019s Print option and choose \u201cSave as PDF\u201d if you want a PDF copy.</em></p>';
    html += '</body></html>';

    var reportWindow = window.open('', '_blank');
    if (!reportWindow) {
      announce('Please allow pop-ups to download the report.');
      return;
    }
    reportWindow.document.open();
    reportWindow.document.write(html);
    reportWindow.document.close();
  }

  function renderReadinessBody() {
    var lesson = currentLesson;

    if (!lesson.readinessQuestions || !lesson.readinessQuestions.length) {
      bodyMount.innerHTML =
        '<div class="sbl-teach-panel" style="border-right:none; width:100%;">' +
        '<div class="sbl-teach-section"><h3>Ready for the Classroom?</h3>' +
        '<p class="sbl-teach-focus">Readiness questions are not yet available for this lesson.</p></div></div>';
      return;
    }

    readinessState = { lesson: lesson, index: 0 };
    bodyMount.innerHTML = '<div class="sbl-teach-panel" style="border-right:none; width:100%;" id="sblReadinessMount"></div>';
    renderReadinessQuestion();
  }

  function renderReadinessQuestion() {
    var mount = document.getElementById('sblReadinessMount');
    var lesson = readinessState.lesson;
    var qs = lesson.readinessQuestions;
    var i = readinessState.index;
    var isLast = i === qs.length - 1;

    var html = '<div class="sbl-quiz-progress">Question ' + (i + 1) + ' of ' + qs.length + '</div>';
    html += '<p class="sbl-teach-focus" style="font-size:1.15rem; margin-top:1rem; line-height:1.5;"><strong>' + escapeHtml(qs[i]) + '</strong></p>';
    html += '<p class="sbl-progress-note" style="margin-top:1rem;">Pair up and discuss this question aloud before moving to the next one.</p>';
    html += '<div style="margin-top:1.5rem; display:flex; gap:0.6rem; flex-wrap:wrap;">';
    if (i > 0) html += '<button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblReadinessPrev">&larr; Previous</button>';
    html += '<button type="button" class="sbl-quiz-action" id="sblReadinessNext">' + (isLast ? 'Finish' : 'Next question &rarr;') + '</button>';
    html += '</div>';
    mount.innerHTML = html;

    var prevBtn = document.getElementById('sblReadinessPrev');
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        readinessState.index--;
        renderReadinessQuestion();
      });
    }
    document.getElementById('sblReadinessNext').addEventListener('click', function () {
      if (isLast) {
        renderReadinessComplete();
      } else {
        readinessState.index++;
        renderReadinessQuestion();
      }
    });
  }

  function renderReadinessComplete() {
    var mount = document.getElementById('sblReadinessMount');
    mount.innerHTML =
      '<div class="sbl-quiz-result">' +
      '<p class="sbl-teach-focus" style="font-size:1.1rem;"><strong>Nice work \u2014 you\u2019re ready to bring this into class!</strong></p>' +
      '<p class="sbl-teach-focus">Use these questions again in pairs at the start of the lesson if it helps.</p>' +
      '<button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblReadinessRestart">Start again</button>' +
      '</div>';
    document.getElementById('sblReadinessRestart').addEventListener('click', function () {
      readinessState.index = 0;
      renderReadinessQuestion();
    });
  }

  /* ---------------- Generic quiz engine (used by both
     Test My Knowledge and Spaced Retrieval) ---------------- */

  function startQuizWithQuestions(questions, contextLabel, showSource, onComplete) {
    quizState = {
      questions: questions,
      index: 0,
      score: 0,
      answered: false,
      results: [],
      contextLabel: contextLabel,
      showSource: showSource,
      onComplete: onComplete
    };
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    var mount = document.getElementById('sblQuizMount');
    var q = quizState.questions[quizState.index];

    var html = '<div class="sbl-quiz-progress">' + escapeHtml(quizState.contextLabel) + ' \u2014 Question ' + (quizState.index + 1) + ' of ' + quizState.questions.length + '</div>';
    if (quizState.showSource && q.sourceLessonTitle) {
      html += '<div class="sbl-quiz-progress" style="margin-top:-0.4rem; margin-bottom:0.6rem;">From: ' + escapeHtml(q.sourceLessonTitle) + '</div>';
    }
    html += '<p class="sbl-quiz-question">' + escapeHtml(q.q) + '</p>';
    html += '<div class="sbl-quiz-options" id="sblQuizOptions">';
    q.options.forEach(function (opt, idx) {
      var letter = ['A', 'B', 'C', 'D'][idx];
      html += '<button type="button" class="sbl-quiz-option" data-index="' + idx + '">' + letter + '. ' + escapeHtml(opt) + '</button>';
    });
    html += '</div><div id="sblQuizFeedbackWrap"></div>';
    mount.innerHTML = html;

    var optionButtons = mount.querySelectorAll('.sbl-quiz-option');
    optionButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (quizState.answered) return;
        quizState.answered = true;
        var chosen = parseInt(btn.getAttribute('data-index'), 10);
        var isCorrect = chosen === q.correct;
        if (isCorrect) quizState.score++;
        quizState.results.push({ tag: q.tag, correct: isCorrect });

        optionButtons.forEach(function (b) {
          b.disabled = true;
          var i = parseInt(b.getAttribute('data-index'), 10);
          if (i === q.correct) b.classList.add('is-correct');
          else if (i === chosen) b.classList.add('is-incorrect');
        });

        var isLast = quizState.index === quizState.questions.length - 1;
        var feedbackWrap = document.getElementById('sblQuizFeedbackWrap');
        var feedbackClass = isCorrect ? 'is-correct' : 'is-incorrect';
        var feedbackText = isCorrect
          ? q.explain
          : q.explain + (q.misconception ? ' <strong>Common misconception:</strong> ' + escapeHtml(q.misconception) : '');
        feedbackWrap.innerHTML =
          '<div class="sbl-quiz-feedback ' + feedbackClass + '"><strong>' + (isCorrect ? 'Correct.' : 'Not quite.') + '</strong> ' + (isCorrect ? escapeHtml(q.explain) : escapeHtml(q.explain) + (q.misconception ? ' <em>Common misconception: ' + escapeHtml(q.misconception) + '</em>' : '')) + '</div>' +
          '<button type="button" class="sbl-quiz-next" id="sblQuizNextBtn">' + (isLast ? 'See my results' : 'Next question') + ' &rarr;</button>';

        announce(isCorrect ? 'Correct answer.' : 'Incorrect answer. ' + q.explain);

        document.getElementById('sblQuizNextBtn').addEventListener('click', function () {
          quizState.answered = false;
          if (isLast) {
            renderQuizResult();
          } else {
            quizState.index++;
            renderQuizQuestion();
          }
        });
      });
    });
  }

  function renderQuizResult() {
    var mount = document.getElementById('sblQuizMount');
    var lesson = currentLesson;
    var total = quizState.questions.length;
    var score = quizState.score;
    var pct = Math.round((score / total) * 100);
    var band = masteryBand(pct);
    var strengths = quizState.results.filter(function (r) { return r.correct; }).map(function (r) { return r.tag; });
    var toRevisit = quizState.results.filter(function (r) { return !r.correct; }).map(function (r) { return r.tag; });

    var html = '<div class="sbl-quiz-result">';
    html += '<div class="sbl-quiz-progress">' + escapeHtml(quizState.contextLabel) + ' complete</div>';
    html += '<div class="sbl-quiz-result__score">' + score + ' / ' + total + '</div>';
    html += '<p class="sbl-quiz-result__label">' + pct + '% correct \u2014 Mastery level: <strong>' + band + '</strong></p>';
    html += '<div class="sbl-quiz-result__breakdown">';
    html += '<p><strong>Strengths:</strong> ' + (strengths.length ? escapeHtml(strengths.join(', ')) : 'Keep practising \u2014 try again to build strengths here.') + '</p>';
    html += '<p><strong>Topics to revisit:</strong> ' + (toRevisit.length ? escapeHtml(toRevisit.join(', ')) : 'None \u2014 great work.') + '</p>';
    html += '</div>';
    html += '<div class="sbl-quiz-result__actions">';
    html += '<button type="button" class="sbl-quiz-action" id="sblQuizReview">Review with Tutor</button>';
    html += '<button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblQuizRetry">Try again</button>';
    html += '<button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblQuizDownload">Download quiz report (print / save as PDF)</button>';
    html += '<button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblQuizOneNote">Copy report for OneNote</button>';
    html += '</div></div>';
    mount.innerHTML = html;

    var savedState = quizState;

    document.getElementById('sblQuizRetry').addEventListener('click', function () {
      startQuizWithQuestions(savedState.questions.slice(), savedState.contextLabel, savedState.showSource, savedState.onComplete);
    });

    document.getElementById('sblQuizReview').addEventListener('click', function () {
      var prompt = buildReviewPrompt(lesson, toRevisit);
      copyText(prompt, function (success) {
        var statusBox = document.getElementById('sblCopyStatus');
        var target = statusBox || mount;
        var msg = success
          ? 'Review prompt copied. Paste it into the tutor chat and press Send.'
          : 'Automatic copy did not work. Select and copy this prompt manually:<textarea readonly rows="3">' + escapeHtml(prompt) + '</textarea>';
        if (statusBox) {
          statusBox.className = 'sbl-copy-status is-visible';
          statusBox.innerHTML = msg;
        } else {
          announce(success ? 'Review prompt copied to clipboard.' : 'Automatic copy failed.');
        }
        announce(success ? 'Review prompt copied to clipboard.' : 'Automatic copy failed. A manual copy box is available.');
      });
    });

    document.getElementById('sblQuizDownload').addEventListener('click', function () {
      downloadQuizReport(lesson, score, total, pct, band, savedState);
    });

    document.getElementById('sblQuizOneNote').addEventListener('click', function () {
      var text = buildPlainTextReport(lesson, score, total, pct, band, savedState);
      copyText(text, function (success) {
        announce(success ? 'Report copied for OneNote.' : 'Automatic copy failed. Please try again.');
      });
    });

    if (typeof savedState.onComplete === 'function') {
      savedState.onComplete();
    }
  }

  function buildPlainTextReport(lesson, score, total, pct, band, state) {
    var lines = [];
    lines.push('SBL Geography');
    lines.push('Unit: Changing Population');
    lines.push('Topic ' + lesson.topicNumber + ': ' + lesson.topicTitle);
    lines.push('Lesson: ' + lesson.title);
    lines.push('Assessment: ' + state.contextLabel);
    lines.push('Completed: ' + new Date().toLocaleString());
    lines.push('Score: ' + score + ' / ' + total + ' (' + pct + '%) \u2014 Mastery level: ' + band);
    lines.push('');
    state.questions.forEach(function (q, i) {
      var result = state.results[i];
      lines.push((i + 1) + '. ' + q.q + (state.showSource && q.sourceLessonTitle ? ' [from: ' + q.sourceLessonTitle + ']' : ''));
      lines.push('Correct answer: ' + q.options[q.correct]);
      lines.push('Result: ' + (result && result.correct ? 'Correct' : 'Incorrect'));
      lines.push('Explanation: ' + q.explain);
      if (!(result && result.correct) && q.misconception) lines.push('Common misconception: ' + q.misconception);
      lines.push('');
    });
    return lines.join('\n');
  }

  function downloadQuizReport(lesson, score, total, pct, band, state) {
    var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>SBL Geography Quiz Report</title>' +
      '<style>body{font-family:Arial,sans-serif;padding:2rem;max-width:700px;margin:0 auto;color:#1B2029;}' +
      'h1{font-size:1.3rem;} .q{margin:1rem 0;padding:0.8rem;border:1px solid #ddd;border-radius:8px;}' +
      '.correct{color:#14532D;} .incorrect{color:#9F1239;} .src{font-size:0.8rem;color:#666;}</style></head><body>';
    html += '<h1>SBL Geography \u2014 Quiz Report</h1>';
    html += '<p><strong>Unit:</strong> Changing Population<br>';
    html += '<strong>Topic ' + lesson.topicNumber + ':</strong> ' + escapeHtml(lesson.topicTitle) + '<br>';
    html += '<strong>Lesson:</strong> ' + escapeHtml(lesson.title) + '<br>';
    html += '<strong>Assessment:</strong> ' + escapeHtml(state.contextLabel) + '<br>';
    html += '<strong>Completed:</strong> ' + new Date().toLocaleString() + '<br>';
    html += '<strong>Score:</strong> ' + score + ' / ' + total + ' (' + pct + '%) \u2014 Mastery level: ' + band + '</p><hr>';
    state.questions.forEach(function (q, i) {
      var result = state.results[i];
      html += '<div class="q"><p><strong>' + (i + 1) + '. ' + escapeHtml(q.q) + '</strong>' +
        (state.showSource && q.sourceLessonTitle ? ' <span class="src">(from: ' + escapeHtml(q.sourceLessonTitle) + ')</span>' : '') + '</p>';
      html += '<p>Correct answer: ' + escapeHtml(q.options[q.correct]) + '</p>';
      html += '<p class="' + (result && result.correct ? 'correct' : 'incorrect') + '">Result: ' + (result && result.correct ? 'Correct' : 'Incorrect') + '</p>';
      html += '<p>' + escapeHtml(q.explain) + '</p>';
      if (!(result && result.correct) && q.misconception) html += '<p><em>Common misconception: ' + escapeHtml(q.misconception) + '</em></p>';
      html += '</div>';
    });
    html += '<p><em>Use your browser\u2019s Print option and choose \u201cSave as PDF\u201d if you want a PDF copy.</em></p>';
    html += '</body></html>';

    var reportWindow = window.open('', '_blank');
    if (!reportWindow) {
      announce('Please allow pop-ups to download the report.');
      return;
    }
    reportWindow.document.open();
    reportWindow.document.write(html);
    reportWindow.document.close();
  }

  /* ---------------- Global listeners ---------------- */

  document.addEventListener('DOMContentLoaded', function () {
    bindElements();
    if (!overlay) return;

    if (closeBtn) closeBtn.addEventListener('click', window.closeTeachBot);
    if (expandBtn) expandBtn.addEventListener('click', function () { setExpanded(!isExpanded); });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) window.closeTeachBot();
    });

    document.addEventListener('keydown', function (e) {
      if (!overlay || overlay.hidden) return;

      if (e.key === 'Escape') {
        if (isExpanded) { setExpanded(false); }
        else { window.closeTeachBot(); }
        return;
      }

      if (e.key === 'Tab') {
        var focusable = getFocusableElements();
        if (focusable.length === 0) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    });
  });

})();