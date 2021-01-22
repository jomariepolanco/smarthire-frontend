import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'
import Logout from './Logout'

export default class Navbar extends Component {

    state = {
        activeItem: ''
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})


    render() {
        const {activeItem} = this.state
        return (
            <Wrapper secondary>
                    <MenuItems name='home' active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    as={NavLink} to='/home'>
                            Home 
                    </MenuItems>
                    <MenuItems name='candidates' active={activeItem === 'candidates'} onClick={this.handleItemClick} as={NavLink} to='/candidates'>
                            Candidates
                    </MenuItems>
                    <MenuItems name='clients' active={activeItem === 'clients'} onClick={this.handleItemClick} as={NavLink} to='/clients'>
                            Clients
                    </MenuItems>
                    <Menu.Item position='right'>
                        <MenuItems name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as={NavLink} to='/login'>
                                Login
                        </MenuItems>
                        <MenuItems name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} as={NavLink} to='/signup'>
                                Sign Up
                        </MenuItems>
                        <MenuItems>
                            <Logout />
                        </MenuItems>
                    </Menu.Item>
            </Wrapper>
        )
    }
}

const Wrapper = styled(Menu)`
    &&& {
        background-color: white;
    }
`

const MenuItems = styled(Menu.Item)`
    &&& {
        
    }
`