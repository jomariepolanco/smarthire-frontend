import { CREATE_JOB, GET_JOBS } from "./actionTypes"

export function getJobs(){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/open_jobs', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(r => r.json())
        .then(jobs => dispatch({type: GET_JOBS, payload: jobs}))
    }
}

export function createJob(jobObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/open_jobs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(jobObj)
        })
        .then(r => r.json())
        .then(newJobObj => dispatch({type: CREATE_JOB, payload: newJobObj}))
    }
}