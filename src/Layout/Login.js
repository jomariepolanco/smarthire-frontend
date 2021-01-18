import React, { Component } from 'react'
import {connect} from 'react-redux'
import { loginUser } from '../Redux/users/actions'

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.loginUser(this.state)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.changeHandler} />
                    <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.changeHandler} />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

const mdp = (dispatch) => {
    return {
        loginUser: (credentials) => dispatch(loginUser(credentials))
    }
}

export default connect(null, mdp)(Login);