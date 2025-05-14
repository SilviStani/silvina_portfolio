'use client';
import {React, useState} from "react";
import "./SideBar.scss";
import ToggleButton from "./ToggleButton/ToggleButton.jsx";
import Links from "./Links/Links.jsx";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 30,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div 
    className="sidebar" 
    initial={open ? "open" : "closed"} 
    animate={open ? "open" : "closed"} 
    >
      <motion.div 
      className="bg" 
      variants={variants}
      >
       <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  );
};

export default SideBar;
