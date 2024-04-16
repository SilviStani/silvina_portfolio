import React from "react";
import styles from "../../Styles/Header.module.css";
import { data } from "./data.js";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.HeaderContainer}>
      <ul className={styles.rowHead}>
        {data.map((e) =>
            <Link href={e.url} target={e.target} className={styles.links} key={e.id}>
              <Image
                src={e.src}
                alt={e.title}
                height={60}
                width={60}
                id={e.id}
              />
            </Link>
        )}
      </ul>
    </header>
  );
};

export default Header;
