import { CREATE_PROJECT_FOR_DATE, GET_USER_PROJECTS, UPDATE_PROJECT } from "./actionTypes";

const defaultState = {
    projects: []
}

export function projectsReducer(state = defaultState.projects, action){
    switch(action.type){
        case GET_USER_PROJECTS:
            return action.payload
        case CREATE_PROJECT_FOR_DATE:
            return [...state, action.payload]
        case UPDATE_PROJECT:
            let updatedState = [...state]
            let idx = updatedState.findIndex(pro => pro.id === action.payload.id)
            updatedState[idx] = action.payload 
            return updatedState
        default:
            return state
    }
}