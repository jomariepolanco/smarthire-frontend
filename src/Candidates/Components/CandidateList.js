import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class CandidateList extends Component {

    clickHandler = () => {

    }

    renderCandyList = () => {
        return [...this.props.candidates].map(candy => <NavLink to={`/candidates/${candy.id}`} key={candy.id}><h4 >{candy.firstName} {candy.lastName}</h4></NavLink>)
    }

    render() {
        
        return (
            <div>
                {this.renderCandyList()}
            </div>
        )
    }
}
