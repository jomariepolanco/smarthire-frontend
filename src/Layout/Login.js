import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button, Form, Input } from 'semantic-ui-react'
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
        console.log(this.state)
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>HireSmart</h1>
                <Form onSubmit={this.submitHandler}>
                        <Form.Field control={Input} label="Email" name="email" value={this.state.email} placeholder="Email" onChange={this.changeHandler} />
                        <Form.Field control={Input} label="Password" type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.changeHandler} />
                        <Button color='blue'>Login</Button>
                </Form>
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