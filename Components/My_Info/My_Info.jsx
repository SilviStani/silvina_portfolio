import React from 'react';
import "../About-Me/Aboutme.scss";

const My_Info = () => {
  return (
    <div className="aboutme" id="about" data-testid="my-info-component">
          <p
            className="subtitle"
            style={{ color: "var(--fuxia)", fontWeight: "bold" }}
            data-testid="about-subtitle"
          >
            ABOUT ME
          </p>
          <h2 className="title" data-testid="about-title">
            Tech enthusiast.
            <br />
            <span>Quality </span>
            advocate.
          </h2>
          <p className="description" data-testid="about-description">
            I'm a QA Automation Engineer and Web Developer passionate about
            building reliable applications with quality at the core. I design,
            develop and test scalable web applications combining solid code with
            strong testing practices to deliver value with confidence.
          </p>
          <div className="metrics" data-testid="about-metrics">
            <div className="metric" data-testid="metric-experience">
              <span className="number" data-testid="metric-experience-value">3+</span>
              <p className="label" data-testid="metric-experience-label">Years learning and building</p>
            </div>
            <div className="metric" data-testid="metric-projects">
              <span className="number" data-testid="metric-projects-value">10+</span>
              <p className="label" data-testid="metric-projects-label">Projects Completed</p>
            </div>
            <div className="metric" data-testid="metric-quality">
              <span className="number" data-testid="metric-quality-value">100%</span>
              <p className="label" data-testid="metric-quality-label">Commitment to Quality</p>
            </div>
          </div>
        </div>
  )
}

export default My_Info;