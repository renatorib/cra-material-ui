import React, { Component } from 'react'
import { Router } from 'react-router-dom'

import Root from './Root'
import routes from './routes'

class App extends Component {
  render() {
    return <Root routes={routes} />
  }
}

export default App
