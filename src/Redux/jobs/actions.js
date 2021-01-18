import { GET_JOBS } from "./actionTypes"

export function getJobs(){
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/open_jobs')
        .then(r => r.json())
        .then(jobs => dispatch({type: GET_JOBS, payload: jobs}))
    }
}