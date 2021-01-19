import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Modal } from 'semantic-ui-react'
import { createNewCandidate } from '../../Redux/candidates/actions'

class CreateCandidateForm extends Component {

    state = {
        first_name:'',
        last_name: '',
        cell_phone: '',
        home_phone: '',
        date_of_birth: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        open: false
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        const newCandy = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            cell_phone: this.state.cell_phone,
            home_phone: this.state.home_phone,
            date_of_birth: this.state.date_of_birth,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode
        }
        this.props.createNewCandidate(newCandy, this.props.history)
        //push to candidates show page when hit submit
    }

    render() {
        return (
            <div>
                <h1>Add a Candidate</h1>
                <Modal onClose={() => this.setState({open: false})} onOpen={() => this.setState({open: true})}
                trigger={<Button color='green'>Add Candidate</Button>}>
                    <Modal.Content>
                    <Form onSubmit={this.submitHandler}>
                    <Form.Field control={Input} label="First Name" type="text" name="first_name" value={this.state.first_name} onChange={this.changeHandler} placeholder="First Name" />

                    <Form.Field control={Input} label="Last Name" type="text" name="last_name" value={this.state.last_name}onChange={this.changeHandler} placeholder="Last Name" />

                    <Form.Field control={Input} label="Cell Phone" type="text" name="cell_phone" value={this.state.cell_phone} onChange={this.changeHandler} placeholder="Cell Phone" />

                    <Form.Field control={Input} label="Home Phone" type="text" name="home_phone" value={this.state.home_phone} onChange={this.changeHandler} placeholder="Home Phone" />

                    <Form.Field control={Input} label="Date Of Birth" type="text" name="date_of_birth" value={this.state.date_of_birth} onChange={this.changeHandler} placeholder="Date of Birth" />

                    <Form.Field control={Input} label="Address" type="text" name="address" value={this.state.address} placeholder="Street Address" onChange={this.changeHandler}/>

                    <Form.Field control={Input} label="City" type="text" name="city" value={this.state.city} placeholder="City" onChange={this.changeHandler}/>

                    <Form.Field control={Input} label="State" type="text" name="state" value={this.state.state} placeholder="State" onChange={this.changeHandler}/>

                    <Form.Field control={Input} label="Zipcode" type="text" name="zipcode" value={this.state.zipcode} placeholder="Zipcode" onChange={this.changeHandler} />
                    <Button color="blue">Create New Candidate</Button>
                </Form>
                    </Modal.Content>
                </Modal>
                
            </div>
        )
    }
}

const mdp = (dispatch) => {
    return {
        createNewCandidate: (candyObj, history) => dispatch(createNewCandidate(candyObj, history))
    }
}

export default connect(null, mdp)(CreateCandidateForm);