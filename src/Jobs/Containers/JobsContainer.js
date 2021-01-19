import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import CreateJobForm from '../Components/CreateJobForm'

class JobsContainer extends Component {

    renderJobsList = () => {
        return [...this.props.jobs].map(job => {
            return(
                <>
                    <List.Item>
                        <NavLink to={`/clients/${this.props.company.id}/jobs/${job.id}`}>
                            {job.title}
                        </NavLink>
                    </List.Item>
                </>
            )
    })
    }
  
    render() {
        console.log(this.props.jobs)
        return (
            <div>
                <h3>Jobs</h3>
                <List divided relaxed>
                    {this.renderJobsList()}
                </List>
                <CreateJobForm submitHandler={this.props.submitHandler} company={this.props.company} />
            </div>
        )
    }
}


export default JobsContainer;
