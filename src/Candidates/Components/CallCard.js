import React, { Component } from 'react'

export default class CallCard extends Component {
    render() {
        const {call} = this.props
        console.log(call)
        return (
            <div>
                <h4>{call.date} ({call.user})</h4>
                {call.notes}
            </div>
        )
    }
}
