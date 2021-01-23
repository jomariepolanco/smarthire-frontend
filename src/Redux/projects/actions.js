import { GET_USER_PROJECTS, CREATE_PROJECT_FOR_DATE } from "./actionTypes"

export function getProjects(userId){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/projects', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(r => r.json())
        .then(projects => {
            let userProjects = projects.filter(project => project.userId === userId)
            dispatch({type: GET_USER_PROJECTS, payload: userProjects})
        })
    }
}

export function createProject(newObj){ 
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/projects', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newObj)
        })
        .then(r => r.json())
        .then(newProject => dispatch({type: CREATE_PROJECT_FOR_DATE, payload: newProject}))
    }
}
