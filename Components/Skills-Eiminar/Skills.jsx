"use client";
import React, { useRef } from "react";
import "./Skills.scss";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="skills"
      initial="initial"
      variants={variants}
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Conocimientos - Estudios
          <br />
          Servicios y más
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <Image
            src="/assets/laptopwave.png"
            alt="skills"
            width={100}
            height={100}
            className="skillsImage"
          />
          <h1>
            Ideas{" "}
            <motion.span whileHover={{ color: "orange" }}>Unicas</motion.span>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.span whileHover={{ color: "orange" }}>
              Practicas
            </motion.span>{" "}
            Constantes
          </h1>
          <button><a href="https://wa.me/5491163632288?text=Hola!%20Me%20interesa%20información%20sobre%20las%20páginas%20Web.%0AGracias!" target="_blank">Conóceme</a></button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Lenguages de Programación <br /> Entorno de Ejecución</h2>
          <p>C# - .Net</p>
          <p>Javascript - Node.JS</p>
          <p>SQL</p>
          <a href="#Portfolio">
            <button>
              Vamos!
            </button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>IDE's -<br /> Herramientas de desarrollo</h2>
          <p>Postman - Insomnia</p>
          <p>Visual Studio & Visual Code</p>
          <p>Git & Github</p>
          <p>Postgresql</p>
          <a href="#Portfolio">
            <button>
              Vamos!
            </button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Stack</h2>
          <p>Next.JS - React</p>
          <p>Jmeter</p>
          <p>Express</p>
          <p>Selenium - Playwright</p>
          <a href="#Portfolio">
            <button>
              Vamos!
            </button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
