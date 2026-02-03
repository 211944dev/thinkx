import { SUBJECT_MODES } from "../data/modes";

export default function ModeTabs({ active, setActive }) {
  return (
    <div className="flex gap-2 overflow-x-auto py-2">
      {SUBJECT_MODES.map(m => (
        <button
          key={m.key}
          onClick={() => setActive(m.key)}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap
            ${active === m.key
              ? "bg-red-500 text-white"
              : "bg-gray-100 text-gray-700"}`}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}