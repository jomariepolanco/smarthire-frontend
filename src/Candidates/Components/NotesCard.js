import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, TextArea } from 'semantic-ui-react'
import { updateCandidate } from '../../Redux/candidates/actions'

class NotesCard extends Component {

    state = {
        notes: this.props.notes,
        focus: false
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    focusHandler = () => {
        this.setState({focus: true})
    }

    focusOutHandler = () => {
        this.setState({focus: false})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.updateCandidate(this.props.candidate.id, this.state)
        this.focusOutHandler()
    }

    render() {
        console.log(this.state.focus)
        return (
            <div>
                <h3>Notes</h3>

                {this.state.focus ? 
                
                <Form widths="equal" onSubmit={this.submitHandler}>
                    <Form.TextArea rows="40" cols="40" onFocus={this.focusHandler} control={TextArea} type="textarea" value={this.state.notes} name="notes" onChange={this.changeHandler} />
                    <Button color="green">Update Notes</Button>
                </Form>
            
                :
            
                <div style={{whiteSpace: 'pre-line'}} onClick={this.focusHandler}>{this.props.notes}</div>
            
                }
                
                
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