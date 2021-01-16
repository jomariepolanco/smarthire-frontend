import React, { Component } from 'react'
import ProjectsContainer from '../Containers/ProjectsContainer'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

class Calendar extends Component {

    eventClickHandler = (info) => {
        this.props.history.push(`/home/projects/${info.dateStr}`)
    }

    render() {
        return (
            <>
            <Switch>
                <Route path='/home/projects/:date' render={({match}) => {
                    let projectDate = match.params.date
                    let projects = this.props.projects.filter(project => project.date === projectDate)
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

// const mdp = (dispatch) => {
//     return {
//         getProjects: (id) => dispatch()
//     }
// }

export default connect(msp)(Calendar);
