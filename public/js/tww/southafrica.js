/* Travel the Wright Way — destination: South Africa (Cape Town's Mediterranean climate and Day Zero, the Kruger savanna, people and culture).
 * Climate data: Cape Town, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Day Zero: after a drought from 2015 to 2017, Cape Town limited residents to 50 litres per person per day from February 2018;
 *   the city roughly halved its water use and Day Zero was avoided when winter rains returned in 2018.
 * Kruger National Park covers nearly 20,000 km². South Africa has 12 official languages (South African Sign Language added in 2023);
 *   apartheid ended with the first democratic elections in 1994; the World Bank ranks South Africa among the most unequal countries.
 */
(function () {
  var SAVANNA_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Savanna scene with an acacia tree and its roots, grassland, a termite mound and a waterhole">' +
  '<rect width="600" height="420" fill="#fde7b0"/><circle cx="540" cy="60" r="26" fill="#ff9f43"/>' +
  '<rect y="290" width="600" height="130" fill="#9b6a3f"/>' +
  '<rect y="276" width="600" height="16" fill="#d8b45a"/>' +
  '<g stroke="#b8923a" stroke-width="2">' + (function () { var g = ''; for (var i = 0; i < 40; i++) g += '<line x1="' + (i * 15 + 4) + '" y1="290" x2="' + (i * 15 + 9) + '" y2="' + (268 + (i * 7) % 12) + '"/>'; return g; })() + '</g>' +
  // tap root
  '<path d="M166 290 L174 290 L184 408 L178 408 Z" fill="#6b4423"/><g stroke="#6b4423" stroke-width="3" fill="none"><path d="M170 300 L120 320"/><path d="M172 306 L222 330"/></g>' +
  // trunk and branches
  '<path d="M162 290 L166 178 L176 178 L180 290 Z" fill="#7a5a32"/>' +
  '<g stroke="#7a5a32" stroke-width="8" fill="none" stroke-linecap="round"><path d="M170 185 L110 160"/><path d="M172 185 L236 158"/></g>' +
  '<g stroke="#fff" stroke-width="2"><line x1="112" y1="162" x2="106" y2="172"/><line x1="122" y1="166" x2="118" y2="177"/><line x1="132" y1="170" x2="128" y2="181"/></g>' +
  '<ellipse cx="172" cy="148" rx="122" ry="24" fill="#4f7a2a"/>' +
  // termite mound
  '<path d="M358 290 L370 220 L380 200 L390 222 L402 290 Z" fill="#c9884a" stroke="#7a5a32" stroke-width="2"/>' +
  // waterhole and elephant
  '<ellipse cx="490" cy="298" rx="72" ry="12" fill="#4aa3d8"/>' +
  '<g fill="#7d7f86"><ellipse cx="540" cy="256" rx="26" ry="17"/><rect x="520" y="266" width="8" height="20"/><rect x="548" y="266" width="8" height="20"/><path d="M516 250 q-14 6 -10 30" stroke="#7d7f86" stroke-width="6" fill="none"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="168" y1="98" x2="170" y2="128"/><line x1="96" y1="196" x2="114" y2="170"/><line x1="230" y1="252" x2="180" y2="250"/><line x1="240" y1="370" x2="182" y2="370"/><line x1="384" y1="174" x2="380" y2="204"/><line x1="96" y1="306" x2="90" y2="282"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.southafrica = {
    id: 'southafrica',
    name: 'South Africa',
    short: 'South Africa',
    country: 'South Africa',
    gateway: 'Cape Town',
    lonlat: [18.4, -33.9],
    locator: { box: [13, 33.5, -35.5, -21.5], places: [['Cape Town', 18.42, -33.92, 'r'], ['Johannesburg', 28.05, -26.2, 'l'], ['Kruger National Park', 31.5, -24.0, 'l'], ['Durban', 31.03, -29.86, 'l'], ['Atlantic Ocean', 17.2, -31.0, 'a'], ['Indian Ocean', 31.5, -33.5, 'a']] },
    stamp: { colour: '#15803d', icon: '🦁' },
    transport: { name: 'safari truck', verb: 'Drive', emoji: '🚙' },
    scene: 'savanna',
    photo: { file: 'Table Mountain, Cape Town (P1050222).jpg', alt: 'The flat-topped Table Mountain rising above the city of Cape Town', author: 'Matti Blume', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'You land in Cape Town, beneath the flat top of Table Mountain, a city that nearly ran out of water. Then fly north-east to Kruger National Park and climb into a safari truck to look for elephants, lions and giraffes on the savanna.',
      adv: 'From Cape Town you explore a country of contrasts: a Mediterranean climate and the 2018 “Day Zero” water crisis, the savanna ecosystem of Kruger National Park, and the inequality, farming and culture shaped by South Africa’s history.'
    },
    facts: ['South Africa has 12 official languages.', 'Kruger National Park covers nearly 20,000 km², about the size of Wales.', 'In 2018 Cape Town came close to becoming the first major city to turn off its taps.'],
    climate: {
      place: 'Cape Town, South Africa', source: 'Long-term averages (CRU / Met Office)', lat: '34°S', rmax: 200,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [20.0, 20.0, 19.0, 17.0, 14.5, 12.5, 12.5, 12.5, 13.5, 15.0, 17.0, 19.0],
      rain: [32, 31, 43, 82, 136, 189, 164, 163, 96, 61, 40, 43]
    },
    diagrams: { savanna: SAVANNA_SVG },
    stations: [
      {
        id: 'climate', title: 'Cape Town’s climate', icon: '🌦️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'When does Cape Town get most of its rain?', options: ['Winter (June to August)', 'Summer (December to February)', 'Evenly all year', 'Only in March'], answer: 0,
              explain: 'The tallest bars are in June, July and August, which is winter in the Southern Hemisphere.' },
            { type: 'mcq', graph: true, q: 'Cape Town has hot, dry summers and mild, wet winters. What is this type of climate called?', options: ['Mediterranean', 'Tropical rainforest', 'Polar', 'Monsoon'], answer: 0,
              explain: 'It is the same climate type as Spain, Italy, California and parts of Australia.' },
            { type: 'mcq', graph: true, q: 'Which is the wettest month?', options: ['June', 'January', 'October', 'December'], answer: 0,
              explain: 'June has the tallest bar, about 189 mm.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Cape Town (°C).', answer: 7.5, tol: 0.1, unit: '°C',
              explain: 'Warmest 20.0°C − coolest 12.5°C = 7.5°C. The cold Benguela Current offshore keeps summers mild.' },
            { type: 'mcq', graph: true, q: 'What causes Cape Town’s winter rain?', options: ['Cold fronts in the westerlies move north in winter', 'The ITCZ moves south over the city in winter, bringing heavy thunderstorms', 'Monsoon winds from India', 'Snow melting on Table Mountain'], answer: 0,
              explain: 'In winter the belt of westerlies and their fronts shifts towards the Equator. In summer, the South Atlantic high-pressure system brings dry, sunny weather.' },
            { type: 'number', graph: true, q: 'What percentage of the year’s rain falls from May to August? (Total = 1,080 mm.) Give a whole number.', answer: 60, tol: 1, unit: '%',
              explain: '136 + 189 + 164 + 163 = 652 mm. 652 ÷ 1,080 × 100 = 60%. A short, concentrated wet season makes storing water essential.' }
          ]
        }
      },
      {
        id: 'water', title: 'Day Zero', icon: '🚰',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'In 2018 Cape Town warned of “Day Zero”. What did it mean?', options: ['The day the taps would be turned off as dams ran dry', 'The first day of the winter rains, when the dams would start to fill up again', 'A day with no wind', 'A national holiday'], answer: 0,
              explain: 'After three dry winters, the dams that supply the city fell to very low levels.' },
            { type: 'number', q: 'People were asked to use only 50 litres of water a day. A 5-minute shower uses about 10 litres a minute. How many litres is that?', answer: 50, tol: 0, unit: 'litres',
              explain: '5 × 10 = 50 litres: a whole day’s allowance in one shower! People took very short showers and reused water to flush toilets.' },
            { type: 'sort', q: 'Sort these into causes of the crisis and responses to it.', bins: ['Cause', 'Response'],
              items: [['Three very dry winters in a row', 0], ['A fast-growing population', 0], ['Dams were the main water supply', 0], ['Water limit of 50 litres per person per day', 1], ['Higher water prices for big users', 1], ['Drilling for groundwater', 1]],
              explain: 'A natural drought combined with rising demand. The city cut use dramatically and found new supplies. Day Zero never arrived.' }
          ],
          adv: [
            { type: 'mcq', q: 'Cape Town roughly halved its water use, and Day Zero was avoided. What was the most important factor?', options: ['Strict restrictions and behaviour change, then winter rain', 'Importing icebergs towed from Antarctica to the city’s harbour', 'Moving the city', 'Building a dam in one month'], answer: 0,
              explain: 'Demand management worked faster than any new supply. Farmers also gave up part of their water allocation.' },
            { type: 'mcq', q: 'During the crisis, people in informal settlements already used very little water from shared standpipes. What does this show?', options: ['Water insecurity is unequal; the poorest often have least access', 'Everyone in the city used exactly the same amount of water each day', 'Informal settlements had swimming pools', 'Water was free for wealthy homes'], answer: 0,
              explain: 'Wealthier suburbs with gardens and pools had the most to cut. Fair water management must consider inequality.' },
            { type: 'mcq', q: 'Which long-term plan best increases Cape Town’s water security?', options: ['Diversifying supply: groundwater, recycling and desalination', 'Relying only on rain-fed dams, but building more of them in the same valleys', 'Increasing water use', 'Removing water meters'], answer: 0,
              explain: 'Climate change may make droughts more frequent. Several sources reduce the risk of any one failing.' }
          ]
        }
      },
      {
        id: 'savanna', title: 'Safari on the savanna', icon: '🦒',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'savanna', prompt: 'Label this savanna scene in Kruger National Park.',
              spots: [{ x: 28, y: 20, a: 'Acacia tree' }, { x: 16, y: 74, a: 'Grassland' }, { x: 64, y: 38, a: 'Termite mound' }, { x: 80, y: 72, a: 'Waterhole' }, { x: 44, y: 88, a: 'Long roots' }],
              extra: [],
              explain: 'Savannas are tropical grasslands with scattered trees. Long roots reach water deep underground, and animals gather at waterholes in the dry season.' },
            { type: 'mcq', q: 'The savanna has a wet season and a long dry season. What happens to the grass in the dry season?', options: ['It turns yellow and dies back, and fires are common', 'It grows taller and greener, because the cooler weather suits it better', 'It turns blue', 'It is covered in snow'], answer: 0,
              explain: 'Without rain, the grass dries out. Fires sweep through, but grasses regrow from their roots when the rain returns.' },
            { type: 'mcq', q: 'Why do giraffes have such long necks?', options: ['To reach high acacia leaves other animals can’t', 'To see predators over the tops of the mountains', 'To swim', 'To keep warm'], answer: 0,
              explain: 'This adaptation reduces competition for food with grazing animals such as zebra and wildebeest.' },
            { type: 'mcq', q: 'Which animals make up the “Big Five” that tourists hope to see?', options: ['Lion, leopard, elephant, rhino and buffalo', 'Penguin, seal, whale, dolphin and shark', 'Giraffe, zebra, hippo, crocodile and ostrich', 'Kangaroo, koala, emu, wombat and dingo'], answer: 0,
              explain: 'Safari tourism brings income and jobs, and gives a reason to protect wildlife.' }
          ],
          adv: [
            { type: 'label', diagram: 'savanna', prompt: 'Label the adaptations and features. One label does not belong.',
              spots: [{ x: 28, y: 20, a: 'Flat umbrella crown' }, { x: 16, y: 47, a: 'Thorns' }, { x: 44, y: 60, a: 'Thick, fire-resistant bark' }, { x: 44, y: 88, a: 'Deep tap root' }, { x: 64, y: 38, a: 'Termite mound' }, { x: 80, y: 72, a: 'Waterhole' }],
              extra: ['Drip-tip leaves'],
              explain: 'Drip tips belong to rainforest leaves. Acacias have deep tap roots for groundwater, thorns to deter browsers, thick bark to survive fire and small leaves to reduce water loss.' },
            { type: 'mcq', q: 'Savanna soils are often red and not very fertile. Why?', options: ['Wet-season rain leaches nutrients, leaving iron oxides', 'Too much leaf litter builds up and smothers the soil in a thick layer', 'They are frozen', 'Volcanic ash covers them'], answer: 0,
              explain: 'Leaching and fast decomposition mean few nutrients are stored in the soil.' },
            { type: 'mcq', q: 'Rhino poaching is a major threat in Kruger. Which response tackles both the supply and the demand?', options: ['Anti-poaching patrols, plus campaigns to cut demand for horn', 'Building more roads through the park so tourists can spot poachers', 'Removing park rangers', 'Banning tourists'], answer: 0,
              explain: 'Protecting rhinos needs action on the ground and international cooperation to reduce illegal trade.' }
          ]
        }
      },
      {
        id: 'people', title: 'People, farming and culture', icon: '🌍',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: South Africa is sometimes called the “Rainbow Nation”. How many official languages does it have?', options: ['12', '1', '3', '50'], answer: 0,
              explain: 'They include isiZulu, isiXhosa, Afrikaans, English and South African Sign Language. The nickname celebrates the country’s many cultures.' },
            { type: 'mcq', q: 'Grapes for wine and fruit such as apples and citrus are grown near Cape Town. Which climate feature helps?', options: ['Hot, dry, sunny summers, with winter rain', 'Heavy rain every day of the year, which keeps the fruit juicy', 'Snow all year', 'Very short days'], answer: 0,
              explain: 'Mediterranean climates are ideal for vineyards and orchards, though irrigation is needed in summer.' },
            { type: 'mcq', q: 'What was apartheid, which ended in 1994?', options: ['Laws that separated people by race and gave white people more rights', 'A system of farming in which land was shared equally between all families', 'A wildlife law', 'A sports competition'], answer: 0,
              explain: 'Under apartheid, Black South Africans were forced into separate areas. Nelson Mandela became president after the first democratic election in 1994.' }
          ],
          adv: [
            { type: 'mcq', q: 'South Africa is one of the most unequal countries in the world. Which is a lasting geographical effect of apartheid?', options: ['Townships far from city centres, with long commutes', 'Equal housing in every area of every city across the country', 'All jobs in rural areas', 'No cities'], answer: 0,
              explain: 'Apartheid planning placed Black residents on the edge of cities. Despite progress since 1994, spatial inequality remains.' },
            { type: 'sort', q: 'Classify these features of South Africa’s economy.', bins: ['Primary', 'Secondary', 'Tertiary'],
              items: [['Gold and platinum mining', 0], ['Fruit and wine farming', 0], ['Car manufacturing', 1], ['Steel production', 1], ['Banking in Johannesburg', 2], ['Safari tourism', 2]],
              explain: 'South Africa is an emerging economy with all three sectors; services now provide most jobs.' },
            { type: 'mcq', q: 'Culture: the idea of “ubuntu” is often described as “I am because we are”. What does it emphasise?', options: ['Shared humanity and caring for the community', 'Competition between individuals to get ahead', 'Living alone', 'Owning land'], answer: 0,
              explain: 'Ubuntu comes from southern African philosophy and influenced South Africa’s Truth and Reconciliation Commission after apartheid.' }
          ]
        }
      }
    ]
  };
})();
