/* SBL — IB Geography Paper 3 synthesis maps: data.
   Original practice questions in an IB style (not IB wording). Each map links ideas from
   Units 4, 5 and 6, and from the core where it helps, for 16-mark essays. */
window.SBL_P3_MAPS = [
{
  id: 'power',
  short: 'Concentration of power',
  q: 'To what extent is global power still concentrated in a small number of countries and organisations?',
  focus: 'Power, places, possibilities',
  nodes: [
    {id:'sup', u:'4', t:'Superpowers: USA and China', idea:'Hard and soft power remain concentrated in a few states with economic, military, technological and cultural reach.', ev:'The USA leads on military spending, the dollar and global brands; China is the largest trading nation and lends widely through the Belt and Road Initiative.', eval:'Power is shifting between them rather than spreading out, so concentration may be stable even as the leaders change.'},
    {id:'mgo', u:'4', t:'G7, G20 and the IMF', idea:'Global governance is shaped by groups of powerful states.', ev:'IMF voting is weighted by quota, giving the USA an effective veto; structural adjustment conditions shaped policy in many indebted countries.', eval:'The G20 includes emerging economies such as India, Brazil and Indonesia, so the club has widened.'},
    {id:'opec', u:'4', t:'OPEC and resource power', idea:'Control of a key resource gives a small group of states global influence.', ev:'The 1973 embargo quadrupled prices; OPEC+ production quotas still move world oil prices.', eval:'Members such as Qatar and Ecuador have left, and US shale has reduced OPEC’s share.'},
    {id:'kof', u:'4', t:'KOF globalisation index', idea:'Measures how connected countries are economically, socially and politically.', ev:'Small, open European states score highest; many low-income countries score lowest.', eval:'Being highly connected is not the same as being powerful, so the index must be used carefully.'},
    {id:'tnc', u:'4', t:'TNCs', idea:'Large firms have revenues bigger than many states and can choose where to invest.', ev:'IKEA and Tata operate across dozens of countries; technology giants dominate global platforms.', eval:'TNCs still depend on states for market access and can be regulated or fined.'},
    {id:'tax', u:'6', t:'Tax avoidance (Apple and Ireland)', idea:'TNCs can move profits to low-tax places, reducing the power of states to raise revenue.', ev:'The EU ordered Ireland to recover about €13 billion from Apple, upheld in 2024.', eval:'The 2021 OECD deal on a 15% global minimum tax shows states can push back collectively.'},
    {id:'cso', u:'6', t:'Civil society organisations', idea:'Non-state groups can challenge powerful states and companies.', ev:'Greenpeace pressured APP and LEGO–Shell; Amnesty International campaigns for prisoners of conscience.', eval:'They lack legal power and are restricted by some governments.'},
    {id:'sm', u:'5', t:'Social media and protest', idea:'Digital networks give ordinary people global reach.', ev:'Hong Kong protesters organised with Telegram and AirDrop and attracted global solidarity.', eval:'The 2020 National Security Law shows state power can still crush movements.'},
    {id:'rn', u:'5', t:'Resource nationalism', idea:'Governments reclaim control over resources from foreign firms.', ev:'Bolivia nationalised gas (2006); Indonesia banned raw nickel exports (2020).', eval:'It may deter investment, so power gained can be limited.'},
    {id:'cpop', u:'C', core:'Unit 1: Changing population', t:'Demographic weight', idea:'Population size and youth can become a source of economic and political influence.', ev:'India’s large working-age population and growing market raise its global weight.', eval:'A dividend is only realised with jobs, education and good governance.'}
  ],
  edges: [
    ['sup','mgo','dominate','The USA and its allies hold the largest IMF quotas, so global rules reflect existing power.'],
    ['sup','tnc','home base of','Most of the largest TNCs are headquartered in the USA or China, extending their states’ soft power.'],
    ['tnc','tax','exploit','TNCs use their mobility to shift profits, showing power over states.'],
    ['tax','mgo','countered by','The OECD and G20 minimum tax deal is an example of states acting together to regain control.'],
    ['opec','rn','related to','Both show states using control of resources as power, at national and group scales.'],
    ['kof','sup','not the same as','Highly connected small states score well on KOF but lack the hard power of the USA or China.'],
    ['cso','tnc','pressure','Campaigns can change TNC behaviour, as with APP’s 2013 no-deforestation policy.'],
    ['sm','cso','amplifies','Social media spreads campaigns quickly, increasing the influence of non-state actors.'],
    ['sm','sup','challenged by','States can censor or surveil networks, as China’s Great Firewall shows.'],
    ['cpop','sup','reshapes','Demographic and economic growth in Asia is shifting the balance of power.'],
    ['cpop','mgo','pushes to widen','Emerging populous economies gained seats at the G20 table.']
  ],
  route: [
    {h:'Introduction', n:['sup','kof'], tx:'Define power (hard, soft, economic). Use the KOF index to show that connection is not the same as power. State your line of argument: power is still concentrated, but less so, and in different hands.'},
    {h:'States still dominate', n:['sup','mgo','opec'], tx:'Superpowers and the institutions they lead (IMF, G7) shape the rules. OPEC shows how resource control concentrates influence.'},
    {h:'Power moves to corporations', n:['tnc','tax'], tx:'TNCs rival states and can avoid tax, as Apple and Ireland shows, but the minimum tax deal shows states can respond together.'},
    {h:'Power from below', n:['cso','sm','rn'], tx:'Civil society, social media and resource nationalism spread power to more actors, but each has clear limits.'},
    {h:'Conclusion', n:['cpop'], tx:'Judge the extent: power is still concentrated but is being redistributed towards emerging economies such as China and India, and to non-state actors. Note that it depends on the type of power and the scale.'}
  ]
},
{
  id: 'inequality',
  short: 'Uneven benefits',
  q: 'Discuss the view that global interactions benefit some places and people far more than others.',
  focus: 'Places, processes, equity',
  nodes: [
    {id:'flows', u:'4', t:'Trade and FDI flows', idea:'Capital and trade concentrate in places with markets, skills and infrastructure.', ev:'FDI turned Shenzhen from a fishing town into a megacity after it became a Special Economic Zone in 1980.', eval:'Some former peripheral places have become core, so the pattern can change.'},
    {id:'rem', u:'4', t:'Remittances', idea:'Migrants send money home, linking poorer places to richer ones.', ev:'Global remittances reached about US$574 billion in 2016; in Nepal they were around 31% of GDP.', eval:'They support households but can create dependence and a loss of young workers.'},
    {id:'dbh', u:'4', t:'Digital black holes', idea:'Places with little internet access are left out of global flows.', ev:'Large parts of rural sub-Saharan Africa and Central Asia have low bandwidth and connectivity.', eval:'Mobile phones are leapfrogging fixed lines, so the gap is narrowing.'},
    {id:'tsc', u:'4', t:'Time-space convergence', idea:'Better transport and communication shrink the world, but unevenly.', ev:'Container shipping and air hubs connect core cities; remote places such as Australia faced the “tyranny of distance”.', eval:'Physical isolation can be overcome by technology and investment.'},
    {id:'hdi', u:'5', t:'HDI and GII gaps', idea:'Development indices reveal unequal outcomes between and within countries.', ev:'New Zealand and the USA have similar HDI scores but different inequality and health outcomes.', eval:'Composite indices hide inequality within countries.'},
    {id:'mpesa', u:'5', t:'M-Pesa and microfinance', idea:'Social enterprises use global technology to include poorer people.', ev:'M-Pesa had around 17 million Kenyan accounts by 2012 and helped lift about 2% of households out of poverty.', eval:'Small in scale compared with structural inequality.'},
    {id:'csr', u:'5', t:'CSR and IFAs', idea:'TNCs can spread better standards through their supply chains.', ev:'IKEA’s IWAY code and IFAs set minimum labour standards.', eval:'Monitoring is weak further down supply chains, so benefits are uneven.'},
    {id:'shift', u:'6', t:'Global shift and pollution', idea:'Industrial relocation brings jobs but also pollution to emerging economies.', ev:'Textile dyes pollute rivers in Bangladesh; e-waste contaminates Agbogbloshie in Ghana.', eval:'Costs fall on poorer communities while consumers elsewhere gain.'},
    {id:'haze', u:'6', t:'Southeast Asian haze', idea:'Global demand for palm oil and paper creates risks felt across borders.', ev:'The 2015 haze cost Indonesia about US$16 billion and caused an estimated 100,000+ premature deaths.', eval:'Consumers far away benefit from cheap products but rarely bear the costs.'},
    {id:'cmig', u:'C', core:'Unit 1: Changing population', t:'Migration and the core–periphery', idea:'Migration flows move people from periphery to core, with gains and losses for both.', ev:'Remittance flows and the brain drain from Nepal and the Philippines.', eval:'Core countries gain workers; source areas lose skills but gain income.'}
  ],
  edges: [
    ['flows','tsc','depends on','Investment favours places that convergence has already connected, such as port and hub cities.'],
    ['dbh','flows','excluded from','Without connectivity, places cannot attract investment or join global value chains.'],
    ['rem','cmig','result of','Remittances are the financial side of migration from periphery to core.'],
    ['rem','hdi','can raise','Remittances fund education and health, improving HDI in source regions.'],
    ['mpesa','dbh','reduces','Mobile money bypasses missing bank branches and narrows digital and financial gaps.'],
    ['mpesa','rem','cheapens','Mobile transfers make sending money home cheaper and safer.'],
    ['csr','shift','tries to reduce','Codes and IFAs aim to limit the human costs of relocated manufacturing.'],
    ['shift','flows','consequence of','FDI into cheaper locations relocates pollution along with jobs.'],
    ['haze','shift','similar pattern','Both show environmental costs concentrated where production happens, not where goods are consumed.'],
    ['hdi','flows','shaped by','Places receiving investment often see faster HDI gains, widening gaps with excluded places.']
  ],
  route: [
    {h:'Introduction', n:['hdi'], tx:'Define global interactions. Use HDI and GII to show that outcomes are unequal. Argument: benefits are uneven, but the pattern is changing and depends on scale.'},
    {h:'Who gains most', n:['flows','tsc'], tx:'Places with connectivity attract trade and FDI, such as Shenzhen. Time-space convergence favours hubs.'},
    {h:'Who is left behind', n:['dbh','shift','haze'], tx:'Digital black holes are excluded; poorer communities bear pollution and haze costs.'},
    {h:'How the gap can narrow', n:['rem','mpesa','csr','cmig'], tx:'Remittances, mobile money and CSR spread benefits, but they are small in scale or weakly enforced.'},
    {h:'Conclusion', n:[], tx:'Agree to a large extent: benefits are uneven, but places and people can move from periphery to core. Judge which scale (global, national, local) shows the greatest inequality.'}
  ]
},
{
  id: 'culture',
  short: 'Cultural convergence',
  q: 'Evaluate the view that global interactions are making the world’s cultures more alike.',
  focus: 'Places, processes, possibilities',
  nodes: [
    {id:'homo', u:'5', t:'Homogenisation', idea:'Global brands, media and architecture make places look and feel more similar.', ev:'Dubai Mall has over 1,200 shops with global brands; glass-and-steel CBDs in London, New York and Dubai look alike.', eval:'Similar landscapes may hide very different ways of life.'},
    {id:'glocal', u:'5', t:'Glocalisation and hybridity', idea:'Global products adapt to local tastes, creating new hybrid forms.', ev:'Fast-food chains adapt menus; K-pop blends Korean and global pop.', eval:'Hybridity suggests mixing, not simple convergence.'},
    {id:'dias', u:'5', t:'Diasporas', idea:'Migrant communities keep their culture and add diversity to host countries.', ev:'Chinatown in London; Chinese New Year in Trafalgar Square; the Chinese takeaway in Britain.', eval:'Younger generations may assimilate, so diversity can fade over time.'},
    {id:'thai', u:'5', t:'Diversity within Thailand', idea:'Cultural diversity varies within a country and at the margins.', ev:'Hill peoples near Myanmar and Laos; Malay Muslims in the far south; Chinese-Thai in Bangkok.', eval:'National policies promoting one Thai identity have encouraged assimilation.'},
    {id:'eat', u:'5', t:'Resistance: buying local', idea:'Civil society can resist global culture.', ev:'Thailand’s “Eat Local” movement; the closure of Starbucks in Beijing’s Forbidden City in 2007.', eval:'Resistance is often small-scale and middle-class.'},
    {id:'net', u:'4', t:'Internet and OTT media', idea:'Streaming and social media spread culture instantly.', ev:'Web 2.0 platforms, Netflix and YouTube reach billions.', eval:'They also let non-Western content go global, so flows run in more than one direction.'},
    {id:'tnc', u:'4', t:'TNC brands', idea:'TNCs carry cultural traits with their products.', ev:'IKEA furniture and Starbucks coffee shops in dozens of countries.', eval:'TNCs glocalise to succeed, so they adapt rather than replace.'},
    {id:'nat', u:'6', t:'Nationalism', idea:'Some groups react against global culture by stressing national identity.', ev:'Brexit and “America First” drew on concerns about identity and sovereignty.', eval:'This reaction itself shows that global influence is strong.'},
    {id:'nk', u:'6', t:'North Korea’s isolation', idea:'States can block cultural flows almost completely.', ev:'Almost no internet access; foreign media is banned.', eval:'An extreme case; smuggled media still gets in.'},
    {id:'cmig', u:'C', core:'Unit 1: Changing population', t:'International migration', idea:'Migration moves people and culture between places.', ev:'Dubai’s population is mostly expatriates, with Indians around 40%.', eval:'Migration can increase diversity in host places while reducing it in source regions.'}
  ],
  edges: [
    ['tnc','homo','drives','Global brands spread similar products and shop landscapes.'],
    ['tnc','glocal','adapts through','To sell locally, TNCs blend global and local, creating hybridity.'],
    ['net','homo','spreads','Global platforms spread dominant, often Western, media.'],
    ['net','glocal','enables','Platforms also let local culture travel globally, such as K-pop or Thai dramas.'],
    ['cmig','dias','creates','Migration produces diasporas that carry culture to new places.'],
    ['dias','homo','counters','Diasporas add new traits to host cultures, widening diversity.'],
    ['cmig','homo','in Dubai','Dubai’s migrant majority supports a global, consumer landscape, alongside local Emirati identity.'],
    ['eat','tnc','resists','Local movements push back against global brands and supply chains.'],
    ['nat','homo','reaction to','Fears of cultural loss feed nationalist politics.'],
    ['nk','net','blocks','State control of the internet prevents cultural flows.'],
    ['thai','homo','varies by place','Diversity survives most strongly in remote margins and border areas.']
  ],
  route: [
    {h:'Introduction', n:['homo','glocal'], tx:'Define cultural homogenisation, hybridity and differentialism. Argument: some aspects of culture converge, but hybridity and resistance keep diversity alive.'},
    {h:'Evidence for convergence', n:['tnc','net','homo','cmig'], tx:'TNCs, global media and global city landscapes (Dubai) show convergence.'},
    {h:'Evidence for hybridity', n:['glocal','dias','net'], tx:'Glocalisation, diasporas such as London’s Chinatown, and two-way media flows create new mixtures.'},
    {h:'Evidence for resistance', n:['eat','nat','nk','thai'], tx:'Local movements, nationalism, state controls and remote margins keep cultures distinct.'},
    {h:'Conclusion', n:[], tx:'Judge the extent: visible landscapes converge more than beliefs and identity. The answer depends on scale (global city vs rural margin) and on the power of the actors involved.'}
  ]
},
{
  id: 'risk',
  short: 'Risks vs benefits',
  q: 'To what extent do the risks created by global interactions outweigh their benefits?',
  focus: 'Processes, possibilities, sustainability',
  nodes: [
    {id:'oil', u:'6', t:'Oil supply chain risk', idea:'Long, complex supply chains are exposed to political, economic and physical shocks.', ev:'Houthi attacks in the Red Sea from 2023; the Ever Given blocked Suez for six days in 2021; prices fell below zero in April 2020.', eval:'Shocks are usually temporary, and supply chains adapt.'},
    {id:'cyber', u:'6', t:'Cyber threats', idea:'Connection creates vulnerability to hacking and data theft.', ev:'WannaCry (2017) hit over 200,000 computers in about 150 countries; the Equifax breach affected around 147 million people.', eval:'Cybersecurity investment, as in Estonia, builds resilience.'},
    {id:'haze', u:'6', t:'Trans-boundary pollution', idea:'Pollution crosses borders along with global trade.', ev:'The 2015 Southeast Asian haze, linked to palm oil and pulpwood production.', eval:'Regional agreements exist but are hard to enforce.'},
    {id:'ship', u:'6', t:'Shipping and carbon footprints', idea:'Global flows of goods and people add pollution and emissions.', ev:'Shipping produces around 3% of greenhouse gases; ballast water spreads invasive species.', eval:'The IMO sulphur cap (2020) and ballast rules show regulation can work.'},
    {id:'tsc', u:'4', t:'Time-space convergence', idea:'Faster, cheaper connection is a key benefit of globalisation.', ev:'Containerisation slashed shipping costs; the internet enables instant communication.', eval:'The same connectivity transmits risks faster.'},
    {id:'dev', u:'5', t:'Development gains', idea:'Global interactions have raised incomes and HDI in many places.', ev:'Remittances, FDI and mobile money have reduced poverty; M-Pesa in Kenya.', eval:'Gains are unevenly shared.'},
    {id:'fair', u:'5', t:'Fairtrade and CSR', idea:'Global networks can spread fairer standards.', ev:'The ten fair trade principles; IKEA’s renewable energy and FSC sourcing.', eval:'Voluntary schemes vary and greenwashing is a risk.'},
    {id:'res', u:'6', t:'Resilience strategies', idea:'Actors respond to risk by building resilience.', ev:'Re-shoring and the US CHIPS Act (2022); crowdsourcing through Ushahidi; e-passports.', eval:'Resilience is costly and unevenly available.'},
    {id:'cclim', u:'C', core:'Unit 2: Global climate', t:'Climate change', idea:'Emissions from global trade and travel add to climate risk.', ev:'Air freight and long-haul flights have high carbon footprints; food systems cause around a quarter to a third of emissions.', eval:'Global cooperation, such as the Paris Agreement, is itself a product of global interaction.'},
    {id:'cres', u:'C', core:'Unit 3: Resource consumption', t:'Resource security', idea:'Dependence on imported energy and food creates insecurity.', ev:'Energy price spikes after 2022 hit importing countries hardest.', eval:'Trade also gives access to resources a country lacks.'}
  ],
  edges: [
    ['tsc','oil','also spreads','The connections that bring benefits also transmit shocks along supply chains.'],
    ['tsc','cyber','creates','More connected systems give hackers more entry points.'],
    ['tsc','dev','enables','Cheaper connection lets more places trade and receive investment.'],
    ['oil','cres','threatens','Supply chain disruption raises energy insecurity for importers.'],
    ['ship','cclim','adds to','Emissions from global transport contribute to climate change.'],
    ['haze','fair','linked to demand','Consumer demand for palm oil and paper drives fires; certification tries to reduce this.'],
    ['res','oil','reduces','Re-shoring and diversification reduce exposure to distant shocks.'],
    ['res','cyber','reduces','Cybersecurity limits the impact of attacks.'],
    ['dev','haze','at a cost','Plantation-led growth in Indonesia came with the cost of haze.'],
    ['fair','dev','spreads','Fairer standards help share benefits more widely.']
  ],
  route: [
    {h:'Introduction', n:['tsc'], tx:'Define global interactions and risk. Argument: risks are real and growing, but benefits still outweigh them for most people, though not for everyone.'},
    {h:'The benefits', n:['tsc','dev','fair'], tx:'Connection, development gains and the spread of better standards.'},
    {h:'The risks', n:['oil','cyber','haze','ship','cclim'], tx:'Economic, political, technological and environmental risks, some of them global in scale, such as climate change.'},
    {h:'Managing the balance', n:['res','cres'], tx:'Resilience strategies reduce risk, but are unequally available.'},
    {h:'Conclusion', n:[], tx:'Judge for whom: benefits accrue to connected consumers and investors, while risks often fall on vulnerable places. Consider the time scale too: climate risk may outweigh benefits in the long run.'}
  ]
},
{
  id: 'sovereignty',
  short: 'Loss of sovereignty',
  q: 'Examine the extent to which global interactions have reduced the ability of states to control their own affairs.',
  focus: 'Power, places, governance',
  nodes: [
    {id:'tax', u:'6', t:'Tax avoidance', idea:'TNCs reduce states’ tax revenue by moving profits.', ev:'Apple’s Irish structures; the Panama Papers (2016).', eval:'The OECD 15% minimum tax (2021) shows collective action can restore control.'},
    {id:'tech', u:'6', t:'Drones and 3D printing', idea:'New technologies bypass border and trade controls.', ev:'Drones closed Gatwick for over 30 hours in 2018; 3D-printed “ghost guns”.', eval:'States can regulate and use these technologies themselves.'},
    {id:'imf', u:'4', t:'IMF and SAPs', idea:'Lenders attach conditions that shape national policy.', ev:'Structural adjustment programmes required privatisation and spending cuts in indebted countries.', eval:'Countries borrowing from China or others now have alternatives.'},
    {id:'bloc', u:'4', t:'Trade blocs: the EU', idea:'States pool sovereignty to gain market access.', ev:'EU members share trade rules and the Common Agricultural Policy.', eval:'Pooling is a choice, and it can be reversed (Brexit).'},
    {id:'brexit', u:'6', t:'Brexit', idea:'A state reclaiming sovereignty from a bloc.', ev:'The UK left the EU in 2020, campaigning to “take back control”.', eval:'Leaving brought new trade barriers, showing the costs of regaining control.'},
    {id:'haze', u:'6', t:'Haze and sovereignty', idea:'Pollution crosses borders, but the sources are inside another sovereign state.', ev:'Singapore’s 2014 law lets it fine foreign companies causing haze.', eval:'Enforcement inside Indonesia is still limited.'},
    {id:'ctrl', u:'5', t:'Internet and travel controls', idea:'States can reassert control over global flows.', ev:'China’s Great Firewall; the 2017 US travel ban.', eval:'Shows states keep strong powers when they choose to use them.'},
    {id:'prot', u:'5', t:'Protectionism and resource nationalism', idea:'States use trade barriers and control of resources.', ev:'US tariffs on China from 2018; Indonesia’s 2020 nickel export ban.', eval:'Retaliation and higher prices limit the gains.'},
    {id:'nk', u:'6', t:'North Korea', idea:'Isolationism keeps near-total state control.', ev:'Almost no internet access; very little trade except with China.', eval:'Control comes at the cost of poverty and dependence on China.'},
    {id:'cclim', u:'C', core:'Unit 2: Global climate', t:'Climate agreements', idea:'Global problems require states to accept shared targets.', ev:'The Paris Agreement relies on nationally determined contributions.', eval:'Commitments are voluntary, so sovereignty is largely kept.'}
  ],
  edges: [
    ['tax','tech','both bypass','Both let non-state actors avoid traditional state controls.'],
    ['imf','bloc','both constrain','Conditions and shared rules limit independent policy choices.'],
    ['bloc','brexit','reversed by','Brexit shows pooled sovereignty can be reclaimed.'],
    ['brexit','prot','similar to','Both are attempts to restore national control over trade.'],
    ['ctrl','nk','extreme form','North Korea is the most complete example of state control of flows.'],
    ['tax','cclim','need cooperation','Both problems can only be managed through international agreements.'],
    ['haze','ctrl','limits of','States can control their own borders but not pollution coming from another state.'],
    ['prot','tech','struggle with','3D printing and online sales make trade controls harder to enforce.']
  ],
  route: [
    {h:'Introduction', n:['bloc'], tx:'Define sovereignty (political and economic). Argument: global interactions limit state control in some areas, but states keep and sometimes reassert strong powers.'},
    {h:'Sovereignty reduced', n:['tax','tech','imf','haze'], tx:'Tax avoidance, new technologies, lender conditions and trans-boundary pollution reduce control.'},
    {h:'Sovereignty pooled', n:['bloc','cclim'], tx:'States choose to share sovereignty in blocs and agreements, for collective benefits.'},
    {h:'Sovereignty reasserted', n:['brexit','prot','ctrl','nk'], tx:'Brexit, protectionism, internet controls and isolation show states taking back control, at a cost.'},
    {h:'Conclusion', n:[], tx:'Judge the extent: weaker and smaller states lose more control than powerful ones. The trend may now be reversing as nationalism grows.'}
  ]
},
{
  id: 'civil',
  short: 'Role of civil society',
  q: 'Discuss the effectiveness of civil society in responding to the challenges created by global interactions.',
  focus: 'Possibilities, perspectives',
  nodes: [
    {id:'gp', u:'6', t:'Greenpeace', idea:'Direct action and media campaigns on environmental risks.', ev:'The APP campaign led to a 2013 no-deforestation policy; the LEGO–Shell campaign (2014); the whaling moratorium (1986).', eval:'Seen as confrontational; activists arrested in Russia in 2013.'},
    {id:'ai', u:'6', t:'Amnesty International', idea:'Research and advocacy on human rights.', ev:'“Write for Rights”; a key role in the Arms Trade Treaty (in force 2014).', eval:'Forced to stop work in India (2020) and close its Hong Kong offices (2021).'},
    {id:'malala', u:'5', t:'Malala Fund', idea:'An NGO linking local activists to global funding and advocacy.', ev:'Supports Education Champions in Pakistan, Nigeria and elsewhere.', eval:'Long-term change, hard to measure; around 120–130 million girls are still out of school.'},
    {id:'hk', u:'5', t:'Hong Kong protests', idea:'Mass protest using social media to win global attention.', ev:'The 2014 Umbrella Movement; the 2019 extradition bill was withdrawn.', eval:'The 2020 National Security Law ended large protests.'},
    {id:'fair', u:'5', t:'Fairtrade and microfinance', idea:'Social enterprise networks spread benefits.', ev:'Grameen Bank and Opportunity International; ten fair trade principles.', eval:'Limited scale compared with global trade.'},
    {id:'min', u:'5', t:'Minuteman Project', idea:'Civil society can also resist migration and exclude people.', ev:'Armed volunteers patrolled the US–Mexico border from 2005.', eval:'Caught few migrants; criticised as vigilantism.'},
    {id:'eat', u:'5', t:'Buying local', idea:'Consumer movements resist global supply chains.', ev:'Thailand’s “Eat Local” movement.', eval:'Small impact on global trade patterns.'},
    {id:'crowd', u:'6', t:'Crowdsourcing', idea:'Bottom-up resilience using digital tools.', ev:'Ushahidi mapped crisis reports after the 2010 Haiti earthquake.', eval:'Depends on internet access and reliable reports.'},
    {id:'ifa', u:'5', t:'Unions and IFAs', idea:'Global union federations negotiate standards with TNCs.', ev:'IFAs set minimum labour standards across supply chains.', eval:'Hard to enforce where unions are restricted.'},
    {id:'cclim', u:'C', core:'Unit 2: Global climate', t:'Climate campaigns', idea:'Civil society pressure on climate policy.', ev:'Youth climate strikes and NGO lobbying around COP summits.', eval:'Emissions are still rising.'}
  ],
  edges: [
    ['gp','ai','similar methods','Both rely on publicity and pressure, not legal power.'],
    ['hk','malala','compare','Mass protest versus structured advocacy: different methods, both linking a cause to global audiences.'],
    ['hk','ai','supported by','Human rights NGOs documented arrests and amplified the protesters’ cause.'],
    ['gp','eat','both resist','Both challenge the environmental costs of global supply chains.'],
    ['fair','ifa','both improve','Both aim to raise standards for producers and workers in global supply chains.'],
    ['min','eat','both resist globalisation','Shows civil society can be exclusionary as well as international-minded.'],
    ['crowd','hk','same tools','Digital networks power both crisis response and protest.'],
    ['gp','cclim','campaigns on','Greenpeace is a major voice in climate campaigning.']
  ],
  route: [
    {h:'Introduction', n:[], tx:'Define civil society and global interactions. Argument: civil society is effective at raising awareness and changing corporate behaviour, but less effective against powerful states.'},
    {h:'Changing companies', n:['gp','fair','ifa'], tx:'Greenpeace, Fairtrade and IFAs have changed corporate practice.'},
    {h:'Challenging states', n:['hk','ai','malala'], tx:'Mixed results: some short-term wins, then repression, or slow long-term change.'},
    {h:'Not always positive', n:['min','eat'], tx:'Some civil society resists globalisation or excludes migrants.'},
    {h:'Conclusion', n:['crowd','cclim'], tx:'Judge the extent: civil society is effective as a catalyst rather than a solution, and works best together with states and businesses.'}
  ]
},
{
  id: 'resilience',
  short: 'Building resilience',
  q: 'To what extent is resilience to global risks best built by local rather than global actions?',
  focus: 'Scale, possibilities',
  nodes: [
    {id:'reshore', u:'6', t:'Re-shoring', idea:'TNCs bring production closer to home to cut risk.', ev:'Near-shoring from China to Mexico; the US CHIPS and Science Act (2022).', eval:'Raises costs and prices.'},
    {id:'cyber', u:'6', t:'National cybersecurity', idea:'States protect critical systems.', ev:'Estonia after the 2007 attacks hosts NATO’s cyber defence centre.', eval:'Needs international cooperation, as attacks cross borders.'},
    {id:'crowd', u:'6', t:'Crowdsourcing and crowdfunding', idea:'Fast, local, bottom-up responses.', ev:'Ushahidi; GoFundMe disaster appeals; volunteers updating OpenStreetMap.', eval:'Unequal access; may be unreliable.'},
    {id:'asean', u:'6', t:'ASEAN haze agreement', idea:'A regional framework for a trans-boundary risk.', ev:'Signed in 2002; Indonesia ratified in 2014.', eval:'Weak enforcement; the haze returned in 2015 and 2019.'},
    {id:'sglaw', u:'6', t:'Singapore haze law', idea:'One state acting beyond its borders.', ev:'The Transboundary Haze Pollution Act (2014).', eval:'Hard to prosecute foreign firms.'},
    {id:'imo', u:'6', t:'IMO shipping rules', idea:'Global rules for global flows.', ev:'The Ballast Water Convention (2017) and the 0.5% sulphur cap (2020).', eval:'Flags of convenience weaken enforcement.'},
    {id:'oecd', u:'6', t:'Global minimum tax', idea:'Global coordination to restore state revenue.', ev:'Around 140 countries agreed a 15% minimum rate in 2021.', eval:'Implementation is uneven between countries.'},
    {id:'local', u:'5', t:'Local food and enterprise', idea:'Local economies reduce dependence on global chains.', ev:'The “Eat Local” movement; microfinance and M-Pesa.', eval:'Cannot replace global trade for most goods.'},
    {id:'epass', u:'6', t:'E-passports', idea:'Technology that secures global flows of people.', ev:'Biometric chips and e-gates.', eval:'Privacy concerns.'},
    {id:'cclim', u:'C', core:'Unit 2: Global climate', t:'Adaptation and mitigation', idea:'Climate risk needs action at every scale.', ev:'The Paris Agreement (global) alongside local flood defences and adaptation.', eval:'Local adaptation alone cannot cut global emissions.'}
  ],
  edges: [
    ['crowd','local','both bottom-up','Community-level action responds quickly to local needs.'],
    ['asean','sglaw','regional vs national','Singapore acted alone because the regional framework was weak.'],
    ['imo','oecd','both global rules','Global problems with mobile actors need global rules.'],
    ['reshore','local','shortens chains','Producing closer to home reduces exposure to distant shocks.'],
    ['cyber','imo','need cooperation','Threats that cross borders need cross-border responses.'],
    ['cclim','asean','scale mismatch','Like the haze, climate risks cross borders and need cooperation.'],
    ['epass','cyber','state-led tech','Both are top-down technological resilience led by governments.']
  ],
  route: [
    {h:'Introduction', n:[], tx:'Define resilience and scale. Argument: the best scale depends on the scale of the risk; most risks need action at several scales.'},
    {h:'The case for local action', n:['crowd','local','reshore'], tx:'Fast, flexible and community-led, but limited in reach.'},
    {h:'The case for national action', n:['cyber','sglaw','epass'], tx:'States have resources and authority, but risks cross borders.'},
    {h:'The case for global action', n:['imo','oecd','asean','cclim'], tx:'Needed for global risks, but slow and hard to enforce.'},
    {h:'Conclusion', n:[], tx:'Judge the extent: local action builds coping capacity, but risks that cross borders need global rules. The most resilient responses combine scales.'}
  ]
},
{
  id: 'technology',
  short: 'Technology and change',
  q: 'Evaluate the role of technology in changing the nature of global interactions.',
  focus: 'Processes, possibilities',
  nodes: [
    {id:'cont', u:'4', t:'Containerisation', idea:'Standard containers cut the cost and time of shipping.', ev:'Mega-ports such as Shanghai and Singapore; global production networks.', eval:'Physical chokepoints remain, such as the Suez Canal.'},
    {id:'net', u:'4', t:'Internet, Web 2.0 and OTT', idea:'Instant, user-generated, global communication.', ev:'Social media and streaming platforms; the Internet of Things.', eval:'Digital black holes exclude many places.'},
    {id:'mpesa', u:'5', t:'Mobile money', idea:'Technology extends financial services to excluded people.', ev:'M-Pesa in Kenya (2007).', eval:'Needs mobile coverage and regulation.'},
    {id:'sm', u:'5', t:'Social media activism', idea:'Technology changes who can take part in global interactions.', ev:'Hong Kong protests; the Malala Fund’s campaigns.', eval:'States can censor and surveil.'},
    {id:'cyber', u:'6', t:'Cyber risks', idea:'Technology creates new threats.', ev:'WannaCry; identity theft; the Snowden revelations about surveillance.', eval:'Cybersecurity can manage risks.'},
    {id:'tech', u:'6', t:'Drones and 3D printing', idea:'Disruptive technologies challenge borders and trade.', ev:'Drone smuggling; local printing of goods.', eval:'Could reduce trade flows by making production local.'},
    {id:'fw', u:'5', t:'Censorship', idea:'States use technology to restrict interactions.', ev:'China’s Great Firewall; North Korea’s near-total block.', eval:'VPNs and smuggled media weaken control.'},
    {id:'epass', u:'6', t:'E-passports and e-gates', idea:'Technology secures and speeds flows of people.', ev:'Biometric chips; automatic border gates.', eval:'Raises privacy concerns.'},
    {id:'pol', u:'4', t:'Political factors', idea:'Policy, not just technology, shapes interactions.', ev:'Trade blocs, free zones, migration controls and tariffs.', eval:'Shows technology is necessary but not sufficient.'},
    {id:'cpop', u:'C', core:'Unit 1: Changing population', t:'Migration networks', idea:'Technology changes how migrants stay connected.', ev:'Video calls and cheap remittance apps keep diasporas linked.', eval:'Makes migration easier to sustain.'}
  ],
  edges: [
    ['cont','net','together drive','Physical and digital technology together power time-space convergence.'],
    ['net','sm','enables','Web 2.0 lets people organise and share globally.'],
    ['net','cyber','creates','More connection means more vulnerability.'],
    ['sm','fw','met by','States respond to online activism with censorship.'],
    ['mpesa','cpop','supports','Mobile transfers make sending remittances cheaper.'],
    ['tech','cont','may reduce','3D printing could replace some long-distance shipping.'],
    ['epass','cyber','both security','Technology both secures and threatens global flows.'],
    ['pol','fw','political choice','Whether technology is used to open or close depends on governments.'],
    ['pol','cont','shapes','Trade policy determines how far shipping technology is used.']
  ],
  route: [
    {h:'Introduction', n:['pol'], tx:'Define technology and global interactions. Argument: technology is the main enabler of change, but politics decides how it is used.'},
    {h:'Technology speeds and deepens flows', n:['cont','net','mpesa','cpop'], tx:'Shipping, the internet and mobile money have transformed flows of goods, ideas and money.'},
    {h:'Technology changes who participates', n:['sm','net'], tx:'Ordinary people and civil society gain a global voice.'},
    {h:'Technology creates risks and controls', n:['cyber','tech','fw','epass'], tx:'New threats emerge, and states use technology to monitor and restrict.'},
    {h:'Conclusion', n:[], tx:'Judge the role: technology is necessary but not sufficient. Political, economic and physical factors shape its effects, and the benefits are uneven.'}
  ]
}
];

