import { Container, Flex, VStack, HStack } from '@chakra-ui/react';

import Navbar from '../components/Navbar';
import BoardsList from '../components/BoardsList';

const ProjectsPage = () => {
    return (
        <Flex direction='column' minH='100vh'>
            <Navbar />
            <Flex w='90%' maxW='1800px' minH='full' flex={1} margin='0 auto' justify='center' >
                <BoardsList/>
            </Flex>
        </Flex>
    );
}

export default ProjectsPage;