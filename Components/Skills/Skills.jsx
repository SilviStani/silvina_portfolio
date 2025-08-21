"use client";
import React, { useRef } from "react";
import "./Skills.scss";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { usePathname } from "next/navigation";
import { introEs, introEn, titleEs, titleEn, dataEn, dataEs } from "./dataSkills";

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
  const pathnameIntro = usePathname();
  const pathnameTitle = usePathname();
  const pathname = usePathname();
  const intro = pathnameIntro === "/en" ? introEn : introEs;
  const title = pathnameTitle === "/en" ? titleEn : titleEs;
  const data = pathname === "/en" ? dataEn : dataEs;
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
        {
          intro.map((e) => (
            <p key={e.key} id={e.id}>
              {e.p1}
              <br />
              {e.p2}
            </p>
          ))
        }
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
          {
            title.map((e) => (
              <h1 key={e.key}>
                {e.h1}{" "}
                <motion.span id={e.id} whileHover={{ color: "orange" }}>{e.span}</motion.span>
              </h1>
            ))
          }
        </div>
        <div className="title">
          {
            title.map((e) => (
              <h1 key={e.key}>
                <motion.span id={e.id} whileHover={{ color: "orange" }}>
                  {e.hone2}
                </motion.span>{" "}
                {e.span2}
              </h1>
            ))
          }
          {
            title.map((e) => (
              <button key={e.key}><a id={e.id} href="https://wa.me/5491163632288?text=Hola!%20Me%20interesa%20información%20sobre%20las%20páginas%20Web.%0AGracias!" target="_blank">{e.btn}</a></button>
            ))
          }
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {
          data.map((e) => (
            <motion.div
              key={e.key}
              className="box"
              whileHover={{ backgroundColor: "lightgray", color: "black" }}
            >
              <h2>{e.h2} <br /> {e.b}</h2>
              <p>{e.p1}</p>
              <p>{e.p2}</p>
              <p>{e.p3}</p>
              <p>{e.p4.length > 0 ? e.p4 : ""}</p>
              <a href= {pathname === "/" ?"/dev" : "/en/dev"} >
                <button>
                  {e.btn}
                </button>
              </a>
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div>
  );
};

export default Skills;