/* Global supply chains map (added) */
window.SBL_P3_MAPS.push({
  id: 'supply',
  short: 'Global supply chains',
  q: 'To what extent have global supply chains benefited businesses more than the societies connected to them?',
  focus: 'Processes, places, stakeholders',
  nodes: [
    {id:'tnc', u:'4', t:'TNCs and offshoring', idea:'Firms split production across countries to cut costs and reach markets.', ev:'IKEA sources from suppliers in dozens of countries; Tata grew from India into a global group.', eval:'Shareholders and consumers gain most; suppliers have little bargaining power.'},
    {id:'sez', u:'4', t:'SEZs and export zones', idea:'Zones attract FDI with tax breaks and cheap land and labour.', ev:'Shenzhen grew from a fishing town into a megacity after 1980; Dubai’s free zones.', eval:'Jobs and growth arrive, but often with long hours and pollution.'},
    {id:'cont', u:'4', t:'Containerisation', idea:'Cheap shipping makes long supply chains profitable.', ev:'Mega-ports such as Shanghai and Singapore handle huge volumes.', eval:'Lower transport costs mainly benefit firms and consumers.'},
    {id:'cons', u:'4', t:'Cheaper goods and innovation', idea:'Consumers gain affordable products and technology.', ev:'Smartphones assembled from parts made in many countries.', eval:'Benefits are spread thinly; costs are concentrated in a few places.'},
    {id:'work', u:'5', t:'Working conditions', idea:'Supply chains create jobs but can exploit workers.', ev:'Garment factories in Bangladesh; IFAs and codes such as IKEA’s IWAY.', eval:'Standards weaken further down the supply chain.'},
    {id:'deind', u:'5', t:'Deindustrialisation and local business', idea:'Older industrial regions and small firms lose out to global competition.', ev:'Job losses in former manufacturing regions of the USA and UK; local cafés against global chains.', eval:'This loss fed support for nationalism.'},
    {id:'shift', u:'6', t:'Pollution from the global shift', idea:'Environmental costs move to producing places.', ev:'Textile dyes in rivers in Bangladesh; e-waste at Agbogbloshie.', eval:'Producer societies bear the costs of consumption elsewhere.'},
    {id:'risk', u:'6', t:'Supply chain disruption', idea:'Long chains are vulnerable to shocks.', ev:'COVID-19 lockdowns; the Ever Given blocking Suez (2021); Red Sea attacks from 2023.', eval:'Shocks hurt both businesses and societies, especially poorer workers.'},
    {id:'reshore', u:'6', t:'Re-shoring and near-shoring', idea:'Firms and governments shorten chains to cut risk.', ev:'The US CHIPS Act (2022); production moving from China to Mexico.', eval:'Brings jobs back but raises prices.'},
    {id:'nat', u:'6', t:'Nationalist backlash', idea:'Societies hurt by offshoring support protectionist politics.', ev:'“America First” tariffs; Brexit.', eval:'Shows that the societies affected can push back.'},
    {id:'ccarb', u:'C', core:'Unit 2: Global climate', t:'Embedded carbon', idea:'Emissions are produced in one country for consumers in another.', ev:'China’s production footprint includes goods made for export.', eval:'Raises the question of who is responsible: producers or consumers?'}
  ],
  edges: [
    ['cont','tnc','enables','Cheap shipping makes it profitable to split production across the world.'],
    ['tnc','sez','invest in','TNCs locate in zones offering low costs and incentives.'],
    ['tnc','cons','delivers','Lower costs pass on as cheaper goods for consumers.'],
    ['sez','work','creates jobs with','Jobs arrive, but conditions vary widely.'],
    ['sez','shift','concentrates','Industrial clusters concentrate pollution in producing places.'],
    ['tnc','deind','causes','Offshoring closes factories in older industrial regions.'],
    ['deind','nat','feeds','Job losses feed nationalist and protectionist politics.'],
    ['nat','reshore','pushes','Tariffs and subsidies encourage firms to bring production home.'],
    ['risk','reshore','prompts','Disruption makes shorter chains more attractive.'],
    ['shift','ccarb','links to','Moving manufacturing moves emissions too.'],
    ['cons','ccarb','drives','Consumer demand in rich countries drives emissions elsewhere.']
  ],
  route: [
    {h:'Introduction', n:['tnc','cont'], tx:'Define global supply chains, businesses and societies. Argument: businesses (especially TNCs) have gained most, but societies have gained too, and the balance varies by place and over time.'},
    {h:'Benefits for businesses', n:['tnc','cont','sez'], tx:'Lower costs, new markets and access to cheap labour.'},
    {h:'Benefits and costs for societies', n:['cons','work','sez','shift'], tx:'Cheaper goods and jobs, against poor conditions and pollution.'},
    {h:'Losers and responses', n:['deind','nat','risk','reshore'], tx:'Deindustrialised places, disruption and a political backlash.'},
    {h:'Conclusion', n:['ccarb'], tx:'Judge for which business and which society: TNCs and consumers gain most, while producing and deindustrialised places carry many of the costs. The balance is shifting as risks and nationalism grow.'}
  ]
});

