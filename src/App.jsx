import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');
    if (faders.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    faders.forEach((fader) => observer.observe(fader));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <About />
        <Skills />
        <Education />
        <Experience />
        <Project />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
