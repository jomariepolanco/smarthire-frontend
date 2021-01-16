import { GET_PROJECT_TASKS } from "./actionTypes"

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