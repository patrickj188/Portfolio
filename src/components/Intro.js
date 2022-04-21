import React from "react";
import { Container, Center } from '@mantine/core';
import patrickPhoto from '../components/content/patrick.png'
import "../components/style/aboutStyle.css"

const Intro = () => {

    return (
        <Container className="imageAndTextWrapper">

            <img className="aboutImgLeft" src={patrickPhoto} alt='' />

            <p className="aboutTextRight" >
                <Center><h1>Hi! I'm Patrick</h1></Center>
                I am a full stack developer from Southern California . Welcome to my
                portfolio! Take a look around, and if you like what you see, give me a
                shout and let's talk!
            </p>

        </Container>
    )
}

export default Intro;