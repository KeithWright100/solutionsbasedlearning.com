/* ============================================================
   SBL IB Economics — Revision Topics engine data
   ------------------------------------------------------------
   Adds one synthetic "lesson" object per IB Economics unit to
   window.SBL_LESSONS so the existing Revise Me Bot / Challenge
   Mode machinery in /js/sbl-teach-bot.js can be reused with no
   new backend, exactly as done for Geography, Business and
   Economics IGCSE, and IGCSE History.

   Source rule (set by the subject teacher): every checklist
   statement here is grounded in either (a) the official IB
   Economics guide's own syllabus content list (Unit 1, using the
   teacher's own revision checklist, sourced from the guide,
   syllabus pages 22-24), or (b) the class textbook — "Economics
   for the IB Diploma" (Oxford University Press, 2020 edition) —
   cross-checked chapter by chapter against its own "By the end
   of this chapter, you should be able to" objectives (Units 2-4,
   chapters 3-31). No item is invented from general knowledge.
   Wording throughout is original — restated as first-person "I
   can..." revision statements, never copied or closely
   paraphrased as continuous prose from the guide or the
   textbook. Items explicitly marked HL-only in the source are
   tagged "(HL only)"; everything else is SL and HL content.

   Test My Knowledge is deliberately not wired up yet for any of
   these four units — no quiz has been written from the textbook
   yet, so that mode is shown as locked ("Coming soon") on each
   topic page until a quiz bank is built and reviewed.
   ============================================================ */

