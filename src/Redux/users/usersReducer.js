import { LOGIN_SUCCESS, SET_USER, SIGNUP_SUCCESS } from "./actionTypes";

const defaultState = {
    user: null
}

export function usersReducer(state = defaultState.user, action){
    switch(action.type){
        case LOGIN_SUCCESS:
            return action.payload
        case SET_USER:
            return action.payload 
        case SIGNUP_SUCCESS:
            return action.payload
        default:
            return state
    }
}