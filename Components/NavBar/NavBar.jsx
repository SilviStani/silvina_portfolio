'use client';
import React from "react";
import "./NavBar.scss";
import Image from "next/image";
import Link from "next/link";
import { social } from "./Social.js";
import SideBar from "../SideBar/SideBar.jsx";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Silvina Dev
        </motion.span>
        <div className="social">
          {social.map((item) => (
            <Link className="" href={item.src} target={item.target}>
              <Image
                src={item.src}
                alt={item.alt}
                height={50}
                width={50}
                className="img"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
/**
 {data.map((item) => (
        <Link className={styles.Large_intro_img} href={item.src} target={item.target}>
            <Image
            src={item.src}
            alt={item.alt}
            height={50}
            width={50}
            className={styles.img_muppet}
            />
        </Link>
    ))}
 */
