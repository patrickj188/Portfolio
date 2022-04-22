import React, { useRef } from 'react';
import {
  Container,
  Divider
} from '@mantine/core';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navbar from './components/Navbar'
import '../src/components/style/app.css'
import Intro from './components/Intro';
import Contact from './components/Contact'
import Footer from './components/Footer'



let App = () => {
  const aboutSection = useRef(null);
  const skillsSection = useRef(null);
  const projectsSection = useRef(null);
  const contactSection = useRef(null);
  const introSection = useRef(null);

  const scrollAbout = () => {
    window.scrollTo({
      top: aboutSection.current.offsetHeight,
      behavior: 'smooth',
    });
  };

  const scrollSkills = () => {
    window.scrollTo({
      top: skillsSection.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const scrollProjects = () => {
    window.scrollTo({
      top: projectsSection.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const scrollContact = () => {
    window.scrollTo({
      top: contactSection.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const scrollIntro = () => {
    window.scrollTo({
      top: introSection.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (

    <div >
      <Navbar
        scrollAbout={scrollAbout}
        scrollSkills={scrollSkills}
        scrollProjects={scrollProjects}
        scrollContact={scrollContact}

      />

      <div ref={introSection} className="section">
        <Intro />
      </div>
      <Container size={1320} className='appContainer'>
        <Divider className="divider" my="sm" />

        <div ref={aboutSection} className="section">
          <About />
        </div>

        <Divider className="divider" my="sm" />

        <div ref={projectsSection} className="section">
          <Projects />
        </div>

        <Divider className="divider" my="sm" />

        <div ref={skillsSection} className="section">
          <Skills />
        </div>

        <Divider className="divider" my="sm" />

        <div ref={contactSection} className='section'>
          <Contact />
        </div>

        <Divider className="divider" my="sm" />

        <Footer 
        scrollIntro={scrollIntro}
        />
 
      </Container>

    </div>

  );
}

export default App;
