import {combineReducers} from 'redux'
import { applicationsReducer } from './applications/applicationsReducer'
import { candidatesReducer } from './candidates/candidatesReducer'
import { companiesReducer } from './companies/clientsReducer'
import { jobsReducer } from './jobs/jobsReducer'
import { projectsReducer } from './projects/projectsReducer'
import { tasksReducer } from './tasks/tasksReducer'

export const rootReducer = combineReducers({
    projects: projectsReducer,
    tasks: tasksReducer,
    candidates: candidatesReducer,
    companies: companiesReducer,
    jobs: jobsReducer,
    applications: applicationsReducer
})