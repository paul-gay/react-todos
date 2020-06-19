import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

class Todos extends Component {
    render() {

        return this.props.todos.map((todo) => (
            // todo being passed into TodoItem as a prop
            // loops create new lists -- lists need unique keys
            <TodoItem key={todo.id} todo={todo}/>
        ))
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
