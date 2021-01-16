import { GET_USER_PROJECTS, CREATE_PROJECT_FOR_DATE } from "./actionTypes"

export function getProjects(userId){
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/projects')
        .then(r => r.json())
        .then(projects => {
            let userProjects = projects.filter(project => project.userId === userId)
            dispatch({type: GET_USER_PROJECTS, payload: userProjects})
        })
    }
}

export function createProject(newObj){ 
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/projects', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
        .then(r => r.json())
        .then(newProject => dispatch({type: CREATE_PROJECT_FOR_DATE, payload: newProject}))
    }
}