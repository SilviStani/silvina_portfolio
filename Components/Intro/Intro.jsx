"use client";
import React from "react";
import styles from "../../Styles/Intro.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      init(textRef.current, {
        showcursor: true,
        typeSpeed: 150,
        backDelay: 1000,
        backSpeed: 100,
        strings: [
          " Automation Tester",
          " Selenium",
          " Web Developer",
          " Javascript & C#",
          "Front: Next.Js",
          "Front: React",
          " Back: Node.Js",
          "Back: Express.Js",
        ],
      });
    }
  }, []);
  return (
    <section className={styles.Main} id="Main-Section">
      <article className={styles.Left} id="Left">
        <section className={styles.imageContainer} id="Image-Conatiner">
          <Image src={"/assets/laptopwave.png"} width={600} height={600} id="Image-wave-laptop"/>
        </section>
      </article>
      <article className={styles.Right} id="Right">
        <div className={styles.wrapper} id="Text-Container">
          <h2 className={styles.text}>Hola! Soy</h2>
          <h3 className={styles.name}>Silvina Staniszewski</h3>
          <h3 className={styles.text}>* QE Testing Automation Analyst</h3>
          <h3 className={styles.text}>
            * Javascript Full Stack Developer <br /> 
            <span ref={textRef} className={styles.span}></span>
          </h3>
        </div>
      </article>
    </section>
  );
};

export default Intro;
