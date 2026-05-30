'use client';
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footerContainer">
      <p><span>{"<"}</span>Silvina.Dev <span>{"/>"}</span></p>
      <p>® {new Date().getFullYear()} Silvina Dev. <span>All Rights</span> reserved.</p>
      <p>Follow me on 
        <span>SOCIAL MEDIA</span></p>
      <p>Build with <img src="/icons/next.png" alt="Next.JS Logo" /></p>
    </div>
  )
}

export default Footer;