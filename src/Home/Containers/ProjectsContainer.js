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
        if (tasks.length <=0){
            console.log('here is where you will create tasks based on who has not been called for 60+ days')
            //create tasks
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

export default connect(msp)(ProjectsContainer);
