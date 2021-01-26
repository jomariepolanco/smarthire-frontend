import React, { Component } from 'react'
import { Checkbox, List, Transition } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { updateTask } from '../../Redux/tasks/actions'


class TaskCard extends Component {

    state = {
        animation: 'shake',
        duration: 150,
        visible: true
    }

    clickHandler = (e, data) => {
        this.setState({visible: !this.state.visible})
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
            <List.Item>
                <List.Content>
                    <Transition animation={this.state.animation} duration={this.state.duration} visible={this.state.visible}>
                        <Checkbox disabled={this.props.task.archived} onClick={this.clickHandler} checked={this.props.task.archived} value={this.props.task.id} label={this.props.task.content}/>
                    </Transition>
                </List.Content>
            </List.Item>
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
