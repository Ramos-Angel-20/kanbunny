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
    return {
        ...state
    }
}