import { LOGIN_SUCCESS, SET_USER } from "./actionTypes";
import {browserHistory} from 'react-router'

const defaultState = {
    user: null
}

export function usersReducer(state = defaultState.user, action){
    switch(action.type){
        case LOGIN_SUCCESS:
            return action.payload
        case SET_USER:
            return action.payload 
        default:
            return state
    }
}