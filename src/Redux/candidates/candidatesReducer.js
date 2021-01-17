import { GET_ALL_CANDIDATES } from "./actionTypes";

const defaultState = {
    candidates: []
}

export function candidatesReducer(state = defaultState.candidates, action){
    switch(action.type){
        case GET_ALL_CANDIDATES:
            return action.payload 
        default: 
            return state
    }
}