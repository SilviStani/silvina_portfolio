"use client";
import React from "react";
import "./NavBar.scss";
import { socialEs, socialEn } from "./Social.js";
import SideBar from "../SideBar/SideBar.jsx";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const icons = pathname === "/en" ? socialEn : socialEs;
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
            {
              icons.map((item) => (
                <motion.a 
                  key={item.key}
                  className=""
                  href={item.url}
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
                  <img 
                  title={item.title} 
                  src={item.src} 
                  alt={item.alt} 
                  className="img"
                  id={item.id} />
                </motion.a>
              ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;