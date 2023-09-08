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



// TodoList.js
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addTodo, toggleTodo, removeTodo } from './todoSlice';

// function TodoList() {
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();
//   const [newTodo, setNewTodo] = useState('');

//   const handleAddTodo = () => {
//     if (newTodo.trim() === '') return;
//     dispatch(addTodo(newTodo));
//     setNewTodo('');
//   };

//   const handleToggleTodo = (id) => {
//     dispatch(toggleTodo(id));
//   };

//   const handleRemoveTodo = (id) => {
//     dispatch(removeTodo(id));
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <input
//         type="text"
//         placeholder="Add a new todo"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//       />
//       <button onClick={handleAddTodo}>Add</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => handleToggleTodo(todo.id)}
//             />
//             <span>{todo.text}</span>
//             <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;






// if (newTodo.trim() === '') return;