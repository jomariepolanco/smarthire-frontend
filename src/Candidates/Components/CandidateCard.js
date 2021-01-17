import React, { Component } from 'react'
import Form from '../../components/Form'

export default class CandidateCard extends Component {

    state = {
        firstName: this.props.candidate.firstName,
        lastName: this.props.candidate.lastName, 
        cellPhone: this.props.candidate.cellPhone,
        homePhone: this.props.candidate.homePhone,
        dateOfBirth: this.props.candidate.dateOfBirth,
        address: this.props.candidate.address,
        city: this.props.candidate.city,
        state: this.props.candidate.state,
        zipcode: this.props.candidate.zipcode
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        debugger
        console.log(this.state)
    }

    render() {
        console.log(this.props.candidate)
        return (
            <div>
                <h1>{this.props.candidate.firstName} {this.props.candidate.lastName}</h1>
                    <Form value={this.state.firstName} name="firstName" changeHandler={this.changeHandler} placeholder="First Name" submitHandler={this.submitHandler}/>
                
                    <Form value={this.state.lastName} name="lastName" changeHandler={this.changeHandler} placeholder="Last Name" submitHandler={this.submitHandler} />
                
                    <Form value={this.state.cellPhone} name="cellPhone"  changeHandler={this.changeHandler} placeholder="Cell Phone" submitHandler={this.submitHandler}/>
                
                    <Form value={this.state.homePhone} name="homePhone" changeHandler={this.changeHandler} placeholder="Home Phone" submitHandler={this.submitHandler}/>
                
                    <Form value={this.state.dateOfBirth} name="dateOfBirth" changeHandler={this.changeHandler} placeholder="Date Of Birth" submitHandler={this.submitHandler}/>
                
                    <Form value={this.state.address} name="address" changeHandler={this.changeHandler} placeholder="Street Address" submitHandler={this.submitHandler}/>
                
                    <Form value={this.state.city} name="city" changeHandler={this.changeHandler} placeholder="City" submitHandler={this.submitHandler}/>
                
                    <Form value={this.state.state} name="state" changeHandler={this.changeHandler} placeholder="State" submitHandler={this.submitHandler}/>
                
                    <Form value={this.state.zipcode} name="zipcode" changeHandler={this.changeHandler} placeholder="Zipcode" submitHandler={this.submitHandler}/>
                
            </div>
        )
    }
}
