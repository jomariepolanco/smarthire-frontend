import { GET_USER_PROJECTS } from "./actionTypes"

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