import React from "react";
import styles from "../../../Styles/Projects.module.css";
import Image from "next/image";
import Cards from "../../../Components/Cards/Cards";


const Trabajos = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.Upper}>
        <div className={styles.Left}>
          <div className={styles.stamp}>
            <h2 className={styles.title}>Proyectos</h2>
            <div className={styles.DescContainer}>
              <p className={styles.p}>
                Éstas páginas fueron diseñadas y creadas con
              </p>
              <p className={styles.p}>React-Redux - Next.Js</p>
              <p className={styles.p}>Css - Sass</p>
              <p className={styles.p}>Node.Js - Express</p>
            </div>
          </div>
        </div>
        <div className={styles.Right}>
          <Image
            src={"/assets/studyings.png"}
            alt="C# knowledge"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className={styles.Lower}>
       <Cards/>
      </div>
    </div>
  );
};

export default Trabajos;
