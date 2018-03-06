import React, { Component } from 'react'
// import '../css/App.css'
import axios from 'axios'
import PostContainer from './PostContainer'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><h1>Got Game?</h1></header>
        <main>
          <Switch>
            <PostContainer />
          </Switch>
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App
