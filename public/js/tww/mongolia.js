/* Travel the Wright Way — destination: Mongolia (the steppe and nomadic herding, an extreme continental climate, dzud, Ulaanbaatar's ger districts and winter air pollution, mining, and Mongolian culture).
 * Climate data: Ulaanbaatar, monthly averages (climatestotravel.com); mean = average of the listed min and max.
 * Facts: Mongolia has about 3.5 million people, and about half live in Ulaanbaatar, the coldest capital city in the world; it is one of the least densely populated countries;
 *   herders keep tens of millions of sheep, goats, cattle, horses and camels — many more animals than people; a dzud is a severe winter in which deep snow or ice stops animals grazing, and millions of livestock can die (over 7 million in 2023–24);
 *   many migrants from the countryside live in ger districts on the hills around Ulaanbaatar, often without piped water; burning coal for heating in winter, trapped by temperature inversions in the valley, gives some of the worst winter air pollution of any capital;
 *   the Oyu Tolgoi copper and gold mine in the Gobi Desert is one of the largest in the world; the Gobi is famous for dinosaur fossils and Bactrian camels;
 *   Naadam festival (July) features wrestling, horse racing and archery; khöömei (throat singing) is UNESCO Intangible Cultural Heritage; Chinggis (Genghis) Khan founded the Mongol Empire, the largest contiguous land empire in history.
 */
