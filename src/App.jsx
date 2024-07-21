import React, { useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Hero from './components/Hero/Hero.jsx';
import ProjectCards from './components/ProjectCards/ProjectCards.jsx';
import SocialLinks from './components/SocialLinks/SocialLinks.jsx';
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
