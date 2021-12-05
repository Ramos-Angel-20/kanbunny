import { Flex } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Navbar from '../components/Navbar';
import ProjectsDisplay from '../components/ProjectsDisplay';
import { startGetProjects } from '../Redux/actions/projectsActions';

const ProjectsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetProjects('38821df2-7287-40f4-a791-c8bfff0546b8'));
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