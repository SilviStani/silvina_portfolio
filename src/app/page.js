import Intro from "../../Components/Intro/Intro";
import Large_Intro from "../../Components/Intro/Large_Intro";
import "./globals.scss";

export default function Home() {
  return (
    <div>
      <section>
        <Intro />
        <Large_Intro />
      </section>
    </div>
  );
}