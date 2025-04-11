import React from 'react';
import styles from "../../Styles/Intro.module.css";
import Image from "next/image";
import Link from "next/link";

const Projects_Skills = () => {
  return (
    <div className={styles.Large_intro_container}>
    <Link className={styles.Large_intro_img} href={"/projects"} target="_blank">
      <p className={styles.Large_intro_h1}>Proyectos</p>
      <Image
        src="/assets/muppet_silvi.png"
        alt="decorative"
        height={200}
        width={200}
        className={styles.img_muppet}
      />
    </Link>
    <Link className={styles.Large_intro_img} href={"/about_me"} target="_blank">
      <p className={styles.Large_intro_h1}>Sobre Mi & Skills</p>
      <Image
        src="/assets/simpson_silvi.png"
        alt="decorative"
        height={200}
        width={200}
        className={styles.img_muppet}
      />
    </Link>
  </div>
  )
}

export default Projects_Skills