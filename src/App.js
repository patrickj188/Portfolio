import React, { useState } from 'react';
import {
  AppShell,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
  Navbar,
  Center
} from '@mantine/core';
import NavbarItems from './components/NavbarItems';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FooterSecetion from './components/FooterSecetion'



let App = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [showAbout, setShowAbout] = useState(true)
  const [showProjects, setShowProjects] = useState(false)
  const [showSkills, setShowSkills] = useState(false)

  let onClickAbout = () => {
    setShowAbout(true)
    setShowProjects(false)
    setShowSkills(false)
  };

  let onClickProject = () => {
    setShowAbout(false)
    setShowProjects(true)
    setShowSkills(false)
  };

  let onClickSkills = () => {
    setShowAbout(false)
    setShowProjects(false)
    setShowSkills(true)
  };

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 180 }}>
          <NavbarItems
            about={onClickAbout}
            project={onClickProject}
            skills={onClickSkills}
          />
        </Navbar>
      }
      footer={
        <FooterSecetion />
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
              <Center>
              <Text
                transform="uppercase"
                component="span"
                variant="gradient"
                align="center"
                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                size="xl"
                weight={700}
                style={{ fontFamily: 'Greycliff CF, sans-serif', textAlign: "center"}}>Patrick Johnson · FULL STACK DEVELOPER · Project Manager</Text>
                </Center>
          </div>
        </Header>
      }
    >
      <Text>
        <div>
          {showAbout ? <About /> : null}
        </div>
        <div>
          {showProjects ? <Projects /> : null}
        </div>
        <div>
          {showSkills ? <Skills /> : null}
        </div>
      </Text>
    </AppShell >
  );
}

export default App;
