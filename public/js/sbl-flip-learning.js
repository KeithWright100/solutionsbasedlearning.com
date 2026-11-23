/* SBL Learning Hub: Flip learning (pre-lesson) panels.
   Adds a collapsible "Flip learning" task above the lesson activity
   cards (.lh-modes) on any lesson page whose teach-bot overlay has a
   data-lesson-id listed in FLIP below. To add another lesson, add an
   entry keyed by its lesson id (e.g. CP06) and include this script on
   that page. Answers are kept only in the student's own browser
   (localStorage) and can be copied out for OneNote. No accounts, no
   server calls.

   Part types:
     heading   { type, text, note }                 section heading (Part A ...)
     text      { id, prompt, note }                 one answer box
     terms     { id, prompt, rows }                 Key term | Definition table
     table     { id, prompt, cols, rows, prefill }  first col = row labels;
                                                    a row starting "#" is a group heading;
                                                    prefill { rowIndex: [cells] } = worked example
     questions { id, prompt, rows, video }          numbered questions; video = URL or true
     html      { html }                             static content (e.g. a diagram)
   Any part may have: label ("" hides the letter), note, links [{label,url}]. */
(function () {
  var DTM_SVG =
    '<svg viewBox="0 0 640 290" role="img" aria-label="Demographic transition model: birth rate, death rate and total population across five stages" style="width:100%;max-width:640px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px">' +
    '<g font-family="Inter,Arial,sans-serif" font-size="12" fill="#334">' +
    [0, 1, 2, 3, 4].map(function (i) {
      var x = 50 + i * 115;
      return '<rect x="' + x + '" y="30" width="115" height="215" fill="' + (i % 2 ? "#f1f6fb" : "#e6eff8") + '"/>' +
        '<text x="' + (x + 57) + '" y="22" text-anchor="middle" font-weight="600">Stage ' + (i + 1) + "</text>";
    }).join("") +
    '<path d="M50 62 C80 50 110 70 140 56 C170 48 200 60 250 60 C300 64 330 120 365 170 C390 200 420 208 470 210 C520 212 560 220 625 228" fill="none" stroke="#e07b1a" stroke-width="3.5"/>' +
    '<path d="M50 74 C75 60 100 86 125 66 C150 54 160 80 175 90 C200 140 220 180 270 196 C320 205 400 208 470 208 C530 207 580 200 625 194" fill="none" stroke="#d0457a" stroke-width="3.5"/>' +
    '<path d="M50 232 C120 231 160 228 190 220 C250 196 300 130 360 96 C410 72 450 66 520 64 C570 63 600 66 625 70" fill="none" stroke="#2a63b8" stroke-width="3.5"/>' +
    '<line x1="50" y1="245" x2="625" y2="245" stroke="#556"/><line x1="50" y1="30" x2="50" y2="245" stroke="#556"/>' +
    '<text x="44" y="40" text-anchor="end">High</text><text x="44" y="245" text-anchor="end">Low</text>' +
    '<text x="337" y="266" text-anchor="middle">Time</text>' +
    '<rect x="60" y="272" width="14" height="4" fill="#e07b1a"/><text x="80" y="278">Birth rate</text>' +
    '<rect x="170" y="272" width="14" height="4" fill="#d0457a"/><text x="190" y="278">Death rate</text>' +
    '<rect x="285" y="272" width="14" height="4" fill="#2a63b8"/><text x="305" y="278">Total population</text>' +
    "</g></svg>";

  function PYRAMID(name, w) {
    var ages = ["0-4","5-9","10-14","15-19","20-24","25-29","30-34","35-39","40-44","45-49","50-54","55-59","60-64","65-69","70-74","75-79","80+"];
    var bh = 12, top = 30, mid = 160, out = "";
    ages.forEach(function (a, i) {
      var y = top + (ages.length - 1 - i) * bh, v = w[i] * 1.2;
      out += '<rect x="' + (mid - 22 - v) + '" y="' + y + '" width="' + v + '" height="' + (bh - 2) + '" fill="#3a9fc4"/>' +
        '<rect x="' + (mid + 22) + '" y="' + y + '" width="' + v + '" height="' + (bh - 2) + '" fill="#3a9fc4"/>' +
        '<text x="' + mid + '" y="' + (y + 9) + '" text-anchor="middle" font-size="8">' + a + "</text>";
    });
    return '<svg viewBox="0 0 320 260" role="img" aria-label="' + name + ': population pyramid" style="width:100%;height:auto;background:#fff;border:1px solid var(--lh-border);border-radius:10px">' +
      '<g font-family="Inter,Arial,sans-serif" fill="#334"><text x="160" y="18" text-anchor="middle" font-size="13" font-weight="700">' + name + "</text>" +
      '<text x="20" y="18" font-size="10">Male</text><text x="300" y="18" text-anchor="end" font-size="10">Female</text>' + out +
      '<line x1="10" y1="240" x2="310" y2="240" stroke="#556"/><text x="160" y="254" text-anchor="middle" font-size="9">Population</text></g></svg>';
  }
  var PYRAMIDS = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;max-width:720px">' +
    PYRAMID("Pyramid A", [100, 92, 84, 76, 68, 60, 52, 45, 38, 32, 26, 21, 16, 12, 8, 5, 3]) +
    PYRAMID("Pyramid B", [52, 55, 57, 58, 60, 64, 67, 70, 70, 72, 70, 68, 62, 54, 42, 30, 22]) + "</div>";

  /* Image slot: shows /images/flip/<name>.png (or .jpg) when the file exists;
     otherwise shows the fallback (if given) or nothing. */
  function IMG(name, alt, fallback) {
    return '<figure class="fl__img"><img src="/images/flip/' + name + '.png" alt="' + alt + '" onerror="SBLFlipImg(this)">' +
      (fallback ? '<div class="fl__fb" hidden>' + fallback + "</div>" : "") + "</figure>";
  }
  window.SBLFlipImg = function (im) {
    if (!im.getAttribute("data-jpg")) { im.setAttribute("data-jpg", "1"); im.src = im.src.replace(/\.png$/, ".jpg"); return; }
    var f = im.parentNode, fb = f.querySelector(".fl__fb");
    if (fb) { fb.hidden = false; im.remove(); } else f.remove();
  };

  var HEALTH = '<div class="fl__scroll"><table><thead><tr><th>How climate is changing</th><th>What happens</th><th>Effects on health</th></tr></thead><tbody>' +
    [["Rising temperatures", "More frequent and intense heatwaves; the urban heat island makes cities hotter", "Heat stroke, dehydration, heart and lung illness"],
     ["Extreme weather", "More flooding, storms and wildfires; damage to homes and infrastructure; water supplies contaminated", "Injury and death, water-borne illness (e.g. cholera), stress and mental health problems"],
     ["Air quality", "More pollution and wildfire smoke; longer pollen seasons", "Asthma and other breathing problems, more allergies"],
     ["Vector-borne diseases", "Warmer, wetter and longer warm seasons let mosquitoes and ticks spread to new areas", "More cases of malaria, dengue, Zika and Lyme disease"]
    ].map(function (r) { return "<tr><td class=\"fl__rh\">" + r[0] + "</td><td class=\"fl__given\">" + r[1] + "</td><td class=\"fl__given\">" + r[2] + "</td></tr>"; }).join("") +
    '</tbody></table></div><p class="fl__note">Summary of how climate change affects health (not a complete list).</p>';

  var RISK_SVG =
    '<svg viewBox="0 0 760 330" role="img" aria-label="Diagram: risk is where hazard, exposure and vulnerability overlap. Climate drives the hazard; socio-economic processes shape exposure and vulnerability." style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px">' +
    '<g font-family="Inter,Arial,sans-serif" font-size="13" text-anchor="middle">' +
    '<rect x="16" y="70" width="170" height="190" rx="12" fill="#e3f0f7" stroke="#7fb1cc"/><text x="101" y="98" font-weight="700" fill="#1d4f6b">Climate</text>' +
    '<text x="101" y="140" fill="#1d4f6b">Natural</text><text x="101" y="157" fill="#1d4f6b">variability</text>' +
    '<text x="101" y="200" fill="#1d4f6b">Human-caused</text><text x="101" y="217" fill="#1d4f6b">climate change</text>' +
    '<rect x="574" y="70" width="170" height="190" rx="12" fill="#efe8f6" stroke="#a98bc9"/><text x="659" y="98" font-weight="700" fill="#4b2c6b">Socio-economic</text><text x="659" y="115" font-weight="700" fill="#4b2c6b">processes</text>' +
    '<text x="659" y="150" fill="#4b2c6b">Development</text><text x="659" y="167" fill="#4b2c6b">and wealth</text>' +
    '<text x="659" y="198" fill="#4b2c6b">Adaptation and</text><text x="659" y="215" fill="#4b2c6b">mitigation</text><text x="659" y="243" fill="#4b2c6b">Governance</text>' +
    '<circle cx="335" cy="165" r="92" fill="rgba(224,123,26,0.45)" stroke="#c1600f" stroke-width="2"/>' +
    '<circle cx="425" cy="120" r="92" fill="rgba(42,99,184,0.38)" stroke="#2a63b8" stroke-width="2"/>' +
    '<circle cx="425" cy="210" r="92" fill="rgba(29,158,117,0.38)" stroke="#0f6e56" stroke-width="2"/>' +
    '<text x="290" y="170" font-weight="700" fill="#7a3b06">Hazard</text>' +
    '<text x="455" y="80" font-weight="700" fill="#173f7a">Vulnerability</text>' +
    '<text x="455" y="262" font-weight="700" fill="#0b4f3d">Exposure</text>' +
    '<text x="396" y="170" font-weight="800" font-size="16" fill="#111">RISK</text>' +
    '<path d="M186 165 L238 165" stroke="#555" stroke-width="2" marker-end="url(#ar)"/>' +
    '<path d="M574 140 L520 128" stroke="#555" stroke-width="2" marker-end="url(#ar)"/><path d="M574 190 L520 204" stroke="#555" stroke-width="2" marker-end="url(#ar)"/>' +
    '<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#555"/></marker></defs>' +
    '<text x="380" y="315" font-size="12" fill="#555">Risk is greatest where a hazard affects people and places that are both exposed and vulnerable.</text>' +
    '</g></svg>';

  /* A list of prompts with a Copy button each, to paste into Teach Me Live. */
  function PROMPTS(list) {
    return '<ol class="fl__prompts">' + list.map(function (t) {
      return '<li><span>' + t + '</span><button type="button" class="fl__pcopy" onclick="var b=this,t=b.previousSibling.textContent;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){b.textContent=\'Copied\';setTimeout(function(){b.textContent=\'Copy\'},1500)},function(){window.prompt(\'Copy:\',t)})">Copy</button></li>';
    }).join("") + "</ol>";
  }

  function COMMONS_SVG() {
    function stage(x, n, grass, soil, title, cap) {
      var out = '<g transform="translate(' + x + ',0)">' +
        '<rect x="10" y="40" width="210" height="110" rx="10" fill="' + grass + '" stroke="#5a7a3a"/>' +
        '<rect x="10" y="140" width="210" height="26" rx="4" fill="' + soil + '"/>' +
        '<text x="115" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="#173a2a">' + title + "</text>";
      var pos = [[50,70],[110,95],[170,68],[80,120],[150,122],[40,105],[190,100],[115,60],[60,140],[175,140],[130,130],[95,80]];
      for (var i = 0; i < n; i++) out += '<g transform="translate(' + pos[i][0] + ',' + pos[i][1] + ')"><ellipse rx="13" ry="8" fill="#f4f4f0" stroke="#555"/><circle cx="12" cy="-4" r="5" fill="#333"/></g>';
      return out + '<foreignObject x="10" y="176" width="210" height="96"><div xmlns="http://www.w3.org/1999/xhtml" style="font:13px/1.35 Inter,Arial,sans-serif;color:#22323a">' + cap + "</div></foreignObject></g>";
    }
    return '<svg viewBox="0 0 760 280" role="img" aria-label="The tragedy of the commons in three stages: few animals and healthy grass; more animals and degraded grass; too many animals and bare land." style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px">' +
      '<g font-family="Inter,Arial,sans-serif">' +
      stage(0, 3, "#7cc25a", "#8a5a3b", "1. Within carrying capacity", "Few animals graze the shared land. The grass regrows and every user benefits.") +
      '<path d="M236 95 L262 95" stroke="#555" stroke-width="2.5" marker-end="url(#tca)"/>' +
      stage(265, 6, "#a9bf5a", "#8a5a3b", "2. Over-use begins", "Each herder adds animals for their own gain. Use exceeds carrying capacity and the land degrades; the cost is shared by everyone.") +
      '<path d="M501 95 L527 95" stroke="#555" stroke-width="2.5" marker-end="url(#tca)"/>' +
      stage(530, 12, "#c9b37a", "#7a4e33", "3. Collapse", "Unless the environmental costs are managed, the land can no longer support grazing at all.") +
      '<defs><marker id="tca" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#555"/></marker></defs></g></svg>';
  }

  var LOOPS_SVG =
    '<svg viewBox="0 0 760 230" role="img" aria-label="Linear economy: take, make, use, dispose. Circular economy: make, use, then reuse, repair and recycle back into making, with biological materials returned to the soil." style="width:100%;max-width:760px;height:auto;display:block;margin-top:12px;background:#fff;border:1px solid var(--lh-border);border-radius:10px">' +
    '<defs><marker id="lp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#555"/></marker></defs>' +
    '<g font-family="Inter,Arial,sans-serif" font-size="13" text-anchor="middle">' +
    '<text x="170" y="26" font-weight="700" font-size="14" fill="#7a2a1a">Linear economy</text>' +
    [["Take", 40], ["Make", 120], ["Use", 200], ["Dispose", 285]].map(function (b) { return '<rect x="' + (b[1] - 35) + '" y="95" width="70" height="36" rx="8" fill="#fbe3dc" stroke="#c0583b"/><text x="' + b[1] + '" y="118" fill="#7a2a1a">' + b[0] + "</text>"; }).join("") +
    '<path d="M75 113 H83" stroke="#555" stroke-width="2" marker-end="url(#lp)"/><path d="M155 113 H163" stroke="#555" stroke-width="2" marker-end="url(#lp)"/><path d="M235 113 H248" stroke="#555" stroke-width="2" marker-end="url(#lp)"/>' +
    '<text x="285" y="160" font-size="11" fill="#7a2a1a">landfill or burning</text>' +
    '<line x1="380" y1="20" x2="380" y2="210" stroke="#ddd"/>' +
    '<text x="570" y="26" font-weight="700" font-size="14" fill="#0b4f3d">Circular economy</text>' +
    '<circle cx="570" cy="122" r="70" fill="none" stroke="#1d9e75" stroke-width="3" stroke-dasharray="10 6"/>' +
    '<rect x="535" y="40" width="70" height="30" rx="8" fill="#e1f5ee" stroke="#1d9e75"/><text x="570" y="60" fill="#0b4f3d">Make</text>' +
    '<rect x="615" y="108" width="80" height="30" rx="8" fill="#e1f5ee" stroke="#1d9e75"/><text x="655" y="128" fill="#0b4f3d">Use</text>' +
    '<rect x="510" y="175" width="120" height="30" rx="8" fill="#e1f5ee" stroke="#1d9e75"/><text x="570" y="195" fill="#0b4f3d">Repair and reuse</text>' +
    '<rect x="435" y="108" width="90" height="30" rx="8" fill="#e1f5ee" stroke="#1d9e75"/><text x="480" y="128" fill="#0b4f3d">Recycle</text>' +
    '<text x="705" y="200" font-size="11" fill="#5a4a1a">biological</text><text x="705" y="214" font-size="11" fill="#5a4a1a">materials → soil</text>' +
    '</g></svg>';
  var CIRCULAR_READING =
    '<details class="optx" open><summary>📖 Reading: the circular economy (SBL briefing)</summary><div class="fl__read">' +
    '<h4>Why is a new model needed?</h4>' +
    '<p>Most of the world still runs a <b>linear economy</b>: we <i>take</i> raw materials, <i>make</i> products, <i>use</i> them and then <i>dispose</i> of them. Each step adds value, but the end point is waste. As population and wealth grow, so does the demand for metals, fossil fuels, water and land. In 1972 the Club of Rome’s <i>Limits to Growth</i> report used computer models to warn that if consumption kept rising, resources would run short and pollution would build up, eventually forcing a fall in food supply, industrial output and population. Plastics show the problem today: only about 9% of the plastic ever produced has been recycled, and most of the rest is landfilled, burned or leaks into the environment.</p>' +
    '<h4>What is a circular economy?</h4>' +
    '<p>A <b>circular economy</b> is designed so that waste is not created in the first place. Products and materials are kept in use for as long as possible, at their highest value, and natural systems are allowed to recover. The Ellen MacArthur Foundation, a leading promoter of the idea, sums it up in <b>three principles</b>:</p>' +
    '<ol><li><b>Eliminate waste and pollution</b>: design products so they can be repaired, taken apart and reused.</li>' +
    '<li><b>Circulate products and materials at their highest value</b>: maintain, share, reuse and remanufacture before recycling.</li>' +
    '<li><b>Regenerate nature</b>: return biological materials safely to the soil and support natural systems.</li></ol>' +
    '<h4>Two kinds of loop</h4>' +
    '<p>The idea grew from “cradle to cradle” design, developed by architect William McDonough and chemist Michael Braungart. It separates materials into two cycles. In the <b>biological cycle</b>, things that can safely break down (food, wood, cotton) are composted or digested and return to the soil. In the <b>technical cycle</b>, metals, plastics and electronics are kept circulating through repair, reuse, remanufacturing and, as a last step, recycling. The tighter the loop, the more value is kept: repairing a phone saves far more energy and material than shredding it for recycling.</p>' +
    '<h4>Examples at different scales</h4>' +
    '<ul><li><b>Local:</b> at Kalundborg in Denmark, a power station, refinery, drug factory and other firms swap steam, water, gypsum and other by-products, so one company’s waste becomes another’s raw material (industrial symbiosis).</li>' +
    '<li><b>Business:</b> instead of selling light bulbs, Philips has supplied lighting to Schiphol Airport “as a service”. Philips keeps ownership of the fittings, so it has a reason to make them last and to reuse the parts.</li>' +
    '<li><b>National:</b> since 2016 large French supermarkets have been banned from destroying unsold food that is still edible; it must be donated or used for animal feed or compost.</li>' +
    '<li><b>City:</b> Amsterdam aims to halve its use of new raw materials by 2030 and to be fully circular by 2050.</li>' +
    '<li><b>Regional and global:</b> the EU’s rules on electrical waste (WEEE) make producers responsible for taking back and recycling old appliances, and the UN Sustainable Development Goals include halving food waste per person by 2030 (target 12.3).</li></ul>' +
    '<h4>Challenges and debates</h4>' +
    '<p>Going circular is not easy. When oil is cheap, new plastic can cost less than recycled plastic, so firms need incentives or regulation to change. Safety rules can also get in the way: food past its “use by” date cannot be redistributed. Some argue that governments must set targets and laws, while others expect businesses and consumers to lead through renting, sharing and repairing. Optimists point to new materials, product-as-a-service models and young consumers who value access over ownership; pessimists argue that growth in total consumption could cancel out these gains.</p>' +
    LOOPS_SVG + '</div></details>';

  var TRAFFIC_SVG = (function () {
    var O = [["South Americans", 60], ["Eastern and Central Europeans", 120], ["Sub-Saharan Africans", 180], ["South Asians", 240], ["East Asians", 300]];
    var D = [["Western and Central Europe", 90], ["Middle East", 180], ["North America, Central America and the Caribbean", 270]];
    var F = [[0,0],[0,2],[1,0],[1,1],[2,0],[2,1],[2,2],[3,1],[3,2],[4,0],[4,1],[4,2]];
    var s = '<svg viewBox="0 0 760 350" role="img" aria-label="Schematic of main international human trafficking flows from origin groups to destination regions" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><g font-family="Inter,Arial,sans-serif" font-size="12.5">';
    s += '<text x="20" y="28" font-weight="700" fill="#444">Origin of victims</text><text x="740" y="28" text-anchor="end" font-weight="700" fill="#0f6e56">Destination region</text>';
    F.forEach(function (f) { var y1 = O[f[0]][1], y2 = D[f[1]][1]; s += '<path d="M230 ' + y1 + ' C400 ' + y1 + ' 400 ' + y2 + ' 530 ' + y2 + '" fill="none" stroke="#1d9e75" stroke-opacity=".55" stroke-width="3"/>'; });
    O.forEach(function (o) { s += '<rect x="20" y="' + (o[1] - 17) + '" width="210" height="34" rx="8" fill="#f1efe8" stroke="#888"/><text x="125" y="' + (o[1] + 4) + '" text-anchor="middle" fill="#333">' + o[0] + "</text>"; });
    D.forEach(function (d) { s += '<rect x="530" y="' + (d[1] - 24) + '" width="210" height="48" rx="8" fill="#e1f5ee" stroke="#1d9e75"/><foreignObject x="534" y="' + (d[1] - 22) + '" width="202" height="44"><div xmlns="http://www.w3.org/1999/xhtml" style="font:600 12px/1.25 Inter,Arial,sans-serif;color:#0b4f3d;height:44px;display:flex;align-items:center;justify-content:center;text-align:center">' + d[0] + "</div></foreignObject>"; });
    s += '<text x="20" y="340" font-size="11" fill="#666">Main flows (each at least 5% of victims in the destination region). Simplified from UNODC, Global Report on Trafficking in Persons.</text></g></svg>';
    return s;
  })();

  var DD_PYRAMIDS = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1rem;max-width:760px">' +
    PYRAMID("Niger", [100, 81, 66, 52, 41, 32, 26, 22, 18, 15, 12, 10, 7, 6, 4, 2, 1]) +
    PYRAMID("Indonesia", [47, 43, 43, 43, 40, 38, 40, 38, 35, 32, 28, 23, 16, 11, 8, 4, 3]) +
    PYRAMID("Republic of Korea", [22, 22, 22, 28, 33, 31, 34, 37, 40, 42, 41, 39, 31, 23, 19, 17, 21]) +
    PYRAMID("Germany", [21, 20, 21, 24, 26, 30, 32, 30, 29, 37, 43, 38, 34, 28, 26, 29, 38]) + "</div>" +
    '<p class="fl__note">Population pyramids, 2017: each age group as a percentage of the total (approximate, from UN World Population Prospects data). Same scale for all four countries.</p>';

  var BASIN_SVG = (function () {
    var s = '<svg viewBox="0 0 760 420" role="img" aria-label="Drainage basin with nine numbered features to label" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><g font-family="Inter,Arial,sans-serif">';
    s += '<path d="M60 360 C60 160 200 40 380 30 C560 40 700 160 700 360 Z" fill="#eef5e8" stroke="none"/>';
    s += '<path d="M60 360 C60 160 200 40 380 30 C560 40 700 160 700 360" fill="none" stroke="#5a3e1b" stroke-width="2.5" stroke-dasharray="3 7" stroke-linecap="round"/>';
    s += '<rect x="0" y="360" width="760" height="60" fill="#cfe6f3"/><text x="660" y="400" font-size="13" fill="#2b6a8a" font-style="italic">sea</text>';
    var riv = ["M380 60 C370 120 395 170 385 220", "M250 110 C285 160 320 190 385 220", "M520 100 C480 160 430 190 385 220", "M150 210 C220 240 280 260 330 280", "M640 220 C560 250 470 260 420 285"];
    riv.forEach(function (d) { s += '<path d="' + d + '" fill="none" stroke="#2470b8" stroke-width="2.5" stroke-linecap="round"/>'; });
    s += '<path d="M385 220 C365 250 400 265 380 285 C355 305 405 320 380 345 C372 352 378 358 380 362" fill="none" stroke="#2470b8" stroke-width="5" stroke-linecap="round"/>';
    s += '<path d="M372 362 L388 362 L420 392 L340 392 Z" fill="#a9d3ea" opacity=".9"/>';
    var pts = [[380, 30], [380, 62], [250, 112], [385, 220], [383, 300], [390, 255], [372, 356], [392, 392], [600, 395]];
    pts.forEach(function (p, i) { s += '<g transform="translate(' + p[0] + "," + p[1] + ')"><circle r="11" fill="#fff" stroke="#c2410c" stroke-width="2.2"/><text y="4" text-anchor="middle" font-size="11.5" font-weight="700" fill="#7a2a0a">' + (i + 1) + "</text></g>"; });
    s += '<text x="20" y="20" font-size="11" fill="#666">Dotted line: the edge of the basin</text></g></svg>';
    return s;
  })();
  var SYSTEM_SVG = (function () {
    var C = { i: ["#dbe8fb", "#2a5db0"], s: ["#d7f0ea", "#0f6e56"], f: ["#fde7cf", "#b4610e"], o: ["#eadfd4", "#6b4a2b"] };
    function box(x, y, w, t, k) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="30" rx="15" fill="' + C[k][0] + '" stroke="' + C[k][1] + '" stroke-width="1.6"/><text x="' + (x + w / 2) + '" y="' + (y + 20) + '" text-anchor="middle" font-size="12.5" font-weight="600" fill="' + C[k][1] + '">' + t + "</text>"; }
    function ar(d) { return '<path d="' + d + '" fill="none" stroke="#555" stroke-width="1.8" marker-end="url(#sa)"/>'; }
    var s = '<svg viewBox="0 0 760 520" role="img" aria-label="Drainage basin systems diagram showing inputs, stores, flows and outputs" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><defs><marker id="sa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#555"/></marker></defs><g font-family="Inter,Arial,sans-serif">';
    s += box(300, 14, 160, "Precipitation", "i") + box(300, 74, 160, "Interception store", "s") + box(300, 134, 160, "Throughfall / stemflow", "f") +
      box(300, 194, 160, "Surface store", "s") + box(300, 254, 160, "Infiltration", "f") + box(300, 314, 160, "Soil water store", "s") +
      box(300, 374, 160, "Percolation", "f") + box(300, 434, 160, "Groundwater store", "s") +
      box(530, 194, 190, "Overland flow", "f") + box(530, 314, 190, "Throughflow", "f") + box(530, 434, 190, "Groundwater flow (baseflow)", "f") +
      box(560, 474, 160, "Channel store", "s") + box(330, 482, 140, "River discharge", "o") +
      box(40, 74, 160, "Evaporation", "o") + box(40, 194, 160, "Transpiration", "o");
    s += ar("M380 44 V72") + ar("M380 104 V132") + ar("M380 164 V192") + ar("M380 224 V252") + ar("M380 284 V312") + ar("M380 344 V372") + ar("M380 404 V432");
    s += ar("M460 209 H528") + ar("M460 329 H528") + ar("M460 449 H528") + ar("M740 224 V470 H722") + '<path d="M720 209 H740 M720 329 H740 M720 449 H740" stroke="#555" stroke-width="1.8" fill="none"/>' + ar("M560 489 H472");
    s += ar("M300 89 H202") + ar("M300 209 H202") + ar("M300 329 H250 V224 H202");
    s += '<g font-size="11.5"><rect x="40" y="290" width="12" height="12" rx="6" fill="' + C.i[0] + '" stroke="' + C.i[1] + '"/><text x="58" y="300">Input</text><rect x="40" y="310" width="12" height="12" rx="6" fill="' + C.s[0] + '" stroke="' + C.s[1] + '"/><text x="58" y="320">Store</text><rect x="40" y="330" width="12" height="12" rx="6" fill="' + C.f[0] + '" stroke="' + C.f[1] + '"/><text x="58" y="340">Flow (transfer)</text><rect x="40" y="350" width="12" height="12" rx="6" fill="' + C.o[0] + '" stroke="' + C.o[1] + '"/><text x="58" y="360">Output</text></g>';
    return s + "</g></svg>";
  })();

  var DISCHARGE_SVG =
    '<svg viewBox="0 0 760 300" role="img" aria-label="River channel cross-section showing width, mean depth, cross-sectional area and velocity" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><g font-family="Inter,Arial,sans-serif" font-size="13">' +
    '<path d="M20 60 L120 70 C170 80 190 230 300 240 L470 245 C590 238 600 90 660 72 L740 62 L740 300 L20 300 Z" fill="#c9a77a"/>' +
    '<path d="M138 100 C175 110 195 232 300 240 L470 245 C585 238 600 112 642 100 Z" fill="#8fc6e6" opacity=".9"/>' +
    '<line x1="138" y1="100" x2="642" y2="100" stroke="#1f5e85" stroke-width="2"/>' +
    '<path d="M150 82 H630" stroke="#b42318" stroke-width="2" marker-start="url(#da)" marker-end="url(#da)"/><text x="390" y="76" text-anchor="middle" fill="#b42318" font-weight="700">Width</text>' +
    [230, 320, 410, 500, 580].map(function (x) { return '<line x1="' + x + '" y1="104" x2="' + x + '" y2="' + (x < 300 ? 226 : x > 560 ? 190 : 238) + '" stroke="#b42318" stroke-width="1.6" stroke-dasharray="4 3"/>'; }).join("") +
    '<text x="405" y="170" text-anchor="middle" fill="#7a1d12" font-weight="700">Mean depth = average of the depth readings</text>' +
    '<text x="390" y="285" text-anchor="middle" fill="#3a2a14" font-weight="700">Cross-sectional area (m²) = width × mean depth</text>' +
    '<circle cx="680" cy="150" r="26" fill="#fff" stroke="#c2410c" stroke-width="2.5"/><circle cx="680" cy="150" r="5" fill="#c2410c"/><text x="680" y="198" text-anchor="middle" fill="#c2410c" font-weight="700">Velocity</text><text x="680" y="214" text-anchor="middle" fill="#c2410c" font-size="11">(flow out of the page, m/s)</text>' +
    '<rect x="20" y="10" width="400" height="34" rx="8" fill="#13324a"/><text x="220" y="33" text-anchor="middle" fill="#fff" font-weight="700" font-size="15">Discharge (m³/s) = cross-sectional area × velocity</text>' +
    '<defs><marker id="da" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" fill="#b42318"/></marker></defs></g></svg>';
  var CHANNEL_SVG = (function () {
    var s = '<svg viewBox="0 0 760 300" role="img" aria-label="River channel cross-section with five numbered features to label" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><g font-family="Inter,Arial,sans-serif">';
    s += '<path d="M20 70 L130 80 C175 90 195 230 300 238 L470 244 C585 236 600 98 650 84 L740 74 L740 300 L20 300 Z" fill="#c9a77a"/>';
    s += '<path d="M146 110 C180 120 198 230 300 238 L470 244 C583 236 600 122 636 110 Z" fill="#8fc6e6"/>';
    s += '<path d="M146 110 C180 120 198 230 300 238 L470 244 C583 236 600 122 636 110" fill="none" stroke="#b42318" stroke-width="4" stroke-dasharray="1 0"/>';
    s += '<line x1="146" y1="110" x2="636" y2="110" stroke="#1f5e85" stroke-width="2"/>';
    [[385, 252, "1"], [176, 160, "2"], [390, 52, "3"], [512, 236, "4"], [390, 170, "5"]].forEach(function (p) { s += '<g transform="translate(' + p[0] + "," + p[1] + ')"><circle r="12" fill="#fff" stroke="#c2410c" stroke-width="2.2"/><text y="4.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#7a2a0a">' + p[2] + "</text></g>"; });
    s += '<path d="M150 68 H632" stroke="#555" stroke-width="1.4" stroke-dasharray="5 4"/><text x="20" y="22" font-size="11.5" fill="#666">Red line: where the water touches the channel. Dashed line above: the whole channel.</text>';
    return s + "</g></svg>";
  })();
  var ISOVEL_SVG = (function () {
    var X = function (d) { return 60 + d / 1.5 * 640; }, Y = function (z) { return 40 + z / 0.6 * 300; };
    var bed = [[0, 0], [0.05, 0.25], [0.1, 0.5], [0.15, 0.55], [0.3, 0.56], [0.6, 0.45], [0.9, 0.3], [1.2, 0.12], [1.35, 0], [1.5, 0]];
    var s = '<div class="fl-iso"><svg viewBox="0 0 760 410" role="img" aria-label="River cross-section with velocity readings at points, for drawing isovels" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><g font-family="Inter,Arial,sans-serif" font-size="12">';
    s += '<path d="M' + bed.map(function (p) { return X(p[0]).toFixed(1) + " " + Y(p[1]).toFixed(1); }).join(" L") + ' L' + X(1.5) + " " + Y(0.6) + " L" + X(0) + " " + Y(0.6) + ' Z" fill="#d9c3a0" stroke="#6b4a2b" stroke-width="1.5"/>';
    s += '<path d="M' + bed.map(function (p) { return X(p[0]).toFixed(1) + " " + Y(p[1]).toFixed(1); }).join(" L") + ' Z" fill="#e3f2fb"/>';
    s += '<line x1="' + X(0) + '" y1="' + Y(0) + '" x2="' + X(1.5) + '" y2="' + Y(0) + '" stroke="#1f5e85" stroke-dasharray="6 4"/>';
    for (var z = 0.1; z <= 0.61; z += 0.1) s += '<text x="52" y="' + (Y(z) + 4) + '" text-anchor="end" fill="#555">' + z.toFixed(1) + "</text>";
    for (var d = 0.2; d <= 1.41; d += 0.2) s += '<text x="' + X(d) + '" y="' + (Y(0.6) + 18) + '" text-anchor="middle" fill="#555">' + d.toFixed(1) + "</text>";
    s += '<text x="' + X(0.75) + '" y="398" text-anchor="middle" fill="#333">Distance from the left bank (m)</text><text x="16" y="' + Y(0.3) + '" transform="rotate(-90 16 ' + Y(0.3) + ')" text-anchor="middle" fill="#333">Depth (m)</text>';
    var v = { 0.2: [0.47, 0.53, 0.44, 0.32, 0.10], 0.4: [0.29, 0.32, 0.22, 0.10], 0.6: [0.23, 0.18, 0.07], 0.8: [0.11, 0.08], 1.0: [0.05] };
    Object.keys(v).forEach(function (dd) { v[dd].forEach(function (val, i) { var x = X(+dd), y = Y((i + 1) / 10); s += '<circle cx="' + x + '" cy="' + y + '" r="3.5" fill="#13324a"/><text x="' + (x + 6) + '" y="' + (y + 4) + '" fill="#13324a" font-weight="600">' + val.toFixed(2) + "</text>"; }); });
    s += '<g class="iso-model" fill="none" stroke-width="2.4"><path d="M169.0 40.0 L170.0 45.0 L171.3 51.8 L172.6 58.8 L173.5 63.5 L174.8 70.6 L175.8 75.6 L177.1 82.4 L178.4 89.4 L180.9 94.1 L183.5 98.8 L186.2 103.5 L188.9 108.2 L191.5 112.9 L193.1 119.4 L194.4 124.7 L196.0 131.3 L197.3 136.5 L196.0 142.6 L193.1 146.2 L189.6 150.6 L185.7 155.3 L181.9 160.0 L178.7 164.5 L175.8 168.6 L172.9 172.8 L170.0 176.9 L167.0 181.2 L163.7 185.9 L160.3 190.6 L155.9 195.3 L152.6 198.8 L149.3 202.4 L146.4 204.7 L143.0 200.0 L141.0 194.6 L139.6 188.2 L138.2 182.0 L136.8 176.5 L135.3 169.8 L134.0 164.7 L132.4 157.6 L131.3 152.9 L129.6 145.9 L128.8 141.2 L128.7 134.1 L129.5 129.2 L130.6 122.4 L131.7 115.3 L132.5 110.6 L133.6 103.5 L134.8 96.5 L133.9 89.4 L133.4 82.4 L133.6 75.3 L134.1 68.2 L134.6 61.2 L135.2 54.1 L135.5 49.4 L136.0 42.4" stroke="#b42318"/><path d="M331.5 40.0 L331.5 47.1 L332.1 53.1 L332.9 58.8 L333.9 65.9 L334.9 72.9 L335.6 77.6 L336.6 84.7 L336.1 91.8 L332.7 96.5 L329.4 101.2 L326.3 105.5 L323.4 109.6 L320.5 113.7 L317.6 117.7 L312.7 122.4 L308.9 125.0 L303.1 129.0 L301.7 134.1 L303.4 138.8 L300.2 142.7 L295.9 145.9 L291.6 149.1 L286.5 152.9 L282.9 155.6 L277.1 159.9 L273.8 162.4 L268.4 166.8 L265.5 169.4 L260.1 174.1 L256.8 177.0 L252.1 181.2 L248.1 184.6 L244.1 188.2 L239.5 191.9 L234.8 195.3 L230.8 198.3 L226.9 202.4 L222.5 207.1 L219.2 210.7 L216.0 214.1 L211.6 218.8 L207.6 223.1 L204.7 226.2 L200.6 230.6 L196.3 235.3 L193.1 238.6 L189.8 242.4 L185.7 247.1 L181.6 251.8 L178.7 255.1 L175.4 258.8 L171.3 263.5 L167.1 267.1 L158.4 267.1 L149.7 267.2 L143.8 265.9 L138.5 261.2 L135.3 258.3 L130.5 254.1 L127.7 249.4 L126.6 242.6 L125.7 237.6 L124.3 230.6 L122.6 225.9 L120.8 220.7 L118.4 214.1 L116.8 209.4 L115.0 203.1 L114.1 197.6 L112.9 190.6 L112.0 185.9 L110.8 178.8 L109.3 171.8 L108.2 167.1 L106.5 160.0 L105.4 155.3 L104.2 148.2 L103.4 143.5 L102.2 136.5 L102.3 129.4 L103.4 122.7 L104.2 117.6 L104.7 110.6 L103.5 103.5 L102.7 98.8 L101.5 91.8 L101.0 84.7 L100.5 78.4 L100.1 72.9 L99.6 65.9 L99.0 58.8 L98.8 51.8 L99.3 44.7" stroke="#e07b1a"/><path d="M415.6 40.0 L415.6 47.1 L415.6 54.1 L415.6 61.2 L415.6 68.2 L415.6 75.3 L415.6 82.4 L415.6 89.4 L412.0 94.1 L408.0 98.8 L404.4 103.0 L401.5 106.4 L398.7 111.9 L395.8 117.6 L393.3 122.4 L390.9 127.1 L388.5 131.8 L386.1 136.5 L382.1 141.2 L377.6 143.5 L372.6 146.2 L366.8 149.3 L361.0 152.4 L355.6 155.3 L351.1 157.6 L346.6 160.1 L340.8 163.2 L335.0 166.3 L329.2 169.3 L324.6 171.8 L320.2 174.1 L314.7 177.3 L309.5 181.2 L306.0 183.8 L300.9 188.2 L297.3 191.2 L291.7 195.3 L288.5 197.6 L282.9 201.8 L278.9 204.7 L274.2 208.1 L269.2 211.8 L265.5 214.5 L259.7 218.7 L256.4 221.2 L251.0 225.1 L246.7 228.2 L242.4 231.4 L237.2 235.3 L233.7 237.9 L228.8 242.4 L225.0 246.5 L222.1 249.8 L218.3 254.1 L214.2 258.8 L210.5 263.0 L207.6 266.3 L203.9 270.6 L199.8 275.3 L196.0 279.5 L193.1 282.9 L189.5 287.1 L184.5 289.6 L175.8 289.7 L167.1 289.8 L158.4 289.9 L149.7 290.0 L143.9 288.8 L139.4 284.7 L135.3 281.1 L131.4 277.6 L126.6 273.3 L123.5 270.6 L118.2 265.9 L115.0 263.0 L112.9 256.5 L112.1 251.5 L110.9 244.7 L109.7 237.6 L108.9 232.9 L107.7 225.9 L106.2 221.2 L103.7 214.1 L102.5 209.4 L101.3 202.4 L100.5 197.6 L99.3 190.6 L98.1 183.5 L97.3 178.8 L96.1 171.8 L94.7 165.9 L93.4 160.0 L92.2 152.9 L91.4 148.2 L90.1 141.2 L88.9 134.1 L88.8 129.4 L89.5 124.7 L89.6 117.6 L88.8 112.9 L87.6 105.9 L86.4 98.8 L85.6 94.1 L84.9 87.1 L84.4 80.0 L83.8 72.9 L83.3 65.9 L82.9 61.2 L82.4 54.1 L81.9 47.1 L81.2 40.0" stroke="#2a63b8"/><g font-weight="700" font-size="13"><text x="' + X(0.255) + '" y="' + Y(0.06) + '" fill="#b42318">0.4</text><text x="' + X(0.5) + '" y="' + Y(0.06) + '" fill="#e07b1a">0.2</text><text x="' + X(0.72) + '" y="' + Y(0.33) + '" fill="#2a63b8">0.1</text></g></g>';
    s += '<text x="' + X(1.5) + '" y="' + (Y(0) - 10) + '" text-anchor="end" fill="#555">Velocity (m/s) at each point</text></g></svg>';
    return s + '<div class="fl__actions" style="margin-top:.4rem"><button type="button" class="fl__btn fl__btn--ghost" data-iso="1">Show model isovels</button><span class="fl__note">Try drawing the 0.4, 0.2 and 0.1 m/s isovels yourself first (in OneNote), then compare.</span></div></div>';
  })();
  var FLOW_SVG =
    '<svg viewBox="0 0 760 230" role="img" aria-label="Laminar flow: parallel layers of water. Turbulent flow: water with horizontal and vertical eddies" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><defs><marker id="fa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#1f5e85"/></marker><marker id="fb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#c2410c"/></marker></defs><g font-family="Inter,Arial,sans-serif" font-size="13">' +
    '<rect x="20" y="40" width="330" height="150" rx="10" fill="#e3f2fb" stroke="#7fb1cc"/><text x="185" y="28" text-anchor="middle" font-weight="700">a) Laminar flow</text>' +
    [75, 115, 155].map(function (y) { return '<path d="M45 ' + y + ' H320" stroke="#1f5e85" stroke-width="5" marker-end="url(#fa)"/>'; }).join("") +
    '<rect x="410" y="40" width="330" height="150" rx="10" fill="#e3f2fb" stroke="#7fb1cc"/><text x="575" y="28" text-anchor="middle" font-weight="700">b) Turbulent flow</text>' +
    '<path d="M430 75 C460 55 480 95 455 95 C440 95 445 70 470 66 C500 60 510 95 490 95 C475 95 480 68 510 64 C545 60 560 92 540 92 C525 92 530 66 560 62 L700 62" fill="none" stroke="#c2410c" stroke-width="2.6" marker-end="url(#fb)"/>' +
    '<path d="M450 175 C440 130 500 120 495 150 C492 170 465 160 480 135 C500 105 560 125 545 155 C535 175 515 160 530 135 C550 105 610 120 600 150 C592 175 570 160 585 135 C600 112 660 110 700 120" fill="none" stroke="#c2410c" stroke-width="2.6" marker-end="url(#fb)"/>' +
    '<text x="20" y="215" fill="#555">Upstream</text><text x="350" y="215" text-anchor="end" fill="#555">Downstream →</text><text x="410" y="215" fill="#555">Upstream</text><text x="740" y="215" text-anchor="end" fill="#555">Downstream →</text></g></svg>';

  var CHANNELS_SVG = "<svg viewBox=\"0 0 760 270\" role=\"img\" aria-label=\"Concrete channel cross-section with isovels from 25 to 45 cm per second\" style=\"width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px\"><g font-family=\"Inter,Arial,sans-serif\" font-size=\"12\"><text x=\"20\" y=\"22\" font-weight=\"700\" font-size=\"14\">a) Concrete channel</text><path d=\"M120 40 L210 230 L550 230 L640 40 L665 40 L570 252 L190 252 L95 40 Z\" fill=\"#cfcfcf\" stroke=\"#777\"/><defs><clipPath id=\"ccw\"><path d=\"M140 80 L210 230 L550 230 L620 80 Z\"/></clipPath></defs><path d=\"M140 80 L210 230 L550 230 L620 80 Z\" fill=\"#e3f2fb\"/><g clip-path=\"url(#ccw)\"><line x1=\"140\" y1=\"80\" x2=\"620\" y2=\"80\" stroke=\"#1f5e85\" stroke-width=\"2\"/><path d=\"M150 80 A230 140 0 0 0 610 80\" fill=\"none\" stroke=\"#2a63b8\" stroke-width=\"2\"/><text x=\"207\" y=\"180\" fill=\"#2a63b8\" font-weight=\"700\">25</text><path d=\"M190 80 A190 112 0 0 0 570 80\" fill=\"none\" stroke=\"#0f8a6e\" stroke-width=\"2\"/><text x=\"236\" y=\"161\" fill=\"#0f8a6e\" font-weight=\"700\">30</text><path d=\"M230 80 A150 86 0 0 0 530 80\" fill=\"none\" stroke=\"#7a9a1a\" stroke-width=\"2\"/><text x=\"264\" y=\"143\" fill=\"#7a9a1a\" font-weight=\"700\">35</text><path d=\"M270 80 A110 62 0 0 0 490 80\" fill=\"none\" stroke=\"#e07b1a\" stroke-width=\"2\"/><text x=\"293\" y=\"126\" fill=\"#e07b1a\" font-weight=\"700\">40</text><path d=\"M318 80 A62 36 0 0 0 442 80\" fill=\"none\" stroke=\"#b42318\" stroke-width=\"2\"/><text x=\"328\" y=\"108\" fill=\"#b42318\" font-weight=\"700\">45</text></g><text x=\"740\" y=\"262\" text-anchor=\"end\" fill=\"#555\">Isovels show velocity in cm/s</text></g></svg>";
  var NATURAL_ISO = "<div class=\"fl-iso\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Natural channel cross-section with velocity readings in cm per second, for completing the isovels\" style=\"width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px\"><g font-family=\"Inter,Arial,sans-serif\" font-size=\"12\"><text x=\"20\" y=\"22\" font-weight=\"700\" font-size=\"14\">b) Natural channel</text><defs><clipPath id=\"ncw\"><rect x=\"0\" y=\"70\" width=\"760\" height=\"230\"/></clipPath></defs><path d=\"M20 30 L70 30 L80 70 L95 150 L120 215 L170 240 L230 238 L290 215 L330 200 L370 212 L420 250 L480 262 L540 255 L600 235 L650 180 L675 110 L690 70 L700 30 L740 30 L740 290 L20 290 Z\" fill=\"#c9a77a\"/><path clip-path=\"url(#ncw)\" d=\"M70 30 L80 70 L95 150 L120 215 L170 240 L230 238 L290 215 L330 200 L370 212 L420 250 L480 262 L540 255 L600 235 L650 180 L675 110 L690 70 L700 30 Z\" fill=\"#e3f2fb\"/><line x1=\"80\" y1=\"70\" x2=\"690\" y2=\"70\" stroke=\"#1f5e85\" stroke-width=\"2\"/><ellipse cx=\"84\" cy=\"93\" rx=\"10\" ry=\"6\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"91\" cy=\"133\" rx=\"10\" ry=\"6\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"101\" cy=\"169\" rx=\"8\" ry=\"6\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"114\" cy=\"202\" rx=\"6\" ry=\"5\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"132\" cy=\"224\" rx=\"5\" ry=\"3\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"158\" cy=\"237\" rx=\"6\" ry=\"6\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"185\" cy=\"242\" rx=\"6\" ry=\"5\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"215\" cy=\"242\" rx=\"10\" ry=\"6\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"245\" cy=\"235\" rx=\"10\" ry=\"5\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"275\" cy=\"224\" rx=\"8\" ry=\"6\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"300\" cy=\"214\" rx=\"9\" ry=\"5\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"320\" cy=\"207\" rx=\"9\" ry=\"6\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"340\" cy=\"206\" rx=\"9\" ry=\"4\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"360\" cy=\"212\" rx=\"7\" ry=\"3\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"382\" cy=\"224\" rx=\"7\" ry=\"4\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"408\" cy=\"244\" rx=\"10\" ry=\"5\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"435\" cy=\"256\" rx=\"9\" ry=\"3\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"465\" cy=\"262\" rx=\"10\" ry=\"4\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"495\" cy=\"263\" rx=\"10\" ry=\"5\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"525\" cy=\"260\" rx=\"7\" ry=\"3\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"555\" cy=\"253\" rx=\"5\" ry=\"6\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"585\" cy=\"243\" rx=\"10\" ry=\"6\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"612\" cy=\"224\" rx=\"5\" ry=\"5\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"638\" cy=\"197\" rx=\"5\" ry=\"6\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"656\" cy=\"166\" rx=\"6\" ry=\"3\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"669\" cy=\"130\" rx=\"7\" ry=\"6\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"679\" cy=\"103\" rx=\"8\" ry=\"3\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><ellipse cx=\"686\" cy=\"83\" rx=\"5\" ry=\"3\" fill=\"#9c8a74\" stroke=\"#6b5a45\"/><g class=\"iso-model\" fill=\"none\" stroke-width=\"2.4\"><path d=\"M677.8 70.0 L675.7 75.7 L672.5 84.1 L670.4 89.8 L668.3 95.4 L665.1 103.9 L663.0 109.6 L660.4 117.1 L658.0 123.7 L656.0 129.3 L652.9 137.8 L650.9 143.5 L648.5 150.4 L645.9 157.6 L643.9 163.3 L640.8 171.7 L637.0 177.4 L632.6 182.2 L628.7 186.5 L624.1 191.5 L619.0 197.2 L613.8 202.8 L608.9 208.3 L604.9 212.7 L600.9 217.0 L595.8 222.6 L589.1 226.6 L581.1 229.3 L573.2 231.9 L565.3 234.6 L557.4 237.2 L549.4 239.8 L541.5 242.5 L529.6 244.7 L521.7 245.7 L509.8 247.0 L501.4 248.0 L490.0 249.3 L478.1 250.0 L468.3 248.0 L458.3 246.0 L450.4 244.4 L440.0 242.4 L430.6 240.5 L422.6 237.7 L417.7 233.9 L410.8 228.7 L406.5 225.4 L399.1 219.8 L394.9 216.6 L387.9 211.3 L383.0 207.6 L376.7 202.8 L369.6 200.0 L360.2 197.2 L351.3 194.5 L343.4 192.1 L335.5 189.7 L323.6 190.2 L315.7 193.2 L307.7 196.2 L299.8 199.1 L291.9 202.1 L284.0 205.1 L276.0 208.2 L268.1 211.2 L260.5 214.1 L253.1 217.0 L245.7 219.8 L238.3 222.6 L231.0 225.4 L220.6 226.9 L208.7 227.3 L196.8 227.7 L184.9 228.1 L177.0 228.4 L169.1 226.8 L161.1 222.8 L155.0 219.8 L149.2 216.9 L141.3 212.9 L133.4 209.0 L128.6 205.7 L125.5 197.5 L123.2 191.5 L121.0 185.9 L117.7 177.4 L115.6 171.7 L113.4 166.1 L110.1 157.6 L108.0 152.0 L105.7 145.1 L104.3 137.8 L102.7 129.3 L101.7 123.7 L100.1 115.2 L98.5 106.7 L97.4 101.1 L95.9 92.6 L94.3 84.1 L93.2 78.5 L91.6 70.0 L91.6 70.0\" stroke=\"#2a63b8\"/><path d=\"M657.3 70.0 L655.1 75.7 L652.5 82.8 L649.8 89.8 L647.7 95.4 L644.6 103.9 L642.6 109.6 L640.6 115.3 L637.6 123.7 L635.5 129.3 L632.6 137.5 L630.5 143.5 L628.5 149.1 L625.4 157.6 L623.3 163.3 L618.6 168.9 L613.5 174.6 L608.9 179.7 L604.9 184.0 L600.7 188.7 L595.5 194.3 L590.4 200.0 L585.3 205.7 L581.1 209.0 L573.2 211.6 L565.3 214.3 L557.2 217.0 L548.7 219.8 L540.3 222.6 L529.6 225.4 L521.7 226.3 L509.8 227.7 L501.9 228.6 L490.0 230.0 L478.1 230.4 L467.6 228.3 L458.3 226.4 L450.4 224.8 L439.3 222.6 L430.9 219.8 L426.6 216.5 L419.7 211.3 L414.7 207.5 L408.6 202.8 L402.8 198.5 L397.4 194.3 L390.9 189.4 L385.9 185.9 L379.1 182.7 L370.7 180.2 L361.3 177.4 L351.9 174.6 L343.4 172.0 L335.5 169.8 L323.6 170.0 L315.7 172.6 L307.7 175.6 L299.8 178.6 L291.9 181.6 L284.0 184.5 L276.0 187.5 L268.1 190.6 L260.2 193.6 L252.3 196.6 L244.3 199.7 L236.4 202.7 L228.8 205.7 L220.6 207.6 L208.7 208.0 L196.8 208.4 L188.9 208.7 L177.0 209.1 L169.8 205.7 L164.2 202.8 L157.2 199.3 L149.2 195.4 L143.8 191.5 L141.3 185.1 L138.4 177.4 L136.2 171.7 L133.4 164.5 L130.8 157.6 L128.6 152.0 L125.5 143.9 L123.9 137.8 L122.3 129.3 L121.3 123.7 L119.7 115.2 L118.1 106.7 L117.0 101.1 L115.4 92.6 L113.8 84.1 L112.8 78.5 L111.2 70.0 L111.2 70.0\" stroke=\"#0f8a6e\"/><path d=\"M631.6 70.0 L628.7 77.8 L626.3 84.1 L624.2 89.8 L621.1 98.3 L619.1 103.9 L616.8 110.4 L614.0 118.0 L612.0 123.7 L609.0 132.2 L607.0 137.8 L604.9 143.7 L601.5 152.0 L597.0 157.0 L593.0 161.4 L588.7 166.1 L583.6 171.7 L578.5 177.4 L573.3 183.0 L569.2 187.3 L561.3 190.2 L553.4 192.9 L545.5 195.5 L537.5 198.2 L529.6 200.8 L517.7 202.5 L509.8 203.5 L497.9 204.8 L490.0 205.8 L478.1 205.8 L470.2 204.3 L462.3 202.7 L450.4 200.3 L442.5 198.4 L437.2 194.3 L430.6 189.3 L426.0 185.9 L418.7 180.3 L414.7 177.3 L407.4 171.7 L402.8 168.3 L394.9 163.3 L388.2 160.4 L379.1 157.6 L371.1 155.2 L363.2 152.9 L355.3 150.5 L347.4 148.1 L339.4 146.1 L327.5 145.4 L319.6 146.3 L309.9 149.1 L302.4 152.0 L294.8 154.8 L287.3 157.6 L279.7 160.4 L272.1 163.3 L264.2 166.3 L256.2 169.4 L248.3 172.4 L240.4 175.4 L232.5 178.5 L224.5 181.5 L216.6 183.7 L204.7 184.1 L192.8 184.5 L180.9 184.3 L173.0 180.4 L167.1 177.4 L162.0 171.7 L159.8 166.1 L157.2 159.3 L154.4 152.0 L152.2 146.3 L149.2 138.7 L147.3 132.2 L145.7 123.7 L144.7 118.0 L143.1 109.6 L141.5 101.1 L140.4 95.4 L138.8 87.0 L137.4 79.1 L136.2 72.8 L135.7 70.0\" stroke=\"#e07b1a\"/><path d=\"M601.9 70.0 L599.8 75.7 L597.0 83.2 L594.6 89.8 L592.6 95.4 L589.6 103.9 L587.6 109.6 L585.1 116.5 L582.5 123.7 L580.5 129.3 L577.2 137.4 L573.2 141.8 L569.1 146.3 L564.0 152.0 L558.9 157.6 L553.7 163.3 L545.9 166.1 L537.5 168.9 L529.6 171.5 L521.7 174.1 L513.8 175.0 L501.9 176.4 L493.4 177.4 L482.1 178.3 L474.2 176.7 L463.4 174.6 L454.3 172.4 L449.6 168.9 L442.5 163.5 L438.5 160.4 L431.0 154.8 L426.6 151.4 L419.9 146.3 L414.7 142.7 L406.8 138.2 L399.6 135.0 L391.0 132.2 L383.0 129.8 L375.1 127.4 L367.2 125.0 L359.2 122.6 L351.3 120.3 L339.4 118.1 L331.5 117.5 L320.8 118.0 L311.7 119.6 L303.8 121.8 L295.8 124.7 L287.9 127.7 L280.0 130.6 L272.1 133.6 L264.2 136.6 L256.2 139.6 L248.3 142.6 L240.4 145.7 L232.5 148.7 L224.5 151.8 L216.6 154.8 L208.7 156.2 L196.8 156.6 L185.4 154.8 L183.1 149.1 L180.9 143.5 L177.6 135.0 L175.4 129.3 L173.5 120.9 L172.4 115.2 L170.8 106.7 L169.2 98.3 L168.2 92.6 L166.6 84.1 L165.1 76.2 L163.9 70.0 L163.9 70.0\" stroke=\"#b42318\"/></g><circle cx=\"110\" cy=\"90\" r=\"3.2\" fill=\"#13324a\"/><text x=\"115\" y=\"94\" fill=\"#13324a\" font-weight=\"600\">20</text><circle cx=\"110\" cy=\"130\" r=\"3.2\" fill=\"#13324a\"/><text x=\"115\" y=\"134\" fill=\"#13324a\" font-weight=\"600\">15</text><circle cx=\"170\" cy=\"90\" r=\"3.2\" fill=\"#13324a\"/><text x=\"175\" y=\"94\" fill=\"#13324a\" font-weight=\"600\">30</text><circle cx=\"170\" cy=\"130\" r=\"3.2\" fill=\"#13324a\"/><text x=\"175\" y=\"134\" fill=\"#13324a\" font-weight=\"600\">30</text><circle cx=\"170\" cy=\"170\" r=\"3.2\" fill=\"#13324a\"/><text x=\"175\" y=\"174\" fill=\"#13324a\" font-weight=\"600\">25</text><circle cx=\"170\" cy=\"210\" r=\"3.2\" fill=\"#13324a\"/><text x=\"175\" y=\"214\" fill=\"#13324a\" font-weight=\"600\">20</text><circle cx=\"230\" cy=\"90\" r=\"3.2\" fill=\"#13324a\"/><text x=\"235\" y=\"94\" fill=\"#13324a\" font-weight=\"600\">35</text><circle cx=\"230\" cy=\"130\" r=\"3.2\" fill=\"#13324a\"/><text x=\"235\" y=\"134\" fill=\"#13324a\" font-weight=\"600\">35</text><circle cx=\"230\" cy=\"170\" r=\"3.2\" fill=\"#13324a\"/><text x=\"235\" y=\"174\" fill=\"#13324a\" font-weight=\"600\">25</text><circle cx=\"230\" cy=\"210\" r=\"3.2\" fill=\"#13324a\"/><text x=\"235\" y=\"214\" fill=\"#13324a\" font-weight=\"600\">20</text><circle cx=\"290\" cy=\"90\" r=\"3.2\" fill=\"#13324a\"/><text x=\"295\" y=\"94\" fill=\"#13324a\" font-weight=\"600\">35</text><circle cx=\"290\" cy=\"130\" r=\"3.2\" fill=\"#13324a\"/><text x=\"295\" y=\"134\" fill=\"#13324a\" font-weight=\"600\">30</text><circle cx=\"290\" cy=\"170\" r=\"3.2\" fill=\"#13324a\"/><text x=\"295\" y=\"174\" fill=\"#13324a\" font-weight=\"600\">20</text><circle cx=\"350\" cy=\"90\" r=\"3.2\" fill=\"#13324a\"/><text x=\"355\" y=\"94\" fill=\"#13324a\" font-weight=\"600\">35</text><circle cx=\"350\" cy=\"130\" r=\"3.2\" fill=\"#13324a\"/><text x=\"355\" y=\"134\" fill=\"#13324a\" font-weight=\"600\">30</text><circle cx=\"350\" cy=\"170\" r=\"3.2\" fill=\"#13324a\"/><text x=\"355\" y=\"174\" fill=\"#13324a\" font-weight=\"600\">20</text><circle cx=\"410\" cy=\"90\" r=\"3.2\" fill=\"#13324a\"/><text x=\"415\" y=\"94\" fill=\"#13324a\" font-weight=\"600\">35</text><circle cx=\"410\" cy=\"130\" r=\"3.2\" fill=\"#13324a\"/><text x=\"415\" y=\"134\" fill=\"#13324a\" font-weight=\"600\">30</text><circle cx=\"410\" cy=\"170\" r=\"3.2\" fill=\"#13324a\"/><text x=\"415\" y=\"174\" fill=\"#13324a\" font-weight=\"600\">25</text><circle cx=\"410\" cy=\"210\" r=\"3.2\" fill=\"#13324a\"/><text x=\"415\" y=\"214\" fill=\"#13324a\" font-weight=\"600\">20</text><circle cx=\"470\" cy=\"90\" r=\"3.2\" fill=\"#13324a\"/><text x=\"475\" y=\"94\" fill=\"#13324a\" font-weight=\"600\">35</text><circle cx=\"470\" cy=\"130\" r=\"3.2\" fill=\"#13324a\"/><text x=\"475\" y=\"134\" fill=\"#13324a\" font-weight=\"600\">35</text><circle cx=\"470\" cy=\"170\" r=\"3.2\" fill=\"#13324a\"/><text x=\"475\" y=\"174\" fill=\"#13324a\" font-weight=\"600\">30</text><circle cx=\"470\" cy=\"210\" r=\"3.2\" fill=\"#13324a\"/><text x=\"475\" y=\"214\" fill=\"#13324a\" font-weight=\"600\">25</text><circle cx=\"530\" cy=\"90\" r=\"3.2\" fill=\"#13324a\"/><text x=\"535\" y=\"94\" fill=\"#13324a\" font-weight=\"600\">35</text><circle cx=\"530\" cy=\"130\" r=\"3.2\" fill=\"#13324a\"/><text x=\"535\" y=\"134\" fill=\"#13324a\" font-weight=\"600\">35</text><circle cx=\"530\" cy=\"170\" r=\"3.2\" fill=\"#13324a\"/><text x=\"535\" y=\"174\" fill=\"#13324a\" font-weight=\"600\">30</text><circle cx=\"530\" cy=\"210\" r=\"3.2\" fill=\"#13324a\"/><text x=\"535\" y=\"214\" fill=\"#13324a\" font-weight=\"600\">25</text><circle cx=\"590\" cy=\"90\" r=\"3.2\" fill=\"#13324a\"/><text x=\"595\" y=\"94\" fill=\"#13324a\" font-weight=\"600\">30</text><circle cx=\"590\" cy=\"130\" r=\"3.2\" fill=\"#13324a\"/><text x=\"595\" y=\"134\" fill=\"#13324a\" font-weight=\"600\">30</text><circle cx=\"590\" cy=\"170\" r=\"3.2\" fill=\"#13324a\"/><text x=\"595\" y=\"174\" fill=\"#13324a\" font-weight=\"600\">25</text><circle cx=\"590\" cy=\"210\" r=\"3.2\" fill=\"#13324a\"/><text x=\"595\" y=\"214\" fill=\"#13324a\" font-weight=\"600\">20</text><circle cx=\"650\" cy=\"90\" r=\"3.2\" fill=\"#13324a\"/><text x=\"655\" y=\"94\" fill=\"#13324a\" font-weight=\"600\">20</text><circle cx=\"650\" cy=\"130\" r=\"3.2\" fill=\"#13324a\"/><text x=\"655\" y=\"134\" fill=\"#13324a\" font-weight=\"600\">15</text><text x=\"740\" y=\"22\" text-anchor=\"end\" fill=\"#555\">Velocity in cm/s at each point</text></g></svg><div class=\"fl__actions\" style=\"margin-top:.4rem\"><button type=\"button\" class=\"fl__btn fl__btn--ghost\" data-iso=\"1\">Show model isovels</button><span class=\"fl__note\">Draw the 15, 20, 25 and 30 cm/s isovels yourself first (in OneNote), then compare.</span></div></div>";
  var HR_SVG = (function () {
    function ch(x, y, w, h, fill, lab, dl, wl) {
      return '<path d="M' + (x - 22) + ' ' + y + ' H' + x + ' V' + (y + h) + ' H' + (x + w) + ' V' + y + ' H' + (x + w + 22) + ' V' + (y + h + 22) + ' H' + (x - 22) + ' Z" fill="#a0784e"/>' +
        '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fill + '"/>' +
        '<path d="M' + (x - 34) + ' ' + y + ' V' + (y + h) + '" stroke="#222" stroke-width="1.6" marker-start="url(#ha)" marker-end="url(#ha)"/><text x="' + (x - 42) + '" y="' + (y + h / 2 + 5) + '" text-anchor="end" font-weight="700">' + dl + '</text>' +
        '<path d="M' + (x + w + 34) + ' ' + y + ' V' + (y + h) + '" stroke="#222" stroke-width="1.6" marker-start="url(#ha)" marker-end="url(#ha)"/><text x="' + (x + w + 42) + '" y="' + (y + h / 2 + 5) + '" font-weight="700">' + dl + '</text>' +
        '<path d="M' + x + ' ' + (y + h + 36) + ' H' + (x + w) + '" stroke="#222" stroke-width="1.6" marker-start="url(#ha)" marker-end="url(#ha)"/><text x="' + (x + w / 2) + '" y="' + (y + h + 56) + '" text-anchor="middle" font-weight="700">' + wl + '</text>' +
        '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 5) + '" text-anchor="middle" fill="#fff" font-weight="700" font-size="15">' + lab + '</text>';
    }
    var s = '<svg viewBox="0 0 760 300" role="img" aria-label="Hydraulic radius: two rectangular channels, A 20 m wide and 4 m deep, B 5 m wide and 4 m deep" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><defs><marker id="ha" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" fill="#222"/></marker></defs><g font-family="Inter,Arial,sans-serif" font-size="13">';
    s += '<rect x="20" y="14" width="720" height="62" rx="10" fill="#13324a"/><text x="380" y="40" text-anchor="middle" fill="#fff" font-weight="700" font-size="15">Hydraulic radius = cross-sectional area ÷ wetted perimeter</text><text x="380" y="62" text-anchor="middle" fill="#cfe6f5">Area = depth × width.   Wetted perimeter = depth + width + depth.   Higher hydraulic radius = more efficient channel.</text>';
    s += ch(80, 120, 330, 68, "#0f8a6e", "Channel A (green)", "4 m", "20 m");
    s += ch(590, 120, 85, 68, "#c2410c", "B", "4 m", "5 m");
    s += '<text x="632" y="110" text-anchor="middle" fill="#c2410c" font-weight="700">Channel B (orange)</text><text x="20" y="290" fill="#555">Not to scale vertically. All measurements in metres.</text>';
    return s + "</g></svg>";
  })();
  var BANKFULL_SVG =
    '<svg viewBox="0 0 760 270" role="img" aria-label="River cross-section survey showing below-bank, bankfull and over-bank water levels" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><g font-family="Inter,Arial,sans-serif" font-size="12.5">' +
    '<path d="M40 70 L170 72 L220 78 L260 96 L290 140 L320 190 L360 205 L420 204 L460 190 L490 160 L510 140 L540 130 L600 124 L660 110 L720 64 L720 250 L40 250 Z" fill="#d9c3a0" stroke="#6b4a2b" stroke-width="2"/>' +
    '<line x1="40" y1="62" x2="720" y2="62" stroke="#0f8a6e" stroke-width="2.4"/><text x="60" y="54" fill="#0f8a6e" font-weight="700">Over bank (flood)</text>' +
    '<line x1="236" y1="86" x2="680" y2="86" stroke="#b42318" stroke-width="2.4"/><text x="600" y="80" text-anchor="middle" fill="#b42318" font-weight="700">Bankfull</text>' +
    '<line x1="301" y1="158" x2="478" y2="158" stroke="#2a63b8" stroke-width="2.4"/><text x="390" y="150" text-anchor="middle" fill="#2a63b8" font-weight="700">Below bank</text>' +
    '<text x="390" y="230" text-anchor="middle" fill="#5a3d1e">Stream bed</text><text x="600" y="150" text-anchor="middle" fill="#5a3d1e">Gravel bar</text>' +
    '<text x="380" y="266" text-anchor="middle" fill="#555">Distance across the channel →</text></g></svg>';
  var BRADSHAW_SVG = (function () {
    var rows = [["Discharge", 1], ["Occupied channel width", 1], ["Channel depth", 1], ["Average velocity", 1], ["Load quantity", 1], ["Load particle size", -1], ["Channel bed roughness", -1], ["Slope angle (gradient)", -1]];
    var s = '<svg viewBox="0 0 760 490" role="img" aria-label="Bradshaw model: discharge, width, depth, velocity and load quantity increase downstream; particle size, bed roughness and gradient decrease" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><g font-family="Inter,Arial,sans-serif" font-size="13">';
    s += '<text x="40" y="30" font-weight="700" font-size="15">Upstream (source)</text><text x="720" y="30" text-anchor="end" font-weight="700" font-size="15">Downstream (mouth)</text>';
    rows.forEach(function (r, i) {
      var y = 46 + i * 52, h = 44, m = y + h / 2, c = r[1] > 0 ? "#2a9d8f" : "#e07b1a";
      s += '<rect x="40" y="' + y + '" width="680" height="' + h + '" fill="none" stroke="#ccc"/>';
      s += r[1] > 0 ? '<path d="M40 ' + m + ' L720 ' + y + ' L720 ' + (y + h) + ' Z" fill="' + c + '" opacity=".85"/><text x="712" y="' + (m + 5) + '" text-anchor="end" font-weight="700" fill="#08332d">' + r[0] + "</text>"
        : '<path d="M40 ' + y + ' L720 ' + m + ' L40 ' + (y + h) + ' Z" fill="' + c + '" opacity=".85"/><text x="48" y="' + (m + 5) + '" font-weight="700" fill="#4a2506">' + r[0] + "</text>";
    });
    s += '<text x="40" y="482" fill="#555">Green = increases downstream. Orange = decreases downstream. Wider wedge = larger value.</text>';
    return s + "</g></svg>";
  })();
  var SCHUMM_SVG = (function () {
    var X = function (t) { return 70 + t * 560; }, Y = function (v) { return 330 - v * 290; };
    function line(f, c, lab, dy) { var p = []; for (var t = 0; t <= 1.0001; t += 0.02) p.push(X(t).toFixed(1) + " " + Y(f(t)).toFixed(1)); return '<path d="M' + p.join(" L") + '" fill="none" stroke="' + c + '" stroke-width="3"/><text x="' + (X(1) + 8) + '" y="' + (Y(f(1)) + 4 + (dy || 0)) + '" fill="' + c + '" font-weight="700">' + lab + "</text>"; }
    var s = '<svg viewBox="0 0 760 380" role="img" aria-label="Schumm model: from source to mouth discharge, width, depth and velocity rise while gradient falls, across upland, floodplain and estuarine zones" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><g font-family="Inter,Arial,sans-serif" font-size="12.5">';
    [["Zone 1: Upland", 0, 1 / 3], ["Zone 2: Floodplain", 1 / 3, 2 / 3], ["Zone 3: Estuarine", 2 / 3, 1]].forEach(function (z, i) {
      s += '<rect x="' + X(z[1]) + '" y="30" width="' + (X(z[2]) - X(z[1])) + '" height="300" fill="' + ["#f3efe6", "#eef6ea", "#e8f2f8"][i] + '"/><text x="' + ((X(z[1]) + X(z[2])) / 2) + '" y="22" text-anchor="middle" font-weight="700">' + z[0] + "</text>";
    });
    s += line(function (t) { return 0.06 + 0.86 * (1 - Math.exp(-3.2 * t)) / (1 - Math.exp(-3.2)); }, "#13324a", "Discharge");
    s += line(function (t) { return 0.06 + 0.62 * t; }, "#2a63b8", "Width");
    s += line(function (t) { return 0.06 + 0.46 * t; }, "#0f8a6e", "Depth");
    s += line(function (t) { return 0.06 + 0.26 * t; }, "#b42318", "Velocity");
    s += line(function (t) { return 0.02 + 0.92 * Math.exp(-6 * t); }, "#e07b1a", "Gradient", -2);
    s += '<line x1="70" y1="330" x2="630" y2="330" stroke="#333"/><line x1="70" y1="30" x2="70" y2="330" stroke="#333"/><text x="70" y="350" fill="#333">Source</text><text x="630" y="350" text-anchor="end" fill="#333">Mouth</text><text x="350" y="372" text-anchor="middle" fill="#555">Distance downstream →</text>';
    return s + "</g></svg>";
  })();

  /* FW03: animated erosion and transport tiles (SMIL, my own drawings) */
  function ANIM_TILE(title, sub, body) {
    return '<figure class="fl-anim__t"><svg viewBox="0 0 340 190" role="img" aria-label="' + title + ': ' + sub + '" style="width:100%;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><g font-family="Inter,Arial,sans-serif">' + body + '</g></svg><figcaption><b>' + title + '</b><span>' + sub + "</span></figcaption></figure>";
  }
  function ANIM_SET(tiles, note) {
    return '<div class="fl-anim"><div class="fl-anim__g">' + tiles.join("") + '</div><div class="fl__actions" style="margin-top:.4rem"><button type="button" class="fl__btn fl__btn--ghost" data-anim="1">Pause animations</button>' + (note ? '<span class="fl__note">' + note + "</span>" : "") + "</div></div>";
  }
  var WATER = '<rect x="0" y="0" width="340" height="190" fill="#e3f2fb"/>';
  var FLOWLINES = [40, 80, 120].map(function (y, i) { return '<path d="M-60 ' + y + ' h40" stroke="#7fb1cc" stroke-width="2.5" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0 0" to="420 0" dur="' + (2.2 + i * 0.4) + 's" repeatCount="indefinite"/></path>'; }).join("");
  var BED = '<path d="M0 160 Q85 152 170 158 T340 156 V190 H0 Z" fill="#c9a77a"/>';
  var EROSION_ANIM = ANIM_SET([
    ANIM_TILE("Hydraulic action", "the force of the water", WATER +
      '<rect x="250" y="0" width="90" height="190" fill="#b08a5c"/><path d="M250 50 l20 6 M250 95 l26 -4 M250 135 l18 8" stroke="#6b4a2b" stroke-width="2"/>' +
      '<polygon points="250,90 278,92 250,96" fill="#e3f2fb"><animate attributeName="points" values="250,90 278,92 250,96;250,90 278,92 250,96;250,84 290,92 250,102;250,90 278,92 250,96" keyTimes="0;.4;.6;1" dur="3s" repeatCount="indefinite"/></polygon>' +
      [60, 95, 130].map(function (y, i) { return '<path d="M30 ' + y + ' q20 -14 40 0 t40 0 t40 0" fill="none" stroke="#1f5e85" stroke-width="3" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" values="0 0;95 0;95 0" keyTimes="0;.55;1" dur="1.6s" begin="-' + (i * 0.3) + 's" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0" keyTimes="0;.55;.7" dur="1.6s" begin="-' + (i * 0.3) + 's" repeatCount="indefinite"/></path>'; }).join("") +
      '<polygon points="250,60 262,58 266,70 252,72" fill="#8b6a43"><animateMotion path="M0 0 L-60 40 L-220 80" keyTimes="0;.5;1" calcMode="linear" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.3;.9;1" dur="3s" repeatCount="indefinite"/></polygon>' +
      '<text x="12" y="180" font-size="11" fill="#1f5e85">Water forces air into cracks in the bank</text>'),
    ANIM_TILE("Abrasion (corrasion)", "load scrapes the bed and banks", WATER + FLOWLINES + BED +
      '<path d="M20 158 H320" stroke="#7a5a35" stroke-width="2" stroke-dasharray="6 5"><animate attributeName="stroke-dashoffset" from="0" to="-110" dur="2s" repeatCount="indefinite"/></path>' +
      [0, 1.3].map(function (b) { return '<g><ellipse cx="0" cy="0" rx="14" ry="10" fill="#8a7a66" stroke="#4a3d2e" stroke-width="1.5"/><animateMotion path="M-20 147 L360 149" dur="2.6s" begin="-' + b + 's" repeatCount="indefinite"/></g>'; }).join("") +
      [0, .65, 1.3, 1.95].map(function (b) { return '<circle r="2" fill="#7a5a35"><animateMotion path="M0 160 l-10 -14" dur="2.6s" begin="-' + b + 's" repeatCount="indefinite"/><animate attributeName="cx" values="60;300" dur="2.6s" begin="-' + b + 's" repeatCount="indefinite"/></circle>'; }).join("") +
      '<text x="12" y="20" font-size="11" fill="#1f5e85">Like sandpaper: the bed is worn down</text>'),
    ANIM_TILE("Attrition", "load collides and breaks up", WATER + FLOWLINES + BED +
      '<polygon points="-16,-10 6,-14 16,0 4,13 -14,9" fill="#8a7a66" stroke="#4a3d2e" stroke-width="1.5"><animateMotion values="40,110;150,110;150,110" keyTimes="0;.45;1" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.45;.5;1" dur="3s" repeatCount="indefinite"/></polygon>' +
      '<polygon points="-14,-12 12,-9 15,6 -4,14 -16,4" fill="#9a8a74" stroke="#4a3d2e" stroke-width="1.5"><animateMotion values="300,110;185,110;185,110" keyTimes="0;.45;1" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.45;.5;1" dur="3s" repeatCount="indefinite"/></polygon>' +
      '<path d="M168 92 l4 10 l10 -4 l-6 9 l9 6 l-11 1 l1 11 l-7 -8 l-8 7 l2 -11 l-11 -2 l10 -5 z" fill="#f2b705"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.44;.48;.58;1" dur="3s" repeatCount="indefinite"/></path>' +
      [[-1, -1, 9], [1, -1, 8], [-1, 1, 7], [1, 1, 8], [0, 1.4, 6]].map(function (d) { return '<circle r="' + d[2] + '" fill="#a39480" stroke="#4a3d2e" stroke-width="1.2"><animateMotion values="168,110;168,110;' + (168 + d[0] * 40) + ',' + (110 + d[1] * 28) + ';' + (230 + d[0] * 30) + ',' + (110 + d[1] * 28) + '" keyTimes="0;.47;.65;1" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.47;.5;1" dur="3s" repeatCount="indefinite"/></circle>'; }).join("") +
      '<text x="12" y="20" font-size="11" fill="#1f5e85">Pieces become smaller and more rounded</text>'),
    ANIM_TILE("Solution (corrosion)", "weak acids dissolve some rocks", WATER + FLOWLINES + BED +
      '<rect x="120" y="96" width="100" height="62" rx="4" fill="#e9e4d4" stroke="#9c9478" stroke-width="2"><animate attributeName="height" values="62;30;62" keyTimes="0;.95;1" dur="5s" repeatCount="indefinite"/><animate attributeName="y" values="96;128;96" keyTimes="0;.95;1" dur="5s" repeatCount="indefinite"/></rect>' +
      '<text x="170" y="150" text-anchor="middle" font-size="11" fill="#6b6450">limestone</text>' +
      [0, .5, 1, 1.5, 2, 2.5, 3, 3.5].map(function (b, i) { return '<circle r="3" fill="#0f8a6e"><animateMotion path="M' + (130 + (i * 11) % 80) + ' 120 q30 -40 140 -60" dur="2.8s" begin="-' + b + 's" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="2.8s" begin="-' + b + 's" repeatCount="indefinite"/></circle>'; }).join("") +
      '<text x="12" y="20" font-size="11" fill="#1f5e85">Dissolved minerals are carried away</text>')
  ], "Watch each one, then match the definitions below.");
  var TRANSPORT_ANIM = ANIM_SET([
    ANIM_TILE("Traction", "large boulders roll or slide along the bed", WATER + FLOWLINES + BED +
      '<g><g><polygon points="-26,-6 -16,-24 8,-26 26,-8 22,16 -6,26 -24,16" fill="#8a7a66" stroke="#4a3d2e" stroke-width="2"/><path d="M-10 -8 l12 4" stroke="#4a3d2e"/><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite"/></g><animateMotion path="M-30 130 L370 130" dur="6s" repeatCount="indefinite"/></g>' +
      '<rect x="12" y="10" width="120" height="10" rx="5" fill="#ddd"/><rect x="12" y="10" width="120" height="10" rx="5" fill="#b42318"/><text x="140" y="19" font-size="11" fill="#555">Energy needed: highest</text>'),
    ANIM_TILE("Saltation", "smaller stones bounce along the bed", WATER + FLOWLINES + BED +
      [0, .8, 1.6].map(function (b) { return '<circle r="7" fill="#9a7b52" stroke="#4a3d2e" stroke-width="1.2"><animateMotion path="M-10 152 Q30 95 70 152 Q110 95 150 152 Q190 95 230 152 Q270 95 310 152 Q330 120 350 140" dur="2.4s" begin="-' + b + 's" repeatCount="indefinite"/></circle>'; }).join("") +
      '<rect x="12" y="10" width="120" height="10" rx="5" fill="#ddd"/><rect x="12" y="10" width="84" height="10" rx="5" fill="#e07b1a"/><text x="140" y="19" font-size="11" fill="#555">Energy needed: high</text>'),
    ANIM_TILE("Suspension", "fine sand, silt and clay carried in the water", WATER + BED +
      (function () { var s = "", i; for (i = 0; i < 26; i++) { var y = 40 + (i * 37) % 105, d = 3 + (i % 5) * 0.4; s += '<circle r="' + (1.6 + (i % 3) * 0.6) + '" fill="#8b6a43"><animateMotion path="M' + (-20 - (i * 29) % 300) + ' ' + y + ' q90 -8 180 0 t180 0 t180 0" dur="' + d + 's" repeatCount="indefinite"/></circle>'; } return s; })() +
      '<rect x="12" y="10" width="120" height="10" rx="5" fill="#ddd"/><rect x="12" y="10" width="48" height="10" rx="5" fill="#0f8a6e"/><text x="140" y="19" font-size="11" fill="#555">Energy needed: low</text>'),
    ANIM_TILE("Solution", "dissolved minerals carried invisibly", '<rect x="0" y="0" width="340" height="190" fill="#d8efe7"/>' + FLOWLINES + BED +
      (function () { var s = "", i; for (i = 0; i < 12; i++) { s += '<text font-size="9" fill="#0f6e56" opacity=".75">' + (i % 2 ? "Ca²⁺" : "HCO₃⁻") + '<animateMotion path="M' + (-30 - i * 28) + ' ' + (40 + (i * 23) % 100) + ' h420" dur="5s" repeatCount="indefinite"/></text>'; } return s; })() +
      '<rect x="12" y="10" width="120" height="10" rx="5" fill="#ddd"/><rect x="12" y="10" width="14" height="10" rx="5" fill="#2a63b8"/><text x="140" y="19" font-size="11" fill="#555">Energy needed: almost none</text>')
  ], "The red to blue bars show how much energy the river needs for each one.");
  var VEL_TESTER = '<div class="fl-vel" data-vel="1"><div class="fl-vel__top"><label for="flVel"><b>River velocity:</b> <span class="fl-vel__v">30 cm/s</span></label><input id="flVel" type="range" min="0" max="100" value="49" step="1"></div>' +
    '<div class="fl-vel__rows"></div><p class="fl__note">Based on the Hjulstr\u00f6m curve (you will study the full graph in the lesson). Move the slider down to slow the river and watch which load is dropped first.</p></div>';

  var WHITEBOARD = (function () {
    var hand = 'font-family="Comic Sans MS,Chalkboard SE,Segoe Print,cursive"';
    var s = '<svg viewBox="0 0 760 470" role="img" aria-label="Whiteboard checklist: draw the four types of erosion, the four types of transportation and deposition" style="width:100%;max-width:760px;height:auto;display:block">';
    s += '<rect x="14" y="14" width="732" height="420" rx="6" fill="#c9ced3"/><rect x="24" y="24" width="712" height="400" rx="3" fill="#fdfdfd"/>';
    s += [[10, 10], [728, 10]].map(function (p) { return '<rect x="' + p[0] + '" y="' + p[1] + '" width="22" height="22" rx="4" fill="#8a9097"/>'; }).join("");
    s += '<rect x="10" y="432" width="740" height="16" rx="3" fill="#b9bfc5"/><rect x="520" y="404" width="120" height="32" rx="4" fill="#d9a86c" stroke="#a87a43"/><rect x="520" y="404" width="120" height="8" fill="#8a8f96"/>';
    s += '<rect x="668" y="352" width="16" height="84" rx="3" fill="#1d4fd8"/><rect x="668" y="372" width="16" height="64" rx="2" fill="#e8eaed" stroke="#c3c7cc"/>';
    s += '<g ' + hand + '><text x="50" y="66" font-size="24" font-weight="700" fill="#1d4fd8">In pairs, draw and label:</text>';
    var L = [["#b42318", "Erosion", "hydraulic action, abrasion, attrition, solution"], ["#0f766e", "Transportation", "traction, saltation, suspension, solution"], ["#a16207", "Deposition", "when and why the load is dropped, largest first"]];
    L.forEach(function (r, i) { var y = 118 + i * 78; s += '<rect x="52" y="' + (y - 20) + '" width="22" height="22" rx="3" fill="none" stroke="' + r[0] + '" stroke-width="2.5"/><text x="88" y="' + y + '" font-size="22" font-weight="700" fill="' + r[0] + '">' + r[1] + '</text><text x="88" y="' + (y + 28) + '" font-size="17" fill="#333">' + r[2] + "</text>"; });
    s += '<text x="50" y="382" font-size="17" fill="#1d4fd8">Use arrows and key words. Photograph your board for OneNote.</text></g>';
    return s + "</svg>";
  })();
  var LONGPROFILE_SVG = "<svg viewBox=\"0 0 760 420\" role=\"img\" aria-label=\"Long profile of a river from upper to lower course, with cross-sections showing a V-shaped valley, a wider valley and a wide flat floodplain\" style=\"width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px\"><defs><marker id=\"lpa\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10z\" fill=\"#333\"/></marker><marker id=\"lpb\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10z\" fill=\"#2a63b8\"/></marker></defs><g font-family=\"Inter,Arial,sans-serif\" font-size=\"13\"><rect x=\"20\" y=\"10\" width=\"233\" height=\"400\" fill=\"#f6efe4\"/><rect x=\"253\" y=\"10\" width=\"233\" height=\"400\" fill=\"#eef6ea\"/><rect x=\"486\" y=\"10\" width=\"254\" height=\"400\" fill=\"#e8f2f8\"/><text x=\"136\" y=\"32\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"15\">1. Upper course</text><text x=\"370\" y=\"32\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"15\">2. Middle course</text><text x=\"613\" y=\"32\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"15\">3. Lower course</text><path d=\"M30 60 C90 70 150 120 220 150 C320 195 420 215 520 222 C600 226 660 228 700 228 L700 240 L30 240 Z\" fill=\"#c9a77a\"/><path d=\"M30 60 C90 70 150 120 220 150 C320 195 420 215 520 222 C600 226 660 228 700 228\" fill=\"none\" stroke=\"#1f5e85\" stroke-width=\"3\"/><path d=\"M700 228 H740\" stroke=\"#1f5e85\" stroke-width=\"3\"/><path d=\"M700 228 h40 v12 h-40z\" fill=\"#8fc6e6\"/><text x=\"720\" y=\"220\" text-anchor=\"middle\" font-size=\"11\" fill=\"#1f5e85\">Sea</text><path d=\"M90 56 H560\" stroke=\"#333\" stroke-width=\"2\" marker-end=\"url(#lpa)\"/><text x=\"330\" y=\"76\" text-anchor=\"middle\">Gradient decreases</text><path d=\"M240 120 L470 175\" stroke=\"#2a63b8\" stroke-width=\"2.5\" marker-end=\"url(#lpb)\"/><text x=\"355\" y=\"135\" fill=\"#2a63b8\" font-weight=\"700\" transform=\"rotate(13 355 135)\">Transportation</text><text x=\"60\" y=\"190\" font-weight=\"700\" fill=\"#7a2a0a\">Mainly erosion</text><text x=\"560\" y=\"205\" font-weight=\"700\" fill=\"#6b4a2b\">Lots of deposition</text><path d=\"M685 228 L740 228\" stroke=\"#555\" stroke-dasharray=\"3 3\"/><text x=\"735\" y=\"258\" text-anchor=\"end\" font-size=\"11\" fill=\"#555\">Base level (sea level)</text><text x=\"30\" y=\"272\" font-weight=\"700\" fill=\"#333\">Cross-profiles (valley cross-sections)</text><path d=\"M50 290 L110 382 Q136 400 162 382 L222 290 L226 384 L46 384 Z\" fill=\"#c9a77a\" stroke=\"#6b4a2b\" stroke-width=\"1.5\"/><path d=\"M114 368 L158 368\" stroke=\"#1f5e85\" stroke-width=\"2.5\"/><text x=\"136\" y=\"402\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#3a2a14\" font-size=\"12\">Vertical erosion (cutting down)</text><path d=\"M270 290 L305 330 Q312 352 335 356 L405 356 Q428 352 435 330 L470 290 L460 384 L280 384 Z\" fill=\"#c9a77a\" stroke=\"#6b4a2b\" stroke-width=\"1.5\"/><path d=\"M312 344 L428 344\" stroke=\"#1f5e85\" stroke-width=\"2.5\"/><text x=\"370\" y=\"402\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#3a2a14\" font-size=\"12\">Lateral erosion (valley widening)</text><path d=\"M500 290 L515 320 Q520 340 540 342 L686 342 Q706 340 711 320 L726 290 L726 384 L500 384 Z\" fill=\"#c9a77a\" stroke=\"#6b4a2b\" stroke-width=\"1.5\"/><path d=\"M528 334 L698 334\" stroke=\"#1f5e85\" stroke-width=\"2.5\"/><text x=\"613\" y=\"402\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#3a2a14\" font-size=\"12\">Deposition of alluvium</text></g></svg>";
  var HJULSTROM_SVG = "<svg viewBox=\"0 0 760 450\" role=\"img\" aria-label=\"Hjulstr\u00f6m curve: river velocity against particle size, showing zones where particles are eroded, transported and deposited\" style=\"width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px\"><g font-family=\"Inter,Arial,sans-serif\" font-size=\"12\"><rect x=\"80\" y=\"30\" width=\"620\" height=\"360\" fill=\"#fdf0cf\"/><path d=\"M80 30 L700 30 L700.0 43.5 L700.0 43.5 L694.8 45.1 L689.7 46.7 L684.5 48.3 L679.3 50.0 L674.2 51.7 L669.0 53.4 L663.8 55.1 L658.7 56.9 L653.5 58.6 L648.3 60.4 L643.2 62.3 L638.0 64.1 L632.8 66.0 L627.7 67.8 L622.5 69.7 L617.3 71.6 L612.2 73.6 L607.0 75.5 L601.8 77.5 L596.7 79.5 L591.5 81.5 L586.3 83.6 L581.2 85.7 L576.0 87.8 L570.8 89.9 L565.7 92.1 L560.5 94.3 L555.3 96.5 L550.2 98.7 L545.0 101.0 L539.8 103.3 L534.7 105.6 L529.5 107.9 L524.3 110.3 L519.2 112.6 L514.0 115.0 L508.8 117.3 L503.7 119.7 L498.5 122.1 L493.3 124.5 L488.2 127.0 L483.0 129.6 L477.8 132.4 L472.7 135.3 L467.5 138.3 L462.3 141.3 L457.2 144.4 L452.0 147.4 L446.8 150.5 L441.7 153.5 L436.5 156.4 L431.3 159.3 L426.2 162.0 L421.0 164.6 L415.8 167.1 L410.7 169.3 L405.5 171.3 L400.3 173.1 L395.2 174.6 L390.0 175.8 L384.8 176.9 L379.7 177.9 L374.5 178.9 L369.3 179.9 L364.2 180.7 L359.0 181.5 L353.8 182.1 L348.7 182.6 L343.5 182.9 L338.3 183.0 L333.2 182.7 L328.0 181.8 L322.8 180.5 L317.7 178.7 L312.5 176.7 L307.3 174.5 L302.2 172.1 L297.0 169.7 L291.8 167.3 L286.7 165.0 L281.5 162.7 L276.3 160.3 L271.2 157.8 L266.0 155.1 L260.8 152.3 L255.7 149.4 L250.5 146.4 L245.3 143.3 L240.2 140.2 L235.0 137.0 L229.8 133.8 L224.7 130.6 L219.5 127.5 L214.3 124.3 L209.2 121.1 L204.0 118.1 L198.8 115.0 L193.7 112.1 L188.5 109.2 L183.3 106.5 L178.2 103.8 L173.0 101.2 L167.8 98.5 L162.7 95.9 L157.5 93.3 L152.3 90.8 L147.2 88.2 L142.0 85.7 L136.8 83.2 L131.7 80.7 L126.5 78.2 L121.3 75.8 L116.2 73.3 L111.0 70.9 L105.8 68.5 L100.7 66.2 L95.5 63.9 L90.3 61.5 L85.2 59.3 L80.0 57.0 Z\" fill=\"#d9e8c4\"/><path d=\"M183.3 390.0 L188.5 384.7 L193.7 379.5 L198.8 374.4 L204.0 369.3 L209.2 364.2 L214.3 359.2 L219.5 354.2 L224.7 349.4 L229.8 344.5 L235.0 339.7 L240.2 335.0 L245.3 330.4 L250.5 325.8 L255.7 321.3 L260.8 316.8 L266.0 312.4 L271.2 308.1 L276.3 303.8 L281.5 299.6 L286.7 295.5 L291.8 291.5 L297.0 287.5 L302.2 283.6 L307.3 279.9 L312.5 276.1 L317.7 272.5 L322.8 268.9 L328.0 265.3 L333.2 261.8 L338.3 258.3 L343.5 254.8 L348.7 251.4 L353.8 247.9 L359.0 244.5 L364.2 241.0 L369.3 237.6 L374.5 234.1 L379.7 230.6 L384.8 227.1 L390.0 223.5 L395.2 219.9 L400.3 216.2 L405.5 212.6 L410.7 208.9 L415.8 205.2 L421.0 201.4 L426.2 197.7 L431.3 194.0 L436.5 190.3 L441.7 186.6 L446.8 182.9 L452.0 179.2 L457.2 175.6 L462.3 172.0 L467.5 168.5 L472.7 164.9 L477.8 161.5 L483.0 158.1 L488.2 154.8 L493.3 151.5 L498.5 148.3 L503.7 145.1 L508.8 141.9 L514.0 138.7 L519.2 135.5 L524.3 132.4 L529.5 129.3 L534.7 126.2 L539.8 123.2 L545.0 120.2 L550.2 117.2 L555.3 114.3 L560.5 111.4 L565.7 108.6 L570.8 105.8 L576.0 103.1 L581.2 100.5 L586.3 97.9 L591.5 95.4 L596.7 93.0 L596.7 93.0 L601.8 90.6 L607.0 88.3 L612.2 86.0 L617.3 83.7 L622.5 81.4 L627.7 79.2 L632.8 77.0 L638.0 74.9 L643.2 72.8 L648.3 70.7 L653.5 68.7 L658.7 66.7 L663.8 64.8 L669.0 62.9 L674.2 61.0 L679.3 59.2 L684.5 57.5 L689.7 55.8 L694.8 54.1 L700.0 52.5 L700 390 L183.3 390 Z\" fill=\"#f3c9bd\"/><line x1=\"80.0\" y1=\"30\" x2=\"80.0\" y2=\"390\" stroke=\"#fff\" stroke-opacity=\".7\"/><text x=\"80.0\" y=\"406\" text-anchor=\"middle\" fill=\"#333\">0.001</text><line x1=\"183.3\" y1=\"30\" x2=\"183.3\" y2=\"390\" stroke=\"#fff\" stroke-opacity=\".7\"/><text x=\"183.3\" y=\"406\" text-anchor=\"middle\" fill=\"#333\">0.01</text><line x1=\"286.7\" y1=\"30\" x2=\"286.7\" y2=\"390\" stroke=\"#fff\" stroke-opacity=\".7\"/><text x=\"286.7\" y=\"406\" text-anchor=\"middle\" fill=\"#333\">0.1</text><line x1=\"390.0\" y1=\"30\" x2=\"390.0\" y2=\"390\" stroke=\"#fff\" stroke-opacity=\".7\"/><text x=\"390.0\" y=\"406\" text-anchor=\"middle\" fill=\"#333\">1</text><line x1=\"493.3\" y1=\"30\" x2=\"493.3\" y2=\"390\" stroke=\"#fff\" stroke-opacity=\".7\"/><text x=\"493.3\" y=\"406\" text-anchor=\"middle\" fill=\"#333\">10</text><line x1=\"596.7\" y1=\"30\" x2=\"596.7\" y2=\"390\" stroke=\"#fff\" stroke-opacity=\".7\"/><text x=\"596.7\" y=\"406\" text-anchor=\"middle\" fill=\"#333\">100</text><line x1=\"700.0\" y1=\"30\" x2=\"700.0\" y2=\"390\" stroke=\"#fff\" stroke-opacity=\".7\"/><text x=\"700.0\" y=\"406\" text-anchor=\"middle\" fill=\"#333\">1000</text><line x1=\"80\" y1=\"390.0\" x2=\"700\" y2=\"390.0\" stroke=\"#fff\" stroke-opacity=\".7\"/><text x=\"72\" y=\"394.0\" text-anchor=\"end\" fill=\"#333\">0.1</text><line x1=\"80\" y1=\"300.0\" x2=\"700\" y2=\"300.0\" stroke=\"#fff\" stroke-opacity=\".7\"/><text x=\"72\" y=\"304.0\" text-anchor=\"end\" fill=\"#333\">1</text><line x1=\"80\" y1=\"210.0\" x2=\"700\" y2=\"210.0\" stroke=\"#fff\" stroke-opacity=\".7\"/><text x=\"72\" y=\"214.0\" text-anchor=\"end\" fill=\"#333\">10</text><line x1=\"80\" y1=\"120.0\" x2=\"700\" y2=\"120.0\" stroke=\"#fff\" stroke-opacity=\".7\"/><text x=\"72\" y=\"124.0\" text-anchor=\"end\" fill=\"#333\">100</text><line x1=\"80\" y1=\"30.0\" x2=\"700\" y2=\"30.0\" stroke=\"#fff\" stroke-opacity=\".7\"/><text x=\"72\" y=\"34.0\" text-anchor=\"end\" fill=\"#333\">1000</text><path d=\"M80.0 57.0 L85.2 59.3 L90.3 61.5 L95.5 63.9 L100.7 66.2 L105.8 68.5 L111.0 70.9 L116.2 73.3 L121.3 75.8 L126.5 78.2 L131.7 80.7 L136.8 83.2 L142.0 85.7 L147.2 88.2 L152.3 90.8 L157.5 93.3 L162.7 95.9 L167.8 98.5 L173.0 101.2 L178.2 103.8 L183.3 106.5 L188.5 109.2 L193.7 112.1 L198.8 115.0 L204.0 118.1 L209.2 121.1 L214.3 124.3 L219.5 127.5 L224.7 130.6 L229.8 133.8 L235.0 137.0 L240.2 140.2 L245.3 143.3 L250.5 146.4 L255.7 149.4 L260.8 152.3 L266.0 155.1 L271.2 157.8 L276.3 160.3 L281.5 162.7 L286.7 165.0 L291.8 167.3 L297.0 169.7 L302.2 172.1 L307.3 174.5 L312.5 176.7 L317.7 178.7 L322.8 180.5 L328.0 181.8 L333.2 182.7 L338.3 183.0 L343.5 182.9 L348.7 182.6 L353.8 182.1 L359.0 181.5 L364.2 180.7 L369.3 179.9 L374.5 178.9 L379.7 177.9 L384.8 176.9 L390.0 175.8 L395.2 174.6 L400.3 173.1 L405.5 171.3 L410.7 169.3 L415.8 167.1 L421.0 164.6 L426.2 162.0 L431.3 159.3 L436.5 156.4 L441.7 153.5 L446.8 150.5 L452.0 147.4 L457.2 144.4 L462.3 141.3 L467.5 138.3 L472.7 135.3 L477.8 132.4 L483.0 129.6 L488.2 127.0 L493.3 124.5 L498.5 122.1 L503.7 119.7 L508.8 117.3 L514.0 115.0 L519.2 112.6 L524.3 110.3 L529.5 107.9 L534.7 105.6 L539.8 103.3 L545.0 101.0 L550.2 98.7 L555.3 96.5 L560.5 94.3 L565.7 92.1 L570.8 89.9 L576.0 87.8 L581.2 85.7 L586.3 83.6 L591.5 81.5 L596.7 79.5 L601.8 77.5 L607.0 75.5 L612.2 73.6 L617.3 71.6 L622.5 69.7 L627.7 67.8 L632.8 66.0 L638.0 64.1 L643.2 62.3 L648.3 60.4 L653.5 58.6 L658.7 56.9 L663.8 55.1 L669.0 53.4 L674.2 51.7 L679.3 50.0 L684.5 48.3 L689.7 46.7 L694.8 45.1 L700.0 43.5\" fill=\"none\" stroke=\"#1d3b2a\" stroke-width=\"2.6\"/><path d=\"M183.3 390.0 L188.5 384.7 L193.7 379.5 L198.8 374.4 L204.0 369.3 L209.2 364.2 L214.3 359.2 L219.5 354.2 L224.7 349.4 L229.8 344.5 L235.0 339.7 L240.2 335.0 L245.3 330.4 L250.5 325.8 L255.7 321.3 L260.8 316.8 L266.0 312.4 L271.2 308.1 L276.3 303.8 L281.5 299.6 L286.7 295.5 L291.8 291.5 L297.0 287.5 L302.2 283.6 L307.3 279.9 L312.5 276.1 L317.7 272.5 L322.8 268.9 L328.0 265.3 L333.2 261.8 L338.3 258.3 L343.5 254.8 L348.7 251.4 L353.8 247.9 L359.0 244.5 L364.2 241.0 L369.3 237.6 L374.5 234.1 L379.7 230.6 L384.8 227.1 L390.0 223.5 L395.2 219.9 L400.3 216.2 L405.5 212.6 L410.7 208.9 L415.8 205.2 L421.0 201.4 L426.2 197.7 L431.3 194.0 L436.5 190.3 L441.7 186.6 L446.8 182.9 L452.0 179.2 L457.2 175.6 L462.3 172.0 L467.5 168.5 L472.7 164.9 L477.8 161.5 L483.0 158.1 L488.2 154.8 L493.3 151.5 L498.5 148.3 L503.7 145.1 L508.8 141.9 L514.0 138.7 L519.2 135.5 L524.3 132.4 L529.5 129.3 L534.7 126.2 L539.8 123.2 L545.0 120.2 L550.2 117.2 L555.3 114.3 L560.5 111.4 L565.7 108.6 L570.8 105.8 L576.0 103.1 L581.2 100.5 L586.3 97.9 L591.5 95.4 L596.7 93.0\" fill=\"none\" stroke=\"#6b1d12\" stroke-width=\"2.6\"/><path d=\"M596.7 93.0 L601.8 90.6 L607.0 88.3 L612.2 86.0 L617.3 83.7 L622.5 81.4 L627.7 79.2 L632.8 77.0 L638.0 74.9 L643.2 72.8 L648.3 70.7 L653.5 68.7 L658.7 66.7 L663.8 64.8 L669.0 62.9 L674.2 61.0 L679.3 59.2 L684.5 57.5 L689.7 55.8 L694.8 54.1 L700.0 52.5\" fill=\"none\" stroke=\"#6b1d12\" stroke-width=\"2.6\" stroke-dasharray=\"7 5\"/><rect x=\"80\" y=\"30\" width=\"620\" height=\"360\" fill=\"none\" stroke=\"#333\"/><text x=\"300\" y=\"66\" font-weight=\"700\" font-size=\"15\" fill=\"#2f5a1c\">EROSION (particles picked up)</text><text x=\"110\" y=\"250\" font-weight=\"700\" font-size=\"15\" fill=\"#7a5a10\">TRANSPORT</text><text x=\"110\" y=\"268\" fill=\"#7a5a10\">(particles kept moving)</text><text x=\"520\" y=\"330\" font-weight=\"700\" font-size=\"15\" fill=\"#7a2414\">DEPOSITION</text><text x=\"520\" y=\"348\" fill=\"#7a2414\">(particles dropped)</text><text x=\"266.0\" y=\"142.5\" fill=\"#1d3b2a\" font-weight=\"700\" transform=\"rotate(-8 266.0 142.5)\">Critical erosion velocity</text><text x=\"311.7\" y=\"242.5\" fill=\"#6b1d12\" font-weight=\"700\" transform=\"rotate(-31 311.7 242.5)\">Settling (fall) velocity</text><text x=\"390\" y=\"440\" text-anchor=\"middle\" fill=\"#333\">Particle size (mm), log scale</text><text x=\"22\" y=\"210\" transform=\"rotate(-90 22 210)\" text-anchor=\"middle\" fill=\"#333\">River velocity (cm/s), log scale</text><text x=\"116.2\" y=\"422\" text-anchor=\"middle\" fill=\"#555\" font-style=\"italic\">clay</text><text x=\"209.2\" y=\"422\" text-anchor=\"middle\" fill=\"#555\" font-style=\"italic\">silt</text><text x=\"343.5\" y=\"422\" text-anchor=\"middle\" fill=\"#555\" font-style=\"italic\">sand</text><text x=\"467.5\" y=\"422\" text-anchor=\"middle\" fill=\"#555\" font-style=\"italic\">gravel</text><text x=\"576.0\" y=\"422\" text-anchor=\"middle\" fill=\"#555\" font-style=\"italic\">pebbles</text><text x=\"669.0\" y=\"422\" text-anchor=\"middle\" fill=\"#555\" font-style=\"italic\">boulders</text></g></svg>";
  /* FW04: river landform diagrams (my own drawings) */
  function LF_NUM(x, y, n) { return '<g transform="translate(' + x + "," + y + ')"><circle r="12" fill="#fff" stroke="#c2410c" stroke-width="2.2"/><text y="4.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#7a2a0a">' + n + "</text></g>"; }
  function LF_SVG(h, label, body) { return '<svg viewBox="0 0 760 ' + h + '" role="img" aria-label="' + label + '" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><defs><marker id="lfa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#1f5e85"/></marker><marker id="lfr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#b42318"/></marker></defs><g font-family="Inter,Arial,sans-serif" font-size="12.5">' + body + "</g></svg>"; }
  var LF_WATERFALL = LF_SVG(360, "Cross-section of a waterfall: resistant rock over less resistant rock, overhang, plunge pool, fallen rocks and a gorge left as the waterfall retreats upstream",
    '<rect x="0" y="0" width="760" height="360" fill="#eef6fb"/>' +
    '<path d="M0 120 L430 120 L430 150 L0 150 Z" fill="#7d8a96"/>' +
    [20, 60, 100, 140, 180, 220, 260, 300, 340, 380].map(function (x) { return '<path d="M' + x + ' 124 l14 22" stroke="#5d6873" stroke-width="1.2"/>'; }).join("") +
    '<path d="M0 150 L380 150 Q368 200 372 250 L400 290 L760 290 L760 360 L0 360 Z" fill="#d9b98a"/>' +
    [170, 190, 210, 230, 250, 270].map(function (y) { return '<path d="M0 ' + y + ' H' + (y < 255 ? 360 : 390) + '" stroke="#c4a171" stroke-width="1"/>'; }).join("") +
    '<path d="M380 150 Q368 200 372 250 L400 290 Q470 300 520 290 L760 290 L760 360" fill="none" stroke="#8a6a3e" stroke-width="1.5"/>' +
    '<path d="M0 110 L430 110 L430 120 L0 120 Z" fill="#8fc6e6"/><path d="M430 110 Q470 120 478 190 Q482 240 470 282" fill="none" stroke="#8fc6e6" stroke-width="18" opacity=".85"/>' +
    '<path d="M400 262 Q450 300 540 286 L760 286 L760 270 L520 270 Q470 268 440 255 Z" fill="#8fc6e6" opacity=".9"/>' +
    '<ellipse cx="460" cy="292" rx="70" ry="22" fill="#5aa6d1" opacity=".9"/>' +
    '<polygon points="520,288 540,276 556,284 548,296" fill="#6b5a45"/><polygon points="566,286 580,280 590,290 574,296" fill="#6b5a45"/><polygon points="430,300 444,292 452,302" fill="#6b5a45"/>' +
    '<path d="M60 100 H220" stroke="#1f5e85" stroke-width="2.5" marker-end="url(#lfa)"/><text x="60" y="92" fill="#1f5e85" font-weight="700">River flow</text>' +
    '<path d="M430 120 H700 V290 M560 120 V290" fill="none" stroke="#b42318" stroke-width="1.6" stroke-dasharray="6 5"/>' +
    '<path d="M690 200 H520" stroke="#b42318" stroke-width="2.5" marker-end="url(#lfr)"/><text x="745" y="40" text-anchor="end" fill="#b42318" font-weight="700">The waterfall retreats upstream.</text><text x="745" y="58" text-anchor="end" fill="#b42318">Dashed lines: where it used to be.</text><text x="745" y="76" text-anchor="end" fill="#b42318">The steep-sided valley left behind is a gorge.</text>' +
    LF_NUM(200, 135, 1) + LF_NUM(200, 215, 2) + LF_NUM(404, 165, 3) + LF_NUM(460, 316, 4) + LF_NUM(560, 306, 5) + LF_NUM(630, 240, 6));
  var LF_FLOODPLAIN = LF_SVG(300, "Cross-section of a river valley in the lower course: steep bluffs, a wide flat floodplain made of layers of alluvium, and the river channel",
    '<rect x="0" y="0" width="760" height="300" fill="#eef6fb"/>' +
    '<path d="M0 40 L90 50 L130 170 L630 170 L670 50 L760 40 L760 300 L0 300 Z" fill="#a98a66"/>' +
    '<path d="M130 170 L630 170 L622 230 L138 230 Z" fill="#e6d3a8"/>' + [185, 200, 215].map(function (y) { return '<path d="M134 ' + y + ' H626" stroke="#c9b17f" stroke-width="1.2"/>'; }).join("") +
    '<path d="M330 170 Q345 196 370 196 L400 196 Q425 196 432 170 Z" fill="#8fc6e6"/>' +
    '<path d="M140 168 L630 168" stroke="#4d7a2c" stroke-width="3"/>' +
    '<path d="M200 150 H300" stroke="#1f5e85" stroke-width="2" marker-end="url(#lfa)"/><path d="M560 150 H460" stroke="#1f5e85" stroke-width="2" marker-end="url(#lfa)"/><text x="380" y="140" text-anchor="middle" fill="#1f5e85">meanders migrate across the valley floor</text>' +
    LF_NUM(112, 110, 1) + LF_NUM(240, 185, 2) + LF_NUM(520, 205, 3) + LF_NUM(380, 215, 4) +
    '<text x="380" y="290" text-anchor="middle" fill="#555">Width of the floodplain can be many kilometres</text>');
  var LF_LEVEE = LF_SVG(300, "Cross-section of a river with levees: coarse material deposited close to the banks, finer silt further away across the floodplain, normal and flood water levels",
    '<rect x="0" y="0" width="760" height="300" fill="#eef6fb"/>' +
    '<path d="M0 190 L250 182 Q300 160 320 150 Q335 210 380 214 Q425 210 440 150 Q460 160 510 182 L760 190 L760 300 L0 300 Z" fill="#e6d3a8"/>' +
    '<path d="M240 182 Q290 160 322 150 L330 186 Z" fill="#a8875a"/><path d="M520 182 Q470 160 438 150 L430 186 Z" fill="#a8875a"/>' +
    '<path d="M0 230 H760" stroke="#c9b17f"/><path d="M0 250 H760" stroke="#c9b17f"/>' +
    '<path d="M330 186 Q340 210 380 212 Q420 210 430 186 Z" fill="#8fc6e6"/><path d="M330 186 H430" stroke="#1f5e85" stroke-width="2"/>' +
    '<path d="M60 120 H700" stroke="#1f5e85" stroke-width="2" stroke-dasharray="8 5"/>' +
    [250, 290, 470, 510].map(function (x, i) { return '<circle cx="' + x + '" cy="' + (i % 3 ? 170 : 178) + '" r="4" fill="#6b5a45"/>'; }).join("") +
    [90, 140, 620, 670].map(function (x) { return '<circle cx="' + x + '" cy="186" r="1.8" fill="#6b5a45"/>'; }).join("") +
    LF_NUM(290, 135, 1) + LF_NUM(380, 200, 2) + LF_NUM(700, 100, 3) + LF_NUM(120, 206, 4) + LF_NUM(490, 150, 5) +
    '<text x="380" y="290" text-anchor="middle" fill="#555">Vertical scale exaggerated</text>');
  var LF_MEANDER = LF_SVG(380, "Plan view of a meander showing the line of fastest flow on the outside bend, a river cliff where erosion happens, a point bar where deposition happens, and a cross-section from A to B",
    '<rect x="0" y="0" width="760" height="380" fill="#eaf3e0"/>' +
    '<path d="M20 60 C200 40 300 60 330 140 C360 220 300 300 420 320 C520 335 600 270 740 280" fill="none" stroke="#8fc6e6" stroke-width="54" stroke-linecap="round"/>' +
    '<path d="M20 52 C200 30 312 50 346 134 C378 220 320 300 420 312 C520 326 600 262 740 272" fill="none" stroke="#b42318" stroke-width="3" stroke-dasharray="9 6"/>' +
    '<path d="M330 90 C360 140 372 170 365 200" fill="none" stroke="#8a5a2b" stroke-width="7"/>' +
    '<path d="M290 150 C285 190 280 230 300 262" fill="none" stroke="#e8cf86" stroke-width="16" stroke-linecap="round"/>' +
    '<path d="M260 178 L398 178" stroke="#333" stroke-width="1.5" stroke-dasharray="4 3"/><text x="250" y="182" text-anchor="end" font-weight="700">A</text><text x="406" y="182" font-weight="700">B</text>' +
    '<path d="M60 60 H160" stroke="#1f5e85" stroke-width="2.5" marker-end="url(#lfa)"/>' +
    LF_NUM(376, 84, 1) + LF_NUM(268, 236, 2) + LF_NUM(170, 30, 3) + LF_NUM(424, 140, 4) + LF_NUM(244, 140, 5) +
    '<g transform="translate(470,40)"><rect width="270" height="150" rx="8" fill="#fff" stroke="#ccc"/><text x="12" y="20" font-weight="700">Cross-section A–B</text>' +
    '<path d="M15 50 L60 52 Q130 60 200 120 L215 40 L255 38 L255 140 L15 140 Z" fill="#c9a77a"/><path d="M60 52 Q130 60 200 120 L210 60 Z" fill="#8fc6e6"/><path d="M60 52 H210" stroke="#1f5e85" stroke-width="2"/><path d="M60 52 Q130 60 200 120" fill="none" stroke="#e8cf86" stroke-width="6"/>' +
    '<text x="20" y="40" font-weight="700">A</text><text x="248" y="32" font-weight="700">B</text><text x="80" y="80" font-size="11" fill="#6b4a2b">gentle slope</text><text x="150" y="134" font-size="11" fill="#5a3a1a">deep, steep side</text></g>' +
    '<text x="20" y="370" fill="#555">Dashed red line: thalweg. Arrow: direction of flow.</text>');
  function OXB(stage) {
    var d = ["M10 20 C50 18 70 20 75 40 C80 62 60 70 80 70 C110 70 120 40 150 42",
      "M10 20 C40 18 66 20 72 40 C76 62 64 66 80 66 C110 66 118 42 150 42",
      "M10 20 C40 18 66 20 72 40 C76 62 64 66 80 66 C110 66 118 42 150 42",
      "M10 20 C40 18 66 20 72 40 C76 62 64 66 80 66 C110 66 118 42 150 42"][stage];
    var s = '<svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" fill="#eaf3e0"/>';
    if (stage < 3) s += '<path d="' + d + '" fill="none" stroke="#8fc6e6" stroke-width="' + (stage ? 12 : 10) + '"/>';
    else s += '<path d="M66 32 C78 50 60 66 80 66 C104 66 112 48 106 38" fill="none" stroke="#8fc6e6" stroke-width="11"/>';
    if (stage === 1) s += '<path d="M70 34 L108 40" stroke="#b42318" stroke-width="2" stroke-dasharray="3 2"/>';
    if (stage >= 2) s += '<path d="M10 20 C40 20 80 32 150 42" fill="none" stroke="#8fc6e6" stroke-width="' + (stage === 2 ? 9 : 12) + '"/>';
    if (stage === 3) s += '<path d="M62 30 L70 38 M102 38 L110 44" stroke="#c9a77a" stroke-width="5"/>';
    return s + "</svg>";
  }
  var LF_OXBOW = LF_SVG(190, "Four stages in the formation of an ox-bow lake, from a tight meander to a cut-off lake",
    '<rect width="760" height="190" fill="#fff"/>' + [0, 1, 2, 3].map(function (i) {
      var x = 12 + i * 187;
      return '<g transform="translate(' + x + ',20)"><g transform="scale(1.1)">' + OXB(i).replace('<svg viewBox="0 0 160 90" aria-hidden="true">', "").replace("</svg>", "") + '</g><text x="88" y="124" text-anchor="middle" font-weight="700">Stage ' + (i + 1) + "</text></g>";
    }).join("") + LF_NUM(300, 40, 1) + LF_NUM(474, 36, 2) + LF_NUM(672, 112, 3) + LF_NUM(630, 46, 4) +
    '<text x="380" y="176" text-anchor="middle" fill="#555">Water flows from left to right in each stage.</text>');
  var LF_DELTA = LF_SVG(420, "A delta in plan view with distributaries and the delta front, and a cross-section showing topset, foreset and bottomset beds",
    '<rect width="760" height="420" fill="#d7ecf7"/>' +
    '<path d="M0 0 H380 L380 40 Q300 70 250 150 Q230 190 180 200 Q100 205 20 230 L0 240 Z" fill="#cfe3b0"/>' +
    '<path d="M0 0 H260 V20 Q230 60 200 100 Q160 140 0 140 Z" fill="#b9d79a"/>' +
    '<path d="M20 0 C60 40 90 60 120 80" fill="none" stroke="#5aa6d1" stroke-width="8"/>' +
    ['M120 80 C160 110 200 150 230 180', 'M120 80 C160 90 220 80 300 70', 'M120 80 C120 120 100 170 90 210', 'M150 100 C190 140 200 120 260 130'].map(function (d) { return '<path d="' + d + '" fill="none" stroke="#5aa6d1" stroke-width="4"/>'; }).join("") +
    LF_NUM(60, 35, 1) + LF_NUM(270, 98, 2) + LF_NUM(200, 214, 3) + LF_NUM(340, 150, 4) +
    '<g transform="translate(400,30)"><rect width="345" height="370" rx="8" fill="#fff" stroke="#ccc"/><text x="14" y="22" font-weight="700">Cross-section through the delta</text>' +
    '<path d="M10 70 H330" stroke="#1f5e85" stroke-width="2"/><text x="300" y="64" font-size="11" fill="#1f5e85">sea level</text>' +
    '<path d="M10 60 L150 64 L150 90 L10 90 Z" fill="#e6c98a"/>' +
    '<path d="M150 64 L230 210 L150 210 Z" fill="#d1a86a"/><path d="M10 90 L150 90 L150 210 L10 210 Z" fill="#d1a86a"/>' + [0, 1, 2, 3].map(function (i) { return '<path d="M' + (120 + i * 8) + ' 64 L' + (190 + i * 8) + ' 210" stroke="#a5803f"/>'; }).join("") +
    '<path d="M10 210 L330 210 L330 250 L10 250 Z" fill="#9e8a72"/>' +
    '<path d="M10 250 H330 V280 H10 Z" fill="#7e6c58"/><text x="170" y="270" text-anchor="middle" fill="#fff" font-size="11">older sea bed</text>' +
    LF_NUM(80, 77, 5) + LF_NUM(170, 150, 6) + LF_NUM(270, 230, 7) +
    '<text x="14" y="310" font-size="11.5" fill="#333">Coarse material settles first and builds forward;</text><text x="14" y="326" font-size="11.5" fill="#333">the finest clay travels furthest out to sea.</text></g>');

  /* FW04 lesson: whiteboard, starter pictures, meander development and geometry (my own drawings) */
  function WB_BOARD(title, rows, foot) {
    var hand = 'font-family="Comic Sans MS,Chalkboard SE,Segoe Print,cursive"';
    var s = '<svg viewBox="0 0 760 470" role="img" aria-label="Whiteboard: ' + title + '" style="width:100%;max-width:760px;height:auto;display:block">';
    s += '<rect x="14" y="14" width="732" height="420" rx="6" fill="#c9ced3"/><rect x="24" y="24" width="712" height="400" rx="3" fill="#fdfdfd"/><rect x="10" y="10" width="22" height="22" rx="4" fill="#8a9097"/><rect x="728" y="10" width="22" height="22" rx="4" fill="#8a9097"/>';
    s += '<rect x="10" y="432" width="740" height="16" rx="3" fill="#b9bfc5"/><rect x="520" y="404" width="120" height="32" rx="4" fill="#d9a86c" stroke="#a87a43"/><rect x="520" y="404" width="120" height="8" fill="#8a8f96"/><rect x="668" y="352" width="16" height="84" rx="3" fill="#1d4fd8"/><rect x="668" y="372" width="16" height="64" rx="2" fill="#e8eaed" stroke="#c3c7cc"/>';
    s += '<g ' + hand + '><text x="50" y="66" font-size="24" font-weight="700" fill="#1d4fd8">' + title + '</text>';
    var cols = ["#b42318", "#0f766e", "#a16207", "#6d28d9", "#1d4fd8"];
    rows.forEach(function (r, i) { var y = 112 + i * 52; s += '<rect x="52" y="' + (y - 18) + '" width="20" height="20" rx="3" fill="none" stroke="' + cols[i % 5] + '" stroke-width="2.5"/><text x="86" y="' + y + '" font-size="21" font-weight="700" fill="' + cols[i % 5] + '">' + r + "</text>"; });
    s += '<text x="50" y="390" font-size="17" fill="#1d4fd8">' + foot + "</text></g>";
    return s + "</svg>";
  }
  var WB_LANDFORMS = WB_BOARD("Listen, then draw and label:", ["Meanders", "Ox-bow lakes", "Floodplains and bluffs", "Levees", "Deltas"], "Label every diagram. Photograph your board for OneNote.");
  function PIC(k, body) { return '<figure class="fl-anim__t"><svg viewBox="0 0 340 210" role="img" aria-label="Picture ' + k + '" style="width:100%;height:auto;display:block;border:1px solid var(--lh-border);border-radius:10px">' + body + '</svg><figcaption><b>Picture ' + k + "</b></figcaption></figure>"; }
  var STARTER_PICS = '<div class="fl-anim"><div class="fl-anim__g">' + [
    PIC("A", '<defs><linearGradient id="spa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6f8796"/><stop offset=".35" stop-color="#2f3c33"/><stop offset="1" stop-color="#1f2a22"/></linearGradient></defs><rect width="340" height="210" fill="url(#spa)"/>' +
      '<path d="M330 70 C250 62 170 66 150 76 C120 92 250 92 270 104 C300 122 120 112 80 124 C40 138 220 140 250 152 C290 168 120 170 60 176 C30 180 20 200 10 206" fill="none" stroke="#dfe9ee" stroke-width="7" stroke-linecap="round"/>'),
    PIC("B", '<rect width="340" height="210" fill="#fff"/><path d="M10 110 L70 20 L270 20 L330 110 Z" fill="#e4cfa2"/><path d="M60 110 L100 30 L240 30 L280 110 Z" fill="#b9d79a"/><path d="M70 20 L100 30 M60 110 L70 20 M270 20 L240 30 M280 110 L270 20" stroke="#a5803f" stroke-width="2"/>' +
      '<path d="M10 110 H330 V195 H10 Z" fill="#c9a77a"/><path d="M60 110 H280 L272 140 H68 Z" fill="#e6d3a8"/><path d="M10 160 H330" stroke="#b08a5c"/>' +
      '<path d="M170 30 C120 40 230 50 165 62 C100 74 240 84 170 96 C130 102 160 108 170 110" fill="none" stroke="#5aa6d1" stroke-width="7"/><path d="M218 44 C250 44 252 60 226 60" fill="none" stroke="#5aa6d1" stroke-width="5"/><path d="M110 84 C90 84 92 98 112 98" fill="none" stroke="#5aa6d1" stroke-width="4"/>'),
    PIC("C", '<rect width="340" height="210" fill="#2f5a3a"/>' + (function () { var s = "", i; for (i = 0; i < 90; i++) s += '<circle cx="' + ((i * 53) % 340) + '" cy="' + ((i * 37) % 210) + '" r="' + (6 + i % 5) + '" fill="' + (i % 2 ? "#3c6b45" : "#26482f") + '"/>'; return s; })() +
      '<path d="M0 150 C60 140 90 160 120 150 C150 140 140 110 170 108 C200 106 200 140 230 150 C270 162 300 140 340 150" fill="none" stroke="#2c3e5c" stroke-width="12"/><path d="M150 112 C120 80 220 70 196 110" fill="none" stroke="#3b4e6e" stroke-width="10"/>'),
    PIC("D", '<rect width="340" height="210" fill="#fff"/><g font-family="Inter,Arial" font-size="10.5" fill="#333">' + [0, 1, 2].map(function (i) {
      var y = 20 + i * 64, lv = i === 0 ? "" : '<path d="M100 ' + (y + 22) + ' q20 -' + (4 + i * 5) + ' 40 0 M200 ' + (y + 22) + ' q20 -' + (4 + i * 5) + ' 40 0" fill="#c9a77a" stroke="#a5803f"/>';
      return '<path d="M20 ' + (y + 22) + ' H140 Q150 ' + (y + 52) + ' 170 ' + (y + 52) + ' Q190 ' + (y + 52) + ' 200 ' + (y + 22) + ' H320" fill="none" stroke="#777"/><path d="M' + (i === 1 ? "20 " + (y + 14) + " H320" : "146 " + (y + 34) + " H194") + '" stroke="#5aa6d1" stroke-width="' + (i === 1 ? 3 : 2) + '"/>' + lv + '<text x="20" y="' + (y + 8) + '">(' + "abc".charAt(i) + ")</text>";
    }).join("") + "</g>")
  ].join("") + "</div></div>";
  var MEANDER_DEV = (function () {
    var s = '<svg viewBox="0 0 760 290" role="img" aria-label="Four stages showing a straight river developing into a meandering river with pools, riffles and a line of bluffs" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><g font-family="Inter,Arial,sans-serif" font-size="11.5">';
    var paths = ["M90 20 L90 240", "M90 20 C80 70 104 100 90 130 C76 160 104 190 90 240", "M90 20 C40 60 140 90 90 130 C40 170 140 200 90 240", "M100 20 C20 50 170 100 95 135 C20 170 170 205 100 240"];
    var titles = ["1. Straight channel", "2. Pools and riffles", "3. Meanders form", "4. Meanders migrate"];
    paths.forEach(function (d, i) {
      var x = 8 + i * 188;
      s += '<g transform="translate(' + x + ',0)"><rect x="0" y="0" width="180" height="262" rx="8" fill="#eaf3e0"/>';
      if (i === 3) s += '<path d="M14 20 L14 240 M166 20 L166 240" stroke="#8a5a2b" stroke-width="5" stroke-dasharray="2 0"/><text x="20" y="252" fill="#6b4a2b">bluffs</text><text x="130" y="252" fill="#6b4a2b">bluffs</text>';
      s += '<path d="' + d + '" fill="none" stroke="#8fc6e6" stroke-width="' + (i < 2 ? 18 : 16) + '" stroke-linecap="round"/>';
      if (i === 0 || i === 1) s += [55, 105, 155, 205].map(function (y, j) { return j % 2 ? '<g><circle cx="90" cy="' + y + '" r="5" fill="#9c8a74"/><circle cx="84" cy="' + (y + 6) + '" r="3" fill="#9c8a74"/><circle cx="96" cy="' + (y + 5) + '" r="3" fill="#9c8a74"/></g>' : '<ellipse cx="90" cy="' + y + '" rx="7" ry="11" fill="#2f78b3" opacity=".7"/>'; }).join("");
      if (i === 1) s += '<text x="108" y="58" fill="#1f5e85">pool</text><text x="108" y="110" fill="#6b5a45">riffle</text>';
      if (i >= 2) s += '<path d="' + d + '" fill="none" stroke="#b42318" stroke-width="1.6" stroke-dasharray="5 4" transform="translate(' + (i === 2 ? 4 : 5) + ',0)"/>';
      if (i === 2) s += '<text x="128" y="96" fill="#7a2a0a">erosion</text><text x="30" y="96" fill="#6b4a2b">deposition</text>';
      if (i === 3) s += '<path d="M60 150 l0 26" stroke="#b42318" stroke-width="2" marker-end="url(#mda)"/><text x="40" y="190" fill="#b42318">migrate</text>';
      s += '<text x="90" y="16" text-anchor="middle" font-weight="700" font-size="12.5" fill="#222" dy="-2"></text></g>';
      s += '<text x="' + (x + 90) + '" y="282" text-anchor="middle" font-weight="700" font-size="12.5">' + titles[i] + "</text>";
    });
    s += '<defs><marker id="mda" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#b42318"/></marker></defs>';
    return s + "</g></svg>";
  })();
  var MEANDER_GEOM = (function () {
    var s = '<svg viewBox="0 0 760 330" role="img" aria-label="Meander geometry: wavelength from crest to crest, meander width across the belt, and a cross-section showing helicoidal flow" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><defs><marker id="mga" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" fill="#333"/></marker><marker id="mgh" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#b42318"/></marker></defs><g font-family="Inter,Arial,sans-serif" font-size="12.5">';
    s += '<rect x="10" y="10" width="460" height="310" rx="8" fill="#eaf3e0"/>';
    s += '<path d="M20 165 C60 165 70 70 120 70 C170 70 180 260 230 260 C280 260 290 70 340 70 C390 70 400 165 460 165" fill="none" stroke="#8fc6e6" stroke-width="18"/>';
    s += '<path d="M120 46 H340" stroke="#333" stroke-width="1.6" marker-start="url(#mga)" marker-end="url(#mga)"/><text x="230" y="38" text-anchor="middle" font-weight="700">Meander wavelength</text>';
    s += '<path d="M120 52 V62 M340 52 V62" stroke="#333"/><text x="120" y="98" text-anchor="middle" fill="#7a2a0a" font-weight="700">crest</text><text x="340" y="98" text-anchor="middle" fill="#7a2a0a" font-weight="700">crest</text>';
    s += '<path d="M410 61 V269" stroke="#333" stroke-width="1.6" marker-start="url(#mga)" marker-end="url(#mga)"/><text x="418" y="170" font-weight="700">Meander</text><text x="418" y="186" font-weight="700">width</text>';
    s += '<path d="M400 61 H350 M400 269 H240" stroke="#333" stroke-dasharray="3 3"/><text x="30" y="296" fill="#555" font-size="11.5">Crest = the outermost point of a bend.</text><text x="30" y="311" fill="#555" font-size="11.5">Wavelength = distance from one crest to the next on the same side.</text>';
    s += '<g transform="translate(490,30)"><text x="0" y="12" font-weight="700">Helicoidal flow (cross-section)</text><path d="M0 40 L20 40 Q60 44 110 60 Q170 90 200 160 L215 30 L260 30 L260 200 L0 200 Z" fill="#c9a77a"/><path d="M20 40 Q60 44 110 60 Q170 90 200 160 L212 40 Z" fill="#8fc6e6"/><path d="M20 40 H212" stroke="#1f5e85" stroke-width="2"/>';
    s += '<path d="M70 52 C120 44 190 46 196 80 C200 120 170 130 140 110 C110 92 90 80 70 70" fill="none" stroke="#b42318" stroke-width="2.4" marker-end="url(#mgh)"/>';
    s += '<text x="0" y="220" font-size="11.5">Left (inner bend): shallow, slow, deposition</text><text x="0" y="236" font-size="11.5">Right (outer bend): deep, fast, erosion</text><text x="0" y="258" font-size="11.5" fill="#b42318">Water spirals in a corkscrew: surface water</text><text x="0" y="273" font-size="11.5" fill="#b42318">flows to the outer bank, bed water flows</text><text x="0" y="288" font-size="11.5" fill="#b42318">back to the inner bank.</text></g>';
    return s + "</g></svg>";
  })();
  var SINUOSITY = '<div class="fl-sin" data-sin="1"><p class="fl__q" style="margin-top:0">Sinuosity index calculator</p><p class="fl__note">Sinuosity index = actual channel length ÷ straight-line distance between the same two points.</p><div class="fl-sin__in"><label>Channel length (km) <input type="number" min="0" step="0.1" data-s="c" value="7.5"></label><label>Straight-line distance (km) <input type="number" min="0" step="0.1" data-s="d" value="3"></label></div><p class="fl-sin__out"></p><p class="fl__note">1.0–1.05 straight · 1.05–1.5 sinuous · over 1.5 meandering</p></div>';

  var DELTA_TYPES = (function () {
    var s = '<svg viewBox="0 0 760 250" role="img" aria-label="Three types of delta in plan view: arcuate (fan-shaped), bird’s-foot and cuspate" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><g font-family="Inter,Arial,sans-serif" font-size="12.5">';
    var T = [["Arcuate (fan-shaped)", "e.g. Nile, Egypt", '<path d="M0 0 H230 V40 Q200 150 115 165 Q30 150 0 40 Z" fill="#cfe3b0"/><path d="M115 0 V60" stroke="#5aa6d1" stroke-width="7"/>' + ["M115 60 C100 100 70 130 40 140", "M115 60 C112 110 108 140 105 163", "M115 60 C130 100 160 130 190 140", "M115 60 C95 90 80 110 55 120", "M115 60 C140 90 160 110 180 118"].map(function (d) { return '<path d="' + d + '" fill="none" stroke="#5aa6d1" stroke-width="3"/>'; }).join("")],
      ["Bird’s-foot", "e.g. Mississippi, USA", '<path d="M0 0 H230 V40 H0 Z" fill="#cfe3b0"/><path d="M115 40 L100 120 L70 165 L84 168 L108 128 L112 175 L122 175 L124 128 L150 170 L162 164 L130 118 L125 40 Z" fill="#cfe3b0"/><path d="M118 0 V120 M118 120 L77 166 M118 120 L117 174 M118 120 L156 166" fill="none" stroke="#5aa6d1" stroke-width="4"/>'],
      ["Cuspate (pointed)", "e.g. Tiber, Italy", '<path d="M0 0 H230 V70 L115 140 L0 70 Z" fill="#cfe3b0"/><path d="M115 0 V138" stroke="#5aa6d1" stroke-width="6"/>']];
    T.forEach(function (t, i) {
      var x = 15 + i * 248;
      s += '<g transform="translate(' + x + ',14)"><rect width="230" height="190" rx="6" fill="#d7ecf7"/>' + t[2] + '</g><text x="' + (x + 115) + '" y="224" text-anchor="middle" font-weight="700">' + t[0] + '</text><text x="' + (x + 115) + '" y="241" text-anchor="middle" fill="#555">' + t[1] + "</text>";
    });
    return s + "</g></svg>";
  })();

  var FLIP = {
    CP02: {
      title: "Global patterns and classifications of economic development",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to cover:",
      cover: ["Low-income countries", "Middle-income countries", "High-income countries"],
      parts: [
        { id: "a", type: "terms", prompt: "Define the following key terms.",
          rows: ["Development", "Economic development", "Quality of life", "Standard of living", "GDP per capita", "GNI per capita", "BRICS", "MINTs"] },
        { id: "b", type: "text", prompt: "Define inequality and give examples." },
        { id: "c", type: "table", prompt: "What are LICs, MICs and HICs?",
          cols: ["", "Definition", "2–3 examples"], rows: ["LICs", "MICs", "HICs"] },
        { id: "d", type: "table", prompt: "Complete the table below.",
          cols: ["Measure of development", "What does it measure?", "Measured in", "Type (social, economic, composite)"],
          rows: ["GDP per capita", "GNI per capita", "Life expectancy", "Education: literacy rate / expected years of schooling", "HDI", "GII", "Infant mortality rate", "Access to clean water"] },
        { id: "e", type: "questions", prompt: "Watch the video clip on development and answer the questions.", video: true,
          rows: [
            "What does human development mean?",
            "Why is development not only about money?",
            "Give two indicators that could measure quality of life.",
            "Why might two countries with similar income have different levels of development?",
            "Which measure do you think is most useful for understanding development? Explain why."
          ] }
      ]
    },

    CP03: {
      title: "The core–periphery model",
      teacherNote: "As there isn't much home learning, I will go through this with you in class.",
      intro: "Complete this before the lesson. Ask the Teach Me Live bot on this page to help you with each part.",
      parts: [
        { type: "heading", text: "Part A: Key concepts" },
        { id: "a", type: "text", prompt: "What is a core area?" },
        { id: "b", type: "table", prompt: "Now complete the table.", cols: ["", "Core area characteristics"], rows: ["1", "2", "3", "4", "5"] },
        { id: "c", type: "text", prompt: "What is a peripheral area?" },
        { id: "d", type: "table", prompt: "Complete the table.", cols: ["", "Peripheral area characteristics"], rows: ["1", "2", "3", "4", "5"] },
        { type: "heading", text: "Part B: Now compare core and periphery" },
        { id: "e", label: "", type: "table", prompt: "Core and periphery at different scales.",
          cols: ["Scale", "Definition", "Example"], rows: ["Global", "Continental", "Regional", "National", "Local"] },
        { id: "f", label: "", type: "table", prompt: "Compare the features of core and peripheral areas.",
          cols: ["Feature", "Core area", "Peripheral area"], rows: ["Wealth", "Infrastructure", "Employment", "Services", "Investment"] },
        { type: "heading", text: "Part C: Core–periphery at different scales" },
        { id: "g", label: "", type: "table", prompt: "Causes of inequality.",
          cols: ["Cause of inequality", "What is it?", "How can it create inequality between countries?", "How can it create inequality within a country?", "Example (location)", "Classify: economic, social, political or environmental"],
          rows: ["Historical factors", "Colonialism", "Physical geography", "Resource distribution", "Globalisation", "Trade relationships", "Education", "Healthcare", "Governance", "Conflict and instability", "Technology access"] }
      ]
    },

    CP04: {
      title: "Case study: the demographics of Thailand and Egypt",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to answer the following.",
      parts: [
        { id: "a", type: "table", prompt: "Complete the table: the demographics of Thailand and Egypt.",
          cols: ["", "Thailand", "Egypt"],
          rows: ["Total population", "Number of migrants in the country", "Population growth rate", "Life expectancy", "Total fertility rate", "Ethnic groups", "Population density", "Population distribution", "Top three cities/areas by population"] },
        { id: "b", type: "table", prompt: "Research and answer the following for Thailand and Egypt.",
          cols: ["", "Thailand", "Egypt"],
          rows: ["Densely populated areas", "Sparsely populated areas", "Physical reasons for the pattern", "Human/economic reasons", "Main core areas", "Main peripheral areas", "Pattern of internal migration", "Main reasons for internal migration", "Role of major cities", "4–5 useful stats/examples"] },
        { id: "c", type: "text", prompt: "Try to find a physical map and a population density map for each country, and show the core and peripheral areas.",
          note: "Paste your maps into OneNote. Use this box to note where you found them and what they show." }
      ]
    },

    CP06: {
      title: "Comparing demographic transition: Thailand and The Gambia",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to find the statistics and definitions.",
      parts: [
        { type: "heading", text: "Part 1: Demographic data on Thailand and The Gambia" },
        { id: "a", label: "", type: "table", prompt: "Complete the table with statistics.",
          cols: ["", "Thailand", "The Gambia"],
          rows: ["Total population", "Population growth (%)", "Annual increase", "Total fertility rate (children per woman)", "Life expectancy (years)",
            "Population aged 65 and above (% of total): what is the trend since 1960? (look at the pattern of the graph)",
            "Population aged 15–64 (% of total): what is the trend since 1960?",
            "Dependency ratio (% of working-age population): what is the trend since 1960?"] },
        { type: "heading", text: "Part 2: Preparing for the debate",
          note: "In class we will have a demographic debate. Some of you will represent Thailand, others The Gambia. You don't yet know which country you will represent. To prepare:" },
        { id: "b", label: "", type: "terms", prompt: "Define the following.",
          rows: ["Overpopulation", "Underpopulation", "Optimum population"] },
        { type: "heading", text: "Part 3: Pre-debate judgement" },
        { id: "c", label: "", type: "table", prompt: "Complete the table to build evidence for the debate.",
          cols: ["Indicator", "Thailand", "What does this suggest?", "The Gambia", "What does this suggest?"],
          rows: ["Fertility", "Life expectancy", "Population growth", "Population aged 65+", "Dependency ratio", "DTM stage"] }
      ]
    },
    CP07: {
      title: "Megacity growth",
      intro: "Complete this before class. The classroom lesson will use this knowledge to analyse an infographic and apply the evidence to Mumbai.",
      parts: [
        { type: "heading", text: "Part 1: Megacity growth" },
        { id: "a", type: "table", prompt: "Watch and capture: watch both videos and make notes.",
          links: [
            { label: "Video 1: What are the world's largest cities?", url: "https://www.youtube.com/watch?v=UqKe7ygkkzs" },
            { label: "Video 2: Mapped: the world's largest megacities by 2100", url: "https://www.youtube.com/watch?v=OksiAQqsAZs" }
          ],
          cols: ["Viewing prompt", "Your notes"],
          rows: ["What makes a city a megacity?", "Name two megacities shown.", "Give two reasons why megacities grow.", "Why are many future megacities expected in Asia and Africa?"] },
        { type: "heading", text: "Part 2: Key knowledge", note: "Read the table carefully, then add one named example of a megacity." },
        { id: "b", label: "", type: "table", given: true, prompt: "",
          cols: ["Term / cause", "Meaning", "Example or explanation"],
          rows: ["Urbanisation", "Megacity", "Rural-to-urban migration", "Natural increase", "Economic opportunity", "Globalisation and connectivity"],
          prefill: {
            0: ["Growth in the percentage of people living in urban areas.", "May result from migration and natural increase."],
            1: ["An urban area with more than 10 million inhabitants.", null],
            2: ["Movement from rural areas to towns and cities.", "Jobs, education and services may act as pull factors."],
            3: ["Births exceeding deaths within the urban population.", "A young age structure can contribute to rapid growth."],
            4: ["Perceived access to employment and higher incomes.", "Growth creates formal and informal work."],
            5: ["Growing flows of investment, information, people and trade.", "Connected cities attract businesses and migrants."]
          } },
        { type: "heading", text: "Part 3: Where are the world's megacities?" },
        { id: "c", type: "text", before: IMG("cp07-megacities-map", "Chart: fifteen of the world's largest megacities, 2011 and projected 2025"), prompt: "Describe the distribution of the world's megacities.",
          note: "Use the chart of the largest megacities and Video 2. Mention continents, coasts and named examples with figures." }
      ]
    },
    CP08: {
      title: "The causes and consequences of forced migration and internal displacement",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page if you get stuck.",
      parts: [
        { type: "heading", text: "Part 1: Watch: What They Took With Them" },
        { id: "a", label: "", type: "questions", letters: true, prompt: "Watch the video, then answer the following questions.",
          links: [{ label: "Video: What They Took With Them (UNHCR)", url: "https://www.youtube.com/watch?v=xS-Q2sgNjl8" }],
          rows: [
            "What is your emotional response to this video?",
            "What is the message the video maker wanted to send?",
            "Which organisation made the video?",
            "What do you think was their goal in making the video?",
            "Do you think that it is effective? Justify your reasons."
          ] },
        { type: "heading", text: "Part 2: Read: causes of forced migration", note: "Read the Concern article, then complete the table." },
        { id: "b", label: "a)", type: "table", prompt: "Complete the table for each cause.",
          links: [{ label: "Article: Six causes of forced migration (Concern Worldwide)", url: "https://concernusa.org/news/forced-migration-causes/" }],
          cols: ["Cause", "How it forces movement", "Direct, indirect or both?"],
          rows: ["Drought", "Hunger", "Flooding", "Earthquakes", "War and conflict", "Economic circumstances"] },
        { id: "c", label: "b)", type: "text", prompt: "Which cause is most significant globally? Justify your choice and acknowledge one counterargument." },
        { type: "heading", text: "Part 3: Reading photographs", note: "Look at the photo on your class OneNote page." },
        { id: "d", label: "", type: "questions", letters: true, prompt: "", before: IMG("cp08-photo", "Photograph to analyse"),
          rows: [
            "What's happening in the photo?",
            "Why do you think this has happened?",
            "What do you think the consequences could be?",
            "Where do you think this photo was taken?"
          ] },
        { type: "heading", text: "Part 4: Internally displaced people and refugees" },
        { id: "e", label: "", type: "questions", letters: true, prompt: "Watch the clip and answer the following questions.",
          links: [{ label: "Video: Who is an internally displaced person?", url: "https://www.youtube.com/watch?v=DCzpVQkencw" }],
          rows: [
            "What is the fundamental difference between IDPs and refugees?",
            "Identify four reasons that keep IDPs from leaving their country.",
            "Who do IDPs often rely on for protection? What is the problem with this?",
            "List the impacts that IDPs suffer.",
            "Why is it difficult for NGOs to help IDPs?",
            "What is the ratio of IDPs to refugees?"
          ] }
      ]
    },
    CP09: {
      title: "Internal displacement in Haiti",
      intro: "Flipped learning check (about 5 minutes). Watch the video and use the map to complete the table and question.",
      parts: [
        { type: "heading", text: "Part 1: Watch and capture" },
        { id: "a", type: "table", prompt: "Complete the table.", before: IMG("cp09-haiti-map", "Simplified map of the 2010 Haiti earthquake: epicentre, distance rings and damage in nearby towns"),
          links: [{ label: "Video: Haiti earthquake documentary", url: "https://www.youtube.com/watch?v=uS4EMk_H0lQ" }],
          cols: ["Prompt", "Your notes"],
          rows: ["Date, magnitude and location", "Two immediate impacts", "Why people were internally displaced", "IDP definition", "Why IDPs are not refugees"] },
        { id: "b", type: "text", prompt: "Answer required: write a one-sentence hypothesis.", note: "Start: “The earthquake caused forced migration because…”" },
        { type: "heading", text: "Connect: build the event story" },
        { id: "c", type: "table", prompt: "Use the map, the documentary and class discussion to build a precise introduction. Include the date, magnitude, epicentre/location, places and the spatial pattern of severe impacts.",
          cols: ["Evidence category", "Notes"],
          rows: ["When and how powerful?", "Where? Use located detail.", "What happened immediately?", "Why were impacts severe?"] },
        { id: "d", type: "text", words: [70, 90], prompt: "Write a 70–90 word case-study introduction.",
          note: "Your introduction must include: 12 January 2010; magnitude 7.0; Haiti and Port-au-Prince; a clear link between building destruction and displacement. Avoid a simple list of impacts: explain the sequence from the hazard, to the damage, to people being forced from their homes." }
      ]
    },
    CP11: [{
      title: "Japan\u2019s ageing population",
      overview: {
        heading: "Population possibilities and power over the decision-making process",
        intention: "To engage with issues that have local and global significance.",
        sdgs: [{ n: 1, t: "No poverty", c: "#e5243b" }],
        syllabus: ["Policies associated with managing population change, focusing on: policies related to ageing societies; pro-natalist or anti-natalist policies."],
        success: ["Describe and explain the issues relating to ageing populations.", "Suggest possible solutions to the issues of ageing populations.",
          "Examine the policies that have been implemented to reduce the impacts of ageing societies in Japan.",
          "Explain the issues and management options to solve The Gambia\u2019s youthful population (anti-natalist)."] },
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to help you.",
      parts: [
        { id: "a", label: "a)", type: "questions", prompt: "Watch the video and answer the questions.",
          links: [{ label: "Video: Japan\u2019s ageing population", url: "https://www.youtube.com/watch?v=R8wdLWUEnzI" }],
          rows: ["How has the Japanese government responded to the ageing population?", "The ageing population has led to what kind of ‘revolution’?", "According to Sakae Matsuzawa, what is the secret to longevity?", "What is the average life expectancy in Japan?", "How many centenarians are there in Japan?", "What percentage of the Japanese population is elderly?", "What percentage of the population will be elderly by 2050?", "How much of Japan’s budget is spent on pensions and social security?", "What percentage of social aid is allocated to the elderly?", "How has the worker-to-retiree ratio changed since 1965?", "How many elderly people live alone?", "How much is the robot industry worth?", "What startling fact is revealed about nappies?", "Which possible solution is hindered by language and cultural issues?", "What will happen to Japan’s consumption tax?"] },
        { id: "b", label: "b)", type: "text", prompt: "Optional: watch this video and take notes on how Japan has dealt with an ageing population.",
          links: [{ label: "Video: How is Japan dealing with its rapidly ageing population?", url: "https://www.youtube.com/watch?v=wF14TCrMN2Q" }] }
      ]
    }, {
      kind: "lesson", open: true, inline: true, afterCard: 2,
      title: "Population policies",
      intro: "Before the lesson: complete the Flip learning above.",
      parts: [
        { type: "part", text: "Part 1: Ageing societies" },
        { type: "banner", src: "/images/flip/banner-connect.jpg", alt: "Connect" },
        { type: "heading", text: "Starter: can you do this?",
          note: "\u201cA stupendous 20% of the country is said to participate in radio callisthenics on a regular basis.\u201d Let\u2019s have a go!" },
        { id: "s1", label: "", type: "text", prompt: "Why might regular exercise like this matter for an ageing society?",
          links: [{ label: "Video: Japanese radio callisthenics (rajio taiso)", url: "https://www.youtube.com/watch?v=yKTgY9VG3RM" }, { label: "Read more (Japan Centre blog)", url: "https://www.japancentre.com/en/blogs" }] },
        { type: "banner", src: "/images/flip/banner-demonstrate.jpg", alt: "Demonstrate" },
        { type: "heading", text: "Activity 1: What do you know?",
          note: "On the large whiteboards, mind map the following. You can use the UK and/or Japan. If you can make judgements about the implications of the solutions, even better." },
        { id: "m1", label: "", type: "table", prompt: "",
          links: [{ label: "Help link: Japan\u2019s pro-natal policy (Prezi)", url: "https://prezi.com/qayllgzlbrbf/japans-pro-natal-policy/" }],
          cols: ["", "Your notes"], rows: ["Calculation of the dependency ratio", "Reasons for an ageing population", "Problems", "Potential solutions"] },
        { type: "heading", text: "Activity 2: Ageing societies sort" },
        { id: "w12", label: "", type: "sort", cardCol: "Statement", binCol: "Category", prompt: "Sort the statements into causes, consequences or solutions relating to ageing societies.",
          bins: ["Causes", "Consequences", "Solutions"], cards: [{ t: "A huge tax burden on workers to cover the pensions of an increasing elderly population.", a: ["Consequences"] }, { t: "The decline in the birth rate in HICs has increased the percentage of elderly in the population structure.", a: ["Causes"] }, { t: "Economic decline as the proportion of working age decreases and there is less tax revenue.", a: ["Consequences"] }, { t: "Encourage immigration of working-age migrants to fill labour and tax shortages.", a: ["Solutions"] }, { t: "An even wider differential between the life expectancy of HICs and LICs.", a: ["Consequences"] }, { t: "Raise the retirement age, thus increasing the length of the working life and payment of taxes.", a: ["Solutions"] }, { t: "Over-65s are expected to go from 7% to 14% of the world’s population.", a: ["Consequences"] }, { t: "The ‘baby boom’ increase in fertility rates after WWII is now reaching old age.", a: ["Causes"] }, { t: "Grandparents are available as cheap childcare, enabling parents to work.", a: ["Consequences"] }, { t: "An increase in the old age dependency ratio.", a: ["Consequences"] }, { t: "The government embarks on a pro-natalist policy to raise fertility rates.", a: ["Solutions"] }, { t: "The ‘grey economy’ is created, consisting of a large market of money- and time-rich consumers.", a: ["Consequences"] }, { t: "Improvements in health care and medical advances have increased life expectancy.", a: ["Causes"] }, { t: "Provide volunteering, unpaid, artistic and social opportunities for the elderly to maintain a mentally healthy elderly population.", a: ["Solutions"] }, { t: "An increase in health care provision needed to cover elderly needs.", a: ["Consequences"] }, { t: "Improvements in food production, diet and health in HICs help the elderly to live longer.", a: ["Causes"] }, { t: "The need for immigration to fill labour and tax shortages.", a: ["Consequences", "Solutions"] }, { t: "The retirement age and the age to qualify for pensions may be raised.", a: ["Solutions"] }, { t: "Utilise the experience and skills of the elderly by providing more flexible work placements.", a: ["Solutions"] }] },
        { type: "heading", text: "Activity 3: Read the population data sets" },
        { id: "d1", label: "", type: "text", before: '<div class="fl__imgs">' + IMG("cp11-japan-pyramid", "Japan population pyramid, 2018") + IMG("cp11-fertility", "Total fertility rate in Japan and the USA") + "</div>",
          prompt: "Use the population data sets for Japan to analyse the national trends. Use figures from the data." },
        { id: "d2", label: "", type: "text", prompt: "Extension: why did so many Japanese families avoid having children in 1966? Who were the Firehorse women?", video: true },
        { type: "heading", text: "Activity 4: Managing Japan\u2019s ageing population",
          note: "Complete all five briefings. Each briefing has a Copy to OneNote button, so all your work can go into your pages in a few clicks." },
        { type: "game", src: "/geography/games/japan-ageing", title: "Japan: The Ageing Nation" },
        { type: "part", text: "Part 2: Evaluating pro- and anti-natalist policies" },
        { type: "banner", src: "/images/flip/banner-connect.jpg", alt: "Connect" },
        { type: "heading", text: "What we are working on",
          note: "Evaluating using specific information and detail \u00b7 analysing a range of resources \u00b7 recapping graphs and models already taught \u00b7 drawing conclusions from the evidence." },
        { id: "p1", label: "a)", type: "table", prompt: "Definitions of pro- and anti-natalist policies, with named examples.",
          cols: ["", "Definition", "Named example"], rows: ["Pro-natalist policy", "Anti-natalist policy"] },
        { type: "banner", src: "/images/flip/banner-demonstrate.jpg", alt: "Demonstrate" },
        { type: "heading", text: "Population Policy Lab: The Gambia and Singapore", note: "Work through the lab. You might need to screenshot some sources into OneNote." },
        { type: "game", src: "/geography/games/population-policy-lab", title: "Population Policy Lab" },
        { type: "banner", src: "/images/flip/banner-reflect.jpg", alt: "Reflect" },
        { type: "heading", text: "Past paper question time" },
        { id: "q1", label: "", type: "text", prompt: "Explain three social or economic impacts of an anti-natalist policy in one named country. [2+2+2]",
          note: "Point-development: for each impact, one mark for the point and one for developing it with detail from your named country. Then mark it with the self-marking practice bot.",
          links: [{ label: "Self-marking practice: Changing Population questions", url: "/geography/revision/paper-questions/changing-population" }] }
      ]
    }],
    CP12: [{
      title: "Gender equality and human trafficking",
      overview: {
        heading: "Population possibilities and power over the decision-making process",
        intention: "To describe and explain human patterns and processes.",
        sdgs: [{ n: 10, t: "Reduced inequalities", c: "#dd1367" }, { n: 5, t: "Gender equality", c: "#ef402b" }],
        syllabus: ["Policies associated with managing population change, focusing on gender equality policies and anti-trafficking policies."],
        success: ["Define gender equality and human trafficking.", "Describe the patterns of gender equality and flows in human trafficking globally.",
          "Explain the policies put in place in Kerala, India, attempting to improve gender equality.",
          "Evaluate the effectiveness of the UN Protocol to prevent, suppress and punish trafficking in persons."] },
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to help you research.",
      parts: [
        { type: "heading", text: "Part 1: Gender equality" },
        { id: "a", type: "text", prompt: "Watch the video and consider why gender equality is important. Make sure you define it.",
          links: [{ label: "Video: The girl effect: the clock is ticking", url: "https://www.youtube.com/watch?v=1e8xgF0JtVg" }] },
        { type: "heading", text: "Human trafficking",
          note: "Definition: “The unlawful act of transporting or coercing people in order to benefit from their work or service, typically in the form of forced labour or sexual exploitation.”" },
        { id: "b", type: "text", prompt: "Why are humans trafficked?" },
        { id: "b2", type: "text", label: "c)", prompt: "Give as many examples as you can, e.g. countries." },
        { type: "heading", text: "Part 2: Gender equality: the global gender gap",
          note: "The Gender Inequality Index (GII), published by the UNDP in the Human Development Reports, is a composite measure of gender disadvantage in three dimensions: reproductive health, empowerment and the labour market. It runs from 0 (greater equality) to 1 (greater inequality)." },
        { id: "c", type: "table", prompt: "Research and complete the table on what the GII measures.",
          links: [{ label: "Gender Inequality Index (UNDP Human Development Reports)", url: "https://hdr.undp.org/data-center/thematic-composite-indices/gender-inequality-index#/indicies/GII" }],
          cols: ["Dimension", "What could we measure?", "Why might inequality here matter?"],
          rows: ["Reproductive health", "Empowerment", "Labour market"] },
        { id: "d", type: "table", prompt: "Why does gender equality vary between countries? Through research, note reasons why it varies across the world. We will build on this in the lesson.",
          note: "Use the countries in the Global Gender Gap Index rankings (World Economic Forum) below to find some reasons.",
          before: IMG("cp12-gender-gap", "Global Gender Gap Index rankings"),
          cols: ["", "Country", "Reason"], rows: ["1", "2", "3", "4"] }
      ]
    }, {
      kind: "lesson", open: true, inline: true, afterCard: 2,
      title: "Gender equality and human trafficking",
      intro: "Before the lesson: complete the Flip learning above.",
      parts: [
        { type: "banner", src: "/images/flip/banner-connect.jpg", alt: "Connect" },
        { type: "heading", text: "Starter: important definitions" },
        { id: "s0", label: "", type: "table", prompt: "", given: true, cols: ["Term", "Definition"], rows: ["Gender equality", "Human trafficking"],
          prefill: { 0: ["When women and men enjoy the same rights and opportunities across all sectors of society, including economic participation and decision-making, and when the different behaviours, aspirations and needs of women and men are equally valued and favoured."],
                     1: ["The buying and selling of human beings, usually across national borders, for purposes such as prostitution, sexual slavery or forced labour. Many victims are tricked or coerced into the trade; others are abducted or blackmailed."] } },
        { type: "heading", text: "Activity 1: Pair and share (big whiteboard time)",
          note: "Person 1 reads link A and person 2 reads link B. Feed back to each other: what do the two pieces agree and disagree on?" },
        { id: "a1", label: "", type: "table", prompt: "",
          links: [{ label: "A: BBC News video report", url: "https://www.bbc.com/news/av/business-36761796" },
                  { label: "B: \u201cThe privileged lie of gender equality in Thailand\u201d (ASEAN NOW)", url: "https://aseannow.com/topic/908215-the-privileged-lie-of-gender-equality-in-thailand/" }],
          cols: ["", "Your comments"], rows: ["What they agree on", "What they disagree on"] },
        { type: "heading", text: "Activity 2: Infographic analysis" },
        { id: "a2", label: "", type: "text", before: IMG("cp12-india-gender", "Infographic: India on the Global Gender Gap Index, ranks for 2006, 2016 and 2017 and for each part of the index"),
          prompt: "What does the infographic tell you about gender equality in India? Make some comments, then we will discuss." },
        { type: "banner", src: "/images/flip/banner-demonstrate.jpg", alt: "Demonstrate" },
        { type: "heading", text: "Activity 3: Case study: Kerala, literacy and gender equality",
          note: "Read the Kerala case study, then answer the questions on your graphic organiser." },
        { id: "a3", label: "", type: "questions", letters: true, prompt: "",
          links: [{ label: "Case study: Kerala: literacy and gender equality (PDF)", url: "/geography/resources/flip/kerala-case-study.pdf" }],
          rows: ["Describe the geographical location of Kerala, India.",
            "Use the chart below to describe how literacy rates in Kerala compare with other parts of India.",
            "Describe the demographic changes that have occurred in Kerala.",
            "What is the relationship between infant mortality rates and female literacy?",
            "Describe the policies that have been put in place to increase gender equality and female literacy rates in Kerala.",
            "What challenges might Kerala face in the future?"] },
        { type: "html", html: IMG("cp12-literacy", "Bar chart: literacy rate in selected Indian states, 2011; Kerala highest at 94%") },
        { type: "heading", text: "Activity 4: Human trafficking" },
        { id: "a4a", label: "a)", type: "text", prompt: "Watch the video clip and take notes on human trafficking.",
          links: [{ label: "Video: Tools That Teach: What is human trafficking?", url: "https://www.youtube.com/watch?v=35uM5VMrZas" }] },
        { id: "a4b", label: "b)", type: "text", prompt: "Study the information below. Note anything that surprises you.",
          before: '<ul class="fl__facts"><li>The International Labour Organization (ILO) estimated <b>20.9 million</b> victims of forced labour, including trafficking, worldwide (2012).</li><li><b>68%</b> of them were trapped in forced labour.</li><li><b>26%</b> were children.</li><li><b>55%</b> were women and girls.</li><li>The ILO estimated that forced labour is a <b>$150 billion</b> industry worldwide (2014).</li><li>The US Department of Labor has identified <b>139 goods from 75 countries</b> made by forced and child labour.</li></ul><p class="fl__note">Sources: ILO; US Department of Labor, List of Goods Produced by Child Labor or Forced Labor.</p>' },
        { id: "a4c", label: "c)", type: "text", before: TRAFFIC_SVG, prompt: "Describe the pattern of human trafficking flows shown in the diagram. (3 marks)" },
        { type: "heading", text: "Activity 5: How is the UN dealing with human trafficking?",
          note: "The UN strategy to prevent human trafficking. It is really important that you learn most of these. Match each strategy with the description of what it involves." },
        { id: "a5", label: "", type: "match", termCol: "Strategy", defCol: "What it involves (choose the matching one)", noExample: true, prompt: "", items: [{ t: "Strengthen prevention", d: "Warn vulnerable groups and alleviate the factors that make people vulnerable to trafficking, such as poverty, underdevelopment and lack of opportunity." }, { t: "Reduce demand", d: "Attack the problem at its source by lowering incentives to trade and decreasing demand for the products and services of exploited people." }, { t: "Create a special purpose fund", d: "Attract and leverage resources into funding projects around the world committed to ending human trafficking." }, { t: "Strengthen partnerships", d: "Build up regional and thematic networks involving civil society, inter-governmental organisations and the private sector." }, { t: "Improve law enforcement", d: "Strengthen information exchange between law enforcement agencies on international trafficking routes and traffickers’ profiles, to dismantle criminal groups and convict traffickers." }, { t: "Enrich knowledge", d: "Deepen world understanding of the scope and nature of human trafficking through more data collection and analysis, joint research and an evidence-based report on global trafficking trends." }, { t: "Create an informal contact group", d: "Give like-minded Member States ownership of the process and create long-term momentum." }, { t: "Support and protect victims", d: "Ensure housing, counselling, medical, psychological and material assistance, keeping in mind the special needs of women, children and people at risk, such as those in refugee camps and conflict zones." }, { t: "Implement international commitments", d: "Ensure that international agreements are turned into national laws and practice, by assisting countries in need and improving the monitoring of compliance." }] },
        { type: "heading", text: "Activity 6: Case studies",
          note: "Choose one of the projects, NGOs or CAS clubs on the Firefly page and create a simple case study file. We will share these between us." },
        { id: "a6", label: "", type: "table", prompt: "",
          cols: ["", "Your notes"],
          rows: ["Project / NGO chosen", "Location, the nature of the problem and the goals of the project", "Strategies used to tackle the problem", "Impact: what have been the successes?", "Evaluation: what still needs to be done, and what are the limitations?"] },
        { type: "banner", src: "/images/flip/banner-reflect.jpg", alt: "Reflect" },
        { type: "heading", text: "Activity 7: Exit ticket" },
        { id: "a7", label: "", type: "text", prompt: "Explain how gender equality and human trafficking are linked." }
      ]
    }],
    CP13: [{
      title: "The demographic dividend",
      overview: {
        heading: "How population can be considered a resource",
        intention: "To explore the contrasting opportunities and constraints of people living in different areas.",
        sdgs: [{ n: 8, t: "Decent work and economic growth", c: "#a21942" }],
        syllabus: ["The demographic dividend and the ways in which population could be considered a resource when contemplating possible futures.", "One case study of a country benefiting from a demographic dividend."],
        success: ["Define the demographic dividend.", "Identify countries that benefit from the demographic dividend.", "Explain how countries can benefit from a demographic dividend.", "Develop case study knowledge of South Korea and how it benefited from the demographic dividend."] },
      intro: "Complete this before the lesson. Use the video and the Teach Me Live bot on this page to answer the following.",
      parts: [
        { id: "a", label: "", type: "questions", letters: true, prompt: "",
          links: [{ label: "Video: Demographic dividend explained", url: "https://www.youtube.com/watch?v=bhkrS0qSJLg" }],
          rows: [
            "What is the demographic dividend, and when does it occur?",
            "What are the characteristics of the population pyramid?",
            "What are the benefits for a country in this situation?"
          ] }
      ]
    }, {
      kind: "lesson", open: true, inline: true, afterCard: 2,
      title: "The demographic dividend",
      intro: "Before the lesson: complete the Flip learning above.",
      parts: [
        { type: "banner", src: "/images/flip/banner-connect.jpg", alt: "Connect" },
        { type: "heading", text: "Starter: countries and the demographic dividend" },
        { type: "html", html: DD_PYRAMIDS },
        { id: "s1", label: "", type: "text", prompt: "Study the population pyramids. Which country would you judge most likely to benefit from what the IMF describes as the first demographic dividend? Justify your answer.",
          note: "Sketch or paste the pyramid into OneNote and annotate it to show your reasons." },
        { type: "banner", src: "/images/flip/banner-demonstrate.jpg", alt: "Demonstrate" },
        { type: "heading", text: "Activity 1: The demographic dividend and gender",
          note: "The demographic dividend is the benefit achieved from a change in the population structure as a country goes through the demographic transition. As fertility rates decline, the proportion of working-age people increases, so the dependency ratio falls. Make sure you understand this, then try the activities below." },
        { id: "w1", label: "a)", type: "sort", cardCol: "Statement", binCol: "Stage", prompt: "Sort each statement into the stage of the demographic dividend where it belongs.",
          note: "Triggers: why fertility falls. Population change: how the age structure changes. Benefits: the opportunities that follow. Conditions and risks: what is needed for the dividend to pay off, and what could go wrong.", bins: ["Triggers", "Population change", "Benefits", "Conditions and risks"], cards: [{ t: "Family planning and contraception more accessible", a: ["Triggers"] }, { t: "Improvement in education access, especially for girls", a: ["Triggers"] }, { t: "Infant and child mortality rates reduce", a: ["Triggers"] }, { t: "Fertility rates decline", a: ["Population change"] }, { t: "There is a lag between falling fertility and increased life expectancy", a: ["Population change"] }, { t: "Reduced fertility rate leads to a bulge in working age population", a: ["Population change"] }, { t: "Young age dependency ratio drops dramatically", a: ["Population change"] }, { t: "Increased labour supply", a: ["Population change", "Benefits"] }, { t: "Parents can save more money as the cost of fewer children falls", a: ["Benefits"] }, { t: "Parents can invest more in their (fewer) children", a: ["Benefits"] }, { t: "Lower fertility means the female population may have better health and more opportunities", a: ["Benefits"] }, { t: "Increased tax revenue for investment in infrastructure and growth", a: ["Benefits"] }, { t: "Economic growth and improvements in living standards", a: ["Benefits"] }, { t: "Improved education and training to take advantage of the growing workforce", a: ["Conditions and risks"] }, { t: "Investment in industries that can utilise the growing labour supply", a: ["Conditions and risks"] }, { t: "Possible decrease in wages due to excess labour", a: ["Conditions and risks"] }] },
        { id: "w2", label: "b)", type: "text", prompt: "Now put the statements into a logical chain. Draw it as a flowchart in OneNote, then write the chain here in order, linking each step with \u201cwhich leads to\u201d.",
          note: "Example start: Better family planning access \u2192 smaller families \u2192 \u2026" },
        { id: "w3", label: "c)", type: "table", prompt: "Many of the issues in the demographic dividend concern gender equality. It is argued that a bigger role for women in the workforce pays an even greater dividend than the working-age bulge alone. Using your studies of gender equality policies, show how improved opportunities for women lead to effects on society and the economy.",
          cols: ["", "Your answer"],
          rows: ["Causes of improved gender equality (e.g. education access for girls, legal rights for women, better family planning)", "Effects on families (e.g. smaller families, longer lives)", "Effects on the economy (e.g. increased skills of women, more money to save)", "Effects on society"] },
        { type: "heading", text: "Activity 2: Conceptual thinking: South Korea",
          note: "Read the South Korea case study. Use it and what you have learned so far to structure your notes with the four concepts." },
        { id: "k1", label: "a)", type: "table", prompt: "Case study notes",
          links: [{ label: "Case study: South Korea\u2019s demographic dividend (PDF)", url: "/geography/resources/flip/south-korea-demographic-dividend.pdf" }],
          cols: ["Concept", "Question", "Your notes"], given: true,
          rows: ["Place", "Place ", "Power", "Power ", "Possibility", "Possibility ", "Possibility  ", "Process", "Process "],
          prefill: { 0: ["Which country or countries are experiencing a demographic dividend?", null], 1: ["What are the dependency ratio, life expectancy, birth rate and fertility rate of South Korea?", null],
            2: ["How has the South Korean government ensured that the country benefits from the demographic dividend?", null], 3: ["What policies have been put in place?", null],
            4: ["How has South Korea benefited from the demographic dividend?", null], 5: ["What changes has the demographic dividend caused to the social and economic development of South Korea?", null],
            6: ["What are the likely challenges and opportunities for South Korea in the future?", null],
            7: ["What is the demographic dividend?", null], 8: ["What has happened in terms of demographic transition in South Korea?", null] } },
        { id: "k2", label: "b)", type: "text", prompt: "Explain how South Korea developed and benefited from the demographic dividend. (6 marks)" },
        { type: "heading", text: "Activity 3: Now Thailand\u2019s turn", note: "Use the Thailand case study to produce a short case study." },
        { id: "t1", label: "", type: "table", prompt: "",
          links: [{ label: "Case study: Thailand\u2019s demographic dividend (PDF)", url: "/geography/resources/flip/thailand-demographic-dividend.pdf" }],
          cols: ["", "Your notes"],
          rows: ["Location and background", "How fertility was reduced (policies and who was involved)", "How the population structure changed", "Investment in people: education, health and gender equality", "Jobs, economic growth and benefits", "Future challenges and opportunities", "Overall judgement: how successful has Thailand been?"] },
        { type: "banner", src: "/images/flip/banner-reflect.jpg", alt: "Reflect" },
        { type: "heading", text: "Exit ticket" },
        { id: "x1", label: "", type: "text", prompt: "Compare South Korea and Thailand: which country has gained more from its demographic dividend, and why?" }
      ]
    }],
    CC08: {
      title: "The impacts of climate change on people and places",
      intro: "Complete this before the lesson. Your understanding should show the impacts of climate change on people and places, including where the impacts happen (their spatial distribution). Use the Teach Me Live bot on this page if you get stuck.",
      parts: [
        { type: "heading", text: "Part 1: Transportation" },
        { id: "a", type: "table", prompt: "Watch the video, then complete the table of positive and negative impacts of climate change on transportation.",
          links: [{ label: "Video: Canada's new shipping shortcut (the Northwest Passage)", url: "https://www.youtube.com/watch?v=ZcDwtO4RWmo" }],
          cols: ["Impacts on transportation", "Positive or negative? (SEEP)", "Explanation (give detail and an example location)"],
          rows: ["Melting sea ice in the Northwest Passage", "Impacts on roads and other transport infrastructure", "Traffic congestion and accidents", "Transport times (duration of travel)", "Other impacts"] },
        { type: "heading", text: "Part 2: Case study: climate refugees" },
        { id: "b", type: "text", prompt: "Define a climate refugee and give examples of places." },
        { id: "c", type: "text", prompt: "Explain why this occurs (the processes)." },
        { id: "d", type: "table", prompt: "Create a short case study of Bangladesh. First watch the video, then make notes.",
          links: [{ label: "Video: How global climate change is already devastating Bangladesh", url: "https://www.youtube.com/watch?v=I9yJ7K_3n50" }],
          cols: ["", "Your notes"],
          rows: ["Location", "Why is this happening? (hazards, relief, development status, etc.)", "Impacts: describe and explain them", "Solutions: are there any?"] },
        { type: "heading", text: "Part 3: Impacts on people's health",
          note: "Use the WHO video as a starting point. The summary table gives examples to base your research on." },
        { type: "html", html: HEALTH },
        { id: "e", type: "table", prompt: "For each health impact, explain why it occurs (the processes) and give an example (place).",
          links: [{ label: "Video: WHO: Climate change and health", url: "https://www.youtube.com/watch?v=HC8eG05ceIs" }],
          cols: ["Health impact", "Why it occurs (processes)", "Example (place)"],
          rows: ["Heat stroke", "Increase in vector-borne diseases", "Allergies", "Stress and mental health", "Another impact of your choice"] }
      ]
    },
    CC09: {
      title: "Climate change, risk and vulnerability",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to help you answer the questions.",
      parts: [
        { type: "heading", text: "Part 1: Risk, hazard and vulnerability" },
        { id: "a", label: "", type: "questions", letters: true, prompt: "",
          rows: ["Define risk.", "Define hazard, and explain how risk can be calculated.", "Define vulnerability."] },
        { id: "b", label: "d)", type: "text", before: RISK_SVG,
          prompt: "What is a vulnerability assessment? Make sure your answer has enough detail. Use the diagram as a starting point." },
        { type: "heading", text: "Part 2: The global pattern of vulnerability" },
        { id: "c", label: "a)", type: "text", before: IMG("cc09-ccvi", "Climate Change Vulnerability Index 2017: average score by region, countries in each risk category, and the five most and least vulnerable countries"),
          prompt: "Using the data, describe the global pattern of vulnerability to climate change (4 marks).",
          note: "Tip: use the regional averages and name countries, with their scores, as evidence." },
        { type: "heading", text: "Part 3: Adaptive capacity and vulnerable groups" },
        { id: "d", label: "", type: "questions", prompt: "",
          rows: ["Define adaptive capacity.", "Give examples of how countries can become more resilient to climate change."] },
        { id: "e", label: "3.", type: "table", prompt: "Explain why these groups are more vulnerable, giving an example of each.",
          cols: ["Group", "Why are they more vulnerable?", "Example (place)"],
          rows: ["Women", "The poor", "The elderly"] }
      ]
    },
    CC10: {
      title: "Government-led adaptation and mitigation strategies",
      intro: "Complete these activities before the lesson. Use the Teach Me Live bot on this page to help you complete the tables.",
      parts: [
        { type: "heading", text: "Starter prompts for Teach Me Live", note: "Copy a prompt and paste it into the bot." },
        { type: "html", html: PROMPTS([
          "Teach me this lesson as if I am new to the topic. Pause after each key idea and ask me a check question.",
          "Explain adaptation and mitigation, then give me one clear government-led example of each.",
          "Why might a strategy be both adaptation and mitigation? Give one possible example and explain the overlap.",
          "Explain climate action at local, national and international scales. Give a government example at each scale.",
          "Teach me the difference between a voluntary climate pledge and a legally binding target.",
          "Explain why countries disagree about responsibility for climate change.",
          "Explain the meaning of common but differentiated responsibilities in simple terms.",
          "Compare the UNFCCC, Kyoto Protocol and Paris Agreement. Question me after each agreement.",
          "Explain how wealth, vulnerability, energy security and political priorities influence government decisions.",
          "Test whether I am ready for the lesson using eight short oral questions. Do not reveal answers until I respond."]) },
        { type: "heading", text: "A. Foundations" },
        { id: "a", label: "A.", type: "table", prompt: "Foundations table",
          cols: ["Concept", "Definition in my own words", "Government-led example", "Why it matters"],
          rows: ["Adaptation", "Mitigation", "Climate agreement", "Government policy", "Carbon emissions", "Carbon sink", "Climate finance"] },
        { type: "heading", text: "B. Adaptation and mitigation" },
        { id: "b", label: "B1.", type: "table", prompt: "Adaptation, mitigation or both?",
          note: "Write A (adaptation), M (mitigation) or Both.",
          links: [{ label: "Video: Adapting to climate change: five countries set an example", url: "https://www.youtube.com/watch?v=oshaiU7oHOo" }],
          cols: ["Strategy", "A / M / Both", "How it works", "Possible limitation"],
          rows: ["Sea walls and surge barriers", "Renewable electricity subsidies", "Drought-resistant crops", "Electric vehicle incentives", "Urban drainage and flood storage", "Carbon tax", "Afforestation", "Building insulation", "Managed coastal retreat", "Carbon capture and storage"] },
        { id: "c", label: "B2.", type: "table", prompt: "Scale of action",
          cols: ["Example", "Main scale", "Who decides?", "Who benefits?", "Possible conflict"],
          rows: ["City heat-action plan", "National carbon tax", "Regional emissions-trading scheme", "Paris Agreement pledge", "Coastal protection for one settlement"] },
        { type: "heading", text: "C. Climate agreements" },
        { id: "d", label: "C1.", type: "table", prompt: "Comparison organiser",
          cols: ["Agreement", "Core purpose / feature", "Strength", "Limitation or debate"],
          rows: ["UNFCCC (adopted 1992)", "Kyoto Protocol (adopted 1997)", "Paris Agreement (adopted 2015)"] },
        { type: "heading", text: "C2. Questions to ask the bot", note: "Ask these about each agreement, then use the answers for C1 and C3." },
        { type: "html", html: PROMPTS([
          "What problem was this agreement designed to address?",
          "Who was expected to act, and how did responsibilities differ?",
          "Were commitments legally binding, nationally chosen, or mainly procedural?",
          "How was progress reported or reviewed?",
          "What is one defensible success and one defensible limitation?",
          "How did this agreement influence the next stage of climate cooperation?"]) },
        { id: "e", label: "C3.", type: "table", prompt: "Agreement triangle",
          cols: ["", "Ambition", "Participation", "Enforcement"],
          rows: ["Guiding question", "My judgement"], given: true,
          prefill: { 0: ["How demanding are the goals?", "How widely can countries take part?", "What encourages or compels delivery?"], 1: [null, null, null] } },
        { type: "heading", text: "D. Think: countries, interests and power" },
        { id: "f", label: "D1.", type: "table", prompt: "Comparative enquiry",
          cols: ["Actor", "Priorities / pressures", "Likely climate demands", "Possible concession", "Evidence to verify"],
          rows: ["United States", "China", "India", "European Union", "Maldives / small island states", "Environmental NGO"] }
      ]
    },
    CC11: {
      title: "Civil society and corporate strategy",
      intro: "Complete all the flip learning activities before the lesson. Open Teach Me Live on this page and work through the starter prompts and the seven \u201cWhat should I know?\u201d statements. Write your answers in your own words, and tick each statement in the bot only when you can explain it without help.",
      parts: [
        { type: "heading", text: "Part 1: Core knowledge", note: "Use these bot prompts. Copy one and paste it into the bot." },
        { type: "html", html: PROMPTS(["What is civil society?", "NGOs and climate advocacy", "Grassroots movements", "Corporate social responsibility", "What is greenwashing?", "Individual actions", "Civil society vs government roles"]) },
        { id: "a", type: "table", prompt: "Complete the table.",
          cols: ["Concept", "Meaning in your own words", "Example", "Why is it important?"],
          rows: ["Civil society", "NGO", "Climate advocacy", "Grassroots movement", "Corporate social responsibility", "Greenwashing"] },
        { type: "heading", text: "Part 2: How civil society creates change", note: "Ask the bot the question below, then complete the table." },
        { type: "html", html: PROMPTS(["How can civil society organisations influence action on climate change?"]) },
        { id: "b", type: "table", prompt: "Complete the table.",
          cols: ["Method", "How does it work?", "Possible strength", "Possible limitation"],
          rows: ["Research and evidence", "Awareness campaigns", "Petitions", "Lobbying governments", "Protests and demonstrations", "Social media campaigns", "Community projects"] },
        { id: "c", type: "text", prompt: "Thinking question: which method is likely to have the greatest influence on governments? Explain why." },
        { type: "heading", text: "Part 3: Corporate climate strategies", note: "Ask the bot the question below, then complete the table." },
        { type: "html", html: PROMPTS(["What strategies can corporations use to respond to climate change?"]) },
        { id: "d", type: "table", prompt: "Complete the table.",
          cols: ["Corporate strategy", "How does it work?", "How could it address climate change?", "Possible limitation"],
          rows: ["Improving energy efficiency", "Using renewable energy", "Changing production processes", "Developing lower-carbon products", "Using sustainable supply chains", "Carbon offsetting", "Setting net-zero targets", "Climate-friendly marketing"] },
        { id: "e", type: "text", prompt: "Challenge question: which corporate strategy is likely to be the most effective? Explain why." }
      ]
    },
    RC01: {
      title: "Global, continental and regional progress towards poverty reduction",
      intro: "Complete the following activities before the lesson. Use the Teach Me Live bot on this page to help you research.",
      parts: [
        { type: "heading", text: "Part 1: Defining poverty" },
        { id: "a", type: "table", prompt: "Research the following terms.",
          cols: ["Term", "Definition", "Limitation or caution"],
          rows: ["Absolute poverty", "Relative poverty", "Income poverty", "Extreme poverty", "Multidimensional poverty"] },
        { id: "b", type: "text", prompt: "In your own words, distinguish between absolute and relative poverty." },
        { type: "heading", text: "Part 2: Global poverty in five facts", note: "Study the evidence (source: World Bank)." },
        { id: "c", label: "a)", type: "table", rhw: "48%", prompt: "For each fact, label it progress, continuing challenge, or both, and explain why.",
          cols: ["Evidence", "Progress / challenge / both", "Why?"],
          rows: [
            "1. The number of people living in extreme poverty fell from about 2.3 billion in 1990 to around 831 million in 2025.",
            "2. Much of the historical decline was driven by broad-based economic growth in East Asia and South Asia.",
            "3. The pace of poverty reduction has slowed substantially during the last decade.",
            "4. Extreme poverty is increasingly concentrated in Sub-Saharan Africa and in countries affected by conflict and fragility.",
            "5. Nearly three-quarters of people in extreme poverty live in rural communities."] },
        { id: "d", label: "b)", type: "table", rhw: "48%", prompt: "Then complete these sentences.",
          cols: ["Sentence starter", "Your completion"],
          rows: ["The most positive global trend is \u2026 because \u2026", "However, progress is spatially uneven because \u2026", "The statistic that most changes my understanding is \u2026 because \u2026"] },
        { type: "heading", text: "Part 3: Indicator detective",
          note: "Select two development indicators and explain how each is connected to poverty. Suggested choices: GNI per capita at PPP, life expectancy, infant mortality, access to clean water, years of schooling, electricity access, HDI." },
        { id: "e", type: "table", prompt: "Recording table",
          cols: ["", "Indicator chosen", "What does it measure?", "How could poverty affect it?", "Why might it give an incomplete picture?"],
          rows: ["Indicator 1", "Indicator 2"] },
        { id: "f", type: "text", prompt: "PEE paragraph for indicator 1.",
          note: "Point: \u2026 is a useful indicator of poverty because \u2026 Evidence/example: a low/high value may indicate \u2026 Explanation: this is linked to poverty because \u2026 However, the indicator may hide \u2026" },
        { id: "g", type: "text", prompt: "PEE paragraph for indicator 2.", note: "Use the same writing frame." },
        { type: "heading", text: "Part 4: Readiness question",
          note: "\u201cGlobal poverty is disappearing.\u201d To what extent do you agree? Write a short initial judgement (maximum 60 words) using two facts from the evidence box. Open Challenge Mode on this page to write it and test your thinking with the Challenge Tutor. It becomes the starting point for the classroom lesson." },
        { id: "h", label: "", type: "text", words: [20, 60], prompt: "Draft your judgement here first (optional), then take it into Challenge Mode." }
      ]
    },
    RC02: {
      title: "Measuring trends and patterns in resource consumption",
      intro: "Complete before the lesson. Watch the two videos and capture three key ideas from each, plus one question or limitation. Then retrieve the key terms without notes, test your knowledge, and bring one example of a lifestyle choice that changes resource demand.",
      parts: [
        { type: "heading", text: "Part 1: Watch and capture", note: "Watch the two videos. Record only the most useful ideas, in your own words." },
        { id: "a", type: "table", prompt: "",
          links: [
            { label: "Video 1: The ecological footprint: accounting for a small planet", url: "https://www.youtube.com/watch?v=EjyrAHzthTo" },
            { label: "Video 2: Ecological footprint: how many planets do we need?", url: "https://www.youtube.com/watch?v=g_aguo7V0Q4" }],
          cols: ["Video", "Three key ideas", "One question or limitation"],
          rows: ["Video 1: Accounting for a small planet", "Video 2: How many planets do we need?"] },
        { type: "heading", text: "Part 2: Key terms", note: "Read the core meaning of each term, then add your own example or a quick sketch idea." },
        { id: "b", label: "", type: "table", prompt: "", given: true,
          cols: ["Term", "Core meaning", "My example / sketch"],
          rows: ["Ecological footprint", "Global hectare (gha)", "Biocapacity", "Ecological debtor", "Ecological creditor", "Earth Overshoot Day"],
          prefill: {
            0: ["Demand on biologically productive land and water to supply resources and absorb waste.", null],
            1: ["A globally comparable hectare with world-average biological productivity.", null],
            2: ["The productive capacity of ecosystems to regenerate resources and absorb waste.", null],
            3: ["A country or region whose ecological footprint exceeds its biocapacity.", null],
            4: ["A country or region whose biocapacity exceeds its ecological footprint.", null],
            5: ["The date when annual human demand exceeds what Earth can regenerate in that year.", null] } },
        { type: "heading", text: "Part 3: Test my knowledge", note: "Try to do this without looking at your notes. Choose an answer, then give your reason." },
        { id: "c", type: "mcq", prompt: "", label: "", items: [
          { q: "Which term measures demand on nature?", o: ["GDP", "Biocapacity", "Ecological footprint", "HDI"], a: 2 },
          { q: "Biocapacity measures\u2026", o: ["ecosystem productivity", "population size", "income", "mineral reserves"], a: 0 },
          { q: "A biocapacity reserve exists when\u2026", o: ["footprint > biocapacity", "biocapacity > footprint", "exports > imports", "GDP falls"], a: 1 },
          { q: "A global hectare allows\u2026", o: ["a globally comparable measurement", "only national totals", "carbon-only measurement", "direct wealth comparison"], a: 0 }] },
        { id: "d", label: "", type: "questions", prompt: "Retrieval grid",
          rows: ["Define ecological footprint.", "Distinguish ecological footprint from biocapacity.", "Explain why high-income countries often have larger footprints.", "Explain why a large, sparsely populated country may be an ecological creditor."] },
        { type: "heading", text: "Connect" },
        { id: "e", type: "text", label: "", prompt: "Bring one example of a lifestyle choice that changes resource demand. Explain how it changes demand." }
      ]
    },
    RC03: {
      title: "Patterns and trends in the global availability and consumption of water",
      intro: "Complete before the lesson. The lesson route: connect (water emergency), discover (pattern, trend and evidence), demonstrate (regional diagnosis), apply (choose solutions), reflect (IB exit ticket).",
      parts: [
        { type: "heading", text: "Key vocabulary" },
        { id: "a", label: "", type: "table", prompt: "", given: true,
          cols: ["Term", "Working definition"],
          rows: ["Pattern", "Trend", "Physical scarcity", "Economic scarcity", "Embedded water"],
          prefill: {
            0: ["Spatial distribution at a particular point in time."],
            1: ["Direction or nature of change over time."],
            2: ["Demand exceeds naturally available and accessible supply."],
            3: ["Water exists, but access is limited by infrastructure, investment or institutions."],
            4: ["Water used throughout production of a good or service."] } },
        { type: "heading", text: "Part 1: Retrieval questions" },
        { id: "b", label: "", type: "questions", prompt: "",
          rows: ["What is the difference between a pattern and a trend?", "Define physical water scarcity.", "Define economic water scarcity.",
            "Which term describes the water used throughout the production and supply chain of a product?", "Why might a region with abundant freshwater still experience poor water security?"] }
      ]
    },
    RC04: {
      title: "Patterns and trends in the global availability and consumption of land and food",
      intro: "Big question: how and why are diets changing in middle-income countries, and what are the consequences? Flip learning prepares the knowledge; class time is for geographical thinking (retrieve, investigate, evaluate, write).",
      parts: [
        { type: "heading", text: "Part 1: Retrieval check" },
        { id: "a", label: "", type: "questions", letters: true, prompt: "",
          rows: ["Define food security.", "Define malnutrition.", "Distinguish under-consumption from over-consumption.", "State one reason food availability differs between places.", "Suggest why obesity and undernutrition can occur in the same country."] },
        { type: "heading", text: "Part 2: Evidence capture", note: "Use the sources below to complete the table and answer the questions." },
        { id: "b", type: "table", prompt: "Complete the table.",
          links: [
            { label: "Global Hunger Index", url: "https://www.globalhungerindex.org" },
            { label: "WFP HungerMap LIVE (World Food Programme)", url: "https://hungermap.wfp.org" },
            { label: "Global Food Security Index", url: "https://insights.economistenterprise.com/sustainability/project/food-security-index/" },
            { label: "Global Food Security Index results (2020)", url: "https://foodsecurityindex.eiu.com/Index" },
            { label: "Video: Changing food systems", url: "https://www.youtube.com/watch?v=VcL3BQeteCc" }],
          cols: ["Source", "One pattern or fact", "What surprised you?", "Why might it matter?"],
          rows: ["Global Hunger Index", "Global Food Security Index", "Changing food systems video"] },
        { id: "c", label: "", type: "questions", prompt: "Global Food Security Index: examine the results on the website and answer these questions.",
          rows: ["What is the Global Food Security Index? What criteria does it use to measure food security?", "Which countries are the most and least food secure globally?", "Where does Thailand score on the index? Give a brief description of Thailand\u2019s results."] },
        { type: "heading", text: "Part 3: Readiness question", note: "Think before class." },
        { id: "d", label: "", type: "text", prompt: "Why might economic growth improve food security while also creating new health and environmental problems?" }
      ]
    },
    RC05: {
      title: "Energy patterns, security and transition",
      intro: "Big question: how and why are the global patterns of energy production and consumption changing, and how secure and sustainable are those changes? Complete this before class.",
      parts: [
        { type: "heading", text: "Part A: Watch" },
        { id: "a", type: "table", prompt: "Watch the video, then make notes.",
          links: [{ label: "Video: 300 years of fossil fuels in 300 seconds", url: "https://www.youtube.com/watch?v=cJ-J91SwP8w" }],
          cols: ["While watching", "Your notes"],
          rows: ["Identify three major turning points.", "Explain why fossil fuels transform economies.", "Identify one benefit and one cost.", "Write one question for the lesson."] },
        { type: "heading", text: "Retrieval check", note: "Answer in your own words." },
        { id: "b", label: "", type: "questions", letters: true, prompt: "",
          rows: ["Define renewable energy.", "Define hydrocarbons.", "Define energy mix.", "Distinguish energy production from energy consumption.", "Explain why energy security matters."] }
      ]
    },
    RC06: {
      title: "The water\u2013food\u2013energy nexus: my dinner has a nexus",
      intro: "Big question: how can pressure on one resource create insecurity somewhere else? Complete this before the classroom lesson.",
      parts: [
        { id: "k", label: "", type: "table", prompt: "Resource key", given: true,
          plainHead: true, cols: ["Water", "Food", "Energy"], rows: ["Safe supply \u2022 sanitation \u2022 irrigation"],
          prefill: { 0: ["Production \u2022 access \u2022 nutrition", "Reliable \u2022 affordable \u2022 productive uses"] } },
        { type: "heading", text: "What is the nexus?" },
        { id: "a", type: "text", prompt: "Watch the nexus video. Then define the concept in one precise sentence.",
          links: [{ label: "Video: Water, energy, food: nexus thinking explained", url: "https://www.youtube.com/watch?v=CKW_ux2Xo_w" }] },
        { id: "b", type: "table", prompt: "Now complete the table.",
          cols: ["Interaction", "Example from the video or your own knowledge"],
          rows: ["Water \u2192 Food", "Food \u2192 Water", "Water \u2192 Energy", "Energy \u2192 Water", "Food \u2192 Energy", "Energy \u2192 Food"] },
        { id: "c", type: "table", prompt: "Now complete these key terms.",
          cols: ["Term", "Your definition"], rows: ["Water security", "Food security", "Energy security"] },
        { type: "heading", text: "My meal investigation", note: "Create a meal, for example an English roast dinner, and trace its water, food and energy." },
        { id: "m", label: "", type: "table", prompt: "",
          cols: ["", "Your answer"], rows: ["My meal", "Ingredients"] },
        { id: "n", label: "", type: "table", prompt: "",
          cols: ["", "WATER: where was it needed?", "FOOD: what was produced?", "ENERGY: where was it used?"], rows: ["My meal"] },
        { id: "o", label: "", type: "text", prompt: "Complete: \u201cThe resource my meal depends upon most is \u2026 because \u2026\u201d" },
        { type: "heading", text: "Check your understanding" },
        { id: "d", label: "d)", type: "questions", prompt: "Complete the following.",
          rows: ["Define nexus.", "Define food security.", "Give one way food production requires water.", "Give one way water supply requires energy.", "Why is \u201cnexus\u201d more useful than simply calling these three separate systems?"] }
      ]
    },
    RC08: {
      title: "Country specialist briefing: Nepal and Israel",
      storeAs: "RC08",
      intro: "Pressure on resources will affect the future security of different places. The next two lessons focus on two countries at very different levels of development: Nepal and Israel. You will pair up: one of you is the Nepal researcher and the other the Israel researcher. In the following lesson you will compare, contrast and apply the 4 Ps to form an opinion. This briefing is the same on the Nepal and Israel lesson pages, and your notes appear on both.",
      parts: [
        { type: "heading", text: "Questions to keep in mind" },
        { type: "html", html: '<ol class="fl__cover" style="margin-left:1.4rem"><li>To what extent do Nepal and Israel have resource security?</li><li>Is there a difference in the way both countries have tried to achieve resource security?</li><li>How might this security be affected in the future, especially as a result of climate change?</li></ol>' },
        { type: "heading", text: "Prepare your background research",
          note: "Research your chosen country using the Teach Me Live bots on the two lesson pages and the videos, and take notes. Use an atlas to locate your country and its main physical features." },
        { type: "html", html: '<p><a class="fl__video" href="/geography/paper-1/core-3/t2-impacts-of/l3-the-water">Nepal lesson page &rarr;</a> <a class="fl__video" href="/geography/paper-1/core-3/t2-impacts-of/l4-the-water">Israel lesson page &rarr;</a></p>' },
        { id: "a", label: "A.", type: "table", prompt: "Nepal specialist",
          links: [{ label: "Video: Nepal: Himalaya, Kathmandu", url: "https://www.youtube.com/watch?v=w3Becl-1JPI" }],
          cols: ["Category", "Essential notes"],
          rows: ["Physical and human pressures", "Threats to water, energy and food", "Small-scale responses", "Climate-change future", "Overall security judgement"] },
        { id: "b", label: "B.", type: "table", prompt: "Israel specialist",
          links: [{ label: "Video: Israel: small but outstanding", url: "https://www.youtube.com/watch?v=AoizSL-TEJQ" }],
          cols: ["Category", "Essential notes"],
          rows: ["Physical and human pressures", "Threats to water, energy and food", "Large-scale / high-tech responses", "Climate-change future", "Overall security judgement"] }
      ]
    },
    RC10: {
      title: "Disposal and recycling of consumer items",
      intro: "Enquiry question: how should societies manage the growing amount of waste created by consumption? Complete this before the lesson.",
      parts: [
        { type: "heading", text: "Part 1: The waste hierarchy" },
        { id: "a", type: "table", prompt: "Watch the Reduce, Reuse, Recycle video and record:",
          links: [{ label: "Video: Reduce, reuse, recycle (in that order)", url: "https://www.youtube.com/watch?v=EWxjFLDoIDA" }],
          cols: ["", "Student-friendly definition", "One example"],
          rows: ["Reduce", "Reuse", "Recycle"] },
        { id: "b", type: "text", prompt: "In one sentence, explain why the three actions are placed in that order." },
        { type: "heading", text: "Part 2: Vocabulary preparation" },
        { id: "c", type: "table", prompt: "Complete the table of key terms.",
          cols: ["Term", "Student definition", "Example"],
          rows: ["Municipal solid waste", "Reduce", "Reuse", "Recycle", "Upcycle", "Downcycle", "Waste recovery", "Landfill"] },
        { type: "heading", text: "Part 3: Personal waste audit", note: "Choose five items discarded at home during one evening." },
        { id: "d", type: "table", prompt: "For each item, record:",
          cols: ["", "What was the item?", "What material was it made from?", "Why was it discarded?", "What happened to it?", "Could it have been reduced, reused, repaired, recycled or composted?"],
          rows: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"] }
      ]
    },
    RC12: {
      title: "Population and resource consumption: prepare for the dinner party",
      intro: "Complete this before the lesson to prepare for the dinner party debate. Use the three presentations and the Teach Me Live bot on this page.",
      parts: [
        { type: "heading", text: "Part 1: Key terms" },
        { id: "a", type: "table", prompt: "Define the following.",
          cols: ["Key term", "Definition", "Example country"],
          rows: ["Underpopulation", "Overpopulation", "Optimum population", "Resource stewardship"] },
        { type: "heading", text: "Part 2: Pessimistic and optimistic approaches",
          note: "Read the three presentations, then complete the table. Sketch the graphs in OneNote and describe them in the table." },
        { id: "b", type: "table", prompt: "Malthus versus Boserup",
          links: [
            { label: "Presentation: Malthus vs Boserup (introduction)", url: "/geography/resources/flip/malthus-vs-boserup-intro.pptx" },
            { label: "Presentation: Malthus", url: "/geography/resources/flip/malthus.ppt" },
            { label: "Presentation: Boserup", url: "/geography/resources/flip/boserup.ppt" }],
          cols: ["", "PESSIMISTIC approach (Malthus\u2019s original theory, the Club of Rome and neo-Malthusianism)", "OPTIMISTIC approach (Boserup)"],
          rows: ["Name the geographer and the year of the published work", "Main arguments", "Graphs to illustrate the arguments (sketch in OneNote, describe here)", "Limitations / criticisms", "Present-day case study to support these arguments"] }
      ]
    },
    RC13: {
      title: "The value of the circular economy",
      intro: "For flip learning, read and watch the following, and with additional research, answer the questions.",
      parts: [
        { type: "heading", text: "Part A: The tragedy of the commons",
          note: "Read the briefing below and watch the video, then answer the questions. Use additional research too." },
        { type: "html", html: COMMONS_SVG() },
        { type: "html", html: CIRCULAR_READING },
        { id: "a", label: "", type: "questions", prompt: "",
          links: [{ label: "Video: What is the tragedy of the commons? (Nicholas Amendolare, TED-Ed)", url: "https://www.youtube.com/watch?v=CxC161GvMPc" }],
          rows: ["Explain the concept of resource stewardship.", "List the different global commons.", "Explain the concept behind the tragedy of the commons, and use an example of a resource to illustrate it.", "Describe the characteristics of the circular economy and the three principles behind it."] },
        { type: "heading", text: "Part B: Linear and circular economies (optional)", note: "This talk is quite long, so you may want to watch it at home." },
        { id: "b", label: "", type: "text", prompt: "Write a paragraph comparing the linear economy with the circular economy. Give as many examples as you can, from the video or your own ideas.",
          links: [{ label: "Video: Ellen MacArthur: learning and the circular economy (TED)", url: "https://www.youtube.com/watch?v=eOGy683afyo" }] },
        { type: "heading", text: "Part C: The circular vs the linear economy" },
        { id: "c", label: "", type: "text", prompt: "Watch the video and write the difference between the circular and the linear economy.",
          links: [{ label: "Video: The circular vs the linear economy", url: "https://www.youtube.com/watch?v=RyIKCfKyZ-g" }] },
        { type: "heading", text: "Part D: The Story of Electronics" },
        { id: "d", label: "", type: "questions", prompt: "Watch the video and answer the questions.",
          links: [{ label: "Video: The Story of Electronics", url: "https://www.youtube.com/watch?v=sW_7i6T_H78" }],
          rows: ["What does \u2018designed for the dump\u2019 mean?", "How is this achieved by companies?", "Why do companies design goods that will soon be put in the dump?", "How is Annie\u2019s DVD player designed for the dump?", "How many months is the average electronic item used for?", "How many raw materials are used in the manufacturing of electronics?", "What is added to the raw materials during manufacturing? Give an example.", "What has been the impact of electronics manufacturing in Silicon Valley, California, on (a) the environment?", "\u2026and (b) people?", "What is e-waste?", "What waste comes out of electronic goods?", "Where is most e-waste recycling done?", "How is e-waste recycled?", "What are the impacts of e-waste?", "What does \u2018externalising the true cost of production\u2019 mean?", "Explain the term extended producer responsibility (take-back).", "Why are there few \u2018green\u2019 electronics for consumers?"] }
      ]
    },
    "HD-t2-l3-how-diasporas": [{
      title: "How do diasporas shape identity and cultural diversity?",
      overview: {
        heading: "How global interactions bring cultural influences and changes to places",
        intention: "To explain the values and perceptions of differing groups or individuals.",
        sdgs: [{ n: 10, t: "Reduced inequalities", c: "#dd1367" }, { n: 17, t: "Partnerships for the goals", c: "#19486a" }],
        syllabus: ["How diasporas influence cultural diversity and identity at both global and local scales.", "Case study of a global diaspora population and its culture(s)."],
        success: ["Define and explain the role of diasporas in maintaining a culture abroad.", "Describe the presence of Chinese diasporas worldwide.", "Summarise the importance of the Chinese diaspora in San Francisco.", "Apply the IB essay mark scheme to an answer on the topic of diasporas, using the Chinese in the USA as an example."] },
      intro: "Complete this before the lesson, and arrive ready to discuss Part D.",
      parts: [
        { type: "heading", text: "Part A: Recap: the effects of globalisation", note: "Complete some of the effects of globalisation for each of the following in the right-hand column." },
        { id: "a", label: "", type: "table", prompt: "", cols: ["Aspect of globalisation", "Effects"], rows: ["Transport, especially air transport and tourism", "Transnational companies and global products", "Economic migrants, e.g. Mexicans into the USA", "Global events, e.g. the World Cup", "Global media", "Economic integration: the euro, trade", "Trade unions and international campaigns", "Communications: the internet", "Peace"] },
        { type: "heading", text: "Part B: What are diasporas?" },
        { id: "b0", label: "1.", type: "text", prompt: "Define the term diaspora and give examples." },
        { type: "html", html: '<div class="fl__tnote" style="background:var(--lh-teal-bg)"><b>Reading summary: the economic power of diasporas</b> <span style="font-size:.85rem;color:#555">(summarised from a 2011 article in <i>The Economist</i>; read the full PDF your teacher has given you)</span><ul style="margin:.4rem 0 0 1.1rem;padding:0"><li>Diaspora networks (Huguenots, Scots, Jews and many others) have long been an economic force. Cheap travel and modern communications have made them larger and more numerous.</li><li>In 2011 there were about <b>215 million</b> first-generation migrants, around 3% of the world\u2019s population. More Chinese people lived outside China than there were French people in France, and about 22 million Indians lived abroad.</li><li>Unexpected communities exist too: Lebanese in West Africa, Japanese in Brazil, Welsh in Patagonia, and West Africans in southern China.</li><li><b>Business:</b> ties of kinship and language build trust and spread information, making trade and investment across borders easier. Much foreign investment in China has passed through the Chinese diaspora.</li><li><b>Ideas:</b> students educated abroad return with knowledge and contacts, such as China\u2019s \u201csea turtles\u201d and Indian engineers linked to Silicon Valley.</li><li><b>Money:</b> migrants send remittances home and help firms in their host country operate in their homeland.</li><li><b>Host countries:</b> immigrants were about an eighth of the US population but founded about a quarter of its technology and engineering firms.</li><li><b>Brain drain:</b> the article argues these fears are overblown, because the chance to work abroad encourages people to gain skills, and many return to start businesses.</li><li><b>Politics:</b> returning graduates helped drive India\u2019s economic reforms in the 1990s and now advise China\u2019s government.</li><li><b>Tensions:</b> hostility to immigration grows in hard times, based on fears about welfare and wages, although the evidence for these is weak or mixed.</li></ul></div>' },
        { id: "b", label: "2.", type: "questions", letters: true, prompt: "Read the PDF and answer these questions.",
          rows: ["Why can a country have a much larger global diaspora than its resident population?", "How can people maintain identity ties with a place they do not live in?", "What cultural traits might diaspora communities maintain?", "How might diasporas benefit source countries?", "How might diasporas benefit host countries?", "What tensions or problems might diasporas create?"] },
        { type: "heading", text: "Part C: Case study profile", note: "Choose one diaspora to research: Chinese (possibly the easiest), Indian, Irish, Jewish, Filipino, Caribbean, or your own choice. Research will be required." },
        { id: "c", label: "", type: "table", prompt: "", cols: ["Profile", "My research"], rows: ["Name of group", "Source country / homeland", "Major host countries", "Why did migration occur?", "Cultural traits maintained", "Economic links created", "Political links created", "Cultural impact on host countries", "Benefits for the source country", "Benefits for the host country", "Tensions"] },
        { type: "heading", text: "Part D: Benefits and problems", note: "Decide whether each statement is a benefit or a problem of diasporas, then check your sort." },
        { id: "d", label: "", type: "sort", cardCol: "Statement", binCol: "Benefit or problem?", prompt: "", bins: ["Benefit", "Problem"],
          cards: [{ t: "Improved economic links with different countries", a: ["Benefit"] },
            { t: "Loss of workers from the source country (brain drain)", a: ["Problem"] },
            { t: "Increased political influence around the world", a: ["Benefit"] },
            { t: "The diaspora\u2019s culture is spread around the world and tourism to the source country increases (e.g. St Patrick\u2019s Day for Ireland)", a: ["Benefit"] },
            { t: "Many wrongful claims of citizenship due to descent status (e.g. a rise in Irish passport applications)", a: ["Problem"] },
            { t: "More revenue for source-country businesses (e.g. Guinness in Ireland)", a: ["Benefit"] },
            { t: "Global awareness of and support for sports teams (e.g. Gaelic football)", a: ["Benefit"] },
            { t: "Possible political and economic interference from people living outside the country", a: ["Problem"] },
            { t: "Dilution of culture", a: ["Problem"] },
            { t: "Possible dependency on outside help (e.g. over-reliance on remittances)", a: ["Problem"] },
            { t: "Remittances sent home by migrants living overseas", a: ["Benefit"] }] },
        { id: "e", label: "", type: "cards", prompt: "",
          items: [{ t: "Identity", icon: "\ud83e\udded", c: "#6b2fa3", q: "Do diasporas strengthen cultural identity or dilute it?" },
            { t: "Economy", icon: "\ud83d\udcb8", c: "#0f766e", q: "Do diasporas create economic benefits through remittances and tourism?" },
            { t: "Politics", icon: "\ud83c\udfdb\ufe0f", c: "#2a63b8", q: "Can diasporas increase political influence?" },
            { t: "Tensions", icon: "\u26a0\ufe0f", c: "#b42318", q: "Can diasporas create tensions around belonging, integration or nationalism?" }] }
      ]
    }, {
      kind: "lesson", open: true, inline: true, afterCard: 2,
      title: "Do diasporas widen or narrow cultural diversity?",
      intro: "",
      parts: [
        { type: "banner", src: "/images/flip/banner-connect.jpg", alt: "Connect" },
        { type: "heading", text: "Starter: Where do you belong?", note: "Grab a mini-whiteboard (individually) and answer the question. Then place yourself on the line." },
        { type: "html", html: '<div class="fl-scale"><div class="fl-scale__q">\u201cYou can belong to a place you don\u2019t live in.\u201d</div><div class="fl-scale__row"><b>Strongly agree</b><input type="range" min="1" max="5" value="3" aria-label="How far do you agree?"><b>Strongly disagree</b></div></div>' },
        { id: "s1", label: "", type: "text", prompt: "Can you belong to a place you don\u2019t live in? Explain your position on the line." },
        { type: "heading", text: "Retrieval: no notes!", note: "Answer these on your mini-whiteboard without looking at your notes, then check." },
        { id: "s2", label: "", type: "questions", prompt: "", rows: ["What is a diaspora?", "What is a source country?", "What is a host country?", "What is one cultural trait a diaspora may maintain?", "What is one economic flow linked to diasporas?"] },
        { type: "html", html: '<details class="fl-clue"><summary>Check your answers</summary><ul style="margin:0;padding:0 .8rem .7rem 2rem;line-height:1.5"><li><b>Diaspora:</b> a population living outside its homeland that keeps cultural, economic or emotional ties with it.</li><li><b>Source country:</b> the homeland the migrants (or their ancestors) came from.</li><li><b>Host country:</b> the country where the diaspora now lives.</li><li><b>Cultural trait:</b> e.g. language, religion, food, festivals, dress, music.</li><li><b>Economic flow:</b> e.g. remittances, trade and investment, tourism to the homeland.</li></ul></details>' },
        { type: "banner", src: "/images/flip/banner-demonstrate.jpg", alt: "Demonstrate" },
        { type: "heading", text: "Activity 1: Do diasporas widen or narrow cultural diversity?" },
        { type: "html", html: '<div class="fl__tnote" style="background:var(--lh-teal-bg)"><b>Success criteria: I can\u2026</b><ul style="margin:.3rem 0 0 1.1rem;padding:0"><li>define diaspora, source country, host country and cultural identity</li><li>explain how diaspora communities maintain links with their homelands</li><li>analyse how diasporas influence culture, identity, economics and politics</li><li>evaluate whether diasporas make cultural identity more complex</li><li>link diasporas to Unit 4 ideas about migration, remittances, networks and global flows</li></ul></div>' },
        { type: "heading", text: "Mapping diaspora flows", note: "Complete the short activities in the Diaspora Flow Map below, using your flip learning. Download your map picture and copy your work into OneNote." },
        { type: "game", src: "/geography/games/diaspora-flow-map", title: "Diaspora Flow Map" },
        { id: "m1", label: "", type: "text", prompt: "Paste or summarise your answers from the Diaspora Flow Map tasks here." },
        { type: "banner", src: "/images/flip/banner-reflect.jpg", alt: "Reflect" },
        { type: "heading", text: "Consolidation: How do global interactions bring cultural influences and changes to places?", note: "Complete the table using your case study notes." },
        { id: "c1", label: "", type: "table", prompt: "", cols: ["How diaspora affects identity", "Example evidence"],
          rows: ["#Local scale", "Neighbourhoods", "Restaurants", "Festivals", "Places of worship", "Community spaces", "#National scale", "Multiculturalism", "Migration debates", "Politics", "Education", "Public identity", "#Global scale", "Remittances", "Tourism", "Media", "Political lobbying", "Transnational networks"] }
      ]
    }],
    LT03: [{
      title: "What factors affect participation in sport and tourism?",
      overview: {
        heading: "What factors affect participation in sport and tourism?",
        intention: "To describe and explain human patterns and processes.",
        syllabus: ["Factors that affect personal participation in sport and tourism, including affluence, gender, stage in life, personality and place of residence."],
        success: ["Describe and explain how affluence, gender, stage in life, personality and place of residence affect participation in sport.", "Describe and explain how affluence, gender, stage in life, personality and place of residence affect participation in tourism.", "Apply what I have learnt over the past three lessons to some past paper questions."] },
      intro: "Complete this before the lesson.",
      parts: [
        { type: "heading", text: "Part 1: Retrieval practice crossword", note: "Review the last two lessons: every answer is a sport or category of sport. Type in the squares (click a square twice to switch between across and down), then check your answers." },
        { id: "cw", label: "", type: "crossword", prompt: "", words: [{"a": "MARTIALARTS", "c": "Practised for fitness, these sports can be dangerous if applied in combat.", "r": 9, "col": 1, "d": "A", "n": 11, "len": "7, 4"}, {"a": "TENNIS", "c": "A globally played and watched sport; its major events are in the US, France, the UK and Australia.", "r": 5, "col": 5, "d": "D", "n": 7}, {"a": "ATHLETICS", "c": "Perhaps the oldest and purest of sports: it tests who can run fastest, jump highest and throw furthest.", "r": 6, "col": 1, "d": "A", "n": 8}, {"a": "CRICKET", "c": "A bat and ball sport played by millions but limited to countries with a British colonial background.", "r": 8, "col": 3, "d": "D", "n": 10}, {"a": "TABLETENNIS", "c": "This indoor bat and ball sport began in England, but at the 2008 Beijing Olympics China won every medal in the singles events.", "r": 0, "col": 5, "d": "D", "n": 2, "len": "5, 6"}, {"a": "ROWING", "c": "In this water sport competitors face backwards to move forwards.", "r": 9, "col": 9, "d": "D", "n": 12}, {"a": "BASKETBALL", "c": "This team sport was developed in the USA and, although played around the world, is dominated by the professional league in that country.", "r": 4, "col": 1, "d": "A", "n": 6}, {"a": "EQUESTRIAN", "c": "In this type of sport men and women compete together, even up to Olympic level.", "r": 13, "col": 0, "d": "A", "n": 14}, {"a": "FITNESS", "c": "This category of activities includes aerobics, jogging and going to the gym.", "r": 0, "col": 3, "d": "A", "n": 1}, {"a": "FISHING", "c": "Can be a non-sport occupation as well as a sport or pastime, with extremely high participation in many areas of the world.", "r": 7, "col": 11, "d": "D", "n": 9}, {"a": "FOOTBALL", "c": "The most global sport, accessible to all with a little space and a ball to kick around.", "r": 2, "col": 1, "d": "A", "n": 4}, {"a": "ATHLON", "c": "A Greek term for sport: this suffix, added to \u201cbi\u201d, \u201ctri\u201d and \u201cdec\u201d, names a set of fitness sports.", "r": 12, "col": 5, "d": "D", "n": 13}, {"a": "YOGA", "c": "Originally to stimulate spiritual and mental well-being; in the Western world it is practised more often for physical health.", "r": 1, "col": 2, "d": "D", "n": 3}, {"a": "CYCLING", "c": "Done worldwide for recreation, on rough terrain, indoors or outside, and always while sitting down.", "r": 17, "col": 0, "d": "A", "n": 15}, {"a": "GOLF", "c": "This sport needs a large playing area and has therefore been traditionally expensive to play.", "r": 2, "col": 10, "d": "D", "n": 5}] },
        { type: "heading", text: "Part 2: What factors affect participation in sport and tourism?", note: "Watch the video, then answer the question in each box. Think about sport AND tourism." },
        { id: "v", label: "", type: "text", prompt: "Brainstorm: before you watch, list as many factors as you can think of that might stop someone taking part in sport or tourism.", links: [{ label: "Video: Social groups and barriers impacting sport", url: "https://www.youtube.com/watch?v=aZemjQUjry0" }] },
        { id: "f", label: "", type: "cards", prompt: "",
          items: [{ t: "1. Affluence", icon: "\ud83d\udcb0", c: "#0f766e", q: "How does wealth (or a lack of it) affect which sports people play and whether and where they go on holiday?" },
            { t: "2. Place of residence", icon: "\ud83d\udccd", c: "#2a63b8", q: "How do where you live (urban or rural, near the coast or mountains, which country and passport) affect participation?" },
            { t: "3. Gender", icon: "\ud83d\udc6b", c: "#b42318", q: "Why are participation rates in sport different for men and women? Are there differences in tourism too?" },
            { t: "4. Life cycle stage", icon: "\ud83d\udc76\u2192\ud83d\udc75", c: "#c2410c", q: "How do sport and tourism change from childhood to young adult, parent and retirement?" },
            { t: "5. Personality", icon: "\ud83e\udde0", c: "#6b2fa3", q: "How do introverts and extroverts (or Plog\u2019s psychocentric and allocentric tourists) choose different activities?" },
            { t: "Which matters most?", icon: "\u2696\ufe0f", c: "#13284b", q: "Which factor do you think has the biggest effect on participation? Justify your choice with an example." }] }
      ]
    }, {
      kind: "lesson", open: true, inline: true, afterCard: 2,
      title: "Factors affecting participation in sport and tourism",
      intro: "",
      parts: [
        { type: "banner", src: "/images/flip/banner-connect.jpg", alt: "Connect" },
        { type: "heading", text: "Starter: Who plays? Who travels?", note: "Read each person\u2019s situation. Which factor is mainly affecting their participation in sport or tourism? Then check your sort." },
        { id: "s1", label: "", type: "sort", cardCol: "Person", binCol: "Main factor", prompt: "", bins: ["Affluence", "Place of residence", "Gender", "Life cycle stage", "Personality"],
          cards: [{ t: "Jack, 22, works part-time on a low wage. Gym membership costs \u00a340 a month, so he has stopped going.", a: ["Affluence"] },
            { t: "Priya, 16, lives in a remote mountain village two days\u2019 travel from the nearest sports centre.", a: ["Place of residence"] },
            { t: "Amira, 14, stopped playing football because her local club has no girls\u2019 team.", a: ["Gender"] },
            { t: "Tom, 45, has three young children and has not played five-a-side for ten years.", a: ["Life cycle stage"] },
            { t: "Lena, 30, only books holidays to remote places with no hotels or tourist facilities.", a: ["Personality"] },
            { t: "Mr Chen, 68, has just retired and now takes three cruises a year.", a: ["Life cycle stage", "Affluence"] },
            { t: "Sami\u2019s passport gives visa-free entry to only about 30 countries, so most trips need costly visas.", a: ["Place of residence"] },
            { t: "Grace always chooses all-inclusive resorts where everything is organised for her.", a: ["Personality"] },
            { t: "A family in a low-income area cannot afford the train fares for a day trip to the coast.", a: ["Affluence"] },
            { t: "Women make up only about a quarter of volunteer coaches at Sara\u2019s club, so she has few role models.", a: ["Gender"] }] },
        { type: "banner", src: "/images/flip/banner-demonstrate.jpg", alt: "Demonstrate" },
        { type: "heading", text: "Activity 1: Participation in sport and affluence", note: "Watch the video about Doorstep Sport, then read the summary of the research." },
        { type: "html", html: '<div class="fl__tnote" style="background:var(--lh-teal-bg)"><b>Research summary: cost is the biggest barrier.</b> A London School of Economics study for the charity StreetGames looked at five of the most deprived areas of England and Wales (in East Ham, Sheffield, Chester, Bristol and Merthyr Tydfil). Researchers interviewed young people aged 14\u201325, parents, teachers, youth workers and councillors. They found that around a third of young people in these areas live in poverty, and that:<ul style="margin:.4rem 0 0 1.1rem;padding:0"><li><b>Cost</b> (gym and club fees, adult prices after 18) is the biggest barrier.</li><li><b>Poor area conditions</b> and badly maintained parks matter, and <b>fear</b> stops parents letting children use them.</li><li>Young people like sport but want more <b>informal</b> sport; free youth clubs are important.</li><li>Boys look up to sporting role models, while girls can worry about image and appearance.</li><li><b>Leaving school is a \u201ccliff edge\u201d</b> for sport.</li><li>Recommendation: schools should open their facilities in the evenings and at weekends.</li></ul></div>' },
        { id: "d1", label: "a)", type: "match", termCol: "Barrier", defCol: "How Doorstep Sport tackles it (choose one)", noExample: true, prompt: "Match each barrier to the Doorstep Sport solution from the video.", links: [{ label: "Video: What is Doorstep Sport? (StreetGames)", url: "https://www.youtube.com/watch?v=zeMba_1rQOM" }],
          items: [{ t: "Gym and club fees are too expensive", d: "Free or very low-cost sessions (the right price)" },
            { t: "Facilities are far away and transport costs money", d: "Sessions on local estates, parks and school sites, close to home (the right place)" },
            { t: "Parents fear unsupervised parks and streets", d: "Trained, trusted coaches and youth workers run every session (the right people)" },
            { t: "Formal, competitive clubs don\u2019t appeal", d: "Informal, fun and flexible activities that young people choose (the right style)" },
            { t: "Leaving school means losing after-school sport", d: "Sessions in the evenings and at weekends when young people are free (the right time)" }] },
        { id: "d2", label: "b)", type: "cards", prompt: "",
          items: [{ t: "Question 1", c: "#0f766e", q: "What is the link between participation in sport and poverty in the UK?" },
            { t: "Question 2", c: "#2a63b8", q: "What are some of the key reasons why young people in low-income areas of the UK participate less in some sports than those in higher-income areas?" },
            { t: "Question 3", c: "#c2410c", q: "What might be some barriers to participation in tourism for those from low-income households?" }] },
        { type: "heading", text: "Activity 2: Participation in tourism and place of residence", note: "Examine the choropleth map of tourist departures per 1,000 people, then answer the questions." },
        { type: "html", html: '<img src="/images/flip/lt03-tourist-departures.jpg" alt="Choropleth world map of international tourist departures per 1,000 people, 2017" style="width:100%;max-width:560px;height:auto;display:block;border:1px solid var(--lh-border);border-radius:8px"><p class="fl__note">Source: World Bank via Our World in Data (CC BY), 2017. Explore it yourself at ourworldindata.org.</p>' },
        { id: "m1", label: "", type: "questions", prompt: "", rows: ["Describe the pattern. Which parts of the world have the highest number of tourist departures, and which have the least?", "What might be some reasons for this pattern? How does place of residence affect participation in tourism?", "How does this link with what we studied earlier in the course about economic development, affluence and leisure?"] },
        { type: "html", html: '<div class="fl__tnote"><b>How does place of residence affect participation in sport and tourism?</b><ul style="margin:.3rem 0 0 1.1rem;padding:0"><li><b>Availability of facilities</b>, e.g. golf courses or tennis courts</li><li><b>Accessibility</b>, e.g. road links, airports and ports</li><li><b>Political factors</b>, e.g. the power of your passport, or government policy on sport and leisure</li><li><b>Environmental factors</b>, e.g. weather and relief (think of skiing, mountain climbing and beach holidays)</li></ul></div>' },
        { type: "heading", text: "Activity 3: Place of residence and restrictions on tourism", note: "Explore the Passport Index website, then answer the questions." },
        { type: "linkcard", url: "https://www.passportindex.org/", icon: "\ud83d\udec2", title: "Passport Index", sub: "Compare how many countries each passport can visit without a visa" },
        { id: "p1", label: "", type: "cards", prompt: "",
          items: [{ t: "1", icon: "\ud83c\udf0d", c: "#0f766e", q: "Which countries have the greatest and least freedom of movement?" },
            { t: "2", icon: "\ud83d\uddfa\ufe0f", c: "#2a63b8", q: "What patterns can you identify by continent or by political unions and groups?" },
            { t: "3", icon: "\ud83d\udcaa", c: "#6b2fa3", q: "Why do you think some countries\u2019 passports are more \u201cpowerful\u201d than others?" },
            { t: "4", icon: "\ud83d\udec2", c: "#c2410c", q: "Where does your passport sit in the ranking? Has this affected your decisions?" }] },
        { type: "heading", text: "Activity 4: How does gender influence participation in sport?", note: "Study the key facts from the European Union report, then answer the questions." },
        { type: "html", html: "<svg viewBox=\"0 0 720 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Gender differences in sport, European Union\" style=\"width:100%;height:auto;display:block;background:#fff\"><g font-family=\"Inter,Arial,sans-serif\" font-size=\"11\"><text x=\"360\" y=\"16\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"12.5\">Gender differences in sport, European Union</text><line x1=\"48\" y1=\"244.0\" x2=\"708\" y2=\"244.0\" stroke=\"#333\"/><text x=\"43\" y=\"248.0\" text-anchor=\"end\" fill=\"#444\">0</text><line x1=\"48\" y1=\"193.0\" x2=\"708\" y2=\"193.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"197.0\" text-anchor=\"end\" fill=\"#444\">20</text><line x1=\"48\" y1=\"142.0\" x2=\"708\" y2=\"142.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"146.0\" text-anchor=\"end\" fill=\"#444\">40</text><line x1=\"48\" y1=\"91.0\" x2=\"708\" y2=\"91.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"95.0\" text-anchor=\"end\" fill=\"#444\">60</text><line x1=\"48\" y1=\"40.0\" x2=\"708\" y2=\"40.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"44.0\" text-anchor=\"end\" fill=\"#444\">80</text><text x=\"95.1\" y=\"258\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">Weekly sport</text><rect x=\"57.4\" y=\"129.2\" width=\"35.7\" height=\"114.8\" fill=\"#2a63b8\"/><text x=\"75.3\" y=\"126.2\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">45</text><rect x=\"95.1\" y=\"149.7\" width=\"35.7\" height=\"94.3\" fill=\"#c2410c\"/><text x=\"113.0\" y=\"146.7\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">37</text><text x=\"189.4\" y=\"258\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">Weekly (15\u201324)</text><rect x=\"151.7\" y=\"52.8\" width=\"35.7\" height=\"191.2\" fill=\"#2a63b8\"/><text x=\"169.6\" y=\"49.8\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">75</text><rect x=\"189.4\" y=\"103.8\" width=\"35.7\" height=\"140.2\" fill=\"#c2410c\"/><text x=\"207.3\" y=\"100.8\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">55</text><text x=\"283.7\" y=\"258\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">5+ a week (15\u201324)</text><rect x=\"246.0\" y=\"205.8\" width=\"35.7\" height=\"38.2\" fill=\"#2a63b8\"/><text x=\"263.9\" y=\"202.8\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">15</text><rect x=\"283.7\" y=\"223.6\" width=\"35.7\" height=\"20.4\" fill=\"#c2410c\"/><text x=\"301.6\" y=\"220.6\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">8</text><text x=\"378.0\" y=\"258\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">Club members</text><rect x=\"340.3\" y=\"203.2\" width=\"35.7\" height=\"40.8\" fill=\"#2a63b8\"/><text x=\"358.1\" y=\"200.2\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">16</text><rect x=\"378.0\" y=\"223.6\" width=\"35.7\" height=\"20.4\" fill=\"#c2410c\"/><text x=\"395.9\" y=\"220.6\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">8</text><text x=\"472.3\" y=\"258\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">Work in sport</text><rect x=\"434.6\" y=\"103.8\" width=\"35.7\" height=\"140.2\" fill=\"#2a63b8\"/><text x=\"452.4\" y=\"100.8\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">55</text><rect x=\"472.3\" y=\"129.2\" width=\"35.7\" height=\"114.8\" fill=\"#c2410c\"/><text x=\"490.1\" y=\"126.2\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">45</text><text x=\"566.6\" y=\"258\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">Coaches*</text><rect x=\"528.9\" y=\"159.8\" width=\"35.7\" height=\"84.2\" fill=\"#2a63b8\"/><text x=\"546.7\" y=\"156.8\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">33</text><rect x=\"566.6\" y=\"185.3\" width=\"35.7\" height=\"58.7\" fill=\"#c2410c\"/><text x=\"584.4\" y=\"182.3\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">23</text><text x=\"660.9\" y=\"258\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">Referees*</text><rect x=\"623.1\" y=\"215.9\" width=\"35.7\" height=\"28.1\" fill=\"#2a63b8\"/><text x=\"641.0\" y=\"212.9\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">11</text><rect x=\"660.9\" y=\"228.7\" width=\"35.7\" height=\"15.3\" fill=\"#c2410c\"/><text x=\"678.7\" y=\"225.7\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">6</text><line x1=\"48\" y1=\"40\" x2=\"48\" y2=\"244\" stroke=\"#333\"/><text x=\"12\" y=\"142.0\" transform=\"rotate(-90 12 142.0)\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">%</text><rect x=\"52\" y=\"22\" width=\"11\" height=\"9\" fill=\"#2a63b8\"/><text x=\"67\" y=\"30\" font-size=\"10\">Men</text><rect x=\"101\" y=\"22\" width=\"11\" height=\"9\" fill=\"#c2410c\"/><text x=\"116\" y=\"30\" font-size=\"10\">Women</text><text x=\"6\" y=\"286\" font-size=\"9\" fill=\"#666\">Source: Council of Europe and EU, Gender equality and participation in sport factsheet (2016). *Volunteers.</text></g></svg>" + "<div class=\"fl-eu\"><div class=\"fl-eu__h\"><b>Gender equality and participation in sport</b><span>Key facts from a Council of Europe and European Union factsheet (2016)</span></div><div class=\"fl-wt__stats\"><div><b>45% v 37%</b><span>of men and women exercise or play sport at least once a week</span></div><div><b>2\u00d7</b><span>men are twice as likely to belong to a sport club (16% v 8%)</span></div><div><b>40\u201345%</b><span>of Rio 2016 Olympic and Paralympic athletes were women: close to balance</span></div><div><b>2 of 100</b><span>women in Forbes\u2019 2016 list of the world\u2019s highest-paid athletes</span></div></div><div class=\"fl-eu__grid\"><div><h4>Where and why</h4><ul><li>Men more often play at a sport club or at work; women more often at home or on the way between home, school, work or shops.</li><li>Both want to improve their health (61% of men, 63% of women).</li><li>Men more often play to have fun, be with friends or improve performance; women more often to control weight, improve appearance or counter ageing, reflecting gender stereotypes.</li><li>The gap is biggest at 15\u201324 and narrows with age.</li></ul></div><div><h4>Roles and pay</h4><ul><li>55% of people employed in sport are men.</li><li>Volunteers: men are more often coaches (33% v 23%) and referees (11% v 6%); women more often do admin, support and transport.</li><li>Pay gap: the top-paid male athlete (a footballer) earned US$59.1 million more than the top-paid woman (a tennis player) in 2016.</li><li>A 2015 BBC study found 10 of 35 sports with prize money did not pay men and women equally.</li></ul></div><div><h4>What could help?</h4><ul><li>Awareness campaigns to promote equality</li><li>Tackle negative gender stereotypes</li><li>Targets for women in coaching, leadership and membership</li><li>Find out why girls drop out of sport</li><li>Equal grants, pay and prize money</li></ul></div></div></div>" },
        { id: "g1", label: "", type: "questions", prompt: "", rows: ["Summarise the differences in the ways in which men and women participate in sport in the EU.", "Summarise how the roles occupied by men and women in sport differ.", "How has women\u2019s participation in the Olympics and Paralympics changed in the last 90 years?", "What is the gender pay gap? Give evidence to suggest that the gender pay gap exists in sport."] },
        { type: "heading", text: "Activity 5: Gender inequality in sport", note: "Watch the video clips and take notes." },
        { id: "g2", label: "", type: "cards", prompt: "", links: [{ label: "Video clip 1", url: "https://www.youtube.com/watch?v=PT8GpcHwDoo" }, { label: "Video clip 2", url: "https://www.youtube.com/watch?v=eM7tbn9adUY" }],
          items: [{ t: "A) What is the gender pay gap?", c: "#b42318", q: "Define it and give an example from the videos." }, { t: "B) Why is it such a problem in sport?", c: "#6b2fa3", q: "Think about pay, prize money, sponsorship, media coverage and role models." }] },
        { type: "heading", text: "Activity 6: Women and tourism", note: "Examine the infographic, then answer the exam-style questions." },
        { type: "html", html: "<div class=\"fl-wt\"><div class=\"fl-wt__h\"><b>Women and tourism</b><span>Redrawn from an infographic by Planeterra; check the original for exact wording.</span></div>\n<div class=\"fl-wt__stats\"><div><b>66 million</b><span>women directly employed by travel and tourism worldwide</span></div><div><b>10%</b><span>of all economic activity on the planet is supported by tourism</span></div><div><b>$200 bn</b><span>spent every year by tourists in emerging markets</span></div><div><b>1 in 5</b><span>ministers of tourism worldwide are women</span></div></div>\n<div class=\"fl-wt__cols\"><div><h4>Women do\u2026</h4><div class=\"fl-wt__p\"><svg viewBox=\"0 0 80 80\" width=\"64\" height=\"64\"><circle cx=\"40\" cy=\"40\" r=\"34\" fill=\"#efe6d4\"/><path d=\"M40 40 L40 6 A34 34 0 1 1 11.3 58.2 Z\" fill=\"#2e7d32\"/></svg><div><b style=\"color:#2e7d32\">66%</b><span>of the world\u2019s work</span></div></div><div class=\"fl-wt__p\"><svg viewBox=\"0 0 80 80\" width=\"64\" height=\"64\"><circle cx=\"40\" cy=\"40\" r=\"34\" fill=\"#efe6d4\"/><path d=\"M40 40 L40 6 A34 34 0 0 1 40.0 74.0 Z\" fill=\"#2e7d32\"/></svg><div><b style=\"color:#2e7d32\">50%</b><span>of the world\u2019s food production</span></div></div><div class=\"fl-wt__p\"><svg viewBox=\"0 0 80 80\" width=\"64\" height=\"64\"><circle cx=\"40\" cy=\"40\" r=\"34\" fill=\"#efe6d4\"/><path d=\"M40 40 L40 6 A34 34 0 1 1 29.5 72.3 Z\" fill=\"#2e7d32\"/></svg><div><b style=\"color:#2e7d32\">55%</b><span>of the tourism workforce</span></div></div></div><div><h4>Yet women only\u2026</h4><div class=\"fl-wt__p\"><svg viewBox=\"0 0 80 80\" width=\"64\" height=\"64\"><circle cx=\"40\" cy=\"40\" r=\"34\" fill=\"#efe6d4\"/><path d=\"M40 40 L40 6 A34 34 0 0 1 60.0 12.5 Z\" fill=\"#b42318\"/></svg><div><b style=\"color:#b42318\">10%</b><span>earn 10% of the world\u2019s income</span></div></div><div class=\"fl-wt__p\"><svg viewBox=\"0 0 80 80\" width=\"64\" height=\"64\"><circle cx=\"40\" cy=\"40\" r=\"34\" fill=\"#efe6d4\"/><path d=\"M40 40 L40 6 A34 34 0 0 1 42.1 6.1 Z\" fill=\"#b42318\"/></svg><div><b style=\"color:#b42318\">1%</b><span>own 1% of the world\u2019s property</span></div></div><div class=\"fl-wt__p\"><svg viewBox=\"0 0 80 80\" width=\"64\" height=\"64\"><circle cx=\"40\" cy=\"40\" r=\"34\" fill=\"#efe6d4\"/><path d=\"M40 40 L40 6 A34 34 0 0 1 67.5 20.0 Z\" fill=\"#b42318\"/></svg><div><b style=\"color:#b42318\">15%</b><span>make up 15% of tourism company boards</span></div></div><p class=\"fl__note\" style=\"margin:.3rem 0 0\">and earn 15\u201320% less than men in tourism jobs.</p></div></div></div>" },
        { id: "w1", label: "", type: "questions", prompt: "", rows: ["How many women are directly employed by the travel and tourism industry globally?", "Examine the pie charts and suggest one possible improvement to the way this data is presented.", "Overall, what do you think is the message of the infographic? To what extent is it successful in portraying that message?"] },
        { type: "heading", text: "Activity 7: How does age and life cycle stage affect participation in sport?", note: "Examine the graphs, which show data for Victoria, Australia." },
        { type: "html", html: '<div style="display:grid;gap:.6rem">' + "<svg viewBox=\"0 0 720 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sport participation rate by age, Victoria (Australia), 2016\" style=\"width:100%;height:auto;display:block;background:#fff\"><g font-family=\"Inter,Arial,sans-serif\" font-size=\"11\"><text x=\"360\" y=\"16\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"12.5\">Sport participation rate by age, Victoria (Australia), 2016</text><line x1=\"48\" y1=\"204.0\" x2=\"708\" y2=\"204.0\" stroke=\"#333\"/><text x=\"43\" y=\"208.0\" text-anchor=\"end\" fill=\"#444\">0</text><line x1=\"48\" y1=\"171.2\" x2=\"708\" y2=\"171.2\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"175.2\" text-anchor=\"end\" fill=\"#444\">20</text><line x1=\"48\" y1=\"138.4\" x2=\"708\" y2=\"138.4\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"142.4\" text-anchor=\"end\" fill=\"#444\">40</text><line x1=\"48\" y1=\"105.6\" x2=\"708\" y2=\"105.6\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"109.6\" text-anchor=\"end\" fill=\"#444\">60</text><line x1=\"48\" y1=\"72.8\" x2=\"708\" y2=\"72.8\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"76.8\" text-anchor=\"end\" fill=\"#444\">80</text><line x1=\"48\" y1=\"40.0\" x2=\"708\" y2=\"40.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"44.0\" text-anchor=\"end\" fill=\"#444\">100</text><text x=\"66.3\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">4</text><rect x=\"51.7\" y=\"164.6\" width=\"27.3\" height=\"39.4\" fill=\"#2a3f9e\"/><text x=\"103.0\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">5\u20139</text><rect x=\"88.3\" y=\"102.3\" width=\"27.3\" height=\"101.7\" fill=\"#2a3f9e\"/><text x=\"139.7\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">10\u201314</text><rect x=\"125.0\" y=\"89.2\" width=\"27.3\" height=\"114.8\" fill=\"#2a3f9e\"/><text x=\"176.3\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">15\u201319</text><rect x=\"161.7\" y=\"149.9\" width=\"27.3\" height=\"54.1\" fill=\"#2a3f9e\"/><text x=\"213.0\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">20\u201324</text><rect x=\"198.3\" y=\"177.8\" width=\"27.3\" height=\"26.2\" fill=\"#2a3f9e\"/><text x=\"249.7\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">25\u201329</text><rect x=\"235.0\" y=\"186.0\" width=\"27.3\" height=\"18.0\" fill=\"#2a3f9e\"/><text x=\"286.3\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">30\u201334</text><rect x=\"271.7\" y=\"192.5\" width=\"27.3\" height=\"11.5\" fill=\"#2a3f9e\"/><text x=\"323.0\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">35\u201339</text><rect x=\"308.3\" y=\"194.2\" width=\"27.3\" height=\"9.8\" fill=\"#2a3f9e\"/><text x=\"359.7\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">40\u201344</text><rect x=\"345.0\" y=\"195.8\" width=\"27.3\" height=\"8.2\" fill=\"#2a3f9e\"/><text x=\"396.3\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">45\u201349</text><rect x=\"381.7\" y=\"195.8\" width=\"27.3\" height=\"8.2\" fill=\"#2a3f9e\"/><text x=\"433.0\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">50\u201354</text><rect x=\"418.3\" y=\"195.8\" width=\"27.3\" height=\"8.2\" fill=\"#2a3f9e\"/><text x=\"469.7\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">55\u201359</text><rect x=\"455.0\" y=\"195.8\" width=\"27.3\" height=\"8.2\" fill=\"#2a3f9e\"/><text x=\"506.3\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">60\u201364</text><rect x=\"491.7\" y=\"195.8\" width=\"27.3\" height=\"8.2\" fill=\"#2a3f9e\"/><text x=\"543.0\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">65\u201369</text><rect x=\"528.3\" y=\"194.2\" width=\"27.3\" height=\"9.8\" fill=\"#2a3f9e\"/><text x=\"579.7\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">70\u201374</text><rect x=\"565.0\" y=\"194.2\" width=\"27.3\" height=\"9.8\" fill=\"#2a3f9e\"/><text x=\"616.3\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">75\u201379</text><rect x=\"601.7\" y=\"195.8\" width=\"27.3\" height=\"8.2\" fill=\"#2a3f9e\"/><text x=\"653.0\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">80\u201384</text><rect x=\"638.3\" y=\"197.4\" width=\"27.3\" height=\"6.6\" fill=\"#2a3f9e\"/><text x=\"689.7\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">85+</text><rect x=\"675.0\" y=\"200.7\" width=\"27.3\" height=\"3.3\" fill=\"#2a3f9e\"/><line x1=\"48\" y1=\"40\" x2=\"48\" y2=\"204\" stroke=\"#333\"/><text x=\"12\" y=\"122.0\" transform=\"rotate(-90 12 122.0)\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">% of age group</text><rect x=\"52\" y=\"22\" width=\"11\" height=\"9\" fill=\"#2a3f9e\"/><text x=\"67\" y=\"30\" font-size=\"10\">All people</text><text x=\"6\" y=\"246\" font-size=\"9\" fill=\"#666\">Values read approximately from VicHealth/Sport and Recreation Victoria charts (redrawn).</text></g></svg>" + "<svg viewBox=\"0 0 720 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sport participation rate by age and sex, Victoria (Australia), 2016\" style=\"width:100%;height:auto;display:block;background:#fff\"><g font-family=\"Inter,Arial,sans-serif\" font-size=\"11\"><text x=\"360\" y=\"16\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"12.5\">Sport participation rate by age and sex, Victoria (Australia), 2016</text><line x1=\"48\" y1=\"204.0\" x2=\"708\" y2=\"204.0\" stroke=\"#333\"/><text x=\"43\" y=\"208.0\" text-anchor=\"end\" fill=\"#444\">0</text><line x1=\"48\" y1=\"171.2\" x2=\"708\" y2=\"171.2\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"175.2\" text-anchor=\"end\" fill=\"#444\">20</text><line x1=\"48\" y1=\"138.4\" x2=\"708\" y2=\"138.4\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"142.4\" text-anchor=\"end\" fill=\"#444\">40</text><line x1=\"48\" y1=\"105.6\" x2=\"708\" y2=\"105.6\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"109.6\" text-anchor=\"end\" fill=\"#444\">60</text><line x1=\"48\" y1=\"72.8\" x2=\"708\" y2=\"72.8\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"76.8\" text-anchor=\"end\" fill=\"#444\">80</text><line x1=\"48\" y1=\"40.0\" x2=\"708\" y2=\"40.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"44.0\" text-anchor=\"end\" fill=\"#444\">100</text><text x=\"66.3\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">4</text><rect x=\"51.7\" y=\"182.7\" width=\"12.7\" height=\"21.3\" fill=\"#d93a2b\"/><rect x=\"66.3\" y=\"192.5\" width=\"12.7\" height=\"11.5\" fill=\"#f39a4b\"/><text x=\"103.0\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">5\u20139</text><rect x=\"88.3\" y=\"84.3\" width=\"12.7\" height=\"119.7\" fill=\"#d93a2b\"/><rect x=\"103.0\" y=\"126.9\" width=\"12.7\" height=\"77.1\" fill=\"#f39a4b\"/><text x=\"139.7\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">10\u201314</text><rect x=\"125.0\" y=\"69.5\" width=\"12.7\" height=\"134.5\" fill=\"#d93a2b\"/><rect x=\"139.7\" y=\"115.4\" width=\"12.7\" height=\"88.6\" fill=\"#f39a4b\"/><text x=\"176.3\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">15\u201319</text><rect x=\"161.7\" y=\"135.1\" width=\"12.7\" height=\"68.9\" fill=\"#d93a2b\"/><rect x=\"176.3\" y=\"169.6\" width=\"12.7\" height=\"34.4\" fill=\"#f39a4b\"/><text x=\"213.0\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">20\u201324</text><rect x=\"198.3\" y=\"169.6\" width=\"12.7\" height=\"34.4\" fill=\"#d93a2b\"/><rect x=\"213.0\" y=\"192.5\" width=\"12.7\" height=\"11.5\" fill=\"#f39a4b\"/><text x=\"249.7\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">25\u201329</text><rect x=\"235.0\" y=\"179.4\" width=\"12.7\" height=\"24.6\" fill=\"#d93a2b\"/><rect x=\"249.7\" y=\"195.8\" width=\"12.7\" height=\"8.2\" fill=\"#f39a4b\"/><text x=\"286.3\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">30\u201334</text><rect x=\"271.7\" y=\"189.2\" width=\"12.7\" height=\"14.8\" fill=\"#d93a2b\"/><rect x=\"286.3\" y=\"197.4\" width=\"12.7\" height=\"6.6\" fill=\"#f39a4b\"/><text x=\"323.0\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">35\u201339</text><rect x=\"308.3\" y=\"190.9\" width=\"12.7\" height=\"13.1\" fill=\"#d93a2b\"/><rect x=\"323.0\" y=\"197.4\" width=\"12.7\" height=\"6.6\" fill=\"#f39a4b\"/><text x=\"359.7\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">40\u201344</text><rect x=\"345.0\" y=\"192.5\" width=\"12.7\" height=\"11.5\" fill=\"#d93a2b\"/><rect x=\"359.7\" y=\"197.4\" width=\"12.7\" height=\"6.6\" fill=\"#f39a4b\"/><text x=\"396.3\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">45\u201349</text><rect x=\"381.7\" y=\"192.5\" width=\"12.7\" height=\"11.5\" fill=\"#d93a2b\"/><rect x=\"396.3\" y=\"197.4\" width=\"12.7\" height=\"6.6\" fill=\"#f39a4b\"/><text x=\"433.0\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">50\u201354</text><rect x=\"418.3\" y=\"194.2\" width=\"12.7\" height=\"9.8\" fill=\"#d93a2b\"/><rect x=\"433.0\" y=\"199.1\" width=\"12.7\" height=\"4.9\" fill=\"#f39a4b\"/><text x=\"469.7\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">55\u201359</text><rect x=\"455.0\" y=\"194.2\" width=\"12.7\" height=\"9.8\" fill=\"#d93a2b\"/><rect x=\"469.7\" y=\"199.1\" width=\"12.7\" height=\"4.9\" fill=\"#f39a4b\"/><text x=\"506.3\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">60\u201364</text><rect x=\"491.7\" y=\"194.2\" width=\"12.7\" height=\"9.8\" fill=\"#d93a2b\"/><rect x=\"506.3\" y=\"197.4\" width=\"12.7\" height=\"6.6\" fill=\"#f39a4b\"/><text x=\"543.0\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">65\u201369</text><rect x=\"528.3\" y=\"192.5\" width=\"12.7\" height=\"11.5\" fill=\"#d93a2b\"/><rect x=\"543.0\" y=\"195.8\" width=\"12.7\" height=\"8.2\" fill=\"#f39a4b\"/><text x=\"579.7\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">70\u201374</text><rect x=\"565.0\" y=\"190.9\" width=\"12.7\" height=\"13.1\" fill=\"#d93a2b\"/><rect x=\"579.7\" y=\"195.8\" width=\"12.7\" height=\"8.2\" fill=\"#f39a4b\"/><text x=\"616.3\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">75\u201379</text><rect x=\"601.7\" y=\"192.5\" width=\"12.7\" height=\"11.5\" fill=\"#d93a2b\"/><rect x=\"616.3\" y=\"197.4\" width=\"12.7\" height=\"6.6\" fill=\"#f39a4b\"/><text x=\"653.0\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">80\u201384</text><rect x=\"638.3\" y=\"194.2\" width=\"12.7\" height=\"9.8\" fill=\"#d93a2b\"/><rect x=\"653.0\" y=\"199.1\" width=\"12.7\" height=\"4.9\" fill=\"#f39a4b\"/><text x=\"689.7\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">85+</text><rect x=\"675.0\" y=\"197.4\" width=\"12.7\" height=\"6.6\" fill=\"#d93a2b\"/><rect x=\"689.7\" y=\"202.4\" width=\"12.7\" height=\"1.6\" fill=\"#f39a4b\"/><line x1=\"48\" y1=\"40\" x2=\"48\" y2=\"204\" stroke=\"#333\"/><text x=\"12\" y=\"122.0\" transform=\"rotate(-90 12 122.0)\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">% of age group</text><rect x=\"52\" y=\"22\" width=\"11\" height=\"9\" fill=\"#d93a2b\"/><text x=\"67\" y=\"30\" font-size=\"10\">Male</text><rect x=\"107\" y=\"22\" width=\"11\" height=\"9\" fill=\"#f39a4b\"/><text x=\"122\" y=\"30\" font-size=\"10\">Female</text><text x=\"6\" y=\"246\" font-size=\"9\" fill=\"#666\">Values read approximately (redrawn).</text></g></svg>" + '</div>' },
        { id: "a1", label: "", type: "questions", prompt: "", rows: ["Which age groups participate the most and the least in sport?", "What factors do you think explain the fall in sports participation with age?"] },
        { type: "heading", text: "Activity 8: How does age and life cycle stage affect participation in tourism?", note: "Read the two articles, then write a paragraph to answer the question." },
        { id: "a2", label: "", type: "text", words: [120, 220], prompt: "How does age and life cycle stage affect participation in tourism?", links: [{ label: "Article: Travel trends by age (Hotelmize)", url: "https://www.hotelmize.com/blog/travel-trends-by-age-demographic-age-as-the-key-factor-in-tourism/" }, { label: "Article: China\u2019s tourism industry rides the silver wave (Sixth Tone)", url: "https://www.sixthtone.com/news/1000951/chinas-tourism-industry-rides-the-silver-wave-" }] },
        { type: "heading", text: "Activity 9: Personality and participation in sport and tourism", note: "Watch the video clip, then study Plog\u2019s model of tourist behaviour (1974)." },
        { type: "html", html: "<svg viewBox=\"0 0 720 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Plog\u2019s model: a bell curve of tourist personality types from psychocentric (dependable) to allocentric (venturer)\" style=\"width:100%;height:auto;display:block;background:#fff\"><g font-family=\"Inter,Arial,sans-serif\" font-size=\"12\"><path d=\"M60 230 L60.0 229.7 L66.0 229.6 L72.0 229.5 L78.0 229.3 L84.0 229.1 L90.0 228.9 L96.0 228.7 L102.0 228.3 L108.0 227.9 L114.0 227.5 L120.0 226.9 L126.0 226.2 L132.0 225.4 L138.0 224.5 L144.0 223.3 L150.0 222.0 L156.0 220.6 L162.0 218.8 L168.0 216.9 L174.0 214.6 L180.0 212.1 L186.0 209.2 L192.0 206.1 L198.0 202.5 L204.0 198.6 L210.0 194.4 L216.0 189.7 L222.0 184.7 L228.0 179.3 L234.0 173.6 L240.0 167.5 L246.0 161.1 L252.0 154.4 L258.0 147.5 L264.0 140.4 L270.0 133.1 L276.0 125.9 L282.0 118.6 L288.0 111.4 L294.0 104.4 L300.0 97.6 L306.0 91.2 L312.0 85.1 L318.0 79.6 L324.0 74.6 L330.0 70.3 L336.0 66.7 L342.0 63.8 L348.0 61.7 L354.0 60.4 L360.0 60.0 L366.0 60.4 L372.0 61.7 L378.0 63.8 L384.0 66.7 L390.0 70.3 L396.0 74.6 L402.0 79.6 L408.0 85.1 L414.0 91.2 L420.0 97.6 L426.0 104.4 L432.0 111.4 L438.0 118.6 L444.0 125.9 L450.0 133.1 L456.0 140.4 L462.0 147.5 L468.0 154.4 L474.0 161.1 L480.0 167.5 L486.0 173.6 L492.0 179.3 L498.0 184.7 L504.0 189.7 L510.0 194.4 L516.0 198.6 L522.0 202.5 L528.0 206.1 L534.0 209.2 L540.0 212.1 L546.0 214.6 L552.0 216.9 L558.0 218.8 L564.0 220.6 L570.0 222.0 L576.0 223.3 L582.0 224.5 L588.0 225.4 L594.0 226.2 L600.0 226.9 L606.0 227.5 L612.0 227.9 L618.0 228.3 L624.0 228.7 L630.0 228.9 L636.0 229.1 L642.0 229.3 L648.0 229.5 L654.0 229.6 L660.0 229.7 Z\" fill=\"#eef4fb\"/><path d=\"M60.0 229.7 L66.0 229.6 L72.0 229.5 L78.0 229.3 L84.0 229.1 L90.0 228.9 L96.0 228.7 L102.0 228.3 L108.0 227.9 L114.0 227.5 L120.0 226.9 L126.0 226.2 L132.0 225.4 L138.0 224.5 L144.0 223.3 L150.0 222.0 L156.0 220.6 L162.0 218.8 L168.0 216.9 L174.0 214.6 L180.0 212.1 L186.0 209.2 L192.0 206.1 L198.0 202.5 L204.0 198.6 L210.0 194.4 L216.0 189.7 L222.0 184.7 L228.0 179.3 L234.0 173.6 L240.0 167.5 L246.0 161.1 L252.0 154.4 L258.0 147.5 L264.0 140.4 L270.0 133.1 L276.0 125.9 L282.0 118.6 L288.0 111.4 L294.0 104.4 L300.0 97.6 L306.0 91.2 L312.0 85.1 L318.0 79.6 L324.0 74.6 L330.0 70.3 L336.0 66.7 L342.0 63.8 L348.0 61.7 L354.0 60.4 L360.0 60.0 L366.0 60.4 L372.0 61.7 L378.0 63.8 L384.0 66.7 L390.0 70.3 L396.0 74.6 L402.0 79.6 L408.0 85.1 L414.0 91.2 L420.0 97.6 L426.0 104.4 L432.0 111.4 L438.0 118.6 L444.0 125.9 L450.0 133.1 L456.0 140.4 L462.0 147.5 L468.0 154.4 L474.0 161.1 L480.0 167.5 L486.0 173.6 L492.0 179.3 L498.0 184.7 L504.0 189.7 L510.0 194.4 L516.0 198.6 L522.0 202.5 L528.0 206.1 L534.0 209.2 L540.0 212.1 L546.0 214.6 L552.0 216.9 L558.0 218.8 L564.0 220.6 L570.0 222.0 L576.0 223.3 L582.0 224.5 L588.0 225.4 L594.0 226.2 L600.0 226.9 L606.0 227.5 L612.0 227.9 L618.0 228.3 L624.0 228.7 L630.0 228.9 L636.0 229.1 L642.0 229.3 L648.0 229.5 L654.0 229.6 L660.0 229.7\" fill=\"none\" stroke=\"#13284b\" stroke-width=\"2.5\"/><rect x=\"60\" y=\"234\" width=\"110\" height=\"8\" fill=\"#c2410c\"/><text x=\"115\" y=\"260\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#c2410c\">Psychocentric</text><text x=\"115\" y=\"275\" text-anchor=\"middle\" fill=\"#555\" font-size=\"11\">(dependable)</text><rect x=\"170\" y=\"234\" width=\"120\" height=\"8\" fill=\"#e9a23b\"/><text x=\"230\" y=\"260\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#e9a23b\">Near-psychocentric</text><text x=\"230\" y=\"275\" text-anchor=\"middle\" fill=\"#555\" font-size=\"11\"></text><line x1=\"170\" y1=\"60\" x2=\"170\" y2=\"230\" stroke=\"#bbb\" stroke-dasharray=\"4 4\"/><rect x=\"290\" y=\"234\" width=\"140\" height=\"8\" fill=\"#5e8f3c\"/><text x=\"360\" y=\"260\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#5e8f3c\">Mid-centric</text><text x=\"360\" y=\"275\" text-anchor=\"middle\" fill=\"#555\" font-size=\"11\"></text><line x1=\"290\" y1=\"60\" x2=\"290\" y2=\"230\" stroke=\"#bbb\" stroke-dasharray=\"4 4\"/><rect x=\"430\" y=\"234\" width=\"120\" height=\"8\" fill=\"#2a9d8f\"/><text x=\"490\" y=\"260\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#2a9d8f\">Near-allocentric</text><text x=\"490\" y=\"275\" text-anchor=\"middle\" fill=\"#555\" font-size=\"11\"></text><line x1=\"430\" y1=\"60\" x2=\"430\" y2=\"230\" stroke=\"#bbb\" stroke-dasharray=\"4 4\"/><rect x=\"550\" y=\"234\" width=\"110\" height=\"8\" fill=\"#2a63b8\"/><text x=\"605\" y=\"260\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#2a63b8\">Allocentric</text><text x=\"605\" y=\"275\" text-anchor=\"middle\" fill=\"#555\" font-size=\"11\">(venturer)</text><line x1=\"550\" y1=\"60\" x2=\"550\" y2=\"230\" stroke=\"#bbb\" stroke-dasharray=\"4 4\"/><text x=\"80\" y=\"40\" fill=\"#c2410c\" font-size=\"11.5\">Familiar, safe, organised; package holidays</text><text x=\"640\" y=\"40\" text-anchor=\"end\" fill=\"#2a63b8\" font-size=\"11.5\">New, adventurous, independent; off the beaten track</text><text x=\"360\" y=\"292\" text-anchor=\"middle\" fill=\"#666\" font-size=\"10\">Most people are mid-centric. Adapted from Plog (1974, 2001); redrawn.</text></g></svg>" },
        { id: "pl1", label: "", type: "questions", prompt: "", links: [{ label: "Video: Plog\u2019s model made simple", url: "https://www.youtube.com/watch?v=EoEVXS8K5w4" }], rows: ["Summarise Plog\u2019s theory.", "What are allocentric and psychocentric tourists?", "Which personality type do you think you are, and why?"] },
        { type: "heading", text: "Activity 10: Applying Plog", note: "For each holiday or leisure activity, decide which personality type from Plog\u2019s theory is most likely to take part." },
        { id: "pl2", label: "", type: "sort", cardCol: "Holiday or leisure activity", binCol: "Plog personality type", prompt: "", bins: ["Psychocentric", "Mid-centric", "Allocentric"],
          cards: [{ t: "Walking a narrow cliff-edge path high above a gorge", a: ["Allocentric"] },
            { t: "Shopping in a resort street full of familiar coffee chains and fast-food brands", a: ["Psychocentric"] },
            { t: "Crossing a rope bridge to a remote mountain summit", a: ["Allocentric"] },
            { t: "A family day on a busy, well-known beach", a: ["Psychocentric", "Mid-centric"] },
            { t: "A guided trek across remote desert hills", a: ["Allocentric", "Mid-centric"] },
            { t: "A giant swing or bungee jump over a valley", a: ["Allocentric"] },
            { t: "A family nature walk across stepping stones in a forest park", a: ["Mid-centric"] },
            { t: "A large cruise ship tour of the Norwegian fjords", a: ["Psychocentric", "Mid-centric"] },
            { t: "Mountain biking down a rough mountain trail", a: ["Allocentric", "Mid-centric"] }] },
        { id: "pl3", label: "", type: "text", prompt: "Choose two of the activities and justify your choice of personality type for each." },
        { type: "banner", src: "/images/flip/banner-reflect.jpg", alt: "Reflect" },
        { type: "heading", text: "Consolidate: past paper practice", note: "a) Open IB-Style Questions below and answer the past paper question on affluence and participation (10 marks); it is marked instantly. b) Then do the low-stakes quiz in Test My Knowledge." },
        { id: "r1", label: "", type: "text", prompt: "Exit ticket: which of the five factors do you think has the biggest effect on participation in sport, and which on tourism? Explain briefly." }
      ]
    }],
    LT02: [{
      title: "What is the relationship between leisure and income?",
      overview: {
        heading: "What is the link between economic development and leisure time?",
        intention: "To describe and explain human patterns and processes.",
        syllabus: ["The link between economic development and participation in leisure activities.", "Detailed examples to illustrate recent changes in participation for two or more societies at contrasting levels of development."],
        success: ["Describe the correlation between increased income and leisure time.", "Explain the barriers to participation in leisure in LICs and for low-income groups within HICs and MICs.", "Describe and explain the changes in participation in leisure in the USA and China."] },
      intro: "Complete this before the lesson. Use the video, the graph and the reading to answer the questions.",
      parts: [
        { type: "heading", text: "a) Income and leisure: the trade-off", note: "Examine the graph and watch the intro clip, then answer the questions." },
        { type: "html", html: "<svg viewBox=\"0 0 380 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Indifference curves showing the trade-off between income and leisure\" style=\"width:100%;height:auto;display:block;background:#fff\"><g font-family=\"Inter,Arial,sans-serif\" font-size=\"11\"><line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"225\" stroke=\"#333\" stroke-width=\"1.5\"/><line x1=\"50\" y1=\"225\" x2=\"360\" y2=\"225\" stroke=\"#333\" stroke-width=\"1.5\"/><text x=\"20\" y=\"125\" transform=\"rotate(-90 20 125)\" text-anchor=\"middle\">Income</text><text x=\"205\" y=\"248\" text-anchor=\"middle\">Leisure</text><path d=\"M90.0 26.9 L94.0 39.3 L98.0 50.0 L102.0 59.4 L106.0 67.6 L110.0 75.0 L114.0 81.6 L118.0 87.5 L122.0 92.9 L126.0 97.7 L130.0 102.2 L134.0 106.2 L138.0 110.0 L142.0 113.5 L146.0 116.7 L150.0 119.6 L154.0 122.4 L158.0 125.0 L162.0 127.4 L166.0 129.7 L170.0 131.8 L174.0 133.8 L178.0 135.7 L182.0 137.5 L186.0 139.2 L190.0 140.8 L194.0 142.3 L198.0 143.8 L202.0 145.1 L206.0 146.4 L210.0 147.7 L214.0 148.9 L218.0 150.0 L222.0 151.1 L226.0 152.1 L230.0 153.1 L234.0 154.1 L238.0 155.0 L242.0 155.9 L246.0 156.7 L250.0 157.5 L254.0 158.3 L258.0 159.1 L262.0 159.8 L266.0 160.5 L270.0 161.2 L274.0 161.9 L278.0 162.5 L282.0 163.1 L286.0 163.7 L290.0 164.3 L294.0 164.8 L298.0 165.4 L302.0 165.9 L306.0 166.4 L310.0 166.9 L314.0 167.4 L318.0 167.9 L322.0 168.3 L326.0 168.8 L330.0 169.2 L334.0 169.6 L338.0 170.0 L342.0 170.4 L346.0 170.8\" fill=\"none\" stroke=\"#2a63b8\" stroke-width=\"2\"/><text x=\"356\" y=\"166.2\" font-size=\"10\" fill=\"#2a63b8\" text-anchor=\"end\">IC1</text><path d=\"M102.0 27.4 L106.0 35.6 L110.0 43.0 L114.0 49.6 L118.0 55.5 L122.0 60.9 L126.0 65.7 L130.0 70.2 L134.0 74.2 L138.0 78.0 L142.0 81.5 L146.0 84.7 L150.0 87.6 L154.0 90.4 L158.0 93.0 L162.0 95.4 L166.0 97.7 L170.0 99.8 L174.0 101.8 L178.0 103.7 L182.0 105.5 L186.0 107.2 L190.0 108.8 L194.0 110.3 L198.0 111.8 L202.0 113.1 L206.0 114.4 L210.0 115.7 L214.0 116.9 L218.0 118.0 L222.0 119.1 L226.0 120.1 L230.0 121.1 L234.0 122.1 L238.0 123.0 L242.0 123.9 L246.0 124.7 L250.0 125.5 L254.0 126.3 L258.0 127.1 L262.0 127.8 L266.0 128.5 L270.0 129.2 L274.0 129.9 L278.0 130.5 L282.0 131.1 L286.0 131.7 L290.0 132.3 L294.0 132.8 L298.0 133.4 L302.0 133.9 L306.0 134.4 L310.0 134.9 L314.0 135.4 L318.0 135.9 L322.0 136.3 L326.0 136.8 L330.0 137.2 L334.0 137.6 L338.0 138.0 L342.0 138.4 L346.0 138.8\" fill=\"none\" stroke=\"#2a63b8\" stroke-width=\"2\"/><text x=\"356\" y=\"134.2\" font-size=\"10\" fill=\"#2a63b8\" text-anchor=\"end\">IC2</text><path d=\"M122.0 28.9 L126.0 33.7 L130.0 38.2 L134.0 42.2 L138.0 46.0 L142.0 49.5 L146.0 52.7 L150.0 55.6 L154.0 58.4 L158.0 61.0 L162.0 63.4 L166.0 65.7 L170.0 67.8 L174.0 69.8 L178.0 71.7 L182.0 73.5 L186.0 75.2 L190.0 76.8 L194.0 78.3 L198.0 79.8 L202.0 81.1 L206.0 82.4 L210.0 83.7 L214.0 84.9 L218.0 86.0 L222.0 87.1 L226.0 88.1 L230.0 89.1 L234.0 90.1 L238.0 91.0 L242.0 91.9 L246.0 92.7 L250.0 93.5 L254.0 94.3 L258.0 95.1 L262.0 95.8 L266.0 96.5 L270.0 97.2 L274.0 97.9 L278.0 98.5 L282.0 99.1 L286.0 99.7 L290.0 100.3 L294.0 100.8 L298.0 101.4 L302.0 101.9 L306.0 102.4 L310.0 102.9 L314.0 103.4 L318.0 103.9 L322.0 104.3 L326.0 104.8 L330.0 105.2 L334.0 105.6 L338.0 106.0 L342.0 106.4 L346.0 106.8\" fill=\"none\" stroke=\"#2a63b8\" stroke-width=\"2\"/><text x=\"356\" y=\"102.2\" font-size=\"10\" fill=\"#2a63b8\" text-anchor=\"end\">IC3</text><path d=\"M154.0 26.4 L158.0 29.0 L162.0 31.4 L166.0 33.7 L170.0 35.8 L174.0 37.8 L178.0 39.7 L182.0 41.5 L186.0 43.2 L190.0 44.8 L194.0 46.3 L198.0 47.8 L202.0 49.1 L206.0 50.4 L210.0 51.7 L214.0 52.9 L218.0 54.0 L222.0 55.1 L226.0 56.1 L230.0 57.1 L234.0 58.1 L238.0 59.0 L242.0 59.9 L246.0 60.7 L250.0 61.5 L254.0 62.3 L258.0 63.1 L262.0 63.8 L266.0 64.5 L270.0 65.2 L274.0 65.9 L278.0 66.5 L282.0 67.1 L286.0 67.7 L290.0 68.3 L294.0 68.8 L298.0 69.4 L302.0 69.9 L306.0 70.4 L310.0 70.9 L314.0 71.4 L318.0 71.9 L322.0 72.3 L326.0 72.8 L330.0 73.2 L334.0 73.6 L338.0 74.0 L342.0 74.4 L346.0 74.8\" fill=\"none\" stroke=\"#2a63b8\" stroke-width=\"2\"/><text x=\"356\" y=\"70.2\" font-size=\"10\" fill=\"#2a63b8\" text-anchor=\"end\">IC4</text><circle cx=\"110.0\" cy=\"43.0\" r=\"4\" fill=\"#13324a\"/><text x=\"114.0\" y=\"37.0\" font-weight=\"700\">A</text><circle cx=\"190.0\" cy=\"108.8\" r=\"4\" fill=\"#13324a\"/><text x=\"194.0\" y=\"102.8\" font-weight=\"700\">B</text><path d=\"M110.0 43.0 V108.8 H190.0\" fill=\"none\" stroke=\"#555\" stroke-dasharray=\"4 3\"/><text x=\"90.0\" y=\"79.9\" font-size=\"10\">\u0394M</text><text x=\"144.0\" y=\"122.8\" font-size=\"10\">\u0394L</text></g></svg>" + '<p class="fl__note">An economist\u2019s diagram (redrawn). Each curve shows combinations of income and leisure a person is equally happy with. Moving from A to B, they give up some income (\u0394M) to gain more leisure (\u0394L).</p>' },
        { id: "a", label: "", type: "questions", letters: false, prompt: "", links: [{ label: "Video: income and leisure", url: "https://www.youtube.com/watch?v=2-SQ-WFrIJU" }],
          rows: ["What does the graph show?", "What could be some possible reasons for this trend?"] },
        { type: "heading", text: "b) Does more wealth = more leisure time?", note: "Not necessarily. The text below explains why the relationship between leisure and development is complex. Use it to add to your notes." },
        { type: "html", html: '<div class="fl__tnote" style="background:var(--lh-teal-bg)"><p style="margin:0 0 .5rem">With increased development and wealth within a country, it is generally expected that leisure time will change. To say that development brings more leisure time is disputed. Fast-paced societies with high-paying jobs often place a higher demand on employees\u2019 time. In the modern era, Western societies view time as the new money. In short, time has become scarce.</p><p style="margin:0">Leisure is also a social and cultural construct: one group\u2019s interpretation of leisure is different from another\u2019s. Some countries use leisure time for rest and relaxation, with a stronger emphasis on family, while others see it as activities, sport and going to organised events. The latter costs money and needs facilities, which are found more in developed countries. As a consequence, leisure may become more varied in developed countries: there is more on offer and more choice, and leisure is a growing industry. In developing countries these opportunities are less available, so leisure remains more restricted.</p></div>' },
        { id: "b", label: "", type: "text", words: [100, 200], prompt: "Does more wealth = more leisure time? Use the text to answer." },
        { type: "reveal", code: "leisure", label: "Model answer", html: '<p>Not always. As a country develops and incomes rise, people generally gain <b>more choice</b> of leisure, because there are more facilities (gyms, cinemas, theme parks), more disposable income and often paid holidays. However, more wealth does not automatically mean more leisure <b>time</b>.</p><p>In high-income, fast-paced societies, well-paid jobs often demand long hours, so time becomes scarce: in the USA, high-wage workers have gained less free time than low-wage workers since the 1960s (the \u201cfree-time paradox\u201d). In lower-income countries, people may have time but lack the money and facilities for organised leisure, so leisure is more restricted and home- or family-based.</p><p>Leisure is also cultural: some societies value rest and family time, others value organised activities and sport. So wealth changes the <b>type</b> and <b>variety</b> of leisure more than the <b>amount</b> of leisure time.</p>' },
        { type: "linkcard", url: "https://quizlet.com/br/365094824/ib-geography-leisure-sport-and-tourism-flash-cards/", icon: "Q", title: "IB Geography: Leisure, Sport and Tourism", sub: "Quizlet: flashcards, learn and test" }
      ]
    }, {
      kind: "lesson", open: true, inline: true, afterCard: 2,
      title: "Leisure and development: China and the USA",
      intro: "",
      parts: [
        { type: "banner", src: "/images/flip/banner-connect.jpg", alt: "Connect" },
        { type: "heading", text: "Activity 1: What are the barriers to leisure time in LICs?", note: "Read the barriers below. Which apply to people in LICs, which to low-income groups within MICs and HICs, and which to both?" },
        { id: "b1", label: "", type: "sort", cardCol: "Barrier", binCol: "Who does it affect most?", prompt: "", bins: ["LICs", "Low-income groups in MICs/HICs", "Both"],
          cards: [{ t: "Governments lack funds to build leisure infrastructure such as parks, stadiums and museums", a: ["LICs"] },
            { t: "Fewer leisure businesses and less choice, so leisure stays restricted", a: ["LICs"] },
            { t: "Cannot afford TVs, laptops or the internet for home leisure", a: ["Both"] },
            { t: "Expensive sports such as golf, skiing or horse riding are unaffordable", a: ["Low-income groups in MICs/HICs", "Both"] },
            { t: "Long working hours: more than one in five of the world\u2019s workers work over 48 hours a week", a: ["Both", "LICs"] },
            { t: "Migrant factory workers in NICs work long hours, share accommodation and send money home", a: ["Low-income groups in MICs/HICs"] },
            { t: "No car: car-owning households are about twice as likely to take part in sport and recreation", a: ["Low-income groups in MICs/HICs"] }] },
        { id: "b2", label: "", type: "text", prompt: "Which barrier do you think matters most, and why?" },
        { type: "banner", src: "/images/flip/banner-demonstrate.jpg", alt: "Demonstrate" },
        { type: "heading", text: "Activity 2: Changing leisure in China (UMIC) and the USA (HIC)", note: "Work in pairs: one of you researches China and the other the USA, then share and complete the whole table together. Use the infographics, videos and articles below." },
        { type: "html", html: '<div class="fl-ig"><a href="/geography/resources/flip/lt02-china-leisure-infographic.pdf" target="_blank" rel="noopener"><img src="/images/flip/lt02-china-infographic.jpg" alt="One-page infographic: China, changing leisure and tourism"><span>China infographic (PDF, prints on one side) \u2197</span></a><a href="/geography/resources/flip/lt02-usa-leisure-infographic.pdf" target="_blank" rel="noopener"><img src="/images/flip/lt02-usa-infographic.jpg" alt="One-page infographic: USA, changing leisure patterns"><span>USA infographic (PDF, prints on one side) \u2197</span></a></div>' },
        { id: "v1", label: "China", type: "text", prompt: "Notes from the China videos and article", links: [
          { label: "Video: How do people relax and have fun in China?", url: "https://www.youtube.com/watch?v=0-8tqItWNcQ" },
          { label: "Video: Elder Chinese spending on leisure (FT)", url: "https://www.youtube.com/watch?v=8Mozu3lX3Sg" },
          { label: "Video: Extracurricular activities and children\u2019s daily life in China", url: "https://www.youtube.com/watch?v=UFkwe0f8vqk" },
          { label: "Article: Chinese tourism, market trends (China Briefing)", url: "https://www.china-briefing.com/news/chinese-tourism-2022-trends-and-opportunities/" }] },
        { id: "v2", label: "USA", type: "text", prompt: "Notes from the USA videos and article", links: [
          { label: "Video: What do teens in the USA do in their spare time?", url: "https://www.youtube.com/watch?v=TuPnPvMQ1YU" },
          { label: "Video: Seniors push athleticism to the limit", url: "https://www.youtube.com/watch?v=AoTg_poY5Vs" },
          { label: "Article: USA and leisure (GeographyCaseStudy.com)", url: "https://geographycasestudy.com/usa-sports-and-tourism/" },
          { label: "Extension reading: The free-time paradox in America (The Atlantic)", url: "https://www.theatlantic.com/business/archive/2016/09/the-free-time-paradox-in-america/499826/" }] },
        { id: "t1", label: "", type: "table", prompt: "Paired activity: complete the graphic organiser.", cols: ["", "China", "USA"],
          rows: ["Key statistics on trends in leisure, sport and tourism in recent years", "How do people spend their leisure time?", "Trends in tourism (domestic and international)", "Significant trends in participation in sport"] },
        { type: "heading", text: "Activity 3: How have patterns of leisure time changed in the USA?", note: "Examine each graph and write a statement explaining what it shows about changing leisure in the USA." },
        { type: "html", html: '<div class="fl-g2">' + "<svg viewBox=\"0 0 380 220\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"USA: average weekly leisure over a lifetime\" style=\"width:100%;height:auto;display:block;background:#fff\"><g font-family=\"Inter,Arial,sans-serif\" font-size=\"11\"><text x=\"190\" y=\"16\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"12.5\">USA: average weekly leisure over a lifetime</text><line x1=\"48\" y1=\"174.0\" x2=\"368\" y2=\"174.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"178.0\" text-anchor=\"end\" fill=\"#444\">39</text><line x1=\"48\" y1=\"145.2\" x2=\"368\" y2=\"145.2\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"149.2\" text-anchor=\"end\" fill=\"#444\">40</text><line x1=\"48\" y1=\"116.4\" x2=\"368\" y2=\"116.4\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"120.4\" text-anchor=\"end\" fill=\"#444\">41</text><line x1=\"48\" y1=\"87.6\" x2=\"368\" y2=\"87.6\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"91.6\" text-anchor=\"end\" fill=\"#444\">42</text><line x1=\"48\" y1=\"58.8\" x2=\"368\" y2=\"58.8\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"62.8\" text-anchor=\"end\" fill=\"#444\">43</text><line x1=\"48\" y1=\"30.0\" x2=\"368\" y2=\"30.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"34.0\" text-anchor=\"end\" fill=\"#444\">44</text><text x=\"48.0\" y=\"188\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">1890</text><text x=\"106.2\" y=\"188\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">1910</text><text x=\"164.4\" y=\"188\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">1930</text><text x=\"222.5\" y=\"188\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">1950</text><text x=\"280.7\" y=\"188\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">1970</text><text x=\"338.9\" y=\"188\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">1990</text><line x1=\"48\" y1=\"174\" x2=\"368\" y2=\"174\" stroke=\"#333\"/><line x1=\"48\" y1=\"30\" x2=\"48\" y2=\"174\" stroke=\"#333\"/><text x=\"12\" y=\"102.0\" transform=\"rotate(-90 12 102.0)\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">Hours per week</text><path d=\"M48.0 165.4 L77.1 125.0 L106.2 99.1 L135.3 73.2 L164.4 73.2 L193.5 81.8 L222.5 73.2 L251.6 79.0 L280.7 87.6 L309.8 70.3 L338.9 61.7 L368.0 55.9\" fill=\"none\" stroke=\"#c2410c\" stroke-width=\"2.4\"/><circle cx=\"48.0\" cy=\"165.4\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"77.1\" cy=\"125.0\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"106.2\" cy=\"99.1\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"135.3\" cy=\"73.2\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"164.4\" cy=\"73.2\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"193.5\" cy=\"81.8\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"222.5\" cy=\"73.2\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"251.6\" cy=\"79.0\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"280.7\" cy=\"87.6\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"309.8\" cy=\"70.3\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"338.9\" cy=\"61.7\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"368.0\" cy=\"55.9\" r=\"2.4\" fill=\"#c2410c\"/><text x=\"6\" y=\"216\" font-size=\"9\" fill=\"#666\">Redrawn approximately from a White Hutchinson chart.</text></g></svg>" + "<svg viewBox=\"0 0 380 220\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"USA: average hours of leisure per day\" style=\"width:100%;height:auto;display:block;background:#fff\"><g font-family=\"Inter,Arial,sans-serif\" font-size=\"11\"><text x=\"190\" y=\"16\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"12.5\">USA: average hours of leisure per day</text><line x1=\"48\" y1=\"174.0\" x2=\"368\" y2=\"174.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"178.0\" text-anchor=\"end\" fill=\"#444\">4.0</text><line x1=\"48\" y1=\"138.0\" x2=\"368\" y2=\"138.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"142.0\" text-anchor=\"end\" fill=\"#444\">4.5</text><line x1=\"48\" y1=\"102.0\" x2=\"368\" y2=\"102.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"106.0\" text-anchor=\"end\" fill=\"#444\">5.0</text><line x1=\"48\" y1=\"66.0\" x2=\"368\" y2=\"66.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"70.0\" text-anchor=\"end\" fill=\"#444\">5.5</text><line x1=\"48\" y1=\"30.0\" x2=\"368\" y2=\"30.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"34.0\" text-anchor=\"end\" fill=\"#444\">6.0</text><text x=\"48.0\" y=\"188\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">1965</text><text x=\"93.7\" y=\"188\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">1975</text><text x=\"139.4\" y=\"188\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">1985</text><text x=\"185.1\" y=\"188\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">1993</text><text x=\"230.9\" y=\"188\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">2003</text><text x=\"276.6\" y=\"188\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">2014</text><text x=\"322.3\" y=\"188\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">2015</text><text x=\"368.0\" y=\"188\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">2016</text><line x1=\"48\" y1=\"174\" x2=\"368\" y2=\"174\" stroke=\"#333\"/><line x1=\"48\" y1=\"30\" x2=\"48\" y2=\"174\" stroke=\"#333\"/><text x=\"12\" y=\"102.0\" transform=\"rotate(-90 12 102.0)\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">Hours per day</text><path d=\"M48.0 134.4 L93.7 120.0 L139.4 102.0 L185.1 75.4 L230.9 76.8 L276.6 51.6 L322.3 60.2 L368.0 66.0\" fill=\"none\" stroke=\"#2a63b8\" stroke-width=\"2.4\"/><circle cx=\"48.0\" cy=\"134.4\" r=\"2.4\" fill=\"#2a63b8\"/><circle cx=\"93.7\" cy=\"120.0\" r=\"2.4\" fill=\"#2a63b8\"/><circle cx=\"139.4\" cy=\"102.0\" r=\"2.4\" fill=\"#2a63b8\"/><circle cx=\"185.1\" cy=\"75.4\" r=\"2.4\" fill=\"#2a63b8\"/><circle cx=\"230.9\" cy=\"76.8\" r=\"2.4\" fill=\"#2a63b8\"/><circle cx=\"276.6\" cy=\"51.6\" r=\"2.4\" fill=\"#2a63b8\"/><circle cx=\"322.3\" cy=\"60.2\" r=\"2.4\" fill=\"#2a63b8\"/><circle cx=\"368.0\" cy=\"66.0\" r=\"2.4\" fill=\"#2a63b8\"/><rect x=\"56\" y=\"32\" width=\"12\" height=\"4\" fill=\"#2a63b8\"/><text x=\"72\" y=\"37\" font-size=\"10\">Men</text><path d=\"M48.0 154.6 L93.7 122.2 L139.4 107.8 L185.1 78.2 L230.9 116.4 L276.6 107.0 L322.3 111.4 L368.0 117.8\" fill=\"none\" stroke=\"#c2410c\" stroke-width=\"2.4\"/><circle cx=\"48.0\" cy=\"154.6\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"93.7\" cy=\"122.2\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"139.4\" cy=\"107.8\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"185.1\" cy=\"78.2\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"230.9\" cy=\"116.4\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"276.6\" cy=\"107.0\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"322.3\" cy=\"111.4\" r=\"2.4\" fill=\"#c2410c\"/><circle cx=\"368.0\" cy=\"117.8\" r=\"2.4\" fill=\"#c2410c\"/><rect x=\"111\" y=\"32\" width=\"12\" height=\"4\" fill=\"#c2410c\"/><text x=\"127\" y=\"37\" font-size=\"10\">Women</text><text x=\"6\" y=\"216\" font-size=\"9\" fill=\"#666\">Redrawn approximately from American Time Use Survey data (White Hutchinson chart).</text></g></svg>" + "<svg viewBox=\"0 0 380 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"USA: daily leisure and sport by education, 2016\" style=\"width:100%;height:auto;display:block;background:#fff\"><g font-family=\"Inter,Arial,sans-serif\" font-size=\"11\"><text x=\"190\" y=\"16\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"12.5\">USA: daily leisure and sport by education, 2016</text><line x1=\"48\" y1=\"184.0\" x2=\"368\" y2=\"184.0\" stroke=\"#333\"/><text x=\"43\" y=\"188.0\" text-anchor=\"end\" fill=\"#444\">0</text><line x1=\"48\" y1=\"148.0\" x2=\"368\" y2=\"148.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"152.0\" text-anchor=\"end\" fill=\"#444\">2</text><line x1=\"48\" y1=\"112.0\" x2=\"368\" y2=\"112.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"116.0\" text-anchor=\"end\" fill=\"#444\">4</text><line x1=\"48\" y1=\"76.0\" x2=\"368\" y2=\"76.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"80.0\" text-anchor=\"end\" fill=\"#444\">6</text><line x1=\"48\" y1=\"40.0\" x2=\"368\" y2=\"40.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"44.0\" text-anchor=\"end\" fill=\"#444\">8</text><text x=\"128.0\" y=\"198\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">Weekdays</text><rect x=\"64.0\" y=\"86.8\" width=\"30.0\" height=\"97.2\" fill=\"#7b4a8f\"/><text x=\"79.0\" y=\"83.8\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">5.4</text><rect x=\"96.0\" y=\"88.6\" width=\"30.0\" height=\"95.4\" fill=\"#4f9a4f\"/><text x=\"111.0\" y=\"85.6\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">5.3</text><rect x=\"128.0\" y=\"103.0\" width=\"30.0\" height=\"81.0\" fill=\"#e9a23b\"/><text x=\"143.0\" y=\"100.0\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">4.5</text><rect x=\"160.0\" y=\"113.8\" width=\"30.0\" height=\"70.2\" fill=\"#5aa6d1\"/><text x=\"175.0\" y=\"110.8\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">3.9</text><text x=\"288.0\" y=\"198\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">Weekends/holidays</text><rect x=\"224.0\" y=\"61.6\" width=\"30.0\" height=\"122.4\" fill=\"#7b4a8f\"/><text x=\"239.0\" y=\"58.6\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">6.8</text><rect x=\"256.0\" y=\"61.6\" width=\"30.0\" height=\"122.4\" fill=\"#4f9a4f\"/><text x=\"271.0\" y=\"58.6\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">6.8</text><rect x=\"288.0\" y=\"70.6\" width=\"30.0\" height=\"113.4\" fill=\"#e9a23b\"/><text x=\"303.0\" y=\"67.6\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">6.3</text><rect x=\"320.0\" y=\"74.2\" width=\"30.0\" height=\"109.8\" fill=\"#5aa6d1\"/><text x=\"335.0\" y=\"71.2\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">6.1</text><line x1=\"48\" y1=\"40\" x2=\"48\" y2=\"184\" stroke=\"#333\"/><text x=\"12\" y=\"112.0\" transform=\"rotate(-90 12 112.0)\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">Hours per day</text><rect x=\"52\" y=\"22\" width=\"11\" height=\"9\" fill=\"#7b4a8f\"/><text x=\"67\" y=\"30\" font-size=\"10\">No HS</text><rect x=\"113\" y=\"22\" width=\"11\" height=\"9\" fill=\"#4f9a4f\"/><text x=\"128\" y=\"30\" font-size=\"10\">HS grad</text><rect x=\"186\" y=\"22\" width=\"11\" height=\"9\" fill=\"#e9a23b\"/><text x=\"201\" y=\"30\" font-size=\"10\">Some college</text><rect x=\"289\" y=\"22\" width=\"11\" height=\"9\" fill=\"#5aa6d1\"/><text x=\"304\" y=\"30\" font-size=\"10\">Graduate</text><text x=\"6\" y=\"226\" font-size=\"9\" fill=\"#666\">Source: American Time Use Survey 2016 (redrawn).</text></g></svg>" + "<svg viewBox=\"0 0 380 220\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"USA: leisure and sport by age, 2024\" style=\"width:100%;height:auto;display:block;background:#fff\"><g font-family=\"Inter,Arial,sans-serif\" font-size=\"11\"><text x=\"190\" y=\"16\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"12.5\">USA: leisure and sport by age, 2024</text><line x1=\"48\" y1=\"174.0\" x2=\"368\" y2=\"174.0\" stroke=\"#333\"/><text x=\"43\" y=\"178.0\" text-anchor=\"end\" fill=\"#444\">0</text><line x1=\"48\" y1=\"140.5\" x2=\"368\" y2=\"140.5\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"144.5\" text-anchor=\"end\" fill=\"#444\">2</text><line x1=\"48\" y1=\"107.0\" x2=\"368\" y2=\"107.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"111.0\" text-anchor=\"end\" fill=\"#444\">4</text><line x1=\"48\" y1=\"73.5\" x2=\"368\" y2=\"73.5\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"77.5\" text-anchor=\"end\" fill=\"#444\">6</text><line x1=\"48\" y1=\"40.0\" x2=\"368\" y2=\"40.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"44.0\" text-anchor=\"end\" fill=\"#444\">8</text><text x=\"74.7\" y=\"188\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">15\u201324</text><rect x=\"53.3\" y=\"89.9\" width=\"40.7\" height=\"84.1\" fill=\"#7650ad\"/><text x=\"73.7\" y=\"86.9\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">5.02</text><text x=\"128.0\" y=\"188\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">25\u201334</text><rect x=\"106.7\" y=\"102.6\" width=\"40.7\" height=\"71.4\" fill=\"#7650ad\"/><text x=\"127.0\" y=\"99.6\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">4.26</text><text x=\"181.3\" y=\"188\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">35\u201344</text><rect x=\"160.0\" y=\"110.3\" width=\"40.7\" height=\"63.7\" fill=\"#7650ad\"/><text x=\"180.3\" y=\"107.3\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">3.8</text><text x=\"234.7\" y=\"188\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">45\u201354</text><rect x=\"213.3\" y=\"101.6\" width=\"40.7\" height=\"72.4\" fill=\"#7650ad\"/><text x=\"233.7\" y=\"98.6\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">4.32</text><text x=\"288.0\" y=\"188\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">55\u201364</text><rect x=\"266.7\" y=\"84.6\" width=\"40.7\" height=\"89.4\" fill=\"#7650ad\"/><text x=\"287.0\" y=\"81.6\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">5.34</text><text x=\"341.3\" y=\"188\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">65+</text><rect x=\"320.0\" y=\"57.6\" width=\"40.7\" height=\"116.4\" fill=\"#7650ad\"/><text x=\"340.3\" y=\"54.6\" text-anchor=\"middle\" font-size=\"9\" fill=\"#222\">6.95</text><line x1=\"48\" y1=\"40\" x2=\"48\" y2=\"174\" stroke=\"#333\"/><text x=\"12\" y=\"107.0\" transform=\"rotate(-90 12 107.0)\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">Hours per day</text><rect x=\"52\" y=\"22\" width=\"11\" height=\"9\" fill=\"#7650ad\"/><text x=\"67\" y=\"30\" font-size=\"10\">Hours per day</text><text x=\"6\" y=\"216\" font-size=\"9\" fill=\"#666\">Source: US Bureau of Labor Statistics, American Time Use Survey 2024.</text></g></svg>" + '</div><div style="margin-top:.6rem">' + "<svg viewBox=\"0 0 560 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"USA: change in leisure time, weekends 2006 to 2015\" style=\"width:100%;height:auto;display:block;background:#fff\"><g font-family=\"Inter,Arial,sans-serif\" font-size=\"11\"><text x=\"280\" y=\"16\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"12.5\">USA: change in leisure time, weekends 2006 to 2015</text><line x1=\"48\" y1=\"204.0\" x2=\"548\" y2=\"204.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"208.0\" text-anchor=\"end\" fill=\"#444\">-20</text><line x1=\"48\" y1=\"171.2\" x2=\"548\" y2=\"171.2\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"175.2\" text-anchor=\"end\" fill=\"#444\">-10</text><line x1=\"48\" y1=\"138.4\" x2=\"548\" y2=\"138.4\" stroke=\"#333\"/><text x=\"43\" y=\"142.4\" text-anchor=\"end\" fill=\"#444\">0</text><line x1=\"48\" y1=\"105.6\" x2=\"548\" y2=\"105.6\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"109.6\" text-anchor=\"end\" fill=\"#444\">10</text><line x1=\"48\" y1=\"72.8\" x2=\"548\" y2=\"72.8\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"76.8\" text-anchor=\"end\" fill=\"#444\">20</text><line x1=\"48\" y1=\"40.0\" x2=\"548\" y2=\"40.0\" stroke=\"#e6e6e6\"/><text x=\"43\" y=\"44.0\" text-anchor=\"end\" fill=\"#444\">30</text><text x=\"89.7\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">TV</text><rect x=\"56.3\" y=\"138.4\" width=\"14.7\" height=\"6.6\" fill=\"#0f8a8a\"/><rect x=\"73.0\" y=\"128.6\" width=\"14.7\" height=\"9.8\" fill=\"#5ec4c0\"/><rect x=\"89.7\" y=\"85.9\" width=\"14.7\" height=\"52.5\" fill=\"#b78fa6\"/><rect x=\"106.3\" y=\"53.1\" width=\"14.7\" height=\"85.3\" fill=\"#a63d55\"/><text x=\"173.0\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">Computers/phones</text><rect x=\"139.7\" y=\"82.6\" width=\"14.7\" height=\"55.8\" fill=\"#0f8a8a\"/><rect x=\"156.3\" y=\"118.7\" width=\"14.7\" height=\"19.7\" fill=\"#5ec4c0\"/><rect x=\"173.0\" y=\"125.3\" width=\"14.7\" height=\"13.1\" fill=\"#b78fa6\"/><rect x=\"189.7\" y=\"108.9\" width=\"14.7\" height=\"29.5\" fill=\"#a63d55\"/><text x=\"256.3\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">Sport</text><rect x=\"223.0\" y=\"138.4\" width=\"14.7\" height=\"6.6\" fill=\"#0f8a8a\"/><rect x=\"239.7\" y=\"128.6\" width=\"14.7\" height=\"9.8\" fill=\"#5ec4c0\"/><rect x=\"256.3\" y=\"138.4\" width=\"14.7\" height=\"0.0\" fill=\"#b78fa6\"/><rect x=\"273.0\" y=\"131.8\" width=\"14.7\" height=\"6.6\" fill=\"#a63d55\"/><text x=\"339.7\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">Socialising</text><rect x=\"306.3\" y=\"138.4\" width=\"14.7\" height=\"42.6\" fill=\"#0f8a8a\"/><rect x=\"323.0\" y=\"138.4\" width=\"14.7\" height=\"6.6\" fill=\"#5ec4c0\"/><rect x=\"339.7\" y=\"138.4\" width=\"14.7\" height=\"0.0\" fill=\"#b78fa6\"/><rect x=\"356.3\" y=\"138.4\" width=\"14.7\" height=\"3.3\" fill=\"#a63d55\"/><text x=\"423.0\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">Thinking</text><rect x=\"389.7\" y=\"138.4\" width=\"14.7\" height=\"0.0\" fill=\"#0f8a8a\"/><rect x=\"406.3\" y=\"138.4\" width=\"14.7\" height=\"0.0\" fill=\"#5ec4c0\"/><rect x=\"423.0\" y=\"135.1\" width=\"14.7\" height=\"3.3\" fill=\"#b78fa6\"/><rect x=\"439.7\" y=\"138.4\" width=\"14.7\" height=\"45.9\" fill=\"#a63d55\"/><text x=\"506.3\" y=\"218\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10.5\">Reading</text><rect x=\"473.0\" y=\"138.4\" width=\"14.7\" height=\"3.3\" fill=\"#0f8a8a\"/><rect x=\"489.7\" y=\"138.4\" width=\"14.7\" height=\"13.1\" fill=\"#5ec4c0\"/><rect x=\"506.3\" y=\"138.4\" width=\"14.7\" height=\"42.6\" fill=\"#b78fa6\"/><rect x=\"523.0\" y=\"138.4\" width=\"14.7\" height=\"55.8\" fill=\"#a63d55\"/><line x1=\"48\" y1=\"40\" x2=\"48\" y2=\"204\" stroke=\"#333\"/><text x=\"12\" y=\"122.0\" transform=\"rotate(-90 12 122.0)\" text-anchor=\"middle\" fill=\"#444\" font-size=\"10\">Change (minutes per day)</text><rect x=\"52\" y=\"22\" width=\"11\" height=\"9\" fill=\"#0f8a8a\"/><text x=\"67\" y=\"30\" font-size=\"10\">15\u201324</text><rect x=\"113\" y=\"22\" width=\"11\" height=\"9\" fill=\"#5ec4c0\"/><text x=\"128\" y=\"30\" font-size=\"10\">25\u201344</text><rect x=\"174\" y=\"22\" width=\"11\" height=\"9\" fill=\"#b78fa6\"/><text x=\"189\" y=\"30\" font-size=\"10\">45\u201364</text><rect x=\"235\" y=\"22\" width=\"11\" height=\"9\" fill=\"#a63d55\"/><text x=\"250\" y=\"30\" font-size=\"10\">65+</text><text x=\"6\" y=\"246\" font-size=\"9\" fill=\"#666\">Values read approximately from an Economist chart of American Time Use Survey data.</text></g></svg>" + '</div>' },
        { id: "g1", label: "", type: "table", prompt: "", cols: ["Graph", "My statement"], rows: ["Weekly leisure over a lifetime, 1890\u20132000", "Men and women, 1965\u20132016", "By education, 2016", "By age, 2024", "Change in use of leisure time, 2006\u20132015"] },
        { type: "banner", src: "/images/flip/banner-reflect.jpg", alt: "Reflect" },
        { type: "heading", text: "Essay planning", note: "In pairs, use the writing frame below to plan this 10-mark essay. Use your plan to write the essay for this week\u2019s home learning, then mark it with the self-marking bot by opening IB-Style Questions below and writing your answer there." },
        { type: "html", html: "<div class=\"fl-wf\">\n<div class=\"fl-wf__q\"><span>Timed essay \u00b7 10 marks</span>Examine the factors that explain how leisure activity is changing in countries at different stages of economic development.</div>\n<div class=\"fl-wf__s\" style=\"--c:#2a63b8\"><div class=\"fl-wf__n\">1</div><div><b>Introduction</b><div class=\"fl-wf__chips\"><i>Define key terms</i><i>Introduce your main argument</i><i>Introduce the places: China (UMIC) and the USA (HIC)</i></div><p class=\"fl-wf__st\">Leisure refers to the opportunities enjoyed when not working. What leisure means varies from one country to another, from quiet family time at home to organised events. Development plays an important role in diversifying the choice of leisure activities, which increases with improved facilities and infrastructure\u2026</p></div></div>\n<div class=\"fl-wf__s\" style=\"--c:#0f8a6e\"><div class=\"fl-wf__n\">2</div><div><b>Main body</b><div class=\"fl-wf__chips\"><i>Accurate specialist terminology</i><i>Develop an argument throughout</i><i>Balance: different perspectives and factors</i><i>Focused place examples linked to the command term</i></div>\n<ul class=\"fl-wf__st\"><li>The relationship between income level and leisure time is complex\u2026</li><li>At the national scale, development of a country appears to increase opportunities for leisure\u2026</li><li>With increased development, leisure activities diversify, providing more choice and opportunities\u2026</li><li>However, leisure participation within a country can be segregated by socio-economic factors\u2026</li><li>With development comes a noticeable transition period in terms of leisure time\u2026</li></ul></div></div>\n<div class=\"fl-wf__s\" style=\"--c:#c2410c\"><div class=\"fl-wf__n\">3</div><div><b>Conclusion</b><div class=\"fl-wf__chips\"><i>Keep it concise</i><i>Weigh up which factors matter most</i><i>Stay consistent with your introduction and main body</i></div><p class=\"fl-wf__st\">Overall, the most important factor is\u2026 because\u2026 However, \u2026</p></div></div></div>" },
        { id: "e1", label: "", type: "table", prompt: "My essay plan", cols: ["Section", "Key points, evidence and examples"], rows: ["Introduction", "Paragraph 1: income and leisure time", "Paragraph 2: development and opportunities", "Paragraph 3: diversification of leisure", "Paragraph 4: inequality within countries", "Paragraph 5: transition and change", "Conclusion"],
          links: [{ label: "Self-marking practice: Leisure, tourism and sport questions", url: "/geography/revision/paper-questions/leisure-tourism-sport" }] },
        { type: "reveal", code: "leisure", label: "Model essay", html: "<h3 style=\"margin:.2rem 0 .5rem\">Model essay</h3><p>Leisure refers to any freely chosen activity or experience that takes place in non work time. Leisure can vary from reading a book alone to attending group dance classes, varying from one region to another. Furthermore, development is any improvement in the standard of living of people in a specific country, which plays a vital role in the diversity of various leisure activities of people. Therefore, in this essay, I will be examining the different factors that affect leisure activities in contrasting countries (e.g., China and the USA), at different stages of development.</p><p>In the USA, there has been a large increase in the amount of leisure time that most American adults have, for some an extra 4-9 hours per week, since the 1960s. A main factor which affects leisure activities in countries is income level. Disposable income refers to the income that is available to a person after tax. In the USA, disposable income has increased, as people are receiving better pay, due to working in more specialized jobs. This allows people to save a significant percentage of their income for leisure. For instance, in 2015, the participation in sports for different households\u2019 income levels in the US showed huge differences, one being that 43% of those who participated in swimming were from households of incomes over 100,000 USD, while only 8% were from households of incomes less than 25,000 USD.</p><p>However, some may argue that those with higher incomes have less leisure time than those with lower incomes, this is known as the \u201cfree-time paradox\u201d, which is especially relevant in the USA and other higher-income countries. This could be due to the fact that social forces cultivate a conspicuous industriousness among affluent college graduates, causing them to work longer hours. Another reason may be improvements in technology, where people can easily listen to music, watch videos, and read, while at work, which means that instead of spending a specific amount of time on leisure, some people may take short breaks at work and not realize that it is leisure, as they are still in a working environment.</p><p>Moreover, there is some variation in leisure activities with ethnicity. In 2015, going online (using the internet) was reported by 71% of whites, 60% of African Americans and 56% of Hispanics, which is likely to be related to education and wealth. Specifically, different levels of education can affect changes in leisure activity, this is because if a certain region of the USA is more developed, more people would likely have the requisite education to understand very complex sports such as cricket, gymnastics etc., thereby increasing the chances of participation of these sports, which is a form of leisure. However, as countries become more developed, it can be debated that racial inequalities which restrict some people from education and job opportunities are becoming less common, due to social developments such as affirmative action, thus it can be expected that the percentages of internet users and other leisure activities of different ethnicities, are likely to become closer in the future.</p><p>Additionally, as the USA becomes more developed, the government is able to invest in bigger leisure facilities, allowing more people to be accommodated, therefore, providing people with greater access to various leisure activities. For example, cinemas and theatres are increasingly being replaced by multiplex cinemas and theatres, and the improvements in gym facilities have attracted more people to do more fitness. Therefore, from this, it is clear that as a country develops, there tends to be more disposable income and investment, demonstrating that money plays a huge role in the amount of leisure time a person has. Nevertheless, this relationship is not always the case, as seen from the \u201cfree-time paradox\u201d.</p><p>In China, 22% of people spent 1 to 2 hours, 16% spent 3 to 4 hours, and 12% spent 4 to 5 hours a day on leisure activities in 2015. These values have increased over the years, for instance, the number of domestic trips reached six billion in 2019, indicating an exponential increase compared to the number of trips made in China ten years ago. One reason to this is the development of transportation. As China develops, more investment is put into transportation infrastructure and the building of roads. This has made it easier and possible to reach many tourist destinations, due to the shortened distance between places, thus allowing people to embark on journeys at a much faster rate, also known as decreasing the friction of distance between places.</p><p>Furthermore, efficient technology has made transportation cheaper, meaning that people with lower incomes are able to afford transportation, due to the overall decrease in travel costs. Thus, tourism and holidays, a form of leisure, has gradually increased in China over the years, largely due to affordable and convenient transportation. However, even with lower travel costs, many Chinese do not have the time to engage in leisure activities, especially migrant workers, as they work extremely long hours and may be too tired, along with not having much disposable income, particularly if they have to send remittances back to their family. Therefore, although travel costs have decreased, many low-income people still do not have the time and means to pay for leisure activities.</p><p>In addition, as seen in many developing countries, birth rates tend to decrease, and the ageing population increases, due to developments in healthcare, resulting in higher life expectancies. This is exacerbated by China\u2019s \u201cOne Child policy\u201d has led to China being the home to the largest population of older people in the world. In 2019, 254 million people in China were aged 60 years or older, and by 2040, this number is expected to increase to 402 million, making up around 28% of the population. This has resulted in a greater proportion of retired people, which means that these people have much more time to spend doing leisure activities. For example, more elderly people are participating in physical activities to stay healthy and \u201cfeel younger\u201d, whereby cycling has become increasingly popular amongst the elderly, resulting in the formation of senior biking clubs, where some elderly people bike up to 100km a day. Nonetheless, some may argue that older age has led to a decline in some leisure activities, specifically activities which require a lot of energy and strength. Hence, as China becomes more developed, leisure activities have become more accessible, but there are still large inequalities in income levels of social status that prevent some people from participating in leisure activities.</p><p>To conclude, generally, as countries such as the USA and China become more developed, there is more investment in infrastructure, however, this mainly benefits the middle-income and high-income groups as those with low incomes still struggle to pay for these leisure activities. It is also important to consider individual choices, due to reasons such as some people with higher incomes choosing to do more work, thus those with lower incomes may have more leisure time. The relationship between leisure and development is extremely complexed as there are many people involved, ranging from the government to individual preferences and capabilities; at the national scale, development of a country seems to increase leisure opportunities, however, leisure participation, within a country can be seen to be segregated based on socio-economic factors and inequalities.</p>" }
      ]
    }],
    LT01: [{
      title: "Key terms glossary: leisure, tourism and sport",
      intro: "Complete the key terms table before the lesson. For each key term, choose the matching definition from the drop-down (it turns green when it is right), then give your own example.",
      parts: [
        { id: "a", label: "", type: "match", prompt: "", items: [
          { t: "Leisure", d: "Any freely chosen activity or experience that takes place in non-work time." },
          { t: "Recreation", d: "A leisure time activity undertaken voluntarily and for enjoyment." },
          { t: "Tourism", d: "Travel away from home for at least one night for the purpose of leisure (IB definition)." },
          { t: "Sport", d: "A physical activity involving a set of rules or customs. The activity may be competitive." },
          { t: "Domestic tourism", d: "Tourism within the country of residency." },
          { t: "International tourism", d: "Tourism outside the country of residency." },
          { t: "Mass tourism", d: "Large-scale tourism when flights, accommodation, tours and transfers are booked together and often part of a group." },
          { t: "Niche tourism", d: "Specialist tourism for a small market segment with particular interests." },
          { t: "Affluence", d: "Wealth: having more income to spend." },
          { t: "Accessibility", d: "How easy it is to reach a place." },
          { t: "Disposable income", d: "Income left after taxes and essential bills." },
          { t: "Discretionary time", d: "Free time a person can choose how to use." },
          { t: "Day trips (day tourism)", d: "Visits to places of interest, e.g. the beach or a ruin, but without staying overnight." },
          { t: "Sustainable tourism", d: "Tourism that preserves primary tourist resources and supports the livelihoods and culture of local people." },
          { t: "Low-cost (budget) airlines", d: "Airlines that offer cheaper than normal flights by removing add-ons like airport check-in, in-flight meals, checked baggage and pre-selected seats." },
          { t: "Health spas", d: "Hotels or resorts that tourists visit for health treatments. This may include massages, detoxes or mud treatments." },
          { t: "Sports tours", d: "Trips that either go to play sport or view sport. Trips to the football World Cup or Olympics are becoming much more common." },
          { t: "(Economic) leakage", d: "Money that is lost from a tourist destination. This money is often taken overseas by TNCs, e.g. InterContinental or Hilton." },
          { t: "Honeypot", d: "A location that attracts a large number of tourists. Antigua in Guatemala would be considered a honeypot location in Central America." },
          { t: "Safari", d: "Tourism that goes to view wildlife in its natural habitat. Safaris are very common in Africa, e.g. Kenya, Tanzania and Botswana." },
          { t: "Secondary tourist/recreational resources", d: "Facilities that have been purposefully built for tourists, e.g. hotels, restaurants, golf courses and airports." },
          { t: "Heritage tourism", d: "Tourism based on historic legacy as its main focus, e.g. natural landscape, historical buildings." },
          { t: "Primary tourist/recreational resources", d: "Pre-existing tourist attractions that often exist naturally, e.g. the weather, wildlife, beaches, indigenous people or mountains." },
          { t: "Medical tourism", d: "When people travel to other countries to undergo medical procedures, e.g. dentistry or plastic surgery, either because medical standards are better or treatment is cheaper in the destination." },
          { t: "Ecotourism", d: "Like sustainable tourism, but with a focus on the natural environment." },
          { t: "Resorts", d: "A settlement where the primary function is tourism. Resorts are normally associated with the coast. Large hotel complexes are considered to be resorts." },
          { t: "All-inclusive", d: "When tourists pay a hotel complex one price which includes all meals, drinks, entertainment, activities, etc. All-inclusive holidays are very common in the Mediterranean and the Caribbean." } ] }
      ]
    }, {
      kind: "lesson", open: true, inline: true, afterCard: 2,
      title: "How have leisure patterns changed?",
      overview: {
        intention: "To describe and explain human patterns and processes.",
        syllabus: ["The growth and changing purpose of leisure time for societies in different geographic and development contexts.",
          "Categorisation of touristic activities (cost, duration, destination) and sporting activities (cost, popularity, site)."],
        success: ["Define the key terms leisure, recreation, sport and tourism.", "Describe how patterns of leisure time have increased in the USA and globally.",
          "Explain some reasons for the growth in leisure time globally.", "Categorise a number of touristic and sporting activities into different groups."] },
      time: "about 60 minutes",
      sub: "Low screen time: most activities use printed cards. Use this panel to run, check and record them.",
      intro: "Before the lesson: complete the Flip learning key terms above. Optional: play the first levels of the Leisure Quest.",
      parts: [
        { type: "banner", src: "/images/flip/banner-connect.jpg", alt: "Connect" },
        { type: "heading", text: "Starter: test your key terms" },
        { id: "st", label: "", type: "text", prompt: "Use the flashcards to test yourself on the key terms. Write down any terms you got wrong.",
          links: [{ label: "Quizlet: IB Geography: Leisure, Sport and Tourism", url: "https://quizlet.com/br/365094824/ib-geography-leisure-sport-and-tourism-flash-cards/" }] },
        { type: "heading", text: "Activity 1: Then and now", note: "In pairs, put the picture cards in order from oldest to newest. For each move along the line, say one thing that changed." },
        { id: "a1", label: "a)", type: "order", prompt: "Put picture cards A\u2013H in time order, oldest to newest.", cards: [{ k: "A", text: "Families sit in striped deckchairs on a crowded beach at a seaside resort in their home country; they arrived by steam train.", icon: "<svg viewBox=\"0 0 160 70\" aria-hidden=\"true\"><g stroke=\"#173a5e\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"128\" cy=\"16\" r=\"9\"/><path d=\"M8 34 q12 -8 24 0 t24 0 t24 0 t24 0 t24 0 t24 0\"/><rect x=\"0\" y=\"40\" width=\"160\" height=\"30\" fill=\"#f3dcae\" stroke=\"none\"/><path d=\"M40 62 l10 -18 l10 18 M45 53 h10 M84 62 l10 -18 l10 18 M89 53 h10\"/></g></svg>" }, { k: "B", text: "Workers from the same factory play football against another factory’s team on a Saturday afternoon, their only day off besides Sunday.", icon: "<svg viewBox=\"0 0 160 70\" aria-hidden=\"true\"><g stroke=\"#173a5e\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 62 V24 l14 -10 v48 M18 24 h14\"/><path d=\"M30 14 v-6 h4 v10\"/><circle cx=\"80\" cy=\"54\" r=\"7\"/><circle cx=\"118\" cy=\"18\" r=\"6\"/><path d=\"M118 24 v20 l-8 18 M118 44 l8 18 M106 32 l12 -4 l10 6\"/><path d=\"M10 64 h140\"/></g></svg>" }, { k: "C", text: "A family boards a chartered jet for a two-week package holiday to a beach hotel in Spain; flights, hotel and meals are all in one price.", icon: "<svg viewBox=\"0 0 160 70\" aria-hidden=\"true\"><g stroke=\"#173a5e\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 48 l90 -26 c10 -3 16 2 10 8 l-86 32 z\"/><path d=\"M78 34 l-14 -20 h8 l24 16 M74 46 l-6 16 h8 l14 -20\"/><path d=\"M14 66 h132\"/></g></svg>" }, { k: "D", text: "The whole family gathers in the living room to watch one of the country’s few TV channels on a new black-and-white television.", icon: "<svg viewBox=\"0 0 160 70\" aria-hidden=\"true\"><g stroke=\"#173a5e\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"50\" y=\"20\" width=\"60\" height=\"38\" rx=\"6\"/><rect x=\"58\" y=\"27\" width=\"44\" height=\"24\" rx=\"3\"/><path d=\"M66 20 l-10 -12 M94 20 l10 -12 M60 58 v8 M100 58 v8\"/></g></svg>" }, { k: "E", text: "An aerobics class in leg warmers at a new private gym; members pay a monthly fee to keep fit.", icon: "<svg viewBox=\"0 0 160 70\" aria-hidden=\"true\"><g stroke=\"#173a5e\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"80\" cy=\"12\" r=\"6\"/><path d=\"M80 18 v22 l-10 22 M80 40 l10 22 M66 6 l14 18 l14 -18\"/><path d=\"M64 60 h-6 M102 60 h-6\"/><path d=\"M20 30 h20 M20 24 v12 M40 24 v12 M120 30 h20 M120 24 v12 M140 24 v12\"/></g></svg>" }, { k: "F", text: "Friends book cheap flights online with a budget airline for a weekend city break in another European capital.", icon: "<svg viewBox=\"0 0 160 70\" aria-hidden=\"true\"><g stroke=\"#173a5e\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"36\" y=\"22\" width=\"56\" height=\"34\" rx=\"3\"/><path d=\"M28 60 h72\"/><path d=\"M110 30 l30 -10 c4 -1 6 2 2 4 l-28 14 z M126 24 l-6 -8 h4 l10 6\"/></g></svg>" }, { k: "G", text: "Millions of people watch professional players compete in a video game tournament streamed live online, filling a stadium too.", icon: "<svg viewBox=\"0 0 160 70\" aria-hidden=\"true\"><g stroke=\"#173a5e\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"20\" y=\"8\" width=\"70\" height=\"40\" rx=\"4\"/><path d=\"M48 20 l14 8 l-14 8 z\"/><path d=\"M104 40 h40 c8 0 10 20 2 20 c-6 0 -8 -8 -12 -8 h-20 c-4 0 -6 8 -12 8 c-8 0 -6 -20 2 -20 z M112 46 v8 M108 50 h8 M136 48 v.1 M132 52 v.1\"/></g></svg>" }, { k: "H", text: "With travel banned, people stay at home streaming films on demand and joining online workout classes on their laptops.", icon: "<svg viewBox=\"0 0 160 70\" aria-hidden=\"true\"><g stroke=\"#173a5e\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 36 l30 -24 l30 24 v30 h-60 z\"/><path d=\"M42 66 v-16 h16 v16\"/><rect x=\"96\" y=\"22\" width=\"50\" height=\"30\" rx=\"3\"/><path d=\"M90 56 h62\"/><path d=\"M116 30 l12 7 l-12 7 z\"/></g></svg>" }], answer: ["B", "A", "D", "C", "E", "F", "G", "H"] },
        { id: "a1b", label: "b)", type: "questions", prompt: "Three things that changed about leisure over time.", rows: ["First change", "Second change", "Third change"] },
        { type: "heading", text: "Activity 2: Key-term Taboo",
          note: "Work in pairs. Describe the word on the card so your partner can guess it, without saying the word or the three banned words. Swap roles after each card. 5 minutes." },
        { type: "timer", minutes: 5, label: "5-minute timer" },
        { id: "a2", label: "", type: "taboo", prompt: "", cards: [{ t: "Leisure", ban: ["free time", "work", "relax"] }, { t: "Recreation", ban: ["hobby", "activity", "free time"] }, { t: "Tourism", ban: ["holiday", "travel", "night"] }, { t: "Sport", ban: ["game", "compete", "rules"] }, { t: "Domestic tourism", ban: ["home", "country", "abroad"] }, { t: "International tourism", ban: ["abroad", "country", "border"] }, { t: "Mass tourism", ban: ["package", "crowds", "beach"] }, { t: "Niche tourism", ban: ["small", "specialist", "market"] }, { t: "Ecotourism", ban: ["nature", "green", "environment"] }, { t: "Affluence", ban: ["rich", "money", "wealth"] }, { t: "Disposable income", ban: ["spend", "money", "bills"] }, { t: "Accessibility", ban: ["reach", "transport", "easy"] }, { t: "Paid holidays", ban: ["work", "leave", "days"] }, { t: "Discretionary time", ban: ["free", "choose", "spare"] }, { t: "Leisure participation", ban: ["take part", "join", "activity"] }, { t: "Spectator sport", ban: ["watch", "stadium", "fan"] }] },
        { type: "banner", src: "/images/flip/banner-demonstrate.jpg", alt: "Demonstrate" },
        { type: "heading", text: "Activity 3: Human graph and TEA",
          note: "Stand along the 1970\u20132006 floor axis as data points for average working hours. Then answer the exam question on your mini whiteboard using TEA." },
        { id: "a3t", label: "", type: "table", prompt: "Describe the trend in working hours from 1970 to 2006. [3]", given: true,
          cols: ["Letter", "What to write", "Mark"], rows: ["Trend", "Evidence", "Anomaly"],
          prefill: { 0: ["The overall direction, e.g. \u201cWorking hours fell overall.\u201d", "[1]"],
                     1: ["Figures with dates and units, e.g. \u201cfrom __ hours a week in 1970 to __ in 2006, a fall of __ hours.\u201d", "[1]"],
                     2: ["A change in the rate or an exception, e.g. \u201cthe fall was fastest between __ and __\u201d.", "[1]"] } },
        { id: "a3", label: "", type: "text", prompt: "My answer", note: "Don\u2019t explain why: the command term is describe. Use the graph\u2019s own numbers. Then swap with a partner: did you include T, E and A? Mark it out of 3." },
        { type: "heading", text: "Activity 4: Why has leisure time grown?",
          note: "Sort each factor card into Technology, Affluence or Accessibility. The orange rule-breaker cards could fit more than one box: decide where, and be ready to explain why." },
        { id: "a4", label: "a)", type: "sort", prompt: "Factor card sort", bins: ["Technology", "Affluence", "Accessibility"], cards: [{ t: "Budget airlines and cheap flights", a: ["Technology", "Accessibility"] }, { t: "The internet and online booking", a: ["Technology"] }, { t: "Rising incomes", a: ["Affluence"] }, { t: "More paid holiday entitlement", a: ["Affluence"] }, { t: "Shorter working week", a: ["Affluence"] }, { t: "Machines do more of the housework", a: ["Technology"] }, { t: "Car ownership rises", a: ["Affluence", "Accessibility"] }, { t: "New motorways and high-speed rail", a: ["Accessibility"] }, { t: "Earlier retirement and longer life expectancy", a: ["Affluence"] }, { t: "Streaming and gaming at home", a: ["Technology"] }, { t: "Visa-free travel between countries", a: ["Accessibility"] }, { t: "More dual-income households", a: ["Affluence"] }, { t: "Package holidays (one price for all)", a: ["Affluence", "Accessibility"], rb: true }, { t: "Smartphones: maps, translation, payments", a: ["Technology", "Accessibility"], rb: true }, { t: "Credit cards and buy-now-pay-later", a: ["Affluence", "Technology"], rb: true }] },
        { id: "a4r", label: "b)", type: "rank", prompt: "Rank the top 3 factors that have done most to increase leisure time and participation.", n: 3, options: ["Budget airlines and cheap flights", "The internet and online booking", "Rising incomes", "More paid holiday entitlement", "Shorter working week", "Machines do more of the housework", "Car ownership rises", "New motorways and high-speed rail", "Earlier retirement and longer life expectancy", "Streaming and gaming at home", "Visa-free travel between countries", "More dual-income households", "Package holidays (one price for all)", "Smartphones: maps, translation, payments", "Credit cards and buy-now-pay-later"] },
        { id: "a4c", label: "c)", type: "text", prompt: "Why is your number 1 the most important?" },
        { type: "heading", text: "Activity 5: Types of tourist and sporting activity", note: "Use research to complete the table." },
        { type: "html", html: '<div class="fl__imgs">' + IMG("lt01-leisure-share", "Bar chart: share of the day spent on leisure in 18 OECD countries, around 2006") +
            IMG("lt01-gender-gap-leisure", "Scatter chart: gender gap in leisure time, 2020: minutes per day for men and women by country") + "</div>" +
            '<p class="fl__note">Leisure share: SBL chart of OECD data (Society at a Glance 2009). Gender gap in leisure time: Our World in Data, from OECD Gender Data (CC BY).</p>' },
        { id: "a5", label: "", type: "table", prompt: "",
          cols: ["Types of tourist or sporting activities", "Description and/or example"],
          rows: ["Domestic tourism", "International tourism", "Mass tourism", "Niche tourism", "Ecotourism", "Cultural / heritage tourism", "Adventure tourism", "Sports tourism", "Participant vs spectator sport"] },
        { type: "banner", src: "/images/flip/banner-reflect.jpg", alt: "Reflect" },
        { type: "heading", text: "Plenary: relay brain dump",
          note: "In teams, take turns at the whiteboard: one point each, 3 minutes. Then circle the point most likely to appear in an exam." },
        { type: "timer", minutes: 3, label: "3-minute relay" },
        { type: "heading", text: "Extension", note: "Optional homework: watch the TED talk, then be ready for a \u201cstand on the line\u201d debate next lesson: \u201cThe pandemic changed leisure for good.\u201d" },
        { id: "ex", label: "", type: "text", prompt: "Do you agree that the pandemic changed leisure for good? Note your view and two pieces of evidence.", video: true }
      ]
    }],
    FW01: [{
      title: "Rivers of the world: 8-minute challenge",
      overview: {
        heading: "How physical processes influence drainage basin systems and landforms",
        intention: "To describe and explain physical patterns and processes.",
        syllabus: ["The drainage basin as an open system with inputs (precipitation of varying type and intensity), outputs (evaporation and transpiration), flows (infiltration, throughflow, overland flow and base flow) and stores (including vegetation, soil, aquifers and the cryosphere)."],
        success: ["Explain the concept of the drainage basin as an open system.", "Define the key terms connected with the drainage basin system.", "Apply the concept of inputs, outputs, stores and flows to each of the key terms."] },
      intro: "Start the timer, then name as many of the 24 numbered rivers on the map as you can. Choose a name for each number, then check your answers. Use an atlas or the Teach Me Live bot if you get stuck after the time is up.",
      parts: [
        { type: "timer", minutes: 8, label: "8-minute challenge" },
        { id: "rv", label: "a)", type: "rivermap", prompt: "", items: [{ n: "Niger", line: [[-10, 9.5], [-7, 12.5], [-3, 16.5], [0, 16], [3, 12], [6, 9], [6.5, 4.5]] }, { n: "Tigris and Euphrates", line: [[38.5, 37.5], [40, 35], [42, 34.4], [44.5, 32], [46.5, 31], [48.3, 30]] }, { n: "Volga", line: [[33, 57], [38, 57.7], [44, 56.3], [48.5, 55.5], [49, 52], [45.5, 48], [47.8, 46]] }, { n: "Danube", line: [[9, 48], [16, 48], [19, 47], [21, 44.8], [25, 43.7], [28, 44.5], [29.5, 45.2]] }, { n: "Yenisey", line: [[93, 51.7], [92, 56], [89, 60], [87, 64], [86, 68], [83, 71.5]] }, { n: "Mackenzie", line: [[-117, 61], [-121, 62], [-125, 64.5], [-130, 67], [-135, 68.8]] }, { n: "Amazon", line: [[-73, -4.5], [-68, -3.5], [-62, -3.3], [-56, -2.5], [-51, -0.5]] }, { n: "Missouri", line: [[-111.5, 45.5], [-108, 47.5], [-102, 47.5], [-100, 45], [-96.5, 41.5], [-94.5, 39], [-90.5, 38.8]] }, { n: "Ganges", line: [[78.5, 30], [80.5, 26.5], [84, 25.5], [88, 24.5], [90.5, 22.5]] }, { n: "Lena", line: [[106, 54], [115, 58], [121, 61], [127, 63], [127, 69], [126.5, 72.5]] }, { n: "Amur", line: [[121, 53.3], [127, 50], [131, 48], [135, 48.5], [137, 51], [140.5, 53]] }, { n: "Congo", line: [[26, -7], [25.5, 0.5], [22, 2], [18, 1], [16, -2.5], [13, -5.5]] }, { n: "Murray–Darling", line: [[151, -29], [146, -30], [143, -32], [142, -34], [140.5, -34.2], [139, -35.5]] }, { n: "Mekong", line: [[96, 32], [99, 26], [101, 21], [104, 17.5], [105.5, 13], [106, 10.5]] }, { n: "Mississippi", line: [[-95, 47], [-91.5, 43], [-90.5, 38.5], [-90, 35], [-91, 32], [-90, 29.5]] }, { n: "Ob", line: [[85, 52], [83, 55], [78, 59], [70, 61], [66, 63], [66.5, 66.5]] }, { n: "Huang He (Yellow)", line: [[97, 35], [103, 36], [106, 40], [110.5, 40.5], [110.5, 35], [114, 35], [118.5, 37.5]] }, { n: "Indus", line: [[80, 32.5], [75, 35], [72, 33.5], [71, 29.5], [68.5, 26], [67.5, 24]] }, { n: "Rio Grande", line: [[-106.6, 37.5], [-106.7, 32], [-104.5, 29.5], [-101, 29.7], [-99, 26.5], [-97.2, 26]] }, { n: "Paraná", line: [[-51, -20], [-54, -25.5], [-58.5, -27.3], [-60.5, -31.5], [-58.5, -34]] }, { n: "Yangtze", line: [[92, 34], [99, 29], [104, 28.5], [106.5, 29.6], [111, 30.7], [114, 30.5], [121.5, 31.4]] }, { n: "Yukon", line: [[-135, 61], [-141, 64.5], [-146, 66.5], [-152, 65], [-158, 62.5], [-164.5, 62.7]] }, { n: "Rhine", line: [[9.5, 47.5], [7.5, 47.6], [8.2, 49.5], [7, 50.7], [6, 52], [4.3, 52]] }, { n: "Nile", line: [[32.5, 0], [31.5, 9], [32.5, 15.5], [33.5, 19], [31.5, 22], [32.5, 26], [31, 30.5]] }] }
        ,{ id: "rq", label: "b)", type: "text", prompt: "Now try an online rivers quiz. Note your score and any rivers you found difficult.",
          links: [{ label: "World rivers quiz (World Geography Games)", url: "https://world-geography-games.com/en/world_rivers.html" }] }
      ]
    }, {
      kind: "lesson", open: true, inline: true, afterCard: 2,
      title: "The drainage basin system",
      intro: "Before the lesson: complete the Flip learning above.",
      parts: [
        { type: "banner", src: "/images/flip/banner-connect.jpg", alt: "Connect" },
        { type: "heading", text: "Starter: features of a drainage basin" },
        { id: "s1", label: "", type: "text", prompt: "Watch the video and study the slides on the Firefly page, then write your own definition of a drainage basin.",
          links: [{ label: "Video: USDA watershed learning animation", url: "https://www.youtube.com/watch?v=dUlAANVBYHM" }] },
        { type: "banner", src: "/images/flip/banner-demonstrate.jpg", alt: "Demonstrate" },
        { type: "heading", text: "Activity 1: Labelling the key features of a drainage basin" },
        { type: "html", html: BASIN_SVG },
        { id: "l1", label: "a)", type: "match", termCol: "Label", defCol: "Feature (choose the matching one)", noExample: true, prompt: "Label the diagram: choose the feature for each number.", items: [{ t: "Number 1", d: "Watershed" }, { t: "Number 2", d: "Source" }, { t: "Number 3", d: "Tributary" }, { t: "Number 4", d: "Confluence" }, { t: "Number 5", d: "Main river channel" }, { t: "Number 6", d: "Meander" }, { t: "Number 7", d: "Mouth" }, { t: "Number 8", d: "Estuary" }, { t: "Number 9", d: "Sea" }] },
        { id: "g1", label: "b)", type: "cloze", prompt: "Now complete the missing words.",
          text: "A river basin is an area of land drained by a river and its tributaries (small streams). The river basin takes its name from the shape of a [[bowl]]. All precipitation that falls onto the hillside will eventually find its way to the river channel (whether overland or [[underground]]). Rivers start at their [[source]]. This is normally a spring site in a mountainous area. Various [[tributaries]] meet up at a [[confluence]] and eventually flow downhill into the main river channel. The river then flows through an ever widening [[valley]] until it reaches the [[sea]]. This is the [[mouth]] of the river and may also be called an [[estuary]] or a delta." },
        { type: "heading", text: "Activity 2: The drainage basin system",
          note: "In class you will place these terms on an A2 laminated sheet (follow the instructions on Firefly), then take a photo for your OneNote. All terms will need defining." },
        { id: "t1", label: "a)", type: "sort", cardCol: "Term", binCol: "Input, store, flow or output?", prompt: "Decide whether each term is an input, a store, a flow (transfer) or an output.", bins: ["Input", "Store", "Flow", "Output"], cards: [{ t: "Precipitation", a: ["Input"] }, { t: "Interception", a: ["Store"] }, { t: "Throughfall", a: ["Flow"] }, { t: "Stemflow", a: ["Flow"] }, { t: "Infiltration", a: ["Flow"] }, { t: "Capillary action", a: ["Flow"] }, { t: "Throughflow", a: ["Flow"] }, { t: "Overland flow / surface run-off", a: ["Flow"] }, { t: "Groundwater", a: ["Store"] }, { t: "Water table", a: ["Store"] }, { t: "Groundwater flow", a: ["Flow"] }, { t: "Channel precipitation", a: ["Input"] }, { t: "Channel flow / run-off", a: ["Flow", "Output"] }, { t: "Depression storage", a: ["Store"] }, { t: "Ice and snow", a: ["Store"] }, { t: "Transpiration", a: ["Output"] }] },
        { id: "t2", label: "", type: "table", prompt: "Define each term.", cols: ["Term", "Definition"], rows: ["Precipitation", "Interception", "Throughfall", "Stemflow", "Infiltration", "Capillary action", "Throughflow", "Overland flow / surface run-off", "Groundwater", "Water table", "Groundwater flow", "Channel precipitation", "Channel flow / run-off", "Depression storage", "Ice and snow", "Transpiration"] },
        { id: "f1", label: "b)", type: "questions", letters: true, prompt: "Read the text, then answer the questions.",
          before: '<div class="fl__tnote" style="background:var(--lh-teal-bg)"><b>Feedback loops.</b> A system is always trying to maintain a balance (equilibrium). Feedback loops explain how a system, such as a drainage basin, loses and then tries to regain its balance. Positive feedback causes instability by changing inputs (for example, an increase in precipitation). Negative feedback tries to restore the equilibrium by reducing inputs or increasing outputs. Humans can alter feedback loops by changing the amount of water released from dams, changing the amount of water used, or increasing run-off through deforestation.</div>',
          rows: ["Define the term feedback loop.", "What is the difference between positive and negative feedback?", "List some examples of the ways in which humans can alter feedback loops."] },
        { id: "f2", label: "iv)", type: "text", before: SYSTEM_SVG, prompt: "The diagram shows a drainage basin systems diagram. Explain the concept of a systems diagram." },
        { type: "banner", src: "/images/flip/banner-reflect.jpg", alt: "Reflect" },
        { type: "heading", text: "Activity 3: Reviewing terminology", note: "Practise the flashcards before we go live." },
        { type: "linkcard", url: "https://quizlet.com/151184009/the-hydrological-cycle-flash-cards/", icon: "Q", title: "The hydrological cycle", sub: "Quizlet: flashcards, learn and test, then Quizlet Live in class" },
        { type: "heading", text: "Past paper practice" },
        { id: "q1", label: "", type: "questions", prompt: "Answer using the systems diagram above, then mark your answers with the self-marking practice bot.",
          links: [{ label: "Self-marking practice: Freshwater questions", url: "/geography/revision/paper-questions/freshwater" }],
          rows: ["Identify two flows and two stores in the diagram. (2)", "Explain the concept of the drainage basin systems diagram. (4)"] }
      ]
    }],
    FW03: [{
      title: "Erosion, transportation and deposition",
      overview: {
        heading: "How physical processes influence drainage basin systems and landforms",
        intention: "To describe and explain physical patterns and processes.",
        syllabus: ["River processes of erosion, transportation and deposition and spatial and temporal factors influencing their operation, including channel characteristics and seasonality."],
        success: ["Define and explain the four types of erosion and the four types of transportation that occur in a river.", "Define deposition and explain when it will occur in a river.",
          "Explain the conditions in a river that result in the different types of erosion, transportation and deposition."] },
      intro: "Complete this before the lesson. Watch each animation, then match the processes to their definitions. Use the Teach Me Live bot on this page if you get stuck.",
      parts: [
        { type: "heading", text: "Part 1: The four types of erosion" },
        { type: "html", html: EROSION_ANIM },
        { id: "e1", label: "a)", type: "match", termCol: "Erosion process", defCol: "Definition (choose the matching one)", noExample: true, prompt: "Match each type of erosion to its definition.",
          items: [{ t: "Hydraulic action", d: "The force of turbulent water hits the bed and banks, forcing water and air into cracks so that joints widen and loose fragments are swept away." },
            { t: "Abrasion (corrasion)", d: "Load carried by the river scrapes and rubs against the bed and banks, wearing them away like sandpaper." },
            { t: "Attrition", d: "Pieces of load knock into each other and into the bed, breaking into smaller, more rounded pieces." },
            { t: "Solution (corrosion)", d: "Weak acids in the water dissolve soluble rocks such as limestone, and the minerals are carried away." }] },
        { id: "e2", label: "b)", type: "text", prompt: "Attrition and abrasion both involve the river's load. Explain the difference between them: which one wears away the channel, and which one changes the load itself?" },
        { type: "heading", text: "Part 2: The four types of transportation" },
        { type: "html", html: TRANSPORT_ANIM },
        { id: "t1", label: "a)", type: "match", termCol: "Transport process", defCol: "Definition (choose the matching one)", noExample: true, prompt: "Match each type of transportation to its definition.",
          items: [{ t: "Traction", d: "The largest boulders roll or slide along the river bed." },
            { t: "Saltation", d: "Smaller stones and pebbles bounce along the bed in a leap-frogging motion." },
            { t: "Suspension", d: "Fine sand, silt and clay are carried along within the body of the water." },
            { t: "Solution", d: "Minerals are dissolved in the water, like sugar in a cup of tea, and carried downstream unseen." }] },
        { id: "t2", label: "", type: "mcq", noReason: true, prompt: "Quick check", items: [
          { q: "Which type of transport needs the most energy?", o: ["Traction", "Saltation", "Suspension", "Solution"], a: 0 },
          { q: "After heavy rain the river turns brown. Which type of transport is mainly responsible?", o: ["Traction", "Saltation", "Suspension", "Solution"], a: 2 },
          { q: "Which load would you NOT be able to see in the water?", o: ["Traction", "Saltation", "Suspension", "Solution"], a: 3 }] },
        { type: "heading", text: "Part 3: Deposition" },
        { id: "d1", label: "a)", type: "text", prompt: "Define deposition." },
        { id: "d2", label: "", type: "match", termCol: "What the river is doing", defCol: "Load it deposits (choose one)", noExample: true, prompt: "Now complete the worksheet: as the river loses energy, which load does it drop at each point?",
          items: [{ t: "1. River flowing fast", d: "Boulders" }, { t: "2. River slowing", d: "Pebbles and rocks" }, { t: "3. River slows to a trickle", d: "Small stones and pebbles" }, { t: "4. River almost at a standstill", d: "Sediment such as clay and silt" }] },
        { type: "heading", text: "b) When will deposition occur in a channel?", note: "Use the velocity tester first, then sort the situations." },
        { type: "html", html: VEL_TESTER },
        { id: "d3", label: "i)", type: "sort", cardCol: "Situation", binCol: "Deposition or erosion?", prompt: "Will each situation mainly cause deposition or erosion?", bins: ["Deposition likely", "Erosion likely"],
          cards: [{ t: "The river enters a lake or the sea", a: ["Deposition likely"] }, { t: "The inside bend of a meander, where water is slow and shallow", a: ["Deposition likely"] },
            { t: "Discharge falls after a storm (the falling limb of the hydrograph)", a: ["Deposition likely"] }, { t: "Flood water spreads out over the floodplain", a: ["Deposition likely"] },
            { t: "Flow enters shallow water or moves over vegetation, increasing friction", a: ["Deposition likely"] }, { t: "A landslide suddenly adds a large amount of load", a: ["Deposition likely"] },
            { t: "Discharge rises quickly during a storm (the rising limb)", a: ["Erosion likely"] }, { t: "The outside bend of a meander, where water is fast and deep", a: ["Erosion likely"] },
            { t: "A steep upland channel after heavy rain", a: ["Erosion likely"] }, { t: "The channel narrows through a gorge, speeding the flow up", a: ["Erosion likely"] }] },
        { id: "d4", label: "ii)", type: "text", prompt: "Using the velocity tester and your sort, explain when deposition will occur in a river channel. Refer to velocity, discharge and the size of the load." }
      ]
    }, {
      kind: "lesson", open: true, inline: true, afterCard: 2,
      title: "Erosion, transportation and deposition",
      intro: "",
      parts: [
        { type: "banner", src: "/images/flip/banner-connect.jpg", alt: "Connect" },
        { type: "heading", text: "Starter: types of erosion, transportation and deposition", note: "Go to the large whiteboards. In pairs, draw diagrams to explain the four processes of erosion, the four processes of transportation, and deposition." },
        { type: "html", html: WHITEBOARD },
        { id: "w1", label: "", type: "text", prompt: "Which process was hardest to show in a diagram, and how did you and your partner solve it?" },
        { type: "banner", src: "/images/flip/banner-demonstrate.jpg", alt: "Demonstrate" },
        { type: "heading", text: "Activity 1: Long and cross-profiles" },
        { type: "html", html: LONGPROFILE_SVG },
        { id: "a1", label: "", type: "table", prompt: "Define the following.", cols: ["Term", "Definition"], rows: ["A) Long profile", "B) Cross-profile", "C) Base level"] },
        { type: "heading", text: "Activity 2: Summary of long profile changes", note: "In pairs, decide where each description applies. We will then discuss how all of these change as a river flows downstream." },
        { id: "a2", label: "", type: "sort", cardCol: "Description", binCol: "Upper, middle or lower course?", prompt: "What occurs where? Choose the course for each description.", bins: ["Upper", "Middle", "Lower"],
          cards: [{ t: "The land is flat on either side of the river and is easily flooded at high tide", a: ["Lower"] },
            { t: "There is more rainfall here and a lot of surface run-off", a: ["Upper"] },
            { t: "The valley sides are flatter here", a: ["Middle", "Lower"] },
            { t: "The valley sides are very steep and there may be a waterfall", a: ["Upper"] },
            { t: "The river has formed wide, sweeping bends called meanders", a: ["Middle", "Lower"] },
            { t: "The river looks fast because the gradient is steep and the bed has large angular boulders", a: ["Upper"] },
            { t: "The river valley has interlocking spurs", a: ["Upper"] },
            { t: "The river erodes laterally rather than vertically; the gradient is gentler and the channel wider", a: ["Middle"] },
            { t: "The river is actually flowing at its fastest here", a: ["Lower"] },
            { t: "There is weathering on the valley sides", a: ["Upper"] },
            { t: "The bed has small rounded pebbles and fine silt", a: ["Lower", "Middle"] },
            { t: "Tributaries, surface run-off and groundwater have increased the volume of the river", a: ["Middle", "Lower"] },
            { t: "The river is deep here", a: ["Lower"] }] },
        { id: "a2b", label: "", type: "text", prompt: "Discussion: which description surprised you most? Use the Discharge lesson to explain why the river flows fastest in its lower course even though it looks slow." },
        { type: "heading", text: "Activity 3: The Hjulstr\u00f6m curve", note: "The graph below shows the Hjulstr\u00f6m curve. Both axes use a logarithmic scale, so each gridline is ten times the one before." },
        { type: "html", html: HJULSTROM_SVG },
        { id: "j1", label: "a)", type: "text", prompt: "Describe what the relationship shows in the graph." },
        { id: "j2", label: "", type: "table", prompt: "", cols: ["Term", "Definition"], rows: ["b) Competence", "c) Capacity"] },
        { id: "j3", label: "", type: "questions", letters: true, prompt: "Now answer these questions using the graph. Notice the command term in each question. Total: 18 marks.",
          links: [{ label: "Self-marking practice: Freshwater questions (Hjulstr\u00f6m curve)", url: "/geography/revision/paper-questions/freshwater" }],
          rows: ["State the minimum water velocity at which particles are eroded. (1)", "State the particle size for the water velocity in question a. (1)", "What is the maximum size of particle that can be transported at a velocity of 10 cm/s? (1)",
            "State three ways in which the load of a river is transported. (3)", "Describe the variations in the boundary between erosion and transport. (3)", "Explain the variations that you have described. (5)",
            "Explain why the water velocity range for transport varies for particles from 0.01 to 1.0 mm in size. (4)"] },
        { type: "banner", src: "/images/flip/banner-reflect.jpg", alt: "Reflect" },
        { type: "heading", text: "Activity 4: Review your learning", note: "Practise the flashcards, then try the quiz." },
        { type: "linkcard", url: "https://quizlet.com/7466664/as-hjulstrom-curve-flash-cards/", icon: "Q", title: "The Hjulstr\u00f6m curve", sub: "Quizlet: flashcards, learn and test" },
        { type: "linkcard", url: "https://wayground.com/activity/signup/qdp?quizId=5ebb02b3058d13001b9f5d41&fromPage=/admin/quiz/5ebb02b3058d13001b9f5d41/rivers-erosion-transportation-and-deposition&action=preview&ctaSource=use_activity_cta", icon: "W", title: "Rivers: erosion, transportation and deposition", sub: "Wayground quiz (22 questions)" }
      ]
    }],
    FW04: [{
      title: "Drawing, labelling and explaining river landforms",
      overview: {
        heading: "How physical processes influence drainage basin systems and landforms",
        intention: "To describe and explain physical patterns and processes.",
        syllabus: ["The formation of typical river landforms, including waterfalls, floodplains, meanders, levees and deltas."],
        success: ["Describe and explain the formation of a waterfall.", "Describe and explain the formation of floodplains and associated features in the middle and lower course, such as meanders and levees.",
          "Describe and explain the conditions required for, and the formation of, deltas."] },
      intro: "For this section of the syllabus you need to be able to draw, label and explain in detail, using geographical terminology, six landforms. For each one: study the diagram, label it, then write your explanation. Copy the diagrams into OneNote (Copy to OneNote includes them) and practise drawing them from memory.",
      parts: [
        { type: "heading", text: "1: Waterfalls and gorges" },
        { type: "html", html: LF_WATERFALL },
        { id: "w1", label: "a)", type: "match", termCol: "Label", defCol: "Feature (choose one)", noExample: true, prompt: "Label the diagram.",
          items: [{ t: "Number 1", d: "More resistant (hard) rock" }, { t: "Number 2", d: "Less resistant (soft) rock" }, { t: "Number 3", d: "Overhang of unsupported rock" }, { t: "Number 4", d: "Plunge pool" }, { t: "Number 5", d: "Fallen rocks" }, { t: "Number 6", d: "Gorge" }] },
        { id: "w2", label: "b)", type: "order", prompt: "Put the stages of waterfall formation in the correct order.", answer: ["B", "D", "F", "A", "E", "C"],
          cards: [{ k: "A", text: "The overhang becomes too heavy and collapses into the plunge pool." },
            { k: "B", text: "The river flows over a band of resistant rock lying on top of less resistant rock." },
            { k: "C", text: "The process repeats, so the waterfall retreats upstream and leaves a steep-sided gorge." },
            { k: "D", text: "The less resistant rock is eroded faster by hydraulic action and abrasion, undercutting the hard rock." },
            { k: "E", text: "The fallen rocks swirl around at the base, deepening the plunge pool by abrasion and increasing the undercutting." },
            { k: "F", text: "An overhang of unsupported resistant rock is left above the plunge pool." }] },
        { id: "w3", label: "c)", type: "text", words: [120, 250], prompt: "Use the video to draw, describe and explain the formation of waterfalls and gorges. Draw your diagram in OneNote, then write your explanation here.",
          note: "Include these terms as a minimum. Each one turns green when you use it.",
          mustUse: [["Resistant (hard) rock", "(?<!less )resistant|hard rock|harder rock"], ["Less resistant (soft) rock", "less resistant|soft rock|softer rock"], ["Overhang", "overhang|over hang"], ["Hydraulic action"], ["Abrasion", "abrasion|corrasion"], ["Plunge pool"], ["Differential erosion"], ["Retreat", "retreat"], ["Gorge", "gorge"]],
          links: [{ label: "Video: how waterfalls are formed", url: "https://www.youtube.com/watch?v=6t2FllizRN4" }] },
        { id: "w4", label: "d)", type: "text", prompt: "Extended learning: refer to a specific example of a waterfall, including its rock types.",
          before: '<div class="fl__tnote" style="background:var(--lh-teal-bg)"><b>Example: Gullfoss, Iceland.</b> Gullfoss is on the Hv\u00edt\u00e1 river in south-west Iceland. It falls in two steps, each formed by a layer of resistant basalt lava with softer sedimentary rocks between them. As it has retreated it has cut a gorge about 70 m deep and around 2.5 km long. You could use Gullfoss or research your own example, such as High Force (England) or Niagara Falls.</div>' },
        { type: "heading", text: "2: Floodplains and bluffs" },
        { type: "html", html: LF_FLOODPLAIN },
        { id: "f1", label: "a)", type: "match", termCol: "Label", defCol: "Feature (choose one)", noExample: true, prompt: "Label the diagram.",
          items: [{ t: "Number 1", d: "Bluff (steep valley side)" }, { t: "Number 2", d: "Floodplain (flat valley floor)" }, { t: "Number 3", d: "Layers of alluvium" }, { t: "Number 4", d: "River channel" }] },
        { id: "f2", label: "b)", type: "text", words: [100, 200], prompt: "Explain how a floodplain and its bluffs form. Include lateral erosion by migrating meanders and deposition of alluvium during floods." },
        { type: "heading", text: "3: Levees" },
        { type: "html", html: LF_LEVEE },
        { id: "l1", label: "a)", type: "match", termCol: "Label", defCol: "Feature (choose one)", noExample: true, prompt: "Label the diagram.",
          items: [{ t: "Number 1", d: "Levee" }, { t: "Number 2", d: "River channel at its normal level" }, { t: "Number 3", d: "Flood water level" }, { t: "Number 4", d: "Fine silt and clay deposited further away" }, { t: "Number 5", d: "Coarse sediment deposited first, next to the channel" }] },
        { id: "l2", label: "b)", type: "text", words: [100, 200], prompt: "Explain how levees form. Why is the coarsest material deposited closest to the channel?" },
        { type: "heading", text: "4: Meanders" },
        { type: "html", html: LF_MEANDER },
        { id: "m1", label: "a)", type: "match", termCol: "Label", defCol: "Feature (choose one)", noExample: true, prompt: "Label the diagram.",
          items: [{ t: "Number 1", d: "River cliff" }, { t: "Number 2", d: "Point bar (slip-off slope)" }, { t: "Number 3", d: "Thalweg (line of fastest flow)" }, { t: "Number 4", d: "Outside bend: fast, deep water and erosion" }, { t: "Number 5", d: "Inside bend: slow, shallow water and deposition" }] },
        { id: "m2", label: "b)", type: "text", words: [100, 200], prompt: "Explain how a meander forms and develops. Use the terms thalweg, helicoidal flow, lateral erosion, river cliff and point bar." },
        { type: "heading", text: "5: Ox-bow lakes" },
        { type: "html", html: LF_OXBOW },
        { id: "o1", label: "a)", type: "match", termCol: "Label", defCol: "Feature (choose one)", noExample: true, prompt: "Label the diagram.",
          items: [{ t: "Number 1", d: "The neck of the meander narrows" }, { t: "Number 2", d: "The river cuts through the neck during a flood" }, { t: "Number 3", d: "Ox-bow lake" }, { t: "Number 4", d: "Deposition seals off the old channel" }] },
        { id: "o2", label: "b)", type: "text", words: [80, 160], prompt: "Explain the four stages in the formation of an ox-bow lake." },
        { type: "heading", text: "6: Deltas" },
        { type: "html", html: LF_DELTA },
        { id: "d1", label: "a)", type: "match", termCol: "Label", defCol: "Feature (choose one)", noExample: true, prompt: "Label the diagram.",
          items: [{ t: "Number 1", d: "Main river channel" }, { t: "Number 2", d: "Distributary" }, { t: "Number 3", d: "Delta front (coastline)" }, { t: "Number 4", d: "Sea" }, { t: "Number 5", d: "Topset beds" }, { t: "Number 6", d: "Foreset beds" }, { t: "Number 7", d: "Bottomset beds" }] },
        { id: "d2", label: "b)", type: "questions", letters: true, prompt: "Answer these questions.",
          rows: ["What conditions are needed for a delta to form? (Think about the river's load, the sea's tides and currents, and what happens to the river's velocity.)", "Why does salt water (flocculation) help clay particles to settle?", "Name an example of a delta and describe its shape."] },
        { id: "d3", label: "c)", type: "text", words: [100, 200], prompt: "Explain how a delta forms, including the topset, foreset and bottomset beds." }
      ]
    }, {
      kind: "lesson", open: true, inline: true, afterCard: 2,
      title: "Drawing, labelling and explaining middle and lower river landforms",
      intro: "",
      parts: [
        { type: "banner", src: "/images/flip/banner-connect.jpg", alt: "Connect" },
        { type: "heading", text: "Starter 1: Whiteboard time", note: "I will talk you through what to draw. Produce labelled diagrams on the large whiteboards." },
        { type: "html", html: WB_LANDFORMS },
        { type: "heading", text: "Starter 2: Name the landforms", note: "How many middle and lower course landforms can you name from the pictures?" },
        { type: "html", html: STARTER_PICS },
        { id: "s2", label: "", type: "table", prompt: "", cols: ["Picture", "Landforms I can name"], rows: ["Picture A", "Picture B", "Picture C", "Picture D"] },
        { type: "banner", src: "/images/flip/banner-demonstrate.jpg", alt: "Demonstrate" },
        { type: "heading", text: "a) Meanders", note: "Use the videos and animations to draw, describe and explain the formation of meanders. Aim to draw a sequence of diagrams showing how a straight river develops into a meandering river, using the correct terminology." },
        { type: "html", html: MEANDER_DEV },
        { type: "html", html: MEANDER_GEOM },
        { id: "m1", label: "i)", type: "text", words: [200, 400], prompt: "Draw your sequence of diagrams in OneNote, then describe and explain the formation of meanders here.", note: "Include these terms as a minimum. Each one turns green when you use it.",
          mustUse: [["Meander", "meander"], ["Outer bend", "outer bend|outside bend"], ["Erosion", "erosion|erode"], ["Inner bend", "inner bend|inside bend"], ["Deposition", "deposit"], ["River cliff", "river cliff"], ["Slip-off slope / point bar", "slip.off slope|point bar"], ["Helicoidal flow", "helicoidal"], ["Thalweg", "thalweg"], ["Meander wavelength", "wave.?length"], ["Meander width", "meander width|width of the meander"], ["Crest", "crest"], ["Deep water", "deep"], ["Shallow water", "shallow"], ["Corrasion", "corrasion|abrasion"], ["Hydraulic action", "hydraulic action"], ["Lateral erosion", "lateral"], ["Fastest flow", "fastest"], ["Slowest flow", "slowest"], ["Pools and riffles", "pool.*riffle|riffle.*pool"]] },
        { type: "heading", text: "Extended learning", note: "Refer to a specific example (possibly including rock type), calculate a sinuosity index, and explain how meander migration creates a line of bluffs." },
        { type: "html", html: SINUOSITY },
        { type: "heading", text: "ii) Meander migration and bluffs", note: "Use this structure to explain how meander migration develops a line of bluffs." },
        { id: "m2", label: "", type: "cloze", prompt: "",
          text: "As the river flows downstream it becomes deeper and [[wider]]. The erosion on the [[outer]] bend of the meander [[widens]] the valley floor, while [[deposition]] builds up alluvium on the valley floor. At the same time, erosion and deposition cause the meanders to [[migrate]] gradually downstream. This creates a line of [[river]] [[bluffs]] along the edge of the valley floor." },
        { id: "m3", label: "iii)", type: "text", prompt: "Refer to a specific example of a meandering river. Include its sinuosity index if you can find the measurements, and the rock type if relevant." },
        { type: "heading", text: "b) Ox-bow lakes", note: "Draw a diagram in OneNote to show how a fully developed meander can develop into an ox-bow lake, then explain it step by step." },
        { type: "html", html: LF_OXBOW },
        { id: "o1", label: "i)", type: "order", prompt: "Put these statements in order to explain the formation of an ox-bow lake.", answer: ["J", "I", "L", "A", "F", "M", "K", "D", "H", "E", "B", "G", "C"],
          cards: [{"k": "A", "text": "Deposition occurs on the convex banks because of slack water flow."}, {"k": "B", "text": "When enough deposition has taken place, the cut-off is sealed off from the main river channel."}, {"k": "C", "text": "An ox-bow lake may not be permanent: the water may dry up and it fills with sediment and vegetation."}, {"k": "D", "text": "A new, straighter river channel is created, through which the river now flows."}, {"k": "E", "text": "Deposition can now take place next to the riverbank."}, {"k": "F", "text": "Over time, the meander becomes very pronounced."}, {"k": "G", "text": "An ox-bow lake is now formed."}, {"k": "H", "text": "An abandoned meander loop, called a cut-off, is formed."}, {"k": "I", "text": "Rivers in the lower course meander widely across the low-lying floodplain."}, {"k": "J", "text": "An ox-bow lake is a horseshoe or crescent-shaped lake."}, {"k": "K", "text": "The narrow neck of land between the two concave banks is eventually cut through, by lateral erosion or by strong currents during a flood."}, {"k": "L", "text": "Lateral erosion and undercutting occur on the concave banks, where stream flow is fastest."}, {"k": "M", "text": "Two neighbouring concave banks get closer."}] },
        { id: "o2", label: "ii)", type: "text", words: [120, 250], prompt: "Now explain the formation of an ox-bow lake step by step in your own words, referring to your diagram.",
          mustUse: [["Meander", "meander"], ["Neck", "neck"], ["Lateral erosion", "lateral"], ["Concave bank", "concave|outer bend|outside bend"], ["Convex bank", "convex|inner bend|inside bend"], ["Flood", "flood"], ["Cut-off", "cut.?off"], ["Deposition", "deposit"], ["Ox-bow lake", "ox.?bow"]] },
        { type: "heading", text: "c) Floodplains and levees", note: "Draw, describe and explain the formation of floodplains and levees." },
        { type: "html", html: LF_FLOODPLAIN },
        { type: "html", html: LF_LEVEE },
        { id: "c1", label: "i)", type: "text", words: [150, 300], prompt: "Draw your diagrams in OneNote, then describe and explain the formation of floodplains and levees here.", note: "Include these terms as a minimum. Each one turns green when you use it.",
          mustUse: [["Floodplain", "flood.?plain"], ["Levees", "levee"], ["Pebbles", "pebble"], ["Sand", "sand"], ["Silt", "silt"], ["Clay", "clay"], ["Flooding", "flood"], ["Alluvium", "alluvi"], ["Overflow", "overflow|over.?top|burst"], ["Deposition", "deposit"], ["Coarse particles", "coarse"], ["Fine particles", "fine"]] },
        { id: "c2", label: "ii)", type: "text", prompt: "Extended learning: to what extent is the floodplain a depositional or an erosional landform?" },
        { type: "heading", text: "d) Deltas: large whiteboard time", note: "Draw, describe and explain the formation of deltas on the large whiteboards, then photograph your board for OneNote." },
        { type: "html", html: LF_DELTA },
        { id: "e1", label: "i)", type: "text", words: [150, 300], prompt: "Describe and explain the formation of deltas.", note: "Include these terms as a minimum. Each one turns green when you use it.",
          mustUse: [["Mouth", "mouth"], ["Alluvium", "alluvi"], ["Erosion in the river", "erosion|erode"], ["Sediment", "sediment"], ["Flocculation", "floccul"], ["Vegetation", "vegetation"], ["Distributaries", "distributar"]] },
        { type: "heading", text: "Extended learning", note: "Name and draw the different types of delta. What conditions are needed in the river and at the mouth for a delta to form?" },
        { type: "html", html: DELTA_TYPES },
        { id: "e2", label: "ii)", type: "table", prompt: "Types of delta", cols: ["Type of delta", "Shape and how it forms", "Example"], rows: ["Arcuate", "Bird\u2019s-foot", "Cuspate"] },
        { id: "e3", label: "iii)", type: "table", prompt: "Conditions needed for a delta to form", cols: ["Where", "Conditions"], rows: ["In the river", "At the mouth"] },
        { type: "banner", src: "/images/flip/banner-reflect.jpg", alt: "Reflect" },
        { type: "heading", text: "Review your learning", note: "Practise the key terms for the whole Freshwater unit so far. The 10-mark challenge question for this lesson is in the Challenge Mode card." },
        { type: "linkcard", url: "https://quizlet.com/vn/147768321/ib-freshwater-key-terms-flash-cards/", icon: "Q", title: "IB Freshwater key terms", sub: "Quizlet: flashcards, learn and test" }
      ]
    }],
    FW02: [{
      kind: "lesson", open: true, inline: true, afterCard: 2,
      title: "Discharge",
      overview: {
        heading: "How physical processes influence drainage basin systems and landforms",
        intention: "To explain the systems approach.",
        syllabus: ["River discharge and its relationship to stream flow, channel characteristics and hydraulic radius."],
        success: ["Define discharge and know how to calculate it.", "Explain how the river channel changes with distance from its source in terms of shape, gradient and bed roughness.",
          "Explain and calculate variations of the hydraulic radius within the river channel.", "Explain how and why discharge changes downstream."] },
      intro: "",
      parts: [
        { type: "banner", src: "/images/flip/banner-connect.jpg", alt: "Connect" },
        { type: "heading", text: "Starter: key words bingo", note: "A random card of hydrological cycle words is made for you." },
        { id: "bg", label: "", type: "bingo", prompt: "", words: ["Transfer", "Soil moisture", "Interception", "Overland flow / surface run-off", "Groundwater flow", "Relief", "Groundwater / aquifer", "Percolation", "Cryosphere", "Frontal", "Throughflow", "Water table", "Precipitation", "Infiltration", "Output", "Transpiration", "Store", "Evapotranspiration", "Surface storage", "Input", "Stemflow", "Channel flow", "Convectional", "Orographic"] },
        { type: "banner", src: "/images/flip/banner-demonstrate.jpg", alt: "Demonstrate" },
        { type: "heading", text: "Activity 1: Defining discharge" },
        { type: "html", html: DISCHARGE_SVG },
        { id: "d1", label: "a)", type: "text", prompt: "Write down the definition of discharge and all the associated terminology (units included)." },
        { id: "d2", label: "b)", type: "mcq", prompt: "Quick calculations", items: [
          { q: "A river is 4 m wide with a mean depth of 0.5 m. What is its cross-sectional area?", o: ["0.2 m\u00b2", "2 m\u00b2", "4.5 m\u00b2", "8 m\u00b2"], a: 1 },
          { q: "The same river flows at 0.6 m/s. What is its discharge?", o: ["0.3 m\u00b3/s (cumecs)", "1.2 m\u00b3/s (cumecs)", "2.6 m\u00b3/s (cumecs)", "3.3 m\u00b3/s (cumecs)"], a: 1 },
          { q: "Hydraulic radius = cross-sectional area \u00f7 wetted perimeter. A channel has an area of 2 m\u00b2 and a wetted perimeter of 5 m. What is its hydraulic radius?", o: ["0.4 m", "2.5 m", "7 m", "10 m"], a: 0 },
          { q: "Which channel is the most efficient (least friction)?", o: ["Hydraulic radius 0.2 m", "Hydraulic radius 0.4 m", "Hydraulic radius 0.6 m", "They are all equally efficient"], a: 2 }] },
        { type: "heading", text: "Activity 2: More key terms", note: "These terms are very important for your coursework. Read them, then label the diagram. Make your own copy in OneNote." },
        { id: "k0", label: "", type: "table", prompt: "", given: true, cols: ["Term", "Definition"], rows: ["Bed", "Bank", "Channel", "Wetted perimeter", "Cross-sectional area"],
          prefill: { 0: ["The bottom of the river channel."], 1: ["The sides of the river channel."], 2: ["The confines of the river, including the bed and both banks."], 3: ["The total length of the bed and banks in contact with the water."], 4: ["The width of the river multiplied by its mean depth, usually in m². Depth varies across the river, so an average of several readings is used."] } },
        { type: "html", html: CHANNEL_SVG },
        { id: "k1", label: "a)", type: "match", termCol: "Label", defCol: "Feature (choose the matching one)", noExample: true, prompt: "Label the diagram.",
          items: [{ t: "Number 1", d: "Bed" }, { t: "Number 2", d: "Bank" }, { t: "Number 3", d: "Channel" }, { t: "Number 4", d: "Wetted perimeter" }, { t: "Number 5", d: "Cross-sectional area" }] },
        { id: "k2", label: "b)", type: "text", prompt: "As you move from the source to the mouth, both the discharge and the velocity of a river increase. Suggest why." },
        { type: "heading", text: "Activity 3: Channel shape and velocity" },
        { id: "v0", label: "a)", type: "table", prompt: "Velocity", given: true, cols: ["Term", "Definition"], rows: ["Velocity"],
          prefill: { 0: ["The speed at which the water in a river is travelling, normally measured in metres per second (m/s). It can be measured with a flow meter or, more commonly, by timing a floating object over a set distance. Velocity = distance (m) \u00f7 time (s)."] } },
        { id: "v1", label: "b)", type: "text", before: ISOVEL_SVG, prompt: "Isovels are lines joining points of equal velocity (a type of isoline). Join the dots to draw the isovels, then describe where the water flows fastest and explain why." },
        { id: "v2", label: "c)", type: "table", before: FLOW_SVG, prompt: "Describe and define the different types of flow in a river. You may need to search for these.",
          cols: ["Type of flow", "Definition and description"], rows: ["i) Laminar flow", "ii) Turbulent flow"] },
        { id: "v3", label: "d)", type: "mcq", prompt: "Choose the correct word in each statement, then write the completed statements in OneNote.", items: [
          { q: "A river in a deep, broad channel, often with a gentle gradient and a small bed load, will have a ____ velocity than a river in a shallow, narrow, rock-filled channel, even if the second river is steeper.", o: ["greater", "lesser"], a: 0 },
          { q: "The velocity of a river ____ as it nears the sea.", o: ["increases", "decreases"], a: 0 },
          { q: "Velocity ____ as the depth, width and discharge of a river all increase.", o: ["increases", "decreases"], a: 0 },
          { q: "As bed roughness ____, so does turbulence and the river's ability to pick up and transport sediment.", o: ["increases", "decreases"], a: 0 }] },
        { type: "html", html: CHANNELS_SVG },
        { id: "v4", label: "e)", type: "text", before: NATURAL_ISO, prompt: "Channel (a) already has its isovels. Complete the isovels for the natural channel (b) by joining points of equal velocity. Then compare the two: where is the fastest flow in each channel, and why is the natural channel slower overall?" },
        { type: "heading", text: "Activity 4: Calculating the hydraulic radius" },
        { type: "html", html: HR_SVG },
        { id: "h1", label: "a)", type: "table", prompt: "Work out the hydraulic radius of the two worked examples. Show your working.", cols: ["Channel", "Cross-sectional area (m²)", "Wetted perimeter (m)", "Hydraulic radius (m)"], rows: ["Channel A (green)", "Channel B (orange)"] },
        { id: "h2", label: "", type: "mcq", noReason: true, prompt: "Check your answers", items: [
          { q: "What is the hydraulic radius of Channel A (green)?", o: ["0.35 m", "2.86 m", "3.5 m", "5 m"], a: 1 },
          { q: "What is the hydraulic radius of Channel B (orange)?", o: ["0.65 m", "1.54 m", "2.86 m", "4 m"], a: 1 }] },
        { id: "h3", label: "b)", type: "text", prompt: "Which colour channel is more efficient, and why?" },
        { id: "h4", label: "c)", type: "questions", letters: true, prompt: "Produce these on the large whiteboards, then photograph them for your OneNote.",
          before: '<div class="fl__tnote" style="background:var(--lh-teal-bg)"><b>Question 1.</b> Velocity increases downstream even though the gradient of the channel falls. Using the Bradshaw model (Activity 7) and your knowledge of hydraulic geometry, explain why.<br><b>Question 2.</b> River A is 2 m deep and 12 m wide. River B is 4 m deep and 6 m wide.</div>',
          rows: ["Answer Question 1.", "Draw a diagram of each river to show its wetted perimeter.", "Calculate the wetted perimeter of each river.", "Calculate the hydraulic radius of each river.", "Which river is more efficient?"] },
        { id: "h5", label: "", type: "mcq", noReason: true, prompt: "Check your Question 2 answers", items: [
          { q: "Wetted perimeter of River A?", o: ["14 m", "16 m", "24 m", "26 m"], a: 1 },
          { q: "Wetted perimeter of River B?", o: ["10 m", "14 m", "16 m", "24 m"], a: 1 },
          { q: "Hydraulic radius of River A and River B?", o: ["A 1.5 m, B 1.71 m", "A 1.71 m, B 1.5 m", "Both 1.5 m", "A 2 m, B 4 m"], a: 0 },
          { q: "Which river is more efficient?", o: ["River A", "River B", "Both the same: they have the same area"], a: 1 }] },
        { id: "h6", label: "d)", type: "text", before: BANKFULL_SVG, prompt: "The survey shows three water levels in the same channel. How does the hydraulic radius change as the water rises from below bank to bankfull? What happens to efficiency once the river spills over its banks onto the floodplain?" },
        { type: "heading", text: "Activity 5: Manning's bed roughness coefficient" },
        { type: "html", html: '<div class="fl__tnote" style="background:var(--lh-teal-bg)"><p style="margin:0 0 .5rem">A river flowing over large, angular boulders between banks of coarse material meets far more resistance than a river with a bed and banks of smooth, cohesive clay and silt. The rougher the bed and banks, the more turbulence, which is why a mountain stream can still pick up loose material and carry it downstream.</p><p style="margin:0 0 .5rem">Roughness is hard to measure, so the engineer Robert Manning produced a roughness coefficient (<i>n</i>) that links the three main factors controlling a river’s velocity:</p><p style="text-align:center;font-size:1.15rem;margin:.6rem 0"><b>V = R<sup>0.67</sup> × S<sup>0.5</sup> ÷ n</b></p><p style="margin:0">V = velocity, R = hydraulic radius, S = channel slope (gradient), n = boundary roughness. The higher the value of <i>n</i>, the rougher the bed and banks.</p></div>' +
          '<div class="fl__scroll" style="margin-top:.6rem"><table style="max-width:560px"><thead><tr><th>Bed profile</th><th>Sand and gravel</th><th>Coarse gravel</th><th>Boulders</th></tr></thead><tbody><tr><th>Uniform</th><td>0.02</td><td>0.03</td><td>0.05</td></tr><tr><th>Undulating</th><td>0.05</td><td>0.06</td><td>0.07</td></tr><tr><th>Highly irregular</th><td>0.08</td><td>0.09</td><td>0.10</td></tr></tbody></table></div>' },
        { id: "m1", label: "", type: "questions", letters: true, prompt: "Study the idea behind Manning’s coefficient and explain the concept.",
          rows: ["What three factors did Manning link together?", "What is bed roughness like upstream?", "What is bed roughness like downstream?", "How does bed roughness affect velocity?"] },
        { id: "m2", label: "", type: "mcq", noReason: true, prompt: "Quick check", items: [
          { q: "Which bed has the lowest roughness value?", o: ["Uniform sand and gravel", "Undulating coarse gravel", "Highly irregular boulders", "Uniform boulders"], a: 0 },
          { q: "If n doubles and the hydraulic radius and slope stay the same, velocity will…", o: ["double", "stay the same", "halve", "quadruple"], a: 2 }] },
        { type: "heading", text: "Activity 6: Explain the factors that affect velocity", note: "We can now explain all the factors that affect velocity and discharge in a river." },
        { id: "e1", label: "1.", type: "table", prompt: "Briefly explain the impact each factor has on velocity.", cols: ["Factor", "Impact on velocity"], rows: ["a. Gradient", "b. Hydraulic radius", "c. Bed roughness"] },
        { id: "e2", label: "2.", type: "text", prompt: "Explain why velocity changes downstream." },
        { id: "e3", label: "3.", type: "text", prompt: "Explain why cross-sectional area changes downstream." },
        { id: "e4", label: "4.", type: "text", prompt: "Explain why discharge changes downstream." },
        { type: "heading", text: "Activity 7: River models: the Bradshaw model", note: "The Bradshaw model includes the river's load, so read these definitions first." },
        { id: "r0", label: "", type: "table", prompt: "", given: true, cols: ["Type of load", "Definition"], rows: ["Suspended load", "Bedload", "Dissolved (solution) load"],
          prefill: { 0: ["Fine material (clay, silt and fine sand) light enough to be held up and carried within the body of the water."], 1: ["Larger material that moves along the bed by rolling, sliding or saltating (bouncing). It may come from inside the channel or be supplied from outside it, for example from the valley sides."], 2: ["Minerals carried in solution. They can come from chemical weathering, erosion of soluble rock, mineral springs and pollution."] } },
        { id: "b1", label: "a)", type: "text", before: BRADSHAW_SVG, prompt: "Describe what the Bradshaw model shows, then explain it." },
        { type: "heading", text: "Activity 8: River models: the Schumm model", note: "Like the Bradshaw model, this theoretical model shows how river variables change from source to mouth. You can use either model to write hypotheses for your Internal Assessment." },
        { id: "s1", label: "b)", type: "text", before: SCHUMM_SVG, prompt: "Describe how each variable changes from source to mouth, and say how the Schumm model compares with the Bradshaw model." },
        { type: "heading", text: "Activity 9: Past paper practice" },
        { id: "pq", label: "", type: "questions", prompt: "Write your answer, then mark it with the self-marking practice bot.",
          links: [{ label: "Self-marking practice: Freshwater questions", url: "/geography/revision/paper-questions/freshwater" }],
          rows: ["Explain how stream discharge is related to channel size and shape. (6)"] },
        { type: "banner", src: "/images/flip/banner-reflect.jpg", alt: "Reflect" },
        { type: "heading", text: "Exit ticket" },
        { id: "x1", label: "", type: "text", prompt: "Explain how and why discharge changes downstream." }
      ]
    }],
    CP05: [{
      part: "5a",
      title: "Why do populations change, and how does population change affect people and places?",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to help you.",
      parts: [
        { type: "heading", text: "Part 1: Key terms",
          note: "Find the exact definitions of the following. Population momentum is harder to understand, so ask the bot to explain it and to describe how a population pyramid moves over time. Try to include a diagram or drawing to help you remember each term (sketch it in OneNote)." },
        { id: "a", label: "", type: "table", prompt: "Population key terms.",
          cols: ["Measure", "What it means and how it is measured", "Diagram to represent it"],
          rows: ["Natural increase", "Population growth rate",
            "#Measures of fertility", "Crude birth rate", "Total fertility rate", "General fertility rate",
            "#Measures of mortality", "Crude death rate", "Life expectancy", "Infant mortality rate",
            "#Population structure", "Dependency ratio", "Ageing ratio", "Replacement level", "Doubling time", "Population momentum", "Population projections"],
          links: [{ label: "Video: What is a dependency ratio?", url: "https://www.youtube.com/watch?v=t0kAO4p5bmk" }] },
        { type: "heading", text: "Part 2: Interpreting the demographic transition model",
          note: "Study the model below and complete the table to show what is happening at each stage. Stage 1 has been done to help you." },
        { type: "html", html: IMG("cp05-dtm", "Demographic transition model", DTM_SVG) },
        { id: "b", label: "", type: "table", prompt: "What happens at each stage?",
          cols: ["DTM stage", "Birth rate", "Death rate", "Natural increase", "Total population", "Reasons for total population change"],
          rows: ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5"],
          prefill: { 0: ["High", "High", "Low", "Low", "Birth and death rates are both high and fluctuating, so total population is low and fluctuates."] } },
        { type: "heading", text: "Part C: Predict", note: "Answer in two or three sentences." },
        { id: "c", label: "", type: "questions", prompt: "",
          rows: [
            "During which DTM stage is natural increase usually greatest?",
            "Why does the death rate normally fall before the birth rate?",
            "Why might the population continue growing after the fertility rate has fallen?"
          ] }
      ]
    }, {
      part: "5b",
      title: "Population pyramids and death rate factors",
      intro: "Complete this before the lesson. Watch the video first, then work through the activities. Use the Teach Me Live bot on this page if you get stuck.",
      parts: [
        { type: "heading", text: "Part 1: What are population pyramids?" },
        { id: "a", type: "text", prompt: "Watch the video to learn how to interpret population pyramids for countries at contrasting levels of economic development. Write down three things you learned.",
          links: [{ label: "Video: Population pyramids: powerful predictors of the future (Kim Preshoff, TED-Ed)", url: "https://www.youtube.com/watch?v=RLmKfXwWQtE" }] },
        { id: "b", type: "table", before: IMG("cp05-pyramids", "Two population pyramids, A and B", PYRAMIDS), prompt: "Study the two pyramids. Which one is a rich country and which is a poor country? Use the PPT for help, and consider the shape, the base and the top.",
          note: "If in doubt, ask the bot about appropriate labels.",
          cols: ["", "Pyramid A", "Pyramid B"],
          rows: ["Rich or poor country?", "The shape of the pyramid", "The base", "The top", "Labels you would add to the graph"] },
        { id: "c", type: "table", prompt: "Pyramids and the DTM: find a pyramid that you think is connected with each stage of the DTM.",
          note: "Paste the pyramid images into OneNote. Use the table to record the country and why it fits that stage.",
          cols: ["DTM stage", "Example country", "Why this pyramid fits the stage"],
          rows: ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5"] },
        { type: "heading", text: "Part 2: Death rate factors",
          note: "Complete the table for factors that increase or decrease death rates, applying SEEP (social, economic, environmental, political)." },
        { id: "d", label: "", type: "table", prompt: "",
          cols: ["Factor", "Decrease or increase death rate? Explain how", "SEEP"],
          rows: ["Healthcare", "Water and sanitation", "Food and nutrition", "Living conditions", "Education", "Government and infrastructure", "Environment", "War"] }
      ]
    }]
  };

  FLIP.RC09 = FLIP.RC08;
  /* Lessons defined in other files (e.g. /js/sbl-ks3-lessons.js) register here. */
  var EXTRA = window.SBL_FLIP_EXTRA || {};
  Object.keys(EXTRA).forEach(function (k) { FLIP[k] = EXTRA[k]; });
  window.SBL_FLIP_IDS = Object.keys(FLIP);
  var overlay = document.querySelector("[data-lesson-id]");
  var id = overlay && overlay.getAttribute("data-lesson-id");
  var list = id && FLIP[id];
  var modes = document.querySelector(".lh-modes");
  if (!list || !modes) return;
  if (!Array.isArray(list)) list = [list];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function box(saved, key, label, rows, cell) {
    return '<textarea class="fl-in" data-k="' + key + '" rows="' + (rows || 2) + '"' + (cell ? ' data-voice="off"' : "") + ' aria-label="' + esc(label) + '">' + esc(saved[key] || "") + "</textarea>";
  }
  function isGroup(r) { return r.charAt(0) === "#"; }
  function tableCols(p) { return p.type === "terms" ? ["Key term", "Definition"] : p.cols; }
  function cellKey(p, i, c) { return p.type === "terms" ? p.id + i : p.id + i + "_" + c; }

  var css = document.createElement("style");
  css.textContent =
    ".fl{margin:0 0 1.2rem;background:var(--lh-surface);border:1px solid var(--lh-border);border-left:5px solid var(--lh-teal);border-radius:14px;overflow:hidden}" +
    ".fl>summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:.9rem;padding:1rem 1.2rem}" +
    ".fl>summary::-webkit-details-marker{display:none}" +
    ".fl__icon{flex:none;width:42px;height:42px;border-radius:12px;display:grid;place-items:center;background:var(--lh-teal-bg);color:var(--lh-teal-deep)}" +
    ".fl__icon svg{width:22px;height:22px}" +
    ".fl__logo{flex:none;font:800 1.55rem/1 var(--lh-font-display);letter-spacing:-.01em;padding-right:1rem;margin-right:.1rem;border-right:1px solid var(--lh-border)}" +
    ".fl__logo-a{color:#13284b}.fl__logo-b{color:#1a9a9a}" +
    ".fl__sub{display:block;margin-top:.15rem;font-size:.8rem;color:var(--lh-muted)}" +
    "@media (max-width:640px){.fl__logo{font-size:1.15rem;padding-right:.6rem}.fl__state{display:none}}" +
    ".fl__h{flex:1}.fl__eyebrow{font:500 .7rem var(--lh-font-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--lh-teal-deep)}" +
    ".fl__title{margin:.1rem 0 0;font:700 1.02rem var(--lh-font-display);color:var(--lh-ink)}" +
    ".fl__state{font-size:.8rem;color:var(--lh-muted);white-space:nowrap}" +
    ".fl__chev{width:18px;height:18px;color:var(--lh-muted);transition:transform .2s}.fl[open] .fl__chev{transform:rotate(180deg)}" +
    ".fl__body{padding:0 1.2rem 1.2rem;border-top:1px solid var(--lh-border)}" +
    ".fl__top{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center}" +
    ".fl__banner{display:block;width:100%;max-width:900px;height:auto;border-radius:10px;margin:1rem auto 0}" +
    ".fl__intro{margin:1rem 0 .6rem;color:var(--lh-body)}.fl__cover{margin:-.3rem 0 .8rem 1.2rem;padding:0;color:var(--lh-body)}" +
    ".fl__bot{display:inline-flex;align-items:center;gap:.4rem;border:0;border-radius:999px;padding:.5rem 1rem;background:var(--lh-indigo);color:#fff;font:600 .85rem var(--lh-font-body);cursor:pointer}" +
    ".fl__part{margin-top:1.3rem}.fl__q{font-weight:600;color:#6b2fa3;margin:0 0 .5rem}.fl__q b{display:inline-block;min-width:1.6rem;margin-right:.3rem;color:#6b2fa3}" +
    ".fl__head{margin:2rem 0 .2rem;padding-top:1rem;border-top:2px solid var(--lh-teal-bg);font:700 1.05rem var(--lh-font-display);color:var(--lh-teal-deep)}" +
    ".fl__head+.fl__note{margin-top:.2rem}" +
    ".fl__scroll{overflow-x:auto}" +
    ".fl table{width:100%;border-collapse:collapse;font-size:.88rem}.fl th,.fl td{border:1px solid var(--lh-border);padding:.4rem;vertical-align:top;text-align:left}" +
    ".fl th{background:var(--lh-teal-bg);color:var(--lh-ink);font-weight:600}.fl td.fl__rh{font-weight:600;color:var(--lh-ink);width:22%}" +
    ".fl td.fl__grp{background:var(--lh-bg);font-weight:700;color:var(--lh-teal-deep);text-transform:uppercase;font-size:.75rem;letter-spacing:.05em}" +
    ".fl td.fl__ex{font-style:italic;color:var(--lh-body);background:var(--lh-gold-bg)}" +
    ".fl td.fl__given{color:var(--lh-body)}" +
    ".fl__wide td{min-width:78px}.fl__wide td.fl__rh{width:13%}.fl__wide td:last-child{min-width:160px}" +
    ".fl-in{width:100%;box-sizing:border-box;border:1px solid var(--lh-border);border-radius:8px;padding:.45rem .55rem;font:inherit;font-size:.88rem;resize:vertical;background:var(--lh-bg)}" +
    ".fl td .fl-in{border-color:transparent;background:transparent;min-height:2.4rem}.fl td .fl-in:focus,.fl-in:focus{outline:2px solid var(--lh-teal);background:#fff}" +
    ".fl__vq{margin:.6rem 0 .25rem;color:#6b2fa3;font-weight:500}.fl__video{display:inline-block;margin:.1rem 1.2rem .6rem 0;color:var(--lh-blue);font-weight:600}" +
    ".fl__yts{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:.8rem;margin:.3rem 0 .3rem;max-width:760px}" +
    ".fl__yt{position:relative;aspect-ratio:16/9;border-radius:10px;overflow:hidden;background:#000}.fl__yt iframe{position:absolute;inset:0;width:100%;height:100%;border:0}" +
    ".fl__img{margin:.3rem 0 .6rem}.fl__img img{display:block;max-width:100%;max-height:520px;height:auto;border:1px solid var(--lh-border);border-radius:10px;background:#fff}" +
    ".fl__imgs{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:.8rem}" +
    ".fl__tnote{margin:.2rem 0 .8rem;padding:.55rem .8rem;border-radius:10px;background:var(--lh-gold-bg);color:var(--lh-ink);font-size:.9rem}" +
    ".fl__note{font-size:.95rem;color:#1a1a1a;margin:.2rem 0 .5rem}" +
    ".fl__actions{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;margin-top:1.4rem}" +
    ".fl__btn{border:1px solid var(--lh-teal);background:var(--lh-teal);color:#fff;border-radius:999px;padding:.5rem 1rem;font:600 .85rem var(--lh-font-body);cursor:pointer}" +
    ".fl__btn--ghost{background:transparent;color:var(--lh-teal-deep)}" +
    ".fl__pair{margin:.2rem 0 .8rem}" +
    ".fl-bingo__grid{position:relative;display:grid;grid-template-columns:repeat(4,1fr);gap:.35rem;max-width:520px;padding:.5rem;border-radius:12px;background:#21506b}" +
    ".fl-bingo__c{min-height:62px;border:0;border-radius:8px;background:#f2f8fb;color:#13324a;font:600 .85rem var(--lh-font-body);cursor:pointer;padding:.3rem}.fl-bingo__c.on{background:#f59e0b;color:#fff;text-decoration:line-through}" +
    ".fl-bingo__win{position:absolute;inset:0;display:grid;place-items:center;font:800 3rem var(--lh-font-display);color:#fff;background:rgba(15,110,86,.82);border-radius:12px;pointer-events:none}" +
    ".fl-anim__g{display:grid;grid-template-columns:1fr 1fr;gap:.8rem}.fl-anim__t{margin:0}.fl-anim__t figcaption{margin-top:.3rem;font-size:.88rem}.fl-anim__t figcaption b{display:block;color:var(--lh-teal,#0f766e)}.fl-anim__t figcaption span{color:var(--lh-muted,#555)}@media(max-width:640px){.fl-anim__g{grid-template-columns:1fr}}" +
    ".fl-vel{border:1px solid var(--lh-border);border-radius:10px;padding:.8rem;background:#fff}.fl-vel__top{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center}.fl-vel__top input{flex:1;min-width:220px;accent-color:#0f8a6e}.fl-vel__v{font-weight:700;color:#1f5e85}.fl-vel__rows{display:grid;gap:.35rem;margin:.7rem 0}.fl-vel__r{display:grid;grid-template-columns:10rem 1fr;gap:.6rem;align-items:center;font-size:.9rem}.fl-vel__s{padding:.25rem .6rem;border-radius:99px;font-weight:600;font-size:.85rem;transition:background .2s}.fl-vel__s.er{background:#fde2dd;color:#8a1c0f}.fl-vel__s.tr{background:#dbe8fb;color:#1d4f9a}.fl-vel__s.de{background:#efe3cf;color:#6b4a2b}" +
    ".fl-chat{display:grid;gap:.5rem;margin:.3rem 0 .6rem}.fl-chat p{margin:0;padding:.6rem .85rem;border-radius:14px;max-width:85%;font-size:.92rem;line-height:1.45}.fl-chat__a{background:#e8f0fb;justify-self:start;border-bottom-left-radius:4px}.fl-chat__b{background:#dcf3e8;justify-self:end;border-bottom-right-radius:4px}" +
    ".fl-scale{border:1px solid var(--lh-border);border-radius:12px;padding:.8rem 1rem;background:#fff}.fl-scale__q{font:700 1.05rem var(--lh-font-display);color:#13284b;text-align:center;margin-bottom:.6rem}.fl-scale__row{display:flex;align-items:center;gap:.8rem}.fl-scale__row b{flex:none;width:5.5rem;text-align:center;font-size:.9rem}.fl-scale__row input{flex:1;accent-color:#1fb8b8}" +
    ".fl-wt,.fl-eu{border:1px solid var(--lh-border);border-radius:12px;padding:.8rem;background:#fffaf2}.fl-eu{background:#f6f9fd;margin-top:.6rem}.fl-wt__h b,.fl-eu__h b{display:block;font:800 1.15rem var(--lh-font-display);color:#13284b}.fl-wt__h span,.fl-eu__h span{font-size:.8rem;color:#555}.fl-wt__stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:.5rem;margin:.6rem 0}.fl-wt__stats div{background:#fff;border-radius:10px;padding:.5rem .6rem;border:1px solid var(--lh-border)}.fl-wt__stats b{display:block;font:800 1.25rem var(--lh-font-display);color:#c2410c}.fl-wt__stats span{font-size:.8rem;line-height:1.3}.fl-wt__cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:.8rem}.fl-wt__cols h4{margin:0 0 .3rem}.fl-wt__p{display:flex;align-items:center;gap:.6rem;margin:.3rem 0}.fl-wt__p b{display:block;font-size:1.1rem}.fl-wt__p span{font-size:.82rem}.fl-eu__grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.7rem}.fl-eu__grid>div{background:#fff;border:1px solid var(--lh-border);border-radius:10px;padding:.6rem .7rem}.fl-eu__grid h4{margin:0 0 .3rem;color:#2a63b8}.fl-eu__grid ul{margin:0;padding-left:1.1rem;font-size:.86rem;line-height:1.45}" +
    ".fl-cw{--cw:30px}.fl-cw__wrap{overflow-x:auto;padding-bottom:.3rem}.fl-cw__g{display:grid;gap:2px;width:max-content;margin:0 auto}.fl-cw__g>div{width:var(--cw);height:var(--cw)}.fl-cw__c{position:relative;background:#fff;outline:1.5px solid #13284b}.fl-cw__c span{position:absolute;top:1px;left:2px;font-size:9px;font-weight:700;color:#13284b;pointer-events:none}.fl-cw__i{width:100%;height:100%;border:0;padding:6px 0 0;text-align:center;font:700 15px var(--lh-font-body);text-transform:uppercase;background:transparent;color:#13284b}.fl-cw__i:focus{outline:2px solid #6b2fa3;background:#f4ecfb}.fl-cw__i.ok{background:#dcf3e8}.fl-cw__i.bad{background:#fdecea;color:#b42318}.fl-cw__clues{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin:.8rem 0}.fl-cw__clues h4{margin:0 0 .3rem;color:#6b2fa3}.fl-cw__clues ol{margin:0;padding-left:1.8rem;font-size:.9rem;line-height:1.45}.fl-cw__clues li{margin:.2rem 0}@media(max-width:640px){.fl-cw{--cw:23px}.fl-cw__i{font-size:12px}}" +
    ".fl-qc{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:.8rem}.fl-qc__c{border:2px solid var(--c);border-radius:12px;padding:.7rem .8rem;background:#fff}.fl-qc__h{font:700 1rem var(--lh-font-display);color:var(--c);display:flex;align-items:center;gap:.4rem}.fl-qc__c .fl__vq{margin-top:.3rem}" +
    ".fl-rev__lock{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center}.fl-rev__in{padding:.45rem .6rem;border:1px solid var(--lh-border);border-radius:8px;font:inherit;width:12rem}.fl-rev__body{border:1px dashed #6b2fa3;border-radius:10px;padding:.8rem 1rem;background:#faf6ff;font-size:.93rem;line-height:1.55}.fl-rev__body p{margin:0 0 .6rem}" +
    ".fl-ig{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:.8rem}.fl-ig a{display:block;text-decoration:none;color:#13284b;font-weight:700;font-size:.9rem}.fl-ig img{width:100%;height:auto;display:block;border:1px solid var(--lh-border);border-radius:8px;margin-bottom:.3rem;box-shadow:0 2px 8px rgba(0,0,0,.08)}.fl-g2{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:.7rem}.fl-g2 svg{border:1px solid var(--lh-border);border-radius:8px}" +
    ".fl-wf{display:grid;gap:.6rem}.fl-wf__q{background:#13284b;color:#fff;border-radius:12px;padding:.8rem 1rem;font-weight:700;font-size:1.02rem}.fl-wf__q span{display:block;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:#7fd3d3;margin-bottom:.2rem}.fl-wf__s{display:grid;grid-template-columns:3rem 1fr;gap:.8rem;border:1px solid var(--lh-border);border-left:6px solid var(--c);border-radius:12px;padding:.8rem;background:#fff}.fl-wf__n{width:2.4rem;height:2.4rem;border-radius:50%;background:var(--c);color:#fff;display:grid;place-items:center;font:800 1.1rem var(--lh-font-display)}.fl-wf__s b{font-size:1.02rem;color:var(--c)}.fl-wf__chips{display:flex;flex-wrap:wrap;gap:.3rem;margin:.35rem 0}.fl-wf__chips i{font-style:normal;font-size:.78rem;padding:.15rem .55rem;border-radius:99px;background:#f1f4f7}.fl-wf__st{margin:.3rem 0 0;padding:.5rem .7rem;background:#f8fafc;border-radius:8px;font-style:italic;font-size:.9rem;line-height:1.5}ul.fl-wf__st{padding-left:1.6rem}" +
    ".fl-loc svg{width:100%;max-width:760px;height:auto;display:block;border:1px solid var(--lh-border);border-radius:10px}.fl-clue{border:1px solid var(--lh-border);border-radius:10px;margin:.35rem 0;background:#fff}.fl-clue>summary{cursor:pointer;padding:.55rem .8rem;font-weight:700;color:#1f5e85}.fl-clue>p{margin:0;padding:0 .8rem .7rem}" +
    ".fl-gis{border:1px solid var(--lh-border);border-radius:10px;padding:.8rem;background:#fff}.fl-gis__ctl{display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:.6rem}.fl-gis__ctl label{display:flex;flex-direction:column;gap:.25rem;font-size:.85rem;font-weight:600}.fl-gis__ctl select{padding:.4rem .5rem;border:1px solid var(--lh-border);border-radius:6px;font:inherit;min-width:14rem}.fl-gis__map svg{width:100%;height:auto;display:block}.fl-gis__c{cursor:pointer}.fl-gis__c:hover{stroke:#13324a;stroke-width:1.2}.fl-gis__info{min-height:2.6rem;margin:.5rem 0;padding:.5rem .7rem;background:#f4f8fb;border-radius:8px;font-size:.88rem;display:flex;flex-wrap:wrap;gap:.3rem 1rem;align-items:center}.fl-gis__legend{display:grid;gap:.4rem;font-size:.8rem}.fl-gis__legend div{display:flex;flex-wrap:wrap;gap:.3rem .8rem;align-items:center}.fl-gis__legend span{display:inline-flex;align-items:center;gap:.3rem}.fl-gis__legend i{display:inline-block;width:16px;height:12px;border-radius:2px}" +
    ".fl-sin{border:1px solid var(--lh-border);border-radius:10px;padding:.8rem;background:#fff}.fl-sin__in{display:flex;flex-wrap:wrap;gap:1rem}.fl-sin__in label{font-size:.9rem;font-weight:600;display:flex;flex-direction:column;gap:.25rem}.fl-sin__in input{width:9rem;padding:.35rem .5rem;border:1px solid var(--lh-border);border-radius:6px;font:inherit}.fl-sin__out{font-size:1rem;margin:.6rem 0 .2rem;color:#13324a}" +
    ".fl-use{display:flex;flex-wrap:wrap;gap:.35rem;align-items:center;margin:.4rem 0}.fl-use__n{font-size:.85rem;font-weight:600;color:var(--lh-muted,#555);margin-right:.3rem}.fl-use__c{font-size:.82rem;padding:.2rem .55rem;border-radius:99px;border:1px solid var(--lh-border);background:#fff;color:#555}.fl-use__c.on{background:#dcf3e8;border-color:#3aa57a;color:#0b5e3c;font-weight:600}.fl-use__c.on::before{content:'\\2713 '}" +
    ".fl-iso .iso-model{display:none}.fl-iso--show .iso-model{display:inline}" +
    ".fl-cloze__t{line-height:2.4;font-size:.98rem;color:var(--lh-ink)}.fl-cloze .fl-rsel{flex:none;width:auto;min-width:8rem;margin:0 .2rem}" +
    ".fl-lcard{display:flex;align-items:center;gap:.9rem;max-width:560px;margin:.4rem 0;padding:.9rem 1.1rem;border:2px solid #4255ff;border-radius:14px;background:#f1f3ff;color:#1a1d4a;text-decoration:none}" +
    ".fl-lcard:hover{background:#e4e8ff}.fl-lcard__i{flex:none;width:44px;height:44px;border-radius:10px;background:#4255ff;color:#fff;display:grid;place-items:center;font:800 1.3rem var(--lh-font-display)}" +
    ".fl-lcard b{display:block;font-size:1rem}.fl-lcard small{color:#4a4f7a}.fl-lcard__go{margin-left:auto;font-weight:700;color:#4255ff;white-space:nowrap}" +
    ".fl-rmap__map svg{display:block;width:100%;height:auto;border:1px solid var(--lh-border);border-radius:12px;background:#fff}" +
    ".fl-rmap__grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:.4rem .8rem;margin-top:.8rem}" +
    ".fl-rmap__q{display:flex;align-items:center;gap:.45rem}.fl-rmap__q b{flex:none;width:1.7rem;height:1.7rem;border-radius:50%;display:grid;place-items:center;border:2px solid #c2410c;color:#7a2a0a;font-size:.78rem}" +
    ".fl-rsel{flex:1;font:500 .84rem var(--lh-font-body);padding:.3rem;border:1px solid var(--lh-border);border-radius:8px;background:#fff}.fl-rsel.fl-ok{border-color:var(--lh-green);background:var(--lh-green-bg)}.fl-rsel.fl-bad{border-color:#e57373;background:#fdecea}.fl-rsel.fl-shown{font-style:italic}" +
    ".fl-game{border-radius:12px;overflow:hidden;border:1px solid var(--lh-border);background:#f4fafb;margin:.3rem 0}.fl-game iframe{display:block;width:100%;height:880px;border:0}" +
    ".fl__part-title{margin:2.4rem 0 .2rem;padding:.6rem .9rem;border-radius:10px;background:#6b4fb3;color:#fff;font:700 1.1rem var(--lh-font-display)}" +
    ".fl__facts{margin:.3rem 0;padding-left:1.2rem;color:var(--lh-body)}.fl__facts li{margin:.25rem 0}" +
    ".fl__stage{display:block;width:100%;max-width:600px;height:auto;border-radius:12px;margin:2rem 0 .3rem}" +
    ".fl--inline{border-left:0;border-top:5px solid var(--lh-orange);padding:0}.fl__ihead{display:flex;align-items:center;gap:1rem;padding:1rem 1.2rem .2rem}.fl__ihead h2{margin:0;font:700 1.3rem var(--lh-font-display);color:var(--lh-ink);flex:1}.fl--inline .fl__body{border-top:0}" +
    ".lh-ov{display:flex;flex-direction:column;gap:.8rem;margin:0 0 1.2rem}.lh-ov__li{border:3px solid #e0782b;border-radius:12px;background:#fff;padding:.8rem 1rem;font-size:1.02rem;color:var(--lh-ink)}" +
    ".lh-ov__hd{background:#6b4fb3;color:#fff;border-radius:12px;padding:.7rem 1rem;font:700 1.15rem var(--lh-font-display);text-align:center}" +
    ".lh-ov__top{display:flex;gap:.8rem;align-items:stretch}.lh-ov__top .lh-ov__li{flex:1}.lh-ov__sdgs{display:flex;gap:.5rem}" +
    ".lh-sdg{width:96px;border-radius:8px;color:#fff;padding:.45rem .5rem;font:700 .72rem/1.15 var(--lh-font-body);text-transform:uppercase;display:flex;flex-direction:column;gap:.15rem}.lh-sdg b{font:800 1.6rem/1 var(--lh-font-display)}" +
    "@media (max-width:640px){.lh-ov__top{flex-direction:column}}" +
    ".lh-ov__row{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:.8rem}.lh-ov__box{border:3px solid #2ea44f;border-radius:12px;background:#fff;padding:.8rem 1rem}" +
    ".lh-ov__box h3{margin:0 0 .4rem;font:700 1rem var(--lh-font-display);color:var(--lh-ink)}.lh-ov__box p{margin:.3rem 0;color:var(--lh-body)}.lh-ov__box ul{margin:.2rem 0 0 1.1rem;padding:0;color:var(--lh-body)}.lh-ov__box li{margin:.2rem 0}" +
    ".fl--lesson{border-left-color:var(--lh-orange);margin:0}.fl--lesson .fl__logo-b{color:#c2410c}" +
    ".fl-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:.6rem;margin:.4rem 0 .8rem}" +
    ".fl-card{position:relative;border:1px dashed #9fb7c4;border-radius:10px;padding:.5rem .6rem;background:#fff}.fl-card svg{display:block;width:100%;height:70px;background:#eef5fb;border-radius:8px}" +
    ".fl-card p{margin:.4rem 0 0;font-size:.8rem;line-height:1.35;color:var(--lh-body)}.fl-card__k{position:absolute;top:.35rem;left:.5rem;font:800 1rem var(--lh-font-display);color:#c2410c}" +
    ".fl-ord select,.fl-binsel,.fl-ranksel{font:600 .85rem var(--lh-font-body);padding:.3rem;border:1px solid var(--lh-border);border-radius:8px;background:#fff}" +
    ".fl-ord select.fl-ok,.fl-binsel.fl-ok{border-color:var(--lh-green);background:var(--lh-green-bg)}.fl-ord select.fl-bad,.fl-binsel.fl-bad{border-color:#e57373;background:#fdecea}" +
    ".fl-rb{display:inline-block;font-size:.7rem;font-weight:700;color:#fff;background:#ea7a26;border-radius:999px;padding:.05rem .45rem;margin-left:.3rem}.fl-sortgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:.8rem}.fl-sorttab td.fl__rh{width:62%}.fl-sortfb{display:block;font-size:.75rem;font-weight:500;color:var(--lh-muted);margin-top:.15rem}" +
    ".fl-taboo__card{max-width:320px;margin:.3rem 0;border-radius:14px;overflow:hidden;border:2px solid #5b3fa8;text-align:center;background:#fff}" +
    ".fl-taboo__t{background:#5b3fa8;color:#fff;font:800 1.35rem var(--lh-font-display);padding:1rem .6rem}.fl-taboo__ban{padding:.6rem}.fl-taboo__ban span{font:700 .72rem var(--lh-font-mono);letter-spacing:.08em;text-transform:uppercase;color:#b42318}" +
    ".fl-taboo__ban ul{list-style:none;margin:.3rem 0 0;padding:0;font:600 1rem var(--lh-font-body);color:var(--lh-ink)}.fl-taboo__ban li{padding:.15rem 0}" +
    ".fl-timer{display:flex;align-items:center;gap:.6rem;flex-wrap:wrap;margin:.4rem 0}.fl-timer__t{font:800 1.8rem var(--lh-font-mono);color:var(--lh-ink);min-width:5.5rem}.fl-timer--done .fl-timer__t{color:#b42318}" +
    ".fl-rank{display:flex;flex-direction:column;gap:.45rem;max-width:520px}.fl-rank__r{display:flex;gap:.6rem;align-items:center}.fl-rank__r b{width:1.8rem;height:1.8rem;border-radius:50%;display:grid;place-items:center;background:var(--lh-teal-bg);color:var(--lh-teal-deep)}.fl-rank__r select{flex:1}" +
    ".fl-match td{vertical-align:middle}.fl-match td:nth-child(2){width:52%}.fl-sel{width:100%;font:400 .82rem var(--lh-font-body);padding:.35rem;border:1px solid var(--lh-border);border-radius:8px;background:#fff}" +
    ".fl-sel.fl-ok{border-color:var(--lh-green);background:var(--lh-green-bg)}.fl-sel.fl-bad{border-color:#e57373;background:#fdecea}.fl-mfb{display:block;font-size:.78rem;color:var(--lh-body);margin-top:.2rem;line-height:1.35}" +
    ".fl__read{font-size:.92rem;line-height:1.6;color:var(--lh-body)}.fl__read h4{margin:1rem 0 .3rem;font:700 .98rem var(--lh-font-display);color:var(--lh-ink)}.fl__read p{margin:.3rem 0}.fl__read ul,.fl__read ol{margin:.3rem 0 .3rem 1.3rem;padding:0}.fl__read li{margin:.25rem 0}" +
    ".fl-mcq{margin:.4rem 0 1rem}.fl-mcq__o{display:flex;flex-wrap:wrap;gap:.4rem;margin:.3rem 0}" +
    ".fl-opt{border:1px solid var(--lh-border);background:#fff;border-radius:10px;padding:.4rem .7rem;font:500 .86rem var(--lh-font-body);cursor:pointer;color:var(--lh-ink)}" +
    ".fl-opt:hover{border-color:var(--lh-teal)}.fl-opt.right{background:var(--lh-green-bg);border-color:var(--lh-green)}.fl-opt.wrong{background:#fdecea;border-color:#e57373}" +
    ".fl__prompts{margin:.3rem 0 .5rem;padding-left:1.4rem;display:flex;flex-direction:column;gap:.35rem}" +
    ".fl__prompts li{padding-left:.2rem}.fl__prompts li span{color:var(--lh-ink)}" +
    ".fl__pcopy{margin-left:.5rem;border:1px solid var(--lh-teal);background:#fff;color:var(--lh-teal-deep);border-radius:999px;padding:.05rem .55rem;font:600 .72rem var(--lh-font-body);cursor:pointer;vertical-align:1px}" +
    ".fl__adapt{font-size:.78rem;font-weight:600;color:var(--lh-teal-deep);background:var(--lh-teal-bg);border-radius:999px;padding:.3rem .7rem}" +
    ".fl-ed{margin-top:1rem;padding:1rem 1.1rem;border:2px solid var(--lh-gold);border-radius:12px;background:var(--lh-gold-bg)}" +
    ".fl-ed h3{margin:0 0 .3rem;font:700 1rem var(--lh-font-display);color:var(--lh-ink)}" +
    ".fl-ed__l{display:block;margin-top:.9rem;font-weight:600;font-size:.88rem;color:var(--lh-ink)}" +
    ".fl-edf{display:block;width:100%;box-sizing:border-box;margin-top:.35rem;border:1px solid var(--lh-border);border-radius:8px;padding:.45rem .55rem;font:400 .88rem var(--lh-font-body);background:#fff;resize:vertical}" +
    ".fl-ed__link{display:grid;grid-template-columns:1fr 1.4fr;gap:.5rem}" +
    ".fl-ed__hide{display:flex;flex-direction:column;gap:.25rem;margin-top:.4rem;max-height:240px;overflow:auto;background:#fff;border:1px solid var(--lh-border);border-radius:8px;padding:.5rem .7rem;font-weight:400}" +
    ".fl-ed__hide label{display:flex;gap:.45rem;align-items:flex-start;font-size:.85rem}" +
    "@media print{body.fl-printing .fl:not(.fl--print){display:none!important}.lh-sidebar,.lh-topbar,.lh-rail,.lh-modes,.lh-stats,.lh-tip,.fl__actions,.fl__top,.fl__banner,.fl__yts{display:none!important}.fl{border:0}.fl td .fl-in{border:0}}";
  document.head.appendChild(css);

  /* ---- Teacher edits (stored per teacher, see api/_lib/flipEdits.js) ---- */
  function panelId(n) { return id + (n ? "-" + (n + 1) : ""); }
  function hasEdits(e) { return !!(e && (e.intro || e.note || (e.links && e.links.length) || (e.hide && e.hide.length) || (e.add && e.add.length))); }
  function applyEdits(base, e) {
    var c = Object.assign({}, base);
    if (e.intro) c.intro = e.intro;
    c._note = e.note || "";
    c._links = e.links || [];
    var hide = e.hide || [];
    c.parts = base.parts.filter(function (_, i) { return hide.indexOf(i) < 0; });
    if (e.add && e.add.length) c.parts = c.parts.concat([
      { type: "heading", text: "Extra questions from your teacher" },
      { id: "tq", label: "", type: "questions", prompt: "", rows: e.add }]);
    return c;
  }
  function partLabel(p) {
    if (p.type === "heading") return "Heading: " + p.text;
    if (p.type === "html") return "Diagram";
    var lab = p.label != null ? p.label : p.id + ")";
    var t = p.prompt || (p.rows && p.rows[0]) || "";
    return ((lab ? lab + " " : "") + t).slice(0, 90) + (t.length > 90 ? "…" : "");
  }
  function api(method, q, body) {
    return fetch("/api/session?flipEdits=1" + q, { method: method, credentials: "same-origin",
      headers: body ? { "Content-Type": "application/json" } : {}, body: body ? JSON.stringify(body) : undefined })
      .then(function (r) { return r.ok ? r.json() : r.json().then(function (j) { throw new Error(j.error || "Request failed"); }, function () { throw new Error("Request failed"); }); });
  }

  /* ---- Rivers of the world map ----
     Coastlines: Natural Earth (public domain), via the world-atlas package.
     Rivers: simplified lines drawn for SBL. Drawing: d3-geo (ISC licence),
     served from /js/vendor. */
  function loadJs(src) {
    return new Promise(function (ok, bad) {
      if (document.querySelector('script[src="' + src + '"]')) { var t = setInterval(function () { if (window.d3 && window.d3.geoPath) { clearInterval(t); ok(); } }, 50); return; }
      var sc = document.createElement("script"); sc.src = src; sc.onload = ok; sc.onerror = bad; document.head.appendChild(sc);
    });
  }
  function topoFeature(topo, obj) {
    var tf = topo.transform, arcs = topo.arcs.map(function (a) {
      var x = 0, y = 0;
      return a.map(function (pt) { x += pt[0]; y += pt[1]; return tf ? [x * tf.scale[0] + tf.translate[0], y * tf.scale[1] + tf.translate[1]] : pt; });
    });
    function ring(ids) {
      var out = [];
      ids.forEach(function (i) { var a = i < 0 ? arcs[~i].slice().reverse() : arcs[i]; a.forEach(function (pt, j) { if (j || !out.length) out.push(pt); }); });
      return out;
    }
    function geom(g) {
      if (g.type === "Polygon") return { type: "Polygon", coordinates: g.arcs.map(ring) };
      if (g.type === "MultiPolygon") return { type: "MultiPolygon", coordinates: g.arcs.map(function (pl) { return pl.map(ring); }) };
      return null;
    }
    var o = topo.objects[obj], gs = o.type === "GeometryCollection" ? o.geometries : [o];
    return { type: "FeatureCollection", features: gs.map(function (g) { return { type: "Feature", id: g.id, properties: g.properties || {}, geometry: geom(g) }; }).filter(function (f) { return f.geometry; }) };
  }
  /* Interactive world map for KS3/IB GIS tasks: choose a data layer to colour the countries,
     add a second layer as circles on top (overlay), and tap a country to read its values.
     part.layers: [{ key, name, unit, bands: [5 labels], colors: [5 colours] }], part.data: "id:b1:b2:b3;..." (0 = no data). */
  function gisMap(box, part) {
    var mapEl = box.querySelector(".fl-gis__map"), info = box.querySelector(".fl-gis__info"), legend = box.querySelector(".fl-gis__legend");
    var selA = box.querySelector('[data-g="a"]'), selB = box.querySelector('[data-g="b"]');
    var DATA = {};
    part.data.split(";").forEach(function (r) { var f = r.split(":"); if (f.length > 1) DATA[String(+f[0])] = f.slice(1).map(Number); });
    var SRC = ["https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json", "https://unpkg.com/world-atlas@2/countries-110m.json"];
    function get(i) { return fetch(SRC[i]).then(function (r) { if (!r.ok) throw 0; return r.json(); }).catch(function () { if (i + 1 < SRC.length) return get(i + 1); throw 0; }); }
    loadJs("/js/vendor/d3-array.min.js").then(function () { return loadJs("/js/vendor/d3-geo.min.js"); }).then(function () { return get(0); }).then(function (topo) {
      var d3 = window.d3, W = 960, H = 490, fc = topoFeature(topo, "countries");
      var proj = d3.geoNaturalEarth1().fitExtent([[6, 6], [W - 6, H - 6]], { type: "Sphere" }), path = d3.geoPath(proj);
      var feats = fc.features.filter(function (f) { return f.properties.name !== "Antarctica"; });
      function draw() {
        var a = +selA.value, b = selB.value === "" ? -1 : +selB.value, LA = part.layers[a], LB = b >= 0 ? part.layers[b] : null;
        var svg = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="World map coloured by ' + esc(LA.name) + (LB ? ", with circles showing " + esc(LB.name) : "") + '"><defs><pattern id="glnd" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#eceff2"/><path d="M0 0V6" stroke="#cfd5db" stroke-width="2"/></pattern></defs>' +
          '<path d="' + path({ type: "Sphere" }) + '" fill="#e8f3fa" stroke="#9fb7c4"/><path d="' + path(d3.geoGraticule10()) + '" fill="none" stroke="#d6e6ef" stroke-width=".6"/>';
        feats.forEach(function (f, i) {
          var v = (DATA[String(+f.id)] || [])[a];
          svg += '<path class="fl-gis__c" data-i="' + i + '" d="' + path(f) + '" fill="' + (v ? LA.colors[v - 1] : "url(#glnd)") + '" stroke="#fff" stroke-width=".5"/>';
        });
        if (LB) feats.forEach(function (f, i) {
          var v = (DATA[String(+f.id)] || [])[b]; if (!v) return;
          var c = path.centroid(f); if (!isFinite(c[0])) return;
          svg += '<circle class="fl-gis__c" data-i="' + i + '" cx="' + c[0].toFixed(1) + '" cy="' + c[1].toFixed(1) + '" r="' + (1.5 + v * 1.6).toFixed(1) + '" fill="' + LB.colors[4] + '" fill-opacity=".75" stroke="#fff" stroke-width=".8"/>';
        });
        mapEl.innerHTML = svg + "</svg>";
        legend.innerHTML = '<div><b>' + esc(LA.name) + "</b> (colour)" + LA.bands.map(function (t, i) { return '<span><i style="background:' + LA.colors[i] + '"></i>' + esc(t) + "</span>"; }).join("") + '<span><i style="background:#e2e6ea"></i>No data</span></div>' +
          (LB ? '<div><b>' + esc(LB.name) + "</b> (circles)" + LB.bands.map(function (t, i) { var r = 1.5 + (i + 1) * 1.6; return '<span><svg width="20" height="20" aria-hidden="true"><circle cx="10" cy="10" r="' + r + '" fill="' + LB.colors[4] + '" fill-opacity=".75"/></svg>' + esc(t) + "</span>"; }).join("") + "</div>" : "");
      }
      function show(i) {
        var f = feats[i], d = DATA[String(+f.id)] || [];
        info.innerHTML = "<b>" + esc(f.properties.name || "") + "</b>" + part.layers.map(function (L, k) { return '<span>' + esc(L.name) + ": " + (d[k] ? esc(L.bands[d[k] - 1]) : "no data") + "</span>"; }).join("");
      }
      mapEl.addEventListener("mousemove", function (e) { var t = e.target.closest(".fl-gis__c"); if (t) show(+t.getAttribute("data-i")); });
      mapEl.addEventListener("click", function (e) { var t = e.target.closest(".fl-gis__c"); if (t) show(+t.getAttribute("data-i")); });
      selA.onchange = draw; selB.onchange = draw; draw();
    }).catch(function () {
      mapEl.innerHTML = '<p class="fl__note">The map could not load (check your internet connection). Use the Our World in Data link instead.</p>';
    });
  }
  /* Locator map: part.box [[west, south], [east, north]], part.hi [country ids to highlight],
     part.points [{ t, lon, lat }], part.labels [{ t, lon, lat, sea }]. Country borders: Natural Earth via world-atlas. */
  function locMap(box, part) {
    var mapEl = box.querySelector(".fl-loc__map");
    var SRC = ["https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json", "https://unpkg.com/world-atlas@2/countries-50m.json", "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"];
    function get(i) { return fetch(SRC[i]).then(function (r) { if (!r.ok) throw 0; return r.json(); }).catch(function () { if (i + 1 < SRC.length) return get(i + 1); throw 0; }); }
    loadJs("/js/vendor/d3-array.min.js").then(function () { return loadJs("/js/vendor/d3-geo.min.js"); }).then(function () { return get(0); }).then(function (topo) {
      var d3 = window.d3, W = 760, H = 520, fc = topoFeature(topo, "countries"), b = part.box;
      var frame = { type: "Feature", geometry: { type: "Polygon", coordinates: [[[b[0][0], b[0][1]], [b[1][0], b[0][1]], [b[1][0], b[1][1]], [b[0][0], b[1][1]], [b[0][0], b[0][1]]]] } };
      var proj = d3.geoMercator().fitExtent([[0, 0], [W, H]], frame), path = d3.geoPath(proj), hi = (part.hi || []).map(String);
      var svg = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(part.alt || "Locator map") + '"><defs><clipPath id="lcc' + part.id + '"><rect width="' + W + '" height="' + H + '"/></clipPath></defs><rect width="' + W + '" height="' + H + '" fill="#cfe6f5"/><g clip-path="url(#lcc' + part.id + ')">';
      svg += '<path d="' + path(d3.geoGraticule().step([10, 10])()) + '" fill="none" stroke="#b5d3e6" stroke-width=".7"/>';
      fc.features.forEach(function (f) { var on = hi.indexOf(String(+f.id)) >= 0; svg += '<path d="' + path(f) + '" fill="' + (on ? "#f6c76b" : "#eef0e6") + '" stroke="#8a8f80" stroke-width=".7"/>'; });
      if (part.lines) { if (part.lines.lat != null) svg += '<path d="' + path({ type: "LineString", coordinates: [[-180, part.lines.lat], [-90, part.lines.lat], [0, part.lines.lat], [90, part.lines.lat], [180, part.lines.lat]] }) + '" fill="none" stroke="#b42318" stroke-width="2"/>'; if (part.lines.lon != null) svg += '<path d="' + path({ type: "LineString", coordinates: [[part.lines.lon, -85], [part.lines.lon, 0], [part.lines.lon, 85]] }) + '" fill="none" stroke="#b42318" stroke-width="2"/>'; }
      (part.labels || []).forEach(function (l) { var p = proj([l.lon, l.lat]); svg += '<text x="' + p[0].toFixed(1) + '" y="' + p[1].toFixed(1) + '" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="' + (l.sea ? 13 : 12.5) + '" ' + (l.sea ? 'font-style="italic" fill="#2f6f99"' : 'font-weight="700" fill="#4a4a3a"') + ">" + esc(l.t) + "</text>"; });
      (part.points || []).forEach(function (pt) { var p = proj([pt.lon, pt.lat]); svg += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="6" fill="#b42318" stroke="#fff" stroke-width="2"/><text x="' + (p[0] + 10).toFixed(1) + '" y="' + (p[1] + 5).toFixed(1) + '" font-family="Inter,Arial,sans-serif" font-size="15" font-weight="800" fill="#7a1d12" stroke="#fff" stroke-width="3" paint-order="stroke">' + esc(pt.t) + "</text>"; });
      svg += '</g><g transform="translate(' + (W - 40) + ',40)" font-family="Inter,Arial,sans-serif"><circle r="20" fill="#fff" fill-opacity=".85"/><path d="M0 -15 L6 4 L0 0 L-6 4 Z" fill="#13324a"/><text y="15" text-anchor="middle" font-size="11" font-weight="700">N</text></g>';
      mapEl.innerHTML = svg + '</svg><p class="fl__note">Borders: Natural Earth (public domain).</p>';
    }).catch(function () { mapEl.innerHTML = '<p class="fl__note">The map could not load (check your internet connection). Use an atlas instead.</p>'; });
  }
  function riverMap(box, part) {
    var mapEl = box.querySelector(".fl-rmap__map");
    var LAND = ["https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json", "https://unpkg.com/world-atlas@2/land-110m.json"];
    function getLand(i) { return fetch(LAND[i]).then(function (r) { if (!r.ok) throw 0; return r.json(); }).catch(function () { if (i + 1 < LAND.length) return getLand(i + 1); throw 0; }); }
    loadJs("/js/vendor/d3-array.min.js").then(function () { return loadJs("/js/vendor/d3-geo.min.js"); }).then(function () { return getLand(0); }).then(function (topo) {
      var d3 = window.d3, W = 960, H = 490;
      var land = topoFeature(topo, "land");
      var proj = d3.geoNaturalEarth1().fitExtent([[6, 6], [W - 6, H - 6]], { type: "Sphere" }), path = d3.geoPath(proj);
      var svg = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="World map with 24 numbered rivers">' +
        '<path d="' + path({ type: "Sphere" }) + '" fill="#e8f3fa" stroke="#9fb7c4"/>' +
        '<path d="' + path(d3.geoGraticule10()) + '" fill="none" stroke="#d6e6ef" stroke-width=".6"/>' +
        '<path d="' + path(land) + '" fill="#f4efe2" stroke="#8a8070" stroke-width=".6"/>';
      part.items.forEach(function (it) { svg += '<path d="' + path({ type: "LineString", coordinates: it.line }) + '" fill="none" stroke="#2470b8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>'; });
      var pts = part.items.map(function (it) { var xy = proj(it.line[Math.floor(it.line.length / 2)]); return { x: xy[0], y: xy[1], ax: xy[0], ay: xy[1] }; });
      for (var it2 = 0; it2 < 60; it2++) pts.forEach(function (a2, i) { pts.forEach(function (b2, j) {
        if (i >= j) return; var dx = b2.x - a2.x, dy = b2.y - a2.y, d = Math.sqrt(dx * dx + dy * dy) || 0.1;
        if (d < 19) { var m = (19 - d) / 2, ux = dx / d, uy = dy / d; a2.x -= ux * m; a2.y -= uy * m; b2.x += ux * m; b2.y += uy * m; }
      }); });
      pts.forEach(function (pt, i) {
        if (Math.abs(pt.x - pt.ax) + Math.abs(pt.y - pt.ay) > 3) svg += '<line x1="' + pt.ax.toFixed(1) + '" y1="' + pt.ay.toFixed(1) + '" x2="' + pt.x.toFixed(1) + '" y2="' + pt.y.toFixed(1) + '" stroke="#c2410c" stroke-width="1"/>';
        svg += '<g transform="translate(' + pt.x.toFixed(1) + "," + pt.y.toFixed(1) + ')"><circle r="8.5" fill="#fff" stroke="#c2410c" stroke-width="2"/><text y="3.6" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="9.5" font-weight="700" fill="#7a2a0a">' + (i + 1) + "</text></g>";
      });
      svg += "</svg>";
      mapEl.innerHTML = svg + '<p class="fl__note">Coastlines: Natural Earth (public domain). Rivers simplified. Each number marks a point on the river.</p>';
    }).catch(function () {
      mapEl.innerHTML = '<p class="fl__note">The map could not load (check your internet connection). Use an atlas instead: find each river and note which continent and countries it flows through.</p>';
    });
  }

  function panel(base, n, ed) {
  ed = ed || {};
  var cfg = applyEdits(base, ed.edits || {});
  var KEY = "sbl-flip-" + (base.storeAs || id) + (n ? "-" + (n + 1) : "");
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
  var isL = cfg.kind === "lesson";
  var inl = !!cfg.inline;
  /* Panels start open; if a student collapses one, it stays collapsed on that device until they open it again. */
  var OPENKEY = KEY + "-collapsed", startOpen = cfg.open !== false;
  try { if (localStorage.getItem(OPENKEY) === "1") startOpen = false; } catch (e) {}
  var h = inl
    ? '<section class="fl fl--lesson fl--inline" id="flipLearning' + (n ? n + 1 : "") + '"><div class="fl__ihead"><h2>' + esc(cfg.heading || "Lesson resources") + '</h2><span class="fl__state"></span></div><div class="fl__body">'
    : '<details class="fl' + (isL ? " fl--lesson" : "") + '" id="flipLearning' + (n ? n + 1 : "") + '"' + (startOpen ? " open" : "") + '><summary>' +
    (inl ? "" : (
    (isL ? '<span class="fl__logo" aria-label="Lesson Resources"><span class="fl__logo-a">Lesson</span> <span class="fl__logo-b">Resources</span></span>'
         : '<span class="fl__logo" aria-label="Flip Learning"><span class="fl__logo-a">Flip</span> <span class="fl__logo-b">Learning</span></span>') +
    '<span class="fl__h"><span class="fl__eyebrow">' + (isL ? "Classroom" + (cfg.time ? " \u00b7 " + esc(cfg.time) : "") : "Pre-lesson" + (cfg.part ? " · " + esc(cfg.part) : "")) + '</span><p class="fl__title">' + esc(cfg.title) + '</p><span class="fl__sub">' + (isL ? esc(cfg.sub || "") : "Use the Teach Me bot and additional resources to complete") + '</span></span>' +
    '<span class="fl__state"></span>' +
    '<svg class="fl__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></summary><div class="fl__body">' +
    (isL ? "" : '<img class="fl__banner" src="/images/flip-learning-banner.jpg" alt="Flip Learning: learn first, think deep, apply together. Learn, inquiry, think, collaborate, apply.">')
    ));
  if (cfg.intro) h += '<p class="fl__intro">' + esc(cfg.intro) + "</p>";
  if (cfg.teacherNote) h += '<p class="fl__tnote">' + esc(cfg.teacherNote) + "</p>";
  if (cfg._note) h += '<p class="fl__tnote"><b>Note from ' + esc(ed.teacher || "your teacher") + ":</b> " + esc(cfg._note).replace(/\n/g, "<br>") + "</p>";
  if (cfg.cover) h += '<ul class="fl__cover">' + cfg.cover.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul>";
  h += '<div class="fl__top">' + (cfg.noBot ? "" : '<button type="button" class="fl__bot" onclick="window.openTeachBot && openTeachBot(\'' + id + '\')">Open Teach Me Live &rarr;</button>') +
    '<button type="button" class="fl__btn fl__btn--ghost fl-copy">Copy to OneNote</button>' +
    (ed.canEdit ? '<button type="button" class="fl__btn fl__btn--ghost fl-edit">\u270f\ufe0f Edit for my classes</button>' : "") +
    (hasEdits(ed.edits) ? '<span class="fl__adapt">' + (ed.canEdit ? "Your classes see your edited version" : "Adapted by your teacher") + "</span>" : "") + "</div>";

  function ytId(u) { var m = /(?:youtu\.be\/|[?&]v=)([\w-]{11})/.exec(u || ""); return m && m[1]; }
  function embed(u) {
    var v = ytId(u);
    return v ? '<div class="fl__yt"><iframe src="https://www.youtube-nocookie.com/embed/' + v + '" title="Video" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>' : "";
  }
  function links(p) {
    var vids = [], v0 = p.video === true ? cfg.video : p.video;
    if (v0) vids.push(v0);
    (p.links || []).forEach(function (l) { if (ytId(l.url)) vids.push(l.url); });
    var out = vids.length ? '<div class="fl__yts">' + vids.map(embed).join("") + "</div>" : "";
    var v = p.video === true ? cfg.video : p.video;
    if (p.video) out += v
      ? '<a class="fl__video" href="' + esc(v) + '" target="_blank" rel="noopener">Watch the video &rarr;</a>'
      : '<p class="fl__note">Link coming soon from your teacher.</p>';
    (p.links || []).forEach(function (l) { out += '<a class="fl__video" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + " &rarr;</a>"; });
    return out;
  }

  if (cfg._links.length) h += '<div class="fl__part"><p class="fl__q">Links from ' + esc(ed.teacher || "your teacher") + "</p>" + links({ links: cfg._links }) + "</div>";

  cfg.parts.forEach(function (p, pi) {
    if (p.type === "heading") {
      h += '<h3 class="fl__head">' + esc(p.text) + "</h3>" + (p.note ? '<p class="fl__note">' + esc(p.note) + "</p>" : "");
      return;
    }
    if (p.type === "html") { h += '<div class="fl__part" data-pi="' + pi + '">' + p.html + "</div>"; return; }
    if (p.type === "bingo") {
      h += '<div class="fl-bingo" data-k="' + p.id + '" data-words="' + esc(JSON.stringify(p.words)) + '"><div class="fl-bingo__grid"></div>' +
        '<div class="fl__actions" style="margin-top:.5rem"><button type="button" class="fl__btn fl__btn--ghost" data-bingo="new">New card</button><span class="fl__note">Tap a word when your teacher reads its definition. Four in a row, column or diagonal: shout \u201cBingo!\u201d</span></div></div>';
    }
    if (p.type === "cloze") {
      var bank = [];
      p.text.replace(/\[\[([^\]]+)\]\]/g, function (_, w) { if (bank.indexOf(w) < 0) bank.push(w); return _; });
      bank.sort();
      var gi = 0;
      h += '<div class="fl-rmap fl-cloze"><p class="fl__note">Word bank: ' + bank.map(esc).join(" \u00b7 ") + '</p><p class="fl-cloze__t">' +
        esc(p.text).replace(/\[\[([^\]]+)\]\]/g, function (_, w) {
          var k = p.id + (gi++);
          return '<select class="fl-rsel" data-k="' + k + '" data-a="' + w + '"><option value="">\u2026</option>' + bank.map(function (b) { return "<option" + (saved[k] === b ? " selected" : "") + ">" + b + "</option>"; }).join("") + "</select>";
        }) + '</p><div class="fl__actions" style="margin-top:.4rem"><button type="button" class="fl__btn" data-rchk="1">Check my answers</button><button type="button" class="fl__btn fl__btn--ghost" data-rshow="1">Show the answers</button><span class="fl__note" data-rmsg></span></div></div>';
    }
    if (p.type === "linkcard") {
      h += '<a class="fl-lcard" href="' + esc(p.url) + '" target="_blank" rel="noopener"><span class="fl-lcard__i">' + (p.icon || "") + '</span><span><b>' + esc(p.title) + "</b><small>" + esc(p.sub || "") + "</small></span><span class=\"fl-lcard__go\">Open \u2197</span></a>";
    }
    if (p.type === "crossword") {
      var cw = p.words, H = 0, Wd = 0, cell = {};
      cw.forEach(function (w) { for (var i = 0; i < w.a.length; i++) { var r = w.r + (w.d === "D" ? i : 0), c = w.col + (w.d === "A" ? i : 0); H = Math.max(H, r + 1); Wd = Math.max(Wd, c + 1); var k = r + "_" + c; cell[k] = cell[k] || { ch: w.a.charAt(i) }; if (!i) cell[k].n = w.n; } });
      h += '<div class="fl-cw" data-id="' + p.id + '"><div class="fl-cw__wrap"><div class="fl-cw__g" style="grid-template-columns:repeat(' + Wd + ',var(--cw))">';
      for (var rr = 0; rr < H; rr++) for (var cc = 0; cc < Wd; cc++) {
        var ce = cell[rr + "_" + cc];
        h += ce ? '<div class="fl-cw__c">' + (ce.n ? "<span>" + ce.n + "</span>" : "") + '<input class="fl-cw__i" maxlength="1" data-voice="off" autocomplete="off" aria-label="Row ' + (rr + 1) + ", column " + (cc + 1) + '" data-r="' + rr + '" data-c="' + cc + '" data-a="' + ce.ch + '" value="' + esc(saved[p.id + "_" + rr + "_" + cc] || "") + '"></div>' : "<div></div>";
      }
      h += '</div></div><div class="fl-cw__clues">' + [["A", "Across"], ["D", "Down"]].map(function (dd) {
        return "<div><h4>" + dd[1] + "</h4><ol>" + cw.filter(function (w) { return w.d === dd[0]; }).sort(function (a, b) { return a.n - b.n; }).map(function (w) { return '<li value="' + w.n + '">' + esc(w.c) + " <b>(" + (w.len || w.a.length) + ")</b></li>"; }).join("") + "</ol></div>";
      }).join("") + '</div><div class="fl__actions"><button type="button" class="fl__btn" data-cw="check">Check my answers</button><button type="button" class="fl__btn fl__btn--ghost" data-cw="clear">Clear wrong letters</button><span class="fl__note fl-cw__msg"></span></div></div>';
    }
    if (p.type === "cards") {
      h += '<div class="fl-qc">' + p.items.map(function (it, i) { return '<div class="fl-qc__c" style="--c:' + (it.c || "#6b2fa3") + '"><div class="fl-qc__h">' + (it.icon ? '<span aria-hidden="true">' + it.icon + "</span>" : "") + esc(it.t) + '</div><p class="fl__vq">' + esc(it.q) + "</p>" + box(saved, p.id + i, it.t, 4) + "</div>"; }).join("") + "</div>";
    }
    if (p.type === "reveal") {
      h += '<div class="fl__part fl-rev"><p class="fl__q">' + esc(p.label || "Model answer") + '</p><div class="fl-rev__lock"><input type="password" class="fl-rev__in" data-voice="off" placeholder="Teacher code" aria-label="Code to show the ' + esc(p.label || "model answer") + '"><button type="button" class="fl__btn" data-rev="' + esc(btoa(String(p.code).toLowerCase())) + '">Show</button><span class="fl__note fl-rev__msg"></span></div><div class="fl-rev__body" hidden>' + p.html + "</div></div>";
      return;
    }
    if (p.type === "locmap") h += '<div class="fl-loc" data-id="' + p.id + '"><div class="fl-loc__map"><p class="fl__note">Loading the map\u2026</p></div></div>';
    if (p.type === "gismap") {
      h += '<div class="fl-gis" data-id="' + p.id + '"><div class="fl-gis__ctl"><label>Main map (colour) <select data-g="a">' + p.layers.map(function (L, i) { return '<option value="' + i + '"' + (i === (p.a || 0) ? " selected" : "") + ">" + esc(L.name) + "</option>"; }).join("") + '</select></label>' +
        '<label>Overlay (circles) <select data-g="b"><option value="">None</option>' + p.layers.map(function (L, i) { return '<option value="' + i + '">' + esc(L.name) + "</option>"; }).join("") + "</select></label></div>" +
        '<div class="fl-gis__map"><p class="fl__note">Loading the map\u2026</p></div><div class="fl-gis__info">Move over or tap a country to see its data.</div><div class="fl-gis__legend"></div>' +
        (p.source ? '<p class="fl__note">' + esc(p.source) + "</p>" : "") + "</div>";
    }
    if (p.type === "rivermap") {
      h += '<div class="fl-rmap" data-id="' + p.id + '"><div class="fl-rmap__map"><p class="fl__note">Loading the map\u2026</p></div>' +
        '<div class="fl-rmap__grid">' + p.items.map(function (_, i) {
          var k = p.id + i, nm = p.items.map(function (it) { return it.n; }).slice().sort();
          return '<label class="fl-rmap__q"><b>' + (i + 1) + '</b><select class="fl-rsel" data-k="' + k + '" data-a="' + esc(p.items[i].n) + '"><option value="">Which river?</option>' +
            nm.map(function (n) { return "<option" + (saved[k] === n ? " selected" : "") + ">" + esc(n) + "</option>"; }).join("") + "</select></label>";
        }).join("") + '</div><div class="fl__actions" style="margin-top:.6rem"><button type="button" class="fl__btn" data-rchk="1">Check my answers</button><button type="button" class="fl__btn fl__btn--ghost" data-rshow="1">Show the answers</button><span class="fl__note" data-rmsg></span></div></div>';
    }
    if (p.type === "game") {
      h += '<div class="fl__part"><div class="fl-game"><iframe src="' + esc(p.src) + '" title="' + esc(p.title || "Game") + '" loading="lazy" allow="clipboard-write; fullscreen"></iframe></div>' +
        '<a class="fl__video" href="' + esc(p.src) + '" target="_blank" rel="noopener">Open full screen \u2197</a></div>';
      return;
    }
    if (p.type === "part") { h += '<h2 class="fl__part-title">' + esc(p.text) + "</h2>"; return; }
    if (p.type === "banner") { h += '<img class="fl__stage" src="' + esc(p.src) + '" alt="' + esc(p.alt || "") + '">'; return; }
    var lab = p.label != null ? p.label : p.id + ")";
    h += '<div class="fl__part">';
    if (p.prompt)
      h += '<p class="fl__q">' + (lab ? "<b>" + esc(lab) + "</b>" : "") + esc(p.prompt) + "</p>";
    if (p.note) h += '<p class="fl__note">' + esc(p.note) + "</p>";
    h += links(p);
    if (p.before && p.type !== "terms" && p.type !== "table") h += '<div class="fl__pair" data-pi="' + pi + '">' + p.before + "</div>";
    if (p.type === "text") {
      h += box(saved, p.id, p.prompt, p.words ? 6 : 4);
      if (p.words) h += '<p class="fl__note fl__wc" data-wc="' + p.id + '" data-min="' + p.words[0] + '" data-max="' + p.words[1] + '"></p>';
      if (p.mustUse) h += '<div class="fl-use" data-use="' + p.id + '"><span class="fl-use__n"></span>' + p.mustUse.map(function (u) { return '<span class="fl-use__c" data-re="' + esc(u[1] || u[0].toLowerCase()) + '">' + esc(u[0]) + "</span>"; }).join("") + "</div>";
    }
    if (p.type === "terms" || p.type === "table") {
      var cols = tableCols(p);
      if (p.before) h += '<div class="fl__pair" data-pi="' + pi + '">' + p.before + "</div>";
      h += '<div class="fl__scroll"><table' + (cols.length > 4 ? ' class="fl__wide"' : "") + "><thead><tr>" + cols.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>";
      p.rows.forEach(function (r, i) {
        if (isGroup(r)) { h += '<tr><td class="fl__grp" colspan="' + cols.length + '">' + esc(r.slice(1)) + "</td></tr>"; return; }
        var ex = p.prefill && p.prefill[i];
        h += '<tr><td class="fl__rh"' + (p.rhw || p.plainHead ? ' style="' + (p.rhw ? "width:" + p.rhw + ";" : "") + (p.plainHead ? "font-weight:400;color:var(--lh-body)" : "") + '"' : "") + '>' + esc(r) + (ex && !p.given ? '<br><span class="fl__note">Example</span>' : "") + "</td>";
        for (var c = 1; c < cols.length; c++)
          h += ex && ex[c - 1] !== null ? '<td class="' + (p.given ? "fl__given" : "fl__ex") + '">' + esc(ex[c - 1] || "") + "</td>" : "<td>" + box(saved, cellKey(p, i, c), r + ": " + cols[c], 2, 1) + "</td>";
        h += "</tr>";
      });
      h += "</tbody></table></div>";
    }
    if (p.type === "order") {
      h += '<div class="fl-cards">' + p.cards.map(function (c) {
        return '<div class="fl-card"><span class="fl-card__k">' + c.k + "</span>" + (c.icon || "") + "<p>" + esc(c.text) + "</p></div>";
      }).join("") + "</div>";
      h += '<div class="fl__scroll"><table class="fl-ord"><tr><th>Order</th>' + p.answer.map(function (_, i) { return "<th>" + (i + 1) + "</th>"; }).join("") +
        "</tr><tr><th>Card letter</th>" + p.answer.map(function (_, i) {
          var k = p.id + "s" + i;
          return '<td><select class="fl-ordsel" data-k="' + k + '" aria-label="Card in position ' + (i + 1) + '"><option value=""></option>' +
            p.cards.map(function (c) { return "<option" + (saved[k] === c.k ? " selected" : "") + ">" + c.k + "</option>"; }).join("") + "</select></td>";
        }).join("") + "</tr></table></div>" +
        '<div class="fl__actions" style="margin-top:.6rem"><button type="button" class="fl__btn fl__btn--ghost" data-ordchk="' + p.id + '" data-ans="' + p.answer.join("") + '">Check the order</button><span class="fl__note" data-ordfb="' + p.id + '"></span></div>';
    }
    if (p.type === "taboo")
      h += '<div class="fl-taboo" data-cards="' + esc(JSON.stringify(p.cards)) + '"><div class="fl-taboo__card"><div class="fl-taboo__t"></div><div class="fl-taboo__ban"><span>Don\u2019t say</span><ul></ul></div></div>' +
        '<div class="fl__actions"><button type="button" class="fl__btn fl__btn--ghost" data-tb="prev">\u2190 Previous</button><button type="button" class="fl__btn" data-tb="next">Next card \u2192</button><button type="button" class="fl__btn fl__btn--ghost" data-tb="shuffle">Shuffle</button><span class="fl__note" data-tbn></span></div></div>';
    if (p.type === "timer")
      h += '<div class="fl-timer" data-sec="' + (p.minutes * 60) + '"><span class="fl-timer__t">' + p.minutes + ':00</span><button type="button" class="fl__btn fl__btn--ghost" data-tm="go">Start</button><button type="button" class="fl__btn fl__btn--ghost" data-tm="reset">Reset</button>' + (p.label ? '<span class="fl__note">' + esc(p.label) + "</span>" : "") + "</div>";
    if (p.type === "sort") {
      var half = Math.ceil(p.cards.length / 2);
      h += '<div class="fl-sortgrid">';
      [p.cards.slice(0, half), p.cards.slice(half)].forEach(function (group, gi) {
        h += '<div class="fl__scroll"><table class="fl-sorttab"><thead><tr><th>' + esc(p.cardCol || "Factor card") + '</th><th>' + esc(p.binCol || "Your box") + '</th></tr></thead><tbody>';
        group.forEach(function (c, j) {
          var i = gi * half + j, k = p.id + i;
          h += '<tr><td class="fl__rh">' + esc(c.t) + (c.rb ? ' <span class="fl-rb">Rule-breaker?</span>' : "") + '<span class="fl-sortfb"></span></td><td><select class="fl-binsel" data-k="' + k + '" data-ok="' + c.a.join("|") + '"><option value="">Choose\u2026</option>' +
            p.bins.map(function (b) { return "<option" + (saved[k] === b ? " selected" : "") + ">" + esc(b) + "</option>"; }).join("") + "</select></td></tr>";
        });
        h += "</tbody></table></div>";
      });
      h += "</div>" + '<div class="fl__actions" style="margin-top:.6rem"><button type="button" class="fl__btn fl__btn--ghost" data-sortchk="1">Check my sort</button><span class="fl__note" data-sortmsg></span></div>';
    }
    if (p.type === "rank") {
      h += '<div class="fl-rank">';
      for (var rr = 0; rr < p.n; rr++) {
        var rk = p.id + rr;
        h += '<label class="fl-rank__r"><b>' + (rr + 1) + '</b><select class="fl-ranksel" data-k="' + rk + '"><option value="">Choose a factor\u2026</option>' +
          p.options.map(function (o) { return "<option" + (saved[rk] === o ? " selected" : "") + ">" + esc(o) + "</option>"; }).join("") + "</select></label>";
      }
      h += "</div>";
    }
    if (p.type === "match") {
      var order = p.items.map(function (_, i) { return i; });
      for (var q = order.length - 1, seed = 7; q > 0; q--) { seed = (seed * 9301 + 49297) % 233280; var j = Math.floor(seed / 233280 * (q + 1)); var tmp = order[q]; order[q] = order[j]; order[j] = tmp; }
      h += '<div class="fl__scroll"><table class="fl-match"><thead><tr><th>' + esc(p.termCol || "Key term") + '</th><th>' + esc(p.defCol || "Definition (choose the matching one)") + '</th>' + (p.noExample ? "" : "<th>Your example</th>") + '</tr></thead><tbody>';
      p.items.forEach(function (it, i) {
        var k = p.id + i, pick = saved[k];
        var cls = pick == null || pick === "" ? "" : (+pick === i ? " fl-ok" : " fl-bad");
        h += '<tr><td class="fl__rh">' + esc(it.t) + '</td><td><select class="fl-sel' + cls + '" data-mk="' + k + '" data-a="' + i + '" aria-label="Definition for ' + esc(it.t) + '"><option value="">Choose a definition\u2026</option>' +
          order.map(function (o) { return '<option value="' + o + '"' + (pick != null && pick !== "" && +pick === o ? " selected" : "") + ">" + esc(p.items[o].d) + "</option>"; }).join("") +
          '</select><span class="fl-mfb">' + (cls === " fl-ok" ? "\u2713 " + esc(it.d) : cls ? "Try again" : "") + "</span></td>" + (p.noExample ? "" : "<td>" + box(saved, k + "e", "Example for " + it.t, 2, 1) + "</td>") + "</tr>";
      });
      h += "</tbody></table></div>";
    }
    if (p.type === "mcq")
      p.items.forEach(function (it, i) {
        var k = p.id + i, pick = saved[k];
        h += '<div class="fl-mcq" data-mk="' + k + '" data-pid="' + p.id + '" data-a="' + it.a + '"><p class="fl__vq"><b>' + (i + 1) + ".</b> " + esc(it.q) + "</p><div class=\"fl-mcq__o\">" +
          it.o.map(function (o, j) {
            var c = pick == null ? "" : (j === it.a ? " right" : (+pick === j ? " wrong" : ""));
            return '<button type="button" class="fl-opt' + c + '" data-j="' + j + '"><b>' + "ABCDEF".charAt(j) + "</b> " + esc(o) + "</button>";
          }).join("") + '</div><p class="fl__note fl-mcq__fb">' + (pick == null ? "" : (+pick === it.a ? "\u2713 Correct." : "Not quite: the answer is " + "ABCDEF".charAt(it.a) + ".")) + "</p>" +
          (p.noReason ? "" : '<p class="fl__note" style="margin-top:.2rem">Reason:</p>' + box(saved, k + "r", "Reason for question " + (i + 1), 2)) + "</div>";
      });
    if (p.type === "questions")
      p.rows.forEach(function (r, i) { h += '<p class="fl__vq">' + (p.letters ? "abcdefghij".charAt(i) + ")" : (i + 1) + ".") + " " + esc(r) + "</p>" + box(saved, p.id + i, r, 3); });
    h += "</div>";
  });

  h += '<div class="fl__actions"><button type="button" class="fl__btn fl-copy">Copy my answers for OneNote</button>' +
    '<button type="button" class="fl__btn fl__btn--ghost" data-print="1">Print / save as PDF</button>' +
    '<span class="fl__note">Your answers save automatically on this device.</span></div></div>' + (inl ? "</section>" : "</details>");

  if (ed.replace) { ed.replace.insertAdjacentHTML("afterend", h); ed.replace.remove(); }
  else if (isL) {
    // In-class lessons sit under card number cfg.afterCard (default 1, Teach Me Live).
    var last = document.querySelectorAll(".fl--lesson"), cards = modes.querySelectorAll(".lh-mode"), teach = cards[Math.min((cfg.afterCard || 1), cards.length) - 1];
    (last.length ? last[last.length - 1] : teach || modes).insertAdjacentHTML("afterend", h);
  }
  else modes.insertAdjacentHTML("beforebegin", h);
  var root = document.getElementById("flipLearning" + (n ? n + 1 : ""));
  if (ed.open) root.open = true;
  if (root && root.tagName === "DETAILS") root.addEventListener("toggle", function () {
    if (document.body.classList.contains("fl-printing")) return;
    try { if (root.open) localStorage.removeItem(OPENKEY); else localStorage.setItem(OPENKEY, "1"); } catch (e) {}
  });
  if (cfg.overview && !document.getElementById("lhOverview")) {
    var o = cfg.overview, first = document.querySelector(".lh-stats") || document.querySelector(".fl:not(.fl--lesson)") || modes;
    first.insertAdjacentHTML("beforebegin", '<section class="lh-ov" id="lhOverview">' +
      (o.heading ? '<div class="lh-ov__hd">' + esc(o.heading) + "</div>" : "") +
      '<div class="lh-ov__top"><div class="lh-ov__li"><b>Learning intention:</b> <i>' + esc(o.intention) + "</i></div>" +
      (o.sdgs ? '<div class="lh-ov__sdgs">' + o.sdgs.map(function (g) { return '<span class="lh-sdg" style="background:' + g.c + '"><b>' + g.n + "</b>" + esc(g.t) + "</span>"; }).join("") + "</div>" : "") + "</div>" +
      '<div class="lh-ov__row"><div class="lh-ov__box"><h3>Syllabus statement</h3>' + o.syllabus.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + "</div>" +
      '<div class="lh-ov__box"><h3>Success criteria</h3><p>I can:</p><ul>' + o.success.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></div></div></section>");
  }
  var edBtn = root.querySelector(".fl-edit");
  if (edBtn) edBtn.onclick = function () { openEditor(base, n, ed, root); };
  var inputs = root.querySelectorAll(".fl-in");
  root.querySelectorAll(".fl-bingo").forEach(function (bg) {
    var words = JSON.parse(bg.getAttribute("data-words")), k = bg.getAttribute("data-k"), st = saved[k];
    function deal() { var w = words.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 16); st = { w: w, on: [] }; save(); draw(); }
    function save() { saved[k] = st; try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) {} }
    function win() { var L = [], i; for (i = 0; i < 4; i++) { L.push([0, 1, 2, 3].map(function (j) { return i * 4 + j; })); L.push([0, 1, 2, 3].map(function (j) { return j * 4 + i; })); } L.push([0, 5, 10, 15]); L.push([3, 6, 9, 12]); return L.some(function (l) { return l.every(function (x) { return st.on.indexOf(x) >= 0; }); }); }
    function draw() {
      var g = bg.querySelector(".fl-bingo__grid");
      g.innerHTML = st.w.map(function (w, i) { return '<button type="button" class="fl-bingo__c' + (st.on.indexOf(i) >= 0 ? " on" : "") + '" data-i="' + i + '">' + esc(w) + "</button>"; }).join("") + (win() ? '<div class="fl-bingo__win">BINGO!</div>' : "");
    }
    bg.addEventListener("click", function (e) {
      var c = e.target.closest(".fl-bingo__c");
      if (c) { var i = +c.getAttribute("data-i"), at = st.on.indexOf(i); if (at >= 0) st.on.splice(at, 1); else st.on.push(i); save(); draw(); }
      if (e.target.closest('[data-bingo="new"]')) deal();
    });
    if (!st || !st.w) deal(); else draw();
  });
  root.querySelectorAll("[data-anim]").forEach(function (b) {
    var box = b.closest(".fl-anim"), on = true;
    b.onclick = function () { on = !on; box.querySelectorAll("svg").forEach(function (s) { if (s.pauseAnimations) { if (on) s.unpauseAnimations(); else s.pauseAnimations(); } }); b.textContent = on ? "Pause animations" : "Play animations"; };
  });
  root.querySelectorAll("[data-sin]").forEach(function (box) {
    var c = box.querySelector('[data-s="c"]'), d = box.querySelector('[data-s="d"]'), out = box.querySelector(".fl-sin__out");
    function calc() { var a = parseFloat(c.value), b = parseFloat(d.value); if (!(a > 0 && b > 0)) { out.textContent = "Enter both lengths."; return; } var si = a / b; out.innerHTML = "Sinuosity index = " + a + " \u00f7 " + b + " = <b>" + si.toFixed(2) + "</b> (" + (si < 1.05 ? "straight" : si <= 1.5 ? "sinuous" : "meandering") + ")" + (a < b ? " \u2013 check: the channel can\u2019t be shorter than the straight line." : ""); }
    c.addEventListener("input", calc); d.addEventListener("input", calc); calc();
  });
  root.querySelectorAll("[data-vel]").forEach(function (box) {
    var L = [["Clay", "under 0.004 mm", 350, 0.05], ["Silt", "0.004\u20130.06 mm", 90, 0.2], ["Sand", "0.06\u20132 mm", 20, 2.8], ["Gravel", "2\u201316 mm", 58, 26], ["Pebbles", "16\u201364 mm", 180, 116], ["Boulders", "over 256 mm", 550, 430]];
    var r = box.querySelector("input"), out = box.querySelector(".fl-vel__v"), rows = box.querySelector(".fl-vel__rows");
    function draw() {
      var v = Math.pow(10, -1 + 4 * r.value / 100);
      out.textContent = (v < 1 ? v.toFixed(1) : Math.round(v)) + " cm/s" + (v < 1 ? " (almost still)" : v > 300 ? " (major flood)" : "");
      rows.innerHTML = L.map(function (p) {
        var s = v >= p[2] ? ["er", "Eroded and picked up"] : v >= p[3] ? ["tr", "Kept moving (transported)"] : ["de", "Deposited"];
        return '<div class="fl-vel__r"><span><b>' + p[0] + "</b> <small>" + p[1] + '</small></span><span class="fl-vel__s ' + s[0] + '">' + s[1] + "</span></div>";
      }).join("");
    }
    r.addEventListener("input", draw); draw();
  });
  root.querySelectorAll(".fl-iso").forEach(function (box) {
    var b = box.querySelector("[data-iso]"); if (!b) return;
    b.onclick = function () { var on = box.classList.toggle("fl-iso--show"); b.textContent = on ? "Hide model isovels" : "Show model isovels"; };
  });
  root.querySelectorAll(".fl-cw").forEach(function (cw) {
    var pid = cw.getAttribute("data-id"), dir = "A";
    function at(r, c) { return cw.querySelector('.fl-cw__i[data-r="' + r + '"][data-c="' + c + '"]'); }
    cw.addEventListener("focusin", function (e) { var t = e.target; if (!t.classList.contains("fl-cw__i")) return; var r = +t.dataset.r, c = +t.dataset.c; if (dir === "A" && !at(r, c + 1) && !at(r, c - 1)) dir = "D"; else if (dir === "D" && !at(r + 1, c) && !at(r - 1, c)) dir = "A"; });
    cw.addEventListener("click", function (e) { var t = e.target; if (t.classList.contains("fl-cw__i") && document.activeElement === t && t._f) { var r = +t.dataset.r, c = +t.dataset.c; if (dir === "A" && (at(r + 1, c) || at(r - 1, c))) dir = "D"; else if (dir === "D" && (at(r, c + 1) || at(r, c - 1))) dir = "A"; } if (t.classList.contains("fl-cw__i")) t._f = 1; });
    cw.addEventListener("input", function (e) {
      var t = e.target; if (!t.classList.contains("fl-cw__i")) return;
      t.value = t.value.replace(/[^a-z]/gi, "").slice(-1).toUpperCase(); t.classList.remove("ok", "bad");
      saved[pid + "_" + t.dataset.r + "_" + t.dataset.c] = t.value; try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (err) {}
      if (t.value) { var n = dir === "A" ? at(+t.dataset.r, +t.dataset.c + 1) : at(+t.dataset.r + 1, +t.dataset.c); if (n) n.focus(); }
    });
    cw.addEventListener("keydown", function (e) {
      var t = e.target; if (!t.classList.contains("fl-cw__i")) return; var r = +t.dataset.r, c = +t.dataset.c, m = { ArrowLeft: [0, -1], ArrowRight: [0, 1], ArrowUp: [-1, 0], ArrowDown: [1, 0] }[e.key];
      if (m) { var n = at(r + m[0], c + m[1]); if (n) { dir = m[0] ? "D" : "A"; n.focus(); } e.preventDefault(); }
      if (e.key === "Backspace" && !t.value) { var p2 = dir === "A" ? at(r, c - 1) : at(r - 1, c); if (p2) { p2.focus(); e.preventDefault(); } }
    });
    cw.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cw]"); if (!b) return; var all = cw.querySelectorAll(".fl-cw__i"), right = 0, filled = 0;
      all.forEach(function (i) { if (!i.value) { i.classList.remove("ok", "bad"); return; } filled++; var okk = i.value === i.dataset.a; if (okk) right++;
        if (b.dataset.cw === "check") { i.classList.toggle("ok", okk); i.classList.toggle("bad", !okk); }
        else if (!okk) { i.value = ""; i.classList.remove("bad"); saved[pid + "_" + i.dataset.r + "_" + i.dataset.c] = ""; } });
      try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (err) {}
      cw.querySelector(".fl-cw__msg").textContent = b.dataset.cw === "check" ? right + " of " + all.length + " letters correct" + (right === all.length ? " \u2713 Crossword complete!" : "") : "Wrong letters cleared.";
    });
  });
  root.querySelectorAll("[data-rev]").forEach(function (b) {
    var box = b.closest(".fl-rev"), inp = box.querySelector(".fl-rev__in"), msg = box.querySelector(".fl-rev__msg"), body = box.querySelector(".fl-rev__body");
    function go() { if (btoa(inp.value.trim().toLowerCase()) === b.getAttribute("data-rev")) { body.hidden = false; box.querySelector(".fl-rev__lock").hidden = true; } else msg.textContent = "That code is not right. Ask your teacher."; }
    b.onclick = go; inp.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
  });
  root.querySelectorAll(".fl-loc").forEach(function (box) {
    var part = cfg.parts.filter(function (q) { return q.id === box.getAttribute("data-id"); })[0];
    if (part) locMap(box, part);
  });
  root.querySelectorAll(".fl-gis").forEach(function (box) {
    var part = cfg.parts.filter(function (q) { return q.id === box.getAttribute("data-id"); })[0];
    if (part) gisMap(box, part);
  });
  root.querySelectorAll(".fl-rmap").forEach(function (box) {
    var part = cfg.parts.filter(function (q) { return q.id === box.getAttribute("data-id"); })[0];
    if (part) riverMap(box, part);
  });
  // Games placed inside the lesson: fit the frame, and hide the same game's card further down.
  root.querySelectorAll(".fl-game iframe").forEach(function (f) {
    var href = f.getAttribute("src");
    document.querySelectorAll('.lh-mode a.lh-mode__btn[href="' + href + '"]').forEach(function (a) { var c = a.closest(".lh-mode"); if (c) c.style.display = "none"; });
    function fit() {
      try {
        var d = f.contentDocument; if (!d || !d.body) return;
        var hh = Math.max(d.body.scrollHeight, d.documentElement.scrollHeight), cap = Math.max(620, Math.min(900, Math.round(window.innerHeight * 0.88)));
        var want = Math.min(hh, cap); if (hh > 200 && Math.abs(want - f.getBoundingClientRect().height) > 8) f.style.height = want + "px";
      } catch (e) {}
    }
    f.addEventListener("load", function () { fit(); try { if (window.ResizeObserver) new ResizeObserver(fit).observe(f.contentDocument.body); } catch (e) {} });
  });

  function state() {
    root.querySelectorAll(".fl__wc").forEach(function (el) {
      var t = (saved[el.getAttribute("data-wc")] || "").trim(), n = t ? t.split(/\s+/).length : 0;
      var lo = +el.getAttribute("data-min"), hi = +el.getAttribute("data-max");
      el.textContent = n + " words (aim for " + lo + "\u2013" + hi + ")" + (n >= lo && n <= hi ? " \u2713" : "");
      el.style.color = n >= lo && n <= hi ? "var(--lh-green)" : "";
    });
    root.querySelectorAll(".fl-use").forEach(function (el) {
      var t = (saved[el.getAttribute("data-use")] || "").toLowerCase(), c = el.querySelectorAll(".fl-use__c"), n = 0;
      c.forEach(function (x) { var ok = false; try { ok = new RegExp(x.getAttribute("data-re")).test(t); } catch (e) {} x.classList.toggle("on", ok); if (ok) n++; });
      el.querySelector(".fl-use__n").textContent = "Key terms used: " + n + " of " + c.length + (n === c.length ? " \u2713" : "");
    });
    var done = 0;
    inputs.forEach(function (t) { if (t.value.trim()) done++; });
    var sels = root.querySelectorAll(".fl-sel");
    if (sels.length) {
      var right = 0; sels.forEach(function (x) { if (x.value !== "" && x.value === x.getAttribute("data-a")) right++; });
      root.querySelector(".fl__state").textContent = right + " / " + sels.length + " matched" + (done ? " \u00b7 " + done + " examples" : "");
      return;
    }
    root.querySelector(".fl__state").textContent = done ? done + " / " + inputs.length + " answered" : "Not started";
  }
  root.addEventListener("change", function (e) {
    var t = e.target;
    if (t.classList && (t.classList.contains("fl-ordsel") || t.classList.contains("fl-binsel") || t.classList.contains("fl-ranksel"))) {
      saved[t.getAttribute("data-k")] = t.value;
      try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (err) {}
      t.classList.remove("fl-ok", "fl-bad");
      return;
    }
  });
  root.addEventListener("change", function (e) {
    var t = e.target; if (!t.classList || !t.classList.contains("fl-rsel")) return;
    saved[t.getAttribute("data-k")] = t.value;
    try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (err) {}
    t.classList.remove("fl-ok", "fl-bad");
  });
  root.addEventListener("click", function (e) {
    var rb = e.target.closest("[data-rchk],[data-rshow]");
    if (rb) {
      var bx = rb.closest(".fl-rmap"), sl = bx.querySelectorAll(".fl-rsel"), ok = 0, show = rb.hasAttribute("data-rshow");
      sl.forEach(function (x) {
        if (show && !x.value) { x.value = x.getAttribute("data-a"); x.classList.add("fl-shown"); }
        var g = x.value === x.getAttribute("data-a"); if (g) ok++;
        x.classList.toggle("fl-ok", g); x.classList.toggle("fl-bad", !g && x.value !== "");
      });
      bx.querySelector("[data-rmsg]").textContent = show ? "Answers shown for any you left blank." : ok + " of " + sl.length + " correct." + (ok === sl.length ? " Excellent!" : " Fix the red ones and check again.");
      return;
    }
  });
  root.addEventListener("click", function (e) {
    var b = e.target.closest("[data-ordchk],[data-sortchk],[data-tb],[data-tm]"); if (!b) return;
    if (b.hasAttribute("data-ordchk")) {
      var ans = b.getAttribute("data-ans"), right = 0, sels = b.closest(".fl__part").querySelectorAll(".fl-ordsel");
      sels.forEach(function (x, i) { var ok = x.value === ans.charAt(i); if (ok) right++; x.classList.toggle("fl-ok", ok); x.classList.toggle("fl-bad", !ok && x.value !== ""); });
      root.querySelector('[data-ordfb="' + b.getAttribute("data-ordchk") + '"]').textContent = right === sels.length ? "\u2713 All in the right order." : right + " of " + sels.length + " in the right place. Try again.";
    }
    if (b.hasAttribute("data-sortchk")) {
      var part = b.closest(".fl__part"), ok2 = 0, all = part.querySelectorAll(".fl-binsel");
      all.forEach(function (x) {
        var acc = x.getAttribute("data-ok").split("|"), good = acc.indexOf(x.value) >= 0, fb = x.closest("tr").querySelector(".fl-sortfb");
        if (good) ok2++;
        x.classList.toggle("fl-ok", good); x.classList.toggle("fl-bad", !good && x.value !== "");
        fb.textContent = !x.value ? "" : good ? (acc.length > 1 ? "\u2713 (also: " + acc.filter(function (a) { return a !== x.value; }).join(", ") + ")" : "\u2713") : "Think again";
      });
      part.querySelector("[data-sortmsg]").textContent = ok2 + " of " + all.length + " accepted." + (part.querySelector(".fl-rb") ? " Any well-argued alternative is fine for the rule-breakers." : "");
    }
    if (b.hasAttribute("data-tb")) {
      var tb = b.closest(".fl-taboo"); tb._i = tb._i || 0;
      var act = b.getAttribute("data-tb"), n = tb._cards.length;
      if (act === "next") tb._i = (tb._i + 1) % n; if (act === "prev") tb._i = (tb._i - 1 + n) % n;
      if (act === "shuffle") { tb._cards.sort(function () { return Math.random() - 0.5; }); tb._i = 0; }
      showTaboo(tb);
    }
    if (b.hasAttribute("data-tm")) {
      var tm = b.closest(".fl-timer"), total = +tm.getAttribute("data-sec"), lab = tm.querySelector(".fl-timer__t");
      function fmt(x) { return Math.floor(x / 60) + ":" + ("0" + (x % 60)).slice(-2); }
      if (b.getAttribute("data-tm") === "reset") { clearInterval(tm._iv); tm._iv = null; tm._left = total; lab.textContent = fmt(total); tm.classList.remove("fl-timer--done"); tm.querySelector('[data-tm="go"]').textContent = "Start"; return; }
      if (tm._iv) { clearInterval(tm._iv); tm._iv = null; b.textContent = "Resume"; return; }
      if (tm._left == null) tm._left = total;
      b.textContent = "Pause";
      tm._iv = setInterval(function () {
        tm._left--; lab.textContent = fmt(Math.max(0, tm._left));
        if (tm._left <= 0) { clearInterval(tm._iv); tm._iv = null; tm.classList.add("fl-timer--done"); lab.textContent = "Time!"; b.textContent = "Start"; tm._left = null; }
      }, 1000);
    }
  });
  function showTaboo(tb) {
    var c = tb._cards[tb._i];
    tb.querySelector(".fl-taboo__t").textContent = c.t;
    tb.querySelector(".fl-taboo__ban ul").innerHTML = c.ban.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("");
    tb.querySelector("[data-tbn]").textContent = "Card " + (tb._i + 1) + " of " + tb._cards.length;
  }
  root.querySelectorAll(".fl-taboo").forEach(function (tb) { tb._cards = JSON.parse(tb.getAttribute("data-cards")); tb._i = 0; showTaboo(tb); });
  /* Matching tables: a definition already chosen in one row is removed from the other rows' lists
     (hidden; disabled as well for browsers that ignore hidden options). Changing a choice puts it back. */
  function hideUsed(tbl) {
    var sels = [].slice.call(tbl.querySelectorAll(".fl-sel")), used = sels.map(function (x) { return x.value; });
    sels.forEach(function (x) {
      [].slice.call(x.options).forEach(function (o) { var off = o.value !== "" && o.value !== x.value && used.indexOf(o.value) >= 0; o.hidden = off; o.disabled = off; });
    });
  }
  root.querySelectorAll("table.fl-match").forEach(hideUsed);
  root.addEventListener("change", function (e) {
    var sel = e.target.closest(".fl-sel"); if (!sel) return;
    var k = sel.getAttribute("data-mk"), a = sel.getAttribute("data-a");
    saved[k] = sel.value;
    try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (err) {}
    var ok = sel.value !== "" && sel.value === a;
    sel.className = "fl-sel" + (sel.value === "" ? "" : ok ? " fl-ok" : " fl-bad");
    sel.nextSibling.textContent = sel.value === "" ? "" : ok ? "\u2713 " + sel.options[sel.selectedIndex].text : "Try again";
    var tbl = sel.closest("table.fl-match"); if (tbl) hideUsed(tbl);
    state();
  });
  root.addEventListener("click", function (e) {
    var b = e.target.closest(".fl-opt"); if (!b) return;
    var g = b.closest(".fl-mcq"), k = g.getAttribute("data-mk"), a = +g.getAttribute("data-a"), j = +b.getAttribute("data-j");
    saved[k] = j;
    if (saved[k + "f"] == null) saved[k + "f"] = j;   /* first try: this is what counts for the mark book */
    try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (err) {}
    if (cfg.markbook) sendQuiz(g);
    g.querySelectorAll(".fl-opt").forEach(function (o) { var oj = +o.getAttribute("data-j"); o.className = "fl-opt" + (oj === a ? " right" : (oj === j ? " wrong" : "")); });
    g.querySelector(".fl-mcq__fb").textContent = j === a ? "\u2713 Correct." : "Not quite: the answer is " + "ABCDEF".charAt(a) + ".";
  });
  /* Lessons with cfg.markbook (KS3) send each multiple-choice quiz to the student's account once every
     question has been answered: score = questions right first time. It then shows on My scores and in
     the teacher's KS3 Geography mark book. Students who are not logged in: nothing is sent. */
  function sendQuiz(g) {
    var pid = g.getAttribute("data-pid"), part = cfg.parts.filter(function (q) { return q.id === pid && q.type === "mcq"; })[0];
    if (!part) return;
    var got = 0, all = true;
    part.items.forEach(function (it, i) { var f = saved[pid + i + "f"]; if (f == null) all = false; else if (+f === it.a) got++; });
    if (!all || saved[pid + "_sent"]) return;
    saved[pid + "_sent"] = 1;
    try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (err) {}
    var slug = "ks3-" + String(id).toLowerCase().replace(/^ks3-/, "");
    function go() { if (window.SBLGameAccount) window.SBLGameAccount.record(slug, "quiz", pid, part.prompt || "Lesson quiz", got, part.items.length); }
    if (window.SBLGameAccount) go();
    else { var sc = document.createElement("script"); sc.src = "/js/sbl-game-account.js"; sc.onload = go; document.head.appendChild(sc); }
  }
  root.addEventListener("input", function (e) {
    if (!e.target.classList.contains("fl-in")) return;
    saved[e.target.getAttribute("data-k")] = e.target.value;
    try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (err) {}
    state();
  });
  state();

  root.querySelector("[data-print]").onclick = function () {
    root.open = true; document.body.classList.add("fl-printing"); root.classList.add("fl--print");
    window.print();
    setTimeout(function () { document.body.classList.remove("fl-printing"); root.classList.remove("fl--print"); }, 500);
  };

  /* Diagrams for Copy to OneNote: every SVG or image in a part becomes a PNG; text-only boxes are copied as text. */
  function rasterOne(el) {
    return new Promise(function (res) {
      try {
        var w = 760, h0, src;
        if (el.tagName.toLowerCase() === "svg") {
          var vb = (el.getAttribute("viewBox") || "0 0 760 300").split(/[\s,]+/).map(Number); w = vb[2]; h0 = vb[3];
          var c = el.cloneNode(true);
          if (!el.closest(".fl-iso--show")) c.querySelectorAll(".iso-model").forEach(function (m) { m.parentNode.removeChild(m); });
          c.setAttribute("xmlns", "http://www.w3.org/2000/svg"); c.setAttribute("width", w); c.setAttribute("height", h0);
          var str = new XMLSerializer().serializeToString(c).replace(/var\(--[a-z-]+(,\s*([^)]+))?\)/g, function (m, a, fb) { return fb || "#d0d7de"; });
          src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(str);
        } else { src = el.currentSrc || el.src; }
        var im = new Image();
        im.onload = function () {
          try {
            var W = el.tagName.toLowerCase() === "svg" ? w : (im.naturalWidth || 760), H = el.tagName.toLowerCase() === "svg" ? h0 : (im.naturalHeight || 400);
            var k = Math.min(2, 1600 / W), cv = document.createElement("canvas");
            cv.width = Math.round(W * k); cv.height = Math.round(H * k);
            var g = cv.getContext("2d"); g.fillStyle = "#fff"; g.fillRect(0, 0, cv.width, cv.height); g.drawImage(im, 0, 0, cv.width, cv.height);
            res('<p><img src="' + cv.toDataURL("image/png") + '" width="' + Math.min(640, W) + '" alt="' + esc(el.getAttribute("aria-label") || el.getAttribute("alt") || "Diagram") + '"></p>');
          } catch (e) { res(""); }
        };
        im.onerror = function () { res(""); };
        im.src = src;
      } catch (e) { res(""); }
    });
  }
  function gatherMedia() {
    var jobs = [], media = {};
    root.querySelectorAll("[data-pi]").forEach(function (box) {
      if (box.closest(".fl-ed")) return;
      var pi = box.getAttribute("data-pi");
      if (box.querySelector(".fl-anim,.fl-vel,.fl-rmap,.fl-game,iframe")) return;
      var els = [].slice.call(box.querySelectorAll("svg,img")).filter(function (e) { return !e.closest("svg") || e.tagName.toLowerCase() === "svg" && !e.parentNode.closest("svg"); });
      if (!els.length) {
        var t = box.cloneNode(true); t.querySelectorAll("button,input,textarea,select,script,style").forEach(function (x) { x.parentNode.removeChild(x); });
        media[pi] = '<div>' + t.innerHTML + "</div>"; return;
      }
      jobs.push(Promise.all(els.map(rasterOne)).then(function (a) { media[pi] = a.join(""); }));
    });
    return Promise.all(jobs).then(function () { return media; });
  }
  function buildCopy(media) {
    media = media || {};
    var T = 'style="border-collapse:collapse;border:1px solid #999"', D = 'style="border:1px solid #999;padding:4px 6px;vertical-align:top"';
    var html = "<h2>Flip learning: " + esc(cfg.title) + "</h2>", out = ["Flip learning: " + cfg.title, ""];
    function ans(k) { return saved[k] || ""; }
    function cellHtml(v) { return esc(v).replace(/\n/g, "<br>") || "&nbsp;"; }
    cfg.parts.forEach(function (p, pi) {
      if (p.type === "heading") { html += "<h3>" + esc(p.text) + "</h3>"; out.push(p.text.toUpperCase(), ""); return; }
      if (p.type === "html") { if (media[pi]) { html += media[pi]; out.push("[Diagram]", ""); } return; }
      var lab = p.label != null ? p.label : p.id + ")";
      if (p.prompt) { html += "<p><b>" + esc((lab ? lab + " " : "") + p.prompt) + "</b></p>"; out.push((lab ? lab + " " : "") + p.prompt); }
      (p.links || []).forEach(function (l) { html += '<p><a href="' + esc(l.url) + '">' + esc(l.label) + "</a></p>"; out.push(l.label + ": " + l.url); });
      if (p.before && media[pi]) html += media[pi];
      if (p.type === "cards") p.items.forEach(function (it, i) { html += "<p><b>" + esc(it.t) + ":</b> <i>" + esc(it.q) + "</i><br>" + cellHtml(ans(p.id + i)) + "</p>"; out.push(it.t + ": " + it.q, ans(p.id + i)); });
      if (p.type === "crossword") { var got = 0, tot = 0; p.words.forEach(function (w) { for (var q3 = 0; q3 < w.a.length; q3++) { tot++; if ((saved[p.id + "_" + (w.r + (w.d === "D" ? q3 : 0)) + "_" + (w.col + (w.d === "A" ? q3 : 0))] || "") === w.a.charAt(q3)) got++; } }); html += "<p>Crossword completed.</p>"; out.push("Crossword completed."); }
      if (p.type === "text") { html += "<p>" + cellHtml(ans(p.id)) + "</p>"; out.push(ans(p.id)); }
      if (p.type === "order") {
        var seq = p.answer.map(function (_, i) { return saved[p.id + "s" + i] || "_"; }).join(" ");
        html += "<p>My order: " + esc(seq) + "</p>"; out.push("My order: " + seq);
      }
      if (p.type === "sort") p.cards.forEach(function (c, i) { var v = saved[p.id + i] || ""; html += "<p>" + esc(c.t) + ": " + esc(v) + "</p>"; out.push("- " + c.t + ": " + v); });
      if (p.type === "rank") for (var q2 = 0; q2 < p.n; q2++) { var v2 = saved[p.id + q2] || ""; html += "<p>" + (q2 + 1) + ". " + esc(v2) + "</p>"; out.push((q2 + 1) + ". " + v2); }
      if (p.type === "match") {
        html += "<table " + T + "><tr><th " + D + ">" + esc(p.termCol || "Key term") + "</th><th " + D + ">" + esc((p.defCol || "Definition").replace(/ \(choose.*\)$/, "")) + "</th>" + (p.noExample ? "" : "<th " + D + ">Example</th>") + "</tr>";
        p.items.forEach(function (it, i) {
          var k = p.id + i, pk = saved[k], def = pk == null || pk === "" ? "" : p.items[+pk].d + (+pk === i ? "" : " (not matched)");
          html += "<tr><td " + D + "><b>" + esc(it.t) + "</b></td><td " + D + ">" + cellHtml(def) + "</td>" + (p.noExample ? "" : "<td " + D + ">" + cellHtml(ans(k + "e")) + "</td>") + "</tr>";
          out.push("- " + it.t + " | " + def + (p.noExample ? "" : " | Example: " + ans(k + "e")));
        });
        html += "</table>";
      }
      if (p.type === "mcq") p.items.forEach(function (it, i) {
        var k = p.id + i, pk = saved[k], ch = pk == null ? "(not answered)" : "ABCDEF".charAt(+pk) + " " + it.o[+pk] + (+pk === it.a ? " \u2713" : " (answer: " + "ABCDEF".charAt(it.a) + ")");
        html += "<p><i>" + (i + 1) + ". " + esc(it.q) + "</i><br>Answer: " + esc(ch) + (p.noReason ? "" : "<br>Reason: " + cellHtml(ans(k + "r"))) + "</p>";
        out.push((i + 1) + ". " + it.q, "Answer: " + ch); if (!p.noReason) out.push("Reason: " + ans(k + "r"));
      });
      if (p.type === "questions") p.rows.forEach(function (r, i) {
        var n = p.letters ? "abcdefghij".charAt(i) + ")" : (i + 1) + ".";
        html += "<p><i>" + n + " " + esc(r) + "</i><br>" + cellHtml(ans(p.id + i)) + "</p>";
        out.push(n + " " + r, ans(p.id + i));
      });
      if (p.type === "terms" || p.type === "table") {
        var cols = tableCols(p);
        html += "<table " + T + "><tr>" + cols.map(function (c) { return "<th " + D + ">" + esc(c) + "</th>"; }).join("") + "</tr>";
        p.rows.forEach(function (r, i) {
          if (isGroup(r)) { html += '<tr><td colspan="' + cols.length + '" ' + D + "><b>" + esc(r.slice(1)) + "</b></td></tr>"; out.push(r.slice(1).toUpperCase()); return; }
          var ex = p.prefill && p.prefill[i], cells = [];
          html += "<tr><td " + D + "><b>" + esc(r) + "</b></td>";
          for (var c = 1; c < cols.length; c++) {
            var fixed = ex && ex[c - 1] !== null, v = fixed ? (ex[c - 1] || "") : ans(cellKey(p, i, c));
            html += "<td " + D + ">" + (fixed && !p.given ? "<i>" + cellHtml(v) + "</i>" : cellHtml(v)) + "</td>";
            cells.push((cols.length > 2 ? cols[c] + ": " : "") + v);
          }
          html += "</tr>";
          out.push("- " + r + " | " + cells.join(" | "));
        });
        html += "</table>";
      }
      out.push("");
    });
    return { html: html, text: out.join("\n") };
  }
  root.querySelectorAll(".fl-copy").forEach(function (btn) {
    btn.onclick = function () {
      var c = buildCopy(), label = btn.textContent, mp = gatherMedia().then(buildCopy);
      function ok() { btn.textContent = "Copied ✓ paste into OneNote"; setTimeout(function () { btn.textContent = label; }, 2200); }
      function plain() {
        if (navigator.clipboard) navigator.clipboard.writeText(c.text).then(ok, function () { window.prompt("Copy:", c.text); });
        else window.prompt("Copy:", c.text);
      }
      try {
        if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
          navigator.clipboard.write([new ClipboardItem({
            "text/html": mp.then(function (r) { return new Blob([r.html], { type: "text/html" }); }, function () { return new Blob([c.html], { type: "text/html" }); }),
            "text/plain": new Blob([c.text], { type: "text/plain" })
          })]).then(ok, plain);
          return;
        }
      } catch (e) {}
      plain();
    };
  });
  }
  /* ---- The editor (teachers only) ---- */
  function openEditor(base, n, ed, root) {
    if (root.querySelector(".fl-ed")) return;
    var e = ed.edits || {}, hide = e.hide || [];
    var linkRows = (e.links || []).concat([{ label: "", url: "" }, { label: "", url: "" }]).slice(0, 6);
    var h = '<div class="fl-ed"><h3>Edit this task for your classes</h3>' +
      '<p class="fl__note">Only students assigned to you see these changes. The original task is never changed, and you can revert at any time.</p>' +
      '<label class="fl-ed__l">Introduction<textarea class="fl-edf" data-voice="off" data-f="intro" rows="3">' + esc(e.intro || base.intro || "") + "</textarea></label>" +
      '<label class="fl-ed__l">Note to your students (optional)<textarea class="fl-edf" data-voice="off" data-f="note" rows="2" placeholder="For example: We will go through Part C together in class.">' + esc(e.note || "") + "</textarea></label>" +
      '<div class="fl-ed__l">Links and videos (optional, must start with https://)' + linkRows.map(function (l) {
        return '<div class="fl-ed__link"><input class="fl-edf" data-voice="off" data-f="lab" placeholder="Label, e.g. Video: BBC Bitesize" value="' + esc(l.label) + '"><input class="fl-edf" data-voice="off" data-f="url" placeholder="https://" value="' + esc(l.url) + '"></div>';
      }).join("") + "</div>" +
      '<div class="fl-ed__l">Hide parts of the task (tick to hide)<div class="fl-ed__hide">' + base.parts.map(function (p, i) {
        return '<label><input type="checkbox" data-hide="' + i + '"' + (hide.indexOf(i) >= 0 ? " checked" : "") + "> " + esc(partLabel(p)) + "</label>";
      }).join("") + "</div></div>" +
      '<label class="fl-ed__l">Add your own questions (one per line, optional)<textarea class="fl-edf" data-voice="off" data-f="add" rows="4">' + esc((e.add || []).join("\n")) + "</textarea></label>" +
      '<div class="fl__actions"><button type="button" class="fl__btn" data-act="save">Save for my classes</button>' +
      '<button type="button" class="fl__btn fl__btn--ghost" data-act="cancel">Cancel</button>' +
      (hasEdits(e) ? '<button type="button" class="fl__btn fl__btn--ghost" data-act="revert">Revert to the original</button>' : "") +
      '<span class="fl__note" data-msg></span></div></div>';
    root.querySelector(".fl__top").insertAdjacentHTML("afterend", h);
    var box = root.querySelector(".fl-ed"), msg = box.querySelector("[data-msg]");
    function val(f) { return box.querySelector('[data-f="' + f + '"]').value.trim(); }
    box.querySelector('[data-act="cancel"]').onclick = function () { box.remove(); };
    box.querySelector('[data-act="save"]').onclick = function () {
      var intro = val("intro");
      var data = {
        intro: intro && intro !== (base.intro || "") ? intro : "",
        note: val("note"),
        links: Array.prototype.map.call(box.querySelectorAll(".fl-ed__link"), function (r) {
          return { label: r.querySelector('[data-f="lab"]').value.trim(), url: r.querySelector('[data-f="url"]').value.trim() };
        }).filter(function (l) { return l.label || l.url; }),
        hide: Array.prototype.filter.call(box.querySelectorAll("[data-hide]"), function (c) { return c.checked; }).map(function (c) { return +c.getAttribute("data-hide"); }),
        add: val("add").split("\n").map(function (x) { return x.trim(); }).filter(Boolean)
      };
      var bad = data.links.filter(function (l) { return !l.label || !/^https:\/\//i.test(l.url); });
      if (bad.length) { msg.textContent = "Each link needs a label and an address starting with https://"; msg.style.color = "var(--lh-orange)"; return; }
      msg.textContent = "Saving…"; msg.style.color = "";
      api("PUT", "", { panel: panelId(n), data: data }).then(function (r) {
        panel(base, n, { edits: r.edits, canEdit: true, replace: root, open: true });
      }, function (err) { msg.textContent = "Could not save: " + err.message; msg.style.color = "var(--lh-orange)"; });
    };
    var rv = box.querySelector('[data-act="revert"]');
    if (rv) rv.onclick = function () {
      if (!window.confirm("Remove your edits and go back to the original task?")) return;
      api("DELETE", "&panel=" + encodeURIComponent(panelId(n))).then(function () {
        panel(base, n, { edits: {}, canEdit: true, replace: root, open: true });
      }, function (err) { msg.textContent = "Could not revert: " + err.message; });
    };
  }

  list.forEach(function (c, n) {
    panel(c, n, {});
    // Load the teacher's version (a teacher's own edits, or a student's teacher's edits).
    try {
      api("GET", "&panel=" + encodeURIComponent(panelId(n)) + "&subject=" + encodeURIComponent(c.subject || "Geography")).then(function (r) {
        if (!r || (!r.canEdit && !hasEdits(r.edits))) return;
        var root = document.getElementById("flipLearning" + (n ? n + 1 : ""));
        panel(c, n, { edits: r.edits || {}, canEdit: !!r.canEdit, teacher: r.teacher || "", replace: root, open: root.open });
      }).catch(function () {});
    } catch (err) {}
  });
})();
