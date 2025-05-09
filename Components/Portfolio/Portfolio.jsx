"use client";
import { React, useRef } from "react";
import { data } from "./data.js";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Portfolio.scss";

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Mis Proyectos</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {data.map((e) => (
        <section key={e.id} ref={ref}>
          <div className="container">
            <div className="wrapper">
              <div className="imageContainer">
                <img src={e.image} alt={e.alt} />
              </div>
              <motion.div className="textContainer" style={{ y }}>
                <h2>{e.title}</h2>
                <p>{e.desc}</p>
                <p>{e.desc2}</p>
                <button>See Demo</button>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Portfolio;
