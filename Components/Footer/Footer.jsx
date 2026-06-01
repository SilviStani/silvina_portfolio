'use client';
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footerContainer" data-testid="footer-container">
      <p data-testid="footer-logo"><span>{"<"}</span>Silvina.Dev <span>{"/>"}</span></p>
      <p data-testid="footer-copyright">® {new Date().getFullYear()} Silvina Dev. <span>All Rights</span> reserved.</p>
      <p data-testid="footer-social-text">Follow me on 
        <span>SOCIAL MEDIA</span></p>
      <p data-testid="footer-built-with">Build with <img src="/icons/next.png" alt="Next.JS Logo" data-testid="footer-next-logo" /></p>
    </div>
  )
}

export default Footer;