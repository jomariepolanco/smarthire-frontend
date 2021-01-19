import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, TextArea } from 'semantic-ui-react'
import { updateCandidate } from '../../Redux/candidates/actions'

class NotesCard extends Component {

    state = {
        notes: this.props.notes
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.updateCandidate(this.props.candidate.id, this.state)
    }

    render() {
        return (
            <div>
                <h3>Notes</h3>
                <Form size="huge" widths="equal" onSubmit={this.submitHandler}>
                    <Form.TextArea control={TextArea} type="textarea" value={this.state.notes} name="notes" onChange={this.changeHandler} />
                    <Button color="blue">Update Note</Button>
                </Form>
                
            </div>
        )
    }
}

const mdp = (dispatch) => {
    return {
        updateCandidate: (candidateId, updateObj) => dispatch(updateCandidate(candidateId, updateObj))
    }
}

export default connect(null, mdp)(NotesCard);