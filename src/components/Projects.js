import React from "react";
import { Card, Image, Text, Badge, Group, useMantineTheme, SimpleGrid, Center } from '@mantine/core';
import projectItems from "../projectList.json"
import '../components/style/project.css'



const Projects = () => {
    const theme = useMantineTheme();


    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    const renderedProjectList = projectItems.map(project => {
        return (

            <Card shadow="sm" p="lg">
                <Card.Section>
                    <Image src={project.img} height={160} alt={project.project} />
                </Card.Section>

                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Text weight={500}>{project.project}</Text>
                </Group>

                <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                    {project.about}
                </Text>
                <Badge color="pink" variant="light" style={{ margin: 8 }}>
                    <a href={project.website} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Website</a>
                </Badge>
                <Badge color="blue" variant="light" style={{ margin: 8 }}>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>GitHub</a>
                </Badge>
            </Card>
        )
    })

    return (
        <div className="projectContainer">
            <Center className="projectTitle">
                <h1>Some Projects</h1>
            </Center>
            <SimpleGrid
                breakpoints={[
                    { minWidth: 'sm', cols: 1 },
                    { minWidth: 800, cols: 3 },
                ]}
            >
                {renderedProjectList}
            </SimpleGrid>
        </div>

    )
}

export default Projects;