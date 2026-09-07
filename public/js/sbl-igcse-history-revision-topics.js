/* ============================================================
   SBL IGCSE Revision — History Topic Revision Guides

   Mirrors sbl-igcse-business-revision-topics.js, but for Edexcel
   IGCSE History depth studies. Adds one synthetic "lesson" entry to
   window.SBL_LESSONS per topic, so the existing Revise Me Bot /
   Test My Knowledge / Challenge Mode modal machinery in
   sbl-teach-bot.js can be reused as-is.

   Test My Knowledge is now wired up for three topics — Russia and the
   Soviet Union, Superpower Relations, and The USA 1954-75: A Divided
   Union — each with a `._questionBank` array written from the actual
   class textbook chapters for that topic (originally worded, not
   textbook text). Japan in Transformation has no question bank yet,
   so it still shows "Test My Knowledge" as a locked, coming-soon mode
   on its page. Add a `._questionBank` array here (same shape as the
   other topics) once source material for Japan is confirmed, then
   wire its button up to sblStartIgcseTopicQuiz.

   Every checklist item below is copied verbatim from SBL's own
   "I can..." revision-checklist documents (her original teaching
   material) — not sourced from, or checked against, any textbook.

   Load order on an IGCSE History revision topic page:
     <script src="/js/sbl-igcse-history-revision-topics.js"></script>
     <script src="/js/sbl-teach-bot.js"></script>
   ============================================================ */
