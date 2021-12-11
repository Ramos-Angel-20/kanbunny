import { Flex } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Navbar from '../components/Navbar';
import ProjectsDisplay from '../components/ProjectsDisplay';
import { startGetProjects } from '../Redux/actions/projectsActions';

const ProjectsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startGetProjects('34f1d94f-86b1-4572-9d8c-e425713a4544') );
    });

    return (
        <Flex direction='column' minH='100vh'>
            <Navbar />
            <Flex w='90%' maxW='1800px' minH='full' maxH='full' flexShrink={0} flex={1} margin='0 auto' justify='center' >
                <ProjectsDisplay />
            </Flex>
        </Flex>
    );
}

export default ProjectsPage;