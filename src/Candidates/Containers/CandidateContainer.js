import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { getCandidates, updateCandidate } from '../../Redux/candidates/actions'
import CandidateCard from '../Components/CandidateCard'
import CandidateList from '../Components/CandidateList'
import CreateCandidateForm from '../Components/CreateCandidateForm'
import SearchForm from '../../sharedComponents/SearchForm'

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

    updateCandidateHandler = (candyId, updateObj) => {
        this.props.updateCandidate(candyId, updateObj)
    }


    render() {
        console.log(this.props.candidates)
        return (
            <Switch>
                <Route path='/candidates/:id' render={({match}) => {
                    let id = +match.params.id 

                    let candidate = [...this.props.candidates].find(candy => candy.id === id)
                    return <CandidateCard candidate={candidate} updateCandidate={this.updateCandidateHandler} />
                }} />

                <Route path='/candidates' render={() => {
                    return (
                        <div>
                            <SearchForm  submitHandler={this.searchFormSubmit}/>
                            <CandidateList candidates={this.state.searchedCandies} />
                            <CreateCandidateForm />
                        </div>

                    )
                }} />
            </Switch>
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
        getCandidates: () => dispatch(getCandidates()),
        updateCandidate: (candidateId, updateObj) => dispatch(updateCandidate(candidateId, updateObj))
    }
}

export default connect(msp, mdp)(CandidateContainer);