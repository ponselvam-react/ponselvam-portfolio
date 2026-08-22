import profile from './assets/profile.jpeg'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  useEffect(() => {
    const sections = document.querySelectorAll('.section')

    const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
  },
  {
    threshold: 0.05,
  }
)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <div className="portfolio">

      <nav className="navbar">
        <h2 className="logo">Ponselvam.S</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      <section id="home" className="home">
        <div className="home-content">
          <p className="intro">Hello, I'm</p>

          <h1>Ponselvam S</h1>

          <h2 className="typing-text">Frontend Developer | React Developer</h2>

          <p className="description">
            I build responsive and user-friendly web interfaces
            using modern frontend technologies.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>
        <div className="home-image">
          <img src={profile} alt="Ponselvam" />
        </div>
      </section>


      <section id="about" className="section">
        <p className="section-subtitle">Get To Know Me</p>
        <h2>About Me</h2>

        <div className="about-content">
          <div className="about-card">
            <h3>Who I Am</h3>

            <p>
              I am a B.Sc Computer Science graduate and an aspiring
              Frontend Developer with a passion for creating clean,
              responsive and user-friendly websites.
            </p>

            <p>
              I have hands-on knowledge of HTML, CSS, JavaScript,
              Bootstrap and Tailwind CSS. I am currently learning
              React and improving my skills through practical projects.
            </p>

            <p>
              My goal is to start my career as a Frontend Developer
              or Junior React Developer and grow by working on real-world
              applications.
            </p>
          </div>

          <div className="about-card">
            <h3>Education</h3>

            <p>
              <strong>B.Sc Computer Science</strong>
            </p>

            <p>
              Madurai Kamaraj University
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <p className="section-subtitle">My Technical Skills</p>
        <h2>Skills</h2>

        <div className="skills-container">
          <div className="skill">
            <h3>HTML5</h3>
            <p>Semantic & structured web pages</p>
          </div>

          <div className="skill">
            <h3>CSS</h3>
            <p>Layouts, styling & responsive design</p>
          </div>

          <div className="skill">
            <h3>JavaScript</h3>
            <p>DOM, functions, arrays & objects</p>
          </div>

          <div className="skill">
            <h3>React</h3>
            <p>Currently learning React fundamentals</p>
          </div>

          <div className="skill">
            <h3>Bootstrap</h3>
            <p>Responsive UI components</p>
          </div>

          <div className="skill">
            <h3>Tailwind CSS</h3>
            <p>Utility-first CSS basics</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-subtitle">My Recent Work</p>
        <h2>Projects</h2>

        <div className="project-card">
          <div className="project-info">
            <p className="project-number">01</p>

            <h3>SST Cabs</h3>

            <p>
              A responsive cab booking website frontend project
              developed to practice modern web development concepts.
            </p>

            <div className="project-tech">
              <span>HTML5</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
            </div>

            <a
              href="https://github.com/ponselvam-react/sst-cabs"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View GitHub →
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="section-subtitle">Get In Touch</p>
        <h2>Contact Me</h2>

        <p>
          I'm currently looking for opportunities as a Frontend
          Developer or Junior React Developer.
        </p>

        <div className="contact-links">
          <a href="mailto:selva90904@gmail.com">Email</a>

          <a
            href="https://www.linkedin.com/in/ponselvam-s-react"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ponselvam-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Ponselvam S. All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default App