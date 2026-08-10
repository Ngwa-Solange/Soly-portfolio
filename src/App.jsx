import Navbar from "./components/Navbar";
import "./styles/Hero.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;