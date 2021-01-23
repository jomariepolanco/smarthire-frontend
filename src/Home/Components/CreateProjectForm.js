import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Icon, Input, Modal } from 'semantic-ui-react'
import { createProject } from '../../Redux/projects/actions'
import { createTask } from '../../Redux/tasks/actions'

class CreateProjectForm extends Component {

    state = {
        title: '',
        date: new Date(),
        open: false,
        taskNumber: 0,
        tasks: []
    }

    changeHandler = (e, data) => {
        this.setState({[data.name]: data.value})
    }

    addTask = () => {
        this.setState({taskNumber: this.state.taskNumber + 1})
    }

    tasksChangeHandler = (e, data) => {
        const tasks = this.state.tasks 
        tasks[data.name] = data.value 
        this.setState({tasks: tasks})
    }

    renderTaskInputs = () => {
        let inputs = []
        for (let i = 0; i <= this.state.taskNumber; i++){
            inputs.push(<Form.Field control={Input} label="New Task" name={i} type="text" value={this.state.tasks[i]} onChange={this.tasksChangeHandler}/>)
        }
        return inputs
    }

    submitHandler = (e) => {
        e.preventDefault()
        const newObj = {
            title: this.state.title,
            user_id: this.props.user.id,
            date: this.state.date
        }

        this.props.createProject(newObj)
        this.submitTasks()
    }

    submitTasks = () => {
        const project = [...this.props.projects][this.props.projects.length - 1]

        for (let task of [...this.state.tasks]){
            const taskObj = {
                archived: false,
                date: this.state.date,
                content: task,
                project_id: project.id
            }
            this.props.createTask(taskObj)
        }
    }

    render() {
        return (
            <div>
                <Modal onClose={() => this.setState({open: false})} onOpen={() => this.setState({open: true})} open={this.state.open} trigger={<Button color='green'>Create A Project</Button>}>
                    <Modal.Content>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Field control={Input} label="Project Name" name="title" value={this.state.title} onChange={this.changeHandler} type='text'/>

                            <Form.Field control={Input} label="Date" type="date" name="date" value={this.state.date} onChange={this.changeHandler}/>

                            <Icon name="plus" onClick={this.addTask}/>
                            <br />

                            {this.renderTaskInputs()}

                            <Button color='green'>Create</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
                <br />
            </div>
        )
    }
}

const msp = (state) => {
    return {
        user: state.user,
        projects: state.projects
    }
}

const mdp = (dispatch) => {
    return {
        createProject: (projectObj) => dispatch(createProject(projectObj)),
        createTask: (taskObj) => dispatch(createTask(taskObj))
    }
}

export default connect(msp, mdp)(CreateProjectForm);