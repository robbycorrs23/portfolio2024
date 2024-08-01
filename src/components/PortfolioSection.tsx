import React from "react";
import "./PortfolioSection.css";
import PortfolioItem from "./PortfolioItem";

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "PickPunk",
      skills: "Next.js, Django RF, PostgreSQL",
      description: "A cool project about something amazing.",
      details: "Detailed information about Project One.",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Project Two",
      skills: "Python, Django, PostgreSQL",
      description: "A wonderful project about something interesting.",
      details: "Detailed information about Project Two.",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Project Three",
      skills: "JavaScript, HTML, CSS",
      description: "An awesome project about something cool.",
      details: "Detailed information about Project Three.",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="portfolio-container" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
