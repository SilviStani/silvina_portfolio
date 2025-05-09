"use client";
import React from "react";
import "./NavBar.scss";
import Image from "next/image";
import Link from "next/link";
import { social } from "./Social.js";
import SideBar from "../SideBar/SideBar.jsx";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <>
      <SideBar />
      <motion.div
        className="navbar"
        animate={{ y: [-100, 0] }}
        transition={{ type: "tween", duration: 1 }}
      >
        <div className="wrapper">
          <motion.span
          className="logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Silvina Dev
          </motion.span>
          <div className="social">
            {social.map((item) => (
              <motion.a className="" 
              href={item.src} 
              target={item.target}
              rel="noopener noreferrer"
                 whileHover={{
                scale: 1.4,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
              }}
              >
                <img src={item.src} alt={item.alt} className="img" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
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
