import "../styles/Skills.css";

import {
FaCode,
FaServer,
FaRobot,
FaTools
} from "react-icons/fa";

function Skills(){

return(

<section id="skills">

<div className="skills-container">

<h2 className="section-title">
Skills
</h2>

<p className="skills-text">
Here are some of the technologies, programming languages and tools I use to build intelligent, modern and user-centered digital solutions.
</p>

<div className="skills-grid">

<div className="skill-card">

<div className="skill-icon">
<FaCode/>
</div>

<h3>Frontend</h3>

<ul>
<li>HTML5</li>
<li>CSS3</li>
<li>JavaScript</li>
<li>React</li>
</ul>

</div>

<div className="skill-card">

<div className="skill-icon">
<FaServer/>
</div>

<h3>Backend</h3>

<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>MySQL</li>
<li>REST APIs</li>
</ul>

</div>

<div className="skill-card">

<div className="skill-icon">
<FaRobot/>
</div>

<h3>AI & Data Science</h3>

<ul>
<li>Python</li>
<li>Machine Learning</li>
<li>Pandas</li>
<li>NumPy</li>
</ul>

</div>

<div className="skill-card">

<div className="skill-icon">
<FaTools/>
</div>

<h3>Tools</h3>

<ul>
<li>Git & GitHub</li>
<li>VS Code</li>
<li>Figma</li>
<li>Arduino IDE</li>
</ul>

</div>

</div>

</div>

</section>

);

}

export default Skills;