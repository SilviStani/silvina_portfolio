"use client";
import React from "react";
import styles from "../../Styles/Project-Skills.module.css";
import Link from "next/link";
import { data } from "../Header/data";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Social = () => {
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);
  return (
    <div
      className={styles.SocialContainer}
      data-aos="fade-right"
      data-aos-easing="ease-in-out"
      data-aos-duration="1200"
    >
      {data.map((item) => (
        <Link
          className={styles.Large_intro_img_social}
          href={item.src}
          target={item.target}
        >
          <Image
            src={item.src}
            alt={item.alt}
            height={50}
            width={50}
            className={styles.img_icons}
          />
        </Link>
      ))}
    </div>
  );
};

export default Social;
