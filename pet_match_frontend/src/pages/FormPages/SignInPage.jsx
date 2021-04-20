import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from './FormPages.styled';


const SignUpPage = () => {
  return (

    <form>
      <Page>
        <label for='email'>Email Address</label>
        <input type='text'></input>
        <label for='password'>Password</label>
        <input type='password'></input>
        <Link to='/profile'>
          <input className='submit' type='submit' value='SIGN IN'></input>
        </Link>
      </Page>
    </form>
  )
}

export default SignUpPage