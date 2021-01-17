import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class ClientList extends Component {

    renderClientList = () => {
        return [...this.props.clients].map(client => <NavLink to={`/clients/${client.id}`} key={client.id}><h4 >{client.name}</h4></NavLink>)
    }

    render() {
        
        return (
            <div>
                {this.renderClientList()}
            </div>
        )
    }
}
