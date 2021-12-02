import { Flex, Grid, Box } from '@chakra-ui/react';

import ProjectItem from './ProjectItem';

import initialData from '../initialData';

const ProjectsList = () => {

    const { projects } = initialData;

    return (
        <Flex minH='full' w='full' justifyContent='center'>
            <Grid templateColumns='repeat(4, 1fr)' gap={6} minH='full' minW='full' p={4} overflowY='auto'>
                {projects.map((project) => <ProjectItem project={project} />)}
            </Grid>
        </Flex>
    );
}

export default ProjectsList;