(function () {
  window.SBL_LESSONS = window.SBL_LESSONS || {};

  /* ---------------- Unit 1: Introduction to economics ---------------- */

  var ECON1_UNIT_TITLE = 'Unit 1: Introduction to Economics';

  var ECON1_CHECKLIST = [
    // 1.1 What is economics
    'I can explain the social nature of economics.',
    'I can explain the distinction between microeconomics and macroeconomics.',
    'I can explain scarcity.',
    'I can explain choice.',
    'I can explain efficiency.',
    'I can explain equity.',
    'I can explain economic well-being.',
    'I can explain sustainability.',
    'I can explain change as a feature of the economic world.',
    'I can explain interdependence.',
    'I can explain intervention.',
    'I can explain land, labour, capital and entrepreneurship as the factors of production.',
    'I can explain how unlimited human needs and wants create scarcity when resources are limited.',
    'I can explain the relationship between scarcity and sustainability.',
    'I can explain opportunity cost as the cost of choice.',
    'I can explain free goods.',
    'I can explain the basic economic questions of what and how much to produce, how to produce and for whom to produce.',
    'I can explain the roles of markets and government intervention in answering the basic economic questions.',
    'I can explain the differences between free market, planned and mixed economies.',
    'I can explain the assumptions behind the production possibilities curve (PPC) model.',
    'I can draw and explain a PPC showing scarcity, choice and opportunity cost.',
    'I can draw and explain a PPC showing unemployment of resources and productive efficiency.',
    'I can draw and explain a PPC showing actual growth and growth in production possibilities.',
    'I can draw and explain a PPC showing increasing opportunity cost compared with constant opportunity cost.',
    'I can explain interdependence between households, firms, government, the financial sector and the foreign sector.',
    'I can draw and explain the circular flow of income model, including leakages and injections.',
    // 1.2 How do economists approach the world
    'I can explain the role of positive economics.',
    'I can explain the use of logic in economic reasoning.',
    'I can explain the use of hypotheses, models and theories in economics.',
    'I can explain the ceteris paribus assumption.',
    'I can explain the role of empirical evidence and refutation in testing economic theories.',
    'I can explain the role of normative economics and value judgements in policy-making.',
    'I can explain the difference between equity and equality.',
    'I can explain Adam Smith’s laissez-faire economics in the 18th century.',
    'I can explain classical microeconomics, utility and the concept of the margin in the 19th century.',
    'I can explain classical macroeconomics and Say’s Law.',
    'I can explain the Marxist critique of classical economic thought.',
    'I can explain the Keynesian revolution and the rise of macroeconomic policy in the 20th century.',
    'I can explain the monetarist/new classical counter-revolution.',
    'I can explain the growing role of behavioural economics and its dialogue with psychology and other disciplines in the 21st century.',
    'I can explain the interdependencies between the economy, society and the environment, and reasons for moving towards a circular economy.'
  ];

  window.SBL_LESSONS.IBECON1REV = {
    id: 'IBECON1REV',
    title: 'Introduction to Economics — Full Unit Revision',
    syllabusFocus: 'The whole of IB Economics, Unit 1: Introduction to Economics — the social science nature of economics; scarcity, choice and opportunity cost; the factors of production; the basic economic questions and how free market, planned and mixed economies answer them; the production possibilities curve (PPC) model; the circular flow of income; and how economists approach the world, from positive and normative economics through to the history of economic thought and the growing role of behavioural economics.',
    starterButtons: [
      { label: 'Overview of the whole unit', request: 'Give me a full overview of Unit 1: Introduction to Economics, covering scarcity and choice, the factors of production, the basic economic questions, economic systems, and the PPC model.' },
      { label: 'Scarcity, choice and opportunity cost', request: 'Explain how scarcity forces choice, and how opportunity cost is the cost of that choice.' },
      { label: 'The production possibilities curve', request: 'Explain what a PPC shows, and how it can illustrate scarcity, unemployment of resources, and economic growth.' },
      { label: 'Economic systems', request: 'Compare free market, planned and mixed economies in how they answer the basic economic questions.' },
      { label: 'The circular flow of income', request: 'Explain the circular flow of income model, including leakages and injections.' },
      { label: 'Positive vs normative economics', request: 'Explain the difference between positive economics and normative economics, with an example of each.' },
      { label: 'History of economic thought', request: 'Give me a quick summary of how economic thinking evolved from Adam Smith through Keynes to behavioural economics.' }
    ],
    checklist: ECON1_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Unit 1 checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this unit — for example, “Explain opportunity cost.” Answer each one before it moves on to the next; it will briefly correct you if you get one wrong. Think it through yourself first.',
      unitTitle: ECON1_UNIT_TITLE,
      checklistItems: ECON1_CHECKLIST
    }
  };

  /* ---------------- Unit 2: Microeconomics ---------------- */

  var ECON2_UNIT_TITLE = 'Unit 2: Microeconomics';

  var ECON2_CHECKLIST = [
    // 2.1 Demand (Ch3)
    'I can define a market.',
    'I can define demand.',
    'I can explain the Law of Demand.',
    'I can identify and explain the non-price determinants of demand.',
    'I can distinguish between a shift of a demand curve and a movement along a demand curve.',
    'I can explain the relationship between an individual consumer’s demand and market demand.',
    'I can explain the income and substitution effects. (HL only)',
    'I can explain the concept of rational consumer choice. (HL only)',
    'I can define and explain behavioural economics. (HL only)',
    'I can explain limitations of the assumption of rational consumer choice. (HL only)',
    'I can explain bounded rationality, bounded self-control, bounded selfishness and imperfect information. (HL only)',
    'I can explain cognitive biases. (HL only)',
    'I can explain and give examples of choice architecture. (HL only)',
    'I can explain and give examples of nudge theory. (HL only)',
    // 2.2 A closer look at demand: Elasticity of demand (Ch4)
    'I can explain the general concept of elasticity.',
    'I can define elasticity of demand.',
    'I can define and calculate price elasticity of demand (PED).',
    'I can explain and illustrate the theoretical range of values for PED.',
    'I can explain the relationship between PED and total revenue, for both price elastic and price inelastic demand.',
    'I can explain and illustrate how PED can vary along a straight-line, downward-sloping demand curve. (HL only)',
    'I can explain the determinants of price elasticity of demand.',
    'I can explain why PED matters for firm and government decision-making.',
    'I can explain likely differences in PED between primary commodities and manufactured goods. (HL only)',
    'I can define and calculate income elasticity of demand (YED).',
    'I can explain the possible range of values for YED.',
    'I can explain why YED matters for firms and for understanding sectoral change in an economy. (HL only)',
    // 2.3 Supply (Ch5)
    'I can define supply.',
    'I can explain the Law of Supply.',
    'I can illustrate a supply curve.',
    'I can explain the non-price determinants of supply.',
    'I can distinguish between a shift of a supply curve and a movement along a supply curve.',
    'I can explain the relationship between an individual producer’s supply and market supply.',
    'I can explain the assumptions behind the Law of Supply, including diminishing marginal returns and increasing marginal costs. (HL only)',
    // 2.4 A closer look at supply: Price elasticity of supply (Ch6)
    'I can define and calculate price elasticity of supply (PES).',
    'I can illustrate different values of PES using supply curves.',
    'I can explain the determinants of price elasticity of supply.',
    'I can explain likely differences in PES between primary commodities and manufactured goods. (HL only)',
    // 2.5 Market equilibrium, the price mechanism and market efficiency (Ch7)
    'I can explain the concept of equilibrium.',
    'I can explain the effect of changes in demand and supply on market equilibrium.',
    'I can explain excess demand and excess supply.',
    'I can explain the functions of the price mechanism.',
    'I can explain consumer surplus and producer surplus.',
    'I can explain social (community) surplus.',
    'I can explain the concept of allocative efficiency.',
    // 2.6 Methods of government intervention in markets (Ch8)
    'I can list possible reasons for government intervention in markets.',
    'I can define and give examples of an indirect tax.',
    'I can explain the difference between a specific tax and a percentage (ad valorem) tax.',
    'I can explain and illustrate how an indirect tax affects consumers, producers and the government.',
    'I can explain why elasticity matters in understanding the effect of a tax on demand and supply.',
    'I can explain how the elasticity of demand and supply affects the incidence of an indirect tax.',
    'I can discuss the consequences of an indirect tax for the different stakeholders in a market.',
    'I can calculate the effects on stakeholders of imposing an indirect tax. (HL only)',
    'I can define and give examples of a subsidy.',
    'I can explain and illustrate how a subsidy affects consumers, producers and the government.',
    'I can discuss the consequences of a subsidy for the different stakeholders in a market.',
    'I can illustrate and calculate the effects on stakeholders of a subsidy. (HL only)',
    'I can explain, illustrate and give examples of maximum and minimum price controls.',
    'I can calculate the effects on stakeholders of minimum and maximum prices. (HL only)',
    'I can discuss the consequences of price controls for the different stakeholders in a market.',
    // 2.7 Market failure (Ch9)
    'I can define market failure.',
    'I can explain and give examples of merit goods, demerit goods and public goods.',
    'I can distinguish between, illustrate and give examples of positive and negative externalities of production and consumption.',
    'I can explain and give examples of common pool resources.',
    'I can explain and evaluate policies available to governments to respond to externalities and to common pool resources.',
    'I can discuss the importance of international cooperation in addressing sustainability.',
    'I can explain, using examples, asymmetric information as a market failure. (HL only)',
    // 2.8 Rational producer behaviour (Ch10, HL only)
    'I can explain the concept of rational producer behaviour. (HL only)',
    'I can explain the neoclassical assumption that firms aim to maximize profit. (HL only)',
    'I can define and explain economic cost. (HL only)',
    'I can distinguish between explicit costs and implicit costs. (HL only)',
    'I can define, explain, illustrate, calculate and give examples of short-run costs. (HL only)',
    'I can define, explain, illustrate and calculate total, average and marginal revenue. (HL only)',
    'I can explain and illustrate the relationship between average revenue, marginal revenue, total revenue and price elasticity of demand. (HL only)',
    'I can define and explain how profit is measured. (HL only)',
    'I can distinguish between normal profit, abnormal (supernormal) profit and losses. (HL only)',
    'I can define, explain and illustrate profit maximization. (HL only)',
    'I can describe alternative business objectives of firms besides profit maximization. (HL only)',
    // 2.9 Market power: Perfect competition and monopolistic competition (Ch11, HL only)
    'I can define market power. (HL only)',
    'I can identify the four market forms: perfect competition, monopolistic competition, oligopoly and monopoly. (HL only)',
    'I can explain the assumptions of perfect competition. (HL only)',
    'I can distinguish between the demand curve facing the industry and the demand curve facing a firm in perfect competition. (HL only)',
    'I can explain why firms in perfect competition have no market power. (HL only)',
    'I can explain how firms maximize profit in perfect competition. (HL only)',
    'I can explain and illustrate short-run profit and loss situations in perfect competition. (HL only)',
    'I can explain and illustrate the long-run equilibrium in perfect competition. (HL only)',
    'I can explain and illustrate the movement from the short run to the long run in perfect competition. (HL only)',
    'I can explain and illustrate efficiency in the short run and the long run in perfect competition. (HL only)',
    'I can discuss whether market failure exists in perfect competition, and whether government intervention is needed. (HL only)',
    'I can define imperfect competition. (HL only)',
    'I can explain the assumptions of monopolistic competition. (HL only)',
    'I can explain the degree of market power in monopolistic competition. (HL only)',
    'I can explain how firms maximize profit in monopolistic competition. (HL only)',
    'I can explain and illustrate short-run profit and loss situations in monopolistic competition. (HL only)',
    'I can explain and illustrate the long-run equilibrium in monopolistic competition. (HL only)',
    'I can explain and illustrate the movement from the short run to the long run in monopolistic competition. (HL only)',
    'I can explain and illustrate efficiency in the short run and the long run in monopolistic competition. (HL only)',
    'I can discuss the extent of market failure in monopolistic competition, and whether government intervention is needed. (HL only)',
    // 2.10 Market power: Monopoly and oligopoly (Ch12, HL only)
    'I can define monopoly. (HL only)',
    'I can explain the assumptions of monopoly. (HL only)',
    'I can define, explain and give examples of sources of monopoly power/barriers to entry. (HL only)',
    'I can define, explain and illustrate a natural monopoly. (HL only)',
    'I can explain why market power exists in monopoly. (HL only)',
    'I can explain and illustrate the demand curve facing a monopolist. (HL only)',
    'I can explain and illustrate possible profit situations in monopoly. (HL only)',
    'I can explain and illustrate levels of efficiency in monopoly. (HL only)',
    'I can compare monopoly with perfect competition. (HL only)',
    'I can define oligopoly. (HL only)',
    'I can explain the assumptions of oligopoly. (HL only)',
    'I can distinguish between collusive and non-collusive oligopoly. (HL only)',
    'I can distinguish between formal collusion and tacit collusion. (HL only)',
    'I can explain the role of game theory in oligopoly. (HL only)',
    'I can explain and give examples of non-price competition. (HL only)',
    'I can explain why market failure can exist in oligopoly. (HL only)',
    'I can evaluate the risks that exist in output, price and consumer choice in monopolistic and oligopolistic markets. (HL only)',
    'I can evaluate different forms of government intervention in response to the abuse of significant market power in monopoly and oligopoly. (HL only)'
  ];

  window.SBL_LESSONS.IBECON2REV = {
    id: 'IBECON2REV',
    title: 'Microeconomics — Full Unit Revision',
    syllabusFocus: 'The whole of IB Economics, Unit 2: Microeconomics — demand and supply and how they interact at market equilibrium; the price mechanism, consumer and producer surplus, and allocative efficiency; elasticities of demand and supply; government intervention in markets through taxes, subsidies and price controls; market failure through externalities, public goods and common pool resources; and, at HL, the theory of the firm — costs, revenue and profit — and market structures from perfect competition through monopolistic competition and oligopoly to monopoly.',
    starterButtons: [
      { label: 'Overview of the whole unit', request: 'Give me a full overview of Unit 2: Microeconomics, covering demand and supply, market equilibrium, elasticity, government intervention and market failure.' },
      { label: 'Demand, supply and equilibrium', request: 'Explain how demand and supply interact to determine market equilibrium, and what happens when there is excess demand or excess supply.' },
      { label: 'Elasticities', request: 'Explain price elasticity of demand, income elasticity of demand, and price elasticity of supply, and why each one matters.' },
      { label: 'Taxes, subsidies and price controls', request: 'Explain how an indirect tax, a subsidy, and a maximum or minimum price each affect a market, using a diagram-based explanation.' },
      { label: 'Market failure', request: 'Explain market failure, with examples of externalities, public goods and common pool resources.' },
      { label: 'Theory of the firm (HL)', request: 'Explain the difference between economic cost, normal profit and abnormal profit, and how a firm maximizes profit.' },
      { label: 'Market structures (HL)', request: 'Compare perfect competition, monopolistic competition, oligopoly and monopoly in terms of market power and efficiency.' }
    ],
    checklist: ECON2_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Unit 2 checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this unit — for example, “Explain the difference between a movement along a demand curve and a shift of a demand curve.” Answer each one before it moves on to the next; it will briefly correct you if you get one wrong. Think it through yourself first.',
      unitTitle: ECON2_UNIT_TITLE,
      checklistItems: ECON2_CHECKLIST
    }
  };

  /* ---------------- Unit 3: Macroeconomics ---------------- */

  var ECON3_UNIT_TITLE = 'Unit 3: Macroeconomics';

  var ECON3_CHECKLIST = [
    // 3.1 The level of overall economic activity (Ch13)
    'I can list the five main macroeconomic goals.',
    'I can distinguish between the output approach, the income approach and the expenditure approach to measuring national income.',
    'I can calculate nominal GDP from national income data using the expenditure approach.',
    'I can calculate GNI from data.',
    'I can calculate real GDP and real GNI using a price deflator.',
    'I can calculate real GDP and real GNI per capita.',
    'I can evaluate the uses of national income statistics.',
    'I can evaluate whether GDP or GNI statistics are appropriate for measuring economic well-being.',
    'I can explain and illustrate the business cycle and its phases.',
    'I can illustrate short-term fluctuations and long-term growth trends within the business cycle.',
    'I can explain alternative measures of well-being.',
    'I can distinguish between a decrease in GDP and a decrease in the rate of GDP growth.',
    // 3.2 Aggregate demand (Ch14)
    'I can distinguish between demand and aggregate demand.',
    'I can define and illustrate aggregate demand.',
    'I can define and describe the components of aggregate demand.',
    'I can explain the determinants of each component of aggregate demand.',
    'I can illustrate shifts of the aggregate demand curve.',
    // 3.3 Aggregate supply (Ch15)
    'I can define aggregate supply.',
    'I can define and illustrate short-run aggregate supply.',
    'I can explain the causes of shifts in short-run aggregate supply (SRAS).',
    'I can distinguish between short-run aggregate supply and long-run aggregate supply (LRAS).',
    'I can distinguish between a Keynesian AS curve and a new classical LRAS curve.',
    'I can explain the sources of increases in AS/LRAS.',
    // 3.4 Macroeconomic equilibrium (Ch16)
    'I can identify the short-run equilibrium level of national income/output.',
    'I can illustrate equilibrium output in the short run.',
    'I can explain and illustrate the monetarist/new classical perspective on long-run macroeconomic equilibrium.',
    'I can explain and illustrate the Keynesian perspective on long-run macroeconomic equilibrium.',
    'I can explain how a gap between the equilibrium level of national income and the full-employment level of national income creates an inflationary or a deflationary gap.',
    'I can discuss the difference between Keynesian and new classical views of long-run macroeconomic equilibrium.',
    // 3.5 Demand management (demand-side policies) (Ch17)
    'I can define fiscal policy.',
    'I can explain the nature of a government budget.',
    'I can explain the goals of fiscal policy.',
    'I can explain how expansionary and contractionary fiscal policy work.',
    'I can discuss the effectiveness of fiscal policy.',
    'I can discuss the potential costs of a high level of government debt.',
    'I can explain and calculate the Keynesian multiplier.',
    'I can define monetary policy.',
    'I can explain the goals of monetary policy.',
    'I can explain how expansionary and contractionary monetary policy work.',
    'I can discuss the effectiveness of monetary policy.',
    'I can explain the process of money creation by commercial banks. (HL only)',
    'I can explain the tools of monetary policy. (HL only)',
    'I can explain how the equilibrium nominal interest rate is determined. (HL only)',
    'I can explain and calculate the difference between the nominal interest rate and the real interest rate.',
    // 3.6 Supply-side policies (Ch18)
    'I can define supply-side policies.',
    'I can explain the goals of supply-side policies.',
    'I can explain different market-based supply-side policies.',
    'I can discuss the effectiveness and limitations of market-based supply-side policies.',
    'I can explain different interventionist supply-side policies.',
    'I can discuss the effectiveness and limitations of interventionist supply-side policies.',
    'I can explain how supply-side policies and demand-side policies can be connected.',
    // 3.7 Macroeconomic objectives: Low unemployment (Ch19)
    'I can explain what is meant by unemployment.',
    'I can define and calculate the unemployment rate.',
    'I can explain the difficulties involved in measuring unemployment.',
    'I can discuss the costs of unemployment.',
    'I can explain and illustrate the labour market.',
    'I can distinguish between the different causes of unemployment.',
    'I can explain the natural rate of unemployment.',
    'I can evaluate measures that may be taken to reduce unemployment.',
    'I can explain the concept of "crowding out". (HL only)',
    // 3.8 Macroeconomic objectives: Low and stable rate of inflation (Ch20)
    'I can explain the concepts of inflation, disinflation and deflation.',
    'I can explain the costs of inflation.',
    'I can explain how inflation is measured.',
    'I can explain the problems involved in measuring inflation.',
    'I can explain and illustrate the causes of inflation.',
    'I can evaluate measures that may be taken to reduce inflation.',
    'I can distinguish between "good" deflation and "bad" deflation.',
    'I can explain the costs of deflation.',
    'I can calculate a weighted price index. (HL only)',
    'I can explain and illustrate the short-run Phillips curve. (HL only)',
    'I can explain and illustrate the long-run Phillips curve. (HL only)',
    'I can explain the concept of the natural rate of unemployment in relation to the Phillips curve. (HL only)',
    'I can evaluate the extent of any trade-off between inflation and unemployment. (HL only)',
    // 3.9 Macroeconomic objectives: Economic growth (Ch21)
    'I can define economic growth.',
    'I can use a PPC to explain how a movement from inside the curve to a point on the curve illustrates economic growth.',
    'I can explain the role of aggregate demand in creating (actual) economic growth.',
    'I can use a PPC to explain how an outward shift of the curve illustrates economic growth.',
    'I can use an LRAS diagram to explain how an outward shift of the LRAS curve illustrates growth.',
    'I can calculate the rate of economic growth from a set of data.',
    'I can evaluate the possible consequences of economic growth.',
    // 3.10 Economics of inequality and poverty (Ch22)
    'I can distinguish between equity and equality.',
    'I can explain the meaning of inequality.',
    'I can explain how income inequality may be measured.',
    'I can illustrate how the Lorenz curve shows inequality.',
    'I can explain the relationship between the Lorenz curve and the Gini index.',
    'I can construct a Lorenz curve from data.',
    'I can explain the meaning of poverty.',
    'I can explain how poverty is measured.',
    'I can explain the Multidimensional Poverty Index.',
    'I can describe some of the causes of inequality and poverty.',
    'I can discuss the impact of inequality on economic growth, living standards and social stability.',
    'I can discuss the role of taxation in reducing poverty and income/wealth inequality.',
    'I can evaluate policies available to a government to reduce poverty and income/wealth inequality.'
  ];

  window.SBL_LESSONS.IBECON3REV = {
    id: 'IBECON3REV',
    title: 'Macroeconomics — Full Unit Revision',
    syllabusFocus: 'The whole of IB Economics, Unit 3: Macroeconomics — measuring the level of overall economic activity and the business cycle; aggregate demand and aggregate supply and how they determine macroeconomic equilibrium; demand-side (fiscal and monetary) and supply-side policy; the macroeconomic objectives of low unemployment, low and stable inflation and economic growth; and the economics of inequality and poverty.',
    starterButtons: [
      { label: 'Overview of the whole unit', request: 'Give me a full overview of Unit 3: Macroeconomics, covering national income measurement, aggregate demand and supply, macroeconomic policy, and the macroeconomic objectives.' },
      { label: 'Measuring national income', request: 'Explain the difference between GDP and GNI, and between nominal and real values, with a simple example.' },
      { label: 'Aggregate demand and supply', request: 'Explain what aggregate demand and aggregate supply are, and how they determine short-run macroeconomic equilibrium.' },
      { label: 'Fiscal and monetary policy', request: 'Explain the difference between fiscal policy and monetary policy, and give an example of an expansionary version of each.' },
      { label: 'Unemployment and inflation', request: 'Explain the main causes of unemployment and the main causes of inflation, and one policy that could address each.' },
      { label: 'Economic growth', request: 'Explain the difference between actual growth and potential growth, and how each can be shown on a PPC or an AD/AS diagram.' },
      { label: 'Inequality and poverty', request: 'Explain what a Lorenz curve and a Gini index show about income inequality.' }
    ],
    checklist: ECON3_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Unit 3 checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this unit — for example, “Explain the difference between fiscal policy and monetary policy.” Answer each one before it moves on to the next; it will briefly correct you if you get one wrong. Think it through yourself first.',
      unitTitle: ECON3_UNIT_TITLE,
      checklistItems: ECON3_CHECKLIST
    }
  };

  /* ---------------- Unit 4: The global economy ---------------- */

  var ECON4_UNIT_TITLE = 'Unit 4: The Global Economy';

  var ECON4_CHECKLIST = [
    // 4.1 Why do countries trade? (Ch23)
    'I can define international trade.',
    'I can identify and explain the gains from trade.',
    'I can define, explain, illustrate and give examples of absolute advantage.',
    'I can define, explain, illustrate and give examples of comparative advantage.',
    'I can calculate opportunity costs to identify comparative advantage.',
    'I can use linear PPCs to show the potential gains from specialization and trade based on comparative advantage.',
    'I can discuss the limitations of comparative advantage theory.',
    // 4.2 Free trade and protectionism (Ch24)
    'I can define free trade.',
    'I can explain, give examples of and evaluate arguments for protectionism.',
    'I can explain, give examples of and evaluate arguments against protectionism.',
    'I can explain and illustrate how free trade allows a country to export and import.',
    'I can define, explain, illustrate and give examples of different types of trade protection.',
    'I can evaluate the effects of different types of trade protection.',
    'I can discuss the merits of free trade versus protectionism.',
    'I can calculate, from a diagram, the effects on different stakeholders of a tariff, a quota, or a subsidy on domestic production. (HL only)',
    // 4.3 Economic integration (Ch25)
    'I can distinguish between bilateral and multilateral trade agreements.',
    'I can define, explain and give examples of different types of trading blocs.',
    'I can discuss the advantages and disadvantages of a monetary union for its members.',
    'I can explain trade creation and trade diversion. (HL only)',
    'I can discuss the advantages and disadvantages of membership of a trading bloc.',
    'I can describe the objectives and functions of the World Trade Organization (WTO).',
    'I can discuss factors affecting the effectiveness of the WTO.',
    // 4.4 Exchange rates (Ch26)
    'I can define, explain and give examples of an exchange rate.',
    'I can define, explain, illustrate and give examples of a fixed exchange rate system.',
    'I can distinguish between a devaluation and a revaluation of a currency.',
    'I can define, explain, illustrate and give examples of a floating exchange rate system.',
    'I can distinguish between depreciation and appreciation of a currency.',
    'I can calculate exchange rates and changes in exchange rates.',
    'I can describe factors that change the demand for, and supply of, a currency.',
    'I can define, explain, illustrate and give examples of a managed exchange rate system.',
    'I can evaluate the advantages and disadvantages of high and low exchange rates.',
    'I can explain government measures used to intervene in the foreign exchange market.',
    'I can compare and contrast a fixed exchange rate system with a floating exchange rate system.',
    // 4.5 The balance of payments (Ch27)
    'I can define and explain the balance of payments account.',
    'I can define and explain the current account.',
    'I can define and explain the elements that make up the current account.',
    'I can define and explain the capital account.',
    'I can define and explain the elements that make up the capital account.',
    'I can explain that the current account balance is equal in size, and opposite in sign, to the combined capital and financial account balances.',
    'I can calculate elements of the balance of payments from a set of data.',
    'I can explain how a current account imbalance may affect a country’s exchange rate. (HL only)',
    'I can discuss the implications of, and methods to correct, a persistent current account imbalance. (HL only)',
    'I can define, explain and give examples of expenditure-switching policies. (HL only)',
    'I can define, explain and give examples of expenditure-reducing policies. (HL only)',
    'I can define and explain the Marshall-Lerner condition. (HL only)',
    'I can define, explain and illustrate the J-curve effect. (HL only)',
    'I can discuss the implications of a persistent current account surplus. (HL only)',
    // 4.6 Economic development and sustainable development (Ch28)
    'I can distinguish between economic growth and economic development.',
    'I can explain the relationship between economic growth and economic development.',
    'I can define sustainable development.',
    'I can outline the current status of the UN Sustainable Development Goals.',
    'I can explain the relationship between sustainability and poverty.',
    'I can explain and give examples of common characteristics of developing countries.',
    'I can explain and give examples of the diversity that exists between developing countries.',
    // 4.7 Measuring economic progress (Ch29)
    'I can explain the multidimensional nature of economic development.',
    'I can compare and contrast GDP per capita and GNI per capita figures for different countries.',
    'I can compare and contrast GDP and GNI per capita figures at purchasing power parity (PPP) for different countries.',
    'I can compare and contrast health and education indicators for different countries.',
    'I can explain and give examples of economic/social, energy and environmental inequality indicators.',
    'I can explain and give examples of composite indicators, including the Human Development Index, the Gender Inequality Index, the Inequality-adjusted HDI and the Happy Planet Index.',
    'I can discuss the strengths and limitations of different approaches to measuring economic development.',
    'I can discuss the possible relationship between economic growth and economic development.',
    // 4.8 Barriers to development (Ch30)
    'I can define, explain, give examples of and illustrate poverty cycles (poverty traps).',
    'I can explain and give examples of economic barriers to economic growth and development.',
    'I can explain and give examples of political and social barriers to economic growth and development.',
    'I can discuss the significance of different barriers to economic development.',
    // 4.9 Strategies to promote economic growth and economic development (Ch31)
    'I can explain and evaluate trade strategies, including import substitution, export promotion and economic integration, as strategies for growth and development.',
    'I can explain and evaluate diversification as a strategy for growth and development.',
    'I can explain and evaluate market-based supply-side policies as a strategy for growth and development.',
    'I can explain and evaluate foreign direct investment (FDI) as a strategy for growth and development.',
    'I can explain and evaluate social enterprise as a strategy for growth and development.',
    'I can explain and evaluate redistribution policies as a strategy for growth and development.',
    'I can explain and evaluate the role of merit goods (health and education) in growth and development.',
    'I can explain and evaluate institutional change as a strategy for growth and development.',
    'I can explain and evaluate foreign aid, including official development assistance, NGOs and multilateral development assistance, as a strategy for growth and development.',
    'I can explain and evaluate debt relief as a strategy for growth and development.'
  ];

  window.SBL_LESSONS.IBECON4REV = {
    id: 'IBECON4REV',
    title: 'The Global Economy — Full Unit Revision',
    syllabusFocus: 'The whole of IB Economics, Unit 4: The Global Economy — why countries trade and the theory of comparative advantage; free trade versus protectionism and economic integration; exchange rates and the balance of payments; economic development, sustainable development and how economic progress is measured; and the barriers to, and strategies for, economic growth and economic development.',
    starterButtons: [
      { label: 'Overview of the whole unit', request: 'Give me a full overview of Unit 4: The Global Economy, covering trade theory, protectionism, exchange rates, the balance of payments, and economic development.' },
      { label: 'Comparative advantage', request: 'Explain the difference between absolute advantage and comparative advantage, with a simple worked example.' },
      { label: 'Trade protection', request: 'Explain how a tariff and a quota each affect a domestic market, and who gains and who loses.' },
      { label: 'Exchange rates', request: 'Explain the difference between a fixed exchange rate system and a floating exchange rate system, and between depreciation and devaluation.' },
      { label: 'Balance of payments', request: 'Explain what the current account of the balance of payments records, and give an example of a credit and a debit item.' },
      { label: 'Measuring development', request: 'Explain why GDP per capita alone is not a good measure of economic development, and what the Human Development Index adds.' },
      { label: 'Barriers and strategies', request: 'Explain what a poverty cycle is, and describe one strategy a country could use to break out of it.' }
    ],
    checklist: ECON4_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Unit 4 checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this unit — for example, “Explain the difference between absolute advantage and comparative advantage.” Answer each one before it moves on to the next; it will briefly correct you if you get one wrong. Think it through yourself first.',
      unitTitle: ECON4_UNIT_TITLE,
      checklistItems: ECON4_CHECKLIST
    }
  };

})();
