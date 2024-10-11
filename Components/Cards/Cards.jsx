import React from "react";
import styles from "../../Styles/Projects.module.css";
import { data } from "../../src/app/works/data.js";
import Image from "next/image";
import Link from "next/link";

const Cards = () => {
  return (
    <>
      {data.map((e, i) => (
        <div
          key={e.id}
          className={styles.CardContainer}
          style={{
            backgroundImage: `url(${e.image})`,
            backgroundSize: "cover",
          }}
        >
          <div className={styles.cover}>
            <div className={styles.Imagen} key={i}>
              <Image
                width={500}
                height={300}
                src={e.image}
                alt={e.desc}
                className={styles.img}
              />
            </div>
            <div className={styles.Text} key={i}>
              <h3 className={styles.h3}>{e.title}</h3>
              <div className={styles.DescComponent}>
                <p>{e.desc}</p>
                <p>{e.desc2}</p>
              </div>
              {e.srcWeb.length > 0 ? (
                <Link href={e.srcWeb} target={e.target} className={styles.link}>
                  Web page
                </Link>
              ) : (
                <span></span>
              )}
              <Link href={e.srcGit} target={e.target} className={styles.link}>
                GitHub Repo
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
