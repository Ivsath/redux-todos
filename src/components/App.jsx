import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { handleInitialData } from '../actions/shared'
import ConnectedGoals from './Goals'
import ConnectedTodos from './Todos'

export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading)

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <ConnectedTodos />
      <ConnectedGoals />
    </div>
  )
}
