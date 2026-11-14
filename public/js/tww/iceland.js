/* Travel the Wright Way — destination: Iceland (a divergent plate boundary and hotspot, volcanoes and geysers, geothermal energy, glaciers, a maritime subpolar climate, and Icelandic culture).
 * Climate data: Reykjavík, 1991–2020 averages (climatestotravel.com).
 * Facts: Iceland sits on the Mid-Atlantic Ridge, where the North American and Eurasian plates move apart by about 2 cm a year, and above a mantle hotspot; the rift is visible at Þingvellir;
 *   Strokkur geyser in the Haukadalur geothermal area erupts every few minutes; the word "geyser" comes from Geysir, nearby;
 *   the 2010 eruption of Eyjafjallajökull sent ash across Europe and closed much of European airspace for several days; since 2021 a series of fissure eruptions on the Reykjanes peninsula led to the evacuation of Grindavík in November 2023;
 *   around 90% of Icelandic homes are heated with geothermal water, and almost all electricity comes from hydro and geothermal power; Vatnajökull is the largest ice cap in Europe by volume; Okjökull was declared the first Icelandic glacier lost to climate change (plaque 2019);
 *   Iceland has about 390,000 people; the Alþingi (founded 930 at Þingvellir) is one of the world's oldest parliaments; Icelanders traditionally use patronymic surnames ending in -son or -dóttir.
 */
