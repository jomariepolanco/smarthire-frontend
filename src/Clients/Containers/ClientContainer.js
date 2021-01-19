import React, { Component } from 'react'
import { connect } from 'react-redux';
import SearchForm from '../../sharedComponents/SearchForm'
import {createJob, getCompanies, updateCompany} from '../../Redux/companies/actions'
import ClientList from '../Components/ClientList';
import { Redirect, Route, Switch } from 'react-router-dom';
import CompanyCard from '../Components/CompanyCard';
import CreateClientForm from '../Components/CreateClientForm';
import JobCard from '../../Jobs/Components/JobCard';
import { getJobs } from '../../Redux/jobs/actions';
import { Card } from 'semantic-ui-react';


class ClientContainer extends Component {

    state = {
        searchedCompanies: []
    }

    componentDidMount(){
        this.props.getCompanies()
        this.props.getJobs()
    }

    searchFormSubmit = (name) => {
        const searchedCompanies = [...this.props.companies].filter(co => co.name.toLowerCase().includes(name.toLowerCase()))
        this.setState({searchedCompanies: searchedCompanies})
    }

    updateCompanyHandler = (companyId, updateObj) => {
        this.props.updateCompany(companyId, updateObj)
    }

    createJobFormSubmitHandler = (newObj) => {
        this.props.createJob(newObj)
    }

    render() {
        console.log(this.props.jobs)
        return (
            <>
            {this.props.user ?
            
            <Switch>
                <Route path='/clients/:id/jobs/:jobId' render={({match}) => {
                    let id = +match.params.jobId
                    let job = [...this.props.jobs].find(job => job.id === id)
                    return <JobCard job={job} />
                }} />

                <Route path='/clients/:id' render={({match}) => {
                    let id = +match.params.id 
                    let company = [...this.props.companies].find(co => co.id === id)
                    return <CompanyCard createJobSubmitHandler={this.createJobFormSubmitHandler} company={company} updateCompany={this.updateCompanyHandler}/>
                }} />

                <Route path='/clients' render={(routerProps) => {
                    return (
                        <div>
                            <Card fluid>
                                <SearchForm submitHandler={this.searchFormSubmit}/>
                            </Card>
                            <Card fluid>
                                <ClientList clients={this.state.searchedCompanies} />
                            </Card>
                            <Card fluid>
                                <CreateClientForm history={routerProps.history} />
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
        companies: state.companies,
        jobs: state.jobs,
        user: state.user 
    }
}

const mdp = (dispatch) => {
    return {
        getCompanies: () => dispatch(getCompanies()),
        updateCompany: (coId, updateObj) => dispatch(updateCompany(coId, updateObj)),
        getJobs: () => dispatch(getJobs()),
        createJob: (obj) => dispatch(createJob(obj))
    }
}
export default connect(msp, mdp)(ClientContainer);
