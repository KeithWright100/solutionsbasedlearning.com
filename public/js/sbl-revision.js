/* ============================================================
   SBL Revision — Paper Questions engine
   Standalone page, NOT the lesson Teach Bot modal (sbl-teach-bot.js).
   Renders topics from window.SBL_REVISION_TOPICS and lets a student
   pick a full past paper question, write an answer, and get it marked
   by the exact same "SBL PPQ Marker" Copilot Studio agent that marks
   lesson-level IB-Style Questions — via the shared, stateless
   /api/mark-ppq serverless function. No new bot, no new API route.

   Data shape (populate window.SBL_REVISION_TOPICS before this file
   loads, e.g. from a sbl-revision-questions.js data file):

   window.SBL_REVISION_TOPICS = [
     {
       topic: 'Climate Change',
       questions: [
         {
           question: '...',
           marks: 12,
           markScheme: '...',
           // Optional — a display label shown instead of the generic
           // "Question N", useful for referencing a real past paper
           // question number, e.g. 'May 2019 P2 — Question 4(c)'.
           label: 'May 2019 P2 — Question 4(c)',
           // Optional — omit entirely if the question has no resource.
           // One entry per photo/graph/map that belongs to this question.
           images: [
             { src: '/images/revision-ppq/climate-change/2019-may-fig1.jpg',
               alt: 'Line graph showing global mean temperature anomaly, 1950-2020',
               caption: 'Figure 1' }
           ]
         }
       ]
     }
   ];

   Starts empty — this file works fine with zero topics and shows a
   simple "nothing added yet" message until content is added.
   ============================================================ */
