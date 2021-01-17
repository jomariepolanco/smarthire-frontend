import {combineReducers} from 'redux'
import { callsReducer } from './calls/callsReducer'
import { candidatesReducer } from './candidates/candidatesReducer'
import { projectsReducer } from './projects/projectsReducer'
import { tasksReducer } from './tasks/tasksReducer'

export const rootReducer = combineReducers({
    projects: projectsReducer,
    tasks: tasksReducer,
    candidates: candidatesReducer
})