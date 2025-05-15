"use client";
import "./Contact.scss";
import React, { useRef, useState, useEffect, use } from "react";
import emailjs from "@emailjs/browser";
import { data } from "./data";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else if (error) {
      timer = setTimeout(() => setError(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [success, error]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();
          console.log(result.text);
        },
        (error) => {
          setError(true);
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      className="contactContainer"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <a href="/" className="inicioBTN">
          Inicio
        </a>
        <motion.h1 variants={variants} className="mobile">
          Enviame tu <span style={{color: "orange"}}>Consulta</span>!
        </motion.h1>
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>
          Trabajemos{" "}
          <motion.span whileHover={{ color: "orange", cursor: "arrow" }}>
            {" "}
            Juntos
          </motion.span>
        </motion.h1>
        {data.map((e, i) => (
          <motion.div className="item" variants={variants} key={i}>
            <motion.h2 whileHover={{color: "orange"}}>{e.title}</motion.h2>
            <motion.span whileHover={{color: "orange"}}>{e.text}</motion.span>
          </motion.div>
        ))}
        <a href="/" className="btn">
          Inicio
        </a>
      </motion.div>
      <div className="formContainer">
        <form ref={form} onSubmit={sendEmail}>
          <motion.input whileHover={{backgroundColor: "white", color: "black"}} type="text" required placeholder="Nombre" name="user_name" />
          <motion.input whileHover={{backgroundColor: "white", color: "black"}} type="email" required placeholder="E-Mail" name="user_email" />
          <motion.input whileHover={{backgroundColor: "white", color: "black"}} type="title" required placeholder="title" name="input_title" />
          <motion.textarea whileHover={{backgroundColor: "white", color: "black"}} rows={10} placeholder="Mensaje" name="user_message" />
          <button >
            Enviar
          </button>
          {loading && <div className="loader">Enviando...</div>}
          {error && <div className="error">Error</div>}
          {success && <div className="loader">Envio Exitoso</div>}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
