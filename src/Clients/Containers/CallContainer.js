import React, { Component } from 'react'
import { Header, List, Table } from 'semantic-ui-react'
import CallCard from '../Components/CallCard'
import CreateCallForm from '../Components/CreateCallForm'

export default class CallContainer extends Component {

    renderCallCards = () => {
        const calls = [...this.props.calls].sort((a, b) => new Date(a.date) - new Date(b.date)).reverse()
        return calls.map(call => {
            return(
                <>
                    <CallCard key={call.id} call={call} />
                    
                </>
            )
        })
    }
    render() {
        return (
            <div>
                <Header as='h3'>Calls</Header>
                <Table basic='very' celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Caller</Table.HeaderCell>
                            <Table.HeaderCell>Call Type</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderCallCards()}
                    </Table.Body>
                </Table>
                <CreateCallForm company={this.props.company} />
            </div>
        )
    }
}
