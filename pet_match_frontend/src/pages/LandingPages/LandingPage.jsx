import React from 'react';
import { Link } from 'react-router-dom';
import { Page, Welcome, SI } from './LandingPage.styled';


const LandingPage = () => {
  return (
    <Page>
      <Welcome>
        Start matching with pets in your area today!
      </Welcome>
      <Link to='/sign-up'>
        <button className='button-dark'>
          SIGN UP
        </button>
      </Link>
      <SI>
        Already have an account?
        <Link className='link' to='/sign-in'>
          &nbsp; Sign in.
        </Link>
      </SI>
    </Page>
  )
}

export default LandingPage
