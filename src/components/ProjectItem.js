import { Box, Heading, Button, Flex, IconButton, Tooltip, Badge, Menu, MenuButton, MenuList, MenuItem, useColorModeValue } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoTrashSharp } from 'react-icons/io5';
import { TiEdit } from 'react-icons/ti';

import yellow from '../assets/yellow.jpg';

const ProjectItem = ({ project }) => {
    
    const containerBgColor = useColorModeValue('gray.50', 'gray.700');

    return (
        <Flex w='100%' h='100%' minH='420px' borderRadius='md' overflow='hidden' direction='column' shadow='md' backgroundColor={containerBgColor}>
            <Box backgroundImage={yellow} flex={1}>
                <Flex p={4}>
                    <Badge backgroundColor='orange.500' color='white' p={2} >Created at: {new Date(project.createdAt).toDateString()} </Badge>
                </Flex>
            </Box>
            <Flex p={4} justify='space-between' direction='column' h='160px' maxH='160px'>
                <Box p={4}>
                    <Heading fontSize='25px' maxH='60px' textAlign='center' wordBreak='break-word'>{project.title}</Heading>
                </Box>
                <Flex justify='space-between'>
                    <Tooltip label='open me!' hasArrow>
                        <Button colorScheme='green'>View</Button>
                    </Tooltip>

                    <Menu flex={1}>
                        <MenuButton icon={<BsThreeDotsVertical />} as={IconButton}/>
                        <MenuList>
                            <MenuItem fontSize='20px' fontWeight='600' icon={<IoTrashSharp/>} >Delete</MenuItem>
                            <MenuItem fontSize='20px' fontWeight='600' icon={<TiEdit />} >Edit</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ProjectItem;