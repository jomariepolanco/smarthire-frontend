import React, { Component } from 'react'
import { Card, List } from 'semantic-ui-react'
import TaskCard from './TaskCard'

export default class ProjectCard extends Component {

    renderTasks = () => {
        // debugger
        return [...this.props.tasks].map(task => <TaskCard key={task.id} task={task}/>)
    }

    percentageOfTasksDone = () => {
        let percentage = [...this.props.tasks].filter(task => task.archived).length / [...this.props.tasks].length 
        if (percentage){
            return <h5>{(percentage * 100).toFixed(0)}% tasks completed</h5>
        } else {
            return <h5>0% tasks completed</h5>
        }
    }
    
    render() {
        return (
                <>
                    {this.percentageOfTasksDone()}
                <List divided relaxed>
                    {this.renderTasks()}
                </List>

                </>
           
        )
    }
}
