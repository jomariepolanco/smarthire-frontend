import React, { Component } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'

export default class IndustrySearchForm extends Component {

    state = {
        industry: ''
    }

    changeHandler = (e, data) => {
        this.setState({[data.name]: data.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.industry)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <Form.Field control={Input} label="Search By Industry" placeholder="Search By Industry" type="text" name="industry" value={this.state.industry} onChange={this.changeHandler} />
                    <Button primary>Submit</Button>
                </Form>
            </div>
        )
    }
}
