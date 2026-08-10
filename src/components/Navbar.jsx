import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme !== "light";
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((previousMode) => !previousMode);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="logo-text">
        <h2>Soly</h2>
        <p>CODE. CREATE. IMPACT.</p>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#hero" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>

        <li>
          <button
            className="talk-btn"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;