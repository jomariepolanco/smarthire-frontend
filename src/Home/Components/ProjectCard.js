import React, { Component } from 'react'
import TaskCard from './TaskCard'

export default class ProjectCard extends Component {

    renderTasks = () => {
        return [...this.props.tasks].map(task => <TaskCard key={task.id} task={task}/>)
    }
    
    render() {
        return (
            <div>
                {this.renderTasks()}
            </div>
        )
    }
}
