import { Flex, Heading, Button, useDisclosure } from '@chakra-ui/react';
import { IoBulbSharp } from 'react-icons/io5';

import ProjectModal from './ProjectModal';

const EmptyList = () => {

    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <Flex
            direction='column'
            align='center'
            justify='center'
            color='gray.400'
            shadow='lg'
            border='1px solid lightgray'
            h={400}
            justify='space-around'
            p={10}
            borderRadius='lg'
            w={500}
        >
            <IoBulbSharp style={{ fontSize: '100px' }} />
            <Heading w='full' textAlign='center' >Looks like you dont have any boards yet...</Heading>
            <Button backgroundColor='green.300' color='white' onClick={() => onOpen()} >Create one</Button>
            <ProjectModal isOpen={isOpen} onClose={onClose} />
        </Flex>
    )
}

export default EmptyList;