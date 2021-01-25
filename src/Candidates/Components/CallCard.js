import React, { Component } from 'react'

export default class CallCard extends Component {
    render() {
        const {call} = this.props
        return (
            <div>
                <b>{new Date(call.date).toDateString()}
                </b>
                <br />
                {call.notes}
                <br />
                <em>{call.user}</em>
            </div>
        )
    }
}
