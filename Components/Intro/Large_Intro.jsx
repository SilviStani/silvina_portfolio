import React from "react";
import styles from "../../Styles/Intro.module.css";
import Projects_Skills from "./Projects_Skills";
import Social from "./Social";

const Large_Intro = () => {
  return (
    <div className={styles.Large_intro}>
      <Projects_Skills />
      < Social />
    </div>
  );
};

export default Large_Intro;
