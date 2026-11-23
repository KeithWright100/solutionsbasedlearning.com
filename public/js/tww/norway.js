/* Travel the Wright Way — destination: Norway (fjords and glacial landforms, a mild, very wet west coast climate, rockslide hazards, hydropower, oil wealth and electric cars, sustainable cruise tourism, and Norwegian culture).
 * Climate data: Bergen, 1991–2020 averages (climatestotravel.com).
 * Facts: fjords are glacial troughs (U-shaped valleys) carved by glaciers in the Ice Age and flooded by the sea when the ice melted and sea level rose;
 *   the Geirangerfjord and Nærøyfjord are a UNESCO World Heritage Site; the Seven Sisters waterfall (about 410 m) falls from a hanging valley into the Geirangerfjord;
 *   the Sognefjord is Norway's longest and deepest fjord; the unstable Åkneset mountainside above the Storfjord is monitored because a rockslide could cause a tsunami reaching Geiranger;
 *   Bergen gets about 2,500 mm of rain a year as westerly winds from the Atlantic rise over the mountains; the North Atlantic Drift keeps winters mild for the latitude;
 *   almost all of Norway's electricity comes from hydropower; oil and gas income is saved in the world's largest sovereign wealth fund;
 *   in 2025 about 96% of new cars sold in Norway were fully electric; since 2026 smaller passenger ships must be zero-emission in the World Heritage fjords, with larger ships following by 2032;
 *   Geirangerfjord gets around 700,000 visitors in summer, mostly by cruise ship; culture: 17 May (Constitution Day), brown cheese (brunost), skiing, the Sámi people in the north.
 */
