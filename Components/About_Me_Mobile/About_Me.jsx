"use client";
import React from "react";
import styles from "../../Styles/About-Me.module.css";
import Image from "next/image";
import { aboutMe } from "./aboutme.js";
import { useState } from "react";

const About_Me = () => {
  const [show, setShow] = useState({});

  const handleShow = (id) => {
    setShow((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <div className={styles.About_Me_Container}>
      {aboutMe.map(
        (item) =>
          item.id < 13 && (
            <div
              key={item.id}
              className={`${styles.About_Me_Card} ${
                show[item.id] ? styles.flipped : ""
              }`}
              onClick={() => handleShow(item.id)}
            >
              <div className={styles.cardFront}>
                <h2>{item.title}</h2>
                <p className={styles.flipMe}>{item.flip}</p>
              </div>
              <div className={styles.cardBack}>
                <p>{item.desc}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default About_Me;
