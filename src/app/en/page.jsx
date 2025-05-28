import React from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import Intro from "../../../Components/Intro/Intro";
import Parallax from "../../../Components/Parallax/Parallax";
import Skills from "../../../Components/Skills/Skills";
import Portfolio from "../../../Components/Portfolio/Portfolio.jsx";

const page = () => {
  return (
    <div id="englishPage">
      <section id="Homepage">
        <NavBar />
        <Intro />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Servicios">
        <Parallax type="servicios" id="Servicios" />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>
    </div>
  );
};

export default page;