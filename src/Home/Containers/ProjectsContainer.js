import React, { Component } from 'react'
import ProjectCard from '../Components/ProjectCard'
import {Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'
import {getProjectsTasks} from '../../Redux/tasks/actions'

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
                  console.log('create task')
              }
          })
          //find last client call
        }
    }

    // find60PlusDayCalls = () => {
    //     //return calls where more than 60 days have passed
    //     if (this.props.calls.length > 0){
    //         // console.log(this.props.calls)
    //         // debugger
    //         const calls = [...this.props.calls].filter(call => {
    //             const callDate = new Date(call.date)
    //             const today = new Date()
    //             const timeDifference = today.getTime() - callDate.getTime()
    //             const dayDifference = timeDifference / (1000 * 3600 * 24)
    //             return dayDifference >= 60
    //             // add user_id == logged in user
    //         } )
    //         this.createTodosFor60PlusDayCalls(calls)
    //     }
    // }

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

    }
}

export default connect(msp, mdp)(ProjectsContainer);
