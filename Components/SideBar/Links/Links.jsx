import React from "react";
import "../SideBar.scss";
import { motion } from "framer-motion";
import { linksDataEs, linksDataEn } from "./linksData";
import { usePathname } from "next/navigation";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y:0,
    opacity: 1,
  },
  closed: {
    y:50,
    opacity: 0,
  },
};

const Links = () => {
  const pathname = usePathname();
  const items = pathname === "/en" || pathname === "/en/contact"  ? linksDataEn : linksDataEs;
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a href={item.url} key={item} variants={itemVariants}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {item.title}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
