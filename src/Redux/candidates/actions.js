import { GET_ALL_CANDIDATES } from "./actionTypes"

export function getCandidates(){
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/candidates')
        .then(r => r.json())
        .then(candies => dispatch({type: GET_ALL_CANDIDATES, payload: candies}))
    }
}