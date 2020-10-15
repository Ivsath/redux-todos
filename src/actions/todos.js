import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

export function handleAddTodo(name, callback) {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((todo) => {
        dispatch(addTodo(todo))
        callback()
      })
      .catch(() => alert('An error ocurred. Tty again later.'))
  }
}

export function handleToggleTodo(id) {
  return (dispatch) => {
    dispatch(toggleTodo(id))

    return API.saveTodoToggle(id).catch(() => {
      dispatch(toggleTodo(id))
      alert('An error ocurred. Try again later.')
    })
  }
}

export function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id))

    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo))
      alert('An error ocurred. Try again later.')
    })
  }
}
