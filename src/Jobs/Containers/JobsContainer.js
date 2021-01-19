import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CreateJobForm from '../Components/CreateJobForm'
import {connect} from 'react-redux'
import { createJob } from '../../Redux/companies/actions'

class JobsContainer extends Component {

    renderJobsList = () => {
        return [...this.props.jobs].map(job => {
            return(
                <>
                <NavLink to={`/clients/${this.props.company.id}/jobs/${job.id}`}>
                    {job.title}
                </NavLink>
                <br />
                </>
            )
    })
    }

    // createFormSubmitHandler = (newObj) => {
    //     this.props.createJob(newObj)
    // }

  
    render() {
        console.log(this.props.jobs)
        return (
            <div>
                <h3>Jobs</h3>
                {this.renderJobsList()}
                <CreateJobForm submitHandler={this.props.submitHandler} company={this.props.company} />
            </div>
        )
    }
}

// const mdp = (dispatch) => {
//     return {
//         createJob: (newObj) => dispatch(createJob(newObj))
//     }
// }

export default JobsContainer;
