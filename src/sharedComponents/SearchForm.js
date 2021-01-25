import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'

export default class SearchForm extends Component {
    state = {
        name: ''
    }

    changeHandler = (e) => {
        this.props.changeHandler(e.target.value)
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Field fluid control={Input} label={this.props.label} type="text" name="name" placeholder="Search By Name" value={this.props.searchValue} onChange={this.changeHandler} />
                </Form>
            </div>
        )
    }
}
