import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'

export default class TaskCard extends Component {


    render() {
        return (
            <div>
                <Checkbox label={this.props.task.content}/>
            </div>
        )
    }
}
