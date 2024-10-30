// src/App.js
import React from 'react';
import Project from './components/Project';
import Contact from './components/Contact';
import Header from './components/Header';
import About from './components/About';


const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Project />
        <Contact />
      </main>
    </div>
  );
};

export default App;
