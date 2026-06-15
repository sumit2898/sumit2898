import ThreeCanvas from './components/ThreeCanvas';
import Navbar from './components/Navbar';
import ChessNavDots from './components/ChessNavDots';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certs from './components/Certs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      {/* Fixed 3-D background */}
      <ThreeCanvas />

      {/* Fixed UI chrome */}
      <Navbar />
      <ChessNavDots />

      {/* Page content */}
      <Hero />

      <div className="sections-wrapper">
        <About />
        <Skills />
        <Projects />
        <Certs />
        <Contact />
      </div>

      <Footer />
    </>
  );
}