/* Syllabus subtopic for each idea (default by id; overrides by map) */
window.SBL_P3_REFS = {
  def: {sup:'4.1',mgo:'4.1',opec:'4.1',kof:'4.1',imf:'4.1',tnc:'4.2',flows:'4.2',rem:'4.2',sez:'4.2',cons:'4.3',dbh:'4.3',tsc:'4.3',net:'4.3',cont:'4.3',pol:'4.3',bloc:'4.3',
    hdi:'5.1',mpesa:'5.1',csr:'5.1',dev:'5.1',fair:'5.1',ifa:'5.1',work:'5.1',homo:'5.2',glocal:'5.2',dias:'5.2',thai:'5.2',eat:'5.3',sm:'5.3',rn:'5.3',ctrl:'5.3',prot:'5.3',hk:'5.3',malala:'5.3',min:'5.3',local:'5.3',fw:'5.3',deind:'5.3',
    tax:'6.1',nat:'6.1',nk:'6.1',oil:'6.1',cyber:'6.1',tech:'6.1',brexit:'6.1',risk:'6.1',oecd:'6.1',shift:'6.2',haze:'6.2',ship:'6.2',asean:'6.2',sglaw:'6.2',imo:'6.2',cso:'6.3',gp:'6.3',ai:'6.3',crowd:'6.3',reshore:'6.3',res:'6.3',epass:'6.3'},
  over: {resilience:{cyber:'6.3'}}
};
window.SBL_P3_SUB = {'4.1':'Global interactions and global power','4.2':'Global networks and flows','4.3':'Human and physical influences on global interactions',
  '5.1':'Development opportunities','5.2':'Changing identities and cultures','5.3':'Local responses to global interactions',
  '6.1':'Geopolitical and economic risks','6.2':'Environmental risks','6.3':'Local and global resilience'};

