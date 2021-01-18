import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCandidateCall } from '../../Redux/candidates/actions'

class CreateCallForm extends Component {

    state = {
        date: '',
        time: '', 
        notes: ''
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        const newCallObj = {
            date: this.state.date, 
            time: this.state.time, 
            notes: this.state.notes,
            user_id: this.props.user.id,
            candidate_id: this.props.target.id
        }

        this.props.createCandidateCall(newCallObj)
    }

    render() {
        console.log(this.props.user)
        return (
            <div>
                <button>Log a Call</button>
                <form onSubmit={this.submitHandler}>
                    <input type="date" name="date" value={this.state.date} onChange={this.changeHandler} />
                    <input type="time" name="time" value={this.state.time} onChange={this.changeHandler} />
                    <input type="text" name="notes" value={this.state.notes} onChange={this.changeHandler}/>
                    <input type="text" name="user_id" placeholder={this.props.user.first_name + ' ' + this.props.user.last_name} disabled />
                    <input type="text" placeholder={this.props.target.firstName + ' ' + this.props.target.lastName} disabled />
                    <button>Log</button>
                </form>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        user: state.user
    }
}

const mdp = (dispatch) => {
    return {
        createCandidateCall: (newCallObj) => dispatch(createCandidateCall(newCallObj))
    }
}

export default connect(msp, mdp)(CreateCallForm);

//change user value and input to logged in user when auth implemented
