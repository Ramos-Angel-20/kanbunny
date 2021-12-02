import { Droppable, Draggable } from 'react-beautiful-dnd';
import { HStack, VStack, Flex, Container, Heading } from '@chakra-ui/react';

const BoardList = ({ columnId, index }) => {
    return (
        <Draggable draggableId={columnId} index={index}>
            {(provided) => (
                <Flex ref={provided.innerRef} {...provided.draggableProps} backgroundColor='gray.400' width='full' maxW='600px' flex={1} marginX={3}>
                    <Heading {...provided.dragHandleProps}>Un titulo</Heading>
                </Flex>
            )}
        </Draggable>
    )
}

export default BoardList;