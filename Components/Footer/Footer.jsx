import React from "react";
import styles from "../../Styles/Footer.module.css";
import Link from "next/link";
import { data } from "../Header/data.js";
import Image from "next/image";

const Footer = () => {
  const time = Date();
  let date = time.substring(0, 16);
  return (
    <footer className={styles.FooterContainer}>
      <section className={styles.left}>
        <article className={styles.leftArticle}>
        <article className={styles.row}>
          <p>Silvina Staniszewski</p>
          <p>QA Automation / Dev</p>
        </article> 
        </article>
      </section>
      <section className={styles.right}>
       
      </section>
    </footer>
  );
};

export default Footer;
