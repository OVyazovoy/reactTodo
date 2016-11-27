import React, {Component} from 'react';
import './App.css';
import {TaskForm} from './forms/TaskForm';
import {NameList} from './list/NameList'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                'oleg',
                'oleg',
                'oleg',
                'oleg'
            ]
        };
    }

    AddTask(name) {
        this.setState({names: this.state.names.concat([name])});
    }

    changeName(name, key) {
        let newNames = this.state.names;
        newNames[key] = name;
        this.setState(newNames)
    }

    render() {
        return (
            <div className="App">
                <TaskForm
                    AddTask={this.AddTask.bind(this)}
                />
                <NameList
                    names={this.state.names}
                    changeName={this.changeName.bind(this)}
                />
            </div>
        );
    }
}

export default App;
