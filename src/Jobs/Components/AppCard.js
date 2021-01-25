import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class AppCard extends Component {

    renderColor = () => {
        const {application} = this.props 
        if (application.red){
            return '#ff5964'
        } else if (application.yellow){
            return '#e6c229'
        } else if (application.green){
            return '#62c370'
        }
    }
    render() {
        const {application} = this.props
        return (
            <div>
                <h3 style={{color: this.renderColor()}}>{application.candidate}
                </h3>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        candidates: state.candidates
    }
}

export default connect(msp)(AppCard);

//Candidate names are links to their show page????
