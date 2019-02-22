import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('renders title, author and likes', () => {
  const blog = {
    title: 'This is a blog title',
    author: 'Author',
    likes: 100
  }

  const component = render(<SimpleBlog blog={blog} />)

  const titleDiv = component.container.querySelector('.blog-title')

  expect(titleDiv).toHaveTextContent('This is a blog title')

  expect(titleDiv).toHaveTextContent('Author')

  const likesDiv = component.container.querySelector('.blog-likes')
  expect(likesDiv).toHaveTextContent('100')
})
