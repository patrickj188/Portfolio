import React from "react";
import skills from '../skillsImg.json'
import { Grid, Image } from '@mantine/core';


const Skills = () =>{

const renderedSkills = skills.map(skill => {
    return (
        <Grid.Col key={skill.id} span={4}>
               <Image src={skill.img} alt={skill.img} style={{maxWidth: 250, width: "auto", height: "auto"}} />
        </Grid.Col>
    )
})
    return (
        <Grid>
            {renderedSkills}
      </Grid>
    )
}

export default Skills;