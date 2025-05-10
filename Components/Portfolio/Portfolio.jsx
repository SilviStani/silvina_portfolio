"use client";
import { React, useRef, useEffect} from "react";
import { data } from "./data.js";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Portfolio.scss";
import AOS from 'aos';
 import 'aos/dist/aos.css';

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    /*offset: ["end end", "start start"],*/
  });

  /*const y = useTransform(scrollYProgress, [0, 1], ["-100vh", "100vh"]);*/
  
  const scaleX = useSpring(scrollYProgress, 
    { stiffness: 100, damping: 30 });

useEffect(() => {
    AOS.init();
}, []);

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Mis Proyectos</h1>
        <motion.div className="progressBar" 
        style={{ scaleX }}>
        </motion.div>
      </div>
      {data.map((e) => (
        <section key={e.id} ref={ref}>
          <div className="container">
            <div className="wrapper">
              <div className="imageContainer">
                <img src={e.image} alt={e.alt} />
              </div>
              <div className="textContainer" 
              data-aos="fade-up" 
              data-aos-duration="1000"
              >
                <h2>{e.title}</h2>
                <p>{e.desc}</p>
                <p>{e.desc2}</p>
                <button>See Demo</button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Portfolio;
