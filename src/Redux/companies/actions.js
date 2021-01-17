import { GET_ALL_COMPANIES } from "./actionTypes"

export function getCompanies(){
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/companies')
        .then(r => r.json())
        .then(companies => dispatch({type: GET_ALL_COMPANIES, payload: companies}))
    }
}