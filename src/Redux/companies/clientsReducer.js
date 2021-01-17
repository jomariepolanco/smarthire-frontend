import { GET_ALL_COMPANIES } from "./actionTypes";

const defaultState = {
    companies: []
}

export function companiesReducer(state = defaultState.companies, action){
    switch(action.type){
        case GET_ALL_COMPANIES:
            return action.payload
        default:
            return state
    }
}