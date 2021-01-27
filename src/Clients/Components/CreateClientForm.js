import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Modal } from 'semantic-ui-react'
import { createCompany } from '../../Redux/companies/actions'

class CreateClientForm extends Component {

    state = {
        name: '',
        address: '',
        industry: '',
        poc_name: '',
        poc_email: '',
        poc_number: '',
        open: false
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        const newClient = {
            name: this.state.name,
            address: this.state.address,
            industry: this.state.industry,
            poc_name: this.state.poc_name,
            poc_email: this.state.poc_email,
            poc_number: this.state.poc_number
        }
        this.props.createCompany(newClient, this.props.history)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Modal onClose={() => this.setState({open: false})} onOpen={() => this.setState({open: true})} trigger={<Button color='green'>Add Client</Button>}>
                    <Modal.Content>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Field control={Input} label="Name" type="text" name="name" value={this.state.name} onChange={this.changeHandler} placeholder="Name"/>
                            <Form.Field control={Input} label="Address" type="text" name="address" value={this.state.address} onChange={this.changeHandler} placeholder="Address" />
                            <Form.Field control={Input} label="Industry" type="text" name="industry" value={this.state.industry} onChange={this.changeHandler} placeholder="Industry" />
                            <Form.Field control={Input} label="Point of Contact Name" type="text" name="poc_name" value={this.state.poc_name} onChange={this.changeHandler} placeholder="Point of Contact Name"/>
                            <Form.Field control={Input} label="Point of Contact Email" type="text" name="poc_email" value={this.state.poc_email} onChange={this.changeHandler} placeholder="Point of Contact Email"/>
                            <Form.Field control={Input} label="Point of Contact Phone Number" type="text" name="poc_number" value={this.state.poc_number} onChange={this.changeHandler} placeholder="Point of Contact Number" />
                            <Button color="green">Create New Client</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

const mdp = (dispatch) => {
    return {
        createCompany: (newCoObj, history) => dispatch(createCompany(newCoObj, history))
    }
}

export default connect(null, mdp)(CreateClientForm);