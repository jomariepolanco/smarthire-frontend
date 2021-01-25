import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import CallCard from '../Components/CallCard'
import CreateCallForm from '../Components/CreateCallForm'

export default class CallContainer extends Component {

    renderCallCards = () => {
        const calls = [...this.props.calls].sort((a, b) => new Date(a.date) - new Date(b.date)).reverse()
        return calls.map(call => {
            return(
                <>
                <List.Item>
                    <List.Content>
                        <CallCard key={call.id} call={call} />
                    </List.Content>
                </List.Item>
                </>
            )
        })
    }
    render() {
        return (
            <div>
                <h3>Calls</h3>
                <List>
                    {this.renderCallCards()}
                </List>
                <CreateCallForm company={this.props.company} />
            </div>
        )
    }
}