(function () {

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function resampleTopicQuiz(revisionLessonId, count) {
    var lesson = window.SBL_LESSONS && window.SBL_LESSONS[revisionLessonId];
    if (!lesson || !lesson._questionBank) return;
    var n = Math.min(count || 20, lesson._questionBank.length);
    lesson.quiz = shuffle(lesson._questionBank).slice(0, n);
  }

  window.sblStartIgcseTopicQuiz = window.sblStartIgcseTopicQuiz || function (revisionLessonId, count) {
    resampleTopicQuiz(revisionLessonId, count);
    window.openTestMyKnowledge(revisionLessonId);
  };

  window.sblOpenIgcseTopicTeachBot = window.sblOpenIgcseTopicTeachBot || function (revisionLessonId, count) {
    resampleTopicQuiz(revisionLessonId, count);
    window.openTeachBot(revisionLessonId);
  };

  window.SBL_LESSONS = window.SBL_LESSONS || {};

  /* ---------------- Topic: Russia and the Soviet Union, 1905-1924 ---------------- */

  var RUS_UNIT_TITLE = 'Russia and the Soviet Union, 1905-1924';

  var RUS_CHECKLIST = [
    'I can describe Tsarist rule in Russia in 1905.',
    'I can explain the reasons for discontent in 1905.',
    'I can describe the Potemkin Mutiny.',
    'I can explain the setting up of Soviets.',
    'I can describe the 1905 Revolution.',
    'I can explain the October Manifesto.',
    "I can explain why Nicholas survived the 1905 Revolution.",
    "I can explain Nicholas's attitude to the first four dumas.",
    'I can explain the growth of opposition groups.',
    "I can explain Stolypin's policy of repression.",
    "I can explain Stolypin's land reform.",
    'I can describe the Lena Goldfield strike.',
    'I can explain the economic effects of the First World War on Russia.',
    'I can explain the social effects of the First World War on Russia.',
    'I can explain the political effects of the First World War on Russia.',
    'I can explain the influence of Rasputin.',
    'I can explain the immediate causes of the February Revolution, especially events in Petrograd.',
    'I can describe the army mutiny.',
    'I can explain the abdication of the Tsar.',
    'I can describe the setting up of the Provisional Government.',
    'I can explain the weaknesses and mistakes of the Provisional Government.',
    'I can explain the impact of the Petrograd Soviet.',
    'I can describe the activities of Lenin and the Bolsheviks.',
    'I can explain the April Theses.',
    'I can describe the July Days.',
    'I can explain the nature and impact of the Kornilov Revolt.',
    'I can describe the key events of the Bolshevik takeover.',
    'I can explain reasons for Bolshevik success.',
    "I can explain Lenin's role in Bolshevik success.",
    "I can explain Trotsky's role in Bolshevik success.",
    'I can explain the significance of the 1917 Decrees in consolidating Bolshevik power.',
    'I can explain the closure of the Constituent Assembly.',
    'I can explain the Treaty of Brest-Litovsk and its role in consolidation.',
    'I can describe the two sides in the Civil War.',
    'I can describe key events of the Civil War.',
    'I can explain the reasons for Bolshevik victory.',
    'I can explain the reasons for War Communism.',
    'I can describe the nature of War Communism.',
    'I can explain the effects of War Communism.',
    'I can describe the Kronstadt Naval Mutiny.',
    'I can explain the reasons for the New Economic Policy.',
    'I can describe the nature of the New Economic Policy.',
    'I can explain the effects of the New Economic Policy.',
    'I can explain opposition to the NEP.',
    "I can assess Lenin's achievements to 1924."
  ];

    var RUS_QUESTION_BANK = [
  // ===== Tsarist rule and 1905 Revolution =====
  { q: 'What term best describes Nicholas II\'s style of rule over Russia in 1905?', options: ['An autocracy, with no legal limits on his power', 'A constitutional monarchy limited by parliament', 'A republic governed by elected ministers', 'A military dictatorship run by generals'], correct: 0, explain: 'Nicholas II ruled as an autocrat: there was no constitution, no elected government and no legal body that could restrain his decisions before 1905.', misconception: 'Russia had no equivalent of a government answerable to an elected parliament in 1905 — that only began to change, and only partially, after the October Manifesto later that year.', tag: 'Tsarist rule and 1905 Revolution' },
  { q: 'Which of these was the main economic grievance driving peasant unrest before 1905?', options: ['A shortage of land to support a growing rural population', 'High taxes on imported manufactured goods', 'The abolition of the peasant commune', 'Compulsory conscription into factory work'], correct: 0, explain: 'With the rural population growing quickly, most peasants had too little land to live on and too little money to buy more, which fuelled anger at landlords and the government.', misconception: 'The commune was not broken up until Stolypin\'s reforms after 1906, and conscription applied to the army rather than factory labour — neither was the driving grievance before 1905.', tag: 'Tsarist rule and 1905 Revolution' },
  { q: 'What new development in Russian political life followed the 1905 Revolution?', options: ['Legal political parties were allowed to form for the first time, ranging from conservative to revolutionary', 'All political parties, including the Bolsheviks, were granted seats in government automatically', 'The tsar banned all political activity even more strictly than before 1905', 'Russia adopted a two-party system similar to Britain\'s'], correct: 0, explain: 'After 1905, groups that had previously been illegal, such as the liberal Kadets, the more conservative Octobrists, and various socialist parties, were able to organise openly and contest duma elections.', misconception: 'Legalisation did not mean automatic power — parties still had to campaign and win seats, and the government worked hard, especially after 1907, to limit the influence of parties that did not support it.', tag: 'Tsarist rule and 1905 Revolution' },
  { q: 'Which two events are usually identified as the immediate triggers of the 1905 Revolution?', options: ['Defeat in the Russo-Japanese War and the Bloody Sunday massacre', 'The assassination of Alexander II and the Lena Goldfields shootings', 'The Potemkin mutiny and the closure of the First Duma', 'The October Manifesto and Stolypin\'s land reform'], correct: 0, explain: 'Humiliating military defeat by Japan in 1904-05 discredited the government, and the shooting of peaceful petitioners on Bloody Sunday in January 1905 turned widespread discontent into open revolution.', misconception: 'The Potemkin mutiny and the October Manifesto were consequences of the crisis Bloody Sunday and the war had already triggered, not its original causes; Alexander II\'s assassination happened decades earlier, in 1881.', tag: 'Tsarist rule and 1905 Revolution' },
  { q: 'What triggered the mutiny aboard the battleship Potemkin in June 1905?', options: ['A dispute over meat the crew were ordered to eat that they believed was rotten', 'An order to fire on striking workers in Odessa', 'News that the tsar had dissolved the First Duma', 'A mutiny by soldiers earlier that week in St Petersburg'], correct: 0, explain: 'The mutiny began after sailors refused to eat meat they considered infested with maggots, and an officer\'s threat to shoot dissenters escalated into a violent uprising against the ship\'s officers.', misconception: 'The First Duma was not opened until 1906, after the Potemkin mutiny, and the crew were never ordered to fire on Odessa\'s citizens — the unrest there developed only after the mutineers arrived in port.', tag: 'Tsarist rule and 1905 Revolution' },
  { q: 'What was the St Petersburg Soviet of 1905, and why did it later matter to Russian history?', options: ['A council of workers\' delegates that organised strikes; its model was revived in 1917', 'A committee of army officers formed to suppress the general strike', 'An elected regional government set up under the October Manifesto', 'A secret revolutionary cell that planned the Potemkin mutiny'], correct: 0, explain: 'The soviet was a workers\' council formed to help coordinate a general strike in autumn 1905; although shut down within months, the idea of a soviet re-emerged as a major force in the revolutions of 1917.', misconception: 'The October Manifesto created the State Duma, not the soviets, and the soviet was a body of workers\' representatives rather than army officers or a cell behind the separate Potemkin mutiny.', tag: 'Tsarist rule and 1905 Revolution' },
  { q: 'Which right did the October Manifesto of 1905 grant to the Russian people?', options: ['Freedom of speech and the right to form political parties and trade unions', 'Immediate ownership of all landlords\' estates', 'The abolition of the office of tsar', 'The right of soldiers to elect their own officers'], correct: 0, explain: 'Facing a general strike and mutinies, Nicholas II\'s manifesto promised civil liberties such as freedom of speech and religion, and agreed to an elected duma whose consent would be needed for new laws.', misconception: 'The manifesto reformed how Russia was governed but kept the tsar in place and said nothing about land redistribution — that remained a separate demand pursued by peasants and left-wing parties.', tag: 'Tsarist rule and 1905 Revolution' },
  { q: 'Which of the following was NOT a reason why Nicholas II survived the 1905 Revolution?', options: ['The Socialist Revolutionary Party won a majority in the new State Duma', 'The October Manifesto satisfied the moderate middle classes', 'Most of the army and navy stayed loyal to the tsar', 'Opposition to the regime was divided and largely leaderless'], correct: 0, explain: 'No such Duma majority existed in 1905 — the First Duma was not even elected until 1906. Nicholas survived mainly because the October Manifesto split off liberal support, opposition was fragmented and spontaneous, and the armed forces mostly stayed obedient.', misconception: 'It is tempting to credit an election result, but 1905 saw no completed parliamentary contest — the crisis was resolved through concessions and force, not the ballot box.', tag: 'Tsarist rule and 1905 Revolution' },
  { q: 'Under the Fundamental Laws of April 1906, which power did the tsar keep for himself?', options: ['The right to dissolve the Duma and veto any law it passed', 'The right to appoint half of the Duma\'s members directly', 'The sole right to declare war without ministerial advice', 'The right to abolish the Duma completely without holding new elections'], correct: 0, explain: 'The Fundamental Laws let the Duma make laws, but Nicholas retained the power to dissolve it, veto its legislation, control the armed forces and foreign policy, and rule by decree when it was not sitting.', misconception: 'The tsar could dissolve a sitting Duma, but the law still required him to call fresh elections for a replacement — he could not simply abolish the institution, and Duma members were elected, not appointed by him.', tag: 'Tsarist rule and 1905 Revolution' },
  { q: 'What was Stolypin\'s aim in encouraging peasants to leave the traditional village commune and farm their own enclosed land?', options: ['To create a class of prosperous small farmers loyal to the government', 'To force peasants into state-run collective farms', 'To hand all farmland permanently to the aristocracy', 'To stop peasant migration to Siberia'], correct: 0, explain: 'Stolypin\'s "wager on the strong" bet that peasants who owned and profited from their own farms would become conservative supporters of the tsarist system rather than revolutionaries seeking to seize landlords\' estates.', misconception: 'The reform was the opposite of collectivisation — it broke up communal control of strips of land in favour of individual ownership, and it actively encouraged, rather than ended, migration to Siberia to ease land pressure.', tag: 'Tsarist rule and 1905 Revolution' },
  { q: 'What methods did Stolypin use to suppress unrest after the 1905 Revolution?', options: ['Special military courts that could convict and execute suspects with no right of appeal', 'Granting an amnesty to all political prisoners', 'Abolishing the death penalty in favour of long prison sentences', 'Handing control of law and order entirely to the Duma'], correct: 0, explain: 'Stolypin gave the army sweeping powers to try suspected troublemakers in field courts-martial that denied defendants a lawyer or appeal, leading to over a thousand executions and mass exile to Siberia between 1906 and 1907.', misconception: 'Far from offering leniency, Stolypin\'s repression became notorious for its harshness — the hangman\'s noose used on his orders became known darkly as "Stolypin\'s necktie".', tag: 'Tsarist rule and 1905 Revolution' },
  { q: 'What made the 1912 Lena Goldfields shootings so damaging to the tsarist government\'s reputation?', options: ['They showed that little had changed since Bloody Sunday despite years of promised reform', 'They led directly to the assassination of Stolypin', 'They caused the Third Duma to be dissolved immediately', 'They forced Nicholas II to issue a second October Manifesto'], correct: 0, explain: 'Troops firing on strikers protesting appalling conditions at a Siberian goldfield killed and wounded hundreds, provoking a huge wave of new strikes and reminding Russians that repression, not reform, still defined tsarist rule.', misconception: 'Stolypin had already been assassinated the previous year, in 1911, so the Lena shootings could not have caused it, and no new manifesto followed the massacre — the government\'s response was an official inquiry, not further concessions.', tag: 'Tsarist rule and 1905 Revolution' },

  // ===== Impact of WWI and February Revolution =====
  { q: 'How did the financial cost of the First World War compare with Russia\'s earlier war against Japan?', options: ['Russia spent around fifteen times more fighting Germany and Austria-Hungary than it had against Japan', 'The two wars cost Russia roughly the same amount', 'The Russo-Japanese War was far more expensive because of the loss of the fleet', 'Britain paid for most of Russia\'s war costs after 1914'], correct: 0, explain: 'The scale of the First World War dwarfed the earlier conflict: Russia\'s spending between 1914 and 1917 vastly exceeded what it had spent fighting Japan in 1904-05, straining state finances severely.', misconception: 'Although the Russo-Japanese War was costly and humiliating, it was a much shorter, smaller-scale conflict than the multi-year struggle against Germany and Austria-Hungary.', tag: 'Impact of WWI and February Revolution' },
  { q: 'Which of these was a direct social effect of the First World War inside Russia?', options: ['Rural areas had roughly twice as many women as men by 1916 because of conscription', 'Peasant communes were officially abolished by decree', 'Trade unions were legalised for the first time', 'The number of industrial strikes fell to zero'], correct: 0, explain: 'With so many men of working age drafted into the army, the countryside became dominated by women, children and the elderly, disrupting farming and family life.', misconception: 'Communes were not abolished by any wartime decree, and strikes did not disappear — war-related hardship actually helped fuel renewed industrial unrest from 1915 onward.', tag: 'Impact of WWI and February Revolution' },
  { q: 'What was one major consequence of Russia\'s railway network being redirected to prioritise the war effort?', options: ['Food often failed to reach cities and rotted in wagons instead', 'Peasants gained faster access to imported machinery', 'Grain exports to Britain and France increased sharply', 'Urban factories received more raw materials than before the war'], correct: 0, explain: 'Because the railways focused on moving troops and military supplies, food bound for cities was frequently left stranded and spoiled rather than reaching hungry urban populations.', misconception: 'Wartime blockades and the loss of western territory actually cut off many of Russia\'s usual trade routes, so exports to its allies did not increase, and factories struggled rather than benefited from the disrupted transport system.', tag: 'Impact of WWI and February Revolution' },
  { q: 'How did the Fourth Duma respond to Russia\'s mounting military failures after 1915?', options: ['Many deputies formed the Progressive Bloc to demand a government the Duma could trust', 'It voted to abolish the monarchy immediately', 'It supported Rasputin\'s growing influence over ministerial appointments', 'It called for Russia to leave the war unilaterally'], correct: 0, explain: 'Frustrated by repeated defeats and unable to persuade the tsar to accept a government responsible to the Duma, around half its deputies united in the Progressive Bloc, becoming a focus of political opposition to the regime.', misconception: 'The Duma did not call for abolishing the monarchy or leaving the war outright at this stage — its demand was for reformed, more competent government, and it was fiercely critical of Rasputin rather than supportive of him.', tag: 'Impact of WWI and February Revolution' },
  { q: 'Why was Nicholas II\'s decision in 1915 to take personal command of the army politically risky?', options: ['He would be directly blamed for any future military defeats', 'It was against Russian law for the tsar to lead troops', 'It required him to give up his throne temporarily', 'It meant the Duma would automatically govern in his absence'], correct: 0, explain: 'Ministers and Duma leaders warned Nicholas that becoming commander-in-chief, despite lacking military experience, would tie his personal reputation to the war\'s outcome just as Russian forces kept losing ground.', misconception: 'There was no legal requirement for him to abdicate or hand power to the Duma while away — instead he left his wife, Alexandra, in charge in Petrograd, which caused its own problems.', tag: 'Impact of WWI and February Revolution' },
  { q: 'What was one major reason Alexandra became so unpopular as regent while Nicholas was at the front?', options: ['Her German background made her seem disloyal to many Russians during a war against Germany', 'She permanently dissolved the Duma', 'She refused to appoint any government ministers', 'She publicly supported the Bolsheviks'], correct: 0, explain: 'As a German-born princess ruling in Nicholas\'s absence, Alexandra faced deep suspicion and hostility from a Russian public fighting a war against Germany, especially as she frequently reshuffled ministers.', misconception: 'Alexandra did not dissolve the Duma outright, nor did she refuse to appoint ministers — if anything, her frequent, erratic changes of minister, often on Rasputin\'s advice, were part of the problem.', tag: 'Impact of WWI and February Revolution' },
  { q: 'How did Rasputin come to gain such influence over the tsarina, Alexandra?', options: ['He appeared to ease the suffering of her haemophiliac son, Alexei', 'He was appointed by Nicholas as a government minister', 'He led a faction of the Bolshevik Party close to the royal family', 'He commanded troops loyal to the tsar during the war'], correct: 0, explain: 'Alexandra turned to Rasputin, a self-proclaimed healer, out of desperation over her son\'s haemophilia; when his presence seemed to help, her gratitude grew into deep dependence on his advice.', misconception: 'Rasputin held no formal government or military post — his power came entirely from his personal hold over the royal family, not from any official role.', tag: 'Impact of WWI and February Revolution' },
  { q: 'What immediate event is usually seen as sparking the mass demonstrations that began the February Revolution?', options: ['Protests on International Women\'s Day merging with strikes over bread shortages', 'The assassination of Rasputin', 'News of the Treaty of Brest-Litovsk', 'The dissolution of the Fourth Duma'], correct: 0, explain: 'On 23 February 1917 (Old Style), women marching to mark International Women\'s Day joined striking workers protesting food shortages, and the combined crowds swelled over the following days into a citywide uprising.', misconception: 'Rasputin had already been killed in December 1916, before the revolution began, and Brest-Litovsk was a later consequence of Bolshevik rule in 1918, not a cause of events in February 1917.', tag: 'Impact of WWI and February Revolution' },
  { q: 'What made the army mutiny of late February 1917 so decisive for the fate of the tsar?', options: ['Soldiers sent to suppress the protests instead joined them, leaving the government with no force to restore order', 'The mutineers seized the Winter Palace and arrested the tsar', 'Officers voted to hand command of the army to the Duma', 'The mutiny was limited to a single regiment and quickly put down'], correct: 0, explain: 'When soldiers ordered to fire on demonstrators refused and began joining the crowds instead, the government lost the one instrument, armed force, that had kept it in power through earlier crises.', misconception: 'The Winter Palace was seized much later, during the October Revolution, not during the February army mutiny, and the mutiny spread through many regiments rather than staying confined to one.', tag: 'Impact of WWI and February Revolution' },
  { q: 'Why did Nicholas II abdicate in favour of his brother rather than his son, Alexei?', options: ['He judged that his haemophiliac son was too ill to bear the burden of ruling', 'The Duma refused to accept Alexei as tsar under any circumstances', 'Alexei had already died by March 1917', 'Foreign governments insisted on Michael as the new tsar'], correct: 0, explain: 'Concerned about young Alexei\'s haemophilia and the strain that ruling would place on him, Nicholas chose to abdicate in favour of his brother, Grand Duke Michael, instead.', misconception: 'Alexei was still alive in March 1917, he and the rest of the family were executed the following year, and it was Nicholas\'s own decision about his son\'s health, not a Duma veto or foreign pressure, that shaped the choice.', tag: 'Impact of WWI and February Revolution' },
  { q: 'Why did Grand Duke Michael decline to become tsar after Nicholas\'s abdication?', options: ['Revolutionary leaders warned that his accession could provoke civil war, and he had little appetite for the throne', 'He had already been arrested by the Petrograd Soviet', 'The German government refused to recognise him', 'He preferred to lead the new Provisional Government himself'], correct: 0, explain: 'Told that accepting the crown risked plunging Russia into civil conflict, and never eager to rule in the first place, Michael refused the throne, ending three centuries of Romanov rule.', misconception: 'Michael was not arrested — he made his own decision to step aside — and it was Prince Lvov, not Michael, who became the first head of the Provisional Government.', tag: 'Impact of WWI and February Revolution' },
  { q: 'Which two bodies emerged to fill the power vacuum left by the tsar\'s abdication in March 1917?', options: ['The Provisional Government, formed from Duma members, and the re-formed Petrograd Soviet', 'The Bolshevik Party and the Council of People\'s Commissars', 'The Constituent Assembly and the Red Guards', 'The Cheka and the Military Revolutionary Committee'], correct: 0, explain: 'A committee of Duma politicians formed the Provisional Government to run the country until elections, while workers\' and soldiers\' representatives revived the Petrograd Soviet, creating two rival centres of authority.', misconception: 'The Council of People\'s Commissars, the Cheka and the Military Revolutionary Committee were all Bolshevik creations from later in 1917 — none of them existed at the moment of the tsar\'s abdication.', tag: 'Impact of WWI and February Revolution' },
  { q: 'Put these events of early 1917 into the correct chronological order: International Women\'s Day protests, the tsar\'s abdication, the army mutiny in Petrograd.', options: ['Women\'s Day protests, army mutiny, abdication', 'Army mutiny, Women\'s Day protests, abdication', 'Abdication, Women\'s Day protests, army mutiny', 'Women\'s Day protests, abdication, army mutiny'], correct: 0, explain: 'The crisis unfolded in stages: mass protests began on International Women\'s Day (23 February), soldiers mutinied and joined the demonstrators a few days later, and Nicholas abdicated on 2 March once he had lost military support.', misconception: 'It is tempting to assume the abdication came before the army turned against the tsar, but it was precisely the loss of military loyalty that made the abdication unavoidable — the mutiny came first.', tag: 'Impact of WWI and February Revolution' },

  // ===== Provisional Government and Bolshevik Revolution =====
  { q: 'What was "Dual Control" in Russia after February 1917?', options: ['A situation where the Provisional Government and the Petrograd Soviet both held real power', 'An agreement to share the throne between Nicholas\'s brother and cousin', 'Joint rule by the Bolsheviks and Mensheviks inside a single party', 'A system in which Britain and France jointly directed Russia\'s war effort'], correct: 0, explain: 'Historians describe the period after February 1917 as "Dual Control" because the Provisional Government technically ran the state while the Petrograd Soviet held real influence over the army, railways and postal service.', misconception: 'The overlap in power was between two Russian institutions with different bases of support, not between rival royal claimants or between Russia\'s wartime allies.', tag: 'Provisional Government and Bolshevik Revolution' },
  { q: 'How did the Petrograd Soviet\'s "Order Number 1" undermine the Provisional Government?', options: ['It made military orders subject to the soviet\'s approval, not just the government\'s', 'It banned the Provisional Government from holding elections', 'It transferred all land to the peasants immediately', 'It placed the Petrograd police under Provisional Government control'], correct: 0, explain: 'By declaring that soldiers should only obey Provisional Government orders that did not conflict with the soviet\'s own instructions, Order Number 1 meant the government could not rely on the army without the soviet\'s consent.', misconception: 'The decree concerned military command and discipline, not land distribution or elections — those remained separate issues the Provisional Government continued to struggle with.', tag: 'Provisional Government and Bolshevik Revolution' },
  { q: 'Which decision by the Provisional Government proved to be one of its most costly mistakes?', options: ['Continuing Russia\'s participation in the First World War', 'Legalising political parties and free speech', 'Freeing political prisoners held under the tsar', 'Agreeing to share power with the Petrograd Soviet'], correct: 0, explain: 'Determined to keep faith with its allies and hoping to secure their financial support, the Provisional Government kept fighting the war even though most ordinary Russians desperately wanted peace, which badly damaged its popularity.', misconception: 'Freeing prisoners and allowing free speech were popular liberal reforms rather than mistakes; sharing power with the soviet was more a structural weakness than a deliberate blunder in the way continuing the war was.', tag: 'Provisional Government and Bolshevik Revolution' },
  { q: 'What was the outcome of the June Offensive of 1917?', options: ['It collapsed disastrously, further damaging army morale and government support', 'It succeeded in pushing German forces out of Ukraine', 'It was cancelled before it began due to Bolshevik opposition', 'It led to a ceasefire being signed with Austria-Hungary'], correct: 0, explain: 'Kerensky\'s attempt to revive army morale and boost support for the Provisional Government through a major attack on Austrian and German positions ended in a rapid Russian retreat and mass desertions.', misconception: 'The offensive went ahead and failed badly rather than being called off in advance, and it produced no ceasefire — fighting on the Eastern Front continued until the Bolsheviks negotiated peace the following year.', tag: 'Provisional Government and Bolshevik Revolution' },
  { q: 'In his April Theses, what did Lenin argue the Bolsheviks should do?', options: ['Withdraw all cooperation with the Provisional Government and campaign for power to pass to the soviets', 'Work loyally with the Mensheviks inside the Provisional Government', 'Wait until Russia had fully industrialised before attempting revolution', 'Support the June Offensive to weaken Germany'], correct: 0, explain: 'Lenin broke with those Bolsheviks willing to cooperate with the Provisional Government, calling instead for an end to the war, land for the peasants, and "all power to the soviets".', misconception: 'This marked a sharp change from the earlier view, shared by many Bolsheviks and Mensheviks, that Russia needed a long capitalist stage before socialism was possible — Lenin rejected that patient, gradualist approach.', tag: 'Provisional Government and Bolshevik Revolution' },
  { q: 'What triggered the July Days uprising of 1917?', options: ['Anger over continuing food shortages and the failure of the June Offensive', 'The arrest of Lenin on his return to Russia', 'The tsar\'s family being moved to Siberia', 'News of the Treaty of Brest-Litovsk'], correct: 0, explain: 'Frustration at persistent shortages and the disastrous June Offensive, stirred up by Bolshevik propaganda, drove soldiers and workers onto the streets in an unplanned uprising against the Provisional Government.', misconception: 'Lenin was not arrested when he returned to Russia in April — he moved and spoke freely until the July Days, after which he had to flee rather than being taken into custody.', tag: 'Provisional Government and Bolshevik Revolution' },
  { q: 'Why did Kerensky ask General Kornilov to bring troops toward Petrograd in August 1917?', options: ['He wanted a reliable force ready to restore order if unrest broke out', 'He wanted Kornilov to arrest members of the Provisional Government', 'He hoped Kornilov\'s troops would support elections to the Constituent Assembly', 'He needed reinforcements to defend against a German invasion of the capital'], correct: 0, explain: 'Kerensky appointed Kornilov commander-in-chief and initially cooperated with him, hoping disciplined troops near the capital would help control unrest and strengthen his own authority.', misconception: 'Kornilov\'s troops were meant to support Kerensky\'s government, not attack it or hasten elections — the relationship only turned into a crisis when Kornilov tried to act independently against the soviets.', tag: 'Provisional Government and Bolshevik Revolution' },
  { q: 'How did the Kornilov Revolt end up benefiting the Bolsheviks?', options: ['Kerensky armed Bolshevik supporters to help defend Petrograd, boosting their influence and weapons', 'Kornilov personally handed power to Lenin after his defeat', 'The revolt forced new elections in which the Bolsheviks won a majority', 'It persuaded the Petrograd Soviet to dissolve itself in the Bolsheviks\' favour'], correct: 0, explain: 'Desperate to stop Kornilov, Kerensky allowed the Bolsheviks to arm the Red Guards, who helped block Kornilov\'s advance; the Bolsheviks then presented themselves as saviours of the revolution, gaining members and soviet seats rapidly.', misconception: 'Kornilov was arrested, not victorious, and no election followed the revolt — Bolshevik gains came from their role in defeating Kornilov, not from any vote.', tag: 'Provisional Government and Bolshevik Revolution' },
  { q: 'What role did the Military Revolutionary Committee (MRC) play in the Bolshevik takeover of October 1917?', options: ['It coordinated soldiers loyal to the Petrograd Soviet and helped seize key locations in the city', 'It organised the Constituent Assembly elections', 'It negotiated the Treaty of Brest-Litovsk with Germany', 'It ran the Red Terror against opponents of the Bolsheviks'], correct: 0, explain: 'Set up by the Petrograd Soviet and effectively directed by Trotsky, the MRC rallied garrison soldiers and organised the takeover of bridges, communications and government buildings in October 1917.', misconception: 'Brest-Litovsk was negotiated months later in early 1918, and the Cheka, not the MRC, later carried out the Red Terror — the MRC\'s role was specifically the October takeover itself.', tag: 'Provisional Government and Bolshevik Revolution' },
  { q: 'Which of these best explains why the Bolshevik seizure of power in Petrograd met so little resistance?', options: ['Support for the Provisional Government had collapsed and it had almost no armed forces left to defend it', 'The Petrograd Soviet had banned the Bolsheviks from taking part', 'Kerensky had already resigned and left the country', 'Foreign troops guarding the city refused to fight'], correct: 0, explain: 'By October 1917 the Provisional Government\'s authority had crumbled so far, through military failure, economic crisis and the Kornilov affair, that it could muster almost no loyal troops to resist the Bolshevik-led Red Guards and soldiers.', misconception: 'Kerensky remained in the country and tried, unsuccessfully, to rally troops against the Bolsheviks after fleeing Petrograd — he had not resigned or left Russia at that point.', tag: 'Provisional Government and Bolshevik Revolution' },
  { q: 'Which of these was NOT one of the main reasons historians give for Bolshevik success in 1917?', options: ['Overwhelming popular support shown in the Constituent Assembly elections', 'Lenin\'s decisive leadership and clear political message', 'Trotsky\'s skilful organisation of the takeover', 'The Provisional Government\'s continuing failures and mistakes'], correct: 0, explain: 'The Constituent Assembly elections, held soon after the takeover, actually gave the Socialist Revolutionaries far more votes than the Bolsheviks — the party\'s success in October came from Lenin\'s leadership, Trotsky\'s organisation and the government\'s weaknesses, not a decisive election win.', misconception: 'It might seem logical that a revolution reflected majority support, but the Bolsheviks seized power through organisation and the collapse of their rivals rather than by winning a popular vote, which they did not win.', tag: 'Provisional Government and Bolshevik Revolution' },
  { q: 'What was Trotsky\'s most important practical contribution to the Bolshevik takeover of October 1917?', options: ['He used his position as Petrograd Soviet chairman to direct the Military Revolutionary Committee\'s seizure of key sites', 'He wrote the April Theses that redirected Bolshevik strategy', 'He negotiated the release of Bolshevik prisoners after the July Days', 'He commanded the Red Guards in Moscow throughout the Civil War'], correct: 0, explain: 'As president of the Petrograd Soviet, Trotsky was able to use the MRC to organise the disciplined, low-key operation that took control of the city with minimal fighting, making the takeover look like action by the soviets rather than a Bolshevik coup alone.', misconception: 'The April Theses were Lenin\'s work, not Trotsky\'s, and Trotsky\'s central Civil War role came slightly later, as commissar for war overseeing the whole Red Army rather than commanding only in Moscow.', tag: 'Provisional Government and Bolshevik Revolution' },
  { q: 'How did Bolshevik support change between April and October 1917?', options: ['It grew from a small minority to the largest party in the Petrograd Soviet', 'It fell sharply after Lenin returned from exile', 'It stayed exactly the same throughout the year', 'It became the largest party in the Constituent Assembly elections'], correct: 0, explain: 'Bolshevik membership and influence expanded rapidly over 1917, helped by their newspapers, the April Theses and the Kornilov Revolt, until they controlled a majority in the Petrograd Soviet by September.', misconception: 'The party\'s rise did not translate into a Constituent Assembly majority — those elections, held in November, were still won by the Socialist Revolutionaries even as Bolshevik strength in the soviets grew.', tag: 'Provisional Government and Bolshevik Revolution' },
  { q: 'What was Lenin\'s most distinctive personal contribution to the Bolsheviks\' rise to power in 1917?', options: ['He persuaded the party to abandon cooperation with the Provisional Government and prepare to seize power by force', 'He commanded the Red Guards during the storming of the Winter Palace', 'He negotiated foreign loans that funded the Bolshevik takeover', 'He wrote Russia\'s new constitution before the takeover'], correct: 0, explain: 'Lenin\'s insistence, against the doubts of many senior Bolsheviks, that the party should reject cooperation with other parties and prepare an armed seizure of power was decisive in setting the Bolsheviks\' direction in 1917.', misconception: 'It was Trotsky, not Lenin, who directed the practical military operation in Petrograd through the Military Revolutionary Committee — Lenin\'s contribution was chiefly strategic and political rather than commanding troops in the field.', tag: 'Provisional Government and Bolshevik Revolution' },

  // ===== Consolidation of power and Civil War =====
  { q: 'What was the main purpose of the Bolsheviks\' Decree on Land, issued in November 1917?', options: ['It abolished private ownership of land and handed it to those who worked it', 'It nationalised all Russian banks', 'It restored land to the Orthodox Church', 'It compensated landlords for land already seized by peasants'], correct: 0, explain: 'The decree ended private landownership and gave land to the peasants who farmed it, in practice legalising the seizures of landlord estates that peasants had already been carrying out.', misconception: 'Far from restoring Church land, a further decree in December went on to nationalise Church property too, and there was no compensation offered to the landlords who lost their estates.', tag: 'Consolidation of power and Civil War' },
  { q: 'Why was Lenin\'s original Decree on Peace unrealistic as a way to end the war?', options: ['It assumed workers\' revolutions abroad would soon force other warring governments to agree to fair peace terms', 'It demanded that Germany surrender unconditionally within a week', 'It required Britain and France to withdraw from the war immediately', 'It promised Russia would keep all of its wartime territorial gains'], correct: 0, explain: 'Lenin\'s call for an immediate, fair peace rested on his belief that revolutions would soon break out across Europe, forcing enemy governments to negotiate reasonably — a revolution that did not happen, leaving Russia to face Germany alone on harsh terms.', misconception: 'The decree set no ultimatum or timetable for Germany, and it called for peace without annexations or compensation, not a demand that Russia keep territory gained during the war.', tag: 'Consolidation of power and Civil War' },
  { q: 'What was the immediate reason Lenin gave for closing down the Constituent Assembly in January 1918?', options: ['It refused to endorse Bolshevik decrees and the principle of soviet power', 'It had failed to hold any elections at all', 'Its members were mostly former tsarist officials', 'It voted to restore the monarchy'], correct: 0, explain: 'When the newly elected assembly, dominated by the Socialist Revolutionaries, rejected a Bolshevik proposal handing all power to the soviets, Lenin used this as grounds to dissolve it by force the next day.', misconception: 'Elections had in fact taken place in November 1917 — the problem for the Bolsheviks was that they lost them, not that no vote was held — and the assembly\'s delegates were mainly socialists, not tsarist officials.', tag: 'Consolidation of power and Civil War' },
  { q: 'Why is the closure of the Constituent Assembly considered a major turning point in Bolshevik rule?', options: ['It showed the Bolsheviks would not accept an elected body that opposed them, ending hopes of multi-party democracy', 'It marked the moment Russia officially left the First World War', 'It triggered the assassination of Nicholas II', 'It caused the Bolshevik Party itself to split into two rival parties'], correct: 0, explain: 'By dissolving the one democratically elected national assembly Russia ever had after losing the vote there, the Bolsheviks signalled that they intended to hold power regardless of election results, paving the way toward one-party rule.', misconception: 'Russia\'s exit from the war was formalised separately through the Treaty of Brest-Litovsk two months later, and the tsar\'s execution in July 1918 was a distinct event connected to the Civil War, not the assembly\'s closure.', tag: 'Consolidation of power and Civil War' },
  { q: 'What price did Russia pay for peace under the Treaty of Brest-Litovsk, signed in March 1918?', options: ['It lost around a quarter of its population and much of its most productive industrial and farming land', 'It had to hand its entire navy over to Germany', 'It agreed to rejoin the war within six months', 'It had to adopt the German system of government'], correct: 0, explain: 'The harsh terms stripped Russia of Ukraine, the Baltic provinces, Finland and parts of Poland, costing it roughly a quarter of its population and most of its coal, iron and industrial capacity.', misconception: 'The treaty took Russia out of the war for good rather than requiring it to rejoin later, and its terms concerned territory and reparations, not surrendering the navy or changing Russia\'s system of government.', tag: 'Consolidation of power and Civil War' },
  { q: 'Why did signing the Treaty of Brest-Litovsk help provoke the Russian Civil War?', options: ['Many Russians, including some Bolsheviks, saw it as a humiliating betrayal of the country', 'It immediately handed control of the Red Army to foreign officers', 'It banned all political parties except the Mensheviks', 'It restored the tsar to a ceremonial role'], correct: 0, explain: 'The scale of Russia\'s territorial and economic losses under the treaty outraged conservatives, army officers and even some Bolsheviks, pushing many former supporters of the revolution to take up arms against Lenin\'s government.', misconception: 'The treaty said nothing about the composition of the Red Army\'s officer corps or about political parties inside Russia — those developments came from separate Bolshevik decisions, not the treaty\'s terms.', tag: 'Consolidation of power and Civil War' },
  { q: 'Which two sides gave their names to the main opposing forces of the Russian Civil War?', options: ['The Reds (Bolsheviks) and the Whites (anti-Bolshevik forces)', 'The Reds (tsarists) and the Greens (Bolsheviks)', 'The Whites (Bolsheviks) and the Blacks (monarchists)', 'The Reds (Provisional Government) and the Whites (Constituent Assembly supporters)'], correct: 0, explain: 'The Bolsheviks and their Red Army were known as the Reds, while the varied coalition of monarchists, liberals and Socialist Revolutionaries fighting them were collectively called the Whites.', misconception: 'The Provisional Government had already fallen before the Civil War began in earnest, and "Green" referred to independent peasant forces defending their own regions, a distinct third group rather than a Bolshevik faction.', tag: 'Consolidation of power and Civil War' },
  { q: 'Why was the White side in the Civil War so difficult to unite under a single command?', options: ['Its supporters — monarchists, liberals and Socialist Revolutionaries — wanted very different outcomes for Russia\'s future', 'All White generals refused to accept any foreign assistance', 'The Whites lacked any experienced military leaders', 'The Whites controlled Russia\'s industrial heartland and had no need to cooperate'], correct: 0, explain: 'The Whites brought together groups with conflicting goals, from restoring the tsar to reviving the Constituent Assembly, which made coordinated strategy and a single leadership very difficult to achieve.', misconception: 'The Whites actually had highly experienced ex-tsarist generals and did accept substantial foreign support from Britain and other powers — their key weakness was political disunity and a base on Russia\'s outer regions, not a lack of military talent or resources.', tag: 'Consolidation of power and Civil War' },
  { q: 'What was one key advantage Trotsky gave the Red Army during the Civil War?', options: ['He imposed strict discipline and recruited experienced ex-tsarist officers supervised by political commissars', 'He negotiated foreign countries into abandoning the Whites entirely', 'He persuaded all Green forces to join the Bolsheviks permanently', 'He replaced conscription with an all-volunteer force'], correct: 0, explain: 'Trotsky built an effective fighting force by combining conscription with the technical experience of former tsarist officers, whose loyalty was enforced through supervising political commissars and harsh discipline.', misconception: 'Green forces such as Nestor Makhno\'s remained independent and sometimes fought both sides rather than becoming permanent Bolshevik allies, and the Red Army relied heavily on compulsory conscription rather than volunteers alone.', tag: 'Consolidation of power and Civil War' },
  { q: 'Which event is generally seen as the final decisive battle of the Russian Civil War?', options: ['The Battle of Perekop, which defeated General Wrangel\'s White army in late 1920', 'The Battle of Tannenberg in 1914', 'The Kronstadt Naval Mutiny of 1921', 'The Battle of Tsushima in 1905'], correct: 0, explain: 'The Red Army\'s victory over Wrangel\'s forces at Perekop in November 1920 effectively ended organised White resistance, securing overall Bolshevik victory in the Civil War.', misconception: 'Tannenberg and Tsushima were First World War and Russo-Japanese War battles from years earlier, and the Kronstadt Mutiny in 1921 was a rebellion against the Bolsheviks after their Civil War victory, not part of the war against the Whites.', tag: 'Consolidation of power and Civil War' },
  { q: 'Which of these was NOT a reason for the Bolshevik victory in the Civil War?', options: ['Superior weapons and equipment supplied by foreign allies', 'Trotsky\'s effective organisation and discipline of the Red Army', 'Control of Russia\'s central industrial and rail network', 'The Whites\' lack of unity and popular support among peasants'], correct: 0, explain: 'It was the Whites, not the Reds, who received the bulk of foreign military aid, from countries such as Britain; the Bolsheviks won despite being poorly equipped, relying instead on organisation, central position and their opponents\' divisions.', misconception: 'It is easy to assume the winning side had better resources from outside, but Bolshevik success came from effective leadership and geography rather than superior foreign-supplied equipment, which in fact went to their enemies.', tag: 'Consolidation of power and Civil War' },
  { q: 'Why did the Bolsheviks execute the former tsar and his family in July 1918?', options: ['They feared the family could be rescued by nearby White and Czech Legion forces and used to rally support for the monarchy', 'The Constituent Assembly ordered their execution', 'The family had been convicted of spying for Germany in a public trial', 'Lenin wanted to fulfil a demand made in the October Manifesto'], correct: 0, explain: 'With White and Czech Legion troops closing in on Yekaterinburg, where the family was held, the Bolsheviks shot them rather than risk their rescue and use as a rallying symbol for anti-Bolshevik forces.', misconception: 'The Constituent Assembly had already been dissolved months earlier and played no role in this decision, and there was no public trial — the family was killed secretly, without any legal process at all.', tag: 'Consolidation of power and Civil War' },
  { q: 'What role did the Czech Legion play in escalating the Russian Civil War in 1918?', options: ['Its refusal to disarm led it to seize parts of the Trans-Siberian Railway and side with anti-Bolshevik forces', 'It fought as an elite unit within the Red Army throughout the war', 'It negotiated the Treaty of Brest-Litovsk on Russia\'s behalf', 'It provided the Bolsheviks with their first tanks and aircraft'], correct: 0, explain: 'When Trotsky ordered the Czech Legion, former prisoners of war being moved across Russia, to surrender their weapons, they refused, took control of long stretches of the Trans-Siberian Railway, and effectively joined the anti-Bolshevik side, adding a serious new threat to the Reds.', misconception: 'The Legion fought against, not for, the Bolsheviks after this incident, and the peace treaty with Germany was negotiated by Trotsky as Bolshevik foreign commissar, with no Czech involvement at all.', tag: 'Consolidation of power and Civil War' },

  // ===== War Communism and the NEP =====
  { q: 'What was the main aim of introducing War Communism in 1918?', options: ['To put the state in full control of the economy so the Red Army could be supplied during the Civil War', 'To return Russia\'s economy fully to free-market capitalism', 'To give workers\' soviets complete control of individual factories permanently', 'To hand all industry over to foreign investors'], correct: 0, explain: 'With civil war raging, the Bolsheviks centralised control of industry and food supply so the Red Army and city workers could be kept fed and equipped, even at great cost to peasants and ordinary workers.', misconception: 'War Communism moved Russia further from capitalism, not toward it, and it actually took decision-making power away from individual workers\' soviets in favour of centralised state planning.', tag: 'War Communism and the NEP' },
  { q: 'Which of the following was a key feature of War Communism?', options: ['Grain requisitioning, which took most of the peasants\' surplus crops for the state', 'Peasants being allowed to sell surplus grain freely at market prices', 'Private ownership being extended to all factories, regardless of size', 'The complete abolition of food rationing in the cities'], correct: 0, explain: 'Under War Communism, the state seized grain from peasants beyond what they needed to survive, in order to feed soldiers and city workers, rather than letting peasants trade it for profit.', misconception: 'Free grain sales and private factory ownership were only reintroduced later under the New Economic Policy, and rationing was actually introduced in the cities under War Communism, not abolished by it.', tag: 'War Communism and the NEP' },
  { q: 'What was one major effect of War Communism on Russian agriculture?', options: ['Farm production collapsed as peasants lost the incentive to grow more than they needed', 'Grain harvests reached record highs due to state investment', 'Peasant communes were strengthened and expanded', 'Food shortages in the countryside disappeared entirely'], correct: 0, explain: 'With surplus crops liable to be requisitioned, peasants had little reason to produce more than they needed for themselves, and some even killed livestock rather than have it seized, causing farm output to fall sharply.', misconception: 'Rather than easing hunger, War Communism\'s grain seizures made food shortages worse in many rural areas, sometimes to the point of famine, even though its purpose was to feed the cities and army.', tag: 'War Communism and the NEP' },
  { q: 'How did the Bolsheviks justify using violence against peasants who resisted grain requisitioning?', options: ['By labelling wealthier resisting peasants as "kulaks" who were counter-revolutionary enemies', 'By declaring that all peasants were secretly supporters of the Whites', 'By claiming requisitioning was a temporary measure that would end within weeks', 'By arguing peasants had voted for requisitioning in the Constituent Assembly'], correct: 0, explain: 'Blaming unrest on so-called "kulaks" allowed the Bolsheviks to present violent requisitioning as a class struggle against rich exploiters, rather than as an attack on the peasantry as a whole.', misconception: 'The Constituent Assembly, dominated by the Socialist Revolutionaries and closed down by the Bolsheviks in January 1918, never endorsed requisitioning — it was imposed by Bolshevik decree, not by any vote of peasants\' representatives.', tag: 'War Communism and the NEP' },
  { q: 'What made the Kronstadt sailors\' mutiny of March 1921 so alarming to the Bolshevik leadership?', options: ['The sailors had previously been some of the most loyal supporters of the Bolshevik revolution', 'It was led by former tsarist naval officers seeking to restore the monarchy', 'It coincided with a German invasion of Petrograd', 'It was the first uprising to take place anywhere in Russia since 1917'], correct: 0, explain: 'Kronstadt\'s sailors had fought for the Bolsheviks in 1917 and been called "the reddest of the red" by Trotsky, so their rebellion against Bolshevik policies was a shocking sign that even core supporters had turned against the government.', misconception: 'The mutiny was driven by ordinary sailors demanding an end to War Communism and greater freedoms, not by monarchist officers, and it came after several years of other uprisings, including peasant revolts such as those in the Tambov region.', tag: 'War Communism and the NEP' },
  { q: 'What did the Kronstadt sailors demand in their 1921 uprising?', options: ['Free elections to the soviets, freedom of speech, and an end to grain requisitioning', 'The return of Nicholas II\'s family to the throne', 'Immediate war against Poland', 'The permanent closure of all factories'], correct: 0, explain: 'The sailors called for genuinely free soviet elections, civil liberties for socialists and anarchists, the release of political prisoners, and an end to the harsh economic controls of War Communism.', misconception: 'Their demands sought reform within a soviet system, not a return to monarchy or new foreign wars — they wanted the Bolsheviks to live up to the revolutionary promises made in 1917, not abandon socialism altogether.', tag: 'War Communism and the NEP' },
  { q: 'How did the Bolshevik government respond to the Kronstadt Mutiny?', options: ['Trotsky sent Red Army troops to storm the base across the frozen sea, crushing the revolt', 'Lenin agreed to all of the sailors\' demands immediately', 'The government negotiated a peaceful surrender with no punishments', 'The mutiny was ignored until it collapsed on its own'], correct: 0, explain: 'Despite the political embarrassment of attacking former loyal supporters, the Bolsheviks used a large military assault across the ice to retake Kronstadt by force, followed by executions of captured sailors.', misconception: 'The Bolsheviks used harsh military force rather than accepting the sailors\' political demands outright, though the mutiny did push Lenin to make economic concessions shortly afterwards through the New Economic Policy.', tag: 'War Communism and the NEP' },
  { q: 'What was the connection between the Kronstadt Mutiny and the introduction of the New Economic Policy?', options: ['The mutiny convinced Lenin that War Communism was destroying popular trust in the Bolsheviks and had to be abandoned', 'The mutiny forced Lenin to resign as leader of the Communist Party', 'The NEP was designed specifically to reward the Kronstadt sailors', 'The mutiny delayed the introduction of the NEP by several years'], correct: 0, explain: 'Lenin later described the mutiny as a warning flash exposing the depth of popular anger, and he used the 10th Party Congress, held soon afterwards in March 1921, to push through the NEP as an urgent change of course.', misconception: 'Lenin remained leader of the party until his illness in 1922, and the NEP followed the mutiny within weeks rather than years — the crisis accelerated reform, it did not reward the rebels, who were suppressed by force.', tag: 'War Communism and the NEP' },
  { q: 'Which change did the New Economic Policy introduce compared with War Communism?', options: ['Peasants could sell surplus produce for profit after paying a tax in kind', 'All industry, however small, was placed under state ownership', 'Money was abolished in favour of a system of labour tokens', 'Grain requisitioning was expanded to cover livestock as well as crops'], correct: 0, explain: 'The NEP replaced requisitioning with a fixed tax, after which peasants could sell any surplus grain on the open market for a profit, restoring an incentive to produce more.', misconception: 'It was under War Communism, not the NEP, that money was sidelined and small-scale trade suppressed — the NEP moved in the opposite direction, allowing small businesses and private trade to operate again.', tag: 'War Communism and the NEP' },
  { q: 'Under the New Economic Policy, what could Russians who ran small businesses of fewer than 20 workers legally do?', options: ['Own and operate their business privately for profit', 'Only sell their goods directly to the state at fixed prices', 'Employ workers without paying any wages', 'Export their goods freely without government permission'], correct: 0, explain: 'The NEP allowed small-scale private enterprise to return, letting people known as "Nepmen" run shops and small workshops for their own profit rather than through state control.', misconception: 'Exports and foreign trade remained tightly controlled by the state even under the NEP — the reform\'s private-enterprise element was mainly about small domestic trade and production, not unrestricted foreign trade.', tag: 'War Communism and the NEP' },
  { q: 'What was the "scissors crisis" of 1923?', options: ['A widening gap between falling agricultural prices and rising industrial prices', 'A political split between Lenin and Trotsky over the NEP', 'A shortage of scissors and other basic manufactured tools', 'A dispute between Britain and the Soviet Union over trade terms'], correct: 0, explain: 'Trotsky used the term to describe how, on a graph, rapidly falling food prices and slower-falling or rising industrial prices spread apart like the blades of a pair of scissors, discouraging peasants from selling grain.', misconception: 'This was an economic pricing problem between agriculture and industry, not a personal or political rift between Bolshevik leaders, although it was Trotsky, a leading Bolshevik, who coined the memorable name for it.', tag: 'War Communism and the NEP' },
  { q: 'Why did some Bolsheviks strongly oppose the New Economic Policy?', options: ['They felt it betrayed communist principles by allowing capitalism and inequality to return', 'They believed it did not go far enough in reducing state control of industry', 'They thought it gave peasants too little freedom compared with War Communism', 'They wanted the state to take over all small trade immediately'], correct: 0, explain: 'Critics within the party saw the reappearance of private trade, profit-making "Nepmen" and a wealthier layer of peasants as a retreat from socialism that recreated the class divisions the revolution was meant to destroy.', misconception: 'The complaint was that the NEP allowed too much market freedom and inequality to return, not too little — peasants in fact gained considerably more freedom over their produce under the NEP than under War Communism.', tag: 'War Communism and the NEP' },
  { q: 'How should Lenin\'s achievements by the time of his death in 1924 be assessed?', options: ['He secured Bolshevik one-party rule and steered the state through revolution, civil war and economic crisis, though at a huge human cost', 'He successfully established a fully democratic multi-party socialist state', 'He achieved lasting peace and prosperity for Russia with no continuing hardship', 'He restored the tsarist system in a modernised form'], correct: 0, explain: 'By 1924 Lenin had led the Bolsheviks to power, won the Civil War, and navigated the shift from War Communism to the NEP, cementing single-party Bolshevik rule — but this was achieved through immense repression, economic collapse and millions of deaths.', misconception: 'Rather than expanding democracy, Lenin\'s government banned rival parties and dissolved the elected Constituent Assembly, and the human and economic cost of achieving Bolshevik control remained very high, not a story of straightforward prosperity.', tag: 'War Communism and the NEP' }
];

  window.SBL_LESSONS.IGHISTRUSREV = {
    id: 'IGHISTRUSREV',
    title: 'Russia and the Soviet Union, 1905-1924 — Full Topic Revision',
    syllabusFocus: 'The whole of Russia and the Soviet Union, 1905-1924 — Tsarist rule and the 1905 Revolution, the impact of the First World War and the February Revolution, the Provisional Government and the Bolshevik Revolution, the consolidation of power and the Civil War, and War Communism and the New Economic Policy.',
    starterButtons: [
      { label: 'Overview of the whole topic', request: 'Give me a full overview of Russia and the Soviet Union, 1905-1924, covering Tsarist rule, the 1917 revolutions, the Bolshevik consolidation of power, the Civil War, and War Communism and the NEP.' },
      { label: 'Tsarist rule, 1905-14', request: "Explain Tsarist rule in Russia from 1905 to 1914, including the causes of the 1905 Revolution and Stolypin's policies." },
      { label: '1914-17 and the February Revolution', request: 'Explain the impact of the First World War on Russia and the immediate causes of the February Revolution.' },
      { label: 'The Bolshevik Revolution', request: 'Explain the weaknesses of the Provisional Government and how the Bolsheviks came to power in 1917.' },
      { label: 'Consolidation and the Civil War', request: 'Explain how the Bolsheviks consolidated power after 1917 and the reasons for their victory in the Civil War.' },
      { label: 'War Communism and the NEP', request: "Compare War Communism and the New Economic Policy, and assess Lenin's achievements by 1924." },
      { label: 'Help me plan an answer', request: "Help me plan an answer assessing the reasons for the Bolsheviks' rise to power in 1917." }
    ],
    checklist: RUS_CHECKLIST,
    _questionBank: RUS_QUESTION_BANK,
    quiz: RUS_QUESTION_BANK.slice(0, 20),
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Russia and the Soviet Union checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this topic — for example, "Explain the significance of the 1917 Decrees." Answer each one before it moves on to the next; it will briefly correct you if you get one wrong.',
      unitTitle: RUS_UNIT_TITLE,
      checklistItems: RUS_CHECKLIST
    }
  };

  /* ---------------- Topic: The USA, 1954-75 (Divided Union) ---------------- */

  var DIV_UNIT_TITLE = 'The USA, 1954-75: A Divided Union';

  var DIV_CHECKLIST = [
    'I can explain reasons for the Red Scare, including the Cold War of 1945-50.',
    'I can explain the significance of the Hiss and Rosenberg cases.',
    'I can explain the roles of the FBI and HUAC.',
    'I can explain the significance of the Hollywood Ten.',
    'I can describe the methods used by McCarthy.',
    'I can explain the growth of opposition to McCarthy.',
    "I can explain the reasons for McCarthy's downfall.",
    'I can assess the overall impact of McCarthyism on the USA.',
    'I can describe segregation and discrimination.',
    'I can explain the influence of the Supreme Court and Congress.',
    'I can explain the importance of Brown v Board of Education of Topeka (1954).',
    'I can explain the importance of the death of Emmett Till (1955).',
    'I can describe the key events of the Montgomery Bus Boycott (1955-56).',
    'I can explain the significance of the Montgomery Bus Boycott.',
    'I can describe the events and significance of Little Rock (1957).',
    'I can explain the significance of the Civil Rights Act of 1957.',
    'I can explain the revival of the Ku Klux Klan (KKK).',
    'I can describe the Freedom Riders and the Anniston fire bombing.',
    'I can explain the role of sit-ins in civil rights protest.',
    'I can explain the campaign for voting rights.',
    'I can explain the Meredith Case.',
    'I can describe the methods and activities of Martin Luther King.',
    'I can explain the Birmingham Campaign.',
    'I can explain the Washington March and the "Dream" speech.',
    'I can explain the Mississippi Freedom Summer.',
    'I can assess the impact of protest on civil rights legislation in the 1960s.',
    'I can explain Selma and its significance for voting rights.',
    'I can explain the Nation of Islam and the work of Malcolm X.',
    'I can explain reasons for the growth of Black Power.',
    'I can assess the impact of Black Power, including the 1968 Olympics.',
    'I can explain the influence of Stokely Carmichael.',
    'I can assess the impact of race riots, especially in the Watts District.',
    'I can explain the Black Panther movement.',
    'I can explain the roles of Bobby Seale and Huey Newton.',
    'I can explain reasons for the growth of protest movements.',
    'I can explain the student movement and its links to the Vietnam War and anti-war protest.',
    'I can describe the Berkeley Free Speech movement.',
    'I can explain Students for a Democratic Society and "hippies".',
    'I can explain the roles of Betty Friedan and Eleanor Roosevelt.',
    'I can explain the role of NOW.',
    "I can explain the women's liberation movement and abortion.",
    "I can explain Phyllis Schlafly and opposition to the women's movement.",
    'I can explain the reasons for the Watergate Scandal.',
    'I can describe the key features of the Watergate Scandal.',
    'I can assess the impact of Watergate on Nixon and US politics.',
    'I can explain the War Powers Act (1973).',
    'I can explain the Election Campaign Act (1974).',
    'I can explain the Privacy Act (1974).',
    'I can explain the Congressional Budget Control Act (1974).',
    'I can explain Gerald Ford and the presidential pardon.'
  ];

    var DIV_QUESTION_BANK = [
  // ===================== THE RED SCARE AND MCCARTHYISM =====================
  {
    q: 'What best explains why fear of communism intensified so sharply in the USA after 1945, compared with the smaller Red Scare of 1919-20?',
    options: [
      'The Soviet Union emerged as a rival superpower and Cold War tensions grew as communist governments took hold across Eastern Europe',
      'The Communist Party of America won a majority of seats in Congress for the first time',
      'The Soviet Union formally declared war on the USA in 1947',
      'Congress voted to make communism the official ideology of several US states'
    ],
    correct: 0,
    explain: 'Growing distrust between the USA and USSR after the war, plus the spread of Soviet-backed governments in Eastern Europe, deepened American anxiety far beyond the scale of the earlier 1919-20 scare.',
    misconception: 'The Communist Party of America never won federal seats; the deeper 1940s-50s fear was about the international spread of communism and Soviet power, not domestic election results.',
    tag: 'The Red Scare and McCarthyism'
  },
  {
    q: 'Which development most directly led President Truman to announce the Truman Doctrine in March 1947?',
    options: [
      'Concern that communist pressure in Greece could succeed if poorer countries were not given support to resist it',
      'The Soviet Union successfully testing its own atomic bomb',
      'The outbreak of the Korean War',
      'The trial of the Hollywood Ten'
    ],
    correct: 0,
    explain: 'The Truman Doctrine promised US support to countries resisting takeover, a policy shaped partly by fears that communism could spread in Greece and other struggling states.',
    misconception: 'The Soviet atomic test (1949) and the Korean War (1950) both came later and increased tensions further, but neither triggered the 1947 doctrine itself.',
    tag: 'The Red Scare and McCarthyism'
  },
  {
    q: 'Why was the case against Alger Hiss so significant for the growth of the Red Scare?',
    options: [
      'It convinced many Americans that communist spies had reached the very highest levels of the US government',
      'It led directly to the founding of HUAC in 1938',
      'It ended in Hiss being convicted specifically of espionage',
      'It resulted in Hiss being executed for treason'
    ],
    correct: 0,
    explain: 'Hiss had been a senior State Department adviser, so his prosecution seemed to prove to many Americans that spies had penetrated the government at the highest level.',
    misconception: 'Hiss was actually convicted of perjury for lying about his contacts, not of espionage itself, and he was never executed - he served a prison sentence.',
    tag: 'The Red Scare and McCarthyism'
  },
  {
    q: 'What made the case of Ethel and Julius Rosenberg so damaging to public confidence during the Red Scare?',
    options: [
      'Their conviction for passing atomic secrets reinforced the belief that Soviet nuclear progress relied on spies operating inside America',
      'They were the first Americans ever jailed for contempt of Congress',
      'Their trial was the direct cause of Joseph McCarthy\'s political downfall',
      'They publicly confessed to being Soviet agents in court'
    ],
    correct: 0,
    explain: 'Executed in 1953, the Rosenbergs\' case fed the widespread belief that a spy network had helped the Soviets develop atomic weapons far sooner than expected.',
    misconception: 'Unlike some cooperating witnesses in related cases, the Rosenbergs denied all charges throughout their trial and never confessed.',
    tag: 'The Red Scare and McCarthyism'
  },
  {
    q: 'What was the main role played by the FBI, under J. Edgar Hoover, in fuelling the Red Scare?',
    options: [
      'It compiled files on suspected communists and secretly passed intelligence to HUAC to support its hearings and prosecutions',
      'It formally ran the Hollywood blacklist as an official government policy',
      'It designed and administered the Marshall Plan',
      'It acted as a military court that tried and sentenced the Rosenbergs'
    ],
    correct: 0,
    explain: 'Hoover\'s FBI built extensive files on suspected communists, pushed for loyalty investigations, and fed evidence to HUAC to support its public hearings.',
    misconception: 'The Hollywood blacklist was an informal practice organised within the film industry itself, not an official FBI programme, even though FBI-supplied evidence contributed to individual suspicions.',
    tag: 'The Red Scare and McCarthyism'
  },
  {
    q: 'What was the House Un-American Activities Committee (HUAC) primarily established to do?',
    options: [
      'Investigate individuals and organisations suspected of disloyal or extremist activity, later focusing heavily on communist influence',
      'Approve presidential nominations to the Supreme Court',
      'Act as a criminal court that tried and sentenced convicted spies',
      'Oversee the running of congressional elections'
    ],
    correct: 0,
    explain: 'Set up in 1938 to investigate groups suspected of "Un-American" activity, HUAC increasingly focused from 1947 on exposing suspected communists through public hearings.',
    misconception: 'HUAC could call witnesses and refer cases for prosecution, but it was a congressional committee, not a court that could itself convict or sentence anyone.',
    tag: 'The Red Scare and McCarthyism'
  },
  {
    q: 'Why is the case of the "Hollywood Ten" seen as significant in the history of the Red Scare?',
    options: [
      'Their refusal to answer HUAC\'s questions, followed by imprisonment and blacklisting, gave HUAC huge publicity and intensified anti-communist feeling',
      'They were convicted of passing atomic secrets to the Soviet Union',
      'They founded the Screen Actors Guild in protest at HUAC',
      'They successfully sued HUAC and had the charges against them overturned'
    ],
    correct: 0,
    explain: 'By refusing to testify and citing the First Amendment, the ten were jailed for contempt of Congress and blacklisted, generating enormous publicity for HUAC\'s work and deepening anti-communist hysteria.',
    misconception: 'No espionage charges were involved; their offence in law was contempt of Congress for refusing to answer questions, not spying.',
    tag: 'The Red Scare and McCarthyism'
  },
  {
    q: 'Which of the following was NOT a genuine method used by Senator Joseph McCarthy in his anti-communist campaign?',
    options: [
      'Presenting solid, independently verified evidence before making any public accusation',
      'Aggressive, bullying public questioning of witnesses',
      'Exaggerating or fabricating evidence against those he accused',
      'Attacking critics as communist sympathisers themselves'
    ],
    correct: 0,
    explain: 'McCarthy repeatedly made accusations without reliable proof - his figures for "known communists" changed constantly, and the Tydings Committee found his claims to be baseless.',
    misconception: 'McCarthy\'s confident manner led many to assume he had solid evidence, but investigations into his claims consistently found them unsupported or invented.',
    tag: 'The Red Scare and McCarthyism'
  },
  {
    q: 'What played a key role in the growth of public opposition to McCarthy by 1954?',
    options: [
      'Televised coverage of the Army-McCarthy hearings let ordinary Americans see his bullying methods directly for the first time',
      'McCarthy was formally charged with espionage',
      'President Eisenhower publicly denounced him as soon as he became president in 1953',
      'The Soviet Union released documents proving all of McCarthy\'s claims were false'
    ],
    correct: 0,
    explain: 'Live television coverage of the 1954 Army-McCarthy hearings exposed his aggressive tactics to a huge audience, and critical broadcasts such as Ed Murrow\'s helped turn public opinion against him.',
    misconception: 'Eisenhower actually avoided openly criticising McCarthy for a long time, even when McCarthy attacked his friend General Marshall, for fear of the political cost.',
    tag: 'The Red Scare and McCarthyism'
  },
  {
    q: 'Which combination of factors best explains McCarthy\'s political downfall in 1954?',
    options: [
      'Increasingly extreme and unproven accusations, hostile press coverage, and damaging exposure during the televised Army-McCarthy hearings',
      'His arrest and conviction for perjury in a federal court',
      'Public anger after it was revealed he was secretly working for the Soviet Union',
      'His defeat in a re-election vote for his Senate seat'
    ],
    correct: 0,
    explain: 'No single event caused McCarthy\'s fall; a build-up of overreach, negative media coverage, and the televised hearings led the Senate to formally condemn him in December 1954.',
    misconception: 'McCarthy was never tried or exposed as a spy, and he was not voted out of office - the Senate condemned his conduct while he remained a (largely ignored) senator until his death in 1957.',
    tag: 'The Red Scare and McCarthyism'
  },
  {
    q: 'What is considered the most significant longer-term impact of McCarthyism on the USA?',
    options: [
      'It created a lasting climate of caution about expressing left-wing or dissenting political views, well beyond those directly punished',
      'It brought an immediate end to the Cold War',
      'It resulted in a permanent nationwide ban on government loyalty investigations',
      'It led to HUAC being abolished within a year of McCarthy\'s downfall'
    ],
    correct: 0,
    explain: 'Beyond those who lost jobs or reputations directly, the broader atmosphere of suspicion discouraged political dissent and trade union activity, and anti-communism stayed central to US politics for decades.',
    misconception: 'HUAC actually continued to operate for many years after McCarthy\'s fall (it was not abolished until 1975), and the Cold War itself lasted for decades more.',
    tag: 'The Red Scare and McCarthyism'
  },

  // ===================== CIVIL RIGHTS IN THE 1950s =====================
  {
    q: 'What best describes the difference between segregation in the North and South of the USA around 1950?',
    options: [
      'The South enforced segregation through explicit "Jim Crow" laws, while in the North it existed mainly through economic and social patterns rather than law',
      'Segregation existed only in the South and was completely absent in the North',
      'The North had stricter formal segregation laws than the South',
      'Segregation in this period applied only to voting rights, not to schools, transport or housing'
    ],
    correct: 0,
    explain: 'Southern states passed specific laws enforcing segregation in nearly every area of life, while in the North, lower wages and housing discrimination produced segregated neighbourhoods and facilities without an equivalent web of laws.',
    misconception: 'The absence of formal Jim Crow laws in the North did not mean equality - discrimination and de facto segregation were still widespread there.',
    tag: 'Civil rights in the 1950s'
  },
  {
    q: 'Why did the Supreme Court\'s 1896 ruling in Plessy versus Ferguson matter so much for civil rights in the first half of the twentieth century?',
    options: [
      'It established the "separate but equal" legal principle used for decades to justify segregated facilities',
      'It banned segregation across the whole of the USA',
      'It gave African American men the right to vote in federal elections',
      'It removed states\' power to run their own court systems'
    ],
    correct: 0,
    explain: 'Plessy legitimised segregated facilities as constitutional provided they were officially "equal," a legal precedent that stood for nearly sixty years until Brown versus Topeka overturned it.',
    misconception: 'Despite the word "equal" in its wording, Plessy actually protected the legality of segregation rather than banning it.',
    tag: 'Civil rights in the 1950s'
  },
  {
    q: 'Which of the following was NOT one of the real methods used by many Southern states to prevent African Americans from registering to vote in the 1950s?',
    options: [
      'A federal court order individually barring certain named people from voting',
      'Literacy tests that were, in practice, applied unfairly against black applicants',
      'Poll taxes that many African American citizens could not afford to pay',
      'Intimidation or the threat of violence against those who tried to register'
    ],
    correct: 0,
    explain: 'Literacy tests, poll taxes and violence were the genuine tools used to disenfranchise black voters; federal courts, when they intervened, generally acted against these barriers rather than enforcing them.',
    misconception: 'It might seem plausible that courts enforced such barriers, but federal courts were more often the route civil rights campaigners used to challenge, not uphold, discriminatory voting rules.',
    tag: 'Civil rights in the 1950s'
  },
  {
    q: 'Why is Brown versus Board of Education of Topeka (1954) considered a landmark case?',
    options: [
      'The Supreme Court ruled unanimously that segregated schooling was unconstitutional, overturning the "separate but equal" precedent',
      'It legalised segregation in schools as long as facilities were proven to be equal',
      'It gave African American men the vote for the first time',
      'It ended segregation on interstate buses and in bus terminals'
    ],
    correct: 0,
    explain: 'The unanimous 1954 ruling found that segregated education was inherently unequal, striking down the legal basis set by Plessy versus Ferguson - though this ruling covered schools specifically.',
    misconception: 'Interstate transport desegregation came from separate rulings in the years that followed, not from the Brown decision itself, which focused on education.',
    tag: 'Civil rights in the 1950s'
  },
  {
    q: 'What was one major reason the murder of Emmett Till in 1955 had such a wide impact?',
    options: [
      'His mother\'s decision to hold an open-casket funeral, with photographs published nationally, exposed the brutality of Southern racism to a huge audience',
      'He was the first African American ever killed by police officers in the South',
      'His killers were both sentenced to death for the crime',
      'His death led directly to the passing of the Civil Rights Act of 1957'
    ],
    correct: 0,
    explain: 'Mamie Bradley\'s decision to display her son\'s beaten body drew enormous press coverage, shocking many Americans and motivating a new generation of civil rights activists.',
    misconception: 'In fact, both men accused of Till\'s murder were acquitted by an all-white jury - one of the most notorious aspects of the case, not a case of justice being carried out.',
    tag: 'Civil rights in the 1950s'
  },
  {
    q: 'What directly triggered the start of the Montgomery Bus Boycott in December 1955?',
    options: [
      'Rosa Parks\'s arrest for refusing to give up her bus seat to a white passenger',
      'The murder of Emmett Till, which had taken place in Montgomery',
      'A Supreme Court ruling that immediately banned segregated buses everywhere',
      'A boycott called by Martin Luther King after his house was bombed'
    ],
    correct: 0,
    explain: 'Rosa Parks\'s arrest was used by local activists, who had already been planning such action through groups like the Women\'s Political Council, to launch the boycott almost immediately.',
    misconception: 'King\'s house was bombed after the boycott had already begun, in January 1956, as a reaction to the campaign rather than its cause.',
    tag: 'Civil rights in the 1950s'
  },
  {
    q: 'Which organisation was formed to coordinate and sustain the Montgomery Bus Boycott, with Martin Luther King chosen as its chairman?',
    options: [
      'The Montgomery Improvement Association',
      'The Southern Christian Leadership Conference',
      'The Alabama branch of the NAACP',
      'The Student Nonviolent Coordinating Committee'
    ],
    correct: 0,
    explain: 'The MIA organised alternative transport such as carpools and led negotiations during the boycott, and it was this role that first brought King to national attention.',
    misconception: 'The Southern Christian Leadership Conference is closely linked to King, but it was actually founded in 1957, after the boycott, partly because of the reputation he had built during it.',
    tag: 'Civil rights in the 1950s'
  },
  {
    q: 'What legal decision finally ended segregated seating on Montgomery\'s buses?',
    options: [
      'A ruling in Browder versus Gayle, upheld on appeal by the Supreme Court, that bus segregation was unconstitutional',
      'A voluntary decision by the bus company after losing revenue during the boycott',
      'A new act of Congress banning segregated transport across the whole country',
      'An executive order issued directly by the Mayor of Montgomery'
    ],
    correct: 0,
    explain: 'It was ultimately a court ruling, applying the reasoning of Brown versus Topeka to transport, that legally ended bus segregation, even though the financial losses from the boycott had already put pressure on the company.',
    misconception: 'Although the boycott badly damaged the bus company\'s income, it was the courts, not a voluntary business decision, that formally ended segregated seating.',
    tag: 'Civil rights in the 1950s'
  },
  {
    q: 'Beyond ending bus segregation in one city, why is the Montgomery Bus Boycott seen as especially significant for the wider civil rights movement?',
    options: [
      'It proved that sustained, organised direct action by ordinary African Americans could bring real change, and it launched Martin Luther King as a national figure',
      'It was the first occasion the Supreme Court ever ruled against any form of segregation',
      'It ended segregation in every public facility across the state of Alabama',
      'It was planned and carried out entirely by the Federal government'
    ],
    correct: 0,
    explain: 'The boycott showed the power of mass, non-violent, community-organised protest and brought King to prominence, inspiring further campaigns such as the Tallahassee bus boycott.',
    misconception: 'The boycott\'s direct legal impact was limited to Montgomery\'s buses - most other facilities in the city and beyond remained segregated for years afterwards.',
    tag: 'Civil rights in the 1950s'
  },
  {
    q: 'What made the Little Rock crisis of 1957 especially significant?',
    options: [
      'It was the first time a US president sent Federal troops to directly enforce school desegregation against the wishes of a state government',
      'It led immediately to full school desegregation across the entire Deep South',
      'It resulted in Governor Faubus being removed from office',
      'It was resolved without any involvement from the Federal government'
    ],
    correct: 0,
    explain: 'Eisenhower\'s decision to send Federal troops to escort the Little Rock Nine into Central High School marked a rare, direct instance of Federal power being used to enforce a Supreme Court ruling.',
    misconception: 'Progress after Little Rock remained slow and patchy across the Deep South - the crisis did not trigger widespread, immediate compliance with desegregation.',
    tag: 'Civil rights in the 1950s'
  },
  {
    q: 'What was the main limitation of the 1957 Civil Rights Act?',
    options: [
      'It relied on Federal prosecutions and local juries to protect voting rights, and juries often refused to convict those who obstructed black voter registration',
      'It applied only to Northern states and had no effect in the South',
      'President Eisenhower vetoed it before it could take effect',
      'It focused on desegregating schools rather than voting rights'
    ],
    correct: 0,
    explain: 'Although it created a Civil Rights Commission and allowed Federal prosecution of those obstructing voter registration, sympathetic all-white juries frequently returned "not guilty" verdicts, limiting its real-world effect.',
    misconception: 'The Act was actually signed into law by Eisenhower and focused specifically on voting rights protections, not school desegregation, which had already been addressed separately by Brown versus Topeka.',
    tag: 'Civil rights in the 1950s'
  },
  {
    q: 'What prompted the revival of the Ku Klux Klan and the rapid growth of White Citizens\' Councils in the mid-1950s?',
    options: [
      'Anger among segregationist white Southerners at rulings and protests such as Brown versus Topeka and the Montgomery Bus Boycott',
      'A national recruitment drive launched by the Federal government',
      'The passing of the Voting Rights Act in 1965',
      'A direct response to the Watts riots in Los Angeles'
    ],
    correct: 0,
    explain: 'Many white Southerners saw the Brown decision as an attack on their way of life, sparking the growth of White Citizens\' Councils and a renewed Klan, which grew further as protests like the bus boycott continued.',
    misconception: 'The Voting Rights Act and the Watts riots both occurred later, in the mid-1960s, and are unrelated to this earlier wave of Klan revival in the 1950s.',
    tag: 'Civil rights in the 1950s'
  },

  // ===================== CIVIL RIGHTS PROTESTS, 1960-65 =====================
  {
    q: 'What new protest tactic did the Greensboro sit-ins of February 1960 introduce to the civil rights movement?',
    options: [
      'Peacefully occupying segregated facilities, such as lunch counters, and refusing to leave until served or removed',
      'Boycotting an entire city\'s public transport system',
      'Marching in a mass demonstration between two state capitals',
      'Taking a case directly to the Supreme Court without first using local courts'
    ],
    correct: 0,
    explain: 'Four students remaining seated at a whites-only counter in Greensboro sparked a wave of "sit-ins" across the South, a visible and confrontational form of direct-action protest.',
    misconception: 'Transport boycotts, like the one in Montgomery, were an earlier tactic; sit-ins introduced a new method that could target a much wider range of everyday facilities.',
    tag: 'Civil rights protests, 1960-65'
  },
  {
    q: 'Which civil rights organisation was formed directly out of student involvement in the 1960 sit-in movement?',
    options: [
      'The Student Nonviolent Coordinating Committee (SNCC)',
      'The Congress of Racial Equality (CORE)',
      'The Southern Christian Leadership Conference (SCLC)',
      'The National Association for the Advancement of Colored People (NAACP)'
    ],
    correct: 0,
    explain: 'SNCC was founded at a meeting organised by Ella Baker in April 1960 specifically so student protestors could run their own independent civil rights organisation.',
    misconception: 'CORE already existed before 1960 and went on to help organise the Freedom Rides, but it was not created as a result of the sit-ins.',
    tag: 'Civil rights protests, 1960-65'
  },
  {
    q: 'What was the main purpose of the 1961 Freedom Rides?',
    options: [
      'To test whether Supreme Court rulings desegregating interstate buses and terminals were actually being enforced in the South',
      'To register African American voters across Mississippi',
      'To desegregate public schools in Arkansas',
      'To protest against the military draft for the Vietnam War'
    ],
    correct: 0,
    explain: 'CORE activists deliberately rode interstate buses into the South to expose the fact that existing rulings on desegregated interstate travel were being widely ignored.',
    misconception: 'Large-scale voter registration was the focus of later campaigns such as Freedom Summer, not the Freedom Rides, which specifically targeted transport desegregation.',
    tag: 'Civil rights protests, 1960-65'
  },
  {
    q: 'What happened to the Freedom Riders\' bus at Anniston, Alabama, in May 1961?',
    options: [
      'A mob attacked the bus and set it on fire with a firebomb, forcing the passengers to flee as it burned',
      'Local police arrested and formally charged the leaders of the attacking mob',
      'The bus was escorted safely through the town by National Guard troops',
      'The riders were welcomed into the town without any incident'
    ],
    correct: 0,
    explain: 'A white mob, including local Klan members, attacked and firebombed the bus; passengers escaped as flames spread, while highway patrolmen eventually helped the injured riders reach safety.',
    misconception: 'In fact, nobody was arrested or charged for the attack at Anniston, a striking example of the lack of legal protection Freedom Riders faced in parts of the South.',
    tag: 'Civil rights protests, 1960-65'
  },
  {
    q: 'What was the eventual effect of the violence used against the Freedom Riders in 1961?',
    options: [
      'It embarrassed the Kennedy administration internationally and led to Federal enforcement of desegregation on interstate transport',
      'It caused the Freedom Rides to end immediately in complete failure',
      'It led directly to the resignation of President Kennedy',
      'It caused the Congress of Racial Equality to disband'
    ],
    correct: 0,
    explain: 'Widespread media coverage of the violence pressured Kennedy\'s administration to have the Interstate Commerce Commission enforce desegregation of bus terminals and interstate travel.',
    misconception: 'Although the campaign was dangerous and slow, it ultimately achieved its underlying aim rather than collapsing into failure.',
    tag: 'Civil rights protests, 1960-65'
  },
  {
    q: 'What was the central issue in the James Meredith case at the University of Mississippi in 1962?',
    options: [
      'Meredith\'s attempt to become the university\'s first African American student was blocked by state authorities despite a Supreme Court order to admit him',
      'Meredith was suing the university over unfair grading of his exams',
      'Meredith was campaigning to become the university\'s president',
      'Meredith was leading a protest against the Vietnam War on campus'
    ],
    correct: 0,
    explain: 'Despite the Supreme Court ordering his admission, Mississippi\'s governor and state legislature resisted, prompting President Kennedy to send Federal marshals and troops after riots broke out on campus.',
    misconception: 'This was fundamentally a case about access to higher education for African Americans, not a dispute over grading or campus leadership.',
    tag: 'Civil rights protests, 1960-65'
  },
  {
    q: 'What set Martin Luther King\'s approach to protest apart as a defining feature of his leadership?',
    options: [
      'A consistent commitment to non-violent direct action, such as boycotts and marches, combined with powerful public speaking',
      'Reliance on armed groups to protect marchers during demonstrations',
      'Working only through private, closed-door negotiations and avoiding public protest',
      'Support for separating African Americans into an entirely independent state'
    ],
    correct: 0,
    explain: 'Influenced partly by Gandhi, King insisted on non-violence even under provocation, combining tactics such as boycotts, marches and sit-ins with his skill as a speaker to win support from people of many backgrounds.',
    misconception: 'A separatist goal describes groups such as the Nation of Islam, not King, who consistently campaigned for integration through peaceful means.',
    tag: 'Civil rights protests, 1960-65'
  },
  {
    q: 'Why was Birmingham, Alabama chosen as the location for the SCLC\'s major 1963 campaign, known as Project C?',
    options: [
      'It had a large African American population, had not desegregated any facilities, and had a police chief known for using force, making a strong reaction likely',
      'It was the only major Southern city that had already desegregated its schools',
      'It was the location of the original 1960 sit-ins',
      'It had the highest African American voter turnout of any Southern city'
    ],
    correct: 0,
    explain: 'Organisers deliberately selected a city where a strong, visible reaction from authorities such as police chief "Bull" Connor was likely, believing this would generate the publicity needed to force change.',
    misconception: 'The original sit-ins began in Greensboro, North Carolina, not Birmingham, which was chosen precisely because none of its facilities had yet been desegregated.',
    tag: 'Civil rights protests, 1960-65'
  },
  {
    q: 'What made the 1963 Birmingham campaign so significant on a national level?',
    options: [
      'Television footage of police using dogs and fire hoses against child protestors shocked the public and increased pressure on the Federal government to act',
      'It led directly to the passage of the Voting Rights Act',
      'It marked the only time Martin Luther King was ever arrested',
      'It ended segregation throughout the entire state of Alabama'
    ],
    correct: 0,
    explain: 'Images of young protestors being attacked with hoses and dogs generated worldwide publicity and pushed President Kennedy to prioritise a new civil rights bill.',
    misconception: 'The Voting Rights Act (1965) followed events at Selma two years later, not Birmingham, which is more closely linked to the Civil Rights Act of 1964.',
    tag: 'Civil rights protests, 1960-65'
  },
  {
    q: 'What was the immediate political purpose of the March on Washington in August 1963?',
    options: [
      'To hold a huge peaceful demonstration pressuring Congress to pass the civil rights bill then under debate',
      'To protest against US involvement in the Vietnam War',
      'To mark the founding of the Black Panther Party',
      'To celebrate the recent passage of the Voting Rights Act'
    ],
    correct: 0,
    explain: 'Over 250,000 people gathered to march for "jobs and freedom" and to pressure Congress into passing the civil rights bill it was then debating; King\'s "Dream" speech became its most famous moment.',
    misconception: 'The Voting Rights Act was not passed until 1965, two years after the march, which supported a bill that was still being debated rather than celebrating one already passed.',
    tag: 'Civil rights protests, 1960-65'
  },
  {
    q: 'Why is the Mississippi Freedom Summer of 1964 often judged to have had mixed results?',
    options: [
      'Despite huge effort and national publicity following the murders of three campaigners, the actual increase in registered black voters in Mississippi was very small',
      'It received almost no national media attention at the time',
      'It succeeded completely in registering a majority of eligible black voters in the state',
      'It was cancelled before it began due to a lack of volunteers'
    ],
    correct: 0,
    explain: 'Despite the scale of the campaign, only a small number of new voters were successfully registered, even though the murders of Chaney, Goodman and Schwerner drew huge national attention to voter suppression.',
    misconception: 'Far from being ignored, the campaign attracted massive national publicity, especially because of the murders, even though its direct effect on voter registration numbers was limited.',
    tag: 'Civil rights protests, 1960-65'
  },
  {
    q: 'What happened on "Bloody Sunday" in Selma in March 1965, and why did it matter?',
    options: [
      'State troopers violently attacked marchers crossing the Edmund Pettus Bridge, and the resulting publicity helped push the Voting Rights Act through Congress',
      'A peaceful march passed without any incident and attracted little national attention',
      'It was the day Martin Luther King was assassinated',
      'It was a riot started by members of the Black Panther Party'
    ],
    correct: 0,
    explain: 'The brutal attack on peaceful marchers was broadcast nationwide, and President Johnson used the resulting public outrage to push a voting rights bill through Congress within months.',
    misconception: 'King\'s assassination took place in Memphis in 1968, a separate and later event unrelated to the Selma march.',
    tag: 'Civil rights protests, 1960-65'
  },
  {
    q: 'Which factor is generally seen as essential in finally securing the Civil Rights Act (1964) and Voting Rights Act (1965)?',
    options: [
      'A combination of sustained, highly publicised protest and President Johnson\'s political skill in pushing legislation through a reluctant Congress',
      'Unanimous support for the bills among Southern senators',
      'A Supreme Court ruling that ordered Congress to pass the acts',
      'Pressure applied exclusively by foreign governments'
    ],
    correct: 0,
    explain: 'Protest raised awareness and pressure, but it was Johnson\'s determined political manoeuvring, including his use of sympathy after Kennedy\'s assassination, that was crucial in getting the bills passed.',
    misconception: 'Southern Democrats known as Dixiecrats actually fiercely opposed these bills, using tactics such as lengthy filibusters, rather than supporting them unanimously.',
    tag: 'Civil rights protests, 1960-65'
  },

  // ===================== BLACK POWER =====================
  {
    q: 'What was a core belief of the Nation of Islam that set it apart from mainstream civil rights groups such as the NAACP?',
    options: [
      'It rejected integration, arguing that black and white people should live separately rather than seeking to join white-dominated society',
      'It supported working closely with the Democratic Party to pass civil rights legislation',
      'It made non-violent direct action its central tactic',
      'It focused exclusively on the desegregation of public schools'
    ],
    correct: 0,
    explain: 'The Nation of Islam argued that integration would never bring true equality because of persistent white racism, favouring self-sufficiency and eventual separation instead.',
    misconception: 'Non-violent direct action was the defining tactic of groups such as the SCLC, not the Nation of Islam, which took a more separatist and less integration-focused stance.',
    tag: 'Black Power'
  },
  {
    q: 'How did Malcolm X\'s views change after he left the Nation of Islam in 1964?',
    options: [
      'His pilgrimage to Mecca led him toward a more inclusive outlook, including a willingness to work with sympathetic white activists, before he was assassinated',
      'He became a committed supporter of non-violent integration in almost exactly the same style as Martin Luther King',
      'He publicly renounced all criticism he had previously made of the civil rights movement',
      'He joined the Southern Christian Leadership Conference as a senior leader'
    ],
    correct: 0,
    explain: 'Seeing Muslims of many races treated as equals during his pilgrimage softened his separatist views, and he founded the Organization of Afro-American Unity, open to cooperating with sympathetic white activists, before his assassination in February 1965.',
    misconception: 'Although his views moderated considerably, he never adopted King\'s specific non-violent, integrationist programme, nor did he join the SCLC.',
    tag: 'Black Power'
  },
  {
    q: 'What is a key reason historians give for the growth of the Black Power movement from the mid-1960s?',
    options: [
      'Frustration that legal victories such as the 1964 and 1965 Acts had not solved poverty and discrimination, especially in Northern city ghettos',
      'The sudden and complete disappearance of racial discrimination across the South',
      'A decision by the Federal government to actively fund and promote Black Power organisations',
      'The end of American involvement in the Vietnam War'
    ],
    correct: 0,
    explain: 'Ongoing poverty, unemployment and discrimination, particularly outside the South, made many feel that legal reform alone was too slow, encouraging demands for a more radical approach.',
    misconception: 'Major civil rights laws had indeed been passed by this point, but their failure to fix underlying economic inequality is precisely what fuelled frustration and the growth of Black Power.',
    tag: 'Black Power'
  },
  {
    q: 'Who is most closely associated with popularising the slogan "Black Power" during the 1966 March Against Fear?',
    options: [
      'Stokely Carmichael',
      'Malcolm X',
      'Huey Newton',
      'Martin Luther King'
    ],
    correct: 0,
    explain: 'Carmichael, leader of SNCC, used the phrase in speeches after his release from custody during the march, signalling a shift toward more militant rhetoric within the movement.',
    misconception: 'Malcolm X\'s earlier ideas strongly influenced this shift in thinking, but it is Carmichael who is credited with actually popularising the phrase during this event.',
    tag: 'Black Power'
  },
  {
    q: 'What was the main aim of the Black Power salute given by Tommie Smith and John Carlos at the 1968 Mexico Olympics?',
    options: [
      'To express racial pride and highlight the ongoing poverty and inequality faced by African Americans',
      'To show support for continued US involvement in the Vietnam War',
      'To protest against Mexico hosting the Olympic Games',
      'To demand higher pay for professional athletes'
    ],
    correct: 0,
    explain: 'Their raised, gloved fists and bare feet during the medal ceremony symbolised Black pride and drew global attention to poverty among African Americans, despite bringing them bans and death threats.',
    misconception: 'Their protest concerned racial injustice and poverty in the United States, not international politics such as the Vietnam War or the choice of host nation.',
    tag: 'Black Power'
  },
  {
    q: 'What did the 1968 Kerner Report conclude about the causes of major urban riots such as those in Watts?',
    options: [
      'They stemmed from poverty, discrimination and poor policing rather than from organised leadership by any single group',
      'They were carefully planned and directed by the Black Panther Party',
      'They were caused directly by the assassination of Malcolm X',
      'They were staged by Federal agents to justify new civil rights legislation'
    ],
    correct: 0,
    explain: 'The Kerner Report found the riots grew out of frustration with poor living conditions, unfair treatment by police, and a failure of authorities to respond to problems, rather than any organised plan.',
    misconception: 'No organised group planned or led the Watts riots - the report specifically rejected the idea that Black Power organisations were behind the unrest.',
    tag: 'Black Power'
  },
  {
    q: 'Who founded the Black Panther Party in October 1966, and in which city?',
    options: [
      'Huey Newton and Bobby Seale, in Oakland, California',
      'Malcolm X and Stokely Carmichael, in Harlem, New York',
      'Martin Luther King and Ralph Abernathy, in Atlanta, Georgia',
      'Eldridge Cleaver and Angela Davis, in Chicago, Illinois'
    ],
    correct: 0,
    explain: 'Newton and Seale founded the party in Oakland, combining armed self-defence patrols with a detailed ten-point political programme and community welfare projects.',
    misconception: 'Several other prominent Black Power figures are strongly associated with the wider movement, but they were not the ones who founded the party in Oakland.',
    tag: 'Black Power'
  },
  {
    q: 'Which of the following was a genuine community programme run by the Black Panther Party?',
    options: [
      'Free breakfast programmes for children and free community medical clinics',
      'A network of segregated private schools funded directly by the Federal government',
      'An officially recognised police force that replaced local law enforcement',
      'A national voter registration drive run jointly with the NAACP'
    ],
    correct: 0,
    explain: 'Alongside more confrontational activities like monitoring police conduct, the Panthers ran breakfast clubs, health clinics and other welfare schemes to support poor black communities.',
    misconception: 'The Panthers "patrolled" police to observe their conduct, but they never held any official legal authority as a police force, nor were their community programmes Federally funded.',
    tag: 'Black Power'
  },
  {
    q: 'What was a major consequence of the growth of Black Power for the wider civil rights movement?',
    options: [
      'It deepened divisions within the movement, as some activists rejected non-violence and integration, worrying moderate leaders and many white Americans',
      'It brought an end to all further protest activity by African Americans',
      'It caused the immediate repeal of the Civil Rights Act of 1964',
      'It unified every civil rights group under a single shared leadership'
    ],
    correct: 0,
    explain: 'Black Power\'s more militant and sometimes separatist stance unsettled moderate civil rights leaders and increased white fear, fracturing what had previously been a more unified movement even as it also inspired racial pride and new community projects.',
    misconception: 'Rather than unifying the movement, the rise of Black Power actually contributed to real splits and disagreements over strategy and tactics.',
    tag: 'Black Power'
  },

  // ===================== THE STUDENT MOVEMENT =====================
  {
    q: 'Which factor is generally considered a major reason for the rapid growth of student protest movements in the 1960s?',
    options: [
      'A rapidly expanding college-age "baby boomer" population combined with growing disillusionment with the values of their parents\' generation',
      'A Federal government programme that actively paid students to organise protests',
      'A sudden nationwide ban on political discussion at universities',
      'The ending of the Cold War in the mid-1960s'
    ],
    correct: 0,
    explain: 'Post-war "baby boom" students, both more numerous and often more questioning of authority than earlier generations, increasingly rejected what they saw as an unjust or overly conformist society.',
    misconception: 'The Cold War was still very much ongoing throughout the 1960s, and if anything it fuelled student protest, especially over Vietnam, rather than ending it.',
    tag: 'The student movement'
  },
  {
    q: 'What was the original focus of Students for a Democratic Society (SDS) when it was founded around 1960?',
    options: [
      'Campaigning for greater student rights and involvement in university decision-making, alongside opposition to racial injustice',
      'Organising the first sit-ins against segregated lunch counters',
      'Coordinating draft resistance to the Vietnam War as its founding purpose',
      'Running candidates directly for national political office'
    ],
    correct: 0,
    explain: 'The Port Huron Statement of 1962 set out SDS aims including opposition to "racial injustice, war and the violation of human rights," with campus and student rights as an early focus before Vietnam came to dominate after 1965.',
    misconception: 'The original Greensboro sit-ins were led independently by African American students in 1960 and were not organised by SDS.',
    tag: 'The student movement'
  },
  {
    q: 'What directly triggered the Berkeley Free Speech Movement in autumn 1964?',
    options: [
      'University administrators banned students from carrying out political campaigning and protest activity on campus grounds',
      'The university announced a large increase in tuition fees',
      'The military draft was suddenly extended to cover full-time college students',
      'A professor was dismissed for openly supporting civil rights'
    ],
    correct: 0,
    explain: 'After students organised campus protests linked to civil rights, the university banned "off campus political and social action" on its grounds, sparking a backlash led by figures such as Mario Savio.',
    misconception: 'Vietnam became central to student unrest more broadly, but the specific trigger for the Free Speech Movement was a restriction on campus political activity, not the draft itself.',
    tag: 'The student movement'
  },
  {
    q: 'What was one notable consequence of the more confrontational tactics used during the Berkeley Free Speech Movement?',
    options: [
      'It won some concessions on campus political activity, but it also lost sympathy from more moderate students and much of the wider public',
      'It achieved complete, uncontested public support throughout the USA',
      'It resulted in the University of California being permanently closed',
      'It ended without leading to a single arrest'
    ],
    correct: 0,
    explain: 'Although the university eventually eased its restrictions on protest, the movement\'s confrontational reputation (mockingly labelled the "Filthy Speech Movement" by critics) cost it wider support, and hundreds of students were arrested and later convicted.',
    misconception: 'The Free Speech Movement did not enjoy unconditional public backing - its methods actually alienated many people, including some students, despite securing concrete concessions.',
    tag: 'The student movement'
  },
  {
    q: 'Which single issue eventually united the otherwise highly diverse student protest movement of the 1960s?',
    options: [
      'Opposition to the Vietnam War',
      'Agreement on a single political party to support',
      'A shared demand to abolish universities altogether',
      'Support for a nationwide student dress code'
    ],
    correct: 0,
    explain: 'Although students protested on issues ranging from civil rights to campus rules, opposition to the Vietnam War became the rare cause that drew together the widest range of student activists.',
    misconception: 'The student movement was famously fragmented on most political questions, which is exactly why Vietnam stands out as such an unusually unifying issue.',
    tag: 'The student movement'
  },
  {
    q: 'Why did the draft system for the Vietnam War fall disproportionately on young, working-class men and African Americans?',
    options: [
      'College students could often obtain deferments, so those unable to attend college were more likely to be drafted',
      'Only volunteers were ever sent to fight, so there was no draft system in operation',
      'The draft legally applied only to men over the age of thirty',
      'Only women were exempt from being drafted'
    ],
    correct: 0,
    explain: 'The deferment system meant college students could often delay or avoid service, so the burden of fighting fell more heavily on young men who could not attend college, a major source of resentment feeding the anti-war movement.',
    misconception: 'A genuine draft system operated throughout the war rather than a purely voluntary force, and its unequal impact - not random chance - is what made it so controversial.',
    tag: 'The student movement'
  },
  {
    q: 'What happened at Kent State University in Ohio in May 1970?',
    options: [
      'National Guard troops opened fire on student anti-war protestors, killing four students',
      'Students successfully occupied the university and forced its permanent closure',
      'A peaceful demonstration took place with no casualties',
      'Students were expelled from the university but no violence occurred'
    ],
    correct: 0,
    explain: 'Guardsmen called in to break up a protest against the war and the invasion of Cambodia opened fire on students, killing four and wounding others, an event that shocked the nation.',
    misconception: 'Far from being peaceful, Kent State became one of the most notorious examples of lethal state violence used against domestic anti-war protestors.',
    tag: 'The student movement'
  },
  {
    q: 'How did the "hippie" counter-culture mainly express its rejection of mainstream American society?',
    options: [
      '"Dropping out" of conventional work and education, embracing communal living, and promoting peace, love and experimentation with drugs',
      'Running candidates for president on an explicitly anti-war platform',
      'Joining the Republican Party in large numbers to change it from within',
      'Volunteering in large numbers to serve in Vietnam in order to reform military policy'
    ],
    correct: 0,
    explain: 'Hippies rejected conventional careers and social norms, forming communes and alternative lifestyles centred on peace, personal freedom and self-expression, exemplified by events such as the Woodstock festival.',
    misconception: 'Hippies were broadly anti-war and distrustful of mainstream party politics, so joining a major party or the military to change it from within was not a typical strategy.',
    tag: 'The student movement'
  },
  {
    q: 'What is a major limitation on the practical political impact of the hippie movement, according to most historical assessments?',
    options: [
      'Despite gradually influencing attitudes toward lifestyle, sexuality and tolerance, it had little direct effect on government policy at the time',
      'It succeeded in getting the military draft abolished immediately',
      'It brought a swift and direct end to the Vietnam War',
      'It resulted in a constitutional amendment recognising communal living'
    ],
    correct: 0,
    explain: 'While it helped shift wider social attitudes over the following decades, the hippie counter-culture itself achieved little direct change in government policy, unlike the more overtly political civil rights and anti-war campaigns.',
    misconception: 'Ending the draft and the war involved a much broader set of political, military and diplomatic factors, not simply cultural pressure from the counter-culture alone.',
    tag: 'The student movement'
  },

  // ===================== THE WOMEN'S MOVEMENT =====================
  {
    q: 'What was Eleanor Roosevelt\'s most notable direct contribution to advancing women\'s causes at a governmental level?',
    options: [
      'As chair of the President\'s Commission on the Status of Women, she helped expose major inequalities facing American women in employment',
      'She became the first woman ever elected to the United States Senate',
      'She personally drafted the wording of the Equal Rights Amendment',
      'She founded the National Organization for Women in 1966'
    ],
    correct: 0,
    explain: 'Kennedy set up the Commission partly at Roosevelt\'s urging, and its 1963 report highlighted serious pay and employment inequalities that helped build momentum for the Equal Pay Act.',
    misconception: 'NOW was founded several years later, in 1966, by Betty Friedan and others, after Roosevelt\'s death in 1962, and Roosevelt never served in the Senate.',
    tag: "The women's movement"
  },
  {
    q: 'What central argument did Betty Friedan make in her 1963 book, The Feminine Mystique?',
    options: [
      'Many well-educated women felt unfulfilled being confined to the role of housewife and mother, despite social expectations that this alone should satisfy them',
      'Women should focus exclusively on political careers rather than family life',
      'Men and women should be paid according to entirely different pay scales reflecting their different social roles',
      'All working women should be required to have children before taking paid employment'
    ],
    correct: 0,
    explain: 'Friedan\'s research found many educated women were unhappy confined to domestic life, and her book challenged the assumption that being a housewife was automatically fulfilling.',
    misconception: 'Friedan did not argue that women should abandon family life altogether - her point was that women should have real choice and opportunity beyond it, including through paid work.',
    tag: "The women's movement"
  },
  {
    q: 'What was the main purpose of the National Organization for Women (NOW), founded in 1966?',
    options: [
      'To campaign, through legal action, lobbying and protest, for women\'s equality while generally working within existing social and family structures',
      'To achieve the total separation of men and women in American society',
      'To campaign exclusively for the legalisation of abortion',
      'To abolish marriage as a legal and social institution'
    ],
    correct: 0,
    explain: 'NOW pursued goals such as enforcement of the ban on sex discrimination in the Civil Rights Act and equal pay through relatively moderate methods like lobbying and legal challenges, distinguishing it from more radical Women\'s Liberation groups.',
    misconception: 'NOW did support wider reproductive rights, including abortion access, as one of several goals, but that was not its sole founding purpose, and it worked mainly within existing structures rather than seeking to overturn them entirely.',
    tag: "The women's movement"
  },
  {
    q: 'How did the tactics of the Women\'s Liberation Movement typically differ from those used by NOW?',
    options: [
      'Women\'s Liberation groups often used more radical, confrontational protest, and some rejected traditional family structures entirely, going further than the more moderate NOW',
      'Women\'s Liberation focused solely on lobbying Congress, unlike NOW',
      'Women\'s Liberation groups avoided all forms of public protest',
      'Women\'s Liberation pursued its goals only through the courts'
    ],
    correct: 0,
    explain: 'Groups within Women\'s Liberation staged more provocative protests, such as the 1968 Miss America demonstration, and some sought a fundamental restructuring of society, going beyond NOW\'s more institutional approach.',
    misconception: 'It was NOW, not Women\'s Liberation, that was more associated with institutional strategies such as lobbying and legal action.',
    tag: "The women's movement"
  },
  {
    q: 'What was the significance of the Supreme Court\'s decision in Roe versus Wade in 1973?',
    options: [
      'It ruled that a woman\'s constitutional right to privacy protected her choice to have an abortion, making abortion more widely available across the USA',
      'It banned abortion outright in all fifty states',
      'It gave individual states the sole and unrestricted power to decide abortion law with no Federal involvement at all',
      'It was primarily concerned with equal pay rather than abortion'
    ],
    correct: 0,
    explain: 'The Court ruled seven to two that abortion restrictions violated a woman\'s right to privacy under the Fourteenth Amendment, legalising abortion (with some limitations) nationwide.',
    misconception: 'The ruling actually expanded access to abortion nationally, rather than banning it or leaving the matter purely to individual states without limits.',
    tag: "The women's movement"
  },
  {
    q: 'Why did abortion become the single most divisive issue connected to the women\'s movement?',
    options: [
      'It touched on deeply held religious and moral beliefs about family and life, provoking a strong organised backlash alongside feminist calls for reproductive choice',
      'It was the only issue that any feminist organisation ever raised',
      'It had no connection whatsoever to religious belief',
      'All feminist groups agreed completely on how to approach the issue'
    ],
    correct: 0,
    explain: 'For opponents such as Phyllis Schlafly, often motivated by religious conviction, wider access to abortion represented an attack on traditional family values, making it uniquely controversial compared with issues like equal pay.',
    misconception: 'Feminists themselves were not entirely united on abortion either, and it was just one of several issues the movement raised, alongside pay, employment and legal equality.',
    tag: "The women's movement"
  },
  {
    q: 'What was Phyllis Schlafly\'s central objection to the Equal Rights Amendment (ERA)?',
    options: [
      'She believed it would weaken family life and remove protections and traditional roles she thought benefited women, such as exemption from combat duty',
      'She believed it did not go far enough in guaranteeing equal pay for equal work',
      'She thought the amendment would only ever benefit wealthy women',
      'She supported the ERA in principle but wanted it passed more quickly'
    ],
    correct: 0,
    explain: 'Schlafly argued the ERA would strip women of protections such as presumed spousal financial support and could expose them to obligations like military combat, campaigning through "Stop ERA" to block its ratification.',
    misconception: 'Schlafly was firmly and actively opposed to the ERA rather than simply impatient for its passage - her campaign is widely credited with its failure to be ratified by the 1982 deadline.',
    tag: "The women's movement"
  },
  {
    q: 'Which of the following was a genuine legislative success closely linked to the women\'s movement\'s campaigning, alongside Roe versus Wade?',
    options: [
      'The Equal Pay Act of 1963, which made it illegal to pay men and women different rates for doing the same job',
      'The Voting Rights Act of 1965',
      'The War Powers Act of 1973',
      'The Civil Rights Act of 1957'
    ],
    correct: 0,
    explain: 'Partly resulting from the findings of the President\'s Commission on the Status of Women, the Equal Pay Act targeted unequal pay for equal work, a key demand of the women\'s movement.',
    misconception: 'The Voting Rights Act and the 1957 Civil Rights Act focused primarily on racial discrimination and African American voting rights, while the War Powers Act concerned presidential control of the military, all unrelated to gender pay discrimination.',
    tag: "The women's movement"
  },
  {
    q: 'By the mid-1970s, which statement is the fairest overall assessment of the women\'s movement\'s impact in the USA?',
    options: [
      'Significant legal changes were achieved, such as the Equal Pay Act and Roe versus Wade, but full economic and social equality, including equal pay in practice, remained unmet',
      'Complete equality between men and women had been achieved across every area of American life',
      'The movement achieved no legal changes of any kind',
      'The movement effectively ended once the Equal Rights Amendment failed to be ratified'
    ],
    correct: 0,
    explain: 'Despite genuine legislative and cultural gains, statistics continued to show a persistent gender pay and employment gap well beyond the mid-1970s, illustrating both the achievements and the limits of the movement.',
    misconception: 'Although the ERA\'s failure to be ratified was a real setback, the broader women\'s movement continued and produced many further effects on American society beyond that one amendment.',
    tag: "The women's movement"
  },

  // ===================== NIXON AND WATERGATE =====================
  {
    q: 'What originally motivated President Nixon to set up the secretive "White House Plumbers" unit in 1971?',
    options: [
      'To prevent further leaks of sensitive government information, following the unauthorised release of the Pentagon Papers',
      'To organise fundraising for his 1972 re-election campaign',
      'To investigate the Watergate break-in after it had already taken place',
      'To monitor suspected Soviet spies operating inside the CIA'
    ],
    correct: 0,
    explain: 'After Daniel Ellsberg leaked the Pentagon Papers, Nixon\'s anger and suspicion of leaks led him to create a unit tasked with stopping them, which went on to carry out illegal activities including break-ins.',
    misconception: 'The Plumbers were created before the Watergate break-in, originating from concern over the Pentagon Papers leak, not as a response to Watergate itself, which came later.',
    tag: 'Nixon and Watergate'
  },
  {
    q: 'What was the immediate event that started the Watergate scandal in June 1972?',
    options: [
      'Five men were arrested breaking into the Democratic National Committee\'s offices in the Watergate complex',
      'President Nixon publicly admitted to personally ordering illegal wiretaps',
      'The Washington Post published leaked transcripts of White House tape recordings',
      'White House lawyer John Dean resigned from his post'
    ],
    correct: 0,
    explain: 'The arrest of the burglars attempting to repair bugging equipment at the Democratic National Committee offices set off the chain of investigations that eventually engulfed the presidency.',
    misconception: 'Nixon\'s admissions, the published tape transcripts, and Dean\'s resignation all happened later, as consequences of the investigations that followed the original break-in.',
    tag: 'Nixon and Watergate'
  },
  {
    q: 'Which organisation funded the illegal activities of the White House Plumbers, including the Watergate break-in?',
    options: [
      'The Committee to Re-elect the President (widely known as CREEP or CRP)',
      'The Democratic National Committee',
      'The Central Intelligence Agency, acting in its official capacity',
      'The Federal Bureau of Investigation'
    ],
    correct: 0,
    explain: 'Nixon\'s re-election committee, headed by John Mitchell, held a secret fund that financed the Plumbers\' illegal activities, using donations that contributors believed were simply funding a normal campaign.',
    misconception: 'Although some Plumbers were former CIA agents, the CIA as an institution did not officially fund or direct their illegal activities - that funding came through CREEP.',
    tag: 'Nixon and Watergate'
  },
  {
    q: 'What was the significance of James McCord\'s letter to the trial judge in March 1973?',
    options: [
      'It revealed that senior White House officials had pressured the burglars to lie under oath, turning a burglary case into a major political scandal',
      'It proved that Nixon had personally taken part in breaking into the Watergate offices',
      'It was the first evidence that a secret taping system existed in Nixon\'s office',
      'It resulted in Nixon being immediately impeached by Congress'
    ],
    correct: 0,
    explain: 'McCord\'s admission of pressure to commit perjury transformed public and Senate perceptions of Watergate from a minor burglary into evidence of a wider cover-up reaching into the White House.',
    misconception: 'The existence of the taping system was revealed several months later, in July 1973, by a different witness during Senate testimony, not by McCord\'s letter.',
    tag: 'Nixon and Watergate'
  },
  {
    q: 'What did the "smoking gun" tape released in August 1974 actually reveal?',
    options: [
      'A recording from shortly after the break-in showing Nixon discussing using the CIA to have the FBI halt its investigation',
      'A tape proving Nixon had personally planned the Watergate burglary in advance',
      'A recording of John Dean confessing his own guilt directly to Nixon',
      'A tape that fully cleared Nixon of any wrongdoing in the affair'
    ],
    correct: 0,
    explain: 'The recording from 23 June 1972 showed Nixon discussing using the CIA to obstruct the FBI\'s investigation, providing direct evidence of obstruction of justice and leading swiftly to his resignation.',
    misconception: 'No tape proved Nixon had planned the original burglary in advance - the clearest evidence against him concerned obstructing the investigation afterwards, not orchestrating the break-in itself.',
    tag: 'Nixon and Watergate'
  },
  {
    q: 'Why did President Nixon resign in August 1974 rather than face further proceedings?',
    options: [
      'With impeachment by the House of Representatives now considered almost certain after the tapes were released, resignation avoided a formal trial and removal from office',
      'He had already been formally convicted of a crime in a criminal court',
      'Congress passed a law that forced him to leave office immediately',
      'He had just lost a re-election vote for the presidency'
    ],
    correct: 0,
    explain: 'Facing near-certain impeachment and removal after the "smoking gun" tape was released, Nixon chose to resign rather than continue fighting, becoming the only US president ever to do so.',
    misconception: 'Because of Ford\'s later pardon, Nixon was never actually tried or convicted in a criminal court over his role in the affair.',
    tag: 'Nixon and Watergate'
  },
  {
    q: 'Why did President Gerald Ford pardon Richard Nixon in September 1974?',
    options: [
      'Ford argued that pardoning Nixon would allow the country to move past Watergate without the further distraction of a lengthy criminal trial',
      'A court had legally ordered Ford to issue the pardon',
      'Nixon had already served a prison sentence for his role in Watergate',
      'The Supreme Court had ruled that presidents could never be prosecuted for any offence'
    ],
    correct: 0,
    explain: 'Ford presented the pardon as necessary for national healing, though the decision proved deeply controversial and is often cited as contributing to his defeat in the 1976 election.',
    misconception: 'The pardon was Ford\'s own political decision rather than a court order, and Nixon never actually served any prison time as a result of Watergate.',
    tag: 'Nixon and Watergate'
  },
  {
    q: 'How did Watergate affect Richard Nixon\'s historical reputation, despite some genuine achievements during his presidency?',
    options: [
      'Achievements such as improved relations with China and environmental policy were largely overshadowed, and he is frequently ranked among the least trusted presidents in US history',
      'His reputation was almost completely unaffected by the scandal',
      'Most historians agree Watergate had no lasting effect on how he is remembered',
      'He is chiefly remembered for successfully and decisively winning the Vietnam War'
    ],
    correct: 0,
    explain: 'Despite real foreign policy successes, Watergate came to define Nixon\'s legacy, and opinion polls have often ranked him among the most distrusted presidents in American history.',
    misconception: 'The Vietnam War ended with the fall of South Vietnam in 1975, not a clear US military victory, so this is not what Nixon is generally remembered for.',
    tag: 'Nixon and Watergate'
  },
  {
    q: 'What was the main purpose of the War Powers Act of 1973?',
    options: [
      'To limit a president\'s ability to commit US armed forces to conflict without the approval of Congress',
      'To limit how much money could be spent on political election campaigns',
      'To give citizens the right to access government files held about themselves',
      'To set rules on how the Federal government could collect personal data on individuals'
    ],
    correct: 0,
    explain: 'Passed amid growing concern about unchecked presidential power, heightened by Vietnam and Watergate, it required greater congressional oversight before presidents could commit forces to armed conflict.',
    misconception: 'Those other descriptions match different post-Watergate reforms - campaign spending limits, freedom of information, and data privacy rules - rather than the War Powers Act.',
    tag: 'Nixon and Watergate'
  },
  {
    q: 'What did the 1974 Election Campaign Act primarily aim to address?',
    options: [
      'It set limits on political campaign spending and contributions, partly in response to the secret fund that had financed Watergate-related activity',
      'It restricted how many terms a president could serve in office',
      'It gave Congress the sole power to declare war without presidential involvement',
      'It banned television networks from broadcasting election coverage'
    ],
    correct: 0,
    explain: 'The discovery that a secret campaign fund had financed illegal activity led to new laws limiting, and requiring more transparency around, campaign donations and spending.',
    misconception: 'Presidential term limits are set by the Twenty-Second Amendment (1951) and are unrelated to this specific post-Watergate campaign finance reform.',
    tag: 'Nixon and Watergate'
  },
  {
    q: 'What was the aim of the 1974 Privacy Act, passed in the aftermath of Watergate?',
    options: [
      'To place limits and rules on how Federal government agencies could collect and use information about private individuals',
      'To require presidents to publish full transcripts of all Oval Office conversations',
      'To ban wiretapping outright, even when authorised by a court',
      'To guarantee journalists automatic access to all classified government files'
    ],
    correct: 0,
    explain: 'Concerns about government surveillance and misuse of personal information, highlighted by Watergate-era abuses, led to new rules governing how Federal agencies handled data on citizens.',
    misconception: 'Properly authorised wiretapping with a court order remained legal after the Act; it was unauthorised government intrusion into personal privacy that these reforms specifically targeted.',
    tag: 'Nixon and Watergate'
  },
  {
    q: 'What was the purpose of the 1974 Congressional Budget Control Act?',
    options: [
      'To set clearer rules limiting how the president could control or withhold government spending that Congress had already approved',
      'To limit how much money individuals could donate to a political campaign',
      'To give the public a right to request copies of government documents',
      'To ban government agencies from collecting any data on private citizens'
    ],
    correct: 0,
    explain: 'The Act aimed to restore Congress\'s control over the budget process, restricting a president\'s ability to unilaterally withhold funds that Congress had approved, a check inspired partly by concerns over executive overreach highlighted by Watergate.',
    misconception: 'Those other descriptions belong to the Election Campaign Act, the Freedom of Information Act, and the Privacy Act respectively - a cluster of related but distinct post-Watergate reforms.',
    tag: 'Nixon and Watergate'
  },
  {
    q: 'What was a major long-term impact of the Watergate scandal on American politics?',
    options: [
      'A significant and lasting decline in public trust in government and politicians',
      'An immediate and permanent end to all forms of political corruption in the USA',
      'The abolition of the office of Vice President',
      'A permanent nationwide ban on political parties raising campaign funds'
    ],
    correct: 0,
    explain: 'Polling after Watergate showed a steep and long-lasting drop in Americans\' trust in government, and the scandal contributed to greater public cynicism about politicians generally.',
    misconception: 'While several reforms followed, political corruption did not disappear entirely, and neither the vice-presidency nor party campaign fundraising was abolished.',
    tag: 'Nixon and Watergate'
  }
];

  window.SBL_LESSONS.IGHISTDIVREV = {
    id: 'IGHISTDIVREV',
    title: 'The USA, 1954-75: A Divided Union — Full Topic Revision',
    syllabusFocus: 'The whole of The USA, 1954-75: A Divided Union — the Red Scare and McCarthyism, civil rights in the 1950s, the impact of civil rights protests 1960-74, other protest movements (students, women, anti-Vietnam), and Nixon and Watergate.',
    starterButtons: [
      { label: 'Overview of the whole topic', request: 'Give me a full overview of The USA, 1954-75: A Divided Union, covering McCarthyism, civil rights, other protest movements, and Watergate.' },
      { label: 'The Red Scare and McCarthyism', request: "Explain the reasons for the Red Scare and McCarthy's methods, and assess his overall impact on the USA." },
      { label: 'Civil rights in the 1950s', request: 'Explain the significance of Brown v Board of Education and the Montgomery Bus Boycott for the civil rights movement.' },
      { label: 'Civil rights protests, 1960-74', request: "Assess the impact of civil rights protests between 1960 and 1974, including the roles of Martin Luther King and Malcolm X." },
      { label: 'Other protest movements', request: 'Explain the growth of the student, anti-Vietnam War and women\'s liberation movements in the 1960s and 1970s.' },
      { label: 'Nixon and Watergate', request: 'Explain the reasons for the Watergate Scandal and assess its impact on Nixon and US politics.' },
      { label: 'Help me plan an answer', request: 'Help me plan an answer assessing how far protest changed life for African Americans between 1954 and 1974.' }
    ],
    checklist: DIV_CHECKLIST,
    _questionBank: DIV_QUESTION_BANK,
    quiz: DIV_QUESTION_BANK.slice(0, 20),
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from The USA, 1954-75: A Divided Union checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this topic — for example, "Explain the significance of the Montgomery Bus Boycott." Answer each one before it moves on to the next; it will briefly correct you if you get one wrong.',
      unitTitle: DIV_UNIT_TITLE,
      checklistItems: DIV_CHECKLIST
    }
  };

  /* ---------------- Topic: Japan in Transformation, 1853-1945 ---------------- */

  var JPN_UNIT_TITLE = 'Japan in Transformation, 1853-1945';

  var JPN_CHECKLIST = [
    "I can describe the Perry Mission and Japan's experience of the West.",
    'I can explain the political effects of opening the ports.',
    'I can explain the economic and social effects of opening the ports.',
    'I can explain corruption and incompetence within government as causes of the fall of the Tokugawa.',
    'I can explain the role of the "other" Japanese, Choshu and Satsuma, in the fall of the Tokugawa.',
    'I can explain the economic impact of the fall of the Tokugawa.',
    'I can explain the social impact of the fall of the Tokugawa.',
    'I can explain political modernisation through the Meiji Constitution.',
    'I can explain the impact of the Cultural Revolution.',
    'I can explain the breakup of the Restoration Coalition (1873).',
    'I can describe Meiji culture, including civilisation and Enlightenment.',
    'I can explain Meiji relations with Christianity.',
    'I can explain the impact of the industrial and commercial revolution in the Meiji period.',
    'I can explain Emperor Taisho and the transfer of power from oligarchy to Taisho Democracy (1912).',
    'I can explain changes in culture and society for Taisho Youth.',
    'I can explain changes affecting women in Taisho society.',
    'I can explain changes in village and urban cultures.',
    "I can explain Japan's relations with China and the West.",
    'I can explain the advance of Japanese influence and possessions in Korea and China following the Sino-Japanese War (1895).',
    'I can explain the significance of the Boxer Rebellion (1900) for Japanese influence.',
    'I can explain the significance of the Russo-Japanese War (1904-05).',
    'I can explain the Anglo-Japanese Alliance (1902).',
    'I can explain the significance of the Treaty of Versailles (1919) for Japan.',
    'I can explain the struggle over universal suffrage.',
    'I can explain the emerging labour movement.',
    'I can explain the Public Security Preservation Law (1925).',
    'I can explain economic decline in the 1920s.',
    'I can explain the impact of the Great Kanto Earthquake of 1923.',
    'I can explain the effects of the world Depression from 1929 on society.',
    'I can explain the effects of the world Depression from 1929 on trade and industry.',
    'I can explain the political and social effects of Tenko (rejecting communism).',
    'I can explain the causes of the return to military dictatorship in the 1930s.',
    'I can explain the political effects of the return to military dictatorship.',
    'I can explain strained relations with the West, especially the USA.',
    'I can explain the Great East Asia Co-Prosperity Sphere, including Manchukuo (1931).',
    "I can explain Japan's relations with the League of Nations.",
    "I can explain the effects of Konoe's New Order on people at home during the War in Southeast Asia (1937-45).",
    "I can explain the effects of Konoe's New Order on people in occupied countries.",
    'I can explain the effects of Hiroshima and Nagasaki.',
    'I can explain the surrender of the Showa Emperor.'
  ];

  window.SBL_LESSONS.IGHISTJPNREV = {
    id: 'IGHISTJPNREV',
    title: 'Japan in Transformation, 1853-1945 — Full Topic Revision',
    syllabusFocus: 'The whole of Japan in Transformation, 1853-1945 — opening up to China and the West, transformation under the Meiji period, Japan\'s emergence as a power, political and economic challenges of the 1920s, and depression, empire and collapse to 1945.',
    starterButtons: [
      { label: 'Overview of the whole topic', request: 'Give me a full overview of Japan in Transformation, 1853-1945, covering the opening of Japan, the Meiji transformation, Japan\'s emergence as a power, the challenges of the 1920s, and the road to 1945.' },
      { label: 'Opening up, 1853-67', request: 'Explain how the arrival of Perry and the opening of the ports led to the fall of the Tokugawa Shogunate.' },
      { label: 'The Meiji transformation, 1867-95', request: 'Explain the political, economic and social changes brought about by the Meiji Restoration.' },
      { label: 'An emerging power, 1895-1919', request: "Explain how Japan's relations with China, Russia and the West changed between 1895 and 1919." },
      { label: 'Challenges of the 1920s', request: 'Explain the political and economic challenges Japan faced between 1919 and 1931, including the Great Kanto Earthquake and the Depression.' },
      { label: 'Depression, empire and collapse', request: "Explain the causes of Japan's return to military dictatorship in the 1930s and the road to defeat in 1945." },
      { label: 'Help me plan an answer', request: 'Help me plan an answer assessing how far Japan was transformed by the Meiji Restoration.' }
    ],
    checklist: JPN_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Japan in Transformation checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this topic — for example, "Explain the significance of the Russo-Japanese War." Answer each one before it moves on to the next; it will briefly correct you if you get one wrong.',
      unitTitle: JPN_UNIT_TITLE,
      checklistItems: JPN_CHECKLIST
    }
  };

  /* ---------------- Topic: Superpower Relations, 1943-72 ---------------- */
  /* Checklist written from the class textbook — "A World Divided:
     Superpower Relations, 1943-72" Student Book (Pearson) — cross-
     checked against the Pearson Edexcel International GCSE History
     specification (4HI1) content list for this unit. Pending sign-off
     from the Head of History before this is treated as final. */

  var SPW_UNIT_TITLE = 'Superpower Relations, 1943-72';

  var SPW_CHECKLIST = [
    'I can explain the long-term ideological differences between capitalism and communism.',
    'I can explain the historical background to Soviet-Western rivalry before 1941, including the Bolshevik Revolution and the Nazi-Soviet Pact.',
    'I can describe the wartime Grand Alliance between the USA, Britain and the Soviet Union.',
    'I can explain the tensions and disagreements between the Allies during the Second World War, including the delayed second front.',
    'I can describe the key decisions made at the Tehran Conference (1943).',
    'I can describe the key decisions made at the Yalta Conference (February 1945).',
    'I can describe the key decisions made at the Potsdam Conference (July-August 1945).',
    'I can compare the attitudes of Truman and Stalin towards each other after 1945.',
    'I can explain the impact of the atomic bomb on relations between the USA and the Soviet Union.',
    'I can explain how the Soviet Union expanded its influence in Eastern Europe after 1945.',
    "I can explain the significance of Churchill's 'Iron Curtain' speech.",
    'I can explain the Truman Doctrine and its significance.',
    'I can explain the Marshall Plan and its significance.',
    'I can explain the purpose of Cominform.',
    'I can explain the purpose of Comecon.',
    'I can explain the disagreements between the wartime allies over the future of Germany, including the creation of Bizonia.',
    'I can explain the causes of the Berlin Crisis (1948-49).',
    'I can describe the key events of the Berlin Blockade and the Berlin Airlift.',
    'I can assess the results of the Berlin Crisis, including the setting up of NATO.',
    'I can explain the creation of the two Germanys: the Federal Republic (FRG) and the Democratic Republic (GDR).',
    'I can explain the causes of the Korean War.',
    'I can explain the impact of the Korean War on superpower relations.',
    'I can explain the reasons for the formation of the Warsaw Pact.',
    "I can explain Khrushchev's policy of peaceful co-existence.",
    'I can explain the impact of Soviet rule on Hungary under Rakosi.',
    'I can explain de-Stalinisation and its effects on Eastern Europe.',
    "I can explain Imre Nagy's demands during the Hungarian Uprising.",
    'I can explain the reasons for the Soviet invasion of Hungary (1956).',
    'I can assess the effects of the Soviet invasion of Hungary and the international reaction to it.',
    'I can explain the development of the nuclear arms race in the 1950s and its impact on superpower relations.',
    'I can explain the U-2 incident (1960) and its effects on the Paris Summit Conference.',
    'I can explain the reasons for the construction of the Berlin Wall in 1961, including the refugee problem.',
    'I can explain the effects of the Berlin Wall on relations between East and West Germany.',
    'I can explain the effects of the Berlin Wall on relations between the superpowers.',
    'I can explain the causes and key events of the Bay of Pigs invasion.',
    'I can explain the causes of the Cuban Missile Crisis.',
    'I can describe the key events of the Cuban Missile Crisis.',
    'I can explain the reasons for the outcome of the Cuban Missile Crisis.',
    'I can explain the causes of the Soviet invasion of Czechoslovakia (1968).',
    'I can describe the key events of the Prague Spring and the Soviet invasion of Czechoslovakia.',
    'I can assess the impact of the invasion of Czechoslovakia, including the Brezhnev Doctrine.',
    'I can explain the significance of the Hotline between the USA and the Soviet Union.',
    'I can explain the significance of the Limited Test Ban Treaty (1963).',
    'I can explain the significance of the Outer Space Treaty (1967).',
    'I can explain the significance of the Nuclear Non-Proliferation Treaty.',
    'I can explain the reasons for Detente developing between the superpowers.',
    'I can explain the significance of the SALT talks and the SALT 1 treaty.',
    "I can explain the significance of Nixon's visits to Beijing and Moscow in 1972.",
    'I can assess the extent of Detente achieved by 1972.'
  ];

    var SPW_QUESTION_BANK = [
  // ===== Reasons for the Cold War =====
  { q: 'Which statement best describes the basic economic difference between capitalism and communism?', options: ['Under capitalism individuals and companies could own property and businesses, whereas under communism property was owned by the state on behalf of everyone', 'Under communism individuals were free to own unlimited private property while the state owned nothing', 'Both systems required all property to be owned collectively by workers rather than the state', 'Capitalism and communism differed only in their foreign policies, not in how property was owned'], correct: 0, explain: 'Capitalism rests on private ownership and competition for profit, while communism holds that the state should own the means of production so that wealth is shared more equally.', misconception: 'It is tempting to think communism simply meant no ownership at all, but in practice it meant the state controlled property rather than individuals owning nothing being permitted.', tag: 'Reasons for the Cold War' },
  { q: 'What happened in Russia in October 1917 that first created deep long-term mistrust between Russia and the Western powers?', options: ['The Bolsheviks seized power and later withdrew Russia from the First World War by making peace with Germany', 'Russia joined Britain and France in declaring war on Germany', 'The Russian tsar was restored to the throne with Western backing', 'Russia signed a long-term trade agreement with the USA'], correct: 0, explain: 'The Bolshevik takeover and Russia\'s exit from the war angered Britain, France and the USA, who felt betrayed and were also hostile to communist ideology.', misconception: 'Some assume the rivalry only began with the Nazi-Soviet Pact in 1939, but Western distrust of a communist Russia actually dated back over twenty years earlier.', tag: 'Reasons for the Cold War' },
  { q: 'How did Britain, France and the USA respond to the Bolshevik victory in the Russian Civil War?', options: ['They sent troops to support the anti-Bolshevik forces, hoping to remove the new communist government', 'They immediately recognised and welcomed the Bolshevik government', 'They invited Russia to become a founding member of the League of Nations', 'They provided the Bolsheviks with weapons to help end the civil war quickly'], correct: 0, explain: 'Western powers sent forces to help Russians opposed to Bolshevik rule, confirming Soviet suspicions that the West wanted communism destroyed.', misconception: 'It might seem odd that recent wartime allies would intervene against Russia, but ideological hostility to communism outweighed wartime loyalty once the tsar had fallen.', tag: 'Reasons for the Cold War' },
  { q: 'What did the Nazi-Soviet Pact of August 1939 actually agree to?', options: ['Germany and the Soviet Union promised not to attack each other and secretly agreed to divide Poland between them', 'The Soviet Union agreed to join Britain and France in a military alliance against Hitler', 'Germany agreed to hand over control of Eastern Europe to the Soviet Union without any conditions', 'Stalin agreed to allow German troops to pass through Soviet territory to attack Britain'], correct: 0, explain: 'The pact was a non-aggression agreement with a secret clause dividing Poland, allowing both dictatorships to avoid fighting each other while expanding their territory.', misconception: 'People sometimes assume it was simply a peace treaty with no territorial terms, but the secret partition of Poland was central to the arrangement.', tag: 'Reasons for the Cold War' },
  { q: 'What finally brought the Soviet Union into the wartime Grand Alliance alongside Britain and the USA?', options: ['Germany\'s invasion of the Soviet Union in June 1941', 'The Japanese attack on Pearl Harbor in December 1941', 'Stalin\'s decision to abandon communism temporarily', 'A formal request from the League of Nations'], correct: 0, explain: 'Once Hitler broke the Nazi-Soviet Pact and invaded in 1941, the Soviet Union needed Western support and joined Britain and, later, the USA against Germany.', misconception: 'It is easy to assume Pearl Harbor united all the Allies at once, but that event brought the USA into the war against Japan and Germany, not the Soviet Union into the alliance.', tag: 'Reasons for the Cold War' },
  { q: 'In the context of the Second World War, what did Stalin mean when he demanded a "second front"?', options: ['A large-scale invasion of German-occupied Western Europe by Britain and the USA to draw German forces away from the east', 'A Soviet attack on Japan launched at the same time as the war in Europe', 'A joint plan to invade neutral Switzerland', 'An agreement to open new trade routes between the Allies'], correct: 0, explain: 'Stalin wanted Britain and the USA to attack Germany from the west to relieve the huge pressure on Soviet forces fighting Germany largely alone in the east.', misconception: 'Some confuse the "second front" with a Pacific campaign, but it specifically referred to a Western European invasion aimed at helping the Soviet Union.', tag: 'Reasons for the Cold War' },
  { q: 'Why did the delay in launching the second front until 1944 damage Stalin\'s trust in his allies?', options: ['He suspected Britain and the USA wanted Germany and the Soviet Union to wear each other down before the West got involved', 'He believed the Allies simply lacked enough soldiers to invade anywhere', 'He had never actually requested a second front and felt it was unnecessary', 'He thought the delay was a sign the Allies intended to surrender to Germany'], correct: 0, explain: 'Stalin came to believe the West was deliberately letting the Soviet Union bear the heaviest fighting so that both totalitarian states would be weakened.', misconception: 'A simpler explanation might be pure military unreadiness, and that was part of it, but Stalin\'s deeper concern was deliberate strategic calculation against Soviet interests.', tag: 'Reasons for the Cold War' },
  { q: 'Which of the following was agreed at the Tehran Conference of November 1943?', options: ['Britain and the USA would open a second front against Germany in Western Europe', 'Germany would be divided into four separate occupation zones', 'The atomic bomb would be used against Japan', 'Free multi-party elections would be held across Eastern Europe'], correct: 0, explain: 'Tehran was primarily a wartime strategy meeting, where the Allies agreed on opening a Western front and discussed Poland\'s future borders in general terms.', misconception: 'The four-zone division of Germany is often linked to Tehran, but that detailed territorial arrangement was actually worked out later, at Yalta and Potsdam.', tag: 'Reasons for the Cold War' },
  { q: 'At the Yalta Conference in February 1945, what did Stalin agree regarding the governments of liberated Eastern European states?', options: ['That free elections would be held so people could choose their own governments', 'That Soviet-appointed communist officials would run every liberated country without elections', 'That Britain and the USA would jointly govern Eastern Europe', 'That Eastern Europe would become fully independent of any great power influence immediately'], correct: 0, explain: 'Stalin formally agreed to free elections at Yalta, though he later broke this promise, which became a major source of post-war tension.', misconception: 'It is tempting to think Stalin openly agreed to install communism directly, but on paper he actually committed to democratic elections, which is precisely why his later actions caused such anger.', tag: 'Reasons for the Cold War' },
  { q: 'Which outcome was NOT actually settled at the Potsdam Conference of 1945?', options: ['The division of Germany into four occupation zones', 'The principle that each occupying power would take reparations mainly from its own zone', 'A clear, agreed plan for how Eastern European countries under Soviet occupation would be governed', 'Continuing to run the German economy as a single unit despite the zones'], correct: 2, explain: 'Truman and Stalin could not reach agreement on the future of Eastern Europe at Potsdam, which remained a major unresolved and worsening dispute.', misconception: 'Because Potsdam settled many practical issues about Germany, it is easy to assume everything was resolved there, but the government of Eastern Europe was left dangerously unclear.', tag: 'Reasons for the Cold War' },
  { q: 'How did Truman\'s approach to Stalin differ from that of Roosevelt?', options: ['Truman was far more suspicious of Soviet motives and took a tougher negotiating line than Roosevelt had done', 'Truman trusted Stalin completely, unlike the more cautious Roosevelt', 'Both presidents held identical, friendly views of Stalin throughout the war', 'Truman was willing to hand over control of Western Europe to the Soviet Union'], correct: 0, explain: 'Truman, unlike Roosevelt, believed the Soviets aimed to spread communism worldwide and adopted a firmer, more confrontational style at Potsdam.', misconception: 'Some assume all US leaders treated Stalin the same way, but Roosevelt had been noticeably more conciliatory in hopes of securing long-term Soviet cooperation.', tag: 'Reasons for the Cold War' },
  { q: 'What effect did the development of the atomic bomb have on relations between the USA and the Soviet Union after 1945?', options: ['It deepened Stalin\'s determination to build a secure buffer zone in Eastern Europe rather than making him more cooperative', 'It immediately convinced Stalin to allow genuinely free elections across Eastern Europe', 'It caused the USA to share its nuclear technology freely with the Soviet Union', 'It had almost no impact, since the Soviet Union already had its own atomic weapons by 1945'], correct: 0, explain: 'Rather than making Stalin more willing to compromise, American nuclear power made him more determined than ever to protect Soviet security through control of Eastern Europe.', misconception: 'A common assumption is that a monopoly on such a devastating weapon must have forced concessions from Stalin, but instead it hardened his resolve.', tag: 'Reasons for the Cold War' },
  { q: 'Put these events into the correct chronological order: 1) Yalta Conference, 2) Tehran Conference, 3) Bombing of Hiroshima, 4) Potsdam Conference.', options: ['2, 1, 4, 3', '1, 2, 4, 3', '2, 4, 1, 3', '3, 2, 1, 4'], correct: 0, explain: 'Tehran took place in November 1943, Yalta in February 1945, Potsdam in July-August 1945, and Hiroshima was bombed in August 1945, shortly after Potsdam began.', misconception: 'It is easy to mix up Yalta and Potsdam since both dealt with post-war Europe, but Yalta came first, before Germany had even surrendered.', tag: 'Reasons for the Cold War' },

  // ===== Early developments, 1945-49 =====
  { q: 'What method did the Soviet Union generally use to install communist governments across Eastern Europe after 1945?', options: ['Manipulated or rigged elections combined with intimidation of opposition politicians', 'Genuinely free and fair elections that communist parties always happened to win', 'Formal annexation votes supervised by the United Nations', 'Public referendums organised jointly with Western observers'], correct: 0, explain: 'Although elections were often held, they were manipulated through threats, vote-rigging and the exclusion of real opposition, ensuring communist victories.', misconception: 'Because elections did technically take place in many countries, it can look as though the process was democratic, but in reality the outcomes were controlled in advance.', tag: 'Early developments, 1945-49' },
  { q: 'How did communists take power in Czechoslovakia in February 1948?', options: ['A Soviet-backed coup removed the non-communist coalition government and installed Klement Gottwald', 'A free multi-party election produced a clear communist majority', 'The Czech monarchy was restored under Soviet protection', 'NATO forces occupied Prague and set up the new government'], correct: 0, explain: 'Communists, with Soviet backing, forced out President Benes\'s coalition government in a coup, ending Czechoslovakia\'s post-war experiment with democracy.', misconception: 'Some assume every Eastern European communist government arrived by gradual election, but in Czechoslovakia the change came through a sudden, forceful takeover.', tag: 'Early developments, 1945-49' },
  { q: 'What was the central warning in George Kennan\'s "Long Telegram" of 1946?', options: ['That the Soviet Union was ideologically committed to opposing the West but could be managed through firm resistance rather than war', 'That the Soviet Union posed no real threat and full cooperation should continue', 'That the USA should declare war on the Soviet Union immediately', 'That the Soviet Union intended to abandon communism within a decade'], correct: 0, explain: 'Kennan\'s analysis argued that a policy of firm containment, rather than military conflict, was the best way to limit Soviet expansion, shaping later US policy.', misconception: 'Given how hostile the telegram sounded, some assume it recommended war, but Kennan actually argued the problem could be managed without direct conflict.', tag: 'Early developments, 1945-49' },
  { q: 'What was the main significance of Winston Churchill\'s 1946 "Iron Curtain" speech?', options: ['It publicly signalled to the world that a major Western figure now viewed Soviet expansion as a serious threat, worsening East-West relations', 'It persuaded Stalin to withdraw Soviet troops from Eastern Europe', 'It marked the official beginning of the Marshall Plan', 'It was a formal treaty ending the wartime Grand Alliance'], correct: 0, explain: 'By describing an "iron curtain" dividing Europe, Churchill gave a memorable public voice to Western fears, and Stalin saw it as reflecting official American thinking.', misconception: 'Because it sounds diplomatic, people sometimes think the speech was a formal government announcement, but it was actually a speech by a private citizen, since Churchill was no longer prime minister.', tag: 'Early developments, 1945-49' },
  { q: 'What immediately prompted President Truman to announce the Truman Doctrine in March 1947?', options: ['Britain\'s announcement that it could no longer afford to support the Greek government against communist rebels', 'The Soviet blockade of Berlin', 'The outbreak of the Korean War', 'The Soviet Union\'s first successful atomic bomb test'], correct: 0, explain: 'Once Britain said it could no longer fund Greece\'s fight against communist guerrillas, Truman stepped in with American aid and a wider statement of policy.', misconception: 'Because the Truman Doctrine is closely linked with Cold War containment generally, it is easy to assume it was triggered by Berlin, but that crisis came a year later.', tag: 'Early developments, 1945-49' },
  { q: 'What was the core idea behind the Truman Doctrine?', options: ['The USA would provide economic and military support to countries resisting a communist takeover', 'The USA would return to isolationism and avoid involvement in European affairs', 'The USA would only help countries that had already become fully communist', 'The USA would share its nuclear weapons with any allied government that asked'], correct: 0, explain: 'Truman committed the USA to actively supporting nations threatened by communism, ending its previous isolationist tradition.', misconception: 'Some might think this policy simply continued pre-war American isolationism, but it actually marked a dramatic reversal towards active global involvement.', tag: 'Early developments, 1945-49' },
  { q: 'What was the main purpose of the Marshall Plan?', options: ['To provide American economic aid to rebuild Western European economies and reduce the appeal of communism', 'To fund the reconstruction of Soviet industry damaged during the war', 'To pay for NATO\'s military budget once the alliance was formed', 'To cover the reparations Germany owed to the Soviet Union'], correct: 0, explain: 'By helping rebuild shattered economies, the USA hoped to remove the poverty and desperation that made communism attractive to struggling Europeans.', misconception: 'Some assume Marshall Aid was purely humanitarian with no political motive, but reducing communism\'s appeal was a central strategic aim alongside genuine relief.', tag: 'Early developments, 1945-49' },
  { q: 'Why did Stalin refuse to let Eastern European states accept Marshall Aid?', options: ['He feared the financial conditions attached would increase American influence and weaken Soviet control over the region', 'The USA never actually offered Marshall Aid to any Eastern European country', 'He believed Eastern European economies were already too strong to need assistance', 'Accepting the aid would have required abandoning the Warsaw Pact immediately'], correct: 0, explain: 'Aid came with requirements for financial review that Stalin knew would expose Soviet-controlled economies to Western scrutiny and influence, so he blocked participation.', misconception: 'It might seem Stalin simply disliked American money on principle, but the real concern was the political and economic conditions attached to receiving it.', tag: 'Early developments, 1945-49' },
  { q: 'What was Cominform, established in 1947?', options: ['An organisation of European Communist parties that Stalin used to coordinate and control the satellite states', 'An economic aid programme designed to rival the Marshall Plan', 'A joint military command uniting the armies of Eastern Europe', 'A United Nations agency responsible for European reconstruction'], correct: 0, explain: 'Cominform linked Communist parties across Europe under Soviet direction, helping Stalin ensure loyalty and reject Western influence such as the Marshall Plan.', misconception: 'Cominform is often confused with Comecon, but Cominform was primarily a political and propaganda body, while the economic response came two years later.', tag: 'Early developments, 1945-49' },
  { q: 'What was the purpose of Comecon, set up in 1949?', options: ['A Soviet-led economic organisation intended to bind the Eastern Bloc together and counter the Marshall Plan', 'A political body created purely to spread anti-Western propaganda', 'A military command structure for coordinating Warsaw Pact forces', 'An agency for negotiating future nuclear arms limitation treaties'], correct: 0, explain: 'Comecon offered Eastern Bloc states an alternative to Marshall Aid, tying their economies to the Soviet Union and discouraging trade with the West.', misconception: 'Because it was announced not long after Cominform, people sometimes merge the two, but Comecon\'s focus was specifically economic cooperation rather than political control.', tag: 'Early developments, 1945-49' },
  { q: 'Why did the Western occupation zones of Germany merge into "Bizonia" and then "Trizonia" in 1947-48?', options: ['Cooperation with the Soviets over administering Germany had broken down, so Britain, the USA and France combined their zones', 'Stalin requested the merger to simplify reparations payments', 'The United Nations formally ordered the Western zones to combine', 'This merger had already been agreed as part of the original Potsdam settlement'], correct: 0, explain: 'After four-power talks collapsed in late 1947, the Western Allies began running their zones jointly, laying the groundwork for a separate West German state.', misconception: 'It might seem this was always the plan from Potsdam, but the original intention had been to administer Germany as a whole with the Soviet Union, not to split it early.', tag: 'Early developments, 1945-49' },
  { q: 'What action by the Western powers directly triggered the start of the Berlin Blockade in June 1948?', options: ['The introduction of a new currency, the Deutschmark, in the Western zones', 'The Soviet Union testing its first atomic bomb', 'West Germany formally joining NATO', 'The completion of the Berlin Wall'], correct: 0, explain: 'Introducing the Deutschmark created a separate economic unit in the West and angered Stalin, who responded by cutting off land access to Berlin.', misconception: 'It is easy to think the blockade was simply a spontaneous power grab, but it was a direct reaction to a specific Western economic decision.', tag: 'Early developments, 1945-49' },
  { q: 'How did the Western Allies respond to the Berlin Blockade without risking a direct military clash?', options: ['They flew food, fuel and other supplies into West Berlin using a sustained airlift along agreed air corridors', 'They sent tanks to force open the closed land routes into Berlin', 'They abandoned West Berlin and evacuated all Western personnel', 'They launched a full-scale invasion of the Soviet zone of Germany'], correct: 0, explain: 'The Berlin Airlift supplied the city entirely by air for almost a year, avoiding a ground confrontation while defeating the purpose of the blockade.', misconception: 'A tempting but wrong assumption is that the West used force to reopen the roads, when in fact the airlift was specifically chosen to avoid provoking war.', tag: 'Early developments, 1945-49' },
  { q: 'Which of the following was a direct result of the Berlin Crisis of 1948-49?', options: ['The Western powers formed NATO, a formal military alliance for collective defence', 'The Soviet Union withdrew entirely from Eastern Europe', 'Germany was reunited as a single neutral country', 'The United Nations was founded to prevent future crises'], correct: 0, explain: 'Alarmed by Soviet actions in Berlin and the takeover of Czechoslovakia, Western states formed NATO in 1949 to guarantee mutual defence against future threats.', misconception: 'The United Nations is sometimes wrongly linked to this crisis, but it had already been founded in 1945, well before the Berlin Blockade began.', tag: 'Early developments, 1945-49' },
  { q: 'How was Germany formally split as a result of the growing division between East and West after the blockade?', options: ['The Western zones became the Federal Republic of Germany, while the Soviet zone became the German Democratic Republic', 'Germany remained one unified country under joint four-power control', 'Berlin became a fully independent state separate from both German governments', 'Austria and Germany merged to form a single new nation'], correct: 0, explain: 'In 1949 the Western zones combined to form the FRG under Adenauer, and the Soviet Union responded by establishing the GDR in its own zone.', misconception: 'Some might think reunification was attempted immediately after the blockade, but instead the crisis actually confirmed and formalised the permanent split into two states.', tag: 'Early developments, 1945-49' },

  // ===== The Cold War in the 1950s =====
  { q: 'Why was Korea divided along the 38th parallel after 1945?', options: ['Soviet forces occupied the north and American forces occupied the south following Japan\'s defeat', 'The United Nations drew the line as a permanent international border', 'China and Japan agreed jointly to split the country', 'Korea itself voted in a referendum to divide into two states'], correct: 0, explain: 'As Japanese control of Korea ended, Soviet and American troops occupied opposite halves of the country, creating a division that hardened into two rival states.', misconception: 'It is easy to assume the division was a Korean decision, but it actually resulted from the practicalities of Soviet and US military occupation at the war\'s end.', tag: 'The Cold War in the 1950s' },
  { q: 'What directly triggered the outbreak of the Korean War in June 1950?', options: ['North Korean forces invaded South Korea', 'South Korean forces invaded North Korea first', 'Chinese troops crossed the border into South Korea', 'The Soviet Union launched a direct attack on Japan'], correct: 0, explain: 'North Korea\'s invasion of the South prompted the United Nations to intervene militarily in support of South Korea.', misconception: 'Because China later entered the war, some assume China started it, but the initial invasion came from North Korea, not from Chinese forces.', tag: 'The Cold War in the 1950s' },
  { q: 'Why was the United Nations Security Council able to authorise military action to defend South Korea in 1950?', options: ['The Soviet Union was boycotting the Security Council at the time, so it could not use its veto', 'China voted in favour of sending United Nations troops', 'North Korea itself requested United Nations intervention', 'The General Assembly overruled the Security Council\'s usual veto powers'], correct: 0, explain: 'The Soviet delegate was absent in protest over China\'s UN seat, which meant the Soviet Union missed the chance to veto the resolution supporting South Korea.', misconception: 'It might seem unusual that the Soviet Union simply allowed this to happen, but its absence from the Council, not any change of policy, made the vote possible.', tag: 'The Cold War in the 1950s' },
  { q: 'What happened when UN forces under General MacArthur advanced close to the Chinese border during the Korean War?', options: ['Chinese troops entered the war and pushed the UN forces back south', 'China immediately surrendered rather than risk conflict', 'The Soviet Union deployed nuclear weapons to defend North Korea', 'Japan re-entered the war on the side of the United Nations'], correct: 0, explain: 'Mao Zedong sent hundreds of thousands of Chinese troops into the war to prevent a communist defeat near his own border, driving UN forces back.', misconception: 'Some assume the war ended quickly once UN forces advanced into the north, but Chinese intervention reversed those gains and prolonged the conflict for years.', tag: 'The Cold War in the 1950s' },
  { q: 'Which of the following was a genuine effect of the Korean War on superpower relations?', options: ['The USA sharply increased its defence spending and encouraged allies to form SEATO to contain communism in Asia', 'The USA and the Soviet Union signed a treaty formally ending the Cold War', 'The Warsaw Pact was created immediately in 1950 as a direct response', 'The Soviet Union withdrew all support for North Korea permanently after the war'], correct: 0, explain: 'The war deepened American commitment to containing communism globally, leading to a much larger defence budget and new regional alliances such as SEATO.', misconception: 'The Warsaw Pact is often linked to Korea because both increased Cold War tension, but it was actually formed later, in 1955, in response to West Germany joining NATO.', tag: 'The Cold War in the 1950s' },
  { q: 'Why was the Warsaw Pact formed in 1955?', options: ['As a Soviet-led military alliance created in direct response to West Germany joining NATO', 'As an economic alliance intended to compete with the Marshall Plan', 'As a direct reaction to the Cuban Missile Crisis', 'To formally bring the Korean War to an end'], correct: 0, explain: 'West Germany\'s admission to NATO alarmed Stalin\'s successors, who responded within days by uniting Eastern Bloc states in their own defensive alliance.', misconception: 'Because the Warsaw Pact is often discussed alongside Comecon, people sometimes assume it was primarily economic, but it was a military alliance under Soviet command.', tag: 'The Cold War in the 1950s' },
  { q: 'What did Khrushchev mean by his policy of "peaceful co-existence"?', options: ['That the superpowers could avoid direct war and compete through other means while accepting each other\'s survival', 'That capitalism and communism would formally merge into one economic system', 'That both sides would fully disarm their militaries by 1960', 'That the Soviet Union would abandon all control over Eastern Europe'], correct: 0, explain: 'Khrushchev argued that communism would eventually triumph without the need for war, so open military confrontation with the West should be avoided.', misconception: 'It might sound like peaceful co-existence meant genuine friendship, but Khrushchev still expected communism to ultimately defeat capitalism through other means.', tag: 'The Cold War in the 1950s' },
  { q: 'How did the nuclear arms race develop during the 1950s?', options: ['Both superpowers moved from atomic bombs to far more powerful hydrogen bombs and then to intercontinental ballistic missiles', 'Both sides agreed to freeze all nuclear weapons development after 1949', 'Only the USA managed to develop a hydrogen bomb during this decade', 'The Soviet Union abandoned its nuclear weapons programme after Stalin\'s death'], correct: 0, explain: 'Through the decade each side matched the other\'s advances, moving quickly from atomic to hydrogen bombs and then to missiles capable of intercontinental delivery.', misconception: 'Stalin\'s death in 1953 might suggest a pause in weapons development, but in fact the arms race accelerated rapidly throughout the 1950s regardless of Soviet leadership changes.', tag: 'The Cold War in the 1950s' },
  { q: 'What was life like in communist Hungary under Matyas Rakosi before 1956?', options: ['Harsh and repressive, with mass imprisonments and executions used to crush opposition', 'Increasingly democratic, with genuinely free elections held every year', 'Prosperous, thanks to generous Marshall Plan assistance', 'Largely free of Soviet influence over government and army'], correct: 0, explain: 'Rakosi ran a tightly controlled, Stalinist-style regime, imprisoning and executing tens of thousands of people suspected of opposing communist rule.', misconception: 'Hungary never received Marshall Aid since it was in the Soviet sphere, so any suggestion of Western-funded prosperity under Rakosi is incorrect.', tag: 'The Cold War in the 1950s' },
  { q: 'What was "de-Stalinisation" and how did it help spark unrest across Eastern Europe in 1956?', options: ['Khrushchev\'s public criticism of Stalin\'s brutal methods raised hopes that Soviet control over satellite states might be relaxed', 'A policy of erecting new statues of Stalin throughout Eastern Europe', 'An agreement to return the whole of Eastern Europe to capitalism', 'A plan to merge every Warsaw Pact army into a single Soviet command'], correct: 0, explain: 'Khrushchev\'s 1956 speech attacking Stalin\'s crimes encouraged reformers in Poland and Hungary to believe that Moscow might now tolerate more independence.', misconception: 'It could seem that criticising Stalin meant reform was officially welcomed everywhere, but Khrushchev still moved to crush uprisings once they threatened Soviet control.', tag: 'The Cold War in the 1950s' },
  { q: 'What reforms did Imre Nagy propose during the Hungarian Uprising of 1956?', options: ['That Hungary would leave the Warsaw Pact, become neutral, and share power with non-communist groups', 'That Hungary would formally request to join NATO and adopt capitalism immediately', 'That Hungary would ask for permanent Soviet troops to guarantee order', 'That Hungary would merge with Austria to escape communist rule entirely'], correct: 0, explain: 'Nagy\'s proposals to leave the Warsaw Pact, declare neutrality and allow power-sharing directly challenged Soviet control, making them unacceptable to Khrushchev.', misconception: 'Nagy remained a communist and did not propose joining NATO or adopting capitalism outright; his aim was a more independent, reformed communist state.', tag: 'The Cold War in the 1950s' },
  { q: 'Why did Khrushchev order the Soviet invasion of Hungary in November 1956?', options: ['He feared that if Hungary left the Warsaw Pact, other satellite states might follow, undermining Soviet security', 'Nagy had personally requested Soviet military help to restore order', 'The USA had already sent troops into Hungary to support the rebels', 'Hungary had launched a military attack on Soviet territory'], correct: 0, explain: 'Khrushchev worried that allowing Hungary to break away would encourage similar moves elsewhere, threatening the whole system of Soviet-controlled satellite states.', misconception: 'It is not true that Nagy asked for Soviet intervention; on the contrary, he appealed to the West for help against the invading Soviet forces.', tag: 'The Cold War in the 1950s' },
  { q: 'How did the West respond to the Soviet invasion of Hungary in 1956?', options: ['It offered strong verbal condemnation and accepted refugees but gave no military support to the rebels', 'It sent NATO combat troops to fight alongside the Hungarian rebels', 'It threatened an immediate nuclear strike against Moscow', 'It formally recognised the invasion as a legitimate internal Soviet matter'], correct: 0, explain: 'Despite sympathy and radio broadcasts encouraging resistance, the USA judged that military intervention in an existing Soviet satellite risked provoking a far wider war.', misconception: 'Because the USA had encouraged resistance to communism through radio broadcasts, some assume it also promised military help, but in practice no such support was given.', tag: 'The Cold War in the 1950s' },

  // ===== Berlin, Cuba and Czechoslovakia =====
  { q: 'Why did so many East Germans move to West Germany during the 1950s?', options: ['West Germany offered a far higher standard of living, and crossing into West Berlin was an easy route out', 'East Germany actively encouraged emigration to reduce overcrowding', 'West Germany operated a UN-backed resettlement scheme requiring East Germans to relocate', 'The Berlin Wall made travel to the West compulsory for skilled workers'], correct: 0, explain: 'With Marshall Aid boosting the West German economy while East Germany struggled, many East Germans, especially skilled workers, chose to leave through the open border in Berlin.', misconception: 'The Berlin Wall did not yet exist during most of this period and, once built, was designed to stop rather than force emigration.', tag: 'Berlin, Cuba and Czechoslovakia' },
  { q: 'What did Khrushchev demand in his Berlin Ultimatum of November 1958?', options: ['That Western troops withdraw from Berlin and that the city become a free, demilitarised city', 'That the USA hand over the whole of West Germany to Soviet administration', 'That NATO be dissolved immediately', 'That the Marshall Plan be extended to cover Eastern Europe'], correct: 0, explain: 'Khrushchev wanted Western forces out of Berlin and the city\'s status changed, hoping this would cut off the escape route being used by East German refugees.', misconception: 'The ultimatum targeted Berlin\'s status specifically, not a wholesale handover of West Germany, which is a much broader and inaccurate claim.', tag: 'Berlin, Cuba and Czechoslovakia' },
  { q: 'What happened at the Paris Summit of May 1960, and what effect did it have on superpower relations?', options: ['The Soviet Union revealed it had shot down an American U-2 spy plane, and the resulting row wrecked the summit and the improved atmosphere built up earlier', 'Khrushchev and Eisenhower signed a full disarmament treaty', 'The Berlin Wall was agreed as a joint solution to the refugee crisis', 'Kennedy and Khrushchev met for the first time and resolved the Berlin dispute'], correct: 0, explain: 'The shooting down of Gary Powers\'s U-2 aircraft, and Eisenhower\'s refusal to apologise, caused Khrushchev to walk out, collapsing the talks and damaging the recent thaw.', misconception: 'Kennedy was not yet president in 1960, so any answer describing a Kennedy-Khrushchev meeting at this summit confuses this event with the later Vienna Summit.', tag: 'Berlin, Cuba and Czechoslovakia' },
  { q: 'Why did Khrushchev decide to close the border and order the building of the Berlin Wall in August 1961?', options: ['To stop the continuing flow of East German refugees, especially skilled workers, into West Berlin', 'To prevent NATO forces from entering East Germany', 'To open a new official trade route between East and West Germany', 'As an immediate response to the Cuban Missile Crisis'], correct: 0, explain: 'With refugee numbers surging in 1961, Khrushchev authorised sealing the border to stop East Germany losing more of its skilled workforce to the West.', misconception: 'The Cuban Missile Crisis happened over a year later, in October 1962, so it cannot explain a decision made in August 1961.', tag: 'Berlin, Cuba and Czechoslovakia' },
  { q: 'What was one major effect of the Berlin Wall on relations between East and West Germany?', options: ['It ended the refugee crisis but caused outrage in the West and separated many families for years', 'It led immediately to the reunification of Germany', 'It caused East Germany to abandon communism soon afterwards', 'It resulted in West Germany leaving NATO in protest'], correct: 0, explain: 'While it solved East Germany\'s refugee problem, the Wall was condemned in the West and caused lasting hardship by dividing families and communities.', misconception: 'It might seem such a dramatic and unpopular action would trigger reunification talks, but instead it entrenched the division of Germany for decades.', tag: 'Berlin, Cuba and Czechoslovakia' },
  { q: 'How did the building of the Berlin Wall affect relations between the two superpowers?', options: ['It confirmed Germany would stay divided and that the Soviet Union would not risk war to reunite it under Western control, while making West Berlin a symbol of Western resistance', 'It led directly to open military conflict between NATO and the Warsaw Pact', 'It caused the USA to recognise East Germany as the only legitimate German state', 'It resulted in the Soviet Union abandoning its control over Eastern Europe'], correct: 0, explain: 'Although provocative, the Wall was accepted by both sides as a way of avoiding war over Berlin, and Kennedy later used West Berlin as a powerful symbol of freedom.', misconception: 'Despite the tension it caused, the Wall did not spark direct fighting between the superpowers; both sides in practice preferred to avoid escalation over Berlin.', tag: 'Berlin, Cuba and Czechoslovakia' },
  { q: 'What was the main aim of the failed Bay of Pigs invasion in April 1961?', options: ['To use CIA-trained Cuban exiles to overthrow Fidel Castro\'s government', 'To establish a permanent Soviet naval base on Cuban territory', 'To negotiate a new trade agreement between Cuba and the USA', 'To rescue American hostages allegedly being held in Havana'], correct: 0, explain: 'The CIA organised and trained Cuban exiles to invade Cuba and remove Castro, hoping the operation would look like an internal uprising rather than US action.', misconception: 'The invasion was not a hostage rescue mission; it was a covert attempt at regime change disguised as a Cuban-led rebellion.', tag: 'Berlin, Cuba and Czechoslovakia' },
  { q: 'Which of the following was a key reason the Bay of Pigs invasion failed?', options: ['Castro\'s government had learned of the plan in advance and had a large force ready to defend the island', 'Soviet troops arrived to defend Cuba directly against the invaders', 'The United Nations intervened militarily to stop the invasion', 'President Kennedy cancelled the operation at the very last moment'], correct: 0, explain: 'With advance warning and thousands of soldiers ready, Castro\'s forces easily overwhelmed the far smaller force of poorly supported Cuban exiles.', misconception: 'Kennedy did not cancel the operation; he allowed it to proceed but withheld direct US air and ground support, which was actually part of why it failed.', tag: 'Berlin, Cuba and Czechoslovakia' },
  { q: 'What discovery on 14 October 1962 triggered the Cuban Missile Crisis?', options: ['American U-2 spy plane photographs revealed Soviet missile launch sites under construction in Cuba', 'Cuba publicly announced it had developed its own nuclear weapons', 'The Soviet Union openly declared it had placed missiles in Cuba', 'Castro requested that the USA remove its missiles from Turkey'], correct: 0, explain: 'Aerial reconnaissance photographs gave the Americans clear evidence of Soviet nuclear missile sites being built in Cuba, sparking the crisis.', misconception: 'The Soviet Union had not announced the missiles openly; the whole crisis began precisely because the build-up was discovered secretly through spy plane photography.', tag: 'Berlin, Cuba and Czechoslovakia' },
  { q: 'How did President Kennedy initially respond to the discovery of Soviet missiles in Cuba?', options: ['He imposed a naval blockade, described as a "quarantine", around Cuba rather than launching an immediate attack', 'He ordered an immediate full-scale invasion of Cuba', 'He decided to ignore the missiles as posing no serious threat', 'He asked NATO to declare war on the Soviet Union at once'], correct: 0, explain: 'After days of debate in ExComm, Kennedy chose the less aggressive option of a naval blockade to stop further Soviet shipments while avoiding immediate war.', misconception: 'Some advisers did push for an air strike or invasion, but Kennedy deliberately chose the blockade as a firm yet less escalatory response.', tag: 'Berlin, Cuba and Czechoslovakia' },
  { q: 'Why did the Cuban Missile Crisis end without war breaking out?', options: ['Khrushchev agreed to remove the missiles from Cuba in exchange for a US pledge not to invade, plus a secret deal to remove US missiles from Turkey', 'The Soviet navy defeated the American blockade in a direct clash', 'The United Nations forced both superpowers to disarm completely', 'China stepped in to mediate a settlement between the two sides'], correct: 0, explain: 'A public deal over Cuba, combined with a secret agreement about Turkish missiles arranged through Robert Kennedy, allowed both leaders to back down without appearing to lose face.', misconception: 'It might seem the crisis ended through a simple, one-sided Soviet climbdown, but a secret concession over Turkey was also part of how the standoff was actually resolved.', tag: 'Berlin, Cuba and Czechoslovakia' },
  { q: 'What sparked the reform programme known as the "Prague Spring" in Czechoslovakia in 1968?', options: ['Alexander Dubcek introduced reforms such as relaxed censorship and greater personal freedoms, describing his approach as "socialism with a human face"', 'A referendum in which Czechs voted to leave the Warsaw Pact outright', 'A Western-backed coup overthrowing the existing communist government', 'Direct Soviet orders instructing all Eastern European states to liberalise simultaneously'], correct: 0, explain: 'Dubcek, while remaining a committed communist, loosened censorship and increased personal and political freedoms, hoping to make communist rule more popular.', misconception: 'Dubcek never proposed leaving the Warsaw Pact or abandoning communism; his reforms were meant to improve life within the existing communist system, not replace it.', tag: 'Berlin, Cuba and Czechoslovakia' },
  { q: 'Why did the Soviet Union invade Czechoslovakia in August 1968?', options: ['Brezhnev feared Dubcek\'s reforms could spread to other Warsaw Pact states and weaken overall Soviet control', 'Czechoslovakia had formally declared war on the Soviet Union', 'Dubcek had personally requested Soviet troops to help fight internal rebels', 'NATO forces had already crossed into Czechoslovak territory'], correct: 0, explain: 'Concerned that reform in one Warsaw Pact country might inspire similar demands elsewhere, Brezhnev sent troops to end the Prague Spring and restore firm control.', misconception: 'Dubcek did not invite Soviet intervention; the invasion was imposed on Czechoslovakia against the wishes of its reforming government.', tag: 'Berlin, Cuba and Czechoslovakia' },
  { q: 'What did the Brezhnev Doctrine, set out in 1968, declare?', options: ['That the Soviet Union had the right to intervene in any communist country if it judged socialism there to be under threat', 'That all Warsaw Pact members were free to leave the alliance whenever they wished', 'That the Soviet Union would no longer interfere in the internal affairs of satellite states', 'That communist countries should begin adopting free-market economic policies'], correct: 0, explain: 'The doctrine justified the invasion of Czechoslovakia by claiming the Soviet Union could act against any communist state seen as endangering the wider socialist bloc.', misconception: 'The doctrine actually did the opposite of promising non-interference; it explicitly justified future Soviet intervention wherever communist rule seemed threatened.', tag: 'Berlin, Cuba and Czechoslovakia' },

  // ===== The Thaw and Detente =====
  { q: 'Why was the direct "hotline" between Washington and Moscow set up in 1963?', options: ['To allow rapid, direct communication between the two governments and reduce the risk of war caused by misunderstanding, following the Cuban Missile Crisis', 'To let the two leaders negotiate informal trade agreements', 'To coordinate joint US-Soviet space missions', 'To replace the United Nations Security Council as the main forum for crisis talks'], correct: 0, explain: 'The near-disaster of the Cuban Missile Crisis showed both sides the danger of slow or unclear communication, so a direct link was created to prevent future accidents.', misconception: 'The hotline was not primarily about trade or space cooperation; its purpose was specifically crisis communication to avoid an accidental nuclear war.', tag: 'The Thaw and Detente' },
  { q: 'What did the Limited Test Ban Treaty of 1963 achieve?', options: ['It banned nuclear weapons tests in the atmosphere, underwater and in space, reducing radioactive contamination', 'It banned all nuclear weapons possession worldwide', 'It brought a complete end to the nuclear arms race', 'It applied only to underground nuclear testing, which it made compulsory'], correct: 0, explain: 'The treaty stopped nuclear tests that spread radioactive fallout beyond a country\'s own borders, addressing growing environmental and health concerns.', misconception: 'The treaty did not ban nuclear weapons themselves or underground testing; it specifically targeted tests that released fallout into the wider environment.', tag: 'The Thaw and Detente' },
  { q: 'What was the significance of the Outer Space Treaty, signed in 1967?', options: ['It banned placing weapons of mass destruction in orbit or on celestial bodies and declared that space should be used for peaceful purposes', 'It gave the USA exclusive legal rights over the Moon', 'It formally ended the space race between the two superpowers', 'It permitted nuclear weapons testing in space as long as both sides agreed'], correct: 0, explain: 'The treaty extended arms control beyond Earth, preventing the militarisation of space and asserting that no nation could claim ownership of celestial bodies.', misconception: 'Competition in space exploration actually continued well beyond 1967; the treaty limited weapons in space rather than ending the broader space race itself.', tag: 'The Thaw and Detente' },
  { q: 'What was the aim of the Nuclear Non-Proliferation Treaty of 1968?', options: ['To stop nuclear weapon states from sharing nuclear technology with non-nuclear states, limiting the further spread of nuclear weapons', 'To force existing nuclear powers to disarm completely within a year', 'To allow any country that wished to freely develop nuclear weapons', 'To ban all civilian uses of nuclear power'], correct: 0, explain: 'By dividing states into nuclear and non-nuclear categories, the treaty aimed to prevent nuclear weapons technology from spreading to additional countries.', misconception: 'The treaty did not require immediate full disarmament by existing nuclear powers; it aimed at slowing the spread of weapons to new states rather than eliminating existing arsenals at once.', tag: 'The Thaw and Detente' },
  { q: 'Why did the USA want to pursue détente with the Soviet Union by the late 1960s and early 1970s?', options: ['The costly and unpopular war in Vietnam, along with serious social unrest at home, made reducing Cold War tension attractive', 'The USA had run out of nuclear weapons and needed Soviet supplies', 'Congress had formally banned any further American foreign policy', 'The Soviet Union had already disarmed unilaterally, removing any need for rivalry'], correct: 0, explain: 'Heavy spending and unpopularity from Vietnam, plus domestic problems such as urban unrest, made a less confrontational foreign policy politically appealing to the USA.', misconception: 'It is a common error to think détente arose only from Soviet weakness; American domestic and foreign policy pressures were just as important in driving the USA towards détente.', tag: 'The Thaw and Detente' },
  { q: 'Why did the Soviet Union want détente with the USA in the early 1970s?', options: ['Its economy was struggling to keep up with the cost of the arms race and it wanted access to Western technology', 'It had achieved clear military superiority and no longer needed to negotiate', 'It wanted to end all trade links with its own Eastern European allies', 'It had fully resolved its dispute with China by this point'], correct: 0, explain: 'High defence spending was straining the Soviet economy, and Soviet leaders hoped that improved relations might bring access to valuable Western technology.', misconception: 'The Soviet Union had not resolved its dispute with China; in fact, tension with China, including a serious border clash in 1969, was one of the reasons it sought better relations with the USA.', tag: 'The Thaw and Detente' },
  { q: 'How did the split between the Soviet Union and China help bring about superpower détente?', options: ['Fear that the USA might grow closer to China pushed the Soviet Union towards seeking better relations with Washington', 'China and the Soviet Union merged their governments into a single communist bloc', 'China invaded Soviet territory, forcing Moscow into a formal alliance with the USA', 'The Soviet Union asked China to conduct the SALT negotiations on its behalf'], correct: 0, explain: 'Worsening Sino-Soviet relations, including a 1969 border clash, worried Moscow that a US-China friendship could isolate the Soviet Union, encouraging it towards détente with Washington.', misconception: 'Rather than uniting, the Soviet Union and China grew further apart in this period, and it was precisely that growing rivalry which encouraged Moscow to look for better ties with the USA.', tag: 'The Thaw and Detente' },
  { q: 'What was "ping-pong diplomacy" and what did it help lead to?', options: ['Friendly contact between American and Chinese table tennis players helped open the way for high-level talks between the USA and China', 'A formal treaty establishing sporting cooperation between the two superpowers', 'An informal nickname used for the SALT arms negotiations', 'A Soviet propaganda campaign mocking American culture'], correct: 0, explain: 'A chance friendly exchange between US and Chinese players at a table tennis tournament led to an invitation for the American team to visit China, paving the way for Kissinger\'s visit.', misconception: 'It was not related to the SALT talks between the USA and the Soviet Union; ping-pong diplomacy specifically concerned the improving relationship between the USA and China.', tag: 'The Thaw and Detente' },
  { q: 'What was agreed in the Shanghai Communique, signed during Nixon\'s visit to China in February 1972?', options: ['The USA accepted the principle that there was "one China" and that Taiwan was part of it', 'China formally agreed to join NATO', 'The USA and China signed a full mutual defence treaty', 'China agreed to end all diplomatic contact with the Soviet Union'], correct: 0, explain: 'In the Communique, the USA acknowledged for the first time the "one China" position, an important step in normalising US-China relations.', misconception: 'The Communique was a diplomatic statement of principles, not a mutual defence treaty, and it did not require China to sever ties with Moscow.', tag: 'The Thaw and Detente' },
  { q: 'What was the main purpose of Nixon\'s 1972 visit to Moscow?', options: ['To sign the SALT 1 agreement limiting each side\'s strategic nuclear weapons', 'To negotiate the reunification of East and West Germany', 'To formally bring an end to the Korean War', 'To agree on removing the Berlin Wall'], correct: 0, explain: 'Nixon\'s Moscow visit produced the SALT 1 agreement, a landmark step in limiting the superpowers\' nuclear arsenals and a key symbol of détente.', misconception: 'The Berlin Wall remained standing for many years after 1972; its removal was not part of this visit\'s outcomes.', tag: 'The Thaw and Detente' },
  { q: 'Which of the following was a specific provision of the SALT 1 agreement signed in 1972?', options: ['It limited each side to two anti-ballistic missile sites and placed caps on the numbers of ICBMs and SLBMs', 'It banned all nuclear-powered submarines outright', 'It required both superpowers to destroy their entire nuclear arsenals within five years', 'It gave the USA an unlimited number of MIRV-equipped missiles with no restriction at all'], correct: 0, explain: 'SALT 1 restricted anti-ballistic missile defences to two sites per country and capped the number of intercontinental and submarine-launched ballistic missiles each side could hold.', misconception: 'SALT 1 limited missile numbers rather than eliminating nuclear arsenals altogether; total disarmament was never part of this particular treaty.', tag: 'The Thaw and Detente' },
  { q: 'What was a significant weakness of the SALT 1 agreement as a form of arms control?', options: ['It failed to limit MIRV technology, so missiles could still be fitted with multiple independently targeted warheads', 'It banned only conventional weapons, leaving nuclear weapons untouched', 'It was negotiated but never actually signed by either government', 'It left the Soviet Union with no ballistic missiles at all'], correct: 0, explain: 'Because SALT 1 did not address MIRVs, both sides could still multiply the destructive power of their existing missiles, undermining the treaty\'s limits.', misconception: 'SALT 1 was genuinely signed by both Nixon and Brezhnev in 1972; the treaty\'s weakness lay in what it failed to cover, not in whether it was ever formally agreed.', tag: 'The Thaw and Detente' },
  { q: 'How far had détente actually been achieved by 1972?', options: ['Real progress had been made, shown by SALT 1 and the visits to Beijing and Moscow, but deep rivalry and huge nuclear arsenals still remained', 'All Cold War tension had been permanently and completely resolved by this point', 'No progress at all had been made since the Cuban Missile Crisis', 'Both NATO and the Warsaw Pact had already been formally dissolved'], correct: 0, explain: 'By 1972 there were clear signs of improved relations and cooperation, but fundamental ideological rivalry and massive weapons stockpiles meant the Cold War was far from over.', misconception: 'It is tempting to see the dramatic 1972 visits as ending the Cold War outright, but underlying tensions and arms competition persisted for many more years afterward.', tag: 'The Thaw and Detente' }
];

  window.SBL_LESSONS.IGHISTSPWREV = {
    id: 'IGHISTSPWREV',
    title: 'Superpower Relations, 1943-72 — Full Topic Revision',
    syllabusFocus: 'The whole of Superpower Relations, 1943-72 — reasons for the Cold War, early developments 1945-49, the Cold War in the 1950s, the crises over Berlin, Cuba and Czechoslovakia, and the Thaw and moves towards Detente to 1972.',
    starterButtons: [
      { label: 'Overview of the whole topic', request: 'Give me a full overview of Superpower Relations, 1943-72, covering the reasons for the Cold War, developments to 1949, the 1950s, the three crises, and the move towards Detente.' },
      { label: 'Reasons for the Cold War', request: 'Explain the ideological differences between capitalism and communism, and how wartime tensions between the Allies led to the Cold War.' },
      { label: 'Early developments, 1945-49', request: 'Explain the Truman Doctrine, the Marshall Plan, and the causes and results of the Berlin Crisis.' },
      { label: 'The Cold War in the 1950s', request: 'Explain the impact of the Korean War and the reasons for, and effects of, the Soviet invasion of Hungary in 1956.' },
      { label: 'Berlin, Cuba and Czechoslovakia', request: 'Explain the causes and outcomes of the Berlin Wall, the Cuban Missile Crisis, and the Soviet invasion of Czechoslovakia.' },
      { label: 'The Thaw and Detente', request: 'Explain the reasons for Detente developing between the superpowers by 1972, including the SALT talks.' },
      { label: 'Help me plan an answer', request: 'Help me plan an answer explaining two effects of the Cuban Missile Crisis on superpower relations.' }
    ],
    checklist: SPW_CHECKLIST,
    _questionBank: SPW_QUESTION_BANK,
    quiz: SPW_QUESTION_BANK.slice(0, 20),
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Superpower Relations checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this topic — for example, "Explain the significance of the Marshall Plan." Answer each one before it moves on to the next; it will briefly correct you if you get one wrong.',
      unitTitle: SPW_UNIT_TITLE,
      checklistItems: SPW_CHECKLIST
    }
  };

})();
