import React from "react";
import styles from "../../Styles/Footer.module.css";

const Footer = () => {
  const time = Date();
  let date = time.substring(0, 16);
  return (
    <footer className={styles.FooterContainer}>
      <section className={styles.left}>
        <article className={styles.leftArticle}>
        <article className={styles.row}>
          <p>Silvina Staniszewski</p>
          <p>Dev / Tester</p>
        </article>
          
        </article>
      </section>
      <section className={styles.right}>
        <article className={styles.rowTwo}>
          <p>Villa General Belgrano, Argentina</p>
          <p>{date}</p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
