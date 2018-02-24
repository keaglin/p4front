import React, { Component } from 'react'
// import './App.css'
import axios from 'axios'

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api')
    .then(response => this.setState({posts: response.data}))
  }
  render() {
    let posts = this.state.posts
    return (
      <div className="App">
        <header></header>
        <main>
          <h1>Hello world</h1>
          <h2><marquee>🔥🔥Fire Code🔥🔥</marquee></h2>
          {
            posts.map((post, index) => {
              return <li key={index}>{post.title}</li>
            })
          }
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App
