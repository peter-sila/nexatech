import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/header_footer.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="header">
        <ul>
          <li><a href="tel:+254794178635">0794178635</a></li>
          <li><a href="tel:+254782416883">0782416883</a></li>
          <li><a href="mailto:petersila2002@gmail.com">info@nexatech.co.ke</a></li>
        </ul>
      </div>
      <div className="nav_bar">
        <a className="logo" href="/" onClick={closeMenu}>NEXA<span>TECH</span></a>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
        <ul className={`navlinks ${menuOpen ? "open" : ""}`}>
          <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/about-us" onClick={closeMenu}>About Us</NavLink></li>
          <li><NavLink to="/contact-us" onClick={closeMenu}>Contact Us</NavLink></li>
          <li><NavLink to="/blogs" onClick={closeMenu}>Blogs</NavLink></li>
          <li><a className="nav-cta mobile-cta" href="mailto:petersila2002@gmail.com" onClick={closeMenu}>Reach Us</a></li>
        </ul>
        <a className="nav-cta desktop-cta" href="mailto:petersila2002@gmail.com">Reach Us</a>
      </div>
    </>
  )
}

export default Header