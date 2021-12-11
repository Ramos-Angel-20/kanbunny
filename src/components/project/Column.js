import { BsThreeDots, BsPlusLg } from 'react-icons/bs';
import { Flex, VStack, Editable, EditablePreview, EditableInput, IconButton, Button, Box, Textarea, Collapse } from '@chakra-ui/react';
import { Draggable } from 'react-beautiful-dnd';

import { useState, useEffect } from 'react';

const Column = ({ column, tasks, index }) => {

    const [inputBoxIsOpen, setInputBoxIsOpen] = useState(false);
    const [title, setTitle] = useState(column.title); //El title vendra desde las props
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
        <Draggable draggableId={column.id} index={index} >
            {(provided) => (
                <VStack ref={provided.innerRef} {...provided.draggableProps} backgroundColor='gray.200' minW='400px' w='400px' h='auto' minH='150px' maxH='90%' borderRadius='lg' shadow='lg' justify='space-between'   >

                    {/* Titulo de la columna */}
                    <Flex w='full' align='center' h='60px' justify='space-between' p={2} {...provided.dragHandleProps} >
                        <Editable value={title} flex={1} maxW='80%' fontWeight='600' fontSize='20px' >
                            <EditablePreview />
                            <EditableInput onBlur={titleInputBlurHandler} onChange={titleInputChangeHandler} />
                        </Editable>
                        <IconButton icon={<BsThreeDots />} />
                    </Flex>

                    {/* Espacio para el listado de tasks */}
                    <VStack w='full' h='full' overflowY='auto' p={2} flex={1}>

                    </VStack>

                    {/* Seccion donde esta la funcionalidad para agregar mas tasks */}
                    <Flex p={2} w='full' direction='column' h='auto' maxH='180px'>
                        <Collapse height='200px' startingHeight={0} in={inputBoxIsOpen}>
                            <Textarea resize='none' h='full' variant='fill' placeholder='Your new task description' />
                        </Collapse>
                        <Button leftIcon={<BsPlusLg />} minH='40px' marginTop='10px' colorScheme='green' w='full' onClick={() => setInputBoxIsOpen(!inputBoxIsOpen)}>Add card</Button>
                    </Flex>
                </VStack>
            )}
        </Draggable>
    )
}

export default Column
