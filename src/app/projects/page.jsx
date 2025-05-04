import React from "react";
import styles from "../../../Styles/Projects.module.css";
import Image from "next/image";
import Cards from "../../../Components/Cards/Cards";
import CardsMobile from "../../../Components/Cards/CardsMobile";

const Trabajos = () => {
  return (
    <div className={styles.Container}>
        <Cards />
        <CardsMobile/>
    </div>
  );
};

export default Trabajos;
