import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Hero from './components/Hero.jsx';
import ProjectCards from './components/ProjectCards.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import './styles.css';

function App() {
  useEffect(() => {
    document.title = 'Sakshi Mittal';
  }, []);
  return (
    <div>
      <Header />
      <Hero/>
      <About />
      {/* <ProjectCards /> */}
      <Contact />
    </div>
  );
}

export default App;
