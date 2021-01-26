import { CREATE_TASK, GET_PROJECT_TASKS, UPDATE_TASK } from "./actionTypes"

export function getProjectsTasks(proId){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/tasks', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(r => r.json())
        .then(tasksData => {
            const tasks = tasksData.filter(task => task.projectId === proId)
            dispatch({type: GET_PROJECT_TASKS, payload: tasks})
        })
    }

}

export function updateTask(taskId, updateObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(updateObj)
        })
        .then(r => r.json())
        .then(updatedTaskObj => dispatch({type: UPDATE_TASK, payload: updatedTaskObj}))
    }
}

export function createTask(taskObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/tasks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(taskObj)
        })
        .then(r => r.json())
        .then(newTask => {
            dispatch({type: CREATE_TASK, payload: newTask})
        })
    }
}