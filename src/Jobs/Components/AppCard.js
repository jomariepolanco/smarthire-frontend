import React, { Component } from 'react'

export default class AppCard extends Component {

    renderColor = () => {
        const {application} = this.props 
        if (application.red){
            return 'red'
        } else if (application.yellow){
            return 'yellow'
        } else if (application.green){
            return 'green'
        }
    }
    render() {
        const {application} = this.props
        return (
            <div>
                <h4 style={{color: this.renderColor}}>{application.candidate}</h4>
            </div>
        )
    }
}

//Candidate names are links to their show page????
