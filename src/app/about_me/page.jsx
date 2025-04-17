"use client";
import React from "react";
import styles from "../../../Styles/About-Me.module.css";
import Image from "next/image";
import Link from "next/link";
import MobileAboutMe from "../../../Components/About_Me_Mobile/MobileAboutMe";
import About_Me from "../../../Components/About_Me_Mobile/About_Me";

const whatsApp =
  "https://wa.me/5491163632288?text=Hola!%20Me%20interesa%20información%20sobre%20las%20páginas%20Web.%0AGracias!";

const AboutMe = () => {
  return (
    <div className={styles.Container}>
      <About_Me />
      <MobileAboutMe/>
    </div>
  );
};

export default AboutMe;