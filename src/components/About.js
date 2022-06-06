import React from "react";
import { Container, Center } from "@mantine/core";
import patrickPhoto from "../components/content/patrick.png";
import motelPic from "../components/content/motel.jpg";
import smash from "../components/content/smash.jpg";
import "../components/style/aboutStyle.css";

const About = () => {
  return (
    <div style={{ zIndex: 300 }}>
      <Container className={"imageAndTextWrapper reverse"}>
        <img className="aboutImgRight" src={motelPic} alt="" />
        <p className="aboutTextLeft">
          <Center>
            {" "}
            <h1 className="aboutTitle">A few words about me</h1>
          </Center>
          Hello, my name is Patrick! I decided to learn to code in order to
          challenge myself intellectually and expand my skill set to a new
          career path. I attended the Southern Methodist University Fullstack
          Academy in 2019 because of its rigorous and highly regarded program. I
          am currently looking for a full-time web development position where I
          can continue to grow and improve as a developer. Feel free to check
          out some of my sample projects linked below.
          <br />
          <br />I live in Southern California with my beautiful fiance and dog
          Levon. In my free time, I am usually hiking, cooking, writing, playing
          board games, beaching, or hanging with my family.
        </p>
      </Container>

      <Container className="imageAndTextWrapper">
        <img className="aboutImgLeft" src={patrickPhoto} alt="" />
        <p className="aboutTextRight">
          <Center>
            {" "}
            <h1 className="aboutTitle">Give me a shout</h1>
          </Center>
          If you'd like to chat or find out more about me, shoot me an email.
          <br />
          <br />
          You can also reach me on my LinkedIn page{" "}
          <a
            href="https://www.linkedin.com/in/patrickdeanjohnson/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            here.
          </a>
        </p>
      </Container>
    </div>
  );
};

export default About;
