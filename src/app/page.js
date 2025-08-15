import Intro from "../../Components/Intro/Intro";
import NavBar from "../../Components/NavBar/NavBar";
import "./globals.scss";
import Parallax from "../../Components/Parallax/Parallax";
import Skills from "../../Components/Skills/Skills";
import Portfolio from "../../Components/Portfolio/Portfolio";
import QA from "../../Components/QA/QA";
import QA_Second from "../../Components/QA/QA_Second";


export default function Home() {
  return (
    <div>
      <section id="Homepage">
        <NavBar />
        <Intro />
      </section>
      <section id="Servicios">
        <Parallax type="servicios" id="Servicios" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="qa">
        <QA />
      </section>
      <section id="qa-second">
        <QA_Second />
      </section>
      <section id="Portfolio">
        <Parallax />{" "}
      </section>
      <section>
        <Portfolio />
      </section>
    </div>
  );
}
