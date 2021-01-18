import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpUser } from '../Redux/users/actions'

class Signup extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.signUpUser(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="first_name" value={this.state.first_name} placeholder="First Name" onChange={this.changeHandler} />
                    <input type="text" name="last_name" value={this.state.last_name} onChange={this.changeHandler} placeholder="Last Name" />

                    <input type="text" name="email" value={this.state.email} onChange={this.changeHandler} placeholder="Email" />

                    <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} placeholder="Password" />

                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

const mdp = (dispatch) => {
    return {
        signUpUser: (userObj) => dispatch(signUpUser(userObj))
    }
}


export default connect(null, mdp)(Signup);