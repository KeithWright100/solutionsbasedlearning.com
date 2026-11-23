/*
 * Danillion prompt banks, shared by both versions of the game:
 *   /geography/games/danillion       (mountain climb)
 *   /geography/games/danillion-deep  (Mariana Trench dive)
 * Edit answers and points here once and both games update.
 */
/* ===== Prompt bank =====
   Each answer: [display name, points, [other accepted names/spellings]].
   Points: 10 obvious, 25 well known, 40 good thinking, 60 rare, 80 very rare, 100 deep cut.
   near: answers students often give that are NOT correct, with a short teaching note. */
const PROMPTS=[
{id:'eu-landlocked',q:'Name a landlocked country in Europe.',a:[
['Switzerland',10],['Austria',10],['Hungary',25],['Czechia',25,['Czech Republic']],['Slovakia',40],['Luxembourg',40],['Serbia',60],['Belarus',60],['Vatican City',60,['Vatican','Holy See']],['Liechtenstein',80],['Andorra',80],['San Marino',80],['Moldova',80],['North Macedonia',100,['Macedonia']],['Kosovo',100]],
near:{'germany':'Germany has coasts on the North Sea and the Baltic Sea.','poland':'Poland has a Baltic Sea coast.','monaco':'Monaco is tiny, but it is on the Mediterranean coast.'},
note:'Europe has 15 landlocked countries if you leave out Armenia, Azerbaijan and Kazakhstan, which lie partly in Asia.'},
{id:'equator',q:'Name a country the Equator passes through.',a:[
['Brazil',10],['Ecuador',10],['Kenya',25],['Indonesia',25],['Colombia',40],['Uganda',40],['Democratic Republic of the Congo',60,['DR Congo','DRC','Democratic Republic of Congo','Congo Kinshasa']],['Somalia',60],['Republic of the Congo',80,['Congo','Republic of Congo','Congo Brazzaville']],['Gabon',80],['Maldives',80],['Kiribati',100],['São Tomé and Príncipe',100,['Sao Tome','Sao Tome and Principe']]],
near:{'peru':'Peru is close, but the Equator passes just north of it, through Ecuador and Colombia.','tanzania':'Tanzania is just south of the Equator.','malaysia':'Malaysia is just north of the Equator.','singapore':'Singapore is only about 140 km north of the Equator.'},
note:'In the Maldives and Kiribati the Equator crosses the country’s waters between its islands.'},
{id:'china-borders',q:'Name a country that shares a land border with China.',a:[
['India',10],['Russia',10],['Mongolia',25],['North Korea',25],['Vietnam',25,['Viet Nam']],['Nepal',40],['Pakistan',40],['Myanmar',40,['Burma']],['Laos',40,['Lao PDR']],['Bhutan',60],['Kazakhstan',60],['Afghanistan',80],['Kyrgyzstan',100,['Kyrgyz Republic','Kirghizia']],['Tajikistan',100]],
near:{'thailand':'Thailand is close, but Laos and Myanmar sit between Thailand and China.','south korea':'South Korea borders only North Korea.','japan':'Japan is an island country with no land borders.','bangladesh':'Bangladesh is close, but India and Myanmar separate it from China.'},
note:'China shares land borders with 14 countries, joint most in the world with Russia.'},
{id:'asean',q:'Name a member country of ASEAN.',a:[
['Thailand',10],['Malaysia',10],['Singapore',10],['Vietnam',25,['Viet Nam']],['Indonesia',25],['Philippines',25],['Cambodia',40],['Laos',40,['Lao PDR']],['Myanmar',40,['Burma']],['Brunei',80,['Brunei Darussalam']],['Timor-Leste',100,['East Timor','Timor Leste','Timor']]],
near:{'china':'China is an ASEAN partner, not a member.','japan':'Japan is an ASEAN partner, not a member.','papua new guinea':'Papua New Guinea is an observer, not a member.'},
note:'Timor-Leste became ASEAN’s 11th member in October 2025.'},
{id:'8000ers',q:'Name one of the 14 mountains higher than 8,000 metres.',a:[
['Everest',10,['Mount Everest','Sagarmatha','Chomolungma']],['K2',25],['Kangchenjunga',60,['Kanchenjunga']],['Annapurna',60],['Lhotse',80],['Makalu',80],['Cho Oyu',80],['Nanga Parbat',80],['Manaslu',100],['Dhaulagiri',100],['Gasherbrum I',100,['Gasherbrum','Gasherbrum 1','Hidden Peak']],['Gasherbrum II',100,['Gasherbrum 2']],['Broad Peak',100],['Shishapangma',100,['Shisha Pangma','Xixabangma']]],
near:{'kilimanjaro':'Kilimanjaro is Africa’s highest mountain, but it is “only” 5,895 m.','denali':'Denali is 6,190 m, the highest in North America.','aconcagua':'Aconcagua is 6,961 m, the highest outside Asia.','fuji':'Mount Fuji is 3,776 m.','k1':'There is no K1 in this list. Did you mean K2?'},
note:'All 14 are in the Himalaya and Karakoram ranges of Asia.'},
{id:'seven-summits',q:'Name one of the Seven Summits: the highest mountain on each continent.',a:[
['Everest',10,['Mount Everest']],['Kilimanjaro',25],['Mont Blanc',40,['Mount Blanc']],['Denali',60,['McKinley','Mount McKinley']],['Aconcagua',60],['Elbrus',80,['Mount Elbrus']],['Kosciuszko',80,['Kosciusko','Mount Kosciuszko']],['Vinson',100,['Vinson Massif','Mount Vinson']],['Puncak Jaya',100,['Carstensz','Carstensz Pyramid']]],
near:{'k2':'K2 is the world’s second-highest mountain, but Everest is Asia’s highest.','fuji':'Mount Fuji is Japan’s highest, not Asia’s.','matterhorn':'The Matterhorn is famous, but Elbrus and Mont Blanc are higher.','andes':'The Andes is a range. Can you name its highest peak?','himalayas':'The Himalaya is a range. Can you name its highest peak?','himalaya':'The Himalaya is a range. Can you name its highest peak?'},
note:'Europe’s summit is Elbrus or Mont Blanc, and Australia’s is Kosciuszko or Puncak Jaya, depending on how you draw the continents. Both versions count here.'},
{id:'100m',q:'Name a country with a population of more than 100 million.',a:[
['China',10],['India',10],['United States',10,['USA','US','America','United States of America']],['Indonesia',25],['Brazil',25],['Russia',25],['Japan',25],['Nigeria',40],['Pakistan',40],['Mexico',40],['Bangladesh',60],['Philippines',60],['Egypt',60],['Ethiopia',80],['Vietnam',80,['Viet Nam']],['Democratic Republic of the Congo',100,['DR Congo','DRC','Democratic Republic of Congo']]],
near:{'thailand':'Thailand has about 70 million people.','united kingdom':'The UK has about 69 million people.','uk':'The UK has about 69 million people.','germany':'Germany has about 84 million people.','iran':'Iran has about 90 million people. Close!','turkey':'Turkey has about 86 million people. Close!','congo':'Be specific: the Democratic Republic of the Congo has over 100 million people, but the Republic of the Congo has about 6 million.'},
note:'Based on recent UN estimates, 16 countries have more than 100 million people.'},
{id:'caribbean',q:'Name an independent island country in the Caribbean.',a:[
['Jamaica',10],['Cuba',10],['Bahamas',25],['Barbados',25],['Haiti',25],['Dominican Republic',40],['Trinidad and Tobago',40,['Trinidad']],['Saint Lucia',60],['Grenada',60],['Antigua and Barbuda',80,['Antigua']],['Dominica',80],['Saint Kitts and Nevis',100,['Saint Kitts','St Kitts and Nevis']],['Saint Vincent and the Grenadines',100,['Saint Vincent','St Vincent']]],
near:{'puerto rico':'Puerto Rico is a territory of the USA, not an independent country.','cayman islands':'The Cayman Islands are a British Overseas Territory.','bermuda':'Bermuda is a British territory, and it is in the Atlantic, not the Caribbean.','aruba':'Aruba is part of the Kingdom of the Netherlands.','curacao':'Curaçao is part of the Kingdom of the Netherlands.','hispaniola':'Hispaniola is an island. Name one of the two countries on it.'},
note:'Haiti and the Dominican Republic share the island of Hispaniola.'},
{id:'sa-capitals',q:'Name a capital city in South America.',a:[
['Buenos Aires',10],['Lima',25],['Brasília',25,['Brasilia']],['Santiago',25],['Bogotá',40,['Bogota']],['Caracas',40],['Quito',40],['Montevideo',60],['La Paz',60],['Asunción',80,['Asuncion']],['Sucre',100],['Georgetown',100],['Paramaribo',100]],
near:{'rio de janeiro':'Rio de Janeiro was Brazil’s capital until 1960, when it moved to Brasília.','rio':'Rio de Janeiro was Brazil’s capital until 1960, when it moved to Brasília.','sao paulo':'São Paulo is Brazil’s biggest city, but not its capital.','medellin':'Medellín is in Colombia, but Bogotá is the capital.','guayaquil':'Guayaquil is Ecuador’s biggest city, but Quito is the capital.','cusco':'Cusco was the Inca capital, but Lima is Peru’s capital today.'},
note:'Bolivia has two capitals: La Paz (seat of government) and Sucre (constitutional capital).'},
{id:'mekong',q:'Name a country the Mekong River flows through or along.',a:[
['Thailand',10],['Vietnam',10,['Viet Nam']],['Laos',25,['Lao PDR']],['Cambodia',25],['China',60],['Myanmar',80,['Burma']]],
near:{'malaysia':'The Mekong does not reach Malaysia.','india':'The Mekong rises on the Tibetan Plateau in China, not in India.','tibet':'Tibet is part of China. Name the country to score.'},
note:'The Mekong rises in China and forms part of the borders of Myanmar, Laos and Thailand.'},
{id:'med',q:'Name a country with a coastline on the Mediterranean Sea.',a:[
['Italy',10],['Spain',10],['Greece',10],['France',10],['Turkey',25,['Turkiye']],['Egypt',25],['Croatia',40],['Cyprus',40],['Malta',40],['Morocco',40],['Israel',40],['Lebanon',60],['Tunisia',60],['Libya',60],['Algeria',60],['Syria',60],['Monaco',80],['Albania',80],['Montenegro',80],['Slovenia',100],['Bosnia and Herzegovina',100,['Bosnia']],['Palestine',100,['Gaza','Gaza Strip']]],
near:{'portugal':'Portugal’s coast is on the Atlantic Ocean.','gibraltar':'Gibraltar is a British Overseas Territory.','jordan':'Jordan’s only coast is on the Red Sea.','switzerland':'Switzerland is landlocked.'},
note:'Slovenia’s coastline is only about 47 km long, and Bosnia and Herzegovina’s is about 20 km.'},
{id:'arctic',q:'Name a country with land inside the Arctic Circle.',a:[
['Russia',10],['Canada',10],['Norway',25],['United States',25,['USA','US','America','United States of America','Alaska']],['Sweden',40],['Finland',40],['Denmark (Greenland)',60,['Denmark','Greenland']],['Iceland',100]],
near:{'united kingdom':'The UK lies south of the Arctic Circle.','uk':'The UK lies south of the Arctic Circle.','antarctica':'Antarctica is at the other pole, inside the Antarctic Circle.','estonia':'Estonia is too far south.'},
note:'Only Iceland’s tiny island of Grímsey is inside the Arctic Circle.'},
{id:'central-america',q:'Name a country in Central America.',a:[
['Panama',10],['Costa Rica',10],['Guatemala',25],['Honduras',40],['Nicaragua',40],['El Salvador',40,['Salvador']],['Belize',60]],
near:{'mexico':'Mexico is usually counted as part of North America, not Central America.','cuba':'Cuba is in the Caribbean.','colombia':'Colombia is in South America.'},
note:'Central America has seven countries, from Guatemala and Belize to Panama.'},
{id:'brazil-borders',q:'Name a country that shares a border with Brazil.',a:[
['Argentina',10],['Peru',25],['Colombia',25],['Venezuela',25],['Bolivia',40],['Paraguay',40],['Uruguay',40],['Guyana',80],['Suriname',80,['Surinam']],['France (French Guiana)',100,['France','French Guiana']]],
near:{'chile':'Chile is one of only two South American countries that do not border Brazil.','ecuador':'Ecuador is one of only two South American countries that do not border Brazil.','mexico':'Mexico is in North America.'},
note:'Brazil borders every South American country except Chile and Ecuador, and also borders France through French Guiana.'},
{id:'germany-borders',q:'Name a country that shares a border with Germany.',a:[
['France',10],['Poland',10],['Austria',10],['Switzerland',25],['Netherlands',25,['Holland']],['Belgium',25],['Denmark',40],['Czechia',40,['Czech Republic']],['Luxembourg',60]],
near:{'italy':'Italy is close, but Switzerland and Austria sit in between.','hungary':'Hungary is close, but Austria sits in between.','united kingdom':'The UK is across the North Sea.','uk':'The UK is across the North Sea.'},
note:'Germany has nine neighbours, more than any other country in Europe except Russia.'},
{id:'australia',q:'Name an Australian state or territory.',a:[
['New South Wales',10,['NSW']],['Victoria',25],['Queensland',25],['Western Australia',40,['WA']],['South Australia',40],['Tasmania',40],['Northern Territory',60,['NT']],['Australian Capital Territory',80,['ACT']]],
near:{'sydney':'Sydney is a city. It is in New South Wales.','melbourne':'Melbourne is a city. It is in Victoria.','canberra':'Canberra is a city. It is in the Australian Capital Territory.','perth':'Perth is a city. It is in Western Australia.','new zealand':'New Zealand is a separate country.'},
note:'Australia has six states and two main mainland territories.'},
{id:'nile',q:'Name a country in the drainage basin of the River Nile.',a:[
['Egypt',10],['Sudan',25],['Ethiopia',40],['Uganda',40],['South Sudan',40],['Kenya',60],['Tanzania',60],['Rwanda',80],['Burundi',80],['Democratic Republic of the Congo',100,['DR Congo','DRC','Democratic Republic of Congo']],['Eritrea',100]],
near:{'libya':'Libya is next to Egypt, but its water does not drain into the Nile.','chad':'Chad’s rivers drain into Lake Chad, not the Nile.','somalia':'Somalia’s rivers drain to the Indian Ocean.','congo':'Be specific: it is the Democratic Republic of the Congo that is in the Nile basin.'},
note:'The Blue Nile starts in Ethiopia, and the White Nile is fed by Lake Victoria (Uganda, Kenya and Tanzania).'},
{id:'south-asia',q:'Name a country in South Asia.',a:[
['India',10],['Pakistan',10],['Bangladesh',25],['Sri Lanka',25],['Nepal',25],['Bhutan',60],['Maldives',60],['Afghanistan',80]],
near:{'myanmar':'Myanmar is usually counted as part of Southeast Asia.','thailand':'Thailand is in Southeast Asia.','tibet':'Tibet is part of China.','iran':'Iran is usually counted as part of the Middle East or West Asia.'},
note:'These are the eight members of SAARC, the South Asian Association for Regional Cooperation.'},
{id:'africa-islands',q:'Name an island country in Africa.',a:[
['Madagascar',10],['Mauritius',25],['Seychelles',40],['Cape Verde',60,['Cabo Verde']],['Comoros',80],['São Tomé and Príncipe',100,['Sao Tome','Sao Tome and Principe']]],
near:{'zanzibar':'Zanzibar is part of Tanzania.','canary islands':'The Canary Islands belong to Spain.','reunion':'Réunion is part of France.','mayotte':'Mayotte is part of France.','sri lanka':'Sri Lanka is in Asia.','maldives':'The Maldives is in Asia.'},
note:'Africa has six island countries. Madagascar is the fourth-largest island in the world.'}
];

