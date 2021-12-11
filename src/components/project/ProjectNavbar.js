import {
    Button,
    Flex,
    Container,
    Text,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorMode,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { IoMdMoon } from 'react-icons/io';
import { BiLogOut, BiUser, BiChevronDown } from 'react-icons/bi';
import { BsFillSunFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import iconBg from '../../assets/KanbunnyIconBack2.svg'

const ProjectNavbar = ({ projectTitle }) => {

    const containerBgColor = useColorModeValue('gray.50', 'gray.700');
    const { toggleColorMode, colorMode } = useColorMode();
    const navigate = useNavigate();

    const homeRedirectHandler = () => {
        localStorage.removeItem('project-id');
        navigate('/projects');
    }

    return (
        <Box minW='full' maxH='100px' h='auto' shadow='lg' backgroundColor={containerBgColor}>
            <Container maxW='1800px' w='90%'>
                <Flex minW='full' px={0} py={2} align='center' justify='space-between'>

                    <img src={iconBg} alt='Kanbunny' style={{ width: '40px', cursor: 'pointer' }} onClick={homeRedirectHandler} />
                    <Text flex={1} fontWeight='800' fontSize='20px' paddingX={4} >{projectTitle}</Text>

                    <Flex align='center' justify='space-between' w='200px'>
                        <Menu>
                            {({ onClose }) => (
                                <>
                                    <MenuButton as={Button} backgroundColor='#E53E3E' fontSize='lg' rightIcon={<BiChevronDown />} color='white' _active={{ bg: '#E53E3E' }} _hover={{ bg: '#E53E3E' }}>
                                        Actions
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem fontSize='lg' icon={<BiUser />} fontWeight='600' onClick={() => onClose()}>My account</MenuItem>
                                        <MenuItem fontSize='lg' icon={<BiLogOut />} fontWeight='600' onClick={() => onClose()}>Log out</MenuItem>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                        <IconButton
                            color='white'
                            fontSize='20px'
                            onClick={toggleColorMode}
                            icon={colorMode === 'light' ? <IoMdMoon /> : <BsFillSunFill />}
                            backgroundColor={`${colorMode === 'light' ? 'purple.500' : 'orange.300'}`}
                            _hover={`${colorMode === 'light' ? 'purple.500' : 'orange.300'}`}
                            _focus={`${colorMode === 'light' ? 'purple.500' : 'orange.300'}`}
                            _active={`${colorMode === 'light' ? 'purple.500' : 'orange.300'}`}
                        />
                    </Flex>

                </Flex>
            </Container>
        </Box>
    );
}

export default ProjectNavbar;