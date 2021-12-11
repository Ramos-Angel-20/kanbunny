import { types } from "../types/projectsTypes";
import { getProjects, getProjectData } from "../../lib/backendService";

// Obtener listado de proyectos
export const startGetProjects = userId => {
    return (dispatch) => {

        getProjects(userId).then(res => {
            dispatch(getProjectsHandler(res));
        }).catch(err => {
            console.log(err);
        });
    };
}

const getProjectsHandler = projects => {
    
    console.log('[getProjectsHandler]: ', projects);
    
    return {
        type: types.GET_PROJECTS,
        payload: {
            projects: projects,
            projectsQty: projects.length
        }
    };
}

//Obtener un proyecto en especifico...
export const startGetCurrentProject = projectId => {
    console.log('[startGetCurrentProject]');

    return (dispatch) => {

        getProjectData(projectId).then(res => {

            dispatch( getCurrentProjectHandler(res) );

        }).catch(err => {
            console.log(err);
        });
    }
}

const getCurrentProjectHandler = project => {

    const taskColumns = {};
    const tasksList = {};
    const columnOrder = [];
    
    for (const column of project.columns) {

        const columnId = column.id;
        columnOrder.push(columnId);

        let tasksIds = project.tasks.filter((task) => {

            if (task.columnId === columnId) {
                return task;
            }

        });

        if (!tasksIds[0]) {
            tasksIds = [];
        }

        const relatedTasks = tasksIds.map(item => item.id);

        taskColumns[columnId] = {
            id: columnId,
            title: column.title,
            tasksIds: relatedTasks
        };
    }

    // Convertir la respuesta de tasks al formato que necesitamos...
    for (const task of project.tasks) {
        tasksList[task.id] = task;
    }
    
    return {
        type: types.GET_CURRENT_PROJECT,
        payload: {
            projectTitle: project.project.title,
            tasks: { ...tasksList },
            columns: { ...taskColumns },
            columnOrder: columnOrder,
            selectedProjectId: project.project.id
        }
    };
}

export const setCurrentProjectIdHandler = projectId => {
    return {
        type: types.SET_CURRENT_PROJECT_ID,
        payload: {
            selectedProjectId: projectId
        }
    };
}