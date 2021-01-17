import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNewCandidate } from '../../Redux/candidates/actions'

class CreateCandidateForm extends Component {

    state = {
        first_name:'',
        last_name: '',
        cell_phone: '',
        home_phone: '',
        date_of_birth: '',
        address: '',
        city: '',
        state: '',
        zipcode: ''
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.createNewCandidate(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.changeHandler} placeholder="First Name" />
                    <input type="text" name="last_name" value={this.state.last_name}onChange={this.changeHandler} placeholder="Last Name" />
                    <input type="text" name="cell_phone" value={this.state.cell_phone} onChange={this.changeHandler} placeholder="Cell Phone" />
                    <input type="text" name="home_phone" value={this.state.home_phone} onChange={this.changeHandler} placeholder="Home Phone" />
                    <input type="text" name="date_of_birth" value={this.state.date_of_birth} onChange={this.changeHandler} placeholder="Date of Birth" />
                    <input type="text" name="address" value={this.state.address} placeholder="Street Address" onChange={this.changeHandler}/>
                    <input type="text" name="city" value={this.state.city} placeholder="City" onChange={this.changeHandler}/>
                    <input type="text" name="state" value={this.state.state} placeholder="State" onChange={this.changeHandler}/>
                    <input type="text" name="zipcode" value={this.state.zipcode} placeholder="Zipcode" onChange={this.changeHandler} />
                    <button>Create New Candidate</button>
                </form>
            </div>
        )
    }
}

const mdp = (dispatch) => {
    return {
        createNewCandidate: (candyObj) => dispatch(createNewCandidate(candyObj))
    }
}

export default connect(null, mdp)(CreateCandidateForm);