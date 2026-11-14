/* Travel the Wright Way — destination: Rio de Janeiro, Brazil (urban growth, favelas and inequality, landslides on steep slopes, favela upgrading, a tropical climate and Brazilian culture).
 * Climate data: Rio de Janeiro, 1991–2020 averages (climatestotravel.com).
 * Facts: Rio grew rapidly in the 20th century through rural–urban migration, much of it from Brazil's poorer north-east;
 *   about one in five people in the city lives in a favela (informal settlement), many on steep hillsides (morros); Rocinha is the largest favela;
 *   favelas often lack secure land rights, sewers and safe drainage, and heavy summer rain triggers deadly landslides (e.g. 2010 in Rio and Niterói, 2011 in the mountain region);
 *   the Favela-Bairro programme (from 1994) upgraded favelas with paved paths, drains, sewers and community buildings; self-help schemes give residents materials to improve their homes;
 *   Sugarloaf Mountain (Pão de Açúcar) is a granite dome about 396 m high, reached by cable car since 1912; the Tijuca Forest is one of the largest urban forests in the world;
 *   culture: Carnival with samba schools, football at the Maracanã stadium, Portuguese is the official language, feijoada (black bean stew).
 */
(function () {
  var HILL_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section across Rio de Janeiro: the Atlantic Ocean and a sandy beach, tall luxury apartment blocks on flat land behind it, a favela of small self-built houses climbing a steep hillside with a landslide scar and an open drain, and rainforest on the mountain top">' +
  '<rect width="600" height="420" fill="#d7ecf8"/>' +
  '<path d="M0 330 L120 330 L120 420 L0 420 Z" fill="#2f86c2"/>' +
  '<path d="M120 330 L190 322 L190 420 L120 420 Z" fill="#fde68a"/>' +
  '<path d="M190 322 L320 318 L560 80 L600 70 L600 420 L190 420 Z" fill="#a8916b"/>' +
  '<g fill="#e5e7eb" stroke="#64748b">' + (function () { var g = ''; var hs = [150, 190, 170, 130]; for (var i = 0; i < 4; i++) g += '<rect x="' + (196 + i * 30) + '" y="' + (320 - hs[i]) + '" width="26" height="' + hs[i] + '"/>'; return g; })() + '</g>' +
  '<g>' + (function () { var g = '', c = ['#f97316', '#facc15', '#60a5fa', '#f472b6', '#a3e635', '#e5e7eb']; for (var x = 330, n = 0; x <= 505; x += 15) { var top = 318 - (x - 320) * 0.99; for (var r = 0; r < 4; r++, n++) g += '<rect x="' + x + '" y="' + (top + 2 + r * 14) + '" width="13" height="11" fill="' + c[n % 6] + '" stroke="#78350f" stroke-width=".8"/>'; } return g; })() + '</g>' +
  '<path d="M430 200 L470 150 L492 160 L456 214 Z" fill="#8b5a2b"/>' +
  '<path d="M520 120 C 470 200, 420 250, 350 312" fill="none" stroke="#475569" stroke-width="3" stroke-dasharray="6 4"/>' +
  '<g fill="#2f6a2c">' + (function () { var g = ''; for (var i = 0; i < 6; i++) g += '<circle cx="' + (510 + i * 16) + '" cy="' + (100 - i * 4) + '" r="14"/>'; return g; })() + '</g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="60" y1="290" x2="60" y2="350"/><line x1="150" y1="380" x2="156" y2="334"/><line x1="200" y1="110" x2="236" y2="140"/><line x1="320" y1="140" x2="390" y2="250"/><line x1="520" y1="260" x2="462" y2="196"/><line x1="460" y1="40" x2="520" y2="88"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.brazil = {
    id: 'brazil',
    name: 'Rio de Janeiro',
    short: 'Rio',
    country: 'Brazil',
    gateway: 'Rio de Janeiro',
    lonlat: [-43.2, -22.9],
    locator: { box: [-49.5, -39.5, -25.2, -14.6], places: [['Rio de Janeiro', -43.2, -22.9, 'b'], ['São Paulo', -46.63, -23.55, 'l'], ['Brasília', -47.88, -15.79, 'r'], ['Belo Horizonte', -43.94, -19.92, 'r'], ['Atlantic Ocean', -41.5, -24.4, 'a'], ['BRAZIL', -45.5, -18.0, 'a']] },
    stamp: { colour: '#16a34a', icon: '🎭' },
    transport: { name: 'cable car', verb: 'Ride', emoji: '🚡' },
    scene: 'rio',
    photo: { file: 'Contrasts of Rio de Janeiro - Rocinha, Ipanema, and Mountains at Sunrise.jpg', alt: 'Thousands of small, tightly packed self-built houses covering a steep hillside, with tall apartment blocks along a beach and green mountains behind', author: 'Donatas Dabravolskas', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'Olá! Welcome to Rio de Janeiro in Brazil. Ride the cable car up Sugarloaf Mountain and look down on beaches, skyscrapers and favelas climbing the steep hills. Why do so many people live on slopes that can slide away in a storm?',
      adv: 'Explore Rio de Janeiro. This expedition covers rural–urban migration, favelas and inequality, landslide risk on steep slopes, favela upgrading schemes, a tropical wet-and-dry climate, and Brazilian culture.'
    },
    facts: ['About one in five people in Rio lives in a favela.', 'The Sugarloaf cable car first opened in 1912.', 'Rio’s Tijuca Forest is one of the biggest city forests in the world.'],
    climate: {
      place: 'Rio de Janeiro, Brazil', source: '1991–2020 averages (climatestotravel.com)', lat: '23°S', rmax: 150, rstep: 25,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [27.5, 27.8, 26.9, 25.7, 23.5, 22.8, 22.3, 22.5, 23.1, 24.2, 24.8, 26.5],
      rain: [135, 130, 135, 95, 70, 45, 40, 45, 55, 85, 100, 135]
    },
    diagrams: { hill: HILL_SVG },
    stations: [
      {
        id: 'favela', title: 'Life on the hillside', icon: '🏘️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'hill', prompt: 'Label this cross-section of Rio.',
              spots: [{ x: 10, y: 69 }, { x: 25, y: 90 }, { x: 33, y: 26 }, { x: 53, y: 33 }, { x: 87, y: 62 }, { x: 77, y: 10 }].map(function (s, i) { s.a = ['Atlantic Ocean', 'Beach', 'Tall apartments', 'Favela', 'Landslide', 'Rainforest'][i]; return s; }),
              extra: [],
              explain: 'Rich and poor areas sit side by side. Favelas cover the steep hills, where land was free because nobody else wanted to build there.' },
            { type: 'mcq', photo: true, q: 'Look at the photo. Where have the favela houses been built?', options: ['On a steep hillside', 'On a flat river delta', 'On floating rafts', 'In a desert'], answer: 0,
              explain: 'This is Rocinha, Rio’s largest favela, right next to wealthy beach areas.' },
            { type: 'mcq', q: 'Why did millions of people move to Rio from the countryside?', options: ['To look for jobs and better services', 'Because the countryside was too crowded', 'To escape the city’s cold weather', 'Because farms paid too much'], answer: 0,
              explain: 'This is rural–urban migration. Many came from Brazil’s poorer north-east.' }
          ],
          adv: [
            { type: 'label', diagram: 'hill', prompt: 'Label the cross-section. One label does not belong.',
              spots: [{ x: 10, y: 69 }, { x: 25, y: 90 }, { x: 33, y: 26 }, { x: 53, y: 33 }, { x: 87, y: 62 }, { x: 77, y: 10 }].map(function (s, i) { s.a = ['Atlantic Ocean', 'Ipanema beach', 'High-rise luxury flats', 'Self-built favela homes', 'Landslide scar', 'Tijuca Forest'][i]; return s; }),
              extra: ['Gated retirement village'],
              explain: 'Steep slopes, heavy rain and removed vegetation make the favela hillsides at high risk of landslides.' },
            { type: 'mcq', photo: true, q: 'Study the photo. What does it show about Rio?', options: ['Rich and poor areas are very close together', 'Everyone lives in exactly the same type of housing', 'The city has no high-rise buildings', 'Nobody lives on the hills'], answer: 0,
              explain: 'Rocinha overlooks some of the most expensive apartments in Brazil. This is extreme inequality.' },
            { type: 'sort', q: 'Classify these as push or pull factors for migrants who moved to Rio.', bins: ['Push (from the countryside)', 'Pull (to the city)'],
              items: [['Droughts in the north-east', 0], ['Farm machines replacing workers', 0], ['Few schools or hospitals', 0], ['Jobs in factories and services', 1], ['Better schools and health care', 1], ['Family and friends already there', 1]],
              explain: 'Push factors drive people away. Pull factors attract them to the city.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Tropical storms', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which months are the wettest in Rio?', options: ['December to March', 'June to August', 'April and May', 'September and October'], answer: 0,
              explain: 'Rio is in the Southern Hemisphere, so December to March is summer.' },
            { type: 'mcq', graph: true, q: 'What is the coolest month?', options: ['July', 'January', 'March', 'December'], answer: 0,
              explain: 'July averages about 22°C, which is still warm. Winter in Rio is mild and drier.' },
            { type: 'mcq', graph: true, q: 'How hot is Rio in February?', options: ['About 28°C', 'About 10°C', 'About 0°C', 'About 40°C'], answer: 0,
              explain: 'Summer is hot and humid, with heavy afternoon thunderstorms.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Rio (mm).', answer: 1070, tol: 5, unit: 'mm',
              explain: 'Adding the twelve months gives 1,070 mm.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly rain falls from December to March? Give a whole number.', answer: 50, tol: 1, unit: '%',
              explain: 'December to March = 535 mm out of 1,070 mm, which is 50%.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 5.5, tol: 0.2, unit: '°C',
              explain: 'February 27.8°C − July 22.3°C = 5.5°C. A small range is typical of places near the tropics and the sea.' }
          ]
        }
      },
      {
        id: 'risk', title: 'Landslides and upgrading', icon: '⛰️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Why are landslides common in Rio’s favelas?', options: ['Heavy rain soaks steep slopes cleared of trees', 'Earthquakes shake Rio every week', 'Snow melts quickly on the hills', 'The sea washes the hills away'], answer: 0,
              explain: 'Water makes the soil heavy and slippery. Without tree roots to hold it, the slope can collapse.' },
            { type: 'mcq', q: 'Which service is often missing in favelas?', options: ['Proper sewers and drains', 'A mobile phone signal of any kind', 'Shops and cafés', 'Football pitches'], answer: 0,
              explain: 'Open drains carry waste down the slopes, which can spread disease.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is São Paulo from Rio?', options: ['West', 'East', 'North', 'South'], answer: 0,
              explain: 'São Paulo, Brazil’s biggest city, is about 360 km west of Rio.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these ways of improving favelas.', bins: ['Top-down (government)', 'Bottom-up (residents)'],
              items: [['Favela-Bairro: paving paths and adding sewers', 0], ['Building cable cars to connect hillsides', 0], ['Police units to reduce gang crime', 0], ['Residents’ associations running projects', 1], ['Self-help: families extending their homes', 1], ['Community clean-up and recycling groups', 1]],
              explain: 'The most successful schemes involve residents in planning, rather than just moving them out.' },
            { type: 'mcq', q: 'Why might giving residents legal ownership of their homes help improve favelas?', options: ['They are more willing to invest in improvements', 'It makes the hillsides less steep', 'It stops all rain from falling', 'It forces everyone to leave the city'], answer: 0,
              explain: 'Secure tenure encourages families to build with brick and concrete and to add proper connections.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Rio to Brasília, the capital.', options: ['About 930 km', 'About 90 km', 'About 3,000 km', 'About 9,000 km'], answer: 0,
              explain: 'Brasília is about 930 km north-west. It was built inland in 1960 partly to draw people away from the crowded coast.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Samba and football', icon: '⚽',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: what language is spoken in Brazil?', options: ['Portuguese', 'Spanish', 'French', 'Italian'], answer: 0,
              explain: 'Brazil was a Portuguese colony. Most of its neighbours speak Spanish.' },
            { type: 'mcq', q: 'Culture: Rio’s famous festival before Lent, with samba parades, is called what?', options: ['Carnival', 'Diwali', 'Hanami', 'Oktoberfest'], answer: 0,
              explain: 'Samba schools, many based in favelas, practise all year for the parade.' },
            { type: 'mcq', q: 'Culture: what is the Maracanã in Rio?', options: ['A famous football stadium', 'A type of tropical fruit sold at markets', 'A mountain', 'A dance'], answer: 0,
              explain: 'It has hosted two World Cup finals, in 1950 and 2014.' }
          ],
          adv: [
            { type: 'mcq', q: 'Culture: what is feijoada, often called Brazil’s national dish?', options: ['A black bean and pork stew', 'A sweet coconut cake eaten at Carnival', 'A grilled fish dish', 'A type of flatbread'], answer: 0,
              explain: 'It is traditionally eaten on Saturdays with rice, greens and orange slices.' },
            { type: 'mcq', q: 'Sugarloaf Mountain is a huge dome of bare rock. What type of rock is it?', options: ['Granite', 'Chalk', 'Sandstone', 'Coal'], answer: 0,
              explain: 'This hard rock has resisted erosion, so it stands high above the softer land around it.' },
            { type: 'mcq', q: 'Many favela residents work in the informal economy. What does this mean?', options: ['Jobs that are not officially registered or taxed', 'Jobs only in government offices', 'Jobs that are always well paid', 'Jobs only in large factories'], answer: 0,
              explain: 'Examples include street selling and moto-taxis. These jobs have no sick pay or pensions.' }
          ]
        }
      }
    ]
  };
})();
