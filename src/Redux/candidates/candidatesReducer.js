import { CREATE_NEW_CALL, GET_ALL_CANDIDATES, UPDATE_CANDIDATE } from "./actionTypes";

const defaultState = {
    candidates: []
}

export function candidatesReducer(state = defaultState.candidates, action){
    switch(action.type){
        case GET_ALL_CANDIDATES:
            return action.payload 
        case UPDATE_CANDIDATE:
            let updatedState = [...state]
            let idx = updatedState.findIndex(candy => candy.id === action.payload.id)
            updatedState[idx] = action.payload
            return updatedState
        case CREATE_NEW_CALL:
            let newState = [...state]
            let index = newState.findIndex(candy => candy.id === action.payload.candidateId)
            newState[index].calls.push(action.payload)
            return newState
        default: 
            return state
    }
}