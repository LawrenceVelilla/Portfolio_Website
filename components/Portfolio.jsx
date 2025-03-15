'use client';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import App3D from '@/components/band_physics/App';
import './portfolio.css'; // Import the dedicated CSS file

const projects = [
  {
    title: "3D Interactive ID Card",
    description: "A physically simulated ID card using Three.js, React Three Fiber, and Rapier physics. Features realistic physics interactions and dynamic lighting.",
    tags: ["React", "Three.js", "WebGL", "Physics"],
    image: "/assets/project1.jpg"
  },
  {
    title: "Project Title",
    description: "A brief description of your project. What technologies you used and what problems you solved.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/assets/project2.jpg"
  },
  {
    title: "Another Project",
    description: "Showcase your best work here with descriptions of the challenges and your approach to solving them.",
    tags: ["TypeScript", "Next.js", "TailwindCSS"],
    image: "/assets/project3.jpg"
  }
];

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", 
  "Three.js", "WebGL", "TailwindCSS", "Node.js",
  "3D Modeling", "Animation", "UI/UX Design"
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Wait for everything to load before showing content
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!showContent) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      {/* 3D Background Scene */}
      <App3D />

      {/* Navigation */}
      <header className="nav-header">
        <div className="nav-container">
          <a href="#" className="nav-logo">Your Name</a>
          
          {/* Mobile menu button */}
          <button 
            className="nav-menu-button clickable"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="menu-icon" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="mobile-menu">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </header>

      {/* Content Container */}
      <div className="content-overlay">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Lawrence Velilla</h1>
            <h2 className="hero-subtitle">Creative Developer & 3D Artist</h2>
            <p className="hero-description">
              Crafting immersive digital experiences with code and creativity.
            </p>
            <a href="#projects" className="primary-button">View My Work</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="section-container">
            <div className="content-section">
              <h2 className="section-title">About Me</h2>
              <div className="about-content">
                <div className="about-image">
                  {/* Add your profile image here */}
                  <div className="gradient-fill"></div>
                </div>
                <div className="about-text">
                  <p className="about-paragraph">
                    I'm Lawrence Velilla and I am a fullstack developer. 
                  </p>
                  <p className="about-paragraph">
                    My journey into web development began [your story]. Now, I focus on creating performant, accessible, and visually striking applications using modern web technologies.
                  </p>
                  <p className="about-paragraph">
                    When I'm not coding, you can find me [your interests/hobbies].
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="section-container">
            <div className="content-section">
              <h2 className="section-title">Skills & Technologies</h2>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-tag clickable">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="section-container">
            <div className="content-section">
              <h2 className="section-title">Featured Projects</h2>
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <div key={index} className="project-card">
                    <div className="project-image">
                      {/* Project image placeholder - replace with actual images */}
                      <div className="project-gradient"></div>
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a href="#" className="project-link">View Project</a>
                        <a href="#" className="project-link">Source Code</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="section-container">
            <div className="content-section">
              <h2 className="section-title">Get In Touch</h2>
              <div className="contact-content">
                <p className="contact-text">
                  I'm currently looking for new opportunities. Whether you have a question, a project idea, 
                  or just want to say hi, feel free to reach out!
                </p>
                <div className="social-links">
                  <a href="https://github.com/yourusername" className="social-icon">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/in/yourusername" className="social-icon">
                    <FaLinkedin />
                  </a>
                  <a href="mailto:your.email@example.com" className="social-icon">
                    <FaEnvelope />
                  </a>
                </div>
                <a href="mailto:your.email@example.com" className="primary-button">
                  Say Hello
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p className="footer-text">Built with Next.js, Three.js and TailwindCSS</p>
          </div>
        </footer>
      </div>
    </div>
  );
}