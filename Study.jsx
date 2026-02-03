export default function Study() {
  return (
    <div className="p-4 pb-24">
      <h1 className="text-2xl font-bold">Study</h1>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <Card title="Quizify" desc="Instant Q&A" />
        <Card title="Flashcards" desc="Easy review" />
        <Card title="TLDR" desc="Summaries" />
        <Card title="Class Recap" desc="Catch up fast" />
      </div>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}