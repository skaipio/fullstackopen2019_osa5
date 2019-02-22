import React, { useState } from 'react'

const blogStyle = {
  padding: '0.5em',
  border: '1px solid grey',
  cursor: 'pointer'
}

const Blog = ({ blog }) => {
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
      <div>{blog.likes} likes <button>like</button></div>
      {blog.user ? <div>added by {blog.user.name}</div> : null}
    </div>
  )

  return expanded ? expandedBlog() : compactBlog()
}

export default Blog
