import { GET_ALL_COMPANIES, UPDATE_COMPANY } from "./actionTypes"

export function getCompanies(){
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/companies')
        .then(r => r.json())
        .then(companies => dispatch({type: GET_ALL_COMPANIES, payload: companies}))
    }
}

export function updateCompany(companyId, updateObj){
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/companies/${companyId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateObj)
        })
        .then(r => r.json())
        .then(updatedCompany => dispatch({type: UPDATE_COMPANY, payload: updatedCompany}))
    }
}