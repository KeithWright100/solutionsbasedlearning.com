/* Travel the Wright Way — destination: Italy (Vesuvius and the Bay of Naples, a Mediterranean climate, flooding in Venice, and Italian culture and development).
 * Climate data: Naples, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: Vesuvius is a composite (strato) volcano; its eruption in AD 79 buried Pompeii and Herculaneum; it last erupted in 1944;
 *   around 700,000 people live in the official red (highest-risk) zone around it; volcanic soils are very fertile;
 *   Venice floods at very high tides (acqua alta); in November 2019 the water reached 1.87 m, the second highest on record; the city has sunk partly because of groundwater pumping in the 20th century;
 *   the MOSE flood barrier (78 gates) was first raised in October 2020; Venice introduced an entry fee for day-trippers in 2024; the historic centre's population has fallen below 50,000;
 *   the art of the Neapolitan pizzaiuolo was added to UNESCO's Intangible Cultural Heritage list in 2017; Italy has one of the oldest populations in the world;
 *   the south of Italy (the Mezzogiorno) has lower average incomes and higher unemployment than the north.
 */
(function () {
  var VOLCANO_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a composite volcano with an ash cloud, crater, main vent, layers of ash and lava, a lava flow, a pyroclastic flow and a magma chamber">' +
  '<rect width="600" height="420" fill="#d6e8f5"/>' +
  // ash cloud
  '<g fill="#7b7f86"><circle cx="300" cy="62" r="26"/><circle cx="270" cy="44" r="24"/><circle cx="330" cy="40" r="26"/><circle cx="300" cy="20" r="22"/><circle cx="246" cy="28" r="18"/></g>' +
  // ground and cone with layers
  '<rect y="340" width="600" height="80" fill="#8a6b4a"/>' +
  '<path d="M90 340 L270 92 L330 92 L510 340 Z" fill="#6b6f78"/>' +
  '<g fill="none" stroke-width="10">' + (function () { var g = ''; for (var i = 0; i < 6; i++) { var y = 140 + i * 36, half = 30 + (y - 92) * 0.726; g += '<path d="M' + (300 - half) + ' ' + y + ' L' + (300 + half) + ' ' + y + '" stroke="' + (i % 2 ? '#3f3a36' : '#a3a8b0') + '"/>'; } return g; })() + '</g>' +
  '<path d="M90 340 L270 92 L330 92 L510 340" fill="none" stroke="#4b4f56" stroke-width="3"/>' +
  // magma chamber and vent
  '<ellipse cx="300" cy="384" rx="120" ry="30" fill="#d9480f"/><rect x="292" y="94" width="16" height="262" fill="#e8590c"/>' +
  '<path d="M276 92 L324 92 L316 104 L284 104 Z" fill="#e8590c"/>' +
  // lava flow on right flank
  '<path d="M326 96 C 360 150, 400 210, 430 250 C 450 280, 470 310, 480 336 L466 338 C 452 312, 436 286, 418 258 C 390 216, 352 158, 318 104 Z" fill="#f97316"/>' +
  // pyroclastic flow on left flank
  '<g fill="#a8a29e" opacity=".9"><circle cx="232" cy="172" r="16"/><circle cx="212" cy="204" r="18"/><circle cx="190" cy="236" r="20"/><circle cx="168" cy="268" r="22"/><circle cx="146" cy="300" r="22"/></g>' +
  // town
  '<g fill="#f4e3c3" stroke="#7a6a52" stroke-width="1"><rect x="16" y="318" width="16" height="22"/><rect x="36" y="324" width="14" height="16"/><rect x="54" y="314" width="16" height="26"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="168" y1="34" x2="246" y2="36"/><line x1="432" y1="62" x2="324" y2="94"/><line x1="432" y1="228" x2="424" y2="244"/><line x1="156" y1="252" x2="176" y2="262"/><line x1="432" y1="310" x2="310" y2="296"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.italy = {
    id: 'italy',
    name: 'Italy',
    short: 'Italy',
    country: 'Italy',
    gateway: 'Naples',
    lonlat: [14.25, 40.85],
    locator: { box: [6.5, 19, 36.5, 47.2], places: [['Naples', 14.25, 40.85, 'l'], ['Vesuvius', 14.43, 40.82, 'r'], ['Venice', 12.33, 45.44, 'r'], ['Rome', 12.5, 41.9, 'l'], ['Milan', 9.19, 45.46, 'l'], ['Mediterranean Sea', 10.5, 38.6, 'a'], ['Adriatic Sea', 15.6, 43.2, 'a']] },
    stamp: { colour: '#15803d', icon: '🌋' },
    transport: { name: 'Vespa scooter', verb: 'Ride', emoji: '🛵' },
    scene: 'vespa',
    photo: { file: 'Naples, Italy, A view over Bay of Naples, Port of Naples and Mt. Vesuvius.jpg', alt: 'The Bay of Naples and its port, with the cone of Mount Vesuvius rising behind the city', author: 'Vyacheslav Argenberg', licence: 'CC BY 4.0', licenceUrl: 'https://creativecommons.org/licenses/by/4.0/' },
    intro: {
      ks3: 'Ciao! Welcome to Naples, a lively city that sits right beside one of the most dangerous volcanoes in the world. Hop on a Vespa to explore Vesuvius and the ruins of Pompeii, then head north to see how Venice copes with the sea.',
      adv: 'From Naples you ride a Vespa around the Bay. This expedition covers composite volcanoes and living with volcanic risk, a Mediterranean climate, coastal flooding and subsidence in Venice, overtourism, and Italy’s regional and demographic challenges.'
    },
    facts: ['Vesuvius buried the Roman town of Pompeii in AD 79.', 'Venice’s MOSE flood barrier was first raised in 2020.', 'Neapolitan pizza-making is on UNESCO’s list of world cultural heritage.'],
    climate: {
      place: 'Naples, Italy', source: 'Long-term averages (CRU / Met Office)', lat: '41°N', rmax: 200,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [8.0, 9.0, 10.5, 13.0, 17.5, 20.5, 23.5, 23.5, 21.0, 17.0, 12.5, 9.0],
      rain: [103, 85, 76, 71, 47, 31, 22, 38, 74, 118, 147, 112]
    },
    diagrams: { volcano: VOLCANO_SVG },
    stations: [
      {
        id: 'vesuvius', title: 'Living with Vesuvius', icon: '🌋',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'volcano', prompt: 'Label this cross-section of Vesuvius.',
              spots: [{ x: 16, y: 8, a: 'Ash cloud' }, { x: 84, y: 14, a: 'Crater' }, { x: 84, y: 54, a: 'Lava flow' }, { x: 14, y: 60, a: 'Pyroclastic flow' }, { x: 50, y: 66, a: 'Layers of ash and lava' }, { x: 84, y: 74, a: 'Vent' }, { x: 50, y: 92, a: 'Magma chamber' }],
              extra: [],
              explain: 'Magma rises from the chamber up the vent. Vesuvius is built of layers of ash and lava from many eruptions. Pyroclastic flows of hot gas and ash are the deadliest hazard.' },
            { type: 'mcq', q: 'What happened to the Roman town of Pompeii in AD 79?', options: ['It was buried by an eruption of Vesuvius', 'It was washed away by a tsunami', 'It was destroyed by a hurricane', 'It sank into the sea after an earthquake'], answer: 0,
              explain: 'Ash and pyroclastic flows buried the town. Today archaeologists can see what Roman daily life was like.' },
            { type: 'mcq', q: 'Hundreds of thousands of people live close to Vesuvius. Why?', options: ['Fertile soils, jobs and family ties', 'The volcano is extinct', 'Land is free there', 'Volcanoes keep the air cool in summer'], answer: 0,
              explain: 'Volcanic soils grow excellent tomatoes, grapes and lemons, and Naples offers jobs. Many families have lived there for generations.' }
          ],
          adv: [
            { type: 'label', diagram: 'volcano', prompt: 'Label the composite volcano. One label does not belong.',
              spots: [{ x: 16, y: 8, a: 'Eruption column' }, { x: 84, y: 14, a: 'Crater' }, { x: 84, y: 54, a: 'Viscous lava flow' }, { x: 14, y: 60, a: 'Pyroclastic flow' }, { x: 50, y: 66, a: 'Alternating ash and lava layers' }, { x: 84, y: 74, a: 'Main vent' }, { x: 50, y: 92, a: 'Magma chamber' }],
              extra: ['Rift valley'],
              explain: 'Rift valleys form where plates pull apart. Vesuvius is a steep-sided composite volcano made of alternating layers, typical of a destructive boundary.' },
            { type: 'mcq', q: 'Vesuvius forms where the African plate meets the Eurasian plate. Why are its eruptions so explosive?', options: ['Thick, sticky magma traps gas', 'Runny basalt lava flows freely', 'It sits on a mid-ocean ridge', 'It is fed by a hotspot under the sea'], answer: 0,
              explain: 'Viscous, gas-rich magma builds up pressure until it explodes, unlike the gentle eruptions of shield volcanoes such as those in Hawaii.' },
            { type: 'mcq', q: 'About 700,000 people live in Vesuvius’s “red zone”. Which strategy is in place to protect them?', options: ['A plan to evacuate everyone in time', 'A wall around the volcano', 'Pumping water into the crater', 'Moving the whole city of Naples further along the coast'], answer: 0,
              explain: 'The volcano is monitored constantly. Critics worry that evacuating so many people in time would be extremely difficult.' }
          ]
        }
      },
      {
        id: 'climate', title: 'A Mediterranean climate', icon: '☀️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Naples?', options: ['November', 'July', 'June', 'May'], answer: 0,
              explain: 'November gets about 147 mm. Autumn and winter are the wet seasons.' },
            { type: 'mcq', graph: true, q: 'Which is the driest month in Naples?', options: ['July', 'November', 'January', 'October'], answer: 0,
              explain: 'July gets only about 22 mm, during the hot, dry summer.' },
            { type: 'mcq', graph: true, q: 'Describe the temperature in Naples.', options: ['Hot summers and mild winters', 'Cold all year', 'Hot all year', 'Freezing summers and warm winters'], answer: 0,
              explain: 'Temperatures range from about 8°C in January to about 24°C in July and August.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Naples (mm).', answer: 924, tol: 10, unit: 'mm',
              explain: 'Adding the months gives about 924 mm, more than London, but concentrated in the cooler half of the year.' },
            { type: 'number', graph: true, q: 'What percentage of Naples’ yearly rain falls from October to March? Give a whole number.', answer: 69, tol: 1, unit: '%',
              explain: 'October to March = 641 mm out of 924 mm, which is about 69%.' },
            { type: 'mcq', graph: true, q: 'Autumn storms in southern Italy can be very intense. What helps fuel them?', options: ['The sea is still warm after summer', 'Snow melting in the Alps', 'Cold winds blowing up from the Sahara Desert', 'Monsoon winds from India'], answer: 0,
              explain: 'A warm Mediterranean adds heat and moisture to passing low-pressure systems, sometimes causing flash floods.' }
          ]
        }
      },
      {
        id: 'venice', title: 'Venice and the rising sea', icon: '🌊',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Venice often floods at very high tides. What do Venetians call this?', options: ['Acqua alta (high water)', 'Dolce vita', 'Gelato', 'Siesta, a long afternoon nap'], answer: 0,
              explain: 'In November 2019 the water reached 1.87 m, flooding most of the city.' },
            { type: 'mcq', q: 'Why is Venice flooding more often than in the past?', options: ['The land is sinking and the sea is rising', 'More rain falls in Venice now', 'The canals are getting narrower', 'Too many boats sail in the canals each day'], answer: 0,
              explain: 'Pumping groundwater in the 20th century made the land sink, while climate change raises sea levels.' },
            { type: 'mcq', q: 'In 2024 Venice began charging day-trippers a fee to enter on busy days. Why?', options: ['To reduce overcrowding', 'To pay for new beaches', 'To stop people living there', 'Because the city ran out of maps'], answer: 0,
              explain: 'Millions of visitors crowd the narrow streets, while fewer than 50,000 people now live in the historic centre.' }
          ],
          adv: [
            { type: 'mcq', q: 'The MOSE barrier uses 78 gates that rise from the seabed. What is a concern for the future?', options: ['Frequent closures may harm the lagoon', 'It makes Venice warmer', 'It stops all tourists from arriving in Venice by sea', 'It is too small to see'], answer: 0,
              explain: 'Frequent closures cut the lagoon off from the sea, reducing water exchange and affecting the port and ecosystems.' },
            { type: 'sort', q: 'Classify these impacts of tourism in Venice.', bins: ['Benefit', 'Cost'],
              items: [['Jobs in hotels, restaurants and gondolas', 0], ['Money to restore historic buildings', 0], ['Global fame that attracts investment', 0], ['Homes turned into holiday lets', 1], ['Overcrowding in narrow streets', 1], ['Large ships eroding the lagoon (now banned)', 1]],
              explain: 'Large cruise ships were banned from the lagoon in 2021 after years of protest.' },
            { type: 'mcq', q: 'Why is the population of Venice’s historic centre falling?', options: ['High costs and tourism push residents out', 'People are moving to Venice from abroad, so locals leave', 'Venice has too many jobs', 'The city has no tourists'], answer: 0,
              explain: 'Rents rise as homes become holiday lets, and everyday shops are replaced by souvenir stores.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Pizza, people and two Italys', icon: '🍕',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: which world-famous food comes from Naples?', options: ['Pizza', 'Sushi', 'Curry', 'Tacos'], answer: 0,
              explain: 'The skill of the Neapolitan pizza-maker, the pizzaiuolo, is on UNESCO’s list of Intangible Cultural Heritage.' },
            { type: 'mcq', q: 'Culture: the tomatoes for real Neapolitan pizza traditionally grow in volcanic soil near Vesuvius. Why is this soil so good?', options: ['It is rich in minerals', 'It is very salty', 'It is always frozen, which kills pests', 'It contains plastic'], answer: 0,
              explain: 'Weathered volcanic ash releases nutrients such as potassium, making the land very fertile.' },
            { type: 'mcq', q: 'Italy has one of the oldest populations in the world. Which is a likely result?', options: ['More pressure on pensions and health', 'Schools that are too full', 'Too many babies being born, so schools are full', 'Lots of empty hospitals'], answer: 0,
              explain: 'A low birth rate and long life expectancy mean fewer workers support more older people.' }
          ],
          adv: [
            { type: 'mcq', q: 'Southern Italy (the Mezzogiorno) has lower incomes and higher unemployment than the north. What is one reason?', options: ['Less industry and investment', 'Colder weather in the south, which stops tourists coming', 'No farmland in the south', 'The south has no coastline'], answer: 0,
              explain: 'The north grew rich from industry and trade. Many young southerners move north or abroad for work, a “brain drain”.' },
            { type: 'mcq', q: 'Why might young people leaving southern villages make an ageing population worse there?', options: ['Fewer births and fewer workers remain', 'More schools are needed', 'Houses become too expensive for the people who stay', 'The villages grow too fast'], answer: 0,
              explain: 'Some villages now sell houses for €1 to attract new residents and stop them emptying.' },
            { type: 'mcq', q: 'Campi Flegrei, a huge volcanic area west of Naples, has had many small earthquakes recently. What is this ground movement called?', options: ['Bradyseism', 'Longshore drift', 'Desertification', 'Deforestation'], answer: 0,
              explain: 'The ground slowly rises and falls as magma and gases move below. Scientists monitor it closely because so many people live on top of it.' }
          ]
        }
      }
    ]
  };
})();