(function () {
  var RIFT_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a divergent plate boundary in Iceland: two plates moving apart, a rift valley, rising magma, a fissure eruption and a geothermal power station">' +
  '<rect width="600" height="420" fill="#d5e3ee"/>' +
  // plates
  '<path d="M0 150 L260 150 L270 190 L0 190 Z" fill="#6b7a5a"/><path d="M340 150 L600 150 L600 190 L330 190 Z" fill="#6b7a5a"/>' +
  '<path d="M0 190 L270 190 L285 300 L0 300 Z" fill="#8a7a62"/><path d="M330 190 L600 190 L600 300 L315 300 Z" fill="#8a7a62"/>' +
  // rift valley floor
  '<path d="M260 150 L270 190 L330 190 L340 150 L320 176 L280 176 Z" fill="#4b5563"/>' +
  // mantle
  '<rect y="300" width="600" height="120" fill="#e0703f"/><g fill="#f2a65a">' + (function () { var g = ''; for (var i = 0; i < 12; i++) g += '<ellipse cx="' + (25 + i * 50) + '" cy="' + (350 + (i % 2) * 20) + '" rx="16" ry="6"/>'; return g; })() + '</g>' +
  // magma rising
  '<path d="M300 400 C 296 350, 304 300, 300 230 L300 176" fill="none" stroke="#f97316" stroke-width="12"/><ellipse cx="300" cy="300" rx="26" ry="16" fill="#f97316"/>' +
  // fissure eruption
  '<g fill="#f97316"><path d="M290 176 L296 140 L300 176 Z"/><path d="M300 176 L306 132 L312 176 Z"/></g><g fill="#64748b" opacity=".8"><circle cx="300" cy="110" r="16"/><circle cx="318" cy="96" r="12"/></g>' +
  // arrows
  '<g fill="none" stroke="#11243b" stroke-width="3"><path d="M200 240 L110 240 m12 -8 l-12 8 l12 8"/><path d="M400 240 L490 240 m-12 -8 l12 8 l-12 8"/></g>' +
  // geothermal plant
  '<g><rect x="460" y="122" width="60" height="28" fill="#e5e7eb" stroke="#475569"/><rect x="530" y="100" width="12" height="50" fill="#cbd5e1" stroke="#475569"/><g fill="#fff" opacity=".9"><ellipse cx="536" cy="90" rx="12" ry="7"/><ellipse cx="546" cy="76" rx="10" ry="6"/></g></g>' +
  '<path d="M490 150 L490 210 C 470 240, 400 260, 340 260" fill="none" stroke="#38bdf8" stroke-width="4" stroke-dasharray="6 4"/>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="110" y1="110" x2="120" y2="150"/><line x1="490" y1="306" x2="460" y2="250"/><line x1="230" y1="96" x2="282" y2="168"/><line x1="200" y1="340" x2="282" y2="300"/><line x1="360" y1="60" x2="310" y2="104"/><line x1="560" y1="40" x2="540" y2="72"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.iceland = {
    id: 'iceland',
    name: 'Iceland',
    short: 'Iceland',
    country: 'Iceland',
    gateway: 'Reykjavík',
    lonlat: [-20.3, 64.31],
    locator: { box: [-25.2, -12.6, 62.3, 67], places: [['Reykjavík', -21.94, 64.15, 't'], ['Geysir', -20.3, 64.31, 'r'], ['Akureyri', -18.09, 65.68, 'r'], ['Eyjafjallajökull', -19.62, 63.63, 'r'], ['VATNAJÖKULL', -16.6, 64.45, 'a'], ['Atlantic Ocean', -19.5, 62.75, 'a']] },
    stamp: { colour: '#1d4ed8', icon: '♨️' },
    transport: { name: 'super jeep', verb: 'Drive', emoji: '🚙' },
    scene: 'iceland',
    photo: { file: 'Strokkur, Área geotérmica de Geysir, Suðurland, Islandia, 2014-08-16, DD 089.JPG', alt: 'A tall column of boiling water and steam shooting into the air from a hot pool, with people watching from a distance', author: 'Diego Delso', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'Velkomin! Welcome to Iceland, the land of fire and ice. Drive a super jeep past glaciers and volcanoes, watch a geyser blast boiling water into the sky, and find out how Icelanders heat their homes with heat from inside the Earth.',
      adv: 'Drive across Iceland. This expedition covers the Mid-Atlantic Ridge and hotspot, volcanic hazards from Eyjafjallajökull to Grindavík, geothermal and hydro energy, glaciers and their retreat, a mild maritime subpolar climate, and Icelandic culture.'
    },
    facts: ['Iceland sits where two tectonic plates are pulling apart.', 'Most Icelandic homes are heated by hot water from underground.', 'The word “geyser” comes from Geysir in Iceland.'],
    climate: {
      place: 'Reykjavík, Iceland', source: '1991–2020 averages (climatestotravel.com)', lat: '64°N', rmax: 150, rstep: 50,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [0.6, 0.5, 1.2, 3.9, 6.9, 10.1, 12.0, 11.4, 8.8, 5.0, 2.2, 0.8],
      rain: [85, 90, 85, 55, 50, 40, 50, 65, 85, 80, 85, 100]
    },
    diagrams: { rift: RIFT_SVG },
    stations: [
      {
        id: 'rift', title: 'Where plates pull apart', icon: '🌋',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'rift', prompt: 'Label how Iceland is being pulled apart.',
              spots: [{ x: 18, y: 26, a: 'North American Plate' }, { x: 82, y: 73, a: 'Eurasian Plate' }, { x: 38, y: 23, a: 'Rift valley' }, { x: 33, y: 81, a: 'Magma' }, { x: 60, y: 14, a: 'Volcano' }, { x: 93, y: 9, a: 'Power station' }],
              extra: [],
              explain: 'The two plates move apart. Magma rises to fill the gap, causing eruptions, and the heat is used to make electricity.' },
            { type: 'mcq', photo: true, q: 'Look at the photo. What is shooting out of the ground?', options: ['Boiling water and steam from a geyser', 'Smoke from a fire', 'Lava from a volcano', 'Water spraying from a burst pipe under the road'], answer: 0,
              explain: 'Strokkur geyser erupts every few minutes. Water underground is heated by hot rock until it boils and bursts out.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Akureyri from Reykjavík?', options: ['North-east', 'South-west', 'South-east', 'North-west'], answer: 0,
              explain: 'Akureyri, Iceland’s second town, is about 250 km north-east of Reykjavík.' }
          ],
          adv: [
            { type: 'label', diagram: 'rift', prompt: 'Label the divergent plate boundary. One label does not belong.',
              spots: [{ x: 18, y: 26, a: 'North American Plate' }, { x: 82, y: 73, a: 'Eurasian Plate' }, { x: 38, y: 23, a: 'Rift valley (graben)' }, { x: 33, y: 81, a: 'Rising magma' }, { x: 60, y: 14, a: 'Fissure eruption' }, { x: 93, y: 9, a: 'Geothermal power plant' }],
              extra: ['Ocean trench'],
              explain: 'Trenches form where plates converge and one is subducted. Here the plates diverge, so new crust is made.' },
            { type: 'mcq', photo: true, q: 'Study the photo of Strokkur. What causes a geyser to erupt?', options: ['Groundwater boils and flashes to steam', 'Wind blows water upwards', 'Tides push sea water inland through caves', 'Snow melts very quickly'], answer: 0,
              explain: 'Water deep in a narrow vent is heated above 100°C under pressure. When some flashes to steam, the water above is blasted out.' },
            { type: 'mcq', q: 'Why does Iceland have more volcanoes than most places on mid-ocean ridges?', options: ['It sits on a hotspot as well as a ridge', 'Its plates are colliding', 'It is a subduction zone', 'It is on a long transform fault only, with no ridge'], answer: 0,
              explain: 'A plume of hot mantle under Iceland supplies extra magma, which is why the ridge rises above sea level here.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Mild for the Arctic', icon: '🌬️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the warmest month in Reykjavík?', options: ['July', 'January', 'April', 'October'], answer: 0,
              explain: 'July averages only 12°C. Summers are cool but very long days help plants grow.' },
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Reykjavík?', options: ['December', 'June', 'May', 'April'], answer: 0,
              explain: 'December gets about 100 mm, brought by storms from the Atlantic.' },
            { type: 'mcq', graph: true, q: 'Reykjavík is near the Arctic Circle. How cold is January?', options: ['Just above 0°C', 'About −30°C', 'About −15°C', 'About 15°C'], answer: 0,
              explain: 'It is surprisingly mild. A warm ocean current keeps winters much warmer than places like Siberia.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual precipitation in Reykjavík (mm).', answer: 870, tol: 5, unit: 'mm',
              explain: 'Adding the twelve months gives 870 mm.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Reykjavík (°C). Give one decimal place.', answer: 11.5, tol: 0.2, unit: '°C',
              explain: 'Warmest 12.0°C − coldest 0.5°C = 11.5°C, a small range for 64°N.' },
            { type: 'mcq', graph: true, q: 'Moscow is further south than Reykjavík but has far colder winters. Why?', options: ['The North Atlantic Drift warms Iceland’s coast', 'Reykjavík is at a higher altitude', 'Iceland has more volcanoes heating the air above it', 'Moscow is closer to the sea'], answer: 0,
              explain: 'Warm water from the Gulf Stream and mild westerly winds stop Reykjavík’s winters getting very cold.' }
          ]
        }
      },
      {
        id: 'energy', title: 'Fire and ice', icon: '♨️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'How are most homes in Iceland heated?', options: ['Hot water from underground', 'Coal fires', 'Oil boilers fuelled by imported oil', 'Wood stoves'], answer: 0,
              explain: 'About 9 out of 10 homes use geothermal hot water piped from boreholes.' },
            { type: 'mcq', q: 'In 2010 the volcano Eyjafjallajökull erupted. What happened across Europe?', options: ['Planes were grounded by ash', 'Every river froze', 'There was a tsunami in London', 'It snowed in summer'], answer: 0,
              explain: 'Volcanic ash can damage jet engines, so much of Europe’s airspace was closed for several days.' },
            { type: 'mcq', q: 'Vatnajökull is the largest ice cap in Europe. What is happening to most of Iceland’s glaciers?', options: ['They are shrinking', 'They are growing fast', 'They are turning to rock', 'They are moving uphill'], answer: 0,
              explain: 'In 2019 Icelanders put up a plaque for Okjökull, the first glacier lost to climate change.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these as benefits or hazards of living on an active plate boundary.', bins: ['Benefit', 'Hazard'],
              items: [['Cheap geothermal heating', 0], ['Tourists visiting geysers and lava', 0], ['Fertile volcanic soils', 0], ['Ash clouds disrupting flights', 1], ['Lava flows reaching towns', 1], ['Glacial floods (jökulhlaups) when ice melts', 1]],
              explain: 'In 2023 the town of Grindavík was evacuated as magma moved under it, and later eruptions damaged roads and homes.' },
            { type: 'mcq', q: 'Almost all of Iceland’s electricity is renewable. Which two sources provide it?', options: ['Hydro and geothermal', 'Solar and wind', 'Wave and tidal', 'Nuclear and coal'], answer: 0,
              explain: 'Cheap, clean power has attracted energy-hungry industries such as aluminium smelting and data centres.' },
            { type: 'mcq', q: 'A jökulhlaup is a hazard in Iceland. What is it?', options: ['A flood from an eruption under a glacier', 'A type of earthquake', 'A snowstorm', 'A landslide that falls into the sea from a cliff'], answer: 0,
              explain: 'Heat from a volcano melts ice under a glacier, releasing huge floods that can wash away roads and bridges.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Sagas and northern lights', icon: '🌌',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: what can you often see in Iceland’s sky on dark winter nights?', options: ['The northern lights', 'The midnight sun', 'A rainbow', 'Two moons'], answer: 0,
              explain: 'The aurora borealis glows green and pink when particles from the Sun hit the atmosphere.' },
            { type: 'mcq', q: 'Culture: an Icelandic boy called Jón, whose father is Ólafur, would have which surname?', options: ['Ólafsson', 'Jónsson', 'Smith', 'Olafsen-Jon'], answer: 0,
              explain: 'Surnames come from a parent’s first name: -son for a son, -dóttir for a daughter.' },
            { type: 'mcq', q: 'Which bird with a colourful beak nests on Iceland’s sea cliffs in summer?', options: ['The puffin', 'The penguin', 'The flamingo', 'The parrot'], answer: 0,
              explain: 'Millions of puffins breed in Iceland, one of the largest colonies in the world.' }
          ],
          adv: [
            { type: 'mcq', q: 'The Alþingi, founded in 930 at Þingvellir, is famous because it is…', options: ['One of the world’s oldest parliaments', 'The largest and most active volcano in Iceland', 'A Viking warship', 'Iceland’s biggest glacier'], answer: 0,
              explain: 'It met in the rift valley at Þingvellir, now a UNESCO site where you can walk between two plates.' },
            { type: 'mcq', q: 'Tourism in Iceland has grown hugely. Which is a negative impact?', options: ['Pressure on fragile landscapes and roads', 'Fewer jobs in hotels', 'Less money for the economy and local businesses', 'Fewer flights to Iceland'], answer: 0,
              explain: 'Popular sites have built paths and charge parking fees to protect moss and soil that take decades to recover.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the straight-line distance from Reykjavík to Akureyri.', options: ['About 250 km', 'About 40 km', 'About 900 km', 'About 2,000 km'], answer: 0,
              explain: 'It is about 250 km, but the main road is nearly 400 km because it goes around mountains and fjords.' }
          ]
        }
      }
    ]
  };
})();
