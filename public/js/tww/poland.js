/* Travel the Wright Way — destination: Poland, focusing on Gdańsk and the Baltic coast (the Vistula delta and land below sea level, a Baltic climate, the energy transition away from coal, the port, and Polish culture).
 * Climate data: Gdańsk, 1991–2020 averages (climatsetvoyages.com; monthly figures sum to 580 mm).
 * Facts: the Vistula (Wisła), Poland's longest river, reaches the Baltic through a delta near Gdańsk; Żuławy Wiślane is reclaimed delta land (polders) protected by dykes and drained by pumping stations, with the lowest point in Poland about 1.8 m below sea level;
 *   a canal through the Vistula Spit opened in 2022, giving the port of Elbląg direct access to the Baltic without passing through Russian waters;
 *   coal still produced just over half of Poland's electricity in 2025 (down from over 80% a decade earlier); Bełchatów is the largest coal (lignite) power station in Europe; renewables reached about 30%; Poland is building offshore wind farms in the Baltic and plans its first nuclear power station in Pomerania;
 *   the Solidarity trade union was born at the Gdańsk Shipyard in August 1980; Gdańsk's old town was largely destroyed in 1945 and rebuilt; the medieval port crane (Żuraw) on the Motława is a city symbol; Gdańsk is known for amber; pierogi are filled dumplings.
 */
