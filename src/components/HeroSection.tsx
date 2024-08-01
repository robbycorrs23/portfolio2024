import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>Rob - Full Stack Developer</h1>
      <p>
        Crafting innovative solutions using PHP, JavaScript, Python, and more.
      </p>
      <a href="#projects" className="cta-button">
        View My Work
      </a>
      <a href="#contact" className="cta-button">
        Get in Touch
      </a>
    </div>
  );
};

export default HeroSection;
