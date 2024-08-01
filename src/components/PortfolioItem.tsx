import React, { useState } from "react";
import "./PortfolioItem.css";

interface Project {
  id: number;
  name: string;
  skills: string;
  description: string;
  details: string;
  imageUrl: string;
}

interface PortfolioItemProps {
  project: Project;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="portfolio-item" onClick={handleToggle}>
      <div className="portfolio-item-inner">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="portfolio-image"
        />
        <div className="portfolio-info">
          <h3>{project.name}</h3>
          <p>{project.skills}</p>
          <p>{project.description}</p>
        </div>
      </div>
      {isExpanded && (
        <div className="portfolio-details">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="portfolio-details-image"
          />
          <h4>{project.name}</h4>
          <p>
            <strong>Skills:</strong> {project.skills}
          </p>
          <p>
            <strong>Why it was made:</strong> {project.description}
          </p>
          <p>
            <strong>Details:</strong> {project.details}
          </p>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
