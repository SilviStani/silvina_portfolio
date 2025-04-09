import React from "react";
import styles from "../../Styles/Intro.module.css";
import Image from "next/image";

const Large_Intro = () => {
  return (
    <div className={styles.Large_intro}>
      <h1 className={styles.Large_intro_h1}>Proyectos</h1>
      <div className={styles.Large_intro_text}>
        <p className={styles.Large_intro_p}>
          En esta sección verás mis proyectos, los cuales he realizado con mucho
          esfuerzo y dedicación. Cada uno de ellos tiene su repo en github, y en
          algunos casos, su página Web
        </p>
        <div className={styles.Large_intro_img}>
        <Image
        src="/assets/studyings.png" 
        alt="decorative" 
        height={200}
        width={200}
        style={{marginLeft: "10%"}}
        />
        </div>
      </div>
    </div>
  );
};

export default Large_Intro;
