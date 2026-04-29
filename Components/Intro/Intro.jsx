import React from "react";
import "./Intro.scss";
import "aos/dist/aos.css";
import Link from "next/link";

const slidervariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "50%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const Intro = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="leftContainer">
          <h1 className="title">
            I build reliable apps with <span>Q•U•A•L•I•T•Y</span> at the core.
          </h1>
          <p className="description">
            I design, develop and test, scalable web applications combining solid
            code with strong testing practices to deliver value with confidence.
          </p>
          <div className="buttonsContainer">
            <Link href={"/projects"} className="solidBtn">
              <div>View Projects</div>
            </Link>
            <Link href={"/contact"} className="contact">
              <div>Let's work together</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="sliderTract">
          <div className="sliderItem">• Silvina Staniszewski</div>
          <div className="sliderItem">• QA Automation Engineer</div>
          <div className="sliderItem">• Web Developer</div>
          <div className="sliderItem">• Let's work together</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
{
  /*
  
  <div
  className="imageContainer"
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-delay="500"
  >
  <Image
  src={"/assets/profile.png"}
  width={600}
  height={600}
  id="Image-wave-laptop"
  className="inner_img"
  alt="silvina caricatura"
  />
  </div>
  */
}
