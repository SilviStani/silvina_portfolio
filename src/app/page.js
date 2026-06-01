import './globals.scss';
import Intro from '../../Components/Intro/Intro';
import Banner from '../../Components/Banner/Banner';
import Aboutme from '../../Components/About-Me/Aboutme';
import MyProjects from '../../Components/MyProjects/MyProjects';
import NavBar from '../../Components/NavBar/NavBar';
import Skills from '../../Components/Skills/Skills';
import Footer from '../../Components/Footer/Footer';

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
        <MyProjects />
        <div style={{ height: '20px', width: '100%' }} />
        <Skills />
        <div style={{ height: '20px', width: '100%' }} />
        <Footer />
      </section>
    </div>
  );
}
