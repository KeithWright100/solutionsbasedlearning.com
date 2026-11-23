/* Travel the Wright Way — destination: Bhutan (Himalayan altitude zones, forests and carbon, hydropower, glacial lake floods, sustainable tourism and Bhutanese culture).
 * Climate data: Thimphu, about 2,300 m (climatestotravel.com; monthly means from average minimum and maximum).
 * Facts: Bhutan rises from about 100 m in the south to over 7,000 m in the north; its constitution requires at least 60% of the land to stay forested
 *   (about 70% is forest); Bhutan absorbs more carbon dioxide than it emits; hydropower is the largest export, mostly sold to India;
 *   glacial lake outburst floods (GLOFs) are a hazard, e.g. the 1994 Lugge Tsho flood that hit Punakha; tourists pay a daily Sustainable Development Fee;
 *   the country measures Gross National Happiness; archery is the national sport; dzongs are fortress-monasteries; Paro Taktsang (Tiger's Nest) clings to a cliff above the Paro valley;
 *   men wear the gho and women the kira; prayer flags carry prayers on the wind.
 */
(function () {
  var ZONES_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of Bhutan from the hot southern plains near India up to snowy Himalayan peaks on the border with Tibet, showing subtropical forest, temperate forest with towns, alpine meadows with yaks, and glaciers with a glacial lake">' +
  '<rect width="600" height="420" fill="#dbeafe"/>' +
  '<path d="M0 400 L60 392 L140 370 L220 330 L300 270 L380 200 L450 140 L500 80 L540 50 L580 70 L600 90 L600 420 L0 420 Z" fill="#a3a3a3"/>' +
  '<path d="M0 400 L60 392 L140 370 L220 330 L230 420 L0 420 Z" fill="#15803d"/>' +
  '<path d="M220 330 L300 270 L380 200 L390 420 L230 420 Z" fill="#4d7c0f"/>' +
  '<path d="M380 200 L450 140 L470 125 L475 420 L390 420 Z" fill="#a3b86c"/>' +
  '<path d="M470 125 L500 80 L540 50 L580 70 L600 90 L600 420 L475 420 Z" fill="#e5e7eb"/>' +
  '<path d="M520 68 C 530 74, 546 74, 556 66" fill="none" stroke="#0ea5e9" stroke-width="7"/>' +
  '<g fill="#14532d">' + (function () { var g = ''; for (var i = 0; i < 6; i++) g += '<circle cx="' + (30 + i * 32) + '" cy="' + (396 - i * 6) + '" r="9"/>'; return g; })() + '</g>' +
  '<g fill="#365314">' + (function () { var g = ''; for (var i = 0; i < 5; i++) { var x = 250 + i * 26, y = 312 - i * 20; g += '<path d="M' + x + ' ' + y + ' l8 -22 l8 22 Z"/>'; } return g; })() + '</g>' +
  '<g fill="#f8fafc" stroke="#7a5a32"><rect x="300" y="250" width="26" height="16"/><rect x="330" y="236" width="20" height="14"/></g>' +
  '<g fill="#1f2937"><ellipse cx="420" cy="160" rx="10" ry="6"/><ellipse cx="444" cy="146" rx="10" ry="6"/></g>' +
  '<g font-size="12" fill="#1e293b" font-family="sans-serif"><text x="4" y="414">100 m</text><text x="520" y="40">7,000 m+</text></g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="90" y1="300" x2="90" y2="388"/><line x1="230" y1="220" x2="290" y2="290"/><line x1="330" y1="150" x2="420" y2="168"/><line x1="470" y1="250" x2="530" y2="200"/><line x1="440" y1="40" x2="520" y2="66"/><line x1="160" y1="140" x2="320" y2="244"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.bhutan = {
    id: 'bhutan',
    name: 'Bhutan',
    short: 'Bhutan',
    country: 'Bhutan',
    gateway: 'Thimphu',
    lonlat: [89.64, 27.47],
    locator: { box: [88.9, 91.2, 26.7, 28.4], places: [['Thimphu', 89.64, 27.47, 'b'], ['Paro', 89.42, 27.43, 't'], ['Punakha', 89.86, 27.59, 't'], ['Bumthang', 90.75, 27.55, 'l'], ['HIMALAYA', 90.6, 28.2, 'a'], ['INDIA', 90.5, 26.85, 'a'], ['TIBET (CHINA)', 89.5, 28.25, 'a']] },
    stamp: { colour: '#c2410c', icon: '🏔️' },
    transport: { name: 'mountain trek', verb: 'Trek', emoji: '🥾' },
    scene: 'dzong',
    photo: { file: 'Taktshang.jpg', alt: 'White monastery buildings with red-brown roofs clinging to the side of a sheer cliff above a forested valley', author: 'Douglas J. McLaughlin', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
    intro: {
      ks3: 'Kuzuzangpo! Welcome to Bhutan, a small kingdom in the Himalayas. Trek past fortress-monasteries and prayer flags, climb from steamy forests to snowy peaks, and find out why Bhutan cares so much about its trees.',
      adv: 'Trek through Bhutan. This expedition covers altitude zones, a monsoon mountain climate, forests and carbon, hydropower, glacial lake outburst floods, sustainable “high value, low volume” tourism and Bhutanese culture.'
    },
    facts: ['By law, at least 60% of Bhutan must stay covered in forest.', 'Bhutan absorbs more carbon dioxide than it gives out.', 'Archery is Bhutan’s national sport.'],
    climate: {
      place: 'Thimphu, Bhutan (2,300 m)', source: 'Monthly means from average minimum and maximum (climatestotravel.com)', lat: '27°N', rmax: 160, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [6.5, 8.5, 11.5, 15, 18.5, 21, 21.5, 21.5, 20.5, 16.5, 11.5, 8],
      rain: [5, 10, 20, 30, 50, 100, 155, 120, 75, 45, 0, 5]
    },
    diagrams: { zones: ZONES_SVG },
    stations: [
      {
        id: 'zones', title: 'From jungle to glacier', icon: '🌲',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'zones', prompt: 'Label the zones as you climb through Bhutan.',
              spots: [{ x: 15, y: 71 }, { x: 38, y: 52 }, { x: 55, y: 36 }, { x: 78, y: 60 }, { x: 73, y: 10 }, { x: 27, y: 33 }].map(function (s, i) { s.a = ['Subtropical forest', 'Temperate forest', 'Yak pastures', 'Snow and ice', 'Glacial lake', 'Towns and farms'][i]; return s; }),
              extra: [],
              explain: 'It gets colder as you climb, about 6°C for every 1,000 m, so the plants and land use change.' },
            { type: 'mcq', q: 'Why does it get colder as you climb higher?', options: ['Air is thinner and holds less heat', 'You are closer to the Moon', 'Mountains block all sunlight', 'Snow makes the air colder at the bottom'], answer: 0,
              explain: 'Temperature falls about 6°C for every 1,000 m you climb.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Paro from Thimphu?', options: ['West', 'East', 'North', 'South'], answer: 0,
              explain: 'Paro, home of Bhutan’s only international airport, is about 22 km west of Thimphu.' }
          ],
          adv: [
            { type: 'label', diagram: 'zones', prompt: 'Label the altitude zones. One label does not belong.',
              spots: [{ x: 15, y: 71 }, { x: 38, y: 52 }, { x: 55, y: 36 }, { x: 78, y: 60 }, { x: 73, y: 10 }, { x: 27, y: 33 }].map(function (s, i) { s.a = ['Subtropical broadleaf forest', 'Temperate conifer forest', 'Alpine pasture', 'Permanent snow and glaciers', 'Glacial lake (GLOF risk)', 'Settlement in mid-altitude valleys'][i]; return s; }),
              extra: ['Coral reef'],
              explain: 'Most people live in the temperate valleys, which are mild with fertile land for rice and farming.' },
            { type: 'number', q: 'Temperature falls by about 6°C per 1,000 m. Thimphu (2,300 m) averages 21.5°C in July. Estimate the July temperature at 4,300 m.', answer: 9.5, tol: 0.5, unit: '°C',
              explain: '2,000 m higher × 6°C per 1,000 m = 12°C colder, so 21.5 − 12 = 9.5°C.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate how far Bumthang is from Thimphu, and in which direction.', options: ['About 110 km east', 'About 110 km west', 'About 500 km east', 'About 20 km north'], answer: 0,
              explain: 'The winding mountain road makes the trip much longer than 110 km, often a full day’s drive.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Monsoon mountains', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which month is the wettest in Thimphu?', options: ['July', 'January', 'November', 'April'], answer: 0,
              explain: 'July has about 155 mm. The summer monsoon brings moist winds from the Bay of Bengal.' },
            { type: 'mcq', graph: true, q: 'What are Thimphu’s winters like?', options: ['Cold and dry', 'Hot and wet', 'Hot and dry', 'Freezing and very wet'], answer: 0,
              explain: 'January averages about 6.5°C, and almost no rain falls.' },
            { type: 'mcq', graph: true, q: 'What is the average July temperature?', options: ['About 21°C', 'About 35°C', 'About 0°C', 'About 10°C'], answer: 0,
              explain: 'Summers are mild because Thimphu is so high up.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Thimphu (°C).', answer: 15, tol: 0.2, unit: '°C',
              explain: 'The warmest months average 21.5°C and January 6.5°C: 21.5 − 6.5 = 15.0°C.' },
            { type: 'number', graph: true, q: 'Total rain is 615 mm. What percentage falls from June to September? Give a whole number.', answer: 73, tol: 1, unit: '%',
              explain: 'June to September = 450 mm. 450 ÷ 615 × 100 ≈ 73%.' },
            { type: 'mcq', q: 'Southern Bhutan gets several metres of rain a year, much more than Thimphu. Why?', options: ['Monsoon winds are forced to rise over the first mountains (relief rain)', 'The south is further from the ocean', 'Cold air from Tibet brings snow', 'Thimphu is closer to the sea'], answer: 0,
              explain: 'The southern foothills take most of the rain. Valleys like Thimphu lie in a rain shadow.' }
          ]
        }
      },
      {
        id: 'energy', title: 'Forests and power', icon: '⚡',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'What is Bhutan’s biggest export?', options: ['Electricity from hydropower', 'Oil', 'Cars and lorries built in big factories', 'Coal'], answer: 0,
              explain: 'Fast mountain rivers turn turbines, and most of the electricity is sold to India.' },
            { type: 'mcq', q: 'Bhutan is “carbon negative”. What does that mean?', options: ['Its forests absorb more CO₂ than it emits', 'It has no cars or factories anywhere at all', 'It burns lots of coal', 'It has no trees'], answer: 0,
              explain: 'About 70% of Bhutan is forest, and the law says it must never fall below 60%.' },
            { type: 'mcq', q: 'What is a glacial lake outburst flood (GLOF)?', options: ['A lake behind melting ice suddenly bursts out', 'A flood caused by the sea during a storm surge', 'A dry riverbed', 'A lake that freezes solid'], answer: 0,
              explain: 'In 1994 a glacial lake burst and the flood reached Punakha, damaging its famous dzong.' }
          ],
          adv: [
            { type: 'mcq', q: 'Why is the risk of glacial lake outburst floods rising?', options: ['Climate change is melting glaciers and enlarging lakes', 'Earthquakes are freezing the lakes high in the mountains solid', 'More snow is falling every year', 'Rivers are drying up'], answer: 0,
              explain: 'Glacial lakes are often held back by loose moraine. Bhutan uses early-warning sirens and drains some lakes.' },
            { type: 'sort', q: 'Classify these impacts of Bhutan’s hydropower.', bins: ['Benefit', 'Problem'],
              items: [['Income from exports to India', 0], ['Low-carbon electricity', 0], ['Jobs in construction', 0], ['Heavy debt to build dams', 1], ['Rivers and fish habitats changed', 1], ['Less river flow if glaciers shrink', 1]],
              explain: 'Hydropower depends on rivers fed by monsoon rain and glacier melt, so climate change is a long-term risk.' },
            { type: 'mcq', q: 'Bhutan charges tourists a daily Sustainable Development Fee. What is the main aim?', options: ['High-value, low-volume tourism that protects culture and nature', 'To stop all tourism', 'To attract as many tourists as possible every year, whatever the cost', 'To pay for oil imports only'], answer: 0,
              explain: 'The fee funds free health care, education and conservation, while limiting crowds.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Dzongs and happiness', icon: '🏯',
        tasks: {
          ks3: [
            { type: 'mcq', photo: true, q: 'Look at the photo of Paro Taktsang (Tiger’s Nest). What landform is it built on?', options: ['A steep cliff face', 'A sandy beach', 'A flat river delta', 'A volcano crater'], answer: 0,
              explain: 'The monastery sits about 900 m above the Paro valley floor. Visitors hike up for hours.' },
            { type: 'mcq', q: 'Culture: what is Bhutan’s national sport?', options: ['Archery', 'Football', 'Ice hockey', 'Surfing'], answer: 0,
              explain: 'Teams shoot at targets about 145 m away, with singing and dancing between turns.' },
            { type: 'mcq', q: 'Culture: what are the colourful flags strung across Bhutan’s mountain passes?', options: ['Prayer flags', 'Football flags', 'Warning signs', 'Washing lines'], answer: 0,
              explain: 'Buddhists believe the wind carries the prayers printed on them.' }
          ],
          adv: [
            { type: 'mcq', q: 'Culture: Bhutan measures its success using Gross National Happiness. How is this different from GDP?', options: ['It includes wellbeing, culture and environment, not just money', 'It only counts money earned', 'It measures the number of tourists', 'It counts only exports'], answer: 0,
              explain: 'It is one example of a broader measure of development, like the Human Development Index.' },
            { type: 'mcq', q: 'Culture: what is a dzong?', options: ['A fortress-monastery used for religion and government', 'A type of yak', 'A mountain pass', 'A rice dish'], answer: 0,
              explain: 'Every district has a dzong. Punakha Dzong stands where two rivers meet.' },
            { type: 'mcq', photo: true, q: 'Study the photo of Tiger’s Nest. Which hazard is the biggest risk for buildings on slopes like this?', options: ['Landslides and rockfalls', 'Tsunamis', 'Tropical cyclones from the Pacific Ocean', 'Coastal erosion'], answer: 0,
              explain: 'Steep slopes, earthquakes and heavy monsoon rain make landslides common across Bhutan.' }
          ]
        }
      }
    ]
  };
})();
