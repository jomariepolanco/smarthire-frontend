import React, { Component } from 'react'
import TaskCard from './TaskCard'

export default class ProjectCard extends Component {
    render() {
        return (
            <div>
                Project Card
                <TaskCard />
            </div>
        )
    }
}
