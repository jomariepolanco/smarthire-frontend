import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Modal } from 'semantic-ui-react'

class CreateJobForm extends Component {

    state = {
        title: '',
        description: '',
        pay: '',
        due_date: '',
        open: false
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        const newJobObj = {
            title: this.state.title,
            description: this.state.description,
            pay: this.state.pay,
            due_date: this.state.due_date,
            user_id: this.props.user.id,
            company_id: this.props.company.id 
        }
        this.props.submitHandler(newJobObj)
        this.setState({open: false})
    }

    render() {
        return (
            <div>
                <Modal onClose={() => this.setState({open: false})} onOpen={() => this.setState({open: true})} open={this.state.open} trigger={<Button color='green'>Add a Job</Button>}>
                    <Modal.Content>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Field control={Input} type="text" name="title" value={this.state.title} placeholder="Job Title" onChange={this.changeHandler} label="Job Title"/>

                            <Form.Field control={Input} type="text" name="description" value={this.state.description} placeholder="Job Description" onChange={this.changeHandler} label="Job Description" />

                            <Form.Field control={Input} type="number" name="pay" value={this.state.pay} placeholder="Pay" onChange={this.changeHandler} label="Pay" />

                            <Form.Field control={Input} type="text" name="due_date" value={this.state.due_date} placeholder="Due Date" onChange={this.changeHandler} label="Due Date" />

                            <Form.Field control={Input} type="text" name="user_id" disabled placeholder={this.props.user.first_name + ' ' + this.props.user.last_name} label="Admin" />
                            <Form.Field control={Input} disabled type="text" name="company_id" placeholder={this.props.company.name} label="Company" />
                            <Button color="green">Create Job</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        user: state.user 
    }
}

export default connect(msp)(CreateJobForm);