import { Flex } from '@chakra-ui/react';

import EmptyList from './EmptyList';
import initialData from '../initialData';
import ProjectsList from './ProjectsList';

const ProjectsDisplay = () => {
    
    const { projects } = initialData;

    return (
        <Flex minH='full' align='center' w='full' justifyContent='center'>
            {projects.length < 1 ? <EmptyList/> : <ProjectsList/>}
        </Flex>
    );
}

export default ProjectsDisplay;