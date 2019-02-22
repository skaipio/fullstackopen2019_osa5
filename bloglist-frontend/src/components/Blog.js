import React, { useState } from 'react'

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

  const expandedBlog = () => (
    <div onClick={toggleExpanded} style={blogStyle}>
      {blogTitleWithAuthor()}
      <div>{blog.url}</div>
      <div>{blog.likes} likes <button onClick={() => onLike(blog)}>like</button></div>
      {blog.user ? <div>added by {blog.user.name}</div> : null}
      <button onClick={() => onRemove(blog)}>remove</button>
    </div>
  )

  return expanded ? expandedBlog() : compactBlog()
}

export default Blog
