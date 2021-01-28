import React, { Component } from 'react'
import ProjectsContainer from '../Containers/ProjectsContainer'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {createProject, getProjects} from '../../Redux/projects/actions'
import { getProjectsTasks } from '../../Redux/tasks/actions'

class Calendar extends Component {

    state = {
        candidateColor: '#62c370',
        clientColor: '#1b9aaa'
    }

    componentDidMount(){
        const date = new Date()
        const today = `${date.getFullYear()}-${("0" + date.getMonth() + 1).slice(-2)}-${("0" + date.getDate()).slice(-2)}`
        const projects = [...this.props.projects].filter(project => project.date === today)
        if (projects.length === 0){
            //create 2 projects - candidate and client for today if there are no projects

            //userId changed to logged in user once auth implemented
            const candidateObj = {
                title: "Candidate",
                user_id: this.props.user.id,
                date: today
            }
            const clientObj = {
                title: "Client",
                user_id: this.props.user.id,
                date: today
            }

            this.props.createProject(candidateObj)
            this.props.createProject(clientObj)
        }
    }

    calendarEvents = () => {
        return [...this.props.projects].map(pro => {
            if (pro.archived){
                return {
                    title: `${pro.title} Task List`,
                    start: pro.date,
                    end: pro.date,
                    backgroundColor: 'green'
                }

            } else {
                return {
                    title: `${pro.title} Task List`,
                    start: pro.date,
                    end: pro.date,
                    backgroundColor: this.state[`${pro.title.toLowerCase()}Color`]
                }
            }
        })
    }

    dateClickHandler = async (info) => {
        const projects = [...this.props.projects].filter(project => project.date === info.dateStr)
        //get tasks for above projects
        for (let pro of projects){
            await this.props.getProjectsTasks(pro.id)
        }

            
        if (projects.length <=0 && info.date < new Date()){
            alert("This date already passed")
        } else if (projects.length <=0 && info.date > new Date()) {
            alert("You're looking too far ahead!")
        } else {
            this.props.history.push(`/home/projects/${info.dateStr}`)
        }
    }

    render() {
        console.log(this.props.tasks)
        return (
            <>
            <Switch>
                <Route path='/home/projects/:date' render={({match}) => {
                    let projectDate = match.params.date
                    
                    let projects = [...this.props.projects].filter(project => project.date === projectDate)

                   return <ProjectsContainer  projects={projects} tasks={this.props.tasks} />
                }
                } />
                <Route path='/home' render={() => {
                    return (
                        <div>
                            <FullCalendar plugins={[dayGridPlugin, interactionPlugin]}  dateClick={this.dateClickHandler} events={this.calendarEvents()}  />
                        </div>
                    )
                }} />
            </Switch>
            </>
        )
    }
}




const msp = (state) => {
    return {
        projects: state.projects,
        candidates: state.candidates,
        companies: state.companies,
        user: state.user,
        tasks: state.tasks
    }
}

const mdp = (dispatch) => {
    return {
        getProjects: (userId) => dispatch(getProjects(userId)),
        createProject: (object) => dispatch(createProject(object)),
        getProjectsTasks: (proId) => dispatch(getProjectsTasks(proId))
    }
}

export default connect(msp, mdp)(Calendar);
