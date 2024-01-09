import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo,removeTodo } from '../todoSlice'

function TodoList() {

    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()

    const handleToggle = (id) => {
        dispatch(toggleTodo(id))
    }

    const handleRemove = (id) => {
        dispatch(removeTodo(id))
    }

  return (
    <div>
        <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => handleRemove(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default TodoList