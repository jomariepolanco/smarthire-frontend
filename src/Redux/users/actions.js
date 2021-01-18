import { LOGIN_SUCCESS, SET_USER } from "./actionTypes"

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