/* Ways to evaluate (written for this site, informed by what examiners reward) */
window.SBL_P3_EVAL = {
  power: ['Compare different types of power (economic, military, cultural, political) and judge which is most concentrated.','Consider change over time: is power spreading out, or just moving to new holders?','Take the view of other countries: does concentrated power bring them more opportunities or more challenges?'],
  inequality: ['Judge “far more” carefully: compare the size of the gains for different places and groups.','Compare scales: inequality between countries versus within them.','Consider change over time: some places have moved from periphery to core.'],
  culture: ['Compare contrasting places: connected cities versus isolated rural areas, or open versus closed countries.','Ask who has the power to resist or reshape global culture.','Separate visible change (landscapes, brands) from deeper change (values, identity).'],
  risk: ['Ask “for whom?”: the benefits and the risks fall on different places and people.','Compare time scales: short-term shocks versus long-term risks such as climate change.','Consider how far resilience strategies change the balance.'],
  sovereignty: ['Compare powerful and weaker states: who loses control and who keeps it?','Distinguish control lost unwillingly from sovereignty pooled by choice.','Consider change over time: is control now being reasserted?'],
  civil: ['Define “effective”: awareness, policy change or lasting results?','Compare civil society’s impact on businesses with its impact on states.','Recognise that some civil society action resists international-mindedness.'],
  resilience: ['Match the scale of the response to the scale of the risk.','Compare speed, cost and fairness of local, national and global action.','Consider whether actions work best in combination.'],
  technology: ['Judge whether technology is a cause or an enabler, compared with political and economic factors.','Compare who gains and who is excluded (digital divides).','Weigh new opportunities against new risks and controls.'],
  supply: ['Compare stakeholders: TNCs, small firms, workers, consumers and communities.','Compare places: export zones, deindustrialised regions and consumer societies.','Consider change over time, including recent disruption and re-shoring.']
};

