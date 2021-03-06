import { GET_USER_PROJECTS, CREATE_PROJECT_FOR_DATE, UPDATE_PROJECT } from "./actionTypes"

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

export function createProject(newObj, tasksArray = null, date = null, createTask){ 
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
        .then(newProject => {
            dispatch({type: CREATE_PROJECT_FOR_DATE, payload: newProject})
            for (let task of tasksArray){
                const taskObj = {
                    archived: false,
                    date: date,
                    content: task,
                    project_id: newProject.id
                }
                createTask(taskObj)
            }
        })
    }
}

export function updateProject(projectId, updateObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/projects/${projectId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(updateObj)
        })
        .then(r => r.json())
        .then(updatedProject => dispatch({type: UPDATE_PROJECT, payload: updatedProject}))
    }
}