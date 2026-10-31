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

  var st = { map: 0, mode: 'explore', sel: null, step: 0, pick: [], hidden: {}, lens: null, bstep: 'ideas', bsel: null, blink: null, bpair: null, q: '', open: {}, bpara: 0 };
  var pos = {};
  var MODELS = 4, LOCKS = window.SBL_P3_LOCKS || {}, PT = window.SBL_P3_PALETTE_TITLES || {};
  function isModel(i) { return (i === undefined ? st.map : i) < MODELS; }

  /* ---------- palette of every Paper 3 idea ---------- */
  var PALETTE = (function () {
    var seen = {}, out = [];
    MAPS.forEach(function (m) {
      m.nodes.forEach(function (n) {
        if (seen[n.id]) return; seen[n.id] = 1;
        var r = n.u === 'C' ? '' : (((REFS0().over[m.id] || {})[n.id]) || REFS0().def[n.id] || '');
        var cs = (CMAP[m.id] || {})[n.id] || [];
        out.push({ id: n.id, u: n.u, core: n.core, t: PT[n.id] || n.t, idea: n.idea, ref: r, cs: typeof cs === 'string' ? [cs] : cs });
      });
    });
    return out;
  })();
  function REFS0() { return window.SBL_P3_REFS || { def: {}, over: {} }; }
  function pitem(id) { return PALETTE.filter(function (p) { return p.id === id; })[0]; }
  function area(p) { return p.u === 'C' ? (p.core || 'Core').split(':')[0] : p.ref; }

  /* ---------- saved work (this browser only) ---------- */
  function key(id) { return 'sbl-p3-build-' + id; }
  function load(id) {
    var b = null;
    try { b = JSON.parse(localStorage.getItem(key(id)) || 'null'); } catch (e) { b = null; }
    if (!b) b = { placed: {}, links: [], plan: null, unlocked: false };
    if (!b.plan) b.plan = [{ h: 'Introduction', txt: '', ids: [] }, { h: 'Paragraph 1', txt: '', ids: [] }, { h: 'Paragraph 2', txt: '', ids: [] }, { h: 'Paragraph 3', txt: '', ids: [] }, { h: 'Conclusion', txt: '', ids: [] }];
    return b;
  }
  function save() { try { localStorage.setItem(key(M().id), JSON.stringify(st.b)); } catch (e) { } }
  function statusOf(id) {
    var b; try { b = JSON.parse(localStorage.getItem(key(id)) || 'null'); } catch (e) { b = null; }
    if (b && b.unlocked) return 'Model unlocked';
    if (b && Object.keys(b.placed || {}).length) return 'In progress';
    return 'Not started';
  }
  function unlocked() { return isModel() || (st.b && st.b.unlocked); }
  function sha256hex(ascii) {
    /* small SHA-256 for when crypto.subtle is unavailable */
    function rr(v, a) { return (v >>> a) | (v << (32 - a)); }
    var mp = Math.pow, mw = mp(2, 32), i, j, res = '', words = [], blen = ascii.length * 8, hash = [], k = [], pc = 0, isC = {};
    for (var c = 2; pc < 64; c++) { if (!isC[c]) { for (i = 0; i < 313; i += c) isC[i] = c; hash[pc] = (mp(c, .5) * mw) | 0; k[pc++] = (mp(c, 1 / 3) * mw) | 0; } }
    hash = hash.slice(0, 8); ascii += '\x80';
    while (ascii.length % 64 - 56) ascii += '\x00';
    for (i = 0; i < ascii.length; i++) { j = ascii.charCodeAt(i); words[i >> 2] |= j << ((3 - i) % 4) * 8; }
    words[words.length] = ((blen / mw) | 0); words[words.length] = blen;
    for (j = 0; j < words.length;) {
      var w = words.slice(j, j += 16), oh = hash; hash = hash.slice(0, 8);
      for (i = 0; i < 64; i++) {
        var w15 = w[i - 15], w2 = w[i - 2], a = hash[0], e = hash[4];
        var t1 = hash[7] + (rr(e, 6) ^ rr(e, 11) ^ rr(e, 25)) + ((e & hash[5]) ^ ((~e) & hash[6])) + k[i] + (w[i] = (i < 16) ? w[i] : (w[i - 16] + (rr(w15, 7) ^ rr(w15, 18) ^ (w15 >>> 3)) + w[i - 7] + (rr(w2, 17) ^ rr(w2, 19) ^ (w2 >>> 10))) | 0);
        var t2 = (rr(a, 2) ^ rr(a, 13) ^ rr(a, 22)) + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
        hash = [(t1 + t2) | 0].concat(hash); hash[4] = (hash[4] + t1) | 0;
      }
      for (i = 0; i < 8; i++) hash[i] = (hash[i] + oh[i]) | 0;
    }
    for (i = 0; i < 8; i++) for (j = 3; j + 1; j--) { var b = (hash[i] >> (j * 8)) & 255; res += ((b < 16) ? 0 : '') + b.toString(16); }
    return res;
  }
  function sha(text) { return Promise.resolve(sha256hex(text)); }

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
  function concs(n) { var c = (CMAP[M().id] || {})[n.id] || []; return typeof c === 'string' ? [c] : c; }
  function conc(n) { return concs(n)[0] || ''; }
  function has(n, c) { return concs(n).indexOf(c) >= 0; }
  function pal(n) { return st.mode === 'concepts' && conc(n) ? CONC[conc(n)] : UNITS[n.u]; }
  function cchip(n) {
    return concs(n).map(function (k, i) { var c = CONC[k]; return '<span class="p3-chip" style="background:' + c.fill + ';color:' + c.col + ';border-color:' + c.col + '">' + (i ? '' : 'Main concept: ') + c.name + '</span>'; }).join(' ');
  }
  function tagOf(n) { return n.u === 'C' ? 'CORE' : (ref(n) || 'U' + n.u); }

  /* ---------- skeleton ---------- */
  root.innerHTML =
    '<div class="p3-pick" role="tablist" aria-label="Practice essays"></div>' +
    '<div class="p3-bar">' +
      '<div class="p3-modes" role="group" aria-label="Mode">' +
        '<button type="button" data-mode="build" class="p3-mode-build">Build my map</button>' +
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

  pickEl.innerHTML = '<p class="p3-pick-h">Worked models <small>Study these first: how the ideas are chosen, linked and planned</small></p><div class="p3-pick-g" data-g="m"></div>' +
    '<p class="p3-pick-h">Your turn <small>Build your own map and plan, then unlock the model with your teacher’s code</small></p><div class="p3-pick-g" data-g="p"></div>';
  function selectMap(i) {
    st.map = i; st.sel = null; st.step = 0; st.pick = []; st.revealed = false; st.bsel = null; st.blink = null; st.bpair = null; st.bpara = 0;
    st.b = isModel(i) ? null : load(MAPS[i].id);
    st.mode = isModel(i) ? 'explore' : 'build'; st.bstep = 'ideas';
    layout(); draw();
  }
  MAPS.forEach(function (m, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.dataset.i = i;
    b.innerHTML = '<span>Essay ' + (i + 1) + (isModel(i) ? ' · Model' : '') + '</span>' + esc(m.short) + (isModel(i) ? '' : '<em class="p3-stat"></em>');
    b.addEventListener('click', function () { selectMap(i); });
    pickEl.querySelector('[data-g="' + (isModel(i) ? 'm' : 'p') + '"]').appendChild(b);
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
  function setMode(md) { if (md !== 'build' && !unlocked()) return; if (md === 'build' && isModel()) return; var re = (md === 'concepts') !== (st.mode === 'concepts'); st.mode = md; st.sel = null; st.pick = []; st.step = 0; st.revealed = false; if (re) layout(); draw(); }
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
      m.nodes.forEach(function (n) { if (has(n, st.lens)) nodes[n.id] = 1; });
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
    pickEl.querySelectorAll('button').forEach(function (b) { var i = +b.dataset.i; b.classList.toggle('is-on', i === st.map); b.setAttribute('aria-selected', i === st.map); var e = b.querySelector('.p3-stat'); if (e) { var s0 = statusOf(MAPS[i].id); e.textContent = s0; e.className = 'p3-stat p3-stat--' + s0.split(' ')[0].toLowerCase(); } });
    root.querySelectorAll('.p3-modes button').forEach(function (b) {
      b.classList.toggle('is-on', b.dataset.mode === st.mode);
      var md = b.dataset.mode;
      b.hidden = md === 'build' && isModel();
      var locked = md !== 'build' && !unlocked();
      b.disabled = locked; b.classList.toggle('is-locked', locked);
      b.title = locked ? 'Locked until your teacher gives you the code' : '';
    });
    if (st.mode === 'build') { legendEl.hidden = true; cLegendEl.hidden = true; drawBuild(); return; }
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
      var lines = wrap(n.t, NW < 200 ? 18 : 21).slice(0, 2);
      lines.forEach(function (l, i) {
        var t = el('text', { x: p.x + 4, y: p.y + (i - (lines.length - 1) / 2) * 18 + 6, 'text-anchor': 'middle', 'font-size': 15, 'font-weight': 700, fill: sel ? '#fff' : '#0f172a' }, g);
        t.textContent = l;
      });
      concs(n).forEach(function (k, i) {
        el('circle', { cx: p.x + NW / 2 - 10 - i * 13, cy: p.y + NH / 2 - 10, r: 4.5, fill: CONC[k].col, stroke: '#fff', 'stroke-width': 1.5 }, g);
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
        h = '<h3>The 4Ps lens</h3><p>Every idea on this map is coloured by its main key concept, and the dots show every concept it links to. Pick a concept to see the ideas that use it, how they link to the others, and a question to ask through that lens.</p><div class="p3-cards">';
        CORDER.forEach(function (c) {
          var k = m.nodes.filter(function (n) { return has(n, c); }).length;
          h += '<button type="button" data-lens="' + c + '" style="border-left-color:' + CONC[c].col + '"><b style="color:' + CONC[c].col + '">' + CONC[c].name + '</b> <small>' + k + ' idea' + (k === 1 ? '' : 's') + '</small><span>' + esc(CONC[c].def) + '</span></button>';
        });
        h += '</div><div class="p3-band"><b>Using the concepts to evaluate</b><span>Link across the concepts: a <i>process</i> changes a <i>place</i>, <i>power</i> decides who gains and who loses, and <i>possibilities</i> ask what could happen next.</span><span>A paragraph that uses two or more concepts together is usually more evaluative than one that uses a single concept.</span></div>';
      } else {
        var C = CONC[st.lens];
        h = '<p class="p3-step" style="color:' + C.col + '">Concept lens</p><h3 style="color:' + C.col + '">' + C.name + '</h3><p>' + esc(C.def) + '</p>';
        if (L[st.lens]) h += '<p class="p3-eval"><b>Ask for this essay:</b> ' + esc(L[st.lens]) + '</p>';
        var main = m.nodes.filter(function (n) { return conc(n) === st.lens; });
        var also = m.nodes.filter(function (n) { return conc(n) !== st.lens && has(n, st.lens); });
        function li(n) { return '<li><button type="button" data-go="' + n.id + '" style="border-left-color:' + C.col + '">' + esc(n.t) + '<small>' + esc(n.idea) + '</small></button></li>'; }
        if (main.length) h += '<h4>Main concept for</h4><ul class="p3-links">' + main.map(li).join('') + '</ul>';
        if (also.length) h += '<h4>Also relevant to</h4><ul class="p3-links">' + also.map(li).join('') + '</ul>';
        h += '<p class="p3-hint">The coloured dots on each box show every concept an idea links to. Faded boxes are other ideas connected to these. Click any idea to explore it.</p>';
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
    if (!unlocked()) { listEl.hidden = true; return; }
    listEl.hidden = false;
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

  /* ================= Build my map ================= */
  var BW = 176, BH = 58;
  function svgPt(ev) {
    var pt = svg.createSVGPoint(); pt.x = ev.clientX; pt.y = ev.clientY;
    var p = pt.matrixTransform(svg.getScreenCTM().inverse());
    return { x: Math.max(BW / 2 + 4, Math.min(W - BW / 2 - 4, p.x)), y: Math.max(BH / 2 + 4, Math.min(H - BH / 2 - 4, p.y)) };
  }
  function freeSpot() {
    var ids = Object.keys(st.b.placed);
    for (var ring = 0; ring < 3; ring++) {
      var n = 12 + ring * 4, rx = 385 - ring * 0, ry = 285 - ring * 0;
      for (var i = 0; i < n; i++) {
        var a = -Math.PI / 2 + (i + ring * 0.5) * 2 * Math.PI / n;
        var x = CX + (rx - ring * 30) * Math.cos(a), y = CY + (ry - ring * 30) * Math.sin(a);
        var ok = ids.every(function (id) { var p = st.b.placed[id]; return Math.abs(p.x - x) > BW * 0.95 || Math.abs(p.y - y) > BH * 1.1; });
        if (ok && !(Math.abs(x - CX) < 170 + BW / 2 && Math.abs(y - CY) < 80 + BH / 2)) return { x: x, y: y };
      }
    }
    return { x: 120 + Math.random() * 760, y: 60 + Math.random() * 580 };
  }
  function place(id, p) { st.b.placed[id] = p || freeSpot(); save(); draw(); }
  function unplace(id) {
    delete st.b.placed[id];
    st.b.links = st.b.links.filter(function (l) { return l[0] !== id && l[1] !== id; });
    st.b.plan.forEach(function (pp) { pp.ids = pp.ids.filter(function (x) { return x !== id; }); });
    if (st.bsel === id) st.bsel = null; if (st.blink === id) st.blink = null;
    save(); draw();
  }
  function bcol(p) { return UNITS[p.u]; }
  function modelIds() { var o = {}; M().nodes.forEach(function (n) { o[n.id] = 1; }); return o; }

  function drawCentre() {
    var m = M(), ql = wrap(m.q, 32), qh = ql.length * 21 + 42;
    el('rect', { x: CX - 170, y: CY - qh / 2, width: 340, height: qh, rx: 18, fill: '#0f172a' }, svg);
    var tl = el('text', { x: CX, y: CY - qh / 2 + 22, 'text-anchor': 'middle', 'font-size': 10.5, fill: '#fcd34d', 'font-weight': 700, 'letter-spacing': '1.5' }, svg);
    tl.textContent = '16-MARK PRACTICE ESSAY';
    ql.forEach(function (l, i) { var t = el('text', { x: CX, y: CY - qh / 2 + 46 + i * 21, 'text-anchor': 'middle', 'font-size': 16, fill: '#fff', 'font-weight': 600 }, svg); t.textContent = l; });
  }

  function drawBuild() {
    var b = st.b, P = b.placed;
    while (svg.childNodes.length > 1) svg.removeChild(svg.lastChild);
    var gE = el('g', {}, svg);
    drawCentre();
    var gN = el('g', {}, svg), gL = el('g', {}, svg);
    var mids = b.unlocked ? modelIds() : null;
    var paraIds = st.bstep === 'plan' && b.plan[st.bpara] ? b.plan[st.bpara].ids : null;
    if (!Object.keys(P).length) {
      var t0 = el('text', { x: CX, y: 110, 'text-anchor': 'middle', 'font-size': 16, fill: '#64748b', 'font-weight': 600 }, svg);
      t0.textContent = 'Add ideas from the list, or drag them onto the map';
    }
    b.links.forEach(function (l, i) {
      var pa = P[l[0]], pb = P[l[1]]; if (!pa || !pb) return;
      var c = ctrl(pa, pb);
      el('path', { d: 'M' + pa.x + ' ' + pa.y + ' Q' + c.x + ' ' + c.y + ' ' + pb.x + ' ' + pb.y, fill: 'none', stroke: '#0f172a', 'stroke-width': 2.2 }, gE);
      if (l[2]) {
        var lx = 0.25 * pa.x + 0.5 * c.x + 0.25 * pb.x, ly = 0.25 * pa.y + 0.5 * c.y + 0.25 * pb.y, w = l[2].length * 7.2 + 20;
        el('rect', { x: lx - w / 2, y: ly - 12, width: w, height: 24, rx: 12, fill: '#0f172a' }, gL);
        var tx = el('text', { x: lx, y: ly + 4, 'text-anchor': 'middle', 'font-size': 12.5, fill: '#fff', 'font-weight': 600 }, gL); tx.textContent = l[2];
      }
    });
    Object.keys(P).forEach(function (id) {
      var p = P[id], it = pitem(id); if (!it) return;
      var U = bcol(it), sel = st.bsel === id || st.blink === id || (st.bpair && st.bpair.indexOf(id) >= 0);
      var dim = paraIds && paraIds.indexOf(id) < 0;
      var g = el('g', { class: 'p3-node p3-drag', tabindex: 0, role: 'button', 'aria-label': it.t, opacity: dim ? 0.35 : 1 }, gN);
      var stroke = U.col, dash = '';
      if (mids) { stroke = mids[id] ? '#16a34a' : '#94a3b8'; dash = mids[id] ? '' : '5 4'; }
      el('rect', { x: p.x - BW / 2, y: p.y - BH / 2, width: BW, height: BH, rx: 12, fill: sel ? U.col : U.fill, stroke: stroke, 'stroke-width': sel ? 3 : (mids ? 3 : 2), 'stroke-dasharray': dash }, g);
      el('rect', { x: p.x - BW / 2, y: p.y - BH / 2, width: 7, height: BH, rx: 3.5, fill: U.col }, g);
      var wl = wrap(it.t, 18), three = wl.length > 2; if (three) wl = wrap(it.t, 21).slice(0, 3);
      wl.forEach(function (l, i, arr) {
        var t = el('text', { x: p.x + 3, y: p.y + (i - (arr.length - 1) / 2) * (three ? 14 : 17) + 5, 'text-anchor': 'middle', 'font-size': three ? 12 : 14, 'font-weight': 700, fill: sel ? '#fff' : '#0f172a' }, g); t.textContent = l;
      });
      var tg = el('text', { x: p.x + BW / 2 - 7, y: p.y - BH / 2 + 12, 'text-anchor': 'end', 'font-size': 10, 'font-weight': 700, fill: sel ? '#fff' : U.col }, g);
      tg.textContent = it.u === 'C' ? 'CORE' : it.ref;
      if (mids && mids[id]) { var ck = el('text', { x: p.x - BW / 2 + 14, y: p.y - BH / 2 + 14, 'font-size': 13, 'font-weight': 700, fill: '#16a34a' }, g); ck.textContent = '✓'; }
      dragify(g, id);
    });
    svg.appendChild(gL);
    drawBuildPanel();
    drawList();
  }

  function dragify(g, id) {
    var start = null, moved = false;
    g.addEventListener('pointerdown', function (ev) { start = { x: ev.clientX, y: ev.clientY }; moved = false; g.setPointerCapture(ev.pointerId); ev.preventDefault(); });
    g.addEventListener('pointermove', function (ev) {
      if (!start) return;
      if (Math.abs(ev.clientX - start.x) + Math.abs(ev.clientY - start.y) > 4) moved = true;
      if (moved) {
        var p = svgPt(ev), old = st.b.placed[id], dx = p.x - old.x, dy = p.y - old.y;
        st.b.placed[id] = p;
        g.setAttribute('transform', 'translate(' + (dx + (g._dx || 0)) + ' ' + (dy + (g._dy || 0)) + ')');
        g._dx = (g._dx || 0) + dx; g._dy = (g._dy || 0) + dy;
      }
    });
    g.addEventListener('pointerup', function () { if (!start) return; start = null; if (moved) { save(); draw(); } else bclick(id); });
    g.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); bclick(id); } });
  }
  function bclick(id) {
    if (st.bstep === 'link') {
      if (st.bpair) st.bpair = null;
      if (!st.blink) st.blink = id;
      else if (st.blink === id) st.blink = null;
      else { st.bpair = [st.blink, id]; st.blink = null; }
    } else if (st.bstep === 'plan') {
      var pp = st.b.plan[st.bpara], k = pp.ids.indexOf(id);
      if (k >= 0) pp.ids.splice(k, 1); else pp.ids.push(id);
      save();
    } else st.bsel = st.bsel === id ? null : id;
    draw();
  }

  root.querySelector('.p3-canvas').addEventListener('dragover', function (ev) { if (st.mode === 'build') ev.preventDefault(); });
  root.querySelector('.p3-canvas').addEventListener('drop', function (ev) {
    if (st.mode !== 'build') return;
    ev.preventDefault();
    var id = ev.dataTransfer.getData('text/plain');
    if (id && pitem(id)) place(id, svgPt(ev));
  });

  function checks() {
    var b = st.b, ids = Object.keys(b.placed), areas = {};
    ids.forEach(function (id) { var a = area(pitem(id)); if (a) areas[a] = 1; });
    var body = b.plan.slice(1, -1).filter(function (p) { return p.txt.trim().length >= 15 && p.ids.length; }).length;
    var concl = b.plan[b.plan.length - 1].txt.trim().length >= 15;
    return [
      ['Choose at least 5 ideas', ids.length >= 5],
      ['Use ideas from at least 3 different syllabus areas', Object.keys(areas).length >= 3],
      ['Draw and label at least 3 links', b.links.filter(function (l) { return l[2]; }).length >= 3],
      ['Plan at least 2 body paragraphs (a point plus ideas)', body >= 2],
      ['Write your conclusion’s judgement', concl]
    ];
  }

  function stepTabs() {
    var tabs = [['ideas', '1 Choose ideas'], ['link', '2 Link'], ['plan', '3 Plan'], ['compare', st.b.unlocked ? '4 Compare' : '4 Check and unlock']];
    return '<div class="p3-steps">' + tabs.map(function (t) { return '<button type="button" data-bstep="' + t[0] + '"' + (st.bstep === t[0] ? ' class="is-on"' : '') + '>' + t[1] + '</button>'; }).join('') + '</div>';
  }

  function drawBuildPanel() {
    var b = st.b, h = stepTabs(), keepScroll = panel.querySelector('.p3-pal') ? panel.querySelector('.p3-pal').scrollTop : 0;
    if (st.bstep === 'ideas') {
      if (st.bsel) {
        var it = pitem(st.bsel);
        h += chip(it) + '<h3>' + esc(it.t) + '</h3><p>' + esc(it.idea) + '</p><div class="p3-nav"><button type="button" data-unplace="' + it.id + '">Remove from my map</button><button type="button" data-desel="1" class="p3-btn--ghost">Back to the list</button></div>';
      } else {
        h += '<h3>Choose the ideas</h3><p>Which parts of the syllabus help answer this question? Add ideas from <b>different units</b>, and the core where useful. Drag boxes to arrange them; click a box to remove it.</p>' +
          '<input type="search" class="p3-search" placeholder="Search ideas…" value="' + esc(st.q) + '" aria-label="Search ideas">';
        h += '<div class="p3-pal">';
        var groups = [];
        ['4.1', '4.2', '4.3', '5.1', '5.2', '5.3', '6.1', '6.2', '6.3'].forEach(function (r) { groups.push([r + ' ' + (SUB[r] || ''), PALETTE.filter(function (p) { return p.u !== 'C' && p.ref === r; }), UNITS[r[0]]]); });
        groups.push(['Core (Paper 2 units)', PALETTE.filter(function (p) { return p.u === 'C'; }), UNITS.C]);
        var q = st.q.trim().toLowerCase();
        groups.forEach(function (gp) {
          var items = gp[1].filter(function (p) { return !q || (p.t + ' ' + p.idea).toLowerCase().indexOf(q) >= 0; });
          if (!items.length) return;
          var open = q || st.open[gp[0]];
          h += '<details' + (open ? ' open' : '') + ' data-grp="' + esc(gp[0]) + '"><summary style="border-left-color:' + gp[2].col + '">' + esc(gp[0]) + ' <small>' + items.length + '</small></summary><ul>';
          items.sort(function (a, c) { return a.t < c.t ? -1 : 1; }).forEach(function (p) {
            var on = !!b.placed[p.id];
            h += '<li><button type="button" draggable="true" data-pid="' + p.id + '" class="' + (on ? 'is-placed' : '') + '" title="' + esc(p.idea) + '"><span>' + (on ? '✓' : '+') + '</span>' + esc(p.t) + (p.u === 'C' ? ' <small>' + esc(p.core || '') + '</small>' : '') + '</button></li>';
          });
          h += '</ul></details>';
        });
        h += '</div><p class="p3-hint">' + Object.keys(b.placed).length + ' ideas on your map. Hover over an idea to see a summary.</p>';
      }
    } else if (st.bstep === 'link') {
      h += '<h3>Link the ideas</h3><p>Click one box, then another, and describe the link in a few words, such as <i>drives</i>, <i>reduces</i>, <i>resists</i> or <i>depends on</i>. The best links connect ideas from <b>different units</b>.</p>';
      if (st.blink) h += '<p class="p3-eval">First idea: <b>' + esc(pitem(st.blink).t) + '</b>. Now click a second box.</p>';
      if (st.bpair) {
        h += '<div class="p3-linkform"><p><b>' + esc(pitem(st.bpair[0]).t) + '</b> … <b>' + esc(pitem(st.bpair[1]).t) + '</b></p><input type="text" class="p3-linklab" maxlength="28" placeholder="e.g. drives, worsens, resists" list="p3-verbs"><datalist id="p3-verbs"><option>drives</option><option>causes</option><option>reduces</option><option>worsens</option><option>resists</option><option>depends on</option><option>enables</option><option>contrasts with</option><option>is an example of</option><option>is limited by</option></datalist><div class="p3-nav"><button type="button" data-addlink="1">Add link</button><button type="button" data-cancel="1" class="p3-btn--ghost">Cancel</button></div></div>';
      }
      if (b.links.length) {
        h += '<h4>Your links</h4><ul class="p3-mylinks">';
        b.links.forEach(function (l, i) { h += '<li><b>' + esc(pitem(l[0]).t) + '</b> ' + esc(l[2] || '…') + ' <b>' + esc(pitem(l[1]).t) + '</b><button type="button" data-dellink="' + i + '" aria-label="Delete link">×</button></li>'; });
        h += '</ul>';
      }
      if (Object.keys(b.placed).length < 2) h += '<p class="p3-hint">Add at least two ideas first.</p>';
    } else if (st.bstep === 'plan') {
      h += '<h3>Plan your essay</h3><p>Pick a paragraph, write its main point, then click the boxes on the map that you will use as evidence in it. Each body paragraph should combine ideas from more than one unit.</p><div class="p3-plan">';
      b.plan.forEach(function (pp, i) {
        h += '<div class="p3-para' + (i === st.bpara ? ' is-on' : '') + '" data-para="' + i + '"><b>' + esc(pp.h) + '</b><textarea rows="2" data-ptxt="' + i + '" placeholder="' + (i === 0 ? 'Define the key terms and state your argument…' : i === b.plan.length - 1 ? 'Your judgement: to what extent, for whom, where…' : 'The main point of this paragraph…') + '">' + esc(pp.txt) + '</textarea><div class="p3-pchips">' +
          (pp.ids.length ? pp.ids.map(function (id) { var it = pitem(id); return '<span style="border-color:' + UNITS[it.u].col + ';color:' + UNITS[it.u].col + '">' + esc(it.t) + '</span>'; }).join('') : '<small>' + (i === st.bpara ? 'Click boxes on the map to add ideas' : 'No ideas yet') + '</small>') + '</div></div>';
      });
      h += '</div><div class="p3-nav"><button type="button" data-addpara="1" class="p3-btn--ghost">+ Add a paragraph</button></div>';
    } else {
      var cs = checks();
      h += '<h3>' + (b.unlocked ? 'Compare with the model' : 'Check your plan') + '</h3><ul class="p3-checks">' + cs.map(function (c) { return '<li class="' + (c[1] ? 'ok' : '') + '">' + (c[1] ? '✓' : '○') + ' ' + esc(c[0]) + '</li>'; }).join('') + '</ul>';
      if (!b.unlocked) {
        h += '<div class="p3-unlock"><label for="p3-code"><b>Teacher’s code</b></label><p class="p3-hint">When your teacher is ready, they will give you the code to unlock the model map for this essay.</p><input id="p3-code" type="text" autocomplete="off" spellcheck="false" placeholder="Enter code"><button type="button" data-unlock="1">Unlock the model</button><p class="p3-codemsg" aria-live="polite"></p></div>';
      } else h += compareHtml();
      h += '<p class="p3-hint" style="margin-top:14px">Your map is saved in this browser. <button type="button" class="p3-linkbtn" data-clear="1">' + (st.clearArm ? 'Click again to clear everything' : 'Start again') + '</button></p>';
    }
    panel.innerHTML = h;
    var pal = panel.querySelector('.p3-pal'); if (pal) pal.scrollTop = keepScroll;
    wireBuildPanel();
  }

  function compareHtml() {
    var m = M(), b = st.b, mine = Object.keys(b.placed), mids = modelIds();
    var hit = mine.filter(function (id) { return mids[id]; }), extra = mine.filter(function (id) { return !mids[id]; });
    var miss = m.nodes.filter(function (n) { return mine.indexOf(n.id) < 0; });
    var pct = Math.round(100 * hit.length / m.nodes.length);
    function pairs(list) { var o = {}; list.forEach(function (l) { o[[l[0], l[1]].sort().join('|')] = 1; }); return o; }
    var mp = pairs(m.edges), yp = pairs(b.links);
    var linkHit = Object.keys(yp).filter(function (k) { return mp[k]; }).length;
    var couldAdd = m.edges.filter(function (e) { return b.placed[e[0]] && b.placed[e[1]] && !yp[[e[0], e[1]].sort().join('|')]; });
    var areasY = {}, areasM = {};
    mine.forEach(function (id) { var a = area(pitem(id)); if (a) areasY[a] = 1; });
    m.nodes.forEach(function (n) { var a = area(pitem(n.id)); if (a) areasM[a] = 1; });
    var cc = { place: 0, process: 0, power: 0, possibility: 0 };
    mine.forEach(function (id) { var c = ((CMAP[m.id] || {})[id]) || pitem(id).cs || []; (typeof c === 'string' ? [c] : c).forEach(function (k) { cc[k]++; }); });
    var h = '<div class="p3-score"><b>' + hit.length + ' of ' + m.nodes.length + '</b> of the model’s ideas are on your map (' + pct + '%) · <b>' + linkHit + '</b> of your links match the model</div>';
    h += '<p class="p3-hint">Green boxes on your map are in the model; dashed grey boxes are not. That does not make them wrong: if you can justify them with evidence, they may still earn credit.</p>';
    if (hit.length) h += '<h4>Ideas you both chose</h4><p class="p3-plist">' + hit.map(function (id) { return esc(pitem(id).t); }).join(' · ') + '</p>';
    if (miss.length) { h += '<h4>Model ideas you missed</h4><ul class="p3-links">'; miss.forEach(function (n) { h += '<li><button type="button" data-model="' + n.id + '" style="border-left-color:' + UNITS[n.u].col + '">' + esc(n.t) + '<small>' + esc(n.idea) + '</small></button></li>'; }); h += '</ul>'; }
    if (extra.length) h += '<h4>Your extra ideas</h4><p class="p3-plist">' + extra.map(function (id) { return esc(pitem(id).t); }).join(' · ') + '</p>';
    if (couldAdd.length) { h += '<h4>Links you could add</h4><ul class="p3-mylinks">'; couldAdd.forEach(function (e) { h += '<li><b>' + esc(node(e[0]).t) + '</b> ' + esc(e[2]) + ' <b>' + esc(node(e[1]).t) + '</b><small>' + esc(e[3]) + '</small></li>'; }); h += '</ul>'; }
    h += '<h4>Breadth</h4><p>Syllabus areas: you used <b>' + Object.keys(areasY).length + '</b>, the model uses <b>' + Object.keys(areasM).length + '</b>.</p><p class="p3-plist">' + CORDER.map(function (k) { return '<span style="color:' + CONC[k].col + '">' + CONC[k].name + ' ' + cc[k] + '</span>'; }).join(' · ') + '</p>';
    if (CORDER.some(function (k) { return !cc[k]; })) h += '<p class="p3-hint">Try to bring in every key concept: ' + CORDER.filter(function (k) { return !cc[k]; }).map(function (k) { return CONC[k].name; }).join(', ') + ' ' + (CORDER.filter(function (k) { return !cc[k]; }).length > 1 ? 'are' : 'is') + ' missing.</p>';
    h += '<div class="p3-nav"><button type="button" data-goto="explore">See the model map</button><button type="button" data-goto="route" class="p3-btn--ghost">Model essay route</button></div>';
    return h;
  }

  function wireBuildPanel() {
    var b = st.b;
    panel.querySelectorAll('[data-bstep]').forEach(function (x) { x.addEventListener('click', function () { st.bstep = x.dataset.bstep; st.bsel = null; st.blink = null; st.bpair = null; st.clearArm = false; draw(); }); });
    var sr = panel.querySelector('.p3-search');
    if (sr) sr.addEventListener('input', function () { st.q = sr.value; var pos0 = sr.selectionStart; drawBuildPanel(); var s2 = panel.querySelector('.p3-search'); s2.focus(); try { s2.setSelectionRange(pos0, pos0); } catch (e) { } });
    panel.querySelectorAll('details[data-grp]').forEach(function (d) { d.addEventListener('toggle', function () { st.open[d.dataset.grp] = d.open; }); });
    panel.querySelectorAll('[data-pid]').forEach(function (x) {
      x.addEventListener('click', function () { var id = x.dataset.pid; if (b.placed[id]) unplace(id); else place(id); });
      x.addEventListener('dragstart', function (ev) { ev.dataTransfer.setData('text/plain', x.dataset.pid); ev.dataTransfer.effectAllowed = 'copy'; });
    });
    var u = panel.querySelector('[data-unplace]'); if (u) u.addEventListener('click', function () { unplace(u.dataset.unplace); });
    var d = panel.querySelector('[data-desel]'); if (d) d.addEventListener('click', function () { st.bsel = null; draw(); });
    var lab = panel.querySelector('.p3-linklab');
    function addLink() { var t = (lab.value || '').trim(); if (!t) { lab.focus(); return; } b.links = b.links.filter(function (l) { return [l[0], l[1]].sort().join('|') !== st.bpair.slice().sort().join('|'); }); b.links.push([st.bpair[0], st.bpair[1], t]); st.bpair = null; save(); draw(); }
    if (lab) { lab.focus(); lab.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') addLink(); }); panel.querySelector('[data-addlink]').addEventListener('click', addLink); panel.querySelector('[data-cancel]').addEventListener('click', function () { st.bpair = null; draw(); }); }
    panel.querySelectorAll('[data-dellink]').forEach(function (x) { x.addEventListener('click', function () { b.links.splice(+x.dataset.dellink, 1); save(); draw(); }); });
    panel.querySelectorAll('[data-para]').forEach(function (x) { x.addEventListener('click', function (ev) { if (ev.target.tagName === 'TEXTAREA') { if (st.bpara !== +x.dataset.para) { st.bpara = +x.dataset.para; panel.querySelectorAll('.p3-para').forEach(function (q) { q.classList.toggle('is-on', q === x); }); redrawCanvasOnly(); } return; } st.bpara = +x.dataset.para; draw(); }); });
    panel.querySelectorAll('[data-ptxt]').forEach(function (x) { x.addEventListener('input', function () { b.plan[+x.dataset.ptxt].txt = x.value; save(); }); });
    var ap = panel.querySelector('[data-addpara]'); if (ap) ap.addEventListener('click', function () { var n = b.plan.length - 1; b.plan.splice(n, 0, { h: 'Paragraph ' + n, txt: '', ids: [] }); st.bpara = n; save(); draw(); });
    var ub = panel.querySelector('[data-unlock]');
    if (ub) {
      var inp = panel.querySelector('#p3-code'), msg = panel.querySelector('.p3-codemsg');
      function tryCode() {
        var c = (inp.value || '').trim().toUpperCase(); if (!c) return;
        Promise.all([sha(M().id + ':' + c), sha('all:' + c)]).then(function (hs) {
          if (hs[0] && (hs[0] === LOCKS[M().id] || hs[1] === LOCKS['*'])) { b.unlocked = true; save(); draw(); }
          else { msg.textContent = 'That code is not right for this essay. Check with your teacher.'; }
        });
      }
      ub.addEventListener('click', tryCode); inp.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') tryCode(); });
    }
    panel.querySelectorAll('[data-goto]').forEach(function (x) { x.addEventListener('click', function () { setMode(x.dataset.goto); }); });
    panel.querySelectorAll('[data-model]').forEach(function (x) { x.addEventListener('click', function () { setMode('explore'); st.sel = x.dataset.model; draw(); }); });
    var cl = panel.querySelector('[data-clear]');
    if (cl) cl.addEventListener('click', function () {
      if (!st.clearArm) { st.clearArm = true; draw(); return; }
      var keepUnlock = b.unlocked; st.b = load('__none__'); st.b.unlocked = keepUnlock; st.clearArm = false; save(); draw();
    });
  }
  function redrawCanvasOnly() { var keep = drawBuildPanel; drawBuildPanel = function () { }; drawBuild(); drawBuildPanel = keep; }

  var hash = (location.hash || '').slice(1);
  var start = 0; MAPS.forEach(function (m, i) { if (m.id === hash) start = i; });
  selectMap(start);
  var cv = root.querySelector('.p3-canvas'); if (cv.scrollWidth > cv.clientWidth) cv.scrollLeft = (cv.scrollWidth - cv.clientWidth) / 2;
})();
