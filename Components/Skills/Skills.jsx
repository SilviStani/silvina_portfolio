import React from "react";
import "./Skills.scss";
import Link from "next/link";
import { social } from "./Social.js";

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
          target="_blank"
          className="button"
          href={
            "https://wa.me/5491163632288?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20your%20web%20development%20services.%20Could%20you%20please%20provide%20me%20with%20more%20information?"
          }
        >
          Send me a message
        </Link>
      </div>
      <div className="social">
        {
          social.map((item) => (
            <Link
              key={item.title} href={item.url}
              target="_blank"
              className="LinkItems">
              <img src={item.src} alt={item.title} className="img" />
              {item.title}
            </Link>
          ))
        }
      </div>
      <div className="imagen"></div>
    </div>
  );
};

export default Skills;
