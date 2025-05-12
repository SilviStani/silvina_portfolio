import Intro from "../../Components/Intro/Intro";
import NavBar from "../../Components/NavBar/NavBar";
import "./globals.scss";
import Parallax from "../../Components/Parallax/Parallax";
import Skills from "../../Components/Skills/Skills";
import Portfolio from "../../Components/Portfolio/Portfolio";


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
      <section id="Portfolio">
        <Parallax />{" "}
      </section>
      <section>
        <Portfolio />
      </section>
    </div>
  );
}
