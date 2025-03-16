'use client';

import App from '@/components/band_physics/App';
import { useEffect, useState } from 'react';
import '../app/portfolio-styles.css';


export default function Home() {
  // Track if page is scrolled to control visibility of elements
  

  return (
    <div className="portfolio-initial-page">
      <div 
        className={`scene-background`}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100vh', 
          zIndex: 1,
        }}
      >
        <App />
      </div>

      {/* Navigation Bar */}
      <section className='nav-bar-container'>
        <div className="nav-bar">
          <div className="rectangle-1"></div>
          <a href='#'><div className="about">About</div></a>
          <a href='#'><div className="projects">Projects</div></a>
          <a href='#'><div className="experience">Experience</div></a>
          <a href='#'><div className="contacts">Contacts</div></a>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-title">
          <h1 className="lawrence-velilla">Lawrence Velilla</h1>
          <h2 className="full-stack-developer">Full-Stack Developer</h2>
          <h2 className="data-science">Data Science</h2>
          <h2 className="machine-learning">Machine Learning</h2>
        </div>
      </section>
      
      {/* About Section */}
      <section className="about-container">
        <div className="container-info">
          <div className="rectangle-2"></div>
          <div className="title">About me</div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="skills">
        <div className="container-skills">
          <div className="rectangle-3"></div>
          <div className="title2">Technical Skills</div>
        </div>
      </section>

      {/* Projects Section */}
      <section className = "proje">
      <div className="container-project">
        <div className="rectangle-32"></div>
        <div className="titile">Projects</div>
        
        <div className="project-1">
          <div className="rectangle-4"></div>
        </div>
        
        <div className="project-2">
          <div className="rectangle-5"></div>
        </div>
      </div>
      </section>
    </div>
  );
}