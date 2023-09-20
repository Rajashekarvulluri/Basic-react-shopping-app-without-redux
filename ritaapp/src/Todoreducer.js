import React, { useState, useReducer } from 'react';

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

function todoReducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
}

function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [task, setTask] = useState('');

    const addTodo = () => {

        const todo = {
            text: task,
        };

        dispatch({ type: ADD_TODO, payload: todo });
        setTask('');
    };

    const removeTodo = (id) => { 
        dispatch({ type: REMOVE_TODO, payload: id });
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                placeholder="Add a new todo"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

// if (newTodo.trim() === '') return;