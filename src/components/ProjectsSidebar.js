import { VStack, HStack, useColorModeValue, Text } from '@chakra-ui/react';
import { HiViewBoards } from 'react-icons/hi';
import { IoIosJournal } from 'react-icons/io';

const ProjectsSidebar = () => {
    
    const containerBgColor = useColorModeValue('gray.100', 'gray.700');

    return (
        <VStack flexShrink={0} paddingY={4} width='full' height='full' maxW={{ base: 56, '2xl': 72 }} justify='flex-start' maxH='full' >
            <HStack w='full' borderRadius='md' flex={1} maxH='50px' p={2} backgroundColor={containerBgColor} cursor='pointer'>
                <HiViewBoards/>
                <Text fontWeight='600' fontSize='18px' >Kanban Boards</Text>
            </HStack>
            <HStack w='full' borderRadius='md' flex={1} maxH='50px' p={2} backgroundColor={containerBgColor} cursor='pointer'>
                <IoIosJournal/>
                <Text fontWeight='600' fontSize='18px' >Journals</Text>
            </HStack>
        </VStack>
    );
}

export default ProjectsSidebar;