/* Travel the Wright Way — destination: the Sahara Desert (desert landforms, extreme climate, living in the desert, Tuareg culture, desertification and the Sahel).
 * Climate data: Tamanrasset, Algeria (about 1,360 m, in the Hoggar Mountains), WMO climate normals via the Japan Meteorological Agency.
 * Facts: the Sahara covers about 9 million km², roughly the size of the USA; only around a quarter of it is sand sea (erg), most is rocky plateau (hamada) and stony plain (reg);
 *   barchan dunes have horns pointing downwind; wadis are dry valleys cut by rare flash floods;
 *   the Sahara lies under the descending limb of the Hadley cell; clear skies give a large day–night temperature range;
 *   Tuareg men traditionally wear an indigo veil (tagelmust) and the Tuareg write with Tifinagh script; foggaras are underground channels that bring water to oases;
 *   about 11,000–5,000 years ago the Sahara was much greener (the African Humid Period), shown by rock art of giraffes, elephants and cattle;
 *   the Great Green Wall was launched by the African Union in 2007, aiming to restore 100 million hectares of land across the Sahel by 2030.
 */
(function () {
  var DESERT_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Desert landscape showing a flat-topped mesa, a narrow butte, crescent-shaped sand dunes, an oasis with palm trees, a dry wadi and a stony plain">' +
  '<rect width="600" height="420" fill="#ffe8bf"/><circle cx="560" cy="40" r="22" fill="#ffb347"/>' +
  // ground
  '<rect y="260" width="600" height="160" fill="#e9c27c"/>' +
  // mesa and butte
  '<path d="M30 262 L52 150 L198 150 L220 262 Z" fill="#b5652e"/><g stroke="#8e4a1e" stroke-width="2"><line x1="46" y1="180" x2="204" y2="180"/><line x1="40" y1="212" x2="210" y2="212"/></g>' +
  '<path d="M240 262 L250 190 L272 190 L282 262 Z" fill="#b5652e"/><line x1="248" y1="214" x2="276" y2="214" stroke="#8e4a1e" stroke-width="2"/>' +
  // barchan dunes
  '<path d="M420 262 C 440 210, 520 200, 560 262 C 540 246, 520 240, 500 244 C 470 240, 440 248, 420 262 Z" fill="#f2c26b" stroke="#c98a3c" stroke-width="2"/>' +
  '<path d="M330 262 C 342 232, 384 228, 404 262 C 390 252, 370 250, 330 262 Z" fill="#f2c26b" stroke="#c98a3c" stroke-width="2"/>' +
  // wind arrow
  '<g stroke="#5b6573" stroke-width="2.5" fill="#5b6573"><line x1="330" y1="150" x2="420" y2="150"/><path d="M420 144 L432 150 L420 156 Z"/></g><text x="336" y="140" font-size="12" fill="#5b6573">wind</text>' +
  // oasis
  '<ellipse cx="110" cy="320" rx="50" ry="12" fill="#3d8fc6"/>' +
  '<g>' + (function () { var g = ''; [70, 104, 146].forEach(function (x) { g += '<path d="M' + x + ' 318 L' + (x + 2) + ' 282" stroke="#7a5a32" stroke-width="4"/><path d="M' + (x + 2) + ' 282 q-14 0 -22 10 M' + (x + 2) + ' 282 q14 0 22 10 M' + (x + 2) + ' 282 q-8 -12 -20 -12 M' + (x + 2) + ' 282 q8 -12 20 -12" stroke="#2f7a3a" stroke-width="4" fill="none"/>'; }); return g; })() + '</g>' +
  // wadi
  '<path d="M250 420 C 270 380, 300 350, 320 330 C 340 350, 360 380, 380 420 Z" fill="#d6a85e"/><path d="M270 420 C 290 380, 310 356, 320 340 C 330 356, 344 380, 360 420" fill="none" stroke="#b78a45" stroke-width="2" stroke-dasharray="6 5"/>' +
  // stony plain
  '<g fill="#8a7a66">' + (function () { var g = ''; for (var i = 0; i < 26; i++) g += '<ellipse cx="' + (420 + (i * 37) % 170) + '" cy="' + (300 + (i * 23) % 70) + '" rx="' + (4 + i % 3 * 2) + '" ry="3"/>'; return g; })() + '</g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="120" y1="92" x2="120" y2="148"/><line x1="262" y1="122" x2="260" y2="188"/><line x1="492" y1="100" x2="492" y2="214"/><line x1="100" y1="364" x2="108" y2="332"/><line x1="320" y1="372" x2="320" y2="350"/><line x1="504" y1="364" x2="500" y2="350"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.sahara = {
    id: 'sahara',
    name: 'Sahara Desert',
    short: 'the Sahara',
    the: true,
    country: 'Algeria',
    gateway: 'Tamanrasset',
    lonlat: [5.5, 22.8],
    locator: { box: [-12, 22, 12, 38], places: [['Tamanrasset', 5.52, 22.79, 'r'], ['Algiers', 3.06, 36.75, 'r'], ['Timbuktu', -3.0, 16.77, 'r'], ['Agadez', 7.99, 16.97, 'r'], ['Sahara Desert', 0, 27, 'a'], ['Sahel', 2, 13.6, 'a']] },
    stamp: { colour: '#c27a1a', icon: '🏜️' },
    transport: { name: 'camel', verb: 'Ride', emoji: '🐪' },
    scene: 'camel',
    photo: { file: 'Asskrem Hoggar 2.jpg', alt: 'Dark volcanic peaks of the Hoggar Mountains rising above the rocky Sahara near Tamanrasset', author: 'Patrick Gruban', licence: 'CC BY-SA 2.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/' },
    intro: {
      ks3: 'You fly into Tamanrasset, an oasis town in the middle of the Sahara, the biggest hot desert in the world. Saddle up a camel and explore dunes, rocky mountains and the people who have lived here for thousands of years.',
      adv: 'From Tamanrasset in the Hoggar Mountains you cross the central Sahara by camel. This expedition covers desert landforms and processes, the causes of aridity, adaptations of plants, animals and people, Tuareg culture, and desertification on the Sahel margin.'
    },
    facts: ['The Sahara is about the same size as the USA.', 'Only about a quarter of the Sahara is sand dunes; most is rock and stony plain.', 'About 6,000 years ago the Sahara was green, with lakes, giraffes and hippos.'],
    climate: {
      place: 'Tamanrasset, Algeria (1,360 m)', source: 'WMO climate normals (JMA)', lat: '23°N', rmax: 20, rstep: 5,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [12.8, 15.3, 19.2, 23.8, 27.7, 30.0, 30.1, 29.1, 27.9, 23.8, 18.2, 14.4],
      rain: [1.1, 0.9, 5.2, 0.1, 1.5, 5.7, 7.5, 18.5, 6.5, 8.2, 0.4, 0.6]
    },
    diagrams: { desert: DESERT_SVG },
    stations: [
      {
        id: 'landforms', title: 'Dunes, mesas and wadis', icon: '🏜️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'desert', prompt: 'Label these desert landforms.',
              spots: [{ x: 18, y: 19, a: 'Mesa' }, { x: 46, y: 26, a: 'Butte' }, { x: 82, y: 21, a: 'Sand dune' }, { x: 16, y: 90, a: 'Oasis' }, { x: 53, y: 92, a: 'Wadi' }, { x: 84, y: 90, a: 'Stony desert' }],
              extra: [],
              explain: 'A mesa is a wide, flat-topped hill; a butte is a smaller, narrower one. A wadi is a dry valley, and an oasis is a place where water reaches the surface.' },
            { type: 'mcq', q: 'Is most of the Sahara covered in sand dunes?', options: ['No: most is rock and stony plain', 'Yes, it is all sand', 'No, most of it is covered in ice', 'Yes: sand covers about nine-tenths of it, with a few oases'], answer: 0,
              explain: 'Sand seas (ergs) cover only around a quarter of the Sahara. Rocky plateaus and gravel plains are far more common.' },
            { type: 'mcq', q: 'A wadi is a dry valley. How was it carved out?', options: ['By rare but powerful flash floods', 'By glaciers that covered the Sahara in the last ice age', 'By people digging canals', 'By camels walking the same path'], answer: 0,
              explain: 'When rain does fall, it runs off the bare ground quickly, causing sudden floods that cut valleys. Wadis can be dangerous places to camp.' }
          ],
          adv: [
            { type: 'label', diagram: 'desert', prompt: 'Label the desert landforms. One label does not belong.',
              spots: [{ x: 18, y: 19, a: 'Mesa' }, { x: 46, y: 26, a: 'Butte' }, { x: 82, y: 21, a: 'Barchan dune' }, { x: 16, y: 90, a: 'Oasis' }, { x: 53, y: 92, a: 'Wadi' }, { x: 84, y: 90, a: 'Reg (stony plain)' }],
              extra: ['Meander'],
              explain: 'Meanders form in permanent rivers. Barchans are crescent dunes whose horns point downwind; a reg is a plain where wind has blown away the fine sand, leaving stones behind (deflation).' },
            { type: 'mcq', q: 'Which sequence shows how a plateau can be worn down over time?', options: ['Plateau → mesa → butte', 'Butte → mesa → plateau', 'Mesa → plateau → butte', 'Butte → plateau → mesa, as sand fills the gaps'], answer: 0,
              explain: 'Weathering and erosion attack the edges, so the flat-topped hill becomes smaller: first a mesa, then a narrow butte.' },
            { type: 'mcq', q: 'Which process makes rock break apart in a hot desert with a big day–night temperature range?', options: ['Thermal expansion and contraction (exfoliation)', 'Freeze–thaw weathering caused by heavy winter snowfall', 'Carbonation by acid rain', 'Root action by rainforest trees'], answer: 0,
              explain: 'Rock surfaces heat and expand by day and cool and contract at night. Over time outer layers can peel off, often helped by a little moisture.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Hot days, cold nights', icon: '🌡️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which month is the wettest in Tamanrasset?', options: ['August', 'January', 'April', 'November'], answer: 0,
              explain: 'August has about 18 mm, from occasional summer thunderstorms. Look carefully at the rain scale: it only goes up to 20 mm.' },
            { type: 'mcq', q: 'Desert days are very hot, but nights can be cold. Why?', options: ['Clear skies let heat escape at night', 'The sun is closer by day', 'Sand makes its own cold', 'Strong winds from the Arctic blow every night across the desert'], answer: 0,
              explain: 'With no clouds to act like a blanket, heat radiates quickly back into space after sunset.' },
            { type: 'mcq', q: 'Tamanrasset is about 1,360 m above sea level. How does this affect its temperature?', options: ['It is cooler than lowland desert', 'It is hotter than lowland desert', 'It makes no difference', 'It brings snow every month'], answer: 0,
              explain: 'Temperature falls with height, so mountain towns like Tamanrasset are a little cooler than the desert lowlands around them.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Tamanrasset (mm). Give a whole number.', answer: 56, tol: 2, unit: 'mm',
              explain: 'Adding the twelve months gives about 56 mm. Deserts are usually defined as places with under 250 mm a year.' },
            { type: 'mcq', q: 'Why is the Sahara so dry?', options: ['Air sinks in the Hadley cell, creating high pressure', 'It is in the rain shadow of the Himalayas', 'Cold ocean currents surround it on all sides', 'It is too close to the Equator for any clouds to form there'], answer: 0,
              explain: 'Air that rose and dropped its rain near the Equator sinks around 20–30°N. Sinking air warms and dries, so clouds and rain rarely form.' },
            { type: 'mcq', graph: true, q: 'Most of Tamanrasset’s little rain falls in summer. Why?', options: ['The ITCZ moves north, bringing occasional storms', 'Winter depressions from the Atlantic arrive in summer', 'The Mediterranean Sea evaporates in summer', 'Glaciers in the Hoggar melt in summer and fall as rain'], answer: 0,
              explain: 'In summer the rain belt of the ITCZ moves towards the southern Sahara. Its northern edge can just reach the Hoggar.' }
          ]
        }
      },
      {
        id: 'living', title: 'Living in the desert', icon: '🐪',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'What does a camel store in its hump?', options: ['Fat', 'Water', 'Milk', 'Sand, to help it balance on dunes'], answer: 0,
              explain: 'The hump stores fat, which can be broken down for energy. Camels can also drink over 100 litres of water at once.' },
            { type: 'sort', q: 'Sort these camel adaptations by what they help with.', bins: ['Heat and lack of water', 'Sand'],
              items: [['Fat stored in the hump', 0], ['Can lose a lot of water safely', 0], ['Very little sweating', 0], ['Long eyelashes', 1], ['Nostrils that can close', 1], ['Wide, padded feet', 1]],
              explain: 'Camels are superbly adapted, which is why they have been used to cross the Sahara for centuries.' },
            { type: 'mcq', q: 'Culture: the Tuareg are a traditionally nomadic people of the Sahara. What do Tuareg men traditionally wear?', options: ['An indigo veil wrapped around the head', 'A fur coat', 'A feather headdress', 'Heavy metal armour to protect them from sandstorms'], answer: 0,
              explain: 'The tagelmust protects against sun and sand. Its indigo dye can rub off on the skin, giving the name “blue people of the desert”.' }
          ],
          adv: [
            { type: 'mcq', q: 'Culture: the Tuareg have their own alphabet, still used today. What is it called?', options: ['Tifinagh', 'Cyrillic', 'Hieroglyphs', 'Devanagari'], answer: 0,
              explain: 'Tifinagh is an ancient Berber script. Tuareg also have a rich tradition of poetry, music and silver jewellery.' },
            { type: 'mcq', q: 'Many oases depend on fossil groundwater stored thousands of years ago. Why is this a sustainability problem?', options: ['It is barely recharged, so it can run out', 'It is too salty to drink or to use for farming in most oases', 'It floods the desert every year', 'It is only available in winter'], answer: 0,
              explain: 'Water stored in a wetter past is not being replaced by today’s tiny rainfall, so heavy pumping lowers water tables.' },
            { type: 'mcq', q: 'In Algerian oases, foggaras are underground channels dug centuries ago. What do they do?', options: ['Carry groundwater by gravity to fields', 'Store grain away from the heat', 'Shelter people from sandstorms', 'Drain dangerous floodwater away from the towns after storms'], answer: 0,
              explain: 'Foggaras are a sustainable, low-energy way to share water. Each family’s share is measured and divided along the channel.' }
          ]
        }
      },
      {
        id: 'sahel', title: 'The edge of the desert', icon: '🌱',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Rock paintings in the Sahara show giraffes, elephants and cattle. What do they tell us?', options: ['The Sahara used to be much greener', 'Giraffes live in the desert today', 'The artists had visited a zoo', 'The animals were brought by aeroplane'], answer: 0,
              explain: 'Around 11,000 to 5,000 years ago the Sahara had more rain, with grassland and lakes. Climate has changed naturally over time.' },
            { type: 'mcq', q: 'What is desertification?', options: ['Land on the edge of a desert becoming desert-like', 'Building houses in the desert', 'Moving sand dunes to make beaches', 'Turning a desert into farmland using lots of water and machines'], answer: 0,
              explain: 'In dry areas like the Sahel, soil can lose its plants and nutrients and become unable to support crops or animals.' },
            { type: 'mcq', q: 'The Great Green Wall aims to stop the Sahara spreading south. What is it?', options: ['A belt of restored land and trees', 'A giant concrete wall built along the southern edge of the desert', 'A line of wind turbines', 'A fence to keep out camels'], answer: 0,
              explain: 'Launched in 2007, it aims to restore 100 million hectares of land across the Sahel by 2030, creating jobs and food security.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these causes of desertification in the Sahel.', bins: ['Human', 'Physical'],
              items: [['Overgrazing by too many animals', 0], ['Cutting trees for firewood', 0], ['Over-cultivation that exhausts the soil', 0], ['Long droughts', 1], ['Rising temperatures and evaporation', 1], ['Unreliable, variable rainfall', 1]],
              explain: 'Causes interact: during drought, pressure from growing populations on fragile land makes degradation much worse.' },
            { type: 'mcq', q: 'The Great Green Wall shifted from planting a single line of trees to a “mosaic” approach. Why?', options: ['Local farmers protecting trees and land worked better than mass planting', 'Trees planted in a line were too expensive to water and most of them died in a few years', 'The wall was finished early', 'The Sahara stopped growing'], answer: 0,
              explain: 'Farmer-managed natural regeneration, water harvesting and community land use have restored far more land than planting in a straight line.' },
            { type: 'mcq', q: 'The Sahara has huge potential for solar power. What is the main challenge in using it?', options: ['Long power lines and building costs', 'There is not enough sunshine in the desert for most of the year', 'Solar panels do not work in heat', 'Nobody needs electricity in Africa'], answer: 0,
              explain: 'Dust, cooling, investment and long power lines are all challenges, though plants like Noor Ouarzazate in Morocco show what is possible.' }
          ]
        }
      }
    ]
  };
})();
