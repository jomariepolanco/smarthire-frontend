import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button, Form, TextArea } from 'semantic-ui-react'
import {updateCompany} from '../../Redux/companies/actions'

class NotesCard extends Component {

    state = {
        notes: this.props.notes,
        focus: false
    }

    focusHandler = () => {
        this.setState({focus: true})
    }

    focusOutHandler = () => {
        this.setState({focus: false})
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.updateCompany(this.props.company.id, this.state)
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
                        <Button color="blue">Update Notes</Button>
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
        updateCompany: (companyId, updateObj) => dispatch(updateCompany(companyId, updateObj))
    }
}
export default connect(null, mdp)(NotesCard);