import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <div className="section-divider" aria-hidden="true" />
        <About />
        <div className="section-divider" aria-hidden="true" />
        <Skills />
        <div className="section-divider" aria-hidden="true" />
        <Projects />
        <div className="section-divider" aria-hidden="true" />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
