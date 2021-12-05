import { types } from "../types/projectsTypes";
import { getProjects } from "../../lib/backendService";

export const startGetProjects = userId => {
    return (dispatch) => {

        getProjects(userId).then(res => {
            dispatch( getProjectsHandler(res) );
        }).catch(err => {
            console.log(err);
        });
    };
}

export const getProjectsHandler = (projects) => {
    
    return {
        type: types.GET_PROJECTS,
        payload: {
            projects: projects
        }
    };
}