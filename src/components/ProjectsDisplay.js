import { Flex, HStack } from '@chakra-ui/react';

import EmptyList from './EmptyList';
import initialData from '../initialData';
import ProjectsList from './ProjectsList';
import ProjectsSidebar from './ProjectsSidebar';

const ProjectsDisplay = () => {

    const { projects } = initialData;

    return (
        <HStack minH='full' w='full' maxH='full' flex={1} align='center'>
            <ProjectsSidebar />
            <Flex h='full' w='full' align='center' justify='center'>
                {projects.length < 1 ? <EmptyList /> : <ProjectsList />}
            </Flex>
        </HStack>
    );
}

export default ProjectsDisplay;