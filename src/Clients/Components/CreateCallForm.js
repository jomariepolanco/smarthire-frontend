import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNewCall } from '../../Redux/companies/actions'

class CreateCallForm extends Component {

    state = {
        date: '',
        notes: '',
        time: ''
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        const newCall = {
            date: this.state.date,
            time: this.state.time,
            notes: this.state.notes,
            user_id: this.props.user.id,
            company_id: this.props.company.id 
        }

        this.props.createNewCall(newCall)
    }

    render() {
        return (
            <div>
                <button>Log a Call</button>
                <form onSubmit={this.submitHandler}>
                    <input type="date" name="date" value={this.state.date} onChange={this.changeHandler} />
                    <input type="time" name="time" value={this.state.time} onChange={this.changeHandler} />
                    <input type="text" name="notes" value={this.state.notes} onChange={this.changeHandler}/>
                    <input type="text" name="user_id" placeholder={this.props.user.first_name + ' ' + this.props.user.last_name} disabled />
                    <input type="text" placeholder={this.props.company.name} disabled />
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
        createNewCall: (newObj) => dispatch(createNewCall(newObj))
    }
}

export default connect(msp, mdp)(CreateCallForm);

//change user value and input to logged in user when auth implemented