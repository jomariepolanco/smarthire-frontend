import { CREATE_TASK, GET_PROJECT_TASKS, UPDATE_TASK } from "./actionTypes";

const defaultState = {
    tasks: []
}

export function tasksReducer(state = defaultState.tasks, action){
    switch(action.type){
        case GET_PROJECT_TASKS:
            return action.payload
        case UPDATE_TASK:
            let updatedState = [...state]
            const idx = updatedState.findIndex(task => task.id === action.payload.id) 
            updatedState[idx] = action.payload
            return updatedState
        case CREATE_TASK:
            return [...state, action.payload]
        default:
            return state
    }
}