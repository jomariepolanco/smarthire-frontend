import React, { Component } from 'react'
import ProjectCard from '../Components/ProjectCard'
import {Grid} from 'semantic-ui-react'

class ProjectsContainer extends Component {

    renderCandidateProject = () => {
        const candidate = [...this.props.projects].find(pro => pro.title === "Candidate")
        return(
            <>
            <h1>{candidate.title}</h1>
            <ProjectCard />
            </>
        )
    }

    renderClientProject = () => {
        const client = [...this.props.projects].find(pro => pro.title === "Client")
        return(
            <>
            <h1>{client.title}</h1>
            <ProjectCard />
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

export default ProjectsContainer;
