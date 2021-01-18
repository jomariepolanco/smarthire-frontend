import { CREATE_TASK, GET_PROJECT_TASKS, UPDATE_TASK } from "./actionTypes"

export function getProjectsTasks(projectOneId, projectTwoId){
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/tasks')
        .then(r => r.json())
        .then(tasksData => {
            const tasks = tasksData.filter(task => task.projectId === projectOneId || task.projectId === projectTwoId)
            dispatch({type: GET_PROJECT_TASKS, payload: tasks})
        })
    }

}

export function updateTask(taskId, updateObj){
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateObj)
        })
        .then(r => r.json())
        .then(updatedTaskObj => dispatch({type: UPDATE_TASK, payload: updatedTaskObj}))
    }
}

export function createTask(taskObj){
    return function(dispatch){
        fetch('http://localhost:3000/api/v1/tasks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
        .then(r => r.json())
        .then(newTask => dispatch({type: CREATE_TASK, payload: newTask}))
    }
}