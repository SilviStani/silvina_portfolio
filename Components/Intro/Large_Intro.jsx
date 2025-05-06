'use client'
import React from "react";
import Parallax from "../Parallax/Parallax";
import Skills from "../Skills/Skills";
import PortfolioContainer from "./PortfolioContainer";

export const Large_Intro = () => {
  return (
    <div>
      <section id="skills"> <Parallax type="skills"/> </section>
      <section> <Skills/> </section>
      <section id="portfolio"> <Parallax/> </section>
      <PortfolioContainer/>
    </div>
  );
};

export default Large_Intro;
