import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import CreateApplicationForm from '../Components/CreateApplicationForm'
import styled from 'styled-components'

class ApplicationContainer extends Component {

    renderApplications = () => {
        return [...this.props.candidate.applications].map(app => {
            console.log(app)
            let color;
            if (app.green){
                color = '#62c370'
            } else if (app.yellow){
                color = '#e6c229'
            } else if (app.red) {
                color = '#ff5964'
            }
            return(
                <>
                <Header as='h4'>
                    <NavLink to={`/clients/${app.companyId}/jobs/${app.openJobId}`} style={{color: color}}>{app.openJob}</NavLink>
                </Header>
                </>
            )
        })
    }

    render() {
        return (
            <div>
                <Header as='h3'>Applications</Header>
                {this.renderApplications()}
                <ButtonPosition>
                    <CreateApplicationForm candidate={this.props.candidate} jobs={this.props.jobs} submitHandler={this.props.submitHandler}/>
                </ButtonPosition>
            </div>
        )
    }
}

const ButtonPosition = styled.div`
    position: absolute;
    left: 10;
    bottom: 5%;
`



export default ApplicationContainer;
