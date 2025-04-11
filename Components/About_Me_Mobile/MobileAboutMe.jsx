import React from "react";
import styles from "../../Styles/About-Me.module.css";
import Image from "next/image";
import { aboutMe } from "./aboutme.js";

const MobileAboutMe = () => {
  return (
    <details className={styles.acordeonMobile}>
      <summary className={styles.summaryMobile}>
        <article className={styles.One}>
          <Image
            src={"/assets/silvina_accenture.jpeg"}
            alt="Silvina en Accenture"
            width={100}
            height={100}
            className={styles.img}
          />
        </article>
        {aboutMe.map((e) => (
          <article className={styles.articleMobile} key={e.id}>
            <p className={styles.p}>{e.title}</p>
            <p className={styles.p}>{e.desc}</p>
          </article>
        ))}
      </summary>
    </details>
  );
};

export default MobileAboutMe;
