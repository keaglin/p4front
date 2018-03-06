import React, { Component } from 'react'
import PostList from './PostList'
import axios from 'axios'

class PostContainer extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/')
    .then(response => this.setState({posts: response.data}))
  }

  render () {
    let posts = this.state.posts
    return (
      <PostList posts={posts} />
    )
  }
}

export default PostContainer