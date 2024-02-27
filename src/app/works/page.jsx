"use client";
import React from "react";
import styles from "../../../Styles/Works.module.css";
import { data } from "./data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Works = () => {
  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    direction === "l"
      ? setIndex(index !== 0 ? index - 1 : 11)
      : setIndex(index !== 11 ? index + 1 : 0);
  };
  return (
    <section className={styles.ContainerP}>
      <article
        className={styles.arrowContainerP}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/assets/right-arrow.png"
          alt=""
          width={30}
          height={30}
          className={styles.left}
        />
      </article>
      <article
        className={styles.wrapperPublicidad}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {data.map((d, i) => (
          <article className={styles.imgContainer} key={i}>
            <Image
              key={i}
              src={d.image}
              alt={d.title}
              layout="fill"
              objectFit="cover"
              style={{ filter: "blur(5px)" }}
            />
            <article className={styles.contDesc} key={d.id}>
              <article className={styles.LeftCont}>
                <Image
                  key={i}
                  src={d.image}
                  alt={d.title}
                  height={370}
                  width={750}
                  objectFit="cover"
                  className={styles.imageCarousel}
                />
              </article>
              <article className={styles.descInside}>
                <h3 className={styles.title}>{d.title}</h3>
                <p className={styles.desc}>{d.desc}</p>
                <article className={styles.links}>
                  {d.srcGit.length > 0 ? (
                    <Link
                      href={d.srcGit}
                      className={styles.link}
                      target={d.target}
                    >
                      <p>GitHub</p>
                    </Link>
                  ) : (
                    <span style={{display: "none"}}></span>
                  )}
                  {d.srcWeb.length > 0 ? (
                    <Link href={d.srcWeb} className={styles.link}>
                      <p>Web</p>
                    </Link>
                  ) : (
                    <span style={{display: "none"}}></span>
                  )}
                </article>
              </article>
            </article>
          </article>
        ))}
      </article>
      <article
        className={styles.arrowContainerP}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/assets/right-arrow.png"
          alt=""
          width={30}
          height={30}
          className={styles.right}
        />
      </article>
    </section>
  );
};

export default Works;
/*  <section className={styles.Container}>
      <article className={styles.left}>
        {
          data.map((e)=>(
            <article key={e.id} className={styles.imageContainer}>
              <Image
              id={e.id}
              src={e.image}
              alt={e.desc}
              height={800}
              width={800}
              style={{objectFit: "contain"}}
              className={styles.image}
              />
            </article>
          ))
        }
      </article>
      <article className={styles.right}>

      </article>
    </section>*/
