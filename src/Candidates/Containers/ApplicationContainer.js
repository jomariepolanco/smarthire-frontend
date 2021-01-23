import React, { Component } from 'react'

export default class ApplicationContainer extends Component {

    renderApplications = () => {
        return [...this.props.applications].map(app => {
            let color;
            if (app.green){
                color = 'green'
            } else if (app.yellow){
                color = 'yellow'
            } else if (app.red) {
                color = 'red'
            }
            return(
                <h3 style={{color: color}}>{app.openJob}</h3>
            )
        })
    }
    render() {
        console.log(this.props.applications)
        return (
            <div>
                <h1>Applications</h1>
                {this.renderApplications()}
            </div>
        )
    }
}