/* ===== Level 2 prompt bank: harder world knowledge ===== */
const PROMPTS2=[
{id:'sea-capitals',q:'Name a capital city in Southeast Asia.',a:[
['Bangkok',10],['Kuala Lumpur',10,['KL']],['Singapore',10],['Jakarta',25],['Manila',25],['Hanoi',25,['Ha Noi']],['Phnom Penh',40],['Vientiane',60],['Naypyidaw',80,['Naypyitaw','Nay Pyi Taw']],['Bandar Seri Begawan',100],['Dili',100],['Putrajaya',100],['Nusantara',100]],
near:{'yangon':'Yangon is Myanmar’s biggest city, but the capital moved to Naypyidaw in 2005.','rangoon':'Rangoon (Yangon) is Myanmar’s biggest city, but the capital moved to Naypyidaw in 2005.','ho chi minh city':'Ho Chi Minh City is Vietnam’s biggest city, but Hanoi is the capital.','ho chi minh':'Ho Chi Minh City is Vietnam’s biggest city, but Hanoi is the capital.','saigon':'Saigon (Ho Chi Minh City) is Vietnam’s biggest city, but Hanoi is the capital.','chiang mai':'Chiang Mai is a big Thai city, but Bangkok is the capital.','cebu':'Cebu is in the Philippines, but Manila is the capital.','bali':'Bali is an island in Indonesia.'},
note:'Putrajaya is Malaysia’s seat of government and Nusantara is Indonesia’s planned new capital, so both count.'},
{id:'russia-borders',q:'Name a country that shares a land border with Russia.',a:[
['China',10],['Ukraine',10],['Kazakhstan',25],['Finland',25],['Mongolia',25],['Belarus',25],['Norway',40],['Estonia',40],['Latvia',60],['Georgia',60],['Poland',60],['Lithuania',80],['Azerbaijan',80],['North Korea',80]],
near:{'united states':'The USA and Russia are only about 4 km apart across the Bering Strait, but there is no land border.','usa':'The USA and Russia are only about 4 km apart across the Bering Strait, but there is no land border.','japan':'Japan is separated from Russia by sea.','turkey':'Turkey is across the Black Sea from Russia.','sweden':'Sweden is close, but Finland and Norway sit in between.','armenia':'Armenia is close, but Georgia and Azerbaijan sit in between.'},
note:'Poland and Lithuania border Kaliningrad, a part of Russia separated from the rest of the country.'},
{id:'danube',q:'Name a country the River Danube flows through or along.',a:[
['Germany',10],['Austria',10],['Hungary',25],['Serbia',40],['Romania',40],['Slovakia',60],['Bulgaria',60],['Croatia',80],['Ukraine',80],['Moldova',100]],
near:{'czechia':'Czechia is close, but its rivers mostly drain to the Elbe.','czech republic':'Czech Republic is close, but its rivers mostly drain to the Elbe.','switzerland':'Switzerland is close, but the Danube starts in Germany’s Black Forest.','poland':'Poland’s main river is the Vistula.'},
note:'The Danube passes through or along 10 countries, more than any other river in the world.'},
{id:'andes',q:'Name a country that the Andes mountains run through.',a:[
['Peru',10],['Chile',10],['Argentina',25],['Bolivia',25],['Ecuador',40],['Colombia',40],['Venezuela',80]],
near:{'brazil':'Brazil is east of the Andes.','uruguay':'Uruguay is low and flat.','paraguay':'Paraguay is east of the Andes.','mexico':'Mexico’s mountains are the Sierra Madre, not the Andes.'},
note:'The Andes is the world’s longest mountain range on land, about 7,000 km.'},
{id:'africa-landlocked',q:'Name a landlocked country in Africa.',a:[
['Ethiopia',10],['Uganda',25],['Zambia',40],['Zimbabwe',40],['Mali',40],['Niger',40],['Chad',40],['Botswana',60],['Rwanda',60],['Malawi',60],['South Sudan',60],['Lesotho',80],['Burkina Faso',80],['Burundi',80],['Central African Republic',80,['CAR']],['Eswatini',100,['Swaziland']]],
near:{'sudan':'Sudan has a Red Sea coast. South Sudan is landlocked.','eritrea':'Eritrea has a Red Sea coast.','somalia':'Somalia has a long coastline.','kenya':'Kenya has an Indian Ocean coast.','nigeria':'Nigeria has an Atlantic coast. Did you mean Niger?','congo':'Both Congos have a short coastline on the Atlantic.','democratic republic of the congo':'The DR Congo has a short coastline on the Atlantic.','dr congo':'The DR Congo has a short coastline on the Atlantic.'},
note:'Africa has 16 landlocked countries, more than any other continent.'},
{id:'asia-landlocked',q:'Name a landlocked country in Asia.',a:[
['Nepal',10],['Mongolia',10],['Afghanistan',25],['Laos',25,['Lao PDR']],['Bhutan',40],['Kazakhstan',40],['Uzbekistan',60],['Kyrgyzstan',80,['Kyrgyz Republic']],['Tajikistan',80],['Turkmenistan',80],['Armenia',100],['Azerbaijan',100]],
near:{'myanmar':'Myanmar has a long coastline on the Andaman Sea.','cambodia':'Cambodia has a coast on the Gulf of Thailand.','tibet':'Tibet is part of China.','iran':'Iran has coasts on the Gulf and the Caspian Sea.'},
note:'The Caspian Sea is really a lake, so countries such as Kazakhstan and Turkmenistan still count as landlocked.'},
{id:'arabia',q:'Name a country on the Arabian Peninsula.',a:[
['Saudi Arabia',10],['United Arab Emirates',10,['UAE','Emirates']],['Oman',25],['Qatar',25],['Yemen',40],['Kuwait',40],['Bahrain',80]],
near:{'dubai':'Dubai is a city in the United Arab Emirates.','iran':'Iran is across the Gulf from the peninsula.','iraq':'Iraq lies to the north of the peninsula.','jordan':'Jordan lies to the north of the peninsula.','egypt':'Egypt is in Africa, across the Red Sea.'},
note:'Bahrain is an island country just off the peninsula’s coast, joined to Saudi Arabia by a causeway.'},
{id:'black-sea',q:'Name a country with a coastline on the Black Sea.',a:[
['Turkey',10,['Turkiye']],['Russia',10],['Ukraine',10],['Romania',40],['Bulgaria',40],['Georgia',60]],
near:{'greece':'Greece is on the Aegean and Mediterranean seas.','moldova':'Moldova is close, but it is landlocked.','armenia':'Armenia is landlocked.','azerbaijan':'Azerbaijan is on the Caspian Sea.'},
note:'The Black Sea is joined to the Mediterranean through the Bosporus strait at Istanbul.'},
{id:'caspian',q:'Name a country with a coastline on the Caspian Sea.',a:[
['Russia',25],['Iran',25],['Kazakhstan',40],['Azerbaijan',80],['Turkmenistan',100]],
near:{'georgia':'Georgia is on the Black Sea, not the Caspian.','uzbekistan':'Uzbekistan shares the Aral Sea, not the Caspian.','turkey':'Turkey is on the Black Sea, not the Caspian.','armenia':'Armenia is landlocked.','iraq':'Iraq’s short coast is on the Gulf.'},
note:'The Caspian Sea is the largest lake in the world.'},
{id:'shared-islands',q:'Name a country that shares an island with another country.',a:[
['United Kingdom',10,['UK','Britain','Great Britain','Northern Ireland']],['Ireland',10,['Republic of Ireland']],['Haiti',25],['Dominican Republic',25],['Indonesia',25],['Malaysia',40],['Papua New Guinea',40,['PNG']],['Brunei',60],['Timor-Leste',80,['East Timor','Timor Leste']],['France',100],['Netherlands',100,['Holland']]],
near:{'cyprus':'Cyprus is divided, but only Turkey recognises Northern Cyprus as a separate country.','australia':'Australia is a whole continent.','japan':'Japan does not share any of its islands.','new zealand':'New Zealand does not share any of its islands.','philippines':'The Philippines does not share any of its islands.','singapore':'Singapore does not share its island.'},
note:'The Caribbean island of Saint Martin is split between France and the Netherlands.'},
{id:'oceania',q:'Name an independent country in Oceania.',a:[
['Australia',10],['New Zealand',10],['Fiji',25],['Papua New Guinea',25,['PNG']],['Samoa',40],['Tonga',60],['Solomon Islands',60],['Vanuatu',60],['Kiribati',80],['Tuvalu',80],['Palau',80],['Marshall Islands',80],['Nauru',100],['Micronesia',100,['Federated States of Micronesia']]],
near:{'hawaii':'Hawaii is a state of the USA.','tahiti':'Tahiti is part of French Polynesia, which belongs to France.','guam':'Guam is a territory of the USA.','new caledonia':'New Caledonia is part of France.','indonesia':'Indonesia is usually counted as part of Asia.'},
note:'Oceania has 14 independent countries.'},
{id:'long-rivers',q:'Name a river more than 5,000 km long.',a:[
['Nile',10],['Amazon',10],['Mississippi',25,['Missouri','Mississippi Missouri']],['Yangtze',40,['Chang Jiang','Yangzi']],['Yellow River',60,['Huang He','Huanghe']],['Yenisei',100,['Yenisey']],['Ob',100,['Ob Irtysh','Irtysh']]],
near:{'mekong':'The Mekong is about 4,350 km long. Close!','congo':'The Congo is about 4,700 km long. Close!','parana':'The Paraná is about 4,900 km long. So close!','niger':'The Niger is about 4,200 km long.','ganges':'The Ganges is about 2,500 km long.','danube':'The Danube is about 2,850 km long.','chao phraya':'The Chao Phraya is about 370 km long.','thames':'The Thames is about 350 km long.','volga':'The Volga is Europe’s longest river, about 3,500 km.','lena':'The Lena is about 4,400 km long. Close!','amur':'The Amur is about 4,400 km long. Close!'},
note:'River lengths vary between sources, because it is hard to measure exactly where a river starts.'},
{id:'eu',q:'Name a country in the European Union.',a:[
['France',10],['Germany',10],['Italy',10],['Spain',10],['Netherlands',25,['Holland']],['Belgium',25],['Portugal',25],['Greece',25],['Poland',25],['Sweden',40],['Austria',40],['Ireland',40],['Denmark',40],['Finland',40],['Czechia',60,['Czech Republic']],['Hungary',60],['Romania',60],['Croatia',60],['Luxembourg',60],['Bulgaria',80],['Slovakia',80],['Slovenia',80],['Malta',80],['Cyprus',80],['Estonia',100],['Latvia',100],['Lithuania',100]],
near:{'united kingdom':'The UK left the EU in 2020.','uk':'The UK left the EU in 2020.','england':'The UK, including England, left the EU in 2020.','switzerland':'Switzerland is in Europe but has never joined the EU.','norway':'Norway is in Europe but has never joined the EU.','iceland':'Iceland is in Europe but is not in the EU.','turkey':'Turkey has applied to join but is not a member.','ukraine':'Ukraine has applied to join but is not a member.','serbia':'Serbia has applied to join but is not a member.'},
note:'The EU has 27 member countries.'},
{id:'great-lakes',q:'Name one of the five Great Lakes of North America.',a:[
['Superior',25,['Lake Superior']],['Michigan',25,['Lake Michigan']],['Huron',40],['Erie',40],['Ontario',40]],
near:{'great salt':'The Great Salt Lake is in Utah, not one of the Great Lakes.','winnipeg':'Lake Winnipeg is in Canada, but it is not one of the Great Lakes.','tahoe':'Lake Tahoe is not one of the Great Lakes.','victoria':'Lake Victoria is one of Africa’s Great Lakes.'},
note:'Lake Michigan is the only Great Lake entirely inside the USA. The others are shared with Canada.'},
{id:'africa-lakes',q:'Name one of the African Great Lakes.',a:[
['Victoria',10],['Tanganyika',40],['Malawi',60,['Nyasa']],['Turkana',80],['Albert',80],['Edward',100],['Kivu',100]],
near:{'chad':'Lake Chad is in the Sahel, not one of the African Great Lakes.','volta':'Lake Volta in Ghana is a reservoir made by a dam.','nasser':'Lake Nasser in Egypt is a reservoir made by the Aswan High Dam.','superior':'Lake Superior is one of North America’s Great Lakes.'},
note:'Lake Tanganyika is the second-deepest lake in the world, after Lake Baikal.'}
];
