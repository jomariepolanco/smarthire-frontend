import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Header, List } from 'semantic-ui-react'
import CreateJobForm from '../Components/CreateJobForm'

class JobsContainer extends Component {

    renderJobsList = () => {
        return [...this.props.jobs].map(job => {
            return(
                <>
                    <List.Item>
                        <Header as='h4'>
                            <NavLink style={{color: '#1b9aaa'}}to={`/clients/${this.props.company.id}/jobs/${job.id}`}>
                                {job.title}
                            </NavLink>
                        </Header>
                    </List.Item>
                </>
            )
    })
    }
  
    render() {
        console.log(this.props.jobs)
        return (
            <div>
                <Header as='h3'>Jobs</Header>
                <List relaxed>
                    {this.renderJobsList()}
                </List>
                <CreateJobForm submitHandler={this.props.submitHandler} company={this.props.company} />
            </div>
        )
    }
}


export default JobsContainer;
