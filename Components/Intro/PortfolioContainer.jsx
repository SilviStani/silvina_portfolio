import React from "react";
import { useRef } from "react";
import "./PortfolioContainer.scss";
import { data } from "../../src/app/works/data.js";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.image} alt={item.alt} className="image" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Ver Github</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PortfolioContainer = () => {
  const ref = useRef();

  return (
    <div className="portfolio" ref={ref}>
      {data.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PortfolioContainer;
