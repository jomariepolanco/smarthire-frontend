import React, { Component } from 'react'

export default class CreateJobForm extends Component {

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
            user_id: 2,
            company_id: this.props.company.id 
        }
        this.props.submitHandler(newJobObj)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="title" value={this.state.title} placeholder="Job Title" onChange={this.changeHandler}/>
                    <input type="text" name="description" value={this.state.description} placeholder="Job Description" onChange={this.changeHandler}/>
                    <input type="number" name="pay" value={this.state.pay} placeholder="Pay" onChange={this.changeHandler}/>
                    <input type="text" name="due_date" value={this.state.due_date} placeholder="Due Date" onChange={this.changeHandler}/>
                    <input type="text" name="user_id" disabled placeholder="Lemuel Witting"/>
                    <input disabled type="text" name="company_id" placeholder={this.props.company.name}/>
                    <button>Create Job</button>
                </form>
            </div>
        )
    }
}
