import { GET_JOBS } from "./actionTypes";

const defaultState = {
    jobs: []
}
export function jobsReducer(state = defaultState.jobs, action){
    switch(action.type){
        case GET_JOBS:
            return action.payload
        default:
            return state
    }
}