import { useState } from "react";
import { askAI } from "../ai/askAI";
import ModeTabs from "../components/ModeTabs";
import ScanButton from "../components/ScanButton";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [mode, setMode] = useState("general");

  async function submit() {
    if (!question) return;
    setAnswer("Thinking...");
    setAnswer(await askAI(question, mode));
  }

  return (
    <div className="p-4 pb-24">
      <ModeTabs active={mode} setActive={setMode} />

      <input
        className="w-full mt-4 p-3 border rounded-xl"
        placeholder={`Ask a ${mode} question...`}
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />

      <button
        onClick={submit}
        className="w-full mt-3 bg-red-500 text-white p-3 rounded-xl"
      >
        Ask AI
      </button>

      <pre className="mt-4 whitespace-pre-wrap">{answer}</pre>

      <ScanButton onClick={() => alert("Camera scan coming next")} />
    </div>
  );
}