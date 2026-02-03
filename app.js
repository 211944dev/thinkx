const HF_TOKEN = "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";
const MODEL = "mistralai/Mistral-7B-Instruct-v0.2";

async function askAI() {
  const q = question.value.trim();
  const subject = document.getElementById("subject").value;
  const grade = document.getElementById("grade").value;
  const responseBox = document.getElementById("response");

  if (!q) {
    responseBox.innerHTML = "Please enter a question.";
    return;
  }

  responseBox.innerHTML = "Thinking…";

  const prompt = prompts[subject](q, grade);

  const res = await fetch(
    `https://api-inference.huggingface.co/models/${MODEL}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: { max_new_tokens: 400 }
      })
    }
  );

  const data = await res.json();
  const text = data[0]?.generated_text || "No response.";

  renderAnswer(text);
}
function renderAnswer(text) {
  response.innerHTML = `
    <div class="answer-card">
      <h3>Answer</h3>
      <p>${text.replace(/\n/g, "<br>")}</p>

      <div class="actions">
        <button onclick="simpler()">Simpler</button>
        <button onclick="detailed()">More Detail</button>
      </div>
    </div>
  `;
}
async function readImage(input) {
  response.innerHTML = "Reading image…";

  const file = input.files[0];
  const result = await Tesseract.recognize(file, "eng");
  question.value = result.data.text;
}
