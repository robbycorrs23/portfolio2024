import React from "react";
import "./styles.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}

export default App;
