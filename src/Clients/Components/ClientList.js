import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { List } from 'semantic-ui-react'

export default class ClientList extends Component {

    renderClientList = () => {
        if (this.props.clients){
            return [...this.props.clients].map(client => {
                return (
                    <>
                    <List.Item>
                        <List.Content>
                            <NavLink to={`/clients/${client.id}`} key={client.id}>
                                <h4>{client.name}</h4>
                            </NavLink>
                        </List.Content>
                    </List.Item>
                    </>
                )
            })
        }
    }

    render() {
        
        return (
            <>
                <List divided relaxed>
                    {this.renderClientList()}
                </List>
            </>
        )
    }
}
