import React from "react";
import { Container, Center, Text, Grid } from '@mantine/core';
import patrickPhoto from '../components/content/patrick.png'
import "../components/style/aboutStyle.css"
import githubLogo from "../components/content/GitHub-Mark-32px.png"
import linkedinLogo from "../components/content/linkedin-32.png"
import resumeLogo from "../components/content/resume.png"
import resume from '../components/content/PatrickJohnson_ResumeV3.pdf'
import { motion } from 'framer-motion';

const Intro = () => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
      };

    return (
        <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      >
        <div className="intro">
            <div className="aboutContainer" >
                <Center>
                    <h1 className="introName">Patrick Johnson</h1>
                </Center>
                <Center>
                    <Text className="aboutText">
                        A Full Stack Developer
                    </Text>
                </Center>
                <Center>
                    <a href="https://github.com/patrickj188" target="_blank">
                        <img className="logoItem" src={githubLogo} />
                    </a>
                    <a href="https://www.linkedin.com/in/patrickdeanjohnson/" target="_blank">
                        <img className="logoItem" src={linkedinLogo} />
                    </a>
                    <a href={resume} target="_blank">
                        <img className="logoItem" src={resumeLogo} />
                    </a>
                </Center>


            </div>

        </div>
        </motion.main>
    )
}

export default Intro; 