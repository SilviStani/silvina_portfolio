import React from 'react';
import "../About-Me/Aboutme.scss";

const My_Info = () => {
  return (
    <div className="aboutme">
          <p
            className="subtitle"
            style={{ color: "var(--fuxia)", fontWeight: "bold" }}
          >
            ABOUT ME
          </p>
          <h2 className="title">
            Tech enthusiast.
            <br />
            <span>Quality </span>
            advocate.
          </h2>
          <p className="description">
            I'm a QA Automation Engineer and Web Developer passionate about
            building reliable applications with quality at the core. I design,
            develop and test scalable web applications combining solid code with
            strong testing practices to deliver value with confidence.
          </p>
          <div className="metrics">
            <div className="metric">
              <span className="number">3+</span>
              <p className="label">Years learning and building</p>
            </div>
            <div className="metric">
              <span className="number">10+</span>
              <p className="label">Projects Completed</p>
            </div>
            <div className="metric">
              <span className="number">100%</span>
              <p className="label">Commitment to Quality</p>
            </div>
          </div>
        </div>
  )
}

export default My_Info;