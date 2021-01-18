import { CREATE_JOB, GET_JOBS } from "./actionTypes";

const defaultState = {
    jobs: []
}
export function jobsReducer(state = defaultState.jobs, action){
    switch(action.type){
        case GET_JOBS:
            return action.payload
        case CREATE_JOB:
            return [...state, action.payload]
        default:
            return state
    }
}