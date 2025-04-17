import React from "react";
import styles from "../../Styles/Intro.module.css";
import Projects_Skills from "./Projects_Skills";
import Social from "./Social";

const Large_Intro = () => {
  return (
    <div className={styles.Large_intro}>
      < Social />
      <Projects_Skills />
    </div>
  );
};

export default Large_Intro;
