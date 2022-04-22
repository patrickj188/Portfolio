import React from 'react'
import { Container, Center, Text, Divider } from '@mantine/core';
import '../components/style/footer.css'
import githubLogo from "../components/content/GitHub-Mark-32px.png"
import linkedinLogo from "../components/content/linkedin-32.png"
import resumeLogo from "../components/content/resume.png"
import resume from '../components/content/PatrickJohnson_ResumeV3.pdf'

const Footer = ({ scrollIntro }) => {
    return (

        <div>
            <div className='footerContainer'>
                <div className='footer'>
                    <button onClick={scrollIntro} class="footerButton">^</button>
                    <br />
                    <h4 >you can also find me here</h4>
                    <Center>
                        <a href="https://github.com/patrickj188" target="_blank">
                            <img className="footerItem" src={githubLogo} />
                        </a>
                        <a href="https://www.linkedin.com/in/patrickdeanjohnson/" target="_blank">
                            <img className="footerItem" src={linkedinLogo} />
                        </a>
                        <a href={resume} target="_blank">
                            <img className="footerItem" src={resumeLogo} />
                        </a>
                    </Center>
                    <br />

                </div>
            </div >

        </div>

    )
}

export default Footer; 