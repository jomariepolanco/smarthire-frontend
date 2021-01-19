import { CREATE_JOB_FOR_COMPANY, CREATE_NEW_CALL_FOR_COMPANY, CREATE_NEW_COMPANY, GET_ALL_COMPANIES, UPDATE_COMPANY } from "./actionTypes"

export function getCompanies(){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/companies', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(r => r.json())
        .then(companies => dispatch({type: GET_ALL_COMPANIES, payload: companies}))
    }
}

export function updateCompany(companyId, updateObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/companies/${companyId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(updateObj)
        })
        .then(r => r.json())
        .then(updatedCompany => dispatch({type: UPDATE_COMPANY, payload: updatedCompany}))
    }
}

export function createCompany(newCompanyObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/companies', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newCompanyObj)
        })
        .then(r => r.json())
        .then(newCo => dispatch({type: CREATE_NEW_COMPANY, payload: newCo}))
    }
}

export function createNewCall(newCallObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/client_calls', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newCallObj)
        })
        .then(r => r.json())
        .then(newCall => {
            dispatch({type: CREATE_NEW_CALL_FOR_COMPANY, payload: newCall})
        })
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
        .then(newJobObj => dispatch({type: CREATE_JOB_FOR_COMPANY, payload: newJobObj}))
    }
}