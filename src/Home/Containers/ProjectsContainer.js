import React, { Component } from 'react'
import ProjectCard from '../Components/ProjectCard'

export default class ProjectsContainer extends Component {
    render() {
        console.log(this.props.projects)
        return (
            <div>
                projects container
                <ProjectCard />
            </div>
        )
    }
}
