import {combineReducers} from 'redux'
import { candidatesReducer } from './candidates/candidatesReducer'
import { projectsReducer } from './projects/projectsReducer'
import { tasksReducer } from './tasks/tasksReducer'

export const rootReducer = combineReducers({
    projects: projectsReducer,
    tasks: tasksReducer,
    candidates: candidatesReducer
})