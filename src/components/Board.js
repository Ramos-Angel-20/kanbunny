import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { HStack, VStack, Flex, Container } from '@chakra-ui/react';

import BoardList from './BoardList';
import AddTask from './AddTask';

import initialData from '../initialData';


const Board = () => {

    const { columnOrder, tasks, columns } = initialData;

    return (
        <Container minW='full' minH='100vh'>
            <DragDropContext onDragEnd={e => console.log(e)} >
                <Droppable droppableId='hola' type='list' direction='horizontal'>
                    {(provided, snapshot) => (
                        <Flex ref={provided.innerRef} {...provided.droppableProps} minH='100vh' minW='full' backgroundColor='blue' >
                            {columnOrder.map((columnId, index) => {

                                const column = columns[columnId];
                                const relatedTasks = column.tasksIds.map(id => tasks[id]);

                                return (
                                    <BoardList key={column.id} column={column} tasks={relatedTasks} index={index} />
                                );
                            })}
                            <AddTask />
                        </Flex>

                    )}
                </Droppable>

            </DragDropContext>
        </Container>
    );
}

export default Board;