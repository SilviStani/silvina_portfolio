import React from "react";
import styles from "../../../Styles/Projects.module.css";
import Image from "next/image";
import Cards from "../../../Components/Cards/Cards";
import CardsMobile from "../../../Components/Cards/CardsMobile";

const Trabajos = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.Upper}>
        <div className={styles.Left}>
          <div className={styles.stamp}>
            <h2 className={styles.title}>Proyectos</h2>
          </div>
          <Image
            className={styles.imgTitle}
            src={"/assets/studyings.png"}
            alt="C# knowledge"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className={styles.Lower}>
        <Cards />
      </div>
        <CardsMobile/>
    </div>
  );
};

export default Trabajos;
