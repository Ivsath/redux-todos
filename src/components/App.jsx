import React from 'react'
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'
import ConnectedGoals from './Goals'
import ConnectedTodos from './Todos'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { loading } = this.props

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
}

export default connect((state) => ({
  loading: state.loading,
}))(App)
