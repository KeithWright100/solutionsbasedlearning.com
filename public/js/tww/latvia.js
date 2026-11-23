/* Travel the Wright Way — destination: Latvia (raised bogs and peat at Ķemeri, a cool Baltic climate, forests and the timber industry, population change, and Latvian culture).
 * Climate data: Riga, 1994–2020 averages (climatestotravel.com).
 * Facts: the Great Ķemeri Bog in Ķemeri National Park, west of Riga, is a raised bog crossed by a boardwalk; raised bogs are domes of peat built up over thousands of years from sphagnum moss, fed only by rain, with pools and stunted pines on the surface; peat stores large amounts of carbon;
 *   forests cover more than half of Latvia (about 52–55%), one of the most forested countries in Europe; wood and wood products make up around a fifth of Latvia's exports;
 *   Latvia's population fell from about 2.7 million in 1990 to under 1.9 million, through emigration (especially after joining the EU in 2004) and low birth rates;
 *   the Song and Dance Festival, held about every five years with tens of thousands of performers, is recognised by UNESCO; Jāņi is the midsummer festival; about a third of buildings in central Riga are Art Nouveau;
 *   on 23 August 1989 about two million people formed the Baltic Way, a human chain across Estonia, Latvia and Lithuania; Latvia regained independence in 1991; amber washes up on the Baltic coast.
 */
