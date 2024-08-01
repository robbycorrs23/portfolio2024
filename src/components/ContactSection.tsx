import React from "react";
import "./ContactSection.css";

const ContactSection: React.FC = () => {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact</h2>
      <p>
        If you would like to get in touch, please reach out via email or through
        my social media profiles.
      </p>
      <a href="mailto:your.email@example.com" className="contact-button">
        Email Me
      </a>
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default ContactSection;
