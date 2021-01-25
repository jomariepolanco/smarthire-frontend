import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Modal } from 'semantic-ui-react'
import { createNewCall } from '../../Redux/companies/actions'

class CreateCallForm extends Component {

    state = {
        date: '',
        notes: '',
        time: '',
        open: false
    }

    changeHandler = (e, data) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        const newCall = {
            date: this.state.date,
            time: this.state.time,
            notes: this.state.notes,
            user_id: this.props.user.id,
            company_id: this.props.company.id 
        }

        this.props.createNewCall(newCall)
        this.setState({open: false})
    }

    render() {
        return (
            <div>
                <Modal onClose={() => this.setState({open: false})} onOpen={() => this.setState({open: true})} open={this.state.open} trigger={<Button color="green">Log a Call</Button>}>
                    <Modal.Content>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Field control={Input} label="Date" type="date" name="date" value={this.state.date} onChange={this.changeHandler} />
                            <Form.Field control={Input} type="time" name="time" label="Time" value={this.state.time} onChange={this.changeHandler} />
                            <Form.Field control={Input} type="text" name="notes" label="Notes on Call" value={this.state.notes} onChange={this.changeHandler}/>
                            <Form.Field label="Your Name" control={Input} type="text" name="user_id" placeholder={this.props.user.first_name + ' ' + this.props.user.last_name} disabled />
                            <Form.Field label="Company" control={Input} type="text" placeholder={this.props.company.name} disabled />
                            <Button color="green">Log</Button>
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
        createNewCall: (newObj) => dispatch(createNewCall(newObj))
    }
}

export default connect(msp, mdp)(CreateCallForm);

//change user value and input to logged in user when auth implemented