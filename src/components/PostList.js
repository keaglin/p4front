import React, { Component } from 'react'
import styled from 'react-emotion'

const PostList = (props) => {
  const Li = styled.li`
    list-style: none
  `
  let posts = props.posts
  return (
    <div>
      <ul>
        {
          posts.map((post, index) => {
            return <Li key={index}>{post.title}</Li>
          })
        }
      </ul>
    </div>
  )
}

export default PostList