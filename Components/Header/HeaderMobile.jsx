import React from "react";
import styles from "../../Styles/Header.module.css";
import { data } from "./data.js";
import Link from "next/link";
import Image from "next/image";
import { Artifika } from "next/font/google";

const HeaderMobile = () => {
  return (
    <section className={styles.mobile}>
      <details className={styles.acordeon}>
        <summary className={styles.summary}>
          <Image
            src="/assets/menu-principal.png"
            alt="menu inicio"
            height={30}
            width={30}
            id="inicio"
            className={styles.navImage}
          />
        </summary>
        {data.map((e) => (
          <>
            <Link
              href={e.url}
              target={e.target}
              className={styles.links}
              key={e.id}
            >
              <Image
                src={e.src}
                alt={e.title}
                height={40}
                width={40}
                id={e.id}
                className={styles.navImage}
              />
              <p className={styles.p}>{e.title}</p>
              {e.id < 6 ? (
                <span className={styles.lines}></span>
              ) : (
                <span></span>
              )}
            </Link>
          </>
        ))}
      </details>
    </section>
  );
};

export default HeaderMobile;
/**    {data.map((e) =>
            <Link href={e.url} target={e.target} className={styles.links} key={e.id}>
              <Image
                src={e.src}
                alt={e.title}
                height={60}
                width={60}
                id={e.id}
                className={styles.navImage}
              />
              <p className={styles.p}>{e.title}</p>
            </Link>
        )} */
