import React from 'react'
import { 
  render, waitForElement 
} from 'react-testing-library'
jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {
  it('if no user logged, blogs are not rendered', async () => {
    let component

    component = render(
      <App />
    )

    await waitForElement(
      () => component.getByText('kirjaudu')
    ) 

    const blogList = component.container.querySelector('.blog-list')
    expect(blogList).toBe(null)
    let blog = component.container.querySelector('.compact-blog')
    expect(blog).toBe(null)
    blog = component.container.querySelector('.expanded-blog')
    expect(blog).toBe(null)

    const loginForm = component.container.querySelector('.login-form')
    expect(loginForm).toBeDefined()
  })
})