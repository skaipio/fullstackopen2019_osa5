import React from 'react'

const Notification = ({ text, type }) => {
  const successStyle = {
    border: '2px solid green',
    backgroundColor: '#e0ffd5',
    padding: '1em'
  }

  const errorStyle = {
    border: '2px solid red',
    backgroundColor: '#f1cccc',
    padding: '1em'
  }

  return (
    <div style={type === 'error' ? errorStyle : successStyle} className={{ success: type === 'success', error: type === 'error' }}>
      {text}
    </div>
  )
}

export default Notification
