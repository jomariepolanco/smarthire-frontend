import React, { Component } from 'react'
import ProjectCard from '../Components/ProjectCard'
import {Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'
import {createTask, getProjectsTasks} from '../../Redux/tasks/actions'

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

    renderCandidateProject = () => {
        const candidate = [...this.props.projects].find(pro => pro.title === "Candidate")
        const candidateTasks = [...this.props.tasks].filter(task => task.projectId === candidate.id)
        return(
            <>
            <h1>{candidate.title}</h1>
            <ProjectCard project={candidate} tasks={candidateTasks}/>
            </>
        )
    }

    renderClientProject = () => {
        const client = [...this.props.projects].find(pro => pro.title === "Client")
        const clientTasks = [...this.props.tasks].filter(task => task.projectId === client.id)
        return(
            <>
            <h1>{client.title}</h1>
            <ProjectCard project={client} tasks={clientTasks}/>
            </>
        )
    }
    render() {
        return (
            <div>
                <Grid divided='vertically'>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            {this.renderCandidateProject()}

                        </Grid.Column>
                    </Grid.Row>
                    
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            {this.renderClientProject()}
                        </Grid.Column>
                    </Grid.Row>

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
        createTask: (taskObj) => dispatch(createTask(taskObj))
    }
}

export default connect(msp, mdp)(ProjectsContainer);
