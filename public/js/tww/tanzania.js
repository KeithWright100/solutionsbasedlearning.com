/* Travel the Wright Way — destination: Tanzania (Kilimanjaro's altitude zones and glaciers, two rainy seasons, farming, tourism and Swahili culture).
 * Climate data: Arusha, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: Kilimanjaro, 5,895 m, is Africa's highest mountain and a dormant volcano; its ice cover has shrunk by more than 85% since 1912;
 *   scientists link the loss to drier air and less snowfall as well as warming; most of the mountain's water comes from the forest belt;
 *   the Chagga people farm coffee and bananas on the lower slopes; Swahili is the national language;
 *   Stone Town on Zanzibar is a UNESCO World Heritage Site shaped by Indian Ocean trade.
 */
(function () {
  var ZONES_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of Kilimanjaro showing zones from savanna and farmland at the base, through rainforest, heath and moorland and alpine desert, to glaciers at the summit">' +
  '<defs><clipPath id="twTzClip"><path d="M30 400 L150 330 L250 200 L290 110 L320 70 L380 70 L410 110 L450 200 L550 330 L570 400 Z"/></clipPath></defs>' +
  '<rect width="600" height="420" fill="#d6ecfb"/>' +
  '<g clip-path="url(#twTzClip)">' +
  '<rect y="0" width="600" height="420" fill="#d8b45a"/>' +
  '<rect y="0" width="600" height="362" fill="#9cc65a"/>' +
  '<rect y="0" width="600" height="318" fill="#1f6b3a"/>' +
  '<rect y="0" width="600" height="232" fill="#8a9a4a"/>' +
  '<rect y="0" width="600" height="160" fill="#a8977a"/>' +
  '<rect y="0" width="600" height="98" fill="#ffffff"/>' +
  '<g stroke="#11243b" stroke-width="1" stroke-dasharray="3 4" opacity=".5"><line x1="0" y1="98" x2="600" y2="98"/><line x1="0" y1="160" x2="600" y2="160"/><line x1="0" y1="232" x2="600" y2="232"/><line x1="0" y1="318" x2="600" y2="318"/><line x1="0" y1="362" x2="600" y2="362"/></g>' +
  '</g>' +
  '<path d="M30 400 L150 330 L250 200 L290 110 L320 70 L380 70 L410 110 L450 200 L550 330 L570 400 Z" fill="none" stroke="#4b3b2b" stroke-width="2"/>' +
  // altitude axis
  '<g font-size="11" fill="#11243b" font-weight="700"><text x="586" y="102" text-anchor="end">5,000 m</text><text x="586" y="236" text-anchor="end">3,000 m</text><text x="586" y="366" text-anchor="end">1,000 m</text></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="456" y1="72" x2="370" y2="82"/><line x1="160" y1="128" x2="290" y2="130"/><line x1="430" y1="176" x2="414" y2="190"/><line x1="160" y1="262" x2="236" y2="270"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.tanzania = {
    id: 'tanzania',
    name: 'Tanzania: Kilimanjaro',
    short: 'Kilimanjaro',
    country: 'Tanzania',
    gateway: 'Arusha',
    lonlat: [37.35, -3.07],
    locator: { box: [29.5, 42.5, -11.8, -0.8], lakes: [[[31.8, -1.0], [33.9, -1.0], [34.1, -1.8], [33.5, -2.5], [32.6, -2.6], [31.6, -2.0]]], places: [['Kilimanjaro', 37.35, -3.07, 'r'], ['Arusha', 36.68, -3.37, 'b'], ['Dar es Salaam', 39.28, -6.79, 'l'], ['Zanzibar', 39.2, -6.16, 'r'], ['Serengeti', 34.8, -2.33, 'l'], ['Lake Victoria', 32.8, -1.7, 'a'], ['Indian Ocean', 41.0, -9.2, 'a']] },
    stamp: { colour: '#b45309', icon: '🏔️' },
    transport: { name: 'climb', verb: 'Climb', emoji: '🧗' },
    scene: 'kili',
    photo: { file: 'Kilimanjaro from Amboseli.jpg', alt: 'Snow-capped Kilimanjaro rising above clouds and grassland', author: 'Sergey Pesterev', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'You fly into Kilimanjaro Airport near Arusha. Lace up your boots: you are climbing Africa’s highest mountain, from hot grassland at the bottom, through rainforest, to ice at the top, just south of the Equator!',
      adv: 'From Arusha you climb Kilimanjaro to explore altitudinal zonation, shrinking tropical glaciers, a bimodal rainfall pattern, and the farming, tourism and Swahili culture of northern Tanzania.'
    },
    facts: ['Kilimanjaro is 5,895 m high, the tallest mountain in Africa.', 'It is a dormant volcano, about 330 km south of the Equator.', 'Its ice has shrunk by more than 85% since 1912.'],
    climate: {
      place: 'Arusha, Tanzania', source: 'Long-term averages (CRU / Met Office)', lat: '3°S',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [22.0, 22.5, 22.5, 21.5, 20.0, 18.5, 18.0, 18.5, 20.0, 21.5, 22.0, 22.0],
      rain: [63, 64, 144, 339, 169, 39, 21, 16, 16, 38, 126, 91]
    },
    diagrams: { zones: ZONES_SVG },
    stations: [
      {
        id: 'zones', title: 'Climbing through the zones', icon: '🧗',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'zones', prompt: 'Label the zones on Kilimanjaro from the bottom to the top.',
              spots: [{ x: 76, y: 14, a: 'Glacier' }, { x: 18, y: 30, a: 'Alpine desert' }, { x: 82, y: 42, a: 'Heath and moorland' }, { x: 16, y: 62, a: 'Rainforest' }, { x: 84, y: 80, a: 'Farmland' }, { x: 16, y: 92, a: 'Savanna' }],
              extra: [],
              explain: 'As you climb, it gets colder, so the vegetation changes. Climbing Kilimanjaro is like walking from the Equator to the Arctic.' },
            { type: 'mcq', q: 'Why does the vegetation change as you climb the mountain?', options: ['It gets colder with height, so different plants survive', 'It gets hotter with height because you are closer to the Sun', 'The soil turns into sand', 'Animals eat all the plants'], answer: 0,
              explain: 'Temperature falls with altitude. Above about 4,000 m, only tough plants survive, and at the top there is rock and ice.' },
            { type: 'number', q: 'Temperature falls about 6.5°C for every 1,000 m. At the foot of the mountain (about 900 m) it is 25°C. Estimate the temperature at the summit, about 5,000 m higher.', answer: -7.5, tol: 0.5, unit: '°C',
              explain: '5 × 6.5 = 32.5°C cooler. 25 − 32.5 = −7.5°C. That is why there is ice at the top, so close to the Equator.' }
          ],
          adv: [
            { type: 'label', diagram: 'zones', prompt: 'Label the altitudinal zones. One label does not belong.',
              spots: [{ x: 76, y: 14, a: 'Summit ice fields' }, { x: 18, y: 30, a: 'Alpine desert' }, { x: 82, y: 42, a: 'Heath and moorland' }, { x: 16, y: 62, a: 'Montane rainforest' }, { x: 84, y: 80, a: 'Cultivated zone' }, { x: 16, y: 92, a: 'Savanna grassland' }],
              extra: ['Mangrove swamp'],
              explain: 'Mangroves grow on tropical coasts, not mountains. Zonation reflects falling temperature with height, and rainfall that peaks in the forest belt before decreasing towards the dry alpine desert.' },
            { type: 'mcq', q: 'Why is the rainforest belt the wettest zone on the mountain?', options: ['Rising air cools and condenses, so most rain falls at mid-height', 'It is the closest zone to the Indian Ocean, so it gets sea spray all year', 'Glaciers melt into it', 'It is the hottest zone'], answer: 0,
              explain: 'Above the cloud belt the air is drier, so rainfall decreases towards the summit. The forest is the mountain’s main water source.' },
            { type: 'mcq', q: 'Climbers often suffer altitude sickness above 3,000 m. Why?', options: ['Air pressure is lower, so each breath has less oxygen', 'It is too hot near the summit because of the strong tropical sun', 'There is more oxygen', 'The ground is unstable'], answer: 0,
              explain: 'Guides advise “pole pole” (slowly, slowly in Swahili) to let the body adjust.' }
          ]
        }
      },
      {
        id: 'glaciers', title: 'Vanishing ice', icon: '🧊',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Kilimanjaro has lost more than 85% of its ice since 1912. What could happen in the future?', options: ['The ice could disappear within a few decades', 'The ice will grow back quickly once the dry season ends', 'The mountain will get taller', 'It will become rainforest overnight'], answer: 0,
              explain: 'Scientists expect the remaining ice to vanish this century if current trends continue.' },
            { type: 'mcq', q: 'Which group would lose income if the snowy summit disappeared?', options: ['Guides, porters and hotels that depend on tourists', 'Coffee farmers, because their crops are watered by meltwater from the summit', 'Coal miners', 'Arctic fishers'], answer: 0,
              explain: 'Tens of thousands of people climb each year. The snowy summit is a big part of the attraction.' },
            { type: 'mcq', q: 'Porters carry tents and food for climbers. Why are rules on porter loads and pay important?', options: ['To protect porters from injury and treat them fairly', 'To make climbs faster so that more tourists can reach the summit each day', 'To stop tourists coming', 'They are not important'], answer: 0,
              explain: 'Porters are essential to the tourism industry. Fair pay and weight limits are part of responsible tourism.' }
          ],
          adv: [
            { type: 'mcq', q: 'Scientists think warming is not the only cause of Kilimanjaro’s ice loss. Which other factor matters?', options: ['Drier air and less snow, so ice sublimates and is not replaced', 'Volcanic heat melting the glaciers from below as the volcano wakes up', 'Tourists walking on it', 'Too much rain'], answer: 0,
              explain: 'At the summit, air is usually below freezing. Changes in moisture since the late 1800s, plus strong sunshine, drive much of the loss.' },
            { type: 'mcq', q: 'If the glaciers disappear, will rivers around Kilimanjaro dry up?', options: ['Not mainly: most water comes from rain on the forest belt', 'Yes, because almost all of the river water comes from melting glaciers', 'Rivers will flood permanently', 'Rivers will turn salty'], answer: 0,
              explain: 'Unlike in the Andes or Himalaya, glacier meltwater is a small share of local water supply. Deforestation is a bigger threat.' },
            { type: 'number', q: 'In 1912 Kilimanjaro had about 12 km² of ice. If 85% has been lost, how much ice is left (km²)?', answer: 1.8, tol: 0.05, unit: 'km²',
              explain: '12 × 0.15 = 1.8 km².' }
          ]
        }
      },
      {
        id: 'climate', title: 'Two rainy seasons', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Arusha?', options: ['April', 'August', 'September', 'January'], answer: 0,
              explain: 'April has the tallest bar, about 339 mm. These are the “long rains”.' },
            { type: 'mcq', graph: true, q: 'Look at the bars. How many rainy seasons does Arusha have?', options: ['Two: March–May and November–December', 'One long wet season from November to April', 'None', 'Four short ones'], answer: 0,
              explain: 'There are the long rains (March to May) and the short rains (November to December).' },
            { type: 'mcq', graph: true, q: 'Which months are the driest, and best for climbing?', options: ['About June to October', 'About March to May', 'Only April', 'November and December'], answer: 0,
              explain: 'The dry season from June to October is the most popular time to climb Kilimanjaro and watch wildlife.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Arusha (mm).', answer: 1126, tol: 10, unit: 'mm',
              explain: 'Adding all twelve months gives about 1,126 mm.' },
            { type: 'mcq', graph: true, q: 'Why does Arusha, close to the Equator, have two rainy seasons?', options: ['The ITCZ passes over twice a year, following the sun', 'Monsoon winds from India reach Tanzania twice a year, in spring and autumn', 'Cold fronts from the Arctic', 'Snowmelt twice a year'], answer: 0,
              explain: 'This is a bimodal rainfall pattern. Farmers can sometimes grow two crops a year.' },
            { type: 'mcq', q: 'The short rains are linked to the Indian Ocean Dipole. In some years they are very heavy, in others they fail. What does this mean for farmers?', options: ['Rainfall is unreliable, bringing floods and droughts', 'Rainfall is always exactly the same each year, so they never need to plan ahead', 'Only fishers are affected', 'Nothing changes'], answer: 0,
              explain: 'Seasonal forecasts and drought-resistant crops help farmers manage this variability.' }
          ]
        }
      },
      {
        id: 'people', title: 'Farms, wildlife and culture', icon: '🦓',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'The Chagga people farm the lower slopes of Kilimanjaro. Which crops grow well there?', options: ['Coffee and bananas', 'Rice and wheat on large terraces', 'Apples and pears', 'Cacti'], answer: 0,
              explain: 'Fertile volcanic soils and reliable rain suit coffee and bananas, often grown together in “home gardens” under shade trees.' },
            { type: 'mcq', q: 'In the nearby Serengeti, over a million wildebeest move in a huge circle each year. Why?', options: ['They follow the rains to find fresh grass', 'They are escaping the cold winter on the plains and heading towards the coast', 'They go to the sea', 'They are chased by tourists'], answer: 0,
              explain: 'The Great Migration follows rainfall patterns, a spectacular link between climate and wildlife.' },
            { type: 'mcq', q: 'Culture: what is the main language spoken across Tanzania?', options: ['Swahili (Kiswahili)', 'Portuguese', 'Arabic', 'Afrikaans'], answer: 0,
              explain: 'Swahili grew along the East African coast from trade between Africans and Arab and Persian merchants. Words like “safari” (journey) and “jambo” (hello) come from Swahili.' }
          ],
          adv: [
            { type: 'mcq', q: 'Culture: Stone Town on Zanzibar is a UNESCO World Heritage Site. What shaped its architecture?', options: ['Centuries of Indian Ocean trade and many cultures', 'Viking settlers who sailed down the coast of Africa in the Middle Ages', 'Inca builders', 'Modern tourist hotels'], answer: 0,
              explain: 'Carved wooden doors, narrow streets and spice markets reflect Zanzibar’s past as a trading hub for cloves and other goods.' },
            { type: 'mcq', q: 'Coffee prices are set on world markets. How can small farmers on Kilimanjaro get a fairer price?', options: ['Cooperatives and Fairtrade schemes with a minimum price', 'Selling all their coffee to whichever buyer offers the lowest price that week', 'Growing less coffee', 'Stopping all exports'], answer: 0,
              explain: 'Cooperatives give farmers bargaining power and can invest in processing, adding value locally.' },
            { type: 'sort', q: 'Evaluate tourism on Kilimanjaro and in the Serengeti.', bins: ['Benefit', 'Cost'],
              items: [['Jobs for guides, porters and cooks', 0], ['Park fees fund conservation', 0], ['Foreign currency for Tanzania', 0], ['Litter and erosion on popular trails', 1], ['Some profits leave the country', 1], ['Conflict over land with local herders', 1]],
              explain: 'Managing tourism means balancing income with environmental and social impacts.' }
          ]
        }
      }
    ]
  };
})();
