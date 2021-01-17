import React, { Component } from 'react'
import CallCard from '../Components/CallCard'
import CreateCallForm from '../Components/CreateCallForm'

export default class CallContainer extends Component {

    renderCallCards = () => {
        return [...this.props.calls].map(call => <CallCard key={call.id} call={call} />)
    }
    render() {
        return (
            <div>
                {this.renderCallCards()}
                <CreateCallForm candidate={this.props.candidate}/>
            </div>
        )
    }
}
