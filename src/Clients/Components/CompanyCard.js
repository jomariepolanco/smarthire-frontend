import React, { Component } from 'react'
import CallContainer from '../Containers/CallContainer'
import Form from '../../sharedComponents/Form'
import NotesCard from './NotesCard'
import { NavLink } from 'react-router-dom'
import JobsContainer from '../../Jobs/Containers/JobsContainer'
import { connect } from 'react-redux'
import { createJob } from '../../Redux/companies/actions'


class CompanyCard extends Component {


    state= {
        name: this.props.company.name,
        address: this.props.company.address,
        industry: this.props.company.industry,
        poc_name: this.props.company.pocName,
        poc_email: this.props.company.pocEmail,
        poc_number: this.props.company.pocNumber
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (updateObj) => {
        this.props.updateCompany(this.props.company.id, updateObj)
    }

    createJobFormSubmitHandler = (newObj) => {
        this.props.createJob(newObj)
    }

    render() {
        console.log(this.props.companies, this.props.company)
        return (
            <div>
                <h1>{this.props.company.name}</h1>
                <Form value={this.state.name} name="name" changeHandler={this.changeHandler} placeholder="Name" submitHandler={this.submitHandler}/>
                <Form value={this.state.industry} name="industry" changeHandler={this.changeHandler} placeholder="Industry" submitHandler={this.submitHandler}/>
                <Form value={this.state.address} name="address" changeHandler={this.changeHandler} placeholder="Address" submitHandler={this.submitHandler}/>
                <Form value={this.state.poc_name} name="poc_name" changeHandler={this.changeHandler} placeholder="Point of Contact Name" submitHandler={this.submitHandler}/>
                <Form value={this.state.poc_email} name="poc_email" changeHandler={this.changeHandler} placeholder="Point of Contact Email" submitHandler={this.submitHandler}/>
                <Form value={this.state.poc_number} name="poc_number" changeHandler={this.changeHandler} placeholder="Point of Contact Phone Number" submitHandler={this.submitHandler}/>

                <CallContainer company={this.props.company} calls={this.props.company.calls}/>

                <NotesCard company={this.props.company} notes={this.props.company.notes} />

                <JobsContainer submitHandler={this.createJobFormSubmitHandler} company={this.props.company} jobs={this.props.company.jobs} />
            </div>
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
        createJob: (newObj) => dispatch(createJob(newObj))
    }
}

export default connect(msp, mdp)(CompanyCard);