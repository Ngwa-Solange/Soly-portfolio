import "../styles/About.css";
import { FaGraduationCap, FaTrophy, FaBriefcase, FaRocket } from "react-icons/fa";

function About() {
  return (
    <section id="about">

      <div className="about-container">

        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          I'm <strong> Ngwa Solange Binui</strong>, a Software Engineer passionate about
          Artificial Intelligence, Web Development, IoT, and Data Science.
          I enjoy building digital solutions that solve real-world problems
          while continuously learning new technologies and sharing knowledge
          through teaching.
        </p>

        <div className="about-cards">

          {/* Education */}

          <div className="about-card">
            <div className="card-icon">
              <FaGraduationCap />
            </div>

            <h3>Education</h3>

            <p><strong>BSc Software Engineering</strong></p>
            <p>Vishi Higher Institute (2025)</p>

            <br />

            <p><strong>HND Software Engineering</strong></p>
            <p>SwissLink Higher Institute (2024)</p>
          </div>

          {/* Achievements */}

          <div className="about-card">
            <div className="card-icon">
              <FaTrophy />
            </div>

            <h3>Achievements</h3>

            <ul>
              <li>🥉 3rd Place - Data Science Without Borders</li>
              <li>Microsoft AI Skills Challenge</li>
              <li>TEFL Certified – International Teaching Qualification</li>
              
            </ul>
          </div>

          {/* Experience */}

          <div className="about-card">
            <div className="card-icon">
              <FaBriefcase />
            </div>

            <h3>Experience</h3>

            <ul>
              <li>Computer Science Teacher</li>
              <li>Software Developer</li>
              <li>Clings Tech Academy Intern</li>
              <li>Vishi Higher Institute Intern</li>
              <li>Freelance Tech Projects</li>
              
            </ul>
          </div>

          {/* Journey */}

          <div className="about-card">
            <div className="card-icon">
              <FaRocket />
            </div>

            <h3>My Journey</h3>

            <p>
              My journey started with an HND in Software Engineering before
              advancing to a Bachelor's degree. Along the way, I completed
              internships, built AI and IoT projects, earned professional
              certifications, participated in international competitions,
              and discovered my passion for teaching Computer Science while
              continuing to grow as an AI developer.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;