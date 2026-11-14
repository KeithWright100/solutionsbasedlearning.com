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
  var HOME = { id: 'home', name: 'Bangkok', map: P(100.5, 13.75), lonlat: [100.5, 13.75] };
  // Suggested round-the-world route, east from Thailand and back again.
  var ORDER = ['bangkok', 'malaysia', 'singapore', 'indonesia', 'australia', 'newzealand', 'hawaii', 'alaska', 'canada', 'california', 'colorado', 'mexico', 'costarica', 'panama', 'barbados', 'andes', 'amazon', 'argentina',
    'southafrica', 'madagascar', 'malawi', 'tanzania', 'kenya', 'congo', 'egypt', 'sahara', 'gambia', 'morocco', 'spain', 'italy', 'france', 'uk', 'iceland', 'svalbard', 'arctic', 'russia', 'mongolia', 'kazakhstan', 'saudi', 'uae', 'oman', 'india', 'everest', 'bhutan', 'china', 'southkorea', 'japan'];
  function soon(id, name, lon, lat, t, emoji, colour, icon, theme) { return { id: id, name: name, map: P(lon, lat), lonlat: [lon, lat], theme: theme, transport: { name: t, emoji: emoji }, stamp: { colour: colour, icon: icon } }; }
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
    morocco: soon('morocco', 'Morocco', -7.6, 31.6, 'mule trek in the Atlas Mountains', '\uD83E\uDECF', '#b91c1c', '\uD83D\uDD4C', 'the Atlas Mountains and the desert edge'),
    italy: soon('italy', 'Italy', 14.4, 40.8, 'Vespa scooter', '\uD83D\uDEF5', '#15803d', '\uD83C\uDF0B', 'Vesuvius and Venice\u2019s floods'),
    mongolia: soon('mongolia', 'Mongolia', 106.9, 47.9, 'horse ride across the steppe', '\uD83D\uDC0E', '#0369a1', '\u26FA', 'steppe grasslands and nomadic herders'),
    kazakhstan: soon('kazakhstan', 'Kazakhstan', 61, 45, 'jeep to the Aral Sea', '\uD83D\uDE99', '#0e7490', '\uD83D\uDCA7', 'the shrinking Aral Sea'),
    japan: soon('japan', 'Japan', 139.7, 35.7, 'bullet train', '\uD83D\uDE84', '#be123c', '\uD83D\uDDFE', 'earthquakes, tsunamis and an ageing population'),
    alaska: soon('alaska', 'Alaska', -149.9, 61.2, 'bush plane', '\uD83D\uDEE9\uFE0F', '#1e3a8a', '\uD83D\uDC3B', 'glaciers, permafrost and oil in the far north'),
    costarica: soon('costarica', 'Costa Rica', -84.1, 9.9, 'zip line through the cloud forest', '\uD83C\uDF3F', '#15803d', '\uD83D\uDC38', 'rainforest, ecotourism and renewable energy'),
    panama: soon('panama', 'Panama Canal', -79.7, 9.1, 'cargo ship through the locks', '\uD83D\uDEA2', '#0369a1', '\u2693', 'the Panama Canal and world trade'),
    barbados: soon('barbados', 'Barbados', -59.55, 13.1, 'catamaran', '\u26F5', '#0e7490', '\uD83C\uDFDD\uFE0F', 'Caribbean coasts, hurricanes and tourism'),
    iceland: soon('iceland', 'Iceland', -19, 64.9, 'super jeep', '\uD83D\uDE99', '#1d4ed8', '\u2668\uFE0F', 'volcanoes, glaciers and geothermal energy'),
    svalbard: soon('svalbard', 'Svalbard', 15.6, 78.2, 'icebreaker ship', '\uD83D\uDEA2', '#3a8fb7', '\uD83E\uDDCA', 'the polar Arctic and the Global Seed Vault'),
    oman: soon('oman', 'Oman', 58.4, 23.6, 'dhow', '\u26F5', '#b45309', '\uD83C\uDFDC\uFE0F', 'wadis, deserts and water supply'),
    bhutan: soon('bhutan', 'Bhutan', 89.6, 27.5, 'mountain trek', '\uD83E\uDD7E', '#c2410c', '\uD83C\uDFEF', 'a carbon-negative Himalayan kingdom'),
    southkorea: soon('southkorea', 'South Korea', 127, 37.5, 'KTX high-speed train', '\uD83D\uDE84', '#1e40af', '\uD83C\uDFD9\uFE0F', 'rapid development and a high-tech economy'),
    madagascar: soon('madagascar', 'Madagascar', 48.4, -18.9, 'taxi-brousse and forest walk', '\uD83D\uDE90', '#166534', '\uD83D\uDC12', 'unique wildlife, rainforest and deforestation'),
    malawi: soon('malawi', 'Malawi', 34.6, -13.5, 'dugout canoe on Lake Malawi', '\uD83D\uDEF6', '#0e7490', '\uD83D\uDC1F', 'a rift valley lake, farming and development'),
    tanzania: soon('tanzania', 'Tanzania', 37.35, -3.07, 'climb up Kilimanjaro', '\uD83E\uDDD7', '#b45309', '\uD83C\uDFD4\uFE0F', 'Kilimanjaro, the Serengeti and changing climates with altitude'),
    gambia: soon('gambia', 'The Gambia', -16.6, 13.45, 'river boat up the Gambia River', '\u26F4\uFE0F', '#15803d', '\uD83C\uDF34', 'a river country, farming and coastal tourism'),
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
  function locOf(id) { if (id === 'home' || !destInfo(id)) return { x: HOME.map.x, y: HOME.map.y, name: HOME.name, ll: HOME.lonlat }; var d = destInfo(id), m = mapOf(d); return { x: m.x, y: m.y, name: d.gateway || d.name, ll: d.lonlat }; }
  /* Great-circle distance (km) and the compass direction of travel, for the flight annotation. */
  function gc(a, b) { var r = Math.PI / 180, la1 = a[1] * r, la2 = b[1] * r, dl = (b[0] - a[0]) * r; var h = Math.sin((la2 - la1) / 2), k = Math.sin(dl / 2); var km = 2 * 6371 * Math.asin(Math.sqrt(h * h + Math.cos(la1) * Math.cos(la2) * k * k)); var br = (Math.atan2(Math.sin(dl) * Math.cos(la2), Math.cos(la1) * Math.sin(la2) - Math.sin(la1) * Math.cos(la2) * Math.cos(dl)) / r + 360) % 360; return { km: km, dir: ['north', 'north-east', 'east', 'south-east', 'south', 'south-west', 'west', 'north-west'][Math.round(br / 45) % 8] }; }
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
  '.tw-rotor{animation:twRotor .22s linear infinite;transform-box:fill-box;transform-origin:center}@keyframes twRotor{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.15)}}' +
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
  '.tw-bins{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:10px}' +
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
  '.tw-mini{margin:14px 0 0;max-width:340px;border-radius:12px;overflow:hidden;border:2px solid #d6e3ee;background:#fff}.tw-mini svg{display:block;width:100%;height:auto}.tw-mini figcaption{font-size:.72rem;font-weight:700;color:#4b6378;padding:4px 10px;background:#f3f8fd}' +
  '.tw-under{display:flex;gap:14px;align-items:flex-start;justify-content:space-between}.tw-under .tw-tabs{flex:1}.tw-under .tw-mini{margin:10px 0 0;width:240px;flex:none}' +
  '@media(max-width:760px){.tw-under{flex-direction:column}.tw-under .tw-mini{width:100%;max-width:340px}}' +
  '.tw-flynote{position:absolute;left:50%;top:10px;transform:translateX(-50%);background:#11243bE6;color:#fff;border-radius:12px;padding:8px 14px;text-align:center;font-size:.9rem;line-height:1.35;box-shadow:0 6px 18px #0004;pointer-events:none;max-width:92%}.tw-flynote strong{display:block;font-size:1rem}.tw-flynote b{color:#ffd166}' +
  '.tw-postcard{display:grid;grid-template-columns:1.2fr 1fr;gap:18px;align-items:start}.tw-postcard ul{margin:6px 0 0;padding-left:20px}' +
  '.tw-bigstamp{width:170px;height:170px;margin:10px auto;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;font-weight:900;text-align:center;box-shadow:0 0 0 6px #fff inset,0 8px 20px #0003;animation:twThump .7s cubic-bezier(.2,1.6,.4,1) both}' +
  '.tw-bigstamp b{font-size:3rem;line-height:1}@keyframes twThump{0%{transform:scale(2.4) rotate(-30deg);opacity:0}100%{transform:scale(1) rotate(-8deg);opacity:1}}' +
  '.tw-sway{animation:twSway 4s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}' +
  '#tww .sway{animation:twSway 5s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}#tww .sway.s2{animation-delay:-2s}#tww .sway.s3{animation-duration:6s;animation-delay:-1s}' +
  '@keyframes twSway{0%,100%{transform:rotate(-.8deg)}50%{transform:rotate(.8deg)}}' +
  '#tww .drip{animation:twDrip 1.6s ease-in infinite}@keyframes twDrip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(40px);opacity:0}}' +
  '.tw-note{color:#4b6378;font-size:.9rem}' +
  '.tw-swim2{animation:twSwim2 16s linear infinite}.tw-swim2.r{animation-direction:reverse}@keyframes twSwim2{from{transform:translateX(-160px)}to{transform:translateX(980px)}}' +
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
    if (!DEST.bangkok) pin(HOME.map.x, HOME.map.y, '🏠 Bangkok (start)', 'home', '#11243b');
    ORDER.forEach(function (id) {
      var d = destInfo(id), live = !!DEST[id], got = S.stamps[id], m = mapOf(d);
      pin(m.x, m.y, (got ? '✅ ' : '') + (id === 'bangkok' ? '🏠 Bangkok (start)' : d.name) + (live ? '' : ' (soon)'), (live ? '' : 'soon') + (id === 'andes' ? ' below' : id === 'singapore' ? ' left' : ''), live ? d.stamp.colour : '#98a2b3',
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
    var here = d.lonlat && Math.abs(d.lonlat[0] - HOME.lonlat[0]) < 0.3 && Math.abs(d.lonlat[1] - HOME.lonlat[1]) < 0.3 && S.loc === 'home';
    box.innerHTML = '<strong>' + esc(d.name) + '</strong> · ' + (here ? 'you are already here! Explore' : 'fly to ' + esc(d.gateway) + ', then travel') + ' by ' + d.transport.emoji + ' ' + esc(d.transport.name) + '.' + (s ? '<br><span class="tw-note">Your best: ' + s.best + ' of ' + maxOf(d) + ' points. Play again to beat it.</span>' : '') +
      '<div class="tw-row" style="justify-content:center;margin-top:8px"><button class="tw-btn" type="button" id="twFly">' + (here ? 'Start exploring ' + d.transport.emoji : 'Fly there ✈️') + '</button><button class="tw-btn grey" type="button" id="twCancel">Not yet</button></div>';
    wrap.appendChild(box); $('#twFly').focus();
    $('#twCancel').onclick = function () { box.remove(); };
    $('#twFly').onclick = function () { box.remove(); fly(id); };
  }
  function fly(id) {
    var a = locOf(S.loc), b = locOf(id), svg = $('#twMapWrap svg'), plane = svg.querySelector('#twPlane'), trail = svg.querySelector('#twTrail'), trail2 = svg.querySelector('#twTrail2');
    if (S.loc === id || Math.hypot(b.x - a.x, b.y - a.y) < 4) { S.loc = id; save(); startExpedition(id); return; }
    var bx = b.x, wrap = 0; if (bx - a.x < -1000) { bx += 2000; wrap = -2000; } else if (bx - a.x > 1000) { bx -= 2000; wrap = 2000; }
    var cx = (a.x + bx) / 2, dist = Math.hypot(bx - a.x, b.y - a.y), cy = Math.min(a.y, b.y) - Math.min(220, Math.max(80, dist * .22));
    var d = 'M' + a.x + ' ' + a.y + ' Q' + cx + ' ' + cy + ' ' + bx + ' ' + b.y;
    trail.setAttribute('d', d); trail.setAttribute('opacity', '.8');
    if (wrap) { trail2.setAttribute('d', d); trail2.setAttribute('transform', 'translate(' + wrap + ' 0)'); trail2.setAttribute('opacity', '.8'); } else trail2.setAttribute('opacity', '0');
    var len = trail.getTotalLength();
    plane.setAttribute('opacity', '1');
    var g = a.ll && b.ll ? gc(a.ll, b.ll) : null, note = document.createElement('div'), hrs = g ? Math.max(1, Math.round(g.km / 850 + 0.5)) : 0;
    note.className = 'tw-flynote'; note.setAttribute('aria-hidden', 'true');
    note.innerHTML = '<strong>✈️ ' + esc(a.name) + ' → ' + esc(b.name) + '</strong>' + (g ? '<span>Heading <b>' + g.dir + '</b> · <b id="twKm">0</b> of ' + Math.round(g.km).toLocaleString('en-GB') + ' km · about ' + hrs + ' hour' + (hrs > 1 ? 's' : '') + ' in the air</span>' : '');
    $('#twMapWrap').appendChild(note);
    say('Flying ' + (g ? g.dir + ', about ' + Math.round(g.km / 100) * 100 + ' kilometres, ' : '') + 'to ' + DEST[id].gateway + '.');
    var t0 = performance.now(), dur = reduce ? 10 : 2800 + Math.min(1400, dist);
    function q(t, p0, p1, p2) { return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2; }
    function step(now) {
      var t = Math.min(1, (now - t0) / dur), e = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      var x = q(e, a.x, cx, bx), y = q(e, a.y, cy, b.y), dx = 2 * (1 - e) * (cx - a.x) + 2 * e * (bx - cx), dy = 2 * (1 - e) * (cy - a.y) + 2 * e * (b.y - cy);
      if (x < 0) x += 2000; else if (x > 2000) x -= 2000;
      var sc = 1 + Math.sin(e * Math.PI) * .5;
      plane.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + (Math.atan2(dy, dx) * 180 / Math.PI).toFixed(1) + ') scale(' + sc.toFixed(2) + ')');
      var dash = (len * e).toFixed(1) + ' ' + (len + 10).toFixed(1); trail.style.strokeDasharray = dash; trail2.style.strokeDasharray = dash;
      var kmEl = document.getElementById('twKm'); if (kmEl && g) kmEl.textContent = Math.round(g.km * e).toLocaleString('en-GB');
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

  /* Small locator map for a destination: d.locator = { box: [lonW, lonE, latS, latN], places: [[name, lon, lat, pos], ...] }.
     pos: 'r' (default), 'l', 't' or 'b' for a dot with a label; 'a' for an italic area label with no dot.
     Optional: land: [[[lon, lat], ...], ...] extra coastline polygons, rivers: [[[lon, lat], ...]] river lines, and noBase: true to skip the world basemap (for small islands). */
  function locatorSVG(d) {
    var L = d.locator; if (!L || !W) return '';
    var b = L.box, x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9, i, j;
    for (i = 0; i <= 8; i++) for (j = 0; j <= 8; j++) { var q = P(b[0] + (b[1] - b[0]) * i / 8, b[2] + (b[3] - b[2]) * j / 8); x0 = Math.min(x0, q.x); x1 = Math.max(x1, q.x); y0 = Math.min(y0, q.y); y1 = Math.max(y1, q.y); }
    var w = x1 - x0, h = y1 - y0, fs = w * 0.05, r = fs * 0.32, h2 = '';
    var rv = '';
    (L.rivers || []).forEach(function (line) { rv += '<path d="M' + line.map(function (c) { var q = P(c[0], c[1]); return q.x.toFixed(2) + ' ' + q.y.toFixed(2); }).join(' L') + '" fill="none" stroke="#3d8fc6" stroke-width="' + (fs * 0.22).toFixed(3) + '" stroke-linejoin="round" stroke-linecap="round"/>'; });
    (L.lakes || []).forEach(function (poly) { rv += '<path d="M' + poly.map(function (c) { var q = P(c[0], c[1]); return q.x.toFixed(2) + ' ' + q.y.toFixed(2); }).join(' L') + ' Z" fill="#bfe6ff" stroke="#3d8fc6" stroke-width="' + (fs * 0.06).toFixed(3) + '"/>'; });
    (L.land || []).forEach(function (poly) { h2 += '<path d="M' + poly.map(function (c) { var q = P(c[0], c[1]); return q.x.toFixed(2) + ' ' + q.y.toFixed(2); }).join(' L') + ' Z" fill="#f6f1e1" stroke="#9c9073" stroke-width="' + (fs * 0.08).toFixed(3) + '"/>'; });
    L.places.forEach(function (pl) {
      var q = P(pl[1], pl[2]), pos = pl[3] || 'r', tx = q.x, ty = q.y, anchor = 'start';
      if (pos === 'a') { h2 += '<text x="' + q.x.toFixed(2) + '" y="' + q.y.toFixed(2) + '" font-size="' + (fs * 0.9).toFixed(2) + '" font-style="italic" fill="#1d5f86" text-anchor="middle" paint-order="stroke" stroke="#dff1fb" stroke-width="' + (fs * 0.25).toFixed(2) + '">' + esc(pl[0]) + '</text>'; return; }
      if (pos === 'r') { tx += r * 1.8; ty += fs * 0.35; } else if (pos === 'l') { tx -= r * 1.8; ty += fs * 0.35; anchor = 'end'; } else if (pos === 't') { ty -= r * 2; anchor = 'middle'; } else { ty += fs * 1.15; anchor = 'middle'; }
      h2 += '<circle cx="' + q.x.toFixed(2) + '" cy="' + q.y.toFixed(2) + '" r="' + r.toFixed(2) + '" fill="#b42318" stroke="#fff" stroke-width="' + (r * 0.4).toFixed(2) + '"/>' +
        '<text x="' + tx.toFixed(2) + '" y="' + ty.toFixed(2) + '" font-size="' + fs.toFixed(2) + '" font-weight="800" fill="#11243b" text-anchor="' + anchor + '" paint-order="stroke" stroke="#fff" stroke-width="' + (fs * 0.28).toFixed(2) + '">' + esc(pl[0]) + '</text>';
    });
    return '<figure class="tw-mini"><svg viewBox="' + [x0, y0, w, h].map(function (v) { return v.toFixed(2); }).join(' ') + '" role="img" aria-label="Map of ' + esc(d.short || d.name) + ' showing ' + esc(L.places.filter(function (p) { return p[3] !== 'a'; }).map(function (p) { return p[0]; }).join(', ')) + '"><rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="#bfe3f7"/>' + (L.noBase ? '' : '<path d="' + W.d + '" fill="#f6f1e1" stroke="#9c9073" stroke-width="' + (fs * 0.08).toFixed(3) + '"/>') + rv + h2 + '</svg><figcaption>🗺️ Where you are</figcaption></figure>';
  }
  function startExpedition(id) {
    var d = DEST[id];
    E = { d: d, si: 0, ti: 0, score: 0, stationStart: 0, tries: 0, done: [] };
    root.innerHTML = '<section class="tw-panel"><div class="tw-head"><h2>' + d.stamp.icon + ' Welcome to ' + (d.the ? 'the ' : '') + esc(d.name) + '</h2><button class="tw-btn grey" type="button" id="twBack">← World map</button></div>' +
      '<div class="tw-scene" id="twScene"></div>' +
      '<div class="tw-postcard"><div><p style="font-size:1.05rem">' + esc(d.intro[TIER] || d.intro.ks3) + '</p><p><strong>' + d.stations.length + ' stations</strong> to visit. For each question: <strong>30 points</strong> first try, <strong>20</strong> second try, <strong>10</strong> third try. Three wrong tries sends you back to the start of that station.</p>' +
      '<button class="tw-btn" type="button" id="twStart">' + esc(d.transport.verb || 'Set off') + ' to station 1 ' + d.transport.emoji + '</button>' + locatorSVG(d) + '</div>' +
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
  /* Local journey scenes. Each destination picks one with d.scene: 'river' (default), 'rail', 'trail', 'sea', 'braided' (jet boat) or 'heli' (helicopter).
     Every scene has a path #twRiver for the vehicle (#twBoat) to follow. */
  var SCENE_PATHS = {
    river: 'M-20 120 C 90 60, 170 170, 290 110 S 470 50, 560 115 S 760 175, 920 95',
    rail: 'M-20 168 C 150 168, 220 128, 360 128 S 560 160, 680 150 S 820 120, 920 122',
    sea: 'M-20 70 C 120 60, 200 85, 330 72 S 560 58, 680 76 S 830 80, 920 66',
    heli: 'M-20 85 C 120 68, 220 112, 340 88 S 540 62, 640 96 S 820 112, 920 78',
    plane: 'M-20 70 C 120 50, 220 100, 340 72 S 540 44, 640 80 S 820 100, 920 62',
    road: 'M-20 176 C 120 176, 200 150, 330 150 S 540 178, 660 170 S 820 146, 920 150',
    canyon: 'M-20 176 C 120 160, 200 196, 330 178 S 540 160, 660 184 S 820 196, 920 172',
    city: 'M-20 186 C 150 186, 220 176, 360 176 S 560 190, 680 186 S 820 176, 920 178',
    zip: 'M-20 40 L 180 70 L 200 64 L 400 100 L 420 92 L 620 126 L 640 118 L 920 150',
    braided: 'M-20 150 C 100 120, 170 180, 280 150 S 440 110, 540 150 S 720 185, 920 140',
    canal: 'M-20 172 L110 172 C130 172,130 154,150 154 L200 154 C220 154,220 136,240 136 L660 136 C680 136,680 154,700 154 L750 154 C770 154,770 172,790 172 L920 172',
    terrace: 'M-20 204 C 150 200, 260 190, 380 178 S 560 152, 650 140 S 790 118, 920 108',
    pampas: 'M-20 196 C 150 192, 300 200, 450 194 S 750 188, 920 194',
    savanna: 'M-20 190 C 140 196, 260 178, 400 184 S 640 198, 760 186 S 860 180, 920 184',
    redroad: 'M-20 200 C 130 196, 240 176, 380 178 S 600 196, 720 184 S 850 172, 920 176',
    lake: 'M-20 150 C 150 140, 300 162, 450 148 S 750 138, 920 152',
    kili: 'M40 206 L250 194 L160 172 L380 156 L290 134 L470 116 L400 94 L560 76 L490 58 L600 44',
    rift: 'M-20 196 C 150 190, 300 200, 450 194 S 750 186, 920 192',
    barge: 'M-20 130 C 120 110, 260 150, 400 128 S 640 108, 760 132 S 860 140, 920 126',
    nile: 'M-20 150 C 150 142, 300 160, 450 148 S 750 140, 920 152',
    camel: 'M-20 196 C 120 180, 220 200, 330 186 S 540 170, 660 190 S 820 196, 920 184',
    coast: 'M-20 150 C 120 146, 240 160, 380 152 S 640 142, 760 150 S 860 156, 920 150',
    cable: 'M-20 200 L 900 30',
    brit: 'M-20 168 C 150 168, 240 150, 380 152 S 600 170, 720 162 S 840 150, 920 152',
    sled: 'M-20 176 C 120 166, 240 184, 380 172 S 640 160, 760 174 S 860 180, 920 170',
    taiga: 'M-20 172 C 150 172, 260 164, 400 166 S 640 176, 760 170 S 860 164, 920 166',
    dunes: 'M-20 176 C 100 150, 180 190, 290 164 S 470 140, 560 176 S 760 196, 920 160',
    trail: 'M40 206 L250 192 L150 168 L380 150 L280 126 L470 108 L390 86 L560 70 L470 52 L600 40'
  };
  function sceneMarkup(d) {
    var type = d.scene || 'river', P2 = SCENE_PATHS[type], k, h = '';
    if (type === 'sea') {
      h += '<rect width="900" height="220" fill="#bfe6ff"/><rect y="56" width="900" height="164" fill="#2f8fcf"/>';
      h += '<path d="M0 120 C 150 105, 300 135, 450 118 S 750 105, 900 125 L900 220 L0 220 Z" fill="#53b8e0" opacity=".6"/>';
      var cols = ['#ff8a65', '#ffd54f', '#ba68c8', '#66bb6a', '#f06292'];
      for (k = 0; k < 34; k++) { var cx = k * 27 + 8, cy = 200 - (k * 13) % 24; h += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (7 + k % 4 * 2) + '" fill="' + cols[k % 5] + '" opacity=".9"/>'; }
      h += '<g class="tw-swim2" fill="#ffb347"><path d="M120 150 q8 -5 16 0 q-8 5 -16 0 Z M136 150 l5 -4 v8 Z"/><path d="M140 162 q6 -4 12 0 q-6 4 -12 0 Z"/></g><g class="tw-swim2 r" fill="#7fe3ff"><path d="M600 140 q8 -5 16 0 q-8 5 -16 0 Z M616 140 l5 -4 v8 Z"/></g>';
      h += '<path class="tw-flow" d="M-20 60 Q 30 52 80 60 T 180 60 T 280 60 T 380 60 T 480 60 T 580 60 T 680 60 T 780 60 T 880 60 T 980 60" fill="none" stroke="#e6f6ff" stroke-width="3" stroke-dasharray="30 30"/>';
      h += '<path id="twRiver" d="' + P2 + '" fill="none" stroke="#e6f6ff" stroke-width="2" stroke-dasharray="3 9" opacity=".7"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><path d="M-34 -2 L30 -2 L22 10 L-28 10 Z" fill="#fff" stroke="#0f3a5c" stroke-width="2"/><rect x="-16" y="-14" width="22" height="12" rx="2" fill="#e6f6ff" stroke="#0f3a5c" stroke-width="2"/><rect x="-24" y="2" width="50" height="3" fill="#0f8a83"/><line x1="12" y1="-14" x2="12" y2="-28" stroke="#0f3a5c" stroke-width="2"/><path d="M12 -28 L26 -24 L12 -20 Z" fill="#b42318"/></g></g>';
    } else if (type === 'rail') {
      h += '<rect width="900" height="220" fill="#cfe8ff"/>';
      h += '<g fill="#fff" opacity=".9"><g class="tw-cloud" style="animation-duration:38s"><ellipse cx="80" cy="30" rx="34" ry="11"/></g><g class="tw-cloud" style="animation-duration:52s;animation-delay:-20s"><ellipse cx="300" cy="22" rx="28" ry="9"/></g></g>';
      for (k = 0; k < 24; k++) { var bx = k * 39 - 6, bh = 50 + ((k * 37) % 70), col = ['#8aa4bf', '#6f8aa8', '#9db3c8', '#7a93ad'][k % 4]; h += '<rect x="' + bx + '" y="' + (190 - bh) + '" width="34" height="' + bh + '" fill="' + col + '"/>'; for (var w = 0; w < bh - 16; w += 14) h += '<rect x="' + (bx + 6) + '" y="' + (196 - bh + w) + '" width="6" height="6" fill="#f6e7a6" opacity=".8"/><rect x="' + (bx + 20) + '" y="' + (196 - bh + w) + '" width="6" height="6" fill="#f6e7a6" opacity=".6"/>'; }
      h += '<g fill="#3fa34d">'; for (k = 0; k < 30; k++) h += '<circle cx="' + (k * 31 + 10) + '" cy="' + (200 + (k % 3) * 3) + '" r="' + (9 + k % 3 * 2) + '"/>'; h += '</g><rect y="204" width="900" height="16" fill="#5aa64a"/>';
      h += '<path d="' + P2 + '" fill="none" stroke="#5b6573" stroke-width="16" stroke-linecap="round"/><path d="' + P2 + '" fill="none" stroke="#c7ced6" stroke-width="3" stroke-dasharray="4 7"/>';
      h += '<path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><rect x="-44" y="-22" width="40" height="18" rx="6" fill="#fff" stroke="#c2410c" stroke-width="2.5"/><rect x="2" y="-22" width="44" height="18" rx="8" fill="#fff" stroke="#c2410c" stroke-width="2.5"/><g fill="#7cc3ef"><rect x="-38" y="-18" width="9" height="7" rx="1"/><rect x="-25" y="-18" width="9" height="7" rx="1"/><rect x="8" y="-18" width="9" height="7" rx="1"/><rect x="21" y="-18" width="9" height="7" rx="1"/></g><rect x="-44" y="-8" width="90" height="3" fill="#c2410c"/></g></g>';
    } else if (type === 'heli') {
      h += '<defs><linearGradient id="twSkyH" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7cc4f2"/><stop offset="1" stop-color="#d9f0ff"/></linearGradient></defs><rect width="900" height="220" fill="url(#twSkyH)"/>';
      h += '<g fill="#fff" opacity=".9"><g class="tw-cloud" style="animation-duration:40s"><ellipse cx="200" cy="26" rx="32" ry="9"/></g><g class="tw-cloud" style="animation-duration:56s;animation-delay:-22s"><ellipse cx="620" cy="18" rx="26" ry="8"/></g></g>';
      h += '<rect y="150" width="900" height="70" fill="#1f6fb2"/><path class="tw-flow" d="M-20 170 Q 30 164 80 170 T 180 170 T 280 170 T 380 170 T 480 170 T 580 170 T 680 170 T 780 170 T 880 170 T 980 170" fill="none" stroke="#8fd0f5" stroke-width="2" stroke-dasharray="30 30"/>';
      h += '<path d="M60 160 C 200 150, 300 95, 450 82 C 600 95, 700 150, 860 160 Z" fill="#4a4440"/>';
      h += '<path d="M60 160 C 160 154, 220 140, 300 132 L 330 160 Z" fill="#3f8f3a"/><path d="M860 160 C 760 154, 700 140, 620 132 L 600 160 Z" fill="#3f8f3a"/>';
      h += '<path d="M420 86 L480 86 L470 92 L430 92 Z" fill="#2a2522"/>';
      h += '<path d="M452 92 C 470 110, 440 128, 470 145 S 500 155, 520 160" fill="none" stroke="#ff7a1a" stroke-width="7" stroke-linecap="round"/><path d="M452 92 C 470 110, 440 128, 470 145 S 500 155, 520 160" fill="none" stroke="#ffd166" stroke-width="2.5" stroke-linecap="round"/>';
      h += '<g class="tw-smoke"><circle cx="450" cy="72" r="10" fill="#d8d4d0"/><circle cx="462" cy="58" r="9" fill="#e5e2df"/><circle cx="474" cy="46" r="7" fill="#efedeb"/></g><g class="tw-smoke" style="animation-delay:-1.5s"><circle cx="522" cy="150" r="8" fill="#f2f2f2"/><circle cx="530" cy="138" r="6" fill="#fafafa"/></g>';
      h += '<path d="' + P2 + '" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="3 9" opacity=".8"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><ellipse cx="0" cy="0" rx="20" ry="11" fill="#d62828" stroke="#6b0f0f" stroke-width="2"/><path d="M4 -7 Q 16 -6 17 2 L 4 2 Z" fill="#bfe6ff" stroke="#6b0f0f" stroke-width="1.5"/><rect x="-46" y="-4" width="28" height="5" rx="2" fill="#d62828" stroke="#6b0f0f" stroke-width="1.5"/><path d="M-46 -10 L-40 -2 L-46 6" fill="none" stroke="#6b0f0f" stroke-width="2"/><line x1="0" y1="-11" x2="0" y2="-16" stroke="#333" stroke-width="2"/><rect class="tw-rotor" x="-34" y="-18" width="68" height="3" rx="1.5" fill="#333"/><path d="M-12 11 L-14 17 M12 11 L14 17 M-18 17 L18 17" stroke="#333" stroke-width="2" fill="none"/></g></g>';
    } else if (type === 'plane') {
      h += '<defs><linearGradient id="twSkyP" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9ccff0"/><stop offset="1" stop-color="#eef7ff"/></linearGradient></defs><rect width="900" height="220" fill="url(#twSkyP)"/>';
      h += '<g fill="#fff" opacity=".9"><g class="tw-cloud" style="animation-duration:40s"><ellipse cx="240" cy="24" rx="30" ry="9"/></g><g class="tw-cloud" style="animation-duration:58s;animation-delay:-20s"><ellipse cx="660" cy="18" rx="26" ry="8"/></g></g>';
      h += '<path d="M0 140 L90 80 L150 110 L250 40 L340 105 L430 60 L520 112 L610 50 L700 100 L800 62 L900 105 L900 150 L0 150 Z" fill="#8c96a3"/>';
      h += '<g fill="#fff"><path d="M228 55 L250 40 L272 56 L260 62 L250 55 L240 63 Z"/><path d="M590 64 L610 50 L630 66 L619 71 L610 64 L600 71 Z"/><path d="M412 73 L430 60 L448 74 L438 78 L430 72 L421 78 Z"/></g>';
      h += '<path d="M0 148 C 150 140, 300 155, 450 145 S 750 140, 900 150 L900 220 L0 220 Z" fill="#9a8f5c"/>';
      h += '<ellipse cx="560" cy="190" rx="90" ry="14" fill="#6fb2d8"/><ellipse cx="200" cy="200" rx="60" ry="9" fill="#6fb2d8"/>';
      h += '<g fill="#2f5d3a">'; for (k = 0; k < 22; k++) { var sx = k * 43 + 10, sy = 160 + (k * 17) % 40; h += '<path d="M' + sx + ' ' + sy + ' l7 -22 l7 22 Z"/>'; } h += '</g>';
      h += '<path d="' + P2 + '" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="3 9" opacity=".8"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><path d="M-26 -4 L20 -6 Q30 -4 30 0 Q30 4 20 4 L-26 3 Z" fill="#f0b429" stroke="#7a4b00" stroke-width="2"/><path d="M-6 -4 L-14 -22 L-2 -22 L8 -5 Z" fill="#d62828" stroke="#7a1010" stroke-width="1.5"/><path d="M-26 -3 L-34 -14 L-28 -14 L-20 -4 Z" fill="#d62828"/><path d="M8 -5 Q14 -10 20 -6 L20 -3 L8 -3 Z" fill="#bfe6ff"/><rect class="tw-rotor" x="28" y="-10" width="3" height="20" rx="1.5" fill="#333"/><path d="M-14 4 L-16 12 M12 4 L14 12" stroke="#333" stroke-width="2"/><path d="M-26 13 L22 13" stroke="#333" stroke-width="3" stroke-linecap="round"/></g></g>';
    } else if (type === 'road') {
      h += '<rect width="900" height="220" fill="#bfe3fb"/><circle cx="790" cy="40" r="22" fill="#ffd166"/>';
      h += '<path d="M0 120 C 120 70, 220 100, 330 80 S 560 60, 680 95 S 840 80, 900 90 L900 220 L0 220 Z" fill="#c9a66b"/>';
      h += '<path d="M0 150 C 150 130, 300 145, 450 135 S 750 128, 900 140 L900 220 L0 220 Z" fill="#a9b86a"/>';
      h += '<rect y="196" width="900" height="24" fill="#2f8fcf"/><path class="tw-flow" d="M-20 202 Q 30 196 80 202 T 180 202 T 280 202 T 380 202 T 480 202 T 580 202 T 680 202 T 780 202 T 880 202 T 980 202" fill="none" stroke="#e6f6ff" stroke-width="2" stroke-dasharray="30 30"/>';
      for (k = 0; k < 9; k++) { var px = k * 105 + 40; h += '<g class="tw-sway" style="animation-delay:-' + k + 's"><path d="M' + px + ' 196 Q' + (px + 4) + ' 160 ' + (px + 2) + ' 128" stroke="#7a5a32" stroke-width="4" fill="none"/><path d="M' + (px + 2) + ' 128 q-16 -2 -24 10 M' + (px + 2) + ' 128 q16 -2 24 10 M' + (px + 2) + ' 128 q-8 -12 -20 -12 M' + (px + 2) + ' 128 q8 -12 20 -12" stroke="#2f7d32" stroke-width="4" fill="none" stroke-linecap="round"/></g>'; }
      h += '<path d="' + P2 + '" fill="none" stroke="#4b5563" stroke-width="18" stroke-linecap="round"/><path d="' + P2 + '" fill="none" stroke="#ffd166" stroke-width="2" stroke-dasharray="12 10"/>';
      h += '<path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><path d="M-24 0 L-22 -10 L-10 -11 L-4 -20 L12 -20 L18 -11 L26 -9 L26 0 Z" fill="#2563c9" stroke="#0f2f6b" stroke-width="2"/><path d="M-2 -18 L10 -18 L14 -11 L-6 -11 Z" fill="#bfe6ff"/><circle cx="-13" cy="1" r="5" fill="#222"/><circle cx="15" cy="1" r="5" fill="#222"/><circle cx="-13" cy="1" r="2" fill="#bbb"/><circle cx="15" cy="1" r="2" fill="#bbb"/></g></g>';
    } else if (type === 'canyon') {
      h += '<rect width="900" height="220" fill="#f6c99a"/><circle cx="120" cy="34" r="20" fill="#ffd166"/>';
      h += '<path d="M0 30 L120 30 L140 60 L260 60 L280 95 L340 100 L360 150 L0 150 Z" fill="#b5532b"/><path d="M900 40 L760 40 L740 70 L640 72 L620 108 L560 112 L540 150 L900 150 Z" fill="#a8472a"/>';
      h += '<g stroke="#d9824d" stroke-width="4" opacity=".7"><line x1="0" y1="55" x2="130" y2="55"/><line x1="0" y1="90" x2="270" y2="90"/><line x1="0" y1="125" x2="345" y2="125"/><line x1="900" y1="65" x2="745" y2="65"/><line x1="900" y1="100" x2="625" y2="100"/><line x1="900" y1="135" x2="550" y2="135"/></g>';
      h += '<path d="M0 150 L360 150 L380 168 L520 168 L540 150 L900 150 L900 220 L0 220 Z" fill="#8a3a22"/>';
      h += '<path d="' + P2 + '" fill="none" stroke="#3d8f8a" stroke-width="40" stroke-linecap="round"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="#5fb3a8" stroke-width="24" stroke-linecap="round"/>';
      h += '<path class="tw-flow" d="' + P2 + '" fill="none" stroke="#e6f6ff" stroke-width="2" stroke-dasharray="14 30" opacity=".9"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><ellipse cx="0" cy="0" rx="26" ry="9" fill="#f97316" stroke="#9a3412" stroke-width="2.5"/><circle cx="-10" cy="-10" r="4.5" fill="#f0b429"/><circle cx="2" cy="-10" r="4.5" fill="#ffd8a8"/><circle cx="14" cy="-10" r="4.5" fill="#c8a27a"/><g fill="#1d4ed8"><rect x="-14" y="-6" width="8" height="6" rx="2"/><rect x="-2" y="-6" width="8" height="6" rx="2"/><rect x="10" y="-6" width="8" height="6" rx="2"/></g><line x1="20" y1="-12" x2="32" y2="6" stroke="#5b3b22" stroke-width="2.5"/></g></g>';
    } else if (type === 'city') {
      h += '<rect width="900" height="220" fill="#d9e6f2"/><path d="M0 120 L120 70 L200 100 L300 40 L380 90 L460 60 L560 100 L660 55 L760 95 L900 70 L900 160 L0 160 Z" fill="#a9b4bf" opacity=".6"/>';
      h += '<path d="M640 58 L660 30 L680 58 Z" fill="#fff" opacity=".8"/>';
      for (k = 0; k < 24; k++) { var cbx = k * 39 - 6, cbh = 40 + ((k * 29) % 60), ccol = ['#e9c46a', '#f4a261', '#e76f51', '#2a9d8f'][k % 4]; h += '<rect x="' + cbx + '" y="' + (172 - cbh) + '" width="34" height="' + cbh + '" fill="' + ccol + '"/>'; for (var cw = 0; cw < cbh - 14; cw += 14) h += '<rect x="' + (cbx + 7) + '" y="' + (178 - cbh + cw) + '" width="6" height="6" fill="#fff" opacity=".7"/><rect x="' + (cbx + 21) + '" y="' + (178 - cbh + cw) + '" width="6" height="6" fill="#fff" opacity=".5"/>'; }
      h += '<rect y="168" width="900" height="52" fill="#6b7280"/>';
      h += '<path d="' + P2 + '" fill="none" stroke="#4b5563" stroke-width="20" stroke-linecap="round"/><path d="' + P2 + '" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="14 12"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><rect x="-34" y="-26" width="68" height="24" rx="5" fill="#d62828" stroke="#7a1010" stroke-width="2"/><g fill="#bfe6ff"><rect x="-28" y="-22" width="10" height="9" rx="1"/><rect x="-14" y="-22" width="10" height="9" rx="1"/><rect x="0" y="-22" width="10" height="9" rx="1"/><rect x="14" y="-22" width="14" height="9" rx="1"/></g><circle cx="-20" cy="-2" r="5" fill="#222"/><circle cx="20" cy="-2" r="5" fill="#222"/></g></g>';
    } else if (type === 'zip') {
      h += '<rect width="900" height="220" fill="#cfe9df"/><g fill="#fff" opacity=".7"><ellipse cx="160" cy="40" rx="80" ry="14"/><ellipse cx="560" cy="30" rx="100" ry="16"/><ellipse cx="820" cy="60" rx="70" ry="12"/></g>';
      h += '<g fill="#1f6b3a">'; for (k = 0; k < 30; k++) { var zx = k * 32, zy = 150 + (k * 13) % 30; h += '<circle cx="' + zx + '" cy="' + zy + '" r="' + (26 + k % 3 * 6) + '"/>'; } h += '</g><g fill="#2f8a4a">'; for (k = 0; k < 30; k++) h += '<circle cx="' + (k * 32 + 14) + '" cy="' + (180 + (k * 7) % 20) + '" r="22"/>'; h += '</g>';
      h += '<g stroke="#5b3b22" stroke-width="8"><line x1="190" y1="62" x2="190" y2="200"/><line x1="410" y1="96" x2="410" y2="200"/><line x1="630" y1="122" x2="630" y2="200"/></g><g fill="#8a5a33"><rect x="172" y="60" width="36" height="8"/><rect x="392" y="94" width="36" height="8"/><rect x="612" y="120" width="36" height="8"/></g>';
      h += '<path id="twRiver" d="' + P2 + '" fill="none" stroke="#333" stroke-width="2"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><circle cx="0" cy="0" r="4" fill="#666"/><line x1="0" y1="0" x2="0" y2="14" stroke="#333" stroke-width="2"/><circle cx="0" cy="18" r="6" fill="#f0b429" stroke="#11243b" stroke-width="2"/><path d="M0 24 L0 40 M0 40 L-7 52 M0 40 L7 52 M0 28 L-9 20 M0 28 L9 20" stroke="#d62828" stroke-width="4" stroke-linecap="round" fill="none"/></g></g>';
    } else if (type === 'braided') {
      h += '<defs><linearGradient id="twSkyB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8ec9f0"/><stop offset="1" stop-color="#e6f4ff"/></linearGradient></defs><rect width="900" height="220" fill="url(#twSkyB)"/>';
      h += '<g fill="#fff" opacity=".9"><g class="tw-cloud" style="animation-duration:44s"><ellipse cx="160" cy="20" rx="30" ry="9"/></g><g class="tw-cloud" style="animation-duration:60s;animation-delay:-25s"><ellipse cx="520" cy="16" rx="26" ry="8"/></g></g>';
      h += '<path d="M0 110 L70 60 L130 85 L210 30 L290 80 L360 45 L440 90 L520 25 L600 75 L680 40 L760 85 L840 50 L900 70 L900 120 L0 120 Z" fill="#7b8794"/>';
      h += '<g fill="#fff"><path d="M190 44 L210 30 L232 46 L220 52 L210 46 L200 54 Z"/><path d="M500 40 L520 25 L542 42 L530 48 L520 42 L508 50 Z"/><path d="M664 52 L680 40 L698 54 L688 58 L680 52 L672 58 Z"/><path d="M346 56 L360 45 L376 58 L366 62 L360 56 L352 62 Z"/></g>';
      h += '<path d="M0 118 C 150 100, 300 125, 450 108 S 750 100, 900 115 L900 220 L0 220 Z" fill="#4f8a3c"/>';
      h += '<path d="M-20 175 C 120 120, 200 200, 300 160 S 470 105, 560 150 S 740 200, 920 150 L920 185 C 740 225, 560 180, 460 150 S 300 215, 180 175 S 40 190, -20 205 Z" fill="#cfc6b4"/>';
      h += '<g fill="none" stroke="#7fc4d6" stroke-linecap="round"><path d="M-20 168 C 100 140, 200 190, 300 160 S 450 120, 560 155 S 740 195, 920 160" stroke-width="7"/><path d="M-20 185 C 80 175, 180 200, 260 182 S 420 150, 520 170 S 700 205, 920 172" stroke-width="5"/><path d="M60 160 C 140 150, 220 175, 330 150 S 480 120, 600 148" stroke-width="4"/></g>';
      h += '<g fill="#bfb49d"><ellipse cx="200" cy="176" rx="40" ry="5"/><ellipse cx="430" cy="146" rx="46" ry="5"/><ellipse cx="680" cy="176" rx="44" ry="5"/></g>';
      h += '<path class="tw-flow" d="' + P2 + '" fill="none" stroke="#e6f6ff" stroke-width="2" stroke-dasharray="18 42" opacity=".9"/>';
      h += '<path id="twRiver" d="' + P2 + '" fill="none" stroke="#5fb3cf" stroke-width="12" stroke-linecap="round" opacity=".85"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><path d="M-30 -2 L26 -2 L32 -8 L32 4 L22 10 L-26 10 Z" fill="#d62828" stroke="#6b0f0f" stroke-width="2"/><rect x="-14" y="-12" width="22" height="10" rx="3" fill="#e6f6ff" stroke="#6b0f0f" stroke-width="2"/><circle cx="-6" cy="-16" r="4" fill="#f0b429"/><circle cx="4" cy="-16" r="4" fill="#ffd8a8"/><g class="drip" fill="#e6f6ff"><circle cx="-36" cy="2" r="3"/><circle cx="-42" cy="-2" r="2.5"/><circle cx="-40" cy="6" r="2"/></g></g></g>';
    } else if (type === 'canal') {
      h += '<rect width="900" height="220" fill="#cfe9ff"/><circle cx="820" cy="36" r="20" fill="#ffd166"/>';
      h += '<g fill="#fff" opacity=".9"><g class="tw-cloud" style="animation-duration:42s"><ellipse cx="200" cy="28" rx="30" ry="9"/></g><g class="tw-cloud" style="animation-duration:58s;animation-delay:-24s"><ellipse cx="560" cy="20" rx="26" ry="8"/></g></g>';
      h += '<path d="M0 150 C 120 120, 220 70, 380 60 S 620 80, 720 110 S 860 140, 900 150 L900 220 L0 220 Z" fill="#3f8f3a"/><path d="M380 60 L405 52 L430 60 L420 100 L392 100 Z" fill="#b98a55"/>';
      h += '<g fill="#2a7a34">'; for (k = 0; k < 26; k++) { h += '<circle cx="' + (k * 35 + 8) + '" cy="' + (112 - Math.round(40 * Math.sin(k / 26 * Math.PI))) + '" r="' + (12 + k % 3 * 3) + '"/>'; } h += '</g>';
      h += '<rect y="168" width="135" height="52" fill="#2f7fbf"/><rect x="765" y="168" width="135" height="52" fill="#2f7fbf"/>';
      h += '<rect x="230" y="132" width="440" height="88" fill="#3d8fc6"/><g fill="#9aa3ad"><rect x="105" y="150" width="140" height="70"/><rect x="655" y="150" width="140" height="70"/></g>';
      h += '<path d="' + P2 + '" fill="none" stroke="#3d8fc6" stroke-width="22"/><g fill="#5b6573"><rect x="128" y="146" width="6" height="34"/><rect x="218" y="128" width="6" height="34"/><rect x="676" y="128" width="6" height="34"/><rect x="766" y="146" width="6" height="34"/></g>';
      h += '<g fill="#e5e7eb" stroke="#4b5563" stroke-width="1.5"><rect x="150" y="128" width="16" height="10" rx="2"/><rect x="730" y="128" width="16" height="10" rx="2"/></g>';
      h += '<path class="tw-flow" d="M240 150 Q 290 144 340 150 T 440 150 T 540 150 T 640 150" fill="none" stroke="#e6f6ff" stroke-width="2" stroke-dasharray="20 30"/>';
      h += '<path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><path d="M-40 -6 L40 -6 L32 6 L-36 6 Z" fill="#b42318" stroke="#5b1010" stroke-width="2"/><g stroke="#11243b" stroke-width="1"><rect x="-32" y="-16" width="12" height="10" fill="#2563c9"/><rect x="-20" y="-16" width="12" height="10" fill="#f0b429"/><rect x="-8" y="-16" width="12" height="10" fill="#15803d"/><rect x="4" y="-16" width="12" height="10" fill="#f97316"/><rect x="-26" y="-26" width="12" height="10" fill="#f97316"/><rect x="-14" y="-26" width="12" height="10" fill="#2563c9"/><rect x="-2" y="-26" width="12" height="10" fill="#b42318"/></g><rect x="20" y="-24" width="14" height="18" fill="#fff" stroke="#11243b" stroke-width="1.5"/><rect x="23" y="-21" width="8" height="4" fill="#7cc3ef"/></g></g>';
    } else if (type === 'terrace') {
      h += '<defs><linearGradient id="twSkyT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6fb6ec"/><stop offset="1" stop-color="#e3f2ff"/></linearGradient></defs><rect width="900" height="220" fill="url(#twSkyT)"/>';
      h += '<path d="M0 120 L90 60 L160 90 L260 20 L350 80 L440 40 L540 95 L640 30 L740 85 L820 50 L900 80 L900 140 L0 140 Z" fill="#8a8f99"/>';
      h += '<g fill="#fff"><path d="M236 37 L260 20 L284 38 L272 44 L260 37 L248 45 Z"/><path d="M618 45 L640 30 L662 46 L650 52 L640 46 L630 52 Z"/><path d="M424 51 L440 40 L456 52 L447 56 L440 51 L433 56 Z"/></g>';
      h += '<path d="M0 220 L0 130 C 200 120, 420 90, 600 96 S 820 100, 900 92 L900 220 Z" fill="#9b7b4f"/>';
      var tc = ['#7fb24a', '#5e9a3a', '#8cc152', '#6aa842'];
      for (k = 0; k < 7; k++) { var ty0 = 120 + k * 15; h += '<path d="M0 ' + (ty0 + 10) + ' C 200 ' + (ty0 + 2) + ', 420 ' + (ty0 - 26 + k * 3) + ', 600 ' + (ty0 - 20 + k * 3) + ' S 820 ' + (ty0 - 16 + k * 2) + ', 900 ' + (ty0 - 24 + k * 2) + ' L900 ' + (ty0 - 10 + k * 2) + ' C 820 ' + (ty0 - 2 + k * 2) + ', 600 ' + (ty0 - 6 + k * 3) + ', 420 ' + (ty0 - 12 + k * 3) + ' S 200 ' + (ty0 + 16) + ', 0 ' + (ty0 + 24) + ' Z" fill="' + tc[k % 4] + '" stroke="#6b5434" stroke-width="2"/>'; }
      h += '<path d="' + P2 + '" fill="none" stroke="#f3e2b8" stroke-width="5" stroke-dasharray="2 6" stroke-linecap="round"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><ellipse cx="0" cy="-14" rx="16" ry="9" fill="#f5efe6" stroke="#5b4636" stroke-width="2"/><path d="M12 -18 L16 -38 L22 -38 L20 -18 Z" fill="#f5efe6" stroke="#5b4636" stroke-width="2"/><ellipse cx="22" cy="-40" rx="7" ry="4.5" fill="#f5efe6" stroke="#5b4636" stroke-width="2"/><path d="M16 -43 L15 -50 L19 -44 M20 -44 L21 -51 L23 -44" stroke="#5b4636" stroke-width="2" fill="none"/><circle cx="24" cy="-41" r="1.2" fill="#11243b"/><g stroke="#5b4636" stroke-width="3" stroke-linecap="round"><line x1="-10" y1="-7" x2="-11" y2="4"/><line x1="-3" y1="-6" x2="-3" y2="4"/><line x1="5" y1="-6" x2="6" y2="4"/><line x1="11" y1="-7" x2="12" y2="4"/></g><path d="M-6 -22 L6 -22 L4 -12 L-4 -12 Z" fill="#d62828"/><path d="M-4 -22 L4 -22" stroke="#f0b429" stroke-width="2"/></g></g>';
    } else if (type === 'pampas') {
      h += '<rect width="900" height="220" fill="#bfe3fb"/><circle cx="120" cy="40" r="20" fill="#ffd166"/>';
      h += '<path d="M560 120 L620 70 L660 95 L720 50 L780 92 L840 64 L900 100 L900 130 L560 130 Z" fill="#9aa5b4" opacity=".7"/><g fill="#fff" opacity=".8"><path d="M708 60 L720 50 L732 61 Z"/><path d="M830 72 L840 64 L851 73 Z"/></g>';
      h += '<rect y="128" width="900" height="92" fill="#9cc65a"/><g fill="#d9c36a"><rect y="140" width="300" height="22"/><rect x="420" y="146" width="260" height="18"/></g><g fill="#7fae46"><rect x="300" y="140" width="120" height="24"/></g>';
      h += '<g stroke="#7a5a32" stroke-width="2">'; for (k = 0; k < 19; k++) h += '<line x1="' + (k * 50) + '" y1="168" x2="' + (k * 50) + '" y2="182"/>'; h += '<line x1="0" y1="172" x2="900" y2="172" stroke-width="1"/></g>';
      for (k = 0; k < 7; k++) { var cxk = 80 + k * 120 + (k % 2) * 30, cyk = 152 + (k % 3) * 4; h += '<g><ellipse cx="' + cxk + '" cy="' + cyk + '" rx="12" ry="6" fill="' + (k % 2 ? '#5b3b22' : '#222') + '"/><rect x="' + (cxk + 9) + '" y="' + (cyk - 7) + '" width="7" height="6" rx="2" fill="' + (k % 2 ? '#5b3b22' : '#222') + '"/><g stroke="#333" stroke-width="2"><line x1="' + (cxk - 7) + '" y1="' + (cyk + 4) + '" x2="' + (cxk - 7) + '" y2="' + (cyk + 10) + '"/><line x1="' + (cxk + 6) + '" y1="' + (cyk + 4) + '" x2="' + (cxk + 6) + '" y2="' + (cyk + 10) + '"/></g></g>'; }
      h += '<path d="' + P2 + '" fill="none" stroke="#c9a66b" stroke-width="14" stroke-linecap="round"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><ellipse cx="0" cy="-14" rx="20" ry="9" fill="#8a4b20" stroke="#4a2810" stroke-width="2"/><path d="M14 -18 L24 -34 L32 -30 L22 -14 Z" fill="#8a4b20" stroke="#4a2810" stroke-width="2"/><path d="M-20 -16 q-10 4 -8 14" stroke="#4a2810" stroke-width="3" fill="none"/><g stroke="#4a2810" stroke-width="3" stroke-linecap="round"><line x1="-12" y1="-6" x2="-14" y2="6"/><line x1="-4" y1="-6" x2="-4" y2="6"/><line x1="8" y1="-6" x2="9" y2="6"/><line x1="14" y1="-7" x2="16" y2="6"/></g><circle cx="-2" cy="-36" r="5" fill="#f0b429"/><path d="M-10 -40 L6 -40 L3 -45 L-7 -45 Z" fill="#11243b"/><path d="M-6 -31 L4 -31 L6 -18 L-8 -18 Z" fill="#2563c9"/><path d="M-8 -20 L-12 -10 M4 -20 L8 -10" stroke="#11243b" stroke-width="3"/></g></g>';
    } else if (type === 'savanna') {
      h += '<rect width="900" height="220" fill="#fde7b0"/><circle cx="760" cy="44" r="24" fill="#ff9f43"/>';
      h += '<rect y="140" width="900" height="80" fill="#d8b45a"/><g stroke="#b8923a" stroke-width="2">'; for (k = 0; k < 60; k++) h += '<line x1="' + (k * 15 + 4) + '" y1="' + (150 + (k * 7) % 40) + '" x2="' + (k * 15 + 8) + '" y2="' + (140 + (k * 7) % 40) + '"/>'; h += '</g>';
      [[110, 120, 1], [330, 110, 1.3], [620, 118, 1.1], [820, 124, .9]].forEach(function (t) { var tx2 = t[0], ty2 = t[1], sc = t[2]; h += '<path d="M' + tx2 + ' 150 L' + tx2 + ' ' + ty2 + ' M' + tx2 + ' ' + (ty2 + 8) + ' L' + (tx2 - 14 * sc) + ' ' + (ty2 - 4) + ' M' + tx2 + ' ' + (ty2 + 8) + ' L' + (tx2 + 16 * sc) + ' ' + (ty2 - 4) + '" stroke="#5b3b22" stroke-width="' + (4 * sc) + '" fill="none"/><ellipse cx="' + tx2 + '" cy="' + (ty2 - 8) + '" rx="' + (42 * sc) + '" ry="' + (9 * sc) + '" fill="#4f7a2a"/>'; });
      h += '<g fill="#d9a441" stroke="#7a5a32" stroke-width="1.5"><path d="M480 146 L484 104 L488 104 L492 132 L506 132 L510 146 Z"/><circle cx="486" cy="100" r="4"/></g><g fill="#7a5a32"><circle cx="496" cy="136" r="1.5"/><circle cx="502" cy="140" r="1.5"/></g>';
      h += '<g fill="#7d7f86"><ellipse cx="230" cy="138" rx="22" ry="14"/><rect x="212" y="146" width="7" height="12"/><rect x="238" y="146" width="7" height="12"/><path d="M250 132 q14 4 10 22" stroke="#7d7f86" stroke-width="5" fill="none"/></g>';
      h += '<path d="' + P2 + '" fill="none" stroke="#b9874a" stroke-width="16" stroke-linecap="round"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><rect x="-34" y="-24" width="64" height="18" rx="3" fill="#4d7c0f" stroke="#1f3a08" stroke-width="2"/><rect x="-30" y="-36" width="48" height="12" fill="none" stroke="#1f3a08" stroke-width="2"/><rect x="18" y="-22" width="12" height="9" fill="#bfe6ff"/><circle cx="-12" cy="-30" r="4" fill="#f0b429"/><circle cx="2" cy="-30" r="4" fill="#ffd8a8"/><circle cx="-20" cy="-4" r="7" fill="#222"/><circle cx="18" cy="-4" r="7" fill="#222"/><circle cx="-20" cy="-4" r="2.5" fill="#bbb"/><circle cx="18" cy="-4" r="2.5" fill="#bbb"/></g></g>';
    } else if (type === 'redroad') {
      h += '<rect width="900" height="220" fill="#bfe3fb"/><circle cx="160" cy="40" r="20" fill="#ffd166"/>';
      h += '<path d="M0 140 C 150 120, 300 130, 450 118 S 750 112, 900 124 L900 220 L0 220 Z" fill="#c2703d"/><path d="M0 160 C 200 150, 400 166, 600 154 S 820 150, 900 158 L900 220 L0 220 Z" fill="#a8582c"/>';
      [[120, 1], [300, 1.2], [520, 1.1], [700, 1.3], [860, 1]].forEach(function (b) { var bx2 = b[0], sc2 = b[1], top = 150 - 70 * sc2; h += '<path d="M' + (bx2 - 8 * sc2) + ' 152 L' + (bx2 - 6 * sc2) + ' ' + top + ' L' + (bx2 + 6 * sc2) + ' ' + top + ' L' + (bx2 + 8 * sc2) + ' 152 Z" fill="#9a7b66"/><path d="M' + bx2 + ' ' + top + ' l-14 -10 M' + bx2 + ' ' + top + ' l14 -10 M' + bx2 + ' ' + top + ' l-4 -14 M' + bx2 + ' ' + top + ' l6 -13" stroke="#7a5f4e" stroke-width="3"/><ellipse cx="' + bx2 + '" cy="' + (top - 12) + '" rx="20" ry="7" fill="#4f7a2a"/>'; });
      h += '<path d="' + P2 + '" fill="none" stroke="#d98a52" stroke-width="18" stroke-linecap="round"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><rect x="-34" y="-28" width="66" height="24" rx="6" fill="#f4f1de" stroke="#7a1010" stroke-width="2"/><rect x="-34" y="-12" width="66" height="5" fill="#d62828"/><g fill="#7cc3ef"><rect x="-28" y="-24" width="10" height="8"/><rect x="-14" y="-24" width="10" height="8"/><rect x="0" y="-24" width="10" height="8"/><rect x="16" y="-24" width="12" height="8"/></g><g stroke="#5b3b22" stroke-width="1.5"><rect x="-26" y="-38" width="14" height="10" fill="#f0b429"/><rect x="-10" y="-36" width="12" height="8" fill="#8a4b20"/><rect x="4" y="-40" width="10" height="12" fill="#2563c9"/></g><circle cx="-20" cy="-3" r="6" fill="#222"/><circle cx="20" cy="-3" r="6" fill="#222"/></g></g>';
    } else if (type === 'lake') {
      h += '<rect width="900" height="220" fill="#cfe9ff"/><circle cx="780" cy="36" r="20" fill="#ffd166"/>';
      h += '<path d="M0 70 L120 40 L240 60 L300 50 L300 100 L0 100 Z" fill="#7a8ea3"/><path d="M600 55 L700 30 L820 48 L900 40 L900 100 L600 100 Z" fill="#7a8ea3"/>';
      h += '<rect y="96" width="900" height="100" fill="#2f8fcf"/><path d="M0 120 C 150 110, 300 130, 450 118 S 750 108, 900 122 L900 196 L0 196 Z" fill="#3fa5dc" opacity=".6"/>';
      h += '<g class="tw-swim2" fill="#ffd54f"><path d="M200 172 q8 -5 16 0 q-8 5 -16 0 Z M216 172 l5 -4 v8 Z"/></g><g class="tw-swim2 r" fill="#7fe3ff"><path d="M620 178 q8 -5 16 0 q-8 5 -16 0 Z M636 178 l5 -4 v8 Z"/></g>';
      h += '<path class="tw-flow" d="M-20 110 Q 30 104 80 110 T 180 110 T 280 110 T 380 110 T 480 110 T 580 110 T 680 110 T 780 110 T 880 110 T 980 110" fill="none" stroke="#e6f6ff" stroke-width="2" stroke-dasharray="30 30"/>';
      h += '<rect y="194" width="900" height="26" fill="#f2d79b"/><g fill="#7a4b20">'; for (k = 0; k < 5; k++) h += '<path d="M' + (60 + k * 190) + ' 204 l40 0 l-6 6 l-28 0 Z"/>'; h += '</g>';
      h += '<path id="twRiver" d="' + P2 + '" fill="none" stroke="#e6f6ff" stroke-width="2" stroke-dasharray="3 9" opacity=".7"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><path d="M-30 -2 Q0 8 30 -2 L26 -6 L-26 -6 Z" fill="#6b3d17" stroke="#3f220b" stroke-width="2"/><circle cx="-2" cy="-20" r="5" fill="#5b3b22"/><rect x="-6" y="-16" width="8" height="10" rx="2" fill="#f0b429"/><line x1="6" y1="-22" x2="18" y2="4" stroke="#5b3b22" stroke-width="2.5"/></g></g>';
    } else if (type === 'kili') {
      h += '<defs><clipPath id="twKc"><path d="M0 220 L0 196 L200 160 L420 80 L540 40 L660 40 L780 80 L900 130 L900 220 Z"/></clipPath><linearGradient id="twSkyK" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5aa6e6"/><stop offset="1" stop-color="#dff0ff"/></linearGradient></defs><rect width="900" height="220" fill="url(#twSkyK)"/>';
      h += '<g clip-path="url(#twKc)"><rect width="900" height="220" fill="#1f6b3a"/><rect width="900" height="150" fill="#8a9a4a"/><rect width="900" height="110" fill="#a8977a"/><rect width="900" height="62" fill="#fff"/></g>';
      h += '<path d="M540 40 L660 40" stroke="#e6f6ff" stroke-width="3"/><g fill="#d9a441">'; for (k = 0; k < 12; k++) h += '<rect x="' + (k * 75) + '" y="208" width="60" height="12"/>'; h += '</g>';
      h += '<g fill="#fff" opacity=".85"><ellipse cx="260" cy="150" rx="70" ry="10"/><ellipse cx="760" cy="140" rx="60" ry="9"/></g>';
      h += '<path d="' + P2 + '" fill="none" stroke="#f3e2b8" stroke-width="5" stroke-dasharray="2 6" stroke-linecap="round"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><circle cx="0" cy="-30" r="6" fill="#5b3b22" stroke="#11243b" stroke-width="2"/><path d="M0 -24 L0 -8 M0 -8 L-6 4 M0 -8 L6 4 M0 -19 L-8 -12 M0 -19 L9 -14" stroke="#11243b" stroke-width="3" stroke-linecap="round" fill="none"/><rect x="-10" y="-24" width="7" height="12" rx="2" fill="#2563c9"/><line x1="9" y1="-14" x2="13" y2="4" stroke="#7a5a32" stroke-width="2"/></g></g>';
    } else if (type === 'rift') {
      h += '<rect width="900" height="220" fill="#d6ecfb"/><circle cx="460" cy="34" r="18" fill="#ffd166"/>';
      h += '<path d="M0 60 L170 60 L230 160 L0 160 Z" fill="#7a6a4f"/><path d="M900 70 L720 70 L660 160 L900 160 Z" fill="#7a6a4f"/><g fill="#2f7a3a"><rect y="52" width="170" height="10"/><rect x="720" y="62" width="180" height="10"/></g>';
      h += '<path d="M260 150 L320 92 L340 92 L400 150 Z" fill="#6b5b4e"/><path d="M322 92 L338 92 L334 98 L326 98 Z" fill="#3f352d"/>';
      h += '<rect y="148" width="900" height="72" fill="#d8b45a"/><ellipse cx="560" cy="166" rx="110" ry="12" fill="#6fb2d8"/><g fill="#f48fb1">'; for (k = 0; k < 16; k++) h += '<circle cx="' + (470 + k * 11) + '" cy="' + (162 + (k % 3) * 3) + '" r="2.5"/>'; h += '</g>';
      h += '<g stroke="#e5e7eb" stroke-width="3"><line x1="760" y1="120" x2="760" y2="150"/><line x1="780" y1="124" x2="780" y2="150"/></g><g class="tw-smoke"><circle cx="760" cy="112" r="7" fill="#f2f2f2"/><circle cx="780" cy="116" r="6" fill="#f2f2f2"/></g>';
      h += '<path d="' + P2 + '" fill="none" stroke="#b9874a" stroke-width="16" stroke-linecap="round"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><rect x="-34" y="-24" width="64" height="18" rx="3" fill="#b45309" stroke="#5b2a04" stroke-width="2"/><rect x="-30" y="-36" width="48" height="12" fill="none" stroke="#5b2a04" stroke-width="2"/><rect x="18" y="-22" width="12" height="9" fill="#bfe6ff"/><circle cx="-12" cy="-30" r="4" fill="#f0b429"/><circle cx="2" cy="-30" r="4" fill="#5b3b22"/><circle cx="-20" cy="-4" r="7" fill="#222"/><circle cx="18" cy="-4" r="7" fill="#222"/><circle cx="-20" cy="-4" r="2.5" fill="#bbb"/><circle cx="18" cy="-4" r="2.5" fill="#bbb"/></g></g>';
    } else if (type === 'barge') {
      h += '<rect width="900" height="220" fill="#cfe3d6"/><g fill="#fff" opacity=".7"><ellipse cx="200" cy="24" rx="60" ry="10"/><ellipse cx="640" cy="18" rx="80" ry="12"/></g>';
      h += '<g fill="#1f6b2a">'; for (k = 0; k < 32; k++) h += '<circle cx="' + (k * 29) + '" cy="' + (58 + (k * 11) % 14) + '" r="' + (18 + k % 3 * 5) + '"/>'; h += '</g><g fill="#2a8a36">'; for (k = 0; k < 32; k++) h += '<circle cx="' + (k * 29 + 12) + '" cy="' + (200 + (k * 7) % 10) + '" r="' + (16 + k % 3 * 4) + '"/>'; h += '</g>';
      h += '<rect y="70" width="900" height="122" fill="#8a6a3f"/><path d="M0 80 C 200 90, 400 74, 600 86 S 800 78, 900 82 L900 184 C 700 176, 500 190, 300 180 S 100 188, 0 182 Z" fill="#a07c4a"/>';
      h += '<path class="tw-flow" d="M-20 150 Q 30 144 80 150 T 180 150 T 280 150 T 380 150 T 480 150 T 580 150 T 680 150 T 780 150 T 880 150 T 980 150" fill="none" stroke="#c9a877" stroke-width="2" stroke-dasharray="30 30"/>';
      h += '<g fill="#3e8f3e" opacity=".85"><ellipse cx="140" cy="168" rx="18" ry="5"/><ellipse cx="520" cy="100" rx="22" ry="5"/><ellipse cx="760" cy="170" rx="16" ry="4"/></g>';
      h += '<path id="twRiver" d="' + P2 + '" fill="none" stroke="#e6d3b0" stroke-width="2" stroke-dasharray="3 9" opacity=".7"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><path d="M-46 -4 L42 -4 L36 6 L-42 6 Z" fill="#5b6573" stroke="#2b3138" stroke-width="2"/><rect x="-40" y="-18" width="44" height="14" fill="#e5e7eb" stroke="#2b3138" stroke-width="1.5"/><g fill="#d62828"><rect x="-36" y="-26" width="10" height="8"/><rect x="-22" y="-26" width="10" height="8"/></g><g fill="#2563c9"><rect x="-8" y="-26" width="10" height="8"/></g><rect x="10" y="-22" width="20" height="18" fill="#f4f1de" stroke="#2b3138" stroke-width="1.5"/><rect x="14" y="-18" width="12" height="5" fill="#7cc3ef"/></g></g>';
    } else if (type === 'nile') {
      h += '<rect width="900" height="220" fill="#ffe8b8"/><circle cx="780" cy="40" r="22" fill="#ffb347"/>';
      h += '<path d="M0 100 C 200 90, 400 104, 600 94 S 800 98, 900 92 L900 120 L0 120 Z" fill="#e8c27a"/>';
      h += '<g fill="#d9b25f"><path d="M120 112 L170 52 L220 112 Z"/><path d="M210 112 L245 70 L280 112 Z"/></g><path d="M170 52 L220 112 L195 112 Z" fill="#c49a45"/>';
      h += '<rect y="112" width="900" height="16" fill="#5f9a3a"/><g fill="#3f7f2a">'; for (k = 0; k < 14; k++) { var px2 = 30 + k * 65; h += '<path d="M' + px2 + ' 118 L' + px2 + ' 92" stroke="#7a5a32" stroke-width="3"/><path d="M' + px2 + ' 92 q-12 0 -18 8 M' + px2 + ' 92 q12 0 18 8 M' + px2 + ' 92 q-6 -10 -16 -10 M' + px2 + ' 92 q6 -10 16 -10" stroke="#3f7f2a" stroke-width="3" fill="none"/>'; } h += '</g>';
      h += '<rect y="126" width="900" height="70" fill="#2f7fbf"/><path class="tw-flow" d="M-20 160 Q 30 154 80 160 T 180 160 T 280 160 T 380 160 T 480 160 T 580 160 T 680 160 T 780 160 T 880 160 T 980 160" fill="none" stroke="#e6f6ff" stroke-width="2" stroke-dasharray="30 30"/>';
      h += '<rect y="194" width="900" height="26" fill="#6aa842"/>';
      h += '<path id="twRiver" d="' + P2 + '" fill="none" stroke="#e6f6ff" stroke-width="2" stroke-dasharray="3 9" opacity=".7"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><path d="M-30 -2 Q0 10 30 -2 L24 -6 L-24 -6 Z" fill="#fff" stroke="#0f3a5c" stroke-width="2"/><line x1="-2" y1="-6" x2="-2" y2="-44" stroke="#5b3b22" stroke-width="2.5"/><path d="M-2 -44 L-30 -6 L22 -6 Z" fill="#fff" stroke="#9aa3ad" stroke-width="1.5"/><circle cx="14" cy="-12" r="4" fill="#5b3b22"/></g></g>';
    } else if (type === 'camel') {
      h += '<rect width="900" height="220" fill="#ffe2a8"/><circle cx="140" cy="44" r="26" fill="#ff9f43"/>';
      h += '<path d="M0 140 C 100 90, 180 90, 260 130 S 420 80, 520 120 S 700 70, 800 115 S 880 110, 900 120 L900 220 L0 220 Z" fill="#e9b864"/>';
      h += '<path d="M0 170 C 120 140, 220 150, 320 168 S 520 140, 640 160 S 820 150, 900 162 L900 220 L0 220 Z" fill="#f2c977"/>';
      h += '<g fill="#d9a441" opacity=".7"><path d="M180 108 q40 -30 80 22 Z"/><path d="M430 104 q40 -28 90 16 Z"/><path d="M700 92 q40 -26 100 22 Z"/></g>';
      h += '<path d="' + P2 + '" fill="none" stroke="#c98a3c" stroke-width="3" stroke-dasharray="2 8" stroke-linecap="round"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><ellipse cx="0" cy="-16" rx="20" ry="9" fill="#c98a3c" stroke="#7a4b1c" stroke-width="2"/><path d="M-8 -24 q8 -14 16 0" fill="#c98a3c" stroke="#7a4b1c" stroke-width="2"/><path d="M16 -20 L26 -38 L33 -36 L22 -16 Z" fill="#c98a3c" stroke="#7a4b1c" stroke-width="2"/><ellipse cx="31" cy="-38" rx="6" ry="4" fill="#c98a3c" stroke="#7a4b1c" stroke-width="2"/><g stroke="#7a4b1c" stroke-width="3" stroke-linecap="round"><line x1="-12" y1="-9" x2="-14" y2="4"/><line x1="-4" y1="-8" x2="-4" y2="4"/><line x1="8" y1="-8" x2="9" y2="4"/><line x1="14" y1="-9" x2="16" y2="4"/></g><circle cx="0" cy="-40" r="5" fill="#5b3b22"/><path d="M-7 -36 L7 -36 L5 -26 L-5 -26 Z" fill="#1d4f91"/><path d="M-6 -46 L6 -46 L4 -42 L-4 -42 Z" fill="#1d4f91"/></g></g>';
    } else if (type === 'coast') {
      h += '<rect width="900" height="220" fill="#bfe3fb"/><circle cx="820" cy="38" r="22" fill="#ffd166"/>';
      h += '<path d="M0 80 C 150 40, 260 70, 380 50 S 620 30, 760 60 S 860 50, 900 56 L900 140 L0 140 Z" fill="#c9a66b"/>';
      h += '<g fill="#e9eef3" stroke="#9aa3ad" stroke-width="1">'; for (k = 0; k < 14; k++) { var hx = 30 + k * 64, hh = 40 + (k * 23) % 50; h += '<rect x="' + hx + '" y="' + (140 - hh) + '" width="30" height="' + hh + '"/>'; } h += '</g>';
      h += '<g fill="#7cc3ef">'; for (k = 0; k < 14; k++) { var wx = 36 + k * 64, whh = 40 + (k * 23) % 50; for (var wy = 146 - whh; wy < 132; wy += 10) h += '<rect x="' + wx + '" y="' + wy + '" width="18" height="4"/>'; } h += '</g>';
      h += '<rect y="138" width="900" height="26" fill="#6b7280"/>';
      h += '<rect y="164" width="900" height="14" fill="#f4dfa6"/><g fill="#e76f51">'; for (k = 0; k < 10; k++) h += '<path d="M' + (40 + k * 92) + ' 168 l10 -12 l10 12 Z"/>'; h += '</g>';
      h += '<rect y="178" width="900" height="42" fill="#2f8fcf"/><path class="tw-flow" d="M-20 196 Q 30 190 80 196 T 180 196 T 280 196 T 380 196 T 480 196 T 580 196 T 680 196 T 780 196 T 880 196 T 980 196" fill="none" stroke="#e6f6ff" stroke-width="2" stroke-dasharray="30 30"/>';
      h += '<path d="' + P2 + '" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="14 12"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><rect x="-36" y="-26" width="72" height="24" rx="6" fill="#fff" stroke="#7a1010" stroke-width="2"/><rect x="-36" y="-12" width="72" height="5" fill="#dc2626"/><g fill="#bfe6ff"><rect x="-30" y="-22" width="12" height="8" rx="1"/><rect x="-14" y="-22" width="12" height="8" rx="1"/><rect x="2" y="-22" width="12" height="8" rx="1"/><rect x="18" y="-22" width="14" height="8" rx="1"/></g><circle cx="-22" cy="-2" r="5" fill="#222"/><circle cx="22" cy="-2" r="5" fill="#222"/></g></g>';
    } else if (type === 'cable') {
      h += '<rect width="900" height="220" fill="#cfe8ff"/>';
      h += '<path d="M0 220 L0 150 L120 110 L200 140 L320 60 L420 120 L520 40 L600 90 L700 10 L790 70 L900 30 L900 220 Z" fill="#8a96a8"/>';
      h += '<g fill="#fff"><path d="M300 74 L320 60 L340 76 L330 82 L310 80 Z"/><path d="M500 54 L520 40 L540 56 L530 62 L510 60 Z"/><path d="M680 24 L700 10 L722 26 L712 32 L690 30 Z"/><path d="M880 40 L900 30 L900 48 Z"/></g>';
      h += '<path d="M380 220 C 420 170, 520 150, 600 120 L640 220 Z" fill="#e8f4fb"/><path d="M420 220 C 450 180, 520 160, 600 132" fill="none" stroke="#9fc6dd" stroke-width="2"/>';
      h += '<path d="M0 220 L0 190 C 120 180, 240 196, 360 190 L360 220 Z" fill="#3f7f3a"/><g fill="#1f5a2a">'; for (k = 0; k < 12; k++) h += '<path d="M' + (10 + k * 28) + ' 200 l10 -24 l10 24 Z"/>'; h += '</g>';
      h += '<g stroke="#4b5563" stroke-width="5"><line x1="300" y1="200" x2="300" y2="140"/><line x1="610" y1="124" x2="610" y2="76"/></g>';
      h += '<path id="twRiver" d="' + P2 + '" fill="none" stroke="#333" stroke-width="2"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><circle cx="0" cy="0" r="4" fill="#555"/><line x1="0" y1="0" x2="0" y2="12" stroke="#333" stroke-width="2.5"/><rect x="-16" y="12" width="32" height="24" rx="5" fill="#d62828" stroke="#7a1010" stroke-width="2"/><rect x="-11" y="16" width="22" height="9" rx="2" fill="#bfe6ff"/></g></g>';
    } else if (type === 'brit') {
      h += '<rect width="900" height="220" fill="#cfdbe6"/><g fill="#9aa8b6" opacity=".9"><ellipse cx="160" cy="30" rx="90" ry="18"/><ellipse cx="480" cy="24" rx="110" ry="20"/><ellipse cx="780" cy="34" rx="90" ry="16"/></g>';
      h += '<g stroke="#6b8fb3" stroke-width="2" opacity=".7">'; for (k = 0; k < 24; k++) h += '<line x1="' + (100 + k * 30) + '" y1="' + (48 + (k % 3) * 4) + '" x2="' + (94 + k * 30) + '" y2="' + (64 + (k % 3) * 4) + '"/>'; h += '</g>';
      h += '<path d="M0 120 C 150 90, 300 110, 450 96 S 750 84, 900 104 L900 220 L0 220 Z" fill="#7fb069"/><path d="M0 140 C 200 124, 400 136, 600 128 S 820 124, 900 132 L900 220 L0 220 Z" fill="#5f9a4a"/>';
      h += '<g stroke="#3f6f32" stroke-width="3" fill="none"><path d="M120 104 L180 134"/><path d="M380 100 L340 132"/><path d="M640 92 L700 128"/></g>';
      h += '<g fill="#e8e1d0" stroke="#7a6a52" stroke-width="1.5"><rect x="520" y="76" width="34" height="22"/><path d="M516 76 L537 62 L558 76 Z" fill="#8a4b3a"/><rect x="560" y="60" width="10" height="38"/><path d="M560 60 L565 46 L570 60 Z" fill="#8a4b3a"/></g>';
      h += '<path d="M0 196 C 200 186, 400 200, 600 192 S 820 188, 900 196 L900 220 L0 220 Z" fill="#4a90c8"/>';
      h += '<path d="' + P2 + '" fill="none" stroke="#6b5b4e" stroke-width="12"/><path d="' + P2 + '" fill="none" stroke="#c9c2b5" stroke-width="2" stroke-dasharray="4 6"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><path d="M-40 -2 L-40 -22 Q-40 -26 -34 -26 L26 -26 Q40 -24 44 -8 L44 -2 Z" fill="#1e3a8a" stroke="#0b1b45" stroke-width="2"/><rect x="-40" y="-12" width="84" height="4" fill="#f4b400"/><g fill="#bfe6ff"><rect x="-34" y="-22" width="12" height="8" rx="1"/><rect x="-18" y="-22" width="12" height="8" rx="1"/><rect x="-2" y="-22" width="12" height="8" rx="1"/><rect x="14" y="-22" width="12" height="8" rx="1"/></g><circle cx="-26" cy="0" r="4" fill="#222"/><circle cx="28" cy="0" r="4" fill="#222"/></g></g>';
    } else if (type === 'sled') {
      h += '<rect width="900" height="220" fill="#1b2a4a"/><g fill="none" stroke-width="10" opacity=".55"><path d="M0 60 C 200 20, 400 90, 600 40 S 820 60, 900 30" stroke="#4ade80"/><path d="M0 80 C 220 50, 420 110, 640 60 S 840 90, 900 60" stroke="#a78bfa" opacity=".6"/></g>';
      h += '<g fill="#fff">'; for (k = 0; k < 40; k++) h += '<circle cx="' + ((k * 97) % 900) + '" cy="' + ((k * 41) % 90) + '" r="1.2"/>'; h += '</g>';
      h += '<path d="M0 140 L90 96 L170 130 L260 80 L360 126 L470 90 L560 128 L660 84 L760 124 L900 92 L900 220 L0 220 Z" fill="#c7d4e6"/>';
      h += '<rect y="150" width="900" height="70" fill="#eef4fb"/><path d="M0 150 C 200 140, 400 158, 600 146 S 820 150, 900 146 L900 160 L0 160 Z" fill="#dfe8f3"/>';
      h += '<path d="' + P2 + '" fill="none" stroke="#c3cfdf" stroke-width="10"/><path d="' + P2 + '" fill="none" stroke="#a9b8cc" stroke-width="2" stroke-dasharray="3 6"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><path d="M-46 0 L-6 0 Q-2 0 -2 -4" fill="none" stroke="#7a4b1c" stroke-width="3"/><rect x="-42" y="-12" width="30" height="10" fill="#b45309"/><circle cx="-30" cy="-18" r="5" fill="#d62828"/><line x1="-12" y1="-8" x2="44" y2="-8" stroke="#555" stroke-width="1.5"/>';
      [6, 22, 38].forEach(function (dx) { h += '<ellipse cx="' + dx + '" cy="-8" rx="7" ry="4" fill="#9aa3ad"/><circle cx="' + (dx + 7) + '" cy="-11" r="3" fill="#9aa3ad"/><g stroke="#6b7280" stroke-width="1.5"><line x1="' + (dx - 4) + '" y1="-5" x2="' + (dx - 5) + '" y2="0"/><line x1="' + (dx + 4) + '" y1="-5" x2="' + (dx + 5) + '" y2="0"/></g>'; });
      h += '</g></g>';
    } else if (type === 'taiga') {
      h += '<rect width="900" height="220" fill="#d6e6f2"/><g fill="#fff" opacity=".8"><ellipse cx="200" cy="34" rx="70" ry="12"/><ellipse cx="620" cy="26" rx="90" ry="14"/></g>';
      h += '<path d="M0 120 C 150 96, 300 112, 450 100 S 750 92, 900 108 L900 220 L0 220 Z" fill="#9db4a0"/>';
      h += '<g fill="#1f4d2b">'; for (k = 0; k < 46; k++) { var tx = k * 20 - 4, ty = 128 + (k * 7) % 12; h += '<path d="M' + tx + ' ' + ty + ' l10 -36 l10 36 Z"/>'; } h += '</g>';
      h += '<g fill="#2d6a3a">'; for (k = 0; k < 40; k++) { var tx2 = k * 23 + 6, ty2 = 206 + (k * 5) % 10; h += '<path d="M' + tx2 + ' ' + ty2 + ' l11 -40 l11 40 Z"/>'; } h += '</g>';
      h += '<path d="' + P2 + '" fill="none" stroke="#5b4a3a" stroke-width="12"/><path d="' + P2 + '" fill="none" stroke="#c9c2b5" stroke-width="2" stroke-dasharray="4 6"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><rect x="-48" y="-24" width="30" height="22" rx="3" fill="#7f1d1d" stroke="#3b0d0d" stroke-width="2"/><rect x="-16" y="-22" width="30" height="20" rx="3" fill="#1d4f91" stroke="#0b1b45" stroke-width="2"/><rect x="16" y="-22" width="30" height="20" rx="3" fill="#1d4f91" stroke="#0b1b45" stroke-width="2"/><g fill="#bfe6ff"><rect x="-44" y="-20" width="8" height="7"/><rect x="-12" y="-18" width="8" height="6"/><rect x="0" y="-18" width="8" height="6"/><rect x="20" y="-18" width="8" height="6"/><rect x="32" y="-18" width="8" height="6"/></g><g fill="#222"><circle cx="-40" cy="0" r="3.5"/><circle cx="-26" cy="0" r="3.5"/><circle cx="-8" cy="0" r="3.5"/><circle cx="8" cy="0" r="3.5"/><circle cx="24" cy="0" r="3.5"/><circle cx="40" cy="0" r="3.5"/></g></g></g>';
    } else if (type === 'dunes') {
      h += '<rect width="900" height="220" fill="#ffe4b0"/><circle cx="760" cy="40" r="24" fill="#ff9f43"/>';
      h += '<g fill="#9aa3ad" opacity=".55"><rect x="40" y="70" width="14" height="60"/><path d="M80 130 L92 40 L104 130 Z"/><rect x="120" y="86" width="18" height="44"/><rect x="150" y="96" width="12" height="34"/></g>';
      h += '<path d="M0 140 C 120 110, 220 120, 320 136 S 520 100, 640 128 S 820 108, 900 120 L900 220 L0 220 Z" fill="#f0b766"/>';
      h += '<path d="M0 180 C 100 150, 180 194, 290 168 S 470 144, 560 180 S 760 200, 920 164 L900 220 L0 220 Z" fill="#f6c77a"/>';
      h += '<path d="' + P2 + '" fill="none" stroke="#c98a3c" stroke-width="3" stroke-dasharray="2 8"/><path id="twRiver" d="' + P2 + '" fill="none" stroke="none"/>';
      h += '<g id="twStops"></g><g id="twBoat"><g class="tw-bob"><path d="M-28 -2 L-26 -16 L-12 -18 L-6 -28 L14 -28 L20 -18 L30 -14 L30 -2 Z" fill="#f4f1de" stroke="#5b4630" stroke-width="2"/><path d="M-4 -26 L12 -26 L16 -18 L-8 -18 Z" fill="#7cc3ef"/><rect x="-22" y="-32" width="30" height="4" fill="#374151"/><circle cx="-16" cy="0" r="6" fill="#222"/><circle cx="18" cy="0" r="6" fill="#222"/><circle cx="-16" cy="0" r="2.5" fill="#bbb"/><circle cx="18" cy="0" r="2.5" fill="#bbb"/></g></g>';
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
    var label = { sea: 'boat trip out to the reef', river: 'river journey by ' + d.transport.name, rail: 'train journey across the city', trail: 'hike up the volcano', braided: 'jet boat ride up a braided river', heli: 'helicopter flight over the volcano', plane: 'bush plane flight over the tundra', road: 'road trip along the coast', canyon: 'white-water raft trip through the canyon', city: 'bus ride across the city', zip: 'zip line through the cloud forest', canal: 'voyage through the canal locks', terrace: 'llama trek past the terraces', pampas: 'gaucho horse ride across the Pampas', savanna: 'safari drive across the savanna', redroad: 'taxi-brousse ride along a red dirt road', lake: 'dugout canoe trip on the lake', kili: 'climb up Kilimanjaro', rift: 'safari drive along the Rift Valley floor', barge: 'river barge trip on the Congo', nile: 'felucca trip on the Nile', camel: 'camel trek across the Sahara', coast: 'coach tour along the Costa del Sol', cable: 'cable car ride up to the glaciers', brit: 'train journey across northern England', sled: 'dog-sled ride across the tundra', taiga: 'Trans-Siberian train through the taiga', dunes: '4x4 drive over the dunes' }[type];
    if (d.sceneLabel) label = d.sceneLabel;
    return '<svg viewBox="0 0 900 220" role="img" aria-label="Your ' + esc(label) + '">' + h + '</svg>';
  }
  function placeBoat(path, len) {
    var p = path.getPointAtLength(len), p2 = path.getPointAtLength(Math.min(path.getTotalLength(), len + 2));
    var ang = Math.atan2(p2.y - p.y, p2.x - p.x) * 180 / Math.PI;
    if ((E.d.scene || 'river') === 'trail' || /^(heli|zip|canal|terrace|pampas|savanna|redroad|lake|kili|rift|barge|nile|camel|coast|cable|brit|sled|taiga|dunes)$/.test(E.d.scene)) ang = 0;
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
        '<div class="tw-scene" id="twScene"></div><div class="tw-under"><div class="tw-tabs" id="twTabs"></div>' + locatorSVG(d) + '</div></section>' +
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
    var x0 = 50, x1 = 470, y0 = 250, y1 = 30, bw = (x1 - x0) / 12, h = '';
    var rMaxV = Math.max.apply(null, c.rain), rmax = c.rmax || (rMaxV <= 350 && rMaxV > 150 ? 350 : Math.max(100, Math.ceil(rMaxV / 50) * 50)), rstep = c.rstep || (rmax > 400 ? 100 : 50);
    var tmin = Math.min(0, Math.floor(Math.min.apply(null, c.temp) / 5) * 5), tmax = Math.max(35, Math.ceil(Math.max.apply(null, c.temp) / 5) * 5), tstep = tmax - tmin > 45 ? 10 : 5;
    function TY(v) { return y0 - (y0 - y1) * (v - tmin) / (tmax - tmin); }
    h += '<svg viewBox="0 0 520 300" role="img" aria-label="Climate graph for ' + esc(c.place) + ': rainfall bars and temperature line">';
    h += '<rect width="520" height="300" fill="#fff"/>';
    for (var r = 0; r <= rmax; r += rstep) { var y = y0 - (y0 - y1) * r / rmax; h += '<line x1="' + x0 + '" x2="' + x1 + '" y1="' + y + '" y2="' + y + '" stroke="#e3ebf2"/><text x="' + (x0 - 6) + '" y="' + (y + 4) + '" text-anchor="end" font-size="11" fill="#2563c9">' + r + '</text>'; }
    if (tmin < 0) h += '<line x1="' + x0 + '" x2="' + x1 + '" y1="' + TY(0) + '" y2="' + TY(0) + '" stroke="#b42318" stroke-dasharray="4 4" opacity=".5"/>';
    for (var t = tmin; t <= tmax; t += tstep) { var yt = TY(t); h += '<text x="' + (x1 + 6) + '" y="' + (yt + 4) + '" font-size="11" fill="#b42318">' + t + '</text>'; }
    c.rain.forEach(function (v, i) { var hgt = (y0 - y1) * v / rmax; h += '<rect class="tw-bar" x="' + (x0 + i * bw + 3) + '" y="' + (y0 - hgt) + '" width="' + (bw - 6) + '" height="' + hgt + '" fill="#4a90d9"><title>' + c.monthNames[i] + ': ' + v + ' mm</title></rect><text x="' + (x0 + i * bw + bw / 2) + '" y="' + (y0 + 16) + '" text-anchor="middle" font-size="12" font-weight="700">' + c.months[i] + '</text>'; });
    var pts = c.temp.map(function (v, i) { return (x0 + i * bw + bw / 2).toFixed(1) + ',' + TY(v).toFixed(1); }).join(' ');
    h += '<polyline points="' + pts + '" fill="none" stroke="#b42318" stroke-width="3"/>';
    c.temp.forEach(function (v, i) { h += '<circle cx="' + (x0 + i * bw + bw / 2) + '" cy="' + TY(v) + '" r="3.5" fill="#b42318"><title>' + c.monthNames[i] + ': ' + v + '°C</title></circle>'; });
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
    try { if (window.SBLGameAccount) { SBLGameAccount.record('travel-the-wright-way', TIER, d.id, d.name, E.score, max); SBLGameAccount.collect('travel-the-wright-way', d.id); } } catch (e) {}
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
