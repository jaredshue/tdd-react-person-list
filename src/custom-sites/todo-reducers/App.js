import React, { useEffect, useReducer, useRef } from 'react';
import './App.css';

const initialState = [
  {id: 1, name: 'let the good times roll', complete: false}
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO' : {
      return (action.name.length) ? [...state, {
        id: state.length? Math.max(...state.map(todo => todo.id)) + 1 : 0,
        name: action.name,
        complete: false
      }]
      : state
    }
    case 'TOGGLE_COMPLETE': {
      return state.map(item => item.id === action.id ? { ...item, complete: !item.complete } : item)
    }
    case 'REMOVE_TODO': {
        return state.filter(item => item.id !== action.id);
    }
    case 'CLEAR_TODOS': {
        return [];
    }
    default: {
      return state;
    }
  }
}
const App = () => {
  const inputRef = useRef()
  const [ todos, dispatch ] = useReducer(todoReducer, initialState)
  const completedTodos = todos.filter(todo => todo.complete)

  useEffect(() => document.title = `${completedTodos.length} todos completed today!`)

  function addTodo(event) {
    event.preventDefault()
    dispatch({
      type: 'ADD_TODO',
      name: inputRef.current.value,
      complete: false
    })
    inputRef.current.value = ''
  }

  function toggleComplete(id) {
    dispatch({ type: 'TOGGLE_COMPLETE', id })
  }

  function removeTodo(id) {
      dispatch({ type: 'REMOVE_TODO', id })
  }

  function clearTodos() {
      dispatch({ type: 'CLEAR_TODOS' })
  }

  return (
    <>
      <div className="todo-input">
        <form onSubmit={addTodo}>
          <input ref={inputRef} type="search" id="add-todo" placeholder="Add Todo..." />
        </form>
      </div>
      <div className="column-container">
        {todos.map((todo) => (
          <div key={todo.id} alt={todo.id} className={`column-item ${todo.complete ? 'completed': null}`}>
            <div className="flex-container">
              <div className="todo-name" onClick={() => toggleComplete(todo.id)}>{todo.name}</div>
              <div className="todo-delete" onClick={() => removeTodo(todo.id)}>&times;</div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={clearTodos}>
        CLEAR TODOS
      </button>
    </>
  );
}

export default App;
