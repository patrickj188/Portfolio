import React from "react";
import { Footer, Center, Text, Space, Grid, Image, Group, Button } from '@mantine/core';
import patrickPhoto from '../components/content/patrick.png'
import "../components/style/aboutStyle.css"


const About = () => {

    return (

        <div>
            <div style={{ display: "flex", justifyContent: "center"}}>

                <img className="aboutImg" src={patrickPhoto} alt='' />
            </div>

            <Center>
            <Text className="aboutText" >
                    Hello, my name is Patrick! I am an innovative, self-starter, and
                    creative full stack developer from Southern California . Welcome to my
                    portfolio! Take a look around, and if you like what you see, give me a
                    shout and let's talk!
                </Text>
            </Center>


        </div>
    )
}

export default About;