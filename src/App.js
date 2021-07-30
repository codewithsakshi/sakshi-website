import React from 'react';
import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Hero from './components/Hero/Hero.js';
import ProjectCards from './components/ProjectCards/ProjectCards';
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ProjectCards />
      <About />
      <Contact />
    </div>
  );
}

export default App;
