/* Travel the Wright Way — destination: Slovakia, focusing on the High Tatras (glacial landforms and tarns, the 2004 windstorm, a cold mountain-basin climate, the car industry, and Slovak culture).
 * Climate data: Poprad (about 700 m above sea level), 1991–2020 averages (climatestotravel.com; monthly figures sum to 630 mm).
 * Facts: the High Tatras are the highest part of the Carpathians; Gerlachovský štít (2,655 m) is the highest peak; glaciers carved corries, U-shaped valleys and more than 100 tarns (plesá); Štrbské pleso (about 1,346 m) is a glacial lake held back by moraine;
 *   on 19 November 2004 a windstorm flattened around 12,000 hectares of forest on the southern slopes; the Tatra Electric Railway links Poprad with the mountain resorts;
 *   Slovakia (about 5.4 million people) makes about one million cars a year, the most cars per person in the world; the car industry provides around half of industrial output; Slovakia joined the EU in 2004 and the euro in 2009;
 *   Spiš Castle is one of the largest castle sites in Central Europe (UNESCO); Dobšinská Ice Cave keeps ice all year (UNESCO); bryndzové halušky (potato dumplings with sheep's cheese) is the national dish.
 */
(function () {
  var TATRA_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of the High Tatras: a sharp pointed peak, a hollow with a small mountain lake held back by a ridge of rocks, a wide U-shaped valley, a forest on the lower slopes where many trees have been blown down, and a railway in the basin below">' +
  '<rect width="600" height="420" fill="#d9e8f5"/>' +
  '<path d="M0 250 L0 170 L60 140 L120 100 L200 92 L270 70 L330 40 L390 80 L440 110 L470 130 Q 485 238 540 240 Q 590 240 600 130 L600 250 Z" fill="#78716c"/>' +
  '<path d="M312 54 L330 40 L348 54 L330 60 Z" fill="#fff"/><path d="M190 96 L200 92 L212 98 L200 102 Z" fill="#fff"/>' +
  '<path d="M110 112 Q 165 205 250 104" fill="#5f5a55"/><ellipse cx="168" cy="160" rx="30" ry="6" fill="#3b82c4"/>' +
  '<g fill="#a8a29e" stroke="#57534e" stroke-width="1"><circle cx="150" cy="190" r="7"/><circle cx="164" cy="194" r="8"/><circle cx="180" cy="191" r="7"/><circle cx="194" cy="188" r="6"/></g>' +
  '<path d="M0 250 L600 250 L600 420 L0 420 Z" fill="#4d7c3a"/><path d="M0 245 C 120 238, 260 252, 470 240 L600 244 L600 256 L0 256 Z" fill="#4d7c3a"/>' +
  '<g fill="#1f4d2b">' + (function () { var g = ''; for (var i = 0; i < 22; i++) { var x = 6 + i * 27; if (x > 300 && x < 420) continue; g += '<path d="M' + x + ' ' + (300 + (i % 3) * 6) + ' l8 -30 l8 30 Z"/>'; } return g; })() + '</g>' +
  '<g stroke="#7a5230" stroke-width="4" stroke-linecap="round">' + (function () { var g = ''; for (var i = 0; i < 7; i++) g += '<line x1="' + (304 + i * 16) + '" y1="' + (300 + (i % 2) * 14) + '" x2="' + (326 + i * 16) + '" y2="' + (310 + (i % 2) * 14) + '"/>'; return g; })() + '</g>' +
  '<rect y="340" width="600" height="80" fill="#a3b86c"/><line x1="0" y1="358" x2="600" y2="358" stroke="#57534e" stroke-width="4"/>' +
  '<rect x="106" y="338" width="50" height="16" rx="3" fill="#b91c1c" stroke="#450a0a" stroke-width="1.5"/><g fill="#bfe6ff"><rect x="111" y="341" width="8" height="6"/><rect x="123" y="341" width="8" height="6"/><rect x="135" y="341" width="8" height="6"/></g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="480" y1="30" x2="338" y2="46"/><line x1="80" y1="80" x2="164" y2="158"/><line x1="80" y1="240" x2="150" y2="196"/><line x1="520" y1="190" x2="538" y2="236"/><line x1="360" y1="390" x2="360" y2="318"/><line x1="120" y1="395" x2="128" y2="356"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.slovakia = {
    id: 'slovakia',
    name: 'Slovakia',
    short: 'Slovakia',
    country: 'Slovakia',
    gateway: 'Poprad',
    lonlat: [20.2, 49.1],
    locator: { box: [16.8, 22.6, 47.6, 49.8], rivers: [[[16.85, 48.12], [17.11, 48.14], [17.7, 47.8], [18.8, 47.78]]], places: [['Poprad', 20.30, 49.06, 'b'], ['Košice', 21.26, 48.72, 'r'], ['Bratislava', 17.11, 48.15, 'r'], ['Žilina', 18.74, 49.22, 't'], ['High Tatras', 20.1, 49.42, 'a']] },
    stamp: { colour: '#1e40af', icon: '🏔️' },
    transport: { name: 'Tatra Electric Railway', verb: 'Ride', emoji: '🚋' },
    scene: 'tatras',
    photo: { file: 'Vysoké Tatry, Nové Štrbské pleso.JPG', alt: 'A calm mountain lake surrounded by dark pine forest, with bare rocky peaks rising behind it', author: 'Michal Klajban', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
    intro: {
      ks3: 'Dobrý deň! Welcome to Slovakia. Ride the little red Tatra Electric Railway into the High Tatras, where glaciers carved sharp peaks and mountain lakes. Then find out why this small country makes more cars per person than anywhere else on Earth.',
      adv: 'Ride into the High Tatras. This expedition covers glacial landforms and tarns, the 2004 windstorm and forest management, a cold mountain-basin climate, Slovakia’s dependence on car manufacturing, and Slovak culture.'
    },
    facts: ['Slovakia makes about one million cars a year.', 'The High Tatras have more than 100 glacial lakes, called plesá.', 'A storm in 2004 flattened around 12,000 hectares of Tatra forest.'],
    climate: {
      place: 'Poprad, Slovakia', source: '1991–2020 averages (climatestotravel.com)', lat: '49°N', rmax: 120, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-3.8, -2.1, 1.9, 7.4, 12.0, 15.5, 17.2, 17.1, 12.4, 7.6, 2.5, -2.6],
      rain: [30, 25, 30, 45, 75, 85, 100, 75, 55, 50, 35, 25]
    },
    diagrams: { tatras: TATRA_SVG },
    stations: [
      {
        id: 'tatras', title: 'Peaks and tarns', icon: '🏔️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'tatras', prompt: 'Label this diagram of the High Tatras.',
              spots: [{ x: 80, y: 7.1 }, { x: 13.3, y: 19 }, { x: 13.3, y: 57.1 }, { x: 86.7, y: 45.2 }, { x: 60, y: 92.9 }, { x: 20, y: 94 }].map(function (s, i) { s.a = ['Mountain peak', 'Mountain lake', 'Moraine (rocks left by ice)', 'U-shaped valley', 'Trees blown down by a storm', 'Railway'][i]; return s; }),
              extra: [],
              explain: 'Glaciers covered these mountains in the last Ice Age. When they melted they left lakes, rocky ridges and wide valleys.' },
            { type: 'mcq', photo: true, q: 'Look at the photo of Štrbské pleso. How did lakes like this form in the High Tatras?', options: ['Glaciers carved hollows that filled with water', 'A meteorite made a crater', 'People dug them for fishing', 'A river was dammed with concrete to make a reservoir'], answer: 0,
              explain: 'Štrbské pleso sits about 1,346 m above sea level, held back by rocks dumped by an old glacier.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Košice from Poprad?', options: ['South-east', 'North-west', 'South-west', 'North-east'], answer: 0,
              explain: 'Košice, Slovakia’s second city, is about 80 km south-east.' }
          ],
          adv: [
            { type: 'label', diagram: 'tatras', prompt: 'Label the landforms of the High Tatras. One label does not belong.',
              spots: [{ x: 80, y: 7.1 }, { x: 13.3, y: 19 }, { x: 13.3, y: 57.1 }, { x: 86.7, y: 45.2 }, { x: 60, y: 92.9 }, { x: 20, y: 94 }].map(function (s, i) { s.a = ['Pyramidal peak', 'Corrie with a tarn (pleso)', 'Moraine dam', 'U-shaped glacial valley', 'Windthrow from the 2004 storm', 'Tatra Electric Railway'][i]; return s; }),
              extra: ['Meander'],
              explain: 'Meanders form on rivers flowing across gentle lowland slopes, not in glacial mountain landscapes.' },
            { type: 'mcq', q: 'After the 2004 windstorm, there was a debate about the fallen trees. Which approach helps the forest recover most naturally?', options: ['Leaving some areas untouched so a mixed forest regrows', 'Burning all the fallen trees', 'Replanting only one kind of spruce tree in long straight rows', 'Building hotels on the cleared land'], answer: 0,
              explain: 'The fallen forest was mostly planted spruce. Mixed, natural forest is more resistant to storms and beetles.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Poprad to the capital, Bratislava.', options: ['About 255 km', 'About 25 km', 'About 900 km', 'About 2,500 km'], answer: 0,
              explain: 'Bratislava, on the Danube, is about 255 km to the west, close to the borders with Austria and Hungary.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Mountain winters', icon: '🌨️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the coldest month in Poprad?', options: ['January', 'July', 'May', 'September'], answer: 0,
              explain: 'January averages −3.8°C. Poprad is about 700 m above sea level, so it is colder than lowland Slovakia.' },
            { type: 'mcq', graph: true, q: 'Which is the wettest month?', options: ['July', 'January', 'February', 'December'], answer: 0,
              explain: 'July has about 100 mm, often from afternoon thunderstorms over the mountains.' },
            { type: 'mcq', graph: true, q: 'Why is winter good for tourism in the Tatras?', options: ['It is cold enough for snow and skiing', 'It is the hottest season', 'It is the wettest season', 'The lakes are warm for swimming'], answer: 0,
              explain: 'Resorts like Štrbské Pleso attract skiers in winter and hikers in summer.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual precipitation in Poprad (mm).', answer: 630, tol: 3, unit: 'mm',
              explain: 'Adding the twelve months gives 630 mm. The mountain peaks above get much more.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 21, tol: 0.2, unit: '°C',
              explain: 'July 17.2°C − January (−3.8°C) = 21.0°C, a continental climate far from the sea.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly precipitation falls from May to August? Give a whole number.', answer: 53, tol: 1, unit: '%',
              explain: 'May to August = 335 mm. 335 ÷ 630 × 100 ≈ 53%, more than half in just four months.' }
          ]
        }
      },
      {
        id: 'cars', title: 'Made in Slovakia', icon: '🚗',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Slovakia has about 5.4 million people. About how many cars does it make each year?', options: ['About one million', 'About one hundred', 'About ten thousand', 'About fifty million'], answer: 0,
              explain: 'That is the most cars per person of any country in the world.' },
            { type: 'mcq', q: 'Why did big car companies build factories in Slovakia?', options: ['Skilled workers, lower costs and a central location in Europe', 'Slovakia has huge oil fields', 'It has the biggest population and the richest shoppers in Europe', 'Cars are only sold in Slovakia'], answer: 0,
              explain: 'Slovakia joined the EU in 2004, so cars can be sold across Europe without tariffs.' },
            { type: 'mcq', q: 'What is a risk of depending so much on one industry?', options: ['If car sales fall, many jobs are lost at once', 'Too many people get jobs', 'Cars stop being made anywhere else', 'There is no risk at all'], answer: 0,
              explain: 'Cars make up around half of Slovakia’s industrial output, so the economy depends heavily on them.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these features of Slovakia’s car industry.', bins: ['Benefit', 'Risk'],
              items: [['Well over 100,000 jobs in factories and suppliers', 0], ['Large export earnings', 0], ['New skills and technology from foreign firms', 0], ['Decisions made by companies based abroad', 1], ['Tariffs on cars sold to the USA', 1], ['A slow switch to electric car production', 1]],
              explain: 'Foreign direct investment brought growth, but profits and key decisions often go back to head offices abroad.' },
            { type: 'mcq', q: 'European car makers are switching to electric vehicles. Why does this matter so much for Slovakia?', options: ['Its factories and suppliers must retool or risk closing', 'Slovakia has no electricity', 'Electric cars cannot cross borders', 'It will make petrol much cheaper for everybody living in Slovakia'], answer: 0,
              explain: 'Electric cars need fewer parts, so many component suppliers could lose work.' },
            { type: 'mcq', q: 'Most car factories are in western Slovakia, near Bratislava. Which is a likely result?', options: ['Wealth and jobs are unevenly spread across the country', 'The east of the country is richer than the west', 'Nobody lives in the west', 'Every region has the same income'], answer: 0,
              explain: 'Eastern regions, further from the factories and from Western Europe, have higher unemployment.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Castles and caves', icon: '🏰',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: what is bryndzové halušky, Slovakia’s national dish?', options: ['Potato dumplings with sheep’s cheese', 'A spicy fish soup', 'A chocolate cake', 'Grilled corn on the cob served with sweet butter'], answer: 0,
              explain: 'Bryndza is a soft, salty sheep’s cheese. The dish is often topped with crispy bacon.' },
            { type: 'mcq', q: 'Culture: Spiš Castle is a UNESCO World Heritage Site. What is special about it?', options: ['It is one of the largest castle sites in Central Europe', 'It is built entirely of ice and has to be rebuilt every single winter', 'It floats on a lake', 'It was built last year'], answer: 0,
              explain: 'Its ruins sit on a limestone hill and can be seen from many kilometres away.' },
            { type: 'mcq', q: 'Dobšinská Ice Cave stays frozen all year. Why?', options: ['Cold winter air sinks into the cave and stays trapped', 'It is near the North Pole', 'A freezer is built into the walls', 'It is on top of the highest mountain, where it is always below freezing'], answer: 0,
              explain: 'Cold, heavy air flows in during winter, but warmer summer air cannot sink into the cave.' }
          ],
          adv: [
            { type: 'mcq', q: 'Slovakia adopted the euro in 2009. Which is one advantage for its car exporters?', options: ['No currency exchange costs when selling to other eurozone countries', 'Cars become free to make', 'Workers are paid in two different currencies, which makes wages higher', 'It stops all imports from Germany'], answer: 0,
              explain: 'Much of Slovakia’s trade is with Germany and other eurozone countries.' },
            { type: 'mcq', q: 'Tourism in the High Tatras is growing. Which is the biggest management challenge?', options: ['Protecting fragile mountain habitats from crowds and building', 'Finding enough snow in the desert areas at the foot of the mountains', 'Stopping volcanic eruptions', 'Attracting any visitors at all'], answer: 0,
              explain: 'Tatra National Park limits some hiking paths and closes high trails in winter and spring.' },
            { type: 'mcq', q: 'The Tatra Electric Railway links Poprad with the mountain resorts. Why does this help sustainability?', options: ['It reduces car traffic and pollution in the national park', 'It is faster than flying and costs nothing for visitors to use at all', 'It runs on coal', 'It only carries freight'], answer: 0,
              explain: 'Fewer cars means less air pollution, noise and need for car parks in the mountains.' }
          ]
        }
      }
    ]
  };
})();
