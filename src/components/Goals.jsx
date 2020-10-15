import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { handleAddGoal, handleDeleteGoal } from '../actions/goals'
import List from './List'

export default function Goals() {
  const goals = useSelector((state) => state.goals)
  const dispatch = useDispatch()
  const input = useRef('')

  const addItem = (e) => {
    e.preventDefault()

    dispatch(
      handleAddGoal(input.current.value, () => (input.current.value = '')),
    )
  }

  const removeItem = (goal) => dispatch(handleDeleteGoal(goal))

  return (
    <div>
      <h1>Goals List</h1>
      <input type="text" placeholder="Add Goal" ref={input} />
      <button type="button" onClick={addItem}>
        Add Goal
      </button>
      <List items={goals} remove={removeItem} />
    </div>
  )
}
