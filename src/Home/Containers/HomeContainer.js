import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getCandidates } from '../../Redux/candidates/actions'
import { getCompanies } from '../../Redux/companies/actions'
import { getProjects } from '../../Redux/projects/actions'
import Calendar from '../Components/Calendar'

class HomeContainer extends Component {

    componentDidMount(){
        if (this.props.user){
            this.props.getProjects(this.props.user.id)
            this.props.getCandidates()
            this.props.getCompanies()

        }
    }

    render() {
        return (
            <>
            {this.props.user ?
                <>
                <div>
                    <Calendar history={this.props.routerProps.history} />
                </div>
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
        getProjects: (userId) => dispatch(getProjects(userId)),
        getCandidates: () => dispatch(getCandidates()),
        getCompanies: () => dispatch(getCompanies())
    }
}

export default connect(msp, mdp)(HomeContainer);

