"use client";
import React from "react";
import styles from "./Intro.scss";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { btEn, btEs } from "./introButtons";

const textvariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slidervariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Intro = () => {
  const textRef = useRef();
  const pathname = usePathname();
  const data = pathname === "/en" ? btEn : btEs;
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
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textvariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textvariants}>Silvina Staniszewski</motion.h2>
          <motion.h1 className={styles.text} variants={textvariants}>
            FullStack & QE Automation
          </motion.h1>
          <motion.h3 className={styles.text} variants={textvariants}>
            Full Stack Developer <br />
            <span ref={textRef} className={styles.span}></span>
          </motion.h3>
          <motion.div className="buttons" variants={textvariants}>
            {
              data.map((e) => (
                <motion.a href={e.url} key={e.key}>
                  <motion.button variants={textvariants} id={e.id}>
                    {e.title}
                  </motion.button>
                </motion.a>
              ))}
          </motion.div>
          <motion.img
            variants={textvariants}
            animate="scrollButton"
            src={"/assets/scroll.png"}
            width={50}
            height={50}
            alt="scroll"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slidervariants}
        initial="initial"
        animate="animate"
      >
        Silvina Staniszewski
      </motion.div>
      <div
        className="imageContainer"
      >
        <Image
          src="/assets/laptopwave.png"
          width={600}
          height={600}
          id="Image-wave-laptop"
          className="inner_img"
          alt="silvina caricatura"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default Intro;
