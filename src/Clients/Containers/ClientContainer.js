import React, { Component } from 'react'
import { connect } from 'react-redux';
import SearchForm from '../../sharedComponents/SearchForm'
import {getCompanies, updateCompany} from '../../Redux/companies/actions'
import ClientList from '../Components/ClientList';
import { Redirect, Route, Switch } from 'react-router-dom';
import CompanyCard from '../Components/CompanyCard';
import CreateClientForm from '../Components/CreateClientForm';
import JobCard from '../../Jobs/Components/JobCard';
import { getJobs } from '../../Redux/jobs/actions';


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

    render() {
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
                    return <CompanyCard company={company} updateCompany={this.updateCompanyHandler}/>
                }} />

                <Route path='/clients' render={() => {
                    return (
                        <div>
                            <SearchForm submitHandler={this.searchFormSubmit}/>
                            <ClientList clients={this.state.searchedCompanies} />
                            <CreateClientForm />
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
        getJobs: () => dispatch(getJobs())
    }
}
export default connect(msp, mdp)(ClientContainer);
