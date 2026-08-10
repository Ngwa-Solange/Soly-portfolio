import profile from "../assets/images/Solange.png";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import cv from "../assets/documents/NGWA SOLANGE BINUI_CV.pdf";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <section id="hero">

        <div className="bg-circle circle1"></div>

        <div className="bg-circle circle2"></div>

        <div className="bg-circle circle3"></div>

      <div className="hero-left">

        <p className="hero-intro">
          Hello, I'm
        </p>

        <h1 className="hero-name">
          Ngwa Solange
          <br />
          <span>Binui</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Software Engineer", 2000,
            "Entrepreneur", 2000,
            "AI Enthusiast", 2000,
            "UI/UX Designer", 2000,
            "Problem Solver", 2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />



        <div className="line"></div>

        <p className="hero-description">
          I build intelligent, user-centered digital solutions that solve
          real-world problems and create meaningful impact.
        </p>

        <div className="hero-buttons">

        <button className="primary-btn" >  <a href="#projects" >
            View Projects
            <FaArrowRight />
          </a>
          </button>

          <button className="secondary-btn"><a href={cv}>
            Download CV
            <FaDownload /></a>
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="image-circle">
<div className="hero-image-glow"></div>
          <img
            src={profile}
            alt="Solange"
          />

        <div className="hero-socials">
            <a href="https://GitHub.com/Ngwa-Solange"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ngwa-solange-binui-303989294"><FaLinkedin /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="ngwasolange12@gmail.com"><MdEmail /></a>
        </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;