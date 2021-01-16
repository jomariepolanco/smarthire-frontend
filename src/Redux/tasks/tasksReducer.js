import { GET_PROJECT_TASKS } from "./actionTypes";

const defaultState = {
    tasks: []
}

export function tasksReducer(state = defaultState.tasks, action){
    switch(action.type){
        case GET_PROJECT_TASKS:
            return action.payload
        default:
            return state
    }
}