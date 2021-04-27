import React, { useState } from 'react';
import { Page } from './FormPages.styled';


const SignUpPage = ({ handleLogin }) => {
  const [userInfo, setUserInfo] = useState({})

  const verifyUser = (event) => {
    event.preventDefault()
    setUserInfo({
      email: event.target[0].value,
      password: event.target[1].value
    })
  }

  return (
    <form onSubmit={() => handleLogin(userInfo)}>
      <Page>
        <label value='email'>Email Address</label>
        <input type='text'></input>
        <label value='password'>Password</label>
        <input type='password'></input>
        <input className='submit' type='submit' value='SIGN IN'></input>
      </Page>
    </form>
  )
}

export default SignUpPage