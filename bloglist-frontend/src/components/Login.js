import React from 'react'
import { useField } from '../hooks/useField'

const Login = ({ handleLogin }) => {
  const username = useField('text')
  const password = useField('password')

  const submit = event => {
    event.preventDefault()
    handleLogin(username.value, password.value)
  }

  return (
    <>
      <h2>Log in to application</h2>
      <form onSubmit={submit} className="login-form">
        <div>
          <label>käyttäjätunnus</label>
          <input {...username} />
        </div>
        <div>
          <label>salasana</label>
          <input {...password} />
        </div>
        <div>
          <button type="submit">kirjaudu</button>
        </div>
      </form>
    </>
  )
}

export default Login
