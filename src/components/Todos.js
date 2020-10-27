import axios from 'axios';
import React, { Component } from 'react';

import AddTodo from './AddTodo';
import Todo from './Todo';

export class Todos extends Component {
    state = {
        todos: []
    }
    
    markComplete = (id) => {
        this.setState({ 
            todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
            }) 
        })
    }

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        }).then(res => {
            this.setState({
                todos: [...this.state.todos, res.data]
            })
        });
    }

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(res => this.setState({ todos: res.data }));
    }

    render() {
        return (
        <React.Fragment>
            <AddTodo addTodo={this.addTodo} />
            <div>
                {
                    this.state.todos.map((todo) => 
                        <Todo key={todo.id} todo={todo} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
                    )
                }
            </div>
        </React.Fragment>
        )
    }
}

export default Todos
