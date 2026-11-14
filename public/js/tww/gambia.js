/* Travel the Wright Way — destination: The Gambia (a river country: the River Gambia and its estuary, a tropical wet and dry climate, farming, fishing and tourism, history and culture).
 * Climate data: Banjul, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: The Gambia is the smallest country on mainland Africa, a narrow strip along the River Gambia, surrounded by Senegal except for its Atlantic coast;
 *   in the dry season salt water moves far up the estuary, so rice is grown in the freshwater stretches further upstream; mangroves line the salty lower river;
 *   groundnuts (peanuts) have long been the main export crop; the dusty Harmattan wind blows from the Sahara in the dry season;
 *   tourism, mostly winter-sun visitors from Europe, is a major industry ("the Smiling Coast of Africa");
 *   Kunta Kinteh Island and related sites, linked to the transatlantic slave trade, are a UNESCO World Heritage Site; the Kankurang masked tradition of the Mandinka is on UNESCO's intangible heritage list;
 *   the Senegambia Bridge, opened in 2019, was the first bridge across the river within The Gambia; remittances from Gambians abroad are a large share of the economy.
 */
(function () {
  var RIVER_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map-style diagram of the River Gambia from the Atlantic Ocean, with Banjul at the mouth, mangroves along the salty estuary, rice fields further upstream and groundnut fields on higher land">' +
  '<rect width="600" height="420" fill="#d9c18a"/>' +
  // groundnut fields
  '<g fill="#c4a062">' + (function () { var g = ''; for (var r = 0; r < 3; r++) for (var c = 0; c < 6; c++) { g += '<rect x="' + (300 + c * 46) + '" y="' + (40 + r * 24) + '" width="40" height="18"/><rect x="' + (300 + c * 46) + '" y="' + (318 + r * 24) + '" width="40" height="18"/>'; } return g; })() + '</g>' +
  '<g fill="#7a5a32">' + (function () { var g = ''; for (var i = 0; i < 70; i++) g += '<circle cx="' + (304 + (i * 37) % 270) + '" cy="' + ((i % 2 ? 44 : 322) + (i * 13) % 60) + '" r="1.6"/>'; return g; })() + '</g>' +
  // ocean
  '<rect width="120" height="420" fill="#2f8fcf"/>' +
  // river
  '<path d="M120 170 C 200 160, 260 190, 330 186 S 460 170, 600 182 L600 196 C 460 188, 360 210, 300 212 S 190 232, 120 250 Z" fill="#4ba3d9"/>' +
  // mangroves
  '<g fill="#1f5f2a">' + (function () { var g = ''; for (var i = 0; i < 16; i++) { var x = 126 + i * 10; g += '<circle cx="' + x + '" cy="' + (160 - (i % 3) * 3) + '" r="7"/><circle cx="' + x + '" cy="' + (256 - (i % 3) * 4 - i * 1.2) + '" r="7"/>'; } return g; })() + '</g>' +
  // rice fields
  '<g fill="#8fd16a" stroke="#5f9a3a" stroke-width="1">' + (function () { var g = ''; for (var i = 0; i < 6; i++) { g += '<rect x="' + (330 + i * 22) + '" y="164" width="18" height="12"/><rect x="' + (330 + i * 22) + '" y="216" width="18" height="12"/>'; } return g; })() + '</g>' +
  // Banjul
  '<circle cx="146" cy="240" r="7" fill="#b42318" stroke="#fff" stroke-width="2"/>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="150" y1="292" x2="146" y2="248"/><line x1="240" y1="106" x2="196" y2="152"/><line x1="504" y1="156" x2="500" y2="178"/><line x1="360" y1="264" x2="372" y2="228"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.gambia = {
    id: 'gambia',
    name: 'The Gambia',
    short: 'The Gambia',
    country: 'The Gambia',
    gateway: 'Banjul',
    lonlat: [-16.58, 13.45],
    locator: { box: [-17.8, -13, 12.2, 14.6], rivers: [[[-15.92, 13.45], [-15.8, 13.35], [-15.4, 13.45], [-15.0, 13.5], [-14.6, 13.6], [-14.2, 13.4], [-13.8, 13.3], [-13.2, 13.1]]], places: [['Banjul', -15.92, 13.45, 'b'], ['Janjanbureh', -14.76, 13.54, 't'], ['Basse', -14.21, 13.31, 'b'], ['SENEGAL', -15.2, 14.2, 'a'], ['SENEGAL ', -15.4, 12.6, 'a'], ['Atlantic', -17.3, 13.0, 'a']] },
    stamp: { colour: '#15803d', icon: '🌴' },
    transport: { name: 'river boat up the Gambia River', verb: 'Sail', emoji: '⛴️' },
    scene: 'mangrove',
    photo: { file: 'RiverGambia Janjanbureh 20190122 Upstream.jpg', alt: 'The wide, calm River Gambia near Janjanbureh Island, with trees lining both banks', author: 'Wmtribe2015', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'Welcome to The Gambia, the smallest country on mainland Africa and a narrow strip of land along one great river. Board a river boat at Banjul and travel upstream past mangroves, rice fields and villages, looking out for hippos and crocodiles.',
      adv: 'Travel up the River Gambia from Banjul. This expedition covers estuaries and salt intrusion, a tropical wet and dry climate, farming, fishing and tourism, colonial borders and the slave trade, migration and remittances, and Gambian culture.'
    },
    facts: ['The Gambia is the smallest country on mainland Africa.', 'Apart from its coast, The Gambia is completely surrounded by Senegal.', 'Banjul gets about 380 mm of rain in August alone.'],
    climate: {
      place: 'Banjul, The Gambia', source: 'Long-term averages (CRU / Met Office)', lat: '13°N', rmax: 400, rstep: 100,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [24.0, 25.5, 26.5, 26.5, 26.5, 28.0, 27.5, 27.0, 27.0, 27.0, 26.0, 24.0],
      rain: [1, 1, 0, 0, 5, 71, 232, 380, 276, 88, 5, 1]
    },
    diagrams: { river: RIVER_SVG },
    stations: [
      {
        id: 'river', title: 'A river country', icon: '🏞️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'river', prompt: 'Label the River Gambia.',
              spots: [{ x: 12, y: 90, a: 'Atlantic Ocean' }, { x: 26, y: 70, a: 'Banjul' }, { x: 40, y: 22, a: 'Mangroves' }, { x: 84, y: 34, a: 'River Gambia' }, { x: 60, y: 66, a: 'Rice fields' }, { x: 84, y: 90, a: 'Groundnut fields' }],
              extra: [],
              explain: 'Mangroves grow in the salty water near the coast. Rice is grown further upstream where the water is fresh, and groundnuts (peanuts) on the drier higher ground.' },
            { type: 'mcq', q: 'Why is The Gambia such a long, thin country?', options: ['Its borders follow the river', 'It is built on a mountain ridge', 'It follows a railway line', 'The desert surrounds it on all sides'], answer: 0,
              explain: 'In the 1800s Britain and France drew the border, giving Britain the land along the river, which was important for trade.' },
            { type: 'mcq', q: 'What is a mangrove?', options: ['A tree that grows in salty coastal water', 'A type of river fish', 'A dry desert shrub', 'A fruit tree grown in fields along the river'], answer: 0,
              explain: 'Mangroves protect the coast from erosion and are nurseries for fish and oysters.' }
          ],
          adv: [
            { type: 'label', diagram: 'river', prompt: 'Label the estuary and its land uses. One label does not belong.',
              spots: [{ x: 12, y: 90, a: 'Atlantic Ocean' }, { x: 26, y: 70, a: 'Banjul (capital)' }, { x: 40, y: 22, a: 'Mangrove swamp' }, { x: 84, y: 34, a: 'Estuary' }, { x: 60, y: 66, a: 'Freshwater rice fields' }, { x: 84, y: 90, a: 'Upland groundnut fields' }],
              extra: ['Glacier'],
              explain: 'There are no glaciers in tropical West Africa. Land use changes with distance upstream as the water becomes less salty.' },
            { type: 'mcq', q: 'In the dry season, salt water moves far up the River Gambia. Why?', options: ['Low river flow lets the tide push in', 'The sea level falls in the dry season', 'Salt is washed out of the soil by rain', 'Wind blows salt from the Sahara and it settles in the river'], answer: 0,
              explain: 'Low flow and a very flat river profile let the salt front travel a long way inland, damaging rice fields near the coast.' },
            { type: 'mcq', q: 'In 2019 the Senegambia Bridge opened across the river. Why was it important?', options: ['Before it, only ferries crossed the river', 'It was the very first road built anywhere in The Gambia', 'It let ships sail further upstream', 'It replaced the airport'], answer: 0,
              explain: 'The bridge cut long waits for ferries, speeding trade between northern and southern Senegal and within The Gambia.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Rainy season, dry season', icon: '🌦️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Banjul?', options: ['August', 'January', 'April', 'December'], answer: 0,
              explain: 'August gets about 380 mm. Nearly all the rain falls from June to October.' },
            { type: 'mcq', graph: true, q: 'Which months get almost no rain?', options: ['November to May', 'June to September', 'July and August', 'September and October'], answer: 0,
              explain: 'The long dry season is when most tourists visit.' },
            { type: 'mcq', q: 'In the dry season, a dusty wind called the Harmattan blows into The Gambia. Where does it come from?', options: ['The Sahara Desert', 'The Atlantic Ocean', 'The Arctic', 'The Indian Ocean'], answer: 0,
              explain: 'The Harmattan carries fine dust from the Sahara, making the sky hazy and the air very dry.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Banjul (mm).', answer: 1060, tol: 10, unit: 'mm',
              explain: 'Adding the twelve months gives about 1,060 mm.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly rain falls from June to September? Give a whole number.', answer: 90, tol: 1, unit: '%',
              explain: 'June to September = 959 mm out of 1,060 mm, which is about 90%.' },
            { type: 'mcq', q: 'What causes the rainy season in The Gambia?', options: ['The ITCZ moves north in the summer', 'Atlantic hurricanes every week', 'Snow melting in the mountains', 'Depressions from the Mediterranean'], answer: 0,
              explain: 'As the ITCZ shifts north, moist south-westerly winds bring heavy rain, just as in the Sahel further inland.' }
          ]
        }
      },
      {
        id: 'economy', title: 'Groundnuts, fish and tourists', icon: '🐟',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'For many years, which crop has been The Gambia’s main export?', options: ['Groundnuts (peanuts)', 'Coffee', 'Wheat', 'Bananas grown on the river islands'], answer: 0,
              explain: 'Groundnuts grow well in the sandy soils. Depending on one crop makes the economy vulnerable to drought and price changes.' },
            { type: 'mcq', q: 'Most tourists visit The Gambia between November and April. Why?', options: ['Dry season here, cold winter in Europe', 'It is the rainy season', 'The beaches are closed in summer for the turtles to nest', 'It snows in summer'], answer: 0,
              explain: 'Winter sun attracts visitors from the UK and northern Europe. The Gambia is known as “the Smiling Coast of Africa”.' },
            { type: 'mcq', q: 'Bonga is a cheap fish eaten all over The Gambia. Why are some fishing families worried?', options: ['Fishmeal factories buy up the catch', 'There are far too many fish in the sea for boats to catch', 'The sea has frozen', 'Nobody eats fish any more'], answer: 0,
              explain: 'Large amounts of fish are ground into fishmeal to feed farmed fish abroad, raising local prices and polluting some lagoons.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these impacts of tourism in The Gambia.', bins: ['Benefit', 'Cost'],
              items: [['Jobs in hotels and as guides', 0], ['Income for craft markets', 0], ['Foreign currency for the country', 0], ['Profits leaking to foreign tour companies', 1], ['Seasonal, low-paid jobs', 1], ['Pressure on water and the coastline', 1]],
              explain: 'All-inclusive packages keep visitors in hotels, so less money reaches local businesses: this is called leakage.' },
            { type: 'mcq', q: 'Many young Gambians have migrated to Europe, some taking the dangerous “backway” route. What is one positive effect for families at home?', options: ['Remittances sent home', 'Fewer people to feed means less need for farming', 'More workers in villages', 'Lower house prices'], answer: 0,
              explain: 'Money sent home is a large share of the economy, paying for food, housing and school fees.' },
            { type: 'mcq', q: 'Coastal erosion threatens hotels and fish-landing sites near Banjul. What has made it worse?', options: ['Beach sand mining and rising seas', 'Too much rain falling on the beaches in the dry season', 'Glaciers melting in the river', 'Planting more mangroves'], answer: 0,
              explain: 'Removing sand for building leaves less to protect the shore. Mangrove restoration and sea defences are being used to fight back.' }
          ]
        }
      },
      {
        id: 'culture', title: 'History, wrestling and Kankurang', icon: '🥁',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: Kunta Kinteh Island in the River Gambia is a UNESCO World Heritage Site. What is it linked to?', options: ['The transatlantic slave trade', 'The first moon landing', 'The invention of the internet', 'A famous football match'], answer: 0,
              explain: 'Enslaved Africans were held and shipped from the river. The island is named after Kunta Kinteh from the book and TV series “Roots”.' },
            { type: 'mcq', q: 'Culture: traditional wrestling is hugely popular in The Gambia and Senegal. What usually accompanies a match?', options: ['Drumming, music and dancing', 'Total silence', 'Fireworks only', 'Snowball fights between the two teams of supporters'], answer: 0,
              explain: 'Wrestlers dance to drums before the bout, and big matches are major community events.' },
            { type: 'mcq', q: 'Culture: the Kankurang is a Mandinka tradition. What is it?', options: ['A masked figure who guards initiates', 'A type of rice dish', 'A river boat', 'A special hairstyle worn by brides at Gambian weddings'], answer: 0,
              explain: 'The Kankurang, dressed in red bark and leaves, is on UNESCO’s list of Intangible Cultural Heritage.' }
          ],
          adv: [
            { type: 'mcq', q: 'The Gambia’s borders were drawn by Britain and France in the colonial period. What problem can such borders cause?', options: ['They can split communities and trade routes', 'They always follow mountain ranges, so they are hard to cross', 'They make countries larger', 'They stop rivers flowing'], answer: 0,
              explain: 'The same peoples, such as the Wolof, Mandinka and Fula, live on both sides of the Gambia–Senegal border.' },
            { type: 'mcq', q: 'Which project would most directly help Gambian rice farmers cope with salt water in the dry season?', options: ['Dykes and freshwater irrigation', 'Building more hotels', 'Cutting down the mangroves to make room for more rice fields', 'Importing more rice'], answer: 0,
              explain: 'Tidal irrigation schemes and dykes help farmers grow more rice and reduce dependence on imports.' },
            { type: 'mcq', q: 'The Gambia imports much of its rice. Why is this a risk?', options: ['World price rises can make it unaffordable', 'Imported rice is always better quality than local rice', 'It uses too much local water', 'Rice cannot be stored'], answer: 0,
              explain: 'Food security improves when more staple food is grown locally.' }
          ]
        }
      }
    ]
  };
})();
