import React from "react";
import { Container, Center } from '@mantine/core';
import patrickPhoto from '../components/content/patrick.png'
import motelPic from '../components/content/motel.jpg'
import smash from '../components/content/smash.jpg'
import "../components/style/aboutStyle.css"


const About = () => {

    return (

        <div style={{  zIndex:300}}>

            <Container className="imageAndTextWrapper">

                <p className="aboutTextLeft" >
                    <Center> <h1>A few words about me</h1></Center>
                  BIG DICK ENERGY
                </p>
                <img className="aboutImgRight" src={motelPic} alt='' />


            </Container>

            <Container className="imageAndTextWrapper">

                <img className="aboutImgLeft" src={smash} alt='' />
                <p className="aboutTextRight" >
                    <Center>   <h1>Give me a shout</h1></Center>
                    If you'd like to chat or find out more about me, shoot me an email.
                    <br />
                    < br />
                    You can also reach me on my LinkedIn page <a href="https://www.linkedin.com/in/patrickdeanjohnson/" target="_blank" rel="noopener noreferrer" style={{  textDecoration: 'none' }}>here.</a> 
                </p>

            </Container>
        </div>

    )
}

export default About;