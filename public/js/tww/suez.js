/* Travel the Wright Way — destination: the Suez Canal (global trade routes, chokepoints, the 2021 Ever Given blockage, a hot desert/Mediterranean coastal climate, invasive species and Egypt's canal economy).
 * Climate data: Port Said, 1991–2020 averages (climatestotravel.com).
 * Facts: the canal opened in 1869 and runs about 193 km from Port Said on the Mediterranean to Suez on the Red Sea; it has no locks because both seas are at about the same level;
 *   it passes through lakes including the Great Bitter Lake; around 12% of world trade passes through it; Egypt nationalised it in 1956;
 *   a second channel along part of the route opened in 2015; the 400 m container ship Ever Given blocked it for six days in March 2021;
 *   from late 2023 attacks on ships in the Red Sea led many shipping lines to sail around the Cape of Good Hope instead, adding about 10 days to Asia–Europe voyages;
 *   hundreds of Red Sea species have spread into the Mediterranean through the canal (Lessepsian migration); canal tolls are one of Egypt's biggest sources of foreign currency.
 */
(function () {
  var CANAL_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified map of the Suez Canal running north to south from Port Said on the Mediterranean Sea through lakes to Suez on the Gulf of Suez, with the Nile delta to the west and the Sinai Peninsula to the east">' +
  '<rect width="600" height="420" fill="#e9d6ab"/>' +
  '<path d="M0 0 L600 0 L600 70 C 500 80, 400 60, 320 74 C 220 90, 120 66, 0 80 Z" fill="#60a5fa"/>' +
  '<path d="M60 80 L140 76 L230 86 L210 200 L120 220 L40 170 Z" fill="#86b45f"/>' +
  '<path d="M180 120 C 150 160, 130 190, 110 230" fill="none" stroke="#3b82f6" stroke-width="3"/>' +
  '<path d="M300 74 L304 140 L300 180 L306 230 L304 300 L312 340" fill="none" stroke="#1d4ed8" stroke-width="7"/>' +
  '<ellipse cx="308" cy="250" rx="22" ry="14" fill="#3b82f6"/>' +
  '<path d="M312 340 L290 420 L380 420 L330 340 Z" fill="#60a5fa"/>' +
  '<g fill="#b91c1c"><circle cx="300" cy="78" r="6"/><circle cx="312" cy="342" r="6"/><circle cx="304" cy="180" r="5"/></g>' +
  '<g font-family="sans-serif" font-size="12" fill="#1e293b"><text x="316" y="186">Ismailia</text><text x="320" y="356">Suez</text></g>' +
  '<g fill="#b45309" opacity=".35"><path d="M330 90 L600 80 L600 420 L400 420 L340 330 L320 230 Z"/></g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="470" y1="30" x2="430" y2="66"/><line x1="200" y1="40" x2="290" y2="76"/><line x1="440" y1="200" x2="332" y2="250"/><line x1="160" y1="330" x2="304" y2="300"/><line x1="460" y1="370" x2="338" y2="390"/><line x1="90" y1="270" x2="130" y2="200"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.suez = {
    id: 'suez',
    name: 'Suez Canal',
    short: 'Suez',
    the: true,
    country: 'Egypt',
    gateway: 'Port Said',
    lonlat: [32.27, 30.6],
    locator: { box: [29.0, 35.6, 27.4, 32.3], places: [['Port Said', 32.3, 31.26, 'r'], ['Ismailia', 32.27, 30.6, 'r'], ['Suez', 32.55, 29.97, 'r'], ['Cairo', 31.24, 30.04, 'l'], ['Mediterranean Sea', 31.0, 31.9, 'a'], ['SINAI', 33.9, 29.6, 'a'], ['Red Sea', 34.6, 27.8, 'a']] },
    stamp: { colour: '#0369a1', icon: '🚢' },
    transport: { name: 'container ship', verb: 'Sail', emoji: '🚢' },
    scene: 'suez',
    photo: { file: 'Suez Canal traffic jam seen from space.jpg', alt: 'Two radar satellite images of the Suez Canal side by side: on the left, ships spaced out along the canal; on the right, a long ship wedged across the canal with a queue of ships waiting at each end', author: 'ESA (Copernicus Sentinel-1)', licence: 'CC BY-SA 3.0 IGO', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/igo/' },
    intro: {
      ks3: 'Ahlan! Welcome aboard a giant container ship entering the Suez Canal. This narrow channel through the desert links Europe and Asia. Find out why one stuck ship in 2021 caused chaos for shops around the world.',
      adv: 'Sail the Suez Canal. This expedition covers global trade routes and chokepoints, the 2021 Ever Given blockage, rerouting around the Cape of Good Hope, Port Said’s dry climate, invasive species, and the canal’s importance to Egypt’s economy.'
    },
    facts: ['The Suez Canal has no locks: both seas are at about the same level.', 'About 12% of world trade passes through the canal.', 'In 2021 one stuck ship blocked the canal for six days.'],
    climate: {
      place: 'Port Said, Egypt', source: '1991–2020 averages (climatestotravel.com)', lat: '31°N', rmax: 25, rstep: 5,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [15.0, 15.7, 17.4, 19.6, 22.8, 25.7, 27.8, 28.4, 27.2, 24.8, 21.3, 17.0],
      rain: [20, 12, 10, 5, 4, 0, 0, 0, 3, 8, 7, 15]
    },
    diagrams: { canal: CANAL_SVG },
    stations: [
      {
        id: 'route', title: 'A shortcut between seas', icon: '🗺️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'canal', prompt: 'Label this map of the Suez Canal.',
              spots: [{ x: 78, y: 7 }, { x: 33, y: 10 }, { x: 73, y: 48 }, { x: 27, y: 79 }, { x: 77, y: 88 }, { x: 15, y: 64 }].map(function (s, i) { s.a = ['Mediterranean Sea', 'Port Said', 'Great Bitter Lake', 'Suez Canal', 'Gulf of Suez', 'Nile delta'][i]; return s; }),
              extra: [],
              explain: 'Ships enter at Port Said, pass through lakes in the middle, and reach the Red Sea at Suez.' },
            { type: 'mcq', q: 'Which two seas does the Suez Canal join?', options: ['The Mediterranean and the Red Sea', 'The Black Sea and the Caspian Sea', 'The North Sea and the Baltic Sea', 'The Arabian Sea and the Yellow Sea'], answer: 0,
              explain: 'This lets ships sail between Europe and Asia without going all the way around Africa.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction does a ship sail from Port Said to Suez?', options: ['South', 'North', 'East', 'West'], answer: 0,
              explain: 'The canal runs almost due south through the desert.' }
          ],
          adv: [
            { type: 'label', diagram: 'canal', prompt: 'Label the map. One label does not belong.',
              spots: [{ x: 78, y: 7 }, { x: 33, y: 10 }, { x: 73, y: 48 }, { x: 27, y: 79 }, { x: 77, y: 88 }, { x: 15, y: 64 }].map(function (s, i) { s.a = ['Mediterranean Sea', 'Port Said (northern entrance)', 'Great Bitter Lake', 'Sea-level canal (no locks)', 'Gulf of Suez (Red Sea)', 'Irrigated Nile delta'][i]; return s; }),
              extra: ['Lock gates'],
              explain: 'Unlike the Panama Canal, Suez needs no locks because both ends are at sea level.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar. About how far is Port Said from Suez in a straight line?', options: ['About 150 km', 'About 15 km', 'About 1,500 km', 'About 5,000 km'], answer: 0,
              explain: 'It is about 145 km in a straight line. The full canal, with its approach channels, is about 193 km.' },
            { type: 'mcq', q: 'Why is the Suez Canal called a “chokepoint” in world trade?', options: ['A narrow route that many ships must pass through', 'A busy port where cargo ships are loaded and unloaded', 'A port where oil is turned into fuel', 'A wide ocean with no hazards at all'], answer: 0,
              explain: 'Other chokepoints include the Strait of Malacca, the Strait of Hormuz and the Panama Canal.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Sun on the canal', icon: '☀️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the hottest month in Port Said?', options: ['August', 'January', 'March', 'December'], answer: 0,
              explain: 'August averages about 28°C. The sea breeze keeps Port Said cooler than Cairo.' },
            { type: 'mcq', graph: true, q: 'In which months does no rain fall at all?', options: ['June, July and August', 'December, January and February', 'March, April and May', 'October and November'], answer: 0,
              explain: 'Summers are completely dry. The little rain that falls comes in winter.' },
            { type: 'mcq', graph: true, q: 'How would you describe Port Said’s climate?', options: ['Very dry, with warm winters and hot summers', 'Wet all year with cold winters', 'Rainy summers and snowy winters, like the Alps', 'Cold and wet all year round'], answer: 0,
              explain: 'It gets less than 100 mm of rain a year, so it is a desert climate, softened by the sea.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Port Said (mm).', answer: 84, tol: 2, unit: 'mm',
              explain: 'Adding the twelve months gives 84 mm.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 13.4, tol: 0.2, unit: '°C',
              explain: 'August 28.4°C − January 15.0°C = 13.4°C. The sea keeps the range smaller than inland deserts.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly rain falls from November to March? Give a whole number.', answer: 76, tol: 1, unit: '%',
              explain: 'November to March = 64 mm out of 84 mm, which is about 76%. Winter rain is a Mediterranean pattern.' }
          ]
        }
      },
      {
        id: 'trade', title: 'Stuck in the canal', icon: '📦',
        tasks: {
          ks3: [
            { type: 'mcq', photo: true, q: 'Look at the satellite images from March 2021. What happened on the right-hand image?', options: ['A huge ship got stuck across the canal', 'The canal dried up completely in a long drought', 'A storm flooded the desert', 'The canal froze over'], answer: 0,
              explain: 'The Ever Given, about 400 m long, blocked the canal for six days. Hundreds of ships queued at each end.' },
            { type: 'mcq', q: 'Without the canal, ships from Asia to Europe must sail around which point?', options: ['The Cape of Good Hope', 'Cape Horn', 'The North Pole', 'The Strait of Gibraltar'], answer: 0,
              explain: 'Sailing around southern Africa adds thousands of kilometres and well over a week to the journey.' },
            { type: 'mcq', q: 'Why did the 2021 blockage affect shops in Europe?', options: ['Goods from Asia arrived late', 'Shops ran out of sea water', 'Fish prices in Europe fell to almost zero', 'Europe’s ports were flooded'], answer: 0,
              explain: 'Many goods, from furniture to bike parts, travel by container ship from Asia.' }
          ],
          adv: [
            { type: 'mcq', photo: true, q: 'Study the satellite images. What do the bright dots queued at each end of the canal on the right show?', options: ['Ships waiting to pass the blockage', 'Sand dunes moving across the canal', 'Clouds over the desert', 'Oil spills from the ship'], answer: 0,
              explain: 'Over 300 ships were delayed. Radar satellites can see ships through cloud, day or night.' },
            { type: 'sort', q: 'Classify these effects of ships avoiding the Red Sea and sailing around Africa instead.', bins: ['Economic', 'Environmental'],
              items: [['Higher shipping and insurance costs', 0], ['Less toll income for Egypt', 0], ['Late deliveries to factories', 0], ['More fuel burned per voyage', 1], ['Higher carbon dioxide emissions', 1], ['More ship traffic off southern Africa', 1]],
              explain: 'From late 2023, attacks on ships in the Red Sea made many shipping lines take the much longer Cape route.' },
            { type: 'mcq', q: 'Why is the canal so important to Egypt’s economy?', options: ['Ships pay tolls, which bring in foreign currency', 'The canal is used to irrigate the Sahara', 'It is Egypt’s main source of fresh drinking water for cities', 'It produces most of Egypt’s electricity'], answer: 0,
              explain: 'Canal revenue is one of Egypt’s biggest earners, along with tourism and money sent home by workers abroad.' }
          ]
        }
      },
      {
        id: 'people', title: 'Canal life', icon: '🐟',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'In what year did the Suez Canal open?', options: ['1869', '1969', '1769', '2019'], answer: 0,
              explain: 'It took about ten years to dig, much of it by hand.' },
            { type: 'mcq', q: 'Culture: what is the main language spoken in Egypt?', options: ['Arabic', 'Spanish', 'Portuguese', 'Swahili'], answer: 0,
              explain: 'Egyptian Arabic is widely understood across the Arab world thanks to Egyptian films and music.' },
            { type: 'mcq', q: 'Culture: which popular Egyptian dish is made from rice, lentils, pasta and tomato sauce?', options: ['Koshari', 'Sushi', 'Paella', 'Pizza'], answer: 0,
              explain: 'Koshari is a cheap, filling street food sold all over Egypt.' }
          ],
          adv: [
            { type: 'mcq', q: 'Hundreds of Red Sea species have spread into the Mediterranean through the canal. Why is this a problem?', options: ['Invasive species compete with native wildlife', 'The new fish make the water too salty', 'They block ships from using the canal', 'They raise the level of the sea'], answer: 0,
              explain: 'This is called Lessepsian migration. Lionfish and rabbitfish now harm Mediterranean ecosystems.' },
            { type: 'mcq', q: 'Why did Egypt open a second channel along part of the canal in 2015?', options: ['So ships can pass in both directions at once', 'To drain water from the Nile', 'To stop all tankers using it', 'To create a new border'], answer: 0,
              explain: 'Two-way traffic cuts waiting times and lets more ships pass each day.' },
            { type: 'mcq', q: 'Culture: in 1956 Egypt’s President Nasser nationalised the canal. What does this mean?', options: ['The government took control of it from a private company', 'It was sold to a foreign country', 'It was closed for ever', 'It was made free for all ships'], answer: 0,
              explain: 'Britain, France and Israel invaded, but withdrew after international pressure. This was the Suez Crisis.' }
          ]
        }
      }
    ]
  };
})();
