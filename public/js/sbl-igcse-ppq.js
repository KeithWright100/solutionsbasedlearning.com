/* ============================================================
   SBL — IGCSE Geography past paper questions (self-marking)
   Renders window.SBL_IGCSE_PPQ (a data file that sits behind the
   login, next to each topic's past-papers page) as question cards
   with the exam sources beside each question.

   • Multiple choice: checked instantly against the mark scheme.
   • Written answers: marked by the existing SBL PPQ Marker
     Copilot Studio agent through /api/mark-ppq (no new API route).
   • Drawing tasks (plot / complete a graph): done on paper, then
     the student compares with the mark scheme and scores it.
   • 🎤 Speak and 🔊 Listen come from sbl-voice.js; a photo of a
     handwritten answer is read into the box with Tesseract.js (the
     same approach as sbl-revision.js) for the student to check.
   • Each marked attempt is saved to the student's account under the
     matching lesson id (key "ib_q_ppq_<paper>-<part>") so it shows
     in that lesson's PPQ column on the teacher Class Sheet.
   ============================================================ */
(function () {
  (function () {
    if (window.SBLVoice || document.querySelector('script[src="/js/sbl-voice.js"]')) return;
    var s = document.createElement('script'); s.src = '/js/sbl-voice.js'; s.defer = true; document.head.appendChild(s);
  })();

  var D = window.SBL_IGCSE_PPQ;
  var STORE = 'sbl-igcse-ppq-v1';
  var TESSERACT = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
  var results = {};
  try { results = JSON.parse(localStorage.getItem(STORE) || '{}') || {}; } catch (e) { results = {}; }

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function para(s) { return esc(s).replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>'); }
  function $(id) { return document.getElementById(id); }
  function announce(m) { var a = $('ppqAnnounce'); if (a) { a.textContent = ''; setTimeout(function () { a.textContent = m; }, 30); } }
  function persist() { try { localStorage.setItem(STORE, JSON.stringify(results)); } catch (e) {} }

  function record(p, awarded, extra) {
    results[p.key] = { awarded: awarded, marks: p.marks, at: new Date().toISOString() };
    persist(); renderSummary();
    var patch = {};
    patch['ib_q_ppq_' + p.key] = Object.assign({
      question: (p.paperLabel + ' Q' + p.id + ': ' + p.text).slice(0, 600),
      marks: p.marks, awarded: awarded, page: location.pathname, at: new Date().toISOString(), source: 'IGCSE past paper'
    }, extra || {});
    fetch('/api/progress', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lessonId: p.lesson, patch: patch }) }).catch(function () {});
  }

  /* ---------------- filters ---------------- */
  var params = new URLSearchParams(location.search);
  var state = { lesson: params.get('lesson') || '', paper: params.get('paper') || '' };

  function lessonTitle(id) { var l = D.lessons[id]; return l ? 'Lesson ' + l.n + ': ' + l.title : id; }
  function visible() {
    return D.parts.filter(function (p) { return (!state.lesson || p.lesson === state.lesson) && (!state.paper || p.paper === state.paper); });
  }

  function renderControls() {
    var counts = {}; D.parts.forEach(function (p) { counts[p.lesson] = (counts[p.lesson] || 0) + 1; });
    var lessonOpts = '<option value="">All syllabus areas (' + D.parts.length + ' questions)</option>' +
      Object.keys(D.lessons).sort(function (a, b) { return D.lessons[a].n - D.lessons[b].n; }).filter(function (id) { return counts[id]; })
        .map(function (id) { return '<option value="' + id + '"' + (state.lesson === id ? ' selected' : '') + '>' + esc(lessonTitle(id)) + ' (' + counts[id] + ')</option>'; }).join('');
    var papers = []; D.parts.forEach(function (p) { if (papers.indexOf(p.paper) < 0) papers.push(p.paper); });
    var paperOpts = '<option value="">All papers</option>' + papers.map(function (k) {
      var lab = D.parts.filter(function (p) { return p.paper === k; })[0].paperLabel;
      return '<option value="' + k + '"' + (state.paper === k ? ' selected' : '') + '>' + esc(lab) + '</option>';
    }).join('');
    $('ppqControls').innerHTML =
      '<label><span>Syllabus area</span><select id="ppqLesson">' + lessonOpts + '</select></label>' +
      '<label><span>Paper</span><select id="ppqPaper">' + paperOpts + '</select></label>' +
      '<div class="ppq-summary" id="ppqSummary" aria-live="polite"></div>';
    $('ppqLesson').addEventListener('change', function () { state.lesson = this.value; update(); });
    $('ppqPaper').addEventListener('change', function () { state.paper = this.value; update(); });
  }
  function update() {
    var q = []; if (state.lesson) q.push('lesson=' + state.lesson); if (state.paper) q.push('paper=' + state.paper);
    history.replaceState(null, '', location.pathname + (q.length ? '?' + q.join('&') : ''));
    renderList(); renderSummary();
  }
  function renderSummary() {
    var v = visible(), done = 0, aw = 0, mx = 0, tot = 0;
    v.forEach(function (p) { tot += p.marks; var r = results[p.key]; if (r && typeof r.awarded === 'number') { done++; aw += r.awarded; mx += p.marks; } });
    var el = $('ppqSummary'); if (!el) return;
    el.innerHTML = '<b>' + done + '</b> of ' + v.length + ' questions marked &middot; score <b>' + aw + ' / ' + mx + '</b>' +
      (mx ? ' (' + Math.round(aw / mx * 100) + '%)' : '') + ' &middot; ' + tot + ' marks available';
  }

  /* ---------------- cards ---------------- */
  function sourcesHtml(p) {
    if (!p.sources.length) return '';
    return '<aside class="ppq-src" aria-label="Sources for this question"><p class="ppq-src__h">Resource Booklet</p>' +
      p.sources.map(function (s) {
        var cap = s.figs.length ? 'Figure ' + s.figs.join(' / Figure ') : 'Source';
        return '<figure><button type="button" class="ppq-zoom" data-src="' + D.img + s.src + '" aria-label="Enlarge ' + esc(cap) + '">' +
          '<img src="' + D.img + s.src + '" alt="' + esc(cap) + ' from the Resource Booklet" loading="lazy"></button><figcaption>' + esc(cap) + ' &middot; tap to enlarge</figcaption></figure>';
      }).join('') + '</aside>';
  }
  function cardHtml(p, i) {
    var r = results[p.key];
    var html = '<article class="ppq-card' + (p.sources.length ? ' has-src' : '') + '" id="ppq-' + p.key + '" data-i="' + i + '">';
    html += '<div class="ppq-main"><div class="ppq-meta"><span class="ppq-chip">' + esc(p.paperLabel) + '</span><span class="ppq-chip ppq-chip--q">Question ' + esc(p.id) + '</span>' +
      '<span class="ppq-chip ppq-chip--m">' + p.marks + ' mark' + (p.marks === 1 ? '' : 's') + '</span>' +
      (r ? '<span class="ppq-chip ppq-chip--done">Last score ' + r.awarded + '/' + p.marks + '</span>' : '') + '</div>';
    html += '<a class="ppq-lesson" href="' + esc((D.lessons[p.lesson] || {}).href || '#') + '">' + esc(lessonTitle(p.lesson)) + '</a>';
    if (p.intro) html += '<p class="ppq-intro">' + esc(p.intro) + '</p>';
    html += '<p class="ppq-text" data-sbl-listen>' + esc(p.text) + '</p>';
    if (p.type === 'mcq') {
      html += '<fieldset class="ppq-opts"><legend class="sbl-sr-only">Choose one answer</legend>' + p.options.map(function (o) {
        return '<label><input type="radio" name="opt-' + p.key + '" value="' + o[0] + '"><b>' + o[0] + '</b><span>' + esc(o[1]) + '</span></label>';
      }).join('') + '</fieldset><button type="button" class="ppq-btn" data-act="mcq">Check answer</button>';
    } else if (p.type === 'draw') {
      html += '<p class="ppq-note">This part asks you to draw or complete a graph. Do it on paper or a printout of the figure, then compare your work with the mark scheme and give yourself a mark.</p>' +
        '<button type="button" class="ppq-btn" data-act="showms">Show mark scheme</button>';
    } else {
      html += '<label class="sbl-sr-only" for="ans-' + p.key + '">Your answer</label><textarea class="ppq-answer" id="ans-' + p.key + '" rows="' + (p.marks >= 8 ? 12 : p.marks >= 3 ? 6 : 3) + '" placeholder="Type, speak or upload your answer…"></textarea>' +
        '<div class="ppq-tools"><button type="button" class="ppq-photo" data-act="photo">📷 Upload a photo of your written answer</button><input type="file" accept="image/*" capture="environment" hidden data-photo>' +
        '<span class="ppq-photo-status" role="status"></span></div>' +
        '<button type="button" class="ppq-btn" data-act="mark">Submit for marking &rarr;</button>';
    }
    html += '<div class="ppq-feedback" aria-live="polite"></div><div class="ppq-ms" hidden></div></div>';
    html += sourcesHtml(p) + '</article>';
    return html;
  }
  function renderList() {
    var v = visible(), wrap = $('ppqList');
    if (!v.length) { wrap.innerHTML = '<p class="ppq-note">No questions match this filter.</p>'; return; }
    var html = '', last = '';
    v.forEach(function (p) {
      var g = state.lesson ? p.paperLabel + ' — Question ' + p.q : (state.paper ? 'Question ' + p.q : p.paperLabel + ' — Question ' + p.q);
      if (g !== last) { html += '<h2 class="ppq-group">' + esc(g) + '</h2>'; last = g; }
      html += cardHtml(p, D.parts.indexOf(p));
    });
    wrap.innerHTML = html;
  }

  function msHtml(p) {
    return '<p class="ppq-ms__h">Mark scheme</p><div class="ppq-ms__body"><p>' + para(p.ms) + '</p></div>';
  }
  function showMs(card, p, selfScore) {
    var box = card.querySelector('.ppq-ms');
    box.hidden = false;
    var h = msHtml(p);
    if (selfScore) {
      var opts = ''; for (var m = 0; m <= p.marks; m++) opts += '<option value="' + m + '">' + m + '</option>';
      h += '<div class="ppq-self"><label>My mark <select data-self>' + opts + '</select> / ' + p.marks + '</label> <button type="button" class="ppq-btn ppq-btn--sm" data-act="saveself">Save my mark</button></div>';
    }
    box.innerHTML = h;
  }

  function feedbackHtml(p, f) {
    var m = String(f.markAwarded || '').match(/(\d+(?:\.\d+)?)/);
    var score = m ? Math.min(Number(m[1]), p.marks) : null;
    var h = '<div class="ppq-result"><div class="ppq-score">' + (score == null ? '—' : score) + ' / ' + p.marks + '</div><div class="ppq-fb" data-sbl-listen>';
    if (f.whyThisMark) h += '<p><b>Why this mark</b><br>' + esc(f.whyThisMark) + '</p>';
    if (f.whatWasDoneWell) h += '<p><b>What you did well</b><br>' + esc(f.whatWasDoneWell) + '</p>';
    if (f.whatIsMissing) h += '<p><b>What is missing</b><br>' + esc(f.whatIsMissing) + '</p>';
    if (f.nextStep) h += '<p><b>Next step</b><br>' + esc(f.nextStep) + '</p>';
    if (f.followUpQuestion) h += '<p><b>Follow-up question</b><br>' + esc(f.followUpQuestion) + '</p>';
    h += '</div></div><button type="button" class="ppq-btn ppq-btn--ghost" data-act="showms">Show the mark scheme</button>';
    return { html: h, score: score };
  }

  function mark(card, p) {
    var ta = card.querySelector('textarea'); var ans = ta.value.trim(); var fb = card.querySelector('.ppq-feedback');
    var btn = card.querySelector('[data-act="mark"]');
    if (!ans) { announce('Please write an answer first.'); ta.focus(); return; }
    btn.disabled = true; btn.textContent = 'Marking…';
    fb.innerHTML = '<p class="ppq-note" role="status">Marking your answer — this usually takes a few seconds…</p>';
    var q = p.paperLabel + ', Question ' + p.id + ' (' + D.topic + '). ' + (p.intro ? p.intro + ' ' : '') + p.text +
      (p.sources.length ? ' [The student can see the figure(s) referred to in the Resource Booklet; use the mark scheme to judge references to them.]' : '');
    fetch('/api/mark-ppq', { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: q, maxMark: p.marks, markingGuidance: p.ms, studentAnswer: ans }) })
      .then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d && d.error || 'Marking failed.'); return d; }); })
      .then(function (d) {
        var f = d.feedback || {}; var out = feedbackHtml(p, f);
        fb.innerHTML = out.html; announce('Marked: ' + (out.score == null ? 'no score returned' : out.score + ' out of ' + p.marks));
        if (out.score != null) record(p, out.score, { answer: ans.slice(0, 6000), markAwarded: f.markAwarded || '', whyThisMark: f.whyThisMark || '',
          whatWasDoneWell: f.whatWasDoneWell || '', whatIsMissing: f.whatIsMissing || '', nextStep: f.nextStep || '' });
        updateChip(card, p);
      })
      .catch(function (e) { fb.innerHTML = '<p class="ppq-err">Sorry, marking did not complete. ' + esc(e.message || '') + ' Please try again.</p>'; })
      .finally(function () { btn.disabled = false; btn.innerHTML = 'Submit for marking &rarr;'; });
  }
  function updateChip(card, p) {
    var r = results[p.key]; if (!r) return;
    var meta = card.querySelector('.ppq-meta'); var c = meta.querySelector('.ppq-chip--done');
    if (!c) { c = document.createElement('span'); c.className = 'ppq-chip ppq-chip--done'; meta.appendChild(c); }
    c.textContent = 'Last score ' + r.awarded + '/' + p.marks;
  }

  var tessP = null;
  function loadTess() {
    if (window.Tesseract) return Promise.resolve();
    if (tessP) return tessP;
    tessP = new Promise(function (res, rej) { var s = document.createElement('script'); s.src = TESSERACT; s.onload = res; s.onerror = function () { tessP = null; rej(new Error('Could not load the handwriting reader.')); }; document.head.appendChild(s); });
    return tessP;
  }
  function photo(card, file) {
    var st = card.querySelector('.ppq-photo-status'); var ta = card.querySelector('textarea'); var b = card.querySelector('[data-act="photo"]');
    b.disabled = true; st.textContent = 'Reading your handwriting… this can take a little while the first time.';
    loadTess().then(function () { return window.Tesseract.recognize(file, 'eng'); }).then(function (r) {
      var t = ((r && r.data && r.data.text) || '').trim(); b.disabled = false;
      if (!t) { st.textContent = 'We couldn’t read any text in that photo. Try a clearer, well-lit, straight-on photo, or type your answer.'; return; }
      ta.value = ta.value.trim() ? ta.value.trim() + '\n\n' + t : t;
      st.textContent = 'We added what we could read into the box. Check it and fix any mistakes before you submit — handwriting reading isn’t perfect.';
      ta.focus();
    }).catch(function () { b.disabled = false; st.textContent = 'Sorry, we couldn’t read that photo. Check your connection and try again, or type your answer.'; });
  }

  function onClick(e) {
    var z = e.target.closest('.ppq-zoom');
    if (z) { openZoom(z.getAttribute('data-src'), z.querySelector('img').alt); return; }
    var b = e.target.closest('[data-act]'); if (!b) return;
    var card = b.closest('.ppq-card'); var p = D.parts[+card.getAttribute('data-i')]; var act = b.getAttribute('data-act');
    if (act === 'mcq') {
      var sel = card.querySelector('input[type=radio]:checked');
      if (!sel) { announce('Choose an answer first.'); return; }
      var ok = sel.value === p.answer; var fb = card.querySelector('.ppq-feedback');
      card.querySelectorAll('.ppq-opts label').forEach(function (l) { var v = l.querySelector('input').value; l.classList.toggle('is-right', v === p.answer); l.classList.toggle('is-wrong', v === sel.value && !ok); });
      fb.innerHTML = '<div class="ppq-result"><div class="ppq-score">' + (ok ? 1 : 0) + ' / 1</div><div class="ppq-fb" data-sbl-listen><p><b>' + (ok ? 'Correct!' : 'Not quite — the answer is ' + p.answer + '.') + '</b></p></div></div>';
      showMs(card, p, false); record(p, ok ? 1 : 0, { answer: sel.value }); updateChip(card, p);
      announce(ok ? 'Correct.' : 'Incorrect. The answer is ' + p.answer + '.');
    } else if (act === 'mark') mark(card, p);
    else if (act === 'showms') showMs(card, p, p.type === 'draw');
    else if (act === 'saveself') { var v = +card.querySelector('[data-self]').value; record(p, v, { selfMarked: true }); updateChip(card, p); b.textContent = 'Saved ✓'; }
    else if (act === 'photo') card.querySelector('[data-photo]').click();
  }
  function openZoom(src, alt) {
    var o = document.createElement('div'); o.className = 'ppq-lightbox'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-modal', 'true');
    o.innerHTML = '<button type="button" class="ppq-lightbox__close" aria-label="Close">&times;</button><img src="' + src + '" alt="' + esc(alt) + '">';
    function close() { o.remove(); document.removeEventListener('keydown', key); }
    function key(ev) { if (ev.key === 'Escape') close(); }
    o.addEventListener('click', function (ev) { if (ev.target === o || ev.target.closest('.ppq-lightbox__close')) close(); });
    document.addEventListener('keydown', key); document.body.appendChild(o); o.querySelector('button').focus();
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!D || !$('ppqList')) return;
    renderControls(); renderList(); renderSummary();
    $('ppqList').addEventListener('click', onClick);
    $('ppqList').addEventListener('change', function (e) {
      if (e.target.matches('[data-photo]') && e.target.files && e.target.files[0]) photo(e.target.closest('.ppq-card'), e.target.files[0]);
    });
  });
})();
