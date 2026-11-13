/*
 * Travel the Wright Way — shared game engine.
 * Pages set window.TWW_CONFIG = { tier: 'ks3' | 'adv', otherUrl, otherLabel } and load:
 *   /js/sbl-world-basemap.js, /js/tww/<destination>.js files, then this file.
 * Scoring: 30 / 20 / 10 points for a correct answer on the 1st / 2nd / 3rd try.
 * Three wrong tries shows the answer and sends the player back to the start of that station.
 */
(function () {
  'use strict';
  var CFG = window.TWW_CONFIG || { tier: 'ks3' };
  var TIER = CFG.tier === 'adv' ? 'adv' : 'ks3';
  var DEST = window.TWW_DEST || {};
  var W = window.SBL_WORLD;
  var PTS = [30, 20, 10], TRIES = 3;
  /* Robinson projection, matching the World Map Challenge basemap (2000 x 1040). */
  var RX = [1, .9986, .9954, .99, .9822, .973, .96, .9427, .9216, .8962, .8679, .835, .7986, .7597, .7186, .6732, .6213, .5722, .5322];
  var RY = [0, .062, .124, .186, .248, .31, .372, .434, .4958, .5571, .6176, .6769, .7346, .7903, .8435, .8936, .9394, .9761, 1];
  function interp(t, lat) { var a = Math.min(Math.abs(lat), 89.9) / 5, i = Math.floor(a), f = a - i; return t[i] + (t[i + 1] - t[i]) * f; }
  function P(lon, lat) { return { x: 996 + 5.56 * lon * interp(RX, lat), y: 520.6 - (lat < 0 ? -1 : 1) * 516 * interp(RY, lat) }; }
  var HOME = { id: 'home', name: 'Bangkok', map: P(100.5, 13.75) };
  // Suggested round-the-world route, east from Thailand and back again.
  var ORDER = ['malaysia', 'singapore', 'indonesia', 'australia', 'newzealand', 'hawaii', 'canada', 'california', 'colorado', 'mexico', 'andes', 'amazon', 'argentina',
    'southafrica', 'congo', 'kenya', 'egypt', 'sahara', 'spain', 'france', 'uk', 'arctic', 'russia', 'saudi', 'uae', 'india', 'everest', 'china'];
  function soon(id, name, lon, lat, t, emoji, colour, icon, theme) { return { id: id, name: name, map: P(lon, lat), theme: theme, transport: { name: t, emoji: emoji }, stamp: { colour: colour, icon: icon } }; }
  var SOON = {
    malaysia: soon('malaysia', 'Malaysia', 101.4, 4.5, 'longboat', '🚣', '#2563c9', '🌴', 'rainforest, tea plantations and palm oil'),
    singapore: soon('singapore', 'Singapore', 103.8, 1.35, 'MRT train', '🚇', '#c2410c', '🏙️', 'a crowded island city'),
    indonesia: soon('indonesia', 'Indonesia', 110.4, -7.5, 'volcano hike', '🥾', '#b42318', '🌋', 'volcanoes on the Ring of Fire'),
    australia: soon('australia', 'Great Barrier Reef', 147, -18, 'dive boat', '🤿', '#0f8a83', '🐠', 'coral reefs'),
    newzealand: soon('newzealand', 'New Zealand', 176.2, -38.1, 'jet boat', '🚤', '#3a8fb7', '⛰️', 'glaciers and geothermal power'),
    hawaii: soon('hawaii', 'Hawaii', -155.3, 19.4, 'helicopter', '🚁', '#b8860b', '🌺', 'hotspot volcanoes'),
    canada: soon('canada', 'Canada', -116, 51.4, 'canoe and float plane', '🛩️', '#b42318', '🍁', 'boreal forest and the Rockies'),
    california: soon('california', 'California', -118.2, 34.1, 'road trip', '🚗', '#d97706', '☀️', 'earthquakes on the San Andreas Fault'),
    colorado: soon('colorado', 'Colorado River', -112.1, 36.1, 'white-water raft', '🚣', '#c2410c', '🏜️', 'the Grand Canyon and water stress'),
    mexico: soon('mexico', 'Mexico', -99.1, 19.4, 'city bus', '🚌', '#15803d', '🌵', 'a sinking megacity'),
    andes: soon('andes', 'Peru: the Andes', -72.5, -13.2, 'llama trek', '🦙', '#6536b4', '⛰️', 'fold mountains and farming terraces'),
    argentina: soon('argentina', 'Argentina', -63, -36, 'gaucho horse ride', '🐎', '#2563c9', '🌾', 'the Pampas and Patagonia'),
    southafrica: soon('southafrica', 'South Africa', 18.4, -33.9, 'safari truck', '🚙', '#15803d', '🦁', 'savanna and a city that nearly ran dry'),
    congo: soon('congo', 'Congo', 23.5, -1, 'river barge', '⛴️', '#166534', '🦍', 'Africa’s great rainforest'),
    kenya: soon('kenya', 'Kenya', 35.1, -1.5, 'safari jeep', '🚙', '#b45309', '🦒', 'savanna and the Great Rift Valley'),
    egypt: soon('egypt', 'Egypt', 31.2, 27, 'Nile felucca', '⛵', '#ca8a04', '🐫', 'the Nile and its dams'),
    sahara: soon('sahara', 'Sahara Desert', 5, 24, 'camel', '🐪', '#c27a1a', '🏜️', 'hot desert'),
    spain: soon('spain', 'Spain', -3.7, 37.2, 'coach tour', '🚌', '#dc2626', '🏖️', 'tourism and water shortages'),
    france: soon('france', 'France', 6.9, 45.9, 'cable car', '🚡', '#1d4ed8', '🎿', 'Alpine glaciers'),
    uk: soon('uk', 'United Kingdom', -1.5, 52.5, 'train', '🚆', '#1e3a8a', '🌧️', 'coasts, rivers and floods'),
    arctic: soon('arctic', 'Arctic tundra', 19, 69.6, 'dog sled', '🛷', '#3a8fb7', '❄️', 'tundra and permafrost'),
    russia: soon('russia', 'Russia', 100, 62, 'Trans-Siberian train', '🚂', '#7f1d1d', '🌲', 'Siberia’s taiga'),
    saudi: soon('saudi', 'Saudi Arabia', 46.7, 24.7, '4x4 dune drive', '🚙', '#15803d', '🛢️', 'oil and a desert climate'),
    uae: soon('uae', 'UAE', 55.3, 25.2, 'metro', '🚇', '#0f766e', '🏙️', 'Dubai’s artificial islands'),
    india: soon('india', 'India', 72.9, 19.1, 'train', '🚆', '#ea580c', '🌧️', 'the monsoon and Mumbai'),
    everest: soon('everest', 'Mount Everest', 86.9, 28, 'climb with Sherpa guides', '🧗', '#3b5ba8', '🏔️', 'the Himalaya'),
    china: soon('china', 'China', 111, 30.8, 'river cruise', '🚢', '#b91c1c', '🐉', 'the Three Gorges Dam')
  };
  var KEY = 'sbl-tww-' + TIER;
  var NS = 'http://www.w3.org/2000/svg';
  var root = document.getElementById('tww');
  var live = document.getElementById('twwLive');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var teacherOpen = false;

  function $(s, el) { return (el || root).querySelector(s); }
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function say(t) { if (!live) return; live.textContent = ''; setTimeout(function () { live.textContent = t; }, 40); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || '') || {}; } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  var S = load(); S.stamps = S.stamps || {}; S.loc = S.loc || 'home';
  function destInfo(id) { return DEST[id] || SOON[id]; }
  function mapOf(d) { if (!d.map && d.lonlat) d.map = P(d.lonlat[0], d.lonlat[1]); return d.map; }
  function locOf(id) { if (id === 'home' || !destInfo(id)) return { x: HOME.map.x, y: HOME.map.y, name: HOME.name }; var d = destInfo(id), m = mapOf(d); return { x: m.x, y: m.y, name: d.gateway || d.name }; }
  function tasksOf(st) { return st.tasks[TIER] || st.tasks.ks3; }
  function maxOf(d) { return d.stations.reduce(function (s, st) { return s + tasksOf(st).length * PTS[0]; }, 0); }
  function totalPts() { var t = 0; for (var k in S.stamps) t += S.stamps[k].best || 0; return t; }

  /* ---------- styles ---------- */
  var css = '' +
  '#tww{--navy:#11243b;--blue:#075fa8;--gold:#f0b429;--green:#08783f;--red:#b42318}' +
  '.tw-panel{background:#fff;border-radius:18px;padding:18px 20px;box-shadow:0 5px 18px #173a5d24;margin-bottom:16px}' +
  '.tw-row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}' +
  '.tw-btn{border:0;border-radius:10px;padding:11px 18px;color:#fff;background:var(--green);font:inherit;font-weight:900;cursor:pointer}' +
  '.tw-btn.blue{background:var(--blue)}.tw-btn.grey{background:#667085}.tw-btn:disabled{opacity:.45;cursor:not-allowed}' +
  '#tww button:focus-visible,#tww input:focus-visible{outline:4px solid #ffbf47;outline-offset:3px}' +
  '.tw-pass{display:flex;gap:10px;flex-wrap:wrap;align-items:center}' +
  '.tw-stamp{width:86px;height:86px;border-radius:50%;border:3px dashed #b9c6d3;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:.68rem;font-weight:900;text-align:center;color:#8091a3;line-height:1.1;padding:4px}' +
  '.tw-stamp b{font-size:1.6rem;line-height:1.1;filter:grayscale(1);opacity:.35}' +
  '.tw-stamp.got{border-style:solid;color:#fff;transform:rotate(-8deg);box-shadow:0 0 0 3px #fff inset}.tw-stamp.got b{filter:none;opacity:1}' +
  '.tw-total{margin-left:auto;font-weight:900;font-size:1.05rem}.tw-total strong{color:var(--blue);font-size:1.5rem}' +
  '.tw-mapwrap{position:relative;border-radius:16px;overflow:hidden;background:#cfe8f7}' +
  '.tw-mapwrap svg{display:block;width:100%;height:auto}' +
  '.tw-pin{cursor:pointer}.tw-pin .pulse{animation:twPulse 1.8s ease-out infinite;transform-box:fill-box;transform-origin:center}' +
  '@keyframes twPulse{0%{transform:scale(.6);opacity:.9}100%{transform:scale(2.2);opacity:0}}' +
  '.tw-pin.soon{cursor:default;opacity:.55}.tw-pin text{font:800 22px "Segoe UI",Arial,sans-serif;paint-order:stroke;stroke:#fff;stroke-width:5px}' +
  '.tw-pin:focus{outline:none}.tw-pin:focus-visible circle.dot{stroke:#ffbf47;stroke-width:6}' +
  '.tw-go{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);background:#fff;border-radius:14px;padding:12px 16px;box-shadow:0 8px 24px #0004;max-width:92%;text-align:center}' +
  '.tw-head{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap}' +
  '.tw-head h2{margin:0;color:var(--blue)}' +
  '.tw-stats{display:flex;gap:8px;flex-wrap:wrap}.tw-stat{background:#f3f8fd;border-radius:10px;padding:6px 12px;font-weight:800;font-size:.9rem}.tw-stat strong{color:var(--blue);font-size:1.15rem}' +
  '.tw-scene{border-radius:14px;overflow:hidden;margin:12px 0 4px;background:#7cc576}.tw-scene svg{display:block;width:100%;height:auto}' +
  '.tw-flow{animation:twFlow 2.4s linear infinite}@keyframes twFlow{to{stroke-dashoffset:-60}}' +
  '.tw-bob{animation:twBob 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:center}@keyframes twBob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-3px) rotate(2deg)}}' +
  '.tw-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.tw-tab{border:2px solid #c5d3e0;background:#fff;border-radius:999px;padding:5px 12px;font:inherit;font-weight:800;font-size:.85rem;color:#4b6378}' +
  '.tw-tab.on{border-color:var(--gold);background:#fff8e1;color:var(--navy)}.tw-tab.done{border-color:var(--green);color:var(--green)}' +
  '.tw-tab[disabled]{cursor:default}' +
  '.tw-tries{display:flex;gap:5px;align-items:center;font-weight:800;font-size:.85rem;color:#4b6378}.tw-tries i{width:13px;height:13px;border-radius:50%;background:#08783f;display:inline-block}.tw-tries i.used{background:#d0d5dd}' +
  '.tw-q{font-size:1.2rem;font-weight:900;margin:10px 0 12px;line-height:1.35}' +
  '.tw-opts{display:grid;gap:8px}.tw-opt{text-align:left;border:2px solid #9bb8d3;background:#f3f8fd;border-radius:10px;padding:11px 14px;font:inherit;font-weight:700;color:var(--navy);cursor:pointer}' +
  '.tw-opt:hover{border-color:var(--blue)}.tw-opt.wrong{background:#fff0ee;border-color:var(--red);color:#8e1b13;text-decoration:line-through}.tw-opt.right{background:#eaf8ef;border-color:var(--green)}' +
  '.tw-diagram{position:relative;max-width:640px;margin:0 auto}.tw-diagram svg{display:block;width:100%;height:auto;border-radius:12px}' +
  '.tw-drop{position:absolute;transform:translate(-50%,-50%);width:24%;min-height:30px;border:2px dashed #11243b;background:#ffffffe6;border-radius:8px;font:inherit;font-size:clamp(.62rem,1.6vw,.85rem);font-weight:800;color:var(--navy);padding:3px 4px;cursor:pointer;line-height:1.15}' +
  '.tw-drop.filled{border-style:solid;border-color:var(--blue);background:#eef6ff}.tw-drop.ok{border-color:var(--green);background:#eaf8ef;color:#075c31;cursor:default}' +
  '.tw-drop.bad{animation:twShake .4s;border-color:var(--red);background:#fff0ee}' +
  '.tw-bank{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin:14px 0 6px;min-height:44px}' +
  '.tw-chip{border:2px solid #6536b4;background:#f4efff;color:#3b1f78;border-radius:999px;padding:7px 14px;font:inherit;font-weight:800;cursor:pointer}' +
  '.tw-chip.sel{background:#6536b4;color:#fff;box-shadow:0 0 0 4px #6536b433}' +
  '.tw-bins{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:10px}' +
  '.tw-bin{border:3px dashed #9bb8d3;border-radius:14px;padding:10px;min-height:120px;background:#f8fbfe;cursor:pointer;text-align:left;font:inherit;color:var(--navy)}' +
  '.tw-bin h4{margin:0 0 8px;text-align:center}.tw-bin .tw-chip{display:inline-block;margin:3px}' +
  '.tw-chip.ok{border-color:var(--green);background:#eaf8ef;color:#075c31;cursor:default}' +
  '.tw-num{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.tw-num input{width:140px;padding:10px;border:2px solid #64748b;border-radius:9px;font:inherit;font-size:1.1rem}' +
  '.tw-fb{margin-top:12px;border-radius:12px;padding:12px 14px;font-weight:700}.tw-fb.ok{background:#eaf8ef;border:2px solid var(--green);color:#075c31}.tw-fb.bad{background:#fff0ee;border:2px solid var(--red);color:#8e1b13}.tw-fb.info{background:#fff8e1;border:2px solid var(--gold);color:#5b4300}' +
  '.tw-fb .gain{font-size:1.6rem;font-weight:900;display:block;animation:twPop .5s ease-out}' +
  '@keyframes twPop{0%{transform:scale(.4);opacity:0}70%{transform:scale(1.2);opacity:1}100%{transform:scale(1)}}' +
  '@keyframes twShake{0%,100%{transform:translate(-50%,-50%)}25%,75%{transform:translate(calc(-50% - 7px),-50%)}50%{transform:translate(calc(-50% + 7px),-50%)}}' +
  '.tw-shake{animation:twShake2 .4s}@keyframes twShake2{0%,100%{transform:none}25%,75%{transform:translateX(-7px)}50%{transform:translateX(7px)}}' +
  '.tw-graph{max-width:560px;margin:0 auto 8px}.tw-graph svg{width:100%;height:auto;display:block}' +
  '.tw-postcard{display:grid;grid-template-columns:1.2fr 1fr;gap:18px;align-items:start}.tw-postcard ul{margin:6px 0 0;padding-left:20px}' +
  '.tw-bigstamp{width:170px;height:170px;margin:10px auto;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;font-weight:900;text-align:center;box-shadow:0 0 0 6px #fff inset,0 8px 20px #0003;animation:twThump .7s cubic-bezier(.2,1.6,.4,1) both}' +
  '.tw-bigstamp b{font-size:3rem;line-height:1}@keyframes twThump{0%{transform:scale(2.4) rotate(-30deg);opacity:0}100%{transform:scale(1) rotate(-8deg);opacity:1}}' +
  '.tw-sway{animation:twSway 4s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}' +
  '#tww .sway{animation:twSway 5s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}#tww .sway.s2{animation-delay:-2s}#tww .sway.s3{animation-duration:6s;animation-delay:-1s}' +
  '@keyframes twSway{0%,100%{transform:rotate(-.8deg)}50%{transform:rotate(.8deg)}}' +
  '#tww .drip{animation:twDrip 1.6s ease-in infinite}@keyframes twDrip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(40px);opacity:0}}' +
  '.tw-note{color:#4b6378;font-size:.9rem}' +
  '.tw-cloud{animation:twDriftC linear infinite}@keyframes twDriftC{from{transform:translateX(-120px)}to{transform:translateX(1000px)}}' +
  '.tw-smoke{animation:twSmoke 4s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom left}@keyframes twSmoke{0%,100%{transform:translate(0,0) scale(1);opacity:.9}50%{transform:translate(10px,-6px) scale(1.15);opacity:.6}}' +
  '.tw-photo{margin:0 0 12px;border-radius:14px;overflow:hidden;background:#e3ebf2}.tw-photo img{display:block;width:100%;height:240px;object-fit:cover}.tw-photo figcaption{font-size:.72rem;color:#4b6378;padding:5px 10px;background:#f3f8fd}.tw-photo figcaption a{color:#075fa8}' +
  '.tw-confetti{position:fixed;top:-14px;width:10px;height:14px;z-index:9999;pointer-events:none;border-radius:2px;animation:twFall linear forwards}@keyframes twFall{to{transform:translate(var(--dx),110vh) rotate(var(--rot))}}' +
  '@media(max-width:760px){.tw-postcard{grid-template-columns:1fr}.tw-bins{grid-template-columns:1fr}.tw-stamp{width:70px;height:70px}}' +
  '@media(prefers-reduced-motion:reduce){#tww *,#tww *::before{animation:none!important;transition:none!important}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function confetti(n) { if (reduce) return; var c = ['#f0b429', '#b42318', '#075fa8', '#08783f', '#6536b4', '#ffd54a']; for (var k = 0; k < n; k++) { var d = document.createElement('div'); d.className = 'tw-confetti'; d.style.left = Math.random() * 100 + 'vw'; d.style.background = c[k % c.length]; d.style.setProperty('--dx', ((Math.random() - .5) * 240).toFixed(0) + 'px'); d.style.setProperty('--rot', ((Math.random() - .5) * 1400).toFixed(0) + 'deg'); d.style.animationDuration = (2.2 + Math.random() * 2).toFixed(2) + 's'; d.style.animationDelay = (Math.random() * .5).toFixed(2) + 's'; document.body.appendChild(d); setTimeout(function (x) { return function () { x.remove(); }; }(d), 5200); } }

  /* ---------- passport ---------- */
  function passportHTML() {
    var h = '<div class="tw-pass" aria-label="Your passport">';
    var soonN = 0;
    ORDER.forEach(function (id) {
      var d = destInfo(id), s = S.stamps[id];
      if (!DEST[id]) { soonN++; return; }
      if (s) h += '<div class="tw-stamp got" style="background:' + d.stamp.colour + ';border-color:' + d.stamp.colour + '" title="' + esc(d.name) + ': ' + s.best + ' points"><b>' + d.stamp.icon + '</b>' + esc(d.short || d.name) + '<br>' + s.best + ' pts</div>';
      else h += '<div class="tw-stamp"><b>' + d.stamp.icon + '</b>' + esc(d.short || d.name) + (DEST[id] ? '' : '<br><span style="font-weight:700">soon</span>') + '</div>';
    });
    if (soonN) h += '<div class="tw-stamp" title="Coming soon"><b>\uD83D\uDEA7</b>+' + soonN + ' more<br>coming</div>';
    return h + '<div class="tw-total">Passport points<br><strong>' + totalPts() + '</strong></div></div>';
  }

  /* ---------- world map ---------- */
  function showMap(msg) {
    var here = locOf(S.loc);
    root.innerHTML = '<section class="tw-panel"><div class="tw-head"><h2>🗺️ Choose your next destination</h2><span class="tw-note">You are in <strong>' + esc(here.name) + '</strong></span></div>' +
      '<p class="tw-note" style="margin:6px 0 12px">' + (msg || 'Your journey starts in Thailand. The dotted line shows the suggested route east around the world. Tap a destination to fly there: each place has its own way of getting around once you arrive.') + '</p>' + passportHTML() + '</section>' +
      '<section class="tw-panel" style="padding:10px"><div class="tw-mapwrap" id="twMapWrap"></div></section>';
    var svg = document.createElementNS(NS, 'svg'); svg.setAttribute('viewBox', '0 30 2000 880'); svg.setAttribute('role', 'group'); svg.setAttribute('aria-label', 'World map with destinations');
    svg.innerHTML = '<rect x="0" y="0" width="2000" height="1040" fill="#cfe8f7"/>' +
      '<path d="' + (W ? W.d : '') + '" fill="#f6f1e1" stroke="#b9ae8f" stroke-width="1"/>' +
      '<line x1="0" x2="2000" y1="520" y2="520" stroke="#e07a5f" stroke-width="2" stroke-dasharray="10 8" opacity=".55"/><text x="20" y="512" font-size="20" font-weight="800" fill="#c0563b" opacity=".8">Equator</text>' +
      '<g id="twRoute" fill="none" stroke="#6536b4" stroke-width="3" stroke-dasharray="2 10" stroke-linecap="round" opacity=".55"></g>' +
      '<path id="twTrail" fill="none" stroke="#11243b" stroke-width="4" opacity="0"/><path id="twTrail2" fill="none" stroke="#11243b" stroke-width="4" opacity="0"/>' +
      '<g id="twPins"></g><g id="twPlane" opacity="0"><path d="M0 -6 L30 -2 L40 0 L30 2 L0 6 L-10 18 L-16 18 L-8 4 L-20 4 L-26 12 L-30 12 L-26 0 L-30 -12 L-26 -12 L-20 -4 L-8 -4 L-16 -18 L-10 -18 Z" fill="#b42318" stroke="#fff" stroke-width="2"/></g>';
    $('#twMapWrap').appendChild(svg);
    var pins = svg.querySelector('#twPins'), route = svg.querySelector('#twRoute');
    var rp = [HOME.map].concat(ORDER.map(function (id) { return mapOf(destInfo(id)); })).concat([HOME.map]);
    for (var r = 1; r < rp.length; r++) { var p0 = rp[r - 1], p1 = rp[r], x1 = p1.x; if (x1 - p0.x < -1000) x1 += 2000; else if (x1 - p0.x > 1000) x1 -= 2000; [0, -2000, 2000].forEach(function (off) { var ln = document.createElementNS(NS, 'path'); var mx = (p0.x + x1) / 2 + off, my = (p0.y + p1.y) / 2 - 30; ln.setAttribute('d', 'M' + (p0.x + off) + ' ' + p0.y + ' Q' + mx + ' ' + my + ' ' + (x1 + off) + ' ' + p1.y); route.appendChild(ln); }); }
    function pin(x, y, label, cls, colour, onClick, aria) {
      var g = document.createElementNS(NS, 'g'); g.setAttribute('class', 'tw-pin ' + cls); g.setAttribute('transform', 'translate(' + x + ' ' + y + ')');
      g.innerHTML = (cls.indexOf('soon') < 0 && cls.indexOf('home') < 0 ? '<circle class="pulse" r="14" fill="' + colour + '"/>' : '') + (cls.indexOf('soon') >= 0 ? '<title>' + esc(label) + '</title><circle class="dot" r="9" fill="' + colour + '" stroke="#fff" stroke-width="3"/>' : '<circle class="dot" r="12" fill="' + colour + '" stroke="#fff" stroke-width="4"/>' + (x > 1700 || cls.indexOf('left') >= 0 ? '<text x="-18" y="' + (cls.indexOf('left') >= 0 ? 8 : -12) + '" text-anchor="end">' : (cls.indexOf('below') >= 0 ? '<text x="16" y="34">' : '<text x="18" y="-12">')) + esc(label) + '</text>');
      if (onClick) { g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button'); g.setAttribute('aria-label', aria || label); g.addEventListener('click', onClick); g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }); }
      pins.appendChild(g); return g;
    }
    pin(HOME.map.x, HOME.map.y, '🏠 Bangkok (start)', 'home', '#11243b');
    ORDER.forEach(function (id) {
      var d = destInfo(id), live = !!DEST[id], got = S.stamps[id], m = mapOf(d);
      pin(m.x, m.y, (got ? '✅ ' : '') + d.name + (live ? '' : ' (soon)'), (live ? '' : 'soon') + (id === 'andes' ? ' below' : id === 'singapore' ? ' left' : ''), live ? d.stamp.colour : '#98a2b3',
        live ? function () { askFly(id); } : function () { soonBox(d); },
        live ? 'Fly to ' + d.name : d.name + ', coming soon');
    });
    say('World map. Choose your next destination.');
  }
  function soonBox(d) {
    var wrap = $('#twMapWrap'), old = $('.tw-go', wrap); if (old) old.remove();
    var box = document.createElement('div'); box.className = 'tw-go';
    box.innerHTML = '<strong>' + d.stamp.icon + ' ' + esc(d.name) + '</strong> \u00b7 travel by ' + d.transport.emoji + ' ' + esc(d.transport.name) + '.<br><span class="tw-note">Coming soon. Try the Amazon while you wait!</span><div class="tw-row" style="justify-content:center;margin-top:8px"><button class="tw-btn grey" type="button" id="twCancel">OK</button></div>';
    wrap.appendChild(box); $('#twCancel').focus(); $('#twCancel').onclick = function () { box.remove(); };
    say(d.name + ' is coming soon.');
  }
  function askFly(id) {
    var d = DEST[id], wrap = $('#twMapWrap'), old = $('.tw-go', wrap); if (old) old.remove();
    var box = document.createElement('div'); box.className = 'tw-go';
    var s = S.stamps[id];
    box.innerHTML = '<strong>' + esc(d.name) + '</strong> · fly to ' + esc(d.gateway) + ', then travel by ' + d.transport.emoji + ' ' + esc(d.transport.name) + '.' + (s ? '<br><span class="tw-note">Your best: ' + s.best + ' of ' + maxOf(d) + ' points. Play again to beat it.</span>' : '') +
      '<div class="tw-row" style="justify-content:center;margin-top:8px"><button class="tw-btn" type="button" id="twFly">Fly there ✈️</button><button class="tw-btn grey" type="button" id="twCancel">Not yet</button></div>';
    wrap.appendChild(box); $('#twFly').focus();
    $('#twCancel').onclick = function () { box.remove(); };
    $('#twFly').onclick = function () { box.remove(); fly(id); };
  }
  function fly(id) {
    var a = locOf(S.loc), b = locOf(id), svg = $('#twMapWrap svg'), plane = svg.querySelector('#twPlane'), trail = svg.querySelector('#twTrail'), trail2 = svg.querySelector('#twTrail2');
    if (S.loc === id) { startExpedition(id); return; }
    var bx = b.x, wrap = 0; if (bx - a.x < -1000) { bx += 2000; wrap = -2000; } else if (bx - a.x > 1000) { bx -= 2000; wrap = 2000; }
    var cx = (a.x + bx) / 2, dist = Math.hypot(bx - a.x, b.y - a.y), cy = Math.min(a.y, b.y) - Math.min(220, Math.max(80, dist * .22));
    var d = 'M' + a.x + ' ' + a.y + ' Q' + cx + ' ' + cy + ' ' + bx + ' ' + b.y;
    trail.setAttribute('d', d); trail.setAttribute('opacity', '.8');
    if (wrap) { trail2.setAttribute('d', d); trail2.setAttribute('transform', 'translate(' + wrap + ' 0)'); trail2.setAttribute('opacity', '.8'); } else trail2.setAttribute('opacity', '0');
    var len = trail.getTotalLength();
    plane.setAttribute('opacity', '1'); say('Flying to ' + DEST[id].gateway + '.');
    var t0 = performance.now(), dur = reduce ? 10 : 2800 + Math.min(1400, dist);
    function q(t, p0, p1, p2) { return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2; }
    function step(now) {
      var t = Math.min(1, (now - t0) / dur), e = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      var x = q(e, a.x, cx, bx), y = q(e, a.y, cy, b.y), dx = 2 * (1 - e) * (cx - a.x) + 2 * e * (bx - cx), dy = 2 * (1 - e) * (cy - a.y) + 2 * e * (b.y - cy);
      if (x < 0) x += 2000; else if (x > 2000) x -= 2000;
      var sc = 1 + Math.sin(e * Math.PI) * .5;
      plane.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + (Math.atan2(dy, dx) * 180 / Math.PI).toFixed(1) + ') scale(' + sc.toFixed(2) + ')');
      var dash = (len * e).toFixed(1) + ' ' + (len + 10).toFixed(1); trail.style.strokeDasharray = dash; trail2.style.strokeDasharray = dash;
      if (t < 1) requestAnimationFrame(step); else { S.loc = id; save(); setTimeout(function () { startExpedition(id); }, reduce ? 0 : 400); }
    }
    requestAnimationFrame(step);
  }

  /* ---------- expedition ---------- */
  var E = null; // {d, si, ti, score, stationStart, tries, done:[]}
  function photoHTML(d) {
    var f = d.photo; if (!f) return '';
    return '<figure class="tw-photo"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(f.file) + '?width=900" alt="' + esc(f.alt) + '" loading="lazy"><figcaption>Photo: ' + esc(f.author) + ', <a href="https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(f.file.replace(/ /g, '_')) + '" target="_blank" rel="noopener">Wikimedia Commons</a>, <a href="' + f.licenceUrl + '" target="_blank" rel="noopener">' + esc(f.licence) + '</a></figcaption></figure>';
  }
  function startExpedition(id) {
    var d = DEST[id];
    E = { d: d, si: 0, ti: 0, score: 0, stationStart: 0, tries: 0, done: [] };
    root.innerHTML = '<section class="tw-panel"><div class="tw-head"><h2>' + d.stamp.icon + ' Welcome to ' + (d.the ? 'the ' : '') + esc(d.name) + '</h2><button class="tw-btn grey" type="button" id="twBack">← World map</button></div>' +
      '<div class="tw-scene" id="twScene"></div>' +
      '<div class="tw-postcard"><div><p style="font-size:1.05rem">' + esc(d.intro[TIER] || d.intro.ks3) + '</p><p><strong>' + d.stations.length + ' stations</strong> to visit. For each question: <strong>30 points</strong> first try, <strong>20</strong> second try, <strong>10</strong> third try. Three wrong tries sends you back to the start of that station.</p>' +
      '<button class="tw-btn" type="button" id="twStart">' + esc(d.transport.verb || 'Set off') + ' to station 1 ' + d.transport.emoji + '</button></div>' +
      '<div>' + photoHTML(d) + '<div class="tw-panel" style="background:#f3f8fd;box-shadow:none;margin:0"><strong>Quick facts</strong><ul>' + d.facts.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul></div></div></div></section>';
    drawScene(-1, false);
    $('#twBack').onclick = function () { showMap(); };
    $('#twStart').onclick = function () { moveTo(0, function () { renderStation(); }); };
    $('#twStart').focus();
    say('Welcome to ' + (d.the ? 'the ' : '') + d.name + '. ' + (d.intro[TIER] || d.intro.ks3));
  }

  /* Local journey scene: a river with a canoe (other destinations can add their own scene types). */
  var RIVER = 'M-20 120 C 90 60, 170 170, 290 110 S 470 50, 560 115 S 760 175, 920 95';
  function drawScene(pos, keep) {
    var host = $('#twScene'); if (!host) return;
    var n = E.d.stations.length;
    if (!keep || !host.firstChild) {
      var k; host.innerHTML = sceneMarkup(E.d);
      var path = host.querySelector('#twRiver'), L = path.getTotalLength(), stops = host.querySelector('#twStops');
      E.stopPts = [];
      for (k = 0; k <= n; k++) {
        var p = path.getPointAtLength(L * (0.06 + 0.88 * k / n)); E.stopPts.push(L * (0.06 + 0.88 * k / n));
        if (k < n) { var s = E.d.stations[k]; var g = document.createElementNS(NS, 'g'); g.setAttribute('transform', 'translate(' + p.x.toFixed(1) + ' ' + (p.y - 34).toFixed(1) + ')'); g.setAttribute('data-stop', k);
          g.innerHTML = '<circle r="17" fill="#fff" stroke="#11243b" stroke-width="2.5"/><text text-anchor="middle" y="6" font-size="17">' + s.icon + '</text>'; stops.appendChild(g); }
        else { var f = document.createElementNS(NS, 'g'); f.setAttribute('transform', 'translate(' + p.x.toFixed(1) + ' ' + (p.y - 34).toFixed(1) + ')'); f.innerHTML = '<circle r="17" fill="#f0b429" stroke="#11243b" stroke-width="2.5"/><text text-anchor="middle" y="6" font-size="17">🏁</text>'; stops.appendChild(f); }
      }
    }
    E.boatAt = pos;
    var path2 = host.querySelector('#twRiver'), at = pos < 0 ? 0 : E.stopPts[pos];
    placeBoat(path2, at);
    host.querySelectorAll('[data-stop]').forEach(function (g) { var i = +g.getAttribute('data-stop'); g.querySelector('circle').setAttribute('fill', E.done.indexOf(i) >= 0 ? '#b8e6c4' : (i === pos ? '#fff8e1' : '#fff')); });
  }
  /* Local journey scenes. Each destination picks one with d.scene: 'river' (default), 'rail' or 'trail'.
     Every scene has a path #twRiver for the vehicle (#twBoat) to follow. */
  var SCENE_PATHS = {
    river: 'M-20 120 C 90 60, 170 170, 290 110 S 470 50, 560 115 S 760 175, 920 95',
    rail: 'M-20 168 C 150 168, 220 128, 360 128 S 560 160, 680 150 S 820 120, 920 122',
    trail: 'M40 206 L250 192 L150 168 L380 150 L280 126 L470 108 L390 86 L560 70 L470 52 L600 40'
  };
  function sceneMarkup(d) {
    var type = d.scene || 'river', P2 = SCENE_PATHS[type], k, h = '';
    if (type === 'rail') {
      h += '<rect width="900" height="220" fill="#cfe8ff"/>';
      h += '<g fill="#fff" opacity=".9"><g class="tw-cloud" style="animation-duration:38s"><ellipse cx="80" cy="30" rx="34" ry="11"/></g><g class="tw-cloud" style="animation-duration:52s;animation-delay:-20s"><ellipse cx="300" cy="22" rx="28" ry="9"/></g></g>';
      for (k = 0; k < 24; k++) { var bx = k * 39 - 6, bh = 50 + ((k * 37) % 70), col = ['#8aa4bf', '#6f8aa8', '#9db3c8', '#7a93ad'][k % 4]; h += '<rect x="' + bx + '" y="' + (190 - bh) + '" width="34" height="' + bh + '" fill="' + col + '"/>'; for (var w = 0; w < bh - 16; w += 14) h += '<rect x="' + (bx + 6) + '" y="' + (196 - bh + w) + '" width="6" height="6" fill="#f6e7a6" opacity=".8"/><rect x="' + (bx + 20) + '" y="' + (196 - bh + w) + '" width="6" height="6" fill="#f6e7a6" opacity=".6"/>'; }
      h += '<g fill="#3fa34d">'; for (k = 0; k < 30; k++) h += '<circle cx="' + (k * 31 + 10) + '" cy="' + (200 + (k % 3) * 3) + '" r="' + (9 + k % 3 * 2) + '"/>'; h += '</g><rect y="204" width="900" height="16" fill="#5aa64a"/>';
      h += '<path d="' + P2 + '" fill="none" stroke="#5b6573" stroke-width="16" stroke-linecap="round"/><path d="' + P2 + '" fill="none" stroke="#c7ced6" stroke-width="3" stroke-dasharray="4 7"/>';
      h += '<path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><rect x="-44" y="-22" width="40" height="18" rx="6" fill="#fff" stroke="#c2410c" stroke-width="2.5"/><rect x="2" y="-22" width="44" height="18" rx="8" fill="#fff" stroke="#c2410c" stroke-width="2.5"/><g fill="#7cc3ef"><rect x="-38" y="-18" width="9" height="7" rx="1"/><rect x="-25" y="-18" width="9" height="7" rx="1"/><rect x="8" y="-18" width="9" height="7" rx="1"/><rect x="21" y="-18" width="9" height="7" rx="1"/></g><rect x="-44" y="-8" width="90" height="3" fill="#c2410c"/></g></g>';
    } else if (type === 'trail') {
      h += '<defs><linearGradient id="twSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fd0f5"/><stop offset="1" stop-color="#e8f5ff"/></linearGradient></defs><rect width="900" height="220" fill="url(#twSky)"/>';
      h += '<path d="M0 220 L0 200 L120 190 L330 110 L560 34 L640 34 L760 120 L900 170 L900 220 Z" fill="#6b5b4e"/>';
      h += '<path d="M0 220 L0 200 L120 190 L250 140 L420 170 L620 170 L760 150 L900 175 L900 220 Z" fill="#3f8f3a"/>';
      h += '<g stroke="#9fd36b" stroke-width="2" opacity=".7">'; for (k = 0; k < 8; k++) h += '<line x1="0" y1="' + (204 + k * 2) + '" x2="900" y2="' + (204 + k * 2) + '"/>'; h += '</g>';
      h += '<path d="M530 46 L560 34 L640 34 L668 50 L620 60 L575 58 Z" fill="#8a8079"/>';
      h += '<g class="tw-smoke"><circle cx="600" cy="22" r="12" fill="#d8d4d0"/><circle cx="614" cy="8" r="10" fill="#e5e2df"/><circle cx="628" cy="-4" r="8" fill="#efedeb"/></g>';
      h += '<path d="' + P2 + '" fill="none" stroke="#f3e2b8" stroke-width="5" stroke-dasharray="2 6" stroke-linecap="round"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><circle cx="0" cy="-30" r="6" fill="#f0b429" stroke="#11243b" stroke-width="2"/><path d="M0 -24 L0 -8 M0 -8 L-6 4 M0 -8 L6 4 M0 -19 L-8 -12 M0 -19 L9 -14" stroke="#11243b" stroke-width="3" stroke-linecap="round" fill="none"/><rect x="-10" y="-24" width="7" height="12" rx="2" fill="#b42318"/><line x1="9" y1="-14" x2="13" y2="4" stroke="#5b3b22" stroke-width="2"/></g></g>';
    } else {
      for (k = 0; k < 26; k++) { var tx = k * 36 + (k % 3) * 7, top = k % 2 === 0; h += '<g class="tw-sway" style="animation-delay:-' + (k % 5) + 's"><rect x="' + (tx - 2) + '" y="' + (top ? 14 : 186) + '" width="4" height="22" fill="#5b3b22"/><circle cx="' + tx + '" cy="' + (top ? 14 : 186) + '" r="' + (14 + k % 4 * 3) + '" fill="' + (k % 3 ? '#2a8a36' : '#1f6b2a') + '"/></g>'; }
      h = '<rect width="900" height="220" fill="#7cc576"/>' + h +
        '<path d="' + P2 + '" fill="none" stroke="#3d8fc6" stroke-width="46" stroke-linecap="round"/>' +
        '<path id="twRiver" d="' + P2 + '" fill="none" stroke="#67b5e6" stroke-width="30" stroke-linecap="round"/>' +
        '<path class="tw-flow" d="' + P2 + '" fill="none" stroke="#e6f6ff" stroke-width="2" stroke-dasharray="18 42" opacity=".8"/>' +
        '<g id="twStops"></g>' +
        '<g id="twBoat"><g class="tw-bob"><path d="M-26 0 Q0 14 26 0 L20 -4 L-20 -4 Z" fill="#8a4b20" stroke="#5b2e10" stroke-width="2"/><circle cx="-4" cy="-14" r="5" fill="#f0b429"/><rect x="-8" y="-10" width="8" height="8" rx="2" fill="#b42318"/><line x1="4" y1="-16" x2="16" y2="4" stroke="#5b3b22" stroke-width="2.5"/></g></g>';
    }
    var label = { river: 'river journey by ' + d.transport.name, rail: 'train journey across the city', trail: 'hike up the volcano' }[type];
    return '<svg viewBox="0 0 900 220" role="img" aria-label="Your ' + esc(label) + '">' + h + '</svg>';
  }
  function placeBoat(path, len) {
    var p = path.getPointAtLength(len), p2 = path.getPointAtLength(Math.min(path.getTotalLength(), len + 2));
    var ang = Math.atan2(p2.y - p.y, p2.x - p.x) * 180 / Math.PI;
    if ((E.d.scene || 'river') === 'trail') ang = 0;
    $('#twBoat').setAttribute('transform', 'translate(' + p.x.toFixed(1) + ' ' + p.y.toFixed(1) + ') rotate(' + ang.toFixed(1) + ')');
  }
  function moveTo(pos, cb) {
    var host = $('#twScene'), path = host.querySelector('#twRiver');
    var from = E.boatAt < 0 ? 0 : E.stopPts[E.boatAt], to = E.stopPts[pos], t0 = performance.now(), dur = reduce ? 10 : 1800;
    say('Travelling on to the next stop.');
    function step(now) { var t = Math.min(1, (now - t0) / dur), e = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; placeBoat(path, from + (to - from) * e); if (t < 1) requestAnimationFrame(step); else { E.boatAt = pos; drawScene(pos, true); cb && cb(); } }
    requestAnimationFrame(step);
  }

  function renderStation() {
    var d = E.d, s = d.stations[E.si], tasks = tasksOf(s);
    if (!$('#twTask')) {
      var scene = $('#twScene'); var keepScene = scene ? scene.innerHTML : '';
      root.innerHTML = '<section class="tw-panel"><div class="tw-head"><h2>' + d.stamp.icon + ' ' + esc(d.name) + '</h2><div class="tw-stats"><span class="tw-stat">Points <strong id="twScore">0</strong></span><span class="tw-stat">Station <strong id="twSt"></strong></span></div></div>' +
        '<div class="tw-scene" id="twScene"></div><div class="tw-tabs" id="twTabs"></div></section>' +
        '<section class="tw-panel" id="twTask" aria-live="polite"></section>';
      $('#twScene').innerHTML = keepScene; if (!keepScene) drawScene(E.si, false); else { var p = $('#twScene #twRiver'); placeBoat(p, E.stopPts[E.si]); }
    }
    $('#twScore').textContent = E.score; $('#twSt').textContent = (E.si + 1) + ' / ' + d.stations.length;
    $('#twTabs').innerHTML = d.stations.map(function (x, i) { var cls = 'tw-tab' + (i === E.si ? ' on' : '') + (E.done.indexOf(i) >= 0 ? ' done' : ''); return '<button type="button" class="' + cls + '" data-i="' + i + '"' + (teacherOpen ? '' : ' disabled') + '>' + x.icon + ' ' + esc(x.title) + '</button>'; }).join('');
    if (teacherOpen) $('#twTabs').querySelectorAll('button').forEach(function (b) { b.onclick = function () { E.si = +b.getAttribute('data-i'); E.ti = 0; E.stationStart = E.score; E.tries = 0; drawScene(E.si, true); renderStation(); }; });
    renderTask(s, tasks[E.ti]);
  }

  function header(s, task) {
    var tasks = tasksOf(s), dots = '';
    for (var i = 0; i < TRIES; i++) dots += '<i class="' + (i < E.tries ? 'used' : '') + '"></i>';
    return '<div class="tw-head"><div><strong>' + s.icon + ' Station ' + (E.si + 1) + ': ' + esc(s.title) + '</strong> <span class="tw-note">· question ' + (E.ti + 1) + ' of ' + tasks.length + '</span></div><div class="tw-tries" aria-label="' + (TRIES - E.tries) + ' tries left">Tries ' + dots + '</div></div>';
  }
  function renderTask(s, task) {
    var box = $('#twTask'); E.task = task;
    var h = header(s, task);
    if (task.graph) h += '<div class="tw-graph">' + climateSVG(E.d.climate) + '</div>';
    if (task.type === 'mcq') {
      var opts = shuffle(task.options.map(function (o, i) { return { t: o, ok: i === task.answer }; })); E.opts = opts;
      h += '<p class="tw-q">' + esc(task.q) + '</p><div class="tw-opts">' + opts.map(function (o, i) { return '<button type="button" class="tw-opt" data-i="' + i + '">' + esc(o.t) + '</button>'; }).join('') + '</div>';
    } else if (task.type === 'number') {
      h += '<p class="tw-q">' + esc(task.q) + '</p><div class="tw-num"><label class="tw-note" for="twNum">Answer</label><input id="twNum" type="text" inputmode="decimal" autocomplete="off"> <span>' + esc(task.unit || '') + '</span><button class="tw-btn" type="button" id="twCheck">Check</button></div>';
    } else if (task.type === 'label') {
      h += '<p class="tw-q">' + esc(task.prompt) + '</p><div class="tw-diagram">' + E.d.diagrams[task.diagram] +
        task.spots.map(function (sp, i) { return '<button type="button" class="tw-drop" data-i="' + i + '" style="left:' + sp.x + '%;top:' + sp.y + '%" aria-label="Label box ' + (i + 1) + ', empty">?</button>'; }).join('') + '</div>' +
        '<div class="tw-bank" id="twBank"></div><div class="tw-row" style="justify-content:center"><button class="tw-btn" type="button" id="twCheck" disabled>Check labels</button></div>';
    } else if (task.type === 'sort') {
      h += '<p class="tw-q">' + esc(task.q) + '</p><p class="tw-note">Tap an activity, then tap the box it belongs in.</p><div class="tw-bank" id="twBank"></div><div class="tw-bins">' + task.bins.map(function (b, i) { return '<div class="tw-bin" role="button" tabindex="0" data-b="' + i + '"><h4>' + esc(b) + '</h4><div class="tw-binlist"></div></div>'; }).join('') + '</div>' +
        '<div class="tw-row" style="justify-content:center;margin-top:12px"><button class="tw-btn" type="button" id="twCheck" disabled>Check</button></div>';
    }
    h += '<div id="twFb"></div>';
    box.innerHTML = h;
    if (task.type === 'mcq') box.querySelectorAll('.tw-opt').forEach(function (b) { b.onclick = function () { answerMcq(b); }; });
    if (task.type === 'number') { var inp = $('#twNum'); inp.focus(); $('#twCheck').onclick = answerNum; inp.onkeydown = function (e) { if (e.key === 'Enter') answerNum(); }; }
    if (task.type === 'label') setupLabel(task);
    if (task.type === 'sort') setupSort(task);
    var first = box.querySelector('.tw-opt,.tw-chip'); if (first && task.type !== 'number') { /* keep focus on page flow */ }
  }

  function climateSVG(c) {
    var x0 = 50, x1 = 470, y0 = 250, y1 = 30, bw = (x1 - x0) / 12, rmax = 350, tmax = 35, h = '';
    h += '<svg viewBox="0 0 520 300" role="img" aria-label="Climate graph for ' + esc(c.place) + ': rainfall bars and temperature line">';
    h += '<rect width="520" height="300" fill="#fff"/>';
    for (var r = 0; r <= rmax; r += 50) { var y = y0 - (y0 - y1) * r / rmax; h += '<line x1="' + x0 + '" x2="' + x1 + '" y1="' + y + '" y2="' + y + '" stroke="#e3ebf2"/><text x="' + (x0 - 6) + '" y="' + (y + 4) + '" text-anchor="end" font-size="11" fill="#2563c9">' + r + '</text>'; }
    for (var t = 0; t <= tmax; t += 5) { var yt = y0 - (y0 - y1) * t / tmax; h += '<text x="' + (x1 + 6) + '" y="' + (yt + 4) + '" font-size="11" fill="#b42318">' + t + '</text>'; }
    c.rain.forEach(function (v, i) { var hgt = (y0 - y1) * v / rmax; h += '<rect class="tw-bar" x="' + (x0 + i * bw + 3) + '" y="' + (y0 - hgt) + '" width="' + (bw - 6) + '" height="' + hgt + '" fill="#4a90d9"><title>' + c.monthNames[i] + ': ' + v + ' mm</title></rect><text x="' + (x0 + i * bw + bw / 2) + '" y="' + (y0 + 16) + '" text-anchor="middle" font-size="12" font-weight="700">' + c.months[i] + '</text>'; });
    var pts = c.temp.map(function (v, i) { return (x0 + i * bw + bw / 2).toFixed(1) + ',' + (y0 - (y0 - y1) * v / tmax).toFixed(1); }).join(' ');
    h += '<polyline points="' + pts + '" fill="none" stroke="#b42318" stroke-width="3"/>';
    c.temp.forEach(function (v, i) { h += '<circle cx="' + (x0 + i * bw + bw / 2) + '" cy="' + (y0 - (y0 - y1) * v / tmax) + '" r="3.5" fill="#b42318"><title>' + c.monthNames[i] + ': ' + v + '°C</title></circle>'; });
    h += '<line x1="' + x0 + '" x2="' + x1 + '" y1="' + y0 + '" y2="' + y0 + '" stroke="#11243b"/><line x1="' + x0 + '" x2="' + x0 + '" y1="' + y1 + '" y2="' + y0 + '" stroke="#2563c9"/><line x1="' + x1 + '" x2="' + x1 + '" y1="' + y1 + '" y2="' + y0 + '" stroke="#b42318"/>';
    h += '<text x="14" y="140" font-size="11" fill="#2563c9" transform="rotate(-90 14 140)" text-anchor="middle">Rainfall (mm)</text><text x="506" y="140" font-size="11" fill="#b42318" transform="rotate(90 506 140)" text-anchor="middle">Temperature (°C)</text>';
    h += '<text x="260" y="18" text-anchor="middle" font-size="13" font-weight="800">' + esc(c.place) + ' (' + esc(c.lat) + ')</text><text x="260" y="292" text-anchor="middle" font-size="10" fill="#667085">Source: ' + esc(c.source) + '. Hover or tap for exact values.</text>';
    return h + '</svg>';
  }

  /* ---------- answering ---------- */
  function fb(cls, html) { var f = $('#twFb'); f.innerHTML = '<div class="tw-fb ' + cls + '">' + html + '</div>'; }
  function wrongTry(msg) {
    E.tries++;
    var dots = $('#twTask .tw-tries'); if (dots) { dots.querySelectorAll('i').forEach(function (i, k) { i.className = k < E.tries ? 'used' : ''; }); dots.setAttribute('aria-label', (TRIES - E.tries) + ' tries left'); }
    if (E.tries >= TRIES) { fail(); return true; }
    var left = TRIES - E.tries;
    fb('bad', esc(msg || 'Not quite.') + ' You have <strong>' + left + '</strong> ' + (left === 1 ? 'try' : 'tries') + ' left, worth <strong>' + PTS[E.tries] + ' points</strong>.');
    say((msg || 'Not quite.') + ' ' + left + ' tries left.');
    return false;
  }
  function correct() {
    var pts = PTS[E.tries]; E.score += pts; $('#twScore').textContent = E.score;
    fb('ok', '<span class="gain">+' + pts + ' points</span>' + esc(E.task.explain) + '<div class="tw-row" style="margin-top:10px"><button class="tw-btn blue" type="button" id="twNext">' + (isLastTask() ? 'Finish station ✔' : 'Next question →') + '</button></div>');
    say('Correct. Plus ' + pts + ' points. ' + E.task.explain);
    if (pts === 30 && !reduce) confetti(18);
    $('#twNext').onclick = nextTask; $('#twNext').focus();
  }
  function isLastTask() { return E.ti + 1 >= tasksOf(E.d.stations[E.si]).length; }
  function answerText(task) {
    if (task.type === 'mcq') return task.options[task.answer];
    if (task.type === 'number') return task.answer + ' ' + (task.unit || '');
    if (task.type === 'label') return task.spots.map(function (s, i) { return (i + 1) + '. ' + s.a; }).join(' · ');
    if (task.type === 'sort') return task.bins.map(function (b, i) { return b + ': ' + task.items.filter(function (it) { return it[1] === i; }).map(function (it) { return it[0]; }).join(', '); }).join(' | ');
  }
  function fail() {
    var s = E.d.stations[E.si];
    E.score = E.stationStart; $('#twScore').textContent = E.score;
    $('#twTask').querySelectorAll('button.tw-opt,button.tw-chip,button.tw-drop,#twCheck,input').forEach(function (b) { b.disabled = true; });
    fb('info', '<strong>Three tries used: back to the start of this station.</strong><br>The answer was: <strong>' + esc(answerText(E.task)) + '</strong><br>' + esc(E.task.explain) + '<div class="tw-row" style="margin-top:10px"><button class="tw-btn" type="button" id="twRetry">↺ Restart "' + esc(s.title) + '"</button></div>');
    say('Three tries used. The answer was ' + answerText(E.task) + '. Back to the start of this station.');
    $('#twRetry').onclick = function () { E.ti = 0; E.tries = 0; renderStation(); };
    $('#twRetry').focus();
  }
  function nextTask() {
    E.tries = 0;
    if (!isLastTask()) { E.ti++; renderStation(); window.scrollTo({ top: $('#twTask').offsetTop - 80, behavior: reduce ? 'auto' : 'smooth' }); return; }
    E.done.push(E.si);
    var n = E.d.stations.length;
    if (E.si + 1 < n) {
      var s2 = E.d.stations[E.si + 1];
      $('#twTask').innerHTML = '<div class="tw-fb ok"><span class="gain">Station complete! ✔</span>Next stop: <strong>' + s2.icon + ' ' + esc(s2.title) + '</strong></div><div class="tw-row" style="margin-top:12px"><button class="tw-btn" type="button" id="twOn">' + esc(E.d.transport.verb || 'Travel') + ' on ' + E.d.transport.emoji + '</button></div>';
      drawScene(E.si, true); $('#twOn').focus();
      $('#twOn').onclick = function () { $('#twOn').disabled = true; window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); moveTo(E.si + 1, function () { E.si++; E.ti = 0; E.stationStart = E.score; renderStation(); }); };
    } else {
      moveTo(n, finishExpedition);
    }
  }
  function finishExpedition() {
    var d = E.d, max = maxOf(d), prev = S.stamps[d.id], best = Math.max(E.score, prev ? prev.best : 0);
    S.stamps[d.id] = { best: best, max: max, last: E.score }; save();
    var pct = Math.round(E.score / max * 100), medal = pct >= 85 ? 'Gold explorer' : pct >= 65 ? 'Silver explorer' : 'Bronze explorer';
    confetti(120);
    root.innerHTML = '<section class="tw-panel" style="text-align:center"><h2 style="color:var(--blue);margin-top:0">Expedition complete: ' + esc(d.name) + '</h2>' +
      '<div class="tw-bigstamp" style="background:' + d.stamp.colour + '"><b>' + d.stamp.icon + '</b>' + esc(d.name.toUpperCase()) + '<br>' + medal.toUpperCase() + '</div>' +
      '<p style="font-size:1.15rem">You scored <strong>' + E.score + '</strong> out of ' + max + ' (' + pct + '%).' + (prev && E.score > prev.best ? ' <strong>New best!</strong>' : '') + '</p>' +
      '<p class="tw-note">A stamp has been added to your passport. More destinations are on the way.</p>' +
      '<div class="tw-row" style="justify-content:center"><button class="tw-btn" type="button" id="twMap">🗺️ Back to the world map</button><button class="tw-btn blue" type="button" id="twAgain">Do this expedition again</button></div></section>';
    $('#twMap').onclick = function () { showMap('Stamp collected! Choose your next destination.'); };
    $('#twAgain').onclick = function () { startExpedition(d.id); };
    $('#twMap').focus(); say('Expedition complete. ' + E.score + ' out of ' + max + ' points. ' + medal + '.');
  }

  function answerMcq(btn) {
    var o = E.opts[+btn.getAttribute('data-i')];
    if (o.ok) { btn.classList.add('right'); $('#twTask').querySelectorAll('.tw-opt').forEach(function (b) { b.disabled = true; }); correct(); }
    else { btn.classList.add('wrong'); btn.disabled = true; wrongTry('Not quite.'); }
  }
  function answerNum() {
    var v = parseFloat(String($('#twNum').value).replace(',', '.').replace(/[^0-9.\-]/g, ''));
    if (isNaN(v)) { fb('bad', 'Type a number first.'); return; }
    if (Math.abs(v - E.task.answer) <= (E.task.tol || 0)) { $('#twNum').disabled = true; $('#twCheck').disabled = true; correct(); }
    else { var el = $('#twNum'); el.classList.remove('tw-shake'); void el.offsetWidth; el.classList.add('tw-shake'); if (!wrongTry(v + ' is not right.')) el.select(); }
  }

  function setupLabel(task) {
    var bank = $('#twBank'), sel = null, placed = {}, locked = {};
    var all = shuffle(task.spots.map(function (s) { return s.a; }).concat(task.extra || []));
    function drawBank() {
      var used = Object.keys(placed).map(function (k) { return placed[k]; });
      bank.innerHTML = all.filter(function (t) { return used.indexOf(t) < 0; }).map(function (t) { return '<button type="button" class="tw-chip' + (sel === t ? ' sel' : '') + '">' + esc(t) + '</button>'; }).join('') || '<span class="tw-note">All labels placed. Press Check.</span>';
      bank.querySelectorAll('.tw-chip').forEach(function (c) { c.onclick = function () { sel = sel === c.textContent ? null : c.textContent; drawBank(); var again = Array.prototype.find.call(bank.querySelectorAll('.tw-chip'), function (x) { return x.textContent === sel; }); if (again) again.focus(); say(sel ? sel + ' selected. Now choose a box.' : 'Deselected.'); }; });
      $('#twCheck').disabled = Object.keys(placed).length < task.spots.length;
    }
    $('#twTask').querySelectorAll('.tw-drop').forEach(function (b) {
      b.onclick = function () {
        var i = +b.getAttribute('data-i'); if (locked[i]) return;
        if (sel) { placed[i] = sel; sel = null; } else if (placed[i]) { delete placed[i]; } else { say('Choose a label first.'); return; }
        b.classList.toggle('filled', !!placed[i]); b.textContent = placed[i] || '?'; b.setAttribute('aria-label', 'Label box ' + (i + 1) + ', ' + (placed[i] || 'empty'));
        drawBank();
      };
    });
    $('#twCheck').onclick = function () {
      var wrong = 0;
      task.spots.forEach(function (sp, i) {
        var b = $('#twTask .tw-drop[data-i="' + i + '"]');
        if (locked[i]) return;
        if (placed[i] === sp.a) { locked[i] = true; b.classList.remove('filled'); b.classList.add('ok'); b.disabled = false; }
        else { wrong++; delete placed[i]; b.classList.remove('filled', 'bad'); void b.offsetWidth; b.classList.add('bad'); b.textContent = '?'; }
      });
      if (!wrong) { all = []; drawBank(); bank.innerHTML = ''; $('#twCheck').disabled = true; correct(); return; }
      all = all.filter(function (t) { return !Object.keys(locked).some(function (k) { return task.spots[k].a === t; }); });
      if (!wrongTry(wrong + ' label' + (wrong === 1 ? ' is' : 's are') + ' in the wrong place. The correct ones are now locked in green.')) drawBank();
    };
    drawBank();
  }

  function setupSort(task) {
    var bank = $('#twBank'), sel = null, placed = {}, locked = {};
    var items = shuffle(task.items.map(function (it, i) { return i; }));
    function draw() {
      bank.innerHTML = items.filter(function (i) { return placed[i] == null; }).map(function (i) { return '<button type="button" class="tw-chip' + (sel === i ? ' sel' : '') + '" data-i="' + i + '">' + esc(task.items[i][0]) + '</button>'; }).join('') || '<span class="tw-note">All sorted. Press Check.</span>';
      bank.querySelectorAll('.tw-chip').forEach(function (c) { c.onclick = function () { var i = +c.getAttribute('data-i'); sel = sel === i ? null : i; draw(); say(sel != null ? task.items[i][0] + ' selected. Now choose a box.' : 'Deselected.'); }; });
      $('#twTask').querySelectorAll('.tw-bin').forEach(function (bin) {
        var bi = +bin.getAttribute('data-b');
        bin.querySelector('.tw-binlist').innerHTML = items.filter(function (i) { return placed[i] === bi; }).map(function (i) { return '<button type="button" class="tw-chip' + (locked[i] ? ' ok' : '') + '" data-p="' + i + '">' + esc(task.items[i][0]) + '</button>'; }).join('');
        bin.querySelectorAll('[data-p]').forEach(function (c) { c.onclick = function (e) { e.stopPropagation(); if (sel != null) { placed[sel] = bi; sel = null; draw(); return; } var i = +c.getAttribute('data-p'); if (locked[i]) return; delete placed[i]; draw(); say(task.items[i][0] + ' moved back.'); }; });
      });
      $('#twCheck').disabled = Object.keys(placed).length < task.items.length;
    }
    $('#twTask').querySelectorAll('.tw-bin').forEach(function (bin) {
      function drop() { if (sel == null) { say('Choose an activity first.'); return; } placed[sel] = +bin.getAttribute('data-b'); sel = null; draw(); }
      bin.onclick = drop; bin.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); drop(); } };
    });
    $('#twCheck').onclick = function () {
      var wrong = 0;
      items.forEach(function (i) { if (locked[i]) return; if (placed[i] === task.items[i][1]) locked[i] = true; else { wrong++; delete placed[i]; } });
      draw();
      if (!wrong) { $('#twCheck').disabled = true; correct(); return; }
      var bins = $('#twTask .tw-bins'); bins.classList.remove('tw-shake'); void bins.offsetWidth; bins.classList.add('tw-shake');
      wrongTry(wrong + ' in the wrong box. Correct ones are locked in green.');
    };
    draw();
  }

  /* ---------- teacher tools ---------- */
  window.SBL_TEACHER_ADAPTER = {
    unlockLabel: 'stations',
    unlock: function (on) { teacherOpen = !!on; if (E && $('#twTabs')) renderStation(); },
    key: function () {
      var h = '<p class="muted">' + (TIER === 'adv' ? 'IGCSE / IB version.' : 'KS3 version.') + ' Points: 30 / 20 / 10 for the 1st / 2nd / 3rd try; three wrong tries restarts the station. "Unlock all stations" lets you jump between stations with the tabs.</p>';
      Object.keys(DEST).forEach(function (id) {
        var d = DEST[id]; h += '<h3>' + d.name + ' (max ' + maxOf(d) + ' points)</h3>';
        d.stations.forEach(function (s, si) {
          h += '<h4>Station ' + (si + 1) + ': ' + s.title + '</h4><ol>' + tasksOf(s).map(function (t) { return '<li>' + esc(t.q || t.prompt) + '<br><span class="ok">' + esc(answerText(t)) + '</span></li>'; }).join('') + '</ol>';
        });
      });
      return h;
    }
  };

  showMap();
})();
