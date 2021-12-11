import { types } from '../types/projectsTypes';

const initialProjectsState = {
    projects: [],
    tasks: {},
    columns: {},
    columnOrder: [],
    selectedProjectId: '',
    selectedProjectTitle: '',
    projectsQty: 0,
}

export const projectsReducer = (state = initialProjectsState, action) => {
    if (action.type === types.GET_PROJECTS) {
        return {
            ...state,
            projects: action.payload.projects,
            projectsQty: action.payload.projectsQty
        };
    }

    if (action.type === types.SET_CURRENT_PROJECT_ID) {
        console.log('llego id al reducer')
        return {
            ...state,
            selectedProjectId: action.payload.selectedProjectId
        }
    }

    if (action.type === types.GET_CURRENT_PROJECT) {
        console.log('llego el payload: ', action.payload);

        return {
            ...state,
            selectedProjectTitle: action.payload.projectTitle,
            tasks: action.payload.tasks,
            columns: action.payload.columns,
            columnOrder: action.payload.columnOrder,
            selectedProjectId: action.payload.selectedProjectId
        }
    }
    
    return {
        ...state
    };
}