import { HStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Column from './Column';

const Project = () => {

    const { selectedProjectId, columnOrder, tasks, columns } = useSelector(state => state.projects);

    return (
        <DragDropContext onDragEnd={(e) => console.log(e)} >
            <Droppable droppableId={selectedProjectId} type='list' direction='horizontal' >
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>


                        <HStack minW='full' maxH='calc(100vh - 60px)' paddingX={4} paddingY={0} spacing={4} overflow='auto'>
                            {columnOrder.map((columnId, index) => {

                                const column = columns[columnId];
                                const relatedTasks = column.tasksIds.map(id => tasks[id]);

                                return (
                                    <Column key={column.id} column={column} tasks={relatedTasks} index={index} />
                                );

                            })}

                        </HStack>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>

    );
}

export default Project;