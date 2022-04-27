import React from "react";
import { Container, Center } from '@mantine/core';
import patrickPhoto from '../components/content/patrick.png'
import motelPic from '../components/content/motel.jpg'
import smash from '../components/content/smash.jpg'
import "../components/style/aboutStyle.css"


const About = () => {

    return (

        <div style={{ zIndex: 300 }}>
            <Container className={"imageAndTextWrapper reverse"}>

                <img className="aboutImgRight" src={motelPic} alt='' />
                <p className="aboutTextLeft" >
                    <Center> <h1 className="aboutTitle">A few words about me</h1></Center>
                    Hello, my name is Patrick! I decided to learn to code in order to challenge myself intellectually and to expand my skillset to a new carreer path.
                    I attened the Southern Methodist University Fullstack Academy in 2019 because of its rigorous and highly regarded program.
                    I am currently looking for a fulltime web developement position where I can continue to grow and improve as a developer.
                    Feel free to check out some of my sample projects linked below.
             
                    <br /> 
                    <br /> 

                    I live in Southern California with my beautiful fiance and dog Levon. 
                    In my freetime I am usaually hiking, cooking, writing, playing boardgames, beaching or hanging wiht my family.
                </p>

            </Container>

            <Container className="imageAndTextWrapper">

                <img className="aboutImgLeft" src={patrickPhoto} alt='' />
                <p className="aboutTextRight" >
                    <Center>   <h1 className="aboutTitle">Give me a shout</h1></Center>
                    If you'd like to chat or find out more about me, shoot me an email.
                    <br />
                    < br />
                    You can also reach me on my LinkedIn page <a href="https://www.linkedin.com/in/patrickdeanjohnson/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>here.</a>
                </p>

            </Container>


        </div>
    )
}

export default About;