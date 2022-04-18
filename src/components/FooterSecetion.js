import React from 'react';
import { Footer, Center, Text, Space } from '@mantine/core';
import resume from '../components/content/PatrickJohnson_Resume V3.pdf'


const FooterSecetion = () => {

  return (
    <Footer height={60} p="md">
      <Center>
        <Text
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        >
          <a href="https://www.linkedin.com/in/patrickdeanjohnson/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Linkedin</a>
        </Text>
        <Space w="xl" />
        <Text
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        >
          <a href="https://github.com/patrickj188" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
        </Text>
        <Space w="xl" />
        <Text
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        >
          <a href={resume} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Resume</a>
        </Text>
      </Center>
    </Footer>
  )

}

export default FooterSecetion;
