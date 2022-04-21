import React, { useRef } from 'react';
import {
  AppShell,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
  Center,
  Container,
} from '@mantine/core';
import NavbarItems from './components/NavbarItems';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navbar from './components/Navbar'
import '../src/components/style/app.css'
import Intro from './components/Intro';

let App = () => {
  const aboutSection = useRef(null);
  const skillsSection = useRef(null);
  const projectsSection = useRef(null);

  const scrollAbout = () => {
    window.scrollTo({
      top: aboutSection.current.offsetTop,
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

  return (

    <div >
      <Navbar
        scrollAbout={scrollAbout}
        scrollSkills={scrollSkills}
        scrollProjects={scrollProjects}

      />

      <Container size={1320} className='appContainer'>

        <div className="section">
          <Intro />
        </div>

        <div ref={aboutSection} className="section">
          <About />
        </div>

        <div ref={projectsSection} className="section">
          <Projects />
        </div>

        <div ref={skillsSection}  className="section">
          <Skills />
        </div>

      /</Container>
    </div>

  );
}

export default App;
