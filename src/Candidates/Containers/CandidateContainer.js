import React, { Component } from 'react'
import CandidateList from '../Components/CandidateList'
import SearchForm from '../Components/SearchForm'

export default class CandidateContainer extends Component {
    render() {
        return (
            <div>
                candidate container
                <SearchForm />
                <CandidateList />
            </div>
        )
    }
}
