import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

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

  
    render() {
        console.log(this.props.jobs)
        return (
            <div>
                <h3>Jobs</h3>
                {this.renderJobsList()}
            </div>
        )
    }
}


export default JobsContainer;