/* The four key concepts (places, processes, power, possibilities).
   Each idea lists every concept it is relevant to; the first is its main concept. */
var PL='place', PR='process', PW='power', PO='possibility';
window.SBL_P3_CONCEPT = {
  power: {sup:[PW,PL],mgo:[PW,PR],opec:[PW,PL],rn:[PW,PL],tnc:[PW,PL,PR],tax:[PR,PW],kof:[PL,PR],cpop:[PL,PO],sm:[PO,PW,PR],cso:[PO,PW]},
  inequality: {flows:[PR,PL,PW],rem:[PR,PL],tsc:[PR,PL],cmig:[PR,PL],dbh:[PL,PW],hdi:[PL],shift:[PL,PR,PW],haze:[PL,PR],csr:[PW,PO],mpesa:[PO,PR,PL]},
  culture: {homo:[PL,PR],dias:[PL,PR],thai:[PL,PW],net:[PR,PW],cmig:[PR,PL],glocal:[PO,PR,PL],tnc:[PW,PR,PL],nk:[PW,PL],nat:[PW,PO],eat:[PO,PW,PL]},
  risk: {tsc:[PR,PL],oil:[PR,PW,PL],cyber:[PR,PW],haze:[PL,PR],ship:[PL,PR],dev:[PL,PO],cres:[PW,PL],fair:[PW,PO],res:[PO,PW],cclim:[PO,PR,PL]},
  sovereignty: {tax:[PW,PR],imf:[PW,PL],ctrl:[PW,PL],prot:[PW,PR],tech:[PR,PW,PO],bloc:[PR,PW,PL],haze:[PL,PW],nk:[PL,PW],brexit:[PO,PW,PL],cclim:[PO,PW]},
  civil: {gp:[PW,PO],ai:[PW,PL],ifa:[PW,PR],hk:[PL,PW,PO],min:[PL,PW],eat:[PL,PO],crowd:[PR,PO],cclim:[PR,PO,PW],malala:[PO,PL,PW],fair:[PO,PR,PW]},
  resilience: {reshore:[PR,PL,PW],imo:[PR,PW],epass:[PR,PW],cyber:[PW,PL],asean:[PW,PL,PO],sglaw:[PW,PL],local:[PL,PO],crowd:[PO,PL,PR],oecd:[PO,PW,PR],cclim:[PO,PL,PR]},
  technology: {cont:[PR,PL],net:[PR,PL,PW],cpop:[PL,PR],sm:[PW,PR,PO],fw:[PW,PL],pol:[PW,PL],epass:[PW,PR],mpesa:[PO,PL],tech:[PO,PW,PR],cyber:[PO,PW]},
  supply: {tnc:[PW,PL,PR],nat:[PW,PL,PO],sez:[PL,PR,PW],work:[PL,PW],deind:[PL,PR],shift:[PL,PR],cont:[PR,PL],cons:[PR,PL],risk:[PR,PL,PO],ccarb:[PR,PL,PW],reshore:[PO,PR,PW]}
};

/* A question to ask through each concept lens, for each essay */
window.SBL_P3_LENS = {
  power: {place:'Which places hold power, and how does being highly connected differ from being powerful?',process:'Through which processes (investment, profit shifting, demographic change) is power moving?',power:'Who sets the rules, controls resources and decides? Compare hard, soft and economic power.',possibility:'Could power spread more widely in future through civil society, technology or emerging economies?'},
  inequality: {place:'Which places gain and which are left behind, and does the pattern differ at global, national and local scales?',process:'Which flows (trade, FDI, migration, remittances) spread or concentrate benefits?',power:'Who decides how benefits are shared: TNCs, governments or consumers?',possibility:'Can social enterprise, CSR or new technology narrow the gap, and how far?'},
  culture: {place:'Do connected cities and remote rural or border places change in the same way?',process:'How do diffusion, migration and digital media spread culture?',power:'Who has the power to shape culture, and who can resist it?',possibility:'Is the future homogenisation, hybridity or renewed difference?'},
  risk: {place:'Where are the risks felt, and where are the benefits felt? Are they the same places?',process:'How does connectivity transmit both benefits and shocks?',power:'Who controls key resources and standards, and who is most exposed?',possibility:'Can resilience strategies and climate action change the balance in future?'},
  sovereignty: {place:'Which states lose control and which keep it? Compare large and small, open and closed states.',process:'Which processes (technology, blocs, capital flows) bypass state control?',power:'How do states use protectionism, controls and taxes to reassert power?',possibility:'Will cooperation or nationalism shape sovereignty in future?'},
  civil: {place:'How does the political context of a place affect what civil society can achieve?',process:'How do digital networks and campaigns spread civil society action?',power:'How much power do NGOs and unions have compared with states and TNCs?',possibility:'What could civil society achieve in future, and what limits it?'},
  resilience: {place:'Which places and communities can build resilience locally?',process:'Which global rules and processes manage risks that cross borders?',power:'Who has the authority and resources to act: states, regions or TNCs?',possibility:'Which combination of local and global action offers the best future?'},
  technology: {place:'Which places are connected or excluded by technology?',process:'How has technology changed the speed and scale of flows?',power:'Do states, TNCs or citizens gain most power from technology?',possibility:'Will future technology open up global interactions or close them down?'},
  supply: {place:'Which places gain (export zones, consumer societies) and which lose (deindustrialised regions)?',process:'How do containerisation, offshoring and embedded carbon link producers and consumers?',power:'Who holds power in the supply chain: TNCs, workers, governments or consumers?',possibility:'Will re-shoring and regulation change who benefits in future?'}
};

