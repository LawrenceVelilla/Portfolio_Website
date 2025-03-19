'use client';

import App from '@/components/band_physics/App';
// import { useEffect, useState } from 'react';
import '../app/globals.css';

// -- ADD scrolling effect for nav bar later --
// To do:
// 1. Add a scroll event listener to the window object
// 2. Determine the scroll position of the page
// 3. Use the scroll position to determine if the nav bar should be visible or not
// 4. Update the visibility of the nav bar based on the scroll position

// 5. Change Css to Tailwind
// 6. Add the project section and the about section
// 7. Make nav bar work (Change to buttons (add hover effect))
// 8. Add a contact section

// Important!!!
// 9. Fix sizing (Fix the hardcoded sizes (implement vh and such))


export default function Home() {
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
   <div className="portfolio">
      <section className="container hero-section">
        <div className="frame-1">
          <div className="lawrence">LAWRENCE</div>
        </div>
        <div className="full-stack-developer">Full-Stack Development</div>
        <div className="data-science">Data Science</div>
        <div className="machine-learning">Machine Learning</div>
        <div className="velilla">VELILLA</div>
      </section>
      <section className="container nav-bar">


       {/*//                         |
        // Change these to buttons |                        
        //                         v*/}

        
        <div className="nav-bar">
          <button className="button rectangle-1"></button> {/* Change this into a bordered background instead of an actual rectangl shape */}
          <a href="#"> <div className="button about">About</div></a>
          <a href="#"> <div className="button projects">Projects</div></a>
          <a href="#"> <div className="button experience">Experience</div></a>
          <a href="#"> <div className="button contacts">Contacts</div></a>
        </div>
      </section>
      <section className="container about">
        <div className="container-info">
          <div className="rectangle-2"></div>
          <div className="title">About me</div>
        </div>
        <div className="container-skills">
          <div className="rectangle-3"></div>
          <div className="title2">Technical Skills</div>
        </div>
      </section>
      <section className="container projects">
        <div className="container-project">
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
      </div>
  );
}