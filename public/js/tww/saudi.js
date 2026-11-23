/* Travel the Wright Way — destination: Saudi Arabia (oil and how it is trapped, a hot desert climate, water scarcity, economic diversification and Saudi culture).
 * Climate data: Riyadh, long-term averages (weatherandclimate.eu, WMO station 40437).
 * Facts: Saudi Arabia is one of the world's largest oil producers and the largest crude oil exporter; Ghawar is the largest conventional oil field in the world;
 *   oil and gas collect in porous reservoir rock beneath impermeable cap rock, often in an anticline; oil provides most of Saudi export earnings;
 *   Saudi Arabia has no permanent rivers; it is the world's largest producer of desalinated water; wheat grown with fossil groundwater was phased out by 2016 to save water;
 *   Vision 2030 aims to diversify the economy (tourism, entertainment, renewables, new cities such as NEOM); the Riyadh Metro opened in December 2024;
 *   Mecca and Medina are the holiest cities in Islam and millions of pilgrims perform the Hajj each year; Arabic coffee served with dates is a symbol of hospitality;
 *   the At-Turaif district of Diriyah, near Riyadh, is a UNESCO World Heritage Site (2010).
 */
(function () {
  function arch(x, base) { return base + Math.pow((x - 300) / 300, 2) * 120; }
  function band(top, bottom, fill) {
    var p = 'M0 ' + arch(0, top).toFixed(1), x;
    for (x = 20; x <= 600; x += 20) p += ' L' + x + ' ' + arch(x, top).toFixed(1);
    for (x = 600; x >= 0; x -= 20) p += ' L' + x + ' ' + arch(x, bottom).toFixed(1);
    return '<path d="' + p + ' Z" fill="' + fill + '"/>';
  }
  function clipBand(top, bottom, ymin, ymax, fill) {
    return '<g clip-path="url(#twOilRes)"><rect x="0" y="' + ymin + '" width="600" height="' + (ymax - ymin) + '" fill="' + fill + '"/></g>';
  }
  function resPath() {
    var p = 'M0 ' + arch(0, 176).toFixed(1), x;
    for (x = 20; x <= 600; x += 20) p += ' L' + x + ' ' + arch(x, 176).toFixed(1);
    for (x = 600; x >= 0; x -= 20) p += ' L' + x + ' ' + arch(x, 256).toFixed(1);
    return p + ' Z';
  }
  var OIL_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of an oil trap: an oil well and pipeline at the surface, an arched layer of cap rock, natural gas above oil above salt water in porous reservoir rock, and source rock below">' +
  '<defs><clipPath id="twOilRes"><path d="' + resPath() + '"/></clipPath></defs>' +
  '<rect width="600" height="420" fill="#c9a578"/>' +
  '<rect width="600" height="70" fill="#ffe8bf"/><rect y="70" width="600" height="20" fill="#f0c27a"/>' +
  // rock layers
  band(150, 176, '#6b7280') +
  clipBand(176, 256, 0, 200, '#f4c7c3') + clipBand(176, 256, 200, 236, '#2b2118') + clipBand(176, 256, 236, 420, '#5fa8d8') +
  '<g clip-path="url(#twOilRes)" fill="#fff" opacity=".25">' + (function () { var g = ''; for (var i = 0; i < 80; i++) g += '<circle cx="' + ((i * 53) % 600) + '" cy="' + (170 + (i * 37) % 140) + '" r="2"/>'; return g; })() + '</g>' +
  band(256, 286, '#3f3a36') +
  // oil well
  '<g stroke="#4b5563" stroke-width="3" fill="none"><path d="M286 82 L300 20 L314 82"/><line x1="290" y1="62" x2="310" y2="62"/><line x1="294" y1="42" x2="306" y2="42"/></g>' +
  '<line x1="300" y1="84" x2="300" y2="216" stroke="#111827" stroke-width="4"/>' +
  // pipeline and tank
  '<path d="M312 80 L540 80" stroke="#6b7280" stroke-width="6"/><rect x="530" y="52" width="44" height="30" rx="4" fill="#e5e7eb" stroke="#4b5563" stroke-width="2"/>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="180" y1="26" x2="292" y2="40"/><line x1="504" y1="38" x2="500" y2="78"/><line x1="120" y1="180" x2="130" y2="196"/><line x1="432" y1="162" x2="320" y2="190"/><line x1="432" y1="232" x2="380" y2="220"/><line x1="160" y1="276" x2="190" y2="262"/><line x1="300" y1="372" x2="300" y2="284"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.saudi = {
    id: 'saudi',
    name: 'Saudi Arabia',
    short: 'Saudi Arabia',
    country: 'Saudi Arabia',
    gateway: 'Riyadh',
    lonlat: [46.7, 24.7],
    locator: { box: [34, 57, 15, 32.5], places: [['Riyadh', 46.72, 24.69, 'r'], ['Mecca', 39.83, 21.42, 'r'], ['Medina', 39.61, 24.47, 'r'], ['Dhahran', 50.1, 26.29, 'l'], ['Red Sea', 37.0, 22.0, 'a'], ['The Gulf', 51.5, 27.6, 'a'], ['Rub’ al Khali', 50.0, 20.0, 'a']] },
    stamp: { colour: '#15803d', icon: '🛢️' },
    transport: { name: '4x4 dune drive', verb: 'Drive', emoji: '🚙' },
    scene: 'dunes',
    photo: { file: 'Riyadh Skyline.jpg', alt: 'The skyline of Riyadh at dusk, with the Kingdom Centre tower lit up among the city lights', author: 'B.alotaby', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'أهلاً وسهلاً! Welcome to Riyadh, the fast-growing capital of Saudi Arabia. Jump into a 4x4 and head out over the dunes to discover the oil that made this country rich, and how people find water in one of the driest places on Earth.',
      adv: 'From Riyadh you drive out across the Arabian desert. This expedition covers how oil forms and is trapped, a hot desert climate, water scarcity and desalination, economic diversification under Vision 2030, and Saudi culture and heritage.'
    },
    facts: ['Saudi Arabia exports more crude oil than any other country.', 'Saudi Arabia has no permanent rivers at all.', 'Millions of Muslims travel to Mecca every year for the Hajj pilgrimage.'],
    climate: {
      place: 'Riyadh, Saudi Arabia', source: 'Long-term averages (WMO station)', lat: '25°N', rmax: 30, rstep: 10,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [14.0, 16.7, 21.0, 26.4, 32.2, 35.2, 36.3, 36.0, 32.8, 27.5, 20.4, 15.4],
      rain: [15, 8, 20, 24, 6, 0, 0, 0, 0, 2, 20, 14]
    },
    diagrams: { oil: OIL_SVG },
    stations: [
      {
        id: 'oil', title: 'Black gold', icon: '🛢️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'oil', prompt: 'Label this cross-section of an oil field.',
              spots: [{ x: 18, y: 6, a: 'Oil well' }, { x: 84, y: 6, a: 'Pipeline' }, { x: 14, y: 39, a: 'Cap rock' }, { x: 84, y: 38, a: 'Natural gas' }, { x: 84, y: 55, a: 'Oil' }, { x: 16, y: 66, a: 'Water' }, { x: 50, y: 92, a: 'Source rock' }],
              extra: [],
              explain: 'Oil and gas rise through rock until a layer of cap rock stops them. Gas floats on top of oil, and oil floats on water.' },
            { type: 'mcq', q: 'Oil formed from the remains of what, buried millions of years ago?', options: ['Tiny sea plants and animals', 'Dinosaurs', 'Desert sand', 'Volcanic lava that cooled under the sea floor'], answer: 0,
              explain: 'Plankton settled on ancient sea floors. Heat and pressure over millions of years slowly turned them into oil and gas.' },
            { type: 'mcq', q: 'Ghawar in Saudi Arabia is famous for what?', options: ['The world’s largest conventional oil field', 'The world’s tallest building', 'The world’s biggest sand dune, which moves several metres every year', 'The world’s deepest lake'], answer: 0,
              explain: 'Ghawar has produced oil since the 1950s. Oil made Saudi Arabia one of the richest countries in the region.' }
          ],
          adv: [
            { type: 'label', diagram: 'oil', prompt: 'Label the petroleum system. One label does not belong.',
              spots: [{ x: 18, y: 6, a: 'Production well' }, { x: 84, y: 6, a: 'Pipeline' }, { x: 14, y: 39, a: 'Impermeable cap rock' }, { x: 84, y: 38, a: 'Natural gas' }, { x: 84, y: 55, a: 'Crude oil' }, { x: 16, y: 66, a: 'Salt water' }, { x: 50, y: 92, a: 'Source rock' }],
              extra: ['Moraine'],
              explain: 'Moraine is glacial debris. In an anticline trap, oil and gas migrate up through porous reservoir rock until the arched impermeable cap rock stops them.' },
            { type: 'mcq', q: 'Why does oil collect at the top of the arch (anticline)?', options: ['It is less dense than water, so it rises', 'It is heavier than rock', 'Gravity pulls the heavy oil up to the very highest point of the rock', 'Pumps push it up there'], answer: 0,
              explain: 'Oil and gas are buoyant. Without impermeable cap rock above, they would leak all the way to the surface.' },
            { type: 'mcq', q: 'Saudi Arabia is a leading member of OPEC. What does OPEC mainly try to influence?', options: ['World oil prices, via production levels', 'The price of desalinated water sold to other countries around the Gulf', 'Air travel routes', 'Tourism to Mecca'], answer: 0,
              explain: 'By producing more or less oil, OPEC countries can push world prices down or up, affecting economies everywhere.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Scorching summers', icon: '🌡️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which months get no rain at all in Riyadh?', options: ['June to September', 'January to March', 'November and December', 'None: it rains every month'], answer: 0,
              explain: 'The bars disappear from June to September. Summer is completely dry.' },
            { type: 'mcq', graph: true, q: 'How hot is Riyadh in July, on average?', options: ['About 36°C', 'About 16°C', 'About 26°C', 'About 46°C'], answer: 0,
              explain: 'That is the average for the whole day and night. Daytime highs are often over 43°C.' },
            { type: 'mcq', q: 'What type of climate does Riyadh have?', options: ['Hot desert', 'Mediterranean', 'Tropical rainforest', 'Temperate maritime, like the UK'], answer: 0,
              explain: 'Very low rainfall and extremely hot summers make this a hot desert climate.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Riyadh (mm).', answer: 109, tol: 3, unit: 'mm',
              explain: 'Adding the twelve months gives about 109 mm, well under the 250 mm used to define a desert.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Riyadh (°C).', answer: 22.3, tol: 0.2, unit: '°C',
              explain: 'July (36.3°C) minus January (14.0°C) = 22.3°C, a large range for a place only 25° from the Equator.' },
            { type: 'mcq', q: 'Riyadh is hundreds of kilometres from the coast. How does this affect its climate?', options: ['Bigger temperature ranges and dry air', 'Mild winters and cool summers', 'Frequent fog from the sea', 'Heavy monsoon rain every summer, blown in from the Indian Ocean'], answer: 0,
              explain: 'Without the moderating effect of the sea, summers are hotter, winter nights cooler and humidity very low.' }
          ]
        }
      },
      {
        id: 'water', title: 'Water from the sea', icon: '💧',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Saudi Arabia has no permanent rivers. Where does most of its drinking water come from?', options: ['Desalinated seawater', 'Melting glaciers', 'Rain collected on roofs', 'The River Nile, piped across the Red Sea from Egypt'], answer: 0,
              explain: 'Saudi Arabia is the world’s largest producer of desalinated water, piping it hundreds of kilometres inland to cities like Riyadh.' },
            { type: 'sort', q: 'Sort these ways of managing water in Saudi Arabia.', bins: ['Increase supply', 'Reduce demand'],
              items: [['Desalination plants', 0], ['Pumping groundwater', 0], ['Recycling wastewater for farms', 0], ['Water meters and higher water prices', 1], ['Stopping thirsty wheat farming', 1], ['Drip irrigation for date palms', 1]],
              explain: 'Desalination provides reliable water, but saving water is cheaper and uses far less energy.' },
            { type: 'mcq', q: 'What is an oasis?', options: ['A desert spot where groundwater surfaces', 'A tall sand dune', 'A dried-up river bed that only fills after rare, heavy storms', 'A city on the coast'], answer: 0,
              explain: 'Oases such as Al-Ahsa have been farmed for thousands of years, famous for their date palms.' }
          ],
          adv: [
            { type: 'mcq', q: 'In the 1980s Saudi Arabia grew enough wheat to export it, using deep groundwater. Why was this phased out by 2016?', options: ['The fossil aquifers were being used up', 'Wheat prices rose too high', 'The desert became too wet', 'Farmers preferred growing rice in the desert'], answer: 0,
              explain: 'This water fell as rain thousands of years ago and is barely being replaced. Using it for wheat was unsustainable.' },
            { type: 'mcq', q: 'Most desalination plants run on oil or gas. Why is this a problem?', options: ['It emits carbon dioxide', 'The water tastes of oil', 'It makes the sea colder', 'It only works at night'], answer: 0,
              explain: 'New plants increasingly use reverse osmosis powered partly by solar energy, which needs much less energy.' },
            { type: 'mcq', q: 'Why are desalination plants a strategic weakness for Gulf countries?', options: ['Cities rely on a few coastal plants', 'They can only supply small villages, not big cities like Riyadh or Jeddah', 'They take water from rivers', 'They stop working in summer'], answer: 0,
              explain: 'An oil spill, algal bloom or attack near a plant could cut off water to millions. Storage and diversity of supply reduce the risk.' }
          ]
        }
      },
      {
        id: 'people', title: 'Beyond oil', icon: '🕌',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: Mecca, in Saudi Arabia, is the holiest city in which religion?', options: ['Islam', 'Christianity', 'Buddhism', 'Hinduism'], answer: 0,
              explain: 'Every year millions of Muslims from around the world travel to Mecca for the Hajj pilgrimage.' },
            { type: 'mcq', q: 'Culture: in Saudi homes, guests are traditionally welcomed with what?', options: ['Arabic coffee and dates', 'Tea and biscuits', 'Popcorn', 'Fish and chips wrapped in paper'], answer: 0,
              explain: 'Qahwa, a light coffee flavoured with cardamom, served with dates, is a symbol of generosity and hospitality.' },
            { type: 'mcq', q: 'Why does Saudi Arabia want to rely less on oil?', options: ['Oil will run out and prices change', 'Nobody uses oil any more', 'It is illegal to sell oil', 'The oil fields are almost empty and will close within the next few years'], answer: 0,
              explain: 'Vision 2030 aims to grow tourism, entertainment, technology and renewable energy.' }
          ],
          adv: [
            { type: 'mcq', q: 'Vision 2030 is an example of what?', options: ['Economic diversification', 'Deindustrialisation', 'Counter-urbanisation', 'Desertification, as cities spread'], answer: 0,
              explain: 'Diversifying reduces dependence on one commodity, protecting the economy when oil prices fall and as the world cuts carbon emissions.' },
            { type: 'sort', q: 'Classify these Saudi projects.', bins: ['Diversifying the economy', 'Still based on oil'],
              items: [['Red Sea tourist resorts', 0], ['Large solar power plants', 0], ['The Riyadh Metro', 0], ['Petrochemical plants at Jubail', 1], ['Expanding the Ghawar oil field', 1], ['Oil export terminals in the Gulf', 1]],
              explain: 'Diversification is partly paid for by oil money, so the two remain closely linked.' },
            { type: 'mcq', q: 'Culture: At-Turaif in Diriyah, near Riyadh, is a UNESCO World Heritage Site. What is it?', options: ['A historic mud-brick town', 'A modern football stadium', 'An oil refinery', 'A coral reef'], answer: 0,
              explain: 'Diriyah was the first capital of the Saudi state in the 1700s. Its Najdi mud-brick architecture is being restored as a heritage and tourism site.' }
          ]
        }
      }
    ]
  };
})();