/* ---------- Additions from the examined 16-mark themes (2019–2025), plus extra ideas ---------- */
(function () {
  var MAPS = window.SBL_P3_MAPS;
  function get(id) { return MAPS.filter(function (m) { return m.id === id; })[0]; }
  function add(id, nodes, edges, route) {
    var m = get(id);
    m.nodes = m.nodes.concat(nodes); m.edges = m.edges.concat(edges);
    (route || []).forEach(function (r) { m.route[r[0]].n = m.route[r[0]].n.concat(r[1]); if (r[2]) m.route[r[0]].tx += ' ' + r[2]; });
  }
  add('power', [
    {id:'aid', u:'4', t:'Lending and aid', idea:'Superpowers gain influence through loans, aid and investment in other countries.', ev:'China’s Belt and Road Initiative (from 2013) lends to over 140 countries; Sri Lanka leased Hambantota port to a Chinese firm for 99 years in 2017 after struggling with debt.', eval:'Brings roads, ports and power stations that other countries need, but can create debt and dependence.'},
    {id:'conflict', u:'6', t:'Rivalry and conflict', idea:'Competition between powerful states spills into conflicts and economic shocks elsewhere.', ev:'Regional powers backed opposing sides in Yemen’s war; the Russia–Ukraine war from 2022 pushed up global food and energy prices.', eval:'Shows the challenges that concentrated power creates for other countries, not just the opportunities.'}
  ], [
    ['sup','aid','extends power through','Loans and investment give superpowers influence over other countries’ policies and infrastructure.'],
    ['aid','mgo','alternative to','Belt and Road loans give countries an alternative to IMF lending and its conditions.'],
    ['sup','conflict','drawn into','Superpower rivalry can turn local conflicts into proxy wars with global effects.'],
    ['conflict','opec','disrupts','War and sanctions affecting oil producers move world energy prices.']
  ], [[1,['aid','conflict'],'Lending and rivalry show that concentrated power brings other countries both opportunities and challenges.']]);

  add('inequality', [
    {id:'hicw', u:'4', t:'Winners and losers in rich countries', idea:'Global interactions benefit some people in wealthy countries much more than others.', ev:'Consumers and shareholders gain from cheaper goods and higher profits; former manufacturing towns in the US “Rust Belt” and northern England lost jobs to offshoring.', eval:'Inequality within wealthy countries can be as important as inequality between countries.'}
  ], [
    ['flows','hicw','creates','Offshoring and trade create winners (consumers, investors) and losers (industrial workers) within rich countries.'],
    ['hicw','shift','other side of','Rich countries lost polluting factories along with the jobs, moving pollution to producing countries.']
  ], [[2,['hicw'],'Even within wealthy countries, some places and people lose out.']]);

  add('culture', [
    {id:'aa', u:'5', t:'Minorities and affirmative action', idea:'Policies that protect minority groups help keep identities diverse.', ev:'Reserved seats for women and marginalised groups in Nepal; recognition of LGBTQ+ rights; the Dani of Papua.', eval:'Identity is personal and multiple, so patterns are becoming more complex, not simpler.'}
  ], [
    ['aa','homo','resists','Protecting minority rights and identities works against cultural homogenisation.'],
    ['aa','nat','in tension with','Nationalist movements may push a single national identity over minority identities.']
  ], [[3,['aa'],'Struggles over identity, from national politics to minority rights, keep patterns complex.']]);

  add('resilience', [
    {id:'ctech', u:'C', core:'Unit 2: Global climate', t:'New technology for climate risk', idea:'Renewables, carbon capture and early warning systems help manage global risks.', ev:'Rapid growth of solar and wind power; satellite monitoring of fires and storms.', eval:'Technology is unevenly available, can have unintended consequences, and does not replace changes in behaviour and policy.'}
  ], [
    ['ctech','cclim','supports','New energy technologies make mitigation targets more achievable.'],
    ['ctech','cyber','both technology','Technology can reduce risk, but more digital systems also create new risks.']
  ], [[3,['ctech'],'Global and technological solutions are powerful but unevenly shared.']]);

  /* ---- New maps ---- */
  MAPS.push({
    id: 'physical', short: 'Physical vs human factors',
    q: 'How far does physical geography, rather than human decisions, explain why some places are more connected and more culturally diverse than others?',
    focus: 'Places, processes, power',
    nodes: [
      {id:'iso', u:'4', t:'Isolation and distance', idea:'Remote, landlocked or island places face higher transport costs and fewer connections.', ev:'Australia’s “tyranny of distance”; landlocked Nepal and Chad depend on neighbours’ ports.', eval:'Air travel, containers and the internet have reduced, but not removed, the effect of distance.'},
      {id:'nres', u:'4', t:'Physical resources', idea:'Resources and location can make a place a hub.', ev:'Oil wealth paid for Dubai’s airport and port, making it a global hub; Singapore’s position on the Strait of Malacca.', eval:'Resources only create connections when governments and investors use them.'},
      {id:'opec', u:'4', t:'OPEC oil states', idea:'Oil reserves connect producing states to the world economy.', ev:'Saudi Arabia, Iraq and the UAE are tied into global energy flows.', eval:'The resource curse shows physical wealth does not guarantee wider connection.'},
      {id:'dbh', u:'4', t:'Digital black holes', idea:'Places with little digital infrastructure are left out of data flows.', ev:'Remote mountains, deserts and rural Africa have weak coverage.', eval:'Mobile networks and satellite internet are overcoming terrain.'},
      {id:'cont', u:'4', t:'Shrinking-world technology', idea:'Transport and communication technology overcome physical barriers.', ev:'Containerisation; undersea cables; satellite internet.', eval:'Suggests physical geography matters less over time.'},
      {id:'migr', u:'4', t:'Migration rules', idea:'Government rules decide who can move, shaping both connections and diversity.', ev:'Points-based systems in Canada and Australia; Gulf states’ large migrant workforces.', eval:'A human factor that can outweigh physical distance.'},
      {id:'dias', u:'5', t:'Diasporas', idea:'Migrant communities create cultural diversity, mostly in cities.', ev:'London’s Chinatown; the large Indian population of Dubai.', eval:'Shows diversity is driven mainly by human movement, not physical factors.'},
      {id:'thai', u:'5', t:'Mountains and margins in Thailand', idea:'Rugged relief helped preserve distinct cultures.', ev:'Hill peoples in the northern and western mountains near Myanmar and Laos.', eval:'Physical isolation explains part of the pattern, but borders, history and policy matter too.'},
      {id:'prot', u:'5', t:'Protectionism and controls', idea:'Political decisions can disconnect places whatever their geography.', ev:'Trade tariffs and travel bans.', eval:'Human decisions can disconnect even well-located places.'},
      {id:'nk', u:'6', t:'North Korea', idea:'A state can choose isolation.', ev:'Almost no internet access and very little trade, despite sharing borders with China and South Korea.', eval:'The clearest case of human, not physical, disconnection.'},
      {id:'cpopd', u:'C', core:'Unit 1: Changing population', t:'Population distribution', idea:'Relief, climate and water shape where people live, and so how connected places are.', ev:'Most Australians live on the coast; deserts and mountains are sparsely populated.', eval:'Physical factors set the starting pattern; human factors change it.'}
    ],
    edges: [
      ['iso','cont','overcome by','Technology reduces the cost and time of crossing distance.'],
      ['iso','dbh','contributes to','Remote terrain makes infrastructure expensive to build.'],
      ['nres','opec','linked to','Resource endowment turns some states into global hubs.'],
      ['nres','migr','attracts','Oil wealth in the Gulf attracts large flows of migrant workers.'],
      ['migr','dias','creates','Migration rules shape which diasporas form where.'],
      ['thai','iso','example of','Mountains isolated communities and helped preserve their cultures.'],
      ['prot','nk','extreme form','North Korea shows politics can disconnect a place completely.'],
      ['cpopd','iso','explains','Physical geography sets where people live and how far apart they are.'],
      ['dbh','cont','narrowed by','Mobile and satellite technology are closing digital gaps.']
    ],
    route: [
      {h:'Introduction', n:['cpopd'], tx:'Define physical factors, connectivity and cultural diversity at different scales. Argument: physical geography sets the starting conditions, but human decisions increasingly decide outcomes.'},
      {h:'Physical factors matter', n:['iso','nres','thai','cpopd'], tx:'Distance, relief and resources shape connection and preserve distinct cultures.'},
      {h:'Technology reduces their importance', n:['cont','dbh','opec'], tx:'Shrinking-world technology overcomes many physical barriers over time.'},
      {h:'Human decisions matter more', n:['migr','dias','prot','nk'], tx:'Migration rules, diasporas, protectionism and isolation are political choices.'},
      {h:'Conclusion', n:[], tx:'Judge by scale and over time: physical factors explain more at local scales (remote valleys) and in the past; human factors explain more at national scale and today.'}
    ]
  });

  MAPS.push({
    id: 'lics', short: 'Power of low-income countries',
    q: 'How far are low-income countries and their citizens able to shape global interactions, rather than simply being shaped by them?',
    focus: 'Power, places, possibilities',
    nodes: [
      {id:'afcfta', u:'4', t:'African Union and AfCFTA', idea:'Acting together gives lower-income countries a stronger voice.', ev:'The African Continental Free Trade Area began trading in 2021; the African Union joined the G20 as a permanent member in 2023.', eval:'Collective power is growing, but influence over the IMF and WTO is still limited.'},
      {id:'cobalt', u:'4', t:'Resource leverage', idea:'Control of key raw materials gives bargaining power.', ev:'The DR Congo mines around 70% of the world’s cobalt, essential for batteries; OPEC’s history shows resource power.', eval:'Profits often go to foreign firms and elites, not citizens (the resource curse).'},
      {id:'rem', u:'4', t:'Diasporas and remittances', idea:'Migrants link home countries to global networks.', ev:'Remittances make up around a quarter to a third of Nepal’s GDP.', eval:'Gives households power to invest, but depends on decisions made in host countries.'},
      {id:'brain', u:'4', t:'Brain drain', idea:'Skilled people leave, weakening the home country.', ev:'Doctors and nurses moving from Zimbabwe and Ghana to the UK.', eval:'A loss of power, partly balanced by remittances and returning skills.'},
      {id:'illicit', u:'4', t:'Illegal flows', idea:'Some groups in poorer countries influence global illegal trade.', ev:'Afghanistan was long the world’s largest opium producer.', eval:'A form of influence that harms citizens and attracts outside intervention.'},
      {id:'mob', u:'4', t:'Mobile phones and social media', idea:'Communication technology gives citizens a global voice and access to services.', ev:'M-Pesa in Kenya; social media campaigns reaching global audiences.', eval:'Digital divides remain within countries, especially in rural areas.'},
      {id:'sdg', u:'5', t:'Shaping the SDGs', idea:'Lower-income countries took part in negotiating the global development agenda.', ev:'The SDGs (2015) were negotiated more widely than the earlier top-down MDGs.', eval:'Funding still comes mainly from richer countries.'},
      {id:'cexp', u:'5', t:'Cultural exports', idea:'Culture from lower-income countries reaches global audiences.', ev:'Nigeria’s Nollywood and Afrobeats artists such as Burna Boy (Grammy winner, 2021).', eval:'Global platforms that spread this culture are mostly owned by firms in rich countries.'},
      {id:'malala', u:'5', t:'Citizen activists', idea:'Individuals from poorer countries can lead global campaigns.', ev:'Malala Yousafzai and the Malala Fund.', eval:'Often needs global media and funding from richer countries to succeed.'},
      {id:'yemen', u:'6', t:'Disruption and conflict', idea:'Groups in poorer countries can disrupt global flows.', ev:'Houthi attacks in the Red Sea from late 2023 forced ships to divert around Africa.', eval:'Influence through disruption is not the same as power to shape positive change.'},
      {id:'ccop', u:'C', core:'Unit 2: Global climate', t:'Climate negotiations', idea:'Vulnerable countries use moral authority in climate talks.', ev:'Small island and least developed countries pushed for the 1.5°C goal (2015) and a loss and damage fund (COP27, 2022).', eval:'Agreements depend on rich countries delivering the money.'}
    ],
    edges: [
      ['afcfta','sdg','both collective','Acting as a group increases lower-income countries’ voice in global agreements.'],
      ['cobalt','afcfta','strengthens','Control of critical minerals gives African states bargaining power.'],
      ['rem','brain','other side of','Migration brings remittances but drains skills.'],
      ['mob','rem','cheapens','Mobile money makes sending money home cheaper.'],
      ['mob','cexp','spreads','Social media and streaming help music and film reach global audiences.'],
      ['mob','malala','amplifies','Digital media gives activists a global platform.'],
      ['ccop','sdg','both negotiation','Moral and collective pressure in UN processes is a key source of influence.'],
      ['yemen','illicit','disruptive power','Influence through disruption or illegal flows, rather than through formal power.']
    ],
    route: [
      {h:'Introduction', n:[], tx:'Define low-income countries (accept that categories are blurred) and types of power: hard, soft, economic and collective. Argument: influence is growing, but it is mostly collective, cultural or disruptive rather than structural.'},
      {h:'Collective and economic power', n:['afcfta','cobalt','sdg','ccop'], tx:'Groups of countries and resource leverage give a stronger voice.'},
      {h:'Citizens’ influence', n:['mob','cexp','malala','rem'], tx:'Technology, culture, activists and diasporas give citizens global reach.'},
      {h:'Limits and negative influence', n:['brain','illicit','yemen'], tx:'Brain drain, illegal flows and conflict show influence that harms citizens.'},
      {h:'Conclusion', n:[], tx:'Judge the extent: low-income countries have more influence than before, especially when they act together, but the rules of the global system are still set mainly by richer states.'}
    ]
  });

  MAPS.push({
    id: 'envimpact', short: 'Environmental impacts of flows',
    q: 'To what extent are the environmental costs of global flows borne by places that gain least from them, and can governments protect their citizens?',
    focus: 'Places, power, possibilities',
    nodes: [
      {id:'hicair', u:'6', t:'Cleaner air in old industrial regions', idea:'The global shift moved heavy industry, and its pollution, away from many rich countries.', ev:'Air quality in former industrial cities such as Pittsburgh and Manchester has improved greatly since the 1970s.', eval:'Rich countries still cause emissions through what they import (embedded carbon) and share global climate impacts.'},
      {id:'embc', u:'6', t:'Embedded carbon', idea:'Emissions from making goods are counted where they are produced, not where they are used.', ev:'A large share of China’s emissions come from making goods for export.', eval:'Consumption-based accounting shows rich countries’ real footprint.'},
      {id:'ewaste', u:'4', t:'E-waste flows', idea:'Waste moves from rich to poorer countries.', ev:'Agbogbloshie in Ghana; the Basel Convention restricts hazardous waste exports.', eval:'Illegal flows continue despite the rules.'},
      {id:'plastic', u:'4', t:'Plastic waste exports', idea:'Waste flows shift when one country closes its door.', ev:'China banned most plastic waste imports in 2018; exports moved to Malaysia, Vietnam and Indonesia, and Malaysia returned some containers in 2019.', eval:'Governments can protect citizens by refusing waste, but the problem moves elsewhere.'},
      {id:'palm', u:'6', t:'Agribusiness and palm oil', idea:'Global demand drives land clearance in producing regions.', ev:'Indonesia and Malaysia produce around 85% of palm oil.', eval:'Producing regions bear the environmental cost of global consumption.'},
      {id:'haze', u:'6', t:'Trans-boundary haze', idea:'Pollution spreads in a regional pattern from its sources.', ev:'Smoke from Sumatra and Kalimantan affects Singapore and Malaysia.', eval:'Neighbours suffer without controlling the source.'},
      {id:'ship', u:'6', t:'Shipping lanes and ports', idea:'Pollution is concentrated in linear patterns along busy routes.', ev:'The Strait of Malacca, the English Channel and major ports.', eval:'Coastal communities near hubs bear more of the cost.'},
      {id:'sglaw', u:'6', t:'Government action', idea:'States can regulate polluters and act beyond their borders.', ev:'Singapore’s 2014 haze law; the IMO’s 2020 sulphur cap.', eval:'Hard to enforce on activities in other countries.'},
      {id:'csr', u:'5', t:'TNC responsibility', idea:'Companies can protect environments where governments fail.', ev:'IKEA’s FSC timber sourcing; no-deforestation policies.', eval:'Voluntary, and sometimes greenwashing.'},
      {id:'gp', u:'6', t:'Civil society campaigns', idea:'NGOs expose polluters and pressure governments and companies.', ev:'Greenpeace campaigns against deforestation and plastic pollution.', eval:'No legal power; relies on public pressure.'},
      {id:'ccom', u:'C', core:'Unit 2: Global climate', t:'Oceans and atmosphere', idea:'Some impacts affect the global commons, beyond any one government.', ev:'Climate change; ocean plastics; the Paris Agreement (2015).', eval:'Only global cooperation can protect citizens from these impacts.'}
    ],
    edges: [
      ['hicair','embc','hides','Cleaner local air can hide the emissions rich countries cause through imports.'],
      ['embc','ccom','adds to','Wherever emissions occur, they add to global climate change.'],
      ['ewaste','plastic','similar pattern','Waste flows from rich to poorer countries, moving when rules change.'],
      ['plastic','sglaw','shows limits of','One government’s ban protects its citizens but pushes waste to others.'],
      ['palm','haze','causes','Clearing land for plantations drives the fires behind the haze.'],
      ['haze','sglaw','prompted','The haze led Singapore to pass its own cross-border law.'],
      ['csr','palm','tries to reduce','No-deforestation pledges aim to cut agribusiness impacts.'],
      ['gp','csr','pressures','Campaigns push companies to adopt stronger policies.'],
      ['ship','ccom','adds to','Shipping emissions and spills affect the oceans and atmosphere.']
    ],
    route: [
      {h:'Introduction', n:[], tx:'Define global flows and environmental impacts at local, regional and global scales. Argument: costs are concentrated in producing and receiving places, but some impacts are shared by all; governments can protect citizens only partly.'},
      {h:'The pattern of impacts', n:['ewaste','plastic','palm','ship','haze'], tx:'Waste, agribusiness, shipping and haze produce clear spatial patterns.'},
      {h:'Rich countries: cleaner but not clean', n:['hicair','embc','ccom'], tx:'The global shift improved local environments in rich countries, but shared climate impacts remain.'},
      {h:'Who protects citizens?', n:['sglaw','csr','gp'], tx:'Governments, TNCs and civil society each help, with clear limits.'},
      {h:'Conclusion', n:[], tx:'Judge the extent: local and regional impacts can be partly managed by governments; global impacts need cooperation. Poorer places bear more of the cost.'}
    ]
  });

  MAPS.push({
    id: 'future', short: 'Future of globalisation',
    q: 'Will improving communications technology keep globalisation accelerating, or will other forces slow it down?',
    focus: 'Processes, power, possibilities',
    nodes: [
      {id:'kof', u:'4', t:'Measuring globalisation', idea:'Indices show globalisation is not growing at the same rate in every dimension.', ev:'Trade as a share of world GDP has barely grown since 2008, a slowdown sometimes called “slowbalisation”, while data flows keep rising.', eval:'Globalisation may be changing form rather than slowing.'},
      {id:'net', u:'4', t:'Internet and streaming', idea:'Digital communication connects people and markets instantly.', ev:'Video calls, streaming and online shopping across borders.', eval:'Easy to connect, but not everyone can.'},
      {id:'ai', u:'4', t:'AI and the Internet of Things', idea:'New technology could connect production and services even more closely.', ev:'AI translation, cloud services and remote work.', eval:'Could also bring production home, reducing some flows.'},
      {id:'dbh', u:'4', t:'Digital divides', idea:'Uneven access limits how far technology spreads globalisation.', ev:'Rural and low-income areas have weaker access.', eval:'Mobile and satellite internet are narrowing the gap.'},
      {id:'bloc', u:'4', t:'Trade agreements', idea:'International cooperation, not just technology, drives globalisation.', ev:'RCEP (in force 2022) and AfCFTA (2021).', eval:'Shows globalisation can accelerate for political reasons too.'},
      {id:'smc', u:'5', t:'Social media and global culture', idea:'Platforms spread culture and ideas worldwide.', ev:'K-pop and TikTok trends reach global audiences.', eval:'Can also fuel identity politics and division.'},
      {id:'fw', u:'5', t:'Censorship', idea:'Governments can limit digital globalisation.', ev:'China’s Great Firewall; internet shutdowns during protests.', eval:'Could split the internet into separate national systems.'},
      {id:'prot', u:'5', t:'Protectionism', idea:'Trade barriers slow economic globalisation.', ev:'US tariffs on China from 2018 and much wider tariffs from 2025.', eval:'Political choices can reverse trends whatever the technology.'},
      {id:'nat', u:'6', t:'Renewed nationalism', idea:'Political backlash slows integration.', ev:'Brexit; “America First”.', eval:'May be a temporary swing rather than a permanent reversal.'},
      {id:'covid', u:'6', t:'Shocks and disruption', idea:'Global crises can slow some flows and speed up others.', ev:'COVID-19 cut travel and trade in 2020 but sped up remote work and online services.', eval:'Shows physical flows and digital flows can move in opposite directions.'},
      {id:'reshore', u:'6', t:'Re-shoring', idea:'Firms shorten supply chains to reduce risk.', ev:'The US CHIPS Act (2022); near-shoring to Mexico.', eval:'Regional globalisation may replace global supply chains.'}
    ],
    edges: [
      ['net','smc','spreads','Faster communication spreads culture and ideas.'],
      ['ai','net','builds on','New technologies extend digital connection.'],
      ['ai','reshore','may enable','Automation could make producing at home cheaper.'],
      ['dbh','net','limits','Not everyone can join digital globalisation.'],
      ['fw','net','restricts','States can block or split the internet.'],
      ['prot','nat','driven by','Nationalist politics leads to trade barriers.'],
      ['covid','reshore','accelerated','Pandemic disruption pushed firms to shorten supply chains.'],
      ['kof','covid','shows','Data shows physical flows slowing while digital flows grow.'],
      ['bloc','prot','counters','Regional trade deals keep integration growing despite tariffs elsewhere.']
    ],
    route: [
      {h:'Introduction', n:['kof'], tx:'Define globalisation and communications technology. Argument: technology will keep driving digital and cultural globalisation, but political and economic forces may slow physical flows.'},
      {h:'Technology drives acceleration', n:['net','ai','smc'], tx:'Communication technology keeps connecting people, ideas and services.'},
      {h:'Other forces also drive it', n:['bloc'], tx:'Trade agreements show political cooperation matters as well.'},
      {h:'Forces that slow or reverse it', n:['dbh','fw','prot','nat','covid','reshore'], tx:'Divides, censorship, protectionism, nationalism and shocks.'},
      {h:'Conclusion', n:[], tx:'Judge the future: globalisation is likely to keep growing in digital and cultural forms, but economic globalisation may become more regional. Whether it accelerates depends on who controls the technology and on political choices.'}
    ]
  });

  MAPS.push({
    id: 'opposition', short: 'Opposition to globalisation',
    q: 'To what extent is opposition to globalisation driven by cultural concerns rather than economic, political or environmental ones?',
    focus: 'Places, power, perspectives',
    nodes: [
      {id:'cimp', u:'5', t:'Cultural imperialism', idea:'Fear that global, often Western, culture replaces local culture.', ev:'Around 40% of the world’s languages are at risk of disappearing; global brands in historic places.', eval:'Many people welcome global culture and blend it with their own.'},
      {id:'star', u:'5', t:'Heritage and global brands', idea:'Opposition is strongest where brands meet national symbols.', ev:'Starbucks closed its store in Beijing’s Forbidden City in 2007 after public criticism.', eval:'A symbolic campaign with little effect on trade overall.'},
      {id:'eat', u:'5', t:'Buying local', idea:'Movements defend local food cultures and economies.', ev:'Thailand’s “Eat Local” movement.', eval:'Mixes cultural, economic and environmental motives.'},
      {id:'dias', u:'5', t:'Migration and identity', idea:'Immigration can create fears about national identity.', ev:'Large diaspora communities in European and US cities.', eval:'Diasporas also show many people embrace diversity.'},
      {id:'min', u:'5', t:'Anti-immigration groups', idea:'Some civil society groups oppose migration directly.', ev:'The Minuteman Project on the US–Mexico border.', eval:'Motives combine identity, security and jobs.'},
      {id:'brexit', u:'6', t:'Sovereignty: Brexit', idea:'Opposition to rules made by international bodies.', ev:'The 2016 “take back control” campaign.', eval:'A political motive, linked to identity and immigration.'},
      {id:'amfirst', u:'6', t:'Jobs and trade: America First', idea:'Opposition driven by job losses and trade deficits.', ev:'Withdrawal from the TPP (2017); tariffs on China.', eval:'Mainly economic, though framed in national identity.'},
      {id:'deind', u:'5', t:'Deindustrialisation', idea:'Places that lost industry often oppose globalisation most.', ev:'Former manufacturing towns in the US Rust Belt and northern England.', eval:'Suggests economic loss underlies much cultural resentment.'},
      {id:'gp', u:'6', t:'Environmental opposition', idea:'Campaigns against the environmental costs of global production.', ev:'Greenpeace campaigns against deforestation by global supply chains.', eval:'Opposes how globalisation works rather than globalisation itself.'},
      {id:'imfp', u:'4', t:'Protests against IMF conditions', idea:'In the global South, opposition often targets debt and austerity.', ev:'Protests in Kenya in 2024 against tax rises in a finance bill linked to an IMF programme.', eval:'Mainly economic and political, not cultural.'},
      {id:'rn', u:'5', t:'Resource nationalism', idea:'Governments resist foreign control of resources.', ev:'Bolivia’s gas nationalisation (2006); Indonesia’s nickel export ban (2020).', eval:'Economic and political motives dominate.'}
    ],
    edges: [
      ['cimp','star','example of','Opposition to a global brand in a national heritage site.'],
      ['cimp','eat','also motivates','Defending local food culture against global chains.'],
      ['dias','min','provokes','Visible migration can trigger anti-immigration movements.'],
      ['min','brexit','related to','Immigration was a central issue in the Brexit campaign.'],
      ['deind','amfirst','fuels','Job losses in industrial regions fed support for protectionism.'],
      ['deind','brexit','fuels','Areas with industrial decline voted strongly to leave the EU.'],
      ['gp','eat','shares concern','Both oppose the environmental costs of long supply chains.'],
      ['imfp','rn','both economic','In the global South, opposition often targets debt and control of resources.']
    ],
    route: [
      {h:'Introduction', n:[], tx:'Define cultural, economic, political and environmental opposition. Argument: cultural concerns are important, especially in the global North, but they are often bound up with economic loss; in the global South, economic and political motives dominate.'},
      {h:'Cultural opposition', n:['cimp','star','eat','dias'], tx:'Fears about language, heritage, food and identity.'},
      {h:'Economic and political opposition', n:['deind','amfirst','brexit','min'], tx:'Job losses and sovereignty, often expressed in cultural terms.'},
      {h:'Global South and environmental opposition', n:['imfp','rn','gp'], tx:'Debt, resources and environmental costs.'},
      {h:'Conclusion', n:[], tx:'Judge the extent: culture is a powerful way of expressing opposition, but the underlying causes are often economic. The balance varies between the global North and South, and between groups within countries.'}
    ]
  });

  /* references, concepts, lenses and evaluation for the additions */
  var D = window.SBL_P3_REFS.def;

  var R = {aid:'4.2',conflict:'6.1',hicw:'4.2',aa:'5.1',iso:'4.3',nres:'4.3',migr:'4.2',afcfta:'4.1',cobalt:'4.1',brain:'4.2',illicit:'4.2',mob:'4.3',sdg:'5.1',cexp:'5.2',yemen:'6.1',
    hicair:'6.2',embc:'6.2',ewaste:'4.2',plastic:'4.2',palm:'6.2',ai:'4.3',smc:'5.2',covid:'6.1',cimp:'5.2',star:'5.3',amfirst:'6.1',imfp:'4.1'};
  for (var k in R) D[k] = R[k];
  window.SBL_P3_REFS.over.envimpact = {gp:'6.3'};

  var C = window.SBL_P3_CONCEPT;
  C.power.aid = [PW,PL,PR]; C.power.conflict = [PW,PL,PO];
  C.inequality.hicw = [PL,PW,PR];
  C.culture.aa = [PW,PL,PO];
  C.resilience.ctech = [PO,PR,PW];
  C.physical = {iso:[PL,PR],nres:[PL,PW],opec:[PL,PW],dbh:[PL,PW],cont:[PR,PL,PO],migr:[PW,PR],dias:[PR,PL],thai:[PL,PR],prot:[PW,PL],nk:[PW,PL],cpopd:[PL,PR]};
  C.lics = {afcfta:[PW,PL],cobalt:[PW,PL],rem:[PR,PL],brain:[PR,PL,PW],illicit:[PR,PW],mob:[PO,PR,PW],sdg:[PW,PO],cexp:[PR,PL,PW],malala:[PO,PW],yemen:[PW,PL],ccop:[PW,PO]};
  C.envimpact = {hicair:[PL,PR],embc:[PR,PL,PW],ewaste:[PR,PL,PW],plastic:[PR,PW,PL],palm:[PL,PR],haze:[PL,PR],ship:[PL,PR],sglaw:[PW,PO],csr:[PW,PO],gp:[PO,PW],ccom:[PL,PO,PR]};
  C.future = {kof:[PR,PL],net:[PR,PL],ai:[PO,PR],dbh:[PL,PW],bloc:[PW,PR,PO],smc:[PR,PL],fw:[PW,PL],prot:[PW,PR],nat:[PW,PO],covid:[PR,PO],reshore:[PO,PR,PL]};
  C.opposition = {cimp:[PW,PL,PR],star:[PL,PW],eat:[PO,PL],dias:[PR,PL],min:[PW,PL],brexit:[PW,PO],amfirst:[PW,PR],deind:[PL,PR],gp:[PO,PW],imfp:[PW,PL],rn:[PW,PL]};

  var L = window.SBL_P3_LENS;
  L.physical = {place:'Which places are isolated by relief, distance or climate, and does this matter more at local or national scale?',process:'How have transport and communication technologies reduced the effect of physical barriers over time?',power:'Which human decisions (migration rules, trade policy, isolationism) connect or disconnect places?',possibility:'Will physical barriers keep shrinking in importance, or will politics decide connectivity in future?'};
  L.lics = {place:'Which places in low-income countries are connected (megacities) and which are not (remote rural areas)?',process:'Through which flows (remittances, culture, resources) do lower-income countries influence others?',power:'Compare types of power: collective, economic, cultural, moral and disruptive.',possibility:'Could groups such as the African Union or climate coalitions gain more power in future?'};
  L.envimpact = {place:'Where are the costs felt: producing regions, waste-receiving countries, neighbours, or everyone?',process:'Which flows (goods, waste, people, capital) cause which impacts?',power:'Who has the power to protect citizens: national governments, global agreements, TNCs or civil society?',possibility:'Which forms of governance could protect citizens better in future?'};
  L.future = {place:'Which places are still left out of digital globalisation?',process:'Which processes are accelerating (data, culture) and which are slowing (trade, migration)?',power:'Who controls the technology and the rules: governments, tech firms or users?',possibility:'Is the future faster, slower, more regional or more divided globalisation?'};
  L.opposition = {place:'Does opposition differ between the global North and South, and between cities and declining industrial towns?',process:'How do cultural change, deindustrialisation and migration create opposition?',power:'Who leads opposition: governments, citizens, civil society or populist parties?',possibility:'Will opposition slow globalisation, or reshape it?'};

  var E = window.SBL_P3_EVAL;
  E.power.push('Weigh opportunities (investment, aid, technology) against challenges (debt, conflict, dependence) for other countries.');
  E.inequality.push('Consider winners and losers within wealthy countries, not just between rich and poor countries.');
  E.culture.push('Discuss struggles over identity at different scales, from national politics to personal and minority identities.');
  E.resilience.push('Ask whether new technology is the best way to manage risk, compared with policy, behaviour and cooperation, and who has access to it.');
  E.physical = ['Judge relative importance at different scales: remote valleys within well-connected countries, and whole countries.','Consider change over time: can physical barriers be overcome by technology?','Separate the different dimensions: transport, digital connection, language, religion and ethnicity.'];
  E.lics = ['Distinguish types of power and influence: hard, soft, economic, collective and disruptive.','Compare connected megacities with isolated rural areas, and citizens with governments.','Consider lower-income countries as environmental stakeholders in climate negotiations.'];
  E.envimpact = ['Examine patterns at different scales: local, regional (haze) and global (climate).','Compare different flows: which produce the clearest patterns of impact?','Compare governments with TNC frameworks and civil society as protectors of citizens.'];
  E.future = ['Focus on the future: will it keep accelerating, not just has it grown?','Compare economic, social and political globalisation: are they moving in the same direction?','Question who has access to, and power over, technology.'];
  E.opposition = ['Compare global North and global South contexts.','Compare different stakeholders: governments, citizens, civil society and populist parties.','Ask whether cultural arguments are a cause of opposition or a way of expressing economic concerns.'];
})();

