"use client";
import React from "react";
import styles from "../../../Styles/About-Me.module.css";
import Image from "next/image";
import Link from "next/link";

const whatsApp =
  "https://wa.me/5491163632288?text=Hola!%20Me%20interesa%20información%20sobre%20las%20páginas%20Web.%0AGracias!";

const AboutMe = () => {
  return (
    <section className={styles.Container}>
      <h1 className={styles.h1}>Sobre Mi</h1>
      <article className={styles.UpperContainer}>
        <article className={styles.One}>
          <Image
            src={"/assets/silvina_accenture.jpeg"}
            alt="Silvina en Accenture"
            width={200}
            height={200}
            className={styles.img}
          />
        </article>
        <article className={styles.Two}>
          <p className={styles.title}>¡Hola! Soy Silvina</p>
          <p className={styles.desc}>
            Apasionada Tester Automation y Desarrolladora Web con experiencia en
            la creación de sitios web dinámicos y funcionales.
          </p>
        </article>
        <article className={styles.Three}>
          <p className={styles.title}>Me encanta</p>
          <p className={styles.desc}>
            Estar al tanto de las últimas tendencias y tecnologías para mejorar
            continuamente mis habilidades y ofrecer soluciones innovadoras a mis
            clientes.
          </p>
          <p className={styles.desc}>
            Cuando no estoy codeando, me gusta explorar nuevas herramientas y
            recursos, contribuir a proyectos de código abierto y compartir mis
            conocimientos a través de Tutorias personallizadas.
          </p>
        </article>
      </article>
      <article className={styles.UpperContainer}>
        <article className={styles.Four}>
          <p className={styles.title}>Mi objetivo</p>
          <p className={styles.desc}>
            Combinar mi creatividad y habilidades técnicas para construir
            experiencias digitales que cautiven a los usuarios.
          </p>
        </article>
        <article className={styles.Five}>
          <p className={styles.title}>Formación</p>
          <p className={styles.desc}>
            <span style={{ fontWeight: "bold" }}>Full Stack:</span> tengo un
            sólido conocimiento en lenguajes de programación como HTML, CSS y
            JavaScript, así como en el uso de frameworks como React.Js y
            Next.Js.
          </p>
          <p className={styles.desc}>
            <span style={{ fontWeight: "bold" }}>Automation Testing:</span>{" "}
            tengo un sólido conocimiento en lenguaje C#, así como el uso de
            frameworks como Selenium
          </p>
        </article>
        <article className={styles.Six}>
          <p className={styles.title}>Trabajo</p>
          <p className={styles.desc}>
            Actualmente, trabajo en un empresa internacional, Accenture, como
            Tester Automation, donde me capacitan día a día con las mejores y
            mas nuevas tecnologias
          </p>
        </article>
      </article>
      <article className={styles.UpperContainer}>
        <article className={styles.One}>
          <p className={styles.desc}></p>
        </article>
        <article className={styles.Two}>
          <p className={styles.desc}></p>
        </article>
        <article className={styles.Three}>
          <p className={styles.desc}></p>
        </article>
      </article>
      <article className={styles.Seven}>
        <p className={styles.desc}>
          Si estás buscando un desarrollador web comprometido y apasionado que
          pueda convertir tus ideas en realidad,
        </p>
        <Link className={styles.link} href={whatsApp} target="_blank">
          <span className={styles.Span}>
            ¡No dudes en ponerte en Contacto Conmigo!
          </span>
        </Link>
      </article>
    </section>
  );
};

export default AboutMe;
