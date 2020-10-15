import { ADD_GOAL } from '../actions/goals'
import { ADD_TODO } from '../actions/todos'

// eslint-disable-next-line
const checker = (store) => (next) => (action) => {
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().indexOf('bitcoin') !== -1
  ) {
    return alert("Nope. That's a bad idea.")
  }

  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().indexOf('run') !== -1
  ) {
    return alert("Nope. That's a bad idea.")
  }

  return next(action)
}

export default checker
