"use client";
import React from "react";
import styles from "../../Styles/Intro.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import Link from "next/link";

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
        <article className={styles.imageContainer} id="Image-Conatiner">
          <Image
            src={"/assets/laptopwave.png"}
            width={600}
            height={600}
            id="Image-wave-laptop"
          />
        </article>
      </article>
      <article className={styles.Right} id="Right">
        <article className={styles.wrapper} id="Text-Container">
          <h2 className={styles.text}>Hola! Soy</h2>
          <h3 className={styles.name}>Silvina Staniszewski</h3>
          <h3 className={styles.text}>* QE Testing Automation Analyst</h3>
          <h3 className={styles.text}>
            * Javascript Full Stack Developer <br />
            <span ref={textRef} className={styles.span}></span>
          </h3>
        </article>
          <span style={{marginBottom: "5%", width: "100%", height: "2px", backgroundColor: "whitesmoke"}}></span>
        <article className={styles.wrapper2} id="Text-Container">
          <h2
            className={styles.text}
            style={{ fontStyle: "italic", fontSize: "25px" }}
          >
            ¿Quieres ver mis trabajos?
          </h2>
          <Link href={"/works"}>
            <Image
            src={"/assets/LupaSil.png"}
            alt="usando la lupa"
            height={120}
            width={120}
            className={styles.btn}
            />
          </Link>
        </article>
      </article>
    </section>
  );
};

export default Intro;
