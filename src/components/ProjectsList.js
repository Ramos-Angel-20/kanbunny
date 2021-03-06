import { Grid, VStack } from '@chakra-ui/react';

import ProjectItem from './ProjectItem';

const ProjectsList = ({ projects }) => {

    return (
        <VStack minH='100%' maxW='full' flex={1} maxH='calc(100vh - 60px)' >
            <Grid templateColumns='repeat(4, 1fr)' gap={6} minW='full' p={4} overflowY='auto' >
                {projects.map((project) => <ProjectItem project={project} key={project.id} />)}
            </Grid>
        </VStack>
    );
}

export default ProjectsList;