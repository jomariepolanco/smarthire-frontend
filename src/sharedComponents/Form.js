import React, { Component } from 'react'
import { Button, Form, Icon, Input } from 'semantic-ui-react'

export default class FormInput extends Component {

    submitHandler = (e) => {
        e.preventDefault()
        const updateObj = {
            [e.target[0].name]: e.target[0].value 
        }
        this.props.submitHandler(updateObj)
    }
    
    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                <Form.Group widths="equal">
                    <Form.Field width="3" control={Input} label={this.props.placeholder} type="text" value={this.props.value} name={this.props.name} onChange={this.props.changeHandler} placeholder={this.props.placeholder}/>
                    <Button color="green">
                        <Icon color="white" name="redo" />
                    </Button>
                </Form.Group>
            </Form>
        )
    }
}
