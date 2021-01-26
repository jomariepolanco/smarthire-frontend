import React, { Component } from 'react'
import ProjectCard from '../Components/ProjectCard'
import {Card, Checkbox, Grid, Item} from 'semantic-ui-react'
import { connect } from 'react-redux'
import {createTask, getProjectsTasks} from '../../Redux/tasks/actions'
import CreateProjectForm from '../Components/CreateProjectForm'
import { updateProject } from '../../Redux/projects/actions'

class ProjectsContainer extends Component {

    componentDidMount(){
        const candidate = [...this.props.projects].find(pro => pro.title === "Candidate")

        const client = [...this.props.projects].find(pro => pro.title === "Client")

        const tasks = [...this.props.tasks].filter(task => task.projectId === candidate.id || task.projectId === client.id)
        if (tasks.length <= 0){
          //find last candidate call
          let lastCandiesCall = [...this.props.candidates].map(candy => [new Date(Math.max(...candy.calls.map(e => new Date(e.date)))), candy.id])
            
          lastCandiesCall.forEach(call => {
              if (((new Date().getTime() - call[0].getTime()) / (1000 * 3600 * 24)) >= 60){
                  //create task
                  const candyTaskObj = {
                      archived: false,
                      date: new Date().toDateString(),
                      project_id: candidate.id,
                      content: `Call ${this.props.candidates.find(candy => candy.id === call[1]).firstName + ' ' + this.props.candidates.find(candy => candy.id === call[1]).lastName} for 60+ day check`
                  }
                  this.props.createTask(candyTaskObj)
              }
          })
            //find last client call
            let lastClientsCall = [...this.props.companies].map(co => [new Date(Math.max(...co.calls.map(e => new Date(e.date)))), co.id])

            lastClientsCall.forEach(call => {
                if (((new Date().getTime() - call[0].getTime()) / (1000 * 3600 * 24)) >= 60){
                    const coTaskObj = {
                        archived: false,
                        date: new Date().toDateString(),
                        project_id: client.id,
                        content: `Call ${this.props.companies.find(co => co.id === call[1]).name} for 60+ day check`
                    }
                    this.props.createTask(coTaskObj)
                }
            })
        }
    }

    // clickHandler = (e, data) => {
    //     const projectId = data.value 
    //     const pro = [...this.props.projects].find(pro => pro.id === projectId)
    //     let updateObj;
    //     if (pro.archived){
    //         updateObj = {archived: false}
    //     } else {
    //         updateObj = {archived: true}
    //     }

    //     this.props.updateProject(projectId, updateObj)
    // }

    renderProjects = () => {
        return [...this.props.projects].map(project => {
            const tasks = [...this.props.tasks].filter(task => task.projectId === project.id)
            return(
                <Grid.Row key={project.id} columns={1}>
                    <Grid.Column>
                    <Card centered fluid>
                <Item>
                    <Card.Header as='h1' textAlign='center'>
                        {/* <Checkbox onClick={this.clickHandler} checked={project.archived} value={project.id} /><span> </span> */}
                        {project.title}
                    </Card.Header>
                    <Card.Content>
                        <ProjectCard project={project} tasks={tasks}/>
                    </Card.Content>
                </Item>
            </Card>
                    </Grid.Column>
                </Grid.Row>
            )
        })
    }
    render() {
        console.log(this.props.projects)
        return (
            <div>
                <CreateProjectForm />
                <h1>{this.props.projects[0].date.slice(5)}-{this.props.projects[0].date.slice(0,4)}</h1>
                <Grid divided='vertically'>
                    {this.renderProjects()}
                </Grid>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        tasks: state.tasks
    }
}

const mdp = (dispatch) => {
    return {
        createTask: (taskObj) => dispatch(createTask(taskObj)),
        updateProject: (projectId, updateObj) => dispatch(updateProject(projectId, updateObj))
    }
}

export default connect(msp, mdp)(ProjectsContainer);