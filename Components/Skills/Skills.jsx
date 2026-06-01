import React from "react";
import "./Skills.scss";
import Link from "next/link";
import { social } from "./Social.js";

const Skills = () => {
  return (
    <div className="skills" id="skills-section" data-testid="skills-section">
      <div className="connect" data-testid="skills-connect">
        <p data-testid="skills-connect-title">LET'S CONNECT</p>
        <p data-testid="skills-connect-subtitle">
          Let's build something amazing <span data-testid="skills-connect-highlight">together</span> !
        </p>
      </div>
      <div className="sendButton" data-testid="skills-cta-section">
        <p data-testid="skills-cta-text">I'm always open to new opportunities and interesting projects.</p>
        <Link
          target="_blank"
          className="button"
          data-testid="btn-send-message"
          href={
            "https://wa.me/5491163632288?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20your%20web%20development%20services.%20Could%20you%20please%20provide%20me%20with%20more%20information?"
          }
        >
          Send me a message
        </Link>
      </div>
      <div className="social" data-testid="social-links-container">
        {
          social.map((item) => (
            <Link
              key={item.title} href={item.url}
              target="_blank"
              className="LinkItems"
              data-testid={`social-link-${item.title.toLowerCase()}`}
              id={`social-${item.title.toLowerCase()}`}>
              <img src={item.src} alt={item.title} className="img" />
              {item.title}
            </Link>
          ))
        }
      </div>
      <div className="imagen" data-testid="skills-image"></div>
    </div>
  );
};

export default Skills;
