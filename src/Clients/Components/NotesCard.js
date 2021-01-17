import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateCompany} from '../../Redux/companies/actions'

class NotesCard extends Component {

    state = {
        notes: this.props.notes
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.updateCompany(this.props.company.id, this.state)
    }

    render() {
        return (
            <div>
                <h3>Notes</h3>
                <form onSubmit={this.submitHandler}>
                    <input type="textarea" value={this.state.notes} name="notes" onChange={this.changeHandler} />
                    <button>Update Notes</button>
                </form>
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