import { CREATE_APPLICATION } from "./actionTypes";

const defaultState = {
    applications: []
}

export function applicationsReducer(state = defaultState.applications, action){
    switch(action.type){
        case CREATE_APPLICATION:
            return [...state, action.payload]
        default:
            return state
    }
}