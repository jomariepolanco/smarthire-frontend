import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'

export default class TaskCard extends Component {

    clickHandler = () => {
        //update task archived boolean
    }

    render() {
        return (
            <div>
                <Checkbox onClick={this.clickHandler} checked={this.props.task.archived} label={this.props.task.content}/>
            </div>
        )
    }
}
