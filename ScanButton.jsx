export default function ScanButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 left-1/2 -translate-x-1/2
      w-16 h-16 rounded-full bg-red-500 text-white text-2xl shadow-xl"
    >
      📸
    </button>
  );
}