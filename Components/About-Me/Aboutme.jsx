import React from "react";
import "./Aboutme.scss";
import My_Info from "../My_Info/My_Info.jsx";
import TechTools from "../TechTools/TechTools.jsx";
import Drives_Me from "../My_Info/Drives_Me";

const Aboutme = () => {
  return (
    <div className="mainContainer">
      <section className="AboutMe-Container">
        <My_Info />
        <div className="rightContainer">
          <TechTools />
          <Drives_Me />
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
