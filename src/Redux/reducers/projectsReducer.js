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
            projects: action.payload.projects
        };
    }
    
    return {
        ...state
    };
}