import React, { Component } from 'react'
import ProjectsContainer from '../Containers/ProjectsContainer'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {createProject, getProjects} from '../../Redux/projects/actions'

class Calendar extends Component {

    componentDidMount(){
        const date = new Date()
        const today = `${date.getFullYear()}-${("0" + date.getMonth() + 1).slice(-2)}-${("0" + date.getDate()).slice(-2)}`

        const projects = [...this.props.projects].filter(project => project.date === today)
        if (projects.length <= 0){
            //create 2 projects - candidate and client for today if there are no projects

            //userId changed to logged in user once auth implemented
            const candidateObj = {
                title: "Candidate",
                user_id: 2,
                date: today
            }
            const clientObj = {
                title: "Client",
                user_id: 2,
                date: today
            }

            this.props.createProject(candidateObj)
            this.props.createProject(clientObj)
        }
    }

    dateClickHandler = async (info) => {
        const projects = [...this.props.projects].filter(project => project.date === info.dateStr)
        console.log(projects)
        if (projects.length <=0){
            alert("You can't look that far ahead!")
        } else {
            this.props.history.push(`/home/projects/${info.dateStr}`)
        }
    }

    render() {
        console.log(this.props.projects)
        return (
            <>
            <Switch>
                <Route path='/home/projects/:date' render={({match}) => {
                    let projectDate = match.params.date
                    let projects = [...this.props.projects].filter(project => project.date === projectDate)
                   return <ProjectsContainer projects={projects} />
                }
                } />
                <Route path='/home' render={() => {
                    return (
                        <div>
                            <FullCalendar plugins={[dayGridPlugin, interactionPlugin]}  dateClick={this.dateClickHandler} events={[{daysOfWeek: [1,2,3,4,5], title: 'Candidate Task List', backgroundColor: 'orange'
                        }, {daysOfWeek: [1,2,3,4,5], title: 'Client Task List'}]}  />
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
        projects: state.projects
    }
}

const mdp = (dispatch) => {
    return {
        getProjects: (userId) => dispatch(getProjects(userId)),
        createProject: (object) => dispatch(createProject(object))
    }
}

export default connect(msp, mdp)(Calendar);
