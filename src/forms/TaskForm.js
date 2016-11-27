/**
 * Created by vazovojoleg on 11/27/16.
 */
import React, {Component} from 'react';
import './email.css';

export class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.name !== '') {
            this.props.AddTask(this.state.name);
            this.setState({error: ''})
        } else {
            this.setState({error: 'error'})
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        className={this.state.error}
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}