import React from "react";
import "./Intro.scss";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="leftContainer">
          <h1 className="title">
            I build reliable apps with <span>Q•U•A•L•I•T•Y</span> at the core.
          </h1>
          <p className="description">
            I design, develop and test, scalable web applications combining solid
            code with strong testing practices to deliver value with confidence.
          </p>
          <div className="buttonsContainer">
            <Link href={"/projects"} className="solidBtn">
              <p>View Projects</p>
            </Link>
            <Link href={"https://wa.me/5491163632288?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20your%20web%20development%20services.%20Could%20you%20please%20provide%20me%20with%20more%20information?"} target="_blank" rel="noopener noreferrer" className="contact">
              <div>Let's work together →</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="sliderTract">
          <div className="sliderItem">• Silvina Staniszewski</div>
          <div className="sliderItem">• QA Automation Engineer</div>
          <div className="sliderItem">• Web Developer</div>
          <div className="sliderItem">• Let's work together</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;