(function () {

  var topics = (window.SBL_REVISION_TOPICS || []).filter(function (t) {
    return t && t.questions && t.questions.length;
  });

  var listMount, workspaceMount;
  var activeTopicIndex = null;
  var activeQuestionIndex = null;

  /* ---------------- Utilities ---------------- */

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  function announce(msg) {
    var el = document.getElementById('sblRevisionAnnounce');
    if (el) el.textContent = msg;
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

  function docIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z"/><path d="M9 13h6M9 17h4"/></svg>';
  }

  function renderImagesHtml(images) {
    if (!images || !images.length) return '';
    var html = '';
    images.forEach(function (img) {
      if (!img || !img.src) return;
      html += '<figure style="margin:0 0 1rem;">';
      html += '<img src="' + escapeHtml(img.src) + '" alt="' + escapeHtml(img.alt || '') + '" style="max-width:100%; height:auto; display:block; border:1px solid var(--lh-border, #d9dde3); border-radius:8px;">';
      if (img.caption) html += '<figcaption style="font-size:0.8rem; color:var(--lh-muted, #666); margin-top:0.4rem;">' + escapeHtml(img.caption) + '</figcaption>';
      html += '</figure>';
    });
    return html;
  }

  /* ---------------- Topic list ---------------- */

  function renderTopicList() {
    if (!topics.length) {
      listMount.innerHTML =
        '<div class="lh-panel" style="text-align:center; padding:2.5rem 1.5rem;">' +
        '<p style="color:var(--lh-muted); margin:0;">No full past paper questions have been added yet. Check back soon.</p>' +
        '</div>';
      return;
    }

    var btnLabel = window.SBL_REVISION_BUTTON_LABEL || 'IB Full Past Paper Questions';

    var html = '<div class="lh-modes">';
    topics.forEach(function (t, i) {
      var qCount = t.questions.length;
      html += '<div class="lh-mode">';
      html += '<span class="lh-mode__icon lh-bg-blue" aria-hidden="true">' + docIcon() + '</span>';
      html += '<div class="lh-mode__body">';
      html += '<span class="lh-mode__num">' + (i + 1) + '</span>';
      html += '<p class="lh-mode__title">' + escapeHtml(t.topic) + '</p>';
      html += '<p class="lh-mode__desc">' + qCount + ' full past paper question' + (qCount === 1 ? '' : 's') + '. Write your answer and get instant examiner-style marked feedback.</p>';
      html += '</div>';
      html += '<button type="button" class="lh-mode__btn lh-c-blue" data-topic-index="' + i + '" aria-label="' + escapeHtml(btnLabel) + ': ' + escapeHtml(t.topic) + '">' + escapeHtml(btnLabel) + ' &rarr;</button>';
      html += '</div>';
    });
    html += '</div>';
    listMount.innerHTML = html;

    listMount.querySelectorAll('[data-topic-index]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        openTopic(parseInt(btn.getAttribute('data-topic-index'), 10));
      });
    });
  }

  /* ---------------- Workspace: choose question, answer, mark ---------------- */

  function openTopic(topicIndex) {
    activeTopicIndex = topicIndex;
    activeQuestionIndex = 0;
    workspaceMount.hidden = false;
    renderQuestionChooser();
    workspaceMount.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderQuestionChooser() {
    var topic = topics[activeTopicIndex];

    var html = '<div class="sbl-teach-panel" style="border-right:none; width:100%;">';
    html += '<div class="sbl-teach-section"><h3>' + escapeHtml(topic.topic) + '</h3>';

    if (topic.questions.length > 1) {
      html += '<p class="sbl-teach-focus">Choose a question:</p>';
      html += '<div class="sbl-prompt-grid" id="sblRevisionQuestionList"></div>';
    }

    html += '<div id="sblRevisionQuestionWrap"></div>';
    html += '</div></div>';

    workspaceMount.innerHTML = html;

    if (topic.questions.length > 1) {
      var list = document.getElementById('sblRevisionQuestionList');
      topic.questions.forEach(function (q, i) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'sbl-prompt-btn';
        btn.textContent = (q.label || 'Question ' + (i + 1)) + ' [' + q.marks + ']';
        btn.addEventListener('click', function () {
          activeQuestionIndex = i;
          renderQuestionWorkspace();
        });
        list.appendChild(btn);
      });
    }

    renderQuestionWorkspace();
  }

  function renderQuestionWorkspace() {
    var topic = topics[activeTopicIndex];
    var q = topic.questions[activeQuestionIndex];
    var wrap = document.getElementById('sblRevisionQuestionWrap');

    var html = '<h3 style="margin-top:1rem;">' + escapeHtml(q.label || ('Question' + (topic.questions.length > 1 ? ' ' + (activeQuestionIndex + 1) : ''))) + '</h3>';
    html += renderImagesHtml(q.images);
    html += '<p class="sbl-teach-focus"><strong>' + escapeHtml(q.question) + '</strong> [' + q.marks + ' mark' + (q.marks === 1 ? '' : 's') + ']</p>';
    html += '<p class="sbl-progress-note" style="margin-top:1rem;">Write your answer below, then submit it for marking. Your answer is sent straight to the examiner-style marker — there is nothing to copy or paste.</p>';
    html += '<textarea id="sblRevisionAnswer" rows="8" placeholder="Type your answer here..." style="width:100%; box-sizing:border-box; font-family:inherit; font-size:0.95rem; padding:0.7rem; border:1px solid var(--lh-border, #d9dde3); border-radius:8px; resize:vertical;"></textarea>';
    html += '<div style="margin-top:0.8rem;"><button type="button" class="sbl-quiz-action" id="sblRevisionSubmit">Submit for Marking &rarr;</button></div>';
    html += '<div id="sblRevisionFeedbackSection"></div>';

    wrap.innerHTML = html;

    document.getElementById('sblRevisionSubmit').addEventListener('click', function () {
      var answerBox = document.getElementById('sblRevisionAnswer');
      var answerText = answerBox.value.trim();
      if (!answerText) {
        announce('Please write an answer before submitting for marking.');
        answerBox.focus();
        return;
      }
      submitForMarking(topic, q, answerText);
    });
  }

  function submitForMarking(topic, q, answerText) {
    var section = document.getElementById('sblRevisionFeedbackSection');
    var submitBtn = document.getElementById('sblRevisionSubmit');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Marking…';
    section.innerHTML =
      '<div class="sbl-progress-note" style="margin-top:1rem;" role="status">' +
      'Marking your answer — this usually takes a few seconds…</div>';
    announce('Submitting your answer for marking. Please wait.');

    fetch('/api/mark-ppq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: q.question,
        maxMark: q.marks,
        markingGuidance: q.markScheme,
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
        renderFeedback(topic, q, answerText, data.feedback);
      })
      .catch(function (err) {
        section.innerHTML =
          '<div class="sbl-quiz-feedback is-incorrect" style="margin-top:1rem;">' +
          '<strong>Sorry, marking did not complete.</strong> ' + escapeHtml(err.message || 'Please try again.') +
          '</div>' +
          '<div style="margin-top:0.8rem;"><button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblRevisionRetry">Try again</button></div>';
        announce('Marking failed. ' + (err.message || 'Please try again.'));
        var retryBtn = document.getElementById('sblRevisionRetry');
        if (retryBtn) {
          retryBtn.addEventListener('click', function () {
            submitForMarking(topic, q, answerText);
          });
        }
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit for Marking →';
      });
  }

  function renderFeedback(topic, q, answerText, feedback) {
    var section = document.getElementById('sblRevisionFeedbackSection');
    feedback = feedback || {};

    var markLine = feedback.markAwarded ? escapeHtml(feedback.markAwarded) : '— / ' + q.marks;

    var html = '<div class="sbl-quiz-result" style="margin-top:1.2rem;">';
    html += '<div class="sbl-quiz-progress">Marked feedback</div>';
    html += '<div class="sbl-quiz-result__score">' + markLine + '</div>';

    html += '<div class="sbl-quiz-result__breakdown">';
    if (feedback.whyThisMark) html += '<p><strong>Why this mark was awarded</strong><br>' + escapeHtml(feedback.whyThisMark) + '</p>';
    if (feedback.whatWasDoneWell) html += '<p><strong>What was done well</strong><br>' + escapeHtml(feedback.whatWasDoneWell) + '</p>';
    if (feedback.whatIsMissing) html += '<p><strong>What is missing or needs development</strong><br>' + escapeHtml(feedback.whatIsMissing) + '</p>';
    if (feedback.nextStep) html += '<p><strong>Next step</strong><br>' + escapeHtml(feedback.nextStep) + '</p>';
    if (feedback.followUpQuestion) html += '<p><strong>Follow-up question</strong><br>' + escapeHtml(feedback.followUpQuestion) + '</p>';
    html += '</div>';

    html += '<div class="sbl-quiz-result__actions">';
    html += '<button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblRevisionTryAgain">Answer again</button>';
    html += '<button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblRevisionDownload">Download report (print / save as PDF)</button>';
    html += '<button type="button" class="sbl-quiz-action sbl-quiz-action--secondary" id="sblRevisionOneNote">Copy report for OneNote</button>';
    html += '</div></div>';

    section.innerHTML = html;
    announce('Marking complete. You scored ' + markLine + '.');

    document.getElementById('sblRevisionTryAgain').addEventListener('click', function () {
      renderQuestionWorkspace();
    });
    document.getElementById('sblRevisionDownload').addEventListener('click', function () {
      downloadReport(topic, q, answerText, feedback);
    });
    document.getElementById('sblRevisionOneNote').addEventListener('click', function () {
      var text = buildPlainTextReport(topic, q, answerText, feedback);
      copyText(text, function (success) {
        announce(success ? 'Report copied for OneNote.' : 'Automatic copy failed. Please try again.');
      });
    });
  }

  function buildPlainTextReport(topic, q, answerText, feedback) {
    feedback = feedback || {};
    var lines = [];
    lines.push('SBL Geography — Full Past Paper Question Report');
    lines.push('Topic: ' + topic.topic);
    lines.push('Completed: ' + new Date().toLocaleString());
    lines.push('');
    lines.push('Question [' + q.marks + ' marks]: ' + q.question);
    if (q.images && q.images.length) {
      lines.push('(See the resource image' + (q.images.length > 1 ? 's' : '') + ' on the question page — not included in this text copy.)');
    }
    lines.push('');
    lines.push('My answer:');
    lines.push(answerText);
    lines.push('');
    lines.push('Mark awarded: ' + (feedback.markAwarded || ('— / ' + q.marks)));
    if (feedback.whyThisMark) { lines.push(''); lines.push('Why this mark was awarded:'); lines.push(feedback.whyThisMark); }
    if (feedback.whatWasDoneWell) { lines.push(''); lines.push('What was done well:'); lines.push(feedback.whatWasDoneWell); }
    if (feedback.whatIsMissing) { lines.push(''); lines.push('What is missing or needs development:'); lines.push(feedback.whatIsMissing); }
    if (feedback.nextStep) { lines.push(''); lines.push('Next step:'); lines.push(feedback.nextStep); }
    if (feedback.followUpQuestion) { lines.push(''); lines.push('Follow-up question:'); lines.push(feedback.followUpQuestion); }
    return lines.join('\n');
  }

  function downloadReport(topic, q, answerText, feedback) {
    feedback = feedback || {};
    var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>SBL Geography Full Past Paper Question Report</title>' +
      '<style>body{font-family:Arial,sans-serif;padding:2rem;max-width:700px;margin:0 auto;color:#1B2029;}' +
      'h1{font-size:1.3rem;} .block{margin:1rem 0;padding:0.8rem;border:1px solid #ddd;border-radius:8px;white-space:pre-wrap;}</style></head><body>';
    html += '<h1>SBL Geography — Full Past Paper Question Report</h1>';
    html += '<p><strong>Topic:</strong> ' + escapeHtml(topic.topic) + '<br>';
    html += '<strong>Completed:</strong> ' + new Date().toLocaleString() + '</p><hr>';
    if (q.images && q.images.length) {
      q.images.forEach(function (img) {
        if (!img || !img.src) return;
        html += '<img src="' + escapeHtml(img.src) + '" alt="' + escapeHtml(img.alt || '') + '" style="max-width:100%; height:auto; border:1px solid #ddd; border-radius:8px; display:block; margin-bottom:0.4rem;">';
        if (img.caption) html += '<p style="font-size:0.85rem; color:#666; margin-top:0;">' + escapeHtml(img.caption) + '</p>';
      });
    }
    html += '<p><strong>Question [' + q.marks + ' marks]:</strong> ' + escapeHtml(q.question) + '</p>';
    html += '<p><strong>My answer:</strong></p><div class="block">' + escapeHtml(answerText) + '</div>';
    html += '<p><strong>Mark awarded:</strong> ' + escapeHtml(feedback.markAwarded || ('— / ' + q.marks)) + '</p>';
    if (feedback.whyThisMark) html += '<p><strong>Why this mark was awarded:</strong></p><div class="block">' + escapeHtml(feedback.whyThisMark) + '</div>';
    if (feedback.whatWasDoneWell) html += '<p><strong>What was done well:</strong></p><div class="block">' + escapeHtml(feedback.whatWasDoneWell) + '</div>';
    if (feedback.whatIsMissing) html += '<p><strong>What is missing or needs development:</strong></p><div class="block">' + escapeHtml(feedback.whatIsMissing) + '</div>';
    if (feedback.nextStep) html += '<p><strong>Next step:</strong></p><div class="block">' + escapeHtml(feedback.nextStep) + '</div>';
    if (feedback.followUpQuestion) html += '<p><strong>Follow-up question:</strong></p><div class="block">' + escapeHtml(feedback.followUpQuestion) + '</div>';
    html += '<p><em>Use your browser’s Print option and choose “Save as PDF” if you want a PDF copy.</em></p>';
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

  /* ---------------- Init ---------------- */

  document.addEventListener('DOMContentLoaded', function () {
    listMount = document.getElementById('sblRevisionTopicList');
    workspaceMount = document.getElementById('sblRevisionWorkspace');
    if (!listMount || !workspaceMount) return;
    renderTopicList();
  });

})();
