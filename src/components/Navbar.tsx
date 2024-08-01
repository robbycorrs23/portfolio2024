import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="#hero" className="nav-link">
        Home
      </a>
      <a href="#about" className="nav-link">
        About Me
      </a>
      <a href="#portfolio" className="nav-link">
        Portfolio
      </a>
      <a href="#contact" className="nav-link">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
