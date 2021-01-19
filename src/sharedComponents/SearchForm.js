import React, { Component } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'

export default class SearchForm extends Component {
    state = {
        name: ''
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.name)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <Form.Field control={Input} label="Search By Candidate Name" type="text" name="name" placeholder="Search By Name" value={this.state.name} onChange={this.changeHandler} />
                    <Button color='blue'>Submit</Button>
                </Form>
            </div>
        )
    }
}
