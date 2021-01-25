import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'

export default class ApplicationSearchForm extends Component {

    changeHandler = (e, data) => {
        this.props.changeHandler(data.value)
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Field control={Input} label="Search By Application Color" placeholder="Search By Color" type="text" name="color" value={this.props.searchedValue} onChange={this.changeHandler} />
                    {/* <Button color='blue'>Submit</Button> */}
                </Form>
            </div>
        )
    }
}
