import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { getCandidates, updateCandidate } from '../../Redux/candidates/actions'
import CandidateCard from '../Components/CandidateCard'
import CandidateList from '../Components/CandidateList'
import CreateCandidateForm from '../Components/CreateCandidateForm'
import SearchForm from '../../sharedComponents/SearchForm'
import { getJobs } from '../../Redux/jobs/actions'
import { Card, Header, Segment } from 'semantic-ui-react'
import { createApplication } from '../../Redux/candidates/actions'

class CandidateContainer extends Component {

    state = {
        searchedCandies: '',
    }

    componentDidMount(){
        this.props.getCandidates()
        this.props.getJobs()
    }

    searchFormOnChange = (value) => {
        this.setState({searchedCandies: value})
    }

    renderCandyList = () => {
        let searchedCandies;
        if (this.state.searchedCandies.includes('green') || this.state.searchedCandies.includes('red') || this.state.searchedCandies.includes('yellow')){
            searchedCandies = [...this.props.candidates].filter(candy => {
                if (this.state.searchedCandies.toLowerCase() === 'green'){
                    return candy.applications.some(app => app.green)
                } else if (this.state.searchedCandies.toLowerCase() === 'yellow'){
                    return candy.applications.some(app => app.yellow)
                } else if (this.state.searchedCandies.toLowerCase() === 'red'){
                    return candy.applications.some(app => app.red)
                }
            })
        } else {
            searchedCandies = [...this.props.candidates].filter(candy => candy.firstName.toLowerCase().includes(this.state.searchedCandies.toLowerCase()) || candy.lastName.toLowerCase().includes(this.state.searchedCandies.toLowerCase()))
        }

        if (this.state.searchedCandies === ''){
            return null
        } else {
            return searchedCandies
        }
    }

    updateCandidateHandler = (candyId, updateObj) => {
        this.props.updateCandidate(candyId, updateObj)
    }

    createAppSubmitHandler = (newAppObj) => {
        // debugger
        this.props.createApplication(newAppObj)
      }

    render() {
        return (
            <>
            {this.props.user ?
                <Switch>
                    <Route path='/candidates/:id' render={({match}) => {
                        let id = +match.params.id 

                        let candidate = [...this.props.candidates].find(candy => candy.id === id)
                        return <CandidateCard candidate={candidate} updateCandidate={this.updateCandidateHandler} createAppSubmitHandler={this.createAppSubmitHandler} />
                    }} />

                    <Route path='/candidates' render={(routerProps) => {
                        return (
                            <div>
                                <Segment basic floated='right'>
                                    <CreateCandidateForm history={routerProps.history} />
                                </Segment>
                                <br />
                                <Header as='h1' floated='left'>Candidates</Header>
                                <Segment basic>
                                    <SearchForm 
                                    changeHandler={this.searchFormOnChange} searchValue={this.state.searchedCandies} label="Search By Name or Application Color" />
                                </Segment>
                                <Segment basic>
                                    <CandidateList candidates={this.renderCandyList()} />
                                </Segment>
                            </div>

                        )
                    }} />
            </Switch>
        
        
            :
            
            
            <Redirect to='/login' />
            
            
            
            }
            </>
        )
    }
}

const msp = (state) => {
    return {
        candidates: state.candidates,
        user: state.user,
        applications: state.applications
    }
}

const mdp = (dispatch) => {
    return {
        getCandidates: () => dispatch(getCandidates()),
        updateCandidate: (candidateId, updateObj) => dispatch(updateCandidate(candidateId, updateObj)),
        getJobs: () => dispatch(getJobs()),
        createApplication: (obj) => dispatch(createApplication(obj))
    }
}

export default connect(msp, mdp)(CandidateContainer);