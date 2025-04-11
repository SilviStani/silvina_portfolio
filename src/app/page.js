import Header from "../../Components/Header/Header";
import Intro from "../../Components/Intro/Intro";
import Large_Intro from "../../Components/Intro/Large_Intro";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Header/>
      <main className={styles.Container}>
        <Intro/>
        <Large_Intro/>
      </main>
    </div>
  );
}
