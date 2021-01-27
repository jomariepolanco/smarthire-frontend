import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Header, Table } from 'semantic-ui-react'
import ApplicationContainer from '../Containers/ApplicationContainer'


export default class JobCard extends Component {

    render() {
        const {job} = this.props
        console.log(job)
        return (
            <div>
                <Header as='h2'>
                    <NavLink style={{color: '#1b9aaa'}}to={`/clients/${job.companyId}`}>{job.company}</NavLink>
                </Header>
                <br />
                <Table celled collapsing>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Job Title</Table.HeaderCell>
                            <Table.HeaderCell>Job Description</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell >{job.title}</Table.Cell>
                            <Table.Cell>{job.description}</Table.Cell>
                        </Table.Row>
                    </Table.Body>

                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Pay</Table.HeaderCell>
                            <Table.HeaderCell>Open Until</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>{job.pay}.00/hour</Table.Cell>
                            <Table.Cell>{job.dueDate}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                    </Table>

                    <Header as='h3'>Point of Contact Information</Header>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Phone Number</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>{job.poc.name}</Table.Cell>
                            <Table.Cell>{job.poc.phoneNumber}</Table.Cell>
                            <Table.Cell>{job.poc.email}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
              

                <ApplicationContainer applications={job.jobApplications}/>
            </div>
        )
    }
}
