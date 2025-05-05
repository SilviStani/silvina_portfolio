'use client'
import React from "react";
import styles from "../../Styles/Intro.module.css";
import Social from "./Social";
import Parallax from "../Parallax/Parallax";
import Skills from "../Skills/Skills";

export const Large_Intro = () => {
  return (
    <div className={styles.Large_intro}>
      <section id="skills"> <Parallax type="skills"/> </section>
      <section> <Skills/> </section>
      <section id="portfolio"> <Parallax/> </section>
      <section>Proyectos</section>
      < Social />
    </div>
  );
};

export default Large_Intro;
