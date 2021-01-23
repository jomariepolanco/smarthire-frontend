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
        searchedCandies: []
    }

    componentDidMount(){
        this.props.getCandidates()
        this.props.getJobs()
    }

    searchFormSubmit = (name) => {
        const searchedCandies = [...this.props.candidates].filter(candy => candy.firstName.toLowerCase().includes(name.toLowerCase()) || candy.lastName.toLowerCase().includes(name.toLowerCase()))
        this.setState({searchedCandies: searchedCandies})
    }

    appSearchHandler = (color) => {
        const searched = [...this.props.candidates].filter(candy => {
            if (color.toLowerCase() === 'green'){
                return candy.applications.some(app => app.green)
            } else if (color.toLowerCase() === 'yellow'){
                return candy.applications.some(app => app.yellow)
            } else if (color.toLowerCase() === 'red'){
                return candy.applications.some(app => app.red)
            }
        })
        this.setState({searchedCandies: searched})
        }

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
                                    <SearchForm  submitHandler={this.searchFormSubmit}/>
                                </Card>
                                <Card fluid>
                                    <ApplicationSearchForm submitHandler={this.appSearchHandler}/>
                                </Card>
                                <Card fluid>
                                    <CandidateList candidates={this.state.searchedCandies} />
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