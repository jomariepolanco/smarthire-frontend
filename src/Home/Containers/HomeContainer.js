import React, { Component } from 'react'
import Calendar from '../Components/Calendar'

export default class HomeContainer extends Component {
    render() {
        return (
            <div>
                <Calendar history={this.props.routerProps.history} />
            </div>
        )
    }
}
