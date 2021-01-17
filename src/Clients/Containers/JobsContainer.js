import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class JobsContainer extends Component {

    renderJobsList = () => {
        if (this.props.jobs.length > 0){
            return [...this.props.jobs].map(job => <><NavLink to={`/jobs/${job.id}`}>{job.title}</NavLink><br /></>)
        }
    }
    render() {
        return (
            <div>
                <h3>Jobs</h3>
                {this.renderJobsList()}
            </div>
        )
    }
}
