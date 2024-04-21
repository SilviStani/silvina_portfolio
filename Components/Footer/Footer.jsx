import React from "react";
import styles from "../../Styles/Footer.module.css";
import { data } from "./data";
import Link from "next/link";

const Footer = () => {
  const time = Date();
  let date = time.substring(0, 16);
  return (
    <footer className={styles.FooterContainer}>
      <section className={styles.left}>
        <article className={styles.leftArticle}>
          {data.map((e) => (
            <Link href={e.url} target={e.target} className={styles.link}>
              <p>{e.title}</p>
            </Link>
          ))}
        </article>
      </section>
      <section className={styles.right}>
        <article className={styles.row}>
          <p>Silvina Staniszewski</p>
          <p>Dev / Tester</p>
        </article>
        <article className={styles.rowTwo}>
          <p>Villa General Belgrano, Argentina</p>
          <p>{date}</p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
