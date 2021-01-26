import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import CreateApplicationForm from '../Components/CreateApplicationForm'

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
                <NavLink to={`/clients/${app.companyId}/jobs/${app.openJobId}`} style={{color: color}}>{app.openJob}</NavLink>
                <br />
                </>
            )
        })
    }

    render() {
        return (
            <div>
                <CreateApplicationForm candidate={this.props.candidate} jobs={this.props.jobs} submitHandler={this.props.submitHandler}/>
                <h1>Applications</h1>
                {this.renderApplications()}
            </div>
        )
    }
}



export default ApplicationContainer;