(function () {
  var BOG_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a raised bog: a dome of brown peat rising above the surrounding land, with green sphagnum moss on the surface, dark pools, small stunted pine trees, a wooden boardwalk across the top, and wet ground at the edges of the dome">' +
  '<rect width="600" height="420" fill="#e3edf3"/>' +
  '<rect x="0" y="320" width="600" height="100" fill="#a8a29e"/><g stroke="#78716c" stroke-width="1"><line x1="0" y1="350" x2="600" y2="350"/><line x1="0" y1="385" x2="600" y2="385"/></g>' +
  '<path d="M0 250 L40 250 L40 320 L0 320 Z M560 250 L600 250 L600 320 L560 320 Z" fill="#8a7a55"/>' +
  '<path d="M40 250 Q 300 50 560 250 L560 320 L40 320 Z" fill="#6b4f2a"/>' +
  '<g stroke="#4a3518" stroke-width="1.5" fill="none" opacity=".7"><path d="M70 280 Q 300 130 530 280"/><path d="M60 300 Q 300 180 540 300"/><path d="M90 262 Q 300 90 510 262"/></g>' +
  '<path d="M40 250 Q 300 50 560 250" fill="none" stroke="#84a33a" stroke-width="9"/>' +
  '<g fill="#1e3a5f"><ellipse cx="230" cy="158" rx="26" ry="5"/><ellipse cx="372" cy="155" rx="20" ry="4"/></g>' +
  '<rect x="262" y="143" width="80" height="5" fill="#a16207"/><g stroke="#713f12" stroke-width="2"><line x1="270" y1="148" x2="270" y2="154"/><line x1="300" y1="148" x2="300" y2="153"/><line x1="334" y1="148" x2="334" y2="154"/></g>' +
  '<g fill="#2f4f2a"><path d="M418 165 l7 -26 l7 26 Z"/><path d="M178 175 l6 -22 l6 22 Z"/><path d="M458 186 l5 -18 l5 18 Z"/></g><g stroke="#5b3b22" stroke-width="2"><line x1="425" y1="165" x2="425" y2="170"/><line x1="184" y1="175" x2="184" y2="180"/></g>' +
  '<g fill="#3b82c4"><ellipse cx="42" cy="251" rx="16" ry="4"/><ellipse cx="558" cy="251" rx="16" ry="4"/></g>' +
  '<g fill="#1f4d2b">' + (function () { var g = ''; for (var i = 0; i < 3; i++) g += '<path d="M' + (i * 12 - 2) + ' 250 l7 -30 l7 30 Z"/><path d="M' + (566 + i * 12) + ' 250 l7 -30 l7 30 Z"/>'; return g; })() + '</g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="80" y1="90" x2="226" y2="156"/><line x1="500" y1="90" x2="426" y2="146"/><line x1="520" y1="170" x2="472" y2="192"/><line x1="480" y1="320" x2="380" y2="270"/><line x1="300" y1="40" x2="300" y2="141"/><line x1="90" y1="330" x2="44" y2="254"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.latvia = {
    id: 'latvia',
    name: 'Latvia',
    short: 'Latvia',
    country: 'Latvia',
    gateway: 'Riga',
    lonlat: [24.11, 56.95],
    locator: { box: [20.8, 28.4, 55.3, 58.3], rivers: [[[27.6, 55.7], [26.53, 55.87], [25.7, 56.25], [25.0, 56.6], [24.4, 56.85], [24.05, 57.05]]], places: [['Riga', 24.11, 56.95, 'r'], ['Ķemeri', 23.5, 56.95, 'b'], ['Daugavpils', 26.53, 55.87, 't'], ['Ventspils', 21.57, 57.39, 'r'], ['Liepāja', 21.01, 56.51, 'r'], ['Gulf of Riga', 23.4, 57.65, 'a'], ['Daugava', 25.6, 56.5, 'a']] },
    stamp: { colour: '#7f1d1d', icon: '🌲' },
    transport: { name: 'boardwalk hike', verb: 'Hike', emoji: '🥾' },
    scene: 'bog',
    photo: { file: 'Liela Kemeru taka 5jul03.JPG', alt: 'A flat, open bog with dark pools of water, low mossy ground and scattered small pine trees under a wide sky', author: 'Gatis Pāvils', licence: 'Public domain', licenceUrl: 'https://creativecommons.org/publicdomain/mark/1.0/' },
    intro: {
      ks3: 'Sveiki! Welcome to Latvia. Hike a wooden boardwalk across a bog that has been growing for thousands of years, then explore a country where forests cover more than half the land and everyone seems to sing.',
      adv: 'Hike across the Great Ķemeri Bog. This expedition covers raised bogs and peat as a carbon store, a cool Baltic climate, forest resources and the timber economy, population decline and emigration, and Latvian culture and identity.'
    },
    facts: ['Forests cover more than half of Latvia.', 'Peat bogs build up by only about 1 mm a year.', 'In 1989 about two million people held hands across the Baltic states in the Baltic Way.'],
    climate: {
      place: 'Riga, Latvia', source: '1994–2020 averages (climatestotravel.com)', lat: '57°N', rmax: 100, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-3.0, -2.5, 0.7, 6.5, 11.6, 15.6, 18.4, 17.5, 12.9, 7.3, 2.7, -0.9],
      rain: [46, 40, 34, 35, 48, 65, 80, 78, 67, 76, 56, 50]
    },
    diagrams: { bog: BOG_SVG },
    stations: [
      {
        id: 'bog', title: 'The Great Ķemeri Bog', icon: '🌿',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'bog', prompt: 'Label this cross-section of a raised bog.',
              spots: [{ x: 13.3, y: 21.4 }, { x: 83.3, y: 21.4 }, { x: 86.7, y: 40.5 }, { x: 80, y: 76.2 }, { x: 50, y: 9.5 }, { x: 15, y: 78.6 }].map(function (s, i) { s.a = ['Bog pool', 'Stunted pine tree', 'Moss', 'Peat', 'Boardwalk', 'Wet edge'][i]; return s; }),
              extra: [],
              explain: 'The bog grows upwards into a dome as dead moss slowly piles up and turns into peat.' },
            { type: 'mcq', photo: true, q: 'Look at the photo. Why are the trees on the bog so small?', options: ['The wet, acidic peat has very few nutrients', 'People cut the tops off them every single year for firewood', 'It is too hot for trees to grow', 'Animals eat the tops off them'], answer: 0,
              explain: 'Pines on the bog can be over 100 years old but only a few metres tall.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Daugavpils from Riga?', options: ['South-east', 'North-west', 'South-west', 'North-east'], answer: 0,
              explain: 'Daugavpils is about 190 km south-east, along the Daugava river.' }
          ],
          adv: [
            { type: 'label', diagram: 'bog', prompt: 'Label the features of a raised bog. One label does not belong.',
              spots: [{ x: 13.3, y: 21.4 }, { x: 83.3, y: 21.4 }, { x: 86.7, y: 40.5 }, { x: 80, y: 76.2 }, { x: 50, y: 9.5 }, { x: 15, y: 78.6 }].map(function (s, i) { s.a = ['Bog pool', 'Pine stunted by poor nutrients', 'Living sphagnum moss layer', 'Peat (a long-term carbon store)', 'Boardwalk protecting the surface', 'Lagg (wet margin)'][i]; return s; }),
              extra: ['Volcanic crater'],
              explain: 'A raised bog is fed only by rain, so it is acidic and poor in nutrients. Its peat may be several metres deep.' },
            { type: 'mcq', q: 'Why are peat bogs important in the fight against climate change?', options: ['Peat stores huge amounts of carbon from dead plants', 'Bogs release oxygen at night', 'Peat reflects most of the sunlight straight back into space', 'Bogs cool the air by evaporation only'], answer: 0,
              explain: 'When bogs are drained or the peat is dug up, that carbon is released as carbon dioxide.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Riga to the port of Ventspils.', options: ['About 160 km', 'About 16 km', 'About 600 km', 'About 1,600 km'], answer: 0,
              explain: 'Ventspils is about 160 km west. Its port exports timber and other goods.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Baltic seasons', icon: '❄️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the coldest month in Riga?', options: ['January', 'July', 'April', 'October'], answer: 0,
              explain: 'January averages −3°C. The Gulf of Riga often freezes near the shore.' },
            { type: 'mcq', graph: true, q: 'Which is the warmest month?', options: ['July', 'January', 'March', 'November'], answer: 0,
              explain: 'July averages about 18°C, with long days of up to 18 hours of daylight.' },
            { type: 'mcq', graph: true, q: 'Which is the wettest month?', options: ['July', 'March', 'February', 'April'], answer: 0,
              explain: 'July has about 80 mm, often from summer showers and thunderstorms.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual precipitation in Riga (mm).', answer: 675, tol: 3, unit: 'mm',
              explain: 'Adding the twelve months gives 675 mm.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 21.4, tol: 0.2, unit: '°C',
              explain: 'July 18.4°C − January (−3.0°C) = 21.4°C, a fairly large range for a coastal city.' },
            { type: 'number', graph: true, q: 'How many months have an average temperature below 0°C?', answer: 3, tol: 0, unit: 'months',
              explain: 'December, January and February are below freezing, so snow often lies on the ground.' }
          ]
        }
      },
      {
        id: 'forest', title: 'Green gold', icon: '🌲',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'About how much of Latvia is covered by forest?', options: ['More than half', 'About a tenth', 'Almost none', 'All of it'], answer: 0,
              explain: 'Latvia is one of the most forested countries in Europe, with lots of pine, birch and spruce.' },
            { type: 'mcq', q: 'Which of these is one of Latvia’s most important exports?', options: ['Wood and timber products', 'Oil', 'Gold', 'Bananas grown in heated greenhouses near Riga'], answer: 0,
              explain: 'Wood makes up about a fifth of Latvia’s exports, from planks to furniture and wood pellets.' },
            { type: 'mcq', q: 'Latvia’s population has fallen since 1990. What is one main reason?', options: ['Many people moved abroad to work', 'A big war in the 2000s', 'A volcanic eruption', 'Everyone moved to the countryside'], answer: 0,
              explain: 'The population fell from about 2.7 million to under 1.9 million.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these forestry practices in Latvia.', bins: ['More sustainable', 'Less sustainable'],
              items: [['Replanting after every harvest', 0], ['Protecting old-growth forest in reserves', 0], ['Making long-lasting furniture from timber', 0], ['Clear-felling large areas at once', 1], ['Draining bogs to plant trees', 1], ['Burning most of the harvest as fuel', 1]],
              explain: 'Using wood for long-lasting products keeps carbon locked up for longer than burning it.' },
            { type: 'mcq', q: 'After Latvia joined the EU in 2004, many young people emigrated. Which is a likely long-term impact?', options: ['An ageing population and labour shortages', 'A rapid rise in the birth rate', 'Overcrowding in rural villages', 'More young workers than jobs'], answer: 0,
              explain: 'Money sent home by emigrants helps families, but the country loses workers and taxpayers.' },
            { type: 'mcq', q: 'Peat dug from Latvian bogs is exported for garden compost. Why is this controversial?', options: ['It releases stored carbon and destroys rare habitats', 'Peat is far too heavy and wet to transport anywhere by ship', 'Peat is radioactive', 'Bogs regrow in a single year'], answer: 0,
              explain: 'Peat forms at about 1 mm a year, so a dug-out bog would take thousands of years to recover.' }
          ]
        }
      },
      {
        id: 'culture', title: 'A singing nation', icon: '🎶',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: the Latvian Song and Dance Festival is famous. What happens there?', options: ['Tens of thousands of people sing and dance together', 'People race decorated boats along the Daugava river all day', 'Families build snow castles', 'Teams compete at ice hockey'], answer: 0,
              explain: 'It is held about every five years and is recognised by UNESCO.' },
            { type: 'mcq', q: 'Culture: Jāņi is Latvia’s biggest festival. When is it?', options: ['Midsummer, the shortest night of the year', 'New Year’s Eve', 'The first snowfall', 'Harvest time in October, when the last of the grain is brought in'], answer: 0,
              explain: 'People wear wreaths of oak leaves and flowers, light bonfires and stay up all night.' },
            { type: 'mcq', q: 'Culture: what is amber, which washes up on Latvia’s beaches?', options: ['Fossilised tree resin', 'A type of seaweed', 'Coloured glass from shipwrecks', 'A kind of shellfish'], answer: 0,
              explain: 'It formed from the sticky resin of ancient forests millions of years ago.' }
          ],
          adv: [
            { type: 'mcq', q: 'Culture: in 1989, about two million people formed the Baltic Way. What was it?', options: ['A human chain across three countries calling for independence', 'A new motorway to Poland', 'A long-distance running race', 'A new railway line built across the Baltic Sea to link the three capitals'], answer: 0,
              explain: 'Singing played such a big part in the protests that they are called the Singing Revolution. Latvia regained independence in 1991.' },
            { type: 'mcq', q: 'Culture: about a third of the buildings in central Riga share one style, which helped it become a World Heritage Site. Which?', options: ['Art Nouveau', 'Ancient Roman', 'Modern glass skyscrapers', 'Traditional wooden huts'], answer: 0,
              explain: 'Riga grew quickly around 1900, when Art Nouveau was the fashionable style.' },
            { type: 'mcq', q: 'Ķemeri National Park attracts visitors to its bog boardwalk. How does the boardwalk help manage tourism?', options: ['It keeps feet off the fragile moss and peat', 'It lets cars drive across the bog', 'It drains water out of the bog', 'It stops birds landing on the pools'], answer: 0,
              explain: 'Trampling damages sphagnum moss, which can take many years to recover.' }
          ]
        }
      }
    ]
  };
})();
