import React, { Component } from 'react'
import { Button, Form, Input, Modal, Select } from 'semantic-ui-react'

export default class CreateApplicationForm extends Component {

    state = {
        job: '',
        color: '',
        open: false
    }

    renderOptionTag = () => {
        let options = [];
        [...this.props.jobs].forEach(job => {
            options.push({key: job.id, text: `${job.title}(Company Name here)`, value: job.id})
                // <option key={job.id} value={job.id}>{job.title}(Company Name Goes Here)</option>
        })

        return options
        
    }

    changeHandler = (e, data) => {
        this.setState({[data.name]: data.value})
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
        console.log(this.state)
        return (
            <div>
                <Modal onClose={() => this.setState({open: false})} onOpen={() => this.setState({open: true})} open={this.state.open} trigger={<Button color="blue">Create Application</Button>}>
                    <Modal.Content>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Field control={Input} label="Candidate" type="text" disabled value={this.props.candidate.name} /> 

                            {/* dropdown buttons open jobs */}
                            <Form.Field control={Select} label="Choose Job:" name="job" onChange={this.changeHandler} options={this.renderOptionTag()}/>


                            {/* radio buttons for red, green, yellow */}
                            <Form.Group inline>
                                <label>Color</label>
                                <Form.Radio label="Red" name="color" value='red' checked={this.state.color === 'red'} onChange={this.changeHandler} />
                                <Form.Radio label="Yellow" name="color" value='yellow' checked={this.state.color === 'yellow'} onChange={this.changeHandler} />
                                <Form.Radio label="Green" name="color" value='green' checked={this.state.color === 'green'} onChange={this.changeHandler} />
                            </Form.Group>

                            <Button color="green" onClick={() => this.setState({open: false})}>Create Application</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}
