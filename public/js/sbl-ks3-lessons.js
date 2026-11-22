/* SBL KS3 Geography: lesson content.
   Each lesson is one entry, keyed by the data-lesson-id on its page. Lessons use the same
   activity types as the IB lessons (tables, matching, sorting, quizzes, writing boxes,
   diagrams, games) and are organised by five banners: Connect, Demonstrate, Quizzes,
   Challenge and Reflect. There is no flip learning for KS3.
   KS3-TEMPLATE is the sample lesson shown at /ks3/geography/template-preview. */
window.SBL_FLIP_EXTRA = window.SBL_FLIP_EXTRA || {};
(function (L) {
  function lesson(cfg) { cfg.kind = "lesson"; cfg.inline = true; cfg.open = true; cfg.noBot = true; cfg.heading = cfg.heading || "Lesson"; cfg.intro = cfg.intro || ""; return [cfg]; }
  var B = {
    connect: { type: "banner", src: "/images/flip/banner-connect.jpg", alt: "Connect" },
    demonstrate: { type: "banner", src: "/images/flip/banner-demonstrate.jpg", alt: "Demonstrate" },
    quizzes: { type: "banner", src: "/images/flip/banner-quizzes.jpg", alt: "Quizzes" },
    challenge: { type: "banner", src: "/images/flip/banner-challenge.jpg", alt: "Challenge" },
    reflect: { type: "banner", src: "/images/flip/banner-reflect.jpg", alt: "Reflect" }
  };
  window.SBL_KS3_BANNERS = B;

  L["KS3-TEMPLATE"] = lesson({
    title: "Template: how a KS3 lesson is laid out",
    overview: {
      heading: "Template lesson",
      intention: "To show the five-part structure every KS3 lesson follows.",
      syllabus: ["Each KS3 lesson is organised into Connect, Demonstrate, Quizzes, Challenge and Reflect."],
      success: ["I can find the starter in Connect.", "I can complete the main activities in Demonstrate.", "I can check my learning in Quizzes, stretch myself in Challenge and look back in Reflect."]
    },
    parts: [
      B.connect,
      { type: "heading", text: "Starter", note: "A short activity to connect to what you already know." },
      { id: "c1", label: "", type: "text", prompt: "What do you already know about this topic? Write three things." },
      B.demonstrate,
      { type: "heading", text: "Activity 1", note: "The main teaching and learning activities go here: diagrams, maps, tables, matching and sorting tasks." },
      { id: "d1", label: "a)", type: "table", prompt: "Example table", cols: ["Key word", "Meaning"], rows: ["Physical geography", "Human geography", "Environmental geography"] },
      B.quizzes,
      { id: "q1", label: "", type: "mcq", noReason: true, prompt: "Quick quiz", items: [
        { q: "Which of these is an example of physical geography?", o: ["A city", "A volcano", "A farm", "A road"], a: 1 },
        { q: "Which of these is an example of human geography?", o: ["A river", "A desert", "Migration", "A glacier"], a: 2 }] },
      B.challenge,
      { id: "h1", label: "", type: "text", prompt: "Challenge question: a harder question that stretches your thinking." },
      B.reflect,
      { id: "r1", label: "", type: "text", prompt: "Exit ticket: what is one thing you learned today, and one question you still have?" }
    ]
  });
})(window.SBL_FLIP_EXTRA);
