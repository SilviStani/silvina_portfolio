"use client";
import { React, useRef, useEffect } from "react";
import { dataEs, dataEn } from "./data.js";
import { motion, useScroll, useSpring } from "framer-motion";
import "./Portfolio.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

const Portfolio = () => {
  const pathname = usePathname();
  const data = pathname === "/en" ? dataEn : dataEs;
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  //const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {
        data.map((e) => (
          <div className="portfolio" ref={ref}>
            <div className="progress">
              <h1>{e.h1Title}</h1>
              {/*<motion.div className="progressBar" style={{ scaleX }}></motion.div>*/}
            </div>
            <section key={e.id} ref={ref}>
              <div className="container">
                <div className="wrapper">
                  <div className="imageContainer">
                    <img src={e.image} alt={e.alt} />
                  </div>
                  <div
                    className="textContainer"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <motion.h2 whileHover={{ color: "orange" }}>{e.title}</motion.h2>
                    <p>{e.desc}</p>
                    <p>{e.desc2}</p>
                    <div className="buttons">
                      <button>
                        <a href={e.srcGit} target="_blank">
                          <img src="/assets/github.png" alt="" />
                        </a>
                      </button>
                      {e.srcWeb.length > 0 &&
                        <button>
                          <a href={e.srcWeb} target="_blank">
                            <img src="/assets/sitio-web.png" alt="" />
                          </a>
                        </button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
    </>
  );
};

export default Portfolio;
