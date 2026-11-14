/* Travel the Wright Way — destination: Russia (Siberia: the taiga, an extreme continental climate, Lake Baikal, the Trans-Siberian Railway and Siberian culture).
 * Climate data: Irkutsk, long-term averages (weatherandclimate.eu, WMO station 30710).
 * Facts: the taiga (boreal forest) is the largest land biome; Russia holds about a fifth of the world's forests; larch, which drops its needles in winter, dominates eastern Siberia;
 *   taiga soils are thin, acidic podzols with a bleached, leached layer and sometimes an iron pan;
 *   Lake Baikal is the world's deepest lake (about 1,642 m) and oldest (over 25 million years), holds around a fifth of the world's unfrozen fresh surface water, lies in a rift valley,
 *   and is home to the nerpa, a seal found nowhere else; it became a UNESCO World Heritage Site in 1996; the Baikalsk pulp and paper mill closed in 2013;
 *   the Trans-Siberian Railway runs about 9,289 km from Moscow to Vladivostok, the longest railway line in the world;
 *   the Buryat people, who live around Baikal, follow Buddhism and shamanic traditions.
 */
(function () {
  var TAIGA_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A conifer tree with snow on its branches above a soil profile showing needle litter, a bleached leached layer, an iron pan, subsoil and bedrock">' +
  '<rect width="600" height="200" fill="#dbe9f4"/>' +
  // background conifers
  '<g fill="#5f7f68" opacity=".55"><path d="M20 200 l18 -70 l18 70 Z"/><path d="M60 200 l14 -54 l14 54 Z"/><path d="M420 200 l16 -64 l16 64 Z"/><path d="M470 200 l20 -80 l20 80 Z"/><path d="M530 200 l14 -56 l14 56 Z"/></g>' +
  // main conifer
  '<rect x="244" y="150" width="12" height="52" fill="#6b4a2b"/>' +
  '<g fill="#1f4d2b"><path d="M250 26 L290 90 L210 90 Z"/><path d="M250 60 L304 130 L196 130 Z"/><path d="M250 96 L318 168 L182 168 Z"/></g>' +
  '<g fill="#fff"><path d="M236 50 L250 28 L264 50 L256 46 L244 46 Z"/><path d="M226 86 L240 70 L250 82 L262 70 L276 86 Z" opacity=".9"/><path d="M290 160 L300 150 L312 162 Z"/><path d="M190 162 L202 150 L212 160 Z"/></g>' +
  // soil horizons
  '<rect y="200" width="600" height="24" fill="#3b2a1e"/>' +
  '<g stroke="#6b8f4a" stroke-width="2">' + (function () { var g = ''; for (var i = 0; i < 60; i++) { var x = 4 + i * 10; g += '<line x1="' + x + '" y1="' + (204 + i % 3 * 5) + '" x2="' + (x + 6) + '" y2="' + (206 + i % 3 * 5) + '"/>'; } return g; })() + '</g>' +
  '<rect y="224" width="600" height="22" fill="#4a4038"/>' +
  '<rect y="246" width="600" height="50" fill="#c9c4bb"/>' +
  '<rect y="296" width="600" height="10" fill="#9a4a1a"/>' +
  '<rect y="306" width="600" height="44" fill="#b8763a"/>' +
  '<rect y="350" width="600" height="36" fill="#a89a86"/><g fill="#7d7264">' + (function () { var g = ''; for (var i = 0; i < 16; i++) g += '<ellipse cx="' + (20 + i * 38) + '" cy="' + (362 + (i % 3) * 8) + '" rx="12" ry="6"/>'; return g; })() + '</g>' +
  '<rect y="386" width="600" height="34" fill="#6b6f78"/>' +
  // shallow roots
  '<g stroke="#6b4a2b" stroke-width="3" fill="none"><path d="M250 202 C 230 214, 200 220, 170 226"/><path d="M250 202 C 270 214, 300 220, 330 228"/><path d="M250 202 L248 238"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="432" y1="52" x2="268" y2="76"/><line x1="156" y1="126" x2="204" y2="126"/><line x1="432" y1="144" x2="306" y2="156"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.russia = {
    id: 'russia',
    name: 'Siberia',
    short: 'Siberia',
    country: 'Russia',
    gateway: 'Irkutsk',
    lonlat: [104.3, 52.3],
    locator: { box: [96, 113, 49, 58.5], rivers: [[[104.85, 51.87], [104.3, 52.29], [103.6, 53.0], [102.6, 54.0], [101.6, 56.15], [101.0, 57.6]]], lakes: [[[103.9, 51.62], [104.6, 51.5], [105.8, 51.9], [106.6, 52.6], [107.5, 53.3], [108.4, 54.2], [109.5, 55.3], [109.9, 55.8], [109.5, 55.9], [108.8, 55.2], [107.9, 54.5], [107.0, 53.9], [106.2, 53.2], [105.3, 52.5], [104.5, 51.9]]], places: [['Irkutsk', 104.3, 52.29, 'l'], ['Ulan-Ude', 107.6, 51.83, 'r'], ['Bratsk', 101.6, 56.15, 'l'], ['Lake Baikal', 109.4, 53.6, 'a'], ['MONGOLIA', 104.5, 49.9, 'a']] },
    stamp: { colour: '#7f1d1d', icon: '🌲' },
    transport: { name: 'Trans-Siberian train', verb: 'Ride', emoji: '🚂' },
    scene: 'taiga',
    photo: { file: 'Tran-Siberian Railway.jpg', alt: 'A long train on the Trans-Siberian Railway near Irkutsk, with forested hills behind', author: 'miketnorton', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: 'Добро пожаловать! Welcome to Irkutsk in Siberia. Board the Trans-Siberian, the longest railway in the world, and travel through endless forest to Lake Baikal, the deepest lake on Earth.',
      adv: 'From Irkutsk you ride the Trans-Siberian Railway. This expedition covers the taiga ecosystem and its soils, an extreme continental climate, the rift lake of Baikal, threats to the boreal forest, and the peoples of Siberia.'
    },
    facts: ['The taiga is the largest land biome on Earth.', 'Lake Baikal is about 1,642 m deep, the deepest lake in the world.', 'The Trans-Siberian Railway runs about 9,300 km from Moscow to Vladivostok.'],
    climate: {
      place: 'Irkutsk, Russia', source: 'Long-term averages (WMO station)', lat: '52°N', rmax: 120, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-17.6, -14.1, -5.5, 3.6, 10.4, 16.4, 19.0, 16.4, 9.5, 2.0, -7.6, -15.4],
      rain: [14, 9, 12, 21, 36, 69, 106, 96, 53, 21, 20, 19]
    },
    diagrams: { taiga: TAIGA_SVG },
    stations: [
      {
        id: 'taiga', title: 'The great northern forest', icon: '🌲',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'taiga', prompt: 'Label the taiga tree and its soil.',
              spots: [{ x: 84, y: 12, a: 'Needle leaves' }, { x: 14, y: 30, a: 'Cone shape' }, { x: 84, y: 34, a: 'Snow' }, { x: 84, y: 54, a: 'Needle litter' }, { x: 16, y: 65, a: 'Thin, acidic soil' }, { x: 50, y: 95, a: 'Bedrock' }],
              extra: [],
              explain: 'The cone shape lets heavy snow slide off. Fallen needles rot slowly in the cold, making a thin, acidic soil.' },
            { type: 'mcq', q: 'Most taiga trees keep their needles all winter. Why is this useful?', options: ['They can photosynthesise as soon as it warms', 'Needles keep animals away', 'Needles are heavier, so trees do not blow over', 'It stops snow falling on the ground'], answer: 0,
              explain: 'Summers are short, so evergreen trees do not waste time growing new leaves each spring.' },
            { type: 'mcq', q: 'Which is the largest biome on land?', options: ['Taiga', 'Tropical rainforest', 'Hot desert', 'Coral reef'], answer: 0,
              explain: 'The taiga stretches across Russia, Scandinavia, Canada and Alaska. Russia alone has about a fifth of the world’s forests.' }
          ],
          adv: [
            { type: 'label', diagram: 'taiga', prompt: 'Label the tree adaptations and podzol horizons. One label does not belong.',
              spots: [{ x: 84, y: 12, a: 'Waxy needles' }, { x: 14, y: 30, a: 'Conical shape' }, { x: 84, y: 34, a: 'Snow sliding off' }, { x: 84, y: 54, a: 'O horizon (litter)' }, { x: 16, y: 65, a: 'Leached E horizon' }, { x: 84, y: 73, a: 'Iron pan' }, { x: 50, y: 95, a: 'Bedrock' }],
              extra: ['Buttress roots'],
              explain: 'Buttress roots support rainforest trees. In a podzol, acidic water leaches minerals out of the E horizon, leaving it ash-grey, and deposits iron lower down as a hard pan.' },
            { type: 'mcq', q: 'Larch, the most common tree in eastern Siberia, drops its needles in winter. How does this help it survive?', options: ['It loses less water when the ground is frozen', 'It lets more snow reach the roots to warm them', 'It feeds reindeer', 'It grows faster in the polar night'], answer: 0,
              explain: 'When water is locked up as ice, trees cannot replace water lost through leaves. Larch survives some of the coldest winters on Earth.' },
            { type: 'mcq', q: 'Why does the taiga have low biodiversity compared with a rainforest?', options: ['Long, cold winters and a short summer', 'Too much rainfall', 'Soils that are far too rich in nutrients for most plants to cope', 'Too much sunlight in winter'], answer: 0,
              explain: 'Only a few tree species, such as larch, pine, spruce and fir, can cope, so ecosystems are simple.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Extreme seasons', icon: '🥶',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the coldest month in Irkutsk?', options: ['January', 'July', 'April', 'October'], answer: 0,
              explain: 'January averages about −18°C, and nights often fall below −30°C.' },
            { type: 'mcq', graph: true, q: 'When does most of Irkutsk’s rain fall?', options: ['In summer', 'In winter', 'Evenly through the year', 'In spring'], answer: 0,
              explain: 'June, July and August have the tallest bars. Winters are cold and dry.' },
            { type: 'mcq', q: 'Siberia is very far from the sea. How does this affect its climate?', options: ['Big differences between summer and winter', 'Mild winters and cool summers, because the land keeps the heat in', 'Rain every day', 'The same temperature all year'], answer: 0,
              explain: 'Land heats up and cools down much faster than the sea. Places far from the coast have an extreme, continental climate.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Irkutsk (°C).', answer: 36.6, tol: 0.2, unit: '°C',
              explain: 'July (19.0°C) minus January (−17.6°C) = 36.6°C, nearly triple York’s range.' },
            { type: 'number', graph: true, q: 'What percentage of Irkutsk’s yearly precipitation falls in June, July and August? Give a whole number.', answer: 57, tol: 1, unit: '%',
              explain: 'June to August = 271 mm out of 476 mm, which is about 57%.' },
            { type: 'mcq', q: 'In winter a huge area of high pressure sits over Siberia. What weather does it bring?', options: ['Clear skies, very cold and dry', 'Heavy snowstorms almost every day, with strong winds from the Arctic', 'Warm, wet winds', 'Tropical storms'], answer: 0,
              explain: 'The Siberian High is the strongest high-pressure system on Earth. Clear skies let heat escape, so temperatures plunge.' }
          ]
        }
      },
      {
        id: 'baikal', title: 'Lake Baikal', icon: '🦭',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Lake Baikal holds more fresh water than any other lake. About how much of the world’s unfrozen fresh surface water is in it?', options: ['About a fifth', 'About a hundredth', 'About half', 'All of it'], answer: 0,
              explain: 'Baikal is so deep that it holds more water than all five North American Great Lakes combined.' },
            { type: 'mcq', q: 'The nerpa lives in Lake Baikal and nowhere else in the world. What is it?', options: ['A freshwater seal', 'A type of shark', 'A giant turtle', 'A fish that lives in hot springs'], answer: 0,
              explain: 'Species found only in one place are called endemic. Most of Baikal’s animal species are found nowhere else.' },
            { type: 'mcq', q: 'In winter Lake Baikal freezes over. How do people use it?', options: ['Trucks and cars drive across the ice', 'They swim in it', 'They grow rice on it', 'They sail big ships across it all winter'], answer: 0,
              explain: 'The ice can be over a metre thick. Ice roads link villages, and people fish through holes in the ice.' }
          ],
          adv: [
            { type: 'mcq', q: 'How did Lake Baikal become so deep?', options: ['It fills a rift where the crust is splitting', 'A meteorite made a crater', 'A glacier carved it out', 'A huge volcano collapsed after an eruption, leaving a deep crater'], answer: 0,
              explain: 'Baikal is over 25 million years old, the oldest lake on Earth, and the rift is still slowly widening.' },
            { type: 'mcq', q: 'The Baikalsk pulp and paper mill, which polluted the lake, closed in 2013. Why was Baikal given extra protection?', options: ['It is a UNESCO World Heritage Site', 'It is a military zone', 'It is privately owned', 'Its water is too salty to drink, so it must be kept separate'], answer: 0,
              explain: 'Baikal was listed in 1996 for its unique wildlife and huge store of fresh water. Sewage from growing tourism is a newer worry.' },
            { type: 'mcq', q: 'Why might tourism be a threat as well as an opportunity for Lake Baikal?', options: ['More sewage reaching a very clean lake', 'Tourists drink too much of the water', 'It brings no money to the area', 'Visitors make the lake warmer by swimming'], answer: 0,
              explain: 'Untreated waste feeds algae that have damaged the lake’s native sponges along some shores.' }
          ]
        }
      },
      {
        id: 'people', title: 'Trains, timber and traditions', icon: '🚂',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'The Trans-Siberian Railway is the longest in the world. Which two cities does it link?', options: ['Moscow and Vladivostok', 'London and Paris', 'Beijing and Bangkok', 'Moscow and St Petersburg'], answer: 0,
              explain: 'The journey of about 9,300 km takes around a week without stopping.' },
            { type: 'mcq', q: 'Culture: the Buryat people live around Lake Baikal. Which religion do many Buryats follow?', options: ['Buddhism', 'Hinduism', 'Sikhism', 'Shinto, which comes from Japan'], answer: 0,
              explain: 'Buryat culture is closely linked to Mongolia. Buddhist temples called datsans are found near Baikal, alongside shamanic traditions.' },
            { type: 'mcq', q: 'Culture: what is a matryoshka?', options: ['A set of nesting wooden dolls', 'A fur hat', 'A type of soup', 'A sled pulled by horses across the snow'], answer: 0,
              explain: 'Matryoshka dolls are a famous Russian folk art, usually painted with bright patterns.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these threats to the Siberian taiga.', bins: ['Human', 'Natural or climate-driven'],
              items: [['Illegal logging for export', 0], ['Oil and gas pipelines', 0], ['Mining and new roads', 0], ['Hotter, drier summers fuelling wildfires', 1], ['Insect outbreaks in warmer winters', 1], ['Thawing permafrost', 1]],
              explain: 'Many threats interact: warming increases fires and pests, and roads make illegal logging easier.' },
            { type: 'mcq', q: 'Why is the boreal forest important for the global climate?', options: ['Its trees and soils store lots of carbon', 'It produces most of the world’s oil and gas from the remains of its trees', 'It reflects more sunlight than ice', 'It creates the jet stream'], answer: 0,
              explain: 'Much of the carbon is in cold soils and peat. Big wildfires release it back into the atmosphere.' },
            { type: 'mcq', q: 'Why does most of Siberia’s population live close to the Trans-Siberian Railway?', options: ['Transport and trade follow the line', 'It is the only place with fresh water', 'The forest is too cold for houses elsewhere', 'People are not allowed to live anywhere else'], answer: 0,
              explain: 'Cities such as Novosibirsk, Krasnoyarsk and Irkutsk grew along the line. Much of Siberia away from it is almost empty.' }
          ]
        }
      }
    ]
  };
})();
