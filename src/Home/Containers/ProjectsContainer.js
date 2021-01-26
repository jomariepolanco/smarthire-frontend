import React, { Component } from 'react'
import ProjectCard from '../Components/ProjectCard'
import {Accordion, Card, Grid, Header, Icon, Item} from 'semantic-ui-react'
import { connect } from 'react-redux'
import {createTask} from '../../Redux/tasks/actions'
import CreateProjectForm from '../Components/CreateProjectForm'
import { updateProject } from '../../Redux/projects/actions'
import DayJS from 'react-dayjs'

class ProjectsContainer extends Component {

    state = {
        activeIndex: -1
    }

    componentDidMount(){
        const candidate = [...this.props.projects].find(pro => pro.title === "Candidate")

        const client = [...this.props.projects].find(pro => pro.title === "Client")
        
        const tasks = [...this.props.tasks].filter(task => task.projectId === candidate.id || task.projectId === client.id)
        
        if (!tasks.some(task => task.content.includes('for 30+ day check'))){
            //find last candidate call
            let lastCandiesCall = [...this.props.candidates].map(candy => [new Date(Math.max(...candy.calls.map(e => new Date(e.date)))), candy.id])
            
            lastCandiesCall.forEach(call => {
                if (((new Date().getTime() - call[0].getTime()) / (1000 * 3600 * 24)) >= 30){
                    //create task
                    const candyTaskObj = {
                        archived: false,
                        date: new Date().toDateString(),
                        project_id: candidate.id,
                        content: `Call ${this.props.candidates.find(candy => candy.id === call[1]).firstName + ' ' + this.props.candidates.find(candy => candy.id === call[1]).lastName} for 30+ day check`
                    }
                    this.props.createTask(candyTaskObj)
                }
            })
    
            //find last client call
            let lastClientsCall = [...this.props.companies].map(co => [new Date(Math.max(...co.calls.map(e => new Date(e.date)))), co.id])
            
            lastClientsCall.forEach(call => {
                if (((new Date().getTime() - call[0].getTime()) / (1000 * 3600 * 24)) >= 30){
                    const coTaskObj = {
                        archived: false,
                        date: new Date().toDateString(),
                        project_id: client.id,
                        content: `Call ${this.props.companies.find(co => co.id === call[1]).name} for 30+ day check`
                    }
                    this.props.createTask(coTaskObj)
                }
            })
        }
    }

    

    renderProjects = () => {
        return [...this.props.projects].map((project, idx) => {
            
            const tasks = [...this.props.tasks].filter(task => task.projectId === project.id)
            return(
                <>
                    <Accordion.Title active={this.state.activeIndex === idx} index={idx} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        {project.title}
                    </Accordion.Title>    
                    <Accordion.Content active={this.state.activeIndex === idx}>
                        <ProjectCard project={project} tasks={tasks}/>
                    </Accordion.Content>
                </>
            )
        })
    }

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state 
        const newIndex = activeIndex === index ? -1 : index 

        this.setState({activeIndex: newIndex})
    }

    render() {
        return (
            <div>
                <Header as='h2' floated='left'>
                    <DayJS format='MMMM D, YYYY'>{this.props.projects[0].date}</DayJS>
                </Header>
                <CreateProjectForm />
                <br /><br /><br />
            
                <Accordion styled fluid>
                    {this.renderProjects()}
                </Accordion>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        tasks: state.tasks,
        candidates: state.candidates,
        companies: state.companies
    }
}

const mdp = (dispatch) => {
    return {
        createTask: (taskObj) => dispatch(createTask(taskObj)),
        updateProject: (projectId, updateObj) => dispatch(updateProject(projectId, updateObj))
    }
}

export default connect(msp, mdp)(ProjectsContainer);