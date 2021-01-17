import React, { Component } from 'react'

export default class CreateCallForm extends Component {

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
        //change user_id once auth is implemented
        const newCallObj = {
            date: this.state.date, 
            time: this.state.time, 
            notes: this.state.notes,
            user_id: 2,
            candidate_id: this.props.candidate.id
        }
    }

    render() {
        return (
            <div>
                <button>Log a Call</button>
                <form onSubmit={this.submitHandler}>
                    <input type="date" name="date" value={this.state.date} onChange={this.changeHandler} />
                    <input type="time" name="time" value={this.state.time} onChange={this.changeHandler} />
                    <input type="text" name="notes" value={this.state.notes} onChange={this.changeHandler}/>
                    <input type="text" name="user_id" placeholder="Lemuel Witting" disabled />
                    <input type="text" placeholder={this.props.candidate.firstName + ' ' + this.props.candidate.lastName} disabled />
                </form>
            </div>
        )
    }
}

//change user value and input to logged in user when auth implemented
