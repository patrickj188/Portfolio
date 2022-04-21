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
      <div className='appContainer'>
      <div ref={projectsSection}>
        <Projects />
      </div>

      <div ref={skillsSection} >
        <Skills />
      </div>
      <div ref={skillsSection} >
        <Skills />
      </div>
      <div ref={skillsSection} >
        <Skills />
      </div>
      <div ref={skillsSection} >
        <Skills />
      </div>
      <div ref={skillsSection} >
        <Skills />
      </div>
      <div ref={skillsSection} >
        <Skills />
      </div> 

      </div>
    </div>

  );
}

export default App;
