/* Travel the Wright Way — destination: Finland (a lake landscape shaped by ice sheets, eskers and post-glacial rebound, boreal forest and forestry, a cold continental climate, the Saimaa ringed seal, and Finnish culture).
 * Climate data: Helsinki, 1991–2020 averages (climatestotravel.com).
 * Facts: Finland has around 188,000 lakes, many in hollows scoured by ice sheets and dammed by glacial deposits; eskers are long ridges of sand and gravel left by meltwater rivers under the ice;
 *   in Lake Pielinen, chains of islands are formed by an esker; the land is still slowly rising after the weight of the ice sheet was removed (post-glacial rebound), most along the Gulf of Bothnia;
 *   about three-quarters of Finland is forest (mainly pine, spruce and birch), the highest share in Europe, supporting a large paper, pulp and timber industry;
 *   the Saimaa ringed seal is an endangered freshwater seal found only in Lake Saimaa; Finland has repeatedly been ranked the world's happiest country in the World Happiness Report;
 *   culture: the sauna is a central part of Finnish life (UNESCO-listed tradition) and there are millions of saunas; Finnish is not related to Swedish or Russian; the Moomins were created by Tove Jansson; Rovaniemi is on the Arctic Circle.
 */
(function () {
  var LAKES_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a Finnish lake landscape: two lakes in rock hollows separated by a long ridge of sand and gravel with a road on top, pine and spruce forest, a lakeside sauna cabin, a flat peat bog, and a smooth bare rock hill polished by ice">' +
  '<rect width="600" height="420" fill="#e0ecf6"/>' +
  '<path d="M0 420 L0 250 L40 252 L220 260 L240 230 L262 206 L286 230 L300 260 L470 262 L560 262 L570 210 L600 170 L600 420 Z" fill="#9c8f7a"/>' +
  '<path d="M40 262 Q 130 340 220 262 Z" fill="#3b82c4"/><path d="M300 264 Q 385 330 470 264 Z" fill="#3b82c4"/>' +
  '<path d="M226 240 L262 210 L298 240" fill="none" stroke="#d6c08a" stroke-width="10"/><path d="M244 214 L280 214" stroke="#475569" stroke-width="3"/>' +
  '<path d="M470 262 L560 262 L560 254 L470 256 Z" fill="#6b5b3a"/><g fill="#a3b86c">' + (function () { var g = ''; for (var i = 0; i < 8; i++) g += '<circle cx="' + (476 + i * 11) + '" cy="255" r="3"/>'; return g; })() + '</g>' +
  '<path d="M560 262 L570 210 L600 170 L600 262 Z" fill="#b8b2a6"/><path d="M566 230 Q 584 196 600 186" fill="none" stroke="#e7e5e4" stroke-width="2"/>' +
  '<g fill="#1f4d2b">' + (function () { var g = '', xs = [0, 12, 24, 230, 290, 300, 320, 520]; for (var i = 0; i < xs.length; i++) { var y = xs[i] < 40 ? 250 : xs[i] < 300 ? 236 : 260; g += '<path d="M' + xs[i] + ' ' + y + ' l8 -28 l8 28 Z"/>'; } return g; })() + '</g>' +
  '<g><rect x="438" y="240" width="26" height="18" fill="#a16207" stroke="#713f12"/><path d="M434 242 L451 230 L468 242 Z" fill="#7c2d12"/><rect x="456" y="226" width="4" height="10" fill="#475569"/></g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="262" y1="140" x2="262" y2="210"/><line x1="130" y1="380" x2="130" y2="300"/><line x1="70" y1="160" x2="20" y2="230"/><line x1="528" y1="110" x2="584" y2="196"/><line x1="500" y1="350" x2="510" y2="258"/><line x1="380" y1="170" x2="448" y2="234"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.finland = {
    id: 'finland',
    name: 'Finland',
    short: 'Finland',
    country: 'Finland',
    gateway: 'Helsinki',
    lonlat: [24.94, 60.17],
    locator: { box: [19.5, 32.0, 59.4, 67.4], places: [['Helsinki', 24.94, 60.17, 'r'], ['Tampere', 23.76, 61.5, 'l'], ['Savonlinna', 28.88, 61.87, 'b'], ['Koli', 29.9, 63.06, 'l'], ['Rovaniemi', 25.73, 66.5, 'r'], ['Gulf of Bothnia', 21.2, 63.4, 'a'], ['RUSSIA', 31.0, 65.0, 'a'], ['LAKELAND', 27.2, 62.4, 'a']] },
    stamp: { colour: '#0369a1', icon: '🌲' },
    transport: { name: 'lake steamer', verb: 'Sail', emoji: '🚢' },
    scene: 'lakeland',
    photo: { file: 'Koli rotated.jpg', alt: 'View from a forested hilltop over a huge lake dotted with long, narrow wooded islands, with forest stretching to the horizon', author: 'Lobke Thijssen', licence: 'CC BY-SA 2.5', licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.5/' },
    intro: {
      ks3: 'Moi! Welcome to Finland, the land of a thousand lakes. In fact there are about 188,000! Sail an old lake steamer between forested islands, warm up in a lakeside sauna, and find out how a giant ice sheet shaped this landscape.',
      adv: 'Sail through the Finnish Lakeland. This expedition covers glacial erosion and deposition, eskers and post-glacial rebound, a cold continental climate, boreal forest and the forestry industry, protecting the Saimaa ringed seal, and Finnish culture.'
    },
    facts: ['Finland has about 188,000 lakes.', 'About three-quarters of Finland is covered in forest.', 'Finland has been ranked the world’s happiest country many times.'],
    climate: {
      place: 'Helsinki, Finland', source: '1991–2020 averages (climatestotravel.com)', lat: '60°N', rmax: 100, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-3.8, -4.3, -1.0, 4.5, 10.4, 14.9, 18.0, 16.7, 12.0, 6.2, 1.8, -1.3],
      rain: [60, 45, 35, 35, 35, 60, 55, 80, 55, 75, 75, 65]
    },
    diagrams: { lakes: LAKES_SVG },
    stations: [
      {
        id: 'lakes', title: 'Land of lakes', icon: '🏞️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'lakes', prompt: 'Label this Finnish lake landscape.',
              spots: [{ x: 44, y: 33 }, { x: 22, y: 90 }, { x: 12, y: 38 }, { x: 88, y: 26 }, { x: 83, y: 83 }, { x: 63, y: 40 }].map(function (s, i) { s.a = ['Long ridge', 'Lake', 'Pine forest', 'Bare polished rock', 'Bog', 'Sauna'][i]; return s; }),
              extra: [],
              explain: 'An ice sheet scraped out hollows that filled with water. Meltwater left long ridges of sand and gravel between the lakes.' },
            { type: 'mcq', photo: true, q: 'Look at the photo from Koli. What covers most of the land around the lake?', options: ['Forest', 'Desert', 'Rice fields', 'Ice and snow all year'], answer: 0,
              explain: 'About three-quarters of Finland is forest, mostly pine, spruce and birch.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Rovaniemi from Helsinki?', options: ['North', 'South', 'East', 'West'], answer: 0,
              explain: 'Rovaniemi is about 700 km north, right on the Arctic Circle.' }
          ],
          adv: [
            { type: 'label', diagram: 'lakes', prompt: 'Label the glacial landscape. One label does not belong.',
              spots: [{ x: 44, y: 33 }, { x: 22, y: 90 }, { x: 12, y: 38 }, { x: 88, y: 26 }, { x: 83, y: 83 }, { x: 63, y: 40 }].map(function (s, i) { s.a = ['Esker (meltwater sand and gravel)', 'Lake in a glacially scoured hollow', 'Boreal (taiga) forest', 'Ice-polished bedrock', 'Peat bog', 'Lakeside cottage and sauna'][i]; return s; }),
              extra: ['Volcanic crater lake'],
              explain: 'Eskers form from rivers flowing in tunnels under the ice. Many Finnish roads run along their flat, dry tops.' },
            { type: 'mcq', photo: true, q: 'Study the photo. Long, narrow chains of islands run across Lake Pielinen. How did they form?', options: ['They are parts of an esker left by meltwater under the ice', 'They are coral reefs', 'They are lava flows from volcanoes', 'They were built by people as bridges'], answer: 0,
              explain: 'The highest parts of the esker stick out above the water as islands.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Helsinki to Koli.', options: ['About 415 km', 'About 40 km', 'About 1,500 km', 'About 4,000 km'], answer: 0,
              explain: 'Koli is about 415 km north-east, in North Karelia near the Russian border.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Frozen winters, bright summers', icon: '❄️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the warmest month in Helsinki?', options: ['July', 'January', 'October', 'March'], answer: 0,
              explain: 'July averages about 18°C, with almost 19 hours of daylight around midsummer.' },
            { type: 'mcq', graph: true, q: 'Which is the coldest month?', options: ['February', 'July', 'May', 'September'], answer: 0,
              explain: 'February averages about −4°C. The sea near Helsinki often freezes.' },
            { type: 'mcq', graph: true, q: 'Which month gets the most rain?', options: ['August', 'March', 'April', 'May'], answer: 0,
              explain: 'August has about 80 mm, from summer showers and thunderstorms.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Helsinki (°C).', answer: 22.3, tol: 0.2, unit: '°C',
              explain: 'July 18.0°C − February −4.3°C = 22.3°C.' },
            { type: 'number', graph: true, q: 'Calculate the total annual precipitation (mm).', answer: 675, tol: 3, unit: 'mm',
              explain: 'Adding the twelve months gives 675 mm, much drier than Bergen in Norway.' },
            { type: 'mcq', q: 'Helsinki and Bergen are both about 60°N, but Helsinki has much colder winters. Why?', options: ['It is further from the warm Atlantic and more affected by cold air from Russia', 'It is much higher above sea level', 'It is closer to the North Pole', 'It has more rain clouds'], answer: 0,
              explain: 'Helsinki has a more continental climate, while Bergen is warmed by the North Atlantic Drift.' }
          ]
        }
      },
      {
        id: 'forest', title: 'Forests and seals', icon: '🌲',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Finland’s forests supply a big industry. What is a main product made from Finnish trees?', options: ['Paper and cardboard', 'Plastic bottles and bags', 'Steel', 'Glass'], answer: 0,
              explain: 'Finland is one of the world’s biggest exporters of paper, pulp and timber.' },
            { type: 'mcq', q: 'The Saimaa ringed seal is very rare. What is unusual about where it lives?', options: ['It lives only in a freshwater lake', 'It lives in a desert', 'It lives at the South Pole', 'It lives in the rivers of central Africa'], answer: 0,
              explain: 'It was trapped in Lake Saimaa when the land rose after the Ice Age.' },
            { type: 'mcq', q: 'Why do Finnish forest companies plant new trees after cutting?', options: ['To make the forest a sustainable resource', 'To stop all fishing', 'To make the winters colder', 'Because trees cannot grow back on their own'], answer: 0,
              explain: 'By law, forests must be regrown after felling.' }
          ],
          adv: [
            { type: 'mcq', q: 'Saimaa ringed seals give birth in snow dens on the ice. Why does climate change threaten them?', options: ['Warmer winters bring less snow to build safe dens', 'Much more snow buries the whole lake completely every year', 'The lake becomes too salty', 'Colder winters freeze the seals'], answer: 0,
              explain: 'Volunteers now build snow piles on the ice to help mothers make dens.' },
            { type: 'mcq', q: 'The land around the Gulf of Bothnia is rising by several millimetres a year. Why?', options: ['It is rebounding after the weight of the ice sheet was removed', 'Volcanoes are pushing it up', 'Sea level is falling worldwide', 'Rivers are depositing mud on it'], answer: 0,
              explain: 'This is post-glacial (isostatic) rebound. Old harbours are now inland.' },
            { type: 'sort', q: 'Classify these as benefits or problems of Finland’s forest industry.', bins: ['Benefit', 'Problem'],
              items: [['Jobs in rural areas', 0], ['Exports of paper and timber', 0], ['Wood replacing plastics and concrete', 0], ['Loss of old-growth habitats', 1], ['Clear-cutting changes landscapes', 1], ['Less carbon stored when forests are felled', 1]],
              explain: 'Finland must balance its economy with its climate targets and biodiversity.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Saunas and Moomins', icon: '🧖',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: what is a sauna?', options: ['A hot room for relaxing and bathing', 'A kind of reindeer found only in Lapland', 'A frozen lake', 'A type of boat'], answer: 0,
              explain: 'Many Finnish homes have one, and people often jump into a cold lake afterwards.' },
            { type: 'mcq', q: 'Culture: which famous characters were created by the Finnish author Tove Jansson?', options: ['The Moomins', 'Harry Potter', 'The Smurfs', 'Paddington Bear'], answer: 0,
              explain: 'The Moomins live in Moominvalley and are loved all over the world.' },
            { type: 'mcq', q: 'Culture: which town on the Arctic Circle is called the official hometown of Santa Claus?', options: ['Rovaniemi', 'Helsinki', 'Oslo', 'Reykjavik'], answer: 0,
              explain: 'Tourism brings visitors to Lapland for the snow, the northern lights and Santa.' }
          ],
          adv: [
            { type: 'mcq', q: 'Culture: the Finnish language is not related to Swedish or Russian. Which language is it closely related to?', options: ['Estonian', 'English', 'German', 'Polish'], answer: 0,
              explain: 'Finnish and Estonian are Finno-Ugric languages. Hungarian is a distant relative.' },
            { type: 'mcq', q: 'Finland has often been ranked the world’s happiest country. Which factor is most often given as a reason?', options: ['Trust, low corruption and strong public services', 'The warmest climate in Europe', 'It has the largest population of any country in Europe', 'The highest mountains in Europe'], answer: 0,
              explain: 'Free education, health care and access to nature are often mentioned too.' },
            { type: 'mcq', q: 'Most Finns live in the south, around Helsinki. Why is the north so thinly populated?', options: ['Long, cold winters and few jobs', 'It is covered by a huge sandy desert', 'It is too hot for farming', 'There are no roads at all'], answer: 0,
              explain: 'Lapland covers about a third of Finland but has only a few per cent of its people.' }
          ]
        }
      }
    ]
  };
})();
