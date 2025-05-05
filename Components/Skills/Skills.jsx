'use client';
import React, { useRef } from 'react';
import './Skills.scss';
import Image from 'next/image';
import {color, motion, useInView} from 'framer-motion';

const variants = {
    initial:{
        x: -500,
        y: 100,
        opacity: 0,
    }, 
    animate:{
        x:0,
        opacity: 1,
        y: 0,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Skills = () => {
    const ref = useRef();
    const isInView = useInView(ref, {margin: "-100px"});

  return (
    <motion.div className='skills' 
    variants={variants} 
    initial="initial"
    ref ={ref}
    animate={isInView && "animate" }
    >
        <motion.div className="textContainer"
        variants={variants}>
           <p>Conocimientos - Estudios
            <br/>
           Servicios y más</p> 
            <hr />  
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <Image src="/assets/laptopwave.png" alt="skills" width={100} height={100} className="skillsImage"/>
                <h1>Ideas <motion.span whileHover={{color: "orange"}}>Unicas</motion.span></h1>
            </div>
            <div className="title"> 
                <h1><motion.span whileHover={{color: "orange"}}>Practicas</motion.span> Constantes</h1>
                <button>Conóceme</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
           <motion.div className="box" whileHover={{backgroundColor: "lightgray", color: "black"}}>
                <h2>??</h2>
                <p>mas no se q voy a poner</p>
                <button>Vamos!</button>
            </motion.div>
           <motion.div className="box" whileHover={{backgroundColor: "lightgray", color: "black"}}>
                <h2>??</h2>
                <p>mas no se q voy a poner</p>
                <button>Vamos!</button>
            </motion.div>
           <motion.div className="box" whileHover={{backgroundColor: "lightgray", color: "black"}}>
                <h2>??</h2>
                <p>mas no se q voy a poner</p>
                <button>Vamos!</button>
            </motion.div>
           <motion.div className="box" whileHover={{backgroundColor: "lightgray", color: "black"}}>
                <h2>??</h2>
                <p>mas no se q voy a poner</p>
                <button>Vamos!</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Skills