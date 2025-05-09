'use client';
import { useRef } from 'react';
import React from 'react';
import './Parallax.scss';
import {motion, useScroll, useTransform} from 'framer-motion'; 

const Parallax = ({type}) => {
  const ref = useRef();
  const {scrollYProgress} = useScroll(
    {target: ref,
    offset: ["start start", "end start"]}
  );
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className='parallax'
    ref={ref} 
    style={{background: type === "servicios" 
      ? "linear-gradient(180deg,  rgb(20, 20, 20), #0c0c1d)" 
      : "linear-gradient(180deg, rgb(20, 20, 20), #505064)"}}>
        <motion.h1 style={{y : yText}}>{type === 'servicios' ? "Servicios" : "Proyectos"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{y : yBg}}></motion.div>
        <motion.div style={{x : yBg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax;
/*
<div className='parallax'
    ref={ref} 
    style={{background: type === "skills" 
      ? "linear-gradient(180deg,  rgb(20, 20, 20), #0c0c1d)" 
      : "linear-gradient(180deg, rgb(20, 20, 20), #505064)"}}>
        <motion.h1 style={{y : yText}}>{type === 'skills' ? "Skills" : "Proyectos"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{y : yBg}}></motion.div>
        <motion.div style={{x : yBg}} className="stars"></motion.div>
    </div>
*/