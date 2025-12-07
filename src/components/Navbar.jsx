import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "./Navbar.css";

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <Link to="/" onClick={() => setIsOpen(false)}>Arun.dev</Link>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
