import React from "react";
import "./Intro.scss";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="hero" data-testid="hero-section">
      <div className="wrapper" data-testid="hero-wrapper">
        <div className="leftContainer" data-testid="hero-content">
          <h1 className="title" data-testid="hero-title">
            I build reliable apps with <span data-testid="hero-title-highlight">Q•U•A•L•I•T•Y</span> at the core.
          </h1>
          <p className="description" data-testid="hero-description">
            I design, develop and test, scalable web applications combining solid
            code with strong testing practices to deliver value with confidence.
          </p>
          <div className="buttonsContainer" data-testid="hero-buttons-container">
            <Link href={"/projects"} className="solidBtn" data-testid="btn-view-projects">
              <p>View Projects</p>
            </Link>
            <Link href={"/contact"} className="contact" data-testid="btn-contact-cta" target='_blank' rel='noopener noreferrer'>
              <div>Let's work together →</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="slider" data-testid="slider-section">
        <div className="sliderTract" data-testid="slider-tract">
          <div className="sliderItem" data-testid="slider-item-1">• Silvina Staniszewski</div>
          <div className="sliderItem" data-testid="slider-item-2">• QA Automation Engineer</div>
          <div className="sliderItem" data-testid="slider-item-3">• Web Developer</div>
          <div className="sliderItem" data-testid="slider-item-4">• Let's work together</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;