import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCompany } from '../../Redux/companies/actions'

class CreateClientForm extends Component {

    state = {
        name: '',
        address: '',
        industry: '',
        poc_name: '',
        poc_email: '',
        poc_number: ''
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.createCompany(this.state)
        //push to client show page when hit submit
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} placeholder="Name"/>
                    <input type="text" name="address" value={this.state.address} onChange={this.changeHandler} placeholder="Address" />
                    <input type="text" name="industry" value={this.state.industry} onChange={this.changeHandler} placeholder="Industry" />
                    <input type="text" name="poc_name" value={this.state.poc_name} onChange={this.changeHandler} placeholder="Point of Contact Name"/>
                    <input type="text" name="poc_email" value={this.state.poc_email} onChange={this.changeHandler} placeholder="Point of Contact Email"/>
                    <input type="text" name="poc_number" value={this.state.poc_number} onChange={this.changeHandler} placeholder="Point of Contact Number" />
                    <button>Create New Client</button>
                </form>
            </div>
        )
    }
}

const mdp = (dispatch) => {
    return {
        createCompany: (newCoObj) => dispatch(createCompany(newCoObj))
    }
}

export default connect(null, mdp)(CreateClientForm);