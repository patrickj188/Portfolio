import React, { useState } from 'react';
import {
    Text,
    Button
} from '@mantine/core';


const NavbarItems = ({ about, project, skills }) => {
    return (
        <div>
            <Text>
                <Button onClick={about} variant="subtle" color="dark" radius="md" size="xl">
                    About
                </Button>
            </Text>
            <Text>
                <Button onClick={project} variant="subtle" color="dark" radius="md" size="xl">
                    Projects
                </Button>
            </Text>
            <Text>
                <Button onClick={skills} variant="subtle" color="dark" radius="md" size="xl">
                    Skills
                </Button>
            </Text>
        </div >
    )
}

export default NavbarItems;