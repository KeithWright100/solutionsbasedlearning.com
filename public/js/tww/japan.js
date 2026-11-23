/* Travel the Wright Way — destination: Japan (plate boundaries, earthquakes and tsunamis, Mount Fuji, a humid subtropical climate with typhoons, an ageing population and Japanese culture).
 * Climate data: Tokyo, 1991–2020 averages (climatestotravel.com).
 * Facts: Japan lies where several tectonic plates meet; the Pacific Plate subducts beneath Japan at the Japan Trench; Japan has about 10% of the world's active volcanoes;
 *   Mount Fuji (3,776 m) is a stratovolcano that last erupted in 1707; the 2011 Tōhoku earthquake (magnitude 9.0) caused a tsunami that killed about 18,000 people
 *   and led to the Fukushima nuclear disaster; buildings use base isolation and cross-bracing; Shinkansen trains stop automatically when earthquakes are detected;
 *   1 September is Disaster Prevention Day; Tokyo's wettest months are September and October, when typhoons and autumn rains arrive;
 *   about 29% of Japanese people are over 65; the population has been falling since about 2010;
 *   culture: hanami (cherry blossom viewing), bowing, taking shoes off indoors, onsen (hot springs, heated by volcanic activity), sushi.
 */
(function () {
  var PLATES_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a destructive plate boundary under Japan: the oceanic Pacific Plate moves west and sinks beneath the continental plate at a deep ocean trench, an earthquake focus where the plates grind, magma rising to a volcano on Japan, and a tsunami wave spreading across the ocean">' +
  '<rect width="600" height="420" fill="#e0f2fe"/>' +
  // ocean
  '<path d="M260 150 L600 150 L600 200 L330 200 L300 240 L280 200 L260 180 Z" fill="#3b82f6"/>' +
  // continental plate
  '<path d="M0 160 L120 150 L170 80 L200 150 L260 150 L260 180 L300 240 L250 290 L0 290 Z" fill="#a8916b"/>' +
  // oceanic plate
  '<path d="M600 200 L330 200 L300 240 L180 400 L250 420 L340 300 L380 260 L600 250 Z" fill="#475569"/>' +
  '<path d="M520 225 L460 225" stroke="#f8fafc" stroke-width="4" marker-end="url(#ar)"/>' +
  '<defs><marker id="ar" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#f8fafc"/></marker></defs>' +
  // magma
  '<path d="M240 330 C 220 280, 200 220, 180 120" fill="none" stroke="#ef4444" stroke-width="6" stroke-dasharray="10 6"/>' +
  '<path d="M160 80 L170 80 L180 80 L172 70 L166 70 Z" fill="#ef4444"/><path d="M168 66 C 160 50, 176 40, 168 26" fill="none" stroke="#94a3b8" stroke-width="5"/>' +
  // focus
  '<g transform="translate(300 260)"><path d="M0 -12 L4 -4 L12 -4 L6 2 L8 11 L0 6 L-8 11 L-6 2 L-12 -4 L-4 -4 Z" fill="#facc15" stroke="#92400e"/></g>' +
  // tsunami wave
  '<path d="M380 150 Q 400 120 420 150 Q 440 136 460 150" fill="none" stroke="#1e3a8a" stroke-width="4"/>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="200" y1="30" x2="172" y2="60"/><line x1="70" y1="230" x2="90" y2="230"/><line x1="530" y1="330" x2="470" y2="240"/><line x1="310" y1="370" x2="302" y2="272"/><line x1="370" y1="290" x2="300" y2="236"/><line x1="470" y1="90" x2="422" y2="138"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.japan = {
    id: 'japan',
    name: 'Japan',
    short: 'Japan',
    country: 'Japan',
    gateway: 'Tokyo',
    lonlat: [139.69, 35.69],
    locator: { box: [129.4, 146.2, 30.8, 45.6], places: [['Tokyo', 139.69, 35.69, 'r'], ['Mt Fuji', 138.73, 35.36, 'b'], ['Osaka', 135.5, 34.69, 'b'], ['Hiroshima', 132.46, 34.39, 'l'], ['Sendai', 140.87, 38.27, 'r'], ['Sapporo', 141.35, 43.06, 'r'], ['Pacific Ocean', 142.8, 33.0, 'a'], ['Sea of Japan', 134.8, 40.2, 'a']] },
    stamp: { colour: '#be123c', icon: '🗾' },
    transport: { name: 'bullet train', verb: 'Ride', emoji: '🚄' },
    scene: 'fuji',
    photo: { file: 'View of Mount Fuji from Hiroyama Park.jpg', alt: 'A tall, symmetrical snow-capped volcano rising behind a bay, with a small island and a headland in the foreground', author: 'Quercus acuta', licence: 'CC0 1.0', licenceUrl: 'https://creativecommons.org/publicdomain/zero/1.0/' },
    intro: {
      ks3: 'Konnichiwa! Welcome to Japan. Ride the bullet train past Mount Fuji, find out why Japan has so many earthquakes, and see how the country gets ready for the next big one.',
      adv: 'Ride the Shinkansen through Japan. This expedition covers destructive plate boundaries, earthquakes and the 2011 tsunami, Mount Fuji, reducing risk through building design and preparation, a humid subtropical climate with typhoons, an ageing and shrinking population, and Japanese culture.'
    },
    facts: ['Japan has about one in ten of the world’s active volcanoes.', 'Bullet trains stop automatically when an earthquake is detected.', 'More than one in four people in Japan are over 65.'],
    climate: {
      place: 'Tokyo, Japan', source: '1991–2020 averages (climatestotravel.com)', lat: '36°N', rmax: 250, rstep: 50,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [6.1, 6.7, 9.7, 14.7, 19.4, 22.6, 26.6, 27.9, 24.2, 18.7, 13.3, 8.4],
      rain: [60, 55, 115, 135, 140, 170, 155, 155, 225, 235, 95, 60]
    },
    diagrams: { plates: PLATES_SVG },
    stations: [
      {
        id: 'plates', title: 'Where plates collide', icon: '🌋',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'plates', prompt: 'Label what happens beneath Japan.',
              spots: [{ x: 33, y: 7 }, { x: 12, y: 55 }, { x: 88, y: 79 }, { x: 52, y: 88 }, { x: 62, y: 69 }, { x: 78, y: 21 }].map(function (s, i) { s.a = ['Volcano', 'Continental plate', 'Oceanic plate', 'Earthquake', 'Ocean trench', 'Tsunami'][i]; return s; }),
              extra: [],
              explain: 'The heavier oceanic plate sinks beneath Japan. Friction causes earthquakes, and melting rock rises to form volcanoes.' },
            { type: 'mcq', photo: true, q: 'Look at the photo of Mount Fuji. What type of landform is it?', options: ['A volcano', 'A glacier', 'A sand dune', 'A river delta'], answer: 0,
              explain: 'Mount Fuji is Japan’s highest mountain at 3,776 m. It last erupted in 1707.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Sapporo from Tokyo?', options: ['North', 'South', 'East', 'West'], answer: 0,
              explain: 'Sapporo, on the island of Hokkaido, is about 830 km north of Tokyo. It gets heavy winter snow.' }
          ],
          adv: [
            { type: 'label', diagram: 'plates', prompt: 'Label the destructive (convergent) plate boundary. One label does not belong.',
              spots: [{ x: 33, y: 7 }, { x: 12, y: 55 }, { x: 88, y: 79 }, { x: 52, y: 88 }, { x: 62, y: 69 }, { x: 78, y: 21 }].map(function (s, i) { s.a = ['Composite volcano', 'Less dense continental crust', 'Subducting Pacific Plate', 'Focus (hypocentre)', 'Japan Trench', 'Tsunami wave'][i]; return s; }),
              extra: ['Mid-ocean ridge'],
              explain: 'A mid-ocean ridge is found at constructive boundaries, where plates move apart, not where they collide.' },
            { type: 'mcq', photo: true, q: 'Study the photo of Mount Fuji. Why does it have steep sides and a cone shape?', options: ['Layers of sticky lava and ash built up over time', 'Runny lava spread out over a wide area', 'Glaciers carved it into a point', 'Rivers deposited sediment in layers'], answer: 0,
              explain: 'This makes it a composite volcano (stratovolcano), typical of destructive plate boundaries.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Tokyo to Hiroshima.', options: ['About 670 km', 'About 70 km', 'About 2,000 km', 'About 6,000 km'], answer: 0,
              explain: 'Hiroshima is about 670 km west of Tokyo. The Shinkansen covers it in about 4 hours.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Rainy seasons and typhoons', icon: '🌀',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Tokyo?', options: ['October', 'January', 'February', 'December'], answer: 0,
              explain: 'September and October bring autumn rains and typhoons.' },
            { type: 'mcq', graph: true, q: 'Which is the hottest month?', options: ['August', 'January', 'April', 'November'], answer: 0,
              explain: 'August averages about 28°C, and it feels hotter because the air is so humid.' },
            { type: 'mcq', graph: true, q: 'What is Tokyo’s winter like?', options: ['Cool and fairly dry', 'Freezing and snowy every day', 'Hot and very wet', 'Hot and dry'], answer: 0,
              explain: 'January averages about 6°C with plenty of sunshine.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Tokyo (°C).', answer: 21.8, tol: 0.2, unit: '°C',
              explain: 'August 27.9°C − January 6.1°C = 21.8°C.' },
            { type: 'number', graph: true, q: 'Total rainfall is 1,600 mm. What percentage falls in September and October? Give a whole number.', answer: 29, tol: 1, unit: '%',
              explain: 'September and October = 460 mm. 460 ÷ 1,600 × 100 ≈ 29%.' },
            { type: 'mcq', q: 'Why do typhoons hit Japan mainly in late summer and autumn?', options: ['Sea temperatures in the western Pacific are at their highest', 'Cold winds from Siberia are strongest', 'The sea is coldest at that time of year', 'Snow on the mountains melts quickly'], answer: 0,
              explain: 'Tropical storms need sea temperatures above about 26.5°C, which peak in August and September.' }
          ]
        }
      },
      {
        id: 'quake', title: 'Ready for the big one', icon: '🏢',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'In 2011 a huge earthquake under the sea caused a giant wave. What is this wave called?', options: ['A tsunami', 'A typhoon', 'A tornado', 'An avalanche'], answer: 0,
              explain: 'The tsunami reached up to 40 m high and killed about 18,000 people.' },
            { type: 'mcq', q: 'How do Japanese schools prepare for earthquakes?', options: ['Regular drills, so pupils know what to do', 'They close for the whole of summer', 'Pupils are told to run outside at the first shake', 'They do nothing at all'], answer: 0,
              explain: 'Pupils practise “drop, cover, hold on” under their desks. 1 September is Disaster Prevention Day.' },
            { type: 'mcq', q: 'What happens to bullet trains when an earthquake is detected?', options: ['They stop automatically', 'They speed up to escape', 'They carry on as normal', 'They switch to another track'], answer: 0,
              explain: 'Sensors detect the first, weaker shaking and send a warning before the strongest shaking arrives.' }
          ],
          adv: [
            { type: 'sort', q: 'Sort these into ways of reducing earthquake risk.', bins: ['Prediction and warning', 'Protection (building design)'],
              items: [['Seismometers along the coast', 0], ['Earthquake early-warning alerts on phones', 0], ['Tsunami warning sirens', 0], ['Rubber base isolators under buildings', 1], ['Cross-bracing in steel frames', 1], ['Tsunami sea walls', 1]],
              explain: 'Japan combines prediction, protection and preparation, yet the 2011 tsunami still overtopped many sea walls.' },
            { type: 'mcq', q: 'The 2011 tsunami damaged the Fukushima Daiichi power station. What type of power station was it?', options: ['Nuclear', 'Coal', 'Wind', 'Solar'], answer: 0,
              explain: 'Flooding cut the power to the cooling systems, so the reactors overheated and leaked radiation. More than 100,000 people were evacuated.' },
            { type: 'mcq', q: 'Japan is a high-income country, yet the 2011 disaster killed about 18,000 people. Which factor best explains this?', options: ['The tsunami was far bigger than defences were built for', 'Japan had no warning system at all', 'Buildings collapsed in the shaking', 'Nobody lived on the coast'], answer: 0,
              explain: 'Most deaths came from the tsunami, not the shaking. Many buildings survived the magnitude 9.0 earthquake.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Cherry blossom and an ageing nation', icon: '🌸',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: what is hanami?', options: ['Picnics under cherry blossom', 'A type of noodle soup eaten in winter', 'A martial art', 'A paper lantern'], answer: 0,
              explain: 'The blossom forecast is followed closely each spring as it moves north up the country.' },
            { type: 'mcq', q: 'Culture: what do people do when they enter a Japanese home?', options: ['Take their shoes off', 'Put on a hat', 'Ring a bell three times', 'Clap twice and shout'], answer: 0,
              explain: 'Slippers are often provided, and there are separate slippers for the bathroom.' },
            { type: 'mcq', q: 'Culture: onsen are popular across Japan. What are they?', options: ['Natural hot spring baths', 'Fast food restaurants at stations', 'Snow festivals', 'Bullet train stations'], answer: 0,
              explain: 'The water is heated by volcanic activity underground, one of the benefits of living on a plate boundary.' }
          ],
          adv: [
            { type: 'mcq', q: 'About 29% of Japan’s population is over 65. Which is a problem this causes?', options: ['Rising pension and health care costs', 'Too many new schools are needed', 'Very high youth unemployment', 'Rapid population growth in all big cities'], answer: 0,
              explain: 'There are fewer workers paying tax to support each retired person.' },
            { type: 'mcq', q: 'Which strategy is Japan using to cope with a shrinking workforce?', options: ['Using robots and allowing more foreign workers', 'Lowering the retirement age to 50 for everyone', 'Banning women from working', 'Closing all its factories'], answer: 0,
              explain: 'Japan is also encouraging older people to keep working and is developing care robots.' },
            { type: 'mcq', q: 'Culture: sushi often uses raw fish. Why has fish always been so important in Japan’s diet?', options: ['It is an island nation with rich fishing grounds', 'Japan has huge areas of flat grassland for cattle', 'It is too cold to grow rice', 'Religious laws ban all meat'], answer: 0,
              explain: 'Mountains cover about 70% of Japan, so flat farmland is scarce, while warm and cold currents meet offshore.' }
          ]
        }
      }
    ]
  };
})();
