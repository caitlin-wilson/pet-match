import React from 'react';
import { Page } from './FormPages.styled';
import UserAPI from '../../APIs/UserAPI';


const SignUpPage = (props) => {

  const handleSignUp = async (event) => {
    try {
      event.preventDefault()
      let password
      if (event.target[3].value === event.target[4].value) {
        password = event.target[4].value
      } else {
        alert('passwords do not match!')
        return
      }
      const userObject = {
        'first_name': event.target[0].value,
        'last_name': event.target[1].value,
        'email': event.target[2].value,
        'password': password,
      }
      const response = await UserAPI.addUser(userObject)
      console.log(response)
      const data = await response.json()
      if (data.error) {
        console.error('ERROR SENDING DATA FROM SIGN UP FORM')
      } else {
        props.history.push('/sign-in')
      }
    } catch (error) {
      console.error('ERROR WITH ADD USER API REQUEST', error)
    }
  }

  return (
    <form onSubmit={handleSignUp}>
      <Page>
        <label name='firstName'>First Name</label>
        <input type='text'></input>
        <label name='lastName'>Last Name</label>
        <input type='text'></input>
        <label name='email'>Email Address</label>
        <input type='text'></input>
        <label name='password'>Password</label>
        <input type='password'></input>
        <label name='password2'>Confirm Password</label>
        <input type='password'></input>

        <input className='submit' type='submit' value='SIGN UP'></input>
      </Page>
    </form>
  )
}

export default SignUpPage