(function () {
  var SMOG_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the Ulaanbaatar valley in winter: mountains, ger districts on the slopes, apartment blocks in the valley, coal smoke trapped below a layer of warmer air, and cold air in the valley">' +
  '<rect width="600" height="420" fill="#dbe7f2"/>' +
  // warm air layer
  '<rect y="120" width="600" height="40" fill="#fcd9b6" opacity=".8"/>' +
  // mountains
  '<path d="M0 420 L0 120 L90 60 L180 200 L420 200 L510 70 L600 130 L600 420 Z" fill="#8a8f78"/>' +
  '<path d="M70 72 L90 60 L110 84 Z M490 84 L510 70 L530 90 Z" fill="#fff"/>' +
  // valley floor
  '<path d="M0 420 L0 300 L180 200 L420 200 L600 300 L600 420 Z" fill="#c7c0a6"/>' +
  // cold air in valley
  '<path d="M150 200 L450 200 L450 260 L150 260 Z" fill="#bfdbfe" opacity=".55"/>' +
  // gers on slopes
  '<g>' + (function () { var g = ''; var pts = [[60, 280], [96, 262], [130, 244], [470, 246], [506, 264], [540, 282]]; for (var i = 0; i < pts.length; i++) { var x = pts[i][0], y = pts[i][1]; g += '<path d="M' + (x - 14) + ' ' + y + ' L' + (x - 14) + ' ' + (y - 10) + ' Q ' + x + ' ' + (y - 22) + ' ' + (x + 14) + ' ' + (y - 10) + ' L' + (x + 14) + ' ' + y + ' Z" fill="#f8fafc" stroke="#64748b"/><rect x="' + (x + 6) + '" y="' + (y - 26) + '" width="3" height="10" fill="#475569"/>'; } return g; })() + '</g>' +
  // apartments
  '<g fill="#94a3b8">' + (function () { var g = ''; for (var i = 0; i < 6; i++) g += '<rect x="' + (220 + i * 28) + '" y="' + (150 - (i % 3) * 14) + '" width="22" height="' + (50 + (i % 3) * 14) + '"/>'; return g; })() + '</g>' +
  // smoke
  '<g fill="#6b7280" opacity=".55"><ellipse cx="300" cy="180" rx="180" ry="22"/><ellipse cx="200" cy="170" rx="80" ry="14"/><ellipse cx="400" cy="172" rx="90" ry="14"/></g>' +
  '<g fill="none" stroke="#6b7280" stroke-width="3" opacity=".7"><path d="M106 236 c -6 -14, 8 -20, 2 -34"/><path d="M512 238 c -6 -14, 8 -20, 2 -34"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="86" y1="30" x2="90" y2="58"/><line x1="96" y1="330" x2="96" y2="268"/><line x1="290" y1="292" x2="280" y2="210"/><line x1="560" y1="200" x2="470" y2="176"/><line x1="560" y1="104" x2="540" y2="136"/><line x1="430" y1="324" x2="400" y2="246"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.mongolia = {
    id: 'mongolia',
    name: 'Mongolia',
    short: 'Mongolia',
    country: 'Mongolia',
    gateway: 'Ulaanbaatar',
    lonlat: [106.9, 47.92],
    locator: { box: [87, 120, 40.5, 52.8], places: [['Ulaanbaatar', 106.9, 47.92, 'r'], ['Erdenet', 104.08, 49.03, 't'], ['Khovd', 91.64, 48.0, 'r'], ['Oyu Tolgoi', 106.86, 43.0, 'r'], ['GOBI DESERT', 101.5, 43.6, 'a'], ['RUSSIA', 100.0, 51.9, 'a'], ['CHINA', 113.5, 41.4, 'a']] },
    stamp: { colour: '#0369a1', icon: '⛺' },
    transport: { name: 'horse ride across the steppe', verb: 'Ride', emoji: '🐎' },
    scene: 'steppe',
    photo: { file: 'Mongolian-horse.jpg', alt: 'A sturdy brown Mongolian horse with a working saddle standing on short grass on the open steppe', author: 'Georg Mischler', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
    intro: {
      ks3: 'Sain baina uu! Welcome to Mongolia, a land of endless grassy steppe, where many families still live as nomads in round felt tents called gers. Ride a horse across the steppe and find out how people survive one of the coldest capital cities on Earth.',
      adv: 'Ride across the Mongolian steppe. This expedition covers an extreme continental climate, nomadic pastoralism and the dzud, rural–urban migration and Ulaanbaatar’s ger districts, winter smog and temperature inversions, mining in the Gobi, and Mongolian culture.'
    },
    facts: ['Ulaanbaatar is the coldest capital city in the world.', 'Mongolia has many more farm animals than people.', 'A ger can be put up in about an hour.'],
    climate: {
      place: 'Ulaanbaatar, Mongolia', source: 'Monthly averages (climatestotravel.com)', lat: '48°N', rmax: 100, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-21.0, -15.5, -6.5, 3.5, 11.0, 16.5, 19.5, 17.0, 10.5, 2.0, -10.0, -18.5],
      rain: [0, 5, 5, 10, 20, 45, 70, 60, 25, 5, 5, 5]
    },
    diagrams: { smog: SMOG_SVG },
    stations: [
      {
        id: 'steppe', title: 'Life on the steppe', icon: '🐎',
        tasks: {
          ks3: [
            { type: 'mcq', photo: true, q: 'Look at the photo. Why are horses so important to herders on the steppe?', options: ['They carry people across huge open grasslands', 'They pull boats on rivers', 'They are kept only as pets', 'They are used to plough rice fields in the valleys'], answer: 0,
              explain: 'Herders ride to look after their sheep, goats and cattle, which graze over large areas.' },
            { type: 'mcq', q: 'Why do many herders in Mongolia move several times a year?', options: ['To find fresh grass for their animals', 'To escape volcanoes', 'To follow the sea', 'To find jobs in factories in the cities each season'], answer: 0,
              explain: 'Moving stops the grass being overgrazed. The round felt ger can be packed up and carried.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Oyu Tolgoi mine from Ulaanbaatar?', options: ['South', 'North', 'East', 'West'], answer: 0,
              explain: 'Oyu Tolgoi is about 550 km south of the capital, in the Gobi Desert near the border with China.' }
          ],
          adv: [
            { type: 'mcq', photo: true, q: 'Study the photo of the steppe. Which climate feature explains why grass, not forest, covers most of Mongolia?', options: ['Low rainfall and very cold winters', 'Heavy rain all year', 'A hot, humid summer monsoon with heavy rain', 'Mild winters from the ocean'], answer: 0,
              explain: 'With only about 250 mm of rain in Ulaanbaatar, trees struggle; short grasses survive drought and frost.' },
            { type: 'mcq', q: 'In a dzud, millions of animals can die. What is a dzud?', options: ['A winter so harsh animals cannot graze', 'A summer heatwave', 'A flood from melting glaciers in the mountains', 'A sandstorm in spring'], answer: 0,
              explain: 'In 2023–24 a dzud killed over 7 million animals. Many herders lost their income and moved to the city.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the straight-line distance from Ulaanbaatar to Khovd in the west.', options: ['About 1,100 km', 'About 200 km', 'About 3,000 km', 'About 6,000 km'], answer: 0,
              explain: 'It is about 1,130 km. Mongolia is huge but has only about 3.5 million people.' }
          ]
        }
      },
      {
        id: 'climate', title: 'The coldest capital', icon: '🥶',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the coldest month in Ulaanbaatar?', options: ['January', 'July', 'April', 'October'], answer: 0,
              explain: 'January averages about −21°C. It is the coldest capital city in the world.' },
            { type: 'mcq', graph: true, q: 'When does most of Ulaanbaatar’s rain fall?', options: ['In summer', 'In winter', 'In spring only', 'Evenly all year'], answer: 0,
              explain: 'July and August are the wettest months. Winters are very dry as well as cold.' },
            { type: 'mcq', graph: true, q: 'How many months have an average temperature below 0°C?', options: ['Five', 'One', 'Nine', 'Twelve'], answer: 0,
              explain: 'November to March are below freezing. Rivers freeze solid for months.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Ulaanbaatar (°C). Give one decimal place.', answer: 40.5, tol: 0.2, unit: '°C',
              explain: 'Warmest 19.5°C − coldest −21.0°C = 40.5°C, an extreme continental range.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly precipitation falls in June, July and August? Give a whole number.', answer: 69, tol: 1, unit: '%',
              explain: 'June to August = 175 mm out of 255 mm, which is about 69%.' },
            { type: 'mcq', q: 'Why is Ulaanbaatar’s climate so extreme?', options: ['It is far inland and high up', 'It is on the Equator', 'It has a warm ocean current nearby', 'It is below sea level'], answer: 0,
              explain: 'At about 1,350 m and in the middle of Asia, it has no sea to moderate temperatures. In winter a high-pressure system sits over the region.' }
          ]
        }
      },
      {
        id: 'city', title: 'Gers and smog', icon: '🏙️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'smog', prompt: 'Label Ulaanbaatar in winter.',
              spots: [{ x: 14, y: 7, a: 'Mountains' }, { x: 16, y: 79, a: 'Gers' }, { x: 48, y: 70, a: 'Flats' }, { x: 93, y: 48, a: 'Smoke' }, { x: 93, y: 25, a: 'Warm air lid' }, { x: 72, y: 77, a: 'Cold air' }],
              extra: [],
              explain: 'In winter, cold air sinks into the valley. A layer of warmer air above acts like a lid, trapping smoke from thousands of coal stoves.' },
            { type: 'mcq', q: 'Why do many families in the ger districts burn coal in winter?', options: ['To keep warm in −20°C and below', 'To cook pizza', 'To make electricity for the city', 'To scare away wolves'], answer: 0,
              explain: 'Most gers are not connected to the city’s heating system, so families use small coal stoves.' },
            { type: 'mcq', q: 'Many people have moved from the steppe to Ulaanbaatar. Where do many of them live?', options: ['In gers on the edge of the city', 'In skyscrapers in the centre', 'On boats on the river', 'In caves'], answer: 0,
              explain: 'These ger districts often have no piped water or sewers.' }
          ],
          adv: [
            { type: 'label', diagram: 'smog', prompt: 'Label the winter smog cross-section. One label does not belong.',
              spots: [{ x: 14, y: 7, a: 'Valley sides' }, { x: 16, y: 79, a: 'Ger district' }, { x: 48, y: 70, a: 'Apartment blocks' }, { x: 93, y: 48, a: 'Trapped coal smoke' }, { x: 93, y: 25, a: 'Inversion layer' }, { x: 72, y: 77, a: 'Cold, dense air' }],
              extra: ['Sea breeze'],
              explain: 'Ulaanbaatar is far from the sea. A temperature inversion stops polluted air rising and dispersing.' },
            { type: 'sort', q: 'Classify these as push or pull factors for migration to Ulaanbaatar.', bins: ['Push (from steppe)', 'Pull (to city)'],
              items: [['Livestock killed in a dzud', 0], ['Overgrazed, degraded pasture', 0], ['Few schools in remote areas', 0], ['Jobs in services and mining', 1], ['Better hospitals', 1], ['Universities', 1]],
              explain: 'About half of Mongolians now live in Ulaanbaatar, putting pressure on housing, water and air quality.' },
            { type: 'mcq', q: 'Which strategy would most directly reduce Ulaanbaatar’s winter smog?', options: ['Connecting ger districts to clean heating', 'Building more coal power stations near the city', 'Banning buses in the city', 'Planting crops on the steppe'], answer: 0,
              explain: 'The government has banned raw coal in the city and introduced cleaner fuel and electric heaters, with mixed success.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Naadam and throat singing', icon: '🏹',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: which three sports are the heart of the Naadam festival?', options: ['Wrestling, horse racing and archery', 'Football, tennis and golf', 'Skiing, skating and sledging on the frozen river', 'Swimming, diving and rowing'], answer: 0,
              explain: 'Naadam is held every July. Child jockeys race horses for many kilometres across the steppe.' },
            { type: 'mcq', q: 'Culture: what is special about Mongolian throat singing (khöömei)?', options: ['One singer makes two notes at once', 'It is sung only underwater by trained divers', 'It has no sound', 'It uses only whistling'], answer: 0,
              explain: 'Singers make a deep drone and a high whistling tone together. It is UNESCO cultural heritage.' },
            { type: 'mcq', q: 'Which famous leader created the Mongol Empire in the 1200s?', options: ['Chinggis (Genghis) Khan', 'Julius Caesar', 'Alexander the Great', 'Napoleon'], answer: 0,
              explain: 'It became the largest connected land empire in history, stretching from China to Europe.' }
          ],
          adv: [
            { type: 'mcq', q: 'The Oyu Tolgoi mine in the Gobi produces copper and gold. Which is a concern about it?', options: ['It uses large amounts of scarce water', 'It floods the desert', 'It produces no jobs', 'It is in the middle of the capital'], answer: 0,
              explain: 'Mining brings export income, mostly from China, but herders worry about water and grazing land.' },
            { type: 'mcq', q: 'Mongolia sells most of its coal and copper to China. What is a risk of this?', options: ['Its economy depends heavily on one buyer', 'China is too far away', 'Coal cannot be transported by train or by truck', 'China does not use copper'], answer: 0,
              explain: 'If demand from China falls, Mongolia’s income and jobs fall too.' },
            { type: 'mcq', q: 'Why is the Gobi Desert famous with scientists?', options: ['Its rocks hold many dinosaur fossils', 'It has the world’s tallest sand dunes and cliffs', 'It is the wettest desert', 'It is below sea level'], answer: 0,
              explain: 'The first dinosaur eggs to be recognised by scientists were found at the Flaming Cliffs in the 1920s.' }
          ]
        }
      }
    ]
  };
})();
