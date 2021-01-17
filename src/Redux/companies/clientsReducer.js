import { GET_ALL_COMPANIES, UPDATE_COMPANY } from "./actionTypes";

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
        default:
            return state
    }
}