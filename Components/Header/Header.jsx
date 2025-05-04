import React from "react";
import styles from "../../Styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  return (
    <header className={styles.HeaderContainer}>
      <ul>
        <Link href={"/"} className={styles.links} key="Inicio">
          <Image
            src="/assets/inicio.png"
            alt="decorative"
            width="35"
            height="35"
            style={{ marginLeft: "10px" }}
          />
        </Link>
      </ul>
      <HeaderMobile />
    </header>
  );
};

export default Header;
