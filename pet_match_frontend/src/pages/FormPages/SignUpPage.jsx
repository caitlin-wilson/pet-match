import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from './FormPages.styled';


const SignUpPage = () => {
  return (

    <form>
      <Page>
        <label for='first-name'>First Name</label>
        <input type='text'></input>
        <label for='last-name'>Last Name</label>
        <input type='text'></input>
        <label for='email'>Email Address</label>
        <input type='text'></input>
        <label for='password'>Password</label>
        <input type='password'></input>
        <label for='password2'>Confirm Password</label>
        <input type='password'></input>
        <label for='zip-code'>Zip Code</label>
        <input type='text'></input>
        <Link to='/sign-in'>
          <input className='submit' type='submit' value='SIGN UP'></input>
        </Link>
      </Page>
    </form>
  )
}

export default SignUpPage
