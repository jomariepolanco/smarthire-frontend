import { CREATE_NEW_CALL, CREATE_NEW_CANDIDATE, GET_ALL_CANDIDATES, UPDATE_CANDIDATE } from "./actionTypes"

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

export function createNewCandidate(candidateObj){
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/candidates', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(candidateObj)
        })
        .then(r => r.json())
        .then(newCandy => dispatch({type: CREATE_NEW_CANDIDATE, payload: newCandy}))
    }
}

export function createCandidateCall(newCallObj){
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/candidate_calls', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCallObj)
        })
        .then(r => r.json())
        .then(newCall => dispatch({type: CREATE_NEW_CALL, payload: newCall}))
    }
}