(function () {
  var FJORD_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a fjord: a deep U-shaped valley flooded by the sea, with very steep sides, a hanging valley high on one side with a waterfall dropping into the fjord, a small lake in a hollow near the mountain top, and a sharp rocky ridge between two peaks">' +
  '<rect width="600" height="420" fill="#e0ecf6"/>' +
  '<path d="M0 420 L0 60 L40 30 L70 70 L100 40 L140 110 L170 130 L180 170 L196 300 Q 300 400 404 300 L420 200 L440 140 L470 140 L470 130 L520 120 L560 60 L600 80 L600 420 Z" fill="#6b7280"/>' +
  '<path d="M180 170 L196 300 Q 300 400 404 300 L420 200 Z" fill="none"/>' +
  '<path d="M190 240 L410 240 L404 300 Q 300 400 196 300 Z" fill="#1f5f7a"/>' +
  '<path d="M190 240 L410 240" stroke="#bae6fd" stroke-width="2"/>' +
  '<path d="M440 140 Q 455 150 470 140" fill="none" stroke="#475569" stroke-width="2"/>' +
  '<path d="M424 150 C 422 180, 418 210, 414 238" fill="none" stroke="#e0f2fe" stroke-width="5"/>' +
  '<ellipse cx="88" cy="64" rx="14" ry="5" fill="#60a5fa"/>' +
  '<path d="M40 30 L70 70 L100 40" fill="none" stroke="#1f2937" stroke-width="2"/>' +
  '<g fill="#fff"><path d="M30 38 L40 30 L50 38 Z M92 46 L100 40 L108 46 Z M552 68 L560 60 L568 68 Z"/></g>' +
  '<g fill="#3f6f3a">' + (function () { var g = ''; for (var i = 0; i < 4; i++) g += '<path d="M' + (480 + i * 12) + ' 130 l5 -14 l5 14 Z"/>'; return g; })() + '</g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="120" y1="230" x2="186" y2="220"/><line x1="300" y1="380" x2="300" y2="300"/><line x1="522" y1="160" x2="460" y2="140"/><line x1="498" y1="250" x2="420" y2="200"/><line x1="150" y1="110" x2="96" y2="68"/><line x1="70" y1="17" x2="70" y2="66"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.norway = {
    id: 'norway',
    name: 'Norway',
    short: 'Norway',
    country: 'Norway',
    gateway: 'Bergen',
    lonlat: [7.21, 62.1],
    locator: { box: [3.6, 12.4, 58.6, 64.4], places: [['Geiranger', 7.21, 62.1, 'r'], ['Bergen', 5.32, 60.39, 'r'], ['Oslo', 10.75, 59.91, 'l'], ['Ålesund', 6.15, 62.47, 'l'], ['Trondheim', 10.4, 63.43, 'l'], ['North Sea', 4.3, 59.2, 'a'], ['Norwegian Sea', 5.2, 63.9, 'a']] },
    stamp: { colour: '#1d4ed8', icon: '🏔️' },
    transport: { name: 'fjord ferry', verb: 'Sail', emoji: '⛴️' },
    scene: 'fjord',
    photo: { file: 'Geirangerfjord LC0188.jpg', alt: 'A long, narrow arm of the sea winding between very steep, high mountain walls, with green slopes and patches of snow on the peaks', author: 'Jörg Hempel', licence: 'CC BY-SA 2.0 DE', licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/de/deed.en' },
    intro: {
      ks3: 'Hei! Welcome to Norway. Sail a ferry deep into the Geirangerfjord, between cliffs over 1,000 m high, past waterfalls that tumble straight into the sea. Find out how giant glaciers carved these valleys, and why almost every new car here is electric.',
      adv: 'Sail into Norway’s fjords. This expedition covers glacial erosion and fjord landforms, a wet, mild maritime climate, rockslide and tsunami hazards, hydropower, oil wealth and electric cars, and managing cruise tourism in a World Heritage landscape.'
    },
    facts: ['The Seven Sisters waterfall drops about 410 m into the Geirangerfjord.', 'In 2025, about 96% of new cars sold in Norway were electric.', 'Bergen gets about 2,500 mm of rain a year.'],
    climate: {
      place: 'Bergen, Norway', source: '1991–2020 averages (climatestotravel.com)', lat: '60°N', rmax: 300, rstep: 50,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [2.6, 2.5, 4.1, 7.5, 11.0, 13.8, 16.1, 15.8, 13.0, 8.9, 5.3, 3.1],
      rain: [255, 210, 200, 140, 110, 135, 155, 210, 245, 270, 270, 290]
    },
    diagrams: { fjord: FJORD_SVG },
    stations: [
      {
        id: 'fjord', title: 'Carved by ice', icon: '🧊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'fjord', prompt: 'Label the features of a fjord.',
              spots: [{ x: 20, y: 55 }, { x: 50, y: 90 }, { x: 87, y: 38 }, { x: 83, y: 60 }, { x: 25, y: 26 }, { x: 12, y: 4 }].map(function (s, i) { s.a = ['Steep valley side', 'Deep sea water', 'Hanging valley', 'Waterfall', 'Small mountain lake', 'Sharp ridge'][i]; return s; }),
              extra: [],
              explain: 'A glacier carved a deep U-shaped valley. When the ice melted, the sea flooded in to make a fjord.' },
            { type: 'mcq', photo: true, q: 'Look at the photo of the Geirangerfjord. Which shape best describes the valley?', options: ['A U-shape with steep sides', 'A narrow V-shape', 'A wide, flat plain with gentle slopes', 'A round crater'], answer: 0,
              explain: 'Rivers make V-shaped valleys. Glaciers are much bigger and erode a wide, deep U-shape.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Oslo from Geiranger?', options: ['South-east', 'North-west', 'North-east', 'South-west'], answer: 0,
              explain: 'Oslo, the capital, is about 310 km south-east, on the other side of the mountains.' }
          ],
          adv: [
            { type: 'label', diagram: 'fjord', prompt: 'Label the glacial landforms. One label does not belong.',
              spots: [{ x: 20, y: 55 }, { x: 50, y: 90 }, { x: 87, y: 38 }, { x: 83, y: 60 }, { x: 25, y: 26 }, { x: 12, y: 4 }].map(function (s, i) { s.a = ['Truncated spur / steep trough wall', 'Flooded glacial trough (fjord)', 'Hanging valley', 'Waterfall from the hanging valley', 'Corrie with a tarn', 'Arête'][i]; return s; }),
              extra: ['Ox-bow lake'],
              explain: 'Ox-bow lakes form on river floodplains, not in glaciated uplands.' },
            { type: 'mcq', q: 'Why are hanging valleys left high above the main fjord?', options: ['Small tributary glaciers eroded less deeply than the main glacier', 'Earthquakes lifted the side valleys', 'Rivers have cut down faster in the side valleys', 'The sea eroded the main valley only'], answer: 0,
              explain: 'When the ice melted, the side valleys were left “hanging”, so their rivers now fall as waterfalls.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Geiranger to Bergen.', options: ['About 215 km', 'About 21 km', 'About 900 km', 'About 2,000 km'], answer: 0,
              explain: 'Bergen is about 215 km south-west. By road and ferry the journey is much longer.' }
          ]
        }
      },
      {
        id: 'climate', title: 'The rainiest city', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Bergen?', options: ['December', 'May', 'July', 'April'], answer: 0,
              explain: 'December has about 290 mm. It rains on more than half the days of the year.' },
            { type: 'mcq', graph: true, q: 'Which is the warmest month?', options: ['July', 'January', 'October', 'March'], answer: 0,
              explain: 'July averages about 16°C, so summers are cool.' },
            { type: 'mcq', graph: true, q: 'Does the average temperature in Bergen fall below 0°C in any month?', options: ['No, every month is above 0°C', 'Yes, in every month from November to March', 'Yes, all winter long', 'Yes, but only in July'], answer: 0,
              explain: 'Bergen is mild for somewhere 60° north, thanks to the warm North Atlantic Drift.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Bergen (mm).', answer: 2490, tol: 10, unit: 'mm',
              explain: 'Adding the twelve months gives 2,490 mm, more than three times London’s total.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 13.6, tol: 0.2, unit: '°C',
              explain: 'July 16.1°C − February 2.5°C = 13.6°C. The ocean keeps the range small.' },
            { type: 'mcq', q: 'Why is Bergen so wet?', options: ['Moist westerly winds from the Atlantic rise over the mountains (relief rain)', 'Monsoon winds blow from Asia', 'Hurricanes hit Norway every month', 'Warm air rises from the fjords every afternoon'], answer: 0,
              explain: 'As air rises it cools and condenses. East of the mountains, Oslo is in a rain shadow and gets far less.' }
          ]
        }
      },
      {
        id: 'energy', title: 'Water power and oil money', icon: '⚡',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Where does almost all of Norway’s electricity come from?', options: ['Hydropower from rivers and lakes', 'Coal power stations', 'Nuclear power stations along the coast', 'Burning wood'], answer: 0,
              explain: 'Steep mountains, heavy rain and melting snow make Norway perfect for hydropower.' },
            { type: 'mcq', q: 'In 2025, about what share of new cars sold in Norway were fully electric?', options: ['About 96%', 'About 10%', 'About 50%', 'About 1%'], answer: 0,
              explain: 'Tax breaks, free parking and cheap clean electricity made electric cars popular.' },
            { type: 'mcq', q: 'The mountainside at Åkneset is cracking and slowly sliding. What could happen if it collapses into the fjord?', options: ['A tsunami could flood villages along the fjord', 'The whole fjord could freeze solid for many years', 'A volcano could erupt', 'The fjord could dry up'], answer: 0,
              explain: 'Sensors monitor the slope day and night, and villages have warning sirens.' }
          ],
          adv: [
            { type: 'mcq', q: 'Norway makes huge profits from North Sea oil and gas. What does it do with most of the money?', options: ['Saves it in a fund for future generations', 'Spends it all each year on tax cuts', 'Gives it to oil companies', 'Uses it to build new coal power stations in Europe'], answer: 0,
              explain: 'The Government Pension Fund Global is the world’s largest sovereign wealth fund.' },
            { type: 'mcq', q: 'Critics say Norway is a “green paradox”. Why?', options: ['It uses clean energy at home but exports oil and gas burned elsewhere', 'It has no forests at all', 'It burns more coal than any other country', 'It bans electric cars'], answer: 0,
              explain: 'Its own emissions are low, but its exports add to global emissions.' },
            { type: 'mcq', q: 'Why are the hills around Geiranger at high risk from rockslides?', options: ['Glaciers left oversteepened slopes that freeze and thaw', 'The rocks are made of soft sand', 'Earthquakes happen there every day', 'There is no vegetation at all anywhere in the whole of Norway'], answer: 0,
              explain: 'When glaciers melted, the steep walls lost their support. Freeze–thaw weathering opens the cracks further.' }
          ]
        }
      },
      {
        id: 'tourism', title: 'Cruise ships and culture', icon: '🛳️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: what do Norwegians celebrate with parades on 17 May?', options: ['Constitution Day', 'Halloween', 'Chinese New Year', 'Thanksgiving'], answer: 0,
              explain: 'Children march in parades and people wear traditional costumes called bunad.' },
            { type: 'mcq', q: 'Culture: brunost is a famous Norwegian food. What is it?', options: ['A sweet brown cheese', 'A type of thick fish soup', 'A reindeer stew', 'A cinnamon bun'], answer: 0,
              explain: 'It is sliced thinly and eaten on bread or waffles.' },
            { type: 'mcq', q: 'Why do so many cruise ships visit the Geirangerfjord?', options: ['Its spectacular scenery is a World Heritage Site', 'It has the warmest and sandiest beaches in all of Europe', 'It is the only port in Norway', 'Ships must stop there to refuel'], answer: 0,
              explain: 'Around 700,000 people visit in summer, most of them arriving by cruise ship.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these impacts of cruise tourism in the Geirangerfjord.', bins: ['Positive', 'Negative'],
              items: [['Jobs in shops, cafés and tours', 0], ['Income for a small village', 0], ['Money for local services', 0], ['Air pollution trapped between the steep walls', 1], ['Overcrowding on busy days', 1], ['Most spending stays on the ship', 1]],
              explain: 'A village of a few hundred people can receive thousands of passengers in a single day.' },
            { type: 'mcq', q: 'Since 2026, smaller passenger ships in the World Heritage fjords must be zero-emission. Why might larger cruise ships have until 2032?', options: ['Zero-emission technology for big ships is still being developed', 'Large ships produce no pollution', 'Large ships are not allowed to sail into any of the fjords at all', 'The fjords will be closed in 2032'], answer: 0,
              explain: 'Battery and hydrogen ferries already operate, but huge cruise ships need much more energy.' },
            { type: 'mcq', q: 'Culture: which Indigenous people traditionally herd reindeer in northern Norway?', options: ['The Sámi', 'The Maasai', 'The Inuit of Greenland', 'The Aboriginal Australians'], answer: 0,
              explain: 'Sámi land spans Norway, Sweden, Finland and Russia. They have their own parliament in Norway.' }
          ]
        }
      }
    ]
  };
})();
