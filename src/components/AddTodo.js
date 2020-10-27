import './AddTodo.css';

import PropType from 'prop-types';
import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ title: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input type="text" className="add-input" name="title" value={this.state.title} onChange={this.onChange} placeholder="What you wanna do?" autoComplete="off" />
                <input type="submit" className="add-submit" value="Add" />
            </form>
        )
    }
}

AddTodo.propType = {
    addTodo: PropType.func.isRequired
}

export default AddTodo
