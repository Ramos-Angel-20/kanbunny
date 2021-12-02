import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { HStack, VStack, Flex, Container } from '@chakra-ui/react';

import BoardList from './BoardList';
import AddTask from './AddTask';

const columnOrder = ['1', '2', '3'];


const Board = () => {
    return (
        <Container minW='full' minH='100vh'>
            <DragDropContext onDragEnd={e => console.log(e)} >
                <Droppable droppableId='hola' type='list' direction='horizontal'>
                    {(provided, snapshot) => (
                        <Flex ref={provided.innerRef} {...provided.droppableProps} minH='100vh' minW='full' backgroundColor='blue' >
                            {columnOrder.map((columnId, index) => {
                                return (
                                    <BoardList columnId={columnId} index={index}/>
                                );
                            })}
                            <AddTask/>
                        </Flex>              
                        
                    )}
                </Droppable>

            </DragDropContext>
        </Container>
    );
}

export default Board;