// import { CREATE_APPLICATION } from "./actionTypes"

// export function createApplication(appObj){
//     const token = localStorage.getItem('token')
//     return function(dispatch){
//         fetch('http://localhost:3000/api/v1/job_applications', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify(appObj)
//         })
//         .then(r => r.json())
//         .then(newApp => dispatch({type: CREATE_APPLICATION, payload: newApp}))
//     }
// }