"use client";
import React from "react";
import styles from "../../Styles/Project-Skills.module.css";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { data } from "../../src/app/works/data.js";

const Projects_Skills = () => {
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);
  return (
    <div className={styles.Large_intro_container}>
      <div className={styles.Large_intro_container}>
        <div className={styles.Large_intro_img}
          data-aos="zoom-out-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <p className={styles.Large_intro_h1}>Proyectos</p>
          <Image
            src="/assets/muppet_silvi.png"
            alt="decorative"
            height={200}
            width={200}
            className={styles.img_muppet}
          />
        </div>
        <div
          className={styles.project_container}
          data-aos="zoom-out-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          {
          data.map((project) => (
            <div key={project.key} className={styles.project}>
              <Link
                href={project.title === "All" ? "/projects" : `/projects#${project.id}`}
                target="_blank"
                className={styles.project_link}
              >
                <p  className={styles.project_link_text}>° {project.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <span style={{width: "100%", height: "2px", marginTop: "5%", backgroundColor: "whitesmoke"}}></span>
      <Link
        className={styles.Large_intro_img}
        href={"/about_me"}
        target="_blank"
        data-aos="zoom-out-left"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
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
  );
};

export default Projects_Skills;
