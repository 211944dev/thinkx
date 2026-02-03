import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around py-3">
      <Link to="/">Home</Link>
      <Link to="/tutor">Tutor</Link>
      <Link to="/study">Study</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}