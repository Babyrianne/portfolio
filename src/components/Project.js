// src/pages/Projects.js
import React from 'react';
import './Project.css'; // Import the CSS file for specific styling
import project1Img from '../Asset/shot.png'; // Adjust path as necessary
import project2Img from '../Asset/project02.jpg'; // Adjust path as necessary


const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <img src={project1Img} alt="Project 1" className="project-image" />
          <strong>Project 1: Portfolio Website</strong>
          <div className="project-description">A personal portfolio website showcasing my work and skills using html and css in visual studio code.</div>
        </li>
        <li>
          <img src={project2Img} alt="Project 2" className="project-image" />
          <strong>Project 2: E-commerce App</strong>
          <div className="project-description">Creating MERN. Creating Frontend and Backend using React</div>
        </li>
        
      </ul>
    </section>
  );
};

export default Projects;

