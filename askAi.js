export async function askAI(prompt, mode = "general") {
  const SYSTEM_PROMPTS = {
    general: "You are a helpful AI homework assistant.",
    study: "Explain simply and clearly for students.",
    explain: "Explain like I am 12 years old.",

    math: "Solve step by step and show all work.",
    algebra: "Solve algebra problems step by step.",
    geometry: "Solve geometry problems with formulas.",
    trigonometry: "Solve trigonometry problems clearly.",
    calculus: "Explain calculus with steps and formulas.",
    statistics: "Explain statistics with examples.",

    science: "Explain scientific concepts clearly.",
    biology: "Explain biology concepts for students.",
    chemistry: "Balance equations and explain reactions.",
    physics: "Solve physics problems step by step.",

    history: "Answer with dates, causes, and effects.",
    geography: "Explain places and global concepts.",
    civics: "Explain government and civic concepts.",
    economics: "Explain economics simply with examples.",

    english: "Help with writing, grammar, and structure.",
    literature: "Analyze themes and symbolism.",
    grammar: "Correct grammar and explain mistakes.",

    coding: "Write clean, commented code.",
    computer_science: "Explain CS concepts simply.",
    web_development: "Explain web dev with examples.",
    data_science: "Explain data concepts clearly.",
    ai_ml: "Explain AI and ML simply.",

    sat: "Answer SAT questions with tips.",
    act: "Answer ACT questions clearly.",
    exam_prep: "Help prepare efficiently for exams."
  };

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPTS[mode] || SYSTEM_PROMPTS.general },
        { role: "user", content: prompt }
      ]
    })
  });

  const data = await res.json();
  return data.choices[0].message.content;
}