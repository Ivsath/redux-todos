import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
} from '../actions/todos'
import List from './List'

export default function Todos() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const input = useRef('')

  const addItem = (e) => {
    e.preventDefault()

    dispatch(
      handleAddTodo(input.current.value, () => (input.current.value = '')),
    )
  }

  const removeItem = (todo) => dispatch(handleDeleteTodo(todo))

  const toggleItem = (id) => dispatch(handleToggleTodo(id))

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Add Todo" ref={input} />
      <button type="button" onClick={addItem}>
        Add Todo
      </button>
      <List items={todos} remove={removeItem} toggle={toggleItem} />
    </div>
  )
}
