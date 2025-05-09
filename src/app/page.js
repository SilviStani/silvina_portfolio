import Intro from "../../Components/Intro/Intro";
import Large_Intro from "../../Components/Intro/Large_Intro";
import NavBar from "../../Components/NavBar/NavBar";
import "./globals.scss";

export default function Home() {
  return (
    <div>
      <section id="Homepage">
        <NavBar />
      </section>
      <section>
        <Intro />
        <Large_Intro />
      </section>
    </div>
  );
}