import { CREATE_APPLICATION_FOR_CANDY, CREATE_NEW_CALL, CREATE_NEW_CANDIDATE, GET_ALL_CANDIDATES, UPDATE_CANDIDATE } from "./actionTypes";

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
        case CREATE_NEW_CANDIDATE:
            return [...state, action.payload]
        case CREATE_APPLICATION_FOR_CANDY:
            let nState = [...state]
            let i = nState.findIndex(candy => candy.id ===action.payload.candidateId)
            // debugger
            nState[i].applications.push(action.payload)
            return nState
        default: 
            return state
    }
}