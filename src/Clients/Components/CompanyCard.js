import React, { Component } from 'react'
import CallContainer from '../Containers/CallContainer'
import Form from '../../sharedComponents/Form'
import NotesCard from './NotesCard'
import { NavLink } from 'react-router-dom'
import JobsContainer from '../../Jobs/Containers/JobsContainer'
import { connect } from 'react-redux'
import { createJob } from '../../Redux/companies/actions'
import {getJobs} from '../../Redux/jobs/actions'
import { Grid, Segment } from 'semantic-ui-react'


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

    render() {
        console.log(this.props.company.jobs)
        return (
            <div>
                <h1>{this.props.company.name}</h1>
                <Grid columns={2} divided>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Segment>
                                <Form value={this.state.name} name="name" changeHandler={this.changeHandler} placeholder="Name" submitHandler={this.submitHandler}/>

                                <Form value={this.state.industry} name="industry" changeHandler={this.changeHandler} placeholder="Industry" submitHandler={this.submitHandler}/>

                                <Form value={this.state.address} name="address" changeHandler={this.changeHandler} placeholder="Address" submitHandler={this.submitHandler}/>

                                <Form value={this.state.poc_name} name="poc_name" changeHandler={this.changeHandler} placeholder="Point of Contact Name" submitHandler={this.submitHandler}/>

                                <Form value={this.state.poc_email} name="poc_email" changeHandler={this.changeHandler} placeholder="Point of Contact Email" submitHandler={this.submitHandler}/>

                                <Form value={this.state.poc_number} name="poc_number" changeHandler={this.changeHandler} placeholder="Point of Contact Phone Number" submitHandler={this.submitHandler}/>
                            </Segment>
                            <Segment>
                                <CallContainer company={this.props.company} calls={this.props.company.calls}/>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                                <NotesCard company={this.props.company} notes={this.props.company.notes} />
                            </Segment>
                            <Segment>
                                <JobsContainer submitHandler={this.props.createJobSubmitHandler} company={this.props.company} jobs={this.props.company.jobs} />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                



            </div>
        )
    }
}

const msp = (state) => {
    return {
        companies: state.companies
    }
}


export default connect(msp)(CompanyCard);