/* Economic growth map (2025 themes: FDI and natural resources) */
(function () {
  window.SBL_P3_MAPS.push({
    id: 'growth', short: 'Drivers of economic growth',
    q: 'What best explains why some places grow faster economically than others: foreign investment, natural resources or other factors?',
    focus: 'Places, processes, power',
    nodes: [
      {id:'fdi', u:'4', t:'FDI and TNCs', idea:'Foreign investment brings capital, jobs, technology and access to markets.', ev:'FDI turned Shenzhen into a megacity after 1980; Samsung makes a large share of its smartphones in Vietnam.', eval:'Growth is concentrated in a few zones and cities, not spread evenly.'},
      {id:'repat', u:'6', t:'Profit repatriation', idea:'Profits from FDI can leave the host country.', ev:'TNCs send profits home or to low-tax locations, as with Apple’s Irish structures.', eval:'Limits how much FDI benefits the host economy.'},
      {id:'nres', u:'4', t:'Natural resources', idea:'Oil, gas and minerals can fund rapid growth.', ev:'Gulf states built global hubs with oil wealth; Norway’s sovereign wealth fund is the largest in the world.', eval:'Depends on governance and on what the wealth is spent on.'},
      {id:'curse', u:'4', t:'The resource curse', idea:'Resource wealth can slow wider growth.', ev:'Nigeria’s oil and the DR Congo’s cobalt have not brought broad prosperity.', eval:'Colonial history, corruption and conflict explain why resources are not always a benefit.'},
      {id:'opec', u:'4', t:'OPEC', idea:'Producer groups raise resource income through quotas.', ev:'OPEC+ production cuts raise oil revenues.', eval:'Price crashes, such as in 2020, show the risks of dependence.'},
      {id:'rn', u:'5', t:'Resource nationalism', idea:'States take control of resources to keep more of the wealth.', ev:'Indonesia’s 2020 nickel export ban attracted investment in local processing.', eval:'Can deter some foreign investors.'},
      {id:'ftz', u:'4', t:'Free trade zones and blocs', idea:'Trade rules and zones attract investment and trade.', ev:'Dubai’s free zones; the EU single market; AfCFTA (2021).', eval:'Growth may stay inside the zone rather than spreading.'},
      {id:'techg', u:'4', t:'Technology and connectivity', idea:'Places with few resources can grow through connectivity and skills.', ev:'Singapore has almost no natural resources but is one of the richest countries; Estonia’s digital economy.', eval:'Shows resources are not necessary for growth.'},
      {id:'hd', u:'5', t:'Human development', idea:'Education and health create productive workforces.', ev:'South Korea invested heavily in education before its rapid growth.', eval:'Human development is both a cause and a result of growth.'},
      {id:'rejg', u:'5', t:'Rejecting globalisation', idea:'Closing off from global flows can limit growth.', ev:'North Korea’s isolation; new trade barriers after Brexit.', eval:'Some protection may help infant industries grow.'},
      {id:'cdd', u:'C', core:'Unit 1: Changing population', t:'Demographic dividend', idea:'A large working-age population can drive growth.', ev:'Rapid growth in East Asia coincided with a large working-age population; India and Bangladesh today.', eval:'Only realised if there are jobs and education.'}
    ],
    edges: [
      ['fdi','repat','weakened by','Profit repatriation reduces how much FDI benefits the host country.'],
      ['fdi','ftz','attracted by','Zones and trade agreements attract FDI.'],
      ['nres','curse','can lead to','Resource dependence can harm governance and other sectors.'],
      ['nres','opec','organised through','Producer groups try to raise resource income.'],
      ['rn','nres','controls','Governments reclaim a larger share of resource wealth.'],
      ['rn','fdi','redirects','Export bans can attract FDI into processing at home.'],
      ['techg','fdi','attracts','Skills and connectivity attract high-value investment.'],
      ['hd','techg','enables','Education builds the skills a connected economy needs.'],
      ['cdd','hd','needs','A demographic dividend depends on education and jobs.'],
      ['rejg','fdi','deters','Isolation and trade barriers discourage investment.']
    ],
    route: [
      {h:'Introduction', n:[], tx:'Define economic growth (GDP, GNI) and the scales involved. Argument: no single factor explains growth; FDI and resources matter, but governance, people and connectivity decide whether they lead to growth.'},
      {h:'Foreign investment', n:['fdi','ftz','repat'], tx:'FDI drives growth in zones and cities, but profits can leave.'},
      {h:'Natural resources', n:['nres','opec','rn','curse'], tx:'Resources fund growth in some places, but can be a curse.'},
      {h:'Other factors', n:['techg','hd','cdd','rejg'], tx:'Skills, connectivity, population and openness can matter more.'},
      {h:'Conclusion', n:[], tx:'Judge the extent and the scale: FDI and resources explain growth in particular places, but human and political factors decide whether growth is sustained and shared.'}
    ]
  });
  var D = window.SBL_P3_REFS.def;
  D.fdi='4.2'; D.repat='6.1'; D.curse='4.3'; D.ftz='4.3'; D.techg='4.3'; D.hd='5.1'; D.rejg='5.3';
  window.SBL_P3_CONCEPT.growth = {fdi:[PR,PL,PW],repat:[PR,PW],nres:[PL,PR],curse:[PL,PW,PO],opec:[PW,PL],rn:[PW,PL],ftz:[PL,PR,PW],techg:[PR,PL,PO],hd:[PO,PL],rejg:[PW,PO],cdd:[PL,PO]};
  window.SBL_P3_LENS.growth = {place:'Does growth happen in whole countries, or mainly in particular zones, cities and resource regions?',process:'Which flows (investment, resources, trade, people) drive growth, and how?',power:'Who controls the wealth: TNCs, governments, elites or citizens?',possibility:'Which factors will drive growth in future as resources run down and technology changes?'};
  window.SBL_P3_EVAL.growth = ['Compare scales: national growth versus growth in particular local places, such as free trade zones.','Ask how far the possibilities of FDI and resources are realised, given profit leakage, colonial history and exploitation.','Judge whether one factor can be “main”, or whether factors work together.'];
})();
