import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { updateTask } from '../../Redux/tasks/actions'

class TaskCard extends Component {

    clickHandler = (e, data) => {
        const taskId = +data.value 
        let updateObj;
        if (this.props.task.archived){
            updateObj = {archived: false}
        } else {
            updateObj = {archived: true}
        }
        this.props.updateTask(taskId, updateObj)
    }

    render() {
        return (
            <div>
                <Checkbox onClick={this.clickHandler} checked={this.props.task.archived} value={this.props.task.id} label={this.props.task.content}/>
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
        updateTask: (taskId, updateObj) => dispatch(updateTask(taskId, updateObj))
    }
}

export default connect(msp, mdp)(TaskCard);
