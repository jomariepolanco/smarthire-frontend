import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input } from 'semantic-ui-react'

class CreateJobForm extends Component {

    state = {
        title: '',
        description: '',
        pay: '',
        due_date: ''
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
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <Form.Field control={Input} type="text" name="title" value={this.state.title} placeholder="Job Title" onChange={this.changeHandler}/>
                    <Form.Field control={Input} type="text" name="description" value={this.state.description} placeholder="Job Description" onChange={this.changeHandler}/>
                    <Form.Field control={Input} type="number" name="pay" value={this.state.pay} placeholder="Pay" onChange={this.changeHandler}/>
                    <Form.Field control={Input} type="text" name="due_date" value={this.state.due_date} placeholder="Due Date" onChange={this.changeHandler}/>
                    <Form.Field control={Input} type="text" name="user_id" disabled placeholder={this.props.user.first_name + ' ' + this.props.user.last_name}/>
                    <Form.Field control={Input} disabled type="text" name="company_id" placeholder={this.props.company.name}/>
                    <Button color="green">Create Job</Button>
                </Form>
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