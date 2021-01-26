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
                <Form.Group inline widths="equal">
                    <Form.Field width="3" control={Input} label={this.props.placeholder} type="text" value={this.props.value} name={this.props.name} onChange={this.props.changeHandler} placeholder={this.props.placeholder}/>
                    <Button compact size='medium' color="green" animated='fade'>
                        <Icon name="edit outline" />
                    </Button>
                </Form.Group>
            </Form>
        )
    }
}
