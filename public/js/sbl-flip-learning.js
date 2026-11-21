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
      title: "Ageing populations: the UK and Japan",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to help you.",
      parts: [
        { type: "heading", text: "Activity 1: What do you know?",
          note: "In class you will mind map these on the large whiteboards. Prepare your notes now, using the UK and/or Japan. If you can make judgements about the implications of the solutions, even better." },
        { id: "a", label: "", type: "table", prompt: "",
          links: [{ label: "Help link: Japan's pro-natal policy (Prezi)", url: "https://prezi.com/qayllgzlbrbf/japans-pro-natal-policy/" }],
          cols: ["", "Your notes (UK and/or Japan)"],
          rows: ["Calculation of the dependency ratio", "Reasons for an ageing population", "Problems", "Potential solutions"] },
        { type: "heading", text: "Activity 2: Read the population data sets",
          note: "Use the population data sets for Japan in Firefly (the 2018 population pyramid and the total fertility rate graph) to analyse the national trends." },
        { id: "b", type: "text", label: "", before: '<div class="fl__imgs">' + IMG("cp11-japan-pyramid", "Japan population pyramid, 2018") + IMG("cp11-fertility", "Total fertility rate in the USA and Japan, 1947 to 2010") + "</div>", prompt: "What national trends do the data sets show for Japan? Use figures from the data." },
        { type: "heading", text: "Extension" },
        { id: "c", type: "text", label: "", prompt: "Why did so many Japanese families avoid having children in 1966? Who were the Firehorse women?", video: true }
      ]
    }],
    CP12: {
      title: "Gender equality and human trafficking",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to help you research.",
      parts: [
        { type: "heading", text: "Part 1: Gender equality" },
        { id: "a", type: "text", prompt: "Watch the video and consider why gender equality is important. Make sure you define it.",
          links: [{ label: "Video: The girl effect: the clock is ticking", url: "https://www.youtube.com/watch?v=1e8xgF0JtVg" }] },
        { type: "heading", text: "Human trafficking",
          note: "Definition: “The unlawful act of transporting or coercing people in order to benefit from their work or service, typically in the form of forced labour or sexual exploitation.”" },
        { id: "b", type: "text", prompt: "Why are humans trafficked? Give as many examples as you can, e.g. countries." },
        { type: "heading", text: "Part 2: Gender equality: the global gender gap",
          note: "The Gender Inequality Index (GII), published by the UNDP in the Human Development Reports, is a composite measure of gender disadvantage in three dimensions: reproductive health, empowerment and the labour market. It runs from 0 (greater equality) to 1 (greater inequality)." },
        { id: "c", type: "table", prompt: "Research and complete the table on what the GII measures.",
          links: [{ label: "Gender Inequality Index (UNDP Human Development Reports)", url: "https://hdr.undp.org/data-center/thematic-composite-indices/gender-inequality-index#/indicies/GII" }],
          cols: ["Dimension", "What could we measure?", "Why might inequality here matter?"],
          rows: ["Reproductive health", "Empowerment", "Labour market"] },
        { id: "d", type: "table", prompt: "Why does gender equality vary between countries? Through research, note reasons why it varies across the world. We will build on this in the lesson.",
          note: "Use the countries in the Global Gender Gap Index rankings (World Economic Forum) below to find some reasons.",
          before: IMG("cp12-gender-gap", "Global Gender Gap Index rankings"),
          cols: ["", "Country", "Reason"], rows: ["1", "2", "3", "4", "5", "6"] }
      ]
    },
    CP13: {
      title: "The demographic dividend",
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
    },
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
      kind: "lesson", open: true, inline: true,
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
        { type: "heading", text: "Activity 5: Jigsaw: types of tourist and sporting activity",
          note: "Nagle and Cooke pp. 213\u2013217. Expert group A: pp. 213\u2013214; B: pp. 215\u2013216; C: p. 217. Fill in your rows, then teach your new group and complete the rest." },
        { id: "a5", label: "", type: "table", prompt: "",
          cols: ["Type", "Description", "Example"],
          rows: ["Domestic tourism", "International tourism", "Mass tourism", "Niche tourism", "Ecotourism", "Cultural / heritage tourism", "Adventure tourism", "Sports tourism", "Participant vs spectator"] },
        { type: "banner", src: "/images/flip/banner-reflect.jpg", alt: "Reflect" },
        { type: "heading", text: "Plenary: relay brain dump",
          note: "In teams, take turns at the whiteboard: one point each, 3 minutes. Then circle the point most likely to appear in an exam." },
        { type: "timer", minutes: 3, label: "3-minute relay" },
        { type: "heading", text: "Extension", note: "Optional homework: watch the TED talk, then be ready for a \u201cstand on the line\u201d debate next lesson: \u201cThe pandemic changed leisure for good.\u201d" },
        { id: "ex", label: "", type: "text", prompt: "Do you agree that the pandemic changed leisure for good? Note your view and two pieces of evidence.", video: true }
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
    ".fl__part{margin-top:1.3rem}.fl__q{font-weight:600;color:var(--lh-ink);margin:0 0 .5rem}.fl__q b{display:inline-block;min-width:1.6rem;margin-right:.3rem;color:var(--lh-teal-deep)}" +
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
    ".fl__vq{margin:.6rem 0 .25rem;color:var(--lh-ink)}.fl__video{display:inline-block;margin:.1rem 1.2rem .6rem 0;color:var(--lh-blue);font-weight:600}" +
    ".fl__yts{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:.8rem;margin:.3rem 0 .3rem;max-width:760px}" +
    ".fl__yt{position:relative;aspect-ratio:16/9;border-radius:10px;overflow:hidden;background:#000}.fl__yt iframe{position:absolute;inset:0;width:100%;height:100%;border:0}" +
    ".fl__img{margin:.3rem 0 .6rem}.fl__img img{display:block;max-width:100%;max-height:520px;height:auto;border:1px solid var(--lh-border);border-radius:10px;background:#fff}" +
    ".fl__imgs{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:.8rem}" +
    ".fl__tnote{margin:.2rem 0 .8rem;padding:.55rem .8rem;border-radius:10px;background:var(--lh-gold-bg);color:var(--lh-ink);font-size:.9rem}" +
    ".fl__note{font-size:.84rem;color:var(--lh-muted);margin:.2rem 0 .5rem}" +
    ".fl__actions{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;margin-top:1.4rem}" +
    ".fl__btn{border:1px solid var(--lh-teal);background:var(--lh-teal);color:#fff;border-radius:999px;padding:.5rem 1rem;font:600 .85rem var(--lh-font-body);cursor:pointer}" +
    ".fl__btn--ghost{background:transparent;color:var(--lh-teal-deep)}" +
    ".fl__pair{margin:.2rem 0 .8rem}" +
    ".fl__stage{display:block;width:100%;max-width:600px;height:auto;border-radius:12px;margin:2rem 0 .3rem}" +
    ".fl--inline{border-left:0;border-top:5px solid var(--lh-orange);padding:0}.fl__ihead{display:flex;align-items:center;gap:1rem;padding:1rem 1.2rem .2rem}.fl__ihead h2{margin:0;font:700 1.3rem var(--lh-font-display);color:var(--lh-ink);flex:1}.fl--inline .fl__body{border-top:0}" +
    ".lh-ov{display:flex;flex-direction:column;gap:.8rem;margin:0 0 1.2rem}.lh-ov__li{border:3px solid #e0782b;border-radius:12px;background:#fff;padding:.8rem 1rem;font-size:1.02rem;color:var(--lh-ink)}" +
    ".lh-ov__row{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:.8rem}.lh-ov__box{border:3px solid #2ea44f;border-radius:12px;background:#fff;padding:.8rem 1rem}" +
    ".lh-ov__box h3{margin:0 0 .4rem;font:700 1rem var(--lh-font-display);color:var(--lh-ink)}.lh-ov__box p{margin:.3rem 0;color:var(--lh-body)}.lh-ov__box ul{margin:.2rem 0 0 1.1rem;padding:0;color:var(--lh-body)}.lh-ov__box li{margin:.2rem 0}" +
    ".fl--lesson{border-left-color:var(--lh-orange);margin:0}.fl--lesson .fl__logo-b{color:#c2410c}" +
    ".fl-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:.6rem;margin:.4rem 0 .8rem}" +
    ".fl-card{position:relative;border:1px dashed #9fb7c4;border-radius:10px;padding:.5rem .6rem;background:#fff}.fl-card svg{display:block;width:100%;height:70px;background:#eef5fb;border-radius:8px}" +
    ".fl-card p{margin:.4rem 0 0;font-size:.8rem;line-height:1.35;color:var(--lh-body)}.fl-card__k{position:absolute;top:.35rem;left:.5rem;font:800 1rem var(--lh-font-display);color:#c2410c}" +
    ".fl-ord select,.fl-binsel,.fl-ranksel{font:600 .85rem var(--lh-font-body);padding:.3rem;border:1px solid var(--lh-border);border-radius:8px;background:#fff}" +
    ".fl-ord select.fl-ok,.fl-binsel.fl-ok{border-color:var(--lh-green);background:var(--lh-green-bg)}.fl-ord select.fl-bad,.fl-binsel.fl-bad{border-color:#e57373;background:#fdecea}" +
    ".fl-rb{display:inline-block;font-size:.7rem;font-weight:700;color:#fff;background:#ea7a26;border-radius:999px;padding:.05rem .45rem;margin-left:.3rem}.fl-sortfb{font-size:.78rem;color:var(--lh-muted);width:28%}" +
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

  function panel(base, n, ed) {
  ed = ed || {};
  var cfg = applyEdits(base, ed.edits || {});
  var KEY = "sbl-flip-" + (base.storeAs || id) + (n ? "-" + (n + 1) : "");
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
  var isL = cfg.kind === "lesson";
  var inl = !!cfg.inline;
  var h = inl
    ? '<section class="fl fl--lesson fl--inline" id="flipLearning' + (n ? n + 1 : "") + '"><div class="fl__ihead"><h2>Lesson resources</h2><span class="fl__state"></span></div><div class="fl__body">'
    : '<details class="fl' + (isL ? " fl--lesson" : "") + '" id="flipLearning' + (n ? n + 1 : "") + '"' + (cfg.open ? " open" : "") + '><summary>' +
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
  h += '<div class="fl__top"><button type="button" class="fl__bot" onclick="window.openTeachBot && openTeachBot(\'' + id + '\')">Open Teach Me Live &rarr;</button>' +
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

  cfg.parts.forEach(function (p) {
    if (p.type === "heading") {
      h += '<h3 class="fl__head">' + esc(p.text) + "</h3>" + (p.note ? '<p class="fl__note">' + esc(p.note) + "</p>" : "");
      return;
    }
    if (p.type === "html") { h += '<div class="fl__part">' + p.html + "</div>"; return; }
    if (p.type === "banner") { h += '<img class="fl__stage" src="' + esc(p.src) + '" alt="' + esc(p.alt || "") + '">'; return; }
    var lab = p.label != null ? p.label : p.id + ")";
    h += '<div class="fl__part">';
    if (p.prompt)
      h += '<p class="fl__q">' + (lab ? "<b>" + esc(lab) + "</b>" : "") + esc(p.prompt) + "</p>";
    if (p.note) h += '<p class="fl__note">' + esc(p.note) + "</p>";
    h += links(p);
    if (p.before && p.type !== "terms" && p.type !== "table") h += '<div class="fl__pair">' + p.before + "</div>";
    if (p.type === "text") {
      h += box(saved, p.id, p.prompt, p.words ? 6 : 4);
      if (p.words) h += '<p class="fl__note fl__wc" data-wc="' + p.id + '" data-min="' + p.words[0] + '" data-max="' + p.words[1] + '"></p>';
    }
    if (p.type === "terms" || p.type === "table") {
      var cols = tableCols(p);
      if (p.before) h += '<div class="fl__pair">' + p.before + "</div>";
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
      h += '<div class="fl__scroll"><table class="fl-sorttab"><thead><tr><th>Factor card</th><th>Your box</th><th></th></tr></thead><tbody>';
      p.cards.forEach(function (c, i) {
        var k = p.id + i;
        h += '<tr><td class="fl__rh">' + esc(c.t) + (c.rb ? ' <span class="fl-rb">Rule-breaker?</span>' : "") + '</td><td><select class="fl-binsel" data-k="' + k + '" data-ok="' + c.a.join("|") + '"><option value="">Choose\u2026</option>' +
          p.bins.map(function (b) { return "<option" + (saved[k] === b ? " selected" : "") + ">" + esc(b) + "</option>"; }).join("") + '</select></td><td class="fl-sortfb"></td></tr>';
      });
      h += "</tbody></table></div>" + '<div class="fl__actions" style="margin-top:.6rem"><button type="button" class="fl__btn fl__btn--ghost" data-sortchk="1">Check my sort</button><span class="fl__note" data-sortmsg></span></div>';
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
      h += '<div class="fl__scroll"><table class="fl-match"><thead><tr><th>Key term</th><th>Definition (choose the matching one)</th><th>Your example</th></tr></thead><tbody>';
      p.items.forEach(function (it, i) {
        var k = p.id + i, pick = saved[k];
        var cls = pick == null || pick === "" ? "" : (+pick === i ? " fl-ok" : " fl-bad");
        h += '<tr><td class="fl__rh">' + esc(it.t) + '</td><td><select class="fl-sel' + cls + '" data-mk="' + k + '" data-a="' + i + '" aria-label="Definition for ' + esc(it.t) + '"><option value="">Choose a definition\u2026</option>' +
          order.map(function (o) { return '<option value="' + o + '"' + (pick != null && pick !== "" && +pick === o ? " selected" : "") + ">" + esc(p.items[o].d) + "</option>"; }).join("") +
          '</select><span class="fl-mfb">' + (cls === " fl-ok" ? "\u2713 " + esc(it.d) : cls ? "Try again" : "") + "</span></td><td>" + box(saved, k + "e", "Example for " + it.t, 2, 1) + "</td></tr>";
      });
      h += "</tbody></table></div>";
    }
    if (p.type === "mcq")
      p.items.forEach(function (it, i) {
        var k = p.id + i, pick = saved[k];
        h += '<div class="fl-mcq" data-mk="' + k + '" data-a="' + it.a + '"><p class="fl__vq"><b>' + (i + 1) + ".</b> " + esc(it.q) + "</p><div class=\"fl-mcq__o\">" +
          it.o.map(function (o, j) {
            var c = pick == null ? "" : (j === it.a ? " right" : (+pick === j ? " wrong" : ""));
            return '<button type="button" class="fl-opt' + c + '" data-j="' + j + '"><b>' + "ABCDEF".charAt(j) + "</b> " + esc(o) + "</button>";
          }).join("") + '</div><p class="fl__note fl-mcq__fb">' + (pick == null ? "" : (+pick === it.a ? "\u2713 Correct." : "Not quite: the answer is " + "ABCDEF".charAt(it.a) + ".")) + "</p>" +
          '<p class="fl__note" style="margin-top:.2rem">Reason:</p>' + box(saved, k + "r", "Reason for question " + (i + 1), 2) + "</div>";
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
    // In-class lessons sit directly under the Teach Me Live card.
    var last = document.querySelectorAll(".fl--lesson"), teach = modes.querySelector(".lh-mode");
    (last.length ? last[last.length - 1] : teach || modes).insertAdjacentHTML("afterend", h);
  }
  else modes.insertAdjacentHTML("beforebegin", h);
  var root = document.getElementById("flipLearning" + (n ? n + 1 : ""));
  if (ed.open) root.open = true;
  if (cfg.overview && !document.getElementById("lhOverview")) {
    var o = cfg.overview, first = document.querySelector(".lh-stats") || document.querySelector(".fl:not(.fl--lesson)") || modes;
    first.insertAdjacentHTML("beforebegin", '<section class="lh-ov" id="lhOverview">' +
      '<div class="lh-ov__li"><b>Learning intention:</b> <i>' + esc(o.intention) + "</i></div>" +
      '<div class="lh-ov__row"><div class="lh-ov__box"><h3>Syllabus statement</h3>' + o.syllabus.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + "</div>" +
      '<div class="lh-ov__box"><h3>Success criteria</h3><p>I can:</p><ul>' + o.success.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></div></div></section>");
  }
  var edBtn = root.querySelector(".fl-edit");
  if (edBtn) edBtn.onclick = function () { openEditor(base, n, ed, root); };
  var inputs = root.querySelectorAll(".fl-in");

  function state() {
    root.querySelectorAll(".fl__wc").forEach(function (el) {
      var t = (saved[el.getAttribute("data-wc")] || "").trim(), n = t ? t.split(/\s+/).length : 0;
      var lo = +el.getAttribute("data-min"), hi = +el.getAttribute("data-max");
      el.textContent = n + " words (aim for " + lo + "\u2013" + hi + ")" + (n >= lo && n <= hi ? " \u2713" : "");
      el.style.color = n >= lo && n <= hi ? "var(--lh-green)" : "";
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
      part.querySelector("[data-sortmsg]").textContent = ok2 + " of " + all.length + " accepted. Any well-argued alternative is fine for the rule-breakers.";
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
  root.addEventListener("change", function (e) {
    var sel = e.target.closest(".fl-sel"); if (!sel) return;
    var k = sel.getAttribute("data-mk"), a = sel.getAttribute("data-a");
    saved[k] = sel.value;
    try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (err) {}
    var ok = sel.value !== "" && sel.value === a;
    sel.className = "fl-sel" + (sel.value === "" ? "" : ok ? " fl-ok" : " fl-bad");
    sel.nextSibling.textContent = sel.value === "" ? "" : ok ? "\u2713 " + sel.options[sel.selectedIndex].text : "Try again";
    state();
  });
  root.addEventListener("click", function (e) {
    var b = e.target.closest(".fl-opt"); if (!b) return;
    var g = b.closest(".fl-mcq"), k = g.getAttribute("data-mk"), a = +g.getAttribute("data-a"), j = +b.getAttribute("data-j");
    saved[k] = j;
    try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (err) {}
    g.querySelectorAll(".fl-opt").forEach(function (o) { var oj = +o.getAttribute("data-j"); o.className = "fl-opt" + (oj === a ? " right" : (oj === j ? " wrong" : "")); });
    g.querySelector(".fl-mcq__fb").textContent = j === a ? "\u2713 Correct." : "Not quite: the answer is " + "ABCDEF".charAt(a) + ".";
  });
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

  function buildCopy() {
    var T = 'style="border-collapse:collapse;border:1px solid #999"', D = 'style="border:1px solid #999;padding:4px 6px;vertical-align:top"';
    var html = "<h2>Flip learning: " + esc(cfg.title) + "</h2>", out = ["Flip learning: " + cfg.title, ""];
    function ans(k) { return saved[k] || ""; }
    function cellHtml(v) { return esc(v).replace(/\n/g, "<br>") || "&nbsp;"; }
    cfg.parts.forEach(function (p) {
      if (p.type === "heading") { html += "<h3>" + esc(p.text) + "</h3>"; out.push(p.text.toUpperCase(), ""); return; }
      if (p.type === "html") return;
      var lab = p.label != null ? p.label : p.id + ")";
      if (p.prompt) { html += "<p><b>" + esc((lab ? lab + " " : "") + p.prompt) + "</b></p>"; out.push((lab ? lab + " " : "") + p.prompt); }
      (p.links || []).forEach(function (l) { html += '<p><a href="' + esc(l.url) + '">' + esc(l.label) + "</a></p>"; out.push(l.label + ": " + l.url); });
      if (p.type === "text") { html += "<p>" + cellHtml(ans(p.id)) + "</p>"; out.push(ans(p.id)); }
      if (p.type === "order") {
        var seq = p.answer.map(function (_, i) { return saved[p.id + "s" + i] || "_"; }).join(" ");
        html += "<p>My order: " + esc(seq) + "</p>"; out.push("My order: " + seq);
      }
      if (p.type === "sort") p.cards.forEach(function (c, i) { var v = saved[p.id + i] || ""; html += "<p>" + esc(c.t) + ": " + esc(v) + "</p>"; out.push("- " + c.t + ": " + v); });
      if (p.type === "rank") for (var q2 = 0; q2 < p.n; q2++) { var v2 = saved[p.id + q2] || ""; html += "<p>" + (q2 + 1) + ". " + esc(v2) + "</p>"; out.push((q2 + 1) + ". " + v2); }
      if (p.type === "match") {
        html += "<table " + T + "><tr><th " + D + ">Key term</th><th " + D + ">Definition</th><th " + D + ">Example</th></tr>";
        p.items.forEach(function (it, i) {
          var k = p.id + i, pk = saved[k], def = pk == null || pk === "" ? "" : p.items[+pk].d + (+pk === i ? "" : " (not matched)");
          html += "<tr><td " + D + "><b>" + esc(it.t) + "</b></td><td " + D + ">" + cellHtml(def) + "</td><td " + D + ">" + cellHtml(ans(k + "e")) + "</td></tr>";
          out.push("- " + it.t + " | " + def + " | Example: " + ans(k + "e"));
        });
        html += "</table>";
      }
      if (p.type === "mcq") p.items.forEach(function (it, i) {
        var k = p.id + i, pk = saved[k], ch = pk == null ? "(not answered)" : "ABCDEF".charAt(+pk) + " " + it.o[+pk] + (+pk === it.a ? " \u2713" : " (answer: " + "ABCDEF".charAt(it.a) + ")");
        html += "<p><i>" + (i + 1) + ". " + esc(it.q) + "</i><br>Answer: " + esc(ch) + "<br>Reason: " + cellHtml(ans(k + "r")) + "</p>";
        out.push((i + 1) + ". " + it.q, "Answer: " + ch, "Reason: " + ans(k + "r"));
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
      var c = buildCopy(), label = btn.textContent;
      function ok() { btn.textContent = "Copied ✓ paste into OneNote"; setTimeout(function () { btn.textContent = label; }, 2200); }
      function plain() {
        if (navigator.clipboard) navigator.clipboard.writeText(c.text).then(ok, function () { window.prompt("Copy:", c.text); });
        else window.prompt("Copy:", c.text);
      }
      try {
        if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
          navigator.clipboard.write([new ClipboardItem({
            "text/html": new Blob([c.html], { type: "text/html" }),
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
