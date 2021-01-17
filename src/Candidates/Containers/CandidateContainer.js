import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCandidates } from '../../Redux/candidates/actions'
import CandidateList from '../Components/CandidateList'
import SearchForm from '../Components/SearchForm'

class CandidateContainer extends Component {

    state = {
        searchedCandies: []
    }

    componentDidMount(){
        this.props.getCandidates()
    }

    searchFormSubmit = (name) => {
        const searchedCandies = [...this.props.candidates].filter(candy => candy.firstName.toLowerCase().includes(name.toLowerCase()) || candy.lastName.toLowerCase().includes(name.toLowerCase()))
        this.setState({searchedCandies: searchedCandies})
    }


    render() {
        return (
            <div>
                <SearchForm candidates={this.props.candidates} submitHandler={this.searchFormSubmit}/>
                <CandidateList candidates={this.state.searchedCandies} />
            </div>
        )
    }
}

const msp = (state) => {
    return {
        candidates: state.candidates
    }
}

const mdp = (dispatch) => {
    return {
        getCandidates: () => dispatch(getCandidates())
    }
}

export default connect(msp, mdp)(CandidateContainer);