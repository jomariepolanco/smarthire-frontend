import React, { Component } from 'react'
import CallCard from '../Components/CallCard'
import CreateCallForm from '../Components/CreateCallForm'

export default class CallContainer extends Component {

    renderCallCards = () => {
        return [...this.props.calls].map(call => <CallCard key={call.id} call={call} />)
    }
    render() {
        console.log(this.props.calls)
        return (
            <div>
                <h3>Calls</h3>
                {this.renderCallCards()}
                <CreateCallForm target={this.props.target}/>
            </div>
        )
    }
}
