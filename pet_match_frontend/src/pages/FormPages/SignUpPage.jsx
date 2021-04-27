import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserAPI from '../../APIs/UserAPI';
import { Page } from './FormPages.styled';


const SignUpPage = () => {
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      let password = ''

      if (event.target[2].value === event.target[3].value) {
        password = event.target[2].value
      } else {
        alert('Passwords do not match.')
      }
      const newUserObject = {
        username: event.target[0].value,
        email: event.target[1].value,
        password: password,
      }
      const request = await UserAPI.createUser(newUserObject)
      setRedirect(true)
      return request
    } catch (error) {
      console.error('ERROR WITH SIGN UP REQUEST', error)
    }
  }
  const renderForm = () => {
    if (redirect) {
      return <Redirect to='/sign-in' />
    }
    return (
      <form onSubmit={handleSubmit}>
        <Page>
          <label value='username'>Username</label>
          <input type='text'></input>
          <label value='email'>Email Address</label>
          <input type='text'></input>
          <label value='password'>Password</label>
          <input type='password'></input>
          <label value='password2'>Confirm Password</label>
          <input type='password'></input>
          <input className='submit' type='submit' value='SIGN UP'></input>
        </Page>
      </form>
    )
  }
  // Call conditional rendering function
  return (
    <div>
      {renderForm()}
    </div>
  )
}

export default SignUpPage
