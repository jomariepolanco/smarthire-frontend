import { CREATE_APPLICATION_FOR_JOB, CREATE_JOB_IN_JOBS, GET_JOBS } from "./actionTypes";

const defaultState = {
    jobs: []
}
export function jobsReducer(state = defaultState.jobs, action){
    switch(action.type){
        case GET_JOBS:
            return action.payload
        case CREATE_JOB_IN_JOBS:
            return [...state, action.payload]
        case CREATE_APPLICATION_FOR_JOB:
            let updatedState = [...state]
            let idx = updatedState.findIndex(job => job.id === action.payload.openJobId)
            updatedState[idx].jobApplications.push(action.payload)
            return updatedState
        default:
            return state
    }
}