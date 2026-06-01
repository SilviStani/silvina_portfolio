import React from "react";
import "../About-Me/Aboutme.scss";

const Drives_Me = () => {
  return (
    <div className="drivesMe" data-testid="drives-me-component">
      <p className="subtitleRight" data-testid="drives-me-title">WHAT DRIVES ME</p>
      <div className="insideDesc" data-testid="drives-me-content">
        <p className="descRight" data-testid="drives-me-description">
          Clean code, meaningful tests, and continuous improvement. <br /> I
          belive quality is everyone's responsibility and automation is <br />
          the key to scaling with confidence.
        </p>
        <p className="icon" data-testid="drives-me-icon">{"</>"} </p>
      </div>
    </div>
  );
};

export default Drives_Me;
