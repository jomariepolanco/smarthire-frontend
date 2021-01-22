import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProjects } from '../../Redux/projects/actions'
import Calendar from '../Components/Calendar'
import styled from 'styled-components'

class HomeContainer extends Component {

    componentDidMount(){
        if (this.props.user){
            this.props.getProjects(this.props.user.id)

        }
    }

    render() {
        return (
            <>
            {this.props.user ?
                <>
                <Wrapper>
                    <Calendar history={this.props.routerProps.history} />
                </Wrapper>
                <CircleOne>
                    <div></div>
                </CircleOne>
                <CircleTwo>
                    <div></div>
                </CircleTwo>
                </>
        
            :
        
                <Redirect to='/login' />
        
            }   

            </>
        )
    }
}

const msp = (state) => {
    return {
        user: state.user 
    }
}

const mdp = (dispatch) => {
    return {
        getProjects: (userId) => dispatch(getProjects(userId))
    }
}

export default connect(msp, mdp)(HomeContainer);

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const CircleOne = styled.div`
    background: white;
    background: linear-gradient(to right bottom, rgba(255,255, 255, 1), rgba(255,255,255,0.5));
    height: 20rem;
    width: 20rem;
    position: absolute;
    top: 5%;
    right: 15%;
    border-radius: 50%;
`
const CircleTwo = styled.div`
    background: white;
    background: linear-gradient(to right bottom, rgba(255,255, 255, 0.9), rgba(255,255,255,0.1));
    height: 20rem;
    width: 20rem;
    position: absolute;
    bottom: 5%;
    left: 10%;
    border-radius: 50%;
`