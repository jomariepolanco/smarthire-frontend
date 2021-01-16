import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProjects } from '../../Redux/projects/actions'
import Calendar from '../Components/Calendar'

class HomeContainer extends Component {

    componentDidMount(){
        //userId should be taken from login when auth implemented
        this.props.getProjects(2)
    }

    render() {
        return (
            <div>
                <Calendar history={this.props.routerProps.history} />
            </div>
        )
    }
}

const mdp = (dispatch) => {
    return {
        getProjects: (userId) => dispatch(getProjects(userId))
    }
}

export default connect(null, mdp)(HomeContainer);