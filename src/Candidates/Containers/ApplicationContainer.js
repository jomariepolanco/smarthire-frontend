import React, { Component } from 'react'

export default class ApplicationContainer extends Component {

    renderApplications = () => {
        return [...this.props.applications].map(app => {
            let color;
            if (app.green){
                color = '#62c370'
            } else if (app.yellow){
                color = '#e6c229'
            } else if (app.red) {
                color = '#ff5964'
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
