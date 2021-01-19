import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'
import { createApplication } from '../../Redux/applications/actions'
import FormInput from '../../sharedComponents/Form'
import CallContainer from '../Containers/CallContainer'
import CreateApplicationForm from './CreateApplicationForm'
import NotesCard from './NotesCard'


class CandidateCard extends Component {

    state = {
        first_name: this.props.candidate.firstName,
        last_name: this.props.candidate.lastName, 
        cell_phone: this.props.candidate.cellPhone,
        home_phone: this.props.candidate.homePhone,
        date_of_birth: this.props.candidate.dateOfBirth,
        address: this.props.candidate.address,
        city: this.props.candidate.city,
        state: this.props.candidate.state,
        zipcode: this.props.candidate.zipcode
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (updatedObj) => {
        this.props.updateCandidate(this.props.candidate.id, updatedObj)
    }

    createAppSubmitHandler = (newAppObj) => {
        this.props.createApplication(newAppObj)
    }

    render() {
        console.log(this.props.candidate)
        return (
            <>
                <h1>{this.props.candidate.firstName} {this.props.candidate.lastName}</h1>
            <Grid columns={2} divided>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment>
                            <FormInput value={this.state.first_name} name="first_name" changeHandler={this.changeHandler} placeholder="First Name" submitHandler={this.submitHandler}/>
                
                            <FormInput value={this.state.last_name} name="last_name" changeHandler={this.changeHandler} placeholder="Last Name" submitHandler={this.submitHandler} />
                        
                            <FormInput value={this.state.cell_phone} name="cell_phone"  changeHandler={this.changeHandler} placeholder="Cell Phone" submitHandler={this.submitHandler}/>
                        
                            <FormInput value={this.state.home_phone} name="home_phone" changeHandler={this.changeHandler} placeholder="Home Phone" submitHandler={this.submitHandler}/>
                        
                            <FormInput value={this.state.date_of_birth} name="date_of_birth" changeHandler={this.changeHandler} placeholder="Date Of Birth" submitHandler={this.submitHandler}/>
                        
                            <FormInput value={this.state.address} name="address" changeHandler={this.changeHandler} placeholder="Street Address" submitHandler={this.submitHandler}/>
                        
                            <FormInput value={this.state.city} name="city" changeHandler={this.changeHandler} placeholder="City" submitHandler={this.submitHandler}/>
                        
                            <FormInput value={this.state.state} name="state" changeHandler={this.changeHandler} placeholder="State" submitHandler={this.submitHandler}/>
                        
                            <FormInput value={this.state.zipcode} name="zipcode" changeHandler={this.changeHandler} placeholder="Zipcode" submitHandler={this.submitHandler}/>
                        </Segment>
                        <Segment>
                            <CreateApplicationForm candidate={this.props.candidate} jobs={this.props.jobs} submitHandler={this.createAppSubmitHandler}/>

                            <CallContainer target={this.props.candidate} calls={this.props.candidate.calls}/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <NotesCard candidate={this.props.candidate} notes={this.props.candidate.notes}/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                    


            </Grid>
            </>
        )
    }
}

const msp = (state) => {
    return {
        jobs: state.jobs,
        candidates: state.candidates
    }
}

const mdp = (dispatch) => {
    return {
        createApplication: (newAppObj) => dispatch(createApplication(newAppObj))
    }
}



export default connect(msp, mdp)(CandidateCard);