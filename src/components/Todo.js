import './Todo.css';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Todo extends Component {
    todo = this.props.todo;

    getStyle = () => {
        return {
            textDecoration: this.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;

        return (
            <div className="todo">
                <div>
                    <input 
                        type="checkbox" 
                        checked={completed}
                        onChange={this.props.markComplete.bind(this, id)} />
                    <span className="todo--title" style={this.getStyle()}>{ title }</span>
                </div>
                <div className="close-btn" onClick={this.props.deleteTodo.bind(this, id)}>&times;</div>
            </div>
        )
    }
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todo
