import React from "react";
import skills from '../skillsImg.json'
import { Center, Grid, Image } from '@mantine/core';
import '../components/style/skill.css'


const Skills = () => {

    const renderedSkills = skills.map(skill => {
        return (
            <Grid.Col key={skill.id} span={4}>
                <Image src={skill.img} alt={skill.img} style={{ maxWidth: 250, width: "auto", height: "auto" }} />
            </Grid.Col>
        )
    })
    return (
        <div>
            <Center className="skillTitle">
                <h1>Skills and Interest</h1>
            </Center>
            <Grid>
                {renderedSkills}
            </Grid>
        </div>
    )
}

export default Skills;