import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Modal, TextArea } from 'semantic-ui-react'
import { createCandidateCall } from '../../Redux/candidates/actions'

class CreateCallForm extends Component {

    state = {
        date: '',
        time: '', 
        notes: "Notes on Call",
        open: false
    }

    changeHandler = (e, data) => {
        this.setState({[data.name]: data.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        const newCallObj = {
            date: this.state.date, 
            time: this.state.time, 
            notes: this.state.notes,
            user_id: this.props.user.id,
            candidate_id: this.props.target.id
        }
        this.props.createCandidateCall(newCallObj)
        this.setState({open: false})
    }

    render() {
        return (
            <div>
                <Modal onClose={() => this.setState({open: false})} onOpen={() => this.setState({open: true})} open={this.state.open} trigger={<Button color='green'>Log a Call</Button>}>
                    <Modal.Content>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Field control={Input} label="Date" type="date" name="date" value={this.state.date} onChange={this.changeHandler}/>

                            <Form.Field control={Input} label="Time" type="time" name="time" value={this.state.time} onChange={this.changeHandler} />

                            <Form.TextArea control={TextArea} label="Notes" type="text" name="notes" value={this.state.notes} onChange={this.changeHandler}/>
                            
                            <Form.Field control={Input} label="Your Name" type="text" name="user_id" placeholder={this.props.user.first_name + ' ' + this.props.user.last_name} disabled />

                            <Form.Field control={Input} label="Candidate" type="text" placeholder={this.props.target.firstName + ' ' + this.props.target.lastName} disabled />

                            <Button color='green'>Log</Button>
                        </Form>
                    </Modal.Content>

                </Modal>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        user: state.user
    }
}

const mdp = (dispatch) => {
    return {
        createCandidateCall: (newCallObj) => dispatch(createCandidateCall(newCallObj))
    }
}

export default connect(msp, mdp)(CreateCallForm);

//change user value and input to logged in user when auth implemented
