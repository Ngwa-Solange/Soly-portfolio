import "../styles/Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

import healthcareAI from "../assets/images/health.png";
import fireDetection from "../assets/images/fire.png";
import solyQuiz from "../assets/images/soly.png";
import { useState } from "react";

function Projects() {

    const [selectedImage,setSelectedImage] = useState(null);

  return (

    <section id="projects">

      <div className="projects-container">

        <h2 className="section-title">
          Projects
        </h2>

        <p className="projects-text">
          Here are some of the projects I've built while learning,
          teaching and solving real-world problems.
        </p>

        <div className="projects-grid">

          {/* Project 1 */}

          <div>

            <div>
              <img  src={healthcareAI}
              alt="AI Healthcare Support System"
              onClick={() => setSelectedImage(healthcareAI)}
              className="project-image">

                </img>
              </div>
            

            <div className="project-content">

              <h3>AI Healthcare Support System</h3>

              <p>
                An AI-powered healthcare assistant that helps users
                understand symptoms and receive basic health guidance.
              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>Node.js</span>
                <span>AI</span>
              </div>

              <div className="project-links">

                <a href="https://GitHub.com/Ngwa-Solange">
                  <FaGithub />
                  GitHub
                </a>

                <a href="#">
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </div>

          {/* Project 2 */}

          <div className="project-card">

            <div>
              <img  src={fireDetection}

              onClick={() => setSelectedImage(fireDetection)}

              alt="IoT Fire Detection System"
              className="project-image">

                </img>
            </div>

            <div className="project-content">

              <h3>IoT Fire Detection System</h3>

              <p>
                Smart fire detection system using Arduino sensors to
                detect fire and trigger alerts.
              </p>

              <div className="tech-stack">
                <span>Arduino</span>
                <span>C++</span>
                <span>IoT</span>
              </div>

              <div className="project-links">

                <a href="https://GitHub.com/Ngwa-Solange">
                  <FaGithub />
                  GitHub
                </a>

                <a href="#">
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </div>

          {/* Project 3 */}

          <div className="project-card">

            <div>
              <img  src={solyQuiz}
              onClick={() => setSelectedImage(solyQuiz)}

              alt="AI Healthcare Support System"
              className="project-image">

                </img>
            </div>

            <div className="project-content">

              <h3>SoliQuiz Game</h3>

              <p>
                Interactive quiz application featuring multiple categories,
                scoring system and timer.
              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <div className="project-links">

                <a href="https://GitHub.com/Ngwa-Solange">
                
                  <FaGithub />
                  GitHub
                </a>

                <a href="https://solyquiz.netlify.app/">
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>
              </div>
              </div>

                {selectedImage && (
                    <div className="image-modal">
                        <span onClick={() => setSelectedImage(null)}>
                            X
                        </span>

                        <img src={selectedImage}
                        alt="Project Preview" />

                        </div>
                )}

        </div>

      </div>

    </section>

  );

}

export default Projects;