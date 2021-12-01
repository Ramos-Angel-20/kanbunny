import {
    Button,
    Flex,
    Container,
    Heading,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorMode,
    IconButton
} from '@chakra-ui/react';
import { IoMdMoon } from 'react-icons/io';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { BsFillSunFill } from 'react-icons/bs';

import icon from '../assets/Kanbunny.svg';

const Navbar = () => {

    const { toggleColorMode, colorMode } = useColorMode();
    console.log(colorMode);

    return (
        <Box backgroundColor='gray.600' minW='full' maxH='100px' h='auto'>
            <Container maxW='1800px' w='90%'>
                <Flex minW='full' px={0} py={2} align='center' justify='space-between'>
                    <Flex>
                        <img src={icon} alt='Kanbunny' style={{ width: '25px', margin: '0 5px' }} />
                        <Heading color='white'>Kanbunny</Heading>
                    </Flex>


                    <Flex align='center' justify='space-between' w='150px'>
                        <Menu>
                            <MenuButton as={Button} colorScheme='red' fontSize='lg'>
                                Actions
                            </MenuButton>
                            <MenuList>
                                <MenuItem fontSize='lg' icon={<BiUser />} fontWeight='600'>My account</MenuItem>
                                <MenuItem fontSize='lg' icon={<BiLogOut />} fontWeight='600'>Log out</MenuItem>
                            </MenuList>
                        </Menu>
                        <IconButton color='white' fontSize='20px' onClick={toggleColorMode} icon={colorMode === 'light' ? <IoMdMoon /> : <BsFillSunFill />} backgroundColor={`${colorMode === 'light' ? 'purple.500': 'orange.300'}`}/>
                    </Flex>

                </Flex>
            </Container>
        </Box>
    );
}

export default Navbar;