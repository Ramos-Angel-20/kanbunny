import { BsThreeDots, BsPlusLg } from 'react-icons/bs';
import { Flex, VStack, Editable, EditablePreview, EditableInput, IconButton, Button, Box, Textarea, Collapse } from '@chakra-ui/react';

import { useState, useEffect } from 'react';

const Column = () => {

    const [inputBoxIsOpen, setInputBoxIsOpen] = useState(false);
    const [title, setTitle] = useState('hola'); //El title vendra desde las props
    const [inputWasClicked, setInputWasClicked] = useState(false);
    
    useEffect(() => {

        if (inputWasClicked) {
            console.log(`Subiendo: ${title}`);
            setInputWasClicked(false);
        }

    }, [inputWasClicked]);

    const titleInputChangeHandler = e => {
        setTitle(e.target.value);
    }

    const titleInputBlurHandler = () => {
        setInputWasClicked(true);
    }


    return (
        <VStack backgroundColor='gray.200' w='400px' h='auto' minH='150px' maxH='90%' borderRadius='lg' shadow='lg' justify='space-between' >

            {/* Titulo de la columna */}
            <Flex w='full' align='center' h='60px' justify='space-between' p={2}>
                <Editable value={title} flex={1} maxW='80%' fontWeight='600' fontSize='20px' >
                    <EditablePreview />
                    <EditableInput onBlur={titleInputBlurHandler} onChange={titleInputChangeHandler} />
                </Editable>
                <IconButton icon={<BsThreeDots />} />
            </Flex>

            {/* Espacio para el listado de tasks */}
            <VStack w='full' h='full' overflowY='auto' p={2}  flex={1}>
                <Box backgroundColor='white' minH='100px' w='full' borderRadius='lg' shadow='md'>

                </Box>
                <Box backgroundColor='white' minH='300px' w='full' borderRadius='lg' shadow='md'>

                </Box>
                <Box backgroundColor='white' minH='200px' w='full' borderRadius='lg' shadow='md'>

                </Box>
                <Box backgroundColor='white' minH='100px' w='full' borderRadius='lg' shadow='md'>

                </Box>
            </VStack>

            {/* Seccion donde esta la funcionalidad para agregar mas tasks */}
            <Flex p={2} w='full' direction='column' h='auto' maxH='180px'>
                <Collapse height='200px' startingHeight={0} in={inputBoxIsOpen}>
                    <Textarea resize='none' h='full' variant='fill' placeholder='Your new task description' />
                </Collapse>
                <Button leftIcon={<BsPlusLg />} minH='40px' marginTop='10px' colorScheme='green' w='full' onClick={() => setInputBoxIsOpen(!inputBoxIsOpen)}>Add card</Button>
            </Flex>
        </VStack>
    )
}

export default Column
