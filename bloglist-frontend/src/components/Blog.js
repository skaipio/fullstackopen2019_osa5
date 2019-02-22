import React, { useState } from 'react'
import loginService from '../services/login'

const blogStyle = {
  padding: '0.5em',
  border: '1px solid grey',
  cursor: 'pointer'
}

const Blog = ({ blog, onLike, onRemove }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)
  
  const blogTitleWithAuthor = () => (
    <div>
      {blog.title} {blog.author}
    </div>
  )

  const compactBlog = () => (
    <div onClick={toggleExpanded} style={blogStyle}>
      {blogTitleWithAuthor()}
    </div>
  )

  const removeButton = () => 
    <button onClick={() => onRemove(blog)}>remove</button>
  

  const expandedBlog = () => (
    <div onClick={toggleExpanded} style={blogStyle}>
      {blogTitleWithAuthor()}
      <div>{blog.url}</div>
      <div>{blog.likes} likes <button onClick={() => onLike(blog)}>like</button></div>
      {blog.user ? <div>added by {blog.user.name}</div> : null}
      {blog.user && blog.user.username === loginService.getUser().username && removeButton()}
    </div>
  )

  return expanded ? expandedBlog() : compactBlog()
}

export default Blog
