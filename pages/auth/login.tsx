import React from 'react'
import GoogleLogin from '../../components/GoogleLogin'

function Login() {
  return (
    <div
      style={{
        display: 'flex',
        height: '70vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <GoogleLogin />
    </div>
  )
}

export default Login
