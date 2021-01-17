import React, { Component } from 'react'

export default class FormInput extends Component {
    render() {
        return (
            <form>
                <input type="text" value={this.props.value} name={this.props.name} onChange={this.props.changeHandler} placeholder={this.props.placeholder}/>
                <button onSubmit={this.props.submitHandler}>Update</button>
            </form>
        )
    }
}
