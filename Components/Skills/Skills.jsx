import React from "react";
import "./Skills.scss";
import Link from "next/link";

const Skills = () => {
  return (
    <div className="skills">
      <div className="connect">
        <p>LET'S CONNECT</p>
        <p>
          Let's build something amazing <span>togheter</span> !
        </p>
      </div>
      <div className="sendButton">
        <p>I'm always open to new opportunities and interesting projects.</p>
        <Link
          href={
            "https://wa.me/5491163632288?text=Hola!%20Me%20interesa%20información%20sobre%20las%20páginas%20Web.%0AGracias!"
          }
          target="_blank"
            className="button"
        >
          Send me a message
        </Link>
      </div>
      <div className="social"></div>
      <div className="imagen"></div>
    </div>
  );
};

export default Skills;
