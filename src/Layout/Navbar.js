import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default class Navbar extends Component {

    state = {}

    hideFixedMenu = () => this.setState({fixed: false})
    showFixedMenu = () => this.setState({fixed: true})

    render() {

        const {fixed} = this.state
        return (
            <Menu fixed={fixed ? 'top': null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size='large'>
                <Menu.Item position="left">
                    <Button as={NavLink} to='/home'>
                        Home 
                    </Button>
                </Menu.Item>
                <Menu.Item position="left">
                    <Button as={NavLink} to='/candidates'>
                        Candidates
                    </Button>
                </Menu.Item>
            </Menu>
        )
    }
}
