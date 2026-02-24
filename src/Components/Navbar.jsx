import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">

        <a className="navbar-brand logo-text" href="#">
          Portfolio
        </a>

        <div className="navbar-right">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto nav-links text-center">

            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeMenu}>About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={closeMenu}>Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#experience" onClick={closeMenu}>Experience</a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeMenu}>Projects</a>
            </li> */}

            <li className="nav-item">
              <a className="nav-link" href="#certifications" onClick={closeMenu}>Certifications</a>
            </li>

            <li className="nav-item">
              <a className="nav-link contact-btn" href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;