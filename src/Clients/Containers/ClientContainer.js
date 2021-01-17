import React, { Component } from 'react'
import { connect } from 'react-redux';
import SearchForm from '../../sharedComponents/SearchForm'
import {getCompanies} from '../../Redux/companies/actions'

class ClientContainer extends Component {

    componentDidMount(){
        this.props.getCompanies()
    }

    render() {
        console.log(this.props.companies)
        return (
            <div>
                <SearchForm submitHandler={this.submitHandler}/>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        companies: state.companies
    }
}

const mdp = (dispatch) => {
    return {
        getCompanies: () => dispatch(getCompanies())
    }
}
export default connect(msp, mdp)(ClientContainer);
