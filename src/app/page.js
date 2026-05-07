import "./globals.scss";
import Intro from "../../Components/Intro/Intro";
import Banner from "../../Components/Banner/Banner";
import Aboutme from "../../Components/About-Me/Aboutme";
import NavBar from "../../Components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <section id="Homepage">
        <NavBar />
        <Intro />
        <div style={{ height: '20px', width: '100%' }} />
        <Banner />
        <div style={{ height: '20px', width: '100%' }} />
        <Aboutme />
        <div style={{ height: '20px', width: '100%' }} />
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
