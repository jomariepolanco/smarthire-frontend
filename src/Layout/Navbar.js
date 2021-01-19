import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

export default class Navbar extends Component {

    render() {
        return (
            <ul>
                    <li>
                        <NavLink to='/home'>
                            Home 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/candidates'>
                            Candidates
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/clients'>
                            Clients
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/login'>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup'>
                            Sign Up
                        </NavLink>
                    </li>
                    <li>
                        <Logout />
                    </li>
            </ul>
        )
    }
}
