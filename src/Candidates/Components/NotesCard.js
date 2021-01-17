import React, { Component } from 'react'
import { connect } from 'react-redux'
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
                <form onSubmit={this.submitHandler}>
                    <input type="textarea" value={this.state.notes} name="notes" onChange={this.changeHandler} />
                    <button>Update Note</button>
                </form>
                
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