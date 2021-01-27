import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'

export default class CallCard extends Component {
    render() {
        const {call} = this.props
        return (
            <Table.Row>
                <Table.Cell>
                    {new Date(call.date).toDateString()}
                </Table.Cell>
                <Table.Cell>
                    <em>{call.user}</em>
                </Table.Cell>
                <Table.Cell>
                    {call.notes}
                </Table.Cell>
            </Table.Row>
        )
    }
}
