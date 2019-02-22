import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submit = event => {
    event.preventDefault()
    handleLogin(username, password)
    setUsername('')
    setPassword('')
  }

  return (
    <>
      <h2>Log in to application</h2>
      <form onSubmit={submit}>
        <div>
          <label>käyttäjätunnus</label>
          <input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label>salasana</label>
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">kirjaudu</button>
        </div>
      </form>
    </>
  )
}

export default Login
