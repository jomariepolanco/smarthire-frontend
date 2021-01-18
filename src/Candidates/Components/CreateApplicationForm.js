import React, { Component } from 'react'

export default class CreateApplicationForm extends Component {

    state = {
        job: '',
        color: ''
    }

    renderOptionTag = () => {
        return [...this.props.jobs].map(job => <option key={job.id} value={job.id}>{job.title}(Company Name Goes Here)</option>)
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        let newApp;
        const color = this.state.color 
        if (color === 'red'){
            newApp = {
                candidate_id: this.props.candidate.id,
                open_job_id: +this.state.job,
                red: true,
                yellow: false,
                green: false
            }
        } else if (color === 'green'){
            newApp = {
                candidate_id: this.props.candidate.id,
                open_job_id: +this.state.job,
                red: false,
                yellow: false,
                green: true
            }
        } else if (color === 'yellow'){
            newApp = {
                candidate_id: this.props.candidate.id,
                open_job_id: +this.state.job,
                red: false, 
                yellow: true,
                green: true
            }
        }
        this.props.submitHandler(newApp)
    }

    render() {
        console.log(this.props.jobs)
        return (
            <div>
                <button>Create Application</button>
                <form onSubmit={this.submitHandler}>
                    <input type="text" disabled placeholder={this.props.candidate.firstName + ' ' + this.props.candidate.lastName} /> 

                    {/* radio buttons open jobs */}
                    <label>Choose Job:</label>
                    <select name="job" onChange={this.changeHandler}>
                        {this.renderOptionTag()}
                    </select>


                    {/* radio buttons for red, green, yellow */}
                    <input type="radio" value="red" name="color" onChange={this.changeHandler}/>
                    <label>Red</label>
                    <input type="radio" value="green" name="color" onChange={this.changeHandler}/>
                    <label>Green</label>
                    <input type="radio" value="yellow" name="color" onChange={this.changeHandler}/>
                    <label>Yellow</label>

                    <button>Create Application</button>
                </form>
            </div>
        )
    }
}