(function () {
  var DELTA_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the Vistula delta near Gdańsk: the Baltic Sea on the left, sand dunes on the coast, flat farmland lower than the sea with a drainage ditch, a pumping station, and a high embankment holding back the Vistula river, whose water is higher than the farmland">' +
  '<rect width="600" height="420" fill="#e0ecf5"/>' +
  '<line x1="0" y1="200" x2="600" y2="200" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="8 6"/><text x="214" y="194" font-family="sans-serif" font-size="13" fill="#2563eb">sea level</text>' +
  '<path d="M0 200 L130 200 L130 420 L0 420 Z" fill="#2b6fa3"/>' +
  '<path d="M120 420 L120 205 Q 140 150 165 160 Q 185 140 205 175 L215 232 L215 420 Z" fill="#e8d6a0"/>' +
  '<path d="M210 232 L430 232 L430 420 L210 420 Z" fill="#6b8f3a"/><path d="M210 240 L430 240 L430 420 L210 420 Z" fill="#7a5c3a"/>' +
  '<path d="M296 232 L304 244 L312 232 Z" fill="#3b82c4"/>' +
  '<rect x="368" y="198" width="34" height="34" fill="#b91c1c" stroke="#450a0a" stroke-width="2"/><path d="M364 200 L385 184 L406 200 Z" fill="#1f2937"/><path d="M402 210 L440 190 L470 190" fill="none" stroke="#475569" stroke-width="4"/>' +
  '<path d="M425 232 L450 168 L470 168 L480 190 L560 190 L566 168 L590 168 L600 232 L600 420 L425 420 Z" fill="#8a9a5b"/>' +
  '<path d="M478 186 L562 186 L562 210 Q 520 222 478 210 Z" fill="#3b82c4"/>' +
  '<g fill="#2f4f2a">' + (function () { var g = ''; for (var i = 0; i < 6; i++) g += '<rect x="' + (226 + i * 30) + '" y="218" width="3" height="14"/><circle cx="' + (227 + i * 30) + '" cy="216" r="6"/>'; return g; })() + '</g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="80" y1="60" x2="62" y2="214"/><line x1="190" y1="100" x2="162" y2="166"/><line x1="240" y1="330" x2="250" y2="236"/><line x1="360" y1="100" x2="384" y2="196"/><line x1="420" y1="370" x2="306" y2="242"/><line x1="520" y1="90" x2="456" y2="172"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.poland = {
    id: 'poland',
    name: 'Poland',
    short: 'Poland',
    country: 'Poland',
    gateway: 'Gdańsk',
    lonlat: [18.65, 54.35],
    locator: { box: [16.5, 22.0, 51.0, 55.0], rivers: [[[21.01, 52.25], [20.3, 52.4], [19.4, 52.65], [18.6, 53.0], [18.75, 53.5], [18.85, 54.0], [18.95, 54.36]]], places: [['Gdańsk', 18.65, 54.35, 'l'], ['Malbork', 19.03, 54.04, 'r'], ['Warsaw', 21.01, 52.23, 't'], ['Bełchatów', 19.37, 51.36, 'r'], ['Łeba', 17.56, 54.76, 'b'], ['Baltic Sea', 18.0, 54.85, 'a'], ['Vistula', 19.6, 52.95, 'a']] },
    stamp: { colour: '#b91c1c', icon: '⚓' },
    transport: { name: 'river ferry', verb: 'Sail', emoji: '⛴️' },
    scene: 'gdansk',
    photo: { file: 'Gdansk THE CRANE.JPG', alt: 'A tall medieval brick gateway with a huge wooden upper section, beside a river lined with colourful old buildings and boats', author: 'Gdansk Holidays', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
    intro: {
      ks3: 'Dzień dobry! Welcome to Gdańsk on Poland’s Baltic coast. Take a river ferry past the old port, then discover farmland that lies lower than the sea, and a country trying to switch off its coal power stations.',
      adv: 'Sail into Gdańsk. This expedition covers the Vistula delta and reclaimed land below sea level, a Baltic climate, Poland’s energy transition from coal, the port economy, and Polish history and culture.'
    },
    facts: ['Parts of the Vistula delta lie about 1.8 m below sea level.', 'The Solidarity movement began at the Gdańsk Shipyard in 1980.', 'Bełchatów is the largest coal power station in Europe.'],
    climate: {
      place: 'Gdańsk, Poland', source: '1991–2020 averages (climatsetvoyages.com)', lat: '54°N', rmax: 100, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-1.3, -0.8, 2.2, 7.0, 11.4, 15.0, 17.4, 17.2, 13.2, 8.3, 3.6, 0.1],
      rain: [30, 25, 30, 30, 55, 60, 80, 70, 65, 55, 45, 35]
    },
    diagrams: { delta: DELTA_SVG },
    stations: [
      {
        id: 'delta', title: 'Below sea level', icon: '🌊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'delta', prompt: 'Label this cross-section of the Vistula delta.',
              spots: [{ x: 13.3, y: 14.3 }, { x: 31.7, y: 23.8 }, { x: 40, y: 78.6 }, { x: 60, y: 23.8 }, { x: 70, y: 88.1 }, { x: 86.7, y: 21.4 }].map(function (s, i) { s.a = ['Baltic Sea', 'Sand dunes', 'Farmland below sea level', 'Pumping station', 'Drainage ditch', 'River embankment'][i]; return s; }),
              extra: [],
              explain: 'Without the pumps and embankments, much of this farmland would flood.' },
            { type: 'mcq', photo: true, q: 'Look at the photo. This medieval crane once lifted heavy cargo onto ships. What does it tell you about Gdańsk?', options: ['It has been a busy trading port for centuries', 'It was built on top of a mountain far from any water', 'Ships never visited the city', 'It was a desert town'], answer: 0,
              explain: 'Gdańsk grew rich trading grain, timber and amber across the Baltic Sea.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Warsaw from Gdańsk?', options: ['South-east', 'North-west', 'South-west', 'North-east'], answer: 0,
              explain: 'The capital, Warsaw, is about 280 km south-east, also on the Vistula.' }
          ],
          adv: [
            { type: 'label', diagram: 'delta', prompt: 'Label the features of the reclaimed Vistula delta. One label does not belong.',
              spots: [{ x: 13.3, y: 14.3 }, { x: 31.7, y: 23.8 }, { x: 40, y: 78.6 }, { x: 60, y: 23.8 }, { x: 70, y: 88.1 }, { x: 86.7, y: 21.4 }].map(function (s, i) { s.a = ['Baltic Sea', 'Coastal dunes (natural defence)', 'Polder reclaimed from the delta', 'Pumping station lifts water out', 'Drainage channel', 'Levee holding back the Vistula'][i]; return s; }),
              extra: ['Fjord'],
              explain: 'As drained peat and silt dry out they shrink, so the land sinks and needs constant pumping.' },
            { type: 'mcq', q: 'Why will sea level rise be a growing challenge for the Vistula delta?', options: ['Higher seas mean more pumping and higher defences are needed', 'The delta will become a desert', 'The river will stop flowing', 'The land is slowly rising faster than the sea, so the risk is falling'], answer: 0,
              explain: 'Storm surges from the Baltic and river floods from the south can both threaten the polders.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Gdańsk to the Bełchatów power station.', options: ['About 335 km', 'About 35 km', 'About 1,200 km', 'About 3,000 km'], answer: 0,
              explain: 'Bełchatów, in central Poland, burns lignite (brown coal) dug from a huge open-pit mine next to it.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Baltic weather', icon: '🌦️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the coldest month in Gdańsk?', options: ['January', 'July', 'May', 'September'], answer: 0,
              explain: 'January averages −1.3°C. The sea keeps the coast a little milder than inland Poland.' },
            { type: 'mcq', graph: true, q: 'Which is the wettest month?', options: ['July', 'February', 'March', 'January'], answer: 0,
              explain: 'July has about 80 mm, much of it from summer thunderstorms.' },
            { type: 'mcq', graph: true, q: 'Which best describes Gdańsk’s climate?', options: ['Cold winters, mild summers and some rain all year', 'Hot and dry all year', 'Warm all year, with a wet monsoon season in the summer months', 'Freezing all year round'], answer: 0,
              explain: 'This is a cool temperate climate with both sea and continental influences.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual precipitation in Gdańsk (mm).', answer: 580, tol: 3, unit: 'mm',
              explain: 'Adding the twelve months gives 580 mm, quite low for a coastal city.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 18.7, tol: 0.2, unit: '°C',
              explain: 'July 17.4°C − January (−1.3°C) = 18.7°C.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly precipitation falls from May to September? Give a whole number.', answer: 57, tol: 1, unit: '%',
              explain: 'May to September = 330 mm. 330 ÷ 580 × 100 ≈ 57%, so most rain falls in the warmer months.' }
          ]
        }
      },
      {
        id: 'energy', title: 'From coal to wind', icon: '⚡',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Where does about half of Poland’s electricity still come from?', options: ['Coal power stations', 'Nuclear power stations', 'Volcanoes', 'Tidal power'], answer: 0,
              explain: 'In 2025 coal made just over half of Poland’s electricity, more than any other EU country.' },
            { type: 'mcq', q: 'Many Polish homes burn coal for heating in winter. What problem does this cause?', options: ['Smog and poor air quality', 'Too much snow', 'Rivers drying up', 'Earthquakes'], answer: 0,
              explain: 'Polish cities, such as Kraków, have some of the worst air pollution in the EU in winter.' },
            { type: 'mcq', q: 'Which new energy source is Poland building in the Baltic Sea?', options: ['Offshore wind farms', 'Coal mines under the sea', 'Oil wells in the beaches', 'Geothermal volcanoes'], answer: 0,
              explain: 'The Baltic is shallow and windy, which is ideal for wind turbines.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these factors in Poland’s energy transition.', bins: ['Pushing change', 'Slowing change'],
              items: [['EU carbon prices make coal power expensive', 0], ['Falling cost of solar panels', 0], ['Strong Baltic winds for offshore turbines', 0], ['Tens of thousands of jobs in coal mining', 1], ['Coal-fired district heating in many towns', 1], ['Power grid built around big coal plants', 1]],
              explain: 'Coal’s share of electricity has fallen from over 80% to about half in a decade, but the change is uneven.' },
            { type: 'mcq', q: 'Why is closing coal mines in Silesia, in southern Poland, socially difficult?', options: ['Whole communities depend on mining jobs', 'There is no coal left there', 'The mines are all underwater and cannot be reached any more', 'Miners have never been paid'], answer: 0,
              explain: 'A “just transition” means retraining workers and bringing new industries to mining regions.' },
            { type: 'mcq', q: 'Poland plans its first nuclear power station on the Baltic coast. What is one main advantage?', options: ['Steady low-carbon electricity, whatever the weather', 'It needs no water for cooling', 'It produces no waste at all', 'It can be built in a few months and needs no safety checks'], answer: 0,
              explain: 'Nuclear power could help replace coal when the wind does not blow and the sun does not shine.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Solidarity and amber', icon: '🟠',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: what started at the Gdańsk Shipyard in 1980?', options: ['Solidarity, a workers’ movement that helped end communist rule', 'The first Olympic Games', 'Poland’s first professional football club, which later won the European Cup', 'A famous film festival'], answer: 0,
              explain: 'It was led by an electrician, Lech Wałęsa, who later became Poland’s president.' },
            { type: 'mcq', q: 'Culture: Gdańsk is famous for amber jewellery. Where does the amber come from?', options: ['It washes up on Baltic beaches', 'It is mined in volcanoes', 'It is made in factories from plastic', 'It grows on trees today'], answer: 0,
              explain: 'Amber is fossilised tree resin from forests that grew around 40 million years ago.' },
            { type: 'mcq', q: 'Culture: what are pierogi, a favourite Polish food?', options: ['Filled dumplings', 'Sweet pancakes', 'Fried fish', 'Bread rolls'], answer: 0,
              explain: 'They can be filled with potato and cheese, cabbage, meat or fruit.' }
          ],
          adv: [
            { type: 'mcq', q: 'Gdańsk’s old town was largely destroyed in 1945. Why was it rebuilt to look as it did before?', options: ['To restore the city’s history and identity', 'Because new building styles were banned', 'To make it look like Paris', 'Because it was cheaper than building new'], answer: 0,
              explain: 'Builders used old drawings, paintings and photos to recreate the streets and gabled houses.' },
            { type: 'mcq', q: 'A canal cut through the Vistula Spit opened in 2022. Why did Poland build it?', options: ['So ships can reach Elbląg without passing through Russian waters', 'To drain the Baltic Sea', 'To create a new beach for tourists', 'To stop the Vistula reaching the sea so the delta farmland dries out'], answer: 0,
              explain: 'Before, ships had to use a strait controlled by Russia’s Kaliningrad region.' },
            { type: 'mcq', q: 'The port of Gdańsk is one of the busiest on the Baltic Sea. Which factor most helps it grow?', options: ['Deep water and links to Poland’s rail and road network', 'Ice that covers the whole port for most of the winter months', 'Being far from any other countries', 'Having no warehouses nearby'], answer: 0,
              explain: 'Its deep-water container terminal can take some of the largest ships that sail into the Baltic.' }
          ]
        }
      }
    ]
  };
})();
