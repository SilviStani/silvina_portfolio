import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Intro from "../../Components/Intro/Intro";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Header/>
      <main className={styles.Container}>
        <Intro/>
      </main>
      <Footer/>
    </div>
  );
}
