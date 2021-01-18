import React, { Component } from 'react'
import AppCard from '../Components/AppCard'

export default class ApplicationContainer extends Component {

    renderAppCards = () => {
        return [...this.props.applications].map(app => <AppCard key={app.id} application={app} /> )
    }
    render() {
        return (
            <div>
                <h1>Applications</h1>
                {this.renderAppCards()}
            </div>
        )
    }
}
