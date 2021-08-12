import React, { useEffect } from 'react';
import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Hero from './components/Hero/Hero.js';
import ProjectCards from './components/ProjectCards/ProjectCards';
import SocialLinks from './components/SocialLinks/SocialLinks';
import './styles.css';

function App() {
  useEffect(() => {
    document.title = 'Sakshi Mittal';
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <ProjectCards />
      <About />
      <SocialLinks />
      <Contact />
    </div>
  );
}

export default App;
