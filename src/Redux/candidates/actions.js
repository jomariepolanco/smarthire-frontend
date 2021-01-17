import { GET_ALL_CANDIDATES, UPDATE_CANDIDATE } from "./actionTypes"

export function getCandidates(){
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/candidates')
        .then(r => r.json())
        .then(candies => dispatch({type: GET_ALL_CANDIDATES, payload: candies}))
    }
}

export function updateCandidate(candidateId, updateObj){
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/candidates/${candidateId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateObj)
        })
        .then(r => r.json())
        .then(updatedCandy => {
            console.log(updatedCandy)
            dispatch({type: UPDATE_CANDIDATE, payload: updatedCandy})
        })
    }
}