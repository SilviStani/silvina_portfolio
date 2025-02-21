import React from "react";
import styles from "../../Styles/Projects.module.css";
import { data } from "../../src/app/works/data.js";
import Image from "next/image";
import Link from "next/link";
import { ST } from "next/dist/shared/lib/utils";

const CardsMobile = () => {
  return (
    <section className={styles.MobileContainer}>
      <section className={styles.MobileContainerLinks}>
        {data.map((e, i) =>
          e.srcWeb.length > 0 ? (
            <article className={styles.cardContainer} key={i}>
              <Link href={e.srcWeb} target="_blank" style={{textDecoration: "none"}}>
              <Image
              src={e.image}
              alt={e.alt}
              width={300}
              height={300}
              className={styles.imageCard}
              />
              <p className={styles.pTitle}>{e.title}</p>
              </Link>
              <Link href={e.srcGit} target="_blank" style={{textDecoration: "none"}}>
              <p className={styles.pTitle}>{'</Github>'}</p>
              </Link>
            </article>
          ) : (
            <article></article>
          )
        )}
      </section> 
    </section>
  );
};

export default CardsMobile;
/*      {data.map((e, i) =>
        e.srcWeb.length > 0 ? (
          <div key={i} className={styles.MobileContainerLinks}>
            <Link
              href={e.srcWeb}
              target="_blank"
              className={styles.LinksMobile}
            >
              <h2 className={styles.H2Mobile}>{e.title}</h2>
              <Image
                id={e.id}
                src={e.image}
                alt={e.alt}
                height={100}
                width={100}
                className={styles.ImgMobile}
              />
            </Link>
              <Link href={e.srcGit} target="_blank">
                Github
              </Link>
          </div>
        ) : (
          <div key={i} className={styles.MobileContainerLinks}>
            <h2 className={styles.H2Mobile}>{e.title}</h2>
            <Image
              id={e.id}
              src={e.image}
              alt={e.alt}
              height={100}
              width={100}
              className={styles.ImgMobile}
            />
            <Link href={e.srcGit} target="_blank">
              Github
            </Link>
          </div>
        )
      )} */
