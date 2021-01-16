import React, { Component } from 'react'
import ProjectsContainer from '../Containers/ProjectsContainer'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProjects } from '../../Redux/projects/actions'

class Calendar extends Component {

    componentDidMount(){
        //userId should be taken from login when auth implemented
        this.props.getProjects(2)
    }

    eventClickHandler = (info) => {
        this.props.history.push(`/home/projects/${info.dateStr}`)
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
                            <FullCalendar plugins={[dayGridPlugin, interactionPlugin]}  dateClick={this.eventClickHandler} events={[{daysOfWeek: [1,2,3,4,5], title: 'Candidate Task List', backgroundColor: 'orange'
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
        getProjects: (userId) => dispatch(getProjects(userId))
    }
}

export default connect(msp, mdp)(Calendar);
