import "./globals.scss";
import Intro from "../../Components/Intro/Intro";
import Banner from "../../Components/Banner/Banner";
import Aboutme from "../../Components/About-Me/Aboutme";
import NavBar from "../../Components/NavBar/NavBar";
import Skills from "../../Components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <section id="Homepage">
        <NavBar />
        <Intro />
        <div style={{ height: "20px", width: "100%" }} />
        <Banner />
        <div style={{ height: "20px", width: "100%" }} />
        <Aboutme />
        <div style={{ height: "20px", width: "100%" }} />
        <Skills />
        <div style={{ height: "30px", width: "100%", marginTop: "20px" , backgroundColor: "var(--fondo_secciones)"}} />
      </section>
    </div>
  );
}
