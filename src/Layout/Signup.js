import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input } from 'semantic-ui-react'
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
                <h1 style={{textAlign: 'center'}}>HireSmart</h1>
                <Form onSubmit={this.submitHandler}>
                    <Form.Field control={Input} label="First Name" type="text" name="first_name" value={this.state.first_name} placeholder="First Name" onChange={this.changeHandler} />
                    <Form.Field control={Input} label="Last Name" type="text" name="last_name" value={this.state.last_name} onChange={this.changeHandler} placeholder="Last Name" />

                    <Form.Field control={Input} label="Email" type="text" name="email" value={this.state.email} onChange={this.changeHandler} placeholder="Email" />

                    <Form.Field control={Input} label="Password" type="password" name="password" value={this.state.password} onChange={this.changeHandler} placeholder="Password" />

                    <Button color='blue'>Sign Up</Button>
                </Form>
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