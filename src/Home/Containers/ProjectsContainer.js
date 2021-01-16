import React, { Component } from 'react'
import ProjectCard from '../Components/ProjectCard'
import {Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'
import {getProjectsTasks} from '../../Redux/tasks/actions'

class ProjectsContainer extends Component {

    componentDidMount(){
        const projectOneId = [...this.props.projects][0].id
        const projectTwoId = [...this.props.projects][1].id
        this.props.getProjectsTasks(projectOneId, projectTwoId)
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
        getProjectsTasks: (projectOneId, projectTwoId) => dispatch(getProjectsTasks(projectOneId, projectTwoId))
    }
}

export default connect(msp, mdp)(ProjectsContainer);
