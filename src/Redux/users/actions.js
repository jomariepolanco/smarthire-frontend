import { LOGIN_SUCCESS, LOGOUT, SET_USER, SIGNUP_SUCCESS } from "./actionTypes"

export function loginUser(credentials){
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/login', {
            method: "POST",
            headers: {
                Accepts: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user: credentials})
        })
        .then( r => r.json())
        .then(user => {
            localStorage.setItem('token', user.jwt)
            dispatch({type: LOGIN_SUCCESS, payload: user.user})
        })
    }
}

export function startUserSession(){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/profile', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accepts: "application/json"
            }
        })
        .then(r => r.json())
        .then(user => {
            dispatch({type: SET_USER, payload: user.user})
        })
    }
}

export function signUpUser(userObj){
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accepts: 'application/json'
            },
            body: JSON.stringify({user: userObj})
        })
        .then(r => r.json())
        .then(user => {
            localStorage.setItem('token', user.jwt)
            dispatch({type: SIGNUP_SUCCESS, payload: user.user})
        })
    }
}

export function logOutUser(){
    return {type: LOGOUT}
}