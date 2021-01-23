import React, { Component } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'

export default class ApplicationSearchForm extends Component {

    state = {
        color: ''
    }

    changeHandler = (e, data) => {
        this.setState({[data.name]: data.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.color)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <Form.Field control={Input} label="Search By Application Color" placeholder="Search By Color" type="text" name="color" value={this.state.color} onChange={this.changeHandler} />
                    <Button color='blue'>Submit</Button>
                </Form>
            </div>
        )
    }
}
