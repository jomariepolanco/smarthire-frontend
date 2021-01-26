import { CREATE_APPLICATION_FOR_JOB } from "../jobs/actionTypes"
import { CREATE_APPLICATION_FOR_CANDY, CREATE_NEW_CALL, CREATE_NEW_CANDIDATE, GET_ALL_CANDIDATES, UPDATE_CANDIDATE} from "./actionTypes"

export function getCandidates(){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/candidates', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(r => r.json())
        .then(candies => dispatch({type: GET_ALL_CANDIDATES, payload: candies}))
    }
}

export function updateCandidate(candidateId, updateObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/candidates/${candidateId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(updateObj)
        })
        .then(r => r.json())
        .then(updatedCandy => {
            dispatch({type: UPDATE_CANDIDATE, payload: updatedCandy})
        })
    }
}

export function createNewCandidate(candidateObj, history){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/candidates', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(candidateObj)
        })
        .then(r => r.json())
        .then(newCandy => {
            dispatch({type: CREATE_NEW_CANDIDATE, payload: newCandy})
            history.push(`/candidates/${newCandy.id}`)
        })
    }
}

export function createCandidateCall(newCallObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/candidate_calls', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newCallObj)
        })
        .then(r => r.json())
        .then(newCall => dispatch({type: CREATE_NEW_CALL, payload: newCall}))
    }
}

export function createApplication(appObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/job_applications', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(appObj)
        })
        .then(r => r.json())
        .then(newApp => {
            // debugger
            dispatch({type: CREATE_APPLICATION_FOR_CANDY, payload: newApp})
            dispatch({type: CREATE_APPLICATION_FOR_JOB, payload: newApp})
        })
    }
}