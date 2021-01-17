import React, { Component } from 'react'

export default class CallCard extends Component {
    render() {
        const {call} = this.props
        return (
            <div style={{border: 'dashed 1px'}}>
                <h4>{call.date}</h4>
                <p>{call.notes}</p>
                 {/* backend- send the user name with calls in candidates serializer */}
                <h5>- {call.user_id}</h5>
            </div>
        )
    }
}
