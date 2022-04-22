import React, { useState } from 'react';
import {
    Text,
    Button,
    Group
} from '@mantine/core';


const NavbarItems = ({ about, project, skills }) => {
    return (
    <Group position="center" spacing="xl" grow>
      <Button onClick={about}  variant="outline">About</Button>
      <Button onClick={project} variant="outline">Projects</Button>
    </Group>
    )
}

export default NavbarItems;