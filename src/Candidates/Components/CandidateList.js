import React, { Component } from 'react'

export default class CandidateList extends Component {

    clickHandler = () => {

    }

    renderCandyList = () => {
        return [...this.props.candidates].map(candy => <div onClick={this.clickHandler}><h4 key={candy.id}>{candy.firstName} {candy.lastName}</h4></div>)
    }
    
    render() {
        
        return (
            <div>
                {this.renderCandyList()}
            </div>
        )
    }
}
