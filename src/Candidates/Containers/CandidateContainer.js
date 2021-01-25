import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { getCandidates, updateCandidate } from '../../Redux/candidates/actions'
import CandidateCard from '../Components/CandidateCard'
import CandidateList from '../Components/CandidateList'
import CreateCandidateForm from '../Components/CreateCandidateForm'
import SearchForm from '../../sharedComponents/SearchForm'
import { getJobs } from '../../Redux/jobs/actions'
import { Card } from 'semantic-ui-react'
import ApplicationSearchForm from '../Components/ApplicationSearchForm'

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

    // appSearchHandler = (color) => {
        
    //     debugger
    //     this.setState({searched: searched})
    //     }

    updateCandidateHandler = (candyId, updateObj) => {
        this.props.updateCandidate(candyId, updateObj)
    }


    render() {
        return (
            <>
            {this.props.user ?
                <Switch>
                    <Route path='/candidates/:id' render={({match}) => {
                        let id = +match.params.id 

                        let candidate = [...this.props.candidates].find(candy => candy.id === id)
                        return <CandidateCard candidate={candidate} updateCandidate={this.updateCandidateHandler} />
                    }} />

                    <Route path='/candidates' render={(routerProps) => {
                        return (
                            <div>
                                <Card fluid>
                                    <SearchForm 
                                    changeHandler={this.searchFormOnChange} searchValue={this.state.searchedCandies}/>
                                </Card>
                                <Card fluid>
                                    <ApplicationSearchForm changeHandler={this.searchFormOnChange} searchValue={this.state.searchedCandies} />
                                </Card>
                                <Card fluid>
                                    <CandidateList candidates={this.renderCandyList()} />
                                </Card>
                                <Card fluid>
                                    <CreateCandidateForm history={routerProps.history} />
                                </Card>
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
        user: state.user
    }
}

const mdp = (dispatch) => {
    return {
        getCandidates: () => dispatch(getCandidates()),
        updateCandidate: (candidateId, updateObj) => dispatch(updateCandidate(candidateId, updateObj)),
        getJobs: () => dispatch(getJobs())
    }
}

export default connect(msp, mdp)(CandidateContainer);