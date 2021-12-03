const initialData = {
    tasks: {
        'task1': { id: 'task1', content: 'Crear el frontend' },
        'task2': { id: 'task2', content: 'Agregar la libreria react-beautiful-dnd' },
        'task3': { id: 'task3', content: 'Crear el backend' },
        'task4': { id: 'task4', content: 'Solucionar problemas de enlaces enlaces entre lista, tarea y proyecto' },
    },
    columns: {
        'column1': {
            id: 'column1',
            title: 'To do',
            taskIds: ['task1', 'task2', 'task3', 'task4']
        },
        'column2': {
            id: 'column2',
            title: 'In Progress',
            taskIds: []
        },
        'column3': {
            id: 'column3',
            title: 'Done',
            taskIds: []
        }
    },
    // Para facilitar el acomodo de las columnas
    columnOrder: ['column1', 'column2', 'column3'],
    projects: [
        {
            id: '1',
            name: 'Este proyecto si sirve'
        },
        {
            id: '2',
            name: 'Proyecto Dummy 2'
        },
        {
            id: '3',
            name: 'Proyecto Dummy 3'
        },
        {
            id: '4',
            name: 'Proyecto Dummy 4'
        },
        {
            id: '5',
            name: 'Proyecto Dummy 5'
        },
        
        
    ]
};

export default initialData;