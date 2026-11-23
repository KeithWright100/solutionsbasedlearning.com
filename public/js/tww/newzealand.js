/* Travel the Wright Way — destination: New Zealand (Southern Alps, Franz Josef Glacier and Rotorua).
 * Climate data: Hokitika Airport, NIWA climate data, 1936–2015 (daily mean temperature and mean monthly rainfall).
 * Annual rainfall comparison (Hokitika 2,920.8 mm, Christchurch 617.7 mm, Milford Sound 6,545.1 mm):
 *   NIWA Climate Averages 1991–2020, via Figure.NZ.
 * Geothermal: 8,741 GWh in 2024, 19.9% of electricity generation (MBIE); national generation 43,879 GWh (MBIE Energy in NZ 2025).
 * Alpine Fault: about 600 km long, last full rupture 1717 (about M8.1); slip about 38 mm a year in its central section.
 */
(function () {
  var PLATE_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section across the South Island of New Zealand from the Tasman Sea to the Pacific Ocean">' +
  '<rect width="600" height="420" fill="#cfeeff"/>' +
  // rain cloud over the west coast
  '<g class="sway"><ellipse cx="110" cy="62" rx="44" ry="17" fill="#8a9bb0"/><ellipse cx="140" cy="54" rx="30" ry="14" fill="#9fb0c4"/></g>' +
  '<g class="drip" stroke="#2f7fbf" stroke-width="2.5" stroke-linecap="round"><line x1="92" y1="84" x2="88" y2="96"/><line x1="112" y1="86" x2="108" y2="98"/><line x1="132" y1="84" x2="128" y2="96"/><line x1="152" y1="80" x2="148" y2="92"/></g>' +
  // seas
  '<rect x="0" y="136" width="150" height="28" fill="#2f7fbf"/><rect x="560" y="142" width="40" height="22" fill="#2f7fbf"/>' +
  // the two plates, meeting at the Alpine Fault
  '<path d="M0 162 L150 162 L232 150 L330 420 L0 420 Z" fill="#cda56c"/>' +
  '<path d="M232 150 L600 162 L600 420 L330 420 Z" fill="#a9774a"/>' +
  // plate movement arrows
  '<g stroke="#11243b" stroke-width="5" fill="#11243b"><line x1="40" y1="300" x2="120" y2="300"/><path d="M120 290 L138 300 L120 310 Z"/><line x1="560" y1="300" x2="470" y2="300"/><path d="M470 290 L452 300 L470 310 Z"/></g>' +
  // west coast lowland with rainforest
  '<path d="M146 162 L232 150 L236 160 L146 166 Z" fill="#2f7d32"/><g fill="#2f7d32"><circle cx="165" cy="155" r="8"/><circle cx="185" cy="152" r="9"/><circle cx="208" cy="150" r="8"/></g>' +
  // Southern Alps
  '<path d="M222 154 L252 118 L280 72 L300 50 L322 78 L345 60 L372 98 L410 138 L450 156 Z" fill="#7b8794"/>' +
  '<g fill="#fff"><path d="M287 62 L300 50 L313 64 L304 68 L300 62 L294 69 Z"/><path d="M336 70 L345 60 L356 74 L349 77 L345 71 L340 77 Z"/></g>' +
  // Canterbury Plains
  '<path d="M440 154 L560 160 L560 166 L440 162 Z" fill="#9ccc65"/>' +
  // the fault line
  '<path d="M232 150 L330 420" stroke="#b42318" stroke-width="4" stroke-dasharray="10 6"/>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="70" y1="125" x2="70" y2="146"/><line x1="230" y1="40" x2="290" y2="62"/><line x1="200" y1="252" x2="270" y2="255"/></g>' +
  '</svg>';

  var GLACIER_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A valley glacier flowing down from a snowfield to its snout, with moraine and a meltwater river">' +
  '<rect width="600" height="420" fill="#cfeeff"/>' +
  // valley sides
  '<path d="M0 220 L80 140 L170 70 L250 30 L330 50 L420 15 L520 20 L600 10 L600 420 L0 420 Z" fill="#8a8079"/>' +
  // rainforest on the lower slopes
  '<path d="M0 260 L120 230 L170 280 L120 330 L0 340 Z" fill="#2f7d32"/><g fill="#2f7d32"><circle cx="40" cy="250" r="14"/><circle cx="80" cy="240" r="13"/><circle cx="120" cy="236" r="12"/><circle cx="470" cy="330" r="14"/><circle cx="500" cy="320" r="14"/><circle cx="535" cy="315" r="13"/></g>' +
  '<path d="M420 340 L600 300 L600 420 L380 420 Z" fill="#2f7d32"/>' +
  // accumulation zone snowfield
  '<ellipse cx="510" cy="48" rx="95" ry="30" fill="#fff"/>' +
  // the glacier
  '<path d="M460 40 L585 48 L525 140 L405 240 L265 300 L182 312 L172 292 L262 250 L380 170 L455 85 Z" fill="#e3f2fd" stroke="#9cc9e6" stroke-width="3"/>' +
  // crevasses
  '<g stroke="#5b9ec9" stroke-width="3" stroke-linecap="round"><line x1="420" y1="160" x2="440" y2="185"/><line x1="440" y1="148" x2="462" y2="172"/><line x1="460" y1="134" x2="480" y2="158"/><line x1="400" y1="176" x2="418" y2="200"/></g>' +
  // terminal moraine
  '<path d="M140 336 Q 175 296 215 330 Q 200 345 175 344 Q 155 345 140 336 Z" fill="#9b8466"/><g fill="#6d5b45"><circle cx="160" cy="333" r="4"/><circle cx="182" cy="327" r="5"/><circle cx="200" cy="334" r="4"/></g>' +
  // meltwater river
  '<path d="M178 314 C 170 340, 120 360, 90 380 S 40 410, 0 418" fill="none" stroke="#5fb3cf" stroke-width="8" stroke-linecap="round"/>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="440" y1="34" x2="490" y2="45"/><line x1="436" y1="204" x2="425" y2="190"/><line x1="215" y1="338" x2="185" y2="312"/><line x1="130" y1="284" x2="160" y2="325"/><line x1="320" y1="229" x2="330" y2="250"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.newzealand = {
    id: 'newzealand',
    name: 'New Zealand',
    short: 'New Zealand',
    country: 'New Zealand',
    gateway: 'Christchurch',
    lonlat: [171.5, -43.2],
    locator: { box: [163.5, 179.5, -47.5, -34], places: [['Auckland', 174.76, -36.85, 'l'], ['Rotorua', 176.25, -38.14, 'r'], ['Wellington', 174.78, -41.29, 'r'], ['Hokitika', 170.97, -42.72, 't'], ['Franz Josef', 170.18, -43.39, 'l'], ['Christchurch', 172.64, -43.53, 'r'], ['Southern Alps', 167.4, -46.3, 'a'], ['Tasman Sea', 168.0, -39.5, 'a']] },
    stamp: { colour: '#3a8fb7', icon: '⛰️' },
    transport: { name: 'jet boat', verb: 'Zoom', emoji: '🚤' },
    scene: 'braided',
    photo: { file: 'Franz Josef Glacier 04.jpg', alt: 'Franz Josef Glacier flowing down a steep valley in the Southern Alps, surrounded by forest', author: 'Krzysztof Golik', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'You land in Christchurch on New Zealand’s South Island. Hold on tight: a jet boat is taking you up a wide, shallow braided river towards the Southern Alps, the glaciers and, later, the steaming geysers of the North Island.',
      adv: 'From Christchurch you jet-boat up a braided river into the Southern Alps. This expedition covers the Alpine Fault plate boundary, glacial processes at Franz Josef, the rain shadow across the mountains, and geothermal energy in the Taupō Volcanic Zone.'
    },
    facts: ['The Southern Alps include Aoraki / Mount Cook, New Zealand’s highest mountain at 3,724 m.', 'The jet boat was developed in New Zealand by Bill Hamilton in the 1950s to travel up shallow braided rivers.', 'In 2024 about one fifth of New Zealand’s electricity came from geothermal power.'],
    climate: {
      place: 'Hokitika, New Zealand', source: 'NIWA, Hokitika Airport 1936–2015', lat: '43°S',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [15.5, 15.9, 14.7, 12.6, 10.1, 8.1, 7.4, 8.3, 9.8, 11.1, 12.6, 14.4],
      rain: [242, 179, 215, 236, 242, 249, 219, 232, 257, 276, 240, 269]
    },
    diagrams: { plate: PLATE_SVG, glacier: GLACIER_SVG },
    stations: [
      {
        id: 'plates', title: 'Islands on a plate boundary', icon: '🌏',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'plate', prompt: 'Label this cross-section across the South Island.',
              spots: [{ x: 12, y: 27, a: 'Tasman Sea' }, { x: 33, y: 8, a: 'Southern Alps' }, { x: 26, y: 60, a: 'Alpine Fault' }, { x: 15, y: 85, a: 'Australian plate' }, { x: 80, y: 85, a: 'Pacific plate' }],
              extra: [],
              explain: 'New Zealand sits where the Australian plate meets the Pacific plate. The boundary on land is the Alpine Fault, and the plates pushing together have lifted up the Southern Alps.' },
            { type: 'mcq', q: 'How were the Southern Alps formed?', options: ['Two plates pushed together, lifting land along the Alpine Fault', 'A chain of huge volcanoes erupted along the length of the South Island', 'Glaciers piled up rocks over thousands of years', 'Rivers dropped thick layers of sand and gravel'], answer: 0,
              explain: 'The Pacific plate is moving past and pushing against the Australian plate. Over millions of years this has squeezed and lifted the rocks into high mountains.' },
            { type: 'mcq', q: 'The last great earthquake on the Alpine Fault was in 1717. Scientists think big earthquakes happen there every few hundred years. What does this mean?', options: ['Another large earthquake is likely, so people need to prepare', 'The fault has released its energy and is now dead and safe', 'Earthquakes on this fault can only happen on the North Island', 'The next one will happen in exactly 2117'], answer: 0,
              explain: 'The fault has ruptured in big earthquakes roughly every 300 years. It has been over 300 years since 1717, so scientists say people should plan and prepare now.' },
            { type: 'mcq', q: 'In the 2011 Christchurch earthquake, wet, sandy ground turned soft and muddy, and buildings sank. What is this called?', options: ['Liquefaction', 'Erosion', 'Weathering', 'Subduction'], answer: 0,
              explain: 'Shaking can make wet, loose soil behave like a liquid. Buildings and roads sink or tilt, and mud bubbles up to the surface.' }
          ],
          adv: [
            { type: 'label', diagram: 'plate', prompt: 'Label the cross-section. One label does not belong.',
              spots: [{ x: 12, y: 27, a: 'Tasman Sea' }, { x: 33, y: 8, a: 'Southern Alps' }, { x: 26, y: 60, a: 'Alpine Fault' }, { x: 15, y: 85, a: 'Australian plate' }, { x: 80, y: 85, a: 'Pacific plate' }, { x: 83, y: 28, a: 'Canterbury Plains' }],
              extra: ['Ocean trench'],
              explain: 'There is no ocean trench on this section. Through the South Island the boundary is the Alpine Fault, where the plates slide past each other and also push together. Subduction trenches lie offshore, to the north-east and south-west.' },
            { type: 'mcq', q: 'Which best describes the Alpine Fault?', options: ['A transform boundary with some convergence causing uplift', 'A divergent boundary where new oceanic crust is forming', 'A subduction zone where oceanic crust sinks into the mantle', 'A hotspot in the middle of a plate'], answer: 0,
              explain: 'Most of the movement is horizontal (right-lateral strike-slip), but the plates also converge slightly. That squeezing pushes the Pacific side up to form the Southern Alps.' },
            { type: 'number', q: 'In its central section the Alpine Fault slips about 38 mm a year. How many metres is that over 1,000 years?', answer: 38, tol: 0.5, unit: 'm',
              explain: '38 mm × 1,000 = 38,000 mm = 38 m. Most of this movement is released in sudden large earthquakes; in 1717 the fault moved about 8 m in seconds.' },
            { type: 'mcq', q: 'Scientists estimated in 2021 a 75% chance of a major Alpine Fault earthquake within the next 50 years. Which response best reduces the risk?', options: ['Emergency planning and strengthening roads and bridges', 'Moving everyone off the South Island’s West Coast', 'Waiting until the earthquake happens before making any plans', 'Building taller buildings close to the fault line'], answer: 0,
              explain: 'Earthquakes cannot be prevented, but risk can be reduced. West Coast towns could be cut off by landslides, so planning, practice and stronger infrastructure matter most.' }
          ]
        }
      },
      {
        id: 'glacier', title: 'Franz Josef Glacier', icon: '🧊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'glacier', prompt: 'Label the parts of Franz Josef Glacier.',
              spots: [{ x: 63, y: 7, a: 'Snowfield' }, { x: 85, y: 49, a: 'Crevasses' }, { x: 42, y: 84, a: 'Snout' }, { x: 17, y: 64, a: 'Moraine' }, { x: 14, y: 93, a: 'Meltwater river' }],
              extra: [],
              explain: 'Snow builds up in the snowfield at the top and turns to ice. The ice flows downhill, cracking into crevasses. At the snout it melts, leaving piles of rock (moraine) and a meltwater river.' },
            { type: 'mcq', q: 'When does a glacier grow and move forward (advance)?', options: ['When more snow falls each year than melts', 'When summers are hot and melting speeds up', 'When the river beneath it dries up', 'When snow stops falling in winter'], answer: 0,
              explain: 'A glacier is like a budget: snow in, melting out. If more snow is added than melts, the glacier grows and advances.' },
            { type: 'sort', q: 'Sort these glacial landforms by how they were made.', bins: ['Carved out by ice (erosion)', 'Dropped by ice (deposition)'],
              items: [['U-shaped valley', 0], ['Corrie', 0], ['Arête', 0], ['Moraine', 1], ['Drumlin', 1], ['Erratic boulder', 1]],
              explain: 'Ice erodes U-shaped valleys, corries and arêtes. When it melts, it drops its load as moraine, drumlins and erratics.' },
            { type: 'mcq', q: 'Franz Josef Glacier ends close to rainforest, not far above sea level. Why can it reach so low?', options: ['Very heavy snowfall from wet westerly winds feeds it', 'The rainforest is cold enough for ice to last all year', 'New Zealand has no summer, so ice never melts', 'Glaciers always flow down until they reach the sea'], answer: 0,
              explain: 'Moist westerly winds dump huge amounts of snow on the Southern Alps. So much ice is fed in at the top that it can flow a long way down before it melts.' }
          ],
          adv: [
            { type: 'label', diagram: 'glacier', prompt: 'Label the glacier system. One label does not belong.',
              spots: [{ x: 63, y: 7, a: 'Accumulation zone' }, { x: 85, y: 49, a: 'Crevasses' }, { x: 42, y: 84, a: 'Snout' }, { x: 17, y: 64, a: 'Terminal moraine' }, { x: 14, y: 93, a: 'Meltwater river' }, { x: 48, y: 51, a: 'Ablation zone' }],
              extra: ['Ox-bow lake'],
              explain: 'Ox-bow lakes form on meandering rivers, not glaciers. Above the equilibrium line is the accumulation zone (net gain of ice); below it is the ablation zone (net loss), ending at the snout.' },
            { type: 'sort', q: 'Sort these into inputs and outputs of a glacier’s mass balance.', bins: ['Input (accumulation)', 'Output (ablation)'],
              items: [['Snowfall', 0], ['Avalanches from valley sides', 0], ['Wind-blown snow', 0], ['Melting', 1], ['Sublimation', 1], ['Calving of ice into a lake', 1]],
              explain: 'Accumulation adds mass (snowfall, avalanches, drifting snow). Ablation removes it (melting, sublimation and calving).' },
            { type: 'mcq', q: 'Franz Josef Glacier is retreating. Which statement is correct?', options: ['Ice still flows downhill, but the snout melts faster than ice arrives', 'The ice is flowing back up the valley towards the mountains', 'The glacier has stopped moving completely and is just melting where it is', 'Retreat means more snow is falling at the top of the glacier'], answer: 0,
              explain: 'A glacier always flows downhill under gravity. Retreat happens when ablation at the snout is greater than the supply of ice from above (negative mass balance).' },
            { type: 'mcq', q: 'Franz Josef is steep and fed by very high snowfall. How does this affect how it responds to climate change?', options: ['It responds quickly, advancing or retreating within years', 'It takes thousands of years to respond to any change in climate', 'It cannot be affected by climate because it is so steep', 'It only changes after large earthquakes shake the ice'], answer: 0,
              explain: 'Steep, high-turnover maritime glaciers move ice fast, so changes in snowfall or temperature show up at the snout within years rather than decades.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Rain shadow', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Hokitika?', options: ['October', 'February', 'July', 'March'], answer: 0,
              explain: 'October has the tallest bar: about 276 mm. Every month gets well over 150 mm.' },
            { type: 'mcq', graph: true, q: 'Which is the warmest month in Hokitika?', options: ['February', 'July', 'June', 'October'], answer: 0,
              explain: 'February is the warmest (about 15.9°C). New Zealand is in the Southern Hemisphere, so summer is from December to February.' },
            { type: 'mcq', q: 'Hokitika, on the west side of the Southern Alps, gets about 2,900 mm of rain a year. Christchurch, on the east side, gets about 620 mm. Why?', options: ['Westerly winds drop their rain on the west, leaving the east in a rain shadow', 'Christchurch is much closer to the Equator, where the air is drier and warmer', 'Easterly winds bring dry air from the Pacific across Christchurch and the plains', 'Hokitika has more rivers, which evaporate and make rain'], answer: 0,
              explain: 'Moist air from the Tasman Sea rises over the Southern Alps, cools and forms rain (relief rainfall). By the time it sinks on the east side it is dry.' },
            { type: 'sort', q: 'Put each statement on the correct side of the Southern Alps.', bins: ['West side (Hokitika)', 'East side (Christchurch)'],
              items: [['Rises over the mountains, cools and forms rain', 0], ['Dense temperate rainforest', 0], ['Rain shadow', 1], ['Dry, grassy plains used for farming', 1]],
              explain: 'The windward west side is wet and forested. The leeward east side is in the rain shadow, so the Canterbury Plains are dry and often need irrigation.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Hokitika (°C).', answer: 8.5, tol: 0.1, unit: '°C',
              explain: 'Warmest month 15.9°C (February) − coldest 7.4°C (July) = 8.5°C.' },
            { type: 'mcq', graph: true, q: 'Why is Hokitika’s temperature range so small for a place at 43°S?', options: ['The ocean heats and cools slowly, giving a mild climate', 'It is at a very high altitude in the Southern Alps', 'It lies quite close to the Equator, so it is warm all year', 'Its heavy rain warms the air in winter'], answer: 0,
              explain: 'The sea has a high specific heat capacity, so it keeps winters mild and summers cool. Prevailing westerlies bring that maritime influence onshore all year.' },
            { type: 'number', q: 'Using 1991–2020 averages, Hokitika received 2,920.8 mm a year and Christchurch 617.7 mm. How many times wetter is Hokitika? (1 decimal place)', answer: 4.7, tol: 0.1, unit: 'times',
              explain: '2,920.8 ÷ 617.7 = 4.7. Milford Sound, also on the windward side, averages about 6,545 mm, over 10 times Christchurch.' },
            { type: 'mcq', q: 'Canterbury sometimes gets hot, dry, gusty “nor’wester” winds. Which process explains this?', options: ['Air dries out rising over the Alps, then warms as it descends (föhn)', 'Air is heated by the geysers and hot springs high in the Southern Alps', 'Cold air drains off the glaciers and warms over the plains', 'Sea breezes blow in from the warm Pacific in the afternoon'], answer: 0,
              explain: 'Rising air cools at the slower saturated rate while releasing rain; descending air warms at the faster dry rate. It reaches Canterbury warmer and drier than it started.' }
          ]
        }
      },
      {
        id: 'geothermal', title: 'Geysers and geothermal power', icon: '♨️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Your trip ends at Rotorua on the North Island, where geysers shoot boiling water into the air. What heats the water?', options: ['Hot rocks and magma underground', 'The sun', 'Hot springs heated by power stations', 'Lightning'], answer: 0,
              explain: 'Rainwater soaks into the ground and is heated by hot rock above magma. Pressure builds until the hot water and steam burst out as a geyser.' },
            { type: 'mcq', q: 'In 2024, about how much of New Zealand’s electricity came from geothermal power?', options: ['About one fifth', 'About half', 'Almost none', 'About one twentieth'], answer: 0,
              explain: 'Geothermal made about 20% (one fifth) of New Zealand’s electricity in 2024. Hydro-electric power made most of the rest.' },
            { type: 'sort', q: 'Sort these energy sources.', bins: ['Renewable', 'Non-renewable'],
              items: [['Geothermal', 0], ['Hydro-electric', 0], ['Wind', 0], ['Solar', 0], ['Coal', 1], ['Natural gas', 1]],
              explain: 'Renewable sources will not run out. Coal and gas are fossil fuels: they took millions of years to form and are being used up.' },
            { type: 'mcq', q: 'Why are New Zealand’s geothermal power stations almost all in the centre of the North Island?', options: ['The Taupō Volcanic Zone has hot rocks close to the surface', 'It is the sunniest part of New Zealand, so the ground is warm', 'It has the most people, so electricity is used close by', 'It is the windiest area, which helps cool the turbines'], answer: 0,
              explain: 'The plate boundary causes volcanic activity in the Taupō Volcanic Zone. Hot rock is close enough to the surface to drill into.' }
          ],
          adv: [
            { type: 'number', q: 'In 2024 New Zealand generated 43,879 GWh of electricity, of which 8,741 GWh was geothermal. What percentage was geothermal? (1 decimal place)', answer: 19.9, tol: 0.15, unit: '%',
              explain: '8,741 ÷ 43,879 × 100 = 19.9%. Overall, 85.5% of New Zealand’s electricity came from renewable sources in 2024.' },
            { type: 'sort', q: 'Sort these into advantages and disadvantages of geothermal power.', bins: ['Advantage', 'Disadvantage'],
              items: [['Generates steadily day and night, whatever the weather', 0], ['Much lower carbon emissions than coal or gas', 0], ['Uses a local resource, cutting fuel imports', 0], ['Only possible in a few volcanic areas', 1], ['Can cause land to subside', 1], ['Can reduce the activity of nearby natural geysers', 1]],
              explain: 'Geothermal provides reliable “baseload” power with low emissions. But it is tied to volcanic areas, and taking fluid out can lower the land and weaken natural features. Wairakei’s Geyser Valley lost its geysers after the power station opened.' },
            { type: 'mcq', q: 'Wairakei, near Taupō, first generated electricity in 1958. Why is it significant?', options: ['It was New Zealand’s first geothermal station, and the world’s second', 'It was the first hydro-electric dam built anywhere in New Zealand', 'It was the largest coal-fired power station in the world at the time', 'It was the first wind farm in the Southern Hemisphere'], answer: 0,
              explain: 'Wairakei was the second geothermal power station in the world, after Larderello in Italy. Geothermal now supplies about a fifth of New Zealand’s electricity.' },
            { type: 'mcq', q: 'In dry years New Zealand burns more coal for electricity. How does geothermal help with this problem?', options: ['Its output does not depend on rain, so it balances low lakes', 'It refills the hydro lakes using steam pumped up from underground', 'It makes more rain fall over the Southern Alps', 'It stores spare electricity like a giant battery'], answer: 0,
              explain: 'Hydro depends on rain and snowmelt. When lakes are low, steady geothermal output reduces the need for coal and gas.' }
          ]
        }
      },
      {
        id: 'people', title: 'People, farming and tourism', icon: '🧑‍🤝‍🧑',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Who were the first people to settle in New Zealand, arriving by canoe about 700 years ago?', options: ['Māori, from eastern Polynesia', 'Aboriginal Australians', 'Dutch sailors with Abel Tasman', 'British settlers from London'], answer: 0,
              explain: 'Māori voyagers arrived from eastern Polynesia around 1300. Europeans arrived several hundred years later.' },
            { type: 'mcq', q: 'In the 2023 Census, about what fraction of New Zealanders were of Māori descent?', options: ['About one in five', 'About one in a hundred', 'About half', 'Almost everyone'], answer: 0,
              explain: '19.6% of people (nearly 1 million) were of Māori descent, and the Māori population is growing faster than the population as a whole.' },
            { type: 'mcq', q: 'In 2024 about 3.3 million international visitors came to New Zealand. How important is tourism to the economy?', options: ['It is the second-biggest export earner, after dairy', 'It earns almost nothing', 'It is bigger than all other industries put together', 'Tourists are not allowed to spend money'], answer: 0,
              explain: 'Money spent by overseas visitors counts as an export. Only dairy products earn New Zealand more.' },
            { type: 'mcq', q: 'Dairy (milk, butter and cheese) is New Zealand’s biggest export. Many dairy farms on the Canterbury Plains use sprinklers to water their grass. Why?', options: ['The plains are in the rain shadow of the Alps, so they are dry', 'It rains too much there, so sprinklers wash away any extra fertiliser', 'Cows produce more milk when the grass is cold and wet', 'The soil is frozen for most of the year'], answer: 0,
              explain: 'Christchurch gets only about 620 mm of rain a year. Irrigation keeps grass growing through dry summers so cows can be fed.' },
            { type: 'sort', q: 'Places like Queenstown and Rotorua attract lots of tourists. Sort the effects of tourism.', bins: ['Positive', 'Negative'],
              items: [['Jobs in hotels, cafés and adventure activities', 0], ['Money for local businesses', 0], ['Visitors pay to see Māori culture and performances', 0], ['Traffic and crowds in busy seasons', 1], ['House prices and rents pushed up', 1], ['Carbon emissions from long-haul flights', 1]],
              explain: 'Tourism brings jobs and income and can support culture, but it also causes congestion, pushes up housing costs and adds emissions from flights.' }
          ],
          adv: [
            { type: 'number', q: 'The 2023 Census counted 4.99 million residents, and 3.31 million international visitors arrived in 2024. How many visitors were there per resident? (2 decimal places)', answer: 0.66, tol: 0.01, unit: 'per resident',
              explain: '3.31 ÷ 4.99 = 0.66, about two visitors for every three residents each year.' },
            { type: 'mcq', q: 'The median age of people of Māori descent is about 27, compared with about 38 for all New Zealanders. What does this suggest?', options: ['A young population that will be a larger share of future workers', 'An ageing population that will decline quickly in the next decade', 'That Māori people usually emigrate overseas at about age 27', 'That birth rates are exactly the same for all groups'], answer: 0,
              explain: 'A younger age structure means more people about to enter working and parenting age, so the Māori share of the population will keep rising. This matters for planning schools, jobs and services.' },
            { type: 'mcq', q: 'International arrivals fell to about 186,000 in 2021, when borders were closed during COVID-19. What does this show about tourism-dependent economies?', options: ['They are vulnerable to shocks they cannot control', 'Tourism always recovers within a few weeks', 'Border closures usually increase income from tourism', 'Tourism has no real link to employment'], answer: 0,
              explain: 'Relying on tourism makes places like Queenstown and Rotorua vulnerable to pandemics, economic downturns and changes in flight costs. Diversifying the economy reduces that risk.' },
            { type: 'mcq', q: 'Many Canterbury farms have switched from sheep to dairy, using more irrigation and fertiliser. Which environmental problem has grown as a result?', options: ['Nitrate pollution of rivers and groundwater', 'Desertification spreading across the West Coast', 'Faster retreat of glaciers in the Southern Alps', 'More frequent earthquakes from pumping water'], answer: 0,
              explain: 'Intensive dairying adds nitrogen that leaches into groundwater and rivers, causing algae growth and drinking-water concerns. Irrigation also puts pressure on rivers and aquifers.' },
            { type: 'sort', q: 'Classify these impacts of tourism in New Zealand.', bins: ['Economic', 'Social', 'Environmental'],
              items: [['Second-largest export earner', 0], ['Seasonal, often low-paid jobs', 0], ['Cultural tourism supports te reo Māori and traditions', 1], ['Housing shortages for local workers', 1], ['Pressure on fragile sites such as glaciers and national parks', 2], ['Emissions from international flights', 2]],
              explain: 'Some impacts overlap, but income and jobs are economic, culture and housing are social, and pressure on landscapes and flight emissions are environmental.' }
          ]
        }
      }
    ]
  };
})();
