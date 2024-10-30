// src/pages/About.js
import React from 'react';
import './About.css'; // Import the CSS file for specific styling
import profilePic from '../Asset/pic.jpg'; // Ensure this path is correct


const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src={profilePic} alt="Your Name" className="profile-pic" />
      <p>
        Hi I'm Noe May Salavante, a software developer with a passion for creating web applications. I specialize in front-end development using React, and I enjoy building responsive and interactive user interfaces.
      </p>
      <p>
        I love learning new technologies, collaborating with others, and tackling challenging problems. In my free time, I enjoy contributing to open-source projects and exploring the latest trends in web development.
      </p>
    </section>
  );
};

export default About;

