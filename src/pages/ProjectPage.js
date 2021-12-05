import { Container, Flex, VStack, HStack } from '@chakra-ui/react';

import Navbar from '../components/Navbar';
import Project from '../components/project/Project';

const ProjectPage = () => {
    return (
        <Flex direction='column' minH='100vh' backgroundColor='blue.400'>
            <Navbar />
            <Flex w='90%' maxW='1800px' minH='full' maxH='full' flexShrink={0} flex={1} margin='0 auto' justify='center' >
                <Project/>  
            </Flex>            
        </Flex>
    );
}

export default ProjectPage;