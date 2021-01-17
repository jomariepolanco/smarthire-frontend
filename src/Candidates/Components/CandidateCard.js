import React, { Component } from 'react'
import Form from '../../components/Form'


class CandidateCard extends Component {

    state = {
        first_name: this.props.candidate.firstName,
        last_name: this.props.candidate.lastName, 
        cell_phone: this.props.candidate.cellPhone,
        home_phone: this.props.candidate.homePhone,
        date_of_birth: this.props.candidate.dateOfBirth,
        address: this.props.candidate.address,
        city: this.props.candidate.city,
        state: this.props.candidate.state,
        zipcode: this.props.candidate.zipcode
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (updatedObj) => {
        this.props.updateCandidate(this.props.candidate.id, updatedObj)
    }

    render() {
        console.log("state:", this.state, "props:", this.props.candidate)
        return (
            <div>
                <h1>{this.props.candidate.firstName} {this.props.candidate.lastName}</h1>
                    <Form value={this.state.first_name} name="first_name" changeHandler={this.changeHandler} placeholder="First Name" submitHandler={this.submitHandler}/>
                
                    <Form value={this.state.last_name} name="last_name" changeHandler={this.changeHandler} placeholder="Last Name" submitHandler={this.submitHandler} />
                
                    <Form value={this.state.cell_phone} name="cell_phone"  changeHandler={this.changeHandler} placeholder="Cell Phone" submitHandler={this.submitHandler}/>
                
                    <Form value={this.state.home_phone} name="home_phone" changeHandler={this.changeHandler} placeholder="Home Phone" submitHandler={this.submitHandler}/>
                
                    <Form value={this.state.date_of_birth} name="date_of_birth" changeHandler={this.changeHandler} placeholder="Date Of Birth" submitHandler={this.submitHandler}/>
                
                    <Form value={this.state.address} name="address" changeHandler={this.changeHandler} placeholder="Street Address" submitHandler={this.submitHandler}/>
                
                    <Form value={this.state.city} name="city" changeHandler={this.changeHandler} placeholder="City" submitHandler={this.submitHandler}/>
                
                    <Form value={this.state.state} name="state" changeHandler={this.changeHandler} placeholder="State" submitHandler={this.submitHandler}/>
                
                    <Form value={this.state.zipcode} name="zipcode" changeHandler={this.changeHandler} placeholder="Zipcode" submitHandler={this.submitHandler}/>
                
            </div>
        )
    }
}


export default CandidateCard;