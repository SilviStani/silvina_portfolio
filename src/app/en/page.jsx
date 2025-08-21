import React from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import Intro from "../../../Components/Intro/Intro";
import Parallax from "../../../Components/Parallax/Parallax";
import Skills from "../../../Components/Skills/Skills";
import QA from "../../../Components/QA/QA";
import QA_Second from "../../../Components/QA/QA_Second";

const page = () => {
  return (
    <div id="englishPage">
      <section id="Homepage">
        <NavBar />
        <Intro />
      </section>
      <section id="Servicios">
        <Parallax type="servicios" id="Servicios" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="e2e">
        <Parallax type="e2e" id="e2e" />
      </section>
      <section id="qa">
        <QA />
      </section>
      <section id="qa-second">
        <QA_Second />
      </section>
    </div>
  );
};

export default page;