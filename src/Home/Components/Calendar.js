import React, { Component } from 'react'
import ProjectsContainer from '../Containers/ProjectsContainer'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {createProject, getProjects} from '../../Redux/projects/actions'
import { getProjectsTasks } from '../../Redux/tasks/actions'
import styled from 'styled-components'

class Calendar extends Component {

    state = {
        candidateColor: 'orange',
        clientColor: 'blue'
    }

    componentDidMount(){
        const date = new Date()
        const today = `${date.getFullYear()}-${("0" + date.getMonth() + 1).slice(-2)}-${("0" + date.getDate()).slice(-2)}`

        const projects = [...this.props.projects].filter(project => project.date === today)
        if (projects.length <= 0){
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


        //color change for calendar
        for (let pro in projects){
            if (pro.tasks){
                if (pro.title === 'Candidate' && pro.tasks.every(task => task.archived)){
                    this.setState({candidateColor: 'green'})
                }
                if (pro.title === 'Client' && pro.tasks.every(task => task.archived)){
                    this.setState({clientColor: 'green'})
                }
            }
        }
    }

    dateClickHandler = (info) => {
        const projects = [...this.props.projects].filter(project => project.date === info.dateStr)
        //get tasks for above projects
        const projectOneId = projects[0].id
        const projectTwoId = projects[1].id
        this.props.getProjectsTasks(projectOneId, projectTwoId)
        
        if (projects.length <=0 && info.date < new Date()){
            alert("This date already passed")
        } else if (projects.length <=0 && info.date > new Date()) {
            alert("You're looking too far ahead!")
        } else {
            this.props.history.push(`/home/projects/${info.dateStr}`)
        }
    }

    render() {
        return (
            <>
            <Switch>
                <Route path='/home/projects/:date' render={({match}) => {
                    let projectDate = match.params.date
                    let projects = [...this.props.projects].filter(project => project.date === projectDate)
                   return <ProjectsContainer candidates={this.props.candidates} companies={this.props.companies} projects={projects} />
                }
                } />
                <Route path='/home' render={() => {
                    return (
                        <Wrapper>
                            <FullCalendar plugins={[dayGridPlugin, interactionPlugin]}  dateClick={this.dateClickHandler} events={[{daysOfWeek: [1,2,3,4,5], title: 'Candidate Task List', backgroundColor: this.state.candidateColor
                        }, {daysOfWeek: [1,2,3,4,5], title: 'Client Task List', backgroundColor: this.state.clientColor}]}  />
                        </Wrapper>
                    )
                }} />
            </Switch>
            </>
        )
    }
}

const Wrapper = styled.div`
    background: white;
    min-height: 80vh;
    width: 60%;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    border-radius: 2rem;
    z-index: 2;
    backdrop-filter: blur(2rem);
`


const msp = (state) => {
    return {
        projects: state.projects,
        candidates: state.candidates,
        companies: state.companies,
        user: state.user
    }
}

const mdp = (dispatch) => {
    return {
        getProjects: (userId) => dispatch(getProjects(userId)),
        createProject: (object) => dispatch(createProject(object)),
        getProjectsTasks: (projectOneId, projectTwoId) => dispatch(getProjectsTasks(projectOneId, projectTwoId))
    }
}

export default connect(msp, mdp)(Calendar);
