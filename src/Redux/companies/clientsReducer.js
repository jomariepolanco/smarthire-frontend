import { CREATE_JOB_FOR_COMPANY, CREATE_NEW_CALL_FOR_COMPANY, CREATE_NEW_COMPANY, GET_ALL_COMPANIES, UPDATE_COMPANY } from "./actionTypes";

const defaultState = {
    companies: []
}

export function companiesReducer(state = defaultState.companies, action){
    switch(action.type){
        case GET_ALL_COMPANIES:
            return action.payload
        case UPDATE_COMPANY:
            let updatedState = [...state]
            let idx = updatedState.findIndex(co => co.id === action.payload.id)
            updatedState[idx] = action.payload
            return updatedState
        case CREATE_NEW_COMPANY:
            return [...state, action.payload]
        case CREATE_NEW_CALL_FOR_COMPANY:
            let newState = [...state]
            let index = newState.findIndex(co => co.id === action.payload.companyId)
            newState[index].calls.push(action.payload)
            return newState
        case CREATE_JOB_FOR_COMPANY:
            let jobState = [...state]
            let i = jobState.findIndex(co => co.id === action.payload.companyId)
            jobState[i].jobs.push(action.payload)
            return jobState
        default:
            return state
    }
}