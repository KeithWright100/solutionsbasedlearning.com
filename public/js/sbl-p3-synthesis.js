/* SBL — Paper 3 synthesis maps: interactive mind map explorer. */
(function () {
  var MAPS = window.SBL_P3_MAPS || [];
  var UNITS = {
    '4': { name: 'Unit 4: Power, places and networks', short: 'Unit 4', col: '#2563eb', fill: '#eff6ff' },
    '5': { name: 'Unit 5: Human development and diversity', short: 'Unit 5', col: '#7c3aed', fill: '#f5f3ff' },
    '6': { name: 'Unit 6: Global risks and resilience', short: 'Unit 6', col: '#c2410c', fill: '#fff7ed' },
    'C': { name: 'Core (Paper 2)', short: 'Core', col: '#0f766e', fill: '#f0fdfa' }
  };
  var ORDER = ['4', '5', '6', 'C'];
  var CONC = {
    place: { name: 'Places', col: '#0e7490', fill: '#ecfeff', def: 'Places are locations with their own characteristics, at every scale from local to global. They are connected to other places, are seen differently by different people, and change over time.' },
    process: { name: 'Processes', col: '#a16207', fill: '#fefce8', def: 'Processes are the human and physical mechanisms that cause change over time, such as flows of trade, migration, diffusion and globalisation.' },
    power: { name: 'Power', col: '#be123c', fill: '#fff1f2', def: 'Power is the ability to influence decisions and bring about change. Ask who decides, who gains and who loses, at each scale.' },
    possibility: { name: 'Possibilities', col: '#15803d', fill: '#f0fdf4', def: 'Possibilities are the alternative outcomes, futures and solutions. Ask what could happen next, and how certain we can be.' }
  };
  var CORDER = ['place', 'process', 'power', 'possibility'];
  var CMAP = window.SBL_P3_CONCEPT || {}, LENS = window.SBL_P3_LENS || {};
  var W = 1000, H = 700, CX = 500, CY = 350, NW = 200, NH = 66;
  var NS = 'http://www.w3.org/2000/svg';

  var root = document.getElementById('p3-app');
  if (!root || !MAPS.length) return;

  var st = { map: 0, mode: 'explore', sel: null, step: 0, pick: [], hidden: {}, lens: null };
  var pos = {};

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function el(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function wrap(text, max) {
    var words = text.split(' '), lines = [], cur = '';
    words.forEach(function (w) {
      if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; }
      else cur = (cur + ' ' + w).trim();
    });
    if (cur) lines.push(cur);
    return lines;
  }
  function M() { return MAPS[st.map]; }
  function node(id) { return M().nodes.filter(function (n) { return n.id === id; })[0]; }
  function edgesOf(id) { return M().edges.filter(function (e) { return e[0] === id || e[1] === id; }); }
  function visible(n) { return !st.hidden[n.u]; }
  var REFS = window.SBL_P3_REFS || { def: {}, over: {} }, SUB = window.SBL_P3_SUB || {}, EVAL = window.SBL_P3_EVAL || {};
  function ref(n) { if (n.u === 'C') return ''; var o = REFS.over[M().id] || {}; return o[n.id] || REFS.def[n.id] || ''; }
  function conc(n) { return (CMAP[M().id] || {})[n.id] || ''; }
  function pal(n) { return st.mode === 'concepts' && conc(n) ? CONC[conc(n)] : UNITS[n.u]; }
  function cchip(n) { var c = CONC[conc(n)]; return c ? '<span class="p3-chip" style="background:' + c.fill + ';color:' + c.col + ';border-color:' + c.col + '">Concept: ' + c.name + '</span>' : ''; }
  function tagOf(n) { return n.u === 'C' ? 'CORE' : (ref(n) || 'U' + n.u); }

  /* ---------- skeleton ---------- */
  root.innerHTML =
    '<div class="p3-pick" role="tablist" aria-label="Practice essays"></div>' +
    '<div class="p3-bar">' +
      '<div class="p3-modes" role="group" aria-label="Mode">' +
        '<button type="button" data-mode="explore">Explore</button>' +
        '<button type="button" data-mode="route">Essay route</button>' +
        '<button type="button" data-mode="link">Link challenge</button>' +
        '<button type="button" data-mode="concepts">4Ps lens</button>' +
      '</div>' +
      '<div class="p3-legend" aria-label="Show or hide units"></div>' +
      '<div class="p3-legend p3-legend--c" aria-label="Choose a concept lens" hidden></div>' +
    '</div>' +
    '<div class="p3-stage">' +
      '<div class="p3-canvas"><svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-labelledby="p3-svg-title"><title id="p3-svg-title">Synthesis mind map</title></svg></div>' +
      '<aside class="p3-panel" aria-live="polite"></aside>' +
    '</div>' +
    '<div class="p3-list"></div>';

  var pickEl = root.querySelector('.p3-pick');
  var legendEl = root.querySelector('.p3-legend');
  var cLegendEl = root.querySelector('.p3-legend--c');
  var svg = root.querySelector('svg');
  var panel = root.querySelector('.p3-panel');
  var listEl = root.querySelector('.p3-list');

  MAPS.forEach(function (m, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab');
    b.innerHTML = '<span>Essay ' + (i + 1) + '</span>' + esc(m.short);
    b.addEventListener('click', function () { st.map = i; st.sel = null; st.step = 0; st.pick = []; st.revealed = false; layout(); draw(); });
    pickEl.appendChild(b);
  });
  ORDER.forEach(function (u) {
    var b = document.createElement('button');
    b.type = 'button'; b.dataset.u = u;
    b.innerHTML = '<i style="background:' + UNITS[u].col + '"></i>' + UNITS[u].short;
    b.title = 'Show or hide ' + UNITS[u].name;
    b.addEventListener('click', function () { st.hidden[u] = !st.hidden[u]; if (st.sel && node(st.sel).u === u) st.sel = null; draw(); });
    legendEl.appendChild(b);
  });
  CORDER.forEach(function (c) {
    var b = document.createElement('button');
    b.type = 'button'; b.dataset.c = c;
    b.innerHTML = '<i style="background:' + CONC[c].col + '"></i>' + CONC[c].name;
    b.addEventListener('click', function () { st.lens = st.lens === c ? null : c; draw(); });
    cLegendEl.appendChild(b);
  });
  function setMode(md) { var re = (md === 'concepts') !== (st.mode === 'concepts'); st.mode = md; st.sel = null; st.pick = []; st.step = 0; st.revealed = false; if (re) layout(); draw(); }
  root.querySelectorAll('.p3-modes button').forEach(function (b) {
    b.addEventListener('click', function () { setMode(b.dataset.mode); });
  });

  /* ---------- layout ---------- */
  function layout() {
    var ns = M().nodes.slice().sort(st.mode === 'concepts'
      ? function (a, b) { return CORDER.indexOf(conc(a)) - CORDER.indexOf(conc(b)) || ORDER.indexOf(a.u) - ORDER.indexOf(b.u); }
      : function (a, b) { return ORDER.indexOf(a.u) - ORDER.indexOf(b.u); });
    var n = ns.length, rx = 382, ry = n > 10 ? 286 : 268;
    NW = n > 10 ? 182 : 200;
    pos = {};
    ns.forEach(function (nd, i) {
      var a = -Math.PI / 2 - Math.PI / n + (i * 2 * Math.PI / n);
      pos[nd.id] = { x: CX + rx * Math.cos(a), y: CY + ry * Math.sin(a) };
    });
  }
  function ctrl(a, b) {
    var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    var dx = mx - CX, dy = (my - CY) * 1.4, d = Math.sqrt(dx * dx + dy * dy);
    if (d < 230) {
      // chord passes near the centre: bend it around the question box
      var px = -(b.y - a.y), py = b.x - a.x, pl = Math.sqrt(px * px + py * py) || 1;
      px /= pl; py /= pl;
      if (px * dx + py * dy < 0) { px = -px; py = -py; }
      return { x: CX + px * 420, y: CY + py * 330 };
    }
    return { x: mx + (CX - mx) * 0.25, y: my + (CY - my) * 0.25 };
  }
  /* ---------- graph helpers ---------- */
  function path(a, b) {
    var prev = {}, q = [a], seen = {}; seen[a] = 1;
    while (q.length) {
      var c = q.shift();
      if (c === b) break;
      edgesOf(c).forEach(function (e) {
        var o = e[0] === c ? e[1] : e[0];
        if (!seen[o] && visible(node(o))) { seen[o] = 1; prev[o] = c; q.push(o); }
      });
    }
    if (!seen[b]) return null;
    var p = [b]; while (p[0] !== a) p.unshift(prev[p[0]]);
    return p;
  }
  function edgeBetween(a, b) { return M().edges.filter(function (e) { return (e[0] === a && e[1] === b) || (e[0] === b && e[1] === a); })[0]; }

  /* ---------- what is highlighted ---------- */
  function focus() {
    var nodes = {}, edges = {};
    var m = M();
    if (st.mode === 'explore' && st.sel) {
      nodes[st.sel] = 1;
      edgesOf(st.sel).forEach(function (e) { edges[m.edges.indexOf(e)] = 1; nodes[e[0]] = 1; nodes[e[1]] = 1; });
      return { nodes: nodes, edges: edges, labels: true };
    }
    if (st.mode === 'route') {
      var s = m.route[st.step];
      if (!s.n.length) return null;
      s.n.forEach(function (id) { nodes[id] = 1; });
      m.edges.forEach(function (e, i) { if (nodes[e[0]] && nodes[e[1]]) edges[i] = 1; });
      return { nodes: nodes, edges: edges, labels: true };
    }
    if (st.mode === 'concepts') {
      if (!st.lens) return null;
      m.nodes.forEach(function (n) { if (conc(n) === st.lens) nodes[n.id] = 1; });
      var lensNodes = Object.keys(nodes);
      m.edges.forEach(function (e, i) { if (lensNodes.indexOf(e[0]) >= 0 || lensNodes.indexOf(e[1]) >= 0) { edges[i] = 1; nodes[e[0]] = nodes[e[0]] || 2; nodes[e[1]] = nodes[e[1]] || 2; } });
      return { nodes: nodes, edges: edges, labels: true };
    }
    if (st.mode === 'link' && st.pick.length) {
      st.pick.forEach(function (id) { nodes[id] = 1; });
      if (st.revealed && st.pick.length === 2) {
        var p = path(st.pick[0], st.pick[1]);
        if (p) for (var i = 0; i < p.length; i++) { nodes[p[i]] = 1; if (i) edges[m.edges.indexOf(edgeBetween(p[i - 1], p[i]))] = 1; }
        return { nodes: nodes, edges: edges, labels: true };
      }
      return { nodes: nodes, edges: edges, labels: false };
    }
    return null;
  }

  /* ---------- draw ---------- */
  function draw() {
    var m = M();
    pickEl.querySelectorAll('button').forEach(function (b, i) { b.classList.toggle('is-on', i === st.map); b.setAttribute('aria-selected', i === st.map); });
    root.querySelectorAll('.p3-modes button').forEach(function (b) { b.classList.toggle('is-on', b.dataset.mode === st.mode); });
    legendEl.hidden = st.mode === 'concepts'; cLegendEl.hidden = st.mode !== 'concepts';
    cLegendEl.querySelectorAll('button').forEach(function (b) { b.classList.toggle('is-on', st.lens === b.dataset.c); b.classList.toggle('is-off', !!st.lens && st.lens !== b.dataset.c); });
    legendEl.querySelectorAll('button').forEach(function (b) {
      var used = m.nodes.some(function (n) { return n.u === b.dataset.u; });
      b.hidden = !used; b.classList.toggle('is-off', !!st.hidden[b.dataset.u]);
    });

    while (svg.childNodes.length > 1) svg.removeChild(svg.lastChild);
    var f = focus();
    var gE = el('g', {}, svg), gL = el('g', {}, svg);

    // spokes from centre
    m.nodes.forEach(function (n) {
      if (!visible(n)) return;
      var p = pos[n.id];
      el('line', { x1: CX, y1: CY, x2: p.x, y2: p.y, stroke: pal(n).col, 'stroke-width': 1, 'stroke-dasharray': '3 5', opacity: f && !f.nodes[n.id] ? 0.08 : 0.28 }, gE);
    });
    // edges
    m.edges.forEach(function (e, i) {
      var a = node(e[0]), b = node(e[1]);
      if (!a || !b || !visible(a) || !visible(b)) return;
      var pa = pos[e[0]], pb = pos[e[1]], c = ctrl(pa, pb);
      var on = f && f.edges[i];
      el('path', { d: 'M' + pa.x + ' ' + pa.y + ' Q' + c.x + ' ' + c.y + ' ' + pb.x + ' ' + pb.y, fill: 'none',
        stroke: on ? '#0f172a' : '#94a3b8', 'stroke-width': on ? 2.6 : 1.4, opacity: f ? (on ? 1 : 0.15) : 0.55 }, gE);
      if (on && f.labels) {
        var lx = 0.25 * pa.x + 0.5 * c.x + 0.25 * pb.x, ly = 0.25 * pa.y + 0.5 * c.y + 0.25 * pb.y;
        var t = e[2], w = t.length * 7.4 + 20;
        el('rect', { x: lx - w / 2, y: ly - 12, width: w, height: 24, rx: 12, fill: '#0f172a' }, gL);
        var tx = el('text', { x: lx, y: ly + 4, 'text-anchor': 'middle', 'font-size': 13, fill: '#fff', 'font-weight': 600 }, gL);
        tx.textContent = t;
      }
    });
    // centre question
    var ql = wrap(m.q, 32), qh = ql.length * 21 + 42;
    el('rect', { x: CX - 170, y: CY - qh / 2, width: 340, height: qh, rx: 18, fill: '#0f172a' }, svg);
    var tl = el('text', { x: CX, y: CY - qh / 2 + 22, 'text-anchor': 'middle', 'font-size': 10.5, fill: '#fcd34d', 'font-weight': 700, 'letter-spacing': '1.5' }, svg);
    tl.textContent = '16-MARK PRACTICE ESSAY';
    ql.forEach(function (l, i) {
      var t = el('text', { x: CX, y: CY - qh / 2 + 46 + i * 21, 'text-anchor': 'middle', 'font-size': 16, fill: '#fff', 'font-weight': 600 }, svg);
      t.textContent = l;
    });
    // nodes
    m.nodes.forEach(function (n) {
      if (!visible(n)) return;
      var p = pos[n.id], U = pal(n);
      var dim = f && !f.nodes[n.id], half = f && f.nodes[n.id] === 2, sel = st.sel === n.id || st.pick.indexOf(n.id) >= 0;
      var g = el('g', { class: 'p3-node', tabindex: 0, role: 'button', 'aria-label': n.t + ' (' + UNITS[n.u].short + ')', opacity: dim ? 0.3 : (half ? 0.75 : 1) }, svg);
      el('rect', { x: p.x - NW / 2, y: p.y - NH / 2, width: NW, height: NH, rx: 12, fill: sel ? U.col : U.fill, stroke: U.col, 'stroke-width': sel ? 3 : 2 }, g);
      el('rect', { x: p.x - NW / 2, y: p.y - NH / 2, width: 8, height: NH, rx: 4, fill: U.col }, g);
      var lines = wrap(n.t, 21).slice(0, 2);
      lines.forEach(function (l, i) {
        var t = el('text', { x: p.x + 4, y: p.y + (i - (lines.length - 1) / 2) * 18 + 6, 'text-anchor': 'middle', 'font-size': 15, 'font-weight': 700, fill: sel ? '#fff' : '#0f172a' }, g);
        t.textContent = l;
      });
      var tag = el('text', { x: p.x + NW / 2 - 8, y: p.y - NH / 2 + 13, 'text-anchor': 'end', 'font-size': 10.5, 'font-weight': 700, fill: sel ? '#fff' : U.col }, g);
      tag.textContent = tagOf(n);
      g.addEventListener('click', function () { clickNode(n.id); });
      g.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); clickNode(n.id); } });
    });
    svg.appendChild(gL);
    drawPanel();
    drawList();
  }

  function clickNode(id) {
    if (st.mode === 'concepts') { st.mode = 'explore'; layout(); }
    if (st.mode === 'route') st.mode = 'explore';
    if (st.mode === 'link') {
      if (st.pick.length >= 2 || st.revealed) { st.pick = []; st.revealed = false; }
      if (st.pick.indexOf(id) < 0) st.pick.push(id);
    } else st.sel = st.sel === id ? null : id;
    draw();
  }

  function chip(n) { var U = UNITS[n.u], r = ref(n); return '<span class="p3-chip" style="background:' + U.fill + ';color:' + U.col + ';border-color:' + U.col + '">' + esc(n.u === 'C' ? n.core : (r ? U.short + ' · ' + r + ' ' + (SUB[r] || '') : U.name)) + '</span>'; }
  function evalBox() {
    var ev = EVAL[M().id] || [];
    return ev.length ? '<h4>Ways to evaluate</h4><ul class="p3-ev">' + ev.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '';
  }
  function synthCount() {
    var subs = {}; M().nodes.forEach(function (n) { var r = ref(n) || (n.u === 'C' ? n.core : ''); if (r) subs[r] = 1; });
    return Object.keys(subs).length;
  }

  function drawPanel() {
    var m = M(), h = '';
    if (st.mode === 'explore') {
      if (!st.sel) {
        h = '<h3>Explore the map</h3><p class="p3-focus">Concepts: ' + esc(m.focus) + '</p><p>Each box is an idea you could use in this essay. The colour shows which unit it comes from. Lines show the links between ideas.</p><p><b>Click an idea</b> to see the key point, evidence, an evaluation point and how it connects to other ideas.</p><div class="p3-band"><b>Reaching the top band</b><span><i>9–12 marks:</i> <b>either</b> link several well-evidenced themes from different parts of the syllabus <b>or</b> evaluate throughout with a critical conclusion.</span><span><i>13–16 marks:</i> do <b>both</b>.</span><span>This map links ideas from ' + synthCount() + ' syllabus areas; aim to use at least three in your answer.</span></div>' + evalBox();
      } else {
        var n = node(st.sel);
        h = chip(n) + ' ' + cchip(n) + '<h3>' + esc(n.t) + '</h3>' +
          '<p><b>Key idea:</b> ' + esc(n.idea) + '</p>' +
          '<p><b>Evidence:</b> ' + esc(n.ev) + '</p>' +
          '<p class="p3-eval"><b>Evaluate:</b> ' + esc(n.eval) + '</p>';
        var es = edgesOf(n.id).filter(function (e) { return visible(node(e[0])) && visible(node(e[1])); });
        if (es.length) {
          h += '<h4>Connections</h4><ul class="p3-links">';
          es.forEach(function (e) {
            var o = node(e[0] === n.id ? e[1] : e[0]);
            var dir = e[0] === n.id ? esc(n.t) + ' <b>' + esc(e[2]) + '</b> ' + esc(o.t) : esc(o.t) + ' <b>' + esc(e[2]) + '</b> ' + esc(n.t);
            h += '<li><button type="button" data-go="' + o.id + '" style="border-left-color:' + UNITS[o.u].col + '">' + dir + '<small>' + esc(e[3]) + '</small></button></li>';
          });
          h += '</ul>';
        }
      }
    } else if (st.mode === 'concepts') {
      var L = LENS[m.id] || {};
      if (!st.lens) {
        h = '<h3>The 4Ps lens</h3><p>Every idea on this map is coloured by its main key concept. Pick a concept to see the ideas that use it, how they link to the others, and a question to ask through that lens.</p><div class="p3-cards">';
        CORDER.forEach(function (c) {
          var k = m.nodes.filter(function (n) { return conc(n) === c; }).length;
          h += '<button type="button" data-lens="' + c + '" style="border-left-color:' + CONC[c].col + '"><b style="color:' + CONC[c].col + '">' + CONC[c].name + '</b> <small>' + k + ' idea' + (k === 1 ? '' : 's') + '</small><span>' + esc(CONC[c].def) + '</span></button>';
        });
        h += '</div><div class="p3-band"><b>Using the concepts to evaluate</b><span>Link across the concepts: a <i>process</i> changes a <i>place</i>, <i>power</i> decides who gains and who loses, and <i>possibilities</i> ask what could happen next.</span><span>A paragraph that uses two or more concepts together is usually more evaluative than one that uses a single concept.</span></div>';
      } else {
        var C = CONC[st.lens];
        h = '<p class="p3-step" style="color:' + C.col + '">Concept lens</p><h3 style="color:' + C.col + '">' + C.name + '</h3><p>' + esc(C.def) + '</p>';
        if (L[st.lens]) h += '<p class="p3-eval"><b>Ask for this essay:</b> ' + esc(L[st.lens]) + '</p>';
        var ins = m.nodes.filter(function (n) { return conc(n) === st.lens; });
        h += '<h4>Ideas through this lens</h4><ul class="p3-links">';
        ins.forEach(function (n) { h += '<li><button type="button" data-go="' + n.id + '" style="border-left-color:' + C.col + '">' + esc(n.t) + '<small>' + esc(n.idea) + '</small></button></li>'; });
        h += '</ul><p class="p3-hint">Faded boxes are ideas from other concepts that link to these. Click any idea to explore it.</p>';
        h += '<div class="p3-nav">' + CORDER.filter(function (c) { return c !== st.lens; }).map(function (c) { return '<button type="button" data-lens="' + c + '" style="background:' + CONC[c].col + ';border-color:' + CONC[c].col + '">' + CONC[c].name + '</button>'; }).join('') + '</div>';
      }
    } else if (st.mode === 'route') {
      var s = m.route[st.step];
      h = '<p class="p3-step">Step ' + (st.step + 1) + ' of ' + m.route.length + '</p><h3>' + esc(s.h) + '</h3><p>' + esc(s.tx) + '</p>';
      if (s.n.length) h += '<p class="p3-uses">Ideas used: ' + s.n.map(function (id) { var o = node(id); return '<span style="color:' + UNITS[o.u].col + '">' + esc(o.t) + '</span>'; }).join(' · ') + '</p>';
      h += '<div class="p3-nav"><button type="button" data-step="-1"' + (st.step ? '' : ' disabled') + '>&larr; Back</button><button type="button" data-step="1"' + (st.step < m.route.length - 1 ? '' : ' disabled') + '>Next &rarr;</button></div>';
      if (st.step === m.route.length - 1) h += evalBox();
      h += '<p class="p3-hint">The essay route is one possible plan. Try building a different argument from the same ideas.</p>';
    } else {
      if (st.pick.length < 2) {
        h = '<h3>Link challenge</h3><p>Pick <b>two ideas</b>, ideally from different units. Then explain how they are linked before you reveal the model link.</p>' +
          (st.pick.length ? '<p>First idea: <b>' + esc(node(st.pick[0]).t) + '</b>. Now pick a second.</p>' : '');
      } else {
        var a = node(st.pick[0]), b = node(st.pick[1]);
        h = '<h3>How are these linked?</h3><p>' + chip(a) + '<br><b>' + esc(a.t) + '</b></p><p>' + chip(b) + '<br><b>' + esc(b.t) + '</b></p>' +
          '<label class="p3-lab" for="p3-ans">Write your linking sentence</label><textarea id="p3-ans" rows="4" placeholder="… because … This means that …"></textarea>';
        if (!st.revealed) h += '<button type="button" class="p3-btn" data-reveal="1">Reveal the model link</button>';
        else {
          var p = path(a.id, b.id);
          if (!p) h += '<p class="p3-eval">There is no link between these two in the model map. Can you justify one with evidence? That is a good test of synthesis.</p>';
          else {
            h += '<h4>' + (p.length === 2 ? 'Direct link' : 'Linked through a chain') + '</h4><ol class="p3-chain">';
            for (var i = 1; i < p.length; i++) {
              var e = edgeBetween(p[i - 1], p[i]);
              h += '<li><b>' + esc(node(e[0]).t) + '</b> ' + esc(e[2]) + ' <b>' + esc(node(e[1]).t) + '</b><small>' + esc(e[3]) + '</small></li>';
            }
            h += '</ol>';
          }
          h += '<button type="button" class="p3-btn p3-btn--ghost" data-again="1">Try another pair</button>';
        }
      }
    }
    var keep = panel.querySelector('#p3-ans'); var txt = keep ? keep.value : '';
    panel.innerHTML = h;
    var ta = panel.querySelector('#p3-ans'); if (ta && txt) ta.value = txt;
    panel.querySelectorAll('[data-go]').forEach(function (b) { b.addEventListener('click', function () { if (st.mode === 'concepts') { st.mode = 'explore'; layout(); } st.sel = b.dataset.go; draw(); }); });
    panel.querySelectorAll('[data-lens]').forEach(function (b) { b.addEventListener('click', function () { st.lens = b.dataset.lens; draw(); }); });
    panel.querySelectorAll('[data-step]').forEach(function (b) { b.addEventListener('click', function () { st.step += +b.dataset.step; draw(); }); });
    var r = panel.querySelector('[data-reveal]'); if (r) r.addEventListener('click', function () { st.revealed = true; draw(); });
    var ag = panel.querySelector('[data-again]'); if (ag) ag.addEventListener('click', function () { st.pick = []; st.revealed = false; draw(); });
  }

  function drawList() {
    var m = M(), h = '<h3>All ideas in this map</h3><div class="p3-cols">';
    ORDER.forEach(function (u) {
      var ns = m.nodes.filter(function (n) { return n.u === u; });
      if (!ns.length) return;
      h += '<div><h4 style="color:' + UNITS[u].col + '">' + esc(UNITS[u].name) + '</h4><ul>';
      ns.forEach(function (n) { h += '<li><button type="button" data-id="' + n.id + '">' + esc(n.t) + '</button></li>'; });
      h += '</ul></div>';
    });
    listEl.innerHTML = h + '</div>';
    listEl.querySelectorAll('[data-id]').forEach(function (b) {
      b.addEventListener('click', function () {
        st.hidden[node(b.dataset.id).u] = false;
        clickNode(b.dataset.id);
        (window.innerWidth < 1100 ? panel : root.querySelector('.p3-stage')).scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  var hash = (location.hash || '').slice(1);
  MAPS.forEach(function (m, i) { if (m.id === hash) st.map = i; });
  layout(); draw();
})();
