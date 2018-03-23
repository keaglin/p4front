import React, { Component } from 'react'
import PostList from './PostList'
import axios from 'axios'

class PostContainer extends Component {
  state = {
    posts: [
      {
        title: 'gold player looking for arena mates',
        content: 'must have mic, all are welcome, no politics',
        comments: [
          {
            content: 'yo I got a mic!',
            posted_by: 'baadman',
          }
        ],
        created_by: 'playerunKnown',
      },
      {
        title: 'division anybody? lf2m',
        content: 'down for whatever, just looking to have fun and win if possible',
        comments: [
          {
            content: 'ayooo get me gt: datbwoycold',
            posted_by: 'datbwoycold',
          },
          {
            content: 'I\'m always ready to win! gt: greenbrainchild',
            posted_by: 'greenbrainchild'
          }
        ],
        created_by: 'hometownhero',
      },
      {
        title: 'lfm',
        content: 'Looking for players to join me and play squad. Message me to join. Must have a mic. Viscous Duck',
        comments: [
          {
            content: '',
            posted_by: '',
          }
        ],
        created_by: 'viscous duck',
      },
    ]
  }

  // componentDidMount() {
  //   axios.get('http://localhost:8000/api/')
  //   .then(response => this.setState({posts: response.data}))
  // }

  render () {
    let posts = this.state.posts
    return (
      <PostList posts={posts} />
    )
  }
}

export default PostContainer