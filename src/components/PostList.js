import React, { Component } from 'react'

const PostList = (props) => {
  let posts = props.posts
  return (
    <div>
      {
        posts.map((post, index) => {
          return <li key={index}>{post.title}</li>
        })
      }
    </div>
  )
}

export default PostList