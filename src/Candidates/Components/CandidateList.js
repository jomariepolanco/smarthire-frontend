import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { List } from 'semantic-ui-react'

export default class CandidateList extends Component {

    renderCandyList = () => {
        if (this.props.candidates){
            return [...this.props.candidates].map(candy => {
                return (
                    <>
                    <List.Item>
                        <List.Content>
                            <NavLink to={`/candidates/${candy.id}`} key={candy.id}>
                                <h4 style={{color: '#1b9aaa'}}>{candy.firstName} {candy.lastName}</h4>
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
            <List divided relaxed>
                {this.renderCandyList()}
            </List>
        )
    }
}
