import { Flex } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useEffect } from 'react';

import ProjectNavbar from '../components/project/ProjectNavbar';
import Project from '../components/project/Project';
import { startGetCurrentProject, setCurrentProjectIdHandler } from '../Redux/actions/projectsActions';


const ProjectPage = () => {

    
    const dispatch = useDispatch();
    const { selectedProjectTitle } = useSelector(state => state.projects);
    const { projectId } = useParams();



    useEffect(() => {
        
        dispatch( setCurrentProjectIdHandler(projectId) );
        dispatch( startGetCurrentProject(projectId) );
    
    }, [projectId, startGetCurrentProject, setCurrentProjectIdHandler]);




    return (
        <Flex direction='column' minH='100vh' backgroundColor='blue.400'>
            <ProjectNavbar projectTitle={selectedProjectTitle} />
            <Flex w='90%' maxW='1800px' minH='full' maxH='full' flexShrink={0} flex={1} margin='0 auto' justify='center' >
                <Project />
            </Flex>
        </Flex>
    );
}

export default ProjectPage;