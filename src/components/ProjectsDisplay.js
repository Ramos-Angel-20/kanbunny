import { Flex, HStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import EmptyList from './EmptyList';
import ProjectsList from './ProjectsList';
import ProjectsSidebar from './ProjectsSidebar';

const ProjectsDisplay = () => {

    const { projects} = useSelector(state => state.projects);
    console.log(projects)
    return (
        <HStack minH='full' w='full' maxH='full' flex={1} align='center'>
            <ProjectsSidebar />
            <Flex h='full' w='full' align='center' justify='center'>
                {projects.length < 1 ? <EmptyList /> : <ProjectsList projects={projects}/>}
            </Flex>
        </HStack>
    );
}

export default ProjectsDisplay;