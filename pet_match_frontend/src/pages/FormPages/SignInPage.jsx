import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserAPI from '../../APIs/UserAPI';
import { Page } from './FormPages.styled';


const SignUpPage = () => {
  const [redirect, setRedirect] = useState(false)

  const handleLogin = async (event) => {
    try {
      event.preventDefault()
      const userObj = {
        username: event.target[0].value,
        password: event.target[1].value
      }
      const response = await UserAPI.signInUser(userObj)
      const data = await response.json()

      if (data.token) {
        localStorage.setItem('auth-user', `${data.token}`)
        setRedirect(true)
      }

    } catch (error) {
      console.error('ERROR SIGNING USER IN', error)
    }
  }

  const renderForm = () => {
    if (redirect) {
      return <Redirect to='/profile' />
    }
    return (
      <form onSubmit={handleLogin}>
        <Page>
          <label value='username'>Username</label>
          <input type='text'></input>
          <label value='password'>Password</label>
          <input type='password'></input>
          <input className='submit' type='submit' value='SIGN IN'></input>
        </Page>
      </form>
    )
  }
  return (
    <div>
      {renderForm()}
    </div>
  )
}

export default SignUpPage