import React, { Component } from 'react'

export default class FormInput extends Component {

    submitHandler = (e) => {
        e.preventDefault()
        const updateObj = {
            [e.target[0].name]: e.target[0].value 
        }
        this.props.submitHandler(updateObj)
    }
    
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" value={this.props.value} name={this.props.name} onChange={this.props.changeHandler} placeholder={this.props.placeholder}/>
                <button>Update</button>
            </form>
        )
    }
}
