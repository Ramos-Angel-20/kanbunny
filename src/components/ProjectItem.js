import { Box, Heading, Button, Flex, IconButton, Tooltip, Badge, Menu, MenuButton, MenuList, MenuItem, useColorModeValue } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi'

import yellow from '../assets/yellow.jpg';

const ProjectItem = ({ project }) => {
    
    //Colores para dark-mode
    const containerBgColor = useColorModeValue('gray.50', 'gray.700');
    
    return (
        <Flex w='100%' h='100%' minH='420px' borderRadius='md' overflow='hidden' direction='column' shadow='md' backgroundColor={containerBgColor}>
            <Box backgroundImage={yellow} flex={1}>
                <Flex p={4}>
                    <Badge backgroundColor='orange.500' color='white' p={2} >Created at: {new Date().getFullYear().toString()} </Badge>
                </Flex>
            </Box>
            <Flex p={4} justify='space-between' direction='column'>
                <Box p={4}>
                    <Heading fontSize='25px' textAlign='center'>{project.name}</Heading>
                </Box>
                <Flex justify='space-between'>
                    <Tooltip label='open me!' hasArrow>
                        <Button colorScheme='green'>View</Button>
                    </Tooltip>

                    <Menu flex={1}>
                        <MenuButton icon={<BsThreeDotsVertical />} as={IconButton}/>
                        <MenuList>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Edit</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ProjectItem;