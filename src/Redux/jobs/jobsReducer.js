import { CREATE_JOB_IN_JOBS, GET_JOBS } from "./actionTypes";

const defaultState = {
    jobs: []
}
export function jobsReducer(state = defaultState.jobs, action){
    switch(action.type){
        case GET_JOBS:
            return action.payload
        case CREATE_JOB_IN_JOBS:
            return [...state, action.payload]
        default:
            return state
    }
}