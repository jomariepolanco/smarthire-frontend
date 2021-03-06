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
import { Header, Segment } from 'semantic-ui-react';


class ClientContainer extends Component {

    state = {
        searchedCompanies: ''
    }

    componentDidMount(){
        this.props.getCompanies()
        this.props.getJobs()
    }

    searchFormList = () => {
        const searchedCompanies = [...this.props.companies].filter(co => co.name.toLowerCase().includes(this.state.searchedCompanies.toLowerCase()) || co.industry.toLowerCase().includes(this.state.searchedCompanies.toLowerCase()))

        if (this.state.searchedCompanies === '') {
            return null
        } else {
            return searchedCompanies
        }

    }

    searchFormOnChange = (value) => {
        this.setState({searchedCompanies: value})
    }

    industryFormSubmit = (industry) => {
        const searched = [...this.props.companies].filter(co => co.industry.toLowerCase().includes(industry.toLowerCase()))
        this.setState({searchedCompanies: searched})
    }

    updateCompanyHandler = (companyId, updateObj) => {
        this.props.updateCompany(companyId, updateObj)
    }

    createJobFormSubmitHandler = (newObj) => {
        this.props.createJob(newObj)
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
                    return <CompanyCard createJobSubmitHandler={this.createJobFormSubmitHandler} company={company} updateCompany={this.updateCompanyHandler}/>
                }} />

                <Route path='/clients' render={(routerProps) => {
                    return (
                        <div>
                            <Segment basic floated='right'>
                                <CreateClientForm history={routerProps.history} />
                            </Segment>
                            <br />
                            <Header as='h1' floated='left'>Clients</Header>
                            <Segment basic>
                                <SearchForm changeHandler={this.searchFormOnChange} searchValue={this.state.searchedCompanies} label="Search By Company Name or Industry"/>
                            </Segment>
                            <Segment basic>
                                <ClientList clients={this.searchFormList()} />
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
