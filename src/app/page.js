import "./globals.scss";
import Intro from "../../Components/Intro/Intro";
import Banner from "../../Components/Banner/Banner";
import Aboutme from "../../Components/About-Me/Aboutme";

export default function Home() {
  return (
    <div>
      <section id="Homepage">
        <Intro />
        <Banner />
        <Aboutme />
      </section>
      {/*
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
        */}
    </div>
  );
}
