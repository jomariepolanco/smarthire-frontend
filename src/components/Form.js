import React, { Component } from 'react'

export default class FormInput extends Component {

    
    render() {
        return (
            <form onSubmit={this.props.submitHandler}>
                <input type="text" value={this.props.value} name={this.props.name} onChange={this.props.changeHandler} placeholder={this.props.placeholder}/>
                <button>Update</button>
            </form>
        )
    }
}
