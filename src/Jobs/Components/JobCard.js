import React, { Component } from 'react'
import ApplicationContainer from '../Containers/ApplicationContainer'


export default class JobCard extends Component {

    render() {
        const {job} = this.props
        console.log(job)
        return (
            <div>
                <h1>{job.title}</h1>
                <h4>{job.description}</h4>
                <h5>${job.pay}.00/hour</h5>
                <h5>Due: {job.dueDate}</h5>
                <h4>Point of Contact:</h4>
                <p>{job.poc.name}</p>
                <p>{job.poc.email}</p>
                <p>{job.poc.phoneNumber}</p>

                <ApplicationContainer applications={job.jobApplications}/>
            </div>
        )
    }
}
