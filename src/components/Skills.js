import React from "react";
import skills from '../skillsImg.json'
import { Center, Grid, Image, List } from '@mantine/core';
import { Certificate, World, Aperture, Writing, Backpack, School } from 'tabler-icons-react';
import '../components/style/skill.css'


const Skills = () => {

    const renderedSkills = skills.map(skill => {
        return (
            <Grid.Col key={skill.id} span={4}>
                <Center>
                    <Image src={skill.img} alt={skill.img} style={{ maxWidth: 100, width: "auto", height: "auto" }} />
                </Center>
            </Grid.Col>
        )
    })
    return (


        <div id="wrapper">
            <div id="div1">
                <Center><h3 className="skillsTitle">Languages I use</h3></Center>
                <Center >
                    <Grid gutter={2} >
                        {renderedSkills}
                    </Grid>
                </Center>

            </div>
            <div id="div2">

                <Center>
                    <div className="skillsDivTwo" >
                        <Center><h3 className="skillsTitle">Accomplishments &amp; Hobbies</h3>
                        </Center>
                        <div className="listWrapper">
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                icon={
                                    <Certificate
                                        size={22}
                                        strokeWidth={2}
                                        color={'#FBAD7D'}
                                    />}>
                                <List.Item>Southern Mthodist University Coding Bootcamp Certificate</List.Item>
                                <List.Item>Udacity React Certificate</List.Item>
                                <List.Item>Codecademy Web Development Certificate</List.Item>
                                <List.Item
                                    icon={
                                        <World
                                            size={22}
                                            strokeWidth={2}
                                            color={'#FBAD7D'}
                                        />}>
                                    World Traveler
                                </List.Item>
                                <List.Item
                                    icon={
                                        <Aperture
                                            size={22}
                                            strokeWidth={2}
                                            color={'#FBAD7D'}
                                        />}>
                                    Photography
                                </List.Item>
                                <List.Item
                                    icon={
                                        <Writing
                                            size={22}
                                            strokeWidth={2}
                                            color={'#FBAD7D'}
                                        />}>
                                    Writing scripts/screenplays/comics
                                </List.Item>
                                <List.Item
                                    icon={
                                        <Backpack
                                            size={22}
                                            strokeWidth={2}
                                            color={'#FBAD7D'}
                                        />}>
                                    Hiking/backpacking/biking
                                </List.Item>
                                <List.Item
                                    icon={
                                        <School
                                            size={22}
                                            strokeWidth={2}
                                            color={'#FBAD7D'}
                                        />}>
                                    Continually learning new things
                                </List.Item>
                            </List>
                        </div>
                    </div>
                </Center>
            </div >
        </div >


    )
}

export default Skills;