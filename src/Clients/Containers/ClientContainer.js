import React, { Component } from 'react'
import { connect } from 'react-redux';
import SearchForm from '../../sharedComponents/SearchForm'
import {getCompanies, updateCompany} from '../../Redux/companies/actions'
import ClientList from '../Components/ClientList';
import { Route, Switch } from 'react-router-dom';
import CompanyCard from '../Components/CompanyCard';
import CreateClientForm from '../Components/CreateClientForm';

class ClientContainer extends Component {

    state = {
        searchedCompanies: []
    }

    componentDidMount(){
        this.props.getCompanies()
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
                <Switch>
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
        getCompanies: () => dispatch(getCompanies()),
        updateCompany: (coId, updateObj) => dispatch(updateCompany(coId, updateObj))
    }
}
export default connect(msp, mdp)(ClientContainer);
