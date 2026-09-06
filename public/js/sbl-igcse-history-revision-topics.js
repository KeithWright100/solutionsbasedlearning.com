/* ============================================================
   SBL IGCSE Revision — History Topic Revision Guides

   Mirrors sbl-igcse-business-revision-topics.js, but for Edexcel
   IGCSE History depth studies. Adds one synthetic "lesson" entry to
   window.SBL_LESSONS per topic, so the existing Teach Me Bot /
   Challenge Mode modal machinery in sbl-teach-bot.js can be reused
   as-is.

   IMPORTANT — Test My Knowledge is deliberately NOT wired up for any
   topic below. Per an explicit instruction from SBL: quiz content for
   History must be written ONLY from the specific textbook covering
   that topic, never from general knowledge. No question bank exists
   yet for these three topics, so no `.quiz` / `._questionBank` field
   is set, and the topic pages show "Test My Knowledge" as a locked,
   coming-soon mode. Add a `._questionBank` array here (same shape as
   the Business file) once source material for a topic is confirmed,
   then wire the button up to sblStartIgcseTopicQuiz.

   Every checklist item below is copied verbatim from SBL's own
   "I can..." revision-checklist documents (her original teaching
   material) — not sourced from, or checked against, any textbook.

   Load order on an IGCSE History revision topic page:
     <script src="/js/sbl-igcse-history-revision-topics.js"></script>
     <script src="/js/sbl-teach-bot.js"></script>
   ============================================================ */
(function () {

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

})();
