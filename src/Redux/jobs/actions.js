import { CREATE_JOB, GET_JOBS } from "./actionTypes"

export function getJobs(){
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/open_jobs')
        .then(r => r.json())
        .then(jobs => dispatch({type: GET_JOBS, payload: jobs}))
    }
}

export function createJob(jobObj){
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/open_jobs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jobObj)
        })
        .then(r => r.json())
        .then(newJobObj => dispatch({type: CREATE_JOB, payload: newJobObj}))
    }
}