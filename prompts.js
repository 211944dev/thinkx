const prompts = {
  general: (q, grade) =>
    `Answer clearly for a ${grade} student. Explain step by step:\n${q}`,

  math: (q, grade) =>
    `You are a math tutor. Solve step by step for a ${grade} student:\n${q}`,

  english: (q, grade) =>
    `You are an English tutor. Explain clearly for a ${grade} student:\n${q}`
};
prompts.science = (q, g) =>
  `Explain scientifically for a ${g} student:\n${q}`;

prompts.history = (q, g) =>
  `Explain historically with context for a ${g} student:\n${q}`;

prompts.physics = (q, g) =>
  `Solve and explain physics step by step for a ${g} student:\n${q}`;
