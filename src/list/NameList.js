/**
 * Created by vazovojoleg on 11/27/16.
 */
import React, { Component } from 'react';

export class NameList extends  Component {
    render() {
        var rows = [];
        this.props.names.forEach((name, id) => {
            rows.push(
                <NameRow
                    name={name} key={id} id={id}
                    changeName={this.props.changeName}
                />
            );
        });
        return (
            <ul>{rows}</ul>
        );
    }
}
class NameRow extends Component {
    constructor(props){
        super(props);
        this.state = {name:this.props.name}
    }
    nameEdit(e){
        this.setState({name: e.target.value});
        this.props.changeName(this.state.name, this.props.id);
    }
    render() {
        return (
            <li>
                {this.state.name}
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.nameEdit.bind(this)}
                />
            </li>
        )
    }
}