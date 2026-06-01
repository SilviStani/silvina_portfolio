import React from "react";
import "./Aboutme.scss";
import My_Info from "../My_Info/My_Info.jsx";
import TechTools from "../TechTools/TechTools.jsx";
import Drives_Me from "../My_Info/Drives_Me";

const Aboutme = () => {
  return (
    <div className="mainContainer" data-testid="about-container">
      <section className="AboutMe-Container" id="about" data-testid="about-section">
        <My_Info />
        <div className="rightContainer" data-testid="about-right-container">
          <TechTools />
          <Drives_Me />
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
