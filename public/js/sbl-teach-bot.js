/* ---------------- Ready for the Classroom body ---------------- */

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