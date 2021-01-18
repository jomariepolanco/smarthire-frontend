import React, { Component } from 'react'

export default class SearchForm extends Component {
    state = {
        name: ''
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.name)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="name" placeholder="Search By Name" value={this.state.name} onChange={this.changeHandler} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
