import React from "react";
import './Cards.scss';
import { data } from "../../src/app/works/data.js";
import Image from "next/image";
import Link from "next/link";

const Cards = () => {
  return (
  <div className={styles.cover}>
    {
      data.map((e) => {
        <div className={styles.left}>
          <Image
          src={e.image}
          alt={"Imagen proyecto: " + e.title}
          width={500}
          height={500}  
          />
        </div>,
        <div className={styles.right}></div>
      })
    }
  
  </div>
)};

export default Cards;

/* 
                <div
                id={e.id}
                key={e.key}
                className={styles.CardContainer}
                style={{
                  backgroundImage: `url(${e.image})`,
                  backgroundSize: "cover",
                  }}
                  >
                  
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
                 */
