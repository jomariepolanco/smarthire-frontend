import React, { Component } from 'react'
import { connect } from 'react-redux';
import SearchForm from '../../sharedComponents/SearchForm'
import {getCompanies} from '../../Redux/companies/actions'
import ClientList from '../Components/ClientList';
import { Route, Switch } from 'react-router-dom';
import CompanyCard from '../Components/CompanyCard';

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

    render() {
        return (
                <Switch>
                    <Route path='/clients/:id' render={({match}) => {
                        let id = +match.params.id 
                        let company = [...this.props.companies].find(co => co.id === id)
                        return <CompanyCard company={company}/>
                    }} />
                    
                    <Route path='/clients' render={() => {
                        return (
                            <div>
                                <SearchForm submitHandler={this.searchFormSubmit}/>
                                <ClientList clients={this.state.searchedCompanies}/>
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
        getCompanies: () => dispatch(getCompanies())
    }
}
export default connect(msp, mdp)(ClientContainer);
