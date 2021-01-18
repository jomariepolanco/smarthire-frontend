import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOutUser } from '../Redux/users/actions'

class Logout extends Component {
    
    handleClick = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        this.props.logOutUser()

    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Log Out</button>
            </div>
        )
    }
}

const mdp = (dispatch) => {
    return {
        logOutUser: () => dispatch(logOutUser())
    }
}

export default connect(null, mdp)(Logout);