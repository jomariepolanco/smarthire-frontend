import { CREATE_PROJECT_FOR_DATE, GET_USER_PROJECTS } from "./actionTypes";

const defaultState = {
    projects: []
}

export function projectsReducer(state = defaultState.projects, action){
    switch(action.type){
        case GET_USER_PROJECTS:
            return action.payload
        case CREATE_PROJECT_FOR_DATE:
            return [...state, action.payload]
        default:
            return state
    }
}