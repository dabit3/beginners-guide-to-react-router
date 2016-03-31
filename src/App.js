import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'

const Home = () => <h1>Hello World!!</h1>

class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
      </Router>
    )
  }
